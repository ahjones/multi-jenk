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
var or__3548__auto____298175 = (p[goog.typeOf.call(null,x)]);

if(cljs.core.truth_(or__3548__auto____298175))
{return or__3548__auto____298175;
} else
{var or__3548__auto____298176 = (p["_"]);

if(cljs.core.truth_(or__3548__auto____298176))
{return or__3548__auto____298176;
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
var _invoke__298240 = (function (this$){
if(cljs.core.truth_((function (){var and__3546__auto____298177 = this$;

if(cljs.core.truth_(and__3546__auto____298177))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____298177;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$);
} else
{return (function (){var or__3548__auto____298178 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298178))
{return or__3548__auto____298178;
} else
{var or__3548__auto____298179 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____298179))
{return or__3548__auto____298179;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$);
}
});
var _invoke__298241 = (function (this$,a){
if(cljs.core.truth_((function (){var and__3546__auto____298180 = this$;

if(cljs.core.truth_(and__3546__auto____298180))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____298180;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a);
} else
{return (function (){var or__3548__auto____298181 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298181))
{return or__3548__auto____298181;
} else
{var or__3548__auto____298182 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____298182))
{return or__3548__auto____298182;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a);
}
});
var _invoke__298242 = (function (this$,a,b){
if(cljs.core.truth_((function (){var and__3546__auto____298183 = this$;

if(cljs.core.truth_(and__3546__auto____298183))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____298183;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b);
} else
{return (function (){var or__3548__auto____298184 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298184))
{return or__3548__auto____298184;
} else
{var or__3548__auto____298185 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____298185))
{return or__3548__auto____298185;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b);
}
});
var _invoke__298243 = (function (this$,a,b,c){
if(cljs.core.truth_((function (){var and__3546__auto____298186 = this$;

if(cljs.core.truth_(and__3546__auto____298186))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____298186;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c);
} else
{return (function (){var or__3548__auto____298187 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298187))
{return or__3548__auto____298187;
} else
{var or__3548__auto____298188 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____298188))
{return or__3548__auto____298188;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c);
}
});
var _invoke__298244 = (function (this$,a,b,c,d){
if(cljs.core.truth_((function (){var and__3546__auto____298189 = this$;

if(cljs.core.truth_(and__3546__auto____298189))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____298189;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d);
} else
{return (function (){var or__3548__auto____298190 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298190))
{return or__3548__auto____298190;
} else
{var or__3548__auto____298191 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____298191))
{return or__3548__auto____298191;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d);
}
});
var _invoke__298245 = (function (this$,a,b,c,d,e){
if(cljs.core.truth_((function (){var and__3546__auto____298192 = this$;

if(cljs.core.truth_(and__3546__auto____298192))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____298192;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e);
} else
{return (function (){var or__3548__auto____298193 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298193))
{return or__3548__auto____298193;
} else
{var or__3548__auto____298194 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____298194))
{return or__3548__auto____298194;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e);
}
});
var _invoke__298246 = (function (this$,a,b,c,d,e,f){
if(cljs.core.truth_((function (){var and__3546__auto____298195 = this$;

if(cljs.core.truth_(and__3546__auto____298195))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____298195;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f);
} else
{return (function (){var or__3548__auto____298196 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298196))
{return or__3548__auto____298196;
} else
{var or__3548__auto____298197 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____298197))
{return or__3548__auto____298197;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f);
}
});
var _invoke__298247 = (function (this$,a,b,c,d,e,f,g){
if(cljs.core.truth_((function (){var and__3546__auto____298198 = this$;

if(cljs.core.truth_(and__3546__auto____298198))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____298198;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g);
} else
{return (function (){var or__3548__auto____298199 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298199))
{return or__3548__auto____298199;
} else
{var or__3548__auto____298200 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____298200))
{return or__3548__auto____298200;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g);
}
});
var _invoke__298248 = (function (this$,a,b,c,d,e,f,g,h){
if(cljs.core.truth_((function (){var and__3546__auto____298201 = this$;

if(cljs.core.truth_(and__3546__auto____298201))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____298201;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h);
} else
{return (function (){var or__3548__auto____298202 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298202))
{return or__3548__auto____298202;
} else
{var or__3548__auto____298203 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____298203))
{return or__3548__auto____298203;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h);
}
});
var _invoke__298249 = (function (this$,a,b,c,d,e,f,g,h,i){
if(cljs.core.truth_((function (){var and__3546__auto____298204 = this$;

if(cljs.core.truth_(and__3546__auto____298204))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____298204;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i);
} else
{return (function (){var or__3548__auto____298205 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298205))
{return or__3548__auto____298205;
} else
{var or__3548__auto____298206 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____298206))
{return or__3548__auto____298206;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i);
}
});
var _invoke__298250 = (function (this$,a,b,c,d,e,f,g,h,i,j){
if(cljs.core.truth_((function (){var and__3546__auto____298207 = this$;

if(cljs.core.truth_(and__3546__auto____298207))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____298207;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j);
} else
{return (function (){var or__3548__auto____298208 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298208))
{return or__3548__auto____298208;
} else
{var or__3548__auto____298209 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____298209))
{return or__3548__auto____298209;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j);
}
});
var _invoke__298251 = (function (this$,a,b,c,d,e,f,g,h,i,j,k){
if(cljs.core.truth_((function (){var and__3546__auto____298210 = this$;

if(cljs.core.truth_(and__3546__auto____298210))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____298210;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k);
} else
{return (function (){var or__3548__auto____298211 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298211))
{return or__3548__auto____298211;
} else
{var or__3548__auto____298212 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____298212))
{return or__3548__auto____298212;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
}
});
var _invoke__298252 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l){
if(cljs.core.truth_((function (){var and__3546__auto____298213 = this$;

if(cljs.core.truth_(and__3546__auto____298213))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____298213;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l);
} else
{return (function (){var or__3548__auto____298214 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298214))
{return or__3548__auto____298214;
} else
{var or__3548__auto____298215 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____298215))
{return or__3548__auto____298215;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
}
});
var _invoke__298253 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m){
if(cljs.core.truth_((function (){var and__3546__auto____298216 = this$;

if(cljs.core.truth_(and__3546__auto____298216))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____298216;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
} else
{return (function (){var or__3548__auto____298217 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298217))
{return or__3548__auto____298217;
} else
{var or__3548__auto____298218 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____298218))
{return or__3548__auto____298218;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
}
});
var _invoke__298254 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
if(cljs.core.truth_((function (){var and__3546__auto____298219 = this$;

if(cljs.core.truth_(and__3546__auto____298219))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____298219;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
} else
{return (function (){var or__3548__auto____298220 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298220))
{return or__3548__auto____298220;
} else
{var or__3548__auto____298221 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____298221))
{return or__3548__auto____298221;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
}
});
var _invoke__298255 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
if(cljs.core.truth_((function (){var and__3546__auto____298222 = this$;

if(cljs.core.truth_(and__3546__auto____298222))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____298222;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
} else
{return (function (){var or__3548__auto____298223 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298223))
{return or__3548__auto____298223;
} else
{var or__3548__auto____298224 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____298224))
{return or__3548__auto____298224;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
}
});
var _invoke__298256 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
if(cljs.core.truth_((function (){var and__3546__auto____298225 = this$;

if(cljs.core.truth_(and__3546__auto____298225))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____298225;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
} else
{return (function (){var or__3548__auto____298226 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298226))
{return or__3548__auto____298226;
} else
{var or__3548__auto____298227 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____298227))
{return or__3548__auto____298227;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
}
});
var _invoke__298257 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
if(cljs.core.truth_((function (){var and__3546__auto____298228 = this$;

if(cljs.core.truth_(and__3546__auto____298228))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____298228;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
} else
{return (function (){var or__3548__auto____298229 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298229))
{return or__3548__auto____298229;
} else
{var or__3548__auto____298230 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____298230))
{return or__3548__auto____298230;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
}
});
var _invoke__298258 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s){
if(cljs.core.truth_((function (){var and__3546__auto____298231 = this$;

if(cljs.core.truth_(and__3546__auto____298231))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____298231;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
} else
{return (function (){var or__3548__auto____298232 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298232))
{return or__3548__auto____298232;
} else
{var or__3548__auto____298233 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____298233))
{return or__3548__auto____298233;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
}
});
var _invoke__298259 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t){
if(cljs.core.truth_((function (){var and__3546__auto____298234 = this$;

if(cljs.core.truth_(and__3546__auto____298234))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____298234;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
} else
{return (function (){var or__3548__auto____298235 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298235))
{return or__3548__auto____298235;
} else
{var or__3548__auto____298236 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____298236))
{return or__3548__auto____298236;
} else
{throw cljs.core.missing_protocol.call(null,"IFn.-invoke",this$);
}
}
})().call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
}
});
var _invoke__298260 = (function (this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest){
if(cljs.core.truth_((function (){var and__3546__auto____298237 = this$;

if(cljs.core.truth_(and__3546__auto____298237))
{return this$.cljs$core$IFn$_invoke;
} else
{return and__3546__auto____298237;
}
})()))
{return this$.cljs$core$IFn$_invoke(this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
} else
{return (function (){var or__3548__auto____298238 = (cljs.core._invoke[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298238))
{return or__3548__auto____298238;
} else
{var or__3548__auto____298239 = (cljs.core._invoke["_"]);

if(cljs.core.truth_(or__3548__auto____298239))
{return or__3548__auto____298239;
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
return _invoke__298240.call(this,this$);
case  2 :
return _invoke__298241.call(this,this$,a);
case  3 :
return _invoke__298242.call(this,this$,a,b);
case  4 :
return _invoke__298243.call(this,this$,a,b,c);
case  5 :
return _invoke__298244.call(this,this$,a,b,c,d);
case  6 :
return _invoke__298245.call(this,this$,a,b,c,d,e);
case  7 :
return _invoke__298246.call(this,this$,a,b,c,d,e,f);
case  8 :
return _invoke__298247.call(this,this$,a,b,c,d,e,f,g);
case  9 :
return _invoke__298248.call(this,this$,a,b,c,d,e,f,g,h);
case  10 :
return _invoke__298249.call(this,this$,a,b,c,d,e,f,g,h,i);
case  11 :
return _invoke__298250.call(this,this$,a,b,c,d,e,f,g,h,i,j);
case  12 :
return _invoke__298251.call(this,this$,a,b,c,d,e,f,g,h,i,j,k);
case  13 :
return _invoke__298252.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l);
case  14 :
return _invoke__298253.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
case  15 :
return _invoke__298254.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case  16 :
return _invoke__298255.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case  17 :
return _invoke__298256.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case  18 :
return _invoke__298257.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case  19 :
return _invoke__298258.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s);
case  20 :
return _invoke__298259.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t);
case  21 :
return _invoke__298260.call(this,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,s,t,rest);
}
throw('Invalid arity: ' + arguments.length);
};
return _invoke;
})()
;
cljs.core.ICounted = {};
cljs.core._count = (function _count(coll){
if(cljs.core.truth_((function (){var and__3546__auto____298262 = coll;

if(cljs.core.truth_(and__3546__auto____298262))
{return coll.cljs$core$ICounted$_count;
} else
{return and__3546__auto____298262;
}
})()))
{return coll.cljs$core$ICounted$_count(coll);
} else
{return (function (){var or__3548__auto____298263 = (cljs.core._count[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____298263))
{return or__3548__auto____298263;
} else
{var or__3548__auto____298264 = (cljs.core._count["_"]);

if(cljs.core.truth_(or__3548__auto____298264))
{return or__3548__auto____298264;
} else
{throw cljs.core.missing_protocol.call(null,"ICounted.-count",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IEmptyableCollection = {};
cljs.core._empty = (function _empty(coll){
if(cljs.core.truth_((function (){var and__3546__auto____298265 = coll;

if(cljs.core.truth_(and__3546__auto____298265))
{return coll.cljs$core$IEmptyableCollection$_empty;
} else
{return and__3546__auto____298265;
}
})()))
{return coll.cljs$core$IEmptyableCollection$_empty(coll);
} else
{return (function (){var or__3548__auto____298266 = (cljs.core._empty[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____298266))
{return or__3548__auto____298266;
} else
{var or__3548__auto____298267 = (cljs.core._empty["_"]);

if(cljs.core.truth_(or__3548__auto____298267))
{return or__3548__auto____298267;
} else
{throw cljs.core.missing_protocol.call(null,"IEmptyableCollection.-empty",coll);
}
}
})().call(null,coll);
}
});
cljs.core.ICollection = {};
cljs.core._conj = (function _conj(coll,o){
if(cljs.core.truth_((function (){var and__3546__auto____298268 = coll;

if(cljs.core.truth_(and__3546__auto____298268))
{return coll.cljs$core$ICollection$_conj;
} else
{return and__3546__auto____298268;
}
})()))
{return coll.cljs$core$ICollection$_conj(coll,o);
} else
{return (function (){var or__3548__auto____298269 = (cljs.core._conj[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____298269))
{return or__3548__auto____298269;
} else
{var or__3548__auto____298270 = (cljs.core._conj["_"]);

if(cljs.core.truth_(or__3548__auto____298270))
{return or__3548__auto____298270;
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
var _nth__298277 = (function (coll,n){
if(cljs.core.truth_((function (){var and__3546__auto____298271 = coll;

if(cljs.core.truth_(and__3546__auto____298271))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____298271;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n);
} else
{return (function (){var or__3548__auto____298272 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____298272))
{return or__3548__auto____298272;
} else
{var or__3548__auto____298273 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____298273))
{return or__3548__auto____298273;
} else
{throw cljs.core.missing_protocol.call(null,"IIndexed.-nth",coll);
}
}
})().call(null,coll,n);
}
});
var _nth__298278 = (function (coll,n,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____298274 = coll;

if(cljs.core.truth_(and__3546__auto____298274))
{return coll.cljs$core$IIndexed$_nth;
} else
{return and__3546__auto____298274;
}
})()))
{return coll.cljs$core$IIndexed$_nth(coll,n,not_found);
} else
{return (function (){var or__3548__auto____298275 = (cljs.core._nth[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____298275))
{return or__3548__auto____298275;
} else
{var or__3548__auto____298276 = (cljs.core._nth["_"]);

if(cljs.core.truth_(or__3548__auto____298276))
{return or__3548__auto____298276;
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
return _nth__298277.call(this,coll,n);
case  3 :
return _nth__298278.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _nth;
})()
;
cljs.core.ISeq = {};
cljs.core._first = (function _first(coll){
if(cljs.core.truth_((function (){var and__3546__auto____298280 = coll;

if(cljs.core.truth_(and__3546__auto____298280))
{return coll.cljs$core$ISeq$_first;
} else
{return and__3546__auto____298280;
}
})()))
{return coll.cljs$core$ISeq$_first(coll);
} else
{return (function (){var or__3548__auto____298281 = (cljs.core._first[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____298281))
{return or__3548__auto____298281;
} else
{var or__3548__auto____298282 = (cljs.core._first["_"]);

if(cljs.core.truth_(or__3548__auto____298282))
{return or__3548__auto____298282;
} else
{throw cljs.core.missing_protocol.call(null,"ISeq.-first",coll);
}
}
})().call(null,coll);
}
});
cljs.core._rest = (function _rest(coll){
if(cljs.core.truth_((function (){var and__3546__auto____298283 = coll;

if(cljs.core.truth_(and__3546__auto____298283))
{return coll.cljs$core$ISeq$_rest;
} else
{return and__3546__auto____298283;
}
})()))
{return coll.cljs$core$ISeq$_rest(coll);
} else
{return (function (){var or__3548__auto____298284 = (cljs.core._rest[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____298284))
{return or__3548__auto____298284;
} else
{var or__3548__auto____298285 = (cljs.core._rest["_"]);

if(cljs.core.truth_(or__3548__auto____298285))
{return or__3548__auto____298285;
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
var _lookup__298292 = (function (o,k){
if(cljs.core.truth_((function (){var and__3546__auto____298286 = o;

if(cljs.core.truth_(and__3546__auto____298286))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____298286;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k);
} else
{return (function (){var or__3548__auto____298287 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____298287))
{return or__3548__auto____298287;
} else
{var or__3548__auto____298288 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____298288))
{return or__3548__auto____298288;
} else
{throw cljs.core.missing_protocol.call(null,"ILookup.-lookup",o);
}
}
})().call(null,o,k);
}
});
var _lookup__298293 = (function (o,k,not_found){
if(cljs.core.truth_((function (){var and__3546__auto____298289 = o;

if(cljs.core.truth_(and__3546__auto____298289))
{return o.cljs$core$ILookup$_lookup;
} else
{return and__3546__auto____298289;
}
})()))
{return o.cljs$core$ILookup$_lookup(o,k,not_found);
} else
{return (function (){var or__3548__auto____298290 = (cljs.core._lookup[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____298290))
{return or__3548__auto____298290;
} else
{var or__3548__auto____298291 = (cljs.core._lookup["_"]);

if(cljs.core.truth_(or__3548__auto____298291))
{return or__3548__auto____298291;
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
return _lookup__298292.call(this,o,k);
case  3 :
return _lookup__298293.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return _lookup;
})()
;
cljs.core.IAssociative = {};
cljs.core._contains_key_QMARK_ = (function _contains_key_QMARK_(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____298295 = coll;

if(cljs.core.truth_(and__3546__auto____298295))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_;
} else
{return and__3546__auto____298295;
}
})()))
{return coll.cljs$core$IAssociative$_contains_key_QMARK_(coll,k);
} else
{return (function (){var or__3548__auto____298296 = (cljs.core._contains_key_QMARK_[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____298296))
{return or__3548__auto____298296;
} else
{var or__3548__auto____298297 = (cljs.core._contains_key_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____298297))
{return or__3548__auto____298297;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-contains-key?",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core._assoc = (function _assoc(coll,k,v){
if(cljs.core.truth_((function (){var and__3546__auto____298298 = coll;

if(cljs.core.truth_(and__3546__auto____298298))
{return coll.cljs$core$IAssociative$_assoc;
} else
{return and__3546__auto____298298;
}
})()))
{return coll.cljs$core$IAssociative$_assoc(coll,k,v);
} else
{return (function (){var or__3548__auto____298299 = (cljs.core._assoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____298299))
{return or__3548__auto____298299;
} else
{var or__3548__auto____298300 = (cljs.core._assoc["_"]);

if(cljs.core.truth_(or__3548__auto____298300))
{return or__3548__auto____298300;
} else
{throw cljs.core.missing_protocol.call(null,"IAssociative.-assoc",coll);
}
}
})().call(null,coll,k,v);
}
});
cljs.core.IMap = {};
cljs.core._dissoc = (function _dissoc(coll,k){
if(cljs.core.truth_((function (){var and__3546__auto____298301 = coll;

if(cljs.core.truth_(and__3546__auto____298301))
{return coll.cljs$core$IMap$_dissoc;
} else
{return and__3546__auto____298301;
}
})()))
{return coll.cljs$core$IMap$_dissoc(coll,k);
} else
{return (function (){var or__3548__auto____298302 = (cljs.core._dissoc[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____298302))
{return or__3548__auto____298302;
} else
{var or__3548__auto____298303 = (cljs.core._dissoc["_"]);

if(cljs.core.truth_(or__3548__auto____298303))
{return or__3548__auto____298303;
} else
{throw cljs.core.missing_protocol.call(null,"IMap.-dissoc",coll);
}
}
})().call(null,coll,k);
}
});
cljs.core.ISet = {};
cljs.core._disjoin = (function _disjoin(coll,v){
if(cljs.core.truth_((function (){var and__3546__auto____298304 = coll;

if(cljs.core.truth_(and__3546__auto____298304))
{return coll.cljs$core$ISet$_disjoin;
} else
{return and__3546__auto____298304;
}
})()))
{return coll.cljs$core$ISet$_disjoin(coll,v);
} else
{return (function (){var or__3548__auto____298305 = (cljs.core._disjoin[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____298305))
{return or__3548__auto____298305;
} else
{var or__3548__auto____298306 = (cljs.core._disjoin["_"]);

if(cljs.core.truth_(or__3548__auto____298306))
{return or__3548__auto____298306;
} else
{throw cljs.core.missing_protocol.call(null,"ISet.-disjoin",coll);
}
}
})().call(null,coll,v);
}
});
cljs.core.IStack = {};
cljs.core._peek = (function _peek(coll){
if(cljs.core.truth_((function (){var and__3546__auto____298307 = coll;

if(cljs.core.truth_(and__3546__auto____298307))
{return coll.cljs$core$IStack$_peek;
} else
{return and__3546__auto____298307;
}
})()))
{return coll.cljs$core$IStack$_peek(coll);
} else
{return (function (){var or__3548__auto____298308 = (cljs.core._peek[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____298308))
{return or__3548__auto____298308;
} else
{var or__3548__auto____298309 = (cljs.core._peek["_"]);

if(cljs.core.truth_(or__3548__auto____298309))
{return or__3548__auto____298309;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-peek",coll);
}
}
})().call(null,coll);
}
});
cljs.core._pop = (function _pop(coll){
if(cljs.core.truth_((function (){var and__3546__auto____298310 = coll;

if(cljs.core.truth_(and__3546__auto____298310))
{return coll.cljs$core$IStack$_pop;
} else
{return and__3546__auto____298310;
}
})()))
{return coll.cljs$core$IStack$_pop(coll);
} else
{return (function (){var or__3548__auto____298311 = (cljs.core._pop[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____298311))
{return or__3548__auto____298311;
} else
{var or__3548__auto____298312 = (cljs.core._pop["_"]);

if(cljs.core.truth_(or__3548__auto____298312))
{return or__3548__auto____298312;
} else
{throw cljs.core.missing_protocol.call(null,"IStack.-pop",coll);
}
}
})().call(null,coll);
}
});
cljs.core.IVector = {};
cljs.core._assoc_n = (function _assoc_n(coll,n,val){
if(cljs.core.truth_((function (){var and__3546__auto____298313 = coll;

if(cljs.core.truth_(and__3546__auto____298313))
{return coll.cljs$core$IVector$_assoc_n;
} else
{return and__3546__auto____298313;
}
})()))
{return coll.cljs$core$IVector$_assoc_n(coll,n,val);
} else
{return (function (){var or__3548__auto____298314 = (cljs.core._assoc_n[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____298314))
{return or__3548__auto____298314;
} else
{var or__3548__auto____298315 = (cljs.core._assoc_n["_"]);

if(cljs.core.truth_(or__3548__auto____298315))
{return or__3548__auto____298315;
} else
{throw cljs.core.missing_protocol.call(null,"IVector.-assoc-n",coll);
}
}
})().call(null,coll,n,val);
}
});
cljs.core.IDeref = {};
cljs.core._deref = (function _deref(o){
if(cljs.core.truth_((function (){var and__3546__auto____298316 = o;

if(cljs.core.truth_(and__3546__auto____298316))
{return o.cljs$core$IDeref$_deref;
} else
{return and__3546__auto____298316;
}
})()))
{return o.cljs$core$IDeref$_deref(o);
} else
{return (function (){var or__3548__auto____298317 = (cljs.core._deref[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____298317))
{return or__3548__auto____298317;
} else
{var or__3548__auto____298318 = (cljs.core._deref["_"]);

if(cljs.core.truth_(or__3548__auto____298318))
{return or__3548__auto____298318;
} else
{throw cljs.core.missing_protocol.call(null,"IDeref.-deref",o);
}
}
})().call(null,o);
}
});
cljs.core.IDerefWithTimeout = {};
cljs.core._deref_with_timeout = (function _deref_with_timeout(o,msec,timeout_val){
if(cljs.core.truth_((function (){var and__3546__auto____298319 = o;

if(cljs.core.truth_(and__3546__auto____298319))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout;
} else
{return and__3546__auto____298319;
}
})()))
{return o.cljs$core$IDerefWithTimeout$_deref_with_timeout(o,msec,timeout_val);
} else
{return (function (){var or__3548__auto____298320 = (cljs.core._deref_with_timeout[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____298320))
{return or__3548__auto____298320;
} else
{var or__3548__auto____298321 = (cljs.core._deref_with_timeout["_"]);

if(cljs.core.truth_(or__3548__auto____298321))
{return or__3548__auto____298321;
} else
{throw cljs.core.missing_protocol.call(null,"IDerefWithTimeout.-deref-with-timeout",o);
}
}
})().call(null,o,msec,timeout_val);
}
});
cljs.core.IMeta = {};
cljs.core._meta = (function _meta(o){
if(cljs.core.truth_((function (){var and__3546__auto____298322 = o;

if(cljs.core.truth_(and__3546__auto____298322))
{return o.cljs$core$IMeta$_meta;
} else
{return and__3546__auto____298322;
}
})()))
{return o.cljs$core$IMeta$_meta(o);
} else
{return (function (){var or__3548__auto____298323 = (cljs.core._meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____298323))
{return or__3548__auto____298323;
} else
{var or__3548__auto____298324 = (cljs.core._meta["_"]);

if(cljs.core.truth_(or__3548__auto____298324))
{return or__3548__auto____298324;
} else
{throw cljs.core.missing_protocol.call(null,"IMeta.-meta",o);
}
}
})().call(null,o);
}
});
cljs.core.IWithMeta = {};
cljs.core._with_meta = (function _with_meta(o,meta){
if(cljs.core.truth_((function (){var and__3546__auto____298325 = o;

if(cljs.core.truth_(and__3546__auto____298325))
{return o.cljs$core$IWithMeta$_with_meta;
} else
{return and__3546__auto____298325;
}
})()))
{return o.cljs$core$IWithMeta$_with_meta(o,meta);
} else
{return (function (){var or__3548__auto____298326 = (cljs.core._with_meta[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____298326))
{return or__3548__auto____298326;
} else
{var or__3548__auto____298327 = (cljs.core._with_meta["_"]);

if(cljs.core.truth_(or__3548__auto____298327))
{return or__3548__auto____298327;
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
var _reduce__298334 = (function (coll,f){
if(cljs.core.truth_((function (){var and__3546__auto____298328 = coll;

if(cljs.core.truth_(and__3546__auto____298328))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____298328;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f);
} else
{return (function (){var or__3548__auto____298329 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____298329))
{return or__3548__auto____298329;
} else
{var or__3548__auto____298330 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____298330))
{return or__3548__auto____298330;
} else
{throw cljs.core.missing_protocol.call(null,"IReduce.-reduce",coll);
}
}
})().call(null,coll,f);
}
});
var _reduce__298335 = (function (coll,f,start){
if(cljs.core.truth_((function (){var and__3546__auto____298331 = coll;

if(cljs.core.truth_(and__3546__auto____298331))
{return coll.cljs$core$IReduce$_reduce;
} else
{return and__3546__auto____298331;
}
})()))
{return coll.cljs$core$IReduce$_reduce(coll,f,start);
} else
{return (function (){var or__3548__auto____298332 = (cljs.core._reduce[goog.typeOf.call(null,coll)]);

if(cljs.core.truth_(or__3548__auto____298332))
{return or__3548__auto____298332;
} else
{var or__3548__auto____298333 = (cljs.core._reduce["_"]);

if(cljs.core.truth_(or__3548__auto____298333))
{return or__3548__auto____298333;
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
return _reduce__298334.call(this,coll,f);
case  3 :
return _reduce__298335.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return _reduce;
})()
;
cljs.core.IEquiv = {};
cljs.core._equiv = (function _equiv(o,other){
if(cljs.core.truth_((function (){var and__3546__auto____298337 = o;

if(cljs.core.truth_(and__3546__auto____298337))
{return o.cljs$core$IEquiv$_equiv;
} else
{return and__3546__auto____298337;
}
})()))
{return o.cljs$core$IEquiv$_equiv(o,other);
} else
{return (function (){var or__3548__auto____298338 = (cljs.core._equiv[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____298338))
{return or__3548__auto____298338;
} else
{var or__3548__auto____298339 = (cljs.core._equiv["_"]);

if(cljs.core.truth_(or__3548__auto____298339))
{return or__3548__auto____298339;
} else
{throw cljs.core.missing_protocol.call(null,"IEquiv.-equiv",o);
}
}
})().call(null,o,other);
}
});
cljs.core.IHash = {};
cljs.core._hash = (function _hash(o){
if(cljs.core.truth_((function (){var and__3546__auto____298340 = o;

if(cljs.core.truth_(and__3546__auto____298340))
{return o.cljs$core$IHash$_hash;
} else
{return and__3546__auto____298340;
}
})()))
{return o.cljs$core$IHash$_hash(o);
} else
{return (function (){var or__3548__auto____298341 = (cljs.core._hash[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____298341))
{return or__3548__auto____298341;
} else
{var or__3548__auto____298342 = (cljs.core._hash["_"]);

if(cljs.core.truth_(or__3548__auto____298342))
{return or__3548__auto____298342;
} else
{throw cljs.core.missing_protocol.call(null,"IHash.-hash",o);
}
}
})().call(null,o);
}
});
cljs.core.ISeqable = {};
cljs.core._seq = (function _seq(o){
if(cljs.core.truth_((function (){var and__3546__auto____298343 = o;

if(cljs.core.truth_(and__3546__auto____298343))
{return o.cljs$core$ISeqable$_seq;
} else
{return and__3546__auto____298343;
}
})()))
{return o.cljs$core$ISeqable$_seq(o);
} else
{return (function (){var or__3548__auto____298344 = (cljs.core._seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____298344))
{return or__3548__auto____298344;
} else
{var or__3548__auto____298345 = (cljs.core._seq["_"]);

if(cljs.core.truth_(or__3548__auto____298345))
{return or__3548__auto____298345;
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
if(cljs.core.truth_((function (){var and__3546__auto____298346 = o;

if(cljs.core.truth_(and__3546__auto____298346))
{return o.cljs$core$IPrintable$_pr_seq;
} else
{return and__3546__auto____298346;
}
})()))
{return o.cljs$core$IPrintable$_pr_seq(o,opts);
} else
{return (function (){var or__3548__auto____298347 = (cljs.core._pr_seq[goog.typeOf.call(null,o)]);

if(cljs.core.truth_(or__3548__auto____298347))
{return or__3548__auto____298347;
} else
{var or__3548__auto____298348 = (cljs.core._pr_seq["_"]);

if(cljs.core.truth_(or__3548__auto____298348))
{return or__3548__auto____298348;
} else
{throw cljs.core.missing_protocol.call(null,"IPrintable.-pr-seq",o);
}
}
})().call(null,o,opts);
}
});
cljs.core.IPending = {};
cljs.core._realized_QMARK_ = (function _realized_QMARK_(d){
if(cljs.core.truth_((function (){var and__3546__auto____298349 = d;

if(cljs.core.truth_(and__3546__auto____298349))
{return d.cljs$core$IPending$_realized_QMARK_;
} else
{return and__3546__auto____298349;
}
})()))
{return d.cljs$core$IPending$_realized_QMARK_(d);
} else
{return (function (){var or__3548__auto____298350 = (cljs.core._realized_QMARK_[goog.typeOf.call(null,d)]);

if(cljs.core.truth_(or__3548__auto____298350))
{return or__3548__auto____298350;
} else
{var or__3548__auto____298351 = (cljs.core._realized_QMARK_["_"]);

if(cljs.core.truth_(or__3548__auto____298351))
{return or__3548__auto____298351;
} else
{throw cljs.core.missing_protocol.call(null,"IPending.-realized?",d);
}
}
})().call(null,d);
}
});
cljs.core.IWatchable = {};
cljs.core._notify_watches = (function _notify_watches(this$,oldval,newval){
if(cljs.core.truth_((function (){var and__3546__auto____298352 = this$;

if(cljs.core.truth_(and__3546__auto____298352))
{return this$.cljs$core$IWatchable$_notify_watches;
} else
{return and__3546__auto____298352;
}
})()))
{return this$.cljs$core$IWatchable$_notify_watches(this$,oldval,newval);
} else
{return (function (){var or__3548__auto____298353 = (cljs.core._notify_watches[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298353))
{return or__3548__auto____298353;
} else
{var or__3548__auto____298354 = (cljs.core._notify_watches["_"]);

if(cljs.core.truth_(or__3548__auto____298354))
{return or__3548__auto____298354;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-notify-watches",this$);
}
}
})().call(null,this$,oldval,newval);
}
});
cljs.core._add_watch = (function _add_watch(this$,key,f){
if(cljs.core.truth_((function (){var and__3546__auto____298355 = this$;

if(cljs.core.truth_(and__3546__auto____298355))
{return this$.cljs$core$IWatchable$_add_watch;
} else
{return and__3546__auto____298355;
}
})()))
{return this$.cljs$core$IWatchable$_add_watch(this$,key,f);
} else
{return (function (){var or__3548__auto____298356 = (cljs.core._add_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298356))
{return or__3548__auto____298356;
} else
{var or__3548__auto____298357 = (cljs.core._add_watch["_"]);

if(cljs.core.truth_(or__3548__auto____298357))
{return or__3548__auto____298357;
} else
{throw cljs.core.missing_protocol.call(null,"IWatchable.-add-watch",this$);
}
}
})().call(null,this$,key,f);
}
});
cljs.core._remove_watch = (function _remove_watch(this$,key){
if(cljs.core.truth_((function (){var and__3546__auto____298358 = this$;

if(cljs.core.truth_(and__3546__auto____298358))
{return this$.cljs$core$IWatchable$_remove_watch;
} else
{return and__3546__auto____298358;
}
})()))
{return this$.cljs$core$IWatchable$_remove_watch(this$,key);
} else
{return (function (){var or__3548__auto____298359 = (cljs.core._remove_watch[goog.typeOf.call(null,this$)]);

if(cljs.core.truth_(or__3548__auto____298359))
{return or__3548__auto____298359;
} else
{var or__3548__auto____298360 = (cljs.core._remove_watch["_"]);

if(cljs.core.truth_(or__3548__auto____298360))
{return or__3548__auto____298360;
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
var G__298361 = null;
var G__298361__298362 = (function (o,k){
return null;
});
var G__298361__298363 = (function (o,k,not_found){
return not_found;
});
G__298361 = function(o,k,not_found){
switch(arguments.length){
case  2 :
return G__298361__298362.call(this,o,k);
case  3 :
return G__298361__298363.call(this,o,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__298361;
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
var G__298365 = null;
var G__298365__298366 = (function (_,f){
return f.call(null);
});
var G__298365__298367 = (function (_,f,start){
return start;
});
G__298365 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__298365__298366.call(this,_,f);
case  3 :
return G__298365__298367.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__298365;
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
var G__298369 = null;
var G__298369__298370 = (function (_,n){
return null;
});
var G__298369__298371 = (function (_,n,not_found){
return not_found;
});
G__298369 = function(_,n,not_found){
switch(arguments.length){
case  2 :
return G__298369__298370.call(this,_,n);
case  3 :
return G__298369__298371.call(this,_,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__298369;
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
var ci_reduce__298379 = (function (cicoll,f){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,cljs.core._count.call(null,cicoll))))
{return f.call(null);
} else
{var val__298373 = cljs.core._nth.call(null,cicoll,0);
var n__298374 = 1;

while(true){
if(cljs.core.truth_((n__298374 < cljs.core._count.call(null,cicoll))))
{{
var G__298383 = f.call(null,val__298373,cljs.core._nth.call(null,cicoll,n__298374));
var G__298384 = (n__298374 + 1);
val__298373 = G__298383;
n__298374 = G__298384;
continue;
}
} else
{return val__298373;
}
break;
}
}
});
var ci_reduce__298380 = (function (cicoll,f,val){
var val__298375 = val;
var n__298376 = 0;

while(true){
if(cljs.core.truth_((n__298376 < cljs.core._count.call(null,cicoll))))
{{
var G__298385 = f.call(null,val__298375,cljs.core._nth.call(null,cicoll,n__298376));
var G__298386 = (n__298376 + 1);
val__298375 = G__298385;
n__298376 = G__298386;
continue;
}
} else
{return val__298375;
}
break;
}
});
var ci_reduce__298381 = (function (cicoll,f,val,idx){
var val__298377 = val;
var n__298378 = idx;

while(true){
if(cljs.core.truth_((n__298378 < cljs.core._count.call(null,cicoll))))
{{
var G__298387 = f.call(null,val__298377,cljs.core._nth.call(null,cicoll,n__298378));
var G__298388 = (n__298378 + 1);
val__298377 = G__298387;
n__298378 = G__298388;
continue;
}
} else
{return val__298377;
}
break;
}
});
ci_reduce = function(cicoll,f,val,idx){
switch(arguments.length){
case  2 :
return ci_reduce__298379.call(this,cicoll,f);
case  3 :
return ci_reduce__298380.call(this,cicoll,f,val);
case  4 :
return ci_reduce__298381.call(this,cicoll,f,val,idx);
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
var this__298389 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IReduce$_reduce = (function() {
var G__298402 = null;
var G__298402__298403 = (function (_,f){
var this__298390 = this;
return cljs.core.ci_reduce.call(null,this__298390.a,f,(this__298390.a[this__298390.i]),(this__298390.i + 1));
});
var G__298402__298404 = (function (_,f,start){
var this__298391 = this;
return cljs.core.ci_reduce.call(null,this__298391.a,f,start,this__298391.i);
});
G__298402 = function(_,f,start){
switch(arguments.length){
case  2 :
return G__298402__298403.call(this,_,f);
case  3 :
return G__298402__298404.call(this,_,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__298402;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__298392 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__298393 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$IIndexed$_nth = (function() {
var G__298406 = null;
var G__298406__298407 = (function (coll,n){
var this__298394 = this;
var i__298395 = (n + this__298394.i);

if(cljs.core.truth_((i__298395 < this__298394.a.length)))
{return (this__298394.a[i__298395]);
} else
{return null;
}
});
var G__298406__298408 = (function (coll,n,not_found){
var this__298396 = this;
var i__298397 = (n + this__298396.i);

if(cljs.core.truth_((i__298397 < this__298396.a.length)))
{return (this__298396.a[i__298397]);
} else
{return not_found;
}
});
G__298406 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__298406__298407.call(this,coll,n);
case  3 :
return G__298406__298408.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__298406;
})()
;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ICounted$_count = (function (_){
var this__298398 = this;
return (this__298398.a.length - this__298398.i);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_first = (function (_){
var this__298399 = this;
return (this__298399.a[this__298399.i]);
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeq$_rest = (function (_){
var this__298400 = this;
if(cljs.core.truth_(((this__298400.i + 1) < this__298400.a.length)))
{return (new cljs.core.IndexedSeq(this__298400.a,(this__298400.i + 1)));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$ = true;
cljs.core.IndexedSeq.prototype.cljs$core$ISeqable$_seq = (function (this$){
var this__298401 = this;
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
var G__298410 = null;
var G__298410__298411 = (function (array,f){
return cljs.core.ci_reduce.call(null,array,f);
});
var G__298410__298412 = (function (array,f,start){
return cljs.core.ci_reduce.call(null,array,f,start);
});
G__298410 = function(array,f,start){
switch(arguments.length){
case  2 :
return G__298410__298411.call(this,array,f);
case  3 :
return G__298410__298412.call(this,array,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__298410;
})()
);
(cljs.core.ILookup["array"] = true);
(cljs.core._lookup["array"] = (function() {
var G__298414 = null;
var G__298414__298415 = (function (array,k){
return (array[k]);
});
var G__298414__298416 = (function (array,k,not_found){
return cljs.core._nth.call(null,array,k,not_found);
});
G__298414 = function(array,k,not_found){
switch(arguments.length){
case  2 :
return G__298414__298415.call(this,array,k);
case  3 :
return G__298414__298416.call(this,array,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__298414;
})()
);
(cljs.core.IIndexed["array"] = true);
(cljs.core._nth["array"] = (function() {
var G__298418 = null;
var G__298418__298419 = (function (array,n){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return null;
}
});
var G__298418__298420 = (function (array,n,not_found){
if(cljs.core.truth_((n < array.length)))
{return (array[n]);
} else
{return not_found;
}
});
G__298418 = function(array,n,not_found){
switch(arguments.length){
case  2 :
return G__298418__298419.call(this,array,n);
case  3 :
return G__298418__298420.call(this,array,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__298418;
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
var temp__3698__auto____298422 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____298422))
{var s__298423 = temp__3698__auto____298422;

return cljs.core._first.call(null,s__298423);
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
var G__298424 = cljs.core.next.call(null,s);
s = G__298424;
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
var s__298425 = cljs.core.seq.call(null,x);
var n__298426 = 0;

while(true){
if(cljs.core.truth_(s__298425))
{{
var G__298427 = cljs.core.next.call(null,s__298425);
var G__298428 = (n__298426 + 1);
s__298425 = G__298427;
n__298426 = G__298428;
continue;
}
} else
{return n__298426;
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
var conj__298429 = (function (coll,x){
return cljs.core._conj.call(null,coll,x);
});
var conj__298430 = (function() { 
var G__298432__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs))
{{
var G__298433 = conj.call(null,coll,x);
var G__298434 = cljs.core.first.call(null,xs);
var G__298435 = cljs.core.next.call(null,xs);
coll = G__298433;
x = G__298434;
xs = G__298435;
continue;
}
} else
{return conj.call(null,coll,x);
}
break;
}
};
var G__298432 = function (coll,x,var_args){
var xs = null;
if (goog.isDef(var_args)) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__298432__delegate.call(this, coll, x, xs);
};
G__298432.cljs$lang$maxFixedArity = 2;
G__298432.cljs$lang$applyTo = (function (arglist__298436){
var coll = cljs.core.first(arglist__298436);
var x = cljs.core.first(cljs.core.next(arglist__298436));
var xs = cljs.core.rest(cljs.core.next(arglist__298436));
return G__298432__delegate.call(this, coll, x, xs);
});
return G__298432;
})()
;
conj = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case  2 :
return conj__298429.call(this,coll,x);
default:
return conj__298430.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
conj.cljs$lang$maxFixedArity = 2;
conj.cljs$lang$applyTo = conj__298430.cljs$lang$applyTo;
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
var nth__298437 = (function (coll,n){
return cljs.core._nth.call(null,coll,Math.floor(n));
});
var nth__298438 = (function (coll,n,not_found){
return cljs.core._nth.call(null,coll,Math.floor(n),not_found);
});
nth = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return nth__298437.call(this,coll,n);
case  3 :
return nth__298438.call(this,coll,n,not_found);
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
var get__298440 = (function (o,k){
return cljs.core._lookup.call(null,o,k);
});
var get__298441 = (function (o,k,not_found){
return cljs.core._lookup.call(null,o,k,not_found);
});
get = function(o,k,not_found){
switch(arguments.length){
case  2 :
return get__298440.call(this,o,k);
case  3 :
return get__298441.call(this,o,k,not_found);
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
var assoc__298444 = (function (coll,k,v){
return cljs.core._assoc.call(null,coll,k,v);
});
var assoc__298445 = (function() { 
var G__298447__delegate = function (coll,k,v,kvs){
while(true){
var ret__298443 = assoc.call(null,coll,k,v);

if(cljs.core.truth_(kvs))
{{
var G__298448 = ret__298443;
var G__298449 = cljs.core.first.call(null,kvs);
var G__298450 = cljs.core.second.call(null,kvs);
var G__298451 = cljs.core.nnext.call(null,kvs);
coll = G__298448;
k = G__298449;
v = G__298450;
kvs = G__298451;
continue;
}
} else
{return ret__298443;
}
break;
}
};
var G__298447 = function (coll,k,v,var_args){
var kvs = null;
if (goog.isDef(var_args)) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__298447__delegate.call(this, coll, k, v, kvs);
};
G__298447.cljs$lang$maxFixedArity = 3;
G__298447.cljs$lang$applyTo = (function (arglist__298452){
var coll = cljs.core.first(arglist__298452);
var k = cljs.core.first(cljs.core.next(arglist__298452));
var v = cljs.core.first(cljs.core.next(cljs.core.next(arglist__298452)));
var kvs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__298452)));
return G__298447__delegate.call(this, coll, k, v, kvs);
});
return G__298447;
})()
;
assoc = function(coll,k,v,var_args){
var kvs = var_args;
switch(arguments.length){
case  3 :
return assoc__298444.call(this,coll,k,v);
default:
return assoc__298445.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
assoc.cljs$lang$maxFixedArity = 3;
assoc.cljs$lang$applyTo = assoc__298445.cljs$lang$applyTo;
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
var dissoc__298454 = (function (coll){
return coll;
});
var dissoc__298455 = (function (coll,k){
return cljs.core._dissoc.call(null,coll,k);
});
var dissoc__298456 = (function() { 
var G__298458__delegate = function (coll,k,ks){
while(true){
var ret__298453 = dissoc.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__298459 = ret__298453;
var G__298460 = cljs.core.first.call(null,ks);
var G__298461 = cljs.core.next.call(null,ks);
coll = G__298459;
k = G__298460;
ks = G__298461;
continue;
}
} else
{return ret__298453;
}
break;
}
};
var G__298458 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__298458__delegate.call(this, coll, k, ks);
};
G__298458.cljs$lang$maxFixedArity = 2;
G__298458.cljs$lang$applyTo = (function (arglist__298462){
var coll = cljs.core.first(arglist__298462);
var k = cljs.core.first(cljs.core.next(arglist__298462));
var ks = cljs.core.rest(cljs.core.next(arglist__298462));
return G__298458__delegate.call(this, coll, k, ks);
});
return G__298458;
})()
;
dissoc = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return dissoc__298454.call(this,coll);
case  2 :
return dissoc__298455.call(this,coll,k);
default:
return dissoc__298456.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
dissoc.cljs$lang$maxFixedArity = 2;
dissoc.cljs$lang$applyTo = dissoc__298456.cljs$lang$applyTo;
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
if(cljs.core.truth_((function (){var x__451__auto____298463 = o;

if(cljs.core.truth_((function (){var and__3546__auto____298464 = x__451__auto____298463;

if(cljs.core.truth_(and__3546__auto____298464))
{var and__3546__auto____298465 = x__451__auto____298463.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____298465))
{return cljs.core.not.call(null,x__451__auto____298463.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____298465;
}
} else
{return and__3546__auto____298464;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____298463);
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
var disj__298467 = (function (coll){
return coll;
});
var disj__298468 = (function (coll,k){
return cljs.core._disjoin.call(null,coll,k);
});
var disj__298469 = (function() { 
var G__298471__delegate = function (coll,k,ks){
while(true){
var ret__298466 = disj.call(null,coll,k);

if(cljs.core.truth_(ks))
{{
var G__298472 = ret__298466;
var G__298473 = cljs.core.first.call(null,ks);
var G__298474 = cljs.core.next.call(null,ks);
coll = G__298472;
k = G__298473;
ks = G__298474;
continue;
}
} else
{return ret__298466;
}
break;
}
};
var G__298471 = function (coll,k,var_args){
var ks = null;
if (goog.isDef(var_args)) {
  ks = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__298471__delegate.call(this, coll, k, ks);
};
G__298471.cljs$lang$maxFixedArity = 2;
G__298471.cljs$lang$applyTo = (function (arglist__298475){
var coll = cljs.core.first(arglist__298475);
var k = cljs.core.first(cljs.core.next(arglist__298475));
var ks = cljs.core.rest(cljs.core.next(arglist__298475));
return G__298471__delegate.call(this, coll, k, ks);
});
return G__298471;
})()
;
disj = function(coll,k,var_args){
var ks = var_args;
switch(arguments.length){
case  1 :
return disj__298467.call(this,coll);
case  2 :
return disj__298468.call(this,coll,k);
default:
return disj__298469.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
disj.cljs$lang$maxFixedArity = 2;
disj.cljs$lang$applyTo = disj__298469.cljs$lang$applyTo;
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
{var x__451__auto____298476 = x;

if(cljs.core.truth_((function (){var and__3546__auto____298477 = x__451__auto____298476;

if(cljs.core.truth_(and__3546__auto____298477))
{var and__3546__auto____298478 = x__451__auto____298476.cljs$core$ICollection$;

if(cljs.core.truth_(and__3546__auto____298478))
{return cljs.core.not.call(null,x__451__auto____298476.hasOwnProperty("cljs$core$ICollection$"));
} else
{return and__3546__auto____298478;
}
} else
{return and__3546__auto____298477;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICollection,x__451__auto____298476);
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
{var x__451__auto____298479 = x;

if(cljs.core.truth_((function (){var and__3546__auto____298480 = x__451__auto____298479;

if(cljs.core.truth_(and__3546__auto____298480))
{var and__3546__auto____298481 = x__451__auto____298479.cljs$core$ISet$;

if(cljs.core.truth_(and__3546__auto____298481))
{return cljs.core.not.call(null,x__451__auto____298479.hasOwnProperty("cljs$core$ISet$"));
} else
{return and__3546__auto____298481;
}
} else
{return and__3546__auto____298480;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISet,x__451__auto____298479);
}
}
});
/**
* Returns true if coll implements Associative
*/
cljs.core.associative_QMARK_ = (function associative_QMARK_(x){
var x__451__auto____298482 = x;

if(cljs.core.truth_((function (){var and__3546__auto____298483 = x__451__auto____298482;

if(cljs.core.truth_(and__3546__auto____298483))
{var and__3546__auto____298484 = x__451__auto____298482.cljs$core$IAssociative$;

if(cljs.core.truth_(and__3546__auto____298484))
{return cljs.core.not.call(null,x__451__auto____298482.hasOwnProperty("cljs$core$IAssociative$"));
} else
{return and__3546__auto____298484;
}
} else
{return and__3546__auto____298483;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IAssociative,x__451__auto____298482);
}
});
/**
* Returns true if coll satisfies ISequential
*/
cljs.core.sequential_QMARK_ = (function sequential_QMARK_(x){
var x__451__auto____298485 = x;

if(cljs.core.truth_((function (){var and__3546__auto____298486 = x__451__auto____298485;

if(cljs.core.truth_(and__3546__auto____298486))
{var and__3546__auto____298487 = x__451__auto____298485.cljs$core$ISequential$;

if(cljs.core.truth_(and__3546__auto____298487))
{return cljs.core.not.call(null,x__451__auto____298485.hasOwnProperty("cljs$core$ISequential$"));
} else
{return and__3546__auto____298487;
}
} else
{return and__3546__auto____298486;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISequential,x__451__auto____298485);
}
});
/**
* Returns true if coll implements count in constant time
*/
cljs.core.counted_QMARK_ = (function counted_QMARK_(x){
var x__451__auto____298488 = x;

if(cljs.core.truth_((function (){var and__3546__auto____298489 = x__451__auto____298488;

if(cljs.core.truth_(and__3546__auto____298489))
{var and__3546__auto____298490 = x__451__auto____298488.cljs$core$ICounted$;

if(cljs.core.truth_(and__3546__auto____298490))
{return cljs.core.not.call(null,x__451__auto____298488.hasOwnProperty("cljs$core$ICounted$"));
} else
{return and__3546__auto____298490;
}
} else
{return and__3546__auto____298489;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ICounted,x__451__auto____298488);
}
});
/**
* Return true if x satisfies IMap
*/
cljs.core.map_QMARK_ = (function map_QMARK_(x){
if(cljs.core.truth_((x === null)))
{return false;
} else
{var x__451__auto____298491 = x;

if(cljs.core.truth_((function (){var and__3546__auto____298492 = x__451__auto____298491;

if(cljs.core.truth_(and__3546__auto____298492))
{var and__3546__auto____298493 = x__451__auto____298491.cljs$core$IMap$;

if(cljs.core.truth_(and__3546__auto____298493))
{return cljs.core.not.call(null,x__451__auto____298491.hasOwnProperty("cljs$core$IMap$"));
} else
{return and__3546__auto____298493;
}
} else
{return and__3546__auto____298492;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMap,x__451__auto____298491);
}
}
});
/**
* Return true if x satisfies IVector
*/
cljs.core.vector_QMARK_ = (function vector_QMARK_(x){
var x__451__auto____298494 = x;

if(cljs.core.truth_((function (){var and__3546__auto____298495 = x__451__auto____298494;

if(cljs.core.truth_(and__3546__auto____298495))
{var and__3546__auto____298496 = x__451__auto____298494.cljs$core$IVector$;

if(cljs.core.truth_(and__3546__auto____298496))
{return cljs.core.not.call(null,x__451__auto____298494.hasOwnProperty("cljs$core$IVector$"));
} else
{return and__3546__auto____298496;
}
} else
{return and__3546__auto____298495;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IVector,x__451__auto____298494);
}
});
cljs.core.js_obj = (function js_obj(){
return {};
});
cljs.core.js_keys = (function js_keys(obj){
var keys__298497 = [];

goog.object.forEach.call(null,obj,(function (val,key,obj){
return keys__298497.push(key);
}));
return keys__298497;
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
{var x__451__auto____298498 = s;

if(cljs.core.truth_((function (){var and__3546__auto____298499 = x__451__auto____298498;

if(cljs.core.truth_(and__3546__auto____298499))
{var and__3546__auto____298500 = x__451__auto____298498.cljs$core$ISeq$;

if(cljs.core.truth_(and__3546__auto____298500))
{return cljs.core.not.call(null,x__451__auto____298498.hasOwnProperty("cljs$core$ISeq$"));
} else
{return and__3546__auto____298500;
}
} else
{return and__3546__auto____298499;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.ISeq,x__451__auto____298498);
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
var and__3546__auto____298501 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____298501))
{return cljs.core.not.call(null,(function (){var or__3548__auto____298502 = cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");

if(cljs.core.truth_(or__3548__auto____298502))
{return or__3548__auto____298502;
} else
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
}
})());
} else
{return and__3546__auto____298501;
}
});
cljs.core.keyword_QMARK_ = (function keyword_QMARK_(x){
var and__3546__auto____298503 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____298503))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD0");
} else
{return and__3546__auto____298503;
}
});
cljs.core.symbol_QMARK_ = (function symbol_QMARK_(x){
var and__3546__auto____298504 = goog.isString.call(null,x);

if(cljs.core.truth_(and__3546__auto____298504))
{return cljs.core._EQ_.call(null,x.charAt(0),"\uFDD1");
} else
{return and__3546__auto____298504;
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
var and__3546__auto____298505 = cljs.core.number_QMARK_.call(null,n);

if(cljs.core.truth_(and__3546__auto____298505))
{return (n == n.toFixed());
} else
{return and__3546__auto____298505;
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
if(cljs.core.truth_((function (){var and__3546__auto____298506 = coll;

if(cljs.core.truth_(and__3546__auto____298506))
{var and__3546__auto____298507 = cljs.core.associative_QMARK_.call(null,coll);

if(cljs.core.truth_(and__3546__auto____298507))
{return cljs.core.contains_QMARK_.call(null,coll,k);
} else
{return and__3546__auto____298507;
}
} else
{return and__3546__auto____298506;
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
var distinct_QMARK___298512 = (function (x){
return true;
});
var distinct_QMARK___298513 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var distinct_QMARK___298514 = (function() { 
var G__298516__delegate = function (x,y,more){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y))))
{var s__298508 = cljs.core.set([y,x]);
var xs__298509 = more;

while(true){
var x__298510 = cljs.core.first.call(null,xs__298509);
var etc__298511 = cljs.core.next.call(null,xs__298509);

if(cljs.core.truth_(xs__298509))
{if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,s__298508,x__298510)))
{return false;
} else
{{
var G__298517 = cljs.core.conj.call(null,s__298508,x__298510);
var G__298518 = etc__298511;
s__298508 = G__298517;
xs__298509 = G__298518;
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
var G__298516 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__298516__delegate.call(this, x, y, more);
};
G__298516.cljs$lang$maxFixedArity = 2;
G__298516.cljs$lang$applyTo = (function (arglist__298519){
var x = cljs.core.first(arglist__298519);
var y = cljs.core.first(cljs.core.next(arglist__298519));
var more = cljs.core.rest(cljs.core.next(arglist__298519));
return G__298516__delegate.call(this, x, y, more);
});
return G__298516;
})()
;
distinct_QMARK_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return distinct_QMARK___298512.call(this,x);
case  2 :
return distinct_QMARK___298513.call(this,x,y);
default:
return distinct_QMARK___298514.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
distinct_QMARK_.cljs$lang$maxFixedArity = 2;
distinct_QMARK_.cljs$lang$applyTo = distinct_QMARK___298514.cljs$lang$applyTo;
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
var r__298520 = f.call(null,x,y);

if(cljs.core.truth_(cljs.core.number_QMARK_.call(null,r__298520)))
{return r__298520;
} else
{if(cljs.core.truth_(r__298520))
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
var sort__298522 = (function (coll){
return sort.call(null,cljs.core.compare,coll);
});
var sort__298523 = (function (comp,coll){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{var a__298521 = cljs.core.to_array.call(null,coll);

goog.array.stableSort.call(null,a__298521,cljs.core.fn__GT_comparator.call(null,comp));
return cljs.core.seq.call(null,a__298521);
} else
{return cljs.core.List.EMPTY;
}
});
sort = function(comp,coll){
switch(arguments.length){
case  1 :
return sort__298522.call(this,comp);
case  2 :
return sort__298523.call(this,comp,coll);
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
var sort_by__298525 = (function (keyfn,coll){
return sort_by.call(null,keyfn,cljs.core.compare,coll);
});
var sort_by__298526 = (function (keyfn,comp,coll){
return cljs.core.sort.call(null,(function (x,y){
return cljs.core.fn__GT_comparator.call(null,comp).call(null,keyfn.call(null,x),keyfn.call(null,y));
}),coll);
});
sort_by = function(keyfn,comp,coll){
switch(arguments.length){
case  2 :
return sort_by__298525.call(this,keyfn,comp);
case  3 :
return sort_by__298526.call(this,keyfn,comp,coll);
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
var reduce__298528 = (function (f,coll){
return cljs.core._reduce.call(null,coll,f);
});
var reduce__298529 = (function (f,val,coll){
return cljs.core._reduce.call(null,coll,f,val);
});
reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return reduce__298528.call(this,f,val);
case  3 :
return reduce__298529.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return reduce;
})()
;
cljs.core.seq_reduce = (function() {
var seq_reduce = null;
var seq_reduce__298535 = (function (f,coll){
var temp__3695__auto____298531 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____298531))
{var s__298532 = temp__3695__auto____298531;

return cljs.core.reduce.call(null,f,cljs.core.first.call(null,s__298532),cljs.core.next.call(null,s__298532));
} else
{return f.call(null);
}
});
var seq_reduce__298536 = (function (f,val,coll){
var val__298533 = val;
var coll__298534 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_(coll__298534))
{{
var G__298538 = f.call(null,val__298533,cljs.core.first.call(null,coll__298534));
var G__298539 = cljs.core.next.call(null,coll__298534);
val__298533 = G__298538;
coll__298534 = G__298539;
continue;
}
} else
{return val__298533;
}
break;
}
});
seq_reduce = function(f,val,coll){
switch(arguments.length){
case  2 :
return seq_reduce__298535.call(this,f,val);
case  3 :
return seq_reduce__298536.call(this,f,val,coll);
}
throw('Invalid arity: ' + arguments.length);
};
return seq_reduce;
})()
;
(cljs.core.IReduce["_"] = true);
(cljs.core._reduce["_"] = (function() {
var G__298540 = null;
var G__298540__298541 = (function (coll,f){
return cljs.core.seq_reduce.call(null,f,coll);
});
var G__298540__298542 = (function (coll,f,start){
return cljs.core.seq_reduce.call(null,f,start,coll);
});
G__298540 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__298540__298541.call(this,coll,f);
case  3 :
return G__298540__298542.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__298540;
})()
);
/**
* Returns the sum of nums. (+) returns 0.
* @param {...*} var_args
*/
cljs.core._PLUS_ = (function() {
var _PLUS_ = null;
var _PLUS___298544 = (function (){
return 0;
});
var _PLUS___298545 = (function (x){
return x;
});
var _PLUS___298546 = (function (x,y){
return (x + y);
});
var _PLUS___298547 = (function() { 
var G__298549__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_PLUS_,(x + y),more);
};
var G__298549 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__298549__delegate.call(this, x, y, more);
};
G__298549.cljs$lang$maxFixedArity = 2;
G__298549.cljs$lang$applyTo = (function (arglist__298550){
var x = cljs.core.first(arglist__298550);
var y = cljs.core.first(cljs.core.next(arglist__298550));
var more = cljs.core.rest(cljs.core.next(arglist__298550));
return G__298549__delegate.call(this, x, y, more);
});
return G__298549;
})()
;
_PLUS_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _PLUS___298544.call(this);
case  1 :
return _PLUS___298545.call(this,x);
case  2 :
return _PLUS___298546.call(this,x,y);
default:
return _PLUS___298547.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_PLUS_.cljs$lang$maxFixedArity = 2;
_PLUS_.cljs$lang$applyTo = _PLUS___298547.cljs$lang$applyTo;
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
var ___298551 = (function (x){
return (- x);
});
var ___298552 = (function (x,y){
return (x - y);
});
var ___298553 = (function() { 
var G__298555__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_,(x - y),more);
};
var G__298555 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__298555__delegate.call(this, x, y, more);
};
G__298555.cljs$lang$maxFixedArity = 2;
G__298555.cljs$lang$applyTo = (function (arglist__298556){
var x = cljs.core.first(arglist__298556);
var y = cljs.core.first(cljs.core.next(arglist__298556));
var more = cljs.core.rest(cljs.core.next(arglist__298556));
return G__298555__delegate.call(this, x, y, more);
});
return G__298555;
})()
;
_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return ___298551.call(this,x);
case  2 :
return ___298552.call(this,x,y);
default:
return ___298553.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_.cljs$lang$maxFixedArity = 2;
_.cljs$lang$applyTo = ___298553.cljs$lang$applyTo;
return _;
})()
;
/**
* Returns the product of nums. (*) returns 1.
* @param {...*} var_args
*/
cljs.core._STAR_ = (function() {
var _STAR_ = null;
var _STAR___298557 = (function (){
return 1;
});
var _STAR___298558 = (function (x){
return x;
});
var _STAR___298559 = (function (x,y){
return (x * y);
});
var _STAR___298560 = (function() { 
var G__298562__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_STAR_,(x * y),more);
};
var G__298562 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__298562__delegate.call(this, x, y, more);
};
G__298562.cljs$lang$maxFixedArity = 2;
G__298562.cljs$lang$applyTo = (function (arglist__298563){
var x = cljs.core.first(arglist__298563);
var y = cljs.core.first(cljs.core.next(arglist__298563));
var more = cljs.core.rest(cljs.core.next(arglist__298563));
return G__298562__delegate.call(this, x, y, more);
});
return G__298562;
})()
;
_STAR_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  0 :
return _STAR___298557.call(this);
case  1 :
return _STAR___298558.call(this,x);
case  2 :
return _STAR___298559.call(this,x,y);
default:
return _STAR___298560.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_STAR_.cljs$lang$maxFixedArity = 2;
_STAR_.cljs$lang$applyTo = _STAR___298560.cljs$lang$applyTo;
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
var _SLASH___298564 = (function (x){
return _SLASH_.call(null,1,x);
});
var _SLASH___298565 = (function (x,y){
return (x / y);
});
var _SLASH___298566 = (function() { 
var G__298568__delegate = function (x,y,more){
return cljs.core.reduce.call(null,_SLASH_,_SLASH_.call(null,x,y),more);
};
var G__298568 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__298568__delegate.call(this, x, y, more);
};
G__298568.cljs$lang$maxFixedArity = 2;
G__298568.cljs$lang$applyTo = (function (arglist__298569){
var x = cljs.core.first(arglist__298569);
var y = cljs.core.first(cljs.core.next(arglist__298569));
var more = cljs.core.rest(cljs.core.next(arglist__298569));
return G__298568__delegate.call(this, x, y, more);
});
return G__298568;
})()
;
_SLASH_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _SLASH___298564.call(this,x);
case  2 :
return _SLASH___298565.call(this,x,y);
default:
return _SLASH___298566.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_SLASH_.cljs$lang$maxFixedArity = 2;
_SLASH_.cljs$lang$applyTo = _SLASH___298566.cljs$lang$applyTo;
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
var _LT___298570 = (function (x){
return true;
});
var _LT___298571 = (function (x,y){
return (x < y);
});
var _LT___298572 = (function() { 
var G__298574__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x < y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__298575 = y;
var G__298576 = cljs.core.first.call(null,more);
var G__298577 = cljs.core.next.call(null,more);
x = G__298575;
y = G__298576;
more = G__298577;
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
var G__298574 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__298574__delegate.call(this, x, y, more);
};
G__298574.cljs$lang$maxFixedArity = 2;
G__298574.cljs$lang$applyTo = (function (arglist__298578){
var x = cljs.core.first(arglist__298578);
var y = cljs.core.first(cljs.core.next(arglist__298578));
var more = cljs.core.rest(cljs.core.next(arglist__298578));
return G__298574__delegate.call(this, x, y, more);
});
return G__298574;
})()
;
_LT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT___298570.call(this,x);
case  2 :
return _LT___298571.call(this,x,y);
default:
return _LT___298572.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT_.cljs$lang$maxFixedArity = 2;
_LT_.cljs$lang$applyTo = _LT___298572.cljs$lang$applyTo;
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
var _LT__EQ___298579 = (function (x){
return true;
});
var _LT__EQ___298580 = (function (x,y){
return (x <= y);
});
var _LT__EQ___298581 = (function() { 
var G__298583__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x <= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__298584 = y;
var G__298585 = cljs.core.first.call(null,more);
var G__298586 = cljs.core.next.call(null,more);
x = G__298584;
y = G__298585;
more = G__298586;
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
var G__298583 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__298583__delegate.call(this, x, y, more);
};
G__298583.cljs$lang$maxFixedArity = 2;
G__298583.cljs$lang$applyTo = (function (arglist__298587){
var x = cljs.core.first(arglist__298587);
var y = cljs.core.first(cljs.core.next(arglist__298587));
var more = cljs.core.rest(cljs.core.next(arglist__298587));
return G__298583__delegate.call(this, x, y, more);
});
return G__298583;
})()
;
_LT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _LT__EQ___298579.call(this,x);
case  2 :
return _LT__EQ___298580.call(this,x,y);
default:
return _LT__EQ___298581.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_LT__EQ_.cljs$lang$maxFixedArity = 2;
_LT__EQ_.cljs$lang$applyTo = _LT__EQ___298581.cljs$lang$applyTo;
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
var _GT___298588 = (function (x){
return true;
});
var _GT___298589 = (function (x,y){
return (x > y);
});
var _GT___298590 = (function() { 
var G__298592__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x > y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__298593 = y;
var G__298594 = cljs.core.first.call(null,more);
var G__298595 = cljs.core.next.call(null,more);
x = G__298593;
y = G__298594;
more = G__298595;
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
var G__298592 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__298592__delegate.call(this, x, y, more);
};
G__298592.cljs$lang$maxFixedArity = 2;
G__298592.cljs$lang$applyTo = (function (arglist__298596){
var x = cljs.core.first(arglist__298596);
var y = cljs.core.first(cljs.core.next(arglist__298596));
var more = cljs.core.rest(cljs.core.next(arglist__298596));
return G__298592__delegate.call(this, x, y, more);
});
return G__298592;
})()
;
_GT_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT___298588.call(this,x);
case  2 :
return _GT___298589.call(this,x,y);
default:
return _GT___298590.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT_.cljs$lang$maxFixedArity = 2;
_GT_.cljs$lang$applyTo = _GT___298590.cljs$lang$applyTo;
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
var _GT__EQ___298597 = (function (x){
return true;
});
var _GT__EQ___298598 = (function (x,y){
return (x >= y);
});
var _GT__EQ___298599 = (function() { 
var G__298601__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_((x >= y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__298602 = y;
var G__298603 = cljs.core.first.call(null,more);
var G__298604 = cljs.core.next.call(null,more);
x = G__298602;
y = G__298603;
more = G__298604;
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
var G__298601 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__298601__delegate.call(this, x, y, more);
};
G__298601.cljs$lang$maxFixedArity = 2;
G__298601.cljs$lang$applyTo = (function (arglist__298605){
var x = cljs.core.first(arglist__298605);
var y = cljs.core.first(cljs.core.next(arglist__298605));
var more = cljs.core.rest(cljs.core.next(arglist__298605));
return G__298601__delegate.call(this, x, y, more);
});
return G__298601;
})()
;
_GT__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _GT__EQ___298597.call(this,x);
case  2 :
return _GT__EQ___298598.call(this,x,y);
default:
return _GT__EQ___298599.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_GT__EQ_.cljs$lang$maxFixedArity = 2;
_GT__EQ_.cljs$lang$applyTo = _GT__EQ___298599.cljs$lang$applyTo;
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
var max__298606 = (function (x){
return x;
});
var max__298607 = (function (x,y){
return ((x > y) ? x : y);
});
var max__298608 = (function() { 
var G__298610__delegate = function (x,y,more){
return cljs.core.reduce.call(null,max,((x > y) ? x : y),more);
};
var G__298610 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__298610__delegate.call(this, x, y, more);
};
G__298610.cljs$lang$maxFixedArity = 2;
G__298610.cljs$lang$applyTo = (function (arglist__298611){
var x = cljs.core.first(arglist__298611);
var y = cljs.core.first(cljs.core.next(arglist__298611));
var more = cljs.core.rest(cljs.core.next(arglist__298611));
return G__298610__delegate.call(this, x, y, more);
});
return G__298610;
})()
;
max = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return max__298606.call(this,x);
case  2 :
return max__298607.call(this,x,y);
default:
return max__298608.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max.cljs$lang$maxFixedArity = 2;
max.cljs$lang$applyTo = max__298608.cljs$lang$applyTo;
return max;
})()
;
/**
* Returns the least of the nums.
* @param {...*} var_args
*/
cljs.core.min = (function() {
var min = null;
var min__298612 = (function (x){
return x;
});
var min__298613 = (function (x,y){
return ((x < y) ? x : y);
});
var min__298614 = (function() { 
var G__298616__delegate = function (x,y,more){
return cljs.core.reduce.call(null,min,((x < y) ? x : y),more);
};
var G__298616 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__298616__delegate.call(this, x, y, more);
};
G__298616.cljs$lang$maxFixedArity = 2;
G__298616.cljs$lang$applyTo = (function (arglist__298617){
var x = cljs.core.first(arglist__298617);
var y = cljs.core.first(cljs.core.next(arglist__298617));
var more = cljs.core.rest(cljs.core.next(arglist__298617));
return G__298616__delegate.call(this, x, y, more);
});
return G__298616;
})()
;
min = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return min__298612.call(this,x);
case  2 :
return min__298613.call(this,x,y);
default:
return min__298614.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min.cljs$lang$maxFixedArity = 2;
min.cljs$lang$applyTo = min__298614.cljs$lang$applyTo;
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
var rem__298618 = (n % d);

return cljs.core.fix.call(null,((n - rem__298618) / d));
});
/**
* remainder of dividing numerator by denominator.
*/
cljs.core.rem = (function rem(n,d){
var q__298619 = cljs.core.quot.call(null,n,d);

return (n - (d * q__298619));
});
/**
* Returns a random floating point number between 0 (inclusive) and n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__298620 = (function (){
return Math.random.call(null);
});
var rand__298621 = (function (n){
return (n * rand.call(null));
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__298620.call(this);
case  1 :
return rand__298621.call(this,n);
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
var _EQ__EQ___298623 = (function (x){
return true;
});
var _EQ__EQ___298624 = (function (x,y){
return cljs.core._equiv.call(null,x,y);
});
var _EQ__EQ___298625 = (function() { 
var G__298627__delegate = function (x,y,more){
while(true){
if(cljs.core.truth_(_EQ__EQ_.call(null,x,y)))
{if(cljs.core.truth_(cljs.core.next.call(null,more)))
{{
var G__298628 = y;
var G__298629 = cljs.core.first.call(null,more);
var G__298630 = cljs.core.next.call(null,more);
x = G__298628;
y = G__298629;
more = G__298630;
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
var G__298627 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__298627__delegate.call(this, x, y, more);
};
G__298627.cljs$lang$maxFixedArity = 2;
G__298627.cljs$lang$applyTo = (function (arglist__298631){
var x = cljs.core.first(arglist__298631);
var y = cljs.core.first(cljs.core.next(arglist__298631));
var more = cljs.core.rest(cljs.core.next(arglist__298631));
return G__298627__delegate.call(this, x, y, more);
});
return G__298627;
})()
;
_EQ__EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return _EQ__EQ___298623.call(this,x);
case  2 :
return _EQ__EQ___298624.call(this,x,y);
default:
return _EQ__EQ___298625.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
_EQ__EQ_.cljs$lang$maxFixedArity = 2;
_EQ__EQ_.cljs$lang$applyTo = _EQ__EQ___298625.cljs$lang$applyTo;
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
var n__298632 = n;
var xs__298633 = cljs.core.seq.call(null,coll);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____298634 = xs__298633;

if(cljs.core.truth_(and__3546__auto____298634))
{return (n__298632 > 0);
} else
{return and__3546__auto____298634;
}
})()))
{{
var G__298635 = (n__298632 - 1);
var G__298636 = cljs.core.next.call(null,xs__298633);
n__298632 = G__298635;
xs__298633 = G__298636;
continue;
}
} else
{return xs__298633;
}
break;
}
});
(cljs.core.IIndexed["_"] = true);
(cljs.core._nth["_"] = (function() {
var G__298641 = null;
var G__298641__298642 = (function (coll,n){
var temp__3695__auto____298637 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____298637))
{var xs__298638 = temp__3695__auto____298637;

return cljs.core.first.call(null,xs__298638);
} else
{throw (new Error("Index out of bounds"));
}
});
var G__298641__298643 = (function (coll,n,not_found){
var temp__3695__auto____298639 = cljs.core.nthnext.call(null,coll,n);

if(cljs.core.truth_(temp__3695__auto____298639))
{var xs__298640 = temp__3695__auto____298639;

return cljs.core.first.call(null,xs__298640);
} else
{return not_found;
}
});
G__298641 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__298641__298642.call(this,coll,n);
case  3 :
return G__298641__298643.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__298641;
})()
);
/**
* Internal - do not use!
* @param {...*} var_args
*/
cljs.core.str_STAR_ = (function() {
var str_STAR_ = null;
var str_STAR___298645 = (function (){
return "";
});
var str_STAR___298646 = (function (x){
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
var str_STAR___298647 = (function() { 
var G__298649__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__298650 = sb.append(str_STAR_.call(null,cljs.core.first.call(null,more)));
var G__298651 = cljs.core.next.call(null,more);
sb = G__298650;
more = G__298651;
continue;
}
} else
{return str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str_STAR_.call(null,x))),ys);
};
var G__298649 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__298649__delegate.call(this, x, ys);
};
G__298649.cljs$lang$maxFixedArity = 1;
G__298649.cljs$lang$applyTo = (function (arglist__298652){
var x = cljs.core.first(arglist__298652);
var ys = cljs.core.rest(arglist__298652);
return G__298649__delegate.call(this, x, ys);
});
return G__298649;
})()
;
str_STAR_ = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str_STAR___298645.call(this);
case  1 :
return str_STAR___298646.call(this,x);
default:
return str_STAR___298647.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str_STAR_.cljs$lang$maxFixedArity = 1;
str_STAR_.cljs$lang$applyTo = str_STAR___298647.cljs$lang$applyTo;
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
var str__298653 = (function (){
return "";
});
var str__298654 = (function (x){
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
var str__298655 = (function() { 
var G__298657__delegate = function (x,ys){
return (function (sb,more){
while(true){
if(cljs.core.truth_(more))
{{
var G__298658 = sb.append(str.call(null,cljs.core.first.call(null,more)));
var G__298659 = cljs.core.next.call(null,more);
sb = G__298658;
more = G__298659;
continue;
}
} else
{return cljs.core.str_STAR_.call(null,sb);
}
break;
}
}).call(null,(new goog.string.StringBuffer(str.call(null,x))),ys);
};
var G__298657 = function (x,var_args){
var ys = null;
if (goog.isDef(var_args)) {
  ys = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__298657__delegate.call(this, x, ys);
};
G__298657.cljs$lang$maxFixedArity = 1;
G__298657.cljs$lang$applyTo = (function (arglist__298660){
var x = cljs.core.first(arglist__298660);
var ys = cljs.core.rest(arglist__298660);
return G__298657__delegate.call(this, x, ys);
});
return G__298657;
})()
;
str = function(x,var_args){
var ys = var_args;
switch(arguments.length){
case  0 :
return str__298653.call(this);
case  1 :
return str__298654.call(this,x);
default:
return str__298655.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
str.cljs$lang$maxFixedArity = 1;
str.cljs$lang$applyTo = str__298655.cljs$lang$applyTo;
return str;
})()
;
/**
* Returns the substring of s beginning at start inclusive, and ending
* at end (defaults to length of string), exclusive.
*/
cljs.core.subs = (function() {
var subs = null;
var subs__298661 = (function (s,start){
return s.substring(start);
});
var subs__298662 = (function (s,start,end){
return s.substring(start,end);
});
subs = function(s,start,end){
switch(arguments.length){
case  2 :
return subs__298661.call(this,s,start);
case  3 :
return subs__298662.call(this,s,start,end);
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
var symbol__298664 = (function (name){
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
var symbol__298665 = (function (ns,name){
return symbol.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
symbol = function(ns,name){
switch(arguments.length){
case  1 :
return symbol__298664.call(this,ns);
case  2 :
return symbol__298665.call(this,ns,name);
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
var keyword__298667 = (function (name){
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
var keyword__298668 = (function (ns,name){
return keyword.call(null,cljs.core.str_STAR_.call(null,ns,"/",name));
});
keyword = function(ns,name){
switch(arguments.length){
case  1 :
return keyword__298667.call(this,ns);
case  2 :
return keyword__298668.call(this,ns,name);
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
return cljs.core.boolean$.call(null,(cljs.core.truth_(cljs.core.sequential_QMARK_.call(null,y))?(function (){var xs__298670 = cljs.core.seq.call(null,x);
var ys__298671 = cljs.core.seq.call(null,y);

while(true){
if(cljs.core.truth_((xs__298670 === null)))
{return (ys__298671 === null);
} else
{if(cljs.core.truth_((ys__298671 === null)))
{return false;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,xs__298670),cljs.core.first.call(null,ys__298671))))
{{
var G__298672 = cljs.core.next.call(null,xs__298670);
var G__298673 = cljs.core.next.call(null,ys__298671);
xs__298670 = G__298672;
ys__298671 = G__298673;
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
return cljs.core.reduce.call(null,(function (p1__298674_SHARP_,p2__298675_SHARP_){
return cljs.core.hash_combine.call(null,p1__298674_SHARP_,cljs.core.hash.call(null,p2__298675_SHARP_));
}),cljs.core.hash.call(null,cljs.core.first.call(null,coll)),cljs.core.next.call(null,coll));
});
/**
* Takes a JavaScript object and a map of names to functions and
* attaches said functions as methods on the object.  Any references to
* JavaScript's implict this (via the this-as macro) will resolve to the
* object that the function is attached.
*/
cljs.core.extend_object_BANG_ = (function extend_object_BANG_(obj,fn_map){
var G__298676__298677 = cljs.core.seq.call(null,fn_map);

if(cljs.core.truth_(G__298676__298677))
{var G__298679__298681 = cljs.core.first.call(null,G__298676__298677);
var vec__298680__298682 = G__298679__298681;
var key_name__298683 = cljs.core.nth.call(null,vec__298680__298682,0,null);
var f__298684 = cljs.core.nth.call(null,vec__298680__298682,1,null);
var G__298676__298685 = G__298676__298677;

var G__298679__298686 = G__298679__298681;
var G__298676__298687 = G__298676__298685;

while(true){
var vec__298688__298689 = G__298679__298686;
var key_name__298690 = cljs.core.nth.call(null,vec__298688__298689,0,null);
var f__298691 = cljs.core.nth.call(null,vec__298688__298689,1,null);
var G__298676__298692 = G__298676__298687;

var str_name__298693 = cljs.core.name.call(null,key_name__298690);

obj[str_name__298693] = f__298691;
var temp__3698__auto____298694 = cljs.core.next.call(null,G__298676__298692);

if(cljs.core.truth_(temp__3698__auto____298694))
{var G__298676__298695 = temp__3698__auto____298694;

{
var G__298696 = cljs.core.first.call(null,G__298676__298695);
var G__298697 = G__298676__298695;
G__298679__298686 = G__298696;
G__298676__298687 = G__298697;
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
var this__298698 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISequential$ = true;
cljs.core.List.prototype.cljs$core$ICollection$ = true;
cljs.core.List.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__298699 = this;
return (new cljs.core.List(this__298699.meta,o,coll,(this__298699.count + 1)));
});
cljs.core.List.prototype.cljs$core$ISeqable$ = true;
cljs.core.List.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__298700 = this;
return coll;
});
cljs.core.List.prototype.cljs$core$ICounted$ = true;
cljs.core.List.prototype.cljs$core$ICounted$_count = (function (coll){
var this__298701 = this;
return this__298701.count;
});
cljs.core.List.prototype.cljs$core$IStack$ = true;
cljs.core.List.prototype.cljs$core$IStack$_peek = (function (coll){
var this__298702 = this;
return this__298702.first;
});
cljs.core.List.prototype.cljs$core$IStack$_pop = (function (coll){
var this__298703 = this;
return cljs.core._rest.call(null,coll);
});
cljs.core.List.prototype.cljs$core$ISeq$ = true;
cljs.core.List.prototype.cljs$core$ISeq$_first = (function (coll){
var this__298704 = this;
return this__298704.first;
});
cljs.core.List.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__298705 = this;
return this__298705.rest;
});
cljs.core.List.prototype.cljs$core$IEquiv$ = true;
cljs.core.List.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__298706 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.List.prototype.cljs$core$IWithMeta$ = true;
cljs.core.List.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__298707 = this;
return (new cljs.core.List(meta,this__298707.first,this__298707.rest,this__298707.count));
});
cljs.core.List.prototype.cljs$core$IMeta$ = true;
cljs.core.List.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__298708 = this;
return this__298708.meta;
});
cljs.core.List.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.List.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__298709 = this;
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
var this__298710 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.EmptyList.prototype.cljs$core$ISequential$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__298711 = this;
return (new cljs.core.List(this__298711.meta,o,null,1));
});
cljs.core.EmptyList.prototype.cljs$core$ISeqable$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__298712 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ICounted$ = true;
cljs.core.EmptyList.prototype.cljs$core$ICounted$_count = (function (coll){
var this__298713 = this;
return 0;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$ = true;
cljs.core.EmptyList.prototype.cljs$core$IStack$_peek = (function (coll){
var this__298714 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IStack$_pop = (function (coll){
var this__298715 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$ = true;
cljs.core.EmptyList.prototype.cljs$core$ISeq$_first = (function (coll){
var this__298716 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__298717 = this;
return null;
});
cljs.core.EmptyList.prototype.cljs$core$IEquiv$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__298718 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__298719 = this;
return (new cljs.core.EmptyList(meta));
});
cljs.core.EmptyList.prototype.cljs$core$IMeta$ = true;
cljs.core.EmptyList.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__298720 = this;
return this__298720.meta;
});
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.EmptyList.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__298721 = this;
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
list.cljs$lang$applyTo = (function (arglist__298722){
var items = cljs.core.seq( arglist__298722 );;
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
var this__298723 = this;
return coll;
});
cljs.core.Cons.prototype.cljs$core$IHash$ = true;
cljs.core.Cons.prototype.cljs$core$IHash$_hash = (function (coll){
var this__298724 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Cons.prototype.cljs$core$IEquiv$ = true;
cljs.core.Cons.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__298725 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Cons.prototype.cljs$core$ISequential$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Cons.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__298726 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__298726.meta);
});
cljs.core.Cons.prototype.cljs$core$ICollection$ = true;
cljs.core.Cons.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__298727 = this;
return (new cljs.core.Cons(null,o,coll));
});
cljs.core.Cons.prototype.cljs$core$ISeq$ = true;
cljs.core.Cons.prototype.cljs$core$ISeq$_first = (function (coll){
var this__298728 = this;
return this__298728.first;
});
cljs.core.Cons.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__298729 = this;
if(cljs.core.truth_((this__298729.rest === null)))
{return cljs.core.List.EMPTY;
} else
{return this__298729.rest;
}
});
cljs.core.Cons.prototype.cljs$core$IMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__298730 = this;
return this__298730.meta;
});
cljs.core.Cons.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Cons.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__298731 = this;
return (new cljs.core.Cons(meta,this__298731.first,this__298731.rest));
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
var G__298732 = null;
var G__298732__298733 = (function (string,f){
return cljs.core.ci_reduce.call(null,string,f);
});
var G__298732__298734 = (function (string,f,start){
return cljs.core.ci_reduce.call(null,string,f,start);
});
G__298732 = function(string,f,start){
switch(arguments.length){
case  2 :
return G__298732__298733.call(this,string,f);
case  3 :
return G__298732__298734.call(this,string,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__298732;
})()
);
(cljs.core.ILookup["string"] = true);
(cljs.core._lookup["string"] = (function() {
var G__298736 = null;
var G__298736__298737 = (function (string,k){
return cljs.core._nth.call(null,string,k);
});
var G__298736__298738 = (function (string,k,not_found){
return cljs.core._nth.call(null,string,k,not_found);
});
G__298736 = function(string,k,not_found){
switch(arguments.length){
case  2 :
return G__298736__298737.call(this,string,k);
case  3 :
return G__298736__298738.call(this,string,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__298736;
})()
);
(cljs.core.IIndexed["string"] = true);
(cljs.core._nth["string"] = (function() {
var G__298740 = null;
var G__298740__298741 = (function (string,n){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return null;
}
});
var G__298740__298742 = (function (string,n,not_found){
if(cljs.core.truth_((n < cljs.core._count.call(null,string))))
{return string.charAt(n);
} else
{return not_found;
}
});
G__298740 = function(string,n,not_found){
switch(arguments.length){
case  2 :
return G__298740__298741.call(this,string,n);
case  3 :
return G__298740__298742.call(this,string,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__298740;
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
var G__298750 = null;
var G__298750__298751 = (function (tsym298744,coll){
var tsym298744__298746 = this;

var this$__298747 = tsym298744__298746;

return cljs.core.get.call(null,coll,this$__298747.toString());
});
var G__298750__298752 = (function (tsym298745,coll,not_found){
var tsym298745__298748 = this;

var this$__298749 = tsym298745__298748;

return cljs.core.get.call(null,coll,this$__298749.toString(),not_found);
});
G__298750 = function(tsym298745,coll,not_found){
switch(arguments.length){
case  2 :
return G__298750__298751.call(this,tsym298745,coll);
case  3 :
return G__298750__298752.call(this,tsym298745,coll,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__298750;
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
var x__298754 = lazy_seq.x;

if(cljs.core.truth_(lazy_seq.realized))
{return x__298754;
} else
{lazy_seq.x = x__298754.call(null);
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
var this__298755 = this;
return cljs.core.seq.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IHash$ = true;
cljs.core.LazySeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__298756 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.LazySeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__298757 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.LazySeq.prototype.cljs$core$ISequential$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__298758 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__298758.meta);
});
cljs.core.LazySeq.prototype.cljs$core$ICollection$ = true;
cljs.core.LazySeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__298759 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$ = true;
cljs.core.LazySeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__298760 = this;
return cljs.core.first.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__298761 = this;
return cljs.core.rest.call(null,cljs.core.lazy_seq_value.call(null,coll));
});
cljs.core.LazySeq.prototype.cljs$core$IMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__298762 = this;
return this__298762.meta;
});
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.LazySeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__298763 = this;
return (new cljs.core.LazySeq(meta,this__298763.realized,this__298763.x));
});
cljs.core.LazySeq;
/**
* Naive impl of to-array as a start.
*/
cljs.core.to_array = (function to_array(s){
var ary__298764 = [];

var s__298765 = s;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__298765)))
{ary__298764.push(cljs.core.first.call(null,s__298765));
{
var G__298766 = cljs.core.next.call(null,s__298765);
s__298765 = G__298766;
continue;
}
} else
{return ary__298764;
}
break;
}
});
cljs.core.bounded_count = (function bounded_count(s,n){
var s__298767 = s;
var i__298768 = n;
var sum__298769 = 0;

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____298770 = (i__298768 > 0);

if(cljs.core.truth_(and__3546__auto____298770))
{return cljs.core.seq.call(null,s__298767);
} else
{return and__3546__auto____298770;
}
})()))
{{
var G__298771 = cljs.core.next.call(null,s__298767);
var G__298772 = (i__298768 - 1);
var G__298773 = (sum__298769 + 1);
s__298767 = G__298771;
i__298768 = G__298772;
sum__298769 = G__298773;
continue;
}
} else
{return sum__298769;
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
var concat__298777 = (function (){
return (new cljs.core.LazySeq(null,false,(function (){
return null;
})));
});
var concat__298778 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return x;
})));
});
var concat__298779 = (function (x,y){
return (new cljs.core.LazySeq(null,false,(function (){
var s__298774 = cljs.core.seq.call(null,x);

if(cljs.core.truth_(s__298774))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__298774),concat.call(null,cljs.core.rest.call(null,s__298774),y));
} else
{return y;
}
})));
});
var concat__298780 = (function() { 
var G__298782__delegate = function (x,y,zs){
var cat__298776 = (function cat(xys,zs){
return (new cljs.core.LazySeq(null,false,(function (){
var xys__298775 = cljs.core.seq.call(null,xys);

if(cljs.core.truth_(xys__298775))
{return cljs.core.cons.call(null,cljs.core.first.call(null,xys__298775),cat.call(null,cljs.core.rest.call(null,xys__298775),zs));
} else
{if(cljs.core.truth_(zs))
{return cat.call(null,cljs.core.first.call(null,zs),cljs.core.next.call(null,zs));
} else
{return null;
}
}
})));
});

return cat__298776.call(null,concat.call(null,x,y),zs);
};
var G__298782 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__298782__delegate.call(this, x, y, zs);
};
G__298782.cljs$lang$maxFixedArity = 2;
G__298782.cljs$lang$applyTo = (function (arglist__298783){
var x = cljs.core.first(arglist__298783);
var y = cljs.core.first(cljs.core.next(arglist__298783));
var zs = cljs.core.rest(cljs.core.next(arglist__298783));
return G__298782__delegate.call(this, x, y, zs);
});
return G__298782;
})()
;
concat = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return concat__298777.call(this);
case  1 :
return concat__298778.call(this,x);
case  2 :
return concat__298779.call(this,x,y);
default:
return concat__298780.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
concat.cljs$lang$maxFixedArity = 2;
concat.cljs$lang$applyTo = concat__298780.cljs$lang$applyTo;
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
var list_STAR___298784 = (function (args){
return cljs.core.seq.call(null,args);
});
var list_STAR___298785 = (function (a,args){
return cljs.core.cons.call(null,a,args);
});
var list_STAR___298786 = (function (a,b,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,args));
});
var list_STAR___298787 = (function (a,b,c,args){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,args)));
});
var list_STAR___298788 = (function() { 
var G__298790__delegate = function (a,b,c,d,more){
return cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,more)))));
};
var G__298790 = function (a,b,c,d,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__298790__delegate.call(this, a, b, c, d, more);
};
G__298790.cljs$lang$maxFixedArity = 4;
G__298790.cljs$lang$applyTo = (function (arglist__298791){
var a = cljs.core.first(arglist__298791);
var b = cljs.core.first(cljs.core.next(arglist__298791));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__298791)));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__298791))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__298791))));
return G__298790__delegate.call(this, a, b, c, d, more);
});
return G__298790;
})()
;
list_STAR_ = function(a,b,c,d,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return list_STAR___298784.call(this,a);
case  2 :
return list_STAR___298785.call(this,a,b);
case  3 :
return list_STAR___298786.call(this,a,b,c);
case  4 :
return list_STAR___298787.call(this,a,b,c,d);
default:
return list_STAR___298788.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
list_STAR_.cljs$lang$maxFixedArity = 4;
list_STAR_.cljs$lang$applyTo = list_STAR___298788.cljs$lang$applyTo;
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
var apply__298801 = (function (f,args){
var fixed_arity__298792 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,args,(fixed_arity__298792 + 1)) <= fixed_arity__298792)))
{return f.apply(f,cljs.core.to_array.call(null,args));
} else
{return f.cljs$lang$applyTo(args);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,args));
}
});
var apply__298802 = (function (f,x,args){
var arglist__298793 = cljs.core.list_STAR_.call(null,x,args);
var fixed_arity__298794 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__298793,fixed_arity__298794) <= fixed_arity__298794)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__298793));
} else
{return f.cljs$lang$applyTo(arglist__298793);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__298793));
}
});
var apply__298803 = (function (f,x,y,args){
var arglist__298795 = cljs.core.list_STAR_.call(null,x,y,args);
var fixed_arity__298796 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__298795,fixed_arity__298796) <= fixed_arity__298796)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__298795));
} else
{return f.cljs$lang$applyTo(arglist__298795);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__298795));
}
});
var apply__298804 = (function (f,x,y,z,args){
var arglist__298797 = cljs.core.list_STAR_.call(null,x,y,z,args);
var fixed_arity__298798 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__298797,fixed_arity__298798) <= fixed_arity__298798)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__298797));
} else
{return f.cljs$lang$applyTo(arglist__298797);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__298797));
}
});
var apply__298805 = (function() { 
var G__298807__delegate = function (f,a,b,c,d,args){
var arglist__298799 = cljs.core.cons.call(null,a,cljs.core.cons.call(null,b,cljs.core.cons.call(null,c,cljs.core.cons.call(null,d,cljs.core.spread.call(null,args)))));
var fixed_arity__298800 = f.cljs$lang$maxFixedArity;

if(cljs.core.truth_(f.cljs$lang$applyTo))
{if(cljs.core.truth_((cljs.core.bounded_count.call(null,arglist__298799,fixed_arity__298800) <= fixed_arity__298800)))
{return f.apply(f,cljs.core.to_array.call(null,arglist__298799));
} else
{return f.cljs$lang$applyTo(arglist__298799);
}
} else
{return f.apply(f,cljs.core.to_array.call(null,arglist__298799));
}
};
var G__298807 = function (f,a,b,c,d,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__298807__delegate.call(this, f, a, b, c, d, args);
};
G__298807.cljs$lang$maxFixedArity = 5;
G__298807.cljs$lang$applyTo = (function (arglist__298808){
var f = cljs.core.first(arglist__298808);
var a = cljs.core.first(cljs.core.next(arglist__298808));
var b = cljs.core.first(cljs.core.next(cljs.core.next(arglist__298808)));
var c = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__298808))));
var d = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__298808)))));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__298808)))));
return G__298807__delegate.call(this, f, a, b, c, d, args);
});
return G__298807;
})()
;
apply = function(f,a,b,c,d,var_args){
var args = var_args;
switch(arguments.length){
case  2 :
return apply__298801.call(this,f,a);
case  3 :
return apply__298802.call(this,f,a,b);
case  4 :
return apply__298803.call(this,f,a,b,c);
case  5 :
return apply__298804.call(this,f,a,b,c,d);
default:
return apply__298805.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
apply.cljs$lang$maxFixedArity = 5;
apply.cljs$lang$applyTo = apply__298805.cljs$lang$applyTo;
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
vary_meta.cljs$lang$applyTo = (function (arglist__298809){
var obj = cljs.core.first(arglist__298809);
var f = cljs.core.first(cljs.core.next(arglist__298809));
var args = cljs.core.rest(cljs.core.next(arglist__298809));
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
var not_EQ___298810 = (function (x){
return false;
});
var not_EQ___298811 = (function (x,y){
return cljs.core.not.call(null,cljs.core._EQ_.call(null,x,y));
});
var not_EQ___298812 = (function() { 
var G__298814__delegate = function (x,y,more){
return cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core._EQ_,x,y,more));
};
var G__298814 = function (x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__298814__delegate.call(this, x, y, more);
};
G__298814.cljs$lang$maxFixedArity = 2;
G__298814.cljs$lang$applyTo = (function (arglist__298815){
var x = cljs.core.first(arglist__298815);
var y = cljs.core.first(cljs.core.next(arglist__298815));
var more = cljs.core.rest(cljs.core.next(arglist__298815));
return G__298814__delegate.call(this, x, y, more);
});
return G__298814;
})()
;
not_EQ_ = function(x,y,var_args){
var more = var_args;
switch(arguments.length){
case  1 :
return not_EQ___298810.call(this,x);
case  2 :
return not_EQ___298811.call(this,x,y);
default:
return not_EQ___298812.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
not_EQ_.cljs$lang$maxFixedArity = 2;
not_EQ_.cljs$lang$applyTo = not_EQ___298812.cljs$lang$applyTo;
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
var G__298816 = pred;
var G__298817 = cljs.core.next.call(null,coll);
pred = G__298816;
coll = G__298817;
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
{var or__3548__auto____298818 = pred.call(null,cljs.core.first.call(null,coll));

if(cljs.core.truth_(or__3548__auto____298818))
{return or__3548__auto____298818;
} else
{{
var G__298819 = pred;
var G__298820 = cljs.core.next.call(null,coll);
pred = G__298819;
coll = G__298820;
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
var G__298821 = null;
var G__298821__298822 = (function (){
return cljs.core.not.call(null,f.call(null));
});
var G__298821__298823 = (function (x){
return cljs.core.not.call(null,f.call(null,x));
});
var G__298821__298824 = (function (x,y){
return cljs.core.not.call(null,f.call(null,x,y));
});
var G__298821__298825 = (function() { 
var G__298827__delegate = function (x,y,zs){
return cljs.core.not.call(null,cljs.core.apply.call(null,f,x,y,zs));
};
var G__298827 = function (x,y,var_args){
var zs = null;
if (goog.isDef(var_args)) {
  zs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__298827__delegate.call(this, x, y, zs);
};
G__298827.cljs$lang$maxFixedArity = 2;
G__298827.cljs$lang$applyTo = (function (arglist__298828){
var x = cljs.core.first(arglist__298828);
var y = cljs.core.first(cljs.core.next(arglist__298828));
var zs = cljs.core.rest(cljs.core.next(arglist__298828));
return G__298827__delegate.call(this, x, y, zs);
});
return G__298827;
})()
;
G__298821 = function(x,y,var_args){
var zs = var_args;
switch(arguments.length){
case  0 :
return G__298821__298822.call(this);
case  1 :
return G__298821__298823.call(this,x);
case  2 :
return G__298821__298824.call(this,x,y);
default:
return G__298821__298825.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__298821.cljs$lang$maxFixedArity = 2;
G__298821.cljs$lang$applyTo = G__298821__298825.cljs$lang$applyTo;
return G__298821;
})()
});
/**
* Returns a function that takes any number of arguments and returns x.
*/
cljs.core.constantly = (function constantly(x){
return (function() { 
var G__298829__delegate = function (args){
return x;
};
var G__298829 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__298829__delegate.call(this, args);
};
G__298829.cljs$lang$maxFixedArity = 0;
G__298829.cljs$lang$applyTo = (function (arglist__298830){
var args = cljs.core.seq( arglist__298830 );;
return G__298829__delegate.call(this, args);
});
return G__298829;
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
var comp__298834 = (function (){
return cljs.core.identity;
});
var comp__298835 = (function (f){
return f;
});
var comp__298836 = (function (f,g){
return (function() {
var G__298840 = null;
var G__298840__298841 = (function (){
return f.call(null,g.call(null));
});
var G__298840__298842 = (function (x){
return f.call(null,g.call(null,x));
});
var G__298840__298843 = (function (x,y){
return f.call(null,g.call(null,x,y));
});
var G__298840__298844 = (function (x,y,z){
return f.call(null,g.call(null,x,y,z));
});
var G__298840__298845 = (function() { 
var G__298847__delegate = function (x,y,z,args){
return f.call(null,cljs.core.apply.call(null,g,x,y,z,args));
};
var G__298847 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__298847__delegate.call(this, x, y, z, args);
};
G__298847.cljs$lang$maxFixedArity = 3;
G__298847.cljs$lang$applyTo = (function (arglist__298848){
var x = cljs.core.first(arglist__298848);
var y = cljs.core.first(cljs.core.next(arglist__298848));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__298848)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__298848)));
return G__298847__delegate.call(this, x, y, z, args);
});
return G__298847;
})()
;
G__298840 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__298840__298841.call(this);
case  1 :
return G__298840__298842.call(this,x);
case  2 :
return G__298840__298843.call(this,x,y);
case  3 :
return G__298840__298844.call(this,x,y,z);
default:
return G__298840__298845.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__298840.cljs$lang$maxFixedArity = 3;
G__298840.cljs$lang$applyTo = G__298840__298845.cljs$lang$applyTo;
return G__298840;
})()
});
var comp__298837 = (function (f,g,h){
return (function() {
var G__298849 = null;
var G__298849__298850 = (function (){
return f.call(null,g.call(null,h.call(null)));
});
var G__298849__298851 = (function (x){
return f.call(null,g.call(null,h.call(null,x)));
});
var G__298849__298852 = (function (x,y){
return f.call(null,g.call(null,h.call(null,x,y)));
});
var G__298849__298853 = (function (x,y,z){
return f.call(null,g.call(null,h.call(null,x,y,z)));
});
var G__298849__298854 = (function() { 
var G__298856__delegate = function (x,y,z,args){
return f.call(null,g.call(null,cljs.core.apply.call(null,h,x,y,z,args)));
};
var G__298856 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__298856__delegate.call(this, x, y, z, args);
};
G__298856.cljs$lang$maxFixedArity = 3;
G__298856.cljs$lang$applyTo = (function (arglist__298857){
var x = cljs.core.first(arglist__298857);
var y = cljs.core.first(cljs.core.next(arglist__298857));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__298857)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__298857)));
return G__298856__delegate.call(this, x, y, z, args);
});
return G__298856;
})()
;
G__298849 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__298849__298850.call(this);
case  1 :
return G__298849__298851.call(this,x);
case  2 :
return G__298849__298852.call(this,x,y);
case  3 :
return G__298849__298853.call(this,x,y,z);
default:
return G__298849__298854.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__298849.cljs$lang$maxFixedArity = 3;
G__298849.cljs$lang$applyTo = G__298849__298854.cljs$lang$applyTo;
return G__298849;
})()
});
var comp__298838 = (function() { 
var G__298858__delegate = function (f1,f2,f3,fs){
var fs__298831 = cljs.core.reverse.call(null,cljs.core.list_STAR_.call(null,f1,f2,f3,fs));

return (function() { 
var G__298859__delegate = function (args){
var ret__298832 = cljs.core.apply.call(null,cljs.core.first.call(null,fs__298831),args);
var fs__298833 = cljs.core.next.call(null,fs__298831);

while(true){
if(cljs.core.truth_(fs__298833))
{{
var G__298860 = cljs.core.first.call(null,fs__298833).call(null,ret__298832);
var G__298861 = cljs.core.next.call(null,fs__298833);
ret__298832 = G__298860;
fs__298833 = G__298861;
continue;
}
} else
{return ret__298832;
}
break;
}
};
var G__298859 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__298859__delegate.call(this, args);
};
G__298859.cljs$lang$maxFixedArity = 0;
G__298859.cljs$lang$applyTo = (function (arglist__298862){
var args = cljs.core.seq( arglist__298862 );;
return G__298859__delegate.call(this, args);
});
return G__298859;
})()
;
};
var G__298858 = function (f1,f2,f3,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__298858__delegate.call(this, f1, f2, f3, fs);
};
G__298858.cljs$lang$maxFixedArity = 3;
G__298858.cljs$lang$applyTo = (function (arglist__298863){
var f1 = cljs.core.first(arglist__298863);
var f2 = cljs.core.first(cljs.core.next(arglist__298863));
var f3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__298863)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__298863)));
return G__298858__delegate.call(this, f1, f2, f3, fs);
});
return G__298858;
})()
;
comp = function(f1,f2,f3,var_args){
var fs = var_args;
switch(arguments.length){
case  0 :
return comp__298834.call(this);
case  1 :
return comp__298835.call(this,f1);
case  2 :
return comp__298836.call(this,f1,f2);
case  3 :
return comp__298837.call(this,f1,f2,f3);
default:
return comp__298838.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
comp.cljs$lang$maxFixedArity = 3;
comp.cljs$lang$applyTo = comp__298838.cljs$lang$applyTo;
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
var partial__298864 = (function (f,arg1){
return (function() { 
var G__298869__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,args);
};
var G__298869 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__298869__delegate.call(this, args);
};
G__298869.cljs$lang$maxFixedArity = 0;
G__298869.cljs$lang$applyTo = (function (arglist__298870){
var args = cljs.core.seq( arglist__298870 );;
return G__298869__delegate.call(this, args);
});
return G__298869;
})()
;
});
var partial__298865 = (function (f,arg1,arg2){
return (function() { 
var G__298871__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,args);
};
var G__298871 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__298871__delegate.call(this, args);
};
G__298871.cljs$lang$maxFixedArity = 0;
G__298871.cljs$lang$applyTo = (function (arglist__298872){
var args = cljs.core.seq( arglist__298872 );;
return G__298871__delegate.call(this, args);
});
return G__298871;
})()
;
});
var partial__298866 = (function (f,arg1,arg2,arg3){
return (function() { 
var G__298873__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,args);
};
var G__298873 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__298873__delegate.call(this, args);
};
G__298873.cljs$lang$maxFixedArity = 0;
G__298873.cljs$lang$applyTo = (function (arglist__298874){
var args = cljs.core.seq( arglist__298874 );;
return G__298873__delegate.call(this, args);
});
return G__298873;
})()
;
});
var partial__298867 = (function() { 
var G__298875__delegate = function (f,arg1,arg2,arg3,more){
return (function() { 
var G__298876__delegate = function (args){
return cljs.core.apply.call(null,f,arg1,arg2,arg3,cljs.core.concat.call(null,more,args));
};
var G__298876 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__298876__delegate.call(this, args);
};
G__298876.cljs$lang$maxFixedArity = 0;
G__298876.cljs$lang$applyTo = (function (arglist__298877){
var args = cljs.core.seq( arglist__298877 );;
return G__298876__delegate.call(this, args);
});
return G__298876;
})()
;
};
var G__298875 = function (f,arg1,arg2,arg3,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__298875__delegate.call(this, f, arg1, arg2, arg3, more);
};
G__298875.cljs$lang$maxFixedArity = 4;
G__298875.cljs$lang$applyTo = (function (arglist__298878){
var f = cljs.core.first(arglist__298878);
var arg1 = cljs.core.first(cljs.core.next(arglist__298878));
var arg2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__298878)));
var arg3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__298878))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__298878))));
return G__298875__delegate.call(this, f, arg1, arg2, arg3, more);
});
return G__298875;
})()
;
partial = function(f,arg1,arg2,arg3,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return partial__298864.call(this,f,arg1);
case  3 :
return partial__298865.call(this,f,arg1,arg2);
case  4 :
return partial__298866.call(this,f,arg1,arg2,arg3);
default:
return partial__298867.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
partial.cljs$lang$maxFixedArity = 4;
partial.cljs$lang$applyTo = partial__298867.cljs$lang$applyTo;
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
var fnil__298879 = (function (f,x){
return (function() {
var G__298883 = null;
var G__298883__298884 = (function (a){
return f.call(null,(cljs.core.truth_((a === null))?x:a));
});
var G__298883__298885 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b);
});
var G__298883__298886 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),b,c);
});
var G__298883__298887 = (function() { 
var G__298889__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),b,c,ds);
};
var G__298889 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__298889__delegate.call(this, a, b, c, ds);
};
G__298889.cljs$lang$maxFixedArity = 3;
G__298889.cljs$lang$applyTo = (function (arglist__298890){
var a = cljs.core.first(arglist__298890);
var b = cljs.core.first(cljs.core.next(arglist__298890));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__298890)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__298890)));
return G__298889__delegate.call(this, a, b, c, ds);
});
return G__298889;
})()
;
G__298883 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  1 :
return G__298883__298884.call(this,a);
case  2 :
return G__298883__298885.call(this,a,b);
case  3 :
return G__298883__298886.call(this,a,b,c);
default:
return G__298883__298887.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__298883.cljs$lang$maxFixedArity = 3;
G__298883.cljs$lang$applyTo = G__298883__298887.cljs$lang$applyTo;
return G__298883;
})()
});
var fnil__298880 = (function (f,x,y){
return (function() {
var G__298891 = null;
var G__298891__298892 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__298891__298893 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c);
});
var G__298891__298894 = (function() { 
var G__298896__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),c,ds);
};
var G__298896 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__298896__delegate.call(this, a, b, c, ds);
};
G__298896.cljs$lang$maxFixedArity = 3;
G__298896.cljs$lang$applyTo = (function (arglist__298897){
var a = cljs.core.first(arglist__298897);
var b = cljs.core.first(cljs.core.next(arglist__298897));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__298897)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__298897)));
return G__298896__delegate.call(this, a, b, c, ds);
});
return G__298896;
})()
;
G__298891 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__298891__298892.call(this,a,b);
case  3 :
return G__298891__298893.call(this,a,b,c);
default:
return G__298891__298894.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__298891.cljs$lang$maxFixedArity = 3;
G__298891.cljs$lang$applyTo = G__298891__298894.cljs$lang$applyTo;
return G__298891;
})()
});
var fnil__298881 = (function (f,x,y,z){
return (function() {
var G__298898 = null;
var G__298898__298899 = (function (a,b){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b));
});
var G__298898__298900 = (function (a,b,c){
return f.call(null,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c));
});
var G__298898__298901 = (function() { 
var G__298903__delegate = function (a,b,c,ds){
return cljs.core.apply.call(null,f,(cljs.core.truth_((a === null))?x:a),(cljs.core.truth_((b === null))?y:b),(cljs.core.truth_((c === null))?z:c),ds);
};
var G__298903 = function (a,b,c,var_args){
var ds = null;
if (goog.isDef(var_args)) {
  ds = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__298903__delegate.call(this, a, b, c, ds);
};
G__298903.cljs$lang$maxFixedArity = 3;
G__298903.cljs$lang$applyTo = (function (arglist__298904){
var a = cljs.core.first(arglist__298904);
var b = cljs.core.first(cljs.core.next(arglist__298904));
var c = cljs.core.first(cljs.core.next(cljs.core.next(arglist__298904)));
var ds = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__298904)));
return G__298903__delegate.call(this, a, b, c, ds);
});
return G__298903;
})()
;
G__298898 = function(a,b,c,var_args){
var ds = var_args;
switch(arguments.length){
case  2 :
return G__298898__298899.call(this,a,b);
case  3 :
return G__298898__298900.call(this,a,b,c);
default:
return G__298898__298901.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__298898.cljs$lang$maxFixedArity = 3;
G__298898.cljs$lang$applyTo = G__298898__298901.cljs$lang$applyTo;
return G__298898;
})()
});
fnil = function(f,x,y,z){
switch(arguments.length){
case  2 :
return fnil__298879.call(this,f,x);
case  3 :
return fnil__298880.call(this,f,x,y);
case  4 :
return fnil__298881.call(this,f,x,y,z);
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
var mapi__298907 = (function mpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____298905 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____298905))
{var s__298906 = temp__3698__auto____298905;

return cljs.core.cons.call(null,f.call(null,idx,cljs.core.first.call(null,s__298906)),mpi.call(null,(idx + 1),cljs.core.rest.call(null,s__298906)));
} else
{return null;
}
})));
});

