goog.provide('multi_jenk.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('cljs.reader');
goog.require('goog.net.XhrIo');
multi_jenk.client.main.$jenkins = jayq.core.$.call(null,"\uFDD0'#jenkins");
multi_jenk.client.main.job_filter = cljs.core.atom.call(null,"");
multi_jenk.client.main.job_status_to_btn_class = (function job_status_to_btn_class(status){
var pred__326184__326187 = cljs.core._EQ_;
var expr__326185__326188 = status;

if(cljs.core.truth_(pred__326184__326187.call(null,"red",expr__326185__326188)))
{return "btn-danger";
} else
{return "";
}
});
multi_jenk.client.main.job_satus_to_status_text = (function job_satus_to_status_text(status){
var pred__326189__326192 = cljs.core._EQ_;
var expr__326190__326193 = status;

if(cljs.core.truth_(pred__326189__326192.call(null,"red",expr__326190__326193)))
{return "Failed";
} else
{if(cljs.core.truth_(pred__326189__326192.call(null,"grey",expr__326190__326193)))
{return "Unknown";
} else
{throw (new Error(cljs.core.str.call(null,"No matching clause: ",expr__326190__326193)));
}
}
});
var group__117661__auto____326195 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.job = (function job(p__326196){
var map__326197__326198 = p__326196;
var map__326197__326199 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__326197__326198))?cljs.core.apply.call(null,cljs.core.hash_map,map__326197__326198):map__326197__326198);
var name__326200 = cljs.core.get.call(null,map__326197__326199,"name");
var color__326201 = cljs.core.get.call(null,map__326197__326199,"color");
var url__326202 = cljs.core.get.call(null,map__326197__326199,"url");

var elem__117662__auto____326203 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url__326202}),name__326200])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'button",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":multi_jenk.client.main.job_status_to_btn_class.call(null,color__326201)}),multi_jenk.client.main.job_satus_to_status_text.call(null,color__326201)])])]));

elem__117662__auto____326203.setAttribute("crateGroup",group__117661__auto____326195);
return elem__117662__auto____326203;
});
multi_jenk.client.main.job.prototype._crateGroup = group__117661__auto____326195;
var group__117661__auto____326204 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.jobs_list = (function jobs_list(p__326205){
var map__326206__326207 = p__326205;
var map__326206__326208 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__326206__326207))?cljs.core.apply.call(null,cljs.core.hash_map,map__326206__326207):map__326206__326207);
var jobs__326209 = cljs.core.get.call(null,map__326206__326208,"jobs");
var name__326210 = cljs.core.get.call(null,map__326206__326208,"name");

var elem__117662__auto____326211 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.span8",cljs.core.PersistentVector.fromArray(["\uFDD0'h2",name__326210]),cljs.core.PersistentVector.fromArray(["\uFDD0'table.table.table-striped",cljs.core.PersistentVector.fromArray(["\uFDD0'thead",cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'th.span6","Name"]),cljs.core.PersistentVector.fromArray(["\uFDD0'th","Status"])])]),cljs.core.map.call(null,multi_jenk.client.main.job,cljs.core.filter.call(null,(function (p1__326194_SHARP_){
return (0 <= "name".call(null,p1__326194_SHARP_).toLowerCase().indexOf(cljs.core.deref.call(null,multi_jenk.client.main.job_filter).toLowerCase()));
}),jobs__326209))])]));

elem__117662__auto____326211.setAttribute("crateGroup",group__117661__auto____326204);
return elem__117662__auto____326211;
});
multi_jenk.client.main.jobs_list.prototype._crateGroup = group__117661__auto____326204;
var group__117661__auto____326212 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.servers_list = (function servers_list(items){
var elem__117662__auto____326213 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'section#results",cljs.core.map.call(null,multi_jenk.client.main.jobs_list,items)]));

elem__117662__auto____326213.setAttribute("crateGroup",group__117661__auto____326212);
return elem__117662__auto____326213;
});
multi_jenk.client.main.servers_list.prototype._crateGroup = group__117661__auto____326212;
multi_jenk.client.main.showJobs = (function showJobs(reply){
jayq.core.empty.call(null,multi_jenk.client.main.$jenkins);
var data__326214 = cljs.core.js__GT_clj.call(null,reply.target.getResponseJson());

return jayq.core.append.call(null,multi_jenk.client.main.$jenkins,multi_jenk.client.main.servers_list.call(null,data__326214));
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
