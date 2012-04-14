goog.provide('multi_jenk.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('cljs.reader');
goog.require('goog.net.XhrIo');
multi_jenk.client.main.$jenkins = jayq.core.$.call(null,"\uFDD0'#jenkins");
var group__117661__auto____186144 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.job = (function job(p__186145){
var map__186146__186147 = p__186145;
var map__186146__186148 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__186146__186147))?cljs.core.apply.call(null,cljs.core.hash_map,map__186146__186147):map__186146__186147);
var name__186149 = cljs.core.get.call(null,map__186146__186148,"name");
var color__186150 = cljs.core.get.call(null,map__186146__186148,"color");
var url__186151 = cljs.core.get.call(null,map__186146__186148,"url");

var elem__117662__auto____186152 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'h3",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href","\uFDD0'class"],{"\uFDD0'href":url__186151,"\uFDD0'class":color__186150}),name__186149])]));

elem__117662__auto____186152.setAttribute("crateGroup",group__117661__auto____186144);
return elem__117662__auto____186152;
});
multi_jenk.client.main.job.prototype._crateGroup = group__117661__auto____186144;
var group__117661__auto____186153 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.jobs_list = (function jobs_list(p__186154){
var map__186155__186156 = p__186154;
var map__186155__186157 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__186155__186156))?cljs.core.apply.call(null,cljs.core.hash_map,map__186155__186156):map__186155__186156);
var jobs__186158 = cljs.core.get.call(null,map__186155__186157,"jobs");
var name__186159 = cljs.core.get.call(null,map__186155__186157,"name");

var elem__117662__auto____186160 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'li",name__186159,cljs.core.map.call(null,multi_jenk.client.main.job,jobs__186158)]));

elem__117662__auto____186160.setAttribute("crateGroup",group__117661__auto____186153);
return elem__117662__auto____186160;
});
multi_jenk.client.main.jobs_list.prototype._crateGroup = group__117661__auto____186153;
var group__117661__auto____186161 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.servers_list = (function servers_list(items){
var elem__117662__auto____186162 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'ul#servers",cljs.core.map.call(null,multi_jenk.client.main.jobs_list,items)]));

elem__117662__auto____186162.setAttribute("crateGroup",group__117661__auto____186161);
return elem__117662__auto____186162;
});
multi_jenk.client.main.servers_list.prototype._crateGroup = group__117661__auto____186161;
multi_jenk.client.main.showJobs = (function showJobs(reply){
var data__186163 = cljs.core.js__GT_clj.call(null,reply.target.getResponseJson());

return jayq.core.append.call(null,multi_jenk.client.main.$jenkins,multi_jenk.client.main.servers_list.call(null,data__186163));
});
goog.net.XhrIo.send("/api/statuses",multi_jenk.client.main.showJobs);
