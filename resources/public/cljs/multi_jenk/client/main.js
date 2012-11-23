goog.provide('multi_jenk.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('jayq.core');
goog.require('goog.dom');
goog.require('goog.net.XhrIo');
goog.require('cljs.reader');
goog.require('crate.core');
multi_jenk.client.main.$jenkins = jayq.core.$.call(null,"\uFDD0'#jenkins");
multi_jenk.client.main.job_filter = cljs.core.atom.call(null,"");
multi_jenk.client.main.job_status_to_btn_class = (function job_status_to_btn_class(status){
var pred__4699 = cljs.core._EQ_;
var expr__4700 = status;
if(pred__4699.call(null,"red",expr__4700))
{return "label-important";
} else
{if(pred__4699.call(null,"blue",expr__4700))
{return "label-success";
} else
{return "";
}
}
});
multi_jenk.client.main.job_satus_to_status_text = (function job_satus_to_status_text(status){
var pred__4705 = cljs.core._EQ_;
var expr__4706 = status;
if(pred__4705.call(null,"red",expr__4706))
{return "Failed";
} else
{if(pred__4705.call(null,"blue",expr__4706))
{return "OK";
} else
{return "Unknown";
}
}
});
var group__2989__auto__ = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
multi_jenk.client.main.job = (function job(p__4709){
var map__4711 = p__4709;
var map__4711__$1 = ((cljs.core.seq_QMARK_.call(null,map__4711))?cljs.core.apply.call(null,cljs.core.hash_map,map__4711):map__4711);
var name = cljs.core._lookup.call(null,map__4711__$1,"name",null);
var color = cljs.core._lookup.call(null,map__4711__$1,"color",null);
var url = cljs.core._lookup.call(null,map__4711__$1,"url",null);
var elem__2990__auto__ = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url}),name], true)], true),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'span",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":[cljs.core.str("label "),cljs.core.str(multi_jenk.client.main.job_status_to_btn_class.call(null,color))].join('')}),multi_jenk.client.main.job_satus_to_status_text.call(null,color)], true)], true)], true));
elem__2990__auto__.setAttribute("crateGroup",group__2989__auto__);
return elem__2990__auto__;
});
multi_jenk.client.main.job.prototype._crateGroup = group__2989__auto__;
var group__2989__auto__ = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
multi_jenk.client.main.jobs_list = (function jobs_list(p__4712){
var map__4714 = p__4712;
var map__4714__$1 = ((cljs.core.seq_QMARK_.call(null,map__4714))?cljs.core.apply.call(null,cljs.core.hash_map,map__4714):map__4714);
var jobs = cljs.core._lookup.call(null,map__4714__$1,"jobs",null);
var name = cljs.core._lookup.call(null,map__4714__$1,"name",null);
var elem__2990__auto__ = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.span8",cljs.core.PersistentVector.fromArray(["\uFDD0'h2",name], true),cljs.core.PersistentVector.fromArray(["\uFDD0'table.table.table-striped",cljs.core.PersistentVector.fromArray(["\uFDD0'thead",cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'th.span6","Name"], true),cljs.core.PersistentVector.fromArray(["\uFDD0'th","Status"], true)], true)], true),cljs.core.map.call(null,multi_jenk.client.main.job,cljs.core.filter.call(null,(function (p1__4708_SHARP_){
return (0 <= "name".call(null,p1__4708_SHARP_).toLowerCase().indexOf(cljs.core.deref.call(null,multi_jenk.client.main.job_filter).toLowerCase()));
}),jobs))], true)], true));
elem__2990__auto__.setAttribute("crateGroup",group__2989__auto__);
return elem__2990__auto__;
});
multi_jenk.client.main.jobs_list.prototype._crateGroup = group__2989__auto__;
var group__2989__auto__ = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);
multi_jenk.client.main.servers_list = (function servers_list(items){
var elem__2990__auto__ = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'section#results",cljs.core.map.call(null,multi_jenk.client.main.jobs_list,items)], true));
elem__2990__auto__.setAttribute("crateGroup",group__2989__auto__);
return elem__2990__auto__;
});
multi_jenk.client.main.servers_list.prototype._crateGroup = group__2989__auto__;
multi_jenk.client.main.showJobs = (function showJobs(reply){
jayq.core.empty.call(null,multi_jenk.client.main.$jenkins);
var data = cljs.core.js__GT_clj.call(null,reply.target.getResponseJson());
return jayq.core.append.call(null,multi_jenk.client.main.$jenkins,multi_jenk.client.main.servers_list.call(null,data));
});
jayq.core.delegate.call(null,jayq.core.$.call(null,"\uFDD0'body"),"#jobname","\uFDD0'keyup",(function (e){
e.preventDefault();
cljs.core.swap_BANG_.call(null,multi_jenk.client.main.job_filter,(function (x){
return e.target.value;
}));
return multi_jenk.client.main.go.call(null);
}));
multi_jenk.client.main.go = (function go(){
return goog.net.XhrIo.send("api/statuses",multi_jenk.client.main.showJobs);
});
multi_jenk.client.main.go.call(null);
