// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30569_30583 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30570_30584 = null;
var count__30571_30585 = (0);
var i__30572_30586 = (0);
while(true){
if((i__30572_30586 < count__30571_30585)){
var f_30587 = cljs.core._nth.call(null,chunk__30570_30584,i__30572_30586);
cljs.core.println.call(null,"  ",f_30587);

var G__30588 = seq__30569_30583;
var G__30589 = chunk__30570_30584;
var G__30590 = count__30571_30585;
var G__30591 = (i__30572_30586 + (1));
seq__30569_30583 = G__30588;
chunk__30570_30584 = G__30589;
count__30571_30585 = G__30590;
i__30572_30586 = G__30591;
continue;
} else {
var temp__4425__auto___30592 = cljs.core.seq.call(null,seq__30569_30583);
if(temp__4425__auto___30592){
var seq__30569_30593__$1 = temp__4425__auto___30592;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30569_30593__$1)){
var c__26325__auto___30594 = cljs.core.chunk_first.call(null,seq__30569_30593__$1);
var G__30595 = cljs.core.chunk_rest.call(null,seq__30569_30593__$1);
var G__30596 = c__26325__auto___30594;
var G__30597 = cljs.core.count.call(null,c__26325__auto___30594);
var G__30598 = (0);
seq__30569_30583 = G__30595;
chunk__30570_30584 = G__30596;
count__30571_30585 = G__30597;
i__30572_30586 = G__30598;
continue;
} else {
var f_30599 = cljs.core.first.call(null,seq__30569_30593__$1);
cljs.core.println.call(null,"  ",f_30599);

var G__30600 = cljs.core.next.call(null,seq__30569_30593__$1);
var G__30601 = null;
var G__30602 = (0);
var G__30603 = (0);
seq__30569_30583 = G__30600;
chunk__30570_30584 = G__30601;
count__30571_30585 = G__30602;
i__30572_30586 = G__30603;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30604 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25522__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25522__auto__)){
return or__25522__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30604);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30604)))?cljs.core.second.call(null,arglists_30604):arglists_30604));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30573 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30574 = null;
var count__30575 = (0);
var i__30576 = (0);
while(true){
if((i__30576 < count__30575)){
var vec__30577 = cljs.core._nth.call(null,chunk__30574,i__30576);
var name = cljs.core.nth.call(null,vec__30577,(0),null);
var map__30578 = cljs.core.nth.call(null,vec__30577,(1),null);
var map__30578__$1 = ((((!((map__30578 == null)))?((((map__30578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30578):map__30578);
var doc = cljs.core.get.call(null,map__30578__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30578__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30605 = seq__30573;
var G__30606 = chunk__30574;
var G__30607 = count__30575;
var G__30608 = (i__30576 + (1));
seq__30573 = G__30605;
chunk__30574 = G__30606;
count__30575 = G__30607;
i__30576 = G__30608;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30573);
if(temp__4425__auto__){
var seq__30573__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30573__$1)){
var c__26325__auto__ = cljs.core.chunk_first.call(null,seq__30573__$1);
var G__30609 = cljs.core.chunk_rest.call(null,seq__30573__$1);
var G__30610 = c__26325__auto__;
var G__30611 = cljs.core.count.call(null,c__26325__auto__);
var G__30612 = (0);
seq__30573 = G__30609;
chunk__30574 = G__30610;
count__30575 = G__30611;
i__30576 = G__30612;
continue;
} else {
var vec__30580 = cljs.core.first.call(null,seq__30573__$1);
var name = cljs.core.nth.call(null,vec__30580,(0),null);
var map__30581 = cljs.core.nth.call(null,vec__30580,(1),null);
var map__30581__$1 = ((((!((map__30581 == null)))?((((map__30581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30581):map__30581);
var doc = cljs.core.get.call(null,map__30581__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30581__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30613 = cljs.core.next.call(null,seq__30573__$1);
var G__30614 = null;
var G__30615 = (0);
var G__30616 = (0);
seq__30573 = G__30613;
chunk__30574 = G__30614;
count__30575 = G__30615;
i__30576 = G__30616;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1451075950998