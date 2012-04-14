goog.provide('multi_jenk.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('cljs.reader');
goog.require('goog.net.XhrIo');
multi_jenk.client.main.$jenkins = jayq.core.$.call(null,"\uFDD0'#jenkins");
multi_jenk.client.main.job_filter = cljs.core.atom.call(null,"");
multi_jenk.client.main.job_status_to_btn_class = (function job_status_to_btn_class(status){
var pred__319713__319716 = cljs.core._EQ_;
var expr__319714__319717 = status;

if(cljs.core.truth_(pred__319713__319716.call(null,"red",expr__319714__319717)))
{return "btn-danger";
} else
{return "";
}
});
multi_jenk.client.main.job_satus_to_status_text = (function job_satus_to_status_text(status){
var pred__319718__319721 = cljs.core._EQ_;
var expr__319719__319722 = status;

if(cljs.core.truth_(pred__319718__319721.call(null,"red",expr__319719__319722)))
{return "Failed";
} else
{if(cljs.core.truth_(pred__319718__319721.call(null,"grey",expr__319719__319722)))
{return "Unknown";
} else
{throw (new Error(cljs.core.str.call(null,"No matching clause: ",expr__319719__319722)));
}
}
});
var group__117661__auto____319724 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.job = (function job(p__319725){
var map__319726__319727 = p__319725;
var map__319726__319728 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__319726__319727))?cljs.core.apply.call(null,cljs.core.hash_map,map__319726__319727):map__319726__319727);
var name__319729 = cljs.core.get.call(null,map__319726__319728,"name");
var color__319730 = cljs.core.get.call(null,map__319726__319728,"color");
var url__319731 = cljs.core.get.call(null,map__319726__319728,"url");

var elem__117662__auto____319732 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url__319731}),name__319729])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'button",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":multi_jenk.client.main.job_status_to_btn_class.call(null,color__319730)}),multi_jenk.client.main.job_satus_to_status_text.call(null,color__319730)])])]));

elem__117662__auto____319732.setAttribute("crateGroup",group__117661__auto____319724);
return elem__117662__auto____319732;
});
multi_jenk.client.main.job.prototype._crateGroup = group__117661__auto____319724;
var group__117661__auto____319733 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.jobs_list = (function jobs_list(p__319734){
var map__319735__319736 = p__319734;
var map__319735__319737 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__319735__319736))?cljs.core.apply.call(null,cljs.core.hash_map,map__319735__319736):map__319735__319736);
var jobs__319738 = cljs.core.get.call(null,map__319735__319737,"jobs");
var name__319739 = cljs.core.get.call(null,map__319735__319737,"name");

var elem__117662__auto____319740 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'h2",name__319739]),cljs.core.PersistentVector.fromArray(["\uFDD0'table.table.table-striped",cljs.core.PersistentVector.fromArray(["\uFDD0'thead",cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'th","Name"]),cljs.core.PersistentVector.fromArray(["\uFDD0'th","Status"])])]),cljs.core.map.call(null,multi_jenk.client.main.job,cljs.core.filter.call(null,(function (p1__319723_SHARP_){
return (0 <= "name".call(null,p1__319723_SHARP_).toLowerCase().indexOf(cljs.core.deref.call(null,multi_jenk.client.main.job_filter).toLowerCase()));
}),jobs__319738))])]));

elem__117662__auto____319740.setAttribute("crateGroup",group__117661__auto____319733);
return elem__117662__auto____319740;
});
multi_jenk.client.main.jobs_list.prototype._crateGroup = group__117661__auto____319733;
var group__117661__auto____319741 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.servers_list = (function servers_list(items){
var elem__117662__auto____319742 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'section#results",cljs.core.map.call(null,multi_jenk.client.main.jobs_list,items)]));

elem__117662__auto____319742.setAttribute("crateGroup",group__117661__auto____319741);
return elem__117662__auto____319742;
});
multi_jenk.client.main.servers_list.prototype._crateGroup = group__117661__auto____319741;
multi_jenk.client.main.showJobs = (function showJobs(reply){
jayq.core.empty.call(null,multi_jenk.client.main.$jenkins);
var data__319743 = cljs.core.js__GT_clj.call(null,reply.target.getResponseJson());

return jayq.core.append.call(null,multi_jenk.client.main.$jenkins,multi_jenk.client.main.servers_list.call(null,data__319743));
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
