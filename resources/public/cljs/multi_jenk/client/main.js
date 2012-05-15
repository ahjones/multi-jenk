goog.provide('multi_jenk.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('cljs.reader');
goog.require('goog.net.XhrIo');
goog.require('goog.dom');
multi_jenk.client.main.$jenkins = jayq.core.$.call(null,"\uFDD0'#jenkins");
multi_jenk.client.main.job_filter = cljs.core.atom.call(null,"");
multi_jenk.client.main.jobs = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
multi_jenk.client.main.servers = cljs.core.atom.call(null,cljs.core.ObjMap.fromObject([],{}));
multi_jenk.client.main.job_status_to_btn_class = (function job_status_to_btn_class(status){
var pred__25163__25166 = cljs.core._EQ_;
var expr__25164__25167 = status;

if(cljs.core.truth_(pred__25163__25166.call(null,"red",expr__25164__25167)))
{return "label-important";
} else
{if(cljs.core.truth_(pred__25163__25166.call(null,"blue",expr__25164__25167)))
{return "label-success";
} else
{return "";
}
}
});
multi_jenk.client.main.job_satus_to_status_text = (function job_satus_to_status_text(status){
var pred__25168__25171 = cljs.core._EQ_;
var expr__25169__25172 = status;

if(cljs.core.truth_(pred__25168__25171.call(null,"red",expr__25169__25172)))
{return "Failed";
} else
{if(cljs.core.truth_(pred__25168__25171.call(null,"blue",expr__25169__25172)))
{return "OK";
} else
{return "Unknown";
}
}
});
var group__3192__auto____25174 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.job = (function job(p__25175){
var map__25176__25177 = p__25175;
var map__25176__25178 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__25176__25177))?cljs.core.apply.call(null,cljs.core.hash_map,map__25176__25177):map__25176__25177);
var name__25179 = cljs.core.get.call(null,map__25176__25178,"name");
var color__25180 = cljs.core.get.call(null,map__25176__25178,"color");
var url__25181 = cljs.core.get.call(null,map__25176__25178,"url");

var elem__3193__auto____25182 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url__25181}),name__25179])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'span",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":cljs.core.str.call(null,"label ",multi_jenk.client.main.job_status_to_btn_class.call(null,color__25180))}),multi_jenk.client.main.job_satus_to_status_text.call(null,color__25180)])])]));

elem__3193__auto____25182.setAttribute("crateGroup",group__3192__auto____25174);
return elem__3193__auto____25182;
});
multi_jenk.client.main.job.prototype._crateGroup = group__3192__auto____25174;
var group__3192__auto____25183 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.jobs_list = (function jobs_list(p__25184){
var map__25185__25186 = p__25184;
var map__25185__25187 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__25185__25186))?cljs.core.apply.call(null,cljs.core.hash_map,map__25185__25186):map__25185__25186);
var jobs__25188 = cljs.core.get.call(null,map__25185__25187,"jobs");
var name__25189 = cljs.core.get.call(null,map__25185__25187,"name");

var elem__3193__auto____25190 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.span8",cljs.core.PersistentVector.fromArray(["\uFDD0'h2",name__25189]),cljs.core.PersistentVector.fromArray(["\uFDD0'table.table.table-striped",cljs.core.PersistentVector.fromArray(["\uFDD0'thead",cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'th.span6","Name"]),cljs.core.PersistentVector.fromArray(["\uFDD0'th","Status"])])]),cljs.core.map.call(null,multi_jenk.client.main.job,cljs.core.filter.call(null,(function (p1__25173_SHARP_){
return (0 <= "name".call(null,p1__25173_SHARP_).toLowerCase().indexOf(cljs.core.deref.call(null,multi_jenk.client.main.job_filter).toLowerCase()));
}),jobs__25188))])]));

elem__3193__auto____25190.setAttribute("crateGroup",group__3192__auto____25183);
return elem__3193__auto____25190;
});
multi_jenk.client.main.jobs_list.prototype._crateGroup = group__3192__auto____25183;
var group__3192__auto____25191 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.servers_list = (function servers_list(items){
var elem__3193__auto____25192 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'section#results",cljs.core.map.call(null,multi_jenk.client.main.jobs_list,items)]));

elem__3193__auto____25192.setAttribute("crateGroup",group__3192__auto____25191);
return elem__3193__auto____25192;
});
multi_jenk.client.main.servers_list.prototype._crateGroup = group__3192__auto____25191;
multi_jenk.client.main.reply__GT_clojure = (function reply__GT_clojure(reply){
return cljs.core.js__GT_clj.call(null,reply.target.getResponseJson());
});
multi_jenk.client.main.showJobs = (function showJobs(reply){
jayq.core.empty.call(null,multi_jenk.client.main.$jenkins);
return jayq.core.append.call(null,multi_jenk.client.main.$jenkins,multi_jenk.client.main.servers_list.call(null,multi_jenk.client.main.reply__GT_clojure.call(null,reply)));
});
jayq.core.delegate.call(null,jayq.core.$.call(null,"\uFDD0'body"),"#jobname","\uFDD0'keyup",(function (e){
e.preventDefault();
cljs.core.swap_BANG_.call(null,multi_jenk.client.main.job_filter,(function (x){
return e.target.value;
}));
return multi_jenk.client.main.go.call(null);
}));
multi_jenk.client.main.got_servers = (function got_servers(reply){
var rep_servers__25193 = multi_jenk.client.main.reply__GT_clojure.call(null,reply);

var G__25194__25195 = cljs.core.seq.call(null,rep_servers__25193);

if(cljs.core.truth_(G__25194__25195))
{var server__25196 = cljs.core.first.call(null,G__25194__25195);
var G__25194__25197 = G__25194__25195;

while(true){
cljs.core.swap_BANG_.call(null,multi_jenk.client.main.servers,cljs.core.assoc,"\uFDD0'name".call(null,rep_servers__25193),"\uFDD0'info".call(null,rep_servers__25193));
var temp__3698__auto____25198 = cljs.core.next.call(null,G__25194__25197);

if(cljs.core.truth_(temp__3698__auto____25198))
{var G__25194__25199 = temp__3698__auto____25198;

{
var G__25206 = cljs.core.first.call(null,G__25194__25199);
var G__25207 = G__25194__25199;
server__25196 = G__25206;
G__25194__25197 = G__25207;
continue;
}
} else
{}
break;
}
} else
{}
var G__25200__25201 = cljs.core.seq.call(null,cljs.core.deref.call(null,multi_jenk.client.main.servers));

if(cljs.core.truth_(G__25200__25201))
{var server__25202 = cljs.core.first.call(null,G__25200__25201);
var G__25200__25203 = G__25200__25201;

while(true){
console.log(cljs.core.str.call(null,server__25202));
var temp__3698__auto____25204 = cljs.core.next.call(null,G__25200__25203);

if(cljs.core.truth_(temp__3698__auto____25204))
{var G__25200__25205 = temp__3698__auto____25204;

{
var G__25208 = cljs.core.first.call(null,G__25200__25205);
var G__25209 = G__25200__25205;
server__25202 = G__25208;
G__25200__25203 = G__25209;
continue;
}
} else
{return null;
}
break;
}
} else
{return null;
}
});
multi_jenk.client.main.get_servers = (function get_servers(){
return goog.net.XhrIo.send("api/servers",multi_jenk.client.main.got_servers);
});
multi_jenk.client.main.go = (function go(){
goog.net.XhrIo.send("api/statuses",multi_jenk.client.main.showJobs);
return multi_jenk.client.main.get_servers.call(null);
});
multi_jenk.client.main.go.call(null);
