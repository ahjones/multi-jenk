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
var pred__79395__79398 = cljs.core._EQ_;
var expr__79396__79399 = status;

if(cljs.core.truth_(pred__79395__79398.call(null,"red",expr__79396__79399)))
{return "label-important";
} else
{if(cljs.core.truth_(pred__79395__79398.call(null,"blue",expr__79396__79399)))
{return "label-success";
} else
{return "";
}
}
});
multi_jenk.client.main.job_satus_to_status_text = (function job_satus_to_status_text(status){
var pred__79400__79403 = cljs.core._EQ_;
var expr__79401__79404 = status;

if(cljs.core.truth_(pred__79400__79403.call(null,"red",expr__79401__79404)))
{return "Failed";
} else
{if(cljs.core.truth_(pred__79400__79403.call(null,"blue",expr__79401__79404)))
{return "OK";
} else
{return "Unknown";
}
}
});
var group__3192__auto____79406 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.job = (function job(p__79407){
var map__79408__79409 = p__79407;
var map__79408__79410 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__79408__79409))?cljs.core.apply.call(null,cljs.core.hash_map,map__79408__79409):map__79408__79409);
var name__79411 = cljs.core.get.call(null,map__79408__79410,"name");
var color__79412 = cljs.core.get.call(null,map__79408__79410,"color");
var url__79413 = cljs.core.get.call(null,map__79408__79410,"url");

var elem__3193__auto____79414 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'a",cljs.core.ObjMap.fromObject(["\uFDD0'href"],{"\uFDD0'href":url__79413}),name__79411])]),cljs.core.PersistentVector.fromArray(["\uFDD0'td",cljs.core.PersistentVector.fromArray(["\uFDD0'span",cljs.core.ObjMap.fromObject(["\uFDD0'class"],{"\uFDD0'class":cljs.core.str.call(null,"label ",multi_jenk.client.main.job_status_to_btn_class.call(null,color__79412))}),multi_jenk.client.main.job_satus_to_status_text.call(null,color__79412)])])]));

elem__3193__auto____79414.setAttribute("crateGroup",group__3192__auto____79406);
return elem__3193__auto____79414;
});
multi_jenk.client.main.job.prototype._crateGroup = group__3192__auto____79406;
var group__3192__auto____79415 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.jobs_list = (function jobs_list(p__79416){
var map__79417__79418 = p__79416;
var map__79417__79419 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__79417__79418))?cljs.core.apply.call(null,cljs.core.hash_map,map__79417__79418):map__79417__79418);
var jobs__79420 = cljs.core.get.call(null,map__79417__79419,"jobs");
var name__79421 = cljs.core.get.call(null,map__79417__79419,"name");

var elem__3193__auto____79422 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'div.span8",cljs.core.PersistentVector.fromArray(["\uFDD0'h2",name__79421]),cljs.core.PersistentVector.fromArray(["\uFDD0'table.table.table-striped",cljs.core.PersistentVector.fromArray(["\uFDD0'thead",cljs.core.PersistentVector.fromArray(["\uFDD0'tr",cljs.core.PersistentVector.fromArray(["\uFDD0'th.span6","Name"]),cljs.core.PersistentVector.fromArray(["\uFDD0'th","Status"])])]),cljs.core.map.call(null,multi_jenk.client.main.job,cljs.core.filter.call(null,(function (p1__79405_SHARP_){
return (0 <= "name".call(null,p1__79405_SHARP_).toLowerCase().indexOf(cljs.core.deref.call(null,multi_jenk.client.main.job_filter).toLowerCase()));
}),jobs__79420))])]));

elem__3193__auto____79422.setAttribute("crateGroup",group__3192__auto____79415);
return elem__3193__auto____79422;
});
multi_jenk.client.main.jobs_list.prototype._crateGroup = group__3192__auto____79415;
var group__3192__auto____79423 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.render_server = (function render_server(name,info_url){
var elem__3193__auto____79424 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'p",cljs.core.PersistentVector.fromArray(["\uFDD0'h1",name]),cljs.core.PersistentVector.fromArray(["\uFDD0'h2",info_url])]));

elem__3193__auto____79424.setAttribute("crateGroup",group__3192__auto____79423);
return elem__3193__auto____79424;
});
multi_jenk.client.main.render_server.prototype._crateGroup = group__3192__auto____79423;
var group__3192__auto____79425 = cljs.core.swap_BANG_.call(null,crate.core.group_id,cljs.core.inc);

multi_jenk.client.main.servers_list = (function servers_list(items){
var elem__3193__auto____79426 = crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'section#results",cljs.core.map.call(null,multi_jenk.client.main.jobs_list,items)]));

elem__3193__auto____79426.setAttribute("crateGroup",group__3192__auto____79425);
return elem__3193__auto____79426;
});
multi_jenk.client.main.servers_list.prototype._crateGroup = group__3192__auto____79425;
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
var rep_servers__79427 = multi_jenk.client.main.reply__GT_clojure.call(null,reply);

var G__79428__79429 = cljs.core.seq.call(null,rep_servers__79427);

if(cljs.core.truth_(G__79428__79429))
{var server__79430 = cljs.core.first.call(null,G__79428__79429);
var G__79428__79431 = G__79428__79429;

while(true){
var map__79432__79433 = server__79430;
var map__79432__79434 = (cljs.core.truth_(cljs.core.seq_QMARK_.call(null,map__79432__79433))?cljs.core.apply.call(null,cljs.core.hash_map,map__79432__79433):map__79432__79433);
var info__79435 = cljs.core.get.call(null,map__79432__79434,"info");
var name__79436 = cljs.core.get.call(null,map__79432__79434,"name");

cljs.core.swap_BANG_.call(null,multi_jenk.client.main.servers,cljs.core.assoc,name__79436,info__79435);
jayq.core.append.call(null,multi_jenk.client.main.$jenkins,multi_jenk.client.main.render_server.call(null,name__79436,info__79435));
var temp__3698__auto____79437 = cljs.core.next.call(null,G__79428__79431);

if(cljs.core.truth_(temp__3698__auto____79437))
{var G__79428__79438 = temp__3698__auto____79437;

{
var G__79439 = cljs.core.first.call(null,G__79428__79438);
var G__79440 = G__79428__79438;
server__79430 = G__79439;
G__79428__79431 = G__79440;
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
multi_jenk.client.main.call_with_callback = (function call_with_callback(path,callback){
return goog.net.XhrIo.send(path,callback);
});
multi_jenk.client.main.go = (function go(){
return multi_jenk.client.main.call_with_callback.call(null,"api/servers",multi_jenk.client.main.got_servers);
});
multi_jenk.client.main.go.call(null);
