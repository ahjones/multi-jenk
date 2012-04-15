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
var pred__13996__13999 = cljs.core._EQ_;
var expr__13997__14000 = status;

if(cljs.core.truth_(pred__13996__13999.call(null,"red",expr__13997__14000)))
{return "label-important";
} else
{if(cljs.core.truth_(pred__13996__13999.call(null,"blue",expr__13997__14000)))
{return "label-success";
} else
{return "";
}
}
});
multi_jenk.client.main.job_satus_to_status_text = (function job_satus_to_status_text(status){
var pred__14001__14004 = cljs.core._EQ_;
var expr__14002__14005 = status;

if(cljs.core.truth_(pred__14001__14004.call(null,"red",expr__14002__14005)))
{return "Failed";
} else
{if(cljs.core.truth_(pred__14001__14004.call(null,"blue",expr__14002__14005)))
{return "OK";
} else
{return "Unknown";
}
}
});
var group__3192__auto____14007 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.job = (function job(p__14008){
var map__14009__14010 = p__14008;
var map__14009__14011 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14009__14010))?cljs.core.apply.call(null,cljs.core.hash_map,map__14009__14010):map__14009__14010);
var name__14012 = cljs.core.get.call(null,map__14009__14011,"name");
var color__14013 = cljs.core.get.call(null,map__14009__14011,"color");
var url__14014 = cljs.core.get.call(null,map__14009__14011,"url");

var elem__3193__auto____14015 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url__14014}),name__14012])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'span",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":cljs.core.str.call(null,"label ",multi_jenk.client.main.job_status_to_btn_class.call(null,color__14013))}),multi_jenk.client.main.job_satus_to_status_text.call(null,color__14013)])])]));

elem__3193__auto____14015.setAttribute("crateGroup",group__3192__auto____14007);
return elem__3193__auto____14015;
});
multi_jenk.client.main.job.prototype._crateGroup = group__3192__auto____14007;
var group__3192__auto____14016 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.jobs_list = (function jobs_list(p__14017){
var map__14018__14019 = p__14017;
var map__14018__14020 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__14018__14019))?cljs.core.apply.call(null,cljs.core.hash_map,map__14018__14019):map__14018__14019);
var jobs__14021 = cljs.core.get.call(null,map__14018__14020,"jobs");
var name__14022 = cljs.core.get.call(null,map__14018__14020,"name");

var elem__3193__auto____14023 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.span8",cljs.core.PersistentVector.fromArray(["\uFDD0'h2",name__14022]),cljs.core.PersistentVector.fromArray(["\uFDD0'table.table.table-striped",cljs.core.PersistentVector.fromArray(["\uFDD0'thead",cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'th.span6","Name"]),cljs.core.PersistentVector.fromArray(["\uFDD0'th","Status"])])]),cljs.core.map.call(null,multi_jenk.client.main.job,cljs.core.filter.call(null,(function (p1__14006_SHARP_){
return (0 <= "name".call(null,p1__14006_SHARP_).toLowerCase().indexOf(cljs.core.deref.call(null,multi_jenk.client.main.job_filter).toLowerCase()));
}),jobs__14021))])]));

elem__3193__auto____14023.setAttribute("crateGroup",group__3192__auto____14016);
return elem__3193__auto____14023;
});
multi_jenk.client.main.jobs_list.prototype._crateGroup = group__3192__auto____14016;
var group__3192__auto____14024 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.servers_list = (function servers_list(items){
var elem__3193__auto____14025 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'section#results",cljs.core.map.call(null,multi_jenk.client.main.jobs_list,items)]));

elem__3193__auto____14025.setAttribute("crateGroup",group__3192__auto____14024);
return elem__3193__auto____14025;
});
multi_jenk.client.main.servers_list.prototype._crateGroup = group__3192__auto____14024;
multi_jenk.client.main.showJobs = (function showJobs(reply){
jayq.core.empty.call(null,multi_jenk.client.main.$jenkins);
var data__14026 = cljs.core.js__GT_clj.call(null,reply.target.getResponseJson());

return jayq.core.append.call(null,multi_jenk.client.main.$jenkins,multi_jenk.client.main.servers_list.call(null,data__14026));
});
jayq.core.delegate.call(null,jayq.core.$.call(null,"\uFDD0'body"),"#jobname","\uFDD0'keyup",(function (e){
e.preventDefault();
cljs.core.swap_BANG_.call(null,multi_jenk.client.main.job_filter,(function (x){
return e.target.value;
}));
return multi_jenk.client.main.go.call(null);
}));
multi_jenk.client.main.go = (function go(){
return goog.net.XhrIo.send("/api/statuses",multi_jenk.client.main.showJobs);
});
multi_jenk.client.main.go.call(null);
