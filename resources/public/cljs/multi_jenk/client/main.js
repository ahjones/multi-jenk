goog.provide('multi_jenk.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('cljs.reader');
goog.require('goog.net.XhrIo');
multi_jenk.client.main.$jenkins = jayq.core.$.call(null,"\uFDD0'#jenkins");
var group__117661__auto____162638 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.job = (function job(item){
var elem__117662__auto____162639 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":"url".call(null,item)}),"name".call(null,item)]));

elem__117662__auto____162639.setAttribute("crateGroup",group__117661__auto____162638);
return elem__117662__auto____162639;
});
multi_jenk.client.main.job.prototype._crateGroup = group__117661__auto____162638;
var group__117661__auto____162640 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.server = (function server(jobs){
var elem__117662__auto____162641 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li","name".call(null,jobs),cljs.core.map.call(null,multi_jenk.client.main.job,"jobs".call(null,jobs))]));

elem__117662__auto____162641.setAttribute("crateGroup",group__117661__auto____162640);
return elem__117662__auto____162641;
});
multi_jenk.client.main.server.prototype._crateGroup = group__117661__auto____162640;
var group__117661__auto____162642 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.servers = (function servers(items){
var elem__117662__auto____162643 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'ul#servers",cljs.core.map.call(null,multi_jenk.client.main.server,items)]));

elem__117662__auto____162643.setAttribute("crateGroup",group__117661__auto____162642);
return elem__117662__auto____162643;
});
multi_jenk.client.main.servers.prototype._crateGroup = group__117661__auto____162642;
multi_jenk.client.main.showJobs = (function showJobs(reply){
var data__162644 = cljs.core.js__GT_clj.call(null,reply.target.getResponseJson());

return jayq.core.append.call(null,multi_jenk.client.main.$jenkins,multi_jenk.client.main.servers.call(null,data__162644));
});
multi_jenk.client.main.callback = (function callback(reply){
var servers__162645 = cljs.core.js__GT_clj.call(null,reply.target.getResponseJson());

var G__162646__162647 = cljs.core.seq.call(null,"jobs".call(null,cljs.core.get.call(null,servers__162645,0)));

if(cljs.core.truth_(G__162646__162647))
{var job__162648 = cljs.core.first.call(null,G__162646__162647);
var G__162646__162649 = G__162646__162647;

while(true){
jayq.core.append.call(null,multi_jenk.client.main.$jenkins,crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'p","name".call(null,job__162648)])));
var temp__3698__auto____162650 = cljs.core.next.call(null,G__162646__162649);

if(cljs.core.truth_(temp__3698__auto____162650))
{var G__162646__162651 = temp__3698__auto____162650;

{
var G__162652 = cljs.core.first.call(null,G__162646__162651);
var G__162653 = G__162646__162651;
job__162648 = G__162652;
G__162646__162649 = G__162653;
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
goog.net.XhrIo.send("/api/statuses",multi_jenk.client.main.showJobs);
