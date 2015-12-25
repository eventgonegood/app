// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom.server');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__17129__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__17128 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__17128,(0),null);
var body = cljs.core.nthnext.call(null,vec__17128,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__17129 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17130__i = 0, G__17130__a = new Array(arguments.length -  0);
while (G__17130__i < G__17130__a.length) {G__17130__a[G__17130__i] = arguments[G__17130__i + 0]; ++G__17130__i;}
  args = new cljs.core.IndexedSeq(G__17130__a,0);
} 
return G__17129__delegate.call(this,args);};
G__17129.cljs$lang$maxFixedArity = 0;
G__17129.cljs$lang$applyTo = (function (arglist__17131){
var args = cljs.core.seq(arglist__17131);
return G__17129__delegate(args);
});
G__17129.cljs$core$IFn$_invoke$arity$variadic = G__17129__delegate;
return G__17129;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__16349__auto__ = (function sablono$core$update_arglists_$_iter__17136(s__17137){
return (new cljs.core.LazySeq(null,(function (){
var s__17137__$1 = s__17137;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17137__$1);
if(temp__4425__auto__){
var s__17137__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17137__$2)){
var c__16347__auto__ = cljs.core.chunk_first.call(null,s__17137__$2);
var size__16348__auto__ = cljs.core.count.call(null,c__16347__auto__);
var b__17139 = cljs.core.chunk_buffer.call(null,size__16348__auto__);
if((function (){var i__17138 = (0);
while(true){
if((i__17138 < size__16348__auto__)){
var args = cljs.core._nth.call(null,c__16347__auto__,i__17138);
cljs.core.chunk_append.call(null,b__17139,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__17140 = (i__17138 + (1));
i__17138 = G__17140;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17139),sablono$core$update_arglists_$_iter__17136.call(null,cljs.core.chunk_rest.call(null,s__17137__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17139),null);
}
} else {
var args = cljs.core.first.call(null,s__17137__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__17136.call(null,cljs.core.rest.call(null,s__17137__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16349__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__16642__auto__ = [];
var len__16635__auto___17146 = arguments.length;
var i__16636__auto___17147 = (0);
while(true){
if((i__16636__auto___17147 < len__16635__auto___17146)){
args__16642__auto__.push((arguments[i__16636__auto___17147]));

var G__17148 = (i__16636__auto___17147 + (1));
i__16636__auto___17147 = G__17148;
continue;
} else {
}
break;
}

var argseq__16643__auto__ = ((((0) < args__16642__auto__.length))?(new cljs.core.IndexedSeq(args__16642__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__16643__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__16349__auto__ = (function sablono$core$iter__17142(s__17143){
return (new cljs.core.LazySeq(null,(function (){
var s__17143__$1 = s__17143;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17143__$1);
if(temp__4425__auto__){
var s__17143__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17143__$2)){
var c__16347__auto__ = cljs.core.chunk_first.call(null,s__17143__$2);
var size__16348__auto__ = cljs.core.count.call(null,c__16347__auto__);
var b__17145 = cljs.core.chunk_buffer.call(null,size__16348__auto__);
if((function (){var i__17144 = (0);
while(true){
if((i__17144 < size__16348__auto__)){
var style = cljs.core._nth.call(null,c__16347__auto__,i__17144);
cljs.core.chunk_append.call(null,b__17145,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__17149 = (i__17144 + (1));
i__17144 = G__17149;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17145),sablono$core$iter__17142.call(null,cljs.core.chunk_rest.call(null,s__17143__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17145),null);
}
} else {
var style = cljs.core.first.call(null,s__17143__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__17142.call(null,cljs.core.rest.call(null,s__17143__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16349__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq17141){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17141));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to17150 = (function sablono$core$link_to17150(var_args){
var args__16642__auto__ = [];
var len__16635__auto___17153 = arguments.length;
var i__16636__auto___17154 = (0);
while(true){
if((i__16636__auto___17154 < len__16635__auto___17153)){
args__16642__auto__.push((arguments[i__16636__auto___17154]));

var G__17155 = (i__16636__auto___17154 + (1));
i__16636__auto___17154 = G__17155;
continue;
} else {
}
break;
}

var argseq__16643__auto__ = ((((1) < args__16642__auto__.length))?(new cljs.core.IndexedSeq(args__16642__auto__.slice((1)),(0))):null);
return sablono.core.link_to17150.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16643__auto__);
});

sablono.core.link_to17150.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to17150.cljs$lang$maxFixedArity = (1);

sablono.core.link_to17150.cljs$lang$applyTo = (function (seq17151){
var G__17152 = cljs.core.first.call(null,seq17151);
var seq17151__$1 = cljs.core.next.call(null,seq17151);
return sablono.core.link_to17150.cljs$core$IFn$_invoke$arity$variadic(G__17152,seq17151__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to17150);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to17156 = (function sablono$core$mail_to17156(var_args){
var args__16642__auto__ = [];
var len__16635__auto___17161 = arguments.length;
var i__16636__auto___17162 = (0);
while(true){
if((i__16636__auto___17162 < len__16635__auto___17161)){
args__16642__auto__.push((arguments[i__16636__auto___17162]));

var G__17163 = (i__16636__auto___17162 + (1));
i__16636__auto___17162 = G__17163;
continue;
} else {
}
break;
}

var argseq__16643__auto__ = ((((1) < args__16642__auto__.length))?(new cljs.core.IndexedSeq(args__16642__auto__.slice((1)),(0))):null);
return sablono.core.mail_to17156.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16643__auto__);
});

sablono.core.mail_to17156.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__17159){
var vec__17160 = p__17159;
var content = cljs.core.nth.call(null,vec__17160,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__15577__auto__ = content;
if(cljs.core.truth_(or__15577__auto__)){
return or__15577__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to17156.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to17156.cljs$lang$applyTo = (function (seq17157){
var G__17158 = cljs.core.first.call(null,seq17157);
var seq17157__$1 = cljs.core.next.call(null,seq17157);
return sablono.core.mail_to17156.cljs$core$IFn$_invoke$arity$variadic(G__17158,seq17157__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to17156);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list17164 = (function sablono$core$unordered_list17164(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__16349__auto__ = (function sablono$core$unordered_list17164_$_iter__17169(s__17170){
return (new cljs.core.LazySeq(null,(function (){
var s__17170__$1 = s__17170;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17170__$1);
if(temp__4425__auto__){
var s__17170__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17170__$2)){
var c__16347__auto__ = cljs.core.chunk_first.call(null,s__17170__$2);
var size__16348__auto__ = cljs.core.count.call(null,c__16347__auto__);
var b__17172 = cljs.core.chunk_buffer.call(null,size__16348__auto__);
if((function (){var i__17171 = (0);
while(true){
if((i__17171 < size__16348__auto__)){
var x = cljs.core._nth.call(null,c__16347__auto__,i__17171);
cljs.core.chunk_append.call(null,b__17172,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17173 = (i__17171 + (1));
i__17171 = G__17173;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17172),sablono$core$unordered_list17164_$_iter__17169.call(null,cljs.core.chunk_rest.call(null,s__17170__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17172),null);
}
} else {
var x = cljs.core.first.call(null,s__17170__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list17164_$_iter__17169.call(null,cljs.core.rest.call(null,s__17170__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16349__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list17164);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list17174 = (function sablono$core$ordered_list17174(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__16349__auto__ = (function sablono$core$ordered_list17174_$_iter__17179(s__17180){
return (new cljs.core.LazySeq(null,(function (){
var s__17180__$1 = s__17180;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17180__$1);
if(temp__4425__auto__){
var s__17180__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17180__$2)){
var c__16347__auto__ = cljs.core.chunk_first.call(null,s__17180__$2);
var size__16348__auto__ = cljs.core.count.call(null,c__16347__auto__);
var b__17182 = cljs.core.chunk_buffer.call(null,size__16348__auto__);
if((function (){var i__17181 = (0);
while(true){
if((i__17181 < size__16348__auto__)){
var x = cljs.core._nth.call(null,c__16347__auto__,i__17181);
cljs.core.chunk_append.call(null,b__17182,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__17183 = (i__17181 + (1));
i__17181 = G__17183;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17182),sablono$core$ordered_list17174_$_iter__17179.call(null,cljs.core.chunk_rest.call(null,s__17180__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17182),null);
}
} else {
var x = cljs.core.first.call(null,s__17180__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list17174_$_iter__17179.call(null,cljs.core.rest.call(null,s__17180__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16349__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list17174);
/**
 * Create an image element.
 */
sablono.core.image17184 = (function sablono$core$image17184(var_args){
var args17185 = [];
var len__16635__auto___17188 = arguments.length;
var i__16636__auto___17189 = (0);
while(true){
if((i__16636__auto___17189 < len__16635__auto___17188)){
args17185.push((arguments[i__16636__auto___17189]));

var G__17190 = (i__16636__auto___17189 + (1));
i__16636__auto___17189 = G__17190;
continue;
} else {
}
break;
}

var G__17187 = args17185.length;
switch (G__17187) {
case 1:
return sablono.core.image17184.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image17184.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17185.length)].join('')));

}
});

sablono.core.image17184.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image17184.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image17184.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image17184);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__17192_SHARP_,p2__17193_SHARP_){
return [cljs.core.str(p1__17192_SHARP_),cljs.core.str("["),cljs.core.str(p2__17193_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__17194_SHARP_,p2__17195_SHARP_){
return [cljs.core.str(p1__17194_SHARP_),cljs.core.str("-"),cljs.core.str(p2__17195_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field17196 = (function sablono$core$color_field17196(var_args){
var args17197 = [];
var len__16635__auto___17264 = arguments.length;
var i__16636__auto___17265 = (0);
while(true){
if((i__16636__auto___17265 < len__16635__auto___17264)){
args17197.push((arguments[i__16636__auto___17265]));

var G__17266 = (i__16636__auto___17265 + (1));
i__16636__auto___17265 = G__17266;
continue;
} else {
}
break;
}

var G__17199 = args17197.length;
switch (G__17199) {
case 1:
return sablono.core.color_field17196.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field17196.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17197.length)].join('')));

}
});

sablono.core.color_field17196.cljs$core$IFn$_invoke$arity$1 = (function (name__17117__auto__){
return sablono.core.color_field17196.call(null,name__17117__auto__,null);
});

sablono.core.color_field17196.cljs$core$IFn$_invoke$arity$2 = (function (name__17117__auto__,value__17118__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__17117__auto__,value__17118__auto__);
});

sablono.core.color_field17196.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field17196);

/**
 * Creates a date input field.
 */
sablono.core.date_field17200 = (function sablono$core$date_field17200(var_args){
var args17201 = [];
var len__16635__auto___17268 = arguments.length;
var i__16636__auto___17269 = (0);
while(true){
if((i__16636__auto___17269 < len__16635__auto___17268)){
args17201.push((arguments[i__16636__auto___17269]));

var G__17270 = (i__16636__auto___17269 + (1));
i__16636__auto___17269 = G__17270;
continue;
} else {
}
break;
}

var G__17203 = args17201.length;
switch (G__17203) {
case 1:
return sablono.core.date_field17200.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field17200.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17201.length)].join('')));

}
});

sablono.core.date_field17200.cljs$core$IFn$_invoke$arity$1 = (function (name__17117__auto__){
return sablono.core.date_field17200.call(null,name__17117__auto__,null);
});

sablono.core.date_field17200.cljs$core$IFn$_invoke$arity$2 = (function (name__17117__auto__,value__17118__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__17117__auto__,value__17118__auto__);
});

sablono.core.date_field17200.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field17200);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field17204 = (function sablono$core$datetime_field17204(var_args){
var args17205 = [];
var len__16635__auto___17272 = arguments.length;
var i__16636__auto___17273 = (0);
while(true){
if((i__16636__auto___17273 < len__16635__auto___17272)){
args17205.push((arguments[i__16636__auto___17273]));

var G__17274 = (i__16636__auto___17273 + (1));
i__16636__auto___17273 = G__17274;
continue;
} else {
}
break;
}

var G__17207 = args17205.length;
switch (G__17207) {
case 1:
return sablono.core.datetime_field17204.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field17204.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17205.length)].join('')));

}
});

sablono.core.datetime_field17204.cljs$core$IFn$_invoke$arity$1 = (function (name__17117__auto__){
return sablono.core.datetime_field17204.call(null,name__17117__auto__,null);
});

sablono.core.datetime_field17204.cljs$core$IFn$_invoke$arity$2 = (function (name__17117__auto__,value__17118__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__17117__auto__,value__17118__auto__);
});

sablono.core.datetime_field17204.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field17204);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field17208 = (function sablono$core$datetime_local_field17208(var_args){
var args17209 = [];
var len__16635__auto___17276 = arguments.length;
var i__16636__auto___17277 = (0);
while(true){
if((i__16636__auto___17277 < len__16635__auto___17276)){
args17209.push((arguments[i__16636__auto___17277]));

var G__17278 = (i__16636__auto___17277 + (1));
i__16636__auto___17277 = G__17278;
continue;
} else {
}
break;
}

var G__17211 = args17209.length;
switch (G__17211) {
case 1:
return sablono.core.datetime_local_field17208.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field17208.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17209.length)].join('')));

}
});

sablono.core.datetime_local_field17208.cljs$core$IFn$_invoke$arity$1 = (function (name__17117__auto__){
return sablono.core.datetime_local_field17208.call(null,name__17117__auto__,null);
});

sablono.core.datetime_local_field17208.cljs$core$IFn$_invoke$arity$2 = (function (name__17117__auto__,value__17118__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__17117__auto__,value__17118__auto__);
});

sablono.core.datetime_local_field17208.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field17208);

/**
 * Creates a email input field.
 */
sablono.core.email_field17212 = (function sablono$core$email_field17212(var_args){
var args17213 = [];
var len__16635__auto___17280 = arguments.length;
var i__16636__auto___17281 = (0);
while(true){
if((i__16636__auto___17281 < len__16635__auto___17280)){
args17213.push((arguments[i__16636__auto___17281]));

var G__17282 = (i__16636__auto___17281 + (1));
i__16636__auto___17281 = G__17282;
continue;
} else {
}
break;
}

var G__17215 = args17213.length;
switch (G__17215) {
case 1:
return sablono.core.email_field17212.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field17212.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17213.length)].join('')));

}
});

sablono.core.email_field17212.cljs$core$IFn$_invoke$arity$1 = (function (name__17117__auto__){
return sablono.core.email_field17212.call(null,name__17117__auto__,null);
});

sablono.core.email_field17212.cljs$core$IFn$_invoke$arity$2 = (function (name__17117__auto__,value__17118__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__17117__auto__,value__17118__auto__);
});

sablono.core.email_field17212.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field17212);

/**
 * Creates a file input field.
 */
sablono.core.file_field17216 = (function sablono$core$file_field17216(var_args){
var args17217 = [];
var len__16635__auto___17284 = arguments.length;
var i__16636__auto___17285 = (0);
while(true){
if((i__16636__auto___17285 < len__16635__auto___17284)){
args17217.push((arguments[i__16636__auto___17285]));

var G__17286 = (i__16636__auto___17285 + (1));
i__16636__auto___17285 = G__17286;
continue;
} else {
}
break;
}

var G__17219 = args17217.length;
switch (G__17219) {
case 1:
return sablono.core.file_field17216.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field17216.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17217.length)].join('')));

}
});

sablono.core.file_field17216.cljs$core$IFn$_invoke$arity$1 = (function (name__17117__auto__){
return sablono.core.file_field17216.call(null,name__17117__auto__,null);
});

sablono.core.file_field17216.cljs$core$IFn$_invoke$arity$2 = (function (name__17117__auto__,value__17118__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__17117__auto__,value__17118__auto__);
});

sablono.core.file_field17216.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field17216);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field17220 = (function sablono$core$hidden_field17220(var_args){
var args17221 = [];
var len__16635__auto___17288 = arguments.length;
var i__16636__auto___17289 = (0);
while(true){
if((i__16636__auto___17289 < len__16635__auto___17288)){
args17221.push((arguments[i__16636__auto___17289]));

var G__17290 = (i__16636__auto___17289 + (1));
i__16636__auto___17289 = G__17290;
continue;
} else {
}
break;
}

var G__17223 = args17221.length;
switch (G__17223) {
case 1:
return sablono.core.hidden_field17220.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field17220.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17221.length)].join('')));

}
});

sablono.core.hidden_field17220.cljs$core$IFn$_invoke$arity$1 = (function (name__17117__auto__){
return sablono.core.hidden_field17220.call(null,name__17117__auto__,null);
});

sablono.core.hidden_field17220.cljs$core$IFn$_invoke$arity$2 = (function (name__17117__auto__,value__17118__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__17117__auto__,value__17118__auto__);
});

sablono.core.hidden_field17220.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field17220);

/**
 * Creates a month input field.
 */
sablono.core.month_field17224 = (function sablono$core$month_field17224(var_args){
var args17225 = [];
var len__16635__auto___17292 = arguments.length;
var i__16636__auto___17293 = (0);
while(true){
if((i__16636__auto___17293 < len__16635__auto___17292)){
args17225.push((arguments[i__16636__auto___17293]));

var G__17294 = (i__16636__auto___17293 + (1));
i__16636__auto___17293 = G__17294;
continue;
} else {
}
break;
}

var G__17227 = args17225.length;
switch (G__17227) {
case 1:
return sablono.core.month_field17224.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field17224.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17225.length)].join('')));

}
});

sablono.core.month_field17224.cljs$core$IFn$_invoke$arity$1 = (function (name__17117__auto__){
return sablono.core.month_field17224.call(null,name__17117__auto__,null);
});

sablono.core.month_field17224.cljs$core$IFn$_invoke$arity$2 = (function (name__17117__auto__,value__17118__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__17117__auto__,value__17118__auto__);
});

sablono.core.month_field17224.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field17224);

/**
 * Creates a number input field.
 */
sablono.core.number_field17228 = (function sablono$core$number_field17228(var_args){
var args17229 = [];
var len__16635__auto___17296 = arguments.length;
var i__16636__auto___17297 = (0);
while(true){
if((i__16636__auto___17297 < len__16635__auto___17296)){
args17229.push((arguments[i__16636__auto___17297]));

var G__17298 = (i__16636__auto___17297 + (1));
i__16636__auto___17297 = G__17298;
continue;
} else {
}
break;
}

var G__17231 = args17229.length;
switch (G__17231) {
case 1:
return sablono.core.number_field17228.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field17228.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17229.length)].join('')));

}
});

sablono.core.number_field17228.cljs$core$IFn$_invoke$arity$1 = (function (name__17117__auto__){
return sablono.core.number_field17228.call(null,name__17117__auto__,null);
});

sablono.core.number_field17228.cljs$core$IFn$_invoke$arity$2 = (function (name__17117__auto__,value__17118__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__17117__auto__,value__17118__auto__);
});

sablono.core.number_field17228.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field17228);

