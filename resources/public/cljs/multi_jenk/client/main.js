goog.provide('multi_jenk.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('cljs.reader');
goog.require('goog.net.XhrIo');
multi_jenk.client.main.$jenkins = jayq.core.$.call(null,"\uFDD0'#jenkins");
multi_jenk.client.main.$body = jayq.core.$.call(null,"\uFDD0'body");
multi_jenk.client.main.callback = (function callback(reply){
var servers__115520 = cljs.core.js__GT_clj.call(null,reply.target.getResponseJson());

var G__115521__115522 = cljs.core.seq.call(null,"jobs".call(null,cljs.core.get.call(null,servers__115520,0)));

if(cljs.core.truth_(G__115521__115522))
{var job__115523 = cljs.core.first.call(null,G__115521__115522);
var G__115521__115524 = G__115521__115522;

while(true){
jayq.core.append.call(null,multi_jenk.client.main.$jenkins,crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'p","name".call(null,job__115523)])));
var temp__3698__auto____115525 = cljs.core.next.call(null,G__115521__115524);

if(cljs.core.truth_(temp__3698__auto____115525))
{var G__115521__115526 = temp__3698__auto____115525;

{
var G__115527 = cljs.core.first.call(null,G__115521__115526);
var G__115528 = G__115521__115526;
job__115523 = G__115527;
G__115521__115524 = G__115528;
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
goog.net.XhrIo.send("/api/statuses",multi_jenk.client.main.callback);