return mapi__298907.call(null,0,coll);
});
/**
* Returns a lazy sequence of the non-nil results of (f item). Note,
* this means false return values will be included.  f must be free of
* side-effects.
*/
cljs.core.keep = (function keep(f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____298908 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____298908))
{var s__298909 = temp__3698__auto____298908;

var x__298910 = f.call(null,cljs.core.first.call(null,s__298909));

if(cljs.core.truth_((x__298910 === null)))
{return keep.call(null,f,cljs.core.rest.call(null,s__298909));
} else
{return cljs.core.cons.call(null,x__298910,keep.call(null,f,cljs.core.rest.call(null,s__298909)));
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
var keepi__298920 = (function kpi(idx,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____298917 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____298917))
{var s__298918 = temp__3698__auto____298917;

var x__298919 = f.call(null,idx,cljs.core.first.call(null,s__298918));

if(cljs.core.truth_((x__298919 === null)))
{return kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__298918));
} else
{return cljs.core.cons.call(null,x__298919,kpi.call(null,(idx + 1),cljs.core.rest.call(null,s__298918)));
}
} else
{return null;
}
})));
});

return keepi__298920.call(null,0,coll);
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
var every_pred__298965 = (function (p){
return (function() {
var ep1 = null;
var ep1__298970 = (function (){
return true;
});
var ep1__298971 = (function (x){
return cljs.core.boolean$.call(null,p.call(null,x));
});
var ep1__298972 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____298927 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____298927))
{return p.call(null,y);
} else
{return and__3546__auto____298927;
}
})());
});
var ep1__298973 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____298928 = p.call(null,x);