/**
 * Creates a password input field.
 */
sablono.core.password_field17232 = (function sablono$core$password_field17232(var_args){
var args17233 = [];
var len__16635__auto___17300 = arguments.length;
var i__16636__auto___17301 = (0);
while(true){
if((i__16636__auto___17301 < len__16635__auto___17300)){
args17233.push((arguments[i__16636__auto___17301]));

var G__17302 = (i__16636__auto___17301 + (1));
i__16636__auto___17301 = G__17302;
continue;
} else {
}
break;
}

var G__17235 = args17233.length;
switch (G__17235) {
case 1:
return sablono.core.password_field17232.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field17232.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17233.length)].join('')));

}
});

sablono.core.password_field17232.cljs$core$IFn$_invoke$arity$1 = (function (name__17117__auto__){
return sablono.core.password_field17232.call(null,name__17117__auto__,null);
});

sablono.core.password_field17232.cljs$core$IFn$_invoke$arity$2 = (function (name__17117__auto__,value__17118__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__17117__auto__,value__17118__auto__);
});

sablono.core.password_field17232.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field17232);

/**
 * Creates a range input field.
 */
sablono.core.range_field17236 = (function sablono$core$range_field17236(var_args){
var args17237 = [];
var len__16635__auto___17304 = arguments.length;
var i__16636__auto___17305 = (0);
while(true){
if((i__16636__auto___17305 < len__16635__auto___17304)){
args17237.push((arguments[i__16636__auto___17305]));

var G__17306 = (i__16636__auto___17305 + (1));
i__16636__auto___17305 = G__17306;
continue;
} else {
}
break;
}

var G__17239 = args17237.length;
switch (G__17239) {
case 1:
return sablono.core.range_field17236.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field17236.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17237.length)].join('')));

}
});

