goog.provide('multi_jenk.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('cljs.reader');
goog.require('goog.net.XhrIo');
goog.require('goog.dom');
multi_jenk.client.main.$jenkins = jayq.core.$.call(null,"\uFDD0'#jenkins");
multi_jenk.client.main.job_filter = cljs.core.atom.call(null,"");
multi_jenk.client.main.job_status_to_btn_class = (function job_status_to_btn_class(status){
var pred__7525__7528 = cljs.core._EQ_;
var expr__7526__7529 = status;

if(cljs.core.truth_(pred__7525__7528.call(null,"red",expr__7526__7529)))
{return "label-important";
} else
{if(cljs.core.truth_(pred__7525__7528.call(null,"blue",expr__7526__7529)))
{return "label-success";
} else
{return "";
}
}
});
multi_jenk.client.main.job_satus_to_status_text = (function job_satus_to_status_text(status){
var pred__7530__7533 = cljs.core._EQ_;
var expr__7531__7534 = status;

if(cljs.core.truth_(pred__7530__7533.call(null,"red",expr__7531__7534)))
{return "Failed";
} else
{if(cljs.core.truth_(pred__7530__7533.call(null,"blue",expr__7531__7534)))
{return "OK";
} else
{return "Unknown";
}
}
});
var group__3192__auto____7536 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.job = (function job(p__7537){
var map__7538__7539 = p__7537;
var map__7538__7540 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7538__7539))?cljs.core.apply.call(null,cljs.core.hash_map,map__7538__7539):map__7538__7539);
var name__7541 = cljs.core.get.call(null,map__7538__7540,"name");
var color__7542 = cljs.core.get.call(null,map__7538__7540,"color");
var url__7543 = cljs.core.get.call(null,map__7538__7540,"url");

var elem__3193__auto____7544 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url__7543}),name__7541])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'span",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":cljs.core.str.call(null,"label ",multi_jenk.client.main.job_status_to_btn_class.call(null,color__7542))}),multi_jenk.client.main.job_satus_to_status_text.call(null,color__7542)])])]));

elem__3193__auto____7544.setAttribute("crateGroup",group__3192__auto____7536);
return elem__3193__auto____7544;
});
multi_jenk.client.main.job.prototype._crateGroup = group__3192__auto____7536;
var group__3192__auto____7545 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.jobs_list = (function jobs_list(p__7546){
var map__7547__7548 = p__7546;
var map__7547__7549 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__7547__7548))?cljs.core.apply.call(null,cljs.core.hash_map,map__7547__7548):map__7547__7548);
var jobs__7550 = cljs.core.get.call(null,map__7547__7549,"jobs");
var name__7551 = cljs.core.get.call(null,map__7547__7549,"name");

var elem__3193__auto____7552 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.span8",cljs.core.PersistentVector.fromArray(["\uFDD0'h2",name__7551]),cljs.core.PersistentVector.fromArray(["\uFDD0'table.table.table-striped",cljs.core.PersistentVector.fromArray(["\uFDD0'thead",cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'th.span6","Name"]),cljs.core.PersistentVector.fromArray(["\uFDD0'th","Status"])])]),cljs.core.map.call(null,multi_jenk.client.main.job,cljs.core.filter.call(null,(function (p1__7535_SHARP_){
return (0 <= "name".call(null,p1__7535_SHARP_).toLowerCase().indexOf(cljs.core.deref.call(null,multi_jenk.client.main.job_filter).toLowerCase()));
}),jobs__7550))])]));

elem__3193__auto____7552.setAttribute("crateGroup",group__3192__auto____7545);
return elem__3193__auto____7552;
});
multi_jenk.client.main.jobs_list.prototype._crateGroup = group__3192__auto____7545;
var group__3192__auto____7553 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.servers_list = (function servers_list(items){
var elem__3193__auto____7554 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'section#results",cljs.core.map.call(null,multi_jenk.client.main.jobs_list,items)]));

elem__3193__auto____7554.setAttribute("crateGroup",group__3192__auto____7553);
return elem__3193__auto____7554;
});
multi_jenk.client.main.servers_list.prototype._crateGroup = group__3192__auto____7553;
multi_jenk.client.main.showJobs = (function showJobs(reply){
jayq.core.empty.call(null,multi_jenk.client.main.$jenkins);
var data__7555 = cljs.core.js__GT_clj.call(null,reply.target.getResponseJson());

return jayq.core.append.call(null,multi_jenk.client.main.$jenkins,multi_jenk.client.main.servers_list.call(null,data__7555));
});
jayq.core.delegate.call(null,jayq.core.$.call(null,"\uFDD0'body"),"#jobname","\uFDD0'keyup",(function (e){
e.preventDefault();
cljs.core.swap_BANG_.call(null,multi_jenk.client.main.job_filter,(function (x){
return e.target.value;
}));
return multi_jenk.client.main.go.call(null);
}));
multi_jenk.client.main.storage_put = (function storage_put(key,value){
return goog.dom.getWindow.call(null).localStorage.setItem(key,value);
});
multi_jenk.client.main.storage_get = (function storage_get(key){
return goog.dom.getWindow.call(null).localStorage.getItem(key);
});
multi_jenk.client.main.go = (function go(){
return goog.net.XhrIo.send("/api/statuses",multi_jenk.client.main.showJobs);
});
multi_jenk.client.main.go.call(null);
