goog.provide('multi_jenk.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('cljs.reader');
goog.require('goog.net.XhrIo');
multi_jenk.client.main.$jenkins = jayq.core.$.call(null,"\uFDD0'#jenkins");
multi_jenk.client.main.job_status_to_btn_class = (function job_status_to_btn_class(status){
var pred__244121__244124 = cljs.core._EQ_;
var expr__244122__244125 = status;

if(cljs.core.truth_(pred__244121__244124.call(null,"red",expr__244122__244125)))
{return "btn-danger";
} else
{return "";
}
});
multi_jenk.client.main.job_satus_to_status_text = (function job_satus_to_status_text(status){
var pred__244126__244129 = cljs.core._EQ_;
var expr__244127__244130 = status;

if(cljs.core.truth_(pred__244126__244129.call(null,"red",expr__244127__244130)))
{return "Failed";
} else
{if(cljs.core.truth_(pred__244126__244129.call(null,"grey",expr__244127__244130)))
{return "Unknown";
} else
{throw (new Error(cljs.core.str.call(null,"No matching clause: ",expr__244127__244130)));
}
}
});
var group__117661__auto____244131 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.job = (function job(p__244132){
var map__244133__244134 = p__244132;
var map__244133__244135 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__244133__244134))?cljs.core.apply.call(null,cljs.core.hash_map,map__244133__244134):map__244133__244134);
var name__244136 = cljs.core.get.call(null,map__244133__244135,"name");
var color__244137 = cljs.core.get.call(null,map__244133__244135,"color");
var url__244138 = cljs.core.get.call(null,map__244133__244135,"url");

var elem__117662__auto____244139 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url__244138}),name__244136])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'button",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":multi_jenk.client.main.job_status_to_btn_class.call(null,color__244137)}),multi_jenk.client.main.job_satus_to_status_text.call(null,color__244137)])])]));

elem__117662__auto____244139.setAttribute("crateGroup",group__117661__auto____244131);
return elem__117662__auto____244139;
});
multi_jenk.client.main.job.prototype._crateGroup = group__117661__auto____244131;
var group__117661__auto____244140 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.jobs_list = (function jobs_list(p__244141){
var map__244142__244143 = p__244141;
var map__244142__244144 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__244142__244143))?cljs.core.apply.call(null,cljs.core.hash_map,map__244142__244143):map__244142__244143);
var jobs__244145 = cljs.core.get.call(null,map__244142__244144,"jobs");
var name__244146 = cljs.core.get.call(null,map__244142__244144,"name");

var elem__117662__auto____244147 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'h2",name__244146]),cljs.core.PersistentVector.fromArray(["\uFDD0'table.table.table-striped",cljs.core.PersistentVector.fromArray(["\uFDD0'thead",cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'th","Name"]),cljs.core.PersistentVector.fromArray(["\uFDD0'th","Status"])])]),cljs.core.map.call(null,multi_jenk.client.main.job,jobs__244145)])]));

elem__117662__auto____244147.setAttribute("crateGroup",group__117661__auto____244140);
return elem__117662__auto____244147;
});
multi_jenk.client.main.jobs_list.prototype._crateGroup = group__117661__auto____244140;
var group__117661__auto____244148 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.servers_list = (function servers_list(items){
var elem__117662__auto____244149 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'section#results",cljs.core.map.call(null,multi_jenk.client.main.jobs_list,items)]));

elem__117662__auto____244149.setAttribute("crateGroup",group__117661__auto____244148);
return elem__117662__auto____244149;
});
multi_jenk.client.main.servers_list.prototype._crateGroup = group__117661__auto____244148;
multi_jenk.client.main.showJobs = (function showJobs(reply){
var data__244150 = cljs.core.js__GT_clj.call(null,reply.target.getResponseJson());

return jayq.core.append.call(null,multi_jenk.client.main.$jenkins,multi_jenk.client.main.servers_list.call(null,data__244150));
});
goog.net.XhrIo.send("/api/statuses",multi_jenk.client.main.showJobs);