sablono.core.range_field17236.cljs$core$IFn$_invoke$arity$1 = (function (name__17117__auto__){
return sablono.core.range_field17236.call(null,name__17117__auto__,null);
});

sablono.core.range_field17236.cljs$core$IFn$_invoke$arity$2 = (function (name__17117__auto__,value__17118__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__17117__auto__,value__17118__auto__);
});

sablono.core.range_field17236.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field17236);

/**
 * Creates a search input field.
 */
sablono.core.search_field17240 = (function sablono$core$search_field17240(var_args){
var args17241 = [];
var len__16635__auto___17308 = arguments.length;
var i__16636__auto___17309 = (0);
while(true){
if((i__16636__auto___17309 < len__16635__auto___17308)){
args17241.push((arguments[i__16636__auto___17309]));

var G__17310 = (i__16636__auto___17309 + (1));
i__16636__auto___17309 = G__17310;
continue;
} else {
}
break;
}

var G__17243 = args17241.length;
switch (G__17243) {
case 1:
return sablono.core.search_field17240.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field17240.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17241.length)].join('')));

}
});

sablono.core.search_field17240.cljs$core$IFn$_invoke$arity$1 = (function (name__17117__auto__){
return sablono.core.search_field17240.call(null,name__17117__auto__,null);
});