if(cljs.core.truth_(and__3546__auto____298928))
{var and__3546__auto____298929 = p.call(null,y);

if(cljs.core.truth_(and__3546__auto____298929))
{return p.call(null,z);
} else
{return and__3546__auto____298929;
}
} else
{return and__3546__auto____298928;
}
})());
});
var ep1__298974 = (function() { 
var G__298976__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____298930 = ep1.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____298930))
{return cljs.core.every_QMARK_.call(null,p,args);
} else
{return and__3546__auto____298930;
}
})());
};
var G__298976 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__298976__delegate.call(this, x, y, z, args);
};
G__298976.cljs$lang$maxFixedArity = 3;
G__298976.cljs$lang$applyTo = (function (arglist__298977){
var x = cljs.core.first(arglist__298977);
var y = cljs.core.first(cljs.core.next(arglist__298977));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__298977)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__298977)));
return G__298976__delegate.call(this, x, y, z, args);
});
return G__298976;
})()
;
ep1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep1__298970.call(this);
case  1 :
return ep1__298971.call(this,x);
case  2 :
return ep1__298972.call(this,x,y);
case  3 :
return ep1__298973.call(this,x,y,z);
default:
return ep1__298974.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep1.cljs$lang$maxFixedArity = 3;
ep1.cljs$lang$applyTo = ep1__298974.cljs$lang$applyTo;
return ep1;
})()
});
var every_pred__298966 = (function (p1,p2){
return (function() {
var ep2 = null;
var ep2__298978 = (function (){
return true;
});
var ep2__298979 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____298931 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____298931))
{return p2.call(null,x);
} else
{return and__3546__auto____298931;
}
})());
});
var ep2__298980 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____298932 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____298932))
{var and__3546__auto____298933 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____298933))
{var and__3546__auto____298934 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____298934))
{return p2.call(null,y);
} else
{return and__3546__auto____298934;
}
} else
{return and__3546__auto____298933;
}
} else
{return and__3546__auto____298932;
}
})());
});
var ep2__298981 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____298935 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____298935))
{var and__3546__auto____298936 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____298936))
{var and__3546__auto____298937 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____298937))
{var and__3546__auto____298938 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____298938))
{var and__3546__auto____298939 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____298939))
{return p2.call(null,z);
} else
{return and__3546__auto____298939;
}
} else
{return and__3546__auto____298938;
}
} else
{return and__3546__auto____298937;
}
} else
{return and__3546__auto____298936;
}
} else
{return and__3546__auto____298935;
}
})());
});
var ep2__298982 = (function() { 
var G__298984__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____298940 = ep2.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____298940))
{return cljs.core.every_QMARK_.call(null,(function (p1__298911_SHARP_){
var and__3546__auto____298941 = p1.call(null,p1__298911_SHARP_);

if(cljs.core.truth_(and__3546__auto____298941))
{return p2.call(null,p1__298911_SHARP_);
} else
{return and__3546__auto____298941;
}
}),args);
} else
{return and__3546__auto____298940;
}
})());
};
var G__298984 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__298984__delegate.call(this, x, y, z, args);
};
G__298984.cljs$lang$maxFixedArity = 3;
G__298984.cljs$lang$applyTo = (function (arglist__298985){
var x = cljs.core.first(arglist__298985);
var y = cljs.core.first(cljs.core.next(arglist__298985));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__298985)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__298985)));
return G__298984__delegate.call(this, x, y, z, args);
});
return G__298984;
})()
;
ep2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep2__298978.call(this);
case  1 :
return ep2__298979.call(this,x);
case  2 :
return ep2__298980.call(this,x,y);
case  3 :
return ep2__298981.call(this,x,y,z);
default:
return ep2__298982.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep2.cljs$lang$maxFixedArity = 3;
ep2.cljs$lang$applyTo = ep2__298982.cljs$lang$applyTo;
return ep2;
})()
});
var every_pred__298967 = (function (p1,p2,p3){
return (function() {
var ep3 = null;
var ep3__298986 = (function (){
return true;
});
var ep3__298987 = (function (x){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____298942 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____298942))
{var and__3546__auto____298943 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____298943))
{return p3.call(null,x);
} else
{return and__3546__auto____298943;
}
} else
{return and__3546__auto____298942;
}
})());
});
var ep3__298988 = (function (x,y){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____298944 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____298944))
{var and__3546__auto____298945 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____298945))
{var and__3546__auto____298946 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____298946))
{var and__3546__auto____298947 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____298947))
{var and__3546__auto____298948 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____298948))
{return p3.call(null,y);
} else
{return and__3546__auto____298948;
}
} else
{return and__3546__auto____298947;
}
} else
{return and__3546__auto____298946;
}
} else
{return and__3546__auto____298945;
}
} else
{return and__3546__auto____298944;
}
})());
});
var ep3__298989 = (function (x,y,z){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____298949 = p1.call(null,x);

if(cljs.core.truth_(and__3546__auto____298949))
{var and__3546__auto____298950 = p2.call(null,x);

if(cljs.core.truth_(and__3546__auto____298950))
{var and__3546__auto____298951 = p3.call(null,x);

if(cljs.core.truth_(and__3546__auto____298951))
{var and__3546__auto____298952 = p1.call(null,y);

if(cljs.core.truth_(and__3546__auto____298952))
{var and__3546__auto____298953 = p2.call(null,y);

if(cljs.core.truth_(and__3546__auto____298953))
{var and__3546__auto____298954 = p3.call(null,y);

if(cljs.core.truth_(and__3546__auto____298954))
{var and__3546__auto____298955 = p1.call(null,z);

if(cljs.core.truth_(and__3546__auto____298955))
{var and__3546__auto____298956 = p2.call(null,z);

if(cljs.core.truth_(and__3546__auto____298956))
{return p3.call(null,z);
} else
{return and__3546__auto____298956;
}
} else
{return and__3546__auto____298955;
}
} else
{return and__3546__auto____298954;
}
} else
{return and__3546__auto____298953;
}
} else
{return and__3546__auto____298952;
}
} else
{return and__3546__auto____298951;
}
} else
{return and__3546__auto____298950;
}
} else
{return and__3546__auto____298949;
}
})());
});
var ep3__298990 = (function() { 
var G__298992__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____298957 = ep3.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____298957))
{return cljs.core.every_QMARK_.call(null,(function (p1__298912_SHARP_){
var and__3546__auto____298958 = p1.call(null,p1__298912_SHARP_);

if(cljs.core.truth_(and__3546__auto____298958))
{var and__3546__auto____298959 = p2.call(null,p1__298912_SHARP_);

if(cljs.core.truth_(and__3546__auto____298959))
{return p3.call(null,p1__298912_SHARP_);
} else
{return and__3546__auto____298959;
}
} else
{return and__3546__auto____298958;
}
}),args);
} else
{return and__3546__auto____298957;
}
})());
};
var G__298992 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__298992__delegate.call(this, x, y, z, args);
};
G__298992.cljs$lang$maxFixedArity = 3;
G__298992.cljs$lang$applyTo = (function (arglist__298993){
var x = cljs.core.first(arglist__298993);
var y = cljs.core.first(cljs.core.next(arglist__298993));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__298993)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__298993)));
return G__298992__delegate.call(this, x, y, z, args);
});
return G__298992;
})()
;
ep3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return ep3__298986.call(this);
case  1 :
return ep3__298987.call(this,x);
case  2 :
return ep3__298988.call(this,x,y);
case  3 :
return ep3__298989.call(this,x,y,z);
default:
return ep3__298990.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
ep3.cljs$lang$maxFixedArity = 3;
ep3.cljs$lang$applyTo = ep3__298990.cljs$lang$applyTo;
return ep3;
})()
});
var every_pred__298968 = (function() { 
var G__298994__delegate = function (p1,p2,p3,ps){
var ps__298960 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var epn = null;
var epn__298995 = (function (){
return true;
});
var epn__298996 = (function (x){
return cljs.core.every_QMARK_.call(null,(function (p1__298913_SHARP_){
return p1__298913_SHARP_.call(null,x);
}),ps__298960);
});
var epn__298997 = (function (x,y){
return cljs.core.every_QMARK_.call(null,(function (p1__298914_SHARP_){
var and__3546__auto____298961 = p1__298914_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____298961))
{return p1__298914_SHARP_.call(null,y);
} else
{return and__3546__auto____298961;
}
}),ps__298960);
});
var epn__298998 = (function (x,y,z){
return cljs.core.every_QMARK_.call(null,(function (p1__298915_SHARP_){
var and__3546__auto____298962 = p1__298915_SHARP_.call(null,x);

if(cljs.core.truth_(and__3546__auto____298962))
{var and__3546__auto____298963 = p1__298915_SHARP_.call(null,y);

if(cljs.core.truth_(and__3546__auto____298963))
{return p1__298915_SHARP_.call(null,z);
} else
{return and__3546__auto____298963;
}
} else
{return and__3546__auto____298962;
}
}),ps__298960);
});
var epn__298999 = (function() { 
var G__299001__delegate = function (x,y,z,args){
return cljs.core.boolean$.call(null,(function (){var and__3546__auto____298964 = epn.call(null,x,y,z);

if(cljs.core.truth_(and__3546__auto____298964))
{return cljs.core.every_QMARK_.call(null,(function (p1__298916_SHARP_){
return cljs.core.every_QMARK_.call(null,p1__298916_SHARP_,args);
}),ps__298960);
} else
{return and__3546__auto____298964;
}
})());
};
var G__299001 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__299001__delegate.call(this, x, y, z, args);
};
G__299001.cljs$lang$maxFixedArity = 3;
G__299001.cljs$lang$applyTo = (function (arglist__299002){
var x = cljs.core.first(arglist__299002);
var y = cljs.core.first(cljs.core.next(arglist__299002));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__299002)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__299002)));
return G__299001__delegate.call(this, x, y, z, args);
});
return G__299001;
})()
;
epn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return epn__298995.call(this);
case  1 :
return epn__298996.call(this,x);
case  2 :
return epn__298997.call(this,x,y);
case  3 :
return epn__298998.call(this,x,y,z);
default:
return epn__298999.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
epn.cljs$lang$maxFixedArity = 3;
epn.cljs$lang$applyTo = epn__298999.cljs$lang$applyTo;
return epn;
})()
};
var G__298994 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__298994__delegate.call(this, p1, p2, p3, ps);
};
G__298994.cljs$lang$maxFixedArity = 3;
G__298994.cljs$lang$applyTo = (function (arglist__299003){
var p1 = cljs.core.first(arglist__299003);
var p2 = cljs.core.first(cljs.core.next(arglist__299003));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__299003)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__299003)));
return G__298994__delegate.call(this, p1, p2, p3, ps);
});
return G__298994;
})()
;
every_pred = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return every_pred__298965.call(this,p1);
case  2 :
return every_pred__298966.call(this,p1,p2);
case  3 :
return every_pred__298967.call(this,p1,p2,p3);
default:
return every_pred__298968.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
every_pred.cljs$lang$maxFixedArity = 3;
every_pred.cljs$lang$applyTo = every_pred__298968.cljs$lang$applyTo;
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
var some_fn__299043 = (function (p){
return (function() {
var sp1 = null;
var sp1__299048 = (function (){
return null;
});
var sp1__299049 = (function (x){
return p.call(null,x);
});
var sp1__299050 = (function (x,y){
var or__3548__auto____299005 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____299005))
{return or__3548__auto____299005;
} else
{return p.call(null,y);
}
});
var sp1__299051 = (function (x,y,z){
var or__3548__auto____299006 = p.call(null,x);

if(cljs.core.truth_(or__3548__auto____299006))
{return or__3548__auto____299006;
} else
{var or__3548__auto____299007 = p.call(null,y);

if(cljs.core.truth_(or__3548__auto____299007))
{return or__3548__auto____299007;
} else
{return p.call(null,z);
}
}
});
var sp1__299052 = (function() { 
var G__299054__delegate = function (x,y,z,args){
var or__3548__auto____299008 = sp1.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____299008))
{return or__3548__auto____299008;
} else
{return cljs.core.some.call(null,p,args);
}
};
var G__299054 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__299054__delegate.call(this, x, y, z, args);
};
G__299054.cljs$lang$maxFixedArity = 3;
G__299054.cljs$lang$applyTo = (function (arglist__299055){
var x = cljs.core.first(arglist__299055);
var y = cljs.core.first(cljs.core.next(arglist__299055));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__299055)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__299055)));
return G__299054__delegate.call(this, x, y, z, args);
});
return G__299054;
})()
;
sp1 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp1__299048.call(this);
case  1 :
return sp1__299049.call(this,x);
case  2 :
return sp1__299050.call(this,x,y);
case  3 :
return sp1__299051.call(this,x,y,z);
default:
return sp1__299052.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp1.cljs$lang$maxFixedArity = 3;
sp1.cljs$lang$applyTo = sp1__299052.cljs$lang$applyTo;
return sp1;
})()
});
var some_fn__299044 = (function (p1,p2){
return (function() {
var sp2 = null;
var sp2__299056 = (function (){
return null;
});
var sp2__299057 = (function (x){
var or__3548__auto____299009 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____299009))
{return or__3548__auto____299009;
} else
{return p2.call(null,x);
}
});
var sp2__299058 = (function (x,y){
var or__3548__auto____299010 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____299010))
{return or__3548__auto____299010;
} else
{var or__3548__auto____299011 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____299011))
{return or__3548__auto____299011;
} else
{var or__3548__auto____299012 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____299012))
{return or__3548__auto____299012;
} else
{return p2.call(null,y);
}
}
}
});
var sp2__299059 = (function (x,y,z){
var or__3548__auto____299013 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____299013))
{return or__3548__auto____299013;
} else
{var or__3548__auto____299014 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____299014))
{return or__3548__auto____299014;
} else
{var or__3548__auto____299015 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____299015))
{return or__3548__auto____299015;
} else
{var or__3548__auto____299016 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____299016))
{return or__3548__auto____299016;
} else
{var or__3548__auto____299017 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____299017))
{return or__3548__auto____299017;
} else
{return p2.call(null,z);
}
}
}
}
}
});
var sp2__299060 = (function() { 
var G__299062__delegate = function (x,y,z,args){
var or__3548__auto____299018 = sp2.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____299018))
{return or__3548__auto____299018;
} else
{return cljs.core.some.call(null,(function (p1__298921_SHARP_){
var or__3548__auto____299019 = p1.call(null,p1__298921_SHARP_);

if(cljs.core.truth_(or__3548__auto____299019))
{return or__3548__auto____299019;
} else
{return p2.call(null,p1__298921_SHARP_);
}
}),args);
}
};
var G__299062 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__299062__delegate.call(this, x, y, z, args);
};
G__299062.cljs$lang$maxFixedArity = 3;
G__299062.cljs$lang$applyTo = (function (arglist__299063){
var x = cljs.core.first(arglist__299063);
var y = cljs.core.first(cljs.core.next(arglist__299063));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__299063)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__299063)));
return G__299062__delegate.call(this, x, y, z, args);
});
return G__299062;
})()
;
sp2 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp2__299056.call(this);
case  1 :
return sp2__299057.call(this,x);
case  2 :
return sp2__299058.call(this,x,y);
case  3 :
return sp2__299059.call(this,x,y,z);
default:
return sp2__299060.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp2.cljs$lang$maxFixedArity = 3;
sp2.cljs$lang$applyTo = sp2__299060.cljs$lang$applyTo;
return sp2;
})()
});
var some_fn__299045 = (function (p1,p2,p3){
return (function() {
var sp3 = null;
var sp3__299064 = (function (){
return null;
});
var sp3__299065 = (function (x){
var or__3548__auto____299020 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____299020))
{return or__3548__auto____299020;
} else
{var or__3548__auto____299021 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____299021))
{return or__3548__auto____299021;
} else
{return p3.call(null,x);
}
}
});
var sp3__299066 = (function (x,y){
var or__3548__auto____299022 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____299022))
{return or__3548__auto____299022;
} else
{var or__3548__auto____299023 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____299023))
{return or__3548__auto____299023;
} else
{var or__3548__auto____299024 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____299024))
{return or__3548__auto____299024;
} else
{var or__3548__auto____299025 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____299025))
{return or__3548__auto____299025;
} else
{var or__3548__auto____299026 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____299026))
{return or__3548__auto____299026;
} else
{return p3.call(null,y);
}
}
}
}
}
});
var sp3__299067 = (function (x,y,z){
var or__3548__auto____299027 = p1.call(null,x);

if(cljs.core.truth_(or__3548__auto____299027))
{return or__3548__auto____299027;
} else
{var or__3548__auto____299028 = p2.call(null,x);

if(cljs.core.truth_(or__3548__auto____299028))
{return or__3548__auto____299028;
} else
{var or__3548__auto____299029 = p3.call(null,x);

if(cljs.core.truth_(or__3548__auto____299029))
{return or__3548__auto____299029;
} else
{var or__3548__auto____299030 = p1.call(null,y);

if(cljs.core.truth_(or__3548__auto____299030))
{return or__3548__auto____299030;
} else
{var or__3548__auto____299031 = p2.call(null,y);

if(cljs.core.truth_(or__3548__auto____299031))
{return or__3548__auto____299031;
} else
{var or__3548__auto____299032 = p3.call(null,y);

if(cljs.core.truth_(or__3548__auto____299032))
{return or__3548__auto____299032;
} else
{var or__3548__auto____299033 = p1.call(null,z);

if(cljs.core.truth_(or__3548__auto____299033))
{return or__3548__auto____299033;
} else
{var or__3548__auto____299034 = p2.call(null,z);

if(cljs.core.truth_(or__3548__auto____299034))
{return or__3548__auto____299034;
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
var sp3__299068 = (function() { 
var G__299070__delegate = function (x,y,z,args){
var or__3548__auto____299035 = sp3.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____299035))
{return or__3548__auto____299035;
} else
{return cljs.core.some.call(null,(function (p1__298922_SHARP_){
var or__3548__auto____299036 = p1.call(null,p1__298922_SHARP_);

if(cljs.core.truth_(or__3548__auto____299036))
{return or__3548__auto____299036;
} else
{var or__3548__auto____299037 = p2.call(null,p1__298922_SHARP_);

if(cljs.core.truth_(or__3548__auto____299037))
{return or__3548__auto____299037;
} else
{return p3.call(null,p1__298922_SHARP_);
}
}
}),args);
}
};
var G__299070 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__299070__delegate.call(this, x, y, z, args);
};
G__299070.cljs$lang$maxFixedArity = 3;
G__299070.cljs$lang$applyTo = (function (arglist__299071){
var x = cljs.core.first(arglist__299071);
var y = cljs.core.first(cljs.core.next(arglist__299071));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__299071)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__299071)));
return G__299070__delegate.call(this, x, y, z, args);
});
return G__299070;
})()
;
sp3 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return sp3__299064.call(this);
case  1 :
return sp3__299065.call(this,x);
case  2 :
return sp3__299066.call(this,x,y);
case  3 :
return sp3__299067.call(this,x,y,z);
default:
return sp3__299068.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
sp3.cljs$lang$maxFixedArity = 3;
sp3.cljs$lang$applyTo = sp3__299068.cljs$lang$applyTo;
return sp3;
})()
});
var some_fn__299046 = (function() { 
var G__299072__delegate = function (p1,p2,p3,ps){
var ps__299038 = cljs.core.list_STAR_.call(null,p1,p2,p3,ps);

return (function() {
var spn = null;
var spn__299073 = (function (){
return null;
});
var spn__299074 = (function (x){
return cljs.core.some.call(null,(function (p1__298923_SHARP_){
return p1__298923_SHARP_.call(null,x);
}),ps__299038);
});
var spn__299075 = (function (x,y){
return cljs.core.some.call(null,(function (p1__298924_SHARP_){
var or__3548__auto____299039 = p1__298924_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____299039))
{return or__3548__auto____299039;
} else
{return p1__298924_SHARP_.call(null,y);
}
}),ps__299038);
});
var spn__299076 = (function (x,y,z){
return cljs.core.some.call(null,(function (p1__298925_SHARP_){
var or__3548__auto____299040 = p1__298925_SHARP_.call(null,x);

if(cljs.core.truth_(or__3548__auto____299040))
{return or__3548__auto____299040;
} else
{var or__3548__auto____299041 = p1__298925_SHARP_.call(null,y);

if(cljs.core.truth_(or__3548__auto____299041))
{return or__3548__auto____299041;
} else
{return p1__298925_SHARP_.call(null,z);
}
}
}),ps__299038);
});
var spn__299077 = (function() { 
var G__299079__delegate = function (x,y,z,args){
var or__3548__auto____299042 = spn.call(null,x,y,z);

if(cljs.core.truth_(or__3548__auto____299042))
{return or__3548__auto____299042;
} else
{return cljs.core.some.call(null,(function (p1__298926_SHARP_){
return cljs.core.some.call(null,p1__298926_SHARP_,args);
}),ps__299038);
}
};
var G__299079 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__299079__delegate.call(this, x, y, z, args);
};
G__299079.cljs$lang$maxFixedArity = 3;
G__299079.cljs$lang$applyTo = (function (arglist__299080){
var x = cljs.core.first(arglist__299080);
var y = cljs.core.first(cljs.core.next(arglist__299080));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__299080)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__299080)));
return G__299079__delegate.call(this, x, y, z, args);
});
return G__299079;
})()
;
spn = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return spn__299073.call(this);
case  1 :
return spn__299074.call(this,x);
case  2 :
return spn__299075.call(this,x,y);
case  3 :
return spn__299076.call(this,x,y,z);
default:
return spn__299077.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
spn.cljs$lang$maxFixedArity = 3;
spn.cljs$lang$applyTo = spn__299077.cljs$lang$applyTo;
return spn;
})()
};
var G__299072 = function (p1,p2,p3,var_args){
var ps = null;
if (goog.isDef(var_args)) {
  ps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__299072__delegate.call(this, p1, p2, p3, ps);
};
G__299072.cljs$lang$maxFixedArity = 3;
G__299072.cljs$lang$applyTo = (function (arglist__299081){
var p1 = cljs.core.first(arglist__299081);
var p2 = cljs.core.first(cljs.core.next(arglist__299081));
var p3 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__299081)));
var ps = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__299081)));
return G__299072__delegate.call(this, p1, p2, p3, ps);
});
return G__299072;
})()
;
some_fn = function(p1,p2,p3,var_args){
var ps = var_args;
switch(arguments.length){
case  1 :
return some_fn__299043.call(this,p1);
case  2 :
return some_fn__299044.call(this,p1,p2);
case  3 :
return some_fn__299045.call(this,p1,p2,p3);
default:
return some_fn__299046.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
some_fn.cljs$lang$maxFixedArity = 3;
some_fn.cljs$lang$applyTo = some_fn__299046.cljs$lang$applyTo;
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
var map__299094 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____299082 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____299082))
{var s__299083 = temp__3698__auto____299082;

return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s__299083)),map.call(null,f,cljs.core.rest.call(null,s__299083)));
} else
{return null;
}
})));
});
var map__299095 = (function (f,c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__299084 = cljs.core.seq.call(null,c1);
var s2__299085 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____299086 = s1__299084;

if(cljs.core.truth_(and__3546__auto____299086))
{return s2__299085;
} else
{return and__3546__auto____299086;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__299084),cljs.core.first.call(null,s2__299085)),map.call(null,f,cljs.core.rest.call(null,s1__299084),cljs.core.rest.call(null,s2__299085)));
} else
{return null;
}
})));
});
var map__299096 = (function (f,c1,c2,c3){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__299087 = cljs.core.seq.call(null,c1);
var s2__299088 = cljs.core.seq.call(null,c2);
var s3__299089 = cljs.core.seq.call(null,c3);

if(cljs.core.truth_((function (){var and__3546__auto____299090 = s1__299087;

if(cljs.core.truth_(and__3546__auto____299090))
{var and__3546__auto____299091 = s2__299088;

if(cljs.core.truth_(and__3546__auto____299091))
{return s3__299089;
} else
{return and__3546__auto____299091;
}
} else
{return and__3546__auto____299090;
}
})()))
{return cljs.core.cons.call(null,f.call(null,cljs.core.first.call(null,s1__299087),cljs.core.first.call(null,s2__299088),cljs.core.first.call(null,s3__299089)),map.call(null,f,cljs.core.rest.call(null,s1__299087),cljs.core.rest.call(null,s2__299088),cljs.core.rest.call(null,s3__299089)));
} else
{return null;
}
})));
});
var map__299097 = (function() { 
var G__299099__delegate = function (f,c1,c2,c3,colls){
var step__299093 = (function step(cs){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__299092 = map.call(null,cljs.core.seq,cs);

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__299092)))
{return cljs.core.cons.call(null,map.call(null,cljs.core.first,ss__299092),step.call(null,map.call(null,cljs.core.rest,ss__299092)));
} else
{return null;
}
})));
});

