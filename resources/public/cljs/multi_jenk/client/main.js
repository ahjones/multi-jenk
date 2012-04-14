goog.provide('multi_jenk.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('cljs.reader');
goog.require('goog.net.XhrIo');
multi_jenk.client.main.$jenkins = jayq.core.$.call(null,"\uFDD0'#jenkins");
multi_jenk.client.main.job_filter = cljs.core.atom.call(null,"");
multi_jenk.client.main.job_status_to_btn_class = (function job_status_to_btn_class(status){
var pred__298144__298147 = cljs.core._EQ_;
var expr__298145__298148 = status;

if(cljs.core.truth_(pred__298144__298147.call(null,"red",expr__298145__298148)))
{return "btn-danger";
} else
{return "";
}
});
multi_jenk.client.main.job_satus_to_status_text = (function job_satus_to_status_text(status){
var pred__298149__298152 = cljs.core._EQ_;
var expr__298150__298153 = status;

if(cljs.core.truth_(pred__298149__298152.call(null,"red",expr__298150__298153)))
{return "Failed";
} else
{if(cljs.core.truth_(pred__298149__298152.call(null,"grey",expr__298150__298153)))
{return "Unknown";
} else
{throw (new Error(cljs.core.str.call(null,"No matching clause: ",expr__298150__298153)));
}
}
});
var group__117661__auto____298155 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.job = (function job(p__298156){
var map__298157__298158 = p__298156;
var map__298157__298159 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__298157__298158))?cljs.core.apply.call(null,cljs.core.hash_map,map__298157__298158):map__298157__298158);
var name__298160 = cljs.core.get.call(null,map__298157__298159,"name");
var color__298161 = cljs.core.get.call(null,map__298157__298159,"color");
var url__298162 = cljs.core.get.call(null,map__298157__298159,"url");

var elem__117662__auto____298163 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url__298162}),name__298160])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'button",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":multi_jenk.client.main.job_status_to_btn_class.call(null,color__298161)}),multi_jenk.client.main.job_satus_to_status_text.call(null,color__298161)])])]));

elem__117662__auto____298163.setAttribute("crateGroup",group__117661__auto____298155);
return elem__117662__auto____298163;
});
multi_jenk.client.main.job.prototype._crateGroup = group__117661__auto____298155;
var group__117661__auto____298164 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.jobs_list = (function jobs_list(p__298165){
var map__298166__298167 = p__298165;
var map__298166__298168 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__298166__298167))?cljs.core.apply.call(null,cljs.core.hash_map,map__298166__298167):map__298166__298167);
var jobs__298169 = cljs.core.get.call(null,map__298166__298168,"jobs");
var name__298170 = cljs.core.get.call(null,map__298166__298168,"name");

var elem__117662__auto____298171 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div",cljs.core.PersistentVector.fromArray(["\uFDD0'h2",name__298170]),cljs.core.PersistentVector.fromArray(["\uFDD0'table.table.table-striped",cljs.core.PersistentVector.fromArray(["\uFDD0'thead",cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'th","Name"]),cljs.core.PersistentVector.fromArray(["\uFDD0'th","Status"])])]),cljs.core.map.call(null,multi_jenk.client.main.job,cljs.core.filter.call(null,(function (p1__298154_SHARP_){
return cljs.core.not_EQ_.call(null,"name".call(null,p1__298154_SHARP_),cljs.core.deref.call(null,multi_jenk.client.main.job_filter));
}),jobs__298169))])]));

elem__117662__auto____298171.setAttribute("crateGroup",group__117661__auto____298164);
return elem__117662__auto____298171;
});
multi_jenk.client.main.jobs_list.prototype._crateGroup = group__117661__auto____298164;
var group__117661__auto____298172 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.servers_list = (function servers_list(items){
var elem__117662__auto____298173 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'section#results",cljs.core.map.call(null,multi_jenk.client.main.jobs_list,items)]));

elem__117662__auto____298173.setAttribute("crateGroup",group__117661__auto____298172);
return elem__117662__auto____298173;
});
multi_jenk.client.main.servers_list.prototype._crateGroup = group__117661__auto____298172;
multi_jenk.client.main.showJobs = (function showJobs(reply){
jayq.core.empty.call(null,multi_jenk.client.main.$jenkins);
var data__298174 = cljs.core.js__GT_clj.call(null,reply.target.getResponseJson());

return jayq.core.append.call(null,multi_jenk.client.main.$jenkins,multi_jenk.client.main.servers_list.call(null,data__298174));
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
