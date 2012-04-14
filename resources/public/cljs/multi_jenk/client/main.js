goog.provide('multi_jenk.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('cljs.reader');
goog.require('goog.net.XhrIo');
multi_jenk.client.main.$jenkins = jayq.core.$.call(null,"\uFDD0'#jenkins");
var group__117661__auto____181858 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.job = (function job(p__181859){
var map__181860__181861 = p__181859;
var map__181860__181862 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__181860__181861))?cljs.core.apply.call(null,cljs.core.hash_map,map__181860__181861):map__181860__181861);
var name__181863 = cljs.core.get.call(null,map__181860__181862,"name");
var color__181864 = cljs.core.get.call(null,map__181860__181862,"color");
var url__181865 = cljs.core.get.call(null,map__181860__181862,"url");

var elem__117662__auto____181866 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'h3",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'class"],{"\uFDD0'href":url__181865,"\uFDD0'class":color__181864}),name__181863])]));

elem__117662__auto____181866.setAttribute("crateGroup",group__117661__auto____181858);
return elem__117662__auto____181866;
});
multi_jenk.client.main.job.prototype._crateGroup = group__117661__auto____181858;
var group__117661__auto____181867 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.jobs_list = (function jobs_list(jobs){
var elem__117662__auto____181868 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li","name".call(null,jobs),cljs.core.map.call(null,multi_jenk.client.main.job,"jobs".call(null,jobs))]));

elem__117662__auto____181868.setAttribute("crateGroup",group__117661__auto____181867);
return elem__117662__auto____181868;
});
multi_jenk.client.main.jobs_list.prototype._crateGroup = group__117661__auto____181867;
var group__117661__auto____181869 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.servers_list = (function servers_list(items){
var elem__117662__auto____181870 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'ul#servers",cljs.core.map.call(null,multi_jenk.client.main.jobs_list,items)]));

elem__117662__auto____181870.setAttribute("crateGroup",group__117661__auto____181869);
return elem__117662__auto____181870;
});
multi_jenk.client.main.servers_list.prototype._crateGroup = group__117661__auto____181869;
multi_jenk.client.main.showJobs = (function showJobs(reply){
var data__181871 = cljs.core.js__GT_clj.call(null,reply.target.getResponseJson());

return jayq.core.append.call(null,multi_jenk.client.main.$jenkins,multi_jenk.client.main.servers_list.call(null,data__181871));
});
goog.net.XhrIo.send("/api/statuses",multi_jenk.client.main.showJobs);