return map.call(null,(function (p1__299004_SHARP_){
return cljs.core.apply.call(null,f,p1__299004_SHARP_);
}),step__299093.call(null,cljs.core.conj.call(null,colls,c3,c2,c1)));
};
var G__299099 = function (f,c1,c2,c3,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);
} 
return G__299099__delegate.call(this, f, c1, c2, c3, colls);
};
G__299099.cljs$lang$maxFixedArity = 4;
G__299099.cljs$lang$applyTo = (function (arglist__299100){
var f = cljs.core.first(arglist__299100);
var c1 = cljs.core.first(cljs.core.next(arglist__299100));
var c2 = cljs.core.first(cljs.core.next(cljs.core.next(arglist__299100)));
var c3 = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__299100))));
var colls = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(arglist__299100))));
return G__299099__delegate.call(this, f, c1, c2, c3, colls);
});
return G__299099;
})()
;
map = function(f,c1,c2,c3,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return map__299094.call(this,f,c1);
case  3 :
return map__299095.call(this,f,c1,c2);
case  4 :
return map__299096.call(this,f,c1,c2,c3);
default:
return map__299097.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
map.cljs$lang$maxFixedArity = 4;
map.cljs$lang$applyTo = map__299097.cljs$lang$applyTo;
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
{var temp__3698__auto____299101 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____299101))
{var s__299102 = temp__3698__auto____299101;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__299102),take.call(null,(n - 1),cljs.core.rest.call(null,s__299102)));
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
var step__299105 = (function (n,coll){
while(true){
var s__299103 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____299104 = (n > 0);

if(cljs.core.truth_(and__3546__auto____299104))
{return s__299103;
} else
{return and__3546__auto____299104;
}
})()))
{{
var G__299106 = (n - 1);
var G__299107 = cljs.core.rest.call(null,s__299103);
n = G__299106;
coll = G__299107;
continue;
}
} else
{return s__299103;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__299105.call(null,n,coll);
})));
});
/**
* Return a lazy sequence of all but the last n (default 1) items in coll
*/
cljs.core.drop_last = (function() {
var drop_last = null;
var drop_last__299108 = (function (s){
return drop_last.call(null,1,s);
});
var drop_last__299109 = (function (n,s){
return cljs.core.map.call(null,(function (x,_){
return x;
}),s,cljs.core.drop.call(null,n,s));
});
drop_last = function(n,s){
switch(arguments.length){
case  1 :
return drop_last__299108.call(this,n);
case  2 :
return drop_last__299109.call(this,n,s);
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
var s__299111 = cljs.core.seq.call(null,coll);
var lead__299112 = cljs.core.seq.call(null,cljs.core.drop.call(null,n,coll));

while(true){
if(cljs.core.truth_(lead__299112))
{{
var G__299113 = cljs.core.next.call(null,s__299111);
var G__299114 = cljs.core.next.call(null,lead__299112);
s__299111 = G__299113;
lead__299112 = G__299114;
continue;
}
} else
{return s__299111;
}
break;
}
});
/**
* Returns a lazy sequence of the items in coll starting from the first
* item for which (pred item) returns nil.
*/
cljs.core.drop_while = (function drop_while(pred,coll){
var step__299117 = (function (pred,coll){
while(true){
var s__299115 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_((function (){var and__3546__auto____299116 = s__299115;

if(cljs.core.truth_(and__3546__auto____299116))
{return pred.call(null,cljs.core.first.call(null,s__299115));
} else
{return and__3546__auto____299116;
}
})()))
{{
var G__299118 = pred;
var G__299119 = cljs.core.rest.call(null,s__299115);
pred = G__299118;
coll = G__299119;
continue;
}
} else
{return s__299115;
}
break;
}
});

return (new cljs.core.LazySeq(null,false,(function (){
return step__299117.call(null,pred,coll);
})));
});
/**
* Returns a lazy (infinite!) sequence of repetitions of the items in coll.
*/
cljs.core.cycle = (function cycle(coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____299120 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____299120))
{var s__299121 = temp__3698__auto____299120;

return cljs.core.concat.call(null,s__299121,cycle.call(null,s__299121));
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
var repeat__299122 = (function (x){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,x,repeat.call(null,x));
})));
});
var repeat__299123 = (function (n,x){
return cljs.core.take.call(null,n,repeat.call(null,x));
});
repeat = function(n,x){
switch(arguments.length){
case  1 :
return repeat__299122.call(this,n);
case  2 :
return repeat__299123.call(this,n,x);
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
var repeatedly__299125 = (function (f){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,f.call(null),repeatedly.call(null,f));
})));
});
var repeatedly__299126 = (function (n,f){
return cljs.core.take.call(null,n,repeatedly.call(null,f));
});
repeatedly = function(n,f){
switch(arguments.length){
case  1 :
return repeatedly__299125.call(this,n);
case  2 :
return repeatedly__299126.call(this,n,f);
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
var interleave__299132 = (function (c1,c2){
return (new cljs.core.LazySeq(null,false,(function (){
var s1__299128 = cljs.core.seq.call(null,c1);
var s2__299129 = cljs.core.seq.call(null,c2);

if(cljs.core.truth_((function (){var and__3546__auto____299130 = s1__299128;

if(cljs.core.truth_(and__3546__auto____299130))
{return s2__299129;
} else
{return and__3546__auto____299130;
}
})()))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s1__299128),cljs.core.cons.call(null,cljs.core.first.call(null,s2__299129),interleave.call(null,cljs.core.rest.call(null,s1__299128),cljs.core.rest.call(null,s2__299129))));
} else
{return null;
}
})));
});
var interleave__299133 = (function() { 
var G__299135__delegate = function (c1,c2,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var ss__299131 = cljs.core.map.call(null,cljs.core.seq,cljs.core.conj.call(null,colls,c2,c1));

if(cljs.core.truth_(cljs.core.every_QMARK_.call(null,cljs.core.identity,ss__299131)))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,ss__299131),cljs.core.apply.call(null,interleave,cljs.core.map.call(null,cljs.core.rest,ss__299131)));
} else
{return null;
}
})));
};
var G__299135 = function (c1,c2,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__299135__delegate.call(this, c1, c2, colls);
};
G__299135.cljs$lang$maxFixedArity = 2;
G__299135.cljs$lang$applyTo = (function (arglist__299136){
var c1 = cljs.core.first(arglist__299136);
var c2 = cljs.core.first(cljs.core.next(arglist__299136));
var colls = cljs.core.rest(cljs.core.next(arglist__299136));
return G__299135__delegate.call(this, c1, c2, colls);
});
return G__299135;
})()
;
interleave = function(c1,c2,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return interleave__299132.call(this,c1,c2);
default:
return interleave__299133.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
interleave.cljs$lang$maxFixedArity = 2;
interleave.cljs$lang$applyTo = interleave__299133.cljs$lang$applyTo;
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
var cat__299139 = (function cat(coll,colls){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____299137 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____299137))
{var coll__299138 = temp__3695__auto____299137;

return cljs.core.cons.call(null,cljs.core.first.call(null,coll__299138),cat.call(null,cljs.core.rest.call(null,coll__299138),colls));
} else
{if(cljs.core.truth_(cljs.core.seq.call(null,colls)))
{return cat.call(null,cljs.core.first.call(null,colls),cljs.core.rest.call(null,colls));
} else
{return null;
}
}
})));
});

