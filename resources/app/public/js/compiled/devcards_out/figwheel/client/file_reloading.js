// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25522__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25522__auto__){
return or__25522__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25522__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25522__auto__)){
return or__25522__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29545_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29545_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__29550 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__29551 = null;
var count__29552 = (0);
var i__29553 = (0);
while(true){
if((i__29553 < count__29552)){
var n = cljs.core._nth.call(null,chunk__29551,i__29553);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29554 = seq__29550;
var G__29555 = chunk__29551;
var G__29556 = count__29552;
var G__29557 = (i__29553 + (1));
seq__29550 = G__29554;
chunk__29551 = G__29555;
count__29552 = G__29556;
i__29553 = G__29557;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29550);
if(temp__4425__auto__){
var seq__29550__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29550__$1)){
var c__26325__auto__ = cljs.core.chunk_first.call(null,seq__29550__$1);
var G__29558 = cljs.core.chunk_rest.call(null,seq__29550__$1);
var G__29559 = c__26325__auto__;
var G__29560 = cljs.core.count.call(null,c__26325__auto__);
var G__29561 = (0);
seq__29550 = G__29558;
chunk__29551 = G__29559;
count__29552 = G__29560;
i__29553 = G__29561;
continue;
} else {
var n = cljs.core.first.call(null,seq__29550__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__29562 = cljs.core.next.call(null,seq__29550__$1);
var G__29563 = null;
var G__29564 = (0);
var G__29565 = (0);
seq__29550 = G__29562;
chunk__29551 = G__29563;
count__29552 = G__29564;
i__29553 = G__29565;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29604_29611 = cljs.core.seq.call(null,deps);
var chunk__29605_29612 = null;
var count__29606_29613 = (0);
var i__29607_29614 = (0);
while(true){
if((i__29607_29614 < count__29606_29613)){
var dep_29615 = cljs.core._nth.call(null,chunk__29605_29612,i__29607_29614);
topo_sort_helper_STAR_.call(null,dep_29615,(depth + (1)),state);

var G__29616 = seq__29604_29611;
var G__29617 = chunk__29605_29612;
var G__29618 = count__29606_29613;
var G__29619 = (i__29607_29614 + (1));
seq__29604_29611 = G__29616;
chunk__29605_29612 = G__29617;
count__29606_29613 = G__29618;
i__29607_29614 = G__29619;
continue;
} else {
var temp__4425__auto___29620 = cljs.core.seq.call(null,seq__29604_29611);
if(temp__4425__auto___29620){
var seq__29604_29621__$1 = temp__4425__auto___29620;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29604_29621__$1)){
var c__26325__auto___29622 = cljs.core.chunk_first.call(null,seq__29604_29621__$1);
var G__29623 = cljs.core.chunk_rest.call(null,seq__29604_29621__$1);
var G__29624 = c__26325__auto___29622;
var G__29625 = cljs.core.count.call(null,c__26325__auto___29622);
var G__29626 = (0);
seq__29604_29611 = G__29623;
chunk__29605_29612 = G__29624;
count__29606_29613 = G__29625;
i__29607_29614 = G__29626;
continue;
} else {
var dep_29627 = cljs.core.first.call(null,seq__29604_29621__$1);
topo_sort_helper_STAR_.call(null,dep_29627,(depth + (1)),state);

var G__29628 = cljs.core.next.call(null,seq__29604_29621__$1);
var G__29629 = null;
var G__29630 = (0);
var G__29631 = (0);
seq__29604_29611 = G__29628;
chunk__29605_29612 = G__29629;
count__29606_29613 = G__29630;
i__29607_29614 = G__29631;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29608){
var vec__29610 = p__29608;
var x = cljs.core.nth.call(null,vec__29610,(0),null);
var xs = cljs.core.nthnext.call(null,vec__29610,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__29610,x,xs,get_deps__$1){
return (function (p1__29566_SHARP_){
return clojure.set.difference.call(null,p1__29566_SHARP_,x);
});})(vec__29610,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29644 = cljs.core.seq.call(null,provides);
var chunk__29645 = null;
var count__29646 = (0);
var i__29647 = (0);
while(true){
if((i__29647 < count__29646)){
var prov = cljs.core._nth.call(null,chunk__29645,i__29647);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29648_29656 = cljs.core.seq.call(null,requires);
var chunk__29649_29657 = null;
var count__29650_29658 = (0);
var i__29651_29659 = (0);
while(true){
if((i__29651_29659 < count__29650_29658)){
var req_29660 = cljs.core._nth.call(null,chunk__29649_29657,i__29651_29659);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29660,prov);

var G__29661 = seq__29648_29656;
var G__29662 = chunk__29649_29657;
var G__29663 = count__29650_29658;
var G__29664 = (i__29651_29659 + (1));
seq__29648_29656 = G__29661;
chunk__29649_29657 = G__29662;
count__29650_29658 = G__29663;
i__29651_29659 = G__29664;
continue;
} else {
var temp__4425__auto___29665 = cljs.core.seq.call(null,seq__29648_29656);
if(temp__4425__auto___29665){
var seq__29648_29666__$1 = temp__4425__auto___29665;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29648_29666__$1)){
var c__26325__auto___29667 = cljs.core.chunk_first.call(null,seq__29648_29666__$1);
var G__29668 = cljs.core.chunk_rest.call(null,seq__29648_29666__$1);
var G__29669 = c__26325__auto___29667;
var G__29670 = cljs.core.count.call(null,c__26325__auto___29667);
var G__29671 = (0);
seq__29648_29656 = G__29668;
chunk__29649_29657 = G__29669;
count__29650_29658 = G__29670;
i__29651_29659 = G__29671;
continue;
} else {
var req_29672 = cljs.core.first.call(null,seq__29648_29666__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29672,prov);

var G__29673 = cljs.core.next.call(null,seq__29648_29666__$1);
var G__29674 = null;
var G__29675 = (0);
var G__29676 = (0);
seq__29648_29656 = G__29673;
chunk__29649_29657 = G__29674;
count__29650_29658 = G__29675;
i__29651_29659 = G__29676;
continue;
}
} else {
}
}
break;
}

var G__29677 = seq__29644;
var G__29678 = chunk__29645;
var G__29679 = count__29646;
var G__29680 = (i__29647 + (1));
seq__29644 = G__29677;
chunk__29645 = G__29678;
count__29646 = G__29679;
i__29647 = G__29680;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29644);
if(temp__4425__auto__){
var seq__29644__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29644__$1)){
var c__26325__auto__ = cljs.core.chunk_first.call(null,seq__29644__$1);
var G__29681 = cljs.core.chunk_rest.call(null,seq__29644__$1);
var G__29682 = c__26325__auto__;
var G__29683 = cljs.core.count.call(null,c__26325__auto__);
var G__29684 = (0);
seq__29644 = G__29681;
chunk__29645 = G__29682;
count__29646 = G__29683;
i__29647 = G__29684;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29644__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29652_29685 = cljs.core.seq.call(null,requires);
var chunk__29653_29686 = null;
var count__29654_29687 = (0);
var i__29655_29688 = (0);
while(true){
if((i__29655_29688 < count__29654_29687)){
var req_29689 = cljs.core._nth.call(null,chunk__29653_29686,i__29655_29688);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29689,prov);

var G__29690 = seq__29652_29685;
var G__29691 = chunk__29653_29686;
var G__29692 = count__29654_29687;
var G__29693 = (i__29655_29688 + (1));
seq__29652_29685 = G__29690;
chunk__29653_29686 = G__29691;
count__29654_29687 = G__29692;
i__29655_29688 = G__29693;
continue;
} else {
var temp__4425__auto___29694__$1 = cljs.core.seq.call(null,seq__29652_29685);
if(temp__4425__auto___29694__$1){
var seq__29652_29695__$1 = temp__4425__auto___29694__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29652_29695__$1)){
var c__26325__auto___29696 = cljs.core.chunk_first.call(null,seq__29652_29695__$1);
var G__29697 = cljs.core.chunk_rest.call(null,seq__29652_29695__$1);
var G__29698 = c__26325__auto___29696;
var G__29699 = cljs.core.count.call(null,c__26325__auto___29696);
var G__29700 = (0);
seq__29652_29685 = G__29697;
chunk__29653_29686 = G__29698;
count__29654_29687 = G__29699;
i__29655_29688 = G__29700;
continue;
} else {
var req_29701 = cljs.core.first.call(null,seq__29652_29695__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29701,prov);

var G__29702 = cljs.core.next.call(null,seq__29652_29695__$1);
var G__29703 = null;
var G__29704 = (0);
var G__29705 = (0);
seq__29652_29685 = G__29702;
chunk__29653_29686 = G__29703;
count__29654_29687 = G__29704;
i__29655_29688 = G__29705;
continue;
}
} else {
}
}
break;
}