sablono.core.search_field17240.cljs$core$IFn$_invoke$arity$2 = (function (name__17117__auto__,value__17118__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__17117__auto__,value__17118__auto__);
});

sablono.core.search_field17240.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field17240);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field17244 = (function sablono$core$tel_field17244(var_args){
var args17245 = [];
var len__16635__auto___17312 = arguments.length;
var i__16636__auto___17313 = (0);
while(true){
if((i__16636__auto___17313 < len__16635__auto___17312)){
args17245.push((arguments[i__16636__auto___17313]));

var G__17314 = (i__16636__auto___17313 + (1));
i__16636__auto___17313 = G__17314;
continue;
} else {
}
break;
}

var G__17247 = args17245.length;
switch (G__17247) {
case 1:
return sablono.core.tel_field17244.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field17244.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17245.length)].join('')));

}
});

sablono.core.tel_field17244.cljs$core$IFn$_invoke$arity$1 = (function (name__17117__auto__){
return sablono.core.tel_field17244.call(null,name__17117__auto__,null);
});

sablono.core.tel_field17244.cljs$core$IFn$_invoke$arity$2 = (function (name__17117__auto__,value__17118__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__17117__auto__,value__17118__auto__);
});

sablono.core.tel_field17244.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field17244);

/**
 * Creates a text input field.
 */
