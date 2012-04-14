goog.provide('multi_jenk.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('cljs.reader');
goog.require('goog.net.XhrIo');
multi_jenk.client.main.$jenkins = jayq.core.$.call(null,"\uFDD0'#jenkins");
var group__117661__auto____164780 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.job = (function job(item){
var elem__117662__auto____164781 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":"url".call(null,item)}),"name".call(null,item)]));

elem__117662__auto____164781.setAttribute("crateGroup",group__117661__auto____164780);
return elem__117662__auto____164781;
});
multi_jenk.client.main.job.prototype._crateGroup = group__117661__auto____164780;
var group__117661__auto____164782 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.server = (function server(jobs){
var elem__117662__auto____164783 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li","name".call(null,jobs),cljs.core.map.call(null,multi_jenk.client.main.job,"jobs".call(null,jobs))]));

elem__117662__auto____164783.setAttribute("crateGroup",group__117661__auto____164782);
return elem__117662__auto____164783;
});
multi_jenk.client.main.server.prototype._crateGroup = group__117661__auto____164782;
var group__117661__auto____164784 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.servers = (function servers(items){
var elem__117662__auto____164785 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'ul#servers",cljs.core.map.call(null,multi_jenk.client.main.server,items)]));

elem__117662__auto____164785.setAttribute("crateGroup",group__117661__auto____164784);
return elem__117662__auto____164785;
});
multi_jenk.client.main.servers.prototype._crateGroup = group__117661__auto____164784;
multi_jenk.client.main.showJobs = (function showJobs(reply){
var data__164786 = cljs.core.js__GT_clj.call(null,reply.target.getResponseJson());

return jayq.core.append.call(null,multi_jenk.client.main.$jenkins,multi_jenk.client.main.servers.call(null,data__164786));
});
goog.net.XhrIo.send("/api/statuses",multi_jenk.client.main.showJobs);
