goog.provide('multi_jenk.client.main');
goog.require('cljs.core');
goog.require('jayq.core');
goog.require('crate.core');
goog.require('cljs.reader');
goog.require('goog.net.XhrIo');
multi_jenk.client.main.$jenkins = jayq.core.$.call(null,"\uFDD0'#jenkins");
multi_jenk.client.main.$body = jayq.core.$.call(null,"\uFDD0'body");
multi_jenk.client.main.callback = (function callback(reply){
var servers__104856 = cljs.core.js__GT_clj.call(null,reply.target.getResponseJson());

return jayq.core.append.call(null,multi_jenk.client.main.$jenkins,crate.core.html.call(null,cljs.core.PersistentVector.fromArray(["\uFDD0'p","name".call(null,cljs.core.get.call(null,servers__104856,0))])));
});
goog.net.XhrIo.send("/api/statuses",multi_jenk.client.main.callback);