sablono.core.text_field17248 = (function sablono$core$text_field17248(var_args){
var args17249 = [];
var len__16635__auto___17316 = arguments.length;
var i__16636__auto___17317 = (0);
while(true){
if((i__16636__auto___17317 < len__16635__auto___17316)){
args17249.push((arguments[i__16636__auto___17317]));

var G__17318 = (i__16636__auto___17317 + (1));
i__16636__auto___17317 = G__17318;
continue;
} else {
}
break;
}

var G__17251 = args17249.length;
switch (G__17251) {
case 1:
return sablono.core.text_field17248.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field17248.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17249.length)].join('')));

}
});

sablono.core.text_field17248.cljs$core$IFn$_invoke$arity$1 = (function (name__17117__auto__){
return sablono.core.text_field17248.call(null,name__17117__auto__,null);
});

sablono.core.text_field17248.cljs$core$IFn$_invoke$arity$2 = (function (name__17117__auto__,value__17118__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__17117__auto__,value__17118__auto__);
});

sablono.core.text_field17248.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field17248);

/**
 * Creates a time input field.
 */
sablono.core.time_field17252 = (function sablono$core$time_field17252(var_args){
var args17253 = [];
var len__16635__auto___17320 = arguments.length;
var i__16636__auto___17321 = (0);
while(true){
if((i__16636__auto___17321 < len__16635__auto___17320)){
args17253.push((arguments[i__16636__auto___17321]));

var G__17322 = (i__16636__auto___17321 + (1));
i__16636__auto___17321 = G__17322;
continue;
} else {
}
break;
}

var G__17255 = args17253.length;
switch (G__17255) {
case 1:
return sablono.core.time_field17252.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field17252.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17253.length)].join('')));

}
});