return cat__299139.call(null,null,colls);
});
/**
* Returns the result of applying concat to the result of applying map
* to f and colls.  Thus function f should return a collection.
* @param {...*} var_args
*/
cljs.core.mapcat = (function() {
var mapcat = null;
var mapcat__299140 = (function (f,coll){
return cljs.core.flatten1.call(null,cljs.core.map.call(null,f,coll));
});
var mapcat__299141 = (function() { 
var G__299143__delegate = function (f,coll,colls){
return cljs.core.flatten1.call(null,cljs.core.apply.call(null,cljs.core.map,f,coll,colls));
};
var G__299143 = function (f,coll,var_args){
var colls = null;
if (goog.isDef(var_args)) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);
} 
return G__299143__delegate.call(this, f, coll, colls);
};
G__299143.cljs$lang$maxFixedArity = 2;
G__299143.cljs$lang$applyTo = (function (arglist__299144){
var f = cljs.core.first(arglist__299144);
var coll = cljs.core.first(cljs.core.next(arglist__299144));
var colls = cljs.core.rest(cljs.core.next(arglist__299144));
return G__299143__delegate.call(this, f, coll, colls);
});
return G__299143;
})()
;
mapcat = function(f,coll,var_args){
var colls = var_args;
switch(arguments.length){
case  2 :
return mapcat__299140.call(this,f,coll);
default:
return mapcat__299141.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
mapcat.cljs$lang$maxFixedArity = 2;
mapcat.cljs$lang$applyTo = mapcat__299141.cljs$lang$applyTo;
return mapcat;
})()
;
/**
* Returns a lazy sequence of the items in coll for which
* (pred item) returns true. pred must be free of side-effects.
*/
cljs.core.filter = (function filter(pred,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____299145 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____299145))
{var s__299146 = temp__3698__auto____299145;

var f__299147 = cljs.core.first.call(null,s__299146);
var r__299148 = cljs.core.rest.call(null,s__299146);

if(cljs.core.truth_(pred.call(null,f__299147)))
{return cljs.core.cons.call(null,f__299147,filter.call(null,pred,r__299148));
} else
{return filter.call(null,pred,r__299148);
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
var walk__299150 = (function walk(node){
return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,node,(cljs.core.truth_(branch_QMARK_.call(null,node))?cljs.core.mapcat.call(null,walk,children.call(null,node)):null));
})));
});

