// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args27734 = [];
var len__26580__auto___27740 = arguments.length;
var i__26581__auto___27741 = (0);
while(true){
if((i__26581__auto___27741 < len__26580__auto___27740)){
args27734.push((arguments[i__26581__auto___27741]));

var G__27742 = (i__26581__auto___27741 + (1));
i__26581__auto___27741 = G__27742;
continue;
} else {
}
break;
}

var G__27736 = args27734.length;
switch (G__27736) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27734.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async27737 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27737 = (function (f,blockable,meta27738){
this.f = f;
this.blockable = blockable;
this.meta27738 = meta27738;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27737.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27739,meta27738__$1){
var self__ = this;
var _27739__$1 = this;
return (new cljs.core.async.t_cljs$core$async27737(self__.f,self__.blockable,meta27738__$1));
});

cljs.core.async.t_cljs$core$async27737.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27739){
var self__ = this;
var _27739__$1 = this;
return self__.meta27738;
});

cljs.core.async.t_cljs$core$async27737.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27737.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27737.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async27737.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async27737.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27738","meta27738",-1373350215,null)], null);
});

cljs.core.async.t_cljs$core$async27737.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27737.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27737";

cljs.core.async.t_cljs$core$async27737.cljs$lang$ctorPrWriter = (function (this__26120__auto__,writer__26121__auto__,opt__26122__auto__){
return cljs.core._write.call(null,writer__26121__auto__,"cljs.core.async/t_cljs$core$async27737");
});

cljs.core.async.__GT_t_cljs$core$async27737 = (function cljs$core$async$__GT_t_cljs$core$async27737(f__$1,blockable__$1,meta27738){
return (new cljs.core.async.t_cljs$core$async27737(f__$1,blockable__$1,meta27738));
});

}

return (new cljs.core.async.t_cljs$core$async27737(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args27746 = [];
var len__26580__auto___27749 = arguments.length;
var i__26581__auto___27750 = (0);
while(true){
if((i__26581__auto___27750 < len__26580__auto___27749)){
args27746.push((arguments[i__26581__auto___27750]));

var G__27751 = (i__26581__auto___27750 + (1));
i__26581__auto___27750 = G__27751;
continue;
} else {
}
break;
}

var G__27748 = args27746.length;
switch (G__27748) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27746.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args27753 = [];
var len__26580__auto___27756 = arguments.length;
var i__26581__auto___27757 = (0);
while(true){
if((i__26581__auto___27757 < len__26580__auto___27756)){
args27753.push((arguments[i__26581__auto___27757]));

var G__27758 = (i__26581__auto___27757 + (1));
i__26581__auto___27757 = G__27758;
continue;
} else {
}
break;
}

var G__27755 = args27753.length;
switch (G__27755) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27753.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args27760 = [];
var len__26580__auto___27763 = arguments.length;
var i__26581__auto___27764 = (0);
while(true){
if((i__26581__auto___27764 < len__26580__auto___27763)){
args27760.push((arguments[i__26581__auto___27764]));

var G__27765 = (i__26581__auto___27764 + (1));
i__26581__auto___27764 = G__27765;
continue;
} else {
}
break;
}

var G__27762 = args27760.length;
switch (G__27762) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27760.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27767 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27767);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_27767,ret){
return (function (){
return fn1.call(null,val_27767);
});})(val_27767,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args27768 = [];
var len__26580__auto___27771 = arguments.length;
var i__26581__auto___27772 = (0);
while(true){
if((i__26581__auto___27772 < len__26580__auto___27771)){
args27768.push((arguments[i__26581__auto___27772]));

var G__27773 = (i__26581__auto___27772 + (1));
i__26581__auto___27772 = G__27773;
continue;
} else {
}
break;
}

var G__27770 = args27768.length;
switch (G__27770) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27768.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__26425__auto___27775 = n;
var x_27776 = (0);
while(true){
if((x_27776 < n__26425__auto___27775)){
(a[x_27776] = (0));

var G__27777 = (x_27776 + (1));
x_27776 = G__27777;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27778 = (i + (1));
i = G__27778;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async27782 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27782 = (function (alt_flag,flag,meta27783){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta27783 = meta27783;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27784,meta27783__$1){
var self__ = this;
var _27784__$1 = this;
return (new cljs.core.async.t_cljs$core$async27782(self__.alt_flag,self__.flag,meta27783__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async27782.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27784){
var self__ = this;
var _27784__$1 = this;
return self__.meta27783;
});})(flag))
;

cljs.core.async.t_cljs$core$async27782.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27782.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async27782.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27782.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async27782.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27783","meta27783",1627958496,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async27782.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27782.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27782";

cljs.core.async.t_cljs$core$async27782.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__26120__auto__,writer__26121__auto__,opt__26122__auto__){
return cljs.core._write.call(null,writer__26121__auto__,"cljs.core.async/t_cljs$core$async27782");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async27782 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27782(alt_flag__$1,flag__$1,meta27783){
return (new cljs.core.async.t_cljs$core$async27782(alt_flag__$1,flag__$1,meta27783));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async27782(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async27788 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27788 = (function (alt_handler,flag,cb,meta27789){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta27789 = meta27789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27790,meta27789__$1){
var self__ = this;
var _27790__$1 = this;
return (new cljs.core.async.t_cljs$core$async27788(self__.alt_handler,self__.flag,self__.cb,meta27789__$1));
});

cljs.core.async.t_cljs$core$async27788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27790){
var self__ = this;
var _27790__$1 = this;
return self__.meta27789;
});

cljs.core.async.t_cljs$core$async27788.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27788.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async27788.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async27788.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async27788.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27789","meta27789",1877266574,null)], null);
});

cljs.core.async.t_cljs$core$async27788.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27788.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27788";

cljs.core.async.t_cljs$core$async27788.cljs$lang$ctorPrWriter = (function (this__26120__auto__,writer__26121__auto__,opt__26122__auto__){
return cljs.core._write.call(null,writer__26121__auto__,"cljs.core.async/t_cljs$core$async27788");
});

cljs.core.async.__GT_t_cljs$core$async27788 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27788(alt_handler__$1,flag__$1,cb__$1,meta27789){
return (new cljs.core.async.t_cljs$core$async27788(alt_handler__$1,flag__$1,cb__$1,meta27789));
});

}

