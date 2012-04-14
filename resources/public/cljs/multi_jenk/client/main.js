goog.provide('multi_jenk.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('cljs.reader');
goog.require('goog.net.XhrIo');
multi_jenk.client.main.$jenkins = jayq.core.$.call(null,"\uFDD0'#jenkins");
var group__117661__auto____183998 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.job = (function job(p__183999){
var map__184000__184001 = p__183999;
var map__184000__184002 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__184000__184001))?cljs.core.apply.call(null,cljs.core.hash_map,map__184000__184001):map__184000__184001);
var name__184003 = cljs.core.get.call(null,map__184000__184002,"name");
var color__184004 = cljs.core.get.call(null,map__184000__184002,"color");
var url__184005 = cljs.core.get.call(null,map__184000__184002,"url");

var elem__117662__auto____184006 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'h3",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'class"],{"\uFDD0'href":url__184005,"\uFDD0'class":color__184004}),name__184003])]));

elem__117662__auto____184006.setAttribute("crateGroup",group__117661__auto____183998);
return elem__117662__auto____184006;
});
multi_jenk.client.main.job.prototype._crateGroup = group__117661__auto____183998;
var group__117661__auto____184007 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.jobs_list = (function jobs_list(p__184008){
var map__184009__184010 = p__184008;
var map__184009__184011 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__184009__184010))?cljs.core.apply.call(null,cljs.core.hash_map,map__184009__184010):map__184009__184010);
var jobs__184012 = cljs.core.get.call(null,map__184009__184011,"jobs");
var name__184013 = cljs.core.get.call(null,map__184009__184011,"name");

var elem__117662__auto____184014 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",name__184013,cljs.core.map.call(null,multi_jenk.client.main.job,jobs__184012)]));

elem__117662__auto____184014.setAttribute("crateGroup",group__117661__auto____184007);
return elem__117662__auto____184014;
});
multi_jenk.client.main.jobs_list.prototype._crateGroup = group__117661__auto____184007;
var group__117661__auto____184015 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.servers_list = (function servers_list(items){
var elem__117662__auto____184016 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'ul#servers",cljs.core.map.call(null,multi_jenk.client.main.jobs_list,items)]));

elem__117662__auto____184016.setAttribute("crateGroup",group__117661__auto____184015);
return elem__117662__auto____184016;
});
multi_jenk.client.main.servers_list.prototype._crateGroup = group__117661__auto____184015;
multi_jenk.client.main.showJobs = (function showJobs(reply){
var data__184017 = cljs.core.js__GT_clj.call(null,reply.target.getResponseJson());

return jayq.core.append.call(null,multi_jenk.client.main.$jenkins,multi_jenk.client.main.servers_list.call(null,data__184017));
});
goog.net.XhrIo.send("/api/statuses",multi_jenk.client.main.showJobs);