sablono.core.time_field17252.cljs$core$IFn$_invoke$arity$1 = (function (name__17117__auto__){
return sablono.core.time_field17252.call(null,name__17117__auto__,null);
});

sablono.core.time_field17252.cljs$core$IFn$_invoke$arity$2 = (function (name__17117__auto__,value__17118__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__17117__auto__,value__17118__auto__);
});

sablono.core.time_field17252.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field17252);

/**
 * Creates a url input field.
 */
sablono.core.url_field17256 = (function sablono$core$url_field17256(var_args){
var args17257 = [];
var len__16635__auto___17324 = arguments.length;
var i__16636__auto___17325 = (0);
while(true){
if((i__16636__auto___17325 < len__16635__auto___17324)){
args17257.push((arguments[i__16636__auto___17325]));

var G__17326 = (i__16636__auto___17325 + (1));
i__16636__auto___17325 = G__17326;
continue;
} else {
}
break;
}

var G__17259 = args17257.length;
switch (G__17259) {
case 1:
return sablono.core.url_field17256.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field17256.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17257.length)].join('')));

}
});

sablono.core.url_field17256.cljs$core$IFn$_invoke$arity$1 = (function (name__17117__auto__){
return sablono.core.url_field17256.call(null,name__17117__auto__,null);
});