return walk__299150.call(null,root);
});
/**
* Takes any nested combination of sequential things (lists, vectors,
* etc.) and returns their contents as a single, flat sequence.
* (flatten nil) returns nil.
*/
cljs.core.flatten = (function flatten(x){
return cljs.core.filter.call(null,(function (p1__299149_SHARP_){
return cljs.core.not.call(null,cljs.core.sequential_QMARK_.call(null,p1__299149_SHARP_));
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
var partition__299157 = (function (n,coll){
return partition.call(null,n,n,coll);
});
var partition__299158 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____299151 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____299151))
{var s__299152 = temp__3698__auto____299151;

var p__299153 = cljs.core.take.call(null,n,s__299152);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__299153))))
{return cljs.core.cons.call(null,p__299153,partition.call(null,n,step,cljs.core.drop.call(null,step,s__299152)));
} else
{return null;
}
} else
{return null;
}
})));
});
var partition__299159 = (function (n,step,pad,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____299154 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____299154))
{var s__299155 = temp__3698__auto____299154;

var p__299156 = cljs.core.take.call(null,n,s__299155);

if(cljs.core.truth_(cljs.core._EQ_.call(null,n,cljs.core.count.call(null,p__299156))))
{return cljs.core.cons.call(null,p__299156,partition.call(null,n,step,pad,cljs.core.drop.call(null,step,s__299155)));
} else
{return cljs.core.list.call(null,cljs.core.take.call(null,n,cljs.core.concat.call(null,p__299156,pad)));
}
} else
{return null;
}
})));
});
partition = function(n,step,pad,coll){
switch(arguments.length){
case  2 :
return partition__299157.call(this,n,step);
case  3 :
return partition__299158.call(this,n,step,pad);
case  4 :
return partition__299159.call(this,n,step,pad,coll);
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
var get_in__299165 = (function (m,ks){
return cljs.core.reduce.call(null,cljs.core.get,m,ks);
});
var get_in__299166 = (function (m,ks,not_found){
var sentinel__299161 = cljs.core.lookup_sentinel;
var m__299162 = m;
var ks__299163 = cljs.core.seq.call(null,ks);

while(true){
if(cljs.core.truth_(ks__299163))
{var m__299164 = cljs.core.get.call(null,m__299162,cljs.core.first.call(null,ks__299163),sentinel__299161);

if(cljs.core.truth_((sentinel__299161 === m__299164)))
{return not_found;
} else
{{
var G__299168 = sentinel__299161;
var G__299169 = m__299164;
var G__299170 = cljs.core.next.call(null,ks__299163);
sentinel__299161 = G__299168;
m__299162 = G__299169;
ks__299163 = G__299170;
continue;
}
}
} else
{return m__299162;
}
break;
}
});
get_in = function(m,ks,not_found){
switch(arguments.length){
case  2 :
return get_in__299165.call(this,m,ks);
case  3 :
return get_in__299166.call(this,m,ks,not_found);
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
cljs.core.assoc_in = (function assoc_in(m,p__299171,v){
var vec__299172__299173 = p__299171;
var k__299174 = cljs.core.nth.call(null,vec__299172__299173,0,null);
var ks__299175 = cljs.core.nthnext.call(null,vec__299172__299173,1);

if(cljs.core.truth_(ks__299175))
{return cljs.core.assoc.call(null,m,k__299174,assoc_in.call(null,cljs.core.get.call(null,m,k__299174),ks__299175,v));
} else
{return cljs.core.assoc.call(null,m,k__299174,v);
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
var update_in__delegate = function (m,p__299176,f,args){
var vec__299177__299178 = p__299176;
var k__299179 = cljs.core.nth.call(null,vec__299177__299178,0,null);
var ks__299180 = cljs.core.nthnext.call(null,vec__299177__299178,1);

if(cljs.core.truth_(ks__299180))
{return cljs.core.assoc.call(null,m,k__299179,cljs.core.apply.call(null,update_in,cljs.core.get.call(null,m,k__299179),ks__299180,f,args));
} else
{return cljs.core.assoc.call(null,m,k__299179,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k__299179),args));
}
};
var update_in = function (m,p__299176,f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return update_in__delegate.call(this, m, p__299176, f, args);
};
update_in.cljs$lang$maxFixedArity = 3;
update_in.cljs$lang$applyTo = (function (arglist__299181){
var m = cljs.core.first(arglist__299181);
var p__299176 = cljs.core.first(cljs.core.next(arglist__299181));
var f = cljs.core.first(cljs.core.next(cljs.core.next(arglist__299181)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__299181)));
return update_in__delegate.call(this, m, p__299176, f, args);
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
var this__299182 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Vector.prototype.cljs$core$ILookup$ = true;
cljs.core.Vector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__299215 = null;
var G__299215__299216 = (function (coll,k){
var this__299183 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__299215__299217 = (function (coll,k,not_found){
var this__299184 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__299215 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__299215__299216.call(this,coll,k);
case  3 :
return G__299215__299217.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__299215;
})()
;
cljs.core.Vector.prototype.cljs$core$IAssociative$ = true;
cljs.core.Vector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__299185 = this;
var new_array__299186 = cljs.core.aclone.call(null,this__299185.array);

(new_array__299186[k] = v);
return (new cljs.core.Vector(this__299185.meta,new_array__299186));
});
cljs.core.Vector.prototype.cljs$core$IFn$ = true;
cljs.core.Vector.prototype.call = (function() {
var G__299219 = null;
var G__299219__299220 = (function (tsym299187,k){
var this__299189 = this;
var tsym299187__299190 = this;

var coll__299191 = tsym299187__299190;

return cljs.core._lookup.call(null,coll__299191,k);
});
var G__299219__299221 = (function (tsym299188,k,not_found){
var this__299192 = this;
var tsym299188__299193 = this;

var coll__299194 = tsym299188__299193;

return cljs.core._lookup.call(null,coll__299194,k,not_found);
});
G__299219 = function(tsym299188,k,not_found){
switch(arguments.length){
case  2 :
return G__299219__299220.call(this,tsym299188,k);
case  3 :
return G__299219__299221.call(this,tsym299188,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__299219;
})()
;
cljs.core.Vector.prototype.cljs$core$ISequential$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$ = true;
cljs.core.Vector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__299195 = this;
var new_array__299196 = cljs.core.aclone.call(null,this__299195.array);

new_array__299196.push(o);
return (new cljs.core.Vector(this__299195.meta,new_array__299196));
});
cljs.core.Vector.prototype.cljs$core$IReduce$ = true;
cljs.core.Vector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__299223 = null;
var G__299223__299224 = (function (v,f){
var this__299197 = this;
return cljs.core.ci_reduce.call(null,this__299197.array,f);
});
var G__299223__299225 = (function (v,f,start){
var this__299198 = this;
return cljs.core.ci_reduce.call(null,this__299198.array,f,start);
});
G__299223 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__299223__299224.call(this,v,f);
case  3 :
return G__299223__299225.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__299223;
})()
;
cljs.core.Vector.prototype.cljs$core$ISeqable$ = true;
cljs.core.Vector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__299199 = this;
if(cljs.core.truth_((this__299199.array.length > 0)))
{var vector_seq__299200 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__299199.array.length)))
{return cljs.core.cons.call(null,(this__299199.array[i]),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__299200.call(null,0);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$ICounted$ = true;
cljs.core.Vector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__299201 = this;
return this__299201.array.length;
});
cljs.core.Vector.prototype.cljs$core$IStack$ = true;
cljs.core.Vector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__299202 = this;
var count__299203 = this__299202.array.length;

if(cljs.core.truth_((count__299203 > 0)))
{return (this__299202.array[(count__299203 - 1)]);
} else
{return null;
}
});
cljs.core.Vector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__299204 = this;
if(cljs.core.truth_((this__299204.array.length > 0)))
{var new_array__299205 = cljs.core.aclone.call(null,this__299204.array);

new_array__299205.pop();
return (new cljs.core.Vector(this__299204.meta,new_array__299205));
} else
{throw (new Error("Can't pop empty vector"));
}
});
cljs.core.Vector.prototype.cljs$core$IVector$ = true;
cljs.core.Vector.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__299206 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Vector.prototype.cljs$core$IEquiv$ = true;
cljs.core.Vector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__299207 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Vector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__299208 = this;
return (new cljs.core.Vector(meta,this__299208.array));
});
cljs.core.Vector.prototype.cljs$core$IMeta$ = true;
cljs.core.Vector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__299209 = this;
return this__299209.meta;
});
cljs.core.Vector.prototype.cljs$core$IIndexed$ = true;
cljs.core.Vector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__299227 = null;
var G__299227__299228 = (function (coll,n){
var this__299210 = this;
if(cljs.core.truth_((function (){var and__3546__auto____299211 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____299211))
{return (n < this__299210.array.length);
} else
{return and__3546__auto____299211;
}
})()))
{return (this__299210.array[n]);
} else
{return null;
}
});
var G__299227__299229 = (function (coll,n,not_found){
var this__299212 = this;
if(cljs.core.truth_((function (){var and__3546__auto____299213 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____299213))
{return (n < this__299212.array.length);
} else
{return and__3546__auto____299213;
}
})()))
{return (this__299212.array[n]);
} else
{return not_found;
}
});
G__299227 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__299227__299228.call(this,coll,n);
case  3 :
return G__299227__299229.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__299227;
})()
;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Vector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__299214 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__299214.meta);
});
cljs.core.Vector;
cljs.core.Vector.EMPTY = (new cljs.core.Vector(null,[]));
cljs.core.Vector.fromArray = (function (xs){
return (new cljs.core.Vector(null,xs));
});
cljs.core.tail_off = (function tail_off(pv){
var cnt__299231 = pv.cnt;

if(cljs.core.truth_((cnt__299231 < 32)))
{return 0;
} else
{return (((cnt__299231 - 1) >> 5) << 5);
}
});
cljs.core.new_path = (function new_path(level,node){
var ll__299232 = level;
var ret__299233 = node;

while(true){
if(cljs.core.truth_(cljs.core._EQ_.call(null,0,ll__299232)))
{return ret__299233;
} else
{var embed__299234 = ret__299233;
var r__299235 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);
var ___299236 = (r__299235[0] = embed__299234);

{
var G__299237 = (ll__299232 - 5);
var G__299238 = r__299235;
ll__299232 = G__299237;
ret__299233 = G__299238;
continue;
}
}
break;
}
});
cljs.core.push_tail = (function push_tail(pv,level,parent,tailnode){
var ret__299239 = cljs.core.aclone.call(null,parent);
var subidx__299240 = (((pv.cnt - 1) >> level) & 31);

if(cljs.core.truth_(cljs.core._EQ_.call(null,5,level)))
{(ret__299239[subidx__299240] = tailnode);
return ret__299239;
} else
{var temp__3695__auto____299241 = (parent[subidx__299240]);

if(cljs.core.truth_(temp__3695__auto____299241))
{var child__299242 = temp__3695__auto____299241;

var node_to_insert__299243 = push_tail.call(null,pv,(level - 5),child__299242,tailnode);
var ___299244 = (ret__299239[subidx__299240] = node_to_insert__299243);

return ret__299239;
} else
{var node_to_insert__299245 = cljs.core.new_path.call(null,(level - 5),tailnode);
var ___299246 = (ret__299239[subidx__299240] = node_to_insert__299245);

return ret__299239;
}
}
});
cljs.core.array_for = (function array_for(pv,i){
if(cljs.core.truth_((function (){var and__3546__auto____299247 = (0 <= i);

if(cljs.core.truth_(and__3546__auto____299247))
{return (i < pv.cnt);
} else
{return and__3546__auto____299247;
}
})()))
{if(cljs.core.truth_((i >= cljs.core.tail_off.call(null,pv))))
{return pv.tail;
} else
{var node__299248 = pv.root;
var level__299249 = pv.shift;

while(true){
if(cljs.core.truth_((level__299249 > 0)))
{{
var G__299250 = (node__299248[((i >> level__299249) & 31)]);
var G__299251 = (level__299249 - 5);
node__299248 = G__299250;
level__299249 = G__299251;
continue;
}
} else
{return node__299248;
}
break;
}
}
} else
{throw (new Error(cljs.core.str.call(null,"No item ",i," in vector of length ",pv.cnt)));
}
});
cljs.core.do_assoc = (function do_assoc(pv,level,node,i,val){
var ret__299252 = cljs.core.aclone.call(null,node);

if(cljs.core.truth_((level === 0)))
{(ret__299252[(i & 31)] = val);
return ret__299252;
} else
{var subidx__299253 = ((i >> level) & 31);
var ___299254 = (ret__299252[subidx__299253] = do_assoc.call(null,pv,(level - 5),(node[subidx__299253]),i,val));

return ret__299252;
}
});
cljs.core.pop_tail = (function pop_tail(pv,level,node){
var subidx__299255 = (((pv.cnt - 2) >> level) & 31);

if(cljs.core.truth_((level > 5)))
{var new_child__299256 = pop_tail.call(null,pv,(level - 5),(node[subidx__299255]));

if(cljs.core.truth_((function (){var and__3546__auto____299257 = (new_child__299256 === null);

if(cljs.core.truth_(and__3546__auto____299257))
{return (subidx__299255 === 0);
} else
{return and__3546__auto____299257;
}
})()))
{return null;
} else
{var ret__299258 = cljs.core.aclone.call(null,node);
var ___299259 = (ret__299258[subidx__299255] = new_child__299256);

return ret__299258;
}
} else
{if(cljs.core.truth_((subidx__299255 === 0)))
{return null;
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var ret__299260 = cljs.core.aclone.call(null,node);
var ___299261 = (ret__299260[subidx__299255] = null);

return ret__299260;
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
var this__299262 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentVector.prototype.cljs$core$ILookup$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ILookup$_lookup = (function() {
var G__299302 = null;
var G__299302__299303 = (function (coll,k){
var this__299263 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__299302__299304 = (function (coll,k,not_found){
var this__299264 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__299302 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__299302__299303.call(this,coll,k);
case  3 :
return G__299302__299304.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__299302;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__299265 = this;
if(cljs.core.truth_((function (){var and__3546__auto____299266 = (0 <= k);

if(cljs.core.truth_(and__3546__auto____299266))
{return (k < this__299265.cnt);
} else
{return and__3546__auto____299266;
}
})()))
{if(cljs.core.truth_((cljs.core.tail_off.call(null,coll) <= k)))
{var new_tail__299267 = cljs.core.aclone.call(null,this__299265.tail);

(new_tail__299267[(k & 31)] = v);
return (new cljs.core.PersistentVector(this__299265.meta,this__299265.cnt,this__299265.shift,this__299265.root,new_tail__299267));
} else
{return (new cljs.core.PersistentVector(this__299265.meta,this__299265.cnt,this__299265.shift,cljs.core.do_assoc.call(null,coll,this__299265.shift,this__299265.root,k,v),this__299265.tail));
}
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,this__299265.cnt)))
{return cljs.core._conj.call(null,coll,v);
} else
{if(cljs.core.truth_("\uFDD0'else"))
{throw (new Error(cljs.core.str.call(null,"Index ",k," out of bounds  [0,",this__299265.cnt,"]")));
} else
{return null;
}
}
}
});
cljs.core.PersistentVector.prototype.cljs$core$IFn$ = true;
cljs.core.PersistentVector.prototype.call = (function() {
var G__299306 = null;
var G__299306__299307 = (function (tsym299268,k){
var this__299270 = this;
var tsym299268__299271 = this;

var coll__299272 = tsym299268__299271;

return cljs.core._lookup.call(null,coll__299272,k);
});
var G__299306__299308 = (function (tsym299269,k,not_found){
var this__299273 = this;
var tsym299269__299274 = this;

var coll__299275 = tsym299269__299274;

return cljs.core._lookup.call(null,coll__299275,k,not_found);
});
G__299306 = function(tsym299269,k,not_found){
switch(arguments.length){
case  2 :
return G__299306__299307.call(this,tsym299269,k);
case  3 :
return G__299306__299308.call(this,tsym299269,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__299306;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__299276 = this;
if(cljs.core.truth_(((this__299276.cnt - cljs.core.tail_off.call(null,coll)) < 32)))
{var new_tail__299277 = cljs.core.aclone.call(null,this__299276.tail);

new_tail__299277.push(o);
return (new cljs.core.PersistentVector(this__299276.meta,(this__299276.cnt + 1),this__299276.shift,this__299276.root,new_tail__299277));
} else
{var root_overflow_QMARK___299278 = ((this__299276.cnt >> 5) > (1 << this__299276.shift));
var new_shift__299279 = (cljs.core.truth_(root_overflow_QMARK___299278)?(this__299276.shift + 5):this__299276.shift);
var new_root__299281 = (cljs.core.truth_(root_overflow_QMARK___299278)?(function (){var n_r__299280 = cljs.core.aclone.call(null,cljs.core.PersistentVector.EMPTY_NODE);

(n_r__299280[0] = this__299276.root);
(n_r__299280[1] = cljs.core.new_path.call(null,this__299276.shift,this__299276.tail));
return n_r__299280;
})():cljs.core.push_tail.call(null,coll,this__299276.shift,this__299276.root,this__299276.tail));

return (new cljs.core.PersistentVector(this__299276.meta,(this__299276.cnt + 1),new_shift__299279,new_root__299281,[o]));
}
});
cljs.core.PersistentVector.prototype.cljs$core$IReduce$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IReduce$_reduce = (function() {
var G__299310 = null;
var G__299310__299311 = (function (v,f){
var this__299282 = this;
return cljs.core.ci_reduce.call(null,v,f);
});
var G__299310__299312 = (function (v,f,start){
var this__299283 = this;
return cljs.core.ci_reduce.call(null,v,f,start);
});
G__299310 = function(v,f,start){
switch(arguments.length){
case  2 :
return G__299310__299311.call(this,v,f);
case  3 :
return G__299310__299312.call(this,v,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__299310;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__299284 = this;
if(cljs.core.truth_((this__299284.cnt > 0)))
{var vector_seq__299285 = (function vector_seq(i){
return (new cljs.core.LazySeq(null,false,(function (){
if(cljs.core.truth_((i < this__299284.cnt)))
{return cljs.core.cons.call(null,cljs.core._nth.call(null,coll,i),vector_seq.call(null,(i + 1)));
} else
{return null;
}
})));
});

return vector_seq__299285.call(null,0);
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentVector.prototype.cljs$core$ICounted$_count = (function (coll){
var this__299286 = this;
return this__299286.cnt;
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IStack$_peek = (function (coll){
var this__299287 = this;
if(cljs.core.truth_((this__299287.cnt > 0)))
{return cljs.core._nth.call(null,coll,(this__299287.cnt - 1));
} else
{return null;
}
});
cljs.core.PersistentVector.prototype.cljs$core$IStack$_pop = (function (coll){
var this__299288 = this;
if(cljs.core.truth_((this__299288.cnt === 0)))
{throw (new Error("Can't pop empty vector"));
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,1,this__299288.cnt)))
{return cljs.core._with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__299288.meta);
} else
{if(cljs.core.truth_((1 < (this__299288.cnt - cljs.core.tail_off.call(null,coll)))))
{return (new cljs.core.PersistentVector(this__299288.meta,(this__299288.cnt - 1),this__299288.shift,this__299288.root,cljs.core.aclone.call(null,this__299288.tail)));
} else
{if(cljs.core.truth_("\uFDD0'else"))
{var new_tail__299289 = cljs.core.array_for.call(null,coll,(this__299288.cnt - 2));
var nr__299290 = cljs.core.pop_tail.call(null,this__299288.shift,this__299288.root);
var new_root__299291 = (cljs.core.truth_((nr__299290 === null))?cljs.core.PersistentVector.EMPTY_NODE:nr__299290);
var cnt_1__299292 = (this__299288.cnt - 1);

if(cljs.core.truth_((function (){var and__3546__auto____299293 = (5 < this__299288.shift);

if(cljs.core.truth_(and__3546__auto____299293))
{return ((new_root__299291[1]) === null);
} else
{return and__3546__auto____299293;
}
})()))
{return (new cljs.core.PersistentVector(this__299288.meta,cnt_1__299292,(this__299288.shift - 5),(new_root__299291[0]),new_tail__299289));
} else
{return (new cljs.core.PersistentVector(this__299288.meta,cnt_1__299292,this__299288.shift,new_root__299291,new_tail__299289));
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
var this__299294 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__299295 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__299296 = this;
return (new cljs.core.PersistentVector(meta,this__299296.cnt,this__299296.shift,this__299296.root,this__299296.tail));
});
cljs.core.PersistentVector.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__299297 = this;
return this__299297.meta;
});
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IIndexed$_nth = (function() {
var G__299314 = null;
var G__299314__299315 = (function (coll,n){
var this__299298 = this;
return (cljs.core.array_for.call(null,coll,n)[(n & 31)]);
});
var G__299314__299316 = (function (coll,n,not_found){
var this__299299 = this;
if(cljs.core.truth_((function (){var and__3546__auto____299300 = (0 <= n);

if(cljs.core.truth_(and__3546__auto____299300))
{return (n < this__299299.cnt);
} else
{return and__3546__auto____299300;
}
})()))
{return cljs.core._nth.call(null,coll,n);
} else
{return not_found;
}
});
G__299314 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__299314__299315.call(this,coll,n);
case  3 :
return G__299314__299316.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__299314;
})()
;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentVector.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__299301 = this;
return cljs.core.with_meta.call(null,cljs.core.PersistentVector.EMPTY,this__299301.meta);
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
vector.cljs$lang$applyTo = (function (arglist__299318){
var args = cljs.core.seq( arglist__299318 );;
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
var this__299319 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Subvec.prototype.cljs$core$ILookup$ = true;
cljs.core.Subvec.prototype.cljs$core$ILookup$_lookup = (function() {
var G__299347 = null;
var G__299347__299348 = (function (coll,k){
var this__299320 = this;
return cljs.core._nth.call(null,coll,k,null);
});
var G__299347__299349 = (function (coll,k,not_found){
var this__299321 = this;
return cljs.core._nth.call(null,coll,k,not_found);
});
G__299347 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__299347__299348.call(this,coll,k);
case  3 :
return G__299347__299349.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__299347;
})()
;
cljs.core.Subvec.prototype.cljs$core$IAssociative$ = true;
cljs.core.Subvec.prototype.cljs$core$IAssociative$_assoc = (function (coll,key,val){
var this__299322 = this;
var v_pos__299323 = (this__299322.start + key);

return (new cljs.core.Subvec(this__299322.meta,cljs.core._assoc.call(null,this__299322.v,v_pos__299323,val),this__299322.start,((this__299322.end > (v_pos__299323 + 1)) ? this__299322.end : (v_pos__299323 + 1))));
});
cljs.core.Subvec.prototype.cljs$core$IFn$ = true;
cljs.core.Subvec.prototype.call = (function() {
var G__299351 = null;
var G__299351__299352 = (function (tsym299324,k){
var this__299326 = this;
var tsym299324__299327 = this;

var coll__299328 = tsym299324__299327;

return cljs.core._lookup.call(null,coll__299328,k);
});
var G__299351__299353 = (function (tsym299325,k,not_found){
var this__299329 = this;
var tsym299325__299330 = this;

var coll__299331 = tsym299325__299330;

return cljs.core._lookup.call(null,coll__299331,k,not_found);
});
G__299351 = function(tsym299325,k,not_found){
switch(arguments.length){
case  2 :
return G__299351__299352.call(this,tsym299325,k);
case  3 :
return G__299351__299353.call(this,tsym299325,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__299351;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISequential$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$ = true;
cljs.core.Subvec.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__299332 = this;
return (new cljs.core.Subvec(this__299332.meta,cljs.core._assoc_n.call(null,this__299332.v,this__299332.end,o),this__299332.start,(this__299332.end + 1)));
});
cljs.core.Subvec.prototype.cljs$core$IReduce$ = true;
cljs.core.Subvec.prototype.cljs$core$IReduce$_reduce = (function() {
var G__299355 = null;
var G__299355__299356 = (function (coll,f){
var this__299333 = this;
return cljs.core.ci_reduce.call(null,coll,f);
});
var G__299355__299357 = (function (coll,f,start){
var this__299334 = this;
return cljs.core.ci_reduce.call(null,coll,f,start);
});
G__299355 = function(coll,f,start){
switch(arguments.length){
case  2 :
return G__299355__299356.call(this,coll,f);
case  3 :
return G__299355__299357.call(this,coll,f,start);
}
throw('Invalid arity: ' + arguments.length);
};
return G__299355;
})()
;
cljs.core.Subvec.prototype.cljs$core$ISeqable$ = true;
cljs.core.Subvec.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__299335 = this;
var subvec_seq__299336 = (function subvec_seq(i){
if(cljs.core.truth_(cljs.core._EQ_.call(null,i,this__299335.end)))
{return null;
} else
{return cljs.core.cons.call(null,cljs.core._nth.call(null,this__299335.v,i),(new cljs.core.LazySeq(null,false,(function (){
return subvec_seq.call(null,(i + 1));
}))));
}
});

return subvec_seq__299336.call(null,this__299335.start);
});
cljs.core.Subvec.prototype.cljs$core$ICounted$ = true;
cljs.core.Subvec.prototype.cljs$core$ICounted$_count = (function (coll){
var this__299337 = this;
return (this__299337.end - this__299337.start);
});
cljs.core.Subvec.prototype.cljs$core$IStack$ = true;
cljs.core.Subvec.prototype.cljs$core$IStack$_peek = (function (coll){
var this__299338 = this;
return cljs.core._nth.call(null,this__299338.v,(this__299338.end - 1));
});
cljs.core.Subvec.prototype.cljs$core$IStack$_pop = (function (coll){
var this__299339 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,this__299339.start,this__299339.end)))
{throw (new Error("Can't pop empty vector"));
} else
{return (new cljs.core.Subvec(this__299339.meta,this__299339.v,this__299339.start,(this__299339.end - 1)));
}
});
cljs.core.Subvec.prototype.cljs$core$IVector$ = true;
cljs.core.Subvec.prototype.cljs$core$IVector$_assoc_n = (function (coll,n,val){
var this__299340 = this;
return cljs.core._assoc.call(null,coll,n,val);
});
cljs.core.Subvec.prototype.cljs$core$IEquiv$ = true;
cljs.core.Subvec.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__299341 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.Subvec.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__299342 = this;
return (new cljs.core.Subvec(meta,this__299342.v,this__299342.start,this__299342.end));
});
cljs.core.Subvec.prototype.cljs$core$IMeta$ = true;
cljs.core.Subvec.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__299343 = this;
return this__299343.meta;
});
cljs.core.Subvec.prototype.cljs$core$IIndexed$ = true;
cljs.core.Subvec.prototype.cljs$core$IIndexed$_nth = (function() {
var G__299359 = null;
var G__299359__299360 = (function (coll,n){
var this__299344 = this;
return cljs.core._nth.call(null,this__299344.v,(this__299344.start + n));
});
var G__299359__299361 = (function (coll,n,not_found){
var this__299345 = this;
return cljs.core._nth.call(null,this__299345.v,(this__299345.start + n),not_found);
});
G__299359 = function(coll,n,not_found){
switch(arguments.length){
case  2 :
return G__299359__299360.call(this,coll,n);
case  3 :
return G__299359__299361.call(this,coll,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__299359;
})()
;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Subvec.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__299346 = this;
return cljs.core.with_meta.call(null,cljs.core.Vector.EMPTY,this__299346.meta);
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
var subvec__299363 = (function (v,start){
return subvec.call(null,v,start,cljs.core.count.call(null,v));
});
var subvec__299364 = (function (v,start,end){
return (new cljs.core.Subvec(null,v,start,end));
});
subvec = function(v,start,end){
switch(arguments.length){
case  2 :
return subvec__299363.call(this,v,start);
case  3 :
return subvec__299364.call(this,v,start,end);
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
var this__299366 = this;
return coll;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IHash$_hash = (function (coll){
var this__299367 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__299368 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__299369 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__299369.meta);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__299370 = this;
return cljs.core.cons.call(null,o,coll);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_first = (function (coll){
var this__299371 = this;
return cljs.core._first.call(null,this__299371.front);
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__299372 = this;
var temp__3695__auto____299373 = cljs.core.next.call(null,this__299372.front);

if(cljs.core.truth_(temp__3695__auto____299373))
{var f1__299374 = temp__3695__auto____299373;

return (new cljs.core.PersistentQueueSeq(this__299372.meta,f1__299374,this__299372.rear));
} else
{if(cljs.core.truth_((this__299372.rear === null)))
{return cljs.core._empty.call(null,coll);
} else
{return (new cljs.core.PersistentQueueSeq(this__299372.meta,this__299372.rear,null));
}
}
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__299375 = this;
return this__299375.meta;
});
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueueSeq.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__299376 = this;
return (new cljs.core.PersistentQueueSeq(meta,this__299376.front,this__299376.rear));
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
var this__299377 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISequential$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__299378 = this;
if(cljs.core.truth_(this__299378.front))
{return (new cljs.core.PersistentQueue(this__299378.meta,(this__299378.count + 1),this__299378.front,cljs.core.conj.call(null,(function (){var or__3548__auto____299379 = this__299378.rear;

if(cljs.core.truth_(or__3548__auto____299379))
{return or__3548__auto____299379;
} else
{return cljs.core.PersistentVector.fromArray([]);
}
})(),o)));
} else
{return (new cljs.core.PersistentQueue(this__299378.meta,(this__299378.count + 1),cljs.core.conj.call(null,this__299378.front,o),cljs.core.PersistentVector.fromArray([])));
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__299380 = this;
var rear__299381 = cljs.core.seq.call(null,this__299380.rear);

if(cljs.core.truth_((function (){var or__3548__auto____299382 = this__299380.front;

if(cljs.core.truth_(or__3548__auto____299382))
{return or__3548__auto____299382;
} else
{return rear__299381;
}
})()))
{return (new cljs.core.PersistentQueueSeq(null,this__299380.front,cljs.core.seq.call(null,rear__299381)));
} else
{return cljs.core.List.EMPTY;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ICounted$_count = (function (coll){
var this__299383 = this;
return this__299383.count;
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_peek = (function (coll){
var this__299384 = this;
return cljs.core._first.call(null,this__299384.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$IStack$_pop = (function (coll){
var this__299385 = this;
if(cljs.core.truth_(this__299385.front))
{var temp__3695__auto____299386 = cljs.core.next.call(null,this__299385.front);

if(cljs.core.truth_(temp__3695__auto____299386))
{var f1__299387 = temp__3695__auto____299386;

return (new cljs.core.PersistentQueue(this__299385.meta,(this__299385.count - 1),f1__299387,this__299385.rear));
} else
{return (new cljs.core.PersistentQueue(this__299385.meta,(this__299385.count - 1),cljs.core.seq.call(null,this__299385.rear),cljs.core.PersistentVector.fromArray([])));
}
} else
{return coll;
}
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_first = (function (coll){
var this__299388 = this;
return cljs.core.first.call(null,this__299388.front);
});
cljs.core.PersistentQueue.prototype.cljs$core$ISeq$_rest = (function (coll){
var this__299389 = this;
return cljs.core.rest.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__299390 = this;
return cljs.core.equiv_sequential.call(null,coll,other);
});
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__299391 = this;
return (new cljs.core.PersistentQueue(meta,this__299391.count,this__299391.front,this__299391.rear));
});
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__299392 = this;
return this__299392.meta;
});
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.PersistentQueue.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__299393 = this;
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
var this__299394 = this;
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
var len__299395 = array.length;

var i__299396 = 0;

while(true){
if(cljs.core.truth_((i__299396 < len__299395)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,k,(array[i__299396]))))
{return i__299396;
} else
{{
var G__299397 = (i__299396 + incr);
i__299396 = G__299397;
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
var obj_map_contains_key_QMARK___299399 = (function (k,strobj){
return obj_map_contains_key_QMARK_.call(null,k,strobj,true,false);
});
var obj_map_contains_key_QMARK___299400 = (function (k,strobj,true_val,false_val){
if(cljs.core.truth_((function (){var and__3546__auto____299398 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____299398))
{return strobj.hasOwnProperty(k);
} else
{return and__3546__auto____299398;
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
return obj_map_contains_key_QMARK___299399.call(this,k,strobj);
case  4 :
return obj_map_contains_key_QMARK___299400.call(this,k,strobj,true_val,false_val);
}
throw('Invalid arity: ' + arguments.length);
};
return obj_map_contains_key_QMARK_;
})()
;
cljs.core.obj_map_compare_keys = (function obj_map_compare_keys(a,b){
var a__299403 = cljs.core.hash.call(null,a);
var b__299404 = cljs.core.hash.call(null,b);

if(cljs.core.truth_((a__299403 < b__299404)))
{return -1;
} else
{if(cljs.core.truth_((a__299403 > b__299404)))
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
var this__299405 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.ObjMap.prototype.cljs$core$ILookup$ = true;
cljs.core.ObjMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__299432 = null;
var G__299432__299433 = (function (coll,k){
var this__299406 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__299432__299434 = (function (coll,k,not_found){
var this__299407 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__299407.strobj,(this__299407.strobj[k]),not_found);
});
G__299432 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__299432__299433.call(this,coll,k);
case  3 :
return G__299432__299434.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__299432;
})()
;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__299408 = this;
if(cljs.core.truth_(goog.isString.call(null,k)))
{var new_strobj__299409 = goog.object.clone.call(null,this__299408.strobj);
var overwrite_QMARK___299410 = new_strobj__299409.hasOwnProperty(k);

(new_strobj__299409[k] = v);
if(cljs.core.truth_(overwrite_QMARK___299410))
{return (new cljs.core.ObjMap(this__299408.meta,this__299408.keys,new_strobj__299409));
} else
{var new_keys__299411 = cljs.core.aclone.call(null,this__299408.keys);

new_keys__299411.push(k);
return (new cljs.core.ObjMap(this__299408.meta,new_keys__299411,new_strobj__299409));
}
} else
{return cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.hash_map.call(null,k,v),cljs.core.seq.call(null,coll)),this__299408.meta);
}
});
cljs.core.ObjMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__299412 = this;
return cljs.core.obj_map_contains_key_QMARK_.call(null,k,this__299412.strobj);
});
cljs.core.ObjMap.prototype.cljs$core$IFn$ = true;
cljs.core.ObjMap.prototype.call = (function() {
var G__299436 = null;
var G__299436__299437 = (function (tsym299413,k){
var this__299415 = this;
var tsym299413__299416 = this;

var coll__299417 = tsym299413__299416;

return cljs.core._lookup.call(null,coll__299417,k);
});
var G__299436__299438 = (function (tsym299414,k,not_found){
var this__299418 = this;
var tsym299414__299419 = this;

var coll__299420 = tsym299414__299419;

return cljs.core._lookup.call(null,coll__299420,k,not_found);
});
G__299436 = function(tsym299414,k,not_found){
switch(arguments.length){
case  2 :
return G__299436__299437.call(this,tsym299414,k);
case  3 :
return G__299436__299438.call(this,tsym299414,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__299436;
})()
;
cljs.core.ObjMap.prototype.cljs$core$ICollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__299421 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.ObjMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.ObjMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__299422 = this;
if(cljs.core.truth_((this__299422.keys.length > 0)))
{return cljs.core.map.call(null,(function (p1__299402_SHARP_){
return cljs.core.vector.call(null,p1__299402_SHARP_,(this__299422.strobj[p1__299402_SHARP_]));
}),this__299422.keys.sort(cljs.core.obj_map_compare_keys));
} else
{return null;
}
});
cljs.core.ObjMap.prototype.cljs$core$ICounted$ = true;
cljs.core.ObjMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__299423 = this;
return this__299423.keys.length;
});
cljs.core.ObjMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__299424 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__299425 = this;
return (new cljs.core.ObjMap(meta,this__299425.keys,this__299425.strobj));
});
cljs.core.ObjMap.prototype.cljs$core$IMeta$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__299426 = this;
return this__299426.meta;
});
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.ObjMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__299427 = this;
return cljs.core.with_meta.call(null,cljs.core.ObjMap.EMPTY,this__299427.meta);
});
cljs.core.ObjMap.prototype.cljs$core$IMap$ = true;
cljs.core.ObjMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__299428 = this;
if(cljs.core.truth_((function (){var and__3546__auto____299429 = goog.isString.call(null,k);

if(cljs.core.truth_(and__3546__auto____299429))
{return this__299428.strobj.hasOwnProperty(k);
} else
{return and__3546__auto____299429;
}
})()))
{var new_keys__299430 = cljs.core.aclone.call(null,this__299428.keys);
var new_strobj__299431 = goog.object.clone.call(null,this__299428.strobj);

new_keys__299430.splice(cljs.core.scan_array.call(null,1,k,new_keys__299430),1);
cljs.core.js_delete.call(null,new_strobj__299431,k);
return (new cljs.core.ObjMap(this__299428.meta,new_keys__299430,new_strobj__299431));
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
var this__299441 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.HashMap.prototype.cljs$core$ILookup$ = true;
cljs.core.HashMap.prototype.cljs$core$ILookup$_lookup = (function() {
var G__299479 = null;
var G__299479__299480 = (function (coll,k){
var this__299442 = this;
return cljs.core._lookup.call(null,coll,k,null);
});
var G__299479__299481 = (function (coll,k,not_found){
var this__299443 = this;
var bucket__299444 = (this__299443.hashobj[cljs.core.hash.call(null,k)]);
var i__299445 = (cljs.core.truth_(bucket__299444)?cljs.core.scan_array.call(null,2,k,bucket__299444):null);

if(cljs.core.truth_(i__299445))
{return (bucket__299444[(i__299445 + 1)]);
} else
{return not_found;
}
});
G__299479 = function(coll,k,not_found){
switch(arguments.length){
case  2 :
return G__299479__299480.call(this,coll,k);
case  3 :
return G__299479__299481.call(this,coll,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__299479;
})()
;
cljs.core.HashMap.prototype.cljs$core$IAssociative$ = true;
cljs.core.HashMap.prototype.cljs$core$IAssociative$_assoc = (function (coll,k,v){
var this__299446 = this;
var h__299447 = cljs.core.hash.call(null,k);
var bucket__299448 = (this__299446.hashobj[h__299447]);

if(cljs.core.truth_(bucket__299448))
{var new_bucket__299449 = cljs.core.aclone.call(null,bucket__299448);
var new_hashobj__299450 = goog.object.clone.call(null,this__299446.hashobj);

(new_hashobj__299450[h__299447] = new_bucket__299449);
var temp__3695__auto____299451 = cljs.core.scan_array.call(null,2,k,new_bucket__299449);

if(cljs.core.truth_(temp__3695__auto____299451))
{var i__299452 = temp__3695__auto____299451;

(new_bucket__299449[(i__299452 + 1)] = v);
return (new cljs.core.HashMap(this__299446.meta,this__299446.count,new_hashobj__299450));
} else
{new_bucket__299449.push(k,v);
return (new cljs.core.HashMap(this__299446.meta,(this__299446.count + 1),new_hashobj__299450));
}
} else
{var new_hashobj__299453 = goog.object.clone.call(null,this__299446.hashobj);

(new_hashobj__299453[h__299447] = [k,v]);
return (new cljs.core.HashMap(this__299446.meta,(this__299446.count + 1),new_hashobj__299453));
}
});
cljs.core.HashMap.prototype.cljs$core$IAssociative$_contains_key_QMARK_ = (function (coll,k){
var this__299454 = this;
var bucket__299455 = (this__299454.hashobj[cljs.core.hash.call(null,k)]);
var i__299456 = (cljs.core.truth_(bucket__299455)?cljs.core.scan_array.call(null,2,k,bucket__299455):null);

if(cljs.core.truth_(i__299456))
{return true;
} else
{return false;
}
});
cljs.core.HashMap.prototype.cljs$core$IFn$ = true;
cljs.core.HashMap.prototype.call = (function() {
var G__299483 = null;
var G__299483__299484 = (function (tsym299457,k){
var this__299459 = this;
var tsym299457__299460 = this;

var coll__299461 = tsym299457__299460;

return cljs.core._lookup.call(null,coll__299461,k);
});
var G__299483__299485 = (function (tsym299458,k,not_found){
var this__299462 = this;
var tsym299458__299463 = this;

var coll__299464 = tsym299458__299463;

return cljs.core._lookup.call(null,coll__299464,k,not_found);
});
G__299483 = function(tsym299458,k,not_found){
switch(arguments.length){
case  2 :
return G__299483__299484.call(this,tsym299458,k);
case  3 :
return G__299483__299485.call(this,tsym299458,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__299483;
})()
;
cljs.core.HashMap.prototype.cljs$core$ICollection$ = true;
cljs.core.HashMap.prototype.cljs$core$ICollection$_conj = (function (coll,entry){
var this__299465 = this;
if(cljs.core.truth_(cljs.core.vector_QMARK_.call(null,entry)))
{return cljs.core._assoc.call(null,coll,cljs.core._nth.call(null,entry,0),cljs.core._nth.call(null,entry,1));
} else
{return cljs.core.reduce.call(null,cljs.core._conj,coll,entry);
}
});
cljs.core.HashMap.prototype.cljs$core$ISeqable$ = true;
cljs.core.HashMap.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__299466 = this;
if(cljs.core.truth_((this__299466.count > 0)))
{var hashes__299467 = cljs.core.js_keys.call(null,this__299466.hashobj).sort();

return cljs.core.mapcat.call(null,(function (p1__299440_SHARP_){
return cljs.core.map.call(null,cljs.core.vec,cljs.core.partition.call(null,2,(this__299466.hashobj[p1__299440_SHARP_])));
}),hashes__299467);
} else
{return null;
}
});
cljs.core.HashMap.prototype.cljs$core$ICounted$ = true;
cljs.core.HashMap.prototype.cljs$core$ICounted$_count = (function (coll){
var this__299468 = this;
return this__299468.count;
});
cljs.core.HashMap.prototype.cljs$core$IEquiv$ = true;
cljs.core.HashMap.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__299469 = this;
return cljs.core.equiv_map.call(null,coll,other);
});
cljs.core.HashMap.prototype.cljs$core$IWithMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__299470 = this;
return (new cljs.core.HashMap(meta,this__299470.count,this__299470.hashobj));
});
cljs.core.HashMap.prototype.cljs$core$IMeta$ = true;
cljs.core.HashMap.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__299471 = this;
return this__299471.meta;
});
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.HashMap.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__299472 = this;
return cljs.core.with_meta.call(null,cljs.core.HashMap.EMPTY,this__299472.meta);
});
cljs.core.HashMap.prototype.cljs$core$IMap$ = true;
cljs.core.HashMap.prototype.cljs$core$IMap$_dissoc = (function (coll,k){
var this__299473 = this;
var h__299474 = cljs.core.hash.call(null,k);
var bucket__299475 = (this__299473.hashobj[h__299474]);
var i__299476 = (cljs.core.truth_(bucket__299475)?cljs.core.scan_array.call(null,2,k,bucket__299475):null);

if(cljs.core.truth_(cljs.core.not.call(null,i__299476)))
{return coll;
} else
{var new_hashobj__299477 = goog.object.clone.call(null,this__299473.hashobj);

if(cljs.core.truth_((3 > bucket__299475.length)))
{cljs.core.js_delete.call(null,new_hashobj__299477,h__299474);
} else
{var new_bucket__299478 = cljs.core.aclone.call(null,bucket__299475);

new_bucket__299478.splice(i__299476,2);
(new_hashobj__299477[h__299474] = new_bucket__299478);
}
return (new cljs.core.HashMap(this__299473.meta,(this__299473.count - 1),new_hashobj__299477));
}
});
cljs.core.HashMap;
cljs.core.HashMap.EMPTY = (new cljs.core.HashMap(null,0,cljs.core.js_obj.call(null)));
cljs.core.HashMap.fromArrays = (function (ks,vs){
var len__299487 = ks.length;

var i__299488 = 0;
var out__299489 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_((i__299488 < len__299487)))
{{
var G__299490 = (i__299488 + 1);
var G__299491 = cljs.core.assoc.call(null,out__299489,(ks[i__299488]),(vs[i__299488]));
i__299488 = G__299490;
out__299489 = G__299491;
continue;
}
} else
{return out__299489;
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
var in$__299492 = cljs.core.seq.call(null,keyvals);
var out__299493 = cljs.core.HashMap.EMPTY;

while(true){
if(cljs.core.truth_(in$__299492))
{{
var G__299494 = cljs.core.nnext.call(null,in$__299492);
var G__299495 = cljs.core.assoc.call(null,out__299493,cljs.core.first.call(null,in$__299492),cljs.core.second.call(null,in$__299492));
in$__299492 = G__299494;
out__299493 = G__299495;
continue;
}
} else
{return out__299493;
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
hash_map.cljs$lang$applyTo = (function (arglist__299496){
var keyvals = cljs.core.seq( arglist__299496 );;
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
{return cljs.core.reduce.call(null,(function (p1__299497_SHARP_,p2__299498_SHARP_){
return cljs.core.conj.call(null,(function (){var or__3548__auto____299499 = p1__299497_SHARP_;

if(cljs.core.truth_(or__3548__auto____299499))
{return or__3548__auto____299499;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),p2__299498_SHARP_);
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
merge.cljs$lang$applyTo = (function (arglist__299500){
var maps = cljs.core.seq( arglist__299500 );;
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
{var merge_entry__299503 = (function (m,e){
var k__299501 = cljs.core.first.call(null,e);
var v__299502 = cljs.core.second.call(null,e);

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,m,k__299501)))
{return cljs.core.assoc.call(null,m,k__299501,f.call(null,cljs.core.get.call(null,m,k__299501),v__299502));
} else
{return cljs.core.assoc.call(null,m,k__299501,v__299502);
}
});
var merge2__299505 = (function (m1,m2){
return cljs.core.reduce.call(null,merge_entry__299503,(function (){var or__3548__auto____299504 = m1;

if(cljs.core.truth_(or__3548__auto____299504))
{return or__3548__auto____299504;
} else
{return cljs.core.ObjMap.fromObject([],{});
}
})(),cljs.core.seq.call(null,m2));
});

return cljs.core.reduce.call(null,merge2__299505,maps);
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
merge_with.cljs$lang$applyTo = (function (arglist__299506){
var f = cljs.core.first(arglist__299506);
var maps = cljs.core.rest(arglist__299506);
return merge_with__delegate.call(this, f, maps);
});
return merge_with;
})()
;
/**
* Returns a map containing only those entries in map whose key is in keys
*/
cljs.core.select_keys = (function select_keys(map,keyseq){
var ret__299508 = cljs.core.ObjMap.fromObject([],{});
var keys__299509 = cljs.core.seq.call(null,keyseq);

while(true){
if(cljs.core.truth_(keys__299509))
{var key__299510 = cljs.core.first.call(null,keys__299509);
var entry__299511 = cljs.core.get.call(null,map,key__299510,"\uFDD0'user/not-found");

{
var G__299512 = (cljs.core.truth_(cljs.core.not_EQ_.call(null,entry__299511,"\uFDD0'user/not-found"))?cljs.core.assoc.call(null,ret__299508,key__299510,entry__299511):ret__299508);
var G__299513 = cljs.core.next.call(null,keys__299509);
ret__299508 = G__299512;
keys__299509 = G__299513;
continue;
}
} else
{return ret__299508;
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
var this__299514 = this;
return cljs.core.hash_coll.call(null,coll);
});
cljs.core.Set.prototype.cljs$core$ILookup$ = true;
cljs.core.Set.prototype.cljs$core$ILookup$_lookup = (function() {
var G__299535 = null;
var G__299535__299536 = (function (coll,v){
var this__299515 = this;
return cljs.core._lookup.call(null,coll,v,null);
});
var G__299535__299537 = (function (coll,v,not_found){
var this__299516 = this;
if(cljs.core.truth_(cljs.core._contains_key_QMARK_.call(null,this__299516.hash_map,v)))
{return v;
} else
{return not_found;
}
});
G__299535 = function(coll,v,not_found){
switch(arguments.length){
case  2 :
return G__299535__299536.call(this,coll,v);
case  3 :
return G__299535__299537.call(this,coll,v,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__299535;
})()
;
cljs.core.Set.prototype.cljs$core$IFn$ = true;
cljs.core.Set.prototype.call = (function() {
var G__299539 = null;
var G__299539__299540 = (function (tsym299517,k){
var this__299519 = this;
var tsym299517__299520 = this;

var coll__299521 = tsym299517__299520;

return cljs.core._lookup.call(null,coll__299521,k);
});
var G__299539__299541 = (function (tsym299518,k,not_found){
var this__299522 = this;
var tsym299518__299523 = this;

var coll__299524 = tsym299518__299523;

return cljs.core._lookup.call(null,coll__299524,k,not_found);
});
G__299539 = function(tsym299518,k,not_found){
switch(arguments.length){
case  2 :
return G__299539__299540.call(this,tsym299518,k);
case  3 :
return G__299539__299541.call(this,tsym299518,k,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__299539;
})()
;
cljs.core.Set.prototype.cljs$core$ICollection$ = true;
cljs.core.Set.prototype.cljs$core$ICollection$_conj = (function (coll,o){
var this__299525 = this;
return (new cljs.core.Set(this__299525.meta,cljs.core.assoc.call(null,this__299525.hash_map,o,null)));
});
cljs.core.Set.prototype.cljs$core$ISeqable$ = true;
cljs.core.Set.prototype.cljs$core$ISeqable$_seq = (function (coll){
var this__299526 = this;
return cljs.core.keys.call(null,this__299526.hash_map);
});
cljs.core.Set.prototype.cljs$core$ISet$ = true;
cljs.core.Set.prototype.cljs$core$ISet$_disjoin = (function (coll,v){
var this__299527 = this;
return (new cljs.core.Set(this__299527.meta,cljs.core.dissoc.call(null,this__299527.hash_map,v)));
});
cljs.core.Set.prototype.cljs$core$ICounted$ = true;
cljs.core.Set.prototype.cljs$core$ICounted$_count = (function (coll){
var this__299528 = this;
return cljs.core.count.call(null,cljs.core.seq.call(null,coll));
});
cljs.core.Set.prototype.cljs$core$IEquiv$ = true;
cljs.core.Set.prototype.cljs$core$IEquiv$_equiv = (function (coll,other){
var this__299529 = this;
var and__3546__auto____299530 = cljs.core.set_QMARK_.call(null,other);

if(cljs.core.truth_(and__3546__auto____299530))
{var and__3546__auto____299531 = cljs.core._EQ_.call(null,cljs.core.count.call(null,coll),cljs.core.count.call(null,other));

if(cljs.core.truth_(and__3546__auto____299531))
{return cljs.core.every_QMARK_.call(null,(function (p1__299507_SHARP_){
return cljs.core.contains_QMARK_.call(null,coll,p1__299507_SHARP_);
}),other);
} else
{return and__3546__auto____299531;
}
} else
{return and__3546__auto____299530;
}
});
cljs.core.Set.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Set.prototype.cljs$core$IWithMeta$_with_meta = (function (coll,meta){
var this__299532 = this;
return (new cljs.core.Set(meta,this__299532.hash_map));
});
cljs.core.Set.prototype.cljs$core$IMeta$ = true;
cljs.core.Set.prototype.cljs$core$IMeta$_meta = (function (coll){
var this__299533 = this;
return this__299533.meta;
});
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Set.prototype.cljs$core$IEmptyableCollection$_empty = (function (coll){
var this__299534 = this;
return cljs.core.with_meta.call(null,cljs.core.Set.EMPTY,this__299534.meta);
});
cljs.core.Set;
cljs.core.Set.EMPTY = (new cljs.core.Set(null,cljs.core.hash_map.call(null)));
/**
* Returns a set of the distinct elements of coll.
*/
cljs.core.set = (function set(coll){
var in$__299544 = cljs.core.seq.call(null,coll);
var out__299545 = cljs.core.Set.EMPTY;

while(true){
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core.empty_QMARK_.call(null,in$__299544))))
{{
var G__299546 = cljs.core.rest.call(null,in$__299544);
var G__299547 = cljs.core.conj.call(null,out__299545,cljs.core.first.call(null,in$__299544));
in$__299544 = G__299546;
out__299545 = G__299547;
continue;
}
} else
{return out__299545;
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
{var n__299548 = cljs.core.count.call(null,coll);

return cljs.core.reduce.call(null,(function (v,i){
var temp__3695__auto____299549 = cljs.core.find.call(null,smap,cljs.core.nth.call(null,v,i));

if(cljs.core.truth_(temp__3695__auto____299549))
{var e__299550 = temp__3695__auto____299549;

return cljs.core.assoc.call(null,v,i,cljs.core.second.call(null,e__299550));
} else
{return v;
}
}),coll,cljs.core.take.call(null,n__299548,cljs.core.iterate.call(null,cljs.core.inc,0)));
} else
{return cljs.core.map.call(null,(function (p1__299543_SHARP_){
var temp__3695__auto____299551 = cljs.core.find.call(null,smap,p1__299543_SHARP_);

if(cljs.core.truth_(temp__3695__auto____299551))
{var e__299552 = temp__3695__auto____299551;

return cljs.core.second.call(null,e__299552);
} else
{return p1__299543_SHARP_;
}
}),coll);
}
});
/**
* Returns a lazy sequence of the elements of coll with duplicates removed
*/
cljs.core.distinct = (function distinct(coll){
var step__299560 = (function step(xs,seen){
return (new cljs.core.LazySeq(null,false,(function (){
return (function (p__299553,seen){
while(true){
var vec__299554__299555 = p__299553;
var f__299556 = cljs.core.nth.call(null,vec__299554__299555,0,null);
var xs__299557 = vec__299554__299555;

var temp__3698__auto____299558 = cljs.core.seq.call(null,xs__299557);

if(cljs.core.truth_(temp__3698__auto____299558))
{var s__299559 = temp__3698__auto____299558;

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,seen,f__299556)))
{{
var G__299561 = cljs.core.rest.call(null,s__299559);
var G__299562 = seen;
p__299553 = G__299561;
seen = G__299562;
continue;
}
} else
{return cljs.core.cons.call(null,f__299556,step.call(null,cljs.core.rest.call(null,s__299559),cljs.core.conj.call(null,seen,f__299556)));
}
} else
{return null;
}
break;
}
}).call(null,xs,seen);
})));
});

return step__299560.call(null,coll,cljs.core.set([]));
});
cljs.core.butlast = (function butlast(s){
var ret__299563 = cljs.core.PersistentVector.fromArray([]);
var s__299564 = s;

while(true){
if(cljs.core.truth_(cljs.core.next.call(null,s__299564)))
{{
var G__299565 = cljs.core.conj.call(null,ret__299563,cljs.core.first.call(null,s__299564));
var G__299566 = cljs.core.next.call(null,s__299564);
ret__299563 = G__299565;
s__299564 = G__299566;
continue;
}
} else
{return cljs.core.seq.call(null,ret__299563);
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
{if(cljs.core.truth_((function (){var or__3548__auto____299567 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____299567))
{return or__3548__auto____299567;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__299568 = x.lastIndexOf("/");

if(cljs.core.truth_((i__299568 < 0)))
{return cljs.core.subs.call(null,x,2);
} else
{return cljs.core.subs.call(null,x,(i__299568 + 1));
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
if(cljs.core.truth_((function (){var or__3548__auto____299569 = cljs.core.keyword_QMARK_.call(null,x);

if(cljs.core.truth_(or__3548__auto____299569))
{return or__3548__auto____299569;
} else
{return cljs.core.symbol_QMARK_.call(null,x);
}
})()))
{var i__299570 = x.lastIndexOf("/");

if(cljs.core.truth_((i__299570 > -1)))
{return cljs.core.subs.call(null,x,2,i__299570);
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
var map__299573 = cljs.core.ObjMap.fromObject([],{});
var ks__299574 = cljs.core.seq.call(null,keys);
var vs__299575 = cljs.core.seq.call(null,vals);

while(true){
if(cljs.core.truth_((function (){var and__3546__auto____299576 = ks__299574;

if(cljs.core.truth_(and__3546__auto____299576))
{return vs__299575;
} else
{return and__3546__auto____299576;
}
})()))
{{
var G__299577 = cljs.core.assoc.call(null,map__299573,cljs.core.first.call(null,ks__299574),cljs.core.first.call(null,vs__299575));
var G__299578 = cljs.core.next.call(null,ks__299574);
var G__299579 = cljs.core.next.call(null,vs__299575);
map__299573 = G__299577;
ks__299574 = G__299578;
vs__299575 = G__299579;
continue;
}
} else
{return map__299573;
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
var max_key__299582 = (function (k,x){
return x;
});
var max_key__299583 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) > k.call(null,y))))
{return x;
} else
{return y;
}
});
var max_key__299584 = (function() { 
var G__299586__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__299571_SHARP_,p2__299572_SHARP_){
return max_key.call(null,k,p1__299571_SHARP_,p2__299572_SHARP_);
}),max_key.call(null,k,x,y),more);
};
var G__299586 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__299586__delegate.call(this, k, x, y, more);
};
G__299586.cljs$lang$maxFixedArity = 3;
G__299586.cljs$lang$applyTo = (function (arglist__299587){
var k = cljs.core.first(arglist__299587);
var x = cljs.core.first(cljs.core.next(arglist__299587));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__299587)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__299587)));
return G__299586__delegate.call(this, k, x, y, more);
});
return G__299586;
})()
;
max_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return max_key__299582.call(this,k,x);
case  3 :
return max_key__299583.call(this,k,x,y);
default:
return max_key__299584.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
max_key.cljs$lang$maxFixedArity = 3;
max_key.cljs$lang$applyTo = max_key__299584.cljs$lang$applyTo;
return max_key;
})()
;
/**
* Returns the x for which (k x), a number, is least.
* @param {...*} var_args
*/
cljs.core.min_key = (function() {
var min_key = null;
var min_key__299588 = (function (k,x){
return x;
});
var min_key__299589 = (function (k,x,y){
if(cljs.core.truth_((k.call(null,x) < k.call(null,y))))
{return x;
} else
{return y;
}
});
var min_key__299590 = (function() { 
var G__299592__delegate = function (k,x,y,more){
return cljs.core.reduce.call(null,(function (p1__299580_SHARP_,p2__299581_SHARP_){
return min_key.call(null,k,p1__299580_SHARP_,p2__299581_SHARP_);
}),min_key.call(null,k,x,y),more);
};
var G__299592 = function (k,x,y,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__299592__delegate.call(this, k, x, y, more);
};
G__299592.cljs$lang$maxFixedArity = 3;
G__299592.cljs$lang$applyTo = (function (arglist__299593){
var k = cljs.core.first(arglist__299593);
var x = cljs.core.first(cljs.core.next(arglist__299593));
var y = cljs.core.first(cljs.core.next(cljs.core.next(arglist__299593)));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__299593)));
return G__299592__delegate.call(this, k, x, y, more);
});
return G__299592;
})()
;
min_key = function(k,x,y,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return min_key__299588.call(this,k,x);
case  3 :
return min_key__299589.call(this,k,x,y);
default:
return min_key__299590.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
min_key.cljs$lang$maxFixedArity = 3;
min_key.cljs$lang$applyTo = min_key__299590.cljs$lang$applyTo;
return min_key;
})()
;
/**
* Returns a lazy sequence of lists like partition, but may include
* partitions with fewer than n items at the end.
*/
cljs.core.partition_all = (function() {
var partition_all = null;
var partition_all__299596 = (function (n,coll){
return partition_all.call(null,n,n,coll);
});
var partition_all__299597 = (function (n,step,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____299594 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____299594))
{var s__299595 = temp__3698__auto____299594;

return cljs.core.cons.call(null,cljs.core.take.call(null,n,s__299595),partition_all.call(null,n,step,cljs.core.drop.call(null,step,s__299595)));
} else
{return null;
}
})));
});
partition_all = function(n,step,coll){
switch(arguments.length){
case  2 :
return partition_all__299596.call(this,n,step);
case  3 :
return partition_all__299597.call(this,n,step,coll);
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
var temp__3698__auto____299599 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____299599))
{var s__299600 = temp__3698__auto____299599;

if(cljs.core.truth_(pred.call(null,cljs.core.first.call(null,s__299600))))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s__299600),take_while.call(null,pred,cljs.core.rest.call(null,s__299600)));
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
var this__299601 = this;
return cljs.core.hash_coll.call(null,rng);
});
cljs.core.Range.prototype.cljs$core$ISequential$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$ = true;
cljs.core.Range.prototype.cljs$core$ICollection$_conj = (function (rng,o){
var this__299602 = this;
return cljs.core.cons.call(null,o,rng);
});
cljs.core.Range.prototype.cljs$core$IReduce$ = true;
cljs.core.Range.prototype.cljs$core$IReduce$_reduce = (function() {
var G__299618 = null;
var G__299618__299619 = (function (rng,f){
var this__299603 = this;
return cljs.core.ci_reduce.call(null,rng,f);
});
var G__299618__299620 = (function (rng,f,s){
var this__299604 = this;
return cljs.core.ci_reduce.call(null,rng,f,s);
});
G__299618 = function(rng,f,s){
switch(arguments.length){
case  2 :
return G__299618__299619.call(this,rng,f);
case  3 :
return G__299618__299620.call(this,rng,f,s);
}
throw('Invalid arity: ' + arguments.length);
};
return G__299618;
})()
;
cljs.core.Range.prototype.cljs$core$ISeqable$ = true;
cljs.core.Range.prototype.cljs$core$ISeqable$_seq = (function (rng){
var this__299605 = this;
var comp__299606 = (cljs.core.truth_((this__299605.step > 0))?cljs.core._LT_:cljs.core._GT_);

if(cljs.core.truth_(comp__299606.call(null,this__299605.start,this__299605.end)))
{return rng;
} else
{return null;
}
});
cljs.core.Range.prototype.cljs$core$ICounted$ = true;
cljs.core.Range.prototype.cljs$core$ICounted$_count = (function (rng){
var this__299607 = this;
if(cljs.core.truth_(cljs.core.not.call(null,cljs.core._seq.call(null,rng))))
{return 0;
} else
{return Math['ceil'].call(null,((this__299607.end - this__299607.start) / this__299607.step));
}
});
cljs.core.Range.prototype.cljs$core$ISeq$ = true;
cljs.core.Range.prototype.cljs$core$ISeq$_first = (function (rng){
var this__299608 = this;
return this__299608.start;
});
cljs.core.Range.prototype.cljs$core$ISeq$_rest = (function (rng){
var this__299609 = this;
if(cljs.core.truth_(cljs.core._seq.call(null,rng)))
{return (new cljs.core.Range(this__299609.meta,(this__299609.start + this__299609.step),this__299609.end,this__299609.step));
} else
{return cljs.core.list.call(null);
}
});
cljs.core.Range.prototype.cljs$core$IEquiv$ = true;
cljs.core.Range.prototype.cljs$core$IEquiv$_equiv = (function (rng,other){
var this__299610 = this;
return cljs.core.equiv_sequential.call(null,rng,other);
});
cljs.core.Range.prototype.cljs$core$IWithMeta$ = true;
cljs.core.Range.prototype.cljs$core$IWithMeta$_with_meta = (function (rng,meta){
var this__299611 = this;
return (new cljs.core.Range(meta,this__299611.start,this__299611.end,this__299611.step));
});
cljs.core.Range.prototype.cljs$core$IMeta$ = true;
cljs.core.Range.prototype.cljs$core$IMeta$_meta = (function (rng){
var this__299612 = this;
return this__299612.meta;
});
cljs.core.Range.prototype.cljs$core$IIndexed$ = true;
cljs.core.Range.prototype.cljs$core$IIndexed$_nth = (function() {
var G__299622 = null;
var G__299622__299623 = (function (rng,n){
var this__299613 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__299613.start + (n * this__299613.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____299614 = (this__299613.start > this__299613.end);

if(cljs.core.truth_(and__3546__auto____299614))
{return cljs.core._EQ_.call(null,this__299613.step,0);
} else
{return and__3546__auto____299614;
}
})()))
{return this__299613.start;
} else
{throw (new Error("Index out of bounds"));
}
}
});
var G__299622__299624 = (function (rng,n,not_found){
var this__299615 = this;
if(cljs.core.truth_((n < cljs.core._count.call(null,rng))))
{return (this__299615.start + (n * this__299615.step));
} else
{if(cljs.core.truth_((function (){var and__3546__auto____299616 = (this__299615.start > this__299615.end);

if(cljs.core.truth_(and__3546__auto____299616))
{return cljs.core._EQ_.call(null,this__299615.step,0);
} else
{return and__3546__auto____299616;
}
})()))
{return this__299615.start;
} else
{return not_found;
}
}
});
G__299622 = function(rng,n,not_found){
switch(arguments.length){
case  2 :
return G__299622__299623.call(this,rng,n);
case  3 :
return G__299622__299624.call(this,rng,n,not_found);
}
throw('Invalid arity: ' + arguments.length);
};
return G__299622;
})()
;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$ = true;
cljs.core.Range.prototype.cljs$core$IEmptyableCollection$_empty = (function (rng){
var this__299617 = this;
return cljs.core.with_meta.call(null,cljs.core.List.EMPTY,this__299617.meta);
});
cljs.core.Range;
/**
* Returns a lazy seq of nums from start (inclusive) to end
* (exclusive), by step, where start defaults to 0, step to 1,
* and end to infinity.
*/
cljs.core.range = (function() {
var range = null;
var range__299626 = (function (){
return range.call(null,0,Number['MAX_VALUE'],1);
});
var range__299627 = (function (end){
return range.call(null,0,end,1);
});
var range__299628 = (function (start,end){
return range.call(null,start,end,1);
});
var range__299629 = (function (start,end,step){
return (new cljs.core.Range(null,start,end,step));
});
range = function(start,end,step){
switch(arguments.length){
case  0 :
return range__299626.call(this);
case  1 :
return range__299627.call(this,start);
case  2 :
return range__299628.call(this,start,end);
case  3 :
return range__299629.call(this,start,end,step);
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
var temp__3698__auto____299631 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____299631))
{var s__299632 = temp__3698__auto____299631;

return cljs.core.cons.call(null,cljs.core.first.call(null,s__299632),take_nth.call(null,n,cljs.core.drop.call(null,n,s__299632)));
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
var temp__3698__auto____299634 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____299634))
{var s__299635 = temp__3698__auto____299634;

var fst__299636 = cljs.core.first.call(null,s__299635);
var fv__299637 = f.call(null,fst__299636);
var run__299638 = cljs.core.cons.call(null,fst__299636,cljs.core.take_while.call(null,(function (p1__299633_SHARP_){
return cljs.core._EQ_.call(null,fv__299637,f.call(null,p1__299633_SHARP_));
}),cljs.core.next.call(null,s__299635)));

return cljs.core.cons.call(null,run__299638,partition_by.call(null,f,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,run__299638),s__299635))));
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
var reductions__299653 = (function (f,coll){
return (new cljs.core.LazySeq(null,false,(function (){
var temp__3695__auto____299649 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3695__auto____299649))
{var s__299650 = temp__3695__auto____299649;

return reductions.call(null,f,cljs.core.first.call(null,s__299650),cljs.core.rest.call(null,s__299650));
} else
{return cljs.core.list.call(null,f.call(null));
}
})));
});
var reductions__299654 = (function (f,init,coll){
return cljs.core.cons.call(null,init,(new cljs.core.LazySeq(null,false,(function (){
var temp__3698__auto____299651 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(temp__3698__auto____299651))
{var s__299652 = temp__3698__auto____299651;

return reductions.call(null,f,f.call(null,init,cljs.core.first.call(null,s__299652)),cljs.core.rest.call(null,s__299652));
} else
{return null;
}
}))));
});
reductions = function(f,init,coll){
switch(arguments.length){
case  2 :
return reductions__299653.call(this,f,init);
case  3 :
return reductions__299654.call(this,f,init,coll);
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
var juxt__299657 = (function (f){
return (function() {
var G__299662 = null;
var G__299662__299663 = (function (){
return cljs.core.vector.call(null,f.call(null));
});
var G__299662__299664 = (function (x){
return cljs.core.vector.call(null,f.call(null,x));
});
var G__299662__299665 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y));
});
var G__299662__299666 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z));
});
var G__299662__299667 = (function() { 
var G__299669__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args));
};
var G__299669 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__299669__delegate.call(this, x, y, z, args);
};
G__299669.cljs$lang$maxFixedArity = 3;
G__299669.cljs$lang$applyTo = (function (arglist__299670){
var x = cljs.core.first(arglist__299670);
var y = cljs.core.first(cljs.core.next(arglist__299670));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__299670)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__299670)));
return G__299669__delegate.call(this, x, y, z, args);
});
return G__299669;
})()
;
G__299662 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__299662__299663.call(this);
case  1 :
return G__299662__299664.call(this,x);
case  2 :
return G__299662__299665.call(this,x,y);
case  3 :
return G__299662__299666.call(this,x,y,z);
default:
return G__299662__299667.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__299662.cljs$lang$maxFixedArity = 3;
G__299662.cljs$lang$applyTo = G__299662__299667.cljs$lang$applyTo;
return G__299662;
})()
});
var juxt__299658 = (function (f,g){
return (function() {
var G__299671 = null;
var G__299671__299672 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null));
});
var G__299671__299673 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x));
});
var G__299671__299674 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y));
});
var G__299671__299675 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z));
});
var G__299671__299676 = (function() { 
var G__299678__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args));
};
var G__299678 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__299678__delegate.call(this, x, y, z, args);
};
G__299678.cljs$lang$maxFixedArity = 3;
G__299678.cljs$lang$applyTo = (function (arglist__299679){
var x = cljs.core.first(arglist__299679);
var y = cljs.core.first(cljs.core.next(arglist__299679));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__299679)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__299679)));
return G__299678__delegate.call(this, x, y, z, args);
});
return G__299678;
})()
;
G__299671 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__299671__299672.call(this);
case  1 :
return G__299671__299673.call(this,x);
case  2 :
return G__299671__299674.call(this,x,y);
case  3 :
return G__299671__299675.call(this,x,y,z);
default:
return G__299671__299676.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__299671.cljs$lang$maxFixedArity = 3;
G__299671.cljs$lang$applyTo = G__299671__299676.cljs$lang$applyTo;
return G__299671;
})()
});
var juxt__299659 = (function (f,g,h){
return (function() {
var G__299680 = null;
var G__299680__299681 = (function (){
return cljs.core.vector.call(null,f.call(null),g.call(null),h.call(null));
});
var G__299680__299682 = (function (x){
return cljs.core.vector.call(null,f.call(null,x),g.call(null,x),h.call(null,x));
});
var G__299680__299683 = (function (x,y){
return cljs.core.vector.call(null,f.call(null,x,y),g.call(null,x,y),h.call(null,x,y));
});
var G__299680__299684 = (function (x,y,z){
return cljs.core.vector.call(null,f.call(null,x,y,z),g.call(null,x,y,z),h.call(null,x,y,z));
});
var G__299680__299685 = (function() { 
var G__299687__delegate = function (x,y,z,args){
return cljs.core.vector.call(null,cljs.core.apply.call(null,f,x,y,z,args),cljs.core.apply.call(null,g,x,y,z,args),cljs.core.apply.call(null,h,x,y,z,args));
};
var G__299687 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__299687__delegate.call(this, x, y, z, args);
};
G__299687.cljs$lang$maxFixedArity = 3;
G__299687.cljs$lang$applyTo = (function (arglist__299688){
var x = cljs.core.first(arglist__299688);
var y = cljs.core.first(cljs.core.next(arglist__299688));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__299688)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__299688)));
return G__299687__delegate.call(this, x, y, z, args);
});
return G__299687;
})()
;
G__299680 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__299680__299681.call(this);
case  1 :
return G__299680__299682.call(this,x);
case  2 :
return G__299680__299683.call(this,x,y);
case  3 :
return G__299680__299684.call(this,x,y,z);
default:
return G__299680__299685.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__299680.cljs$lang$maxFixedArity = 3;
G__299680.cljs$lang$applyTo = G__299680__299685.cljs$lang$applyTo;
return G__299680;
})()
});
var juxt__299660 = (function() { 
var G__299689__delegate = function (f,g,h,fs){
var fs__299656 = cljs.core.list_STAR_.call(null,f,g,h,fs);

return (function() {
var G__299690 = null;
var G__299690__299691 = (function (){
return cljs.core.reduce.call(null,(function (p1__299639_SHARP_,p2__299640_SHARP_){
return cljs.core.conj.call(null,p1__299639_SHARP_,p2__299640_SHARP_.call(null));
}),cljs.core.PersistentVector.fromArray([]),fs__299656);
});
var G__299690__299692 = (function (x){
return cljs.core.reduce.call(null,(function (p1__299641_SHARP_,p2__299642_SHARP_){
return cljs.core.conj.call(null,p1__299641_SHARP_,p2__299642_SHARP_.call(null,x));
}),cljs.core.PersistentVector.fromArray([]),fs__299656);
});
var G__299690__299693 = (function (x,y){
return cljs.core.reduce.call(null,(function (p1__299643_SHARP_,p2__299644_SHARP_){
return cljs.core.conj.call(null,p1__299643_SHARP_,p2__299644_SHARP_.call(null,x,y));
}),cljs.core.PersistentVector.fromArray([]),fs__299656);
});
var G__299690__299694 = (function (x,y,z){
return cljs.core.reduce.call(null,(function (p1__299645_SHARP_,p2__299646_SHARP_){
return cljs.core.conj.call(null,p1__299645_SHARP_,p2__299646_SHARP_.call(null,x,y,z));
}),cljs.core.PersistentVector.fromArray([]),fs__299656);
});
var G__299690__299695 = (function() { 
var G__299697__delegate = function (x,y,z,args){
return cljs.core.reduce.call(null,(function (p1__299647_SHARP_,p2__299648_SHARP_){
return cljs.core.conj.call(null,p1__299647_SHARP_,cljs.core.apply.call(null,p2__299648_SHARP_,x,y,z,args));
}),cljs.core.PersistentVector.fromArray([]),fs__299656);
};
var G__299697 = function (x,y,z,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__299697__delegate.call(this, x, y, z, args);
};
G__299697.cljs$lang$maxFixedArity = 3;
G__299697.cljs$lang$applyTo = (function (arglist__299698){
var x = cljs.core.first(arglist__299698);
var y = cljs.core.first(cljs.core.next(arglist__299698));
var z = cljs.core.first(cljs.core.next(cljs.core.next(arglist__299698)));
var args = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__299698)));
return G__299697__delegate.call(this, x, y, z, args);
});
return G__299697;
})()
;
G__299690 = function(x,y,z,var_args){
var args = var_args;
switch(arguments.length){
case  0 :
return G__299690__299691.call(this);
case  1 :
return G__299690__299692.call(this,x);
case  2 :
return G__299690__299693.call(this,x,y);
case  3 :
return G__299690__299694.call(this,x,y,z);
default:
return G__299690__299695.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
G__299690.cljs$lang$maxFixedArity = 3;
G__299690.cljs$lang$applyTo = G__299690__299695.cljs$lang$applyTo;
return G__299690;
})()
};
var G__299689 = function (f,g,h,var_args){
var fs = null;
if (goog.isDef(var_args)) {
  fs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);
} 
return G__299689__delegate.call(this, f, g, h, fs);
};
G__299689.cljs$lang$maxFixedArity = 3;
G__299689.cljs$lang$applyTo = (function (arglist__299699){
var f = cljs.core.first(arglist__299699);
var g = cljs.core.first(cljs.core.next(arglist__299699));
var h = cljs.core.first(cljs.core.next(cljs.core.next(arglist__299699)));
var fs = cljs.core.rest(cljs.core.next(cljs.core.next(arglist__299699)));
return G__299689__delegate.call(this, f, g, h, fs);
});
return G__299689;
})()
;
juxt = function(f,g,h,var_args){
var fs = var_args;
switch(arguments.length){
case  1 :
return juxt__299657.call(this,f);
case  2 :
return juxt__299658.call(this,f,g);
case  3 :
return juxt__299659.call(this,f,g,h);
default:
return juxt__299660.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
juxt.cljs$lang$maxFixedArity = 3;
juxt.cljs$lang$applyTo = juxt__299660.cljs$lang$applyTo;
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
var dorun__299701 = (function (coll){
while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,coll)))
{{
var G__299704 = cljs.core.next.call(null,coll);
coll = G__299704;
continue;
}
} else
{return null;
}
break;
}
});
var dorun__299702 = (function (n,coll){
while(true){
if(cljs.core.truth_((function (){var and__3546__auto____299700 = cljs.core.seq.call(null,coll);

if(cljs.core.truth_(and__3546__auto____299700))
{return (n > 0);
} else
{return and__3546__auto____299700;
}
})()))
{{
var G__299705 = (n - 1);
var G__299706 = cljs.core.next.call(null,coll);
n = G__299705;
coll = G__299706;
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
return dorun__299701.call(this,n);
case  2 :
return dorun__299702.call(this,n,coll);
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
var doall__299707 = (function (coll){
cljs.core.dorun.call(null,coll);
return coll;
});
var doall__299708 = (function (n,coll){
cljs.core.dorun.call(null,n,coll);
return coll;
});
doall = function(n,coll){
switch(arguments.length){
case  1 :
return doall__299707.call(this,n);
case  2 :
return doall__299708.call(this,n,coll);
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
var matches__299710 = re.exec(s);

if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.first.call(null,matches__299710),s)))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__299710),1)))
{return cljs.core.first.call(null,matches__299710);
} else
{return cljs.core.vec.call(null,matches__299710);
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
var matches__299711 = re.exec(s);

if(cljs.core.truth_((matches__299711 === null)))
{return null;
} else
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.count.call(null,matches__299711),1)))
{return cljs.core.first.call(null,matches__299711);
} else
{return cljs.core.vec.call(null,matches__299711);
}
}
});
/**
* Returns a lazy sequence of successive matches of re in s.
*/
cljs.core.re_seq = (function re_seq(re,s){
var match_data__299712 = cljs.core.re_find.call(null,re,s);
var match_idx__299713 = s.search(re);
var match_str__299714 = (cljs.core.truth_(cljs.core.coll_QMARK_.call(null,match_data__299712))?cljs.core.first.call(null,match_data__299712):match_data__299712);
var post_match__299715 = cljs.core.subs.call(null,s,(match_idx__299713 + cljs.core.count.call(null,match_str__299714)));

if(cljs.core.truth_(match_data__299712))
{return (new cljs.core.LazySeq(null,false,(function (){
return cljs.core.cons.call(null,match_data__299712,re_seq.call(null,re,post_match__299715));
})));
} else
{return null;
}
});
/**
* Returns an instance of RegExp which has compiled the provided string.
*/
cljs.core.re_pattern = (function re_pattern(s){
var vec__299717__299718 = cljs.core.re_find.call(null,/^(?:\(\?([idmsux]*)\))?(.*)/,s);
var ___299719 = cljs.core.nth.call(null,vec__299717__299718,0,null);
var flags__299720 = cljs.core.nth.call(null,vec__299717__299718,1,null);
var pattern__299721 = cljs.core.nth.call(null,vec__299717__299718,2,null);

return (new RegExp(pattern__299721,flags__299720));
});
cljs.core.pr_sequential = (function pr_sequential(print_one,begin,sep,end,opts,coll){
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray([begin]),cljs.core.flatten1.call(null,cljs.core.interpose.call(null,cljs.core.PersistentVector.fromArray([sep]),cljs.core.map.call(null,(function (p1__299716_SHARP_){
return print_one.call(null,p1__299716_SHARP_,opts);
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
{return cljs.core.concat.call(null,(cljs.core.truth_((function (){var and__3546__auto____299722 = cljs.core.get.call(null,opts,"\uFDD0'meta");

if(cljs.core.truth_(and__3546__auto____299722))
{var and__3546__auto____299726 = (function (){var x__451__auto____299723 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____299724 = x__451__auto____299723;

if(cljs.core.truth_(and__3546__auto____299724))
{var and__3546__auto____299725 = x__451__auto____299723.cljs$core$IMeta$;

if(cljs.core.truth_(and__3546__auto____299725))
{return cljs.core.not.call(null,x__451__auto____299723.hasOwnProperty("cljs$core$IMeta$"));
} else
{return and__3546__auto____299725;
}
} else
{return and__3546__auto____299724;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IMeta,x__451__auto____299723);
}
})();

if(cljs.core.truth_(and__3546__auto____299726))
{return cljs.core.meta.call(null,obj);
} else
{return and__3546__auto____299726;
}
} else
{return and__3546__auto____299722;
}
})())?cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["^"]),pr_seq.call(null,cljs.core.meta.call(null,obj),opts),cljs.core.PersistentVector.fromArray([" "])):null),(cljs.core.truth_((function (){var x__451__auto____299727 = obj;

if(cljs.core.truth_((function (){var and__3546__auto____299728 = x__451__auto____299727;

if(cljs.core.truth_(and__3546__auto____299728))
{var and__3546__auto____299729 = x__451__auto____299727.cljs$core$IPrintable$;

if(cljs.core.truth_(and__3546__auto____299729))
{return cljs.core.not.call(null,x__451__auto____299727.hasOwnProperty("cljs$core$IPrintable$"));
} else
{return and__3546__auto____299729;
}
} else
{return and__3546__auto____299728;
}
})()))
{return true;
} else
{return cljs.core.type_satisfies_.call(null,cljs.core.IPrintable,x__451__auto____299727);
}
})())?cljs.core._pr_seq.call(null,obj,opts):cljs.core.list.call(null,"#<",cljs.core.str.call(null,obj),">")));
} else
{return null;
}
}
}
});
cljs.core.pr_sb = (function pr_sb(objs,opts){
var first_obj__299730 = cljs.core.first.call(null,objs);
var sb__299731 = (new goog.string.StringBuffer());

var G__299732__299733 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__299732__299733))
{var obj__299734 = cljs.core.first.call(null,G__299732__299733);
var G__299732__299735 = G__299732__299733;

while(true){
if(cljs.core.truth_((obj__299734 === first_obj__299730)))
{} else
{sb__299731.append(" ");
}
var G__299736__299737 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__299734,opts));