var G__29706 = cljs.core.next.call(null,seq__29644__$1);
var G__29707 = null;
var G__29708 = (0);
var G__29709 = (0);
seq__29644 = G__29706;
chunk__29645 = G__29707;
count__29646 = G__29708;
i__29647 = G__29709;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29714_29718 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29715_29719 = null;
var count__29716_29720 = (0);
var i__29717_29721 = (0);
while(true){
if((i__29717_29721 < count__29716_29720)){
var ns_29722 = cljs.core._nth.call(null,chunk__29715_29719,i__29717_29721);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29722);

var G__29723 = seq__29714_29718;
var G__29724 = chunk__29715_29719;
var G__29725 = count__29716_29720;
var G__29726 = (i__29717_29721 + (1));
seq__29714_29718 = G__29723;
chunk__29715_29719 = G__29724;
count__29716_29720 = G__29725;
i__29717_29721 = G__29726;
continue;
} else {
var temp__4425__auto___29727 = cljs.core.seq.call(null,seq__29714_29718);
if(temp__4425__auto___29727){
var seq__29714_29728__$1 = temp__4425__auto___29727;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29714_29728__$1)){
var c__26325__auto___29729 = cljs.core.chunk_first.call(null,seq__29714_29728__$1);
var G__29730 = cljs.core.chunk_rest.call(null,seq__29714_29728__$1);
var G__29731 = c__26325__auto___29729;
var G__29732 = cljs.core.count.call(null,c__26325__auto___29729);
var G__29733 = (0);
seq__29714_29718 = G__29730;
chunk__29715_29719 = G__29731;
count__29716_29720 = G__29732;
i__29717_29721 = G__29733;
continue;
} else {
var ns_29734 = cljs.core.first.call(null,seq__29714_29728__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29734);

var G__29735 = cljs.core.next.call(null,seq__29714_29728__$1);
var G__29736 = null;
var G__29737 = (0);
var G__29738 = (0);
seq__29714_29718 = G__29735;
chunk__29715_29719 = G__29736;
count__29716_29720 = G__29737;
i__29717_29721 = G__29738;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25522__auto__ = goog.require__;
if(cljs.core.truth_(or__25522__auto__)){
return or__25522__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__29739__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29739 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29740__i = 0, G__29740__a = new Array(arguments.length -  0);
while (G__29740__i < G__29740__a.length) {G__29740__a[G__29740__i] = arguments[G__29740__i + 0]; ++G__29740__i;}
  args = new cljs.core.IndexedSeq(G__29740__a,0);
} 
return G__29739__delegate.call(this,args);};
G__29739.cljs$lang$maxFixedArity = 0;
G__29739.cljs$lang$applyTo = (function (arglist__29741){
var args = cljs.core.seq(arglist__29741);
return G__29739__delegate(args);
});
G__29739.cljs$core$IFn$_invoke$arity$variadic = G__29739__delegate;
return G__29739;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29743 = cljs.core._EQ_;
var expr__29744 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29743.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29744))){
var path_parts = ((function (pred__29743,expr__29744){
return (function (p1__29742_SHARP_){
return clojure.string.split.call(null,p1__29742_SHARP_,/[\/\\]/);
});})(pred__29743,expr__29744))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__29743,expr__29744){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29746){if((e29746 instanceof Error)){
var e = e29746;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29746;

}
}})());
});
;})(path_parts,sep,root,pred__29743,expr__29744))
} else {
if(cljs.core.truth_(pred__29743.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29744))){
return ((function (pred__29743,expr__29744){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__29743,expr__29744){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__29743,expr__29744))
);

return deferred.addErrback(((function (deferred,pred__29743,expr__29744){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__29743,expr__29744))
);
});
;})(pred__29743,expr__29744))
} else {
return ((function (pred__29743,expr__29744){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__29743,expr__29744))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29747,callback){
var map__29750 = p__29747;
var map__29750__$1 = ((((!((map__29750 == null)))?((((map__29750.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29750.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29750):map__29750);
var file_msg = map__29750__$1;
var request_url = cljs.core.get.call(null,map__29750__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__29750,map__29750__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__29750,map__29750__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28091__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28091__auto__){
return (function (){
var f__28092__auto__ = (function (){var switch__28070__auto__ = ((function (c__28091__auto__){
return (function (state_29774){
var state_val_29775 = (state_29774[(1)]);
if((state_val_29775 === (7))){
var inst_29770 = (state_29774[(2)]);
var state_29774__$1 = state_29774;
var statearr_29776_29796 = state_29774__$1;
(statearr_29776_29796[(2)] = inst_29770);

(statearr_29776_29796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (1))){
var state_29774__$1 = state_29774;
var statearr_29777_29797 = state_29774__$1;
(statearr_29777_29797[(2)] = null);

(statearr_29777_29797[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (4))){
var inst_29754 = (state_29774[(7)]);
var inst_29754__$1 = (state_29774[(2)]);
var state_29774__$1 = (function (){var statearr_29778 = state_29774;
(statearr_29778[(7)] = inst_29754__$1);

return statearr_29778;
})();
if(cljs.core.truth_(inst_29754__$1)){
var statearr_29779_29798 = state_29774__$1;
(statearr_29779_29798[(1)] = (5));

} else {
var statearr_29780_29799 = state_29774__$1;
(statearr_29780_29799[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (6))){
var state_29774__$1 = state_29774;
var statearr_29781_29800 = state_29774__$1;
(statearr_29781_29800[(2)] = null);

(statearr_29781_29800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (3))){
var inst_29772 = (state_29774[(2)]);
var state_29774__$1 = state_29774;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29774__$1,inst_29772);
} else {
if((state_val_29775 === (2))){
var state_29774__$1 = state_29774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29774__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29775 === (11))){
var inst_29766 = (state_29774[(2)]);
var state_29774__$1 = (function (){var statearr_29782 = state_29774;
(statearr_29782[(8)] = inst_29766);

return statearr_29782;
})();
var statearr_29783_29801 = state_29774__$1;
(statearr_29783_29801[(2)] = null);

(statearr_29783_29801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (9))){
var inst_29758 = (state_29774[(9)]);
var inst_29760 = (state_29774[(10)]);
var inst_29762 = inst_29760.call(null,inst_29758);
var state_29774__$1 = state_29774;
var statearr_29784_29802 = state_29774__$1;
(statearr_29784_29802[(2)] = inst_29762);

(statearr_29784_29802[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (5))){
var inst_29754 = (state_29774[(7)]);
var inst_29756 = figwheel.client.file_reloading.blocking_load.call(null,inst_29754);
var state_29774__$1 = state_29774;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29774__$1,(8),inst_29756);
} else {
if((state_val_29775 === (10))){
var inst_29758 = (state_29774[(9)]);
var inst_29764 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29758);
var state_29774__$1 = state_29774;
var statearr_29785_29803 = state_29774__$1;
(statearr_29785_29803[(2)] = inst_29764);

(statearr_29785_29803[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29775 === (8))){
var inst_29760 = (state_29774[(10)]);
var inst_29754 = (state_29774[(7)]);
var inst_29758 = (state_29774[(2)]);
var inst_29759 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29760__$1 = cljs.core.get.call(null,inst_29759,inst_29754);
var state_29774__$1 = (function (){var statearr_29786 = state_29774;
(statearr_29786[(9)] = inst_29758);

(statearr_29786[(10)] = inst_29760__$1);

return statearr_29786;
})();
if(cljs.core.truth_(inst_29760__$1)){
var statearr_29787_29804 = state_29774__$1;
(statearr_29787_29804[(1)] = (9));

} else {
var statearr_29788_29805 = state_29774__$1;
(statearr_29788_29805[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28091__auto__))
;
return ((function (switch__28070__auto__,c__28091__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28071__auto__ = null;
var figwheel$client$file_reloading$state_machine__28071__auto____0 = (function (){
var statearr_29792 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29792[(0)] = figwheel$client$file_reloading$state_machine__28071__auto__);

(statearr_29792[(1)] = (1));

return statearr_29792;
});
var figwheel$client$file_reloading$state_machine__28071__auto____1 = (function (state_29774){
while(true){
var ret_value__28072__auto__ = (function (){try{while(true){
var result__28073__auto__ = switch__28070__auto__.call(null,state_29774);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28073__auto__;
}
break;
}
}catch (e29793){if((e29793 instanceof Object)){
var ex__28074__auto__ = e29793;
var statearr_29794_29806 = state_29774;
(statearr_29794_29806[(5)] = ex__28074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29774);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29793;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29807 = state_29774;
state_29774 = G__29807;
continue;
} else {
return ret_value__28072__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28071__auto__ = function(state_29774){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28071__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28071__auto____1.call(this,state_29774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28071__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28071__auto____0;
figwheel$client$file_reloading$state_machine__28071__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28071__auto____1;
return figwheel$client$file_reloading$state_machine__28071__auto__;
})()
;})(switch__28070__auto__,c__28091__auto__))
})();
var state__28093__auto__ = (function (){var statearr_29795 = f__28092__auto__.call(null);
(statearr_29795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28091__auto__);

return statearr_29795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28093__auto__);
});})(c__28091__auto__))
);

return c__28091__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29808,callback){
var map__29811 = p__29808;
var map__29811__$1 = ((((!((map__29811 == null)))?((((map__29811.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29811.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29811):map__29811);
var file_msg = map__29811__$1;
var namespace = cljs.core.get.call(null,map__29811__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__29811,map__29811__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__29811,map__29811__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29813){
var map__29816 = p__29813;
var map__29816__$1 = ((((!((map__29816 == null)))?((((map__29816.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29816.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29816):map__29816);
var file_msg = map__29816__$1;
var namespace = cljs.core.get.call(null,map__29816__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25510__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__25510__auto__){
var or__25522__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25522__auto__)){
return or__25522__auto__;
} else {
var or__25522__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25522__auto____$1)){
return or__25522__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25510__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29818,callback){
var map__29821 = p__29818;
var map__29821__$1 = ((((!((map__29821 == null)))?((((map__29821.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29821.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29821):map__29821);
var file_msg = map__29821__$1;
var request_url = cljs.core.get.call(null,map__29821__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29821__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28091__auto___29909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28091__auto___29909,out){
return (function (){
var f__28092__auto__ = (function (){var switch__28070__auto__ = ((function (c__28091__auto___29909,out){
return (function (state_29891){
var state_val_29892 = (state_29891[(1)]);
if((state_val_29892 === (1))){
var inst_29869 = cljs.core.nth.call(null,files,(0),null);
var inst_29870 = cljs.core.nthnext.call(null,files,(1));
var inst_29871 = files;
var state_29891__$1 = (function (){var statearr_29893 = state_29891;
(statearr_29893[(7)] = inst_29870);

(statearr_29893[(8)] = inst_29869);

(statearr_29893[(9)] = inst_29871);

return statearr_29893;
})();
var statearr_29894_29910 = state_29891__$1;
(statearr_29894_29910[(2)] = null);

(statearr_29894_29910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (2))){
var inst_29874 = (state_29891[(10)]);
var inst_29871 = (state_29891[(9)]);
var inst_29874__$1 = cljs.core.nth.call(null,inst_29871,(0),null);
var inst_29875 = cljs.core.nthnext.call(null,inst_29871,(1));
var inst_29876 = (inst_29874__$1 == null);
var inst_29877 = cljs.core.not.call(null,inst_29876);
var state_29891__$1 = (function (){var statearr_29895 = state_29891;
(statearr_29895[(11)] = inst_29875);

(statearr_29895[(10)] = inst_29874__$1);

return statearr_29895;
})();
if(inst_29877){
var statearr_29896_29911 = state_29891__$1;
(statearr_29896_29911[(1)] = (4));

} else {
var statearr_29897_29912 = state_29891__$1;
(statearr_29897_29912[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (3))){
var inst_29889 = (state_29891[(2)]);
var state_29891__$1 = state_29891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29891__$1,inst_29889);
} else {
if((state_val_29892 === (4))){
var inst_29874 = (state_29891[(10)]);
var inst_29879 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29874);
var state_29891__$1 = state_29891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29891__$1,(7),inst_29879);
} else {
if((state_val_29892 === (5))){
var inst_29885 = cljs.core.async.close_BANG_.call(null,out);
var state_29891__$1 = state_29891;
var statearr_29898_29913 = state_29891__$1;
(statearr_29898_29913[(2)] = inst_29885);

(statearr_29898_29913[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (6))){
var inst_29887 = (state_29891[(2)]);
var state_29891__$1 = state_29891;
var statearr_29899_29914 = state_29891__$1;
(statearr_29899_29914[(2)] = inst_29887);

(statearr_29899_29914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29892 === (7))){
var inst_29875 = (state_29891[(11)]);
var inst_29881 = (state_29891[(2)]);
var inst_29882 = cljs.core.async.put_BANG_.call(null,out,inst_29881);
var inst_29871 = inst_29875;
var state_29891__$1 = (function (){var statearr_29900 = state_29891;
(statearr_29900[(9)] = inst_29871);

(statearr_29900[(12)] = inst_29882);

return statearr_29900;
})();
var statearr_29901_29915 = state_29891__$1;
(statearr_29901_29915[(2)] = null);

(statearr_29901_29915[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28091__auto___29909,out))
;
return ((function (switch__28070__auto__,c__28091__auto___29909,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28071__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28071__auto____0 = (function (){
var statearr_29905 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29905[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28071__auto__);

(statearr_29905[(1)] = (1));

return statearr_29905;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28071__auto____1 = (function (state_29891){
while(true){
var ret_value__28072__auto__ = (function (){try{while(true){
var result__28073__auto__ = switch__28070__auto__.call(null,state_29891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28073__auto__;
}
break;
}
}catch (e29906){if((e29906 instanceof Object)){
var ex__28074__auto__ = e29906;
var statearr_29907_29916 = state_29891;
(statearr_29907_29916[(5)] = ex__28074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29906;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29917 = state_29891;
state_29891 = G__29917;
continue;
} else {
return ret_value__28072__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28071__auto__ = function(state_29891){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28071__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28071__auto____1.call(this,state_29891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28071__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28071__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28071__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28071__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28071__auto__;
})()
;})(switch__28070__auto__,c__28091__auto___29909,out))
})();
var state__28093__auto__ = (function (){var statearr_29908 = f__28092__auto__.call(null);
(statearr_29908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28091__auto___29909);

return statearr_29908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28093__auto__);
});})(c__28091__auto___29909,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29918,opts){
var map__29922 = p__29918;
var map__29922__$1 = ((((!((map__29922 == null)))?((((map__29922.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29922.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29922):map__29922);
var eval_body__$1 = cljs.core.get.call(null,map__29922__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29922__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25510__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25510__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25510__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29924){var e = e29924;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__29925_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29925_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29930){
var vec__29931 = p__29930;
var k = cljs.core.nth.call(null,vec__29931,(0),null);
var v = cljs.core.nth.call(null,vec__29931,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29932){
var vec__29933 = p__29932;
var k = cljs.core.nth.call(null,vec__29933,(0),null);
var v = cljs.core.nth.call(null,vec__29933,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29937,p__29938){
var map__30185 = p__29937;
var map__30185__$1 = ((((!((map__30185 == null)))?((((map__30185.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30185.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30185):map__30185);
var opts = map__30185__$1;
var before_jsload = cljs.core.get.call(null,map__30185__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30185__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30185__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30186 = p__29938;
var map__30186__$1 = ((((!((map__30186 == null)))?((((map__30186.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30186.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30186):map__30186);
var msg = map__30186__$1;
var files = cljs.core.get.call(null,map__30186__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30186__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30186__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28091__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28091__auto__,map__30185,map__30185__$1,opts,before_jsload,on_jsload,reload_dependents,map__30186,map__30186__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28092__auto__ = (function (){var switch__28070__auto__ = ((function (c__28091__auto__,map__30185,map__30185__$1,opts,before_jsload,on_jsload,reload_dependents,map__30186,map__30186__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_30339){
var state_val_30340 = (state_30339[(1)]);
if((state_val_30340 === (7))){
var inst_30201 = (state_30339[(7)]);
var inst_30200 = (state_30339[(8)]);
var inst_30202 = (state_30339[(9)]);
var inst_30203 = (state_30339[(10)]);
var inst_30208 = cljs.core._nth.call(null,inst_30201,inst_30203);
var inst_30209 = figwheel.client.file_reloading.eval_body.call(null,inst_30208,opts);
var inst_30210 = (inst_30203 + (1));
var tmp30341 = inst_30201;
var tmp30342 = inst_30200;
var tmp30343 = inst_30202;
var inst_30200__$1 = tmp30342;
var inst_30201__$1 = tmp30341;
var inst_30202__$1 = tmp30343;
var inst_30203__$1 = inst_30210;
var state_30339__$1 = (function (){var statearr_30344 = state_30339;
(statearr_30344[(11)] = inst_30209);

(statearr_30344[(7)] = inst_30201__$1);

(statearr_30344[(8)] = inst_30200__$1);

(statearr_30344[(9)] = inst_30202__$1);

(statearr_30344[(10)] = inst_30203__$1);

return statearr_30344;
})();
var statearr_30345_30431 = state_30339__$1;
(statearr_30345_30431[(2)] = null);

(statearr_30345_30431[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (20))){
var inst_30243 = (state_30339[(12)]);
var inst_30251 = figwheel.client.file_reloading.sort_files.call(null,inst_30243);
var state_30339__$1 = state_30339;
var statearr_30346_30432 = state_30339__$1;
(statearr_30346_30432[(2)] = inst_30251);

(statearr_30346_30432[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (27))){
var state_30339__$1 = state_30339;
var statearr_30347_30433 = state_30339__$1;
(statearr_30347_30433[(2)] = null);

(statearr_30347_30433[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (1))){
var inst_30192 = (state_30339[(13)]);
var inst_30189 = before_jsload.call(null,files);
var inst_30190 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30191 = (function (){return ((function (inst_30192,inst_30189,inst_30190,state_val_30340,c__28091__auto__,map__30185,map__30185__$1,opts,before_jsload,on_jsload,reload_dependents,map__30186,map__30186__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29934_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29934_SHARP_);
});
;})(inst_30192,inst_30189,inst_30190,state_val_30340,c__28091__auto__,map__30185,map__30185__$1,opts,before_jsload,on_jsload,reload_dependents,map__30186,map__30186__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30192__$1 = cljs.core.filter.call(null,inst_30191,files);
var inst_30193 = cljs.core.not_empty.call(null,inst_30192__$1);
var state_30339__$1 = (function (){var statearr_30348 = state_30339;
(statearr_30348[(13)] = inst_30192__$1);

(statearr_30348[(14)] = inst_30190);

(statearr_30348[(15)] = inst_30189);

return statearr_30348;
})();
if(cljs.core.truth_(inst_30193)){
var statearr_30349_30434 = state_30339__$1;
(statearr_30349_30434[(1)] = (2));

} else {
var statearr_30350_30435 = state_30339__$1;
(statearr_30350_30435[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (24))){
var state_30339__$1 = state_30339;
var statearr_30351_30436 = state_30339__$1;
(statearr_30351_30436[(2)] = null);

(statearr_30351_30436[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (39))){
var inst_30293 = (state_30339[(16)]);
var state_30339__$1 = state_30339;
var statearr_30352_30437 = state_30339__$1;
(statearr_30352_30437[(2)] = inst_30293);

(statearr_30352_30437[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (46))){
var inst_30334 = (state_30339[(2)]);
var state_30339__$1 = state_30339;
var statearr_30353_30438 = state_30339__$1;
(statearr_30353_30438[(2)] = inst_30334);

(statearr_30353_30438[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (4))){
var inst_30237 = (state_30339[(2)]);
var inst_30238 = cljs.core.List.EMPTY;
var inst_30239 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_30238);
var inst_30240 = (function (){return ((function (inst_30237,inst_30238,inst_30239,state_val_30340,c__28091__auto__,map__30185,map__30185__$1,opts,before_jsload,on_jsload,reload_dependents,map__30186,map__30186__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29935_SHARP_){
var and__25510__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29935_SHARP_);
if(cljs.core.truth_(and__25510__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29935_SHARP_));
} else {
return and__25510__auto__;
}
});
;})(inst_30237,inst_30238,inst_30239,state_val_30340,c__28091__auto__,map__30185,map__30185__$1,opts,before_jsload,on_jsload,reload_dependents,map__30186,map__30186__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30241 = cljs.core.filter.call(null,inst_30240,files);
var inst_30242 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_30243 = cljs.core.concat.call(null,inst_30241,inst_30242);
var state_30339__$1 = (function (){var statearr_30354 = state_30339;
(statearr_30354[(12)] = inst_30243);

(statearr_30354[(17)] = inst_30239);

(statearr_30354[(18)] = inst_30237);

return statearr_30354;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30355_30439 = state_30339__$1;
(statearr_30355_30439[(1)] = (16));

} else {
var statearr_30356_30440 = state_30339__$1;
(statearr_30356_30440[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (15))){
var inst_30227 = (state_30339[(2)]);
var state_30339__$1 = state_30339;
var statearr_30357_30441 = state_30339__$1;
(statearr_30357_30441[(2)] = inst_30227);

(statearr_30357_30441[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (21))){
var inst_30253 = (state_30339[(19)]);
var inst_30253__$1 = (state_30339[(2)]);
var inst_30254 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_30253__$1);
var state_30339__$1 = (function (){var statearr_30358 = state_30339;
(statearr_30358[(19)] = inst_30253__$1);

return statearr_30358;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30339__$1,(22),inst_30254);
} else {
if((state_val_30340 === (31))){
var inst_30337 = (state_30339[(2)]);
var state_30339__$1 = state_30339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30339__$1,inst_30337);
} else {
if((state_val_30340 === (32))){
var inst_30293 = (state_30339[(16)]);
var inst_30298 = inst_30293.cljs$lang$protocol_mask$partition0$;
var inst_30299 = (inst_30298 & (64));
var inst_30300 = inst_30293.cljs$core$ISeq$;
var inst_30301 = (inst_30299) || (inst_30300);
var state_30339__$1 = state_30339;
if(cljs.core.truth_(inst_30301)){
var statearr_30359_30442 = state_30339__$1;
(statearr_30359_30442[(1)] = (35));

} else {
var statearr_30360_30443 = state_30339__$1;
(statearr_30360_30443[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (40))){
var inst_30314 = (state_30339[(20)]);
var inst_30313 = (state_30339[(2)]);
var inst_30314__$1 = cljs.core.get.call(null,inst_30313,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30315 = cljs.core.get.call(null,inst_30313,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30316 = cljs.core.not_empty.call(null,inst_30314__$1);
var state_30339__$1 = (function (){var statearr_30361 = state_30339;
(statearr_30361[(20)] = inst_30314__$1);

(statearr_30361[(21)] = inst_30315);

return statearr_30361;
})();
if(cljs.core.truth_(inst_30316)){
var statearr_30362_30444 = state_30339__$1;
(statearr_30362_30444[(1)] = (41));

} else {
var statearr_30363_30445 = state_30339__$1;
(statearr_30363_30445[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (33))){
var state_30339__$1 = state_30339;
var statearr_30364_30446 = state_30339__$1;
(statearr_30364_30446[(2)] = false);

(statearr_30364_30446[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (13))){
var inst_30213 = (state_30339[(22)]);
var inst_30217 = cljs.core.chunk_first.call(null,inst_30213);
var inst_30218 = cljs.core.chunk_rest.call(null,inst_30213);
var inst_30219 = cljs.core.count.call(null,inst_30217);
var inst_30200 = inst_30218;
var inst_30201 = inst_30217;
var inst_30202 = inst_30219;
var inst_30203 = (0);
var state_30339__$1 = (function (){var statearr_30365 = state_30339;
(statearr_30365[(7)] = inst_30201);

(statearr_30365[(8)] = inst_30200);

(statearr_30365[(9)] = inst_30202);

(statearr_30365[(10)] = inst_30203);

return statearr_30365;
})();
var statearr_30366_30447 = state_30339__$1;
(statearr_30366_30447[(2)] = null);

(statearr_30366_30447[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (22))){
var inst_30253 = (state_30339[(19)]);
var inst_30256 = (state_30339[(23)]);
var inst_30257 = (state_30339[(24)]);
var inst_30261 = (state_30339[(25)]);
var inst_30256__$1 = (state_30339[(2)]);
var inst_30257__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30256__$1);
var inst_30258 = (function (){var all_files = inst_30253;
var res_SINGLEQUOTE_ = inst_30256__$1;
var res = inst_30257__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_30253,inst_30256,inst_30257,inst_30261,inst_30256__$1,inst_30257__$1,state_val_30340,c__28091__auto__,map__30185,map__30185__$1,opts,before_jsload,on_jsload,reload_dependents,map__30186,map__30186__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__29936_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29936_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_30253,inst_30256,inst_30257,inst_30261,inst_30256__$1,inst_30257__$1,state_val_30340,c__28091__auto__,map__30185,map__30185__$1,opts,before_jsload,on_jsload,reload_dependents,map__30186,map__30186__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30259 = cljs.core.filter.call(null,inst_30258,inst_30256__$1);
var inst_30260 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_30261__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_30260);
var inst_30262 = cljs.core.not_empty.call(null,inst_30261__$1);
var state_30339__$1 = (function (){var statearr_30367 = state_30339;
(statearr_30367[(26)] = inst_30259);

(statearr_30367[(23)] = inst_30256__$1);

(statearr_30367[(24)] = inst_30257__$1);

(statearr_30367[(25)] = inst_30261__$1);

return statearr_30367;
})();
if(cljs.core.truth_(inst_30262)){
var statearr_30368_30448 = state_30339__$1;
(statearr_30368_30448[(1)] = (23));

} else {
var statearr_30369_30449 = state_30339__$1;
(statearr_30369_30449[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (36))){
var state_30339__$1 = state_30339;
var statearr_30370_30450 = state_30339__$1;
(statearr_30370_30450[(2)] = false);

(statearr_30370_30450[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (41))){
var inst_30314 = (state_30339[(20)]);
var inst_30318 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30319 = cljs.core.map.call(null,inst_30318,inst_30314);
var inst_30320 = cljs.core.pr_str.call(null,inst_30319);
var inst_30321 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_30320)].join('');
var inst_30322 = figwheel.client.utils.log.call(null,inst_30321);
var state_30339__$1 = state_30339;
var statearr_30371_30451 = state_30339__$1;
(statearr_30371_30451[(2)] = inst_30322);

(statearr_30371_30451[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (43))){
var inst_30315 = (state_30339[(21)]);
var inst_30325 = (state_30339[(2)]);
var inst_30326 = cljs.core.not_empty.call(null,inst_30315);
var state_30339__$1 = (function (){var statearr_30372 = state_30339;
(statearr_30372[(27)] = inst_30325);

return statearr_30372;
})();
if(cljs.core.truth_(inst_30326)){
var statearr_30373_30452 = state_30339__$1;
(statearr_30373_30452[(1)] = (44));

} else {
var statearr_30374_30453 = state_30339__$1;
(statearr_30374_30453[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (29))){
var inst_30293 = (state_30339[(16)]);
var inst_30253 = (state_30339[(19)]);
var inst_30259 = (state_30339[(26)]);
var inst_30256 = (state_30339[(23)]);
var inst_30257 = (state_30339[(24)]);
var inst_30261 = (state_30339[(25)]);
var inst_30289 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_30292 = (function (){var all_files = inst_30253;
var res_SINGLEQUOTE_ = inst_30256;
var res = inst_30257;
var files_not_loaded = inst_30259;
var dependencies_that_loaded = inst_30261;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30293,inst_30253,inst_30259,inst_30256,inst_30257,inst_30261,inst_30289,state_val_30340,c__28091__auto__,map__30185,map__30185__$1,opts,before_jsload,on_jsload,reload_dependents,map__30186,map__30186__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30291){
var map__30375 = p__30291;
var map__30375__$1 = ((((!((map__30375 == null)))?((((map__30375.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30375.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30375):map__30375);
var namespace = cljs.core.get.call(null,map__30375__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30293,inst_30253,inst_30259,inst_30256,inst_30257,inst_30261,inst_30289,state_val_30340,c__28091__auto__,map__30185,map__30185__$1,opts,before_jsload,on_jsload,reload_dependents,map__30186,map__30186__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30293__$1 = cljs.core.group_by.call(null,inst_30292,inst_30259);
var inst_30295 = (inst_30293__$1 == null);
var inst_30296 = cljs.core.not.call(null,inst_30295);
var state_30339__$1 = (function (){var statearr_30377 = state_30339;
(statearr_30377[(16)] = inst_30293__$1);

(statearr_30377[(28)] = inst_30289);

return statearr_30377;
})();
if(inst_30296){
var statearr_30378_30454 = state_30339__$1;
(statearr_30378_30454[(1)] = (32));

} else {
var statearr_30379_30455 = state_30339__$1;
(statearr_30379_30455[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (44))){
var inst_30315 = (state_30339[(21)]);
var inst_30328 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30315);
var inst_30329 = cljs.core.pr_str.call(null,inst_30328);
var inst_30330 = [cljs.core.str("not required: "),cljs.core.str(inst_30329)].join('');
var inst_30331 = figwheel.client.utils.log.call(null,inst_30330);
var state_30339__$1 = state_30339;
var statearr_30380_30456 = state_30339__$1;
(statearr_30380_30456[(2)] = inst_30331);

(statearr_30380_30456[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (6))){
var inst_30234 = (state_30339[(2)]);
var state_30339__$1 = state_30339;
var statearr_30381_30457 = state_30339__$1;
(statearr_30381_30457[(2)] = inst_30234);

(statearr_30381_30457[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (28))){
var inst_30259 = (state_30339[(26)]);
var inst_30286 = (state_30339[(2)]);
var inst_30287 = cljs.core.not_empty.call(null,inst_30259);
var state_30339__$1 = (function (){var statearr_30382 = state_30339;
(statearr_30382[(29)] = inst_30286);

return statearr_30382;
})();
if(cljs.core.truth_(inst_30287)){
var statearr_30383_30458 = state_30339__$1;
(statearr_30383_30458[(1)] = (29));

} else {
var statearr_30384_30459 = state_30339__$1;
(statearr_30384_30459[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (25))){
var inst_30257 = (state_30339[(24)]);
var inst_30273 = (state_30339[(2)]);
var inst_30274 = cljs.core.not_empty.call(null,inst_30257);
var state_30339__$1 = (function (){var statearr_30385 = state_30339;
(statearr_30385[(30)] = inst_30273);

return statearr_30385;
})();
if(cljs.core.truth_(inst_30274)){
var statearr_30386_30460 = state_30339__$1;
(statearr_30386_30460[(1)] = (26));

} else {
var statearr_30387_30461 = state_30339__$1;
(statearr_30387_30461[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (34))){
var inst_30308 = (state_30339[(2)]);
var state_30339__$1 = state_30339;
if(cljs.core.truth_(inst_30308)){
var statearr_30388_30462 = state_30339__$1;
(statearr_30388_30462[(1)] = (38));

} else {
var statearr_30389_30463 = state_30339__$1;
(statearr_30389_30463[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (17))){
var state_30339__$1 = state_30339;
var statearr_30390_30464 = state_30339__$1;
(statearr_30390_30464[(2)] = recompile_dependents);

(statearr_30390_30464[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (3))){
var state_30339__$1 = state_30339;
var statearr_30391_30465 = state_30339__$1;
(statearr_30391_30465[(2)] = null);

(statearr_30391_30465[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (12))){
var inst_30230 = (state_30339[(2)]);
var state_30339__$1 = state_30339;
var statearr_30392_30466 = state_30339__$1;
(statearr_30392_30466[(2)] = inst_30230);

(statearr_30392_30466[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (2))){
var inst_30192 = (state_30339[(13)]);
var inst_30199 = cljs.core.seq.call(null,inst_30192);
var inst_30200 = inst_30199;
var inst_30201 = null;
var inst_30202 = (0);
var inst_30203 = (0);
var state_30339__$1 = (function (){var statearr_30393 = state_30339;
(statearr_30393[(7)] = inst_30201);

(statearr_30393[(8)] = inst_30200);

(statearr_30393[(9)] = inst_30202);

(statearr_30393[(10)] = inst_30203);

return statearr_30393;
})();
var statearr_30394_30467 = state_30339__$1;
(statearr_30394_30467[(2)] = null);

(statearr_30394_30467[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (23))){
var inst_30253 = (state_30339[(19)]);
var inst_30259 = (state_30339[(26)]);
var inst_30256 = (state_30339[(23)]);
var inst_30257 = (state_30339[(24)]);
var inst_30261 = (state_30339[(25)]);
var inst_30264 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_30266 = (function (){var all_files = inst_30253;
var res_SINGLEQUOTE_ = inst_30256;
var res = inst_30257;
var files_not_loaded = inst_30259;
var dependencies_that_loaded = inst_30261;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30253,inst_30259,inst_30256,inst_30257,inst_30261,inst_30264,state_val_30340,c__28091__auto__,map__30185,map__30185__$1,opts,before_jsload,on_jsload,reload_dependents,map__30186,map__30186__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30265){
var map__30395 = p__30265;
var map__30395__$1 = ((((!((map__30395 == null)))?((((map__30395.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30395.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30395):map__30395);
var request_url = cljs.core.get.call(null,map__30395__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30253,inst_30259,inst_30256,inst_30257,inst_30261,inst_30264,state_val_30340,c__28091__auto__,map__30185,map__30185__$1,opts,before_jsload,on_jsload,reload_dependents,map__30186,map__30186__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30267 = cljs.core.reverse.call(null,inst_30261);
var inst_30268 = cljs.core.map.call(null,inst_30266,inst_30267);
var inst_30269 = cljs.core.pr_str.call(null,inst_30268);
var inst_30270 = figwheel.client.utils.log.call(null,inst_30269);
var state_30339__$1 = (function (){var statearr_30397 = state_30339;
(statearr_30397[(31)] = inst_30264);

return statearr_30397;
})();
var statearr_30398_30468 = state_30339__$1;
(statearr_30398_30468[(2)] = inst_30270);

(statearr_30398_30468[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (35))){
var state_30339__$1 = state_30339;
var statearr_30399_30469 = state_30339__$1;
(statearr_30399_30469[(2)] = true);

(statearr_30399_30469[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (19))){
var inst_30243 = (state_30339[(12)]);
var inst_30249 = figwheel.client.file_reloading.expand_files.call(null,inst_30243);
var state_30339__$1 = state_30339;
var statearr_30400_30470 = state_30339__$1;
(statearr_30400_30470[(2)] = inst_30249);

(statearr_30400_30470[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (11))){
var state_30339__$1 = state_30339;
var statearr_30401_30471 = state_30339__$1;
(statearr_30401_30471[(2)] = null);

(statearr_30401_30471[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (9))){
var inst_30232 = (state_30339[(2)]);
var state_30339__$1 = state_30339;
var statearr_30402_30472 = state_30339__$1;
(statearr_30402_30472[(2)] = inst_30232);

(statearr_30402_30472[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (5))){
var inst_30202 = (state_30339[(9)]);
var inst_30203 = (state_30339[(10)]);
var inst_30205 = (inst_30203 < inst_30202);
var inst_30206 = inst_30205;
var state_30339__$1 = state_30339;
if(cljs.core.truth_(inst_30206)){
var statearr_30403_30473 = state_30339__$1;
(statearr_30403_30473[(1)] = (7));

} else {
var statearr_30404_30474 = state_30339__$1;
(statearr_30404_30474[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (14))){
var inst_30213 = (state_30339[(22)]);
var inst_30222 = cljs.core.first.call(null,inst_30213);
var inst_30223 = figwheel.client.file_reloading.eval_body.call(null,inst_30222,opts);
var inst_30224 = cljs.core.next.call(null,inst_30213);
var inst_30200 = inst_30224;
var inst_30201 = null;
var inst_30202 = (0);
var inst_30203 = (0);
var state_30339__$1 = (function (){var statearr_30405 = state_30339;
(statearr_30405[(7)] = inst_30201);

(statearr_30405[(8)] = inst_30200);

(statearr_30405[(9)] = inst_30202);

(statearr_30405[(32)] = inst_30223);

(statearr_30405[(10)] = inst_30203);

return statearr_30405;
})();
var statearr_30406_30475 = state_30339__$1;
(statearr_30406_30475[(2)] = null);

(statearr_30406_30475[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (45))){
var state_30339__$1 = state_30339;
var statearr_30407_30476 = state_30339__$1;
(statearr_30407_30476[(2)] = null);

(statearr_30407_30476[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (26))){
var inst_30253 = (state_30339[(19)]);
var inst_30259 = (state_30339[(26)]);
var inst_30256 = (state_30339[(23)]);
var inst_30257 = (state_30339[(24)]);
var inst_30261 = (state_30339[(25)]);
var inst_30276 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_30278 = (function (){var all_files = inst_30253;
var res_SINGLEQUOTE_ = inst_30256;
var res = inst_30257;
var files_not_loaded = inst_30259;
var dependencies_that_loaded = inst_30261;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30253,inst_30259,inst_30256,inst_30257,inst_30261,inst_30276,state_val_30340,c__28091__auto__,map__30185,map__30185__$1,opts,before_jsload,on_jsload,reload_dependents,map__30186,map__30186__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__30277){
var map__30408 = p__30277;
var map__30408__$1 = ((((!((map__30408 == null)))?((((map__30408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30408):map__30408);
var namespace = cljs.core.get.call(null,map__30408__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30408__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30253,inst_30259,inst_30256,inst_30257,inst_30261,inst_30276,state_val_30340,c__28091__auto__,map__30185,map__30185__$1,opts,before_jsload,on_jsload,reload_dependents,map__30186,map__30186__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30279 = cljs.core.map.call(null,inst_30278,inst_30257);
var inst_30280 = cljs.core.pr_str.call(null,inst_30279);
var inst_30281 = figwheel.client.utils.log.call(null,inst_30280);
var inst_30282 = (function (){var all_files = inst_30253;
var res_SINGLEQUOTE_ = inst_30256;
var res = inst_30257;
var files_not_loaded = inst_30259;
var dependencies_that_loaded = inst_30261;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30253,inst_30259,inst_30256,inst_30257,inst_30261,inst_30276,inst_30278,inst_30279,inst_30280,inst_30281,state_val_30340,c__28091__auto__,map__30185,map__30185__$1,opts,before_jsload,on_jsload,reload_dependents,map__30186,map__30186__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_30253,inst_30259,inst_30256,inst_30257,inst_30261,inst_30276,inst_30278,inst_30279,inst_30280,inst_30281,state_val_30340,c__28091__auto__,map__30185,map__30185__$1,opts,before_jsload,on_jsload,reload_dependents,map__30186,map__30186__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30283 = setTimeout(inst_30282,(10));
var state_30339__$1 = (function (){var statearr_30410 = state_30339;
(statearr_30410[(33)] = inst_30281);

(statearr_30410[(34)] = inst_30276);

return statearr_30410;
})();
var statearr_30411_30477 = state_30339__$1;
(statearr_30411_30477[(2)] = inst_30283);

(statearr_30411_30477[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (16))){
var state_30339__$1 = state_30339;
var statearr_30412_30478 = state_30339__$1;
(statearr_30412_30478[(2)] = reload_dependents);

(statearr_30412_30478[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (38))){
var inst_30293 = (state_30339[(16)]);
var inst_30310 = cljs.core.apply.call(null,cljs.core.hash_map,inst_30293);
var state_30339__$1 = state_30339;
var statearr_30413_30479 = state_30339__$1;
(statearr_30413_30479[(2)] = inst_30310);

(statearr_30413_30479[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (30))){
var state_30339__$1 = state_30339;
var statearr_30414_30480 = state_30339__$1;
(statearr_30414_30480[(2)] = null);

(statearr_30414_30480[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (10))){
var inst_30213 = (state_30339[(22)]);
var inst_30215 = cljs.core.chunked_seq_QMARK_.call(null,inst_30213);
var state_30339__$1 = state_30339;
if(inst_30215){
var statearr_30415_30481 = state_30339__$1;
(statearr_30415_30481[(1)] = (13));

} else {
var statearr_30416_30482 = state_30339__$1;
(statearr_30416_30482[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (18))){
var inst_30247 = (state_30339[(2)]);
var state_30339__$1 = state_30339;
if(cljs.core.truth_(inst_30247)){
var statearr_30417_30483 = state_30339__$1;
(statearr_30417_30483[(1)] = (19));

} else {
var statearr_30418_30484 = state_30339__$1;
(statearr_30418_30484[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (42))){
var state_30339__$1 = state_30339;
var statearr_30419_30485 = state_30339__$1;
(statearr_30419_30485[(2)] = null);

(statearr_30419_30485[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (37))){
var inst_30305 = (state_30339[(2)]);
var state_30339__$1 = state_30339;
var statearr_30420_30486 = state_30339__$1;
(statearr_30420_30486[(2)] = inst_30305);

(statearr_30420_30486[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30340 === (8))){
var inst_30200 = (state_30339[(8)]);
var inst_30213 = (state_30339[(22)]);
var inst_30213__$1 = cljs.core.seq.call(null,inst_30200);
var state_30339__$1 = (function (){var statearr_30421 = state_30339;
(statearr_30421[(22)] = inst_30213__$1);

return statearr_30421;
})();
if(inst_30213__$1){
var statearr_30422_30487 = state_30339__$1;
(statearr_30422_30487[(1)] = (10));

} else {
var statearr_30423_30488 = state_30339__$1;
(statearr_30423_30488[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28091__auto__,map__30185,map__30185__$1,opts,before_jsload,on_jsload,reload_dependents,map__30186,map__30186__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28070__auto__,c__28091__auto__,map__30185,map__30185__$1,opts,before_jsload,on_jsload,reload_dependents,map__30186,map__30186__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28071__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28071__auto____0 = (function (){
var statearr_30427 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30427[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28071__auto__);

(statearr_30427[(1)] = (1));

return statearr_30427;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28071__auto____1 = (function (state_30339){
while(true){
var ret_value__28072__auto__ = (function (){try{while(true){
var result__28073__auto__ = switch__28070__auto__.call(null,state_30339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28073__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28073__auto__;
}
break;
}
}catch (e30428){if((e30428 instanceof Object)){
var ex__28074__auto__ = e30428;
var statearr_30429_30489 = state_30339;
(statearr_30429_30489[(5)] = ex__28074__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28072__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30490 = state_30339;
state_30339 = G__30490;
continue;
} else {
return ret_value__28072__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28071__auto__ = function(state_30339){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28071__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28071__auto____1.call(this,state_30339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28071__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28071__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28071__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28071__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28071__auto__;
})()
;})(switch__28070__auto__,c__28091__auto__,map__30185,map__30185__$1,opts,before_jsload,on_jsload,reload_dependents,map__30186,map__30186__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28093__auto__ = (function (){var statearr_30430 = f__28092__auto__.call(null);
(statearr_30430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28091__auto__);

return statearr_30430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28093__auto__);
});})(c__28091__auto__,map__30185,map__30185__$1,opts,before_jsload,on_jsload,reload_dependents,map__30186,map__30186__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28091__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30493,link){
var map__30496 = p__30493;
var map__30496__$1 = ((((!((map__30496 == null)))?((((map__30496.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30496.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30496):map__30496);
var file = cljs.core.get.call(null,map__30496__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__30496,map__30496__$1,file){
return (function (p1__30491_SHARP_,p2__30492_SHARP_){
if(cljs.core._EQ_.call(null,p1__30491_SHARP_,p2__30492_SHARP_)){
return p1__30491_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__30496,map__30496__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30502){
var map__30503 = p__30502;
var map__30503__$1 = ((((!((map__30503 == null)))?((((map__30503.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30503.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30503):map__30503);
var match_length = cljs.core.get.call(null,map__30503__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30503__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30498_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30498_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args30505 = [];
var len__26580__auto___30508 = arguments.length;
var i__26581__auto___30509 = (0);
while(true){
if((i__26581__auto___30509 < len__26580__auto___30508)){
args30505.push((arguments[i__26581__auto___30509]));

var G__30510 = (i__26581__auto___30509 + (1));
i__26581__auto___30509 = G__30510;
continue;
} else {
}
break;
}

var G__30507 = args30505.length;
switch (G__30507) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30505.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30512_SHARP_,p2__30513_SHARP_){
return cljs.core.assoc.call(null,p1__30512_SHARP_,cljs.core.get.call(null,p2__30513_SHARP_,key),p2__30513_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__30514){
var map__30517 = p__30514;
var map__30517__$1 = ((((!((map__30517 == null)))?((((map__30517.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30517.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30517):map__30517);
var f_data = map__30517__$1;
var file = cljs.core.get.call(null,map__30517__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30519,files_msg){
var map__30526 = p__30519;
var map__30526__$1 = ((((!((map__30526 == null)))?((((map__30526.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30526.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30526):map__30526);
var opts = map__30526__$1;
var on_cssload = cljs.core.get.call(null,map__30526__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__30528_30532 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__30529_30533 = null;
var count__30530_30534 = (0);
var i__30531_30535 = (0);
while(true){
if((i__30531_30535 < count__30530_30534)){
var f_30536 = cljs.core._nth.call(null,chunk__30529_30533,i__30531_30535);
figwheel.client.file_reloading.reload_css_file.call(null,f_30536);

var G__30537 = seq__30528_30532;
var G__30538 = chunk__30529_30533;
var G__30539 = count__30530_30534;
var G__30540 = (i__30531_30535 + (1));
seq__30528_30532 = G__30537;
chunk__30529_30533 = G__30538;
count__30530_30534 = G__30539;
i__30531_30535 = G__30540;
continue;
} else {
var temp__4425__auto___30541 = cljs.core.seq.call(null,seq__30528_30532);
if(temp__4425__auto___30541){
var seq__30528_30542__$1 = temp__4425__auto___30541;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30528_30542__$1)){
var c__26325__auto___30543 = cljs.core.chunk_first.call(null,seq__30528_30542__$1);
var G__30544 = cljs.core.chunk_rest.call(null,seq__30528_30542__$1);
var G__30545 = c__26325__auto___30543;
var G__30546 = cljs.core.count.call(null,c__26325__auto___30543);
var G__30547 = (0);
seq__30528_30532 = G__30544;
chunk__30529_30533 = G__30545;
count__30530_30534 = G__30546;
i__30531_30535 = G__30547;
continue;
} else {
var f_30548 = cljs.core.first.call(null,seq__30528_30542__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_30548);

var G__30549 = cljs.core.next.call(null,seq__30528_30542__$1);
var G__30550 = null;
var G__30551 = (0);
var G__30552 = (0);
seq__30528_30532 = G__30549;
chunk__30529_30533 = G__30550;
count__30530_30534 = G__30551;
i__30531_30535 = G__30552;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__30526,map__30526__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__30526,map__30526__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1451075950904