sablono.core.url_field17256.cljs$core$IFn$_invoke$arity$2 = (function (name__17117__auto__,value__17118__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__17117__auto__,value__17118__auto__);
});

sablono.core.url_field17256.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field17256);

/**
 * Creates a week input field.
 */
sablono.core.week_field17260 = (function sablono$core$week_field17260(var_args){
var args17261 = [];
var len__16635__auto___17328 = arguments.length;
var i__16636__auto___17329 = (0);
while(true){
if((i__16636__auto___17329 < len__16635__auto___17328)){
args17261.push((arguments[i__16636__auto___17329]));

var G__17330 = (i__16636__auto___17329 + (1));
i__16636__auto___17329 = G__17330;
continue;
} else {
}
break;
}

var G__17263 = args17261.length;
switch (G__17263) {
case 1:
return sablono.core.week_field17260.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field17260.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17261.length)].join('')));

}
});

sablono.core.week_field17260.cljs$core$IFn$_invoke$arity$1 = (function (name__17117__auto__){
return sablono.core.week_field17260.call(null,name__17117__auto__,null);
});

sablono.core.week_field17260.cljs$core$IFn$_invoke$arity$2 = (function (name__17117__auto__,value__17118__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__17117__auto__,value__17118__auto__);
});

sablono.core.week_field17260.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field17260);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box17332 = (function sablono$core$check_box17332(var_args){
var args17333 = [];
var len__16635__auto___17336 = arguments.length;
var i__16636__auto___17337 = (0);
while(true){
if((i__16636__auto___17337 < len__16635__auto___17336)){
args17333.push((arguments[i__16636__auto___17337]));

var G__17338 = (i__16636__auto___17337 + (1));
i__16636__auto___17337 = G__17338;
continue;
} else {
}
break;
}

var G__17335 = args17333.length;
switch (G__17335) {
case 1:
return sablono.core.check_box17332.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box17332.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box17332.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17333.length)].join('')));

}
});

sablono.core.check_box17332.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box17332.call(null,name,null);
});

sablono.core.check_box17332.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box17332.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box17332.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box17332.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box17332);
/**
 * Creates a radio button.
 */
sablono.core.radio_button17340 = (function sablono$core$radio_button17340(var_args){
var args17341 = [];
var len__16635__auto___17344 = arguments.length;
var i__16636__auto___17345 = (0);
while(true){
if((i__16636__auto___17345 < len__16635__auto___17344)){
args17341.push((arguments[i__16636__auto___17345]));

var G__17346 = (i__16636__auto___17345 + (1));
i__16636__auto___17345 = G__17346;
continue;
} else {
}
break;
}

var G__17343 = args17341.length;
switch (G__17343) {
case 1:
return sablono.core.radio_button17340.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button17340.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button17340.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17341.length)].join('')));

}
});

sablono.core.radio_button17340.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button17340.call(null,group,null);
});

