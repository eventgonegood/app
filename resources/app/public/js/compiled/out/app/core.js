// Compiled by ClojureScript 1.7.170 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
app.core.abc = (function app$core$abc(namey){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),namey], null)], null);
});
app.core.main = (function app$core$main(){
var temp__4423__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4423__auto__)){
var node = temp__4423__auto__;
return React.render(React.createElement("div",null,"This is working"),node);
} else {
return null;
}
});
app.core.main.call(null);

//# sourceMappingURL=core.js.map