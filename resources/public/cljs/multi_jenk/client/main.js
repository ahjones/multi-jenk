goog.provide('multi_jenk.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('cljs.reader');
goog.require('goog.net.XhrIo');
multi_jenk.client.main.$jenkins = jayq.core.$.call(null,"\uFDD0'#jenkins");
var group__117661__auto____173312 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.job = (function job(item){
var elem__117662__auto____173313 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'h3",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":"url".call(null,item)}),"name".call(null,item)])]));

elem__117662__auto____173313.setAttribute("crateGroup",group__117661__auto____173312);
return elem__117662__auto____173313;
});
multi_jenk.client.main.job.prototype._crateGroup = group__117661__auto____173312;
var group__117661__auto____173314 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.jobs_list = (function jobs_list(jobs){
var elem__117662__auto____173315 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li","name".call(null,jobs),cljs.core.map.call(null,multi_jenk.client.main.job,"jobs".call(null,jobs))]));

elem__117662__auto____173315.setAttribute("crateGroup",group__117661__auto____173314);
return elem__117662__auto____173315;
});
multi_jenk.client.main.jobs_list.prototype._crateGroup = group__117661__auto____173314;
var group__117661__auto____173316 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.servers_list = (function servers_list(items){
var elem__117662__auto____173317 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'ul#servers",cljs.core.map.call(null,multi_jenk.client.main.jobs_list,items)]));

elem__117662__auto____173317.setAttribute("crateGroup",group__117661__auto____173316);
return elem__117662__auto____173317;
});
multi_jenk.client.main.servers_list.prototype._crateGroup = group__117661__auto____173316;
multi_jenk.client.main.showJobs = (function showJobs(reply){
var data__173318 = cljs.core.js__GT_clj.call(null,reply.target.getResponseJson());

return jayq.core.append.call(null,multi_jenk.client.main.$jenkins,multi_jenk.client.main.servers_list.call(null,data__173318));
});
goog.net.XhrIo.send("/api/statuses",multi_jenk.client.main.showJobs);
