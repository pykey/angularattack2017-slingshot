webpackJsonp([1,4],{"/fcW":function(t,e){function n(t){throw new Error("Cannot find module '"+t+"'.")}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id="/fcW"},0:function(t,e,n){t.exports=n("x35b")},"1A80":function(t,e,n){"use strict";function r(t){return o._15(0,[(t()(),o._16(0,null,null,1,"app-orbit",[],null,null,null,s.a,s.b)),o._17(2220032,null,0,u.a,[a.a],null,null),(t()(),o._18(null,["\n"]))],function(t,e){t(e,1,0)},null)}function _(t){return o._15(0,[(t()(),o._16(0,null,null,1,"app-root",[],null,null,null,r,h)),o._17(24576,null,0,l.a,[],null,null)],null,null)}var i=n("Ni5f"),o=n("3j3K"),s=n("Hx7X"),u=n("QwCv"),a=n("9JP3"),l=n("YWx4");n.d(e,"a",function(){return p});var c=[i.a],h=o._14({encapsulation:0,styles:c,data:{}}),p=o._19("app-root",l.a,_,{},{},[])},"9JP3":function(t,e,n){"use strict";var r=n("mKN5");n.n(r);n.d(e,"a",function(){return _});var _=function(){function t(){}return t.prototype.init=function(t){var e=this;this.engine=new r.Engine(t),this.scene=new r.Scene(this.engine),this.camera=new r.FreeCamera("camera1",new r.Vector3(0,5,-10),this.scene),this.camera.setTarget(r.Vector3.Zero()),this.camera.attachControl(t,!1),this.light=new r.HemisphericLight("light1",new r.Vector3(0,1,0),this.scene),r.MeshBuilder.CreateSphere("sphere1",{segments:16,diameter:2},this.scene).position.y=1;r.MeshBuilder.CreateGround("ground1",{width:6,height:6,subdivisions:2},this.scene);this.engine.runRenderLoop(function(){e.scene.render()})},t.ctorParameters=function(){return[]},t}()},Hx7X:function(t,e,n){"use strict";function r(t){return o._15(0,[o._20(201326592,1,{renderCanvas:0}),(t()(),o._16(0,[[1,0],["renderCanvas",1]],null,0,"canvas",[["class","renderCanvas"]],null,null,null,null,null))],null,null)}function _(t){return o._15(0,[(t()(),o._16(0,null,null,1,"app-orbit",[],null,null,null,r,l)),o._17(2220032,null,0,s.a,[u.a],null,null)],function(t,e){t(e,1,0)},null)}var i=n("PWNq"),o=n("3j3K"),s=n("QwCv"),u=n("9JP3");n.d(e,"b",function(){return l}),e.a=r;var a=[i.a],l=o._14({encapsulation:0,styles:a,data:{}});o._19("app-orbit",s.a,_,{},{},[])},Iksp:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(){}return t}()},Ni5f:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=[""]},PWNq:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=[".renderCanvas[_ngcontent-%COMP%]{width:100%;height:100%}"]},QwCv:function(t,e,n){"use strict";var r=n("9JP3");n.d(e,"a",function(){return _});var _=function(){function t(t){this.babylonService=t}return t.prototype.ngOnInit=function(){},t.prototype.ngAfterViewInit=function(){this.babylonService.init(this.renderCanvas.nativeElement)},t.prototype.ngOnDestroy=function(){},t.ctorParameters=function(){return[{type:r.a}]},t}()},YWx4:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r=function(){function t(){this.title="app works123"}return t}()},kZql:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var r={production:!0}},kke6:function(t,e,n){"use strict";var r=n("3j3K"),_=n("Iksp"),i=n("2Je8"),o=n("Qbdm"),s=n("NVOs"),u=n("Fzro"),a=n("9JP3"),l=n("1A80");n.d(e,"a",function(){return p});var c=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function r(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),h=function(t){function e(e){return t.call(this,e,[l.a],[l.a])||this}return c(e,t),Object.defineProperty(e.prototype,"_LOCALE_ID_12",{get:function(){return null==this.__LOCALE_ID_12&&(this.__LOCALE_ID_12=r.b(this.parent.get(r.c,null))),this.__LOCALE_ID_12},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_NgLocalization_13",{get:function(){return null==this.__NgLocalization_13&&(this.__NgLocalization_13=new i.a(this._LOCALE_ID_12)),this.__NgLocalization_13},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Compiler_14",{get:function(){return null==this.__Compiler_14&&(this.__Compiler_14=new r.d),this.__Compiler_14},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_APP_ID_15",{get:function(){return null==this.__APP_ID_15&&(this.__APP_ID_15=r.e()),this.__APP_ID_15},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_IterableDiffers_16",{get:function(){return null==this.__IterableDiffers_16&&(this.__IterableDiffers_16=r.f()),this.__IterableDiffers_16},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_KeyValueDiffers_17",{get:function(){return null==this.__KeyValueDiffers_17&&(this.__KeyValueDiffers_17=r.g()),this.__KeyValueDiffers_17},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_DomSanitizer_18",{get:function(){return null==this.__DomSanitizer_18&&(this.__DomSanitizer_18=new o.b(this.parent.get(o.c))),this.__DomSanitizer_18},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Sanitizer_19",{get:function(){return null==this.__Sanitizer_19&&(this.__Sanitizer_19=this._DomSanitizer_18),this.__Sanitizer_19},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_HAMMER_GESTURE_CONFIG_20",{get:function(){return null==this.__HAMMER_GESTURE_CONFIG_20&&(this.__HAMMER_GESTURE_CONFIG_20=new o.d),this.__HAMMER_GESTURE_CONFIG_20},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_EVENT_MANAGER_PLUGINS_21",{get:function(){return null==this.__EVENT_MANAGER_PLUGINS_21&&(this.__EVENT_MANAGER_PLUGINS_21=[new o.e(this.parent.get(o.c)),new o.f(this.parent.get(o.c)),new o.g(this.parent.get(o.c),this._HAMMER_GESTURE_CONFIG_20)]),this.__EVENT_MANAGER_PLUGINS_21},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_EventManager_22",{get:function(){return null==this.__EventManager_22&&(this.__EventManager_22=new o.h(this._EVENT_MANAGER_PLUGINS_21,this.parent.get(r.h))),this.__EventManager_22},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵDomSharedStylesHost_23",{get:function(){return null==this.__ɵDomSharedStylesHost_23&&(this.__ɵDomSharedStylesHost_23=new o.i(this.parent.get(o.c))),this.__ɵDomSharedStylesHost_23},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵDomRendererFactory2_24",{get:function(){return null==this.__ɵDomRendererFactory2_24&&(this.__ɵDomRendererFactory2_24=new o.j(this._EventManager_22,this._ɵDomSharedStylesHost_23)),this.__ɵDomRendererFactory2_24},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RendererFactory2_25",{get:function(){return null==this.__RendererFactory2_25&&(this.__RendererFactory2_25=this._ɵDomRendererFactory2_24),this.__RendererFactory2_25},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵSharedStylesHost_26",{get:function(){return null==this.__ɵSharedStylesHost_26&&(this.__ɵSharedStylesHost_26=this._ɵDomSharedStylesHost_23),this.__ɵSharedStylesHost_26},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Testability_27",{get:function(){return null==this.__Testability_27&&(this.__Testability_27=new r.i(this.parent.get(r.h))),this.__Testability_27},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Meta_28",{get:function(){return null==this.__Meta_28&&(this.__Meta_28=new o.k(this.parent.get(o.c))),this.__Meta_28},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Title_29",{get:function(){return null==this.__Title_29&&(this.__Title_29=new o.l(this.parent.get(o.c))),this.__Title_29},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ɵi_30",{get:function(){return null==this.__ɵi_30&&(this.__ɵi_30=new s.a),this.__ɵi_30},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_BrowserXhr_31",{get:function(){return null==this.__BrowserXhr_31&&(this.__BrowserXhr_31=new u.a),this.__BrowserXhr_31},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_ResponseOptions_32",{get:function(){return null==this.__ResponseOptions_32&&(this.__ResponseOptions_32=new u.b),this.__ResponseOptions_32},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_XSRFStrategy_33",{get:function(){return null==this.__XSRFStrategy_33&&(this.__XSRFStrategy_33=u.c()),this.__XSRFStrategy_33},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_XHRBackend_34",{get:function(){return null==this.__XHRBackend_34&&(this.__XHRBackend_34=new u.d(this._BrowserXhr_31,this._ResponseOptions_32,this._XSRFStrategy_33)),this.__XHRBackend_34},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_RequestOptions_35",{get:function(){return null==this.__RequestOptions_35&&(this.__RequestOptions_35=new u.e),this.__RequestOptions_35},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_Http_36",{get:function(){return null==this.__Http_36&&(this.__Http_36=u.f(this._XHRBackend_34,this._RequestOptions_35)),this.__Http_36},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"_BabylonService_37",{get:function(){return null==this.__BabylonService_37&&(this.__BabylonService_37=new a.a),this.__BabylonService_37},enumerable:!0,configurable:!0}),e.prototype.createInternal=function(){return this._CommonModule_0=new i.b,this._ErrorHandler_1=o.m(),this._APP_INITIALIZER_2=[r.j,o.n(this.parent.get(o.o,null),this.parent.get(r.k,null))],this._ApplicationInitStatus_3=new r.l(this._APP_INITIALIZER_2),this._ɵf_4=new r.m(this.parent.get(r.h),this.parent.get(r.n),this,this._ErrorHandler_1,this.componentFactoryResolver,this._ApplicationInitStatus_3),this._ApplicationRef_5=this._ɵf_4,this._ApplicationModule_6=new r.o(this._ApplicationRef_5),this._BrowserModule_7=new o.p(this.parent.get(o.p,null)),this._ɵba_8=new s.b,this._FormsModule_9=new s.c,this._HttpModule_10=new u.g,this._AppModule_11=new _.a,this._AppModule_11},e.prototype.getInternal=function(t,e){return t===i.b?this._CommonModule_0:t===r.p?this._ErrorHandler_1:t===r.q?this._APP_INITIALIZER_2:t===r.l?this._ApplicationInitStatus_3:t===r.m?this._ɵf_4:t===r.r?this._ApplicationRef_5:t===r.o?this._ApplicationModule_6:t===o.p?this._BrowserModule_7:t===s.b?this._ɵba_8:t===s.c?this._FormsModule_9:t===u.g?this._HttpModule_10:t===_.a?this._AppModule_11:t===r.c?this._LOCALE_ID_12:t===i.c?this._NgLocalization_13:t===r.d?this._Compiler_14:t===r.s?this._APP_ID_15:t===r.t?this._IterableDiffers_16:t===r.u?this._KeyValueDiffers_17:t===o.q?this._DomSanitizer_18:t===r.v?this._Sanitizer_19:t===o.r?this._HAMMER_GESTURE_CONFIG_20:t===o.s?this._EVENT_MANAGER_PLUGINS_21:t===o.h?this._EventManager_22:t===o.i?this._ɵDomSharedStylesHost_23:t===o.j?this._ɵDomRendererFactory2_24:t===r.w?this._RendererFactory2_25:t===o.t?this._ɵSharedStylesHost_26:t===r.i?this._Testability_27:t===o.k?this._Meta_28:t===o.l?this._Title_29:t===s.a?this._ɵi_30:t===u.a?this._BrowserXhr_31:t===u.h?this._ResponseOptions_32:t===u.i?this._XSRFStrategy_33:t===u.d?this._XHRBackend_34:t===u.j?this._RequestOptions_35:t===u.k?this._Http_36:t===a.a?this._BabylonService_37:e},e.prototype.destroyInternal=function(){this._ɵf_4.ngOnDestroy(),this.__ɵDomSharedStylesHost_23&&this._ɵDomSharedStylesHost_23.ngOnDestroy()},e}(r.x),p=new r.y(h,_.a)},x35b:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("3j3K"),_=n("kZql"),i=n("Qbdm"),o=n("kke6");_.a.production&&n.i(r.a)(),n.i(i.a)().bootstrapModuleFactory(o.a)}},[0]);