return (new cljs.core.async.t_cljs$core$async27788(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27791_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27791_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27792_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27792_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__25522__auto__ = wport;
if(cljs.core.truth_(or__25522__auto__)){
return or__25522__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27793 = (i + (1));
i = G__27793;
continue;
}
} else {
return null;
}
break;
}
})();
var or__25522__auto__ = ret;
if(cljs.core.truth_(or__25522__auto__)){
return or__25522__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__25510__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__25510__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__25510__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__26587__auto__ = [];
var len__26580__auto___27799 = arguments.length;
var i__26581__auto___27800 = (0);
while(true){
if((i__26581__auto___27800 < len__26580__auto___27799)){
args__26587__auto__.push((arguments[i__26581__auto___27800]));

var G__27801 = (i__26581__auto___27800 + (1));
i__26581__auto___27800 = G__27801;
continue;
} else {
}
break;
}

var argseq__26588__auto__ = ((((1) < args__26587__auto__.length))?(new cljs.core.IndexedSeq(args__26587__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__26588__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27796){
var map__27797 = p__27796;
var map__27797__$1 = ((((!((map__27797 == null)))?((((map__27797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27797):map__27797);
var opts = map__27797__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27794){
var G__27795 = cljs.core.first.call(null,seq27794);
var seq27794__$1 = cljs.core.next.call(null,seq27794);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27795,seq27794__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args27802 = [];
var len__26580__auto___27852 = arguments.length;
var i__26581__auto___27853 = (0);
while(true){
if((i__26581__auto___27853 < len__26580__auto___27852)){
args27802.push((arguments[i__26581__auto___27853]));

var G__27854 = (i__26581__auto___27853 + (1));
i__26581__auto___27853 = G__27854;
continue;
} else {
}
break;
}

var G__27804 = args27802.length;
switch (G__27804) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27802.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27689__auto___27856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27689__auto___27856){
return (function (){
var f__27690__auto__ = (function (){var switch__27577__auto__ = ((function (c__27689__auto___27856){
return (function (state_27828){
var state_val_27829 = (state_27828[(1)]);
if((state_val_27829 === (7))){
var inst_27824 = (state_27828[(2)]);
var state_27828__$1 = state_27828;
var statearr_27830_27857 = state_27828__$1;
(statearr_27830_27857[(2)] = inst_27824);

(statearr_27830_27857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (1))){
var state_27828__$1 = state_27828;
var statearr_27831_27858 = state_27828__$1;
(statearr_27831_27858[(2)] = null);

(statearr_27831_27858[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (4))){
var inst_27807 = (state_27828[(7)]);
var inst_27807__$1 = (state_27828[(2)]);
var inst_27808 = (inst_27807__$1 == null);
var state_27828__$1 = (function (){var statearr_27832 = state_27828;
(statearr_27832[(7)] = inst_27807__$1);

return statearr_27832;
})();
if(cljs.core.truth_(inst_27808)){
var statearr_27833_27859 = state_27828__$1;
(statearr_27833_27859[(1)] = (5));

} else {
var statearr_27834_27860 = state_27828__$1;
(statearr_27834_27860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (13))){
var state_27828__$1 = state_27828;
var statearr_27835_27861 = state_27828__$1;
(statearr_27835_27861[(2)] = null);

(statearr_27835_27861[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (6))){
var inst_27807 = (state_27828[(7)]);
var state_27828__$1 = state_27828;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27828__$1,(11),to,inst_27807);
} else {
if((state_val_27829 === (3))){
var inst_27826 = (state_27828[(2)]);
var state_27828__$1 = state_27828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27828__$1,inst_27826);
} else {
if((state_val_27829 === (12))){
var state_27828__$1 = state_27828;
var statearr_27836_27862 = state_27828__$1;
(statearr_27836_27862[(2)] = null);

(statearr_27836_27862[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (2))){
var state_27828__$1 = state_27828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27828__$1,(4),from);
} else {
if((state_val_27829 === (11))){
var inst_27817 = (state_27828[(2)]);
var state_27828__$1 = state_27828;
if(cljs.core.truth_(inst_27817)){
var statearr_27837_27863 = state_27828__$1;
(statearr_27837_27863[(1)] = (12));

} else {
var statearr_27838_27864 = state_27828__$1;
(statearr_27838_27864[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (9))){
var state_27828__$1 = state_27828;
var statearr_27839_27865 = state_27828__$1;
(statearr_27839_27865[(2)] = null);

(statearr_27839_27865[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (5))){
var state_27828__$1 = state_27828;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27840_27866 = state_27828__$1;
(statearr_27840_27866[(1)] = (8));

} else {
var statearr_27841_27867 = state_27828__$1;
(statearr_27841_27867[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (14))){
var inst_27822 = (state_27828[(2)]);
var state_27828__$1 = state_27828;
var statearr_27842_27868 = state_27828__$1;
(statearr_27842_27868[(2)] = inst_27822);

(statearr_27842_27868[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (10))){
var inst_27814 = (state_27828[(2)]);
var state_27828__$1 = state_27828;
var statearr_27843_27869 = state_27828__$1;
(statearr_27843_27869[(2)] = inst_27814);

(statearr_27843_27869[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27829 === (8))){
var inst_27811 = cljs.core.async.close_BANG_.call(null,to);
var state_27828__$1 = state_27828;
var statearr_27844_27870 = state_27828__$1;
(statearr_27844_27870[(2)] = inst_27811);

(statearr_27844_27870[(1)] = (10));


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
});})(c__27689__auto___27856))
;
return ((function (switch__27577__auto__,c__27689__auto___27856){
return (function() {
var cljs$core$async$state_machine__27578__auto__ = null;
var cljs$core$async$state_machine__27578__auto____0 = (function (){
var statearr_27848 = [null,null,null,null,null,null,null,null];
(statearr_27848[(0)] = cljs$core$async$state_machine__27578__auto__);

(statearr_27848[(1)] = (1));

return statearr_27848;
});
var cljs$core$async$state_machine__27578__auto____1 = (function (state_27828){
while(true){
var ret_value__27579__auto__ = (function (){try{while(true){
var result__27580__auto__ = switch__27577__auto__.call(null,state_27828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27580__auto__;
}
break;
}
}catch (e27849){if((e27849 instanceof Object)){
var ex__27581__auto__ = e27849;
var statearr_27850_27871 = state_27828;
(statearr_27850_27871[(5)] = ex__27581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27849;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27872 = state_27828;
state_27828 = G__27872;
continue;
} else {
return ret_value__27579__auto__;
}
break;
}
});
cljs$core$async$state_machine__27578__auto__ = function(state_27828){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27578__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27578__auto____1.call(this,state_27828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27578__auto____0;
cljs$core$async$state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27578__auto____1;
return cljs$core$async$state_machine__27578__auto__;
})()
;})(switch__27577__auto__,c__27689__auto___27856))
})();
var state__27691__auto__ = (function (){var statearr_27851 = f__27690__auto__.call(null);
(statearr_27851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27689__auto___27856);

return statearr_27851;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27691__auto__);
});})(c__27689__auto___27856))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__28056){
var vec__28057 = p__28056;
var v = cljs.core.nth.call(null,vec__28057,(0),null);
var p = cljs.core.nth.call(null,vec__28057,(1),null);
var job = vec__28057;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27689__auto___28239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27689__auto___28239,res,vec__28057,v,p,job,jobs,results){
return (function (){
var f__27690__auto__ = (function (){var switch__27577__auto__ = ((function (c__27689__auto___28239,res,vec__28057,v,p,job,jobs,results){
return (function (state_28062){
var state_val_28063 = (state_28062[(1)]);
if((state_val_28063 === (1))){
var state_28062__$1 = state_28062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28062__$1,(2),res,v);
} else {
if((state_val_28063 === (2))){
var inst_28059 = (state_28062[(2)]);
var inst_28060 = cljs.core.async.close_BANG_.call(null,res);
var state_28062__$1 = (function (){var statearr_28064 = state_28062;
(statearr_28064[(7)] = inst_28059);

return statearr_28064;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28062__$1,inst_28060);
} else {
return null;
}
}
});})(c__27689__auto___28239,res,vec__28057,v,p,job,jobs,results))
;
return ((function (switch__27577__auto__,c__27689__auto___28239,res,vec__28057,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____0 = (function (){
var statearr_28068 = [null,null,null,null,null,null,null,null];
(statearr_28068[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__);

(statearr_28068[(1)] = (1));

return statearr_28068;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____1 = (function (state_28062){
while(true){
var ret_value__27579__auto__ = (function (){try{while(true){
var result__27580__auto__ = switch__27577__auto__.call(null,state_28062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27580__auto__;
}
break;
}
}catch (e28069){if((e28069 instanceof Object)){
var ex__27581__auto__ = e28069;
var statearr_28070_28240 = state_28062;
(statearr_28070_28240[(5)] = ex__27581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28069;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28241 = state_28062;
state_28062 = G__28241;
continue;
} else {
return ret_value__27579__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__ = function(state_28062){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____1.call(this,state_28062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__;
})()
;})(switch__27577__auto__,c__27689__auto___28239,res,vec__28057,v,p,job,jobs,results))
})();
var state__27691__auto__ = (function (){var statearr_28071 = f__27690__auto__.call(null);
(statearr_28071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27689__auto___28239);

return statearr_28071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27691__auto__);
});})(c__27689__auto___28239,res,vec__28057,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__28072){
var vec__28073 = p__28072;
var v = cljs.core.nth.call(null,vec__28073,(0),null);
var p = cljs.core.nth.call(null,vec__28073,(1),null);
var job = vec__28073;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__26425__auto___28242 = n;
var __28243 = (0);
while(true){
if((__28243 < n__26425__auto___28242)){
var G__28074_28244 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__28074_28244) {
case "compute":
var c__27689__auto___28246 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28243,c__27689__auto___28246,G__28074_28244,n__26425__auto___28242,jobs,results,process,async){
return (function (){
var f__27690__auto__ = (function (){var switch__27577__auto__ = ((function (__28243,c__27689__auto___28246,G__28074_28244,n__26425__auto___28242,jobs,results,process,async){
return (function (state_28087){
var state_val_28088 = (state_28087[(1)]);
if((state_val_28088 === (1))){
var state_28087__$1 = state_28087;
var statearr_28089_28247 = state_28087__$1;
(statearr_28089_28247[(2)] = null);

(statearr_28089_28247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28088 === (2))){
var state_28087__$1 = state_28087;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28087__$1,(4),jobs);
} else {
if((state_val_28088 === (3))){
var inst_28085 = (state_28087[(2)]);
var state_28087__$1 = state_28087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28087__$1,inst_28085);
} else {
if((state_val_28088 === (4))){
var inst_28077 = (state_28087[(2)]);
var inst_28078 = process.call(null,inst_28077);
var state_28087__$1 = state_28087;
if(cljs.core.truth_(inst_28078)){
var statearr_28090_28248 = state_28087__$1;
(statearr_28090_28248[(1)] = (5));

} else {
var statearr_28091_28249 = state_28087__$1;
(statearr_28091_28249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28088 === (5))){
var state_28087__$1 = state_28087;
var statearr_28092_28250 = state_28087__$1;
(statearr_28092_28250[(2)] = null);

(statearr_28092_28250[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28088 === (6))){
var state_28087__$1 = state_28087;
var statearr_28093_28251 = state_28087__$1;
(statearr_28093_28251[(2)] = null);

(statearr_28093_28251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28088 === (7))){
var inst_28083 = (state_28087[(2)]);
var state_28087__$1 = state_28087;
var statearr_28094_28252 = state_28087__$1;
(statearr_28094_28252[(2)] = inst_28083);

(statearr_28094_28252[(1)] = (3));


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
});})(__28243,c__27689__auto___28246,G__28074_28244,n__26425__auto___28242,jobs,results,process,async))
;
return ((function (__28243,switch__27577__auto__,c__27689__auto___28246,G__28074_28244,n__26425__auto___28242,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____0 = (function (){
var statearr_28098 = [null,null,null,null,null,null,null];
(statearr_28098[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__);

(statearr_28098[(1)] = (1));

return statearr_28098;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____1 = (function (state_28087){
while(true){
var ret_value__27579__auto__ = (function (){try{while(true){
var result__27580__auto__ = switch__27577__auto__.call(null,state_28087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27580__auto__;
}
break;
}
}catch (e28099){if((e28099 instanceof Object)){
var ex__27581__auto__ = e28099;
var statearr_28100_28253 = state_28087;
(statearr_28100_28253[(5)] = ex__27581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28099;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28254 = state_28087;
state_28087 = G__28254;
continue;
} else {
return ret_value__27579__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__ = function(state_28087){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____1.call(this,state_28087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__;
})()
;})(__28243,switch__27577__auto__,c__27689__auto___28246,G__28074_28244,n__26425__auto___28242,jobs,results,process,async))
})();
var state__27691__auto__ = (function (){var statearr_28101 = f__27690__auto__.call(null);
(statearr_28101[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27689__auto___28246);

return statearr_28101;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27691__auto__);
});})(__28243,c__27689__auto___28246,G__28074_28244,n__26425__auto___28242,jobs,results,process,async))
);


break;
case "async":
var c__27689__auto___28255 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__28243,c__27689__auto___28255,G__28074_28244,n__26425__auto___28242,jobs,results,process,async){
return (function (){
var f__27690__auto__ = (function (){var switch__27577__auto__ = ((function (__28243,c__27689__auto___28255,G__28074_28244,n__26425__auto___28242,jobs,results,process,async){
return (function (state_28114){
var state_val_28115 = (state_28114[(1)]);
if((state_val_28115 === (1))){
var state_28114__$1 = state_28114;
var statearr_28116_28256 = state_28114__$1;
(statearr_28116_28256[(2)] = null);

(statearr_28116_28256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (2))){
var state_28114__$1 = state_28114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28114__$1,(4),jobs);
} else {
if((state_val_28115 === (3))){
var inst_28112 = (state_28114[(2)]);
var state_28114__$1 = state_28114;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28114__$1,inst_28112);
} else {
if((state_val_28115 === (4))){
var inst_28104 = (state_28114[(2)]);
var inst_28105 = async.call(null,inst_28104);
var state_28114__$1 = state_28114;
if(cljs.core.truth_(inst_28105)){
var statearr_28117_28257 = state_28114__$1;
(statearr_28117_28257[(1)] = (5));

} else {
var statearr_28118_28258 = state_28114__$1;
(statearr_28118_28258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (5))){
var state_28114__$1 = state_28114;
var statearr_28119_28259 = state_28114__$1;
(statearr_28119_28259[(2)] = null);

(statearr_28119_28259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (6))){
var state_28114__$1 = state_28114;
var statearr_28120_28260 = state_28114__$1;
(statearr_28120_28260[(2)] = null);

(statearr_28120_28260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28115 === (7))){
var inst_28110 = (state_28114[(2)]);
var state_28114__$1 = state_28114;
var statearr_28121_28261 = state_28114__$1;
(statearr_28121_28261[(2)] = inst_28110);

(statearr_28121_28261[(1)] = (3));


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
});})(__28243,c__27689__auto___28255,G__28074_28244,n__26425__auto___28242,jobs,results,process,async))
;
return ((function (__28243,switch__27577__auto__,c__27689__auto___28255,G__28074_28244,n__26425__auto___28242,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____0 = (function (){
var statearr_28125 = [null,null,null,null,null,null,null];
(statearr_28125[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__);

(statearr_28125[(1)] = (1));

return statearr_28125;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____1 = (function (state_28114){
while(true){
var ret_value__27579__auto__ = (function (){try{while(true){
var result__27580__auto__ = switch__27577__auto__.call(null,state_28114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27580__auto__;
}
break;
}
}catch (e28126){if((e28126 instanceof Object)){
var ex__27581__auto__ = e28126;
var statearr_28127_28262 = state_28114;
(statearr_28127_28262[(5)] = ex__27581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28126;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28263 = state_28114;
state_28114 = G__28263;
continue;
} else {
return ret_value__27579__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__ = function(state_28114){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____1.call(this,state_28114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__;
})()
;})(__28243,switch__27577__auto__,c__27689__auto___28255,G__28074_28244,n__26425__auto___28242,jobs,results,process,async))
})();
var state__27691__auto__ = (function (){var statearr_28128 = f__27690__auto__.call(null);
(statearr_28128[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27689__auto___28255);

return statearr_28128;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27691__auto__);
});})(__28243,c__27689__auto___28255,G__28074_28244,n__26425__auto___28242,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__28264 = (__28243 + (1));
__28243 = G__28264;
continue;
} else {
}
break;
}

var c__27689__auto___28265 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27689__auto___28265,jobs,results,process,async){
return (function (){
var f__27690__auto__ = (function (){var switch__27577__auto__ = ((function (c__27689__auto___28265,jobs,results,process,async){
return (function (state_28150){
var state_val_28151 = (state_28150[(1)]);
if((state_val_28151 === (1))){
var state_28150__$1 = state_28150;
var statearr_28152_28266 = state_28150__$1;
(statearr_28152_28266[(2)] = null);

(statearr_28152_28266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (2))){
var state_28150__$1 = state_28150;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28150__$1,(4),from);
} else {
if((state_val_28151 === (3))){
var inst_28148 = (state_28150[(2)]);
var state_28150__$1 = state_28150;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28150__$1,inst_28148);
} else {
if((state_val_28151 === (4))){
var inst_28131 = (state_28150[(7)]);
var inst_28131__$1 = (state_28150[(2)]);
var inst_28132 = (inst_28131__$1 == null);
var state_28150__$1 = (function (){var statearr_28153 = state_28150;
(statearr_28153[(7)] = inst_28131__$1);

return statearr_28153;
})();
if(cljs.core.truth_(inst_28132)){
var statearr_28154_28267 = state_28150__$1;
(statearr_28154_28267[(1)] = (5));

} else {
var statearr_28155_28268 = state_28150__$1;
(statearr_28155_28268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (5))){
var inst_28134 = cljs.core.async.close_BANG_.call(null,jobs);
var state_28150__$1 = state_28150;
var statearr_28156_28269 = state_28150__$1;
(statearr_28156_28269[(2)] = inst_28134);

(statearr_28156_28269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (6))){
var inst_28136 = (state_28150[(8)]);
var inst_28131 = (state_28150[(7)]);
var inst_28136__$1 = cljs.core.async.chan.call(null,(1));
var inst_28137 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_28138 = [inst_28131,inst_28136__$1];
var inst_28139 = (new cljs.core.PersistentVector(null,2,(5),inst_28137,inst_28138,null));
var state_28150__$1 = (function (){var statearr_28157 = state_28150;
(statearr_28157[(8)] = inst_28136__$1);

return statearr_28157;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28150__$1,(8),jobs,inst_28139);
} else {
if((state_val_28151 === (7))){
var inst_28146 = (state_28150[(2)]);
var state_28150__$1 = state_28150;
var statearr_28158_28270 = state_28150__$1;
(statearr_28158_28270[(2)] = inst_28146);

(statearr_28158_28270[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28151 === (8))){
var inst_28136 = (state_28150[(8)]);
var inst_28141 = (state_28150[(2)]);
var state_28150__$1 = (function (){var statearr_28159 = state_28150;
(statearr_28159[(9)] = inst_28141);

return statearr_28159;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28150__$1,(9),results,inst_28136);
} else {
if((state_val_28151 === (9))){
var inst_28143 = (state_28150[(2)]);
var state_28150__$1 = (function (){var statearr_28160 = state_28150;
(statearr_28160[(10)] = inst_28143);

return statearr_28160;
})();
var statearr_28161_28271 = state_28150__$1;
(statearr_28161_28271[(2)] = null);

(statearr_28161_28271[(1)] = (2));


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
});})(c__27689__auto___28265,jobs,results,process,async))
;
return ((function (switch__27577__auto__,c__27689__auto___28265,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____0 = (function (){
var statearr_28165 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28165[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__);

(statearr_28165[(1)] = (1));

return statearr_28165;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____1 = (function (state_28150){
while(true){
var ret_value__27579__auto__ = (function (){try{while(true){
var result__27580__auto__ = switch__27577__auto__.call(null,state_28150);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27580__auto__;
}
break;
}
}catch (e28166){if((e28166 instanceof Object)){
var ex__27581__auto__ = e28166;
var statearr_28167_28272 = state_28150;
(statearr_28167_28272[(5)] = ex__27581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28273 = state_28150;
state_28150 = G__28273;
continue;
} else {
return ret_value__27579__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__ = function(state_28150){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____1.call(this,state_28150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__;
})()
;})(switch__27577__auto__,c__27689__auto___28265,jobs,results,process,async))
})();
var state__27691__auto__ = (function (){var statearr_28168 = f__27690__auto__.call(null);
(statearr_28168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27689__auto___28265);

return statearr_28168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27691__auto__);
});})(c__27689__auto___28265,jobs,results,process,async))
);


var c__27689__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27689__auto__,jobs,results,process,async){
return (function (){
var f__27690__auto__ = (function (){var switch__27577__auto__ = ((function (c__27689__auto__,jobs,results,process,async){
return (function (state_28206){
var state_val_28207 = (state_28206[(1)]);
if((state_val_28207 === (7))){
var inst_28202 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28208_28274 = state_28206__$1;
(statearr_28208_28274[(2)] = inst_28202);

(statearr_28208_28274[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (20))){
var state_28206__$1 = state_28206;
var statearr_28209_28275 = state_28206__$1;
(statearr_28209_28275[(2)] = null);

(statearr_28209_28275[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (1))){
var state_28206__$1 = state_28206;
var statearr_28210_28276 = state_28206__$1;
(statearr_28210_28276[(2)] = null);

(statearr_28210_28276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (4))){
var inst_28171 = (state_28206[(7)]);
var inst_28171__$1 = (state_28206[(2)]);
var inst_28172 = (inst_28171__$1 == null);
var state_28206__$1 = (function (){var statearr_28211 = state_28206;
(statearr_28211[(7)] = inst_28171__$1);

return statearr_28211;
})();
if(cljs.core.truth_(inst_28172)){
var statearr_28212_28277 = state_28206__$1;
(statearr_28212_28277[(1)] = (5));

} else {
var statearr_28213_28278 = state_28206__$1;
(statearr_28213_28278[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (15))){
var inst_28184 = (state_28206[(8)]);
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28206__$1,(18),to,inst_28184);
} else {
if((state_val_28207 === (21))){
var inst_28197 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28214_28279 = state_28206__$1;
(statearr_28214_28279[(2)] = inst_28197);

(statearr_28214_28279[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (13))){
var inst_28199 = (state_28206[(2)]);
var state_28206__$1 = (function (){var statearr_28215 = state_28206;
(statearr_28215[(9)] = inst_28199);

return statearr_28215;
})();
var statearr_28216_28280 = state_28206__$1;
(statearr_28216_28280[(2)] = null);

(statearr_28216_28280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (6))){
var inst_28171 = (state_28206[(7)]);
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28206__$1,(11),inst_28171);
} else {
if((state_val_28207 === (17))){
var inst_28192 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
if(cljs.core.truth_(inst_28192)){
var statearr_28217_28281 = state_28206__$1;
(statearr_28217_28281[(1)] = (19));

} else {
var statearr_28218_28282 = state_28206__$1;
(statearr_28218_28282[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (3))){
var inst_28204 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28206__$1,inst_28204);
} else {
if((state_val_28207 === (12))){
var inst_28181 = (state_28206[(10)]);
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28206__$1,(14),inst_28181);
} else {
if((state_val_28207 === (2))){
var state_28206__$1 = state_28206;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28206__$1,(4),results);
} else {
if((state_val_28207 === (19))){
var state_28206__$1 = state_28206;
var statearr_28219_28283 = state_28206__$1;
(statearr_28219_28283[(2)] = null);

(statearr_28219_28283[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (11))){
var inst_28181 = (state_28206[(2)]);
var state_28206__$1 = (function (){var statearr_28220 = state_28206;
(statearr_28220[(10)] = inst_28181);

return statearr_28220;
})();
var statearr_28221_28284 = state_28206__$1;
(statearr_28221_28284[(2)] = null);

(statearr_28221_28284[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (9))){
var state_28206__$1 = state_28206;
var statearr_28222_28285 = state_28206__$1;
(statearr_28222_28285[(2)] = null);

(statearr_28222_28285[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (5))){
var state_28206__$1 = state_28206;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28223_28286 = state_28206__$1;
(statearr_28223_28286[(1)] = (8));

} else {
var statearr_28224_28287 = state_28206__$1;
(statearr_28224_28287[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (14))){
var inst_28186 = (state_28206[(11)]);
var inst_28184 = (state_28206[(8)]);
var inst_28184__$1 = (state_28206[(2)]);
var inst_28185 = (inst_28184__$1 == null);
var inst_28186__$1 = cljs.core.not.call(null,inst_28185);
var state_28206__$1 = (function (){var statearr_28225 = state_28206;
(statearr_28225[(11)] = inst_28186__$1);

(statearr_28225[(8)] = inst_28184__$1);

return statearr_28225;
})();
if(inst_28186__$1){
var statearr_28226_28288 = state_28206__$1;
(statearr_28226_28288[(1)] = (15));

} else {
var statearr_28227_28289 = state_28206__$1;
(statearr_28227_28289[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (16))){
var inst_28186 = (state_28206[(11)]);
var state_28206__$1 = state_28206;
var statearr_28228_28290 = state_28206__$1;
(statearr_28228_28290[(2)] = inst_28186);

(statearr_28228_28290[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (10))){
var inst_28178 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28229_28291 = state_28206__$1;
(statearr_28229_28291[(2)] = inst_28178);

(statearr_28229_28291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (18))){
var inst_28189 = (state_28206[(2)]);
var state_28206__$1 = state_28206;
var statearr_28230_28292 = state_28206__$1;
(statearr_28230_28292[(2)] = inst_28189);

(statearr_28230_28292[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28207 === (8))){
var inst_28175 = cljs.core.async.close_BANG_.call(null,to);
var state_28206__$1 = state_28206;
var statearr_28231_28293 = state_28206__$1;
(statearr_28231_28293[(2)] = inst_28175);

(statearr_28231_28293[(1)] = (10));


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
});})(c__27689__auto__,jobs,results,process,async))
;
return ((function (switch__27577__auto__,c__27689__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____0 = (function (){
var statearr_28235 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28235[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__);

(statearr_28235[(1)] = (1));

return statearr_28235;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____1 = (function (state_28206){
while(true){
var ret_value__27579__auto__ = (function (){try{while(true){
var result__27580__auto__ = switch__27577__auto__.call(null,state_28206);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27580__auto__;
}
break;
}
}catch (e28236){if((e28236 instanceof Object)){
var ex__27581__auto__ = e28236;
var statearr_28237_28294 = state_28206;
(statearr_28237_28294[(5)] = ex__27581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28206);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28295 = state_28206;
state_28206 = G__28295;
continue;
} else {
return ret_value__27579__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__ = function(state_28206){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____1.call(this,state_28206);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27578__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27578__auto__;
})()
;})(switch__27577__auto__,c__27689__auto__,jobs,results,process,async))
})();
var state__27691__auto__ = (function (){var statearr_28238 = f__27690__auto__.call(null);
(statearr_28238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27689__auto__);

return statearr_28238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27691__auto__);
});})(c__27689__auto__,jobs,results,process,async))
);

return c__27689__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args28296 = [];
var len__26580__auto___28299 = arguments.length;
var i__26581__auto___28300 = (0);
while(true){
if((i__26581__auto___28300 < len__26580__auto___28299)){
args28296.push((arguments[i__26581__auto___28300]));

var G__28301 = (i__26581__auto___28300 + (1));
i__26581__auto___28300 = G__28301;
continue;
} else {
}
break;
}

var G__28298 = args28296.length;
switch (G__28298) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28296.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args28303 = [];
var len__26580__auto___28306 = arguments.length;
var i__26581__auto___28307 = (0);
while(true){
if((i__26581__auto___28307 < len__26580__auto___28306)){
args28303.push((arguments[i__26581__auto___28307]));

var G__28308 = (i__26581__auto___28307 + (1));
i__26581__auto___28307 = G__28308;
continue;
} else {
}
break;
}

var G__28305 = args28303.length;
switch (G__28305) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28303.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args28310 = [];
var len__26580__auto___28363 = arguments.length;
var i__26581__auto___28364 = (0);
while(true){
if((i__26581__auto___28364 < len__26580__auto___28363)){
args28310.push((arguments[i__26581__auto___28364]));

var G__28365 = (i__26581__auto___28364 + (1));
i__26581__auto___28364 = G__28365;
continue;
} else {
}
break;
}

var G__28312 = args28310.length;
switch (G__28312) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28310.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27689__auto___28367 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27689__auto___28367,tc,fc){
return (function (){
var f__27690__auto__ = (function (){var switch__27577__auto__ = ((function (c__27689__auto___28367,tc,fc){
return (function (state_28338){
var state_val_28339 = (state_28338[(1)]);
if((state_val_28339 === (7))){
var inst_28334 = (state_28338[(2)]);
var state_28338__$1 = state_28338;
var statearr_28340_28368 = state_28338__$1;
(statearr_28340_28368[(2)] = inst_28334);

(statearr_28340_28368[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (1))){
var state_28338__$1 = state_28338;
var statearr_28341_28369 = state_28338__$1;
(statearr_28341_28369[(2)] = null);

(statearr_28341_28369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (4))){
var inst_28315 = (state_28338[(7)]);
var inst_28315__$1 = (state_28338[(2)]);
var inst_28316 = (inst_28315__$1 == null);
var state_28338__$1 = (function (){var statearr_28342 = state_28338;
(statearr_28342[(7)] = inst_28315__$1);

return statearr_28342;
})();
if(cljs.core.truth_(inst_28316)){
var statearr_28343_28370 = state_28338__$1;
(statearr_28343_28370[(1)] = (5));

} else {
var statearr_28344_28371 = state_28338__$1;
(statearr_28344_28371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (13))){
var state_28338__$1 = state_28338;
var statearr_28345_28372 = state_28338__$1;
(statearr_28345_28372[(2)] = null);

(statearr_28345_28372[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (6))){
var inst_28315 = (state_28338[(7)]);
var inst_28321 = p.call(null,inst_28315);
var state_28338__$1 = state_28338;
if(cljs.core.truth_(inst_28321)){
var statearr_28346_28373 = state_28338__$1;
(statearr_28346_28373[(1)] = (9));

} else {
var statearr_28347_28374 = state_28338__$1;
(statearr_28347_28374[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (3))){
var inst_28336 = (state_28338[(2)]);
var state_28338__$1 = state_28338;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28338__$1,inst_28336);
} else {
if((state_val_28339 === (12))){
var state_28338__$1 = state_28338;
var statearr_28348_28375 = state_28338__$1;
(statearr_28348_28375[(2)] = null);

(statearr_28348_28375[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (2))){
var state_28338__$1 = state_28338;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28338__$1,(4),ch);
} else {
if((state_val_28339 === (11))){
var inst_28315 = (state_28338[(7)]);
var inst_28325 = (state_28338[(2)]);
var state_28338__$1 = state_28338;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28338__$1,(8),inst_28325,inst_28315);
} else {
if((state_val_28339 === (9))){
var state_28338__$1 = state_28338;
var statearr_28349_28376 = state_28338__$1;
(statearr_28349_28376[(2)] = tc);

(statearr_28349_28376[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (5))){
var inst_28318 = cljs.core.async.close_BANG_.call(null,tc);
var inst_28319 = cljs.core.async.close_BANG_.call(null,fc);
var state_28338__$1 = (function (){var statearr_28350 = state_28338;
(statearr_28350[(8)] = inst_28318);

return statearr_28350;
})();
var statearr_28351_28377 = state_28338__$1;
(statearr_28351_28377[(2)] = inst_28319);

(statearr_28351_28377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (14))){
var inst_28332 = (state_28338[(2)]);
var state_28338__$1 = state_28338;
var statearr_28352_28378 = state_28338__$1;
(statearr_28352_28378[(2)] = inst_28332);

(statearr_28352_28378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (10))){
var state_28338__$1 = state_28338;
var statearr_28353_28379 = state_28338__$1;
(statearr_28353_28379[(2)] = fc);

(statearr_28353_28379[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28339 === (8))){
var inst_28327 = (state_28338[(2)]);
var state_28338__$1 = state_28338;
if(cljs.core.truth_(inst_28327)){
var statearr_28354_28380 = state_28338__$1;
(statearr_28354_28380[(1)] = (12));

} else {
var statearr_28355_28381 = state_28338__$1;
(statearr_28355_28381[(1)] = (13));

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
});})(c__27689__auto___28367,tc,fc))
;
return ((function (switch__27577__auto__,c__27689__auto___28367,tc,fc){
return (function() {
var cljs$core$async$state_machine__27578__auto__ = null;
var cljs$core$async$state_machine__27578__auto____0 = (function (){
var statearr_28359 = [null,null,null,null,null,null,null,null,null];
(statearr_28359[(0)] = cljs$core$async$state_machine__27578__auto__);

(statearr_28359[(1)] = (1));

return statearr_28359;
});
var cljs$core$async$state_machine__27578__auto____1 = (function (state_28338){
while(true){
var ret_value__27579__auto__ = (function (){try{while(true){
var result__27580__auto__ = switch__27577__auto__.call(null,state_28338);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27580__auto__;
}
break;
}
}catch (e28360){if((e28360 instanceof Object)){
var ex__27581__auto__ = e28360;
var statearr_28361_28382 = state_28338;
(statearr_28361_28382[(5)] = ex__27581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28338);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28383 = state_28338;
state_28338 = G__28383;
continue;
} else {
return ret_value__27579__auto__;
}
break;
}
});
cljs$core$async$state_machine__27578__auto__ = function(state_28338){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27578__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27578__auto____1.call(this,state_28338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27578__auto____0;
cljs$core$async$state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27578__auto____1;
return cljs$core$async$state_machine__27578__auto__;
})()
;})(switch__27577__auto__,c__27689__auto___28367,tc,fc))
})();
var state__27691__auto__ = (function (){var statearr_28362 = f__27690__auto__.call(null);
(statearr_28362[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27689__auto___28367);

return statearr_28362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27691__auto__);
});})(c__27689__auto___28367,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27689__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27689__auto__){
return (function (){
var f__27690__auto__ = (function (){var switch__27577__auto__ = ((function (c__27689__auto__){
return (function (state_28447){
var state_val_28448 = (state_28447[(1)]);
if((state_val_28448 === (7))){
var inst_28443 = (state_28447[(2)]);
var state_28447__$1 = state_28447;
var statearr_28449_28470 = state_28447__$1;
(statearr_28449_28470[(2)] = inst_28443);

(statearr_28449_28470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (1))){
var inst_28427 = init;
var state_28447__$1 = (function (){var statearr_28450 = state_28447;
(statearr_28450[(7)] = inst_28427);

return statearr_28450;
})();
var statearr_28451_28471 = state_28447__$1;
(statearr_28451_28471[(2)] = null);

(statearr_28451_28471[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (4))){
var inst_28430 = (state_28447[(8)]);
var inst_28430__$1 = (state_28447[(2)]);
var inst_28431 = (inst_28430__$1 == null);
var state_28447__$1 = (function (){var statearr_28452 = state_28447;
(statearr_28452[(8)] = inst_28430__$1);

return statearr_28452;
})();
if(cljs.core.truth_(inst_28431)){
var statearr_28453_28472 = state_28447__$1;
(statearr_28453_28472[(1)] = (5));

} else {
var statearr_28454_28473 = state_28447__$1;
(statearr_28454_28473[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (6))){
var inst_28434 = (state_28447[(9)]);
var inst_28427 = (state_28447[(7)]);
var inst_28430 = (state_28447[(8)]);
var inst_28434__$1 = f.call(null,inst_28427,inst_28430);
var inst_28435 = cljs.core.reduced_QMARK_.call(null,inst_28434__$1);
var state_28447__$1 = (function (){var statearr_28455 = state_28447;
(statearr_28455[(9)] = inst_28434__$1);

return statearr_28455;
})();
if(inst_28435){
var statearr_28456_28474 = state_28447__$1;
(statearr_28456_28474[(1)] = (8));

} else {
var statearr_28457_28475 = state_28447__$1;
(statearr_28457_28475[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (3))){
var inst_28445 = (state_28447[(2)]);
var state_28447__$1 = state_28447;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28447__$1,inst_28445);
} else {
if((state_val_28448 === (2))){
var state_28447__$1 = state_28447;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28447__$1,(4),ch);
} else {
if((state_val_28448 === (9))){
var inst_28434 = (state_28447[(9)]);
var inst_28427 = inst_28434;
var state_28447__$1 = (function (){var statearr_28458 = state_28447;
(statearr_28458[(7)] = inst_28427);

return statearr_28458;
})();
var statearr_28459_28476 = state_28447__$1;
(statearr_28459_28476[(2)] = null);

(statearr_28459_28476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (5))){
var inst_28427 = (state_28447[(7)]);
var state_28447__$1 = state_28447;
var statearr_28460_28477 = state_28447__$1;
(statearr_28460_28477[(2)] = inst_28427);

(statearr_28460_28477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (10))){
var inst_28441 = (state_28447[(2)]);
var state_28447__$1 = state_28447;
var statearr_28461_28478 = state_28447__$1;
(statearr_28461_28478[(2)] = inst_28441);

(statearr_28461_28478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28448 === (8))){
var inst_28434 = (state_28447[(9)]);
var inst_28437 = cljs.core.deref.call(null,inst_28434);
var state_28447__$1 = state_28447;
var statearr_28462_28479 = state_28447__$1;
(statearr_28462_28479[(2)] = inst_28437);

(statearr_28462_28479[(1)] = (10));


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
});})(c__27689__auto__))
;
return ((function (switch__27577__auto__,c__27689__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__27578__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27578__auto____0 = (function (){
var statearr_28466 = [null,null,null,null,null,null,null,null,null,null];
(statearr_28466[(0)] = cljs$core$async$reduce_$_state_machine__27578__auto__);

(statearr_28466[(1)] = (1));

return statearr_28466;
});
var cljs$core$async$reduce_$_state_machine__27578__auto____1 = (function (state_28447){
while(true){
var ret_value__27579__auto__ = (function (){try{while(true){
var result__27580__auto__ = switch__27577__auto__.call(null,state_28447);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27580__auto__;
}
break;
}
}catch (e28467){if((e28467 instanceof Object)){
var ex__27581__auto__ = e28467;
var statearr_28468_28480 = state_28447;
(statearr_28468_28480[(5)] = ex__27581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28447);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28467;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28481 = state_28447;
state_28447 = G__28481;
continue;
} else {
return ret_value__27579__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27578__auto__ = function(state_28447){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27578__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27578__auto____1.call(this,state_28447);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27578__auto____0;
cljs$core$async$reduce_$_state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27578__auto____1;
return cljs$core$async$reduce_$_state_machine__27578__auto__;
})()
;})(switch__27577__auto__,c__27689__auto__))
})();
var state__27691__auto__ = (function (){var statearr_28469 = f__27690__auto__.call(null);
(statearr_28469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27689__auto__);

return statearr_28469;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27691__auto__);
});})(c__27689__auto__))
);

return c__27689__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args28482 = [];
var len__26580__auto___28534 = arguments.length;
var i__26581__auto___28535 = (0);
while(true){
if((i__26581__auto___28535 < len__26580__auto___28534)){
args28482.push((arguments[i__26581__auto___28535]));

var G__28536 = (i__26581__auto___28535 + (1));
i__26581__auto___28535 = G__28536;
continue;
} else {
}
break;
}

var G__28484 = args28482.length;
switch (G__28484) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28482.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27689__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27689__auto__){
return (function (){
var f__27690__auto__ = (function (){var switch__27577__auto__ = ((function (c__27689__auto__){
return (function (state_28509){
var state_val_28510 = (state_28509[(1)]);
if((state_val_28510 === (7))){
var inst_28491 = (state_28509[(2)]);
var state_28509__$1 = state_28509;
var statearr_28511_28538 = state_28509__$1;
(statearr_28511_28538[(2)] = inst_28491);

(statearr_28511_28538[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (1))){
var inst_28485 = cljs.core.seq.call(null,coll);
var inst_28486 = inst_28485;
var state_28509__$1 = (function (){var statearr_28512 = state_28509;
(statearr_28512[(7)] = inst_28486);

return statearr_28512;
})();
var statearr_28513_28539 = state_28509__$1;
(statearr_28513_28539[(2)] = null);

(statearr_28513_28539[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (4))){
var inst_28486 = (state_28509[(7)]);
var inst_28489 = cljs.core.first.call(null,inst_28486);
var state_28509__$1 = state_28509;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28509__$1,(7),ch,inst_28489);
} else {
if((state_val_28510 === (13))){
var inst_28503 = (state_28509[(2)]);
var state_28509__$1 = state_28509;
var statearr_28514_28540 = state_28509__$1;
(statearr_28514_28540[(2)] = inst_28503);

(statearr_28514_28540[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (6))){
var inst_28494 = (state_28509[(2)]);
var state_28509__$1 = state_28509;
if(cljs.core.truth_(inst_28494)){
var statearr_28515_28541 = state_28509__$1;
(statearr_28515_28541[(1)] = (8));

} else {
var statearr_28516_28542 = state_28509__$1;
(statearr_28516_28542[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (3))){
var inst_28507 = (state_28509[(2)]);
var state_28509__$1 = state_28509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28509__$1,inst_28507);
} else {
if((state_val_28510 === (12))){
var state_28509__$1 = state_28509;
var statearr_28517_28543 = state_28509__$1;
(statearr_28517_28543[(2)] = null);

(statearr_28517_28543[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (2))){
var inst_28486 = (state_28509[(7)]);
var state_28509__$1 = state_28509;
if(cljs.core.truth_(inst_28486)){
var statearr_28518_28544 = state_28509__$1;
(statearr_28518_28544[(1)] = (4));

} else {
var statearr_28519_28545 = state_28509__$1;
(statearr_28519_28545[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (11))){
var inst_28500 = cljs.core.async.close_BANG_.call(null,ch);
var state_28509__$1 = state_28509;
var statearr_28520_28546 = state_28509__$1;
(statearr_28520_28546[(2)] = inst_28500);

(statearr_28520_28546[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (9))){
var state_28509__$1 = state_28509;
if(cljs.core.truth_(close_QMARK_)){
var statearr_28521_28547 = state_28509__$1;
(statearr_28521_28547[(1)] = (11));

} else {
var statearr_28522_28548 = state_28509__$1;
(statearr_28522_28548[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (5))){
var inst_28486 = (state_28509[(7)]);
var state_28509__$1 = state_28509;
var statearr_28523_28549 = state_28509__$1;
(statearr_28523_28549[(2)] = inst_28486);

(statearr_28523_28549[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (10))){
var inst_28505 = (state_28509[(2)]);
var state_28509__$1 = state_28509;
var statearr_28524_28550 = state_28509__$1;
(statearr_28524_28550[(2)] = inst_28505);

(statearr_28524_28550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28510 === (8))){
var inst_28486 = (state_28509[(7)]);
var inst_28496 = cljs.core.next.call(null,inst_28486);
var inst_28486__$1 = inst_28496;
var state_28509__$1 = (function (){var statearr_28525 = state_28509;
(statearr_28525[(7)] = inst_28486__$1);

return statearr_28525;
})();
var statearr_28526_28551 = state_28509__$1;
(statearr_28526_28551[(2)] = null);

(statearr_28526_28551[(1)] = (2));


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
});})(c__27689__auto__))
;
return ((function (switch__27577__auto__,c__27689__auto__){
return (function() {
var cljs$core$async$state_machine__27578__auto__ = null;
var cljs$core$async$state_machine__27578__auto____0 = (function (){
var statearr_28530 = [null,null,null,null,null,null,null,null];
(statearr_28530[(0)] = cljs$core$async$state_machine__27578__auto__);

(statearr_28530[(1)] = (1));

return statearr_28530;
});
var cljs$core$async$state_machine__27578__auto____1 = (function (state_28509){
while(true){
var ret_value__27579__auto__ = (function (){try{while(true){
var result__27580__auto__ = switch__27577__auto__.call(null,state_28509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27580__auto__;
}
break;
}
}catch (e28531){if((e28531 instanceof Object)){
var ex__27581__auto__ = e28531;
var statearr_28532_28552 = state_28509;
(statearr_28532_28552[(5)] = ex__27581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28531;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28553 = state_28509;
state_28509 = G__28553;
continue;
} else {
return ret_value__27579__auto__;
}
break;
}
});
cljs$core$async$state_machine__27578__auto__ = function(state_28509){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27578__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27578__auto____1.call(this,state_28509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27578__auto____0;
cljs$core$async$state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27578__auto____1;
return cljs$core$async$state_machine__27578__auto__;
})()
;})(switch__27577__auto__,c__27689__auto__))
})();
var state__27691__auto__ = (function (){var statearr_28533 = f__27690__auto__.call(null);
(statearr_28533[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27689__auto__);

return statearr_28533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27691__auto__);
});})(c__27689__auto__))
);

return c__27689__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__26177__auto__ = (((_ == null))?null:_);
var m__26178__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__26177__auto__)]);
if(!((m__26178__auto__ == null))){
return m__26178__auto__.call(null,_);
} else {
var m__26178__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__26178__auto____$1 == null))){
return m__26178__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__26177__auto__ = (((m == null))?null:m);
var m__26178__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__26177__auto__)]);
if(!((m__26178__auto__ == null))){
return m__26178__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__26178__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__26178__auto____$1 == null))){
return m__26178__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__26177__auto__ = (((m == null))?null:m);
var m__26178__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__26177__auto__)]);
if(!((m__26178__auto__ == null))){
return m__26178__auto__.call(null,m,ch);
} else {
var m__26178__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__26178__auto____$1 == null))){
return m__26178__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__26177__auto__ = (((m == null))?null:m);
var m__26178__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__26177__auto__)]);
if(!((m__26178__auto__ == null))){
return m__26178__auto__.call(null,m);
} else {
var m__26178__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__26178__auto____$1 == null))){
return m__26178__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async28775 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28775 = (function (mult,ch,cs,meta28776){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta28776 = meta28776;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28775.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28777,meta28776__$1){
var self__ = this;
var _28777__$1 = this;
return (new cljs.core.async.t_cljs$core$async28775(self__.mult,self__.ch,self__.cs,meta28776__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async28775.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28777){
var self__ = this;
var _28777__$1 = this;
return self__.meta28776;
});})(cs))
;

cljs.core.async.t_cljs$core$async28775.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28775.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async28775.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async28775.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28775.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28775.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async28775.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta28776","meta28776",708147024,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async28775.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28775.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28775";

cljs.core.async.t_cljs$core$async28775.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__26120__auto__,writer__26121__auto__,opt__26122__auto__){
return cljs.core._write.call(null,writer__26121__auto__,"cljs.core.async/t_cljs$core$async28775");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async28775 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async28775(mult__$1,ch__$1,cs__$1,meta28776){
return (new cljs.core.async.t_cljs$core$async28775(mult__$1,ch__$1,cs__$1,meta28776));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async28775(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__27689__auto___28996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27689__auto___28996,cs,m,dchan,dctr,done){
return (function (){
var f__27690__auto__ = (function (){var switch__27577__auto__ = ((function (c__27689__auto___28996,cs,m,dchan,dctr,done){
return (function (state_28908){
var state_val_28909 = (state_28908[(1)]);
if((state_val_28909 === (7))){
var inst_28904 = (state_28908[(2)]);
var state_28908__$1 = state_28908;
var statearr_28910_28997 = state_28908__$1;
(statearr_28910_28997[(2)] = inst_28904);

(statearr_28910_28997[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (20))){
var inst_28809 = (state_28908[(7)]);
var inst_28819 = cljs.core.first.call(null,inst_28809);
var inst_28820 = cljs.core.nth.call(null,inst_28819,(0),null);
var inst_28821 = cljs.core.nth.call(null,inst_28819,(1),null);
var state_28908__$1 = (function (){var statearr_28911 = state_28908;
(statearr_28911[(8)] = inst_28820);

return statearr_28911;
})();
if(cljs.core.truth_(inst_28821)){
var statearr_28912_28998 = state_28908__$1;
(statearr_28912_28998[(1)] = (22));

} else {
var statearr_28913_28999 = state_28908__$1;
(statearr_28913_28999[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (27))){
var inst_28849 = (state_28908[(9)]);
var inst_28780 = (state_28908[(10)]);
var inst_28856 = (state_28908[(11)]);
var inst_28851 = (state_28908[(12)]);
var inst_28856__$1 = cljs.core._nth.call(null,inst_28849,inst_28851);
var inst_28857 = cljs.core.async.put_BANG_.call(null,inst_28856__$1,inst_28780,done);
var state_28908__$1 = (function (){var statearr_28914 = state_28908;
(statearr_28914[(11)] = inst_28856__$1);

return statearr_28914;
})();
if(cljs.core.truth_(inst_28857)){
var statearr_28915_29000 = state_28908__$1;
(statearr_28915_29000[(1)] = (30));

} else {
var statearr_28916_29001 = state_28908__$1;
(statearr_28916_29001[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (1))){
var state_28908__$1 = state_28908;
var statearr_28917_29002 = state_28908__$1;
(statearr_28917_29002[(2)] = null);

(statearr_28917_29002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (24))){
var inst_28809 = (state_28908[(7)]);
var inst_28826 = (state_28908[(2)]);
var inst_28827 = cljs.core.next.call(null,inst_28809);
var inst_28789 = inst_28827;
var inst_28790 = null;
var inst_28791 = (0);
var inst_28792 = (0);
var state_28908__$1 = (function (){var statearr_28918 = state_28908;
(statearr_28918[(13)] = inst_28790);

(statearr_28918[(14)] = inst_28826);

(statearr_28918[(15)] = inst_28791);

(statearr_28918[(16)] = inst_28789);

(statearr_28918[(17)] = inst_28792);

return statearr_28918;
})();
var statearr_28919_29003 = state_28908__$1;
(statearr_28919_29003[(2)] = null);

(statearr_28919_29003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (39))){
var state_28908__$1 = state_28908;
var statearr_28923_29004 = state_28908__$1;
(statearr_28923_29004[(2)] = null);

(statearr_28923_29004[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (4))){
var inst_28780 = (state_28908[(10)]);
var inst_28780__$1 = (state_28908[(2)]);
var inst_28781 = (inst_28780__$1 == null);
var state_28908__$1 = (function (){var statearr_28924 = state_28908;
(statearr_28924[(10)] = inst_28780__$1);

return statearr_28924;
})();
if(cljs.core.truth_(inst_28781)){
var statearr_28925_29005 = state_28908__$1;
(statearr_28925_29005[(1)] = (5));

} else {
var statearr_28926_29006 = state_28908__$1;
(statearr_28926_29006[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (15))){
var inst_28790 = (state_28908[(13)]);
var inst_28791 = (state_28908[(15)]);
var inst_28789 = (state_28908[(16)]);
var inst_28792 = (state_28908[(17)]);
var inst_28805 = (state_28908[(2)]);
var inst_28806 = (inst_28792 + (1));
var tmp28920 = inst_28790;
var tmp28921 = inst_28791;
var tmp28922 = inst_28789;
var inst_28789__$1 = tmp28922;
var inst_28790__$1 = tmp28920;
var inst_28791__$1 = tmp28921;
var inst_28792__$1 = inst_28806;
var state_28908__$1 = (function (){var statearr_28927 = state_28908;
(statearr_28927[(13)] = inst_28790__$1);

(statearr_28927[(18)] = inst_28805);

(statearr_28927[(15)] = inst_28791__$1);

(statearr_28927[(16)] = inst_28789__$1);

(statearr_28927[(17)] = inst_28792__$1);

return statearr_28927;
})();
var statearr_28928_29007 = state_28908__$1;
(statearr_28928_29007[(2)] = null);

(statearr_28928_29007[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (21))){
var inst_28830 = (state_28908[(2)]);
var state_28908__$1 = state_28908;
var statearr_28932_29008 = state_28908__$1;
(statearr_28932_29008[(2)] = inst_28830);

(statearr_28932_29008[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (31))){
var inst_28856 = (state_28908[(11)]);
var inst_28860 = done.call(null,null);
var inst_28861 = cljs.core.async.untap_STAR_.call(null,m,inst_28856);
var state_28908__$1 = (function (){var statearr_28933 = state_28908;
(statearr_28933[(19)] = inst_28860);

return statearr_28933;
})();
var statearr_28934_29009 = state_28908__$1;
(statearr_28934_29009[(2)] = inst_28861);

(statearr_28934_29009[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (32))){
var inst_28849 = (state_28908[(9)]);
var inst_28848 = (state_28908[(20)]);
var inst_28850 = (state_28908[(21)]);
var inst_28851 = (state_28908[(12)]);
var inst_28863 = (state_28908[(2)]);
var inst_28864 = (inst_28851 + (1));
var tmp28929 = inst_28849;
var tmp28930 = inst_28848;
var tmp28931 = inst_28850;
var inst_28848__$1 = tmp28930;
var inst_28849__$1 = tmp28929;
var inst_28850__$1 = tmp28931;
var inst_28851__$1 = inst_28864;
var state_28908__$1 = (function (){var statearr_28935 = state_28908;
(statearr_28935[(22)] = inst_28863);

(statearr_28935[(9)] = inst_28849__$1);

(statearr_28935[(20)] = inst_28848__$1);

(statearr_28935[(21)] = inst_28850__$1);

(statearr_28935[(12)] = inst_28851__$1);

return statearr_28935;
})();
var statearr_28936_29010 = state_28908__$1;
(statearr_28936_29010[(2)] = null);

(statearr_28936_29010[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (40))){
var inst_28876 = (state_28908[(23)]);
var inst_28880 = done.call(null,null);
var inst_28881 = cljs.core.async.untap_STAR_.call(null,m,inst_28876);
var state_28908__$1 = (function (){var statearr_28937 = state_28908;
(statearr_28937[(24)] = inst_28880);

return statearr_28937;
})();
var statearr_28938_29011 = state_28908__$1;
(statearr_28938_29011[(2)] = inst_28881);

(statearr_28938_29011[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (33))){
var inst_28867 = (state_28908[(25)]);
var inst_28869 = cljs.core.chunked_seq_QMARK_.call(null,inst_28867);
var state_28908__$1 = state_28908;
if(inst_28869){
var statearr_28939_29012 = state_28908__$1;
(statearr_28939_29012[(1)] = (36));

} else {
var statearr_28940_29013 = state_28908__$1;
(statearr_28940_29013[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (13))){
var inst_28799 = (state_28908[(26)]);
var inst_28802 = cljs.core.async.close_BANG_.call(null,inst_28799);
var state_28908__$1 = state_28908;
var statearr_28941_29014 = state_28908__$1;
(statearr_28941_29014[(2)] = inst_28802);

(statearr_28941_29014[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (22))){
var inst_28820 = (state_28908[(8)]);
var inst_28823 = cljs.core.async.close_BANG_.call(null,inst_28820);
var state_28908__$1 = state_28908;
var statearr_28942_29015 = state_28908__$1;
(statearr_28942_29015[(2)] = inst_28823);

(statearr_28942_29015[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (36))){
var inst_28867 = (state_28908[(25)]);
var inst_28871 = cljs.core.chunk_first.call(null,inst_28867);
var inst_28872 = cljs.core.chunk_rest.call(null,inst_28867);
var inst_28873 = cljs.core.count.call(null,inst_28871);
var inst_28848 = inst_28872;
var inst_28849 = inst_28871;
var inst_28850 = inst_28873;
var inst_28851 = (0);
var state_28908__$1 = (function (){var statearr_28943 = state_28908;
(statearr_28943[(9)] = inst_28849);

(statearr_28943[(20)] = inst_28848);

(statearr_28943[(21)] = inst_28850);

(statearr_28943[(12)] = inst_28851);

return statearr_28943;
})();
var statearr_28944_29016 = state_28908__$1;
(statearr_28944_29016[(2)] = null);

(statearr_28944_29016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (41))){
var inst_28867 = (state_28908[(25)]);
var inst_28883 = (state_28908[(2)]);
var inst_28884 = cljs.core.next.call(null,inst_28867);
var inst_28848 = inst_28884;
var inst_28849 = null;
var inst_28850 = (0);
var inst_28851 = (0);
var state_28908__$1 = (function (){var statearr_28945 = state_28908;
(statearr_28945[(9)] = inst_28849);

(statearr_28945[(27)] = inst_28883);

(statearr_28945[(20)] = inst_28848);

(statearr_28945[(21)] = inst_28850);

(statearr_28945[(12)] = inst_28851);

return statearr_28945;
})();
var statearr_28946_29017 = state_28908__$1;
(statearr_28946_29017[(2)] = null);

(statearr_28946_29017[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (43))){
var state_28908__$1 = state_28908;
var statearr_28947_29018 = state_28908__$1;
(statearr_28947_29018[(2)] = null);

(statearr_28947_29018[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (29))){
var inst_28892 = (state_28908[(2)]);
var state_28908__$1 = state_28908;
var statearr_28948_29019 = state_28908__$1;
(statearr_28948_29019[(2)] = inst_28892);

(statearr_28948_29019[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (44))){
var inst_28901 = (state_28908[(2)]);
var state_28908__$1 = (function (){var statearr_28949 = state_28908;
(statearr_28949[(28)] = inst_28901);

return statearr_28949;
})();
var statearr_28950_29020 = state_28908__$1;
(statearr_28950_29020[(2)] = null);

(statearr_28950_29020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (6))){
var inst_28840 = (state_28908[(29)]);
var inst_28839 = cljs.core.deref.call(null,cs);
var inst_28840__$1 = cljs.core.keys.call(null,inst_28839);
var inst_28841 = cljs.core.count.call(null,inst_28840__$1);
var inst_28842 = cljs.core.reset_BANG_.call(null,dctr,inst_28841);
var inst_28847 = cljs.core.seq.call(null,inst_28840__$1);
var inst_28848 = inst_28847;
var inst_28849 = null;
var inst_28850 = (0);
var inst_28851 = (0);
var state_28908__$1 = (function (){var statearr_28951 = state_28908;
(statearr_28951[(9)] = inst_28849);

(statearr_28951[(30)] = inst_28842);

(statearr_28951[(20)] = inst_28848);

(statearr_28951[(21)] = inst_28850);

(statearr_28951[(29)] = inst_28840__$1);

(statearr_28951[(12)] = inst_28851);

return statearr_28951;
})();
var statearr_28952_29021 = state_28908__$1;
(statearr_28952_29021[(2)] = null);

(statearr_28952_29021[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (28))){
var inst_28867 = (state_28908[(25)]);
var inst_28848 = (state_28908[(20)]);
var inst_28867__$1 = cljs.core.seq.call(null,inst_28848);
var state_28908__$1 = (function (){var statearr_28953 = state_28908;
(statearr_28953[(25)] = inst_28867__$1);

return statearr_28953;
})();
if(inst_28867__$1){
var statearr_28954_29022 = state_28908__$1;
(statearr_28954_29022[(1)] = (33));

} else {
var statearr_28955_29023 = state_28908__$1;
(statearr_28955_29023[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (25))){
var inst_28850 = (state_28908[(21)]);
var inst_28851 = (state_28908[(12)]);
var inst_28853 = (inst_28851 < inst_28850);
var inst_28854 = inst_28853;
var state_28908__$1 = state_28908;
if(cljs.core.truth_(inst_28854)){
var statearr_28956_29024 = state_28908__$1;
(statearr_28956_29024[(1)] = (27));

} else {
var statearr_28957_29025 = state_28908__$1;
(statearr_28957_29025[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (34))){
var state_28908__$1 = state_28908;
var statearr_28958_29026 = state_28908__$1;
(statearr_28958_29026[(2)] = null);

(statearr_28958_29026[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (17))){
var state_28908__$1 = state_28908;
var statearr_28959_29027 = state_28908__$1;
(statearr_28959_29027[(2)] = null);

(statearr_28959_29027[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (3))){
var inst_28906 = (state_28908[(2)]);
var state_28908__$1 = state_28908;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28908__$1,inst_28906);
} else {
if((state_val_28909 === (12))){
var inst_28835 = (state_28908[(2)]);
var state_28908__$1 = state_28908;
var statearr_28960_29028 = state_28908__$1;
(statearr_28960_29028[(2)] = inst_28835);

(statearr_28960_29028[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (2))){
var state_28908__$1 = state_28908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28908__$1,(4),ch);
} else {
if((state_val_28909 === (23))){
var state_28908__$1 = state_28908;
var statearr_28961_29029 = state_28908__$1;
(statearr_28961_29029[(2)] = null);

(statearr_28961_29029[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (35))){
var inst_28890 = (state_28908[(2)]);
var state_28908__$1 = state_28908;
var statearr_28962_29030 = state_28908__$1;
(statearr_28962_29030[(2)] = inst_28890);

(statearr_28962_29030[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (19))){
var inst_28809 = (state_28908[(7)]);
var inst_28813 = cljs.core.chunk_first.call(null,inst_28809);
var inst_28814 = cljs.core.chunk_rest.call(null,inst_28809);
var inst_28815 = cljs.core.count.call(null,inst_28813);
var inst_28789 = inst_28814;
var inst_28790 = inst_28813;
var inst_28791 = inst_28815;
var inst_28792 = (0);
var state_28908__$1 = (function (){var statearr_28963 = state_28908;
(statearr_28963[(13)] = inst_28790);

(statearr_28963[(15)] = inst_28791);

(statearr_28963[(16)] = inst_28789);

(statearr_28963[(17)] = inst_28792);

return statearr_28963;
})();
var statearr_28964_29031 = state_28908__$1;
(statearr_28964_29031[(2)] = null);

(statearr_28964_29031[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (11))){
var inst_28809 = (state_28908[(7)]);
var inst_28789 = (state_28908[(16)]);
var inst_28809__$1 = cljs.core.seq.call(null,inst_28789);
var state_28908__$1 = (function (){var statearr_28965 = state_28908;
(statearr_28965[(7)] = inst_28809__$1);

return statearr_28965;
})();
if(inst_28809__$1){
var statearr_28966_29032 = state_28908__$1;
(statearr_28966_29032[(1)] = (16));

} else {
var statearr_28967_29033 = state_28908__$1;
(statearr_28967_29033[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (9))){
var inst_28837 = (state_28908[(2)]);
var state_28908__$1 = state_28908;
var statearr_28968_29034 = state_28908__$1;
(statearr_28968_29034[(2)] = inst_28837);

(statearr_28968_29034[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (5))){
var inst_28787 = cljs.core.deref.call(null,cs);
var inst_28788 = cljs.core.seq.call(null,inst_28787);
var inst_28789 = inst_28788;
var inst_28790 = null;
var inst_28791 = (0);
var inst_28792 = (0);
var state_28908__$1 = (function (){var statearr_28969 = state_28908;
(statearr_28969[(13)] = inst_28790);

(statearr_28969[(15)] = inst_28791);

(statearr_28969[(16)] = inst_28789);

(statearr_28969[(17)] = inst_28792);

return statearr_28969;
})();
var statearr_28970_29035 = state_28908__$1;
(statearr_28970_29035[(2)] = null);

(statearr_28970_29035[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (14))){
var state_28908__$1 = state_28908;
var statearr_28971_29036 = state_28908__$1;
(statearr_28971_29036[(2)] = null);

(statearr_28971_29036[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (45))){
var inst_28898 = (state_28908[(2)]);
var state_28908__$1 = state_28908;
var statearr_28972_29037 = state_28908__$1;
(statearr_28972_29037[(2)] = inst_28898);

(statearr_28972_29037[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (26))){
var inst_28840 = (state_28908[(29)]);
var inst_28894 = (state_28908[(2)]);
var inst_28895 = cljs.core.seq.call(null,inst_28840);
var state_28908__$1 = (function (){var statearr_28973 = state_28908;
(statearr_28973[(31)] = inst_28894);

return statearr_28973;
})();
if(inst_28895){
var statearr_28974_29038 = state_28908__$1;
(statearr_28974_29038[(1)] = (42));

} else {
var statearr_28975_29039 = state_28908__$1;
(statearr_28975_29039[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (16))){
var inst_28809 = (state_28908[(7)]);
var inst_28811 = cljs.core.chunked_seq_QMARK_.call(null,inst_28809);
var state_28908__$1 = state_28908;
if(inst_28811){
var statearr_28976_29040 = state_28908__$1;
(statearr_28976_29040[(1)] = (19));

} else {
var statearr_28977_29041 = state_28908__$1;
(statearr_28977_29041[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (38))){
var inst_28887 = (state_28908[(2)]);
var state_28908__$1 = state_28908;
var statearr_28978_29042 = state_28908__$1;
(statearr_28978_29042[(2)] = inst_28887);

(statearr_28978_29042[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (30))){
var state_28908__$1 = state_28908;
var statearr_28979_29043 = state_28908__$1;
(statearr_28979_29043[(2)] = null);

(statearr_28979_29043[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (10))){
var inst_28790 = (state_28908[(13)]);
var inst_28792 = (state_28908[(17)]);
var inst_28798 = cljs.core._nth.call(null,inst_28790,inst_28792);
var inst_28799 = cljs.core.nth.call(null,inst_28798,(0),null);
var inst_28800 = cljs.core.nth.call(null,inst_28798,(1),null);
var state_28908__$1 = (function (){var statearr_28980 = state_28908;
(statearr_28980[(26)] = inst_28799);

return statearr_28980;
})();
if(cljs.core.truth_(inst_28800)){
var statearr_28981_29044 = state_28908__$1;
(statearr_28981_29044[(1)] = (13));

} else {
var statearr_28982_29045 = state_28908__$1;
(statearr_28982_29045[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (18))){
var inst_28833 = (state_28908[(2)]);
var state_28908__$1 = state_28908;
var statearr_28983_29046 = state_28908__$1;
(statearr_28983_29046[(2)] = inst_28833);

(statearr_28983_29046[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (42))){
var state_28908__$1 = state_28908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28908__$1,(45),dchan);
} else {
if((state_val_28909 === (37))){
var inst_28867 = (state_28908[(25)]);
var inst_28780 = (state_28908[(10)]);
var inst_28876 = (state_28908[(23)]);
var inst_28876__$1 = cljs.core.first.call(null,inst_28867);
var inst_28877 = cljs.core.async.put_BANG_.call(null,inst_28876__$1,inst_28780,done);
var state_28908__$1 = (function (){var statearr_28984 = state_28908;
(statearr_28984[(23)] = inst_28876__$1);

return statearr_28984;
})();
if(cljs.core.truth_(inst_28877)){
var statearr_28985_29047 = state_28908__$1;
(statearr_28985_29047[(1)] = (39));

} else {
var statearr_28986_29048 = state_28908__$1;
(statearr_28986_29048[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28909 === (8))){
var inst_28791 = (state_28908[(15)]);
var inst_28792 = (state_28908[(17)]);
var inst_28794 = (inst_28792 < inst_28791);
var inst_28795 = inst_28794;
var state_28908__$1 = state_28908;
if(cljs.core.truth_(inst_28795)){
var statearr_28987_29049 = state_28908__$1;
(statearr_28987_29049[(1)] = (10));

} else {
var statearr_28988_29050 = state_28908__$1;
(statearr_28988_29050[(1)] = (11));

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
});})(c__27689__auto___28996,cs,m,dchan,dctr,done))
;
return ((function (switch__27577__auto__,c__27689__auto___28996,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__27578__auto__ = null;
var cljs$core$async$mult_$_state_machine__27578__auto____0 = (function (){
var statearr_28992 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28992[(0)] = cljs$core$async$mult_$_state_machine__27578__auto__);

(statearr_28992[(1)] = (1));

return statearr_28992;
});
var cljs$core$async$mult_$_state_machine__27578__auto____1 = (function (state_28908){
while(true){
var ret_value__27579__auto__ = (function (){try{while(true){
var result__27580__auto__ = switch__27577__auto__.call(null,state_28908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27580__auto__;
}
break;
}
}catch (e28993){if((e28993 instanceof Object)){
var ex__27581__auto__ = e28993;
var statearr_28994_29051 = state_28908;
(statearr_28994_29051[(5)] = ex__27581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29052 = state_28908;
state_28908 = G__29052;
continue;
} else {
return ret_value__27579__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27578__auto__ = function(state_28908){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27578__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27578__auto____1.call(this,state_28908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27578__auto____0;
cljs$core$async$mult_$_state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27578__auto____1;
return cljs$core$async$mult_$_state_machine__27578__auto__;
})()
;})(switch__27577__auto__,c__27689__auto___28996,cs,m,dchan,dctr,done))
})();
var state__27691__auto__ = (function (){var statearr_28995 = f__27690__auto__.call(null);
(statearr_28995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27689__auto___28996);

return statearr_28995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27691__auto__);
});})(c__27689__auto___28996,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args29053 = [];
var len__26580__auto___29056 = arguments.length;
var i__26581__auto___29057 = (0);
while(true){
if((i__26581__auto___29057 < len__26580__auto___29056)){
args29053.push((arguments[i__26581__auto___29057]));

var G__29058 = (i__26581__auto___29057 + (1));
i__26581__auto___29057 = G__29058;
continue;
} else {
}
break;
}

var G__29055 = args29053.length;
switch (G__29055) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29053.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__26177__auto__ = (((m == null))?null:m);
var m__26178__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__26177__auto__)]);
if(!((m__26178__auto__ == null))){
return m__26178__auto__.call(null,m,ch);
} else {
var m__26178__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__26178__auto____$1 == null))){
return m__26178__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__26177__auto__ = (((m == null))?null:m);
var m__26178__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__26177__auto__)]);
if(!((m__26178__auto__ == null))){
return m__26178__auto__.call(null,m,ch);
} else {
var m__26178__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__26178__auto____$1 == null))){
return m__26178__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__26177__auto__ = (((m == null))?null:m);
var m__26178__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__26177__auto__)]);
if(!((m__26178__auto__ == null))){
return m__26178__auto__.call(null,m);
} else {
var m__26178__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__26178__auto____$1 == null))){
return m__26178__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__26177__auto__ = (((m == null))?null:m);
var m__26178__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__26177__auto__)]);
if(!((m__26178__auto__ == null))){
return m__26178__auto__.call(null,m,state_map);
} else {
var m__26178__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__26178__auto____$1 == null))){
return m__26178__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__26177__auto__ = (((m == null))?null:m);
var m__26178__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__26177__auto__)]);
if(!((m__26178__auto__ == null))){
return m__26178__auto__.call(null,m,mode);
} else {
var m__26178__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__26178__auto____$1 == null))){
return m__26178__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__26587__auto__ = [];
var len__26580__auto___29070 = arguments.length;
var i__26581__auto___29071 = (0);
while(true){
if((i__26581__auto___29071 < len__26580__auto___29070)){
args__26587__auto__.push((arguments[i__26581__auto___29071]));

var G__29072 = (i__26581__auto___29071 + (1));
i__26581__auto___29071 = G__29072;
continue;
} else {
}
break;
}

var argseq__26588__auto__ = ((((3) < args__26587__auto__.length))?(new cljs.core.IndexedSeq(args__26587__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__26588__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__29064){
var map__29065 = p__29064;
var map__29065__$1 = ((((!((map__29065 == null)))?((((map__29065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29065):map__29065);
var opts = map__29065__$1;
var statearr_29067_29073 = state;
(statearr_29067_29073[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__29065,map__29065__$1,opts){
return (function (val){
var statearr_29068_29074 = state;
(statearr_29068_29074[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__29065,map__29065__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_29069_29075 = state;
(statearr_29069_29075[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq29060){
var G__29061 = cljs.core.first.call(null,seq29060);
var seq29060__$1 = cljs.core.next.call(null,seq29060);
var G__29062 = cljs.core.first.call(null,seq29060__$1);
var seq29060__$2 = cljs.core.next.call(null,seq29060__$1);
var G__29063 = cljs.core.first.call(null,seq29060__$2);
var seq29060__$3 = cljs.core.next.call(null,seq29060__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__29061,G__29062,G__29063,seq29060__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async29239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29239 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta29240){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta29240 = meta29240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29241,meta29240__$1){
var self__ = this;
var _29241__$1 = this;
return (new cljs.core.async.t_cljs$core$async29239(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta29240__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29239.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_29241){
var self__ = this;
var _29241__$1 = this;
return self__.meta29240;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29239.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29239.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29239.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async29239.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29239.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29239.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29239.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29239.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29239.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta29240","meta29240",-1115926236,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async29239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29239";

cljs.core.async.t_cljs$core$async29239.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__26120__auto__,writer__26121__auto__,opt__26122__auto__){
return cljs.core._write.call(null,writer__26121__auto__,"cljs.core.async/t_cljs$core$async29239");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async29239 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async29239(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29240){
return (new cljs.core.async.t_cljs$core$async29239(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta29240));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async29239(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27689__auto___29402 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27689__auto___29402,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__27690__auto__ = (function (){var switch__27577__auto__ = ((function (c__27689__auto___29402,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_29339){
var state_val_29340 = (state_29339[(1)]);
if((state_val_29340 === (7))){
var inst_29257 = (state_29339[(2)]);
var state_29339__$1 = state_29339;
var statearr_29341_29403 = state_29339__$1;
(statearr_29341_29403[(2)] = inst_29257);

(statearr_29341_29403[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (20))){
var inst_29269 = (state_29339[(7)]);
var state_29339__$1 = state_29339;
var statearr_29342_29404 = state_29339__$1;
(statearr_29342_29404[(2)] = inst_29269);

(statearr_29342_29404[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (27))){
var state_29339__$1 = state_29339;
var statearr_29343_29405 = state_29339__$1;
(statearr_29343_29405[(2)] = null);

(statearr_29343_29405[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (1))){
var inst_29245 = (state_29339[(8)]);
var inst_29245__$1 = calc_state.call(null);
var inst_29247 = (inst_29245__$1 == null);
var inst_29248 = cljs.core.not.call(null,inst_29247);
var state_29339__$1 = (function (){var statearr_29344 = state_29339;
(statearr_29344[(8)] = inst_29245__$1);

return statearr_29344;
})();
if(inst_29248){
var statearr_29345_29406 = state_29339__$1;
(statearr_29345_29406[(1)] = (2));

} else {
var statearr_29346_29407 = state_29339__$1;
(statearr_29346_29407[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (24))){
var inst_29313 = (state_29339[(9)]);
var inst_29292 = (state_29339[(10)]);
var inst_29299 = (state_29339[(11)]);
var inst_29313__$1 = inst_29292.call(null,inst_29299);
var state_29339__$1 = (function (){var statearr_29347 = state_29339;
(statearr_29347[(9)] = inst_29313__$1);

return statearr_29347;
})();
if(cljs.core.truth_(inst_29313__$1)){
var statearr_29348_29408 = state_29339__$1;
(statearr_29348_29408[(1)] = (29));

} else {
var statearr_29349_29409 = state_29339__$1;
(statearr_29349_29409[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (4))){
var inst_29260 = (state_29339[(2)]);
var state_29339__$1 = state_29339;
if(cljs.core.truth_(inst_29260)){
var statearr_29350_29410 = state_29339__$1;
(statearr_29350_29410[(1)] = (8));

} else {
var statearr_29351_29411 = state_29339__$1;
(statearr_29351_29411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (15))){
var inst_29286 = (state_29339[(2)]);
var state_29339__$1 = state_29339;
if(cljs.core.truth_(inst_29286)){
var statearr_29352_29412 = state_29339__$1;
(statearr_29352_29412[(1)] = (19));

} else {
var statearr_29353_29413 = state_29339__$1;
(statearr_29353_29413[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (21))){
var inst_29291 = (state_29339[(12)]);
var inst_29291__$1 = (state_29339[(2)]);
var inst_29292 = cljs.core.get.call(null,inst_29291__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29293 = cljs.core.get.call(null,inst_29291__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29294 = cljs.core.get.call(null,inst_29291__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_29339__$1 = (function (){var statearr_29354 = state_29339;
(statearr_29354[(13)] = inst_29293);

(statearr_29354[(10)] = inst_29292);

(statearr_29354[(12)] = inst_29291__$1);

return statearr_29354;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_29339__$1,(22),inst_29294);
} else {
if((state_val_29340 === (31))){
var inst_29321 = (state_29339[(2)]);
var state_29339__$1 = state_29339;
if(cljs.core.truth_(inst_29321)){
var statearr_29355_29414 = state_29339__$1;
(statearr_29355_29414[(1)] = (32));

} else {
var statearr_29356_29415 = state_29339__$1;
(statearr_29356_29415[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (32))){
var inst_29298 = (state_29339[(14)]);
var state_29339__$1 = state_29339;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29339__$1,(35),out,inst_29298);
} else {
if((state_val_29340 === (33))){
var inst_29291 = (state_29339[(12)]);
var inst_29269 = inst_29291;
var state_29339__$1 = (function (){var statearr_29357 = state_29339;
(statearr_29357[(7)] = inst_29269);

return statearr_29357;
})();
var statearr_29358_29416 = state_29339__$1;
(statearr_29358_29416[(2)] = null);

(statearr_29358_29416[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (13))){
var inst_29269 = (state_29339[(7)]);
var inst_29276 = inst_29269.cljs$lang$protocol_mask$partition0$;
var inst_29277 = (inst_29276 & (64));
var inst_29278 = inst_29269.cljs$core$ISeq$;
var inst_29279 = (inst_29277) || (inst_29278);
var state_29339__$1 = state_29339;
if(cljs.core.truth_(inst_29279)){
var statearr_29359_29417 = state_29339__$1;
(statearr_29359_29417[(1)] = (16));

} else {
var statearr_29360_29418 = state_29339__$1;
(statearr_29360_29418[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (22))){
var inst_29299 = (state_29339[(11)]);
var inst_29298 = (state_29339[(14)]);
var inst_29297 = (state_29339[(2)]);
var inst_29298__$1 = cljs.core.nth.call(null,inst_29297,(0),null);
var inst_29299__$1 = cljs.core.nth.call(null,inst_29297,(1),null);
var inst_29300 = (inst_29298__$1 == null);
var inst_29301 = cljs.core._EQ_.call(null,inst_29299__$1,change);
var inst_29302 = (inst_29300) || (inst_29301);
var state_29339__$1 = (function (){var statearr_29361 = state_29339;
(statearr_29361[(11)] = inst_29299__$1);

(statearr_29361[(14)] = inst_29298__$1);

return statearr_29361;
})();
if(cljs.core.truth_(inst_29302)){
var statearr_29362_29419 = state_29339__$1;
(statearr_29362_29419[(1)] = (23));

} else {
var statearr_29363_29420 = state_29339__$1;
(statearr_29363_29420[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (36))){
var inst_29291 = (state_29339[(12)]);
var inst_29269 = inst_29291;
var state_29339__$1 = (function (){var statearr_29364 = state_29339;
(statearr_29364[(7)] = inst_29269);

return statearr_29364;
})();
var statearr_29365_29421 = state_29339__$1;
(statearr_29365_29421[(2)] = null);

(statearr_29365_29421[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (29))){
var inst_29313 = (state_29339[(9)]);
var state_29339__$1 = state_29339;
var statearr_29366_29422 = state_29339__$1;
(statearr_29366_29422[(2)] = inst_29313);

(statearr_29366_29422[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (6))){
var state_29339__$1 = state_29339;
var statearr_29367_29423 = state_29339__$1;
(statearr_29367_29423[(2)] = false);

(statearr_29367_29423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (28))){
var inst_29309 = (state_29339[(2)]);
var inst_29310 = calc_state.call(null);
var inst_29269 = inst_29310;
var state_29339__$1 = (function (){var statearr_29368 = state_29339;
(statearr_29368[(15)] = inst_29309);

(statearr_29368[(7)] = inst_29269);

return statearr_29368;
})();
var statearr_29369_29424 = state_29339__$1;
(statearr_29369_29424[(2)] = null);

(statearr_29369_29424[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (25))){
var inst_29335 = (state_29339[(2)]);
var state_29339__$1 = state_29339;
var statearr_29370_29425 = state_29339__$1;
(statearr_29370_29425[(2)] = inst_29335);

(statearr_29370_29425[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (34))){
var inst_29333 = (state_29339[(2)]);
var state_29339__$1 = state_29339;
var statearr_29371_29426 = state_29339__$1;
(statearr_29371_29426[(2)] = inst_29333);

(statearr_29371_29426[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (17))){
var state_29339__$1 = state_29339;
var statearr_29372_29427 = state_29339__$1;
(statearr_29372_29427[(2)] = false);

(statearr_29372_29427[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (3))){
var state_29339__$1 = state_29339;
var statearr_29373_29428 = state_29339__$1;
(statearr_29373_29428[(2)] = false);

(statearr_29373_29428[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (12))){
var inst_29337 = (state_29339[(2)]);
var state_29339__$1 = state_29339;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29339__$1,inst_29337);
} else {
if((state_val_29340 === (2))){
var inst_29245 = (state_29339[(8)]);
var inst_29250 = inst_29245.cljs$lang$protocol_mask$partition0$;
var inst_29251 = (inst_29250 & (64));
var inst_29252 = inst_29245.cljs$core$ISeq$;
var inst_29253 = (inst_29251) || (inst_29252);
var state_29339__$1 = state_29339;
if(cljs.core.truth_(inst_29253)){
var statearr_29374_29429 = state_29339__$1;
(statearr_29374_29429[(1)] = (5));

} else {
var statearr_29375_29430 = state_29339__$1;
(statearr_29375_29430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (23))){
var inst_29298 = (state_29339[(14)]);
var inst_29304 = (inst_29298 == null);
var state_29339__$1 = state_29339;
if(cljs.core.truth_(inst_29304)){
var statearr_29376_29431 = state_29339__$1;
(statearr_29376_29431[(1)] = (26));

} else {
var statearr_29377_29432 = state_29339__$1;
(statearr_29377_29432[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (35))){
var inst_29324 = (state_29339[(2)]);
var state_29339__$1 = state_29339;
if(cljs.core.truth_(inst_29324)){
var statearr_29378_29433 = state_29339__$1;
(statearr_29378_29433[(1)] = (36));

} else {
var statearr_29379_29434 = state_29339__$1;
(statearr_29379_29434[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (19))){
var inst_29269 = (state_29339[(7)]);
var inst_29288 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29269);
var state_29339__$1 = state_29339;
var statearr_29380_29435 = state_29339__$1;
(statearr_29380_29435[(2)] = inst_29288);

(statearr_29380_29435[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (11))){
var inst_29269 = (state_29339[(7)]);
var inst_29273 = (inst_29269 == null);
var inst_29274 = cljs.core.not.call(null,inst_29273);
var state_29339__$1 = state_29339;
if(inst_29274){
var statearr_29381_29436 = state_29339__$1;
(statearr_29381_29436[(1)] = (13));

} else {
var statearr_29382_29437 = state_29339__$1;
(statearr_29382_29437[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (9))){
var inst_29245 = (state_29339[(8)]);
var state_29339__$1 = state_29339;
var statearr_29383_29438 = state_29339__$1;
(statearr_29383_29438[(2)] = inst_29245);

(statearr_29383_29438[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (5))){
var state_29339__$1 = state_29339;
var statearr_29384_29439 = state_29339__$1;
(statearr_29384_29439[(2)] = true);

(statearr_29384_29439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (14))){
var state_29339__$1 = state_29339;
var statearr_29385_29440 = state_29339__$1;
(statearr_29385_29440[(2)] = false);

(statearr_29385_29440[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (26))){
var inst_29299 = (state_29339[(11)]);
var inst_29306 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_29299);
var state_29339__$1 = state_29339;
var statearr_29386_29441 = state_29339__$1;
(statearr_29386_29441[(2)] = inst_29306);

(statearr_29386_29441[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (16))){
var state_29339__$1 = state_29339;
var statearr_29387_29442 = state_29339__$1;
(statearr_29387_29442[(2)] = true);

(statearr_29387_29442[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (38))){
var inst_29329 = (state_29339[(2)]);
var state_29339__$1 = state_29339;
var statearr_29388_29443 = state_29339__$1;
(statearr_29388_29443[(2)] = inst_29329);

(statearr_29388_29443[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (30))){
var inst_29293 = (state_29339[(13)]);
var inst_29292 = (state_29339[(10)]);
var inst_29299 = (state_29339[(11)]);
var inst_29316 = cljs.core.empty_QMARK_.call(null,inst_29292);
var inst_29317 = inst_29293.call(null,inst_29299);
var inst_29318 = cljs.core.not.call(null,inst_29317);
var inst_29319 = (inst_29316) && (inst_29318);
var state_29339__$1 = state_29339;
var statearr_29389_29444 = state_29339__$1;
(statearr_29389_29444[(2)] = inst_29319);

(statearr_29389_29444[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (10))){
var inst_29245 = (state_29339[(8)]);
var inst_29265 = (state_29339[(2)]);
var inst_29266 = cljs.core.get.call(null,inst_29265,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_29267 = cljs.core.get.call(null,inst_29265,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_29268 = cljs.core.get.call(null,inst_29265,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_29269 = inst_29245;
var state_29339__$1 = (function (){var statearr_29390 = state_29339;
(statearr_29390[(16)] = inst_29267);

(statearr_29390[(17)] = inst_29266);

(statearr_29390[(7)] = inst_29269);

(statearr_29390[(18)] = inst_29268);

return statearr_29390;
})();
var statearr_29391_29445 = state_29339__$1;
(statearr_29391_29445[(2)] = null);

(statearr_29391_29445[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (18))){
var inst_29283 = (state_29339[(2)]);
var state_29339__$1 = state_29339;
var statearr_29392_29446 = state_29339__$1;
(statearr_29392_29446[(2)] = inst_29283);

(statearr_29392_29446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (37))){
var state_29339__$1 = state_29339;
var statearr_29393_29447 = state_29339__$1;
(statearr_29393_29447[(2)] = null);

(statearr_29393_29447[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29340 === (8))){
var inst_29245 = (state_29339[(8)]);
var inst_29262 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29245);
var state_29339__$1 = state_29339;
var statearr_29394_29448 = state_29339__$1;
(statearr_29394_29448[(2)] = inst_29262);

(statearr_29394_29448[(1)] = (10));


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
});})(c__27689__auto___29402,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__27577__auto__,c__27689__auto___29402,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__27578__auto__ = null;
var cljs$core$async$mix_$_state_machine__27578__auto____0 = (function (){
var statearr_29398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29398[(0)] = cljs$core$async$mix_$_state_machine__27578__auto__);

(statearr_29398[(1)] = (1));

return statearr_29398;
});
var cljs$core$async$mix_$_state_machine__27578__auto____1 = (function (state_29339){
while(true){
var ret_value__27579__auto__ = (function (){try{while(true){
var result__27580__auto__ = switch__27577__auto__.call(null,state_29339);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27580__auto__;
}
break;
}
}catch (e29399){if((e29399 instanceof Object)){
var ex__27581__auto__ = e29399;
var statearr_29400_29449 = state_29339;
(statearr_29400_29449[(5)] = ex__27581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29339);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29450 = state_29339;
state_29339 = G__29450;
continue;
} else {
return ret_value__27579__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27578__auto__ = function(state_29339){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27578__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27578__auto____1.call(this,state_29339);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27578__auto____0;
cljs$core$async$mix_$_state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27578__auto____1;
return cljs$core$async$mix_$_state_machine__27578__auto__;
})()
;})(switch__27577__auto__,c__27689__auto___29402,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__27691__auto__ = (function (){var statearr_29401 = f__27690__auto__.call(null);
(statearr_29401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27689__auto___29402);

return statearr_29401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27691__auto__);
});})(c__27689__auto___29402,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__26177__auto__ = (((p == null))?null:p);
var m__26178__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__26177__auto__)]);
if(!((m__26178__auto__ == null))){
return m__26178__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__26178__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__26178__auto____$1 == null))){
return m__26178__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__26177__auto__ = (((p == null))?null:p);
var m__26178__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__26177__auto__)]);
if(!((m__26178__auto__ == null))){
return m__26178__auto__.call(null,p,v,ch);
} else {
var m__26178__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__26178__auto____$1 == null))){
return m__26178__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args29451 = [];
var len__26580__auto___29454 = arguments.length;
var i__26581__auto___29455 = (0);
while(true){
if((i__26581__auto___29455 < len__26580__auto___29454)){
args29451.push((arguments[i__26581__auto___29455]));

var G__29456 = (i__26581__auto___29455 + (1));
i__26581__auto___29455 = G__29456;
continue;
} else {
}
break;
}

var G__29453 = args29451.length;
switch (G__29453) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29451.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__26177__auto__ = (((p == null))?null:p);
var m__26178__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26177__auto__)]);
if(!((m__26178__auto__ == null))){
return m__26178__auto__.call(null,p);
} else {
var m__26178__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26178__auto____$1 == null))){
return m__26178__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__26177__auto__ = (((p == null))?null:p);
var m__26178__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__26177__auto__)]);
if(!((m__26178__auto__ == null))){
return m__26178__auto__.call(null,p,v);
} else {
var m__26178__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__26178__auto____$1 == null))){
return m__26178__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args29459 = [];
var len__26580__auto___29584 = arguments.length;
var i__26581__auto___29585 = (0);
while(true){
if((i__26581__auto___29585 < len__26580__auto___29584)){
args29459.push((arguments[i__26581__auto___29585]));

var G__29586 = (i__26581__auto___29585 + (1));
i__26581__auto___29585 = G__29586;
continue;
} else {
}
break;
}

var G__29461 = args29459.length;
switch (G__29461) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29459.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__25522__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__25522__auto__)){
return or__25522__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__25522__auto__,mults){
return (function (p1__29458_SHARP_){
if(cljs.core.truth_(p1__29458_SHARP_.call(null,topic))){
return p1__29458_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__29458_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__25522__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async29462 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29462 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta29463){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta29463 = meta29463;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29464,meta29463__$1){
var self__ = this;
var _29464__$1 = this;
return (new cljs.core.async.t_cljs$core$async29462(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta29463__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29462.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29464){
var self__ = this;
var _29464__$1 = this;
return self__.meta29463;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29462.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async29462.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29462.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async29462.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29462.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29462.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29462.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29462.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta29463","meta29463",1367979442,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async29462.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29462.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29462";

cljs.core.async.t_cljs$core$async29462.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__26120__auto__,writer__26121__auto__,opt__26122__auto__){
return cljs.core._write.call(null,writer__26121__auto__,"cljs.core.async/t_cljs$core$async29462");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async29462 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async29462(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29463){
return (new cljs.core.async.t_cljs$core$async29462(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta29463));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async29462(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27689__auto___29588 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27689__auto___29588,mults,ensure_mult,p){
return (function (){
var f__27690__auto__ = (function (){var switch__27577__auto__ = ((function (c__27689__auto___29588,mults,ensure_mult,p){
return (function (state_29536){
var state_val_29537 = (state_29536[(1)]);
if((state_val_29537 === (7))){
var inst_29532 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29538_29589 = state_29536__$1;
(statearr_29538_29589[(2)] = inst_29532);

(statearr_29538_29589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (20))){
var state_29536__$1 = state_29536;
var statearr_29539_29590 = state_29536__$1;
(statearr_29539_29590[(2)] = null);

(statearr_29539_29590[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (1))){
var state_29536__$1 = state_29536;
var statearr_29540_29591 = state_29536__$1;
(statearr_29540_29591[(2)] = null);

(statearr_29540_29591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (24))){
var inst_29515 = (state_29536[(7)]);
var inst_29524 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29515);
var state_29536__$1 = state_29536;
var statearr_29541_29592 = state_29536__$1;
(statearr_29541_29592[(2)] = inst_29524);

(statearr_29541_29592[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (4))){
var inst_29467 = (state_29536[(8)]);
var inst_29467__$1 = (state_29536[(2)]);
var inst_29468 = (inst_29467__$1 == null);
var state_29536__$1 = (function (){var statearr_29542 = state_29536;
(statearr_29542[(8)] = inst_29467__$1);

return statearr_29542;
})();
if(cljs.core.truth_(inst_29468)){
var statearr_29543_29593 = state_29536__$1;
(statearr_29543_29593[(1)] = (5));

} else {
var statearr_29544_29594 = state_29536__$1;
(statearr_29544_29594[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (15))){
var inst_29509 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29545_29595 = state_29536__$1;
(statearr_29545_29595[(2)] = inst_29509);

(statearr_29545_29595[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (21))){
var inst_29529 = (state_29536[(2)]);
var state_29536__$1 = (function (){var statearr_29546 = state_29536;
(statearr_29546[(9)] = inst_29529);

return statearr_29546;
})();
var statearr_29547_29596 = state_29536__$1;
(statearr_29547_29596[(2)] = null);

(statearr_29547_29596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (13))){
var inst_29491 = (state_29536[(10)]);
var inst_29493 = cljs.core.chunked_seq_QMARK_.call(null,inst_29491);
var state_29536__$1 = state_29536;
if(inst_29493){
var statearr_29548_29597 = state_29536__$1;
(statearr_29548_29597[(1)] = (16));

} else {
var statearr_29549_29598 = state_29536__$1;
(statearr_29549_29598[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (22))){
var inst_29521 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
if(cljs.core.truth_(inst_29521)){
var statearr_29550_29599 = state_29536__$1;
(statearr_29550_29599[(1)] = (23));

} else {
var statearr_29551_29600 = state_29536__$1;
(statearr_29551_29600[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (6))){
var inst_29467 = (state_29536[(8)]);
var inst_29517 = (state_29536[(11)]);
var inst_29515 = (state_29536[(7)]);
var inst_29515__$1 = topic_fn.call(null,inst_29467);
var inst_29516 = cljs.core.deref.call(null,mults);
var inst_29517__$1 = cljs.core.get.call(null,inst_29516,inst_29515__$1);
var state_29536__$1 = (function (){var statearr_29552 = state_29536;
(statearr_29552[(11)] = inst_29517__$1);

(statearr_29552[(7)] = inst_29515__$1);

return statearr_29552;
})();
if(cljs.core.truth_(inst_29517__$1)){
var statearr_29553_29601 = state_29536__$1;
(statearr_29553_29601[(1)] = (19));

} else {
var statearr_29554_29602 = state_29536__$1;
(statearr_29554_29602[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (25))){
var inst_29526 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29555_29603 = state_29536__$1;
(statearr_29555_29603[(2)] = inst_29526);

(statearr_29555_29603[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (17))){
var inst_29491 = (state_29536[(10)]);
var inst_29500 = cljs.core.first.call(null,inst_29491);
var inst_29501 = cljs.core.async.muxch_STAR_.call(null,inst_29500);
var inst_29502 = cljs.core.async.close_BANG_.call(null,inst_29501);
var inst_29503 = cljs.core.next.call(null,inst_29491);
var inst_29477 = inst_29503;
var inst_29478 = null;
var inst_29479 = (0);
var inst_29480 = (0);
var state_29536__$1 = (function (){var statearr_29556 = state_29536;
(statearr_29556[(12)] = inst_29479);

(statearr_29556[(13)] = inst_29502);

(statearr_29556[(14)] = inst_29477);

(statearr_29556[(15)] = inst_29478);

(statearr_29556[(16)] = inst_29480);

return statearr_29556;
})();
var statearr_29557_29604 = state_29536__$1;
(statearr_29557_29604[(2)] = null);

(statearr_29557_29604[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (3))){
var inst_29534 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29536__$1,inst_29534);
} else {
if((state_val_29537 === (12))){
var inst_29511 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29558_29605 = state_29536__$1;
(statearr_29558_29605[(2)] = inst_29511);

(statearr_29558_29605[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (2))){
var state_29536__$1 = state_29536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29536__$1,(4),ch);
} else {
if((state_val_29537 === (23))){
var state_29536__$1 = state_29536;
var statearr_29559_29606 = state_29536__$1;
(statearr_29559_29606[(2)] = null);

(statearr_29559_29606[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (19))){
var inst_29467 = (state_29536[(8)]);
var inst_29517 = (state_29536[(11)]);
var inst_29519 = cljs.core.async.muxch_STAR_.call(null,inst_29517);
var state_29536__$1 = state_29536;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29536__$1,(22),inst_29519,inst_29467);
} else {
if((state_val_29537 === (11))){
var inst_29491 = (state_29536[(10)]);
var inst_29477 = (state_29536[(14)]);
var inst_29491__$1 = cljs.core.seq.call(null,inst_29477);
var state_29536__$1 = (function (){var statearr_29560 = state_29536;
(statearr_29560[(10)] = inst_29491__$1);

return statearr_29560;
})();
if(inst_29491__$1){
var statearr_29561_29607 = state_29536__$1;
(statearr_29561_29607[(1)] = (13));

} else {
var statearr_29562_29608 = state_29536__$1;
(statearr_29562_29608[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (9))){
var inst_29513 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29563_29609 = state_29536__$1;
(statearr_29563_29609[(2)] = inst_29513);

(statearr_29563_29609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (5))){
var inst_29474 = cljs.core.deref.call(null,mults);
var inst_29475 = cljs.core.vals.call(null,inst_29474);
var inst_29476 = cljs.core.seq.call(null,inst_29475);
var inst_29477 = inst_29476;
var inst_29478 = null;
var inst_29479 = (0);
var inst_29480 = (0);
var state_29536__$1 = (function (){var statearr_29564 = state_29536;
(statearr_29564[(12)] = inst_29479);

(statearr_29564[(14)] = inst_29477);

(statearr_29564[(15)] = inst_29478);

(statearr_29564[(16)] = inst_29480);

return statearr_29564;
})();
var statearr_29565_29610 = state_29536__$1;
(statearr_29565_29610[(2)] = null);

(statearr_29565_29610[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (14))){
var state_29536__$1 = state_29536;
var statearr_29569_29611 = state_29536__$1;
(statearr_29569_29611[(2)] = null);

(statearr_29569_29611[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (16))){
var inst_29491 = (state_29536[(10)]);
var inst_29495 = cljs.core.chunk_first.call(null,inst_29491);
var inst_29496 = cljs.core.chunk_rest.call(null,inst_29491);
var inst_29497 = cljs.core.count.call(null,inst_29495);
var inst_29477 = inst_29496;
var inst_29478 = inst_29495;
var inst_29479 = inst_29497;
var inst_29480 = (0);
var state_29536__$1 = (function (){var statearr_29570 = state_29536;
(statearr_29570[(12)] = inst_29479);

(statearr_29570[(14)] = inst_29477);

(statearr_29570[(15)] = inst_29478);

(statearr_29570[(16)] = inst_29480);

return statearr_29570;
})();
var statearr_29571_29612 = state_29536__$1;
(statearr_29571_29612[(2)] = null);

(statearr_29571_29612[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (10))){
var inst_29479 = (state_29536[(12)]);
var inst_29477 = (state_29536[(14)]);
var inst_29478 = (state_29536[(15)]);
var inst_29480 = (state_29536[(16)]);
var inst_29485 = cljs.core._nth.call(null,inst_29478,inst_29480);
var inst_29486 = cljs.core.async.muxch_STAR_.call(null,inst_29485);
var inst_29487 = cljs.core.async.close_BANG_.call(null,inst_29486);
var inst_29488 = (inst_29480 + (1));
var tmp29566 = inst_29479;
var tmp29567 = inst_29477;
var tmp29568 = inst_29478;
var inst_29477__$1 = tmp29567;
var inst_29478__$1 = tmp29568;
var inst_29479__$1 = tmp29566;
var inst_29480__$1 = inst_29488;
var state_29536__$1 = (function (){var statearr_29572 = state_29536;
(statearr_29572[(12)] = inst_29479__$1);

(statearr_29572[(17)] = inst_29487);

(statearr_29572[(14)] = inst_29477__$1);

(statearr_29572[(15)] = inst_29478__$1);

(statearr_29572[(16)] = inst_29480__$1);

return statearr_29572;
})();
var statearr_29573_29613 = state_29536__$1;
(statearr_29573_29613[(2)] = null);

(statearr_29573_29613[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (18))){
var inst_29506 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29574_29614 = state_29536__$1;
(statearr_29574_29614[(2)] = inst_29506);

(statearr_29574_29614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (8))){
var inst_29479 = (state_29536[(12)]);
var inst_29480 = (state_29536[(16)]);
var inst_29482 = (inst_29480 < inst_29479);
var inst_29483 = inst_29482;
var state_29536__$1 = state_29536;
if(cljs.core.truth_(inst_29483)){
var statearr_29575_29615 = state_29536__$1;
(statearr_29575_29615[(1)] = (10));

} else {
var statearr_29576_29616 = state_29536__$1;
(statearr_29576_29616[(1)] = (11));

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
});})(c__27689__auto___29588,mults,ensure_mult,p))
;
return ((function (switch__27577__auto__,c__27689__auto___29588,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__27578__auto__ = null;
var cljs$core$async$state_machine__27578__auto____0 = (function (){
var statearr_29580 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29580[(0)] = cljs$core$async$state_machine__27578__auto__);

(statearr_29580[(1)] = (1));

return statearr_29580;
});
var cljs$core$async$state_machine__27578__auto____1 = (function (state_29536){
while(true){
var ret_value__27579__auto__ = (function (){try{while(true){
var result__27580__auto__ = switch__27577__auto__.call(null,state_29536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27580__auto__;
}
break;
}
}catch (e29581){if((e29581 instanceof Object)){
var ex__27581__auto__ = e29581;
var statearr_29582_29617 = state_29536;
(statearr_29582_29617[(5)] = ex__27581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29581;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29618 = state_29536;
state_29536 = G__29618;
continue;
} else {
return ret_value__27579__auto__;
}
break;
}
});
cljs$core$async$state_machine__27578__auto__ = function(state_29536){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27578__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27578__auto____1.call(this,state_29536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27578__auto____0;
cljs$core$async$state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27578__auto____1;
return cljs$core$async$state_machine__27578__auto__;
})()
;})(switch__27577__auto__,c__27689__auto___29588,mults,ensure_mult,p))
})();
var state__27691__auto__ = (function (){var statearr_29583 = f__27690__auto__.call(null);
(statearr_29583[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27689__auto___29588);

return statearr_29583;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27691__auto__);
});})(c__27689__auto___29588,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args29619 = [];
var len__26580__auto___29622 = arguments.length;
var i__26581__auto___29623 = (0);
while(true){
if((i__26581__auto___29623 < len__26580__auto___29622)){
args29619.push((arguments[i__26581__auto___29623]));

var G__29624 = (i__26581__auto___29623 + (1));
i__26581__auto___29623 = G__29624;
continue;
} else {
}
break;
}

var G__29621 = args29619.length;
switch (G__29621) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29619.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args29626 = [];
var len__26580__auto___29629 = arguments.length;
var i__26581__auto___29630 = (0);
while(true){
if((i__26581__auto___29630 < len__26580__auto___29629)){
args29626.push((arguments[i__26581__auto___29630]));

var G__29631 = (i__26581__auto___29630 + (1));
i__26581__auto___29630 = G__29631;
continue;
} else {
}
break;
}

var G__29628 = args29626.length;
switch (G__29628) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29626.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args29633 = [];
var len__26580__auto___29704 = arguments.length;
var i__26581__auto___29705 = (0);
while(true){
if((i__26581__auto___29705 < len__26580__auto___29704)){
args29633.push((arguments[i__26581__auto___29705]));

var G__29706 = (i__26581__auto___29705 + (1));
i__26581__auto___29705 = G__29706;
continue;
} else {
}
break;
}

var G__29635 = args29633.length;
switch (G__29635) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29633.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__27689__auto___29708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27689__auto___29708,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__27690__auto__ = (function (){var switch__27577__auto__ = ((function (c__27689__auto___29708,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29674){
var state_val_29675 = (state_29674[(1)]);
if((state_val_29675 === (7))){
var state_29674__$1 = state_29674;
var statearr_29676_29709 = state_29674__$1;
(statearr_29676_29709[(2)] = null);

(statearr_29676_29709[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (1))){
var state_29674__$1 = state_29674;
var statearr_29677_29710 = state_29674__$1;
(statearr_29677_29710[(2)] = null);

(statearr_29677_29710[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (4))){
var inst_29638 = (state_29674[(7)]);
var inst_29640 = (inst_29638 < cnt);
var state_29674__$1 = state_29674;
if(cljs.core.truth_(inst_29640)){
var statearr_29678_29711 = state_29674__$1;
(statearr_29678_29711[(1)] = (6));

} else {
var statearr_29679_29712 = state_29674__$1;
(statearr_29679_29712[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (15))){
var inst_29670 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
var statearr_29680_29713 = state_29674__$1;
(statearr_29680_29713[(2)] = inst_29670);

(statearr_29680_29713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (13))){
var inst_29663 = cljs.core.async.close_BANG_.call(null,out);
var state_29674__$1 = state_29674;
var statearr_29681_29714 = state_29674__$1;
(statearr_29681_29714[(2)] = inst_29663);

(statearr_29681_29714[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (6))){
var state_29674__$1 = state_29674;
var statearr_29682_29715 = state_29674__$1;
(statearr_29682_29715[(2)] = null);

(statearr_29682_29715[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (3))){
var inst_29672 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29674__$1,inst_29672);
} else {
if((state_val_29675 === (12))){
var inst_29660 = (state_29674[(8)]);
var inst_29660__$1 = (state_29674[(2)]);
var inst_29661 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29660__$1);
var state_29674__$1 = (function (){var statearr_29683 = state_29674;
(statearr_29683[(8)] = inst_29660__$1);

return statearr_29683;
})();
if(cljs.core.truth_(inst_29661)){
var statearr_29684_29716 = state_29674__$1;
(statearr_29684_29716[(1)] = (13));

} else {
var statearr_29685_29717 = state_29674__$1;
(statearr_29685_29717[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (2))){
var inst_29637 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_29638 = (0);
var state_29674__$1 = (function (){var statearr_29686 = state_29674;
(statearr_29686[(7)] = inst_29638);

(statearr_29686[(9)] = inst_29637);

return statearr_29686;
})();
var statearr_29687_29718 = state_29674__$1;
(statearr_29687_29718[(2)] = null);

(statearr_29687_29718[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (11))){
var inst_29638 = (state_29674[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29674,(10),Object,null,(9));
var inst_29647 = chs__$1.call(null,inst_29638);
var inst_29648 = done.call(null,inst_29638);
var inst_29649 = cljs.core.async.take_BANG_.call(null,inst_29647,inst_29648);
var state_29674__$1 = state_29674;
var statearr_29688_29719 = state_29674__$1;
(statearr_29688_29719[(2)] = inst_29649);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29674__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (9))){
var inst_29638 = (state_29674[(7)]);
var inst_29651 = (state_29674[(2)]);
var inst_29652 = (inst_29638 + (1));
var inst_29638__$1 = inst_29652;
var state_29674__$1 = (function (){var statearr_29689 = state_29674;
(statearr_29689[(7)] = inst_29638__$1);

(statearr_29689[(10)] = inst_29651);

return statearr_29689;
})();
var statearr_29690_29720 = state_29674__$1;
(statearr_29690_29720[(2)] = null);

(statearr_29690_29720[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (5))){
var inst_29658 = (state_29674[(2)]);
var state_29674__$1 = (function (){var statearr_29691 = state_29674;
(statearr_29691[(11)] = inst_29658);

return statearr_29691;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29674__$1,(12),dchan);
} else {
if((state_val_29675 === (14))){
var inst_29660 = (state_29674[(8)]);
var inst_29665 = cljs.core.apply.call(null,f,inst_29660);
var state_29674__$1 = state_29674;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29674__$1,(16),out,inst_29665);
} else {
if((state_val_29675 === (16))){
var inst_29667 = (state_29674[(2)]);
var state_29674__$1 = (function (){var statearr_29692 = state_29674;
(statearr_29692[(12)] = inst_29667);

return statearr_29692;
})();
var statearr_29693_29721 = state_29674__$1;
(statearr_29693_29721[(2)] = null);

(statearr_29693_29721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (10))){
var inst_29642 = (state_29674[(2)]);
var inst_29643 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_29674__$1 = (function (){var statearr_29694 = state_29674;
(statearr_29694[(13)] = inst_29642);

return statearr_29694;
})();
var statearr_29695_29722 = state_29674__$1;
(statearr_29695_29722[(2)] = inst_29643);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29674__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29675 === (8))){
var inst_29656 = (state_29674[(2)]);
var state_29674__$1 = state_29674;
var statearr_29696_29723 = state_29674__$1;
(statearr_29696_29723[(2)] = inst_29656);

(statearr_29696_29723[(1)] = (5));


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
});})(c__27689__auto___29708,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__27577__auto__,c__27689__auto___29708,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__27578__auto__ = null;
var cljs$core$async$state_machine__27578__auto____0 = (function (){
var statearr_29700 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29700[(0)] = cljs$core$async$state_machine__27578__auto__);

(statearr_29700[(1)] = (1));

return statearr_29700;
});
var cljs$core$async$state_machine__27578__auto____1 = (function (state_29674){
while(true){
var ret_value__27579__auto__ = (function (){try{while(true){
var result__27580__auto__ = switch__27577__auto__.call(null,state_29674);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27580__auto__;
}
break;
}
}catch (e29701){if((e29701 instanceof Object)){
var ex__27581__auto__ = e29701;
var statearr_29702_29724 = state_29674;
(statearr_29702_29724[(5)] = ex__27581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29674);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29701;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29725 = state_29674;
state_29674 = G__29725;
continue;
} else {
return ret_value__27579__auto__;
}
break;
}
});
cljs$core$async$state_machine__27578__auto__ = function(state_29674){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27578__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27578__auto____1.call(this,state_29674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27578__auto____0;
cljs$core$async$state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27578__auto____1;
return cljs$core$async$state_machine__27578__auto__;
})()
;})(switch__27577__auto__,c__27689__auto___29708,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__27691__auto__ = (function (){var statearr_29703 = f__27690__auto__.call(null);
(statearr_29703[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27689__auto___29708);

return statearr_29703;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27691__auto__);
});})(c__27689__auto___29708,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args29727 = [];
var len__26580__auto___29783 = arguments.length;
var i__26581__auto___29784 = (0);
while(true){
if((i__26581__auto___29784 < len__26580__auto___29783)){
args29727.push((arguments[i__26581__auto___29784]));

var G__29785 = (i__26581__auto___29784 + (1));
i__26581__auto___29784 = G__29785;
continue;
} else {
}
break;
}

var G__29729 = args29727.length;
switch (G__29729) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29727.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27689__auto___29787 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27689__auto___29787,out){
return (function (){
var f__27690__auto__ = (function (){var switch__27577__auto__ = ((function (c__27689__auto___29787,out){
return (function (state_29759){
var state_val_29760 = (state_29759[(1)]);
if((state_val_29760 === (7))){
var inst_29739 = (state_29759[(7)]);
var inst_29738 = (state_29759[(8)]);
var inst_29738__$1 = (state_29759[(2)]);
var inst_29739__$1 = cljs.core.nth.call(null,inst_29738__$1,(0),null);
var inst_29740 = cljs.core.nth.call(null,inst_29738__$1,(1),null);
var inst_29741 = (inst_29739__$1 == null);
var state_29759__$1 = (function (){var statearr_29761 = state_29759;
(statearr_29761[(7)] = inst_29739__$1);

(statearr_29761[(8)] = inst_29738__$1);

(statearr_29761[(9)] = inst_29740);

return statearr_29761;
})();
if(cljs.core.truth_(inst_29741)){
var statearr_29762_29788 = state_29759__$1;
(statearr_29762_29788[(1)] = (8));

} else {
var statearr_29763_29789 = state_29759__$1;
(statearr_29763_29789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29760 === (1))){
var inst_29730 = cljs.core.vec.call(null,chs);
var inst_29731 = inst_29730;
var state_29759__$1 = (function (){var statearr_29764 = state_29759;
(statearr_29764[(10)] = inst_29731);

return statearr_29764;
})();
var statearr_29765_29790 = state_29759__$1;
(statearr_29765_29790[(2)] = null);

(statearr_29765_29790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29760 === (4))){
var inst_29731 = (state_29759[(10)]);
var state_29759__$1 = state_29759;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29759__$1,(7),inst_29731);
} else {
if((state_val_29760 === (6))){
var inst_29755 = (state_29759[(2)]);
var state_29759__$1 = state_29759;
var statearr_29766_29791 = state_29759__$1;
(statearr_29766_29791[(2)] = inst_29755);

(statearr_29766_29791[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29760 === (3))){
var inst_29757 = (state_29759[(2)]);
var state_29759__$1 = state_29759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29759__$1,inst_29757);
} else {
if((state_val_29760 === (2))){
var inst_29731 = (state_29759[(10)]);
var inst_29733 = cljs.core.count.call(null,inst_29731);
var inst_29734 = (inst_29733 > (0));
var state_29759__$1 = state_29759;
if(cljs.core.truth_(inst_29734)){
var statearr_29768_29792 = state_29759__$1;
(statearr_29768_29792[(1)] = (4));

} else {
var statearr_29769_29793 = state_29759__$1;
(statearr_29769_29793[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29760 === (11))){
var inst_29731 = (state_29759[(10)]);
var inst_29748 = (state_29759[(2)]);
var tmp29767 = inst_29731;
var inst_29731__$1 = tmp29767;
var state_29759__$1 = (function (){var statearr_29770 = state_29759;
(statearr_29770[(10)] = inst_29731__$1);

(statearr_29770[(11)] = inst_29748);

return statearr_29770;
})();
var statearr_29771_29794 = state_29759__$1;
(statearr_29771_29794[(2)] = null);

(statearr_29771_29794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29760 === (9))){
var inst_29739 = (state_29759[(7)]);
var state_29759__$1 = state_29759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29759__$1,(11),out,inst_29739);
} else {
if((state_val_29760 === (5))){
var inst_29753 = cljs.core.async.close_BANG_.call(null,out);
var state_29759__$1 = state_29759;
var statearr_29772_29795 = state_29759__$1;
(statearr_29772_29795[(2)] = inst_29753);

(statearr_29772_29795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29760 === (10))){
var inst_29751 = (state_29759[(2)]);
var state_29759__$1 = state_29759;
var statearr_29773_29796 = state_29759__$1;
(statearr_29773_29796[(2)] = inst_29751);

(statearr_29773_29796[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29760 === (8))){
var inst_29739 = (state_29759[(7)]);
var inst_29731 = (state_29759[(10)]);
var inst_29738 = (state_29759[(8)]);
var inst_29740 = (state_29759[(9)]);
var inst_29743 = (function (){var cs = inst_29731;
var vec__29736 = inst_29738;
var v = inst_29739;
var c = inst_29740;
return ((function (cs,vec__29736,v,c,inst_29739,inst_29731,inst_29738,inst_29740,state_val_29760,c__27689__auto___29787,out){
return (function (p1__29726_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__29726_SHARP_);
});
;})(cs,vec__29736,v,c,inst_29739,inst_29731,inst_29738,inst_29740,state_val_29760,c__27689__auto___29787,out))
})();
var inst_29744 = cljs.core.filterv.call(null,inst_29743,inst_29731);
var inst_29731__$1 = inst_29744;
var state_29759__$1 = (function (){var statearr_29774 = state_29759;
(statearr_29774[(10)] = inst_29731__$1);

return statearr_29774;
})();
var statearr_29775_29797 = state_29759__$1;
(statearr_29775_29797[(2)] = null);

(statearr_29775_29797[(1)] = (2));


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
});})(c__27689__auto___29787,out))
;
return ((function (switch__27577__auto__,c__27689__auto___29787,out){
return (function() {
var cljs$core$async$state_machine__27578__auto__ = null;
var cljs$core$async$state_machine__27578__auto____0 = (function (){
var statearr_29779 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29779[(0)] = cljs$core$async$state_machine__27578__auto__);

(statearr_29779[(1)] = (1));

return statearr_29779;
});
var cljs$core$async$state_machine__27578__auto____1 = (function (state_29759){
while(true){
var ret_value__27579__auto__ = (function (){try{while(true){
var result__27580__auto__ = switch__27577__auto__.call(null,state_29759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27580__auto__;
}
break;
}
}catch (e29780){if((e29780 instanceof Object)){
var ex__27581__auto__ = e29780;
var statearr_29781_29798 = state_29759;
(statearr_29781_29798[(5)] = ex__27581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29780;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29799 = state_29759;
state_29759 = G__29799;
continue;
} else {
return ret_value__27579__auto__;
}
break;
}
});
cljs$core$async$state_machine__27578__auto__ = function(state_29759){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27578__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27578__auto____1.call(this,state_29759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27578__auto____0;
cljs$core$async$state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27578__auto____1;
return cljs$core$async$state_machine__27578__auto__;
})()
;})(switch__27577__auto__,c__27689__auto___29787,out))
})();
var state__27691__auto__ = (function (){var statearr_29782 = f__27690__auto__.call(null);
(statearr_29782[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27689__auto___29787);

return statearr_29782;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27691__auto__);
});})(c__27689__auto___29787,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args29800 = [];
var len__26580__auto___29849 = arguments.length;
var i__26581__auto___29850 = (0);
while(true){
if((i__26581__auto___29850 < len__26580__auto___29849)){
args29800.push((arguments[i__26581__auto___29850]));

var G__29851 = (i__26581__auto___29850 + (1));
i__26581__auto___29850 = G__29851;
continue;
} else {
}
break;
}

var G__29802 = args29800.length;
switch (G__29802) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29800.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27689__auto___29853 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27689__auto___29853,out){
return (function (){
var f__27690__auto__ = (function (){var switch__27577__auto__ = ((function (c__27689__auto___29853,out){
return (function (state_29826){
var state_val_29827 = (state_29826[(1)]);
if((state_val_29827 === (7))){
var inst_29808 = (state_29826[(7)]);
var inst_29808__$1 = (state_29826[(2)]);
var inst_29809 = (inst_29808__$1 == null);
var inst_29810 = cljs.core.not.call(null,inst_29809);
var state_29826__$1 = (function (){var statearr_29828 = state_29826;
(statearr_29828[(7)] = inst_29808__$1);

return statearr_29828;
})();
if(inst_29810){
var statearr_29829_29854 = state_29826__$1;
(statearr_29829_29854[(1)] = (8));

} else {
var statearr_29830_29855 = state_29826__$1;
(statearr_29830_29855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (1))){
var inst_29803 = (0);
var state_29826__$1 = (function (){var statearr_29831 = state_29826;
(statearr_29831[(8)] = inst_29803);

return statearr_29831;
})();
var statearr_29832_29856 = state_29826__$1;
(statearr_29832_29856[(2)] = null);

(statearr_29832_29856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (4))){
var state_29826__$1 = state_29826;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29826__$1,(7),ch);
} else {
if((state_val_29827 === (6))){
var inst_29821 = (state_29826[(2)]);
var state_29826__$1 = state_29826;
var statearr_29833_29857 = state_29826__$1;
(statearr_29833_29857[(2)] = inst_29821);

(statearr_29833_29857[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (3))){
var inst_29823 = (state_29826[(2)]);
var inst_29824 = cljs.core.async.close_BANG_.call(null,out);
var state_29826__$1 = (function (){var statearr_29834 = state_29826;
(statearr_29834[(9)] = inst_29823);

return statearr_29834;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29826__$1,inst_29824);
} else {
if((state_val_29827 === (2))){
var inst_29803 = (state_29826[(8)]);
var inst_29805 = (inst_29803 < n);
var state_29826__$1 = state_29826;
if(cljs.core.truth_(inst_29805)){
var statearr_29835_29858 = state_29826__$1;
(statearr_29835_29858[(1)] = (4));

} else {
var statearr_29836_29859 = state_29826__$1;
(statearr_29836_29859[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (11))){
var inst_29803 = (state_29826[(8)]);
var inst_29813 = (state_29826[(2)]);
var inst_29814 = (inst_29803 + (1));
var inst_29803__$1 = inst_29814;
var state_29826__$1 = (function (){var statearr_29837 = state_29826;
(statearr_29837[(10)] = inst_29813);

(statearr_29837[(8)] = inst_29803__$1);

return statearr_29837;
})();
var statearr_29838_29860 = state_29826__$1;
(statearr_29838_29860[(2)] = null);

(statearr_29838_29860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (9))){
var state_29826__$1 = state_29826;
var statearr_29839_29861 = state_29826__$1;
(statearr_29839_29861[(2)] = null);

(statearr_29839_29861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (5))){
var state_29826__$1 = state_29826;
var statearr_29840_29862 = state_29826__$1;
(statearr_29840_29862[(2)] = null);

(statearr_29840_29862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (10))){
var inst_29818 = (state_29826[(2)]);
var state_29826__$1 = state_29826;
var statearr_29841_29863 = state_29826__$1;
(statearr_29841_29863[(2)] = inst_29818);

(statearr_29841_29863[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29827 === (8))){
var inst_29808 = (state_29826[(7)]);
var state_29826__$1 = state_29826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29826__$1,(11),out,inst_29808);
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
});})(c__27689__auto___29853,out))
;
return ((function (switch__27577__auto__,c__27689__auto___29853,out){
return (function() {
var cljs$core$async$state_machine__27578__auto__ = null;
var cljs$core$async$state_machine__27578__auto____0 = (function (){
var statearr_29845 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29845[(0)] = cljs$core$async$state_machine__27578__auto__);

(statearr_29845[(1)] = (1));

return statearr_29845;
});
var cljs$core$async$state_machine__27578__auto____1 = (function (state_29826){
while(true){
var ret_value__27579__auto__ = (function (){try{while(true){
var result__27580__auto__ = switch__27577__auto__.call(null,state_29826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27580__auto__;
}
break;
}
}catch (e29846){if((e29846 instanceof Object)){
var ex__27581__auto__ = e29846;
var statearr_29847_29864 = state_29826;
(statearr_29847_29864[(5)] = ex__27581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29846;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29865 = state_29826;
state_29826 = G__29865;
continue;
} else {
return ret_value__27579__auto__;
}
break;
}
});
cljs$core$async$state_machine__27578__auto__ = function(state_29826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27578__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27578__auto____1.call(this,state_29826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27578__auto____0;
cljs$core$async$state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27578__auto____1;
return cljs$core$async$state_machine__27578__auto__;
})()
;})(switch__27577__auto__,c__27689__auto___29853,out))
})();
var state__27691__auto__ = (function (){var statearr_29848 = f__27690__auto__.call(null);
(statearr_29848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27689__auto___29853);

return statearr_29848;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27691__auto__);
});})(c__27689__auto___29853,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29873 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29873 = (function (map_LT_,f,ch,meta29874){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29874 = meta29874;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29875,meta29874__$1){
var self__ = this;
var _29875__$1 = this;
return (new cljs.core.async.t_cljs$core$async29873(self__.map_LT_,self__.f,self__.ch,meta29874__$1));
});

cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29875){
var self__ = this;
var _29875__$1 = this;
return self__.meta29874;
});

cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async29876 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29876 = (function (map_LT_,f,ch,meta29874,_,fn1,meta29877){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta29874 = meta29874;
this._ = _;
this.fn1 = fn1;
this.meta29877 = meta29877;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_29878,meta29877__$1){
var self__ = this;
var _29878__$1 = this;
return (new cljs.core.async.t_cljs$core$async29876(self__.map_LT_,self__.f,self__.ch,self__.meta29874,self__._,self__.fn1,meta29877__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async29876.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_29878){
var self__ = this;
var _29878__$1 = this;
return self__.meta29877;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29876.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async29876.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29876.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async29876.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__29866_SHARP_){
return f1.call(null,(((p1__29866_SHARP_ == null))?null:self__.f.call(null,p1__29866_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async29876.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29874","meta29874",-2009452239,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async29873","cljs.core.async/t_cljs$core$async29873",1436125833,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta29877","meta29877",1779021206,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async29876.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29876.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29876";

cljs.core.async.t_cljs$core$async29876.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__26120__auto__,writer__26121__auto__,opt__26122__auto__){
return cljs.core._write.call(null,writer__26121__auto__,"cljs.core.async/t_cljs$core$async29876");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async29876 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29876(map_LT___$1,f__$1,ch__$1,meta29874__$1,___$2,fn1__$1,meta29877){
return (new cljs.core.async.t_cljs$core$async29876(map_LT___$1,f__$1,ch__$1,meta29874__$1,___$2,fn1__$1,meta29877));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async29876(self__.map_LT_,self__.f,self__.ch,self__.meta29874,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__25510__auto__ = ret;
if(cljs.core.truth_(and__25510__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__25510__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29873.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async29873.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29874","meta29874",-2009452239,null)], null);
});

cljs.core.async.t_cljs$core$async29873.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29873.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29873";

cljs.core.async.t_cljs$core$async29873.cljs$lang$ctorPrWriter = (function (this__26120__auto__,writer__26121__auto__,opt__26122__auto__){
return cljs.core._write.call(null,writer__26121__auto__,"cljs.core.async/t_cljs$core$async29873");
});

cljs.core.async.__GT_t_cljs$core$async29873 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async29873(map_LT___$1,f__$1,ch__$1,meta29874){
return (new cljs.core.async.t_cljs$core$async29873(map_LT___$1,f__$1,ch__$1,meta29874));
});

}

return (new cljs.core.async.t_cljs$core$async29873(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async29882 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29882 = (function (map_GT_,f,ch,meta29883){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta29883 = meta29883;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29884,meta29883__$1){
var self__ = this;
var _29884__$1 = this;
return (new cljs.core.async.t_cljs$core$async29882(self__.map_GT_,self__.f,self__.ch,meta29883__$1));
});

cljs.core.async.t_cljs$core$async29882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29884){
var self__ = this;
var _29884__$1 = this;
return self__.meta29883;
});

cljs.core.async.t_cljs$core$async29882.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29882.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29882.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29882.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29882.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29882.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async29882.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29883","meta29883",83497563,null)], null);
});

cljs.core.async.t_cljs$core$async29882.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29882.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29882";

cljs.core.async.t_cljs$core$async29882.cljs$lang$ctorPrWriter = (function (this__26120__auto__,writer__26121__auto__,opt__26122__auto__){
return cljs.core._write.call(null,writer__26121__auto__,"cljs.core.async/t_cljs$core$async29882");
});

cljs.core.async.__GT_t_cljs$core$async29882 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async29882(map_GT___$1,f__$1,ch__$1,meta29883){
return (new cljs.core.async.t_cljs$core$async29882(map_GT___$1,f__$1,ch__$1,meta29883));
});

}

return (new cljs.core.async.t_cljs$core$async29882(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async29888 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29888 = (function (filter_GT_,p,ch,meta29889){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta29889 = meta29889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async29888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29890,meta29889__$1){
var self__ = this;
var _29890__$1 = this;
return (new cljs.core.async.t_cljs$core$async29888(self__.filter_GT_,self__.p,self__.ch,meta29889__$1));
});

cljs.core.async.t_cljs$core$async29888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29890){
var self__ = this;
var _29890__$1 = this;
return self__.meta29889;
});

cljs.core.async.t_cljs$core$async29888.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async29888.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29888.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async29888.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async29888.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async29888.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async29888.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async29888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta29889","meta29889",-694031117,null)], null);
});

cljs.core.async.t_cljs$core$async29888.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async29888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29888";

cljs.core.async.t_cljs$core$async29888.cljs$lang$ctorPrWriter = (function (this__26120__auto__,writer__26121__auto__,opt__26122__auto__){
return cljs.core._write.call(null,writer__26121__auto__,"cljs.core.async/t_cljs$core$async29888");
});

cljs.core.async.__GT_t_cljs$core$async29888 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async29888(filter_GT___$1,p__$1,ch__$1,meta29889){
return (new cljs.core.async.t_cljs$core$async29888(filter_GT___$1,p__$1,ch__$1,meta29889));
});

}

return (new cljs.core.async.t_cljs$core$async29888(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args29891 = [];
var len__26580__auto___29935 = arguments.length;
var i__26581__auto___29936 = (0);
while(true){
if((i__26581__auto___29936 < len__26580__auto___29935)){
args29891.push((arguments[i__26581__auto___29936]));

var G__29937 = (i__26581__auto___29936 + (1));
i__26581__auto___29936 = G__29937;
continue;
} else {
}
break;
}

var G__29893 = args29891.length;
switch (G__29893) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29891.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27689__auto___29939 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27689__auto___29939,out){
return (function (){
var f__27690__auto__ = (function (){var switch__27577__auto__ = ((function (c__27689__auto___29939,out){
return (function (state_29914){
var state_val_29915 = (state_29914[(1)]);
if((state_val_29915 === (7))){
var inst_29910 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
var statearr_29916_29940 = state_29914__$1;
(statearr_29916_29940[(2)] = inst_29910);

(statearr_29916_29940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (1))){
var state_29914__$1 = state_29914;
var statearr_29917_29941 = state_29914__$1;
(statearr_29917_29941[(2)] = null);

(statearr_29917_29941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (4))){
var inst_29896 = (state_29914[(7)]);
var inst_29896__$1 = (state_29914[(2)]);
var inst_29897 = (inst_29896__$1 == null);
var state_29914__$1 = (function (){var statearr_29918 = state_29914;
(statearr_29918[(7)] = inst_29896__$1);

return statearr_29918;
})();
if(cljs.core.truth_(inst_29897)){
var statearr_29919_29942 = state_29914__$1;
(statearr_29919_29942[(1)] = (5));

} else {
var statearr_29920_29943 = state_29914__$1;
(statearr_29920_29943[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (6))){
var inst_29896 = (state_29914[(7)]);
var inst_29901 = p.call(null,inst_29896);
var state_29914__$1 = state_29914;
if(cljs.core.truth_(inst_29901)){
var statearr_29921_29944 = state_29914__$1;
(statearr_29921_29944[(1)] = (8));

} else {
var statearr_29922_29945 = state_29914__$1;
(statearr_29922_29945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (3))){
var inst_29912 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29914__$1,inst_29912);
} else {
if((state_val_29915 === (2))){
var state_29914__$1 = state_29914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29914__$1,(4),ch);
} else {
if((state_val_29915 === (11))){
var inst_29904 = (state_29914[(2)]);
var state_29914__$1 = state_29914;
var statearr_29923_29946 = state_29914__$1;
(statearr_29923_29946[(2)] = inst_29904);

(statearr_29923_29946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (9))){
var state_29914__$1 = state_29914;
var statearr_29924_29947 = state_29914__$1;
(statearr_29924_29947[(2)] = null);

(statearr_29924_29947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (5))){
var inst_29899 = cljs.core.async.close_BANG_.call(null,out);
var state_29914__$1 = state_29914;
var statearr_29925_29948 = state_29914__$1;
(statearr_29925_29948[(2)] = inst_29899);

(statearr_29925_29948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (10))){
var inst_29907 = (state_29914[(2)]);
var state_29914__$1 = (function (){var statearr_29926 = state_29914;
(statearr_29926[(8)] = inst_29907);

return statearr_29926;
})();
var statearr_29927_29949 = state_29914__$1;
(statearr_29927_29949[(2)] = null);

(statearr_29927_29949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29915 === (8))){
var inst_29896 = (state_29914[(7)]);
var state_29914__$1 = state_29914;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29914__$1,(11),out,inst_29896);
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
});})(c__27689__auto___29939,out))
;
return ((function (switch__27577__auto__,c__27689__auto___29939,out){
return (function() {
var cljs$core$async$state_machine__27578__auto__ = null;
var cljs$core$async$state_machine__27578__auto____0 = (function (){
var statearr_29931 = [null,null,null,null,null,null,null,null,null];
(statearr_29931[(0)] = cljs$core$async$state_machine__27578__auto__);

(statearr_29931[(1)] = (1));

return statearr_29931;
});
var cljs$core$async$state_machine__27578__auto____1 = (function (state_29914){
while(true){
var ret_value__27579__auto__ = (function (){try{while(true){
var result__27580__auto__ = switch__27577__auto__.call(null,state_29914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27580__auto__;
}
break;
}
}catch (e29932){if((e29932 instanceof Object)){
var ex__27581__auto__ = e29932;
var statearr_29933_29950 = state_29914;
(statearr_29933_29950[(5)] = ex__27581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29932;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29951 = state_29914;
state_29914 = G__29951;
continue;
} else {
return ret_value__27579__auto__;
}
break;
}
});
cljs$core$async$state_machine__27578__auto__ = function(state_29914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27578__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27578__auto____1.call(this,state_29914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27578__auto____0;
cljs$core$async$state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27578__auto____1;
return cljs$core$async$state_machine__27578__auto__;
})()
;})(switch__27577__auto__,c__27689__auto___29939,out))
})();
var state__27691__auto__ = (function (){var statearr_29934 = f__27690__auto__.call(null);
(statearr_29934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27689__auto___29939);

return statearr_29934;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27691__auto__);
});})(c__27689__auto___29939,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args29952 = [];
var len__26580__auto___29955 = arguments.length;
var i__26581__auto___29956 = (0);
while(true){
if((i__26581__auto___29956 < len__26580__auto___29955)){
args29952.push((arguments[i__26581__auto___29956]));

var G__29957 = (i__26581__auto___29956 + (1));
i__26581__auto___29956 = G__29957;
continue;
} else {
}
break;
}

var G__29954 = args29952.length;
switch (G__29954) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29952.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27689__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27689__auto__){
return (function (){
var f__27690__auto__ = (function (){var switch__27577__auto__ = ((function (c__27689__auto__){
return (function (state_30124){
var state_val_30125 = (state_30124[(1)]);
if((state_val_30125 === (7))){
var inst_30120 = (state_30124[(2)]);
var state_30124__$1 = state_30124;
var statearr_30126_30167 = state_30124__$1;
(statearr_30126_30167[(2)] = inst_30120);

(statearr_30126_30167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (20))){
var inst_30090 = (state_30124[(7)]);
var inst_30101 = (state_30124[(2)]);
var inst_30102 = cljs.core.next.call(null,inst_30090);
var inst_30076 = inst_30102;
var inst_30077 = null;
var inst_30078 = (0);
var inst_30079 = (0);
var state_30124__$1 = (function (){var statearr_30127 = state_30124;
(statearr_30127[(8)] = inst_30078);

(statearr_30127[(9)] = inst_30101);

(statearr_30127[(10)] = inst_30076);

(statearr_30127[(11)] = inst_30077);

(statearr_30127[(12)] = inst_30079);

return statearr_30127;
})();
var statearr_30128_30168 = state_30124__$1;
(statearr_30128_30168[(2)] = null);

(statearr_30128_30168[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (1))){
var state_30124__$1 = state_30124;
var statearr_30129_30169 = state_30124__$1;
(statearr_30129_30169[(2)] = null);

(statearr_30129_30169[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (4))){
var inst_30065 = (state_30124[(13)]);
var inst_30065__$1 = (state_30124[(2)]);
var inst_30066 = (inst_30065__$1 == null);
var state_30124__$1 = (function (){var statearr_30130 = state_30124;
(statearr_30130[(13)] = inst_30065__$1);

return statearr_30130;
})();
if(cljs.core.truth_(inst_30066)){
var statearr_30131_30170 = state_30124__$1;
(statearr_30131_30170[(1)] = (5));

} else {
var statearr_30132_30171 = state_30124__$1;
(statearr_30132_30171[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (15))){
var state_30124__$1 = state_30124;
var statearr_30136_30172 = state_30124__$1;
(statearr_30136_30172[(2)] = null);

(statearr_30136_30172[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (21))){
var state_30124__$1 = state_30124;
var statearr_30137_30173 = state_30124__$1;
(statearr_30137_30173[(2)] = null);

(statearr_30137_30173[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (13))){
var inst_30078 = (state_30124[(8)]);
var inst_30076 = (state_30124[(10)]);
var inst_30077 = (state_30124[(11)]);
var inst_30079 = (state_30124[(12)]);
var inst_30086 = (state_30124[(2)]);
var inst_30087 = (inst_30079 + (1));
var tmp30133 = inst_30078;
var tmp30134 = inst_30076;
var tmp30135 = inst_30077;
var inst_30076__$1 = tmp30134;
var inst_30077__$1 = tmp30135;
var inst_30078__$1 = tmp30133;
var inst_30079__$1 = inst_30087;
var state_30124__$1 = (function (){var statearr_30138 = state_30124;
(statearr_30138[(14)] = inst_30086);

(statearr_30138[(8)] = inst_30078__$1);

(statearr_30138[(10)] = inst_30076__$1);

(statearr_30138[(11)] = inst_30077__$1);

(statearr_30138[(12)] = inst_30079__$1);

return statearr_30138;
})();
var statearr_30139_30174 = state_30124__$1;
(statearr_30139_30174[(2)] = null);

(statearr_30139_30174[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (22))){
var state_30124__$1 = state_30124;
var statearr_30140_30175 = state_30124__$1;
(statearr_30140_30175[(2)] = null);

(statearr_30140_30175[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (6))){
var inst_30065 = (state_30124[(13)]);
var inst_30074 = f.call(null,inst_30065);
var inst_30075 = cljs.core.seq.call(null,inst_30074);
var inst_30076 = inst_30075;
var inst_30077 = null;
var inst_30078 = (0);
var inst_30079 = (0);
var state_30124__$1 = (function (){var statearr_30141 = state_30124;
(statearr_30141[(8)] = inst_30078);

(statearr_30141[(10)] = inst_30076);

(statearr_30141[(11)] = inst_30077);

(statearr_30141[(12)] = inst_30079);

return statearr_30141;
})();
var statearr_30142_30176 = state_30124__$1;
(statearr_30142_30176[(2)] = null);

(statearr_30142_30176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (17))){
var inst_30090 = (state_30124[(7)]);
var inst_30094 = cljs.core.chunk_first.call(null,inst_30090);
var inst_30095 = cljs.core.chunk_rest.call(null,inst_30090);
var inst_30096 = cljs.core.count.call(null,inst_30094);
var inst_30076 = inst_30095;
var inst_30077 = inst_30094;
var inst_30078 = inst_30096;
var inst_30079 = (0);
var state_30124__$1 = (function (){var statearr_30143 = state_30124;
(statearr_30143[(8)] = inst_30078);

(statearr_30143[(10)] = inst_30076);

(statearr_30143[(11)] = inst_30077);

(statearr_30143[(12)] = inst_30079);

return statearr_30143;
})();
var statearr_30144_30177 = state_30124__$1;
(statearr_30144_30177[(2)] = null);

(statearr_30144_30177[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (3))){
var inst_30122 = (state_30124[(2)]);
var state_30124__$1 = state_30124;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30124__$1,inst_30122);
} else {
if((state_val_30125 === (12))){
var inst_30110 = (state_30124[(2)]);
var state_30124__$1 = state_30124;
var statearr_30145_30178 = state_30124__$1;
(statearr_30145_30178[(2)] = inst_30110);

(statearr_30145_30178[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (2))){
var state_30124__$1 = state_30124;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30124__$1,(4),in$);
} else {
if((state_val_30125 === (23))){
var inst_30118 = (state_30124[(2)]);
var state_30124__$1 = state_30124;
var statearr_30146_30179 = state_30124__$1;
(statearr_30146_30179[(2)] = inst_30118);

(statearr_30146_30179[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (19))){
var inst_30105 = (state_30124[(2)]);
var state_30124__$1 = state_30124;
var statearr_30147_30180 = state_30124__$1;
(statearr_30147_30180[(2)] = inst_30105);

(statearr_30147_30180[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (11))){
var inst_30090 = (state_30124[(7)]);
var inst_30076 = (state_30124[(10)]);
var inst_30090__$1 = cljs.core.seq.call(null,inst_30076);
var state_30124__$1 = (function (){var statearr_30148 = state_30124;
(statearr_30148[(7)] = inst_30090__$1);

return statearr_30148;
})();
if(inst_30090__$1){
var statearr_30149_30181 = state_30124__$1;
(statearr_30149_30181[(1)] = (14));

} else {
var statearr_30150_30182 = state_30124__$1;
(statearr_30150_30182[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (9))){
var inst_30112 = (state_30124[(2)]);
var inst_30113 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_30124__$1 = (function (){var statearr_30151 = state_30124;
(statearr_30151[(15)] = inst_30112);

return statearr_30151;
})();
if(cljs.core.truth_(inst_30113)){
var statearr_30152_30183 = state_30124__$1;
(statearr_30152_30183[(1)] = (21));

} else {
var statearr_30153_30184 = state_30124__$1;
(statearr_30153_30184[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (5))){
var inst_30068 = cljs.core.async.close_BANG_.call(null,out);
var state_30124__$1 = state_30124;
var statearr_30154_30185 = state_30124__$1;
(statearr_30154_30185[(2)] = inst_30068);

(statearr_30154_30185[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (14))){
var inst_30090 = (state_30124[(7)]);
var inst_30092 = cljs.core.chunked_seq_QMARK_.call(null,inst_30090);
var state_30124__$1 = state_30124;
if(inst_30092){
var statearr_30155_30186 = state_30124__$1;
(statearr_30155_30186[(1)] = (17));

} else {
var statearr_30156_30187 = state_30124__$1;
(statearr_30156_30187[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (16))){
var inst_30108 = (state_30124[(2)]);
var state_30124__$1 = state_30124;
var statearr_30157_30188 = state_30124__$1;
(statearr_30157_30188[(2)] = inst_30108);

(statearr_30157_30188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30125 === (10))){
var inst_30077 = (state_30124[(11)]);
var inst_30079 = (state_30124[(12)]);
var inst_30084 = cljs.core._nth.call(null,inst_30077,inst_30079);
var state_30124__$1 = state_30124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30124__$1,(13),out,inst_30084);
} else {
if((state_val_30125 === (18))){
var inst_30090 = (state_30124[(7)]);
var inst_30099 = cljs.core.first.call(null,inst_30090);
var state_30124__$1 = state_30124;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30124__$1,(20),out,inst_30099);
} else {
if((state_val_30125 === (8))){
var inst_30078 = (state_30124[(8)]);
var inst_30079 = (state_30124[(12)]);
var inst_30081 = (inst_30079 < inst_30078);
var inst_30082 = inst_30081;
var state_30124__$1 = state_30124;
if(cljs.core.truth_(inst_30082)){
var statearr_30158_30189 = state_30124__$1;
(statearr_30158_30189[(1)] = (10));

} else {
var statearr_30159_30190 = state_30124__$1;
(statearr_30159_30190[(1)] = (11));

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
});})(c__27689__auto__))
;
return ((function (switch__27577__auto__,c__27689__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27578__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27578__auto____0 = (function (){
var statearr_30163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30163[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27578__auto__);

(statearr_30163[(1)] = (1));

return statearr_30163;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27578__auto____1 = (function (state_30124){
while(true){
var ret_value__27579__auto__ = (function (){try{while(true){
var result__27580__auto__ = switch__27577__auto__.call(null,state_30124);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27580__auto__;
}
break;
}
}catch (e30164){if((e30164 instanceof Object)){
var ex__27581__auto__ = e30164;
var statearr_30165_30191 = state_30124;
(statearr_30165_30191[(5)] = ex__27581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30124);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30192 = state_30124;
state_30124 = G__30192;
continue;
} else {
return ret_value__27579__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27578__auto__ = function(state_30124){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27578__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27578__auto____1.call(this,state_30124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27578__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27578__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27578__auto__;
})()
;})(switch__27577__auto__,c__27689__auto__))
})();
var state__27691__auto__ = (function (){var statearr_30166 = f__27690__auto__.call(null);
(statearr_30166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27689__auto__);

return statearr_30166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27691__auto__);
});})(c__27689__auto__))
);

return c__27689__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args30193 = [];
var len__26580__auto___30196 = arguments.length;
var i__26581__auto___30197 = (0);
while(true){
if((i__26581__auto___30197 < len__26580__auto___30196)){
args30193.push((arguments[i__26581__auto___30197]));

var G__30198 = (i__26581__auto___30197 + (1));
i__26581__auto___30197 = G__30198;
continue;
} else {
}
break;
}

var G__30195 = args30193.length;
switch (G__30195) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30193.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args30200 = [];
var len__26580__auto___30203 = arguments.length;
var i__26581__auto___30204 = (0);
while(true){
if((i__26581__auto___30204 < len__26580__auto___30203)){
args30200.push((arguments[i__26581__auto___30204]));

var G__30205 = (i__26581__auto___30204 + (1));
i__26581__auto___30204 = G__30205;
continue;
} else {
}
break;
}

var G__30202 = args30200.length;
switch (G__30202) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30200.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args30207 = [];
var len__26580__auto___30258 = arguments.length;
var i__26581__auto___30259 = (0);
while(true){
if((i__26581__auto___30259 < len__26580__auto___30258)){
args30207.push((arguments[i__26581__auto___30259]));

var G__30260 = (i__26581__auto___30259 + (1));
i__26581__auto___30259 = G__30260;
continue;
} else {
}
break;
}

var G__30209 = args30207.length;
switch (G__30209) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30207.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27689__auto___30262 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27689__auto___30262,out){
return (function (){
var f__27690__auto__ = (function (){var switch__27577__auto__ = ((function (c__27689__auto___30262,out){
return (function (state_30233){
var state_val_30234 = (state_30233[(1)]);
if((state_val_30234 === (7))){
var inst_30228 = (state_30233[(2)]);
var state_30233__$1 = state_30233;
var statearr_30235_30263 = state_30233__$1;
(statearr_30235_30263[(2)] = inst_30228);

(statearr_30235_30263[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (1))){
var inst_30210 = null;
var state_30233__$1 = (function (){var statearr_30236 = state_30233;
(statearr_30236[(7)] = inst_30210);

return statearr_30236;
})();
var statearr_30237_30264 = state_30233__$1;
(statearr_30237_30264[(2)] = null);

(statearr_30237_30264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (4))){
var inst_30213 = (state_30233[(8)]);
var inst_30213__$1 = (state_30233[(2)]);
var inst_30214 = (inst_30213__$1 == null);
var inst_30215 = cljs.core.not.call(null,inst_30214);
var state_30233__$1 = (function (){var statearr_30238 = state_30233;
(statearr_30238[(8)] = inst_30213__$1);

return statearr_30238;
})();
if(inst_30215){
var statearr_30239_30265 = state_30233__$1;
(statearr_30239_30265[(1)] = (5));

} else {
var statearr_30240_30266 = state_30233__$1;
(statearr_30240_30266[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (6))){
var state_30233__$1 = state_30233;
var statearr_30241_30267 = state_30233__$1;
(statearr_30241_30267[(2)] = null);

(statearr_30241_30267[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (3))){
var inst_30230 = (state_30233[(2)]);
var inst_30231 = cljs.core.async.close_BANG_.call(null,out);
var state_30233__$1 = (function (){var statearr_30242 = state_30233;
(statearr_30242[(9)] = inst_30230);

return statearr_30242;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30233__$1,inst_30231);
} else {
if((state_val_30234 === (2))){
var state_30233__$1 = state_30233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30233__$1,(4),ch);
} else {
if((state_val_30234 === (11))){
var inst_30213 = (state_30233[(8)]);
var inst_30222 = (state_30233[(2)]);
var inst_30210 = inst_30213;
var state_30233__$1 = (function (){var statearr_30243 = state_30233;
(statearr_30243[(10)] = inst_30222);

(statearr_30243[(7)] = inst_30210);

return statearr_30243;
})();
var statearr_30244_30268 = state_30233__$1;
(statearr_30244_30268[(2)] = null);

(statearr_30244_30268[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (9))){
var inst_30213 = (state_30233[(8)]);
var state_30233__$1 = state_30233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30233__$1,(11),out,inst_30213);
} else {
if((state_val_30234 === (5))){
var inst_30210 = (state_30233[(7)]);
var inst_30213 = (state_30233[(8)]);
var inst_30217 = cljs.core._EQ_.call(null,inst_30213,inst_30210);
var state_30233__$1 = state_30233;
if(inst_30217){
var statearr_30246_30269 = state_30233__$1;
(statearr_30246_30269[(1)] = (8));

} else {
var statearr_30247_30270 = state_30233__$1;
(statearr_30247_30270[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (10))){
var inst_30225 = (state_30233[(2)]);
var state_30233__$1 = state_30233;
var statearr_30248_30271 = state_30233__$1;
(statearr_30248_30271[(2)] = inst_30225);

(statearr_30248_30271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30234 === (8))){
var inst_30210 = (state_30233[(7)]);
var tmp30245 = inst_30210;
var inst_30210__$1 = tmp30245;
var state_30233__$1 = (function (){var statearr_30249 = state_30233;
(statearr_30249[(7)] = inst_30210__$1);

return statearr_30249;
})();
var statearr_30250_30272 = state_30233__$1;
(statearr_30250_30272[(2)] = null);

(statearr_30250_30272[(1)] = (2));


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
});})(c__27689__auto___30262,out))
;
return ((function (switch__27577__auto__,c__27689__auto___30262,out){
return (function() {
var cljs$core$async$state_machine__27578__auto__ = null;
var cljs$core$async$state_machine__27578__auto____0 = (function (){
var statearr_30254 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30254[(0)] = cljs$core$async$state_machine__27578__auto__);

(statearr_30254[(1)] = (1));

return statearr_30254;
});
var cljs$core$async$state_machine__27578__auto____1 = (function (state_30233){
while(true){
var ret_value__27579__auto__ = (function (){try{while(true){
var result__27580__auto__ = switch__27577__auto__.call(null,state_30233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27580__auto__;
}
break;
}
}catch (e30255){if((e30255 instanceof Object)){
var ex__27581__auto__ = e30255;
var statearr_30256_30273 = state_30233;
(statearr_30256_30273[(5)] = ex__27581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30255;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30274 = state_30233;
state_30233 = G__30274;
continue;
} else {
return ret_value__27579__auto__;
}
break;
}
});
cljs$core$async$state_machine__27578__auto__ = function(state_30233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27578__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27578__auto____1.call(this,state_30233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27578__auto____0;
cljs$core$async$state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27578__auto____1;
return cljs$core$async$state_machine__27578__auto__;
})()
;})(switch__27577__auto__,c__27689__auto___30262,out))
})();
var state__27691__auto__ = (function (){var statearr_30257 = f__27690__auto__.call(null);
(statearr_30257[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27689__auto___30262);

return statearr_30257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27691__auto__);
});})(c__27689__auto___30262,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args30275 = [];
var len__26580__auto___30345 = arguments.length;
var i__26581__auto___30346 = (0);
while(true){
if((i__26581__auto___30346 < len__26580__auto___30345)){
args30275.push((arguments[i__26581__auto___30346]));

var G__30347 = (i__26581__auto___30346 + (1));
i__26581__auto___30346 = G__30347;
continue;
} else {
}
break;
}

var G__30277 = args30275.length;
switch (G__30277) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30275.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27689__auto___30349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27689__auto___30349,out){
return (function (){
var f__27690__auto__ = (function (){var switch__27577__auto__ = ((function (c__27689__auto___30349,out){
return (function (state_30315){
var state_val_30316 = (state_30315[(1)]);
if((state_val_30316 === (7))){
var inst_30311 = (state_30315[(2)]);
var state_30315__$1 = state_30315;
var statearr_30317_30350 = state_30315__$1;
(statearr_30317_30350[(2)] = inst_30311);

(statearr_30317_30350[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (1))){
var inst_30278 = (new Array(n));
var inst_30279 = inst_30278;
var inst_30280 = (0);
var state_30315__$1 = (function (){var statearr_30318 = state_30315;
(statearr_30318[(7)] = inst_30279);

(statearr_30318[(8)] = inst_30280);

return statearr_30318;
})();
var statearr_30319_30351 = state_30315__$1;
(statearr_30319_30351[(2)] = null);

(statearr_30319_30351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (4))){
var inst_30283 = (state_30315[(9)]);
var inst_30283__$1 = (state_30315[(2)]);
var inst_30284 = (inst_30283__$1 == null);
var inst_30285 = cljs.core.not.call(null,inst_30284);
var state_30315__$1 = (function (){var statearr_30320 = state_30315;
(statearr_30320[(9)] = inst_30283__$1);

return statearr_30320;
})();
if(inst_30285){
var statearr_30321_30352 = state_30315__$1;
(statearr_30321_30352[(1)] = (5));

} else {
var statearr_30322_30353 = state_30315__$1;
(statearr_30322_30353[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (15))){
var inst_30305 = (state_30315[(2)]);
var state_30315__$1 = state_30315;
var statearr_30323_30354 = state_30315__$1;
(statearr_30323_30354[(2)] = inst_30305);

(statearr_30323_30354[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (13))){
var state_30315__$1 = state_30315;
var statearr_30324_30355 = state_30315__$1;
(statearr_30324_30355[(2)] = null);

(statearr_30324_30355[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (6))){
var inst_30280 = (state_30315[(8)]);
var inst_30301 = (inst_30280 > (0));
var state_30315__$1 = state_30315;
if(cljs.core.truth_(inst_30301)){
var statearr_30325_30356 = state_30315__$1;
(statearr_30325_30356[(1)] = (12));

} else {
var statearr_30326_30357 = state_30315__$1;
(statearr_30326_30357[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (3))){
var inst_30313 = (state_30315[(2)]);
var state_30315__$1 = state_30315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30315__$1,inst_30313);
} else {
if((state_val_30316 === (12))){
var inst_30279 = (state_30315[(7)]);
var inst_30303 = cljs.core.vec.call(null,inst_30279);
var state_30315__$1 = state_30315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30315__$1,(15),out,inst_30303);
} else {
if((state_val_30316 === (2))){
var state_30315__$1 = state_30315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30315__$1,(4),ch);
} else {
if((state_val_30316 === (11))){
var inst_30295 = (state_30315[(2)]);
var inst_30296 = (new Array(n));
var inst_30279 = inst_30296;
var inst_30280 = (0);
var state_30315__$1 = (function (){var statearr_30327 = state_30315;
(statearr_30327[(7)] = inst_30279);

(statearr_30327[(8)] = inst_30280);

(statearr_30327[(10)] = inst_30295);

return statearr_30327;
})();
var statearr_30328_30358 = state_30315__$1;
(statearr_30328_30358[(2)] = null);

(statearr_30328_30358[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (9))){
var inst_30279 = (state_30315[(7)]);
var inst_30293 = cljs.core.vec.call(null,inst_30279);
var state_30315__$1 = state_30315;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30315__$1,(11),out,inst_30293);
} else {
if((state_val_30316 === (5))){
var inst_30279 = (state_30315[(7)]);
var inst_30288 = (state_30315[(11)]);
var inst_30280 = (state_30315[(8)]);
var inst_30283 = (state_30315[(9)]);
var inst_30287 = (inst_30279[inst_30280] = inst_30283);
var inst_30288__$1 = (inst_30280 + (1));
var inst_30289 = (inst_30288__$1 < n);
var state_30315__$1 = (function (){var statearr_30329 = state_30315;
(statearr_30329[(12)] = inst_30287);

(statearr_30329[(11)] = inst_30288__$1);

return statearr_30329;
})();
if(cljs.core.truth_(inst_30289)){
var statearr_30330_30359 = state_30315__$1;
(statearr_30330_30359[(1)] = (8));

} else {
var statearr_30331_30360 = state_30315__$1;
(statearr_30331_30360[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (14))){
var inst_30308 = (state_30315[(2)]);
var inst_30309 = cljs.core.async.close_BANG_.call(null,out);
var state_30315__$1 = (function (){var statearr_30333 = state_30315;
(statearr_30333[(13)] = inst_30308);

return statearr_30333;
})();
var statearr_30334_30361 = state_30315__$1;
(statearr_30334_30361[(2)] = inst_30309);

(statearr_30334_30361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (10))){
var inst_30299 = (state_30315[(2)]);
var state_30315__$1 = state_30315;
var statearr_30335_30362 = state_30315__$1;
(statearr_30335_30362[(2)] = inst_30299);

(statearr_30335_30362[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30316 === (8))){
var inst_30279 = (state_30315[(7)]);
var inst_30288 = (state_30315[(11)]);
var tmp30332 = inst_30279;
var inst_30279__$1 = tmp30332;
var inst_30280 = inst_30288;
var state_30315__$1 = (function (){var statearr_30336 = state_30315;
(statearr_30336[(7)] = inst_30279__$1);

(statearr_30336[(8)] = inst_30280);

return statearr_30336;
})();
var statearr_30337_30363 = state_30315__$1;
(statearr_30337_30363[(2)] = null);

(statearr_30337_30363[(1)] = (2));


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
});})(c__27689__auto___30349,out))
;
return ((function (switch__27577__auto__,c__27689__auto___30349,out){
return (function() {
var cljs$core$async$state_machine__27578__auto__ = null;
var cljs$core$async$state_machine__27578__auto____0 = (function (){
var statearr_30341 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30341[(0)] = cljs$core$async$state_machine__27578__auto__);

(statearr_30341[(1)] = (1));

return statearr_30341;
});
var cljs$core$async$state_machine__27578__auto____1 = (function (state_30315){
while(true){
var ret_value__27579__auto__ = (function (){try{while(true){
var result__27580__auto__ = switch__27577__auto__.call(null,state_30315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27580__auto__;
}
break;
}
}catch (e30342){if((e30342 instanceof Object)){
var ex__27581__auto__ = e30342;
var statearr_30343_30364 = state_30315;
(statearr_30343_30364[(5)] = ex__27581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30342;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30365 = state_30315;
state_30315 = G__30365;
continue;
} else {
return ret_value__27579__auto__;
}
break;
}
});
cljs$core$async$state_machine__27578__auto__ = function(state_30315){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27578__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27578__auto____1.call(this,state_30315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27578__auto____0;
cljs$core$async$state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27578__auto____1;
return cljs$core$async$state_machine__27578__auto__;
})()
;})(switch__27577__auto__,c__27689__auto___30349,out))
})();
var state__27691__auto__ = (function (){var statearr_30344 = f__27690__auto__.call(null);
(statearr_30344[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27689__auto___30349);

return statearr_30344;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27691__auto__);
});})(c__27689__auto___30349,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args30366 = [];
var len__26580__auto___30440 = arguments.length;
var i__26581__auto___30441 = (0);
while(true){
if((i__26581__auto___30441 < len__26580__auto___30440)){
args30366.push((arguments[i__26581__auto___30441]));

var G__30442 = (i__26581__auto___30441 + (1));
i__26581__auto___30441 = G__30442;
continue;
} else {
}
break;
}

var G__30368 = args30366.length;
switch (G__30368) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30366.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27689__auto___30444 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__27689__auto___30444,out){
return (function (){
var f__27690__auto__ = (function (){var switch__27577__auto__ = ((function (c__27689__auto___30444,out){
return (function (state_30410){
var state_val_30411 = (state_30410[(1)]);
if((state_val_30411 === (7))){
var inst_30406 = (state_30410[(2)]);
var state_30410__$1 = state_30410;
var statearr_30412_30445 = state_30410__$1;
(statearr_30412_30445[(2)] = inst_30406);

(statearr_30412_30445[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30411 === (1))){
var inst_30369 = [];
var inst_30370 = inst_30369;
var inst_30371 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_30410__$1 = (function (){var statearr_30413 = state_30410;
(statearr_30413[(7)] = inst_30370);

(statearr_30413[(8)] = inst_30371);

return statearr_30413;
})();
var statearr_30414_30446 = state_30410__$1;
(statearr_30414_30446[(2)] = null);

(statearr_30414_30446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30411 === (4))){
var inst_30374 = (state_30410[(9)]);
var inst_30374__$1 = (state_30410[(2)]);
var inst_30375 = (inst_30374__$1 == null);
var inst_30376 = cljs.core.not.call(null,inst_30375);
var state_30410__$1 = (function (){var statearr_30415 = state_30410;
(statearr_30415[(9)] = inst_30374__$1);

return statearr_30415;
})();
if(inst_30376){
var statearr_30416_30447 = state_30410__$1;
(statearr_30416_30447[(1)] = (5));

} else {
var statearr_30417_30448 = state_30410__$1;
(statearr_30417_30448[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30411 === (15))){
var inst_30400 = (state_30410[(2)]);
var state_30410__$1 = state_30410;
var statearr_30418_30449 = state_30410__$1;
(statearr_30418_30449[(2)] = inst_30400);

(statearr_30418_30449[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30411 === (13))){
var state_30410__$1 = state_30410;
var statearr_30419_30450 = state_30410__$1;
(statearr_30419_30450[(2)] = null);

(statearr_30419_30450[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30411 === (6))){
var inst_30370 = (state_30410[(7)]);
var inst_30395 = inst_30370.length;
var inst_30396 = (inst_30395 > (0));
var state_30410__$1 = state_30410;
if(cljs.core.truth_(inst_30396)){
var statearr_30420_30451 = state_30410__$1;
(statearr_30420_30451[(1)] = (12));

} else {
var statearr_30421_30452 = state_30410__$1;
(statearr_30421_30452[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30411 === (3))){
var inst_30408 = (state_30410[(2)]);
var state_30410__$1 = state_30410;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30410__$1,inst_30408);
} else {
if((state_val_30411 === (12))){
var inst_30370 = (state_30410[(7)]);
var inst_30398 = cljs.core.vec.call(null,inst_30370);
var state_30410__$1 = state_30410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30410__$1,(15),out,inst_30398);
} else {
if((state_val_30411 === (2))){
var state_30410__$1 = state_30410;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30410__$1,(4),ch);
} else {
if((state_val_30411 === (11))){
var inst_30378 = (state_30410[(10)]);
var inst_30374 = (state_30410[(9)]);
var inst_30388 = (state_30410[(2)]);
var inst_30389 = [];
var inst_30390 = inst_30389.push(inst_30374);
var inst_30370 = inst_30389;
var inst_30371 = inst_30378;
var state_30410__$1 = (function (){var statearr_30422 = state_30410;
(statearr_30422[(7)] = inst_30370);

(statearr_30422[(11)] = inst_30390);

(statearr_30422[(12)] = inst_30388);

(statearr_30422[(8)] = inst_30371);

return statearr_30422;
})();
var statearr_30423_30453 = state_30410__$1;
(statearr_30423_30453[(2)] = null);

(statearr_30423_30453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30411 === (9))){
var inst_30370 = (state_30410[(7)]);
var inst_30386 = cljs.core.vec.call(null,inst_30370);
var state_30410__$1 = state_30410;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30410__$1,(11),out,inst_30386);
} else {
if((state_val_30411 === (5))){
var inst_30378 = (state_30410[(10)]);
var inst_30374 = (state_30410[(9)]);
var inst_30371 = (state_30410[(8)]);
var inst_30378__$1 = f.call(null,inst_30374);
var inst_30379 = cljs.core._EQ_.call(null,inst_30378__$1,inst_30371);
var inst_30380 = cljs.core.keyword_identical_QMARK_.call(null,inst_30371,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_30381 = (inst_30379) || (inst_30380);
var state_30410__$1 = (function (){var statearr_30424 = state_30410;
(statearr_30424[(10)] = inst_30378__$1);

return statearr_30424;
})();
if(cljs.core.truth_(inst_30381)){
var statearr_30425_30454 = state_30410__$1;
(statearr_30425_30454[(1)] = (8));

} else {
var statearr_30426_30455 = state_30410__$1;
(statearr_30426_30455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30411 === (14))){
var inst_30403 = (state_30410[(2)]);
var inst_30404 = cljs.core.async.close_BANG_.call(null,out);
var state_30410__$1 = (function (){var statearr_30428 = state_30410;
(statearr_30428[(13)] = inst_30403);

return statearr_30428;
})();
var statearr_30429_30456 = state_30410__$1;
(statearr_30429_30456[(2)] = inst_30404);

(statearr_30429_30456[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30411 === (10))){
var inst_30393 = (state_30410[(2)]);
var state_30410__$1 = state_30410;
var statearr_30430_30457 = state_30410__$1;
(statearr_30430_30457[(2)] = inst_30393);

(statearr_30430_30457[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30411 === (8))){
var inst_30378 = (state_30410[(10)]);
var inst_30370 = (state_30410[(7)]);
var inst_30374 = (state_30410[(9)]);
var inst_30383 = inst_30370.push(inst_30374);
var tmp30427 = inst_30370;
var inst_30370__$1 = tmp30427;
var inst_30371 = inst_30378;
var state_30410__$1 = (function (){var statearr_30431 = state_30410;
(statearr_30431[(7)] = inst_30370__$1);

(statearr_30431[(14)] = inst_30383);

(statearr_30431[(8)] = inst_30371);

return statearr_30431;
})();
var statearr_30432_30458 = state_30410__$1;
(statearr_30432_30458[(2)] = null);

(statearr_30432_30458[(1)] = (2));


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
});})(c__27689__auto___30444,out))
;
return ((function (switch__27577__auto__,c__27689__auto___30444,out){
return (function() {
var cljs$core$async$state_machine__27578__auto__ = null;
var cljs$core$async$state_machine__27578__auto____0 = (function (){
var statearr_30436 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30436[(0)] = cljs$core$async$state_machine__27578__auto__);

(statearr_30436[(1)] = (1));

return statearr_30436;
});
var cljs$core$async$state_machine__27578__auto____1 = (function (state_30410){
while(true){
var ret_value__27579__auto__ = (function (){try{while(true){
var result__27580__auto__ = switch__27577__auto__.call(null,state_30410);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27580__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27580__auto__;
}
break;
}
}catch (e30437){if((e30437 instanceof Object)){
var ex__27581__auto__ = e30437;
var statearr_30438_30459 = state_30410;
(statearr_30438_30459[(5)] = ex__27581__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30437;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27579__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30460 = state_30410;
state_30410 = G__30460;
continue;
} else {
return ret_value__27579__auto__;
}
break;
}
});
cljs$core$async$state_machine__27578__auto__ = function(state_30410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27578__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27578__auto____1.call(this,state_30410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27578__auto____0;
cljs$core$async$state_machine__27578__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27578__auto____1;
return cljs$core$async$state_machine__27578__auto__;
})()
;})(switch__27577__auto__,c__27689__auto___30444,out))
})();
var state__27691__auto__ = (function (){var statearr_30439 = f__27690__auto__.call(null);
(statearr_30439[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__27689__auto___30444);

return statearr_30439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27691__auto__);
});})(c__27689__auto___30444,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1451075114145