if(cljs.core.truth_(G__299736__299737))
{var string__299738 = cljs.core.first.call(null,G__299736__299737);
var G__299736__299739 = G__299736__299737;

while(true){
sb__299731.append(string__299738);
var temp__3698__auto____299740 = cljs.core.next.call(null,G__299736__299739);

if(cljs.core.truth_(temp__3698__auto____299740))
{var G__299736__299741 = temp__3698__auto____299740;

{
var G__299744 = cljs.core.first.call(null,G__299736__299741);
var G__299745 = G__299736__299741;
string__299738 = G__299744;
G__299736__299739 = G__299745;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____299742 = cljs.core.next.call(null,G__299732__299735);

if(cljs.core.truth_(temp__3698__auto____299742))
{var G__299732__299743 = temp__3698__auto____299742;

{
var G__299746 = cljs.core.first.call(null,G__299732__299743);
var G__299747 = G__299732__299743;
obj__299734 = G__299746;
G__299732__299735 = G__299747;
continue;
}
} else
{}
break;
}
} else
{}
return sb__299731;
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
var sb__299748 = cljs.core.pr_sb.call(null,objs,opts);

sb__299748.append("\n");
return cljs.core.str.call(null,sb__299748);
});
/**
* Prints a sequence of objects using string-print, observing all
* the options given in opts
*/
cljs.core.pr_with_opts = (function pr_with_opts(objs,opts){
var first_obj__299749 = cljs.core.first.call(null,objs);

var G__299750__299751 = cljs.core.seq.call(null,objs);

if(cljs.core.truth_(G__299750__299751))
{var obj__299752 = cljs.core.first.call(null,G__299750__299751);
var G__299750__299753 = G__299750__299751;

while(true){
if(cljs.core.truth_((obj__299752 === first_obj__299749)))
{} else
{cljs.core.string_print.call(null," ");
}
var G__299754__299755 = cljs.core.seq.call(null,cljs.core.pr_seq.call(null,obj__299752,opts));

if(cljs.core.truth_(G__299754__299755))
{var string__299756 = cljs.core.first.call(null,G__299754__299755);
var G__299754__299757 = G__299754__299755;

while(true){
cljs.core.string_print.call(null,string__299756);
var temp__3698__auto____299758 = cljs.core.next.call(null,G__299754__299757);

if(cljs.core.truth_(temp__3698__auto____299758))
{var G__299754__299759 = temp__3698__auto____299758;

{
var G__299762 = cljs.core.first.call(null,G__299754__299759);
var G__299763 = G__299754__299759;
string__299756 = G__299762;
G__299754__299757 = G__299763;
continue;
}
} else
{}
break;
}
} else
{}
var temp__3698__auto____299760 = cljs.core.next.call(null,G__299750__299753);

if(cljs.core.truth_(temp__3698__auto____299760))
{var G__299750__299761 = temp__3698__auto____299760;

{
var G__299764 = cljs.core.first.call(null,G__299750__299761);
var G__299765 = G__299750__299761;
obj__299752 = G__299764;
G__299750__299753 = G__299765;
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
pr_str.cljs$lang$applyTo = (function (arglist__299766){
var objs = cljs.core.seq( arglist__299766 );;
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
prn_str.cljs$lang$applyTo = (function (arglist__299767){
var objs = cljs.core.seq( arglist__299767 );;
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
pr.cljs$lang$applyTo = (function (arglist__299768){
var objs = cljs.core.seq( arglist__299768 );;
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
cljs_core_print.cljs$lang$applyTo = (function (arglist__299769){
var objs = cljs.core.seq( arglist__299769 );;
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
print_str.cljs$lang$applyTo = (function (arglist__299770){
var objs = cljs.core.seq( arglist__299770 );;
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
println.cljs$lang$applyTo = (function (arglist__299771){
var objs = cljs.core.seq( arglist__299771 );;
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
println_str.cljs$lang$applyTo = (function (arglist__299772){
var objs = cljs.core.seq( arglist__299772 );;
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
prn.cljs$lang$applyTo = (function (arglist__299773){
var objs = cljs.core.seq( arglist__299773 );;
return prn__delegate.call(this, objs);
});
return prn;
})()
;
cljs.core.HashMap.prototype.cljs$core$IPrintable$ = true;
cljs.core.HashMap.prototype.cljs$core$IPrintable$_pr_seq = (function (coll,opts){
var pr_pair__299774 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__299774,"{",", ","}",opts,coll);
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
{return cljs.core.list.call(null,cljs.core.str.call(null,":",(function (){var temp__3698__auto____299775 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____299775))
{var nspc__299776 = temp__3698__auto____299775;

return cljs.core.str.call(null,nspc__299776,"/");
} else
{return null;
}
})(),cljs.core.name.call(null,obj)));
} else
{if(cljs.core.truth_(cljs.core.symbol_QMARK_.call(null,obj)))
{return cljs.core.list.call(null,cljs.core.str.call(null,(function (){var temp__3698__auto____299777 = cljs.core.namespace.call(null,obj);

if(cljs.core.truth_(temp__3698__auto____299777))
{var nspc__299778 = temp__3698__auto____299777;

return cljs.core.str.call(null,nspc__299778,"/");
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
var pr_pair__299779 = (function (keyval){
return cljs.core.pr_sequential.call(null,cljs.core.pr_seq,""," ","",opts,keyval);
});

return cljs.core.pr_sequential.call(null,pr_pair__299779,"{",", ","}",opts,coll);
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
var this__299780 = this;
return goog.getUid.call(null,this$);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$ = true;
cljs.core.Atom.prototype.cljs$core$IWatchable$_notify_watches = (function (this$,oldval,newval){
var this__299781 = this;
var G__299782__299783 = cljs.core.seq.call(null,this__299781.watches);

if(cljs.core.truth_(G__299782__299783))
{var G__299785__299787 = cljs.core.first.call(null,G__299782__299783);
var vec__299786__299788 = G__299785__299787;
var key__299789 = cljs.core.nth.call(null,vec__299786__299788,0,null);
var f__299790 = cljs.core.nth.call(null,vec__299786__299788,1,null);
var G__299782__299791 = G__299782__299783;

var G__299785__299792 = G__299785__299787;
var G__299782__299793 = G__299782__299791;

while(true){
var vec__299794__299795 = G__299785__299792;
var key__299796 = cljs.core.nth.call(null,vec__299794__299795,0,null);
var f__299797 = cljs.core.nth.call(null,vec__299794__299795,1,null);
var G__299782__299798 = G__299782__299793;

f__299797.call(null,key__299796,this$,oldval,newval);
var temp__3698__auto____299799 = cljs.core.next.call(null,G__299782__299798);

if(cljs.core.truth_(temp__3698__auto____299799))
{var G__299782__299800 = temp__3698__auto____299799;

{
var G__299807 = cljs.core.first.call(null,G__299782__299800);
var G__299808 = G__299782__299800;
G__299785__299792 = G__299807;
G__299782__299793 = G__299808;
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
var this__299801 = this;
return this$.watches = cljs.core.assoc.call(null,this__299801.watches,key,f);
});
cljs.core.Atom.prototype.cljs$core$IWatchable$_remove_watch = (function (this$,key){
var this__299802 = this;
return this$.watches = cljs.core.dissoc.call(null,this__299802.watches,key);
});
cljs.core.Atom.prototype.cljs$core$IPrintable$ = true;
cljs.core.Atom.prototype.cljs$core$IPrintable$_pr_seq = (function (a,opts){
var this__299803 = this;
return cljs.core.concat.call(null,cljs.core.PersistentVector.fromArray(["#<Atom: "]),cljs.core._pr_seq.call(null,this__299803.state,opts),">");
});
cljs.core.Atom.prototype.cljs$core$IMeta$ = true;
cljs.core.Atom.prototype.cljs$core$IMeta$_meta = (function (_){
var this__299804 = this;
return this__299804.meta;
});
cljs.core.Atom.prototype.cljs$core$IDeref$ = true;
cljs.core.Atom.prototype.cljs$core$IDeref$_deref = (function (_){
var this__299805 = this;
return this__299805.state;
});
cljs.core.Atom.prototype.cljs$core$IEquiv$ = true;
cljs.core.Atom.prototype.cljs$core$IEquiv$_equiv = (function (o,other){
var this__299806 = this;
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
var atom__299815 = (function (x){
return (new cljs.core.Atom(x,null,null,null));
});
var atom__299816 = (function() { 
var G__299818__delegate = function (x,p__299809){
var map__299810__299811 = p__299809;
var map__299810__299812 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__299810__299811))?cljs.core.apply.call(null,cljs.core.hash_map,map__299810__299811):map__299810__299811);
var validator__299813 = cljs.core.get.call(null,map__299810__299812,"\uFDD0'validator");
var meta__299814 = cljs.core.get.call(null,map__299810__299812,"\uFDD0'meta");

return (new cljs.core.Atom(x,meta__299814,validator__299813,null));
};
var G__299818 = function (x,var_args){
var p__299809 = null;
if (goog.isDef(var_args)) {
  p__299809 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__299818__delegate.call(this, x, p__299809);
};
G__299818.cljs$lang$maxFixedArity = 1;
G__299818.cljs$lang$applyTo = (function (arglist__299819){
var x = cljs.core.first(arglist__299819);
var p__299809 = cljs.core.rest(arglist__299819);
return G__299818__delegate.call(this, x, p__299809);
});
return G__299818;
})()
;
atom = function(x,var_args){
var p__299809 = var_args;
switch(arguments.length){
case  1 :
return atom__299815.call(this,x);
default:
return atom__299816.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
atom.cljs$lang$maxFixedArity = 1;
atom.cljs$lang$applyTo = atom__299816.cljs$lang$applyTo;
return atom;
})()
;
/**
* Sets the value of atom to newval without regard for the
* current value. Returns newval.
*/
cljs.core.reset_BANG_ = (function reset_BANG_(a,new_value){
var temp__3698__auto____299820 = a.validator;

if(cljs.core.truth_(temp__3698__auto____299820))
{var validate__299821 = temp__3698__auto____299820;

if(cljs.core.truth_(validate__299821.call(null,new_value)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ","Validator rejected reference state","\n",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'validate","\uFDD1'new-value"),cljs.core.hash_map("\uFDD0'line",3282))))));
}
} else
{}
var old_value__299822 = a.state;

a.state = new_value;
cljs.core._notify_watches.call(null,a,old_value__299822,new_value);
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
var swap_BANG___299823 = (function (a,f){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state));
});
var swap_BANG___299824 = (function (a,f,x){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x));
});
var swap_BANG___299825 = (function (a,f,x,y){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y));
});
var swap_BANG___299826 = (function (a,f,x,y,z){
return cljs.core.reset_BANG_.call(null,a,f.call(null,a.state,x,y,z));
});
var swap_BANG___299827 = (function() { 
var G__299829__delegate = function (a,f,x,y,z,more){
return cljs.core.reset_BANG_.call(null,a,cljs.core.apply.call(null,f,a.state,x,y,z,more));
};
var G__299829 = function (a,f,x,y,z,var_args){
var more = null;
if (goog.isDef(var_args)) {
  more = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);
} 
return G__299829__delegate.call(this, a, f, x, y, z, more);
};
G__299829.cljs$lang$maxFixedArity = 5;
G__299829.cljs$lang$applyTo = (function (arglist__299830){
var a = cljs.core.first(arglist__299830);
var f = cljs.core.first(cljs.core.next(arglist__299830));
var x = cljs.core.first(cljs.core.next(cljs.core.next(arglist__299830)));
var y = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(arglist__299830))));
var z = cljs.core.first(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__299830)))));
var more = cljs.core.rest(cljs.core.next(cljs.core.next(cljs.core.next(cljs.core.next(arglist__299830)))));
return G__299829__delegate.call(this, a, f, x, y, z, more);
});
return G__299829;
})()
;
swap_BANG_ = function(a,f,x,y,z,var_args){
var more = var_args;
switch(arguments.length){
case  2 :
return swap_BANG___299823.call(this,a,f);
case  3 :
return swap_BANG___299824.call(this,a,f,x);
case  4 :
return swap_BANG___299825.call(this,a,f,x,y);
case  5 :
return swap_BANG___299826.call(this,a,f,x,y,z);
default:
return swap_BANG___299827.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
swap_BANG_.cljs$lang$maxFixedArity = 5;
swap_BANG_.cljs$lang$applyTo = swap_BANG___299827.cljs$lang$applyTo;
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
alter_meta_BANG_.cljs$lang$applyTo = (function (arglist__299831){
var iref = cljs.core.first(arglist__299831);
var f = cljs.core.first(cljs.core.next(arglist__299831));
var args = cljs.core.rest(cljs.core.next(arglist__299831));
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
var gensym__299832 = (function (){
return gensym.call(null,"G__");
});
var gensym__299833 = (function (prefix_string){
if(cljs.core.truth_((cljs.core.gensym_counter === null)))
{cljs.core.gensym_counter = cljs.core.atom.call(null,0);
} else
{}
return cljs.core.symbol.call(null,cljs.core.str.call(null,prefix_string,cljs.core.swap_BANG_.call(null,cljs.core.gensym_counter,cljs.core.inc)));
});
gensym = function(prefix_string){
switch(arguments.length){
case  0 :
return gensym__299832.call(this);
case  1 :
return gensym__299833.call(this,prefix_string);
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
var this__299835 = this;
return "\uFDD0'done".call(null,cljs.core.deref.call(null,this__299835.state));
});
cljs.core.Delay.prototype.cljs$core$IDeref$ = true;
cljs.core.Delay.prototype.cljs$core$IDeref$_deref = (function (_){
var this__299836 = this;
return "\uFDD0'value".call(null,cljs.core.swap_BANG_.call(null,this__299836.state,(function (p__299837){
var curr_state__299838 = p__299837;
var curr_state__299839 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,curr_state__299838))?cljs.core.apply.call(null,cljs.core.hash_map,curr_state__299838):curr_state__299838);
var done__299840 = cljs.core.get.call(null,curr_state__299839,"\uFDD0'done");

if(cljs.core.truth_(done__299840))
{return curr_state__299839;
} else
{return cljs.core.ObjMap.fromObject(["\uFDD0'done","\uFDD0'value"],{"\uFDD0'done":true,"\uFDD0'value":this__299836.f.call(null)});
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
var map__299841__299842 = options;
var map__299841__299843 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__299841__299842))?cljs.core.apply.call(null,cljs.core.hash_map,map__299841__299842):map__299841__299842);
var keywordize_keys__299844 = cljs.core.get.call(null,map__299841__299843,"\uFDD0'keywordize-keys");
var keyfn__299845 = (cljs.core.truth_(keywordize_keys__299844)?cljs.core.keyword:cljs.core.str);
var f__299851 = (function thisfn(x){
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
{return cljs.core.into.call(null,cljs.core.ObjMap.fromObject([],{}),(function (){var iter__520__auto____299850 = (function iter__299846(s__299847){
return (new cljs.core.LazySeq(null,false,(function (){
var s__299847__299848 = s__299847;

while(true){
if(cljs.core.truth_(cljs.core.seq.call(null,s__299847__299848)))
{var k__299849 = cljs.core.first.call(null,s__299847__299848);

return cljs.core.cons.call(null,cljs.core.PersistentVector.fromArray([keyfn__299845.call(null,k__299849),thisfn.call(null,(x[k__299849]))]),iter__299846.call(null,cljs.core.rest.call(null,s__299847__299848)));
} else
{return null;
}
break;
}
})));
});

return iter__520__auto____299850.call(null,cljs.core.js_keys.call(null,x));
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

return f__299851.call(null,x);
};
var js__GT_clj = function (x,var_args){
var options = null;
if (goog.isDef(var_args)) {
  options = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return js__GT_clj__delegate.call(this, x, options);
};
js__GT_clj.cljs$lang$maxFixedArity = 1;
js__GT_clj.cljs$lang$applyTo = (function (arglist__299852){
var x = cljs.core.first(arglist__299852);
var options = cljs.core.rest(arglist__299852);
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
var mem__299853 = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));

return (function() { 
var G__299857__delegate = function (args){
var temp__3695__auto____299854 = cljs.core.get.call(null,cljs.core.deref.call(null,mem__299853),args);

if(cljs.core.truth_(temp__3695__auto____299854))
{var v__299855 = temp__3695__auto____299854;

return v__299855;
} else
{var ret__299856 = cljs.core.apply.call(null,f,args);

cljs.core.swap_BANG_.call(null,mem__299853,cljs.core.assoc,args,ret__299856);
return ret__299856;
}
};
var G__299857 = function (var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);
} 
return G__299857__delegate.call(this, args);
};
G__299857.cljs$lang$maxFixedArity = 0;
G__299857.cljs$lang$applyTo = (function (arglist__299858){
var args = cljs.core.seq( arglist__299858 );;
return G__299857__delegate.call(this, args);
});
return G__299857;
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
var trampoline__299860 = (function (f){
while(true){
var ret__299859 = f.call(null);

if(cljs.core.truth_(cljs.core.fn_QMARK_.call(null,ret__299859)))
{{
var G__299863 = ret__299859;
f = G__299863;
continue;
}
} else
{return ret__299859;
}
break;
}
});
var trampoline__299861 = (function() { 
var G__299864__delegate = function (f,args){
return trampoline.call(null,(function (){
return cljs.core.apply.call(null,f,args);
}));
};
var G__299864 = function (f,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__299864__delegate.call(this, f, args);
};
G__299864.cljs$lang$maxFixedArity = 1;
G__299864.cljs$lang$applyTo = (function (arglist__299865){
var f = cljs.core.first(arglist__299865);
var args = cljs.core.rest(arglist__299865);
return G__299864__delegate.call(this, f, args);
});
return G__299864;
})()
;
trampoline = function(f,var_args){
var args = var_args;
switch(arguments.length){
case  1 :
return trampoline__299860.call(this,f);
default:
return trampoline__299861.apply(this,arguments);
}
throw('Invalid arity: ' + arguments.length);
};
trampoline.cljs$lang$maxFixedArity = 1;
trampoline.cljs$lang$applyTo = trampoline__299861.cljs$lang$applyTo;
return trampoline;
})()
;
/**
* Returns a random floating point number between 0 (inclusive) and
* n (default 1) (exclusive).
*/
cljs.core.rand = (function() {
var rand = null;
var rand__299866 = (function (){
return rand.call(null,1);
});
var rand__299867 = (function (n){
return Math.random() * n;
});
rand = function(n){
switch(arguments.length){
case  0 :
return rand__299866.call(this);
case  1 :
return rand__299867.call(this,n);
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
var k__299869 = f.call(null,x);

return cljs.core.assoc.call(null,ret,k__299869,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k__299869,cljs.core.PersistentVector.fromArray([])),x));
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
var isa_QMARK___299878 = (function (child,parent){
return isa_QMARK_.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),child,parent);
});
var isa_QMARK___299879 = (function (h,child,parent){
var or__3548__auto____299870 = cljs.core._EQ_.call(null,child,parent);

if(cljs.core.truth_(or__3548__auto____299870))
{return or__3548__auto____299870;
} else
{var or__3548__auto____299871 = cljs.core.contains_QMARK_.call(null,"\uFDD0'ancestors".call(null,h).call(null,child),parent);

if(cljs.core.truth_(or__3548__auto____299871))
{return or__3548__auto____299871;
} else
{var and__3546__auto____299872 = cljs.core.vector_QMARK_.call(null,parent);

if(cljs.core.truth_(and__3546__auto____299872))
{var and__3546__auto____299873 = cljs.core.vector_QMARK_.call(null,child);

if(cljs.core.truth_(and__3546__auto____299873))
{var and__3546__auto____299874 = cljs.core._EQ_.call(null,cljs.core.count.call(null,parent),cljs.core.count.call(null,child));

if(cljs.core.truth_(and__3546__auto____299874))
{var ret__299875 = true;
var i__299876 = 0;

while(true){
if(cljs.core.truth_((function (){var or__3548__auto____299877 = cljs.core.not.call(null,ret__299875);

if(cljs.core.truth_(or__3548__auto____299877))
{return or__3548__auto____299877;
} else
{return cljs.core._EQ_.call(null,i__299876,cljs.core.count.call(null,parent));
}
})()))
{return ret__299875;
} else
{{
var G__299881 = isa_QMARK_.call(null,h,child.call(null,i__299876),parent.call(null,i__299876));
var G__299882 = (i__299876 + 1);
ret__299875 = G__299881;
i__299876 = G__299882;
continue;
}
}
break;
}
} else
{return and__3546__auto____299874;
}
} else
{return and__3546__auto____299873;
}
} else
{return and__3546__auto____299872;
}
}
}
});
isa_QMARK_ = function(h,child,parent){
switch(arguments.length){
case  2 :
return isa_QMARK___299878.call(this,h,child);
case  3 :
return isa_QMARK___299879.call(this,h,child,parent);
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
var parents__299883 = (function (tag){
return parents.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var parents__299884 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'parents".call(null,h),tag));
});
parents = function(h,tag){
switch(arguments.length){
case  1 :
return parents__299883.call(this,h);
case  2 :
return parents__299884.call(this,h,tag);
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
var ancestors__299886 = (function (tag){
return ancestors.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var ancestors__299887 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'ancestors".call(null,h),tag));
});
ancestors = function(h,tag){
switch(arguments.length){
case  1 :
return ancestors__299886.call(this,h);
case  2 :
return ancestors__299887.call(this,h,tag);
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
var descendants__299889 = (function (tag){
return descendants.call(null,cljs.core.deref.call(null,cljs.core.global_hierarchy),tag);
});
var descendants__299890 = (function (h,tag){
return cljs.core.not_empty.call(null,cljs.core.get.call(null,"\uFDD0'descendants".call(null,h),tag));
});
descendants = function(h,tag){
switch(arguments.length){
case  1 :
return descendants__299889.call(this,h);
case  2 :
return descendants__299890.call(this,h,tag);
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
var derive__299900 = (function (tag,parent){
if(cljs.core.truth_(cljs.core.namespace.call(null,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'namespace","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3566))))));
}
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,derive,tag,parent);
return null;
});
var derive__299901 = (function (h,tag,parent){
if(cljs.core.truth_(cljs.core.not_EQ_.call(null,tag,parent)))
{} else
{throw (new Error(cljs.core.str.call(null,"Assert failed: ",cljs.core.pr_str.call(null,cljs.core.with_meta(cljs.core.list("\uFDD1'not=","\uFDD1'tag","\uFDD1'parent"),cljs.core.hash_map("\uFDD0'line",3570))))));
}
var tp__299895 = "\uFDD0'parents".call(null,h);
var td__299896 = "\uFDD0'descendants".call(null,h);
var ta__299897 = "\uFDD0'ancestors".call(null,h);
var tf__299898 = (function (m,source,sources,target,targets){
return cljs.core.reduce.call(null,(function (ret,k){
return cljs.core.assoc.call(null,ret,k,cljs.core.reduce.call(null,cljs.core.conj,cljs.core.get.call(null,targets,k,cljs.core.set([])),cljs.core.cons.call(null,target,targets.call(null,target))));
}),m,cljs.core.cons.call(null,source,sources.call(null,source)));
});

var or__3548__auto____299899 = (cljs.core.truth_(cljs.core.contains_QMARK_.call(null,tp__299895.call(null,tag),parent))?null:(function (){if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__299897.call(null,tag),parent)))
{throw (new Error(cljs.core.str.call(null,tag,"already has",parent,"as ancestor")));
} else
{}
if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,ta__299897.call(null,parent),tag)))
{throw (new Error(cljs.core.str.call(null,"Cyclic derivation:",parent,"has",tag,"as ancestor")));
} else
{}
return cljs.core.ObjMap.fromObject(["\uFDD0'parents","\uFDD0'ancestors","\uFDD0'descendants"],{"\uFDD0'parents":cljs.core.assoc.call(null,"\uFDD0'parents".call(null,h),tag,cljs.core.conj.call(null,cljs.core.get.call(null,tp__299895,tag,cljs.core.set([])),parent)),"\uFDD0'ancestors":tf__299898.call(null,"\uFDD0'ancestors".call(null,h),tag,td__299896,parent,ta__299897),"\uFDD0'descendants":tf__299898.call(null,"\uFDD0'descendants".call(null,h),parent,ta__299897,tag,td__299896)});
})());

if(cljs.core.truth_(or__3548__auto____299899))
{return or__3548__auto____299899;
} else
{return h;
}
});
derive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return derive__299900.call(this,h,tag);
case  3 :
return derive__299901.call(this,h,tag,parent);
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
var underive__299907 = (function (tag,parent){
cljs.core.swap_BANG_.call(null,cljs.core.global_hierarchy,underive,tag,parent);
return null;
});
var underive__299908 = (function (h,tag,parent){
var parentMap__299903 = "\uFDD0'parents".call(null,h);
var childsParents__299904 = (cljs.core.truth_(parentMap__299903.call(null,tag))?cljs.core.disj.call(null,parentMap__299903.call(null,tag),parent):cljs.core.set([]));
var newParents__299905 = (cljs.core.truth_(cljs.core.not_empty.call(null,childsParents__299904))?cljs.core.assoc.call(null,parentMap__299903,tag,childsParents__299904):cljs.core.dissoc.call(null,parentMap__299903,tag));
var deriv_seq__299906 = cljs.core.flatten.call(null,cljs.core.map.call(null,(function (p1__299892_SHARP_){
return cljs.core.cons.call(null,cljs.core.first.call(null,p1__299892_SHARP_),cljs.core.interpose.call(null,cljs.core.first.call(null,p1__299892_SHARP_),cljs.core.second.call(null,p1__299892_SHARP_)));
}),cljs.core.seq.call(null,newParents__299905)));

if(cljs.core.truth_(cljs.core.contains_QMARK_.call(null,parentMap__299903.call(null,tag),parent)))
{return cljs.core.reduce.call(null,(function (p1__299893_SHARP_,p2__299894_SHARP_){
return cljs.core.apply.call(null,cljs.core.derive,p1__299893_SHARP_,p2__299894_SHARP_);
}),cljs.core.make_hierarchy.call(null),cljs.core.partition.call(null,2,deriv_seq__299906));
} else
{return h;
}
});
underive = function(h,tag,parent){
switch(arguments.length){
case  2 :
return underive__299907.call(this,h,tag);
case  3 :
return underive__299908.call(this,h,tag,parent);
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
var xprefs__299910 = cljs.core.deref.call(null,prefer_table).call(null,x);

var or__3548__auto____299912 = (cljs.core.truth_((function (){var and__3546__auto____299911 = xprefs__299910;

if(cljs.core.truth_(and__3546__auto____299911))
{return xprefs__299910.call(null,y);
} else
{return and__3546__auto____299911;
}
})())?true:null);

if(cljs.core.truth_(or__3548__auto____299912))
{return or__3548__auto____299912;
} else
{var or__3548__auto____299914 = (function (){var ps__299913 = cljs.core.parents.call(null,y);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__299913) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,x,cljs.core.first.call(null,ps__299913),prefer_table)))
{} else
{}
{
var G__299917 = cljs.core.rest.call(null,ps__299913);
ps__299913 = G__299917;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____299914))
{return or__3548__auto____299914;
} else
{var or__3548__auto____299916 = (function (){var ps__299915 = cljs.core.parents.call(null,x);

while(true){
if(cljs.core.truth_((cljs.core.count.call(null,ps__299915) > 0)))
{if(cljs.core.truth_(prefers_STAR_.call(null,cljs.core.first.call(null,ps__299915),y,prefer_table)))
{} else
{}
{
var G__299918 = cljs.core.rest.call(null,ps__299915);
ps__299915 = G__299918;
continue;
}
} else
{return null;
}
break;
}
})();

if(cljs.core.truth_(or__3548__auto____299916))
{return or__3548__auto____299916;
} else
{return false;
}
}
}
});
cljs.core.dominates = (function dominates(x,y,prefer_table){
var or__3548__auto____299919 = cljs.core.prefers_STAR_.call(null,x,y,prefer_table);

if(cljs.core.truth_(or__3548__auto____299919))
{return or__3548__auto____299919;
} else
{return cljs.core.isa_QMARK_.call(null,x,y);
}
});
cljs.core.find_and_cache_best_method = (function find_and_cache_best_method(name,dispatch_val,hierarchy,method_table,prefer_table,method_cache,cached_hierarchy){
var best_entry__299928 = cljs.core.reduce.call(null,(function (be,p__299920){
var vec__299921__299922 = p__299920;
var k__299923 = cljs.core.nth.call(null,vec__299921__299922,0,null);
var ___299924 = cljs.core.nth.call(null,vec__299921__299922,1,null);
var e__299925 = vec__299921__299922;

if(cljs.core.truth_(cljs.core.isa_QMARK_.call(null,dispatch_val,k__299923)))
{var be2__299927 = (cljs.core.truth_((function (){var or__3548__auto____299926 = (be === null);

if(cljs.core.truth_(or__3548__auto____299926))
{return or__3548__auto____299926;
} else
{return cljs.core.dominates.call(null,k__299923,cljs.core.first.call(null,be),prefer_table);
}
})())?e__299925:be);

if(cljs.core.truth_(cljs.core.dominates.call(null,cljs.core.first.call(null,be2__299927),k__299923,prefer_table)))
{} else
{throw (new Error(cljs.core.str.call(null,"Multiple methods in multimethod '",name,"' match dispatch value: ",dispatch_val," -> ",k__299923," and ",cljs.core.first.call(null,be2__299927),", and neither is preferred")));
}
return be2__299927;
} else
{return be;
}
}),null,cljs.core.deref.call(null,method_table));

if(cljs.core.truth_(best_entry__299928))
{if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,cached_hierarchy),cljs.core.deref.call(null,hierarchy))))
{cljs.core.swap_BANG_.call(null,method_cache,cljs.core.assoc,dispatch_val,cljs.core.second.call(null,best_entry__299928));
return cljs.core.second.call(null,best_entry__299928);
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
if(cljs.core.truth_((function (){var and__3546__auto____299929 = mf;

if(cljs.core.truth_(and__3546__auto____299929))
{return mf.cljs$core$IMultiFn$_reset;
} else
{return and__3546__auto____299929;
}
})()))
{return mf.cljs$core$IMultiFn$_reset(mf);
} else
{return (function (){var or__3548__auto____299930 = (cljs.core._reset[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____299930))
{return or__3548__auto____299930;
} else
{var or__3548__auto____299931 = (cljs.core._reset["_"]);

if(cljs.core.truth_(or__3548__auto____299931))
{return or__3548__auto____299931;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-reset",mf);
}
}
})().call(null,mf);
}
});
cljs.core._add_method = (function _add_method(mf,dispatch_val,method){
if(cljs.core.truth_((function (){var and__3546__auto____299932 = mf;

if(cljs.core.truth_(and__3546__auto____299932))
{return mf.cljs$core$IMultiFn$_add_method;
} else
{return and__3546__auto____299932;
}
})()))
{return mf.cljs$core$IMultiFn$_add_method(mf,dispatch_val,method);
} else
{return (function (){var or__3548__auto____299933 = (cljs.core._add_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____299933))
{return or__3548__auto____299933;
} else
{var or__3548__auto____299934 = (cljs.core._add_method["_"]);

if(cljs.core.truth_(or__3548__auto____299934))
{return or__3548__auto____299934;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-add-method",mf);
}
}
})().call(null,mf,dispatch_val,method);
}
});
cljs.core._remove_method = (function _remove_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____299935 = mf;

if(cljs.core.truth_(and__3546__auto____299935))
{return mf.cljs$core$IMultiFn$_remove_method;
} else
{return and__3546__auto____299935;
}
})()))
{return mf.cljs$core$IMultiFn$_remove_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____299936 = (cljs.core._remove_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____299936))
{return or__3548__auto____299936;
} else
{var or__3548__auto____299937 = (cljs.core._remove_method["_"]);

if(cljs.core.truth_(or__3548__auto____299937))
{return or__3548__auto____299937;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-remove-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._prefer_method = (function _prefer_method(mf,dispatch_val,dispatch_val_y){
if(cljs.core.truth_((function (){var and__3546__auto____299938 = mf;

if(cljs.core.truth_(and__3546__auto____299938))
{return mf.cljs$core$IMultiFn$_prefer_method;
} else
{return and__3546__auto____299938;
}
})()))
{return mf.cljs$core$IMultiFn$_prefer_method(mf,dispatch_val,dispatch_val_y);
} else
{return (function (){var or__3548__auto____299939 = (cljs.core._prefer_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____299939))
{return or__3548__auto____299939;
} else
{var or__3548__auto____299940 = (cljs.core._prefer_method["_"]);

if(cljs.core.truth_(or__3548__auto____299940))
{return or__3548__auto____299940;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefer-method",mf);
}
}
})().call(null,mf,dispatch_val,dispatch_val_y);
}
});
cljs.core._get_method = (function _get_method(mf,dispatch_val){
if(cljs.core.truth_((function (){var and__3546__auto____299941 = mf;

if(cljs.core.truth_(and__3546__auto____299941))
{return mf.cljs$core$IMultiFn$_get_method;
} else
{return and__3546__auto____299941;
}
})()))
{return mf.cljs$core$IMultiFn$_get_method(mf,dispatch_val);
} else
{return (function (){var or__3548__auto____299942 = (cljs.core._get_method[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____299942))
{return or__3548__auto____299942;
} else
{var or__3548__auto____299943 = (cljs.core._get_method["_"]);

if(cljs.core.truth_(or__3548__auto____299943))
{return or__3548__auto____299943;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-get-method",mf);
}
}
})().call(null,mf,dispatch_val);
}
});
cljs.core._methods = (function _methods(mf){
if(cljs.core.truth_((function (){var and__3546__auto____299944 = mf;

if(cljs.core.truth_(and__3546__auto____299944))
{return mf.cljs$core$IMultiFn$_methods;
} else
{return and__3546__auto____299944;
}
})()))
{return mf.cljs$core$IMultiFn$_methods(mf);
} else
{return (function (){var or__3548__auto____299945 = (cljs.core._methods[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____299945))
{return or__3548__auto____299945;
} else
{var or__3548__auto____299946 = (cljs.core._methods["_"]);

if(cljs.core.truth_(or__3548__auto____299946))
{return or__3548__auto____299946;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-methods",mf);
}
}
})().call(null,mf);
}
});
cljs.core._prefers = (function _prefers(mf){
if(cljs.core.truth_((function (){var and__3546__auto____299947 = mf;

if(cljs.core.truth_(and__3546__auto____299947))
{return mf.cljs$core$IMultiFn$_prefers;
} else
{return and__3546__auto____299947;
}
})()))
{return mf.cljs$core$IMultiFn$_prefers(mf);
} else
{return (function (){var or__3548__auto____299948 = (cljs.core._prefers[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____299948))
{return or__3548__auto____299948;
} else
{var or__3548__auto____299949 = (cljs.core._prefers["_"]);

if(cljs.core.truth_(or__3548__auto____299949))
{return or__3548__auto____299949;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-prefers",mf);
}
}
})().call(null,mf);
}
});
cljs.core._dispatch = (function _dispatch(mf,args){
if(cljs.core.truth_((function (){var and__3546__auto____299950 = mf;

if(cljs.core.truth_(and__3546__auto____299950))
{return mf.cljs$core$IMultiFn$_dispatch;
} else
{return and__3546__auto____299950;
}
})()))
{return mf.cljs$core$IMultiFn$_dispatch(mf,args);
} else
{return (function (){var or__3548__auto____299951 = (cljs.core._dispatch[goog.typeOf.call(null,mf)]);

if(cljs.core.truth_(or__3548__auto____299951))
{return or__3548__auto____299951;
} else
{var or__3548__auto____299952 = (cljs.core._dispatch["_"]);

if(cljs.core.truth_(or__3548__auto____299952))
{return or__3548__auto____299952;
} else
{throw cljs.core.missing_protocol.call(null,"IMultiFn.-dispatch",mf);
}
}
})().call(null,mf,args);
}
});
cljs.core.do_dispatch = (function do_dispatch(mf,dispatch_fn,args){
var dispatch_val__299953 = cljs.core.apply.call(null,dispatch_fn,args);
var target_fn__299954 = cljs.core._get_method.call(null,mf,dispatch_val__299953);

if(cljs.core.truth_(target_fn__299954))
{} else
{throw (new Error(cljs.core.str.call(null,"No method in multimethod '",cljs.core.name,"' for dispatch value: ",dispatch_val__299953)));
}
return cljs.core.apply.call(null,target_fn__299954,args);
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
var this__299955 = this;
return goog.getUid.call(null,this$);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$ = true;
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_reset = (function (mf){
var this__299956 = this;
cljs.core.swap_BANG_.call(null,this__299956.method_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__299956.method_cache,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__299956.prefer_table,(function (mf){
return cljs.core.ObjMap.fromObject([],{});
}));
cljs.core.swap_BANG_.call(null,this__299956.cached_hierarchy,(function (mf){
return null;
}));
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_add_method = (function (mf,dispatch_val,method){
var this__299957 = this;
cljs.core.swap_BANG_.call(null,this__299957.method_table,cljs.core.assoc,dispatch_val,method);
cljs.core.reset_cache.call(null,this__299957.method_cache,this__299957.method_table,this__299957.cached_hierarchy,this__299957.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_remove_method = (function (mf,dispatch_val){
var this__299958 = this;
cljs.core.swap_BANG_.call(null,this__299958.method_table,cljs.core.dissoc,dispatch_val);
cljs.core.reset_cache.call(null,this__299958.method_cache,this__299958.method_table,this__299958.cached_hierarchy,this__299958.hierarchy);
return mf;
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_get_method = (function (mf,dispatch_val){
var this__299959 = this;
if(cljs.core.truth_(cljs.core._EQ_.call(null,cljs.core.deref.call(null,this__299959.cached_hierarchy),cljs.core.deref.call(null,this__299959.hierarchy))))
{} else
{cljs.core.reset_cache.call(null,this__299959.method_cache,this__299959.method_table,this__299959.cached_hierarchy,this__299959.hierarchy);
}
var temp__3695__auto____299960 = cljs.core.deref.call(null,this__299959.method_cache).call(null,dispatch_val);

if(cljs.core.truth_(temp__3695__auto____299960))
{var target_fn__299961 = temp__3695__auto____299960;

return target_fn__299961;
} else
{var temp__3695__auto____299962 = cljs.core.find_and_cache_best_method.call(null,this__299959.name,dispatch_val,this__299959.hierarchy,this__299959.method_table,this__299959.prefer_table,this__299959.method_cache,this__299959.cached_hierarchy);

if(cljs.core.truth_(temp__3695__auto____299962))
{var target_fn__299963 = temp__3695__auto____299962;

return target_fn__299963;
} else
{return cljs.core.deref.call(null,this__299959.method_table).call(null,this__299959.default_dispatch_val);
}
}
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefer_method = (function (mf,dispatch_val_x,dispatch_val_y){
var this__299964 = this;
if(cljs.core.truth_(cljs.core.prefers_STAR_.call(null,dispatch_val_x,dispatch_val_y,this__299964.prefer_table)))
{throw (new Error(cljs.core.str.call(null,"Preference conflict in multimethod '",this__299964.name,"': ",dispatch_val_y," is already preferred to ",dispatch_val_x)));
} else
{}
cljs.core.swap_BANG_.call(null,this__299964.prefer_table,(function (old){
return cljs.core.assoc.call(null,old,dispatch_val_x,cljs.core.conj.call(null,cljs.core.get.call(null,old,dispatch_val_x,cljs.core.set([])),dispatch_val_y));
}));
return cljs.core.reset_cache.call(null,this__299964.method_cache,this__299964.method_table,this__299964.cached_hierarchy,this__299964.hierarchy);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_methods = (function (mf){
var this__299965 = this;
return cljs.core.deref.call(null,this__299965.method_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_prefers = (function (mf){
var this__299966 = this;
return cljs.core.deref.call(null,this__299966.prefer_table);
});
cljs.core.MultiFn.prototype.cljs$core$IMultiFn$_dispatch = (function (mf,args){
var this__299967 = this;
return cljs.core.do_dispatch.call(null,mf,this__299967.dispatch_fn,args);
});
cljs.core.MultiFn;
cljs.core.MultiFn.prototype.call = (function() { 
var G__299968__delegate = function (_,args){
return cljs.core._dispatch.call(null,this,args);
};
var G__299968 = function (_,var_args){
var args = null;
if (goog.isDef(var_args)) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);
} 
return G__299968__delegate.call(this, _, args);
};
G__299968.cljs$lang$maxFixedArity = 1;
G__299968.cljs$lang$applyTo = (function (arglist__299969){
var _ = cljs.core.first(arglist__299969);
var args = cljs.core.rest(arglist__299969);
return G__299968__delegate.call(this, _, args);
});
return G__299968;
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