sablono.core.radio_button17340.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button17340.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button17340.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button17340.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button17340);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options17348 = (function sablono$core$select_options17348(coll){
var iter__16349__auto__ = (function sablono$core$select_options17348_$_iter__17357(s__17358){
return (new cljs.core.LazySeq(null,(function (){
var s__17358__$1 = s__17358;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__17358__$1);
if(temp__4425__auto__){
var s__17358__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__17358__$2)){
var c__16347__auto__ = cljs.core.chunk_first.call(null,s__17358__$2);
var size__16348__auto__ = cljs.core.count.call(null,c__16347__auto__);
var b__17360 = cljs.core.chunk_buffer.call(null,size__16348__auto__);
if((function (){var i__17359 = (0);
while(true){
if((i__17359 < size__16348__auto__)){
var x = cljs.core._nth.call(null,c__16347__auto__,i__17359);
cljs.core.chunk_append.call(null,b__17360,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17363 = x;
var text = cljs.core.nth.call(null,vec__17363,(0),null);
var val = cljs.core.nth.call(null,vec__17363,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17363,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17348.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__17365 = (i__17359 + (1));
i__17359 = G__17365;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17360),sablono$core$select_options17348_$_iter__17357.call(null,cljs.core.chunk_rest.call(null,s__17358__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__17360),null);
}
} else {
var x = cljs.core.first.call(null,s__17358__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__17364 = x;
var text = cljs.core.nth.call(null,vec__17364,(0),null);
var val = cljs.core.nth.call(null,vec__17364,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__17364,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options17348.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options17348_$_iter__17357.call(null,cljs.core.rest.call(null,s__17358__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__16349__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options17348);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down17366 = (function sablono$core$drop_down17366(var_args){
var args17367 = [];
var len__16635__auto___17370 = arguments.length;
var i__16636__auto___17371 = (0);
while(true){
if((i__16636__auto___17371 < len__16635__auto___17370)){
args17367.push((arguments[i__16636__auto___17371]));

var G__17372 = (i__16636__auto___17371 + (1));
i__16636__auto___17371 = G__17372;
continue;
} else {
}
break;
}

var G__17369 = args17367.length;
switch (G__17369) {
case 2:
return sablono.core.drop_down17366.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down17366.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17367.length)].join('')));

}
});

sablono.core.drop_down17366.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down17366.call(null,name,options,null);
});

sablono.core.drop_down17366.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down17366.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down17366);
/**
 * Creates a text area element.
 */
sablono.core.text_area17374 = (function sablono$core$text_area17374(var_args){
var args17375 = [];
var len__16635__auto___17378 = arguments.length;
var i__16636__auto___17379 = (0);
while(true){
if((i__16636__auto___17379 < len__16635__auto___17378)){
args17375.push((arguments[i__16636__auto___17379]));

var G__17380 = (i__16636__auto___17379 + (1));
i__16636__auto___17379 = G__17380;
continue;
} else {
}
break;
}

var G__17377 = args17375.length;
switch (G__17377) {
case 1:
return sablono.core.text_area17374.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area17374.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17375.length)].join('')));

}
});

sablono.core.text_area17374.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area17374.call(null,name,null);
});

sablono.core.text_area17374.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area17374.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area17374);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label17382 = (function sablono$core$label17382(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label17382);
/**
 * Creates a submit button.
 */
sablono.core.submit_button17383 = (function sablono$core$submit_button17383(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button17383);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button17384 = (function sablono$core$reset_button17384(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button17384);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to17385 = (function sablono$core$form_to17385(var_args){
var args__16642__auto__ = [];
var len__16635__auto___17390 = arguments.length;
var i__16636__auto___17391 = (0);
while(true){
if((i__16636__auto___17391 < len__16635__auto___17390)){
args__16642__auto__.push((arguments[i__16636__auto___17391]));

var G__17392 = (i__16636__auto___17391 + (1));
i__16636__auto___17391 = G__17392;
continue;
} else {
}
break;
}

var argseq__16643__auto__ = ((((1) < args__16642__auto__.length))?(new cljs.core.IndexedSeq(args__16642__auto__.slice((1)),(0))):null);
return sablono.core.form_to17385.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__16643__auto__);
});

sablono.core.form_to17385.cljs$core$IFn$_invoke$arity$variadic = (function (p__17388,body){
var vec__17389 = p__17388;
var method = cljs.core.nth.call(null,vec__17389,(0),null);
var action = cljs.core.nth.call(null,vec__17389,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to17385.cljs$lang$maxFixedArity = (1);

sablono.core.form_to17385.cljs$lang$applyTo = (function (seq17386){
var G__17387 = cljs.core.first.call(null,seq17386);
var seq17386__$1 = cljs.core.next.call(null,seq17386);
return sablono.core.form_to17385.cljs$core$IFn$_invoke$arity$variadic(G__17387,seq17386__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to17385);

//# sourceMappingURL=core.js.map?rel=1451075913570