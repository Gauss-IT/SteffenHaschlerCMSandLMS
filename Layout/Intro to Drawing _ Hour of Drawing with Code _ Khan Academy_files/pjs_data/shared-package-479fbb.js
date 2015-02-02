((this.KAdefineTiming = this.KAdefineTiming || {})["shared-package.js"] = {}).startTime = +(new Date);
KAdefine("third_party/javascript-khansrc/es5-shim/function-prototype-bind-polyfill.js", function(__KA_require, __KA_module, __KA_exports) {
(function(){var t=Array.prototype
var n=t.slice
function r(){}if(!Function.prototype.bind){Function.prototype.bind=function o(t){var o=this
if(typeof o!=="function"){throw new TypeError("Function.prototype.bind called on incompatible "+o)}var e=n.call(arguments,1)
var i=function(){if(this instanceof u){var r=o.apply(this,e.concat(n.call(arguments)))
if(Object(r)===r){return r}return this}else{return o.apply(t,e.concat(n.call(arguments)))}}
var a=Math.max(0,o.length-e.length)
var p=[]
for(var c=0;c<a;c++){p.push("$"+c)}var u=Function("binder","return function("+p.join(",")+"){return binder.apply(this,arguments)}")(i)
if(o.prototype){r.prototype=o.prototype
u.prototype=new r
r.prototype=null}return u}}})()
});
KAdefine("javascript/shared-package/ka.js", function(require, module, exports) {
var _=require("underscore")
var KA=_.extend(window.KA||{},{userProfileModel_:null,getUserProfile:function(){var e=require("./profile-model.js")
if(KA.userProfileData_&&!KA.userProfileModel_){KA.userProfileModel_=new e(KA.userProfileData_)}return KA.userProfileModel_},setUserProfile:function(e){var r=require("./profile-model.js")
if(!KA.userProfileModel_){KA.userProfileModel_=new r(e)}KA.userProfileModel_.set(e)
return KA.userProfileModel_},getGlobalPermissions:function(){var e=KA.getUserProfile()
return e&&e.get("globalPermissions")||[]},isPhantom:function(){var e=KA.getUserProfile()
return!e||e.get("isPhantom")},isDeveloper:function(){var e=KA.getUserProfile()
return e&&e.get("isDeveloper")}})
module.exports=KA
});
KAdefine("javascript/shared-package/console.js", function(require, module, exports) {
var KAConsole={_oldMessages:[],_flushOldMessages:function(){for(var s=0,o=this._oldMessages.length;s<o;s++){this.log.apply(this,this._oldMessages[s])}this._oldMessages=[]},_logToBuffer:function(){this._oldMessages.push(arguments)},_logOrPreserve:function(){if(window.console){this.enable()
this.log.apply(this,arguments)}else{this._logToBuffer.apply(this,arguments)}},_logCompatible:function(){if(!window.console){return}if(console.log.apply){console.log.apply(console,arguments)}else{Function.prototype.apply.call(console.log,null,arguments)}},enable:function(){if(window.console){if(console.log.bind){this.log=console.log.bind(console)}else{this.log=this._logCompatible}this._flushOldMessages()}else{this.log=this._logOrPreserve}},disable:function(){this.log=this._logToBuffer},init:function(s){if(s){this.enable()}else{this.disable()}}}
module.exports=KAConsole
});
KAdefine("javascript/shared-package/i18n.js", function(require, module, exports) {
var Jed=require("../../third_party/javascript-khansrc/jed/jed.js")
var _=require("underscore")
var jQuery=require("jquery")
var defaultLang="en"
var plural_forms={af:"nplurals=2; plural=(n != 1)",ar:"nplurals=6; plural= n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5",az:"nplurals=2; plural=(n != 1)",bg:"nplurals=2; plural=(n != 1)",ca:"nplurals=2; plural=(n != 1)",cs:"nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2",da:"nplurals=2; plural=(n != 1)",de:"nplurals=2; plural=(n != 1)",el:"nplurals=2; plural=(n != 1)",en:"nplurals=2; plural=(n != 1)","es-ES":"nplurals=2; plural=(n != 1)",fi:"nplurals=2; plural=(n != 1)",fr:"nplurals=2; plural=(n > 1)",he:"nplurals=2; plural=(n != 1)",hi:"nplurals=2; plural=(n!=1)",hu:"nplurals=2; plural=(n != 1)",it:"nplurals=2; plural=(n != 1)",ja:"nplurals=1; plural=0",ko:"nplurals=1; plural=0",nl:"nplurals=2; plural=(n != 1)",no:"nplurals=2; plural=(n != 1)",pl:"nplurals=3; plural=(n==1 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)","pt-BR":"nplurals=2; plural=(n != 1)","pt-PT":"nplurals=2; plural=(n != 1)",ro:"nplurals=3; plural=(n==1 ? 0 : (n==0 || (n%100 > 0 && n%100 < 20)) ? 1 : 2)",ru:"nplurals=3; plural=n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2","si-LK":"nplurals=2; plural=(n != 1)",sk:"nplurals=3; plural=(n==1) ? 0 : (n>=2 && n<=4) ? 1 : 2",sr:"nplurals=4; plural=n==1? 3 : n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2","sv-SE":"nplurals=2; plural=(n != 1) ",tr:"nplurals=1; plural=0",uk:"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)","ur-PK":"nplurals=2; plural=(n != 1)",vi:"nplurals=1; plural=0",xh:"nplurals=2; plural=(n != 1)","zh-CN":"nplurals=1; plural=0","zh-TW":"nplurals=1; plural=0"}
var getPluralForm=function(n){return plural_forms[n]||plural_forms[defaultLang]}
var i18n=new Jed({})
i18n.options.locale_data={}
var interpolationMarker=/%\(([\w_]+)\)s/g
var interpolateStringToArray=function(n,l){l=l||{}
var r=n.split(interpolationMarker)
for(var a=1;a<r.length;a+=2){var u=l[r[a]]
r[a]=_.isUndefined(u)?"%("+r[a]+")s":u}return r}
jQuery._=function(n,l){if(typeof n==="object"&&n.messages){n=n.messages[0]}return interpolateStringToArray(n,l).join("")}
window.$_=function(n,l){if(arguments.length!==2||!_.isString(l)){return"<$_> must have exactly one child, which must be a string"}return interpolateStringToArray(l,n)}
window.$i18nDoNotTranslate=function(n,l){return l}
jQuery.ngettext=function(n,l,r,a){var u=n
var e=u.lang||defaultLang
if(!i18n.options.locale_data[e]){i18n.options.locale_data[e]={"":{domain:e,lang:e,plural_forms:getPluralForm(e)}}}if(typeof u==="object"){a=r
r=l
n=u.messages[0]
i18n.options.locale_data[e][n]=[null].concat(u.messages)}a=a||{}
a.num=a.num||r
return jQuery._(i18n.dngettext(e,n,l,r),a)}
jQuery.ngetpos=function(n,l){l=l||"en"
return Jed.PF.compile(getPluralForm(l))(n)}
jQuery.isSingular=function(n,l){return jQuery.ngetpos(n,l)===0}
jQuery.i18nDoNotTranslate=jQuery._
i18n.handlebars_underscore=function(n){return n.fn(this)}
i18n.handlebars_do_not_translate=function(n){return n.fn(this)}
i18n.handlebars_ngettext=function(n,l,r,a){if(typeof l!=="string"){a=l
l="en"
r=0}this.num=this.num||n
return jQuery.ngetpos(n)===r?a.fn(this):a.inverse(this)}
window.i18n=i18n
module.exports={i18n:i18n,$_:$_,$i18nDoNotTranslate:$i18nDoNotTranslate}
});
KAdefine("javascript/shared-package/package-manager.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var KA=require("./ka.js")
var KAConsole=require("./console.js")
var _debug=false
var staticUrl=function(e){return KA.staticUrl(e).replace(/^https?:/,window.location.protocol)}
function PackageLoader(e,a,t){var r=this
this.files=[]
this.progress=0
this.lastProgress=0
this.downloadStarted=false
this.precacheCalled=false
this.requireCalled=false
this.evaluationRequested=false
this.packageName=e
_.each(a,function(e){r.files.push({filename:e,content:null,evaled:false})})
this.startDownload=function(){if(r.downloadStarted){return}r.downloadStarted=true
_.each(r.files,function(e){$(document).ready(function(){if(t.getDeferred().state()==="resolved"){return}$.ajax({type:"GET",url:staticUrl(e.filename),data:null,crossDomain:true,success:function(a){r.finishDownload(e,a)},error:function(e,a,r){t.getDeferred().fail()},dataType:"html"})})})}
this.finishDownload=function(e,a){if(_debug){KAConsole.log("Package "+r.packageName+" downloaded "+staticUrl(e.filename))}e.content=a
r.progress++
t.getDeferred().notify(r.progress/(2*r.files.length))
r.lastProgress=r.progress
if(r.evaluationRequested){r._evaluate()}}
this.evaluateWhenReady=function(){if(r.evaluationRequested){return}r.evaluationRequested=true
if(!r.downloadStarted){r.startDownload()
return}r._evaluate()}
this._evaluate=function(){var e=false
_.each(r.files,function(a){if(e){return}if(a.content!=null){if(!a.evaled){n(a,r.packageName)}}else{e=true}})
if(e){if(r.progress!==r.lastProgress){t.getDeferred().notify(r.progress/(2*r.files.length))
r.lastProgress=r.progress}}else{var a=true
try{t.getDeferred().resolve()
a=false}finally{if(a){KAConsole.log("Listener failed on load of "+this.packageName)}}if(_debug){KAConsole.log("Package "+r.packageName+" evaluated.")}}}
function n(e,a){var t
var n=e.filename.slice(e.filename.lastIndexOf(".")+1)
t=PackageLoader.Formats[n](e,a)
if(_debug){KAConsole.log("Package "+a+" evaled "+e.filename)}e.evaled=true
r.progress++
return t}}PackageLoader._getHead=function(){return document.getElementsByTagName("head")[0]||document.documentElement}
function urlToId(e){var a=e.split("/")
var t=a.pop().replace(".","_")
var r=a.pop().replace("-package","")
return r+"_"+t}PackageLoader.Formats={js:function(e){var a=staticUrl(e.filename)
$.globalEval(e.content+"\n//# sourceURL="+a+"\n")},css:function(e){var a=urlToId(e.filename)
var t=document.getElementById(a)
if(!t){t=document.createElement("style")
t.id=a
t.setAttribute("data-href",staticUrl(e.filename))
PackageLoader._getHead().appendChild(t)}if(t.styleSheet){try{t.styleSheet.cssText=e.content}catch(r){throw new Error("Couldn't reassign styleSheet.cssText.")}}else{(function(e){if(t.childNodes.length>0){if(t.firstChild.nodeValue!==e.nodeValue){t.replaceChild(e,t.firstChild)}}else{t.appendChild(e)}})(document.createTextNode(e.content))}}}
window.PackageManager=_.extend(window.PackageManager||{},{_packages:{},_getPackage:function(e){if(!this._packages[e]){this._packages[e]={dependencies:[],_deferred:null,getDeferred:function(){if(this._deferred===null){this._deferred=new $.Deferred}return this._deferred}}}return this._packages[e]},setLoaded:function(){_.each(arguments,function(e){var a=this._getPackage(e)
a.getDeferred().resolve()},this)},registerDynamic:function(e){var a=e.name
var t=this._getPackage(a)
if(!t.loader){t.loader=new PackageLoader(a,e.files,t)
t.dependencies=e.dependencies||[]}if(_debug){KAConsole.log("Package "+a+" registered.")}},registerManifests:function(e){var a=this
_.each(e,function(e,t){_.each(e,function(e){a.registerDynamic(e)})})},precache:function(e,a){var t=this._getPackage(e)
if(t.getDeferred().state()==="resolved"){return}if(!t.loader){throw new Error("Cannot dynamically load '"+e+"' without it first being registered.")}if(t.loader.downloadStarted||t.loader.precacheCalled){return}t.loader.precacheCalled=true
if(KA.IS_DEV_SERVER){this._logDynamicRequire(e)}_.each(t.dependencies,function(e){PackageManager.precache(e,a)})
if(a){_.delay(_.bind(t.loader.startDownload,t.loader),a)}else{t.loader.startDownload()}},_burst:[],_debouncedLog:_.debounce(function(){console.info("[PackageManager] dynamically loading %d package(s): %s",PackageManager._burst.length,PackageManager._burst.join(", "))
PackageManager._burst=[]},100),_logDynamicRequire:function(e){this._burst.push(e)
this._debouncedLog()},require:function(){return $.when.apply(this,_.map(arguments,function(e){var a=this._getPackage(e)
if(!a.loader){throw new Error("Cannot dynamically load '"+e+"' without it first being registered.")}if(a.getDeferred().state()!=="resolved"&&!a.loader.requireCalled){a.loader.requireCalled=true
this.precache(e)
this.require.apply(this,a.dependencies).then(function(){a.loader.evaluateWhenReady()})}return a.getDeferred()},this))},isLoaded:function(e){var a=this._getPackage(e)
return a._deferred&&a._deferred.state()==="resolved"},init:function(){if(PackageManager._q){PackageManager.setLoaded.apply(PackageManager,PackageManager._q)
delete PackageManager._q}if(KA.IS_DEV_SERVER){$(document).ready(function(){var e=[]
var a=[]
_.each(PackageManager._packages,function(t,r){if(PackageManager.isLoaded(r)){var n=_.last(r.split("."))
if(n==="js"){e.push(r)}else{a.push(r)}}})
console.info("[PackageManager] %d initial JS package(s): %s",e.length,e.join(", "))
console.info("[PackageManager] %d initial CSS package(s): %s",a.length,a.join(", "))})}}})
module.exports=PackageManager
});
KAdefine("third_party/javascript-khansrc/jqueryui/jquery.ui.touch-punch.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../jquery/jquery.js");
__KA_require("./jquery.ui.mouse.js");
(function($){$.support.touch="ontouchend"in document
if(!$.support.touch){return}var e=$.ui.mouse.prototype,t=e._mouseInit,o
function u(e,t){if(e.originalEvent.touches.length>1){return}e.preventDefault()
var o=e.originalEvent.changedTouches[0],u=document.createEvent("MouseEvents")
u.initMouseEvent(t,true,true,window,1,o.screenX,o.screenY,o.clientX,o.clientY,false,false,false,false,0,null)
e.target.dispatchEvent(u)}e._touchStart=function(e){var t=this
if(o||!t._mouseCapture(e.originalEvent.changedTouches[0])){return}o=true
t._touchMoved=false
u(e,"mouseover")
u(e,"mousemove")
u(e,"mousedown")}
e._touchMove=function(e){if(!o){return}this._touchMoved=true
u(e,"mousemove")}
e._touchEnd=function(e){if(!o){return}u(e,"mouseup")
u(e,"mouseout")
if(!this._touchMoved){u(e,"click")}o=false}
e._mouseInit=function(){var e=this
e.element.bind("touchstart",$.proxy(e,"_touchStart")).bind("touchmove",$.proxy(e,"_touchMove")).bind("touchend",$.proxy(e,"_touchEnd"))
t.call(e)}})(jQuery)
});
KAdefine("third_party/javascript-khansrc/jqueryui/jquery.ui.progressbar.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../jquery/jquery.js");
__KA_require("./jquery.ui.core.js");
__KA_require("./jquery.ui.widget.js");
(function($,e){$.widget("ui.progressbar",{version:"1.10.1",options:{max:100,value:0,change:null,complete:null},min:0,_create:function(){this.oldValue=this.options.value=this._constrainedValue()
this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({role:"progressbar","aria-valuemin":this.min})
this.valueDiv=$("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element)
this._refreshValue()},_destroy:function(){this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow")
this.valueDiv.remove()},value:function(i){if(i===e){return this.options.value}this.options.value=this._constrainedValue(i)
this._refreshValue()},_constrainedValue:function(i){if(i===e){i=this.options.value}this.indeterminate=i===false
if(typeof i!=="number"){i=0}return this.indeterminate?false:Math.min(this.options.max,Math.max(this.min,i))},_setOptions:function(e){var i=e.value
delete e.value
this._super(e)
this.options.value=this._constrainedValue(i)
this._refreshValue()},_setOption:function(e,i){if(e==="max"){i=Math.max(this.min,i)}this._super(e,i)},_percentage:function(){return this.indeterminate?100:100*(this.options.value-this.min)/(this.options.max-this.min)},_refreshValue:function(){var e=this.options.value,i=this._percentage()
this.valueDiv.toggle(this.indeterminate||e>this.min).toggleClass("ui-corner-right",e===this.options.max).width(i.toFixed(0)+"%")
this.element.toggleClass("ui-progressbar-indeterminate",this.indeterminate)
if(this.indeterminate){this.element.removeAttr("aria-valuenow")
if(!this.overlayDiv){this.overlayDiv=$("<div class='ui-progressbar-overlay'></div>").appendTo(this.valueDiv)}}else{this.element.attr({"aria-valuemax":this.options.max,"aria-valuenow":e})
if(this.overlayDiv){this.overlayDiv.remove()
this.overlayDiv=null}}if(this.oldValue!==e){this.oldValue=e
this._trigger("change")}if(e===this.options.max){this._trigger("complete")}}})})(jQuery)
});
KAdefine("third_party/javascript-khansrc/jquery-timeago/jquery.timeago.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../jquery/jquery.js");
(function(t){if(typeof define==="function"&&define.amd){define(["jquery"],t)}else{t(jQuery)}})(function($){$.timeago=function(t){if(t instanceof Date){return r(t)}else if(typeof t==="string"){return r($.timeago.parse(t))}else if(typeof t==="number"){return r(new Date(t))}else{return r($.timeago.datetime(t))}}
var t=$.timeago
$.extend($.timeago,{settings:{refreshMillis:6e4,allowPast:true,allowFuture:false,localeTitle:false,cutoff:0,strings:{prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",inPast:"any moment now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}},inWords:function(t){if(!this.settings.allowPast&&!this.settings.allowFuture){throw"timeago allowPast and allowFuture settings can not both be set to false."}var e=this.settings.strings
var a=e.prefixAgo
var i=e.suffixAgo
if(this.settings.allowFuture){if(t<0){a=e.prefixFromNow
i=e.suffixFromNow}}if(!this.settings.allowPast&&t>=0){return this.settings.strings.inPast}var r=Math.abs(t)/1e3
var n=r/60
var o=n/60
var s=o/24
var u=s/365
function l(a,i){var r=$.isFunction(a)?a(i,t):a
var n=e.numbers&&e.numbers[i]||i
return r.replace(/%d/i,n)}var f=r<45&&l(e.seconds,Math.round(r))||r<90&&l(e.minute,1)||n<45&&l(e.minutes,Math.round(n))||n<90&&l(e.hour,1)||o<24&&l(e.hours,Math.round(o))||o<42&&l(e.day,1)||s<30&&l(e.days,Math.round(s))||s<45&&l(e.month,1)||s<365&&l(e.months,Math.round(s/30))||u<1.5&&l(e.year,1)||l(e.years,Math.round(u))
var m=e.wordSeparator||""
if(e.wordSeparator===undefined){m=" "}return $.trim([a,f,i].join(m))},parse:function(t){var e=$.trim(t)
e=e.replace(/\.\d+/,"")
e=e.replace(/-/,"/").replace(/-/,"/")
e=e.replace(/T/," ").replace(/Z/," UTC")
e=e.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2")
e=e.replace(/([\+\-]\d\d)$/," $100")
return new Date(e)},datetime:function(e){var a=t.isTime(e)?$(e).attr("datetime"):$(e).attr("title")
return t.parse(a)},isTime:function(t){return $(t).get(0).tagName.toLowerCase()==="time"}})
var e={init:function(){var e=$.proxy(a,this)
e()
var i=t.settings
if(i.refreshMillis>0){this._timeagoInterval=setInterval(e,i.refreshMillis)}},update:function(e){var i=t.parse(e)
$(this).data("timeago",{datetime:i})
if(t.settings.localeTitle)$(this).attr("title",i.toLocaleString())
a.apply(this)},updateFromDOM:function(){$(this).data("timeago",{datetime:t.parse(t.isTime(this)?$(this).attr("datetime"):$(this).attr("title"))})
a.apply(this)},dispose:function(){if(this._timeagoInterval){window.clearInterval(this._timeagoInterval)
this._timeagoInterval=null}}}
$.fn.timeago=function(t,a){var i=t?e[t]:e.init
if(!i){throw new Error("Unknown function name '"+t+"' for timeago")}this.each(function(){i.call(this,a)})
return this}
function a(){var e=i(this)
var a=t.settings
if(!isNaN(e.datetime)){if(a.cutoff==0||n(e.datetime)<a.cutoff){$(this).text(r(e.datetime))}}return this}function i(e){e=$(e)
if(!e.data("timeago")){e.data("timeago",{datetime:t.datetime(e)})
var a=$.trim(e.text())
if(t.settings.localeTitle){e.attr("title",e.data("timeago").datetime.toLocaleString())}else if(a.length>0&&!(t.isTime(e)&&e.attr("title"))){e.attr("title",a)}}return e.data("timeago")}function r(e){return t.inWords(n(e))}function n(t){return(new Date).getTime()-t.getTime()}document.createElement("abbr")
document.createElement("time")})
__KA_require("./locales/jquery.timeago.en.js");
});
KAdefine("third_party/javascript-khansrc/jquery-timeago/locales/jquery.timeago.en.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../jquery/jquery.js");
__KA_require("../jquery.timeago.js");
jQuery.timeago.settings.strings={prefixAgo:null,prefixFromNow:null,suffixAgo:"ago",suffixFromNow:"from now",seconds:"less than a minute",minute:"about a minute",minutes:"%d minutes",hour:"about an hour",hours:"about %d hours",day:"a day",days:"%d days",month:"about a month",months:"%d months",year:"about a year",years:"%d years",wordSeparator:" ",numbers:[]}
});
KAdefine("third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-transition.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../jquery/jquery.js");
!function($){"use strict"
$(function(){$.support.transition=function(){var n=function(){var n=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},i
for(i in t){if(n.style[i]!==undefined){return t[i]}}}()
return n&&{end:n}}()})}(window.jQuery)
});
KAdefine("third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-modal.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../jquery/jquery.js");
__KA_require("./bootstrap-transition.js");
!function($){"use strict"
var t=function(t,e){this.options=e
this.$element=$(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",$.proxy(this.hide,this))
this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)}
t.prototype={constructor:t,toggle:function(){return this[!this.isShown?"show":"hide"]()},show:function(){var t=this,e=$.Event("show")
this.$element.trigger(e)
if(this.isShown||e.isDefaultPrevented())return
this.isShown=true
this.escape()
this.backdrop(function(){var e=$.support.transition&&t.$element.hasClass("fade")
if(!t.$element.parent().length){t.$element.appendTo(document.body)}t.$element.show()
if(e){t.$element[0].offsetWidth}t.$element.addClass("in").attr("aria-hidden",false)
t.enforceFocus()
e?t.$element.one($.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault()
var e=this
t=$.Event("hide")
this.$element.trigger(t)
if(!this.isShown||t.isDefaultPrevented())return
this.isShown=false
this.escape()
$(document).off("focusin.modal")
this.$element.removeClass("in").attr("aria-hidden",true)
$.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this
$(document).off("focusin.bs.modal").on("focusin.bs.modal",function(e){if(t.$element[0]!==e.target&&!t.$element.has(e.target).length){t.$element.focus()}})},escape:function(){var t=this
if(this.isShown&&this.options.keyboard){this.$element.on("keyup.dismiss.modal",function(e){e.which==27&&t.hide()})}else if(!this.isShown){this.$element.off("keyup.dismiss.modal")}},hideWithTransition:function(){var t=this,e=setTimeout(function(){t.$element.off($.support.transition.end)
t.hideModal()},500)
this.$element.one($.support.transition.end,function(){clearTimeout(e)
t.hideModal()})},hideModal:function(){var t=this
this.$element.hide()
this.backdrop(function(){t.removeBackdrop()
t.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove()
this.$backdrop=null},backdrop:function(t){var e=this,i=this.$element.hasClass("fade")?"fade":""
if(this.isShown&&this.options.backdrop){var o=$.support.transition&&i
this.$backdrop=$('<div class="modal-backdrop '+i+'" />').appendTo(document.body)
this.$backdrop.click(this.options.backdrop=="static"?$.proxy(this.$element[0].focus,this.$element[0]):$.proxy(this.hide,this))
if(o)this.$backdrop[0].offsetWidth
this.$backdrop.addClass("in")
if(!t)return
o?this.$backdrop.one($.support.transition.end,t):t()}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in")
$.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one($.support.transition.end,t):t()}else if(t){t()}}}
var e=$.fn.modal
$.fn.modal=function(e){return this.each(function(){var i=$(this),o=i.data("modal"),n=$.extend({},$.fn.modal.defaults,i.data(),typeof e=="object"&&e)
if(!o)i.data("modal",o=new t(this,n))
if(typeof e=="string")o[e]()
else if(n.show)o.show()})}
$.fn.modal.defaults={backdrop:true,keyboard:true,show:true}
$.fn.modal.Constructor=t
$.fn.modal.noConflict=function(){$.fn.modal=e
return this}
$(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var e=$(this),i=e.attr("href"),o=$(e.attr("data-target")||i&&i.replace(/.*(?=#[^\s]+$)/,"")),n=o.data("modal")?"toggle":$.extend({remote:!/#/.test(i)&&i},o.data(),e.data())
t.preventDefault()
o.modal(n).one("hide",function(){e.focus()})})}(window.jQuery)
});
KAdefine("third_party/javascript-khansrc/Modernizr/modernizr.js", function(__KA_require, __KA_module, __KA_exports) {
(function(e,n,t){var r=[]
var i=[]
var o={_version:"v3.0.0pre",_config:{classPrefix:"modernizr-",enableClasses:true,usePrefixes:true},_q:[],on:function(e,n){setTimeout(function(){n(this[e])},0)},addTest:function(e,n,t){i.push({name:e,fn:n,options:t})},addAsyncTest:function(e){i.push({name:null,fn:e})}}
var s=function(){}
s.prototype=o
s=new s
function a(e,n){return typeof e===n}function f(){var e
var n
var t
var o
var f
var l
var u
for(var d in i){e=[]
n=i[d]
if(n.name){e.push(n.name.toLowerCase())
if(n.options&&n.options.aliases&&n.options.aliases.length){for(t=0;t<n.options.aliases.length;t++){e.push(n.options.aliases[t].toLowerCase())}}}o=a(n.fn,"function")?n.fn():n.fn
for(f=0;f<e.length;f++){l=e[f]
u=l.split(".")
if(u.length===1){s[u[0]]=o}else if(u.length===2){if(s[u[0]]&&!(s[u[0]]instanceof Boolean)){s[u[0]]=new Boolean(s[u[0]])}s[u[0]][u[1]]=o}r.push((o?"":"no-")+u.join("-"))}}}var l=n.documentElement
function u(e){var n=l.className
var t=s._config.classPrefix||""
var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)")
n=n.replace(r,"$1"+t+"js$2")
if(s._config.enableClasses){n+=" "+t+e.join(" "+t)
l.className=n}}var d=o._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):[]
o._prefixes=d
var c=function(){return n.createElement.apply(n,arguments)}
function p(){var e=n.body
if(!e){e=c("body")
e.fake=true}return e}function v(e,n,t,r){var i="modernizr"
var o
var s
var a
var f
var u=c("div")
var d=p()
if(parseInt(t,10)){while(t--){a=c("div")
a.id=r?r[t]:i+(t+1)
u.appendChild(a)}}o=["­",'<style id="s',i,'">',e,"</style>"].join("")
u.id=i;(!d.fake?u:d).innerHTML+=o
d.appendChild(u)
if(d.fake){d.style.background=""
d.style.overflow="hidden"
f=l.style.overflow
l.style.overflow="hidden"
l.appendChild(d)}s=n(u,e)
if(d.fake){d.parentNode.removeChild(d)
l.style.overflow=f
l.offsetHeight}else{u.parentNode.removeChild(u)}return!!s}var m=o.testStyles=v
s.addTest("touchevents",function(){var t
if("ontouchstart"in e||e.DocumentTouch&&n instanceof DocumentTouch){t=true}else{var r=["@media (",d.join("touch-enabled),("),"heartz",")","{#modernizr{top:9px;position:absolute}}"].join("")
m(r,function(e){t=e.offsetTop===9})}return t})
var h="Webkit Moz O ms"
var y=o._config.usePrefixes?h.split(" "):[]
o._cssomPrefixes=y
var g=o._config.usePrefixes?h.toLowerCase().split(" "):[]
o._domPrefixes=g
function x(e,n){return!!~(""+e).indexOf(n)}function C(e,n){return function(){return e.apply(n,arguments)}}function w(e,n,t){var r
for(var i in e){if(e[i]in n){if(t===false)return e[i]
r=n[e[i]]
if(a(r,"function")){return C(r,t||n)}return r}}return false}var _={elem:c("modernizr")}
s._q.push(function(){delete _.elem})
var b={style:_.elem.style}
s._q.unshift(function(){delete b.style})
function S(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function T(n,r){var i=n.length
if("CSS"in e&&"supports"in e.CSS){while(i--){if(e.CSS.supports(S(n[i]),r)){return true}}return false}else if("CSSSupportsRule"in e){var o=[]
while(i--){o.push("("+S(n[i])+":"+r+")")}o=o.join(" or ")
return v("@supports ("+o+") { #modernizr { position: absolute; } }",function(n){return(e.getComputedStyle?getComputedStyle(n,null):n.currentStyle)["position"]=="absolute"})}return t}function j(e,n,r,i){i=a(i,"undefined")?false:i
if(!a(r,"undefined")){var o=T(e,r)
if(!a(o,"undefined")){return o}}var s,f,l,u
if(!b.style){s=true
b.modElem=c("modernizr")
b.style=b.modElem.style}function d(){if(s){delete b.style
delete b.modElem}}for(f in e){l=e[f]
u=b.style[l]
if(!x(l,"-")&&b.style[l]!==t){if(!i&&!a(r,"undefined")){try{b.style[l]=r}catch(p){}if(b.style[l]!=u){d()
return n=="pfx"?l:true}}else{d()
return n=="pfx"?l:true}}}d()
return false}function z(e,n,t,r,i){var o=e.charAt(0).toUpperCase()+e.slice(1),s=(e+" "+y.join(o+" ")+o).split(" ")
if(a(n,"string")||a(n,"undefined")){return j(s,n,r,i)}else{s=(e+" "+g.join(o+" ")+o).split(" ")
return w(s,n,t)}}o.testAllProps=z
function P(e,n,r){return z(e,t,t,n,r)}o.testAllProps=P
s.addTest("flexbox",P("flexBasis","1px",true))
s.addTest("flexboxtweener",P("flexAlign","end",true))
f()
u(r)
delete o.addTest
delete o.addAsyncTest
for(var k=0;k<s._q.length;k++){s._q[k]()}e.Modernizr=s})(this,document)
__KA_module.exports = Modernizr;
this.Modernizr = Modernizr;
});
KAdefine("javascript/shared-package/local-store.js", function(require, module, exports) {
window.LocalStore={version:4,keyPrefix:"ka",cacheKey:function(e){if(!e){throw new Error("Attempting to use LocalStore without a key")}return[this.keyPrefix,this.version,e].join(":")},get:function(e){if(!this.isEnabled()){return undefined}try{var t=window.localStorage[LocalStore.cacheKey(e)]
if(t){return JSON.parse(t)}}catch(r){}return null},set:function(e,t){if(!this.isEnabled()){throw new Error("LocalStore is not enabled")}var r=JSON.stringify(t),o=LocalStore.cacheKey(e)
try{window.localStorage[o]=r}catch(i){LocalStore.clearAll()}},del:function(e){if(!this.isEnabled()){return}var t=this.cacheKey(e)
if(t in window.localStorage){delete window.localStorage[t]}},isEnabled:function(){var e,t=String(+new Date)
try{window.sessionStorage[t]=t
e=window.sessionStorage[t]===t
window.sessionStorage.removeItem(t)
return e}catch(r){return false}},clearAll:function(){if(!this.isEnabled()){return}try{var e=0
while(e<localStorage.length){var t=localStorage.key(e)
if(t.indexOf(LocalStore.keyPrefix+":")===0){delete localStorage[t]}else{e++}}}catch(r){}}}
module.exports=LocalStore
});
KAdefine("javascript/shared-package/regex-util.js", function(require, module, exports) {
var _=require("underscore")
function escapeRegex(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function accentInsensitive(e){e=escapeRegex(e)
var a=function(e){return accentedAndNormalRegexChars[e.toUpperCase()]||e}
e=e.replace(/\S/g,a)
return e}var accentedChars={A:"àá",E:"èéÉ",I:"í",O:"ò-ö",U:"ùü"}
var accentedAndNormalRegexChars=_.object(_.map(accentedChars,function(e,a){return[a,"["+a+a.toLowerCase()+e+"]"]}))
var accentedRegexChars=_.object(_.map(accentedChars,function(e,a){return[a,"["+e+"]"]}))
var accentedCharRegexes={}
_.each(accentedRegexChars,function(e,a){accentedCharRegexes[a.toLowerCase()]=new RegExp(e,"g")})
var anyAccentNeedles=_.values(accentedRegexChars).join("|")
var anyAccentedCharRegex=new RegExp(anyAccentNeedles)
module.exports={escapeRegex:escapeRegex,accentInsensitive:accentInsensitive,accentedCharRegexes:accentedCharRegexes,anyAccentedCharRegex:anyAccentedCharRegex}
});
KAdefine("javascript/shared-package/cookies.js", function(require, module, exports) {
var createCookie=function(e,o,r,a){var i
if(r){var t=new Date
t.setTime(t.getTime()+r*24*60*60*1e3)
i="; expires="+t.toGMTString()}else{i=""}if(a){a="; domain="+a}else{a=""}document.cookie=e+"="+o+i+a+"; path=/"}
var readCookie=function(e){var o=e+"="
var r=document.cookie.split(";")
for(var a=0;a<r.length;a++){var i=r[a]
while(i.charAt(0)===" "){i=i.substring(1,i.length)}if(i.indexOf(o)===0){return i.substring(o.length,i.length)}}return null}
var eraseCookie=function(e,o){createCookie(e,"",-1,o)}
var areCookiesEnabled=function(){createCookie("detectCookiesEnabled","KhanAcademy")
if(readCookie("detectCookiesEnabled")==null){return false}eraseCookie("detectCookiesEnabled")
return true}
module.exports={createCookie:createCookie,readCookie:readCookie,eraseCookie:eraseCookie,areCookiesEnabled:areCookiesEnabled}
});
KAdefine("javascript/shared-package/keyhandling.js", function(require, module, exports) {
var Keys={}
Keys.textChangeEvents="oninput"in document.createElement("input")?"input":"keyup paste cut drop"
module.exports=Keys
});
KAdefine("javascript/shared-package/underscore-extensions.js", function(require, module, exports) {
var _=require("underscore")
_.mixin({renameKeys:function(n,r){var e={}
_(n).each(function(n,t){var u=r[t]||t
e[u]=n})
return e},intersperse:function(n,r){if(n.length===0){return[]}return _.reduce(n.slice(1),function(n,e,t){var u=typeof r==="function"?r(t):r
return n.concat([u,e])},[n[0]])},indexBy:function(n,r){var e=null
if(typeof r==="string"){e=function(n){return n[r]}}else{e=r}return _.reduce(n,function(n,r){n[e(r)]=r
return n},{})},findIndex:function(n,r,e){var t
_.any(n,function(n,u,i){if(r.call(e,n,u,i)){t=u
return true}})
return t},matches:function(n){return function(r){if(r===n){return true}for(var e in n){if(n[e]!==r[e]){return false}}return true}},indexWhere:function(n,r){return _.findIndex(n,_.matches(r))}})
});
KAdefine("javascript/shared-package/autolink.js", function(require, module, exports) {
var regex=/\b(?:(?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>&]+|&amp;|\((?:[^\s()<>]|(?:\([^\s()<>]+\)))*\))+(?:\((?:[^\s()<>]|(?:\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’&]))/gi
var Autolink={autolink:function(t,e){return t.replace(regex,function(t){if(!/^https?:\/\//.test(t)){t="http://"+t}var r=e?'rel="nofollow"':""
return"<a "+r+' href="'+t+'">'+t+"</a>"})}}
module.exports=Autolink
});
KAdefine("third_party/javascript-khansrc/async/async.js", function(__KA_require, __KA_module, __KA_exports) {
(function(){var e={}
var t=this,n=t.async
if(typeof module!=="undefined"&&module.exports){module.exports=e}else{t.async=e}function i(e){var n=false
return function(){if(n)throw new Error("Callback was already called.")
n=true
e.apply(t,arguments)}}var a=function(e,t){if(e.forEach){return e.forEach(t)}for(var n=0;n<e.length;n+=1){t(e[n],n,e)}}
if(typeof process==="undefined"||!process.nextTick){if(typeof setImmediate==="function"){e.nextTick=function(e){setImmediate(e)}
e.setImmediate=e.nextTick}else{e.nextTick=function(e){setTimeout(e,0)}
e.setImmediate=e.nextTick}}else{e.nextTick=process.nextTick
if(typeof setImmediate!=="undefined"){e.setImmediate=setImmediate}else{e.setImmediate=e.nextTick}}e.until=function(t,n,i){if(!t()){n(function(a){if(a){return i(a)}e.until(t,n,i)})}else{i()}}
e.queue=function(t,n){if(n===undefined){n=1}function s(t,i,s,r){if(i.constructor!==Array){i=[i]}a(i,function(i){var a={data:i,callback:typeof r==="function"?r:null}
if(s){t.tasks.unshift(a)}else{t.tasks.push(a)}if(t.saturated&&t.tasks.length===n){t.saturated()}e.setImmediate(t.process)})}var r=0
var u={tasks:[],concurrency:n,saturated:null,empty:null,drain:null,push:function(e,t){s(u,e,false,t)},unshift:function(e,t){s(u,e,true,t)},process:function(){if(r<u.concurrency&&u.tasks.length){var e=u.tasks.shift()
if(u.empty&&u.tasks.length===0){u.empty()}r+=1
var n=function(){r-=1
if(e.callback){e.callback.apply(e,arguments)}if(u.drain&&u.tasks.length+r===0){u.drain()}u.process()}
var a=i(n)
t(e.data,a)}},length:function(){return u.tasks.length},running:function(){return r}}
return u}})()
__KA_module.exports = async;
this.async = async;
});
KAdefine("javascript/shared-package/analytics.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var KA=require("./ka.js")
var KAConsole=require("./console.js")
var VisitTracking=require("./visit-tracking.js")
var escapeRegex=require("./regex-util.js").escapeRegex
var getNow=Date.now||function(){return+new Date}
var diffMS=function(t,e,a){var n=e-t
if(a){return n}return Math.round(n)}
var diffS=function(t,e,a){var n=diffMS(t,e,true)/1e3
if(a){return n}return Math.round(n)}
var NORMALIZE_PATH_RULES=[{firstPart:"profile",partsToExtract:[{index:1,token:":username"}]},{firstPart:"mission",partsToExtract:[{index:1,token:":missionSlug"},{index:3,token:":taskId"}]}]
var getNormalizedPathParams=function(t){var e=t.toLowerCase().replace(/(\/+$|^\/)/g,"")
var a=e.split("/")
if(!a.length){return{}}var n=_.find(NORMALIZE_PATH_RULES,function(t){return a[0]===t.firstPart})
if(!n){return{}}var r={}
_.chain(n.partsToExtract).filter(function(t){return a.length>t.index}).each(function(t){r["Path Token "+t.token]=a[t.index]
a[t.index]=t.token})
_.extend(r,{"Path Normalized":"/"+a.join("/")})
return r}
var analyticsStore={persistData:{timestamp:0,events:{},trackingProperties:{}},loadAndSendPersistData:function(){if(!window.mixpanelEnabled){return}if(window.sessionStorage){var t=null
try{t=$.parseJSON(sessionStorage.getItem("ka_analytics"))}catch(e){return}if(!t||!t.timestamp){return}var a=getNow()
if(diffS(t.timestamp,a,true)<60){this.persistData=t
_.each(t.events,this._sendEvent,this)}}},addEvent:function(t){if(!window.mixpanelEnabled){return $.when()}this.persistData.events[t.id]=t
this._storePersistData()
return this._sendEvent(t)},_sendEvent:function(t){var e=$.Deferred()
window.mixpanel.push(["track",t.name,t.parameters,_(function(a,n){if(a===1||a.status===1){delete this.persistData.events[t.id]
this._storePersistData()
KAConsole.log("Successfully sent event "+t.id)
e.resolve()}else{KAConsole.log("Failed to send event "+t.id,a.error)
e.reject()}}).bind(this)])
return e.promise()},_storePersistData:function(){if(window.sessionStorage){this.persistData.timestamp=getNow()
var t=JSON.stringify(this.persistData)
sessionStorage.setItem("ka_analytics",t)}},setTrackingProperty:function(t,e){if(!window.mixpanelEnabled){return}this.persistData.trackingProperties[t]=e
this._storePersistData()},getTrackingProperty:function(t){return this.persistData.trackingProperties[t]}}
var currentPath=null
var currentTrackingActivity=null
var eventQueue=[]
var Analytics={init:function(){currentPath=window.location.pathname
if(!window.mixpanelEnabled){return}analyticsStore.loadAndSendPersistData()
$(window).unload(function(){Analytics._trackActivityEnd(getNow())})
$("body").on("click","a",function(t){var e=$(this).attr("data-tag")
if(e){var a=$(this).attr("href")
Analytics.trackSingleEvent("Link Click",{"Link Tag":e,Href:a})}})
_.each(eventQueue,function(t){this.trackSingleEvent(t.name,t.parameters)},this)
setTimeout(function(){Analytics._trackActivityEnd(getNow())
currentPath=null},4*60*60*1e3)},trackInitialPageLoad:function(t){var e=diffMS(t,getNow())
var a=document.referrer.split("/")[2]
var n=/^([0-9a-z-]+\.)*khanacademy\.org$/
var r=n.test(a)
var i=!r
this.trackPageView({"Load Time (ms)":e,"Loading Type":"Server-side","Is Referrer KA":r},i)},handleRouterNavigation:function(){VisitTracking.trackVisit()
if(currentPath&&currentPath!==window.location.pathname){currentPath=window.location.pathname
ga("send","pageview",currentPath)
if(window.mixpanelEnabled){Analytics.trackPageView({"Loading Type":"Client-side"})}}},trackPageView:function(t,e){var a=getNow()
if(e){analyticsStore.setTrackingProperty("Session Start",a)
analyticsStore.setTrackingProperty("Session Pages",1)}else{var n=analyticsStore.getTrackingProperty("Session Pages")
if(n){analyticsStore.setTrackingProperty("Session Pages",n+1)}}this.trackActivityBegin("Page View",t)},trackActivityBegin:function(t,e){if(!window.mixpanelEnabled||!currentPath){return null}var a=getNow()
this._trackActivityEnd(a)
e._startTime=a
_.extend(e,{Path:currentPath},getNormalizedPathParams(currentPath),window.AnalyticsSuperProps)
currentTrackingActivity={id:t+a,name:t,parameters:e}
KAConsole.log("Started tracking activity "+(t+a))
return currentTrackingActivity},trackActivityEnd:function(t){if(!window.mixpanelEnabled){return}if(t===currentTrackingActivity){this._trackActivityEnd(getNow())
this.trackPageView({})}},_trackActivityEnd:function(t){if(!currentTrackingActivity){return}var e=currentTrackingActivity
var a=diffS(e.parameters._startTime,t)
_.extend(e.parameters,{"Duration (s)":a})
delete e.parameters._startTime
var n=analyticsStore.getTrackingProperty("Session Start")
if(n){var r=diffS(n,t)
var i=analyticsStore.getTrackingProperty("Session Pages")
_.extend(e.parameters,{"Session Time (s)":r,"Session Page Number":i})}KAConsole.log("Stopped tracking activity "+e.name+" after "+a+" sec.")
analyticsStore.addEvent(e)
currentTrackingActivity=null},trackSingleEvent:function(t,e){if(!window.mixpanelEnabled){return $.when()}e=e||{}
if(!currentPath){eventQueue.push({name:t,parameters:e})
return $.when()}_.extend(e,{Path:currentPath},getNormalizedPathParams(currentPath),window.AnalyticsSuperProps)
var a=getNow()
var n={id:t+a,name:t,parameters:e}
KAConsole.log("Tracking single event "+(t+a))
return analyticsStore.addEvent(n)},reportTiming:function(t,e){if(!window.mixpanelEnabled||!window.performance||!window.performance.timing){return}var a=window.performance.timing
var n=a.navigationStart
var r=a.redirectEnd-a.redirectStart
var i=a.domainLookupEnd-a.domainLookupStart
var s=a.connectEnd-a.connectStart
var c=a.responseStart-a.requestStart
var o=a.responseEnd-a.responseStart
var l=a.domContentLoadedEventStart-a.responseEnd
var d=a.domContentLoadedEventEnd-a.domContentLoadedEventStart
var u=a.domContentLoadedEventEnd-n
var m=require("./ka-client-timing.js")
var v=m.getPackageEntries()
var f=a.domContentLoadedEventStart
var g=m.wallTime(v,f)
var p={}
if(m.clientHasResourceTimingAPI()){var k=m.getResourceEntries(/\.js$|\.css$/)
var w=k.concat(v)
p["net"]=m.wallTime(k,f)
p["total"]=m.wallTime(w,f)
if(typeof KA!=="undefined"){var h=new RegExp("^https?://"+escapeRegex(KA.staticHost)+"/.+\\.(?:css|js)$")
var y=m.getResourceEntries(h)
switch(KA.staticHost){case"cdn.kastatic.org":p["cloudflare_jscss_net"]=m.wallTime(y,f)
break
case"fastly.kastatic.org":p["fastly_jscss_net"]=m.wallTime(y,f)
break
case"maxcdn.kastatic.org":p["maxcdn_jscss_net"]=m.wallTime(y,f)
break
case"www.khanacademy.org":p["ka_jscss_net"]=m.wallTime(y,f)
break
default:p["kastatic_jscss_net"]=m.wallTime(y,f)
break}}}var P={}
var S={"stats.time.client.redirect_ms":r,"stats.time.client.dns_ms":i,"stats.time.client.connect_ms":s,"stats.time.client.request_ms":c,"stats.time.client.response_ms":o,"stats.time.client.document_ms":l,"stats.time.client.content_loaded_ms":d,"stats.time.client.start_to_content_loaded_ms":u,"stats.time.client.resource_exec_ms":g}
if(p){S["stats.time.client.resource_net_ms"]=p["net"]
S["stats.time.client.resource_ms"]=p["total"]
if(p["cloudflare_jscss_net"]!=null){S["stats.time.client.cloudflare_jscss_net_ms"]=p["cloudflare_jscss_net"]}if(p["fastly_jscss_net"]!=null){S["stats.time.client.fastly_jscss_net_ms"]=p["fastly_jscss_net"]}if(p["maxcdn_jscss_net"]!=null){S["stats.time.client.maxcdn_jscss_net_ms"]=p["maxcdn_jscss_net"]}if(p["ka_jscss_net"]!=null){S["stats.time.client.ka_jscss_net_ms"]=p["ka_jscss_net"]}if(p["kastatic_jscss_net"]!=null){S["stats.time.client.kastatic_jscss_net_ms"]=p["kastatic_jscss_net"]}}$.post("/api/internal/elog",_.extend(P,S,{_request_id:t,_graphite_key_prefix:e,_graphite_keys:_.keys(S).join()}))}}
module.exports=Analytics
});
KAdefine("javascript/shared-package/ka-client-timing.js", function(require, module, exports) {
var _=require("underscore")
var KAClientTiming={clientHasResourceTimingAPI:function(){return Boolean(window.performance&&typeof window.performance.getEntriesByType==="function")},getPackageEntries:function(){return _.map(window.KAdefineTiming||{},function(e,n){return{name:n,startTime:e.startTime,endTime:e.endTime}})},getResourceEntries:function(e){if(!this.clientHasResourceTimingAPI()||!window.performance.timing){return[]}var n=window.performance.getEntriesByType("resource")
if(e){n=_.filter(n,function(n){return e.test(n.name)})}var r=window.performance.timing.navigationStart
return _.map(n,function(e){return{name:e.name,startTime:r+e.startTime,endTime:r+e.startTime+e.duration}})},wallTime:function(e,n){n=n||Number.MAX_VALUE
e=_.sortBy(e,"startTime")
var r=0
var i=0
var t=0
_.each(e,function(e){var a=e.startTime
var o=e.endTime
if(o>n){return}if(a<=t){t=Math.max(t,o)}else{r+=t-i
i=a
t=o}})
r+=t-i
return Math.round(r)}}
module.exports=KAClientTiming
});
KAdefine("javascript/shared-package/notifications-loader.js", function(require, module, exports) {
var $=require("jquery")
var updateDocumentTitle=require("./update-document-title.js")
var load=function(n){require.async(["../notifications-package/notifications.js","package!notifications.css"],n)}
var NotificationsLoader={_loaded:false,init:function(){$("#user-info").on("open","#user-notifications",function(n){NotificationsLoader.load()
NotificationsLoader.clearBrandNewCount()}).on("click",".user-notifications-toggle",function(n){return false})},load:function(){if(this._loaded){return}load(function(n){n.load()})
this._loaded=true},loadFromAPI:function(n){load(function(t){var e=n["readable"],o=n["urgent"],i=n["continueUrl"]
if(e.length){t.renderFromAPI(e)
NotificationsLoader.incrementBrandNewCount(e.length)}if(o.length){t.renderUrgent(o[0],i)}})},loadUrgent:function(n,t){load(function(e){e.renderUrgent(n,t)})},clearBrandNewCount:function(){var n=$(".notification-bubble")
if(parseInt(n.text())!==0){$(".notification-bubble").text("0").hide().parents(".icon").removeClass("brand-new")
updateDocumentTitle({noteCount:0})
load(function(n){n.clearBrandNewCount()})}},incrementBrandNewCount:function(n){var t=$(".notification-bubble")
var e=parseInt(t.text())+n
t.text(e).show().parents(".icon-bell-alt").addClass("brand-new")
updateDocumentTitle({noteCount:e})}}
module.exports=NotificationsLoader
});
KAdefine("javascript/shared-package/issue-loader.js", function(require, module, exports) {
var $=require("jquery")
var IssueLoader={init:function(){$(".issueLoader").on("mouseover",function(e){require.async(["../issues-package/issues.jsx"])})
$(".report-issue").on("click",function(e){IssueLoader.load(e)
return false})},load:function(e){require.async(["../issues-package/issues.jsx"],function(s){var r=s.toggleReportIssueModal
r($(e.target).data("report-type"))})}}
module.exports=IssueLoader
});
KAdefine("javascript/shared-package/typeahead-loader.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var KA=require("./ka.js")
var suggestionsDeferred=null
var requireSuggestions=function(){if(!suggestionsDeferred){var e="/api/internal/search/suggestions_index?v=1"
suggestionsDeferred=$.getJSON(e)}return suggestionsDeferred}
var loadJavaScript=function(){require.async(["../typeahead-package/search-bar.jsx","../typeahead-package/build-mission-source.js","package!typeahead.css"],function(){})}
var init=function(){if(!KA.INITIALIZED){return}_.delay(function(){loadJavaScript()
requireSuggestions()},2e3)}
module.exports={init:init}
});
KAdefine("javascript/shared-package/api-action-results.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var jQuery=require("jquery")
var KA=require("./ka.js")
var NotificationsLoader=require("./notifications-loader.js")
var Cookies=require("./cookies.js")
var APIActionResults={init:function(){this.hooks=[]
$(document).ajaxComplete(function(e,xhr,settings){if(xhr&&xhr.getResponseHeader("X-KA-API-Version-Mismatch")){apiVersionMismatch()}if(xhr&&xhr.getResponseHeader("X-KA-API-Response")&&xhr.responseText){if(xhr.responseText.indexOf("action_results")===-1&&xhr.responseText.indexOf("actionResults")===-1){return}var result
try{eval("result = "+xhr.responseText)}catch(err){return}if(result){var action=result["action_results"]||result["actionResults"]
if(action){APIActionResults.respondToAction(action)}}}})
jQuery.ajaxSetup({beforeSend:function(e,r){if(typeof KA!=="undefined"&&KA.language&&r&&r.url&&!/[?&]lang=/.test(r.url)&&(r.url.indexOf("/api/")>-1||r.url.indexOf("/profile/graph")>-1||r.url.indexOf("/goals/new")>-1||r.url.indexOf("/khan-exercises/exercises/")>-1)){r.url=r.url+(/\?/.test(r.url)?"&":"?")+"lang="+KA.language}if(r&&r.url&&r.url.indexOf("/api/")>-1){if(r.cache===undefined&&!/[\?&]v=/.test(r.url)){var t=jQuery.now(),i=r.url.replace(/([?&])_=[^&]*/,"$1_="+t)
r.url=i+(i===r.url?(/\?/.test(r.url)?"&":"?")+"_="+t:"")}var o=Cookies.readCookie("fkey")
if(o){e.setRequestHeader("X-KA-FKey",o)}else{apiVersionMismatch()
if(r.error){r.error()}return false}}}})},toCamelCase:function(e){return e.replace(/_([a-z])/g,function(e,r){return r.toUpperCase()})},respondToAction:function(e){$(APIActionResults.hooks).each(function(r,t){if(typeof e[t.prop]!=="undefined"){t.fxn(e[t.prop])}})},register:function(e,r){this.hooks[this.hooks.length]={prop:e,fxn:r}
this.hooks[this.hooks.length]={prop:APIActionResults.toCamelCase(e),fxn:r}}}
var apiVersionMismatch=function(){NotificationsLoader.loadUrgent({class_:["ApiVersionMismatchNotification"]})}
APIActionResults.addDefaultHooks=function(){if(window.ScratchpadUI&&ScratchpadUI.trusted&&window!==top){return}APIActionResults.register("notifications_added",_.bind(NotificationsLoader.loadFromAPI,NotificationsLoader))
APIActionResults.register("user_profile",function(e){var r={}
for(var t in e){if(e.hasOwnProperty(t)){r[APIActionResults.toCamelCase(t)]=e[t]}}e=r
KA.setUserProfile(e)
var i=require("../shared-package/nav-header.js")
i.renderUserDropdown()
i.renderNotificationsDropdown()})}
module.exports=APIActionResults
});
KAdefine("javascript/shared-package/facebookutil.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js")
var $=require("jquery")
var icu=require("icu")
var Analytics=require("../shared-package/analytics.js")
var Cookies=require("./cookies.js")
var KA=require("./ka.js")
var LocalStore=require("./local-store.js")
var FacebookUtil={init:function(){if(!KA.FB_APP_ID){return}window.fbAsyncInit=function(){FB.init({version:"v2.0",appId:KA.FB_APP_ID,status:false,cookie:true,xfbml:true,oauth:true})
if(FacebookUtil.isUsingFbLogin()){FB.getLoginStatus(function(e){if(e.authResponse){FacebookUtil.fixMissingCookie(e.authResponse)}else{Cookies.eraseCookie("fbl")}})}FB.Event.subscribe("auth.login",function(e){FacebookUtil.setFacebookID(e.authResponse.userID)})
FB.Event.subscribe("xfbml.render",function(e){var o=$("#facepile-holder")
var i=22
if(o.height()<=i*1.5){return}o.animate({opacity:1,duration:200,easing:"easeInOutCubic"})
Analytics.trackSingleEvent("Load Facepile")})
FacebookUtil.fbReadyDeferred_.resolve()}
$("#user-info").on("click","#page_logout",function(e){var o=window.location.hostname
if(o.indexOf("local.")===0){o=o.substring(6)}var i=FacebookUtil.isUsingFbLogin()
Cookies.eraseCookie("fbsr_"+KA.FB_APP_ID)
Cookies.eraseCookie("fbsr_"+KA.FB_APP_ID,"."+o)
Cookies.eraseCookie("fbm_"+KA.FB_APP_ID)
Cookies.eraseCookie("fbm_"+KA.FB_APP_ID,"."+o)
Cookies.eraseCookie("fbl")
if(i){try{FB.logout(function(){window.location=$("#page_logout").attr("href")})
return false}catch(t){window.location=$("#page_logout").attr("href")}}})
if(FacebookUtil.isUsingFbLogin()){FacebookUtil.loadFb()}},fbLoadStarted_:false,loadFb:function(){if(this.fbLoadStarted_){return}this.fbLoadStarted_=true
var e=document.createElement("script")
e.src=document.location.protocol+"//connect.facebook.net/"+icu.getLocale().replace(/-/g,"_")+"/sdk.js"
var o=document.getElementById("fb-root")
if(o){o.appendChild(e)}},fbReadyDeferred_:new $.Deferred,runOnFbReady:function(e){this.loadFb()
this.fbReadyDeferred_.done(e)},isUsingFbLoginCached_:undefined,facebookID:undefined,getFacebookID:function(){if(KA.getUserProfile()&&FacebookUtil.isUsingFbLogin()){return FacebookUtil.facebookID||LocalStore.get("facebookID")}return null},setFacebookID:function(e){FacebookUtil.facebookID=e
LocalStore.set("facebookID",e)},isUsingFbLogin:function(){if(FacebookUtil.isUsingFbLoginCached_===undefined){FacebookUtil.isUsingFbLoginCached_=!!Cookies.readCookie("fbl")}return FacebookUtil.isUsingFbLoginCached_},markUsingFbLogin:function(){Cookies.createCookie("fbl",true,30)},setPublishStreamPermission:function(e){var o=LocalStore.get("fbPublishStream")
if(!o){o={}}var i=FacebookUtil.getFacebookID()
if(i){if(e){o[i]=true}else{delete o[i]}LocalStore.set("fbPublishStream",o)}},hasPublishStreamPermission:function(){var e=LocalStore.get("fbPublishStream")
if(e&&e[FacebookUtil.getFacebookID()]){return true}return false},fixMissingCookie:function(e){if(Cookies.readCookie("fbsr_"+KA.FB_APP_ID)){return}if(e&&e.signedRequest){Cookies.createCookie("fbsr_"+KA.FB_APP_ID,e.signedRequest)}}}
module.exports=FacebookUtil
});
KAdefine("javascript/shared-package/social.js", function(require, module, exports) {
var $=require("jquery")
require("./i18n.js")
var FacebookUtil=require("./facebookutil.js")
var Social={init:function(){$("body").on("click",".twitterShare",function(){Social.openTwitterPopup(this.href)
return false})},prepFacebook:function(){FacebookUtil.runOnFbReady(function(){})},facebookShare:function(e,t,a){FacebookUtil.runOnFbReady(function(){FB.ui({method:"feed",name:e,link:t,picture:a,caption:"www.khanacademy.org"})})
return false},facebookVideo:function(e,t,a){FacebookUtil.runOnFbReady(function(){FB.ui({method:"feed",name:e,link:"http://www.khanacademy.org/"+a,picture:"http://www.khanacademy.org/images/handtreehorizontal_facebook.png",caption:"www.khanacademy.org",description:t,message:$._("I just learned about %(title)s on Khan Academy",{title:e})})})
return false},formatMailtoUrl:function(e){var t=e.subject
var a=e.body
var o="mailto:"+"?Subject="+encodeURIComponent(t)+"&Body="+encodeURIComponent(a)
return o.replace(/\s/g,"+")},emailBadge:function(e,t){return Social.formatMailtoUrl({subject:$._("I just earned the %(badge)s badge on Khan Academy!",{badge:t}),body:$._("Check it out at %(url)s.",{url:e})})},openTwitterPopup:function(e){var t=550,a=370,o=($(window).width()-t)/2,n=($(window).height()-a)/2,r="status=1"+",width="+t+",height="+a+",top="+n+",left="+o
window.open(e,"twitter",r)},formatTwitterShareUrl:function(e){var t=e.url
var a=e.text
var o="http://twitter.com/intent/tweet?"+"url="+encodeURIComponent(t)+"&text="+encodeURIComponent(a)+"&related=khanacademy:Khan Academy"
return o.replace(/\s/g,"+")},twitterBadge:function(e,t){return Social.formatTwitterShareUrl({url:e,text:$._("I just earned the %(badge)s badge on @khanacademy! Check it out at",{badge:t})})}}
module.exports=Social
});
KAdefine("javascript/shared-package/promos.js", function(require, module, exports) {
var $=require("jquery")
var Promos={}
Promos.cache_={}
Promos.hasUserSeen=function(o,e,r){if(o in Promos.cache_){e.call(r,Promos.cache_[o])
return}$.ajax({type:"GET",url:"/api/internal/user/promo/"+encodeURIComponent(o),success:function(n){Promos.cache_[o]=n
e.call(r,n)},error:function(){e.call(r,true)}})}
Promos.markAsSeen=function(o){$.ajax({type:"POST",url:"/api/internal/user/promo/"+encodeURIComponent(o)})
Promos.cache_[o]=true}
module.exports=Promos
});
KAdefine("javascript/shared-package/bigbingo.js", function(require, module, exports) {
var $=require("jquery")
var BigBingo={markConversions:function(n){return $.post("/api/internal/bigbingo/mark_conversions",{conversion_ids:n.join(",")})},markConversion:function(n){return this.markConversions([n])},abTest:function(n){return $.post("/api/internal/bigbingo/ab_test",{experiment_id:n})}}
window.BigBingo=BigBingo
module.exports=BigBingo
});
KAdefine("javascript/shared-package/throbber-grid.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(b,r,l,o,c){l=l||b.helpers
var i="",s,d=this
i+='<div class="throbber-grid">\n    '
i+='\n    <!--[if lte IE 9]>\n    <img class="throbber-fallback" src="/images/throbber-full.gif" />\n    <![endif]-->\n    <div class="throbber-row clearfix">\n         <div class="block-0 throbber-block"></div>\n         <div class="block-1 throbber-block"></div>\n         <div class="block-2 throbber-block"></div>\n    </div>\n    <div class="throbber-row clearfix">\n         <div class="block-7 throbber-block"></div>\n         <div class="block-8 throbber-block"></div>\n         <div class="block-3 throbber-block"></div>\n    </div>\n    <div class="throbber-row clearfix">\n         <div class="block-6 throbber-block"></div>\n         <div class="block-5 throbber-block"></div>\n         <div class="block-4 throbber-block"></div>\n    </div>\n</div>'
return i})
module.exports=t
});
KAdefine("javascript/shared-package/user-dropdown.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,a,o,e,r){o=o||n.helpers
var i="",l,s,f,t,c=this,h="function",p=o.helperMissing,u=void 0,d=this.escapeExpression,g=o.blockHelperMissing
function m(n,a){var e="",r
e+='<a class="nav-link log-in-link" href="'
f=o.loginUrl
r=f||n.loginUrl
if(typeof r===h){r=r.call(n,{hash:{}})}else if(r===u){r=p.call(n,"loginUrl",{hash:{}})}e+=d(r)+'">'
f=o["_"]
r=f||n["_"]
t=c.program(2,_,a)
t.hash={}
t.fn=t
t.inverse=c.noop
if(f&&typeof r===h){r=r.call(n,t)}else{r=g.call(n,r,t)}if(r||r===0){e+=r}e+="</a>"
return e}function _(n,a){return"Log in"}function v(n,a){return"with-coach-links"}function w(n,a){var e="",r
e+='\n        <li><a href="'
f=o.signUpUrl
r=f||n.signUpUrl
if(typeof r===h){r=r.call(n,{hash:{}})}else if(r===u){r=p.call(n,"signUpUrl",{hash:{}})}e+=d(r)+'" class="name-dropdown__link primary signup-to-claim">'
f=o["_"]
r=f||n["_"]
t=c.program(7,k,a)
t.hash={}
t.fn=t
t.inverse=c.noop
if(f&&typeof r===h){r=r.call(n,t)}else{r=g.call(n,r,t)}if(r||r===0){e+=r}e+="</a></li>\n        "
return e}function k(n,a){return"Sign up to claim your points"}function y(n,a){return"Profile"}function S(n,a){var e="",r
e+='\n            <li><a href="/?learn=1" class="name-dropdown__link dropdown-learning-home-link">\n                '
f=o["_"]
r=f||n["_"]
t=c.program(12,U,a)
t.hash={}
t.fn=t
t.inverse=c.noop
if(f&&typeof r===h){r=r.call(n,t)}else{r=g.call(n,r,t)}if(r||r===0){e+=r}e+="\n            </a></li>\n        "
return e}function U(n,a){return"Learning home"}function L(n,a){var e="",r,i
e+='\n            <li><a href="'
f=o.coachHomepageEnabled
r=f||n.coachHomepageEnabled
i=o["if"]
t=c.program(15,b,a)
t.hash={}
t.fn=t
t.inverse=c.program(17,H,a)
r=i.call(n,r,t)
if(r||r===0){e+=r}e+='" class="name-dropdown__link your-students-link students-dropdown-link">\n                '
f=o.hasStudents
r=f||n.hasStudents
i=o["if"]
t=c.program(19,C,a)
t.hash={}
t.fn=t
t.inverse=c.program(22,P,a)
r=i.call(n,r,t)
if(r||r===0){e+=r}e+='\n            </a></li>\n\n            <li><a href="/parent" class="name-dropdown__link name-dropdown__separator">\n            '
f=o.hasChildren
r=f||n.hasChildren
i=o["if"]
t=c.program(25,x,a)
t.hash={}
t.fn=t
t.inverse=c.program(28,M,a)
r=i.call(n,r,t)
if(r||r===0){e+=r}e+="\n            </a></li>\n        "
return e}function b(n,a){return"/coach/dashboard"}function H(n,a){return"/coach"}function C(n,a){var e="",r
e+="\n                    "
f=o["_"]
r=f||n["_"]
t=c.program(20,E,a)
t.hash={}
t.fn=t
t.inverse=c.noop
if(f&&typeof r===h){r=r.call(n,t)}else{r=g.call(n,r,t)}if(r||r===0){e+=r}e+="\n                "
return e}function E(n,a){return"Your students"}function P(n,a){var e="",r
e+="\n                    "
f=o["_"]
r=f||n["_"]
t=c.program(23,R,a)
t.hash={}
t.fn=t
t.inverse=c.noop
if(f&&typeof r===h){r=r.call(n,t)}else{r=g.call(n,r,t)}if(r||r===0){e+=r}e+="\n                "
return e}function R(n,a){return"Add students"}function x(n,a){var e="",r
e+="\n                "
f=o["_"]
r=f||n["_"]
t=c.program(26,A,a)
t.hash={}
t.fn=t
t.inverse=c.noop
if(f&&typeof r===h){r=r.call(n,t)}else{r=g.call(n,r,t)}if(r||r===0){e+=r}e+="\n            "
return e}function A(n,a){return"Your children"}function M(n,a){var e="",r
e+="\n                "
f=o["_"]
r=f||n["_"]
t=c.program(29,T,a)
t.hash={}
t.fn=t
t.inverse=c.noop
if(f&&typeof r===h){r=r.call(n,t)}else{r=g.call(n,r,t)}if(r||r===0){e+=r}e+="\n            "
return e}function T(n,a){return"Add children"}function Y(n,a){var e="",r
e+='\n        <li><a href="/settings/account" class="name-dropdown__link">'
f=o["_"]
r=f||n["_"]
t=c.program(32,q,a)
t.hash={}
t.fn=t
t.inverse=c.noop
if(f&&typeof r===h){r=r.call(n,t)}else{r=g.call(n,r,t)}if(r||r===0){e+=r}e+="</a></li>\n        "
return e}function q(n,a){return"Settings"}function z(n,a){return"Help"}function D(n,a){return"Log out"}f=o.isPhantom
l=f||a.isPhantom
s=o["if"]
t=c.program(1,m,r)
t.hash={}
t.fn=t
t.inverse=c.noop
l=s.call(a,l,t)
if(l||l===0){i+=l}i+='<span\n    id="user-notifications">'
i+='</span>\n\n<span class="name-dropdown dropdown">\n    <a href="#" class="username_and_notification dropdown-toggle">\n        <img class="user-avatar" src="'
f=o.avatarSrc
l=f||a.avatarSrc
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===u){l=p.call(a,"avatarSrc",{hash:{}})}i+=d(l)+'" alt="">\n        <span class="user-name">'
f=o.nickname
l=f||a.nickname
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===u){l=p.call(a,"nickname",{hash:{}})}i+=d(l)+'</span>\n        <i class="icon-caret-down" aria-hidden="true"></i>\n    </a>\n\n    <ul class="dropdown-menu no-submenus username-dropdown '
f=o.showCoachingLinks
l=f||a.showCoachingLinks
s=o["if"]
t=c.program(4,v,r)
t.hash={}
t.fn=t
t.inverse=c.noop
l=s.call(a,l,t)
if(l||l===0){i+=l}i+='">\n\n        '
f=o.showSignUpToSave
l=f||a.showSignUpToSave
s=o["if"]
t=c.program(6,w,r)
t.hash={}
t.fn=t
t.inverse=c.noop
l=s.call(a,l,t)
if(l||l===0){i+=l}i+='\n\n        <li><a href="'
f=o.profileRoot
l=f||a.profileRoot
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===u){l=p.call(a,"profileRoot",{hash:{}})}i+=d(l)+'" class="name-dropdown__link name-dropdown__separator">'
f=o["_"]
l=f||a["_"]
t=c.program(9,y,r)
t.hash={}
t.fn=t
t.inverse=c.noop
if(f&&typeof l===h){l=l.call(a,t)}else{l=g.call(a,l,t)}if(l||l===0){i+=l}i+="</a></li>\n\n        "
f=o.showLearningHome
l=f||a.showLearningHome
s=o["if"]
t=c.program(11,S,r)
t.hash={}
t.fn=t
t.inverse=c.noop
l=s.call(a,l,t)
if(l||l===0){i+=l}i+="\n\n        "
f=o.showCoachingLinks
l=f||a.showCoachingLinks
s=o["if"]
t=c.program(14,L,r)
t.hash={}
t.fn=t
t.inverse=c.noop
l=s.call(a,l,t)
if(l||l===0){i+=l}i+="\n\n        "
f=o.showSettings
l=f||a.showSettings
s=o["if"]
t=c.program(31,Y,r)
t.hash={}
t.fn=t
t.inverse=c.noop
l=s.call(a,l,t)
if(l||l===0){i+=l}i+='\n\n        <li><a href="https://khanacademy.zendesk.com" class="name-dropdown__link name-dropdown__separator">'
f=o["_"]
l=f||a["_"]
t=c.program(34,z,r)
t.hash={}
t.fn=t
t.inverse=c.noop
if(f&&typeof l===h){l=l.call(a,t)}else{l=g.call(a,l,t)}if(l||l===0){i+=l}i+='</a></li>\n\n        <!-- Facebook\'s JS logout requires the page_logout ID -->\n        <li><a id="page_logout" href="'
f=o.logoutUrl
l=f||a.logoutUrl
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===u){l=p.call(a,"logoutUrl",{hash:{}})}i+=d(l)+'" class="name-dropdown__link">'
f=o["_"]
l=f||a["_"]
t=c.program(36,D,r)
t.hash={}
t.fn=t
t.inverse=c.noop
if(f&&typeof l===h){l=l.call(a,t)}else{l=g.call(a,l,t)}if(l||l===0){i+=l}i+="</a></li>\n    </ul>\n</span>\n"
return i})
module.exports=t
});
KAdefine("javascript/shared-package/notifications-dropdown.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,o,i,e,l){i=i||n.helpers
var a="",s,t,r,c,f=this,u="function",p=i.helperMissing,h=void 0,d=this.escapeExpression,g=i.blockHelperMissing
function m(n,o){return"Notifications"}function v(n,o){var e="",l
e+=" ("
r=i["_"]
l=r||n["_"]
c=f.program(4,b,o)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===u){l=l.call(n,c)}else{l=g.call(n,l,c)}if(l||l===0){e+=l}e+=")"
return e}function b(n,o){var e="",l
r=i.count
l=r||n.count
if(typeof l===u){l=l.call(n,{hash:{}})}else if(l===h){l=p.call(n,"count",{hash:{}})}e+=d(l)+" new"
return e}function y(n,o){return"brand-new"}function w(n,o){return'style="display:none;"'}function _(n,o){return"Notifications"}function k(n,o){return"No notifications. You can get back to learning!"}a+='<span class="dropdown">\n    <a class="user-notifications-toggle dropdown-toggle nav-link user-notification" href="#" title="'
r=i["_"]
s=r||o["_"]
c=f.program(1,m,l)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof s===u){s=s.call(o,c)}else{s=g.call(o,s,c)}if(s||s===0){a+=s}r=i.count
s=r||o.count
t=i["if"]
c=f.program(3,v,l)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(o,s,c)
if(s||s===0){a+=s}a+='">\n        <span aria-hidden="true">\n        <i class="icon-bell-alt icon-large '
r=i.count
s=r||o.count
t=i["if"]
c=f.program(6,y,l)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(o,s,c)
if(s||s===0){a+=s}a+='">\n            <span class="notification-bubble" '
r=i.count
s=r||o.count
t=i.unless
c=f.program(8,w,l)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(o,s,c)
if(s||s===0){a+=s}a+=">"
r=i.count
s=r||o.count
if(typeof s===u){s=s.call(o,{hash:{}})}else if(s===h){s=p.call(o,"count",{hash:{}})}a+=d(s)+'</span>\n        </i>\n        <i class="icon-caret-down"></i>\n        </span>\n    </a>\n    <ul class="outer-dropdown-menu dropdown-menu unloaded">\n        <li class="notifications-heading">'
r=i["_"]
s=r||o["_"]
c=f.program(10,_,l)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof s===u){s=s.call(o,c)}else{s=g.call(o,s,c)}if(s||s===0){a+=s}a+='</li>\n        <li class="antiscroll-wrap">\n            <ul class="inner-dropdown-menu antiscroll-inner dropdown-menu no-submenus">\n                <li class="loading"><img src="/images/throbber.gif"></li>\n                <li class="empty" style="display: none;"><div>'
r=i["_"]
s=r||o["_"]
c=f.program(12,k,l)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof s===u){s=s.call(o,c)}else{s=g.call(o,s,c)}if(s||s===0){a+=s}a+="</div></li>\n            </ul>\n        </li>\n    </ul>\n</span>\n"
return a})
module.exports=t
});
KAdefine("javascript/shared-package/share-links.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,a,i,n,l){i=i||e.helpers
var s="",t,r,o,c=this,f="function",h=i.helperMissing,p=void 0,m=this.escapeExpression,v=i.blockHelperMissing
function k(e,a){return"Email"}function d(e,a){return"Tweet"}function u(e,a){return"Share"}s+='<div class="share-links" data-badge-name="'
r=i.name
t=r||a.name
if(typeof t===f){t=t.call(a,{hash:{}})}else if(t===p){t=h.call(a,"name",{hash:{}})}s+=m(t)+'">\n    <a class="emailShare" href="'
r=i.emailLink
t=r||a.emailLink
if(typeof t===f){t=t.call(a,{hash:{}})}else if(t===p){t=h.call(a,"emailLink",{hash:{}})}s+=m(t)+'" target="_blank">\n        <i class="icon-envelope"></i>\n        '
r=i["_"]
t=r||a["_"]
o=c.program(1,k,l)
o.hash={}
o.fn=o
o.inverse=c.noop
if(r&&typeof t===f){t=t.call(a,o)}else{t=v.call(a,t,o)}if(t||t===0){s+=t}s+='\n    </a>\n    <a class="twitterShare" href="'
r=i.twitterLink
t=r||a.twitterLink
if(typeof t===f){t=t.call(a,{hash:{}})}else if(t===p){t=h.call(a,"twitterLink",{hash:{}})}s+=m(t)+'" target="_blank">\n        <i class="icon-twitter"></i>\n        '
r=i["_"]
t=r||a["_"]
o=c.program(3,d,l)
o.hash={}
o.fn=o
o.inverse=c.noop
if(r&&typeof t===f){t=t.call(a,o)}else{t=v.call(a,t,o)}if(t||t===0){s+=t}s+='\n    </a>\n    <a class="facebookShare" href="javascript:void 0">\n        <i class="icon-facebook"></i>\n        '
r=i["_"]
t=r||a["_"]
o=c.program(5,u,l)
o.hash={}
o.fn=o
o.inverse=c.noop
if(r&&typeof t===f){t=t.call(a,o)}else{t=v.call(a,t,o)}if(t||t===0){s+=t}s+='\n    </a>\n	<div class="clearFloat"></div>\n</div>\n'
return s})
module.exports=t
});
KAdefine("javascript/shared-package/badge.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,a,i,n,t){i=i||e.helpers
var s="",l,c,d,o,r=this,h="function",f=i.helperMissing,p=void 0,v=this.escapeExpression
function g(e,a){return"achievement-badge-owned"}function m(e,a){var n="",t
n+='<div class="energy-points-badge">'
d=i.points
t=d||e.points
if(typeof t===h){t=t.call(e,{hash:{}})}else if(t===p){t=f.call(e,"points",{hash:{}})}n+=v(t)+"</div>"
return n}s+='<div class="achievement-badge category-'
d=i.badgeCategory
l=d||a.badgeCategory
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===p){l=f.call(a,"badgeCategory",{hash:{}})}s+=v(l)+" "
d=i.isOwned
l=d||a.isOwned
c=i["if"]
o=r.program(1,g,t)
o.hash={}
o.fn=o
o.inverse=r.noop
l=c.call(a,l,o)
if(l||l===0){s+=l}s+='" title="'
d=i.translatedSafeExtendedDescription
l=d||a.translatedSafeExtendedDescription
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===p){l=f.call(a,"translatedSafeExtendedDescription",{hash:{}})}s+=v(l)+'">\n  <div id="outline-box">\n  <img src="'
d=i.iconSrc
l=d||a.iconSrc
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===p){l=f.call(a,"iconSrc",{hash:{}})}s+=v(l)+'" id="badge-icon"/>\n  <div class="achievement-text">\n  <div class="achievement-title">'
d=i.translatedDescription
l=d||a.translatedDescription
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===p){l=f.call(a,"translatedDescription",{hash:{}})}s+=v(l)+'</div>\n  <div class="achievement-desc achievement-desc-no-count">\n    '
d=i.translatedSafeExtendedDescription
l=d||a.translatedSafeExtendedDescription
if(typeof l===h){l=l.call(a,{hash:{}})}else if(l===p){l=f.call(a,"translatedSafeExtendedDescription",{hash:{}})}s+=v(l)+"\n  </div>\n  </div>\n  "
d=i.points
l=d||a.points
c=i["if"]
o=r.program(3,m,t)
o.hash={}
o.fn=o
o.inverse=r.noop
l=c.call(a,l,o)
if(l||l===0){s+=l}s+="\n  </div>\n</div>\n"
return s})
module.exports=t
});
KAdefine("javascript/shared-package/progress-icon.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,s,a,l,t){a=a||e.helpers
var h="",i,n,p=this,r="function",o=a.helperMissing,c=void 0,f=this.escapeExpression
h+='\n<span class="progress-icon icon-'
n=a.type
i=n||s.type
if(typeof i===r){i=i.call(s,{hash:{}})}else if(i===c){i=o.call(s,"type",{hash:{}})}h+=f(i)+"-node "
n=a.key
i=n||s.key
if(typeof i===r){i=i.call(s,{hash:{}})}else if(i===c){i=o.call(s,"key",{hash:{}})}h+=f(i)+" "
n=a.extraClasses
i=n||s.extraClasses
if(typeof i===r){i=i.call(s,{hash:{}})}else if(i===c){i=o.call(s,"extraClasses",{hash:{}})}h+=f(i)+'"></span>\n\n'
return h})
module.exports=t
});
KAdefine("javascript/shared-package/progress-icon-subway.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,s,i,l,a){i=i||e.helpers
var t="",p,h,n=this,c="function",d=i.helperMissing,y=void 0,o=this.escapeExpression
t+='<div class="subway-icon '
h=i.key
p=h||s.key
if(typeof p===c){p=p.call(s,{hash:{}})}else if(p===y){p=d.call(s,"key",{hash:{}})}t+=o(p)+'">\n    <div class="pipe"></div>\n    <div class="pipe completed"></div>\n    <div class="status '
h=i.key
p=h||s.key
if(typeof p===c){p=p.call(s,{hash:{}})}else if(p===y){p=d.call(s,"key",{hash:{}})}t+=o(p)+" "
h=i.type
p=h||s.type
if(typeof p===c){p=p.call(s,{hash:{}})}else if(p===y){p=d.call(s,"type",{hash:{}})}t+=o(p)+'-node">\n    </div>\n</div>\n'
return t})
module.exports=t
});
KAdefine("javascript/shared-package/navbar.js", function(require, module, exports) {
var $=require("jquery")
var init=function(){var e=$(".homepage-header-ycla")
if($(window).width()>480){e.find("#header-logo, .watch-link, #user-info").on("mouseenter",function(){e.removeClass("header-transparent")})
e.on("mouseleave",function(){var a=!e.is(".header-active")&&e.find(".open").length===0
if(a){setTimeout(function(){if(!e.is(":hover")){e.addClass("header-transparent")}},1e3)}}).click(function(){e.addClass("header-active")})
$(window).click(function(a){var n=$(a.target).parents(".homepage-header-ycla")
if(n.length===0){e.removeClass("header-active").addClass("header-transparent")}})}}
module.exports=init
});
KAdefine("javascript/shared-package/video-transcript.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(t,a,e,s,i){e=e||t.helpers
var l="",n,r,o,f,h=this,m="function",p=e.helperMissing,c=void 0,u=this.escapeExpression
function d(t,a){var s="",i,l
s+="\n            "
o=e.kaIsValid
i=o||t.kaIsValid
l=e["if"]
f=h.program(2,v,a)
f.hash={}
f.fn=f
f.inverse=h.noop
i=l.call(t,i,f)
if(i||i===0){s+=i}s+="\n        "
return s}function v(t,a){var s="",i,l
s+='\n            <li data-milliseconds="'
o=e.startTime
i=o||t.startTime
if(typeof i===m){i=i.call(t,{hash:{}})}else if(i===c){i=p.call(t,"startTime",{hash:{}})}s+=u(i)+'">\n                <a href="javascript:void(0)" data-fmttime="'
o=e.startTime
i=o||t.startTime
o=e.formatTimestamp
l=o||t.formatTimestamp
if(typeof l===m){i=l.call(t,i,{hash:{}})}else if(l===c){i=p.call(t,"formatTimestamp",i,{hash:{}})}else{i=l}s+=u(i)+'">'
o=e.text
i=o||t.text
if(typeof i===m){i=i.call(t,{hash:{}})}else if(i===c){i=p.call(t,"text",{hash:{}})}s+=u(i)+"</a>\n            </li>\n            "
return s}l+='<div class="subtitles-container desktop-only">\n    <ul itemprop="transcript" class="subtitles">\n        '
o=e.subtitles
n=o||a.subtitles
r=e.each
f=h.program(1,d,i)
f.hash={}
f.fn=f
f.inverse=h.noop
n=r.call(a,n,f)
if(n||n===0){l+=n}l+="\n    </ul>\n</div>\n"
return l})
module.exports=t
});
KAdefine("javascript/shared-package/handlebars-extras.js", function(require, module, exports) {
var $=require("jquery")
var Handlebars=require("handlebars")
var _=require("underscore")
var icu=require("icu")
var Autolink=require("./autolink.js")
var KA=require("./ka.js")
var i18n=require("./i18n.js").i18n
Handlebars.registerHelper("opttr",function(e){var r=[]
_.each(e.hash,function(e,t){if(e!==null&&e!==undefined){r.push(t+'="'+Handlebars.Utils.escapeExpression(e)+'"')}})
return new Handlebars.SafeString(r.join(" "))})
Handlebars.registerHelper("debug",function(e,r){console.log("Handlebars debug: ",e)})
Handlebars.registerHelper("repeat",function(e,r){var t=r.fn
var n=""
for(var a=0;a<e;a++){n=n+t(this)}return n})
Handlebars.registerHelper("eachWithMidpoint",function(e,r){var t=[]
var n=r.fn
if(e){var a=Math.floor((e.length+1)/2)
for(var i=0;i<e.length;i++){e[i]["midpoint"]=i===a
t.push(n(e[i]))}}return t.join("")})
var serialCommafy=function(e,r){if(!_.isArray(e)){return r}var t=e.length
if(t===0){return r}else if(t===1){return e[0].toString()}else if(t===2){return $._("%(item1)s and %(item2)s",{item1:e[0].toString(),item2:e[1].toString()})}else{return $._("%(items_with_commas)s, and %(last_item)s",{items_with_commas:e.slice(0,t-1).join(", "),last_item:e[t-1].toString()})}}
Handlebars.registerHelper("serialCommafy",serialCommafy)
Handlebars.registerHelper("_",i18n.handlebars_underscore)
Handlebars.registerHelper("i18nDoNotTranslate",i18n.handlebars_do_not_translate)
Handlebars.registerHelper("ngettext",i18n.handlebars_ngettext)
Handlebars.registerHelper("reverseEach",function(e,r){var t=""
for(var n=e.length-1;n>=0;n--){t+=r(e[n])}return t})
var getPartial=function(e,r){return KAdefine.require("./javascript/"+e+"-package/"+r+".handlebars")}
Handlebars.registerHelper("invokePartial",function(e,r,t){return getPartial(e,r)(t.hash)})
var origInvokePartial=Handlebars.VM.invokePartial
Handlebars.VM.invokePartial=function(e,r){var t=Array.prototype.slice.apply(arguments)
if(e===undefined){var n=r.split("_")
if(n.length>=2){var a=n[0]
var i=n.slice(1).join("_")
t[0]=getPartial(a,i)}}return origInvokePartial.apply(this,t)}
Handlebars.registerHelper("multiply",function(e,r){return e*r})
Handlebars.registerHelper("toLoginRedirectHref",function(e){return"/login?continue="+encodeURIComponent(e)})
Handlebars.registerHelper("commafy",function(e){return icu.getIntegerFormat().format(e)})
Handlebars.registerHelper("ellipsis",function(e,r){var t=(e||"").replace(/(<([^>]+)>)/gi,"")
if(t.length<r){return t}else{return t.substr(0,r-3)+"..."}})
var formatTimestamp_=function(e,r,t){var n=60*parseInt(r,10)+parseInt(t,10)
return"<span class='youTube' data-seconds='"+n+"'>"+e+"</span>"}
var formatContent=function(e,r){e=Handlebars.Utils.escapeExpression(e)
var t=/(\d{1,3}):([0-5]\d)/g
e=e.replace(t,formatTimestamp_)
var n=/[\n]/g
e=e.replace(n,"<br>")
e=e.replace(/(\W|^)_(\S.*?\S)_(\W|$)/g,function(e,r,t,n){return r+"<em>"+t+"</em>"+n})
e=e.replace(/(\W|^)\*(\b.*?\b)\*(\W|$)/g,function(e,r,t,n){return r+"<b>"+t+"</b>"+n})
e=e.replace(/&#x60;&#x60;&#x60;(.*?)&#x60;&#x60;&#x60;/gm,function(e,r){r=r.replace(/^\s*(<br>)+/,"")
r=r.replace(/(<br>)+\s*$/,"")
return"<pre><code>"+r+"</code></pre>"})
e=e.replace(/&#x60;(.*?)&#x60;/g,function(e,r){return"<code>"+r+"</code>"})
e=Autolink.autolink(e,r)
return e}
Handlebars.registerHelper("formatContent",function(e,r){return new Handlebars.SafeString(formatContent(e,!!(r&&r.hash.nofollow)))})
Handlebars.registerHelper("formatEvalAnswer",function(e,r){var t=$($.parseHTML(e))
var n=$.makeArray(t.filter("li:not(.pass)"))
var a=$("<div class='eval-guideline'>")
$("<div class='eval-title'>").text(n.length===0?$._("This project has passed evaluation."):$._("This project needs more work.")).appendTo(a)
var i=t.filter(".overall-eval-info").text()
var s=formatContent(i,true)
if(i.length>0){var o=$("<div class='more-info'>")
o.append($("<strong>").text($._("From the evaluator:"))).append($("<div>").html(s)).appendTo(a)}if(n.length>0){$("<div class='failed-objectives'>").append($("<strong>").text($._("The following objectives need more work:"))).appendTo(a)
var l=$("<ul class='styled-list'>").appendTo(a)
n.map(function(e,r){var t=$(e).find("div")
var n=formatContent(t.text(),true)
var a=t.text().length>0?$("<div class='objective-more-info'>").html(n):[]
t.empty()
var i=$("<li></li>")
i.append($("<strong>").text($(e).text())).append(a)
i.appendTo(l)})}return new Handlebars.SafeString(a[0].outerHTML)})
Handlebars.registerHelper("arrayLength",function(e){return e.length})
Handlebars.registerHelper("ifLoggedIn",function(e){if(KA.getUserProfile()&&!KA.getUserProfile().isPhantom()){return e.fn(this)}else{return e.inverse(this)}})
Handlebars.registerHelper("ifPhantom",function(e){if(!KA.getUserProfile()||KA.getUserProfile().isPhantom()){return e.fn(this)}else{return e.inverse(this)}})
Handlebars.registerHelper("urlencode",function(e){return encodeURIComponent(e)})
Handlebars.registerHelper("formatTimestamp",function(e){var r=e/1e3
var t=parseInt(r)%60
if(t<10){t="0"+t}return parseInt(r/60)+":"+t})
Handlebars.registerHelper("videoOrigin",function(){return window.location.origin})
Handlebars.registerHelper("youtubeLoadPolicyParam",function(e){if(["S4iQ46ISqRQ","yC3vsJJIcE0","yIQUhXa-n-M","v_OfFmMRvOc","G7WyEp8gHs0","765X_PAxhAw","CDmJL-VNlaM","u7dhn-hBHzQ","AuX7nPBqDts","aNqG4ChKShI","b22tMEc6Kko","27Kp7HJYj2c","9Ek61w1LxSc","DqeMQHomwAU","VidnbCEOGdg","9DxrF6Ttws4","gM95HHI4gLk"].indexOf(e)!==-1){return"&iv_load_policy=3"}else{return""}})
var stripProtocol=function(e){if(!e){return e}if(e.indexOf("http://")===0){return e.substring(5)}else if(e.indexOf("https://")===0){return e.substring(6)}return e}
Handlebars.registerHelper("stripProtocol",stripProtocol)
module.exports={formatContent:formatContent,serialCommafy:serialCommafy,stripProtocol:stripProtocol}
});
KAdefine("javascript/shared-package/location-model.js", function(require, module, exports) {
var Backbone=require("backbone")
var _=require("underscore")
var LocationModel=Backbone.Model.extend({defaults:{lastModified:"",displayText:"",city:"",state:"",country:"",googlePlacesId:"",postalCode:"",latLng:{lat:null,lng:null}},setToDefault:function(){this.set(_.clone(this.defaults))}})
module.exports=LocationModel
});
KAdefine("javascript/shared-package/eduorg-models.js", function(require, module, exports) {
var Backbone=require("backbone")
var AffiliationModel=Backbone.Model.extend({url:"/api/internal/user/profile/affiliations",defaults:{eduorgKeyId:"",eduorgName:"",eduorgPostalCode:"",eduorgLocationText:"",role:null}})
var Affiliations=Backbone.Collection.extend({model:AffiliationModel})
exports.AffiliationModel=AffiliationModel
exports.Affiliations=Affiliations
});
KAdefine("javascript/shared-package/profile-model.js", function(require, module, exports) {
var $=require("jquery")
var Backbone=require("backbone")
var _=require("underscore")
require("./i18n.js")
var KA=require("./ka.js")
var ProfileModel=Backbone.Model.extend({defaults:{affiliations:[],avatarName:"darth",avatarSrc:"/images/darth.png",backgroundName:"",backgroundSrc:"",bio:"",userLocation:null,countVideosCompleted:0,dateJoined:"",email:"",isCoachingLoggedInUser:false,isParentOfLoggedInUser:false,isActivityAccessible:false,nickname:"",points:0,username:"",isDataCollectible:false,isSelf:false,isPublic:false,isCreator:false,isCurator:false,isPublisher:false,followRequiresApproval:true,canModifyCoaches:true},url:"/api/internal/user/profile",isPhantom:function(){return this.get("isPhantom")},isCurrentUser:function(){return KA.getUserProfile()&&KA.getUserProfile().get("userKey")===this.get("userKey")},initialize:function(e,t){Backbone.Model.prototype.initialize.call(this,e,t)
this._ensureAttrsAreSubmodels()
var i=_.map(ProfileModel.SUBMODEL_ATTRS,function(e){return"change:"+e}).join(" ")
this.on(i,this._ensureAttrsAreSubmodels,this)},locationFormatted:function(){var e=this.get("userLocation")
return e&&e.get("displayText")||""},usernameFormatted:function(){var e=this.get("username")
return e?"@"+e:""},_ensureAttrsAreSubmodels:function(e){var t=require("../shared-package/eduorg-models.js").AffiliationModel
var i=require("../shared-package/eduorg-models.js").Affiliations
var s=require("../shared-package/location-model.js")
var a={}
var r=this.get("userLocation")
if(!(r instanceof s)){a["userLocation"]=new s(r)}var n=this.get("affiliations")
if(!n||!n.length){n=[new t]}if(!(n instanceof i)){a["affiliations"]=new i(n)}this.set(a,{silent:true})},isPrivate:function(){return this.get("isActivityAccessible")===false&&this.get("isPublic")===false},isActivityAccessible:function(){return this.get("isActivityAccessible")},getIdentifier:function(){return this.get("username")||this.get("email")},isEditable:function(){return this.get("isSelf")&&!this.isPhantom()},isFullyEditable:function(){return this.isEditable()&&this.get("isDataCollectible")},isSal:function(){return this.get("username")==="sal"},toJSON:function(){var e=ProfileModel.__super__.toJSON.call(this)
_.each(ProfileModel.COMPUTED_ATTRS,function(t){e[t]=this[t].call(this)},this)
_.each(ProfileModel.SUBMODEL_ATTRS,function(t){e[t]=this.get(t).toJSON()},this)
return e},getIfUndefined:function(e,t){if(e&&e[t]!==undefined){return e[t]}return this.get(t)},save:function(e,t){t=t||{}
t.contentType="application/json"
t.data=JSON.stringify({userKey:this.getIfUndefined(e,"userKey"),avatarName:this.getIfUndefined(e,"avatarName"),bio:this.getIfUndefined(e,"bio"),backgroundName:this.getIfUndefined(e,"backgroundName"),nickname:$.trim(this.getIfUndefined(e,"nickname")),username:this.getIfUndefined(e,"username"),isPublic:this.getIfUndefined(e,"isPublic"),userLocation:this.getIfUndefined(e,"userLocation"),affiliations:this.getIfUndefined(e,"affiliations")})
var i=t.success
t.success=function(e,t){e.trigger("savesuccess")
if(i){i(e,t)}}
Backbone.Model.prototype.save.call(this,e,t)},storeState:function(){var e=this.toJSON()
this._storedAttrs=_.omit(e,ProfileModel.COMPUTED_ATTRS)},restoreState:function(){var e=_.omit(this._storedAttrs,ProfileModel.SUBMODEL_ATTRS)
this.set(e)
var t=_.pick(this._storedAttrs,ProfileModel.SUBMODEL_ATTRS)
_.each(t,function(e,t){this.get(t).set(e)},this)},fetchFull:function(){if(this.get("includesUserDataInfo")){var e=new $.Deferred
return e.resolve().promise()}return $.ajax({type:"GET",url:"/api/internal/user/profile",data:{casing:"camel",userKey:this.get("userKey")},dataType:"json",success:function(e){if(e){this.set(e)}}.bind(this)})},parse:function(e,t){if("apiActionResults"in e&&"payload"in e){e=e["payload"]}Backbone.Model.prototype.parse.call(this,e,t)},validateNickname:function(e){this.trigger("validate:nickname",$.trim(e).length>0)},validateUsername:function(e){if(e===this.get("username")){this.trigger("validate:username")
return}e=e.toLowerCase().replace(/\./g,"")
if(/^[a-z][a-z0-9]{2,}$/.test(e)){$.ajax({url:"/api/internal/user/username_available",type:"GET",data:{username:e},dataType:"json",success:_.bind(this.onValidateUsernameResponse_,this)})}else{var t=""
if(e.length<3){t=$._("Too short.")}else if(/^[^a-z]/.test(e)){t=$._("Start with a letter.")}else{t=$._("Letters and numbers only.")}this.trigger("validate:username",t,false)}},onValidateUsernameResponse_:function(e){var t=e?$._("Looks good!"):$._("Not available.")
this.trigger("validate:username",t,e)}},{COMPUTED_ATTRS:["isEditable","isFullyEditable","isSal","locationFormatted","usernameFormatted"],SUBMODEL_ATTRS:["userLocation","affiliations"]})
module.exports=ProfileModel
});
KAdefine("javascript/shared-package/youtube-iframe-player.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(a,e,t,l,i){t=t||a.helpers
var n="",o,s,r,h,u=this,d="function",f=t.helperMissing,c=void 0,p=this.escapeExpression
function y(a,e){var l="",i
l+='\n    data-topicid="'
r=t.topicId
i=r||a.topicId
if(typeof i===d){i=i.call(a,{hash:{}})}else if(i===c){i=f.call(a,"topicId",{hash:{}})}l+=p(i)+'"\n    '
return l}function b(a,e){return"1"}function g(a,e){return"0"}function m(a,e){var l="",i
l+='\n<div class="larger-play-button '
r=t.playButtonSize
i=r||a.playButtonSize
if(typeof i===d){i=i.call(a,{hash:{}})}else if(i===c){i=f.call(a,"playButtonSize",{hash:{}})}l+=p(i)+'"></div>\n'
return l}n+='<iframe\n    class="player"\n    type="text/html"\n    width="'
r=t.width
o=r||e.width
if(typeof o===d){o=o.call(e,{hash:{}})}else if(o===c){o=f.call(e,"width",{hash:{}})}n+=p(o)+'"\n    height="'
r=t.height
o=r||e.height
if(typeof o===d){o=o.call(e,{hash:{}})}else if(o===c){o=f.call(e,"height",{hash:{}})}n+=p(o)+'"\n    data-youtubeid="'
r=t.youtubeId
o=r||e.youtubeId
if(typeof o===d){o=o.call(e,{hash:{}})}else if(o===c){o=f.call(e,"youtubeId",{hash:{}})}n+=p(o)+'"\n    data-translatedyoutubeid="'
r=t.translatedYoutubeId
o=r||e.translatedYoutubeId
if(typeof o===d){o=o.call(e,{hash:{}})}else if(o===c){o=f.call(e,"translatedYoutubeId",{hash:{}})}n+=p(o)+'"\n    data-translatedyoutubelang="'
r=t.translatedYoutubeLang
o=r||e.translatedYoutubeLang
if(typeof o===d){o=o.call(e,{hash:{}})}else if(o===c){o=f.call(e,"translatedYoutubeLang",{hash:{}})}n+=p(o)+'"\n    '
r=t.topicId
o=r||e.topicId
s=t["if"]
h=u.program(1,y,i)
h.hash={}
h.fn=h
h.inverse=u.noop
o=s.call(e,o,h)
if(o||o===0){n+=o}n+='\n    src="https://www.youtube.com/embed/'
r=t.translatedYoutubeId
o=r||e.translatedYoutubeId
if(typeof o===d){o=o.call(e,{hash:{}})}else if(o===c){o=f.call(e,"translatedYoutubeId",{hash:{}})}n+=p(o)+"?enablejsapi=1&wmode=transparent&modestbranding=1&rel=0&fs=1&showinfo="
r=t.isEmbedded
o=r||e.isEmbedded
s=t["if"]
h=u.program(3,b,i)
h.hash={}
h.fn=h
h.inverse=u.program(5,g,i)
o=s.call(e,o,h)
if(o||o===0){n+=o}n+="&origin="
r=t.videoOrigin
o=r||e.videoOrigin
if(typeof o===d){o=o.call(e,{hash:{}})}else if(o===c){o=f.call(e,"videoOrigin",{hash:{}})}n+=p(o)
r=t.translatedYoutubeId
o=r||e.translatedYoutubeId
r=t.youtubeLoadPolicyParam
s=r||e.youtubeLoadPolicyParam
if(typeof s===d){o=s.call(e,o,{hash:{}})}else if(s===c){o=f.call(e,"youtubeLoadPolicyParam",o,{hash:{}})}else{o=s}n+=p(o)+'"\n    frameborder="0"\n    allowfullscreen\n    webkitallowfullscreen\n    mozallowfullscreen\n ></iframe>\n '
n+="\n"
r=t.showLargerPlayButton
o=r||e.showLargerPlayButton
s=t["if"]
h=u.program(7,m,i)
h.hash={}
h.fn=h
h.inverse=u.noop
o=s.call(e,o,h)
if(o||o===0){n+=o}n+="\n"
return n})
module.exports=t
});
KAdefine("javascript/shared-package/poppler.js", function(require, module, exports) {
var _=require("underscore")
var KAConsole=require("./console.js")
var Poppler=function(){function e(){this.events=[]
this.duration=-1
this.eventIndex=0
this.indicesById={}
this.began=false
this.blocked=false
_.bindAll(this)}e.timeFn=function(e){return e.time}
e.nextPeriod=function(e,t){return Math.round(Math.floor(e/t+1))*t}
e.prototype.add=function(t,i,n){i.time=t
i.id=n
var s=_.sortedIndex(this.events,i,e.timeFn)
while(this.events[s]&&this.events[s].time===t){s++}this.events.splice(s,0,i)}
e.prototype.begin=function(){this.began=true
this.indicesById=_.reduce(this.events,function(e,t,i){e[t.id]=i
return e},{})}
e.prototype.trigger=function t(e){if(!this.began){this.begin()}if(this.blocked){return}if(this.duration!==-1){var t=e-this.duration
var i=.001
if(Math.abs(t)<i){return}var n=1
if(Math.abs(t)>n){return}}this.duration=e
this._triggerEvents()}
e.prototype._triggerEvents=function(){var e=this.eventIndex
while(this.events[this.eventIndex]&&this.events[this.eventIndex].time<=this.duration){var t=this.events[this.eventIndex]()
this.eventIndex++
if(t){this.blocked=true
break}}return e!==this.eventIndex}
e.prototype.resumeEvents=function(){this.blocked=false
return this._triggerEvents()}
e.prototype.seek=function(t){if(!this.began){this.begin()}this.duration=t
this.eventIndex=_.sortedIndex(this.events,{time:this.duration},e.timeFn)
KAConsole.log("Poppler.seek, duration:",this.duration,"eventIndex:",this.eventIndex)}
e.prototype.seekToId=function(e){if(!this.began){this.begin()}var t=this.indicesById[e]
if(t==null){throw new Error("No event found with id"+e)}var i=this.events[t]
this.duration=i.time
this.eventIndex=t
KAConsole.log("Poppler.seekToId, duration:",this.duration,"eventIndex:",this.eventIndex)}
return e}()
module.exports=Poppler
});
KAdefine("javascript/shared-package/jquery.delayload.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
$.fn.inView=function(e){var r=$(this)
if(!r.is(":visible")){return false}var a=$(window).height()
var t=window.pageYOffset||document.documentElement.scrollTop
var n=r.offset().top
e=e||0
if(t+a+e>n){return true}return false}
$.fn.delayLoad=function(e,r){var a=$(this)
if(a.data("delayed-bgimage")&&a.css("background-image")==="none"&&a.inView(e)){_.defer(function(){a.css("background-image","url("+a.data("delayed-bgimage")+")")})
return true}if(a.data("delayed-src")&&(!a.attr("src")||a.attr("src")==="about:blank")&&a.inView(e)){_.defer(function(){a.attr("src",a.data("delayed-src"))})
return true}if(_.isFunction(r)&&a.inView(e)&&!a.data("hasAppended")){a.data("hasAppended",true)
_.defer(function(){r(a)})
return true}return false}
});
KAdefine("javascript/shared-package/background-video.js", function(require, module, exports) {
var $=require("jquery")
var resizeVideo=function(e,a){var r=a.height
var n=a.width
var d=n/r
var i=$(e)
var t=i.parent().innerHeight()+5
var s=i.parent().innerWidth()
var o=s/t
var v
var h
if(d<=o){v=s
h=s/d}else{h=t
v=t*d}i.css({height:h,left:s/2-v/2,top:t/2-h/2,width:v})
if(!i.data("isShown")){i.data("isShown",true)
i.css("z-index",0)
e.play()}}
var addBackgroundAndListeners=function(e,a){var r=$.parseHTML(a.element)[0]
var n=$(a.element)
var d=function(){if(r.readyState>=2){resizeVideo(r,a)}}
n.on("loadeddata",d)
e.append(r)
$(window).resize(d)}
module.exports={addBackgroundAndListeners:addBackgroundAndListeners}
});
KAdefine("javascript/shared-package/nav-header.js", function(require, module, exports) {
var $=require("jquery")
var React=require("react")
var _=require("underscore")
require("./i18n.js")
var HeaderTopicBrowser=require("../shared-package/header-topic-browser.js")
var KA=require("./ka.js")
var bindSignupLink=require("./bind-signup-link.js")
var updateDocumentTitle=require("./update-document-title.js")
var NavHeader={_renderedUserDropdown:false,_renderedNotificationsDropdown:false,searchBox:null,activeMission:null,searchBoxGuider:null,init:function(e){this._userDropdownContext=_.extend({showSignUpToSave:true,showSettings:false},e)
bindSignupLink($(".sign-up-link"))
updateDocumentTitle()
var r=$("#search-box input")
r.one("mouseover focus keydown touchstart",function(){this.renderSearchBox()}.bind(this))},renderSearchBox:function(){require.async(["../typeahead-package/search-bar.jsx","../typeahead-package/build-mission-source.js","../typeahead-package/search-source.js","../typeahead-package/suggestion-source.js","package!typeahead.css"],function(e,r,i,o){e=React.createFactory(e)
var n=false
var t=""
var a=0
var s=0
var d=!this.searchBox
var c=$._("Search for subjects, skills, and videos")
if(d){var u=$("#search-box input")
n=u.is(":focus")
t=u.val()
if(t===c){t=""}a=u[0].selectionStart
s=u[0].selectionEnd}var h={searchSuggestion:o,search:i}
if(this.activeMission){h["mission"]=r(this.activeMission)}this.searchBox=React.render(e({placeholder:$._("Search for subjects, skills, and videos"),dataSources:h,initiallyFocused:n,initialQuery:t,initialSelectionStart:a,initialSelectionEnd:s,guider:this.searchBoxGuider,onFocus:function(){return this.hideSearchGuider()}.bind(this)}),$("#search-box")[0])}.bind(this))},setActiveMission:function(e){this.activeMission=e
if(this.searchBox){this.renderSearchBox()}},showSearchGuider:function(){$("html, body").animate({scrollTop:0},function(){require.async(["../react-guiders-package/guider.jsx"],function(e){e=React.createFactory(e)
var r
if(this.activeMission){var i=this.activeMission.get("translatedTitle")
r=$._("You can search all of Khan Academy here to "+"find what you want to learn. If you choose a "+"skill from %(missionTitle)s, it will be added "+"to your learning dashboard and opened here.",{missionTitle:i})}if(!r){r=$._("Remember you can always search all of "+"Khan Academy if what you're looking for "+"is elsewhere.")}var o=$("#search-box")[0].getBoundingClientRect()
this.searchBoxGuider=e({boundingBox:o,position:6,content:React.DOM.div({className:"dashboard-search-callout"},r),onDismissed:function(){return this.hideSearchGuider()}.bind(this)})
this.renderSearchBox()}.bind(this))}.bind(this))},hideSearchGuider:function(){this.searchBoxGuider=null
this.renderSearchBox()},_userDropdownContext:null,renderNotificationsDropdown:function(){if(this._renderedNotificationsDropdown){return}var e=KA.getUserProfile(),r=e?e.get("countBrandNewNotifications"):0
$("#user-notifications").html(require("./notifications-dropdown.handlebars")({count:r}))
HeaderTopicBrowser.initDropdownBehavior($("#user-info").find(".dropdown-toggle"))
this._renderedNotificationsDropdown=true},renderUserDropdown:function(e){if(this._renderedUserDropdown){return}if(!this._userDropdownContext){return}var r=KA.getUserProfile()
if(!r){return}e=e||{}
var i=r.isPhantom()
if(i){r.set("nickname",$._("Unclaimed points"))}var o=require("./user-dropdown.handlebars"),n={isPhantom:i,avatarSrc:r.get("avatarSrc"),nickname:r.get("nickname")}
_.extend(this._userDropdownContext,n,e)
if(!this._userDropdownContext["profileRoot"]){this._userDropdownContext["profileRoot"]=r.get("profileRoot")}$("#user-info").html(o(this._userDropdownContext))
HeaderTopicBrowser.initDropdownBehavior($("#user-info").find(".dropdown-toggle"))
bindSignupLink($("#user-info .signup-to-claim"),function(){HeaderTopicBrowser.closeTopLevelDropdown()})
this._renderedUserDropdown=true}}
module.exports=NavHeader
});
KAdefine("javascript/shared-package/header-topic-browser.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
require("../../third_party/javascript-khansrc/bootstrap-dropdown/dropdown.js")
require("../../third_party/javascript-khansrc/jQuery-menu-aim/jquery.menu-aim.js")
var KA=require("../shared-package/ka.js")
var ExerciseProgressUtils=require("../mobile-shared-package/exercise-progress-utils.js")
var dropExtraAjaxValues=function(e,r,a){return e}
var fetchMissionPercentages=_.once(function(){return $.when($.ajax({url:"/api/internal/user/missions/progress_info?casing=camel"}).then(dropExtraAjaxValues),$.ajax({url:"/api/internal/user/dashboard_options?casing=camel"}).then(dropExtraAjaxValues)).then(function(e,r){var a={}
e.forEach(function(e){var o=ExerciseProgressUtils.getCountPerLevel(e.progressInfo)
var n=ExerciseProgressUtils.getProgressPercentage(r,o)
a[e.slug]=n})
return a})})
function fetchAndDisplayMissionPercentages(){var e=$(".topic-browser-menu")
var r=e.find("[data-mission-slug] .topic-browser-mission-percentage")
var a=KA.getUserProfile()
if(!a||a.get("isPhantom")){r.hide()
return}fetchMissionPercentages().then(function(e){r.each(function(){var r=$(this).closest("[data-mission-slug]").data("missionSlug")
if(e[r]!=null){$(this).text("("+e[r]+"%)")}})})}var HeaderTopicBrowser={init:function(){this.initDropdownBehavior($("#top-header").find(".dropdown-toggle"))
$(".nav-subheader .topic-browser-menu").menuAim({submenuSelector:".has-submenu",activate:function(e){var r=$(e)
var a=$(".hover-active")
if(r.hasClass("has-submenu")){a.removeClass("hover-active")
var o="wide-learn-menu-background-container"
var n=$("."+o)
if(n.hasClass("on-welcome")){o+=" on-welcome"}o+=" "+r.data("domainSlug")
$(".wide-learn-menu-background-container").removeClass().addClass(o)}else{a.filter(function(){return!$(this).hasClass("has-submenu")}).removeClass("hover-active")}r.addClass("hover-active")}})},_$activeDropdown:null,closeTopLevelDropdown:function(){if(this._$activeDropdown){this._$activeDropdown.dropdown("close")
this._$activeDropdown=null}},initDropdownBehavior:function(e){e=e.not("[data-hasDropdownBehavior]")
e.dropdown().on("close",function(e){var r=$(e.target).parents(".watch-link")
var a=r.length!==0
if(a){if(r.hasClass("on-welcome-and-close")||!r.hasClass("on-welcome")){$(".wide-learn-menu-background-container").hide().removeClass().addClass("wide-learn-menu-background-container")
r.find(".dropdown-menu").find(".hover-active").removeClass("hover-active")}}}).on("open",function(e){HeaderTopicBrowser.closeTopLevelDropdown()
HeaderTopicBrowser._$activeDropdown=$(e.target)
var r=$(e.target).parents(".watch-link")
var a=r.length!==0
if(a){$(".topic-browser-menu").find(".level0.math").addClass("hover-active")
var o="math"
if(r.hasClass("on-welcome")){o+=" on-welcome"}$(".wide-learn-menu-background-container").show().addClass(o)
fetchAndDisplayMissionPercentages()}}).end().siblings(".dropdown-menu").click(function(e){e.stopPropagation()}).end().attr("data-hasDropdownBehavior",true).attr("role","button").attr("aria-haspopup","true")}}
module.exports=HeaderTopicBrowser
});
KAdefine("javascript/shared-package/nav-footer.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js")
var $=require("jquery")
var _=require("underscore")
require("./jquery.delayload.js")
var KA=require("./ka.js")
var NavFooter={init:function(){if(!KA.isMobileCapable){var e=$("footer li.heading:first-child")
e.addClass("footer-scroll-cue")
e.on("click",function(){var e=$(document).height()-$(window).height()
$("html, body").animate({scrollTop:e},360,"easeInOutCubic")})}var r=function(e){$("#footer [data-delayed-src]").each(function(){if($(this).delayLoad(e)){$(window).off("scroll.load-footer-image")}})}
$(window).on("scroll.load-footer-image",_.throttle(function(){r(200)},300))
r()}}
module.exports=NavFooter
});
KAdefine("third_party/javascript-khansrc/Guiders-JS/guiders.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../jquery/jquery.js");
window.guiders=function($){var e={}
e.ButtonAction={NEXT:0,CLOSE:1}
e._defaultSettings={attachTo:null,buttons:[{action:e.ButtonAction.CLOSE,text:"Close"}],buttonCustomHTML:"",classString:null,description:"",highlight:null,isHashable:true,offset:{top:null,left:null},onShow:null,overlay:false,position:0,title:"Sample title goes here",width:400,xButton:false}
e._htmlSkeleton=["<div class='guider'>","  <div class='guider_content'>","    <div class='guider_title'></div>","    <div class='guider_close'></div>","    <div class='guider_description'></div>","    <div class='guider_buttons'>","    </div>","  </div>","  <div class='guider_arrow'>","  </div>","</div>"].join("")
e._arrowSize=42
e._currentGuiderID=null
e._guiders={}
e._lastCreatedGuiderID=null
e._zIndexForHighlight=1031
e._addButtons=function(i){var t=i.elem.find(".guider_buttons")
if(i.buttons===null||i.buttons.length===0){t.remove()
return}for(var r=i.buttons.length-1;r>=0;r--){var n=i.buttons[r]
var o=$("<a></a>",{"class":"ka_guider_button",text:n.text})
if(typeof n.classString!=="undefined"&&n.classString!==null){o.addClass(n.classString)}t.append(o)
if(n.onclick){o.bind("click",n.onclick)}else if(!n.onclick&&n.action===e.ButtonAction.CLOSE){o.bind("click",function(){e.hideAll()})}else if(!n.onclick&&n.action===e.ButtonAction.NEXT){o.bind("click",function(){e.next()})}}if(i.buttonCustomHTML!==""){var d=$(i.buttonCustomHTML)
i.elem.find(".guider_buttons").append(d)}if(i.buttons.length==0){t.remove()}}
e._addXButton=function(i){var t=i.elem.find(".guider_close")
var r=$("<div></div>",{"class":"x_button",role:"button"})
t.append(r)
r.click(function(){e.hideAll()})}
e._attach=function(i){if(i===null){return}var t=i.elem.innerHeight()
var r=i.elem.innerWidth()
if(i.position===0||i.attachTo===null){i.elem.css("position","absolute")
i.elem.css("top",($(window).height()-t)/3+$(window).scrollTop()+"px")
i.elem.css("left",($(window).width()-r)/2+$(window).scrollLeft()+"px")
return}i.attachTo=$(i.attachTo)
var n=i.attachTo.offset()
var o=i.attachTo.innerHeight()
var d=i.attachTo.innerWidth()
var l=n.top
var u=n.left
var a=.9*e._arrowSize
var s={1:[-a-t,d-r],2:[0,a+d],3:[o/2-t/2,a+d],4:[o-t,a+d],5:[a+o,d-r],6:[a+o,d/2-r/2],7:[a+o,0],8:[o-t,-r-a],9:[o/2-t/2,-r-a],10:[0,-r-a],11:[-a-t,0],12:[-a-t,d/2-r/2]}
offset=s[i.position]
l+=offset[0]
u+=offset[1]
if(i.offset.top!==null){l+=i.offset.top}if(i.offset.left!==null){u+=i.offset.left}i.elem.css({position:"absolute",top:l,left:u})}
e._guiderById=function(i){if(typeof e._guiders[i]==="undefined"){throw new Error("Cannot find guider with id "+i)}return e._guiders[i]}
e._showOverlay=function(){$("#guider_overlay").fadeIn("fast",function(){if(this.style.removeAttribute){this.style.removeAttribute("filter")}$("#guider_click_mask").show()})}
e._highlightElement=function(i){$(i).css({"z-index":e._zIndexForHighlight})}
e._dehighlightElement=function(e){$(e).css({"z-index":""})}
e._hideOverlay=function(){$("#guider_overlay").fadeOut("fast")
$("#guider_click_mask").hide()}
e._initializeOverlay=function(){if($("#guider_overlay").length===0){$('<div id="guider_overlay"></div>').hide().appendTo("body")
$('<div id="guider_click_mask"></div>').hide().click(function(e){e.preventDefault()
e.stopPropagation()}).appendTo("body")}}
e._styleArrow=function(i){var t=i.position||0
if(!t){return}var r=$(i.elem.find(".guider_arrow"))
var n={1:"guider_arrow_down",2:"guider_arrow_left",3:"guider_arrow_left",4:"guider_arrow_left",5:"guider_arrow_up",6:"guider_arrow_up",7:"guider_arrow_up",8:"guider_arrow_right",9:"guider_arrow_right",10:"guider_arrow_right",11:"guider_arrow_down",12:"guider_arrow_down"}
r.addClass(n[t])
var o=i.elem.innerHeight()
var d=i.elem.innerWidth()
var l=e._arrowSize/2
var u={1:["right",l],2:["top",l],3:["top",o/2-l],4:["bottom",l],5:["right",l],6:["left",d/2-l],7:["left",l],8:["bottom",l],9:["top",o/2-l],10:["top",l],11:["left",l],12:["left",d/2-l]}
var t=u[i.position]
r.css(t[0],t[1]+"px")}
e._showIfHashed=function(i){var t="guider="
var r=window.location.hash.indexOf(t)
if(r!==-1){var n=window.location.hash.substr(r+t.length)
if(i.id.toLowerCase()===n.toLowerCase()){e.show(i.id)}}}
e.next=function(){var i=e._guiders[e._currentGuiderID]
if(typeof i==="undefined"){return}var t=i.next||null
if(t!==null&&t!==""){var r=e._guiderById(t)
var n=r.overlay?true:false
e.hideAll(n)
e.show(t)}}
e.createGuider=function(i){if(i===null||i===undefined){i={}}myGuider=$.extend({},e._defaultSettings,i)
myGuider.id=myGuider.id||String(Math.floor(Math.random()*1e3))
var t=$(e._htmlSkeleton)
myGuider.elem=t
if(typeof myGuider.classString!=="undefined"&&myGuider.classString!==null){myGuider.elem.addClass(myGuider.classString)}myGuider.elem.css("width",myGuider.width+"px")
var r=t.find(".guider_title")
r.html(myGuider.title)
t.find(".guider_description").html(myGuider.description)
e._addButtons(myGuider)
if(myGuider.xButton){e._addXButton(myGuider)}t.hide()
t.appendTo("body")
t.attr("id",myGuider.id)
if(typeof myGuider.attachTo!=="undefined"&&myGuider!==null){e._attach(myGuider)
e._styleArrow(myGuider)}e._initializeOverlay()
e._guiders[myGuider.id]=myGuider
e._lastCreatedGuiderID=myGuider.id
if(myGuider.isHashable){e._showIfHashed(myGuider)}return e}
e.hideAll=function(i){var t=e._guiders[e._currentGuiderID]
if(t&&t.highlight){e._dehighlightElement(t.highlight)}$(".guider").fadeOut("fast")
if(typeof i!=="undefined"&&i===true){}else{e._hideOverlay()}return e}
e.show=function(i){if(!i&&e._lastCreatedGuiderID){i=e._lastCreatedGuiderID}var t=e._guiderById(i)
if(t.overlay){e._showOverlay()
if(t.highlight){e._highlightElement(t.highlight)}}e._attach(t)
if(t.onShow){t.onShow(t)}t.elem.fadeIn("fast")
var r=$(window).height()
var n=$(window).scrollTop()
var o=t.elem.offset()
var d=t.elem.height()
if(o.top-n<0||o.top+d+40>n+r){window.scrollTo(0,Math.max(o.top+d/2-r/2,0))}e._currentGuiderID=i
return e}
return e}.call(this,jQuery)
__KA_module.exports = guiders;
this.guiders = guiders;
});
KAdefine("javascript/shared-package/hover-card.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/qTip2/jquery.qtip.js")
var $=require("jquery")
var _=require("underscore")
var HoverCardView=require("../shared-package/hover-card-view.js")
var ProfileModel=require("../shared-package/profile-model.js")
var HoverCard={_cache:{},_link:function(e,r){if(r!=null&&e.is("a")&&!e.attr("href")){var a="discussion"
if(e.hasClass("profile-programs")){a="programs"}e.attr("href",r+a)}},createHoverCardQtip:function(e,r){var a=$(e)
var t=a.data("user-id"),o=a.data("has-qtip")
if(!t||o){return}var i=HoverCard._cache[t],d
if(i!=null){d=i.html
var s=i.model.get("profileRoot")
HoverCard._link(a,s)}else{var l=new HoverCardView
d=l.render().el.innerHTML
$.ajax({type:"GET",url:"/api/internal/user/profile",data:{casing:"camel",userId:t},dataType:"json",success:_.bind(HoverCard._onHoverCardDataLoaded,this,a)})}a.data("has-qtip",true)
a.qtip({content:{text:d},style:{classes:"custom-override"},hide:{delay:100,fixed:true},position:r||{my:"top left",at:"bottom left"}})
a.qtip("show")},_onHoverCardDataLoaded:function(e,r){var a=e.data("user-id"),t=new ProfileModel(r)
if(e.attr("href")){t.set({href:e.attr("href")})}if(e.hasClass("profile-programs")){t.set({href:t.get("profileRoot")+"programs"})}var o=new HoverCardView({model:t}),i=o.render().el.innerHTML
HoverCard._cache[a]={model:t,html:i}
e.qtip("option","content.text",i)
var d=t.get("profileRoot")
HoverCard._link(e,d)}}
module.exports=HoverCard
});
KAdefine("javascript/shared-package/hover-card-view.js", function(require, module, exports) {
var $=require("jquery")
var Backbone=require("backbone")
var _=require("underscore")
require("./i18n.js")
var HoverCardView=Backbone.View.extend({initialize:function(e){this._options=e||{}
this.template=require("./hover-card.handlebars")
if(this.model){this.model.bind("change",_.bind(this.render,this))}_.bindAll(this,"render")},render:function(){var e=this._options
if(this.model){_.extend(e,this.model.toJSON())
if(this.model.isPhantom()){e["nickname"]=$._("Unclaimed points")}if(this.model.isPrivate()){e["isPrivate"]=this.model.isPrivate()}}else{e["messageOnly"]=true}this.$el.html(this.template(e))
if(this.model){this.model.fetchFull()}return this}})
module.exports=HoverCardView
});
KAdefine("javascript/shared-package/hover-card.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,a,i,e,s){i=i||n.helpers
var r="",l,o,c,f,t=this,h="function",p=i.blockHelperMissing,v=i.helperMissing,d=void 0,u=this.escapeExpression
function m(n,a){return'\n    <div class="hover-card-triangle"></div>\n    '}function g(n,a){return" vertical-shadow"}function y(n,a){var e="",s
e+='\n                <div class="hover-card-message">\n                    '
c=i["_"]
s=c||n["_"]
f=t.program(6,b,a)
f.hash={}
f.fn=f
f.inverse=t.noop
if(c&&typeof s===h){s=s.call(n,f)}else{s=p.call(n,s,f)}if(s||s===0){e+=s}e+="\n                </div>\n            "
return e}function b(n,a){return"Finding profile information..."}function k(n,a){var e="",s,r
e+='\n                <div class="user-stats '
c=i.isPrivate
s=c||n.isPrivate
r=i["if"]
f=t.program(9,S,a)
f.hash={}
f.fn=f
f.inverse=t.noop
s=r.call(n,s,f)
if(s||s===0){e+=s}e+='">\n                    <div class="badge-container">\n                        '
c=i.publicBadges
s=c||n.publicBadges
r=i.each
f=t.program(11,w,a)
f.hash={}
f.fn=f
f.inverse=t.noop
s=r.call(n,s,f)
if(s||s===0){e+=s}e+='\n                    </div>\n                    <div class="energy-points-badge">\n                        '
c=i.isSal
s=c||n.isSal
r=i["if"]
f=t.program(15,R,a)
f.hash={}
f.fn=f
f.inverse=t.program(17,B,a)
s=r.call(n,s,f)
if(s||s===0){e+=s}e+="\n                    </div>\n                </div>\n                "
e+='\n                <div class="user-actions"></div>\n                <div class="user-info">\n                    <a class="profile-link" href="'
c=i.href
s=c||n.href
r=i["if"]
f=t.program(19,H,a)
f.hash={}
f.fn=f
f.inverse=t.program(21,M,a)
s=r.call(n,s,f)
if(s||s===0){e+=s}e+='">\n                        <img src="'
c=i.avatarSrc
s=c||n.avatarSrc
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===d){s=v.call(n,"avatarSrc",{hash:{}})}e+=u(s)+'" class="avatar">\n                        <div class="nickname-container">\n                            <span class="nickname">\n                                '
c=i.nickname
s=c||n.nickname
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===d){s=v.call(n,"nickname",{hash:{}})}e+=u(s)+'\n                            </span>\n                            <span class="username">\n                                '
c=i.usernameFormatted
s=c||n.usernameFormatted
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===d){s=v.call(n,"usernameFormatted",{hash:{}})}e+=u(s)+'\n                            </span>\n                        </div>\n                    </a>\n                    <div class="bio">\n                        '
c=i.bio
s=c||n.bio
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===d){s=v.call(n,"bio",{hash:{}})}e+=u(s)+"\n                    </div>\n                </div>\n            "
return e}function S(n,a){return"private"}function w(n,a){var e="",s,r
e+="\n                            "
s=n
r=i["if"]
f=t.program(12,F,a)
f.hash={}
f.fn=f
f.inverse=t.noop
s=r.call(n,s,f)
if(s||s===0){e+=s}e+="\n                        "
return e}function F(n,a){var e="",s,r
e+="\n                                "
s=n
r=i["with"]
f=t.program(13,x,a)
f.hash={}
f.fn=f
f.inverse=t.noop
s=r.call(n,s,f)
if(s||s===0){e+=s}e+="\n                            "
return e}function x(n,a){var e="",s
e+='\n                                    <img class="badge-icon" src="'
c=i.icons
s=c||n.icons
s=s===null||s===undefined||s===false?s:s.small
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===d){s=v.call(n,"icons.small",{hash:{}})}e+=u(s)+'" alt="'
c=i.description
s=c||n.description
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===d){s=v.call(n,"description",{hash:{}})}e+=u(s)+'" title="'
c=i.description
s=c||n.description
if(typeof s===h){s=s.call(n,{hash:{}})}else if(s===d){s=v.call(n,"description",{hash:{}})}e+=u(s)+'">\n                                '
return e}function R(n,a){return'\n                            <span class="infinity-energy-points">\n                                &infin;\n                            </span>\n                        '}function B(n,a){var e="",s,r
e+="\n                            "
c=i.points
s=c||n.points
c=i.commafy
r=c||n.commafy
if(typeof r===h){s=r.call(n,s,{hash:{}})}else if(r===d){s=v.call(n,"commafy",s,{hash:{}})}else{s=r}e+=u(s)+"\n                        "
return e}function H(n,a){var e
c=i.href
e=c||n.href
if(typeof e===h){e=e.call(n,{hash:{}})}else if(e===d){e=v.call(n,"href",{hash:{}})}return u(e)}function M(n,a){var e
c=i.profileRoot
e=c||n.profileRoot
if(typeof e===h){e=e.call(n,{hash:{}})}else if(e===d){e=v.call(n,"profileRoot",{hash:{}})}return u(e)}r+='<div class="hover-card-container">\n    '
c=i.hideTriangle
l=c||a.hideTriangle
o=i.unless
f=t.program(1,m,s)
f.hash={}
f.fn=f
f.inverse=t.noop
l=o.call(a,l,f)
if(l||l===0){r+=l}r+='\n    <div class="hover-card-content-container'
c=i.hideShadow
l=c||a.hideShadow
o=i.unless
f=t.program(3,g,s)
f.hash={}
f.fn=f
f.inverse=t.noop
l=o.call(a,l,f)
if(l||l===0){r+=l}r+='">\n        <div class="hover-card-content clearfix">\n            '
c=i.messageOnly
l=c||a.messageOnly
o=i["if"]
f=t.program(5,y,s)
f.hash={}
f.fn=f
f.inverse=t.program(8,k,s)
l=o.call(a,l,f)
if(l||l===0){r+=l}r+="\n        </div>\n    </div>\n</div>\n"
return r})
module.exports=t
});
KAdefine("javascript/shared-package/user-progress-cache.jsx", function(require, module, exports) {
var _=require("underscore")
var SELECTORS_PER_RULE=20
var progressByStatus
var statusByKey
function insertCSSIntoHead(e){if(!e.length){return}var t=document.createElement("style")
t.type="text/css"
if(t.styleSheet){t.styleSheet.cssText=e}else{t.appendChild(document.createTextNode(e))}var r=document.getElementsByTagName("head")[0]
r.appendChild(t)}function cssWithProgress(e){var t=[]
var r=e.started
for(var s=0;s<r.length;s+=SELECTORS_PER_RULE){var o=r.slice(s,s+SELECTORS_PER_RULE)
t.push(o.map(function(e){return"."+e}).join(","))
t.push("{background-position:center;}")
t.push(o.map(function(e){return"."+e+" .pipe.completed"}).join(","))
t.push("{display:block;}")}var n=e.complete
for(var s=0;s<n.length;s+=SELECTORS_PER_RULE){var o=n.slice(s,s+SELECTORS_PER_RULE)
t.push(o.map(function(e){return"."+e}).join(","))
t.push("{background-position:bottom;}")
t.push(o.map(function(e){return"."+e+" .pipe.completed"}).join(","))
t.push("{display:block;}")}return t.join("")}var UserProgressCache={init:function(e){if(progressByStatus){throw new Error("Double-initialization of UserProgressCache")}progressByStatus=e
statusByKey={}
e.started.forEach(function(e){statusByKey[e]="started"})
e.complete.forEach(function(e){statusByKey[e]="complete"})
var t=cssWithProgress(e)
insertCSSIntoHead(t)},getStatusForProgressKey:function(e){if(!progressByStatus){throw new Error("UserProgressCache not yet initialized")}return _.has(statusByKey,e)?statusByKey[e]:"unstarted"}}
module.exports=UserProgressCache
});
KAdefine("javascript/shared-package/exercise-progress-constants.js", function(require, module, exports) {
"use strict"
var $=require("jquery")
require("../shared-package/i18n.js")
var ExerciseProgressConstants={LEVEL_NAMES:["unstarted","practiced","mastery1","mastery2","mastery3"],LEVEL_SLUGS:{unstarted:$._("Needs Practice"),practiced:$._("Practiced"),mastery1:$._("Level One"),mastery2:$._("Level Two"),mastery3:$._("Mastered")},LEVEL_VALUES:{unstarted:0,practiced:1,mastery1:2,mastery2:3,mastery3:4}}
module.exports=ExerciseProgressConstants
});
KAdefine("javascript/mobile-shared-package/exercise-progress-constants.js", function(require, module, exports) {
"use strict"
var ExerciseProgressConstants={LEVEL_NAMES:["unstarted","practiced","mastery1","mastery2","mastery3"],LEVEL_VALUES:{unstarted:0,practiced:1,mastery1:2,mastery2:3,mastery3:4}}
module.exports=ExerciseProgressConstants
});
KAdefine("javascript/mobile-shared-package/exercise-progress-utils.js", function(require, module, exports) {
"use strict"
var _=require("underscore")
var ExerciseProgressConstants=require("./exercise-progress-constants.js")
function getCountPerLevel(e){var r={}
_.each(ExerciseProgressConstants.LEVEL_NAMES,function(e){r[e]=0})
_.each(e,function(e){r[e.state]++})
return r}function getProgressPercentage(e,r){var s=r["mastery3"]*4+r["mastery2"]*3+r["mastery1"]*2+r["practiced"]*1+r["unstarted"]*0
var t=r["mastery3"]*4+r["mastery2"]*4+r["mastery1"]*4+r["practiced"]*4+r["unstarted"]*4
return Math.floor(100*s/t)}var progressCompare=function(e,r){return ExerciseProgressConstants.LEVEL_VALUES[e]-ExerciseProgressConstants.LEVEL_VALUES[r]}
var ExerciseProgressUtils={getCountPerLevel:getCountPerLevel,getProgressPercentage:getProgressPercentage,progressCompare:progressCompare}
module.exports=ExerciseProgressUtils
});
KAdefine("javascript/shared-package/visit-tracking.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var BigBingo=require("./bigbingo.js")
var Cookies=require("./cookies.js")
var KA=require("./ka.js")
var getSeconds=function(e){var i=new Date
if(e){i=new Date(e)}return Math.floor(+i/1e3)}
var returnVisitTime=60*60*3
var keepCookieFor=365*2
var frequency=60*30
var VisitTracking={_serverPageLoadTime:null,_browserPageLoadTime:null,_init:_.once(function(){VisitTracking._serverPageLoadTime=KA.currentServerTime()
VisitTracking._browserPageLoadTime=getSeconds()}),trackVisit:function(){if(!KA.INITIALIZED||!Cookies.areCookiesEnabled()){return}VisitTracking._init()
var e=KA.getUserID()
var i=encodeURIComponent(e)
var r=getSeconds()
var o=r-VisitTracking._browserPageLoadTime
var n=VisitTracking._serverPageLoadTime+o
function t(){Cookies.createCookie("return_visits_"+i,n,keepCookieFor)}function a(){var i=""
if(!e){i="pre_phantom"}else if(KA.getUserProfile().isPhantom()){i="phantom"}else{i="logged_in"}var o=["return_visit",i+"_return_visit"]
var n=KA.getUserProfile()
if(n&&!n.attributes.isPhantom){var a=getSeconds(n.attributes.dateJoined)
if(r-a<60*60*24*7){o.push("logged_in_return_visit_7_day")}}if(n&&n.attributes.isChildAccount){$.post("/api/internal/user/mark_bingo_conversion_for_parent",{conversion_id:"child_return_visit"})}BigBingo.markConversions(o)
t()}var s=+Cookies.readCookie("return_visits_"+i)
if(!s){t()
return}var u=n-s
if(u>returnVisitTime){_.delay(a,3e4)}else if(u>frequency){t()}}}
module.exports=VisitTracking
});
KAdefine("javascript/shared-package/generic-dialog.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(t,a,l,e,i){l=l||t.helpers
var s="",n,o,r,h,f=this,c="function",d=l.helperMissing,p=void 0,u=this.escapeExpression
function v(t,a){var e="",i,s
e+='\n    <div class="modal-footer">\n        '
r=l.buttons
i=r||t.buttons
s=l.each
h=f.program(2,m,a)
h.hash={}
h.fn=h
h.inverse=f.noop
i=s.call(t,i,h)
if(i||i===0){e+=i}e+="\n    </div>\n    "
return e}function m(t,a){var e="",i,s
e+="\n            "
r=l.buttonColor
i=r||t.buttonColor
s=l["if"]
h=f.program(3,b,a)
h.hash={}
h.fn=h
h.inverse=f.program(5,g,a)
i=s.call(t,i,h)
if(i||i===0){e+=i}e+="\n        "
return e}function b(t,a){var e="",i
e+='\n                <a class="generic-button simple-button '
r=l.buttonColor
i=r||t.buttonColor
if(typeof i===c){i=i.call(t,{hash:{}})}else if(i===p){i=d.call(t,"buttonColor",{hash:{}})}e+=u(i)+'" href="javascript:void(0)" data-id="'
r=l.title
i=r||t.title
if(typeof i===c){i=i.call(t,{hash:{}})}else if(i===p){i=d.call(t,"title",{hash:{}})}e+=u(i)+'">'
r=l.title
i=r||t.title
if(typeof i===c){i=i.call(t,{hash:{}})}else if(i===p){i=d.call(t,"title",{hash:{}})}e+=u(i)+"</a>\n            "
return e}function g(t,a){var e="",i
e+='\n                <a class="generic-button simple-button" href="javascript:void(0)" data-id="'
r=l.title
i=r||t.title
if(typeof i===c){i=i.call(t,{hash:{}})}else if(i===p){i=d.call(t,"title",{hash:{}})}e+=u(i)+'">'
r=l.title
i=r||t.title
if(typeof i===c){i=i.call(t,{hash:{}})}else if(i===p){i=d.call(t,"title",{hash:{}})}e+=u(i)+"</a>\n            "
return e}s+='<div class="generic-dialog modal hide">\n    <div class="modal-header">\n        <span class="close" data-dismiss="modal">&#215;</span>\n        <h2>'
r=l.title
n=r||a.title
if(typeof n===c){n=n.call(a,{hash:{}})}else if(n===p){n=d.call(a,"title",{hash:{}})}s+=u(n)+'</h2>\n    </div>\n    <div class="modal-body">\n        <p>'
r=l.message
n=r||a.message
if(typeof n===c){n=n.call(a,{hash:{}})}else if(n===p){n=d.call(a,"message",{hash:{}})}if(n||n===0){s+=n}s+="</p>\n    </div>\n    "
r=l.buttons
n=r||a.buttons
o=l["if"]
h=f.program(1,v,i)
h.hash={}
h.fn=h
h.inverse=f.noop
n=o.call(a,n,h)
if(n||n===0){s+=n}s+="\n</div>\n"
return s})
module.exports=t
});
KAdefine("javascript/shared-package/pageutil.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-modal.js")
var $=require("jquery")
var Backbone=require("backbone")
var _=require("underscore")
var moment=require("moment")
require("./i18n.js")
var BigBingo=require("./bigbingo.js")
var NotificationsLoader=require("./notifications-loader.js")
var DemoNotifications={show:function(){NotificationsLoader.loadUrgent({class_:["DemoNotification"]})
$(".show-demo-dialog").click(function(e){e.preventDefault()
var o=e.target.href||"/"
o="/logout?continue="+encodeURIComponent(o)
popupGenericMessageBox({title:"Leaving Demo",message:$._("The Demo allows you to view coach and student reports for a demo account. Navigating out of the demo area will log you out of the demo account."),buttons:[{title:"Cancel",action:hideGenericMessageBox},{title:"Leave demo",action:function(){hideGenericMessageBox
window.location=o},buttonColor:"green"}]})})}}
var parseISO8601=function(e){var o=e.split("T"),r=o[0].split("-"),t=o[1].split("Z"),s=t[0].split(":"),i=s[2].split("."),n=Number(s[0]),a=new Date
a.setUTCFullYear(Number(r[0]))
a.setUTCMonth(Number(r[1])-1)
a.setUTCDate(Number(r[2]))
a.setUTCHours(Number(n))
a.setUTCMinutes(Number(s[1]))
a.setUTCSeconds(Number(i[0]))
if(i[1]){a.setUTCMilliseconds(Number(i[1]))}return a}
var toISO8601=function(e){return moment(e).utc().format().replace("+00:00","Z")}
var CSSMenus={active_menu:null,init:function(){$(".noscript").removeClass("noscript")
$(document).delegate(".css-menu > ul > li","click",function(){if(CSSMenus.active_menu){CSSMenus.active_menu.removeClass("css-menu-js-hover")}if(CSSMenus.active_menu&&this===CSSMenus.active_menu[0]){CSSMenus.active_menu=null}else{CSSMenus.active_menu=$(this).addClass("css-menu-js-hover")}})
$(document).bind("click focusin",function(e){if(CSSMenus.active_menu&&$(e.target).closest(".css-menu").length===0){CSSMenus.active_menu.removeClass("css-menu-js-hover")
CSSMenus.active_menu=null}})
$(document).delegate(".css-menu a",{focus:function(e){$(e.target).addClass("css-menu-js-hover").closest(".css-menu > ul > li").addClass("css-menu-js-hover")},blur:function(e){$(e.target).removeClass("css-menu-js-hover").closest(".css-menu > ul > li").removeClass("css-menu-js-hover")}})}}
var Throbber={jElement:null,show:function(e,o){if(!Throbber.jElement){Throbber.jElement=$("<img style='display:none;' src='/images/throbber.gif' class='throbber'/>")
$(document.body).append(Throbber.jElement)}if(!e.length){return}var r=e.offset()
var t=r.top+e.height()/2-8
var s=o?r.left-16-4:r.left+e.width()+4
Throbber.jElement.css("top",t).css("left",s).css("z-index",2e3).css("display","")},hide:function(){if(Throbber.jElement){Throbber.jElement.css("display","none")}}}
var ProgressLoadingView=Backbone.View.extend({initialize:function(){this.render()},render:function(){this.$el.html('<div class="loading-progress-bar ui-progressbar ui-widget ui-widget-content ui-corner-all"><div class="ui-progressbar-value ui-widget-header ui-corner-left ui-corner-right"></div></div>')}})
var temporaryDetachElement=function(e,o,r){var t,s
t=e.next()
if(t.length>0){s=function(){e.insertBefore(t)}}else{t=e.parent()
s=function(){e.appendTo(t)}}e.detach()
var i=o.call(r||this,e)
s()
return i}
var messageBox=null
var popupGenericMessageBox=function(e){if(messageBox){$(messageBox).modal("hide").remove()}e=_.extend({buttons:[{title:"OK",action:hideGenericMessageBox}]},e)
var o=require("./generic-dialog.handlebars")
messageBox=$(o(e)).appendTo(document.body).modal({keyboard:true,backdrop:true,show:true}).get(0)
if(e.width){$(messageBox).css({width:e.width+"px","margin-left":-.5*e.width+"px"})}_.each(e.buttons,function(e){$('.generic-button[data-id="'+e.title+'"]',$(messageBox)).click(e.action)})}
var hideGenericMessageBox=function(){if(messageBox){$(messageBox).modal("hide")}messageBox=null}
var isLoadedFromBrowserCache=function(){if(isLoadedFromBrowserCache.memoized==null){isLoadedFromBrowserCache.memoized=$("#page_loaded_from_browser_cache").val()==="1"
$("#page_loaded_from_browser_cache").val("1")}return isLoadedFromBrowserCache.memoized}
var bookmarkMe=function(e,o){if(window.sidebar&&window.sidebar.addPanel){window.sidebar.addPanel(document.title,window.location.href,"")}else if(window.external&&window.external.AddFavorite){window.external.AddFavorite(location.href,document.title)}else if(window.opera&&window.print){this.title=document.title
return true}else{var r=e||$._("Press Command + D to bookmark this page.")
var t=o||$._("Press CTRL + D to bookmark this page.")
if(navigator.userAgent.toLowerCase().indexOf("mac")!==-1){alert(r)}else{alert(t)}}}
module.exports={BigBingo:BigBingo,CSSMenus:CSSMenus,DemoNotifications:DemoNotifications,ProgressLoadingView:ProgressLoadingView,Throbber:Throbber,bookmarkMe:bookmarkMe,hideGenericMessageBox:hideGenericMessageBox,isLoadedFromBrowserCache:isLoadedFromBrowserCache,parseISO8601:parseISO8601,toISO8601:toISO8601,popupGenericMessageBox:popupGenericMessageBox,temporaryDetachElement:temporaryDetachElement}
});
KAdefine("javascript/shared-package/parse-query-string.js", function(require, module, exports) {
var parseQueryString=function(e){e=e||window.location.search.substring(1)
var r={},n,o=/\+/g,t=/([^&=]+)=?([^&]*)/g,i=function(e){return decodeURIComponent(e.replace(o," "))}
while(n=t.exec(e)){r[i(n[1])]=i(n[2])}return r}
module.exports=parseQueryString
});
KAdefine("javascript/shared-package/timezone.js", function(require, module, exports) {
var Timezone={append_tz_offset_query_param:function(e,t){if(e.indexOf("?")>-1){e+="&"}else{e+="?"}return e+"tz_offset="+Timezone.get_tz_offset(t)},get_tz_offset:function(e){e=e||new Date
return-1*e.getTimezoneOffset()}}
module.exports=Timezone
});
KAdefine("javascript/shared-package/update-document-title.js", function(require, module, exports) {
var $=require("jquery")
require("./i18n.js")
var KA=require("./ka.js")
var updateDocumentTitle=function(e){var t=KA.getUserProfile()
if(e&&typeof e.pageName!=="undefined"){KA.currentPageName=e.pageName+" | "+$._("Khan Academy")}if(e&&t&&typeof e.noteCount!=="undefined"){t.set("countBrandNewNotifications",e.noteCount)}var n=t?t.get("countBrandNewNotifications"):0,a=KA.currentPageName
document.title=n>0?"("+n+") "+a:a}
module.exports=updateDocumentTitle
});
KAdefine("javascript/shared-package/validate-email.js", function(require, module, exports) {
var re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var validateEmail=function(a){return a.match(re)}
module.exports=validateEmail
});
KAdefine("javascript/shared-package/badges.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/qTip2/jquery.qtip.js")
var $=require("jquery")
var Backbone=require("backbone")
var _=require("underscore")
require("./i18n.js")
var Analytics=require("./analytics.js")
var FacebookUtil=require("./facebookutil.js")
var KA=require("./ka.js")
var KAConsole=require("./console.js")
var Social=require("./social.js")
var Badges={showMoreContext:function(e){var t=$(e).parents(".badge-context-hidden-link")
var a=t.parents(".achievement-badge")
var i=$(".badge-context-hidden",a)
if(t.length&&a.length&&i.length){$(".ellipsis",t).remove()
t.html(t.text())
i.css("display","")
a.find(".achievement-desc").addClass("expanded")
a.css("min-height",a.css("height")).css("height","auto")
a.nextAll(".achievement-badge").first().css("clear","both")}},renderShareLinks:function(e,t){var a=Badges.ShareLinksView.addShareLinksContext(t)
var i=new Badges.ShareLinksView({el:e,model:new Backbone.Model(a)})
i.render()}}
Badges.ContextType={NONE:0,EXERCISE:1,PLAYLIST:2}
Badges.Category={BRONZE:0,SILVER:1,GOLD:2,PLATINUM:3,DIAMOND:4,MASTER:5}
Badges.Badge=Backbone.Model.extend({defaults:{badgeCategory:Badges.Category.BRONZE,name:"__empty__",description:"",icons:{},isOwned:false,points:0,safeExtendedDescription:""},isEmpty:function(){return this.get("name")==="__empty__"},toJSON:function(){var e=Badges.Badge.__super__.toJSON.call(this)
e["isEmpty"]=this.isEmpty()
return e}})
Badges.Badge.EMPTY_BADGE=new Badges.Badge({})
Badges.UserBadge=Backbone.Model.extend({defaults:{badge:null,count:1,lastEarnedDate:"2011-11-22T00:00:00Z",targetContextNames:[],isOwned:true},initialize:function(e,t){if(!this.get("badge")){throw new Error("A UserBadge object needs a reference badge object")}var a=new Badges.Badge(this.get("badge"))
this.set({badge:a},{silent:true})
a.bind("change",function(e){this.trigger("change:badge")},this)}})
Badges.addUserBadgeContext=function(e){var t=e["translatedTargetContextNames"]
var a=t.length-1
e["visibleContextName"]=t[0]||""
e["listContextNamesHidden"]=$.map(t.slice(1),function(e,t){return{name:e,isLast:t===a-1}})
e["hasMultiple"]=e["count"]>1
return e}
Badges.BadgeList=Backbone.Collection.extend({model:Badges.Badge,saveUrl:null,dirty_:false,setSaveUrl:function(e){this.saveUrl=e},toJSON:function(){return this.map(function(e){return e.get("name")})},add:function(e,t){Badges.BadgeList.__super__.add.apply(this,arguments)
this.dirty_=true},remove:function(e,t){Badges.BadgeList.__super__.remove.apply(this,arguments)
this.dirty_=true},save:function(e){if(!this.dirty_){return}e=e||{}
e["url"]=this.saveUrl
e["contentType"]="application/json"
e["data"]=JSON.stringify(this.map(function(e){return e.get("name")}))
Backbone.sync.call(this,"update",this,e)
this.dirty_=false},parse:function(e,t){if("apiActionResults"in e&&"payload"in e){e=e["payload"]}Backbone.Model.prototype.parse.call(this,e,t)}})
Badges.UserBadgeList=Backbone.Collection.extend({model:Badges.UserBadge})
Badges.ShareLinksView=Backbone.View.extend({template:require("./share-links.handlebars"),events:{"click .emailShare":"shareEmail","click .twitterShare":"shareTwitter","click .facebookShare":"shareFacebook"},render:function(){this.$el.html(this.template(this.model.attributes))},trackShare:function(e){var t=this.model.get("description")
var a=this.model.get("badgeCategory")
if(window.ga){ga("send","event","Badges",e,t,a)}var i={}
i["Description"]=t
i["Badge Category"]=a
i["Name"]=this.model.get("name")
i["Points"]=this.model.get("points")
Analytics.trackSingleEvent("Badges "+e,i)},shareEmail:function(e){this.trackShare("Share Email")},shareTwitter:function(e){this.trackShare("Share Twitter")},shareFacebook:function(e){if(this.alreadySharedOnFacebook){KAConsole.log("Ignored duplicate share attempt.")
return}if(!KA.getUserProfile()){this.showQTip($._("<a href='/login?continue=/profile' class='simple-button qtip-button green'>Log in</a> to claim your badge on Facebook."))
return}var t=this.model
var a=t.get("slug")
var i=KA.getUserProfile()&&FacebookUtil.isUsingFbLogin()
if(i&&FacebookUtil.hasPublishStreamPermission()){this.openGraphShare(a)}else{var r=this
FacebookUtil.runOnFbReady(function(){FB.login(function(e){if(!e||e.error||!e.authResponse){var t=e&&e.error?e.error.code:null
r.handleFacebookErrors(t)}else if(e){FB.api("/me/permissions","get",function(e){if(!e||e.error){var t=e&&e.error?e.error.code:null
r.handleFacebookErrors(t)}else{var i=e.data&&e.data[0]&&e.data[0].publish_stream===1
if(i){FacebookUtil.setPublishStreamPermission(true)
r.openGraphShare(a)}else{FacebookUtil.setPublishStreamPermission(false)
r.showQTip($._("Sorry, you must grant access in order to share this on Facebook. Try again."))
KAConsole.log("FB OpenGraph badge share failed - permission denied.")}}})}},{scope:"email,publish_stream"})})}},handleFacebookErrors:function(e){if(e===200){FacebookUtil.setPublishStreamPermission(false)
this.showQTip($._("Sorry, you must grant access in order to share this on Facebook. Try again."))}else if(e===3501){this.setShared($._("This badge has already been posted to your timeline."))}else{this.showQTip($._("Sorry, we weren't able to share this. Please try again later."))}},handleErrors:function(e){var t=e.responseText
var a=e.status
KAConsole.log(t)
if(a===401){this.showQTip($._("Sorry, our records don't show that you've earned this badge."))
return}else if(a===400){var i=/(#)(\d+)/
var r=i.exec(t)
if(r){var s=r[2]
this.handleFacebookErrors(parseInt(s))
return}}this.showQTip($._("Sorry, we weren't able to share this. Please try again."))},openGraphShare:function(e){this.showQTip("<img src='/images/spinner-arrows-bg-1c1c1c.gif' style='margin-right: 5px; position: relative; top: 1px'> "+$._("Sharing on Facebook..."),true)
$.ajax({type:"POST",url:"/api/internal/user/badges/"+e+"/opengraph-earn",success:_.bind(this.finishShare,this),error:_.bind(this.handleErrors,this)})},setShared:function(e){this.alreadySharedOnFacebook=true
this.$(".facebookShare").contents().last().replaceWith("Shared")
this.showQTip(e)},finishShare:function(){this.setShared($._("This badge will now appear in your timeline!"))
this.trackShare("Share Facebook Open Graph")
KAConsole.log("OG post succeeded!")},showQTip:function(e,t){var a={content:e,position:{my:"top right",at:"bottom left"},show:{ready:true},style:"qtip-shadow qtip-rounded qtip-youtube",hide:{delay:5e3},events:{hidden:_.bind(this.removeHideDelay,this)}}
if(t){a.hide=false
delete a.events}else{setTimeout(_.bind(function(){this.hide()
this.removeHideDelay()},this),5e3)}this.$(".facebookShare").qtip(a)},removeHideDelay:function(){this.$(".facebookShare").qtip("api").set("hide.delay",0)},hide:function(){var e=this.$(".facebookShare").qtip("api")
if(e){e.hide()}}},{addShareLinksContext:function(e){var t=e.absoluteUrl
var a=e.translatedDescription
e.emailLink=Social.emailBadge(t,a)
e.twitterLink=Social.twitterBadge(t,a)
return e}})
module.exports=Badges
});
KAdefine("javascript/shared-package/request-animation-frame.js", function(require, module, exports) {
var vendors=["ms","moz","webkit","o"]
for(var x=0;x<vendors.length&&!window.requestAnimationFrame;++x){window.requestAnimationFrame=window[vendors[x]+"RequestAnimationFrame"]}var lastTime=0
if(!window.requestAnimationFrame){window.requestAnimationFrame=function(e,n){var i=Date.now()
var a=Math.max(0,16-(i-lastTime))
var t=window.setTimeout(function(){e(Date.now())},a)
lastTime=i+a
return t}}
});
KAdefine("javascript/shared-package/bind-signup-link.js", function(require, module, exports) {
var _=require("underscore")
var Cookies=require("./cookies.js")
var KA=require("./ka.js")
var launchSignupInModal=require("./launch-signup-in-modal.js")
var bindSignupLink=function(n,i,e){if(!KA.GROWTH_MODAL_SIGNUP&&!e){return}if(Cookies.readCookie("u13")){return}if(window.location.pathname==="/signup"){return}if(!n||n.length===0){return}n.on("click",function(n){if(i){i()}launchSignupInModal()
n.preventDefault()}).on("mouseenter",_.once(function(n){require.async(["../login-package/login.js","../login-package/signup.js","../login-package/signup-modal.jsx","package!login.css"],function(){})}))}
module.exports=bindSignupLink
});
KAdefine("javascript/shared-package/launch-signup-in-modal.js", function(require, module, exports) {
var $=require("jquery")
var React=require("react")
var launchSignupInModal=function(){require.async(["../login-package/login.js","../login-package/signup.js","../login-package/signup-modal.jsx","package!login.css"],function(n,e,a){a=React.createFactory(a)
var i=$("#modal-signup-container")
if(i.length===0){i=$('<div id="modal-signup-container">').appendTo("body")}React.unmountComponentAtNode(i[0])
React.render(a({onFacebookClick:e._signupFacebook,onGoogleClick:e._signupGoogle,onSubmit:e.submitSignup,onMount:n.initBirthdayPicker,ensureValidBirthdate:n.ensureBirthdateValid_}),i[0])})}
module.exports=launchSignupInModal
});
KAdefine("javascript/shared-package/site-infra.js", function(require, module, exports) {
var $=require("jquery")
require("../../third_party/javascript-khansrc/raven-js/raven.js")
require("../../third_party/javascript-khansrc/jquery-migrate/jquery-migrate-1.1.1.js")
require("../../third_party/javascript-khansrc/Modernizr/modernizr.js")
var KA=require("./ka.js")
$.migrateMute=!KA.IS_DEV_SERVER
var _=require("underscore")
require("../../third_party/javascript-khansrc/es5-shim/function-prototype-bind-polyfill.js")
require("./request-animation-frame.js")
require("./handlebars-extras.js")
require("../../third_party/javascript-khansrc/jquery-placeholder/jquery.placeholder.js")
require("../../third_party/javascript-khansrc/bootstrap-dropdown/dropdown.js")
require("../../third_party/javascript-khansrc/jQuery-ajaxTransport-XDomainRequest/jQuery.XDomainRequest.js")
require("./ka.js")
var APIActionResults=require("./api-action-results.js")
var CSSMenus=require("./pageutil.js").CSSMenus
var FacebookUtil=require("./facebookutil.js")
var KAConsole=require("./console.js")
var NotificationsLoader=require("./notifications-loader.js")
var PackageManager=require("./package-manager.js")
var Social=require("./social.js")
var TypeaheadLoader=require("./typeahead-loader.js")
var VisitTracking=require("./visit-tracking.js")
var SiteInfra={_initSearch:function(){$(".search-form .search-input").placeholder()
$(".search-input").closest("form").submit(function(r){return!!$.trim($(this).find(".search-input").val())})},_initUserDropdown:function(){$("#user-info").on("userUpdate",function(){$(this).find(".dropdown-toggle").dropdown("ontouchstart"in window?null:"hover")}).trigger("userUpdate")},_onDomReady:function(){if(window._qf){$.each(window._qf,function(r,i){$(i)})}NotificationsLoader.init()
APIActionResults.addDefaultHooks()
Social.init()
CSSMenus.init()
TypeaheadLoader.init()
this._initSearch()
this._initUserDropdown()
VisitTracking.trackVisit()},_setBlurOnEsc:function(){$(document).delegate("input.blur-on-esc","keyup",function(r,i){if(i&&i.silent){return}if(r.which===27){$(r.target).blur()}})},_setupLoginLinkRedirect:function(){$(document).on("click",'[href="/login"]',function(r){if(KA.loginUrl){window.location.assign(KA.loginUrl)
r.preventDefault()}})},init:_.once(function(){this._setBlurOnEsc()
this._setupLoginLinkRedirect()
KAConsole.init(KA.IS_DEV_SERVER)
PackageManager.init()
APIActionResults.init()
FacebookUtil.init()
$(this._onDomReady.bind(this))})}
module.exports=SiteInfra
});
; KAdefine.updatePathToPackageMap({"javascript/issues-package/issues.jsx": "issues.js", "javascript/login-package/login.js": "login.js", "javascript/notifications-package/notifications.js": "notifications.js", "javascript/typeahead-package/suggestion-source.js": "typeahead.js", "javascript/typeahead-package/search-source.js": "typeahead.js", "javascript/typeahead-package/search-bar.jsx": "typeahead.js", "javascript/react-guiders-package/guider.jsx": "react-guiders.js", "javascript/login-package/signup.js": "login.js", "javascript/typeahead-package/build-mission-source.js": "typeahead.js", "javascript/login-package/signup-modal.jsx": "login.js"});
this.KAdefineTiming["shared-package.js"].endTime = +(new Date);
