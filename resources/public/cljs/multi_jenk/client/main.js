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
var pred__3211__3214 = cljs.core._EQ_;
var expr__3212__3215 = status;

if(cljs.core.truth_(pred__3211__3214.call(null,"red",expr__3212__3215)))
{return "label-important";
} else
{if(cljs.core.truth_(pred__3211__3214.call(null,"blue",expr__3212__3215)))
{return "label-success";
} else
{return "";
}
}
});
multi_jenk.client.main.job_satus_to_status_text = (function job_satus_to_status_text(status){
var pred__3216__3219 = cljs.core._EQ_;
var expr__3217__3220 = status;

if(cljs.core.truth_(pred__3216__3219.call(null,"red",expr__3217__3220)))
{return "Failed";
} else
{if(cljs.core.truth_(pred__3216__3219.call(null,"blue",expr__3217__3220)))
{return "OK";
} else
{return "Unknown";
}
}
});
var group__3192__auto____3222 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.job = (function job(p__3223){
var map__3224__3225 = p__3223;
var map__3224__3226 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3224__3225))?cljs.core.apply.call(null,cljs.core.hash_map,map__3224__3225):map__3224__3225);
var name__3227 = cljs.core.get.call(null,map__3224__3226,"name");
var color__3228 = cljs.core.get.call(null,map__3224__3226,"color");
var url__3229 = cljs.core.get.call(null,map__3224__3226,"url");

var elem__3193__auto____3230 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url__3229}),name__3227])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'span",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":cljs.core.str.call(null,"label ",multi_jenk.client.main.job_status_to_btn_class.call(null,color__3228))}),multi_jenk.client.main.job_satus_to_status_text.call(null,color__3228)])])]));

elem__3193__auto____3230.setAttribute("crateGroup",group__3192__auto____3222);
return elem__3193__auto____3230;
});
multi_jenk.client.main.job.prototype._crateGroup = group__3192__auto____3222;
var group__3192__auto____3231 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.jobs_list = (function jobs_list(p__3232){
var map__3233__3234 = p__3232;
var map__3233__3235 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__3233__3234))?cljs.core.apply.call(null,cljs.core.hash_map,map__3233__3234):map__3233__3234);
var jobs__3236 = cljs.core.get.call(null,map__3233__3235,"jobs");
var name__3237 = cljs.core.get.call(null,map__3233__3235,"name");

var elem__3193__auto____3238 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.span8",cljs.core.PersistentVector.fromArray(["\uFDD0'h2",name__3237]),cljs.core.PersistentVector.fromArray(["\uFDD0'table.table.table-striped",cljs.core.PersistentVector.fromArray(["\uFDD0'thead",cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'th.span6","Name"]),cljs.core.PersistentVector.fromArray(["\uFDD0'th","Status"])])]),cljs.core.map.call(null,multi_jenk.client.main.job,cljs.core.filter.call(null,(function (p1__3221_SHARP_){
return (0 <= "name".call(null,p1__3221_SHARP_).toLowerCase().indexOf(cljs.core.deref.call(null,multi_jenk.client.main.job_filter).toLowerCase()));
}),jobs__3236))])]));

elem__3193__auto____3238.setAttribute("crateGroup",group__3192__auto____3231);
return elem__3193__auto____3238;
});
multi_jenk.client.main.jobs_list.prototype._crateGroup = group__3192__auto____3231;
var group__3192__auto____3239 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.servers_list = (function servers_list(items){
var elem__3193__auto____3240 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'section#results",cljs.core.map.call(null,multi_jenk.client.main.jobs_list,items)]));

elem__3193__auto____3240.setAttribute("crateGroup",group__3192__auto____3239);
return elem__3193__auto____3240;
});
multi_jenk.client.main.servers_list.prototype._crateGroup = group__3192__auto____3239;
multi_jenk.client.main.showJobs = (function showJobs(reply){
jayq.core.empty.call(null,multi_jenk.client.main.$jenkins);
var data__3241 = cljs.core.js__GT_clj.call(null,reply.target.getResponseJson());

return jayq.core.append.call(null,multi_jenk.client.main.$jenkins,multi_jenk.client.main.servers_list.call(null,data__3241));
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
