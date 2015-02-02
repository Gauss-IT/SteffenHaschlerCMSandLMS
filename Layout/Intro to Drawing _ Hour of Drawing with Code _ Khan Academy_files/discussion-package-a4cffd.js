((this.KAdefineTiming = this.KAdefineTiming || {})["discussion-package.js"] = {}).startTime = +(new Date);
KAdefine("third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-alert.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../jquery/jquery.js");
!function($){"use strict"
var t='[data-dismiss="alert"]',e=function(e){$(e).on("click",t,this.close)}
e.prototype.close=function(t){var e=$(this),r=e.attr("data-target"),n
if(!r){r=e.attr("href")
r=r&&r.replace(/.*(?=#[^\s]*$)/,"")}n=$(r)
t&&t.preventDefault()
n.length||(n=e.hasClass("alert")?e:e.parent())
n.trigger(t=$.Event("close"))
if(t.isDefaultPrevented())return
n.removeClass("in")
function a(){n.trigger("closed").remove()}$.support.transition&&n.hasClass("fade")?n.on($.support.transition.end,a):a()}
var r=$.fn.alert
$.fn.alert=function(t){return this.each(function(){var r=$(this),n=r.data("alert")
if(!n)r.data("alert",n=new e(this))
if(typeof t=="string")n[t].call(r)})}
$.fn.alert.Constructor=e
$.fn.alert.noConflict=function(){$.fn.alert=r
return this}
$(document).on("click.alert.data-api",t,e.prototype.close)}(window.jQuery)
});
KAdefine("third_party/javascript-khansrc/jquery-expander/jquery.expander.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../jquery/jquery.js");
(function($){$.expander={version:"1.4.2",defaults:{slicePoint:100,preserveWords:true,widow:4,expandText:"read more",expandPrefix:"&hellip; ",expandAfterSummary:false,summaryClass:"summary",detailClass:"details",moreClass:"read-more",lessClass:"read-less",collapseTimer:0,expandEffect:"slideDown",expandSpeed:250,collapseEffect:"slideUp",collapseSpeed:200,userCollapse:true,userCollapseText:"read less",userCollapsePrefix:" ",onSlice:null,beforeExpand:null,afterExpand:null,onCollapse:null}}
$.fn.expander=function(e){var a="init"
if(typeof e=="string"){a=e
e={}}var s=$.extend({},$.expander.defaults,e),l=/^<(?:area|br|col|embed|hr|img|input|link|meta|param).*>$/i,n=s.wordEnd||/(&(?:[^;]+;)?|[a-zA-Z\u00C0-\u0100]+)$/,i=/<\/?(\w+)[^>]*>/g,t=/<(\w+)[^>]*>/g,r=/<\/(\w+)>/g,d=/(<\/[^>]+>)\s*$/,o=/^<[^>]+>.?/,f
var p={init:function(){this.each(function(){var e,a,n,d,p,C,v,g,b,y,w,E,S=[],T=[],P={},k=this,A=$(this),j=$([]),D=$.meta?$.extend({},s,A.data()):s,L=!!A.find("."+D.detailClass).length,I=!!A.find("*").filter(function(){var e=$(this).css("display")
return/^block|table|list/.test(e)}).length,O=I?"div":"span",z=O+"."+D.detailClass,F="span."+D.moreClass,W=D.expandSpeed||0,Q=$.trim(A.html()),U=$.trim(A.text()),Z=Q.slice(0,D.slicePoint)
if($.data(this,"expander")){return}$.data(this,"expander",true)
$.each(["onSlice","beforeExpand","afterExpand","onCollapse"],function(e,a){P[a]=$.isFunction(D[a])})
Z=m(Z)
p=Z.replace(i,"").length
while(p<D.slicePoint){d=Q.charAt(Z.length)
if(d=="<"){d=Q.slice(Z.length).match(o)[0]}Z+=d
p++}Z=m(Z,D.preserveWords)
C=Z.match(t)||[]
v=Z.match(r)||[]
n=[]
$.each(C,function(e,a){if(!l.test(a)){n.push(a)}})
C=n
a=v.length
for(e=0;e<a;e++){v[e]=v[e].replace(r,"$1")}$.each(C,function(e,a){var s=a.replace(t,"$1")
var l=$.inArray(s,v)
if(l===-1){S.push(a)
T.push("</"+s+">")}else{v.splice(l,1)}})
T.reverse()
if(!L){b=Q.slice(Z.length)
y=$.trim(b.replace(i,""))
if(y===""||y.split(/\s+/).length<D.widow){return}g=T.pop()||""
Z+=T.join("")
b=S.join("")+b}else{b=A.find(z).remove().html()
Z=A.html()
Q=Z+b
g=""}D.moreLabel=A.find(F).length?"":u(D)
if(I){b=Q}Z+=g
D.summary=Z
D.details=b
D.lastCloseTag=g
if(P.onSlice){n=D.onSlice.call(k,D)
D=n&&n.details?n:D}var q=c(D,I)
A.html(q)
w=A.find(z)
E=A.find(F)
w.hide()
E.find("a").unbind("click.expander").bind("click.expander",B)
j=A.find("div."+D.summaryClass)
if(D.userCollapse&&!A.find("span."+D.lessClass).length){A.find(z).append('<span class="'+D.lessClass+'">'+D.userCollapsePrefix+'<a href="#">'+D.userCollapseText+"</a></span>")}A.find("span."+D.lessClass+" a").unbind("click.expander").bind("click.expander",function(e){e.preventDefault()
clearTimeout(f)
var a=$(this).closest(z)
h(D,a)
if(P.onCollapse){D.onCollapse.call(k,true)}})
function B(e){e.preventDefault()
E.hide()
j.hide()
if(P.beforeExpand){D.beforeExpand.call(k)}w.stop(false,true)[D.expandEffect](W,function(){w.css({zoom:""})
if(P.afterExpand){D.afterExpand.call(k)}x(D,w,k)})}})},destroy:function(){if(!this.data("expander")){return}this.removeData("expander")
this.each(function(){var e=$(this),a=$.meta?$.extend({},s,e.data()):s,l=e.find("."+a.detailClass).contents()
e.find("."+a.moreClass).remove()
e.find("."+a.summaryClass).remove()
e.find("."+a.detailClass).after(l).remove()
e.find("."+a.lessClass).remove()})}}
if(p[a]){p[a].call(this)}function c(e,a){var s="span",l=e.summary
if(a){s="div"
if(d.test(l)&&!e.expandAfterSummary){l=l.replace(d,e.moreLabel+"$1")}else{l+=e.moreLabel}l='<div class="'+e.summaryClass+'">'+l+"</div>"}else{l+=e.moreLabel}return[l,"<",s+' class="'+e.detailClass+'"',">",e.details,"</"+s+">"].join("")}function u(e){var a='<span class="'+e.moreClass+'">'+e.expandPrefix
a+='<a href="#">'+e.expandText+"</a></span>"
return a}function m(e,a){if(e.lastIndexOf("<")>e.lastIndexOf(">")){e=e.slice(0,e.lastIndexOf("<"))}if(a){e=e.replace(n,"")}return $.trim(e)}function h(e,a){a.stop(true,true)[e.collapseEffect](e.collapseSpeed,function(){var s=a.prev("span."+e.moreClass).show()
if(!s.length){a.parent().children("div."+e.summaryClass).show().find("span."+e.moreClass).show()}})}function x(e,a,s){if(e.collapseTimer){f=setTimeout(function(){h(e,a)
if($.isFunction(e.onCollapse)){e.onCollapse.call(s,false)}},e.collapseTimer)}}return this}
$.fn.expander.defaults=$.expander.defaults})(jQuery)
});
KAdefine("javascript/discussion-package/discussion-list.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jquery-expander/jquery.expander.js")
require("../../third_party/javascript-khansrc/jquery-timeago/jquery.timeago.js")
var $=require("jquery")
var _=require("underscore")
require("../shared-package/i18n.js")
var DiscussionList=function(t){this._init(t)
_.bindAll(this)}
DiscussionList.prototype._init=function(t){this.complete=false
this.page=0
this.count=0
this.expanderSettings={slicePoint:500,expandText:$._("(more)"),userCollapseText:""}
this.hideCount=t.hideCount
var s=t.listTemplate
if(!s){s=require("./discussion-list.handlebars")}this.templates={list:s,item:t.itemTemplate}
this.itemKey=t.itemKey||"feedback"
this.$container=$(t.containerSelector)
this.requestURL=t.requestURL
this.params=t.params
this.data=t.data||[]
this.hideHeader=t.hideHeader
this.title=t.title||""
this.titleUrl=t.titleUrl||""
this.limit=t.limit||10
if(t.sorts!==undefined){this.sorts=t.sorts
_.each(this.sorts,_.bind(function(t){if(t.isDefault){this.sortValue=t.value}},this))}else{this.sorts=[{name:$._("Top"),title:$._("Most Voted"),value:1,isDefault:true},{name:$._("Recent"),title:$._("Most Recent"),value:2,isDefault:false}]}if(t.sortValue){this.sortValue=t.sortValue}this.onSort=t.onSort||$.noop
this.onInitialFetch=t.onInitialFetch||$.noop
this.preRenderTransformData=t.preRenderTransformData||_.identity
this.onFetchComplete=t.onFetchComplete||$.noop
if(!t.preloaded){this._buildHtml()
if(this.data.length){this._append(this.data)}if(this.requestURL){if(t.prefetched){this._fetchSuccess(t.prefetched,this.onInitialFetch)}else{this._fetch(this.onInitialFetch)}}}else{this._attachEvents()}}
DiscussionList.prototype._buildHtml=function(){this.$container.append(this.templates.list({hideHeader:this.hideHeader,title:this.title,titleUrl:this.titleUrl,count:this.count,sorts:this.sorts,questions:{isComplete:true}}))
this._attachEvents()}
DiscussionList.prototype._attachEvents=function(){if(this.sorts){this.$container.find(".discussion-list-sort a").on("click",_.bind(function(t){var s=$(t.target)
s.addClass("selected")
s.siblings().removeClass("selected")
this.sort(s.data("value"))},this))}this.$moreButton=this.$container.find(".discussion-list-more").on("click",_.bind(function(){this.fetchMore()},this))
this.$content=this.$container.find(".discussion-list-content")}
DiscussionList.prototype._reset=function(){this.data=[]
this.$content.html("")
this.complete=false
this.page=0
this.hideMore_()
delete this.cursor
delete this.params.cursor}
DiscussionList.prototype._fetch=function(t){var s=this.params
_.extend(s,{sort:this.sortValue,limit:this.limit})
if("cursor"in this){s.cursor=this.cursor}else{s.page=this.page}return $.ajax({type:"GET",url:this.requestURL,data:s,dataType:"json",success:_.bind(function(s){this._fetchSuccess(s,t)},this)})}
DiscussionList.prototype._fetchSuccess=function(t,s){var i=this.preRenderTransformData(this.getItemsFromData(t))
this.setItemsInData(t,i)
this.data=this.data.concat(i)
if("cursor"in t){this.cursor=t.cursor}this._append(t)
this.setMoreAsLoading_(false)
var e=i.length
if(!this.hideCount){this.setCount(this.count+e)}this.onFetchComplete(t)
if(s){s(t)}if("isComplete"in t){this.setComplete(t.isComplete)}else if("complete"in t){this.setComplete(t.complete)}else{this.setComplete(!e)}}
DiscussionList.prototype.fetchMore=function(){if(!this.complete){this.page++
this.setMoreAsLoading_(true)
this._fetch()}}
DiscussionList.prototype.getItemsFromData=function(t){var s
if(_.isArray(t)){s=t}else{s=t[this.itemKey]}return _.compact(s)}
DiscussionList.prototype.setItemsInData=function(t,s){if(_.isArray(t)){t=s}else{t[this.itemKey]=s}}
DiscussionList.prototype._append=function(t){var s=this.getItemsFromData(t)
_.each(s,function(t){this.$content.append(this.templates.item(t))},this)
this.prettify_()}
DiscussionList.prototype.sort=function(t){this.sortValue=t
this._reset()
this._fetch()
this.onSort()}
DiscussionList.prototype.showMore_=function(){this.$moreButton.css("display","block")}
DiscussionList.prototype.hideMore_=function(){this.$moreButton.css("display","none")}
DiscussionList.prototype.setMoreAsLoading_=function(t){if(t){this.$moreButton.addClass("disabled").prop("disabled",true).val($._("Loading..."))}else{this.$moreButton.removeClass("disabled").prop("disabled",false).val($._("More"))}}
DiscussionList.prototype.setCount=function(t){this.count=t
this.$container.find(".discussion-list-count").show().find(".discussion-list-count-value").html(t)}
DiscussionList.prototype.setComplete=function(t){this.complete=t
if(this.complete){this.hideMore_()}else{this.showMore_()}}
DiscussionList.prototype.isEmpty=function(){return this.complete&&this.data.length===0}
DiscussionList.prototype.isComplete=function(){return this.complete}
DiscussionList.prototype.prettify_=function(){$(".timeago",this.$content).timeago()
$(".discussion-content",this.$content).expander(this.expanderSettings)}
module.exports=DiscussionList
});
KAdefine("javascript/discussion-package/discussion-list.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,s,i,e,l){i=i||n.helpers
e=e||n.partials
var t="",a,o,r,c,u=this,f="function",h=i.helperMissing,p=void 0,d=this.escapeExpression,v=i.blockHelperMissing
function m(n,s){var e="",l,t
e+='\n    <h2 class="discussion-list-header">\n        '
e+="\n        "
r=i.titleUrl
l=r||n.titleUrl
t=i["if"]
c=u.program(2,y,s)
c.hash={}
c.fn=c
c.inverse=u.program(4,g,s)
l=t.call(n,l,c)
if(l||l===0){e+=l}e+='\n\n        <span class="discussion-list-count" style="display:none;">\n            '
r=i["_"]
l=r||n["_"]
c=u.program(6,q,s)
c.hash={}
c.fn=c
c.inverse=u.noop
if(r&&typeof l===f){l=l.call(n,c)}else{l=v.call(n,l,c)}if(l||l===0){e+=l}e+="\n        </span>\n\n        "
r=i.sorts
l=r||n.sorts
t=i["if"]
c=u.program(8,_,s)
c.hash={}
c.fn=c
c.inverse=u.noop
l=t.call(n,l,c)
if(l||l===0){e+=l}e+="\n    </h2>\n"
return e}function y(n,s){var e="",l
e+='\n          <a class="no-underline" href="discussion/'
r=i.titleUrl
l=r||n.titleUrl
if(typeof l===f){l=l.call(n,{hash:{}})}else if(l===p){l=h.call(n,"titleUrl",{hash:{}})}e+=d(l)+'">'
r=i.title
l=r||n.title
if(typeof l===f){l=l.call(n,{hash:{}})}else if(l===p){l=h.call(n,"title",{hash:{}})}e+=d(l)+"</a>\n        "
return e}function g(n,s){var e="",l
e+="\n          "
r=i.title
l=r||n.title
if(typeof l===f){l=l.call(n,{hash:{}})}else if(l===p){l=h.call(n,"title",{hash:{}})}e+=d(l)+"\n        "
return e}function q(n,s){var e="",l
e+='(<span class="discussion-list-count-value">'
r=i.count
l=r||n.count
if(typeof l===f){l=l.call(n,{hash:{}})}else if(l===p){l=h.call(n,"count",{hash:{}})}e+=d(l)+"</span> total)"
return e}function _(n,s){var l="",t
l+='\n            <span class="discussion-list-sort">\n                '
t=n
t=u.invokePartial(e.discussion_sorts,"discussion_sorts",t,i,e)
if(t||t===0){l+=t}l+="\n            </span>\n        "
return l}function b(n,s){var e="",l,t
e+="\n                "
r=i.questions
l=r||n.questions
l=l===null||l===undefined||l===false?l:l.feedback
t=i.each
c=u.program(11,U,s)
c.hash={}
c.fn=c
c.inverse=u.noop
l=t.call(n,l,c)
if(l||l===0){e+=l}e+="\n        "
return e}function U(n,s){var l="",t
l+="\n                    "
t=n
t=u.invokePartial(e.discussion_thread,"discussion_thread",t,i,e)
if(t||t===0){l+=t}l+="\n                "
return l}function k(n,s){return'style="display:none"'}function H(n,s){return'style="display:none"'}function M(n,s){return"More"}t+='<div class="discussion-list">\n    '
r=i.hideHeader
a=r||s.hideHeader
o=i.unless
c=u.program(1,m,l)
c.hash={}
c.fn=c
c.inverse=u.noop
a=o.call(s,a,c)
if(a||a===0){t+=a}t+='\n    <div class="discussion-list-content">\n        '
r=i.questions
a=r||s.questions
o=i["if"]
c=u.program(10,b,l)
c.hash={}
c.fn=c
c.inverse=u.noop
a=o.call(s,a,c)
if(a||a===0){t+=a}t+="\n    </div>\n\n    "
t+='\n    <input type="button"\n           class="simple-button discussion-list-more"\n           '
r=i.questions
a=r||s.questions
o=i.unless
c=u.program(13,k,l)
c.hash={}
c.fn=c
c.inverse=u.noop
a=o.call(s,a,c)
if(a||a===0){t+=a}t+="\n           "
r=i.questions
a=r||s.questions
a=a===null||a===undefined||a===false?a:a.isComplete
o=i["if"]
c=u.program(15,H,l)
c.hash={}
c.fn=c
c.inverse=u.noop
a=o.call(s,a,c)
if(a||a===0){t+=a}t+='\n           value="'
r=i["_"]
a=r||s["_"]
c=u.program(17,M,l)
c.hash={}
c.fn=c
c.inverse=u.noop
if(r&&typeof a===f){a=a.call(s,c)}else{a=v.call(s,a,c)}if(a||a===0){t+=a}t+='">\n</div>\n'
return t})
module.exports=t
});
KAdefine("javascript/discussion-package/discussion-list-profile-widget.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,s,i,e,l){i=i||n.helpers
e=e||n.partials
var t="",o,a,r,u,c=this,f="function",p=i.helperMissing,h=void 0,d=this.escapeExpression,v=i.blockHelperMissing
function m(n,s){var e="",l,t
e+='\n    <h4 class="profile-widget-section-header">\n        '
e+='\n        <a href="discussion/'
r=i.titleUrl
l=r||n.titleUrl
if(typeof l===f){l=l.call(n,{hash:{}})}else if(l===h){l=p.call(n,"titleUrl",{hash:{}})}e+=d(l)+'">'
r=i.title
l=r||n.title
if(typeof l===f){l=l.call(n,{hash:{}})}else if(l===h){l=p.call(n,"title",{hash:{}})}e+=d(l)+'</a>\n\n        <span class="discussion-list-count" style="display:none;">\n            '
r=i["_"]
l=r||n["_"]
u=c.program(2,y,s)
u.hash={}
u.fn=u
u.inverse=c.noop
if(r&&typeof l===f){l=l.call(n,u)}else{l=v.call(n,l,u)}if(l||l===0){e+=l}e+="\n        </span>\n\n        "
r=i.sorts
l=r||n.sorts
t=i["if"]
u=c.program(4,g,s)
u.hash={}
u.fn=u
u.inverse=c.noop
l=t.call(n,l,u)
if(l||l===0){e+=l}e+="\n    </h4>\n    "
return e}function y(n,s){var e="",l
e+='(<span class="discussion-list-count-value">'
r=i.count
l=r||n.count
if(typeof l===f){l=l.call(n,{hash:{}})}else if(l===h){l=p.call(n,"count",{hash:{}})}e+=d(l)+"</span> total)"
return e}function g(n,s){var l="",t
l+='\n            <span class="discussion-list-sort">\n                '
t=n
t=c.invokePartial(e.discussion_sorts,"discussion_sorts",t,i,e)
if(t||t===0){l+=t}l+="\n            </span>\n        "
return l}function q(n,s){var e="",l,t
e+="\n                "
r=i.questions
l=r||n.questions
l=l===null||l===undefined||l===false?l:l.questions
t=i.each
u=c.program(7,_,s)
u.hash={}
u.fn=u
u.inverse=c.noop
l=t.call(n,l,u)
if(l||l===0){e+=l}e+="\n        "
return e}function _(n,s){var l="",t
l+="\n                    "
t=n
t=c.invokePartial(e.discussion_thread,"discussion_thread",t,i,e)
if(t||t===0){l+=t}l+="\n                "
return l}function b(n,s){return'style="display:none"'}function H(n,s){return'style="display:none"'}function k(n,s){return"More"}t+='\n<div class="discussion-list">\n    '
r=i.hideHeader
o=r||s.hideHeader
a=i.unless
u=c.program(1,m,l)
u.hash={}
u.fn=u
u.inverse=c.noop
o=a.call(s,o,u)
if(o||o===0){t+=o}t+='\n    <div class="discussion-list-content">\n        '
r=i.questions
o=r||s.questions
a=i["if"]
u=c.program(6,q,l)
u.hash={}
u.fn=u
u.inverse=c.noop
o=a.call(s,o,u)
if(o||o===0){t+=o}t+="\n    </div>\n\n    "
t+='\n    <input type="button"\n           class="simple-button discussion-list-more"\n           '
r=i.questions
o=r||s.questions
a=i.unless
u=c.program(9,b,l)
u.hash={}
u.fn=u
u.inverse=c.noop
o=a.call(s,o,u)
if(o||o===0){t+=o}t+="\n           "
r=i.questions
o=r||s.questions
o=o===null||o===undefined||o===false?o:o.isComplete
a=i["if"]
u=c.program(11,H,l)
u.hash={}
u.fn=u
u.inverse=c.noop
o=a.call(s,o,u)
if(o||o===0){t+=o}t+='\n           value="'
r=i["_"]
o=r||s["_"]
u=c.program(13,k,l)
u.hash={}
u.fn=u
u.inverse=c.noop
if(r&&typeof o===f){o=o.call(s,u)}else{o=v.call(s,o,u)}if(o||o===0){t+=o}t+='">\n</div>\n'
return t})
module.exports=t
});
KAdefine("javascript/discussion-package/discussion.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jquery-expander/jquery.expander.js")
require("../../third_party/javascript-khansrc/jquery-placeholder/jquery.placeholder.js")
require("../../third_party/javascript-khansrc/jquery-timeago/jquery.timeago.js")
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js")
var $=require("jquery")
var _=require("underscore")
require("../shared-package/i18n.js")
var Analytics=require("../shared-package/analytics.js")
var DiscussionNote=require("./discussion-note.js")
var DiscussionProfilePromo=require("./discussion-profilepromo.js")
var DiscussionVoting=require("./discussion-voting.js")
var HoverCard=require("../shared-package/hover-card.js")
var KA=require("../shared-package/ka.js")
var PackageManager=require("../shared-package/package-manager.js")
var Throbber=require("../shared-package/pageutil.js").Throbber
var Discussion={_registered:false,_minHeight:200,init:function(e){this.data=e
this._currentTab=null
if(this.data.container==null){this.data.container=".video-discussion"}this.data.$container=$(this.data.container)
this.data.$container.find(".login-link").attr("href","/login?continue="+encodeURIComponent(this.data.url))
if(KA.language!=="en"){this.data.$container.find(".discussion-i18n-message").attr("href","http://en.khanacademy.org"+window.location.pathname).show()}if(!e.preloaded){this.data.$container.find(".discussion-progress-bar").show()}this.initObjects()
var s=require("./clarifications.js")
s._fetch()
if(this.data.which==="video-questions"||this.data.which==="article-questions"||this.data.which==="scratchpad-questions"){_(this.tabOb).chain().keys().each(function(s){if(!e.preloaded||s!=="questions"){Discussion.tabOb[s].reset()}})
var i="questions"
if(this.data.expandFeedbackType){i=this.data.expandFeedbackType}else if(this._getTabForHash()){i=this._getTabForHash()}else if(this.data.showDocumentation){i="documentation"}Discussion._switchType(i)}if(this._registered&&!this.data.reset){return}this._registered=true
var t=require("./moderation.js")
t.init()
DiscussionVoting.init(this.data.$container)
DiscussionNote.init()
_(this.feedbackOb).each(_.bind(function(e){if(e.init){e.init(this.data.$container)}},this))
this.data.$container.on("click",".tabitem a",function(e){Discussion.switchTab(this)})
this.data.$container.on("click","[data-tab-target]",function(e){Discussion._switchType($(this).data("tab-target"))})
this.data.$container.on("click",".discussion-list-sort a",function(e){Discussion.sort(this)})
this.data.$container.on("mouseenter",".author-nickname",function(){HoverCard.createHoverCardQtip($(this))})
this.data.$container.on("click",".show-formatting-tips",function(e){Discussion.toggleFormattingTips(Discussion.getParent(this))
e.preventDefault()})
this.data.$container.on("click",".discussion-submit",this.submit).on("click",".discussion-cancel",this.cancel).on("focus",".discussion-text:not(.eval-text)",this.focus)
this.data.$container.on("click",".post-feedback-instead",this.addFeedback).on("click",".ask-question-instead",this.askQuestion)
this.data.$container.add(".discussion-guidelines").on("click",".suggest-clarification",this._switchType.bind(this,"clarifications"))
if(this.data.$container.is(".all-questions, .mod-queue")){this.data.$container.on("click",".youTube, .modal-video",function(e){if(e.metaKey){return}var s=$(this),i,t
if(s.is(".youTube")){i=Math.max(0,s.data("seconds")-2)
t=s.parents(".thread").find(".modal-video")}else{i=null
t=s}PackageManager.require("video.css","video.js").then(function(){var e=require("../video-package/modalvideo.js")
e.show({translatedTitle:t.data("translatedTitle"),translatedDescription:t.data("translatedDescription"),relative_url:t.attr("href"),youtubeId:t.data("youtubeId"),translatedYoutubeId:t.data("translatedYoutubeId"),timestamp:i})})
return false})}$(window).on("hashchange",this._handleHashUpdate.bind(this))
delete e["preloaded"]},initObjects:function(){var e=require("./discussion-answers.js")
var s=require("./clarifications.js")
var i=require("./discussion-comments.js")
var t=require("./documentation.js")
var n=require("./discussion-projectfeedback.js")
var a=require("./discussion-questions.js")
var o=require("./discussion-replies.js")
var r=require("./spinoffs.js")
if(this.tabOb&&this.feedbackOb){return}this.tabOb={questions:a,comments:i,"spin-offs":r,documentation:t,clarifications:s,projectfeedback:n}
this.feedbackOb={question:a,answer:e,comment:i,reply:o,scratchpad:{},clarification:{},projecthelp:{},projectcritique:{}}},checkCollectionStatus:function(e,s,i,t){if(!e._loadComplete){return}if(e._component){var n=e._component.state.collection
if(n.length>0||t){i()}else{n.on("sync",function(){if(n.length>0||t){i()}})}}else if(e.list&&!e.list.isEmpty()||t){i()}clearInterval(s)},maybeShowTab:function(e,s,i){if(e===this._currentTab){return}var t=this.tabOb[e]
var n=setInterval(function(){this.checkCollectionStatus(t,n,function(){if(!t.shouldShowTab||t.shouldShowTab()){$(t._tabHeaderSelector).show()}if(s){s()}},i)}.bind(this),100)
$(t._tabHeaderSelector).hide()
this.checkCollectionStatus(t,n,undefined,i)
if(!t._loadComplete){t.load()}},_getTabForHash:function(){if(window.location.hash==="#projectcritique"||window.location.hash==="#projecthelp"){return"projectfeedback"}return null},_handleHashUpdate:function(){var e=this._getTabForHash()
if(e){this._switchType(e)}},_finishLoad:function(e){if(e){var s=Discussion.getFeedbackFromKey(e)
if(s.length!==0){var i=require("./discussion-replies.js")
if(s.hasClass("comment")){Discussion._switchType("comments")
Discussion.highlight(s,"success")}else{var t=s.parents(".thread")
Discussion.highlight(t,"success")
t.find(".show-answer-links").hide().end().find(".hidden-answers").show()
if(!Discussion.hasAnswered(s)){t.find(".add-answer").show()}}if(i.getReplyCount(e)||s.hasClass("answer")){i.toggle(e,true)}$("html, body").animate({scrollTop:s.offset().top-10})}Discussion.data.qaExpandKey=null}Discussion._refreshHeight()
Discussion._enablePlaceholders()
Discussion.hideProgressBar()
$(KA).trigger("contentLoaded")},_refreshHeight:function(){var e=this.data.$container.height()
if(e>Discussion._minHeight){Discussion._minHeight=e
this.data.$container.css("min-height",e)}},_translateFeedbackType:function(e){if(e==="question"){return $._("question")}else if(e==="answer"){return $._("answer")}else if(e==="comment"){return $._("post")}else if(e==="reply"){return $._("comments")}else if(e==="scratchpad"){return $._("scratchpad")}else{return $._("post")}},sort:function(e){var s=$(e)
if(s.hasClass("selected")){return}Discussion.showProgressBar()
s.addClass("selected").siblings().removeClass("selected")
this.tabOb[this._currentTab].sort(s.data("value"))
Analytics.trackSingleEvent("Changed Video Discussion's Tab Sort")},switchTab:function(e){var s=$(e).parents(".tabitem"),i=s.data("type")
return this._switchType(i)},_switchType:function(e){if(e===this._currentTab){return $.Deferred().resolve().promise()}return function(){var s=$.Deferred()
if(e==="clarifications"){$(".video-discussion-header [data-type=clarifications]").fadeIn("fast",s.resolve)}else{s.resolve()}return s}().done(function(){Discussion.showProgressBar()
this._currentTab=e
Discussion._showTabBody(e)
Discussion._showTabSorts(e)
Analytics.trackSingleEvent("Changed Video Discussion's Tab")}.bind(this))},_showTabBody:function(e){var s
_(this.tabOb).chain().keys().each(function(t){i=Discussion.tabOb[t]
if(t===e){s=i.sortValue
i.show()}else{i.hide()}})
this.data.$container.parent().toggleClass("nosidebar",e==="spin-offs"||e==="documentation")
this.data.$container.parent().toggleClass("nouserforks",e!=="spin-offs")
var i=".tabitem[data-type="+e+"]"
this.data.$container.find(i).addClass("selected").siblings().removeClass("selected")},_showTabSorts:function(e){var s=this.tabOb[e],i=this.data.$container.find(".discussion-list-sort")
if(s.list){var t=require("./sorts.handlebars")
i.html(t({sorts:s.list.sorts}))}else{i.empty()}},getKey:function(e){return e.attr("id")},getFeedbackFromKey:function(e){return $("#"+e)},getParent:function(e){return $(e).parent().closest([".reply",".answer",".question",".comment",".scratchpad-vote",".clarification"].join(","))},getParentType:function(e){return Discussion._getFeedbackType(Discussion.getParent(e))},_getFeedbackType:function(e){var s=_(Discussion.feedbackOb).chain().keys().find(_(e.hasClass).bind(e)).value()
return s||null},focus:function(){var e=require("./duplicate-notice.js")
var s=Discussion.getParent(this)
e.removeAll(s)
var i=Discussion._getFeedbackType(s)
if(DiscussionNote.checkNeedsLogin(this,i)){$(this).blur()
return false}var t=s.parent()
if(t.hasClass("ask-question")||t.hasClass("post-feedback")||t.hasClass("officialClarificationView")){Discussion._revealGuidelines(t)
Discussion._startEditing(s,true)}else{Discussion._startEditing(s)}DiscussionProfilePromo.check()},focusWithoutScrolling:function(e){var s=window.scrollX,i=window.scrollY
e.focus()
window.scrollTo(s,i)},_revealGuidelines:function(e){e.find(".post-guidelines").slideDown(function(){Discussion.scrollDownToReveal(e)})},scrollDownToReveal:function(e){var s=10
var i=e.offset().top+e.height()+s
var t=$(window)
if(t.scrollTop()<e.offset().top&&t.scrollTop()+t.height()<i){var n=i-t.height()
if(t.height()<e.height()){n=e.offset().top}$("body, html").animate({scrollTop:n+"px"})}},edit:function(e){var s=Discussion.getParent(e)
if(!s.length){return}s.addClass("discussion-edit")
var i=$(".discussion-content:first",s)
i.expander("destroy")
var t=i.html()
t=t.replace(/<em>(.*?)<\/em>/g,function(e,s){return"_"+s+"_"})
t=t.replace(/<b>(.*?)<\/b>/g,function(e,s){return"*"+s+"*"})
t=t.replace(/<pre><code>(.*?)<\/code><\/pre>/g,function(e,s){return"```\n"+s+"\n```"})
t=t.replace(/<code>(.*?)<\/code>/g,function(e,s){return"`"+s+"`"})
var n=/<br>/gi
t=t.replace(n,"\n")
var a=$("<div>").html(t)
var o=a.text()
var r=$("<textarea>",{"class":"discussion-text open"})
r.css("height",i.height()+8)
r.val($.trim(o))
i.hide().after(r)
$(".from-video-author",s).hide()
$(".discussion-scratchpad-thumbnail",s).hide()
$(".discussion-embed-video",s).hide()
Discussion._setTabIndex(r)
_.defer(function(){r.focus()})
Discussion._showControls(s)
$(".discussion-meta:first",s).hide()},submit:function(){var e=Discussion.getParentType(this)
Discussion.feedbackOb[e]._onSubmit(this)},_onSubmit:function(e,s){Discussion._showThrobber(s)
Discussion._disableControls(s)},_onSubmitSuccess:function(e,s,i,t){if(e==="question"||e==="answer"){var n=require("./low-quality-notice.js")
if(n.init(e,s,i,t)){Discussion._hideThrobber(s)
Discussion._enableControls(s)
return false}}Discussion._stopEditing(s,e==="answer"&&!t)
Discussion._trackAddFeedbackEvent(e,t,i["lowQualityScore"],i["appearsAsDeleted"],i["authorUserId"])
return true},setHasAnswered:function(e,s){e.parents(".thread").toggleClass("has-answered",s)},hasAnswered:function(e){return e.parents(".thread").hasClass("has-answered")},toggleFormattingTips:function(e){if(!e.find(".formatting-tips-container").length){var s=require("./formatting-tips.handlebars")
e.find(".discussion-controls").append(s({}))}e.find(".formatting-tips-container").slideToggle(300)},cancel:function(){return Discussion._cancel(Discussion.getParent(this))},_cancel:function(e){var s=require("./low-quality-notice.js")
e.removeClass("discussion-edit")
if(!Discussion.getKey(e)){Discussion._stopEditing(e)}else{$(".from-video-author",e).show()
$(".discussion-scratchpad-thumbnail",e).show()
$(".discussion-embed-video",e).show()
$(".discussion-content",e).show()
$(".discussion-meta",e).show()
$(".discussion-text:first",e).remove()
Discussion._enableControls(e)
Discussion._hideControls(e)}s.hide(e)
return false},addFeedback:function(e){Discussion._cancel($(".ask-question .question"))
$(".ask-question .question-guidelines").promise().done(function(){Discussion._switchType("comments")
$(".post-feedback .discussion-text").focus()})
return false},askQuestion:function(e){Discussion._cancel($(".post-feedback .comment"))
$(".post-feedback .feedback-guidelines").promise().done(function(){Discussion._switchType("questions")
$(".ask-question .discussion-text").focus()})
return false},remove:function(e){var s=Discussion.getParent(e)
if(s.hasClass("question")){var i=s.parent(".thread")
if(i.length>0){s=i}}s.delay(100).animate({height:0,opacity:0,marginTop:0,marginBottom:0,paddingTop:0,paddingBottom:0},300,function(){s.remove()})},prependFeedback:function(e,s){return e.find(".timeago").timeago().end().prependTo(s)},appendFeedback:function(e,s){return e.find(".timeago").timeago().end().appendTo(s)},replaceFeedback:function(e,s){s.find(".timeago").timeago()
e.replaceWith(s)},sendRequest:function(e,s,i,t){e+="?casing=camel"
$.ajax({type:s,url:e,contentType:"application/json",data:i,dataType:"json",success:t})},getSanitizedText:function(e){var s=$(".discussion-text",e)
if(s.length===0){return false}var i=$.trim(s.val())
if(i===""||i===s.data("placeholder")){return false}return i},_enablePlaceholders:function(){this.data.$container.find(".discussion-text").placeholder()},_hidePlaceholder:function(e){e.data("placeholder",e.attr("placeholder"))
e.attr("placeholder","")},_showPlaceholder:function(e){e.attr("placeholder",e.data("placeholder"))},_setTabIndex:function(e){e.attr("tabindex","1")},_clearTabIndex:function(e){e.removeAttr("tabindex")},_showControls:function(e,s){var i=$(".discussion-controls:first",e)
i.slideDown(100).promise().done(function(){if(!s){Discussion.scrollDownToReveal(i)}})},_hideControls:function(e){$(".discussion-controls:first",e).hide()},_enableControls:function(e){$(".discussion-text",e).removeAttr("disabled")
$(".discussion-submit",e).removeAttr("disabled")},_disableControls:function(e){$(".discussion-text",e).attr("disabled","disabled")
$(".discussion-submit",e).attr("disabled","disabled")},_showThrobber:function(e){Throbber.show(e.find(".discussion-cancel"),true)},_hideThrobber:function(e){Throbber.hide(e.find(".discussion-cancel"),true)},_startEditing:function(e,s){var i=$(".discussion-text:first",e)
Discussion._hidePlaceholder(i)
i.addClass("open")
Discussion._showControls(e,s)
if(!e.is(".newClarification")){Discussion._setTabIndex(i)}},_stopEditing:function(e,s){Discussion._hideThrobber(e)
Discussion._hideControls(e)
if(s){Discussion.setHasAnswered(e,true)}Discussion._enableControls(e)
var i=$(".discussion-text:first",e)
Discussion._showPlaceholder(i)
i.val("").removeClass("open").css("height","").blur()
var t=e.parent()
if(t.hasClass("ask-question")||t.hasClass("post-feedback")||t.hasClass("officialClarificationView")){t.find(".post-guidelines").slideUp()}else if(e.hasClass("reply")){var n=require("./discussion-replies.js")
n.normalBlur(e)}Discussion._clearTabIndex(i)},highlight:function(e,s){e.addClass("highlight")
e.switchClass("",s+"-highlight",400)},unhighlight:function(e,s){e.switchClass(s+"-highlight","",400)},_trackAddFeedbackEvent:function(e,s,i,t,n){Analytics.trackSingleEvent("Added Feedback",{"Feedback Type":e,"Post Type":s?"Edit":"New","Low-Quality Score":i,"Appears as deleted":t,"Author's user_id":n})},showProgressBar:function(){if(this.data){this.data.$container.find(".discussion-progress-bar").show()}},hideProgressBar:function(){if(this.data){this.data.$container.find(".discussion-progress-bar").hide()}},transformFeedback:function(e){_.extend(e,{isQuestion:e.type==="question",isAnswer:e.type==="answer",isComment:e.type==="comment",isReply:e.type==="reply",isScratchpad:e.type==="scratchpad",isClarification:e.type==="clarification",isProjectEval:e.type==="projecteval",isProjectEvalAnswer:e.type==="projectevalanswer"})
if(!e.isReply&&!e.isScratchpad){e.expandKey=e.key}if(e.isScratchpad){e.focus={relativeUrl:e.relativeUrl,title:e.title}
e.type="program"
e.key=e.strKey}else if(e.isClarification||e.isProjectEval||e.isProjectEvalAnswer){}else{if(Discussion.feedbackOb[e.type].transform){e=Discussion.feedbackOb[e.type].transform(e)}Discussion._embedScratchpadImage(e)}var s=KA.getUserProfile()
e.showModControls=s&&s.get("isModerator")
e.isDeveloper=Discussion.data.isDeveloper
e.restrictPosting=Discussion.data.restrictPosting
return e},_embedYoutubeVideo:function(e){if(!e.fromVideoAuthor){return}var s=/\bhttps?:\/\/(?:www\.youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]+)\b/g,i=s.exec(e.content),t=i&&i[1]
if(t){e.embedVideoUrl="https://www.youtube.com/embed/"+t}},_embedScratchpadImage:function(e){PackageManager.require("scratchpad-base.js").then(function(){var s=require("../scratchpad-base-package/scratchpads.js").Scratchpad
var i=/\/cs\/[^\/]+\/(\d+)\b/g,t=i.exec(e.content),n=t&&t[1]
if(n){var a=new s({id:n})
a.fetch({success:function(){var s=e.key,i=$("#"+s+" .discussion-content")
$("#"+s+" .discussion-scratchpad-thumbnail").remove()
var t=require("./scratchpad-thumbnail.handlebars"),n=$(t(a.toJSONForTemplate()))
n.insertBefore(i)}})}})}}
module.exports=Discussion
});
KAdefine("javascript/discussion-package/discussion-questions.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jquery-placeholder/jquery.placeholder.js")
var $=require("jquery")
var _=require("underscore")
var Analytics=require("../shared-package/analytics.js")
var Discussion=require("../discussion-package/discussion.js")
var DiscussionList=require("./discussion-list.js")
var DiscussionLowQualityNotice=require("./low-quality-notice.js")
var DiscussionProfilePromo=require("./discussion-profilepromo.js")
var DiscussionQuestions={_loadComplete:false,sortValue:1,_containerSelector:".questions",_tabSelector:".questions-tab",_tabHeaderSelector:"#questions-tab-header",init:function(s){s.on("click",".show-hidden-answers",function(){DiscussionQuestions.showHiddenAnswers($(this).parents(".thread"))}).on("click",".show-answer-form",function(){DiscussionQuestions.showHiddenAnswers($(this).parents(".thread"),true)})},_onSubmit:function(s){var e=$(s),i=Discussion.getParent(e)
var n=Discussion.getKey(i)
var o=Discussion.getSanitizedText(i)
if(!o){return false}var t=JSON.stringify({text:o,shownLowQualityNotice:DiscussionLowQualityNotice.exists(i)})
var a=i.parents(".thread").data("focusId")||Discussion.data.focusId
var r=i.parents(".thread").data("focusKind")||Discussion.data.focusKind
var u="/api/internal/discussions/"+r+"/"+a+"/questions",c="POST"
if(n){u+="/"+n
c="PUT"}Discussion.sendRequest(u,c,t,function(s){DiscussionQuestions._onSubmitSuccess(s,i)})
Discussion._onSubmit("question",i)},_onSubmitSuccess:function(s,e){var i=s["key"],n=Discussion.getFeedbackFromKey(i),o=n.length>0
if(!Discussion._onSubmitSuccess("question",e,s,o)){return}s=Discussion.transformFeedback(s)
if(!o){var t=require("./thread.handlebars")
DiscussionProfilePromo.show(s,true)
var a=$(t(s))
Discussion.prependFeedback(a,$(this._containerSelector+" .discussion-list-content"))
$(".discussion-text",a).placeholder()}else{var t=require("./question.handlebars")
Discussion.replaceFeedback(n,$(t(s)))}},show:function(){this.load()
$(this._tabSelector).show()},hide:function(){$(this._tabSelector).hide()},load:function(){if(this._loadComplete){Discussion.hideProgressBar()
return}var s
if(Discussion.data.expandFeedbackType==="questions"){s=Discussion.data.qaExpandKey}var e="/api/internal/discussions/"+Discussion.data.focusKind+"/"+Discussion.data.focusId+"/questions",i={casing:"camel",qa_expand_key:s}
this.list=new DiscussionList({hideHeader:true,requestURL:e,itemTemplate:require("./thread.handlebars"),containerSelector:this._containerSelector,params:i,sortValue:this.sortValue,onInitialFetch:_.bind(function(s){this._finishLoad(s)},this),onFetchComplete:_.bind(function(s){Discussion._enablePlaceholders()
if(s.isComplete){this.list.setComplete(true)}},this),preRenderTransformData:this.transformDataBeforeRender,preloaded:Discussion.data.preloaded})
if(Discussion.data.preloaded){this._finishLoad(Discussion.data)}},_finishLoad:function(s){DiscussionQuestions._loadComplete=true
Discussion._finishLoad(s.qaExpandKey)},transformDataBeforeRender:function(s){_.each(s,Discussion.transformFeedback)
return s},transform:function(s){s.expandKey=s.key
var e=s.answers.length
s.answerCount=e
if(e>0){s.expandedAnswers=[s.answers[0]]
s.answers.shift()
if(e>1){s.hasHiddenAnswers=true}}_.each(s.expandedAnswers,Discussion.transformFeedback)
_.each(s.answers,Discussion.transformFeedback)
return s},sort:function(s){this.sortValue=s
this.reset()
this.load()},reset:function(){this._loadComplete=false
$(this._containerSelector).html("")},showHiddenAnswers:function(s,e){s.find(".show-answer-links").hide().end().find(".hidden-answers").show()
var i=s.find(".add-answer")
i.show()
if(e){var n=$(".discussion-text",i)
Discussion.focusWithoutScrolling(n)}else{Discussion.scrollDownToReveal(s)}Analytics.trackSingleEvent("Expanded Hidden Answers in Video Discussion")}}
module.exports=DiscussionQuestions
});
KAdefine("javascript/discussion-package/discussion-answers.js", function(require, module, exports) {
var $=require("jquery")
var Discussion=require("../discussion-package/discussion.js")
var DiscussionDuplicateNotice=require("./duplicate-notice.js")
var DiscussionLowQualityNotice=require("./low-quality-notice.js")
var DiscussionProfilePromo=require("./discussion-profilepromo.js")
var DiscussionAnswers={init:function(s){DiscussionDuplicateNotice.init(s)},_onSubmit:function(s){var i=$(s),e=Discussion.getParent(i),o=$(".question",e.parents(".thread"))
var n=Discussion.getKey(o)||e.data("questionKey"),r=Discussion.getKey(e)
var u=Discussion.getSanitizedText(e)
if(!u){return false}var t=JSON.stringify({text:u,shownLowQualityNotice:DiscussionLowQualityNotice.exists(e),fromVideoAuthor:e.find(".from-video-author").is(":checked")})
DiscussionDuplicateNotice.removeAll(o)
if(!r&&DiscussionDuplicateNotice.show(u,e)){Discussion.cancel.call(i)
return}var c="/api/internal/questions/"+n+"/answers",a="POST"
if(r){c+="/"+r
a="PUT"}Discussion.sendRequest(c,a,t,function(s){DiscussionAnswers._onSubmitSuccess(s,e)})
Discussion._onSubmit("answer",e)},_onSubmitSuccess:function(s,i){var e=s["key"],o=Discussion.getFeedbackFromKey(e),n=o.length>0
if(!Discussion._onSubmitSuccess("answer",i,s,n)){return}Discussion.setHasAnswered(i,true)
s=Discussion.transformFeedback(s)
var r=require("./answer.handlebars"),u=$(r(s))
DiscussionProfilePromo.show(s,false)
if(!n){var t=Discussion.getFeedbackFromKey(s["questionKey"]).parents(".thread").find(".answers")
t.removeClass("with-no-answers")
Discussion.appendFeedback(u,t)}else{Discussion.replaceFeedback(o,u)}},transform:function(s){Discussion._embedYoutubeVideo(s)
return s}}
module.exports=DiscussionAnswers
});
KAdefine("javascript/discussion-package/discussion-comments.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var Discussion=require("../discussion-package/discussion.js")
var DiscussionList=require("./discussion-list.js")
var DiscussionComments={_loadComplete:false,sortValue:1,_containerSelector:".comments",_tabSelector:".comments-tab",_tabHeaderSelector:"#comments-tab-header",_onSubmit:function(s){var e=$(s),i=Discussion.getParent(e)
var t=Discussion.getKey(i)
var n=Discussion.getSanitizedText(i)
if(!n){return false}var o=JSON.stringify({text:n})
var a=i.data("focusId")||Discussion.data.focusId
var r=i.data("focusKind")||Discussion.data.focusKind
var c="/api/internal/discussions/"+r+"/"+a+"/comments",u="POST"
if(t){c+="/"+t
u="PUT"}Discussion.sendRequest(c,u,o,function(s){DiscussionComments._onSubmitSuccess(s,i)})
Discussion._onSubmit("comment",i)},_onSubmitSuccess:function(s,e){var i=s["key"],t=Discussion.getFeedbackFromKey(i),n=t.length>0
if(!Discussion._onSubmitSuccess("comment",e,s,n)){return}s=Discussion.transformFeedback(s)
var o=require("./comment.handlebars"),a=$(o(s))
if(!n){Discussion.prependFeedback(a,$(this._containerSelector+" .discussion-list-content"))}else{Discussion.replaceFeedback(t,a)}},show:function(){this.load()
$(this._tabSelector).show()},hide:function(){$(this._tabSelector).hide()},load:function(){if(this._loadComplete){Discussion.hideProgressBar()
return}var s
if(Discussion.data.expandFeedbackType==="comments"){s=Discussion.data.qaExpandKey}var e="/api/internal/discussions/"+Discussion.data.focusKind+"/"+Discussion.data.focusId+"/comments",i={casing:"camel",qa_expand_key:s}
this.list=new DiscussionList({hideHeader:true,requestURL:e,itemTemplate:require("./comment.handlebars"),containerSelector:this._containerSelector,params:i,sortValue:this.sortValue,onInitialFetch:_.bind(function(s){this._finishLoad(s)},this),onFetchComplete:_.bind(function(s){Discussion._enablePlaceholders()
if(s.isComplete){this.list.setComplete(true)}},this),preRenderTransformData:_.bind(function(s){return this.transformDataBeforeRender(s)},this)})},_finishLoad:function(s){DiscussionComments._loadComplete=true
Discussion._finishLoad(s.qaExpandKey)},transformDataBeforeRender:function(s){_.each(s,Discussion.transformFeedback)
return s},transform:function(s){Discussion._embedYoutubeVideo(s)
Discussion._embedScratchpadImage(s)
return s},sort:function(s){this.sortValue=s
this.reset()
this.load()},reset:function(){this._loadComplete=false
$(this._containerSelector).html("")}}
module.exports=DiscussionComments
});
KAdefine("javascript/discussion-package/discussion-replies.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jquery-placeholder/jquery.placeholder.js")
require("../../third_party/javascript-khansrc/jquery-timeago/jquery.timeago.js")
var $=require("jquery")
var Backbone=require("backbone")
var _=require("underscore")
require("../shared-package/i18n.js")
var Discussion=require("../discussion-package/discussion.js")
var DiscussionNote=require("./discussion-note.js")
var DiscussionQuestions=require("./discussion-questions.js")
var DiscussionReplies={_slideRate:200,Model:Backbone.Model.extend({defaults:{content:""}}),View:Backbone.View.extend({initialize:function(){this.template=require("./reply.handlebars")},render:function(){this.el=this.template(this.model.toJSON())
return this}}),init:function(e){e.on("click",".toggle-replies",function(){var e=Discussion.getParent(this),s=Discussion.getKey(e)
DiscussionReplies.toggle(s)})},_onSubmit:function(e){var s=$(e),i=Discussion.getParent(s),n=Discussion.getSanitizedText(i),t=Discussion.getParent(i),o=Discussion.getKey(t)
if(!n){return false}var r="/api/internal/discussions/"+o+"/replies",l="POST",a=JSON.stringify({text:n})
Discussion._onSubmit("reply",i)
Discussion.sendRequest(r,l,a,function(e){var s=DiscussionReplies._getRepliesContainer(o).find(".replies")
DiscussionReplies._render(e).css("opacity",0).appendTo(s).animate({opacity:1})
DiscussionReplies.incrementReplyCount(o)
Discussion._onSubmitSuccess("reply",i,e)})},decrementReplyCount:function(e){DiscussionReplies._updateReplyCount(e,-1)},incrementReplyCount:function(e){DiscussionReplies._updateReplyCount(e,1)},_updateReplyCount:function(e,s){var i=DiscussionReplies._getToggleButton(e),n=DiscussionReplies.getReplyCount(e)
n+=s
i.data("replyCount",n)
if(n===0){i.text($._("Comment"))}else{i.text($.ngettext("%(num)s Comment","%(num)s Comments",n))}},transform:_.identity,toggle:function(e,s){var i=DiscussionReplies._getToggleButton(e)
if(i.hasClass("show-replies")){if(!i.data("hasFetched")){i.data("hasFetched",true)
DiscussionReplies._renderContainer(e,s)
DiscussionReplies._fetch(e)}else{DiscussionReplies._getRepliesContainer(e).slideDown(DiscussionReplies._slideRate,function(){DiscussionReplies._revealReplies(e)})}}else{DiscussionReplies._getRepliesContainer(e).slideUp(DiscussionReplies._slideRate)}i.toggleClass("show-replies").toggleClass("hide-replies")},_fetch:function(e){var s="/api/internal/discussions/"+e+"/replies"+"?casing=camel"
$.ajax({type:"GET",url:s,contentType:"application/json",dataType:"json",success:_.bind(DiscussionReplies._renderReplies,this,e)})},_replyFormTemplate:null,getReplyFormTemplate:function(){if(this._replyFormTemplate===null){this._replyFormTemplate=require("./reply-form.handlebars")}return this._replyFormTemplate},_repliesContainerTemplate:null,getRepliesContainerTemplate:function(){if(this._repliesContainerTemplate===null){this._repliesContainerTemplate=require("./replies-container.handlebars")}return this._repliesContainerTemplate},_renderContainer:function(e,s){var i=this.getReplyCount(e),n=this.getRepliesContainerTemplate(),t=n({replyCount:i}),o=$(t),r=o.find(".add-reply")
Discussion.getFeedbackFromKey(e).append(o)
o.find(".loading").slideDown(DiscussionReplies._slideRate).find(".discussion-item").delay(200).animate({opacity:1})
if(!Discussion.data.restrictPosting){if(i>20&&Discussion.data.which!=="scratchpad-questions"){r.hide()
r.append("<div class='replies-closed'>"+$._("Comments on this post are closed.")+"</div>")
return}var l=this.getReplyFormTemplate()
r.hide()
var a=r.append(l({})).find(".discussion-text")
var u=Discussion.getParentType(o)
if(DiscussionReplies._usesReplyAltInterface(r)){var c=DiscussionReplies._isOriginalAuthor(Discussion.getParent(r))
var p=r.find(".discussion-text-dummy")
$.each([a,p],function(){DiscussionReplies._setPlaceholder($(this),u,c)})
a.hide()
var d=r.find(".choose-reply-alt")
if(c){d.val($._("Edit your %(parentType)s",{parentType:$._(u)}))
d.on("click",this.editParentPost)}else{d.val($._("Answer this question"))
d.on("click",this.answerQuestion)}p.on("focus",this.normalFocus)
r.find(".reply-alt-controls").show()
if(i===0){r.slideDown(DiscussionReplies._slideRate)}}else{DiscussionReplies._setPlaceholder(a,u,false)
if(i===0){r.show()
if(!s){Discussion.focusWithoutScrolling(a)
Discussion.scrollDownToReveal(o)}}}}},_renderReplies:function(e,s){var i=this._getRepliesContainer(e),n=i.find(".replies"),t=i.find(".add-reply")
n.find(".loading").remove()
_.each(s,function(e){DiscussionReplies._render(e).appendTo(n).slideDown(DiscussionReplies._slideRate)})
t.slideDown(DiscussionReplies._slideRate,function(){DiscussionReplies._revealReplies(e)})},_render:function(e){var s=new DiscussionReplies.Model(Discussion.transformFeedback(e)),i=new DiscussionReplies.View({model:s})
return $(i.render().el).find(".timeago").timeago().end()},_revealReplies:function(e){var s=DiscussionReplies._getRepliesContainer(e)
Discussion.scrollDownToReveal(s)},editParentPost:function(){var e=Discussion.getParent(Discussion.getParent(this))
if(!e.hasClass("discussion-edit")){Discussion.edit(e.find(".discussion-content")[0])}},answerQuestion:function(){if(DiscussionNote.checkNeedsLogin(this,"answer")){return}var e=Discussion.getParent(Discussion.getParent(this))
DiscussionReplies.toggle(Discussion.getKey(e))
DiscussionQuestions.showHiddenAnswers(e.parents(".thread"),true)},normalFocus:function(){if(DiscussionNote.checkNeedsLogin(this,"reply")){$(this).blur()
return}var e=Discussion.getParent(this)
e.find(".reply-alt-controls").hide()
e.find(".discussion-text").show().focus()},normalBlur:function(e){if(DiscussionReplies._usesReplyAltInterface(e)){e.find(".reply-alt-controls").show()
e.find(".discussion-text").hide()}},_setPlaceholder:function(e,s,i){var n=""
if(s==="question"){if(i){n=$._("Comment on your question...")}else{n=$._("Suggest a way to improve this question...")}}else if(s==="comment"){if(i){n=$._("Comment on your tip/feedback...")}else{n=$._("Comment on this tip/feedback...")}}else if(s==="answer"){if(i){n=$._("Comment on your answer...")}else{n=$._("Comment on this answer...")}}e.attr("placeholder",n).placeholder()},_usesReplyAltInterface:function(e){var s=Discussion.getParent(e)
var i=Discussion.hasAnswered(s)
var n=Discussion.getParentType(e)
var t=DiscussionReplies._isOriginalAuthor(s)
return!!(t&&(n==="answer"||n==="question")||n==="question"&&!i)},_getRepliesContainer:function(e){return Discussion.getFeedbackFromKey(e).find(".replies-container")},_getToggleButton:function(e){return Discussion.getFeedbackFromKey(e).find(".toggle-replies")},getReplyCount:function(e){return DiscussionReplies._getToggleButton(e).data("replyCount")},_isOriginalAuthor:function(e){return e.hasClass("is-author")}}
module.exports=DiscussionReplies
});
KAdefine("javascript/discussion-package/discussion-voting.js", function(require, module, exports) {
var $=require("jquery")
require("../shared-package/i18n.js")
var DiscussionNote=require("./discussion-note.js")
var DiscussionVoting={init:function(t){t.on("click",".vote-for-js",DiscussionVoting.voteEntity).on("mouseover",".vote-for-js",DiscussionVoting._activateHover).on("mouseout",".vote-for-js",DiscussionVoting._deactivateHover)},voteEntity:function(t){if(DiscussionNote.checkNeedsLogin(this,"vote")){return false}var e=$(this)
var o=e.data("voteType")
if(!o){return false}var s=e.data("key")
if(!s){return false}var i=e.is(".voted")
var n=e.parents(".comment, .answer, .question, .scratchpad-vote").first()
var r=n.find(".sum-votes")
$.post("/api/internal/discussions/voteentity",{entity_key:s,vote_type:i?0:o},function(t){DiscussionVoting.finishVoteEntity(t,e,n,r)})
var a=DiscussionVoting.clearVote(e,n,r)
a+=i?0:o
DiscussionVoting.setVoteCount(n,r,a)
r.addClass("sum-votes-changed")
if(!i){e.addClass("voted")}e.removeClass("vote-hover")
return false},_activateHover:function(t){$(this).addClass("vote-hover")},_deactivateHover:function(t){$(this).removeClass("vote-hover")},setVoteCount:function(t,e,o){e.html($.ngettext("1 <span class='vote-word'>Vote</span>","%(num)s <span class='vote-word'>Votes</span>",o))},clearVote:function(t,e,o){var s=parseInt(o.text(),10)
e.find(".vote-for.voted").each(function(){var t=$(this)
t.removeClass("voted")
s-=t.data("voteType")})
o.removeClass("sum-votes-changed")
DiscussionVoting.setVoteCount(e,o,s)
return s},finishVoteEntity:function(t,e,o,s){if(t&&t.error){DiscussionVoting.clearVote(e,o,s)
DiscussionNote.showInfo(e.get(0),t.error)}}}
module.exports=DiscussionVoting
});
KAdefine("javascript/discussion-package/clarifications.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var Discussion=require("../discussion-package/discussion.js")
var PackageManager=require("../shared-package/package-manager.js")
var DiscussionClarifications={_tabSelector:".clarifications-tab",_areaMount:null,_popupMount:null,_renderDeferred:$.Deferred(),_official:null,_suggested:null,_videoView:null,reset:function(){if(!this._loadComplete){return}var i=require("react")
if(this._areaMount){i.unmountComponentAtNode(this._areaMount)}if(this._popupMount){i.unmountComponentAtNode(this._popupMount)}this._loadComplete=false
this._renderDeferred=$.Deferred()
$(this._containerSelector).html("")},show:function(){this.load()
$(this._tabSelector).show()},hide:function(){$(this._tabSelector).hide()},load:function(){if(this._loadComplete){Discussion.hideProgressBar()
return}this._areaMount=$("<div>").appendTo(".clarifications-tab .clarifications")[0]
DiscussionClarifications._fetchSuggested()
$.when(PackageManager.require("react.js"),DiscussionClarifications._renderDeferred).done(function(){var i=require("react")
i.render(DiscussionClarifications._area,this._areaMount)
Discussion.hideProgressBar()
this._loadComplete=true
var e=DiscussionClarifications._suggested.get(Discussion.data.qaExpandKey)
if(e){e.set({highlight:"success",replyCountOpen:true})}}.bind(this))},_fetchSuggested:function(){if(!DiscussionClarifications._suggested){this._fetchWhenReady=true
return}function i(){DiscussionClarifications._renderDeferred.resolve(true)}DiscussionClarifications._suggested.fetch({success:i,error:i})},_fetch:function(){if(!PackageManager.isLoaded("tutorial.js")){return}var i=require("../tutorial-package/tutorial-nav.js")
if(typeof i.currentContext==="undefined"){return}var e=_(i.currentContext.contentModels).find(function(i){return i.get("readableId")===Discussion.data.focusId})
if(e&&Discussion.data.focusKind==="video"){if(!PackageManager.isLoaded("video.js")){return}var a=require("../video-package/video-addons.js").VideoViews
var s=a.getWhenReadyDeferred(e.get("youtubeId"))
var r=PackageManager.require("clarifications.js")
$.when(s,r).done(function(i){var e=require("react")
var a=require("../clarifications-package/models.jsx")
var s=require("../clarifications-package/official.jsx")
DiscussionClarifications._videoView=i
DiscussionClarifications._official=new a.OfficialClarificationCollection([],{videoView:i})
DiscussionClarifications._official.fetch()
DiscussionClarifications._suggested=new a.SuggestedClarificationCollection([],{videoView:i})
if(Discussion.data.qaExpandKey||this._fetchWhenReady){DiscussionClarifications._fetchSuggested()}DiscussionClarifications._popupMount=$("<div>").appendTo(i.$(".youtube-video"))[0]
var r=e.createFactory(s.ClarificationNotifications)
var o=r({collection:DiscussionClarifications._official,videoView:i})
e.render(o,DiscussionClarifications._popupMount)
var t=e.createFactory(s.ClarificationArea)
DiscussionClarifications._area=t({videoView:i,official:DiscussionClarifications._official,suggested:DiscussionClarifications._suggested})})}else if(Discussion.data.focusKind==="article"){PackageManager.require("clarifications.js").then(function(){var i=require("react")
var e=require("../clarifications-package/models.jsx")
var a=require("../clarifications-package/official.jsx")
DiscussionClarifications._suggested=new e.SuggestedClarificationCollection([],{articleId:Discussion.data.focusId})
if(Discussion.data.qaExpandKey||this._fetchWhenReady){DiscussionClarifications._fetchSuggested()}var s=i.createFactory(a.ClarificationArea)
DiscussionClarifications._area=s({articleId:Discussion.data.focusId,suggested:DiscussionClarifications._suggested})})}}}
module.exports=DiscussionClarifications
});
KAdefine("javascript/discussion-package/discussion-projectfeedback.js", function(require, module, exports) {
var $=require("jquery")
var Discussion=require("../discussion-package/discussion.js")
var PackageManager=require("../shared-package/package-manager.js")
var DiscussionProjectFeedback={_loadComplete:false,_tabSelector:".projectfeedback-tab",subTab:"projectfeedback",_tabHeaderSelector:"#projectfeedback-tab-header",_componentMount:null,show:function(){this.load()
$(this._tabSelector).show()},hide:function(){$(this._tabSelector).hide()},sort:function(e){this.sortValue=e
this.reset()
this.load(0,this.sortValue)},shouldShowTab:function(){return this.hasHelpRequests()},hasEvalRequests:function(){return this._projectFeedback.hasEvalRequests()},hasPendingEvalRequests:function(){return this._projectFeedback.hasPendingEvalRequests()},hasHelpRequests:function(){return this._projectFeedback.hasHelpRequests()},isLoaded:function(){return!!this._projectFeedback.fetchedInitial},load:function(){if(this._loadComplete){Discussion.hideProgressBar()
return}this._projectFeedbackMount=$("<div>").appendTo(".projectfeedback-tab .projectfeedback")[0]
this._projectEvaluationMount=$("<div>").appendTo(".scratchpad-project-eval-mount")[0]
if(!this._projectFeedbackMount&&!this._projectEvaluationMount){return}var e=this
PackageManager.require("react.js","scratchpads.js","clarifications.js").then(function(){var a=require("react")
var t=require("../scratchpads-package/scratchpad-ui.js").ScratchpadUI
var c=require("../clarifications-package/models.jsx")
var s=require("../clarifications-package/projectfeedback-form.jsx")
var r
if(Discussion.data.expandFeedbackType==="projectfeedback"){r=Discussion.data.qaExpandKey}e._projectFeedback=new c.DiscussionItemCollection([],{focusKind:"scratchpad",focusId:Discussion.data.focusId,type:"projectfeedback",sortOrder:2})
if(e._projectEvaluationMount){var o=a.createFactory(s.ProjectEvaluationArea)
e._component=a.render(o({scratchpadId:Discussion.data.focusId,isProgramOwner:Discussion.data.isOwner,sendToPeers:t.originScratchpad.get("sendToPeers"),rubric:t.originScratchpad.get("projectEval"),originTitle:t.originScratchpad.get("translatedTitle"),projectFinished:t.userScratchpad.get("challenge_status")===5,collection:e._projectFeedback}),e._projectEvaluationMount)}if(e._projectFeedbackMount){var i=a.createFactory(s.ProjectFeedbackArea)
e._component=a.render(i({scratchpadId:Discussion.data.focusId,expandKey:r,canRequestFeedback:Discussion.data.canRequestFeedback,collection:e._projectFeedback}),e._projectFeedbackMount)}Discussion.hideProgressBar()
e._loadComplete=true}.bind(this))},reset:function(){this._loadComplete=false
$(this._containerSelector).html("")}}
module.exports=DiscussionProjectFeedback
});
KAdefine("javascript/discussion-package/note.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,e,i,o,l){i=i||n.helpers
var r="",s,t,a,f,c=this,p="function",h=i.helperMissing,g=void 0,u=this.escapeExpression,v=i.blockHelperMissing
function d(n,e){var o="",l,r
o+='\n        <a class="login-link" href="'
a=i.loginContinueUrl
l=a||n.loginContinueUrl
a=i.toLoginRedirectHref
r=a||n.toLoginRedirectHref
if(typeof r===p){l=r.call(n,l,{hash:{}})}else if(r===g){l=h.call(n,"toLoginRedirectHref",l,{hash:{}})}else{l=r}o+=u(l)+'">'
a=i["_"]
l=a||n["_"]
f=c.program(2,m,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(a&&typeof l===p){l=l.call(n,f)}else{l=v.call(n,l,f)}if(l||l===0){o+=l}o+="</a>\n    "
return o}function m(n,e){return"Log in first"}function C(n,e){return"Close"}r+='<div class="note">\n    '
a=i.loginContinueUrl
s=a||e.loginContinueUrl
t=i["if"]
f=c.program(1,d,l)
f.hash={}
f.fn=f
f.inverse=c.noop
s=t.call(e,s,f)
if(s||s===0){r+=s}r+='\n\n    <span class="note-description"></span>\n    <a href="javascript:void(0);" class="close-note">'
a=i["_"]
s=a||e["_"]
f=c.program(4,C,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(a&&typeof s===p){s=s.call(e,f)}else{s=v.call(e,s,f)}if(s||s===0){r+=s}r+="</a>\n</div>\n"
return r})
module.exports=t
});
KAdefine("javascript/discussion-package/discussion-note.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
require("../shared-package/i18n.js")
var KA=require("../shared-package/ka.js")
var launchSignupInModal=require("../shared-package/launch-signup-in-modal.js")
var DiscussionNote={template_:require("./note.handlebars"),$notes_:$([]),init:function(){},checkNeedsLogin:function(e,t){var n=KA.getUserProfile(),o=n&&!n.isPhantom()
if(o){return false}else{launchSignupInModal()
return true}},showInfo:function(e,t){this.show_(e,t,false)},closeAll:function(){this.$notes_.remove()
this.$notes_=$([])},close_:function(e){var t=$(e.target).parents(".note")
t.remove()
this.$notes_=this.$notes_.not(t)
return false},show_:function(e,t,n,o){if(!e){return}var i=$(e),r=i.offset()
var s=null
if(n){s=window.location.pathname+window.location.search}var a=$(this.template_({loginContinueUrl:s})).find(".note-description").text(t).end().on("click",".close-note",this.close_).appendTo("body")
a.css({left:r.left+i.outerWidth(true)/2-a.outerWidth(true)/2,top:r.top+i.outerHeight(true)/2-a.outerHeight(true)/2})
this.$notes_=this.$notes_.add(a)
if(o){o()}}}
_.bindAll(DiscussionNote)
module.exports=DiscussionNote
});
KAdefine("javascript/discussion-package/discussion-profilepromo.js", function(require, module, exports) {
var _=require("underscore")
var KA=require("../shared-package/ka.js")
var Promos=require("../shared-package/promos.js")
var DiscussionProfilePromo={name_:"visit_profile_after_post",shouldShow_:false,check:function(){Promos.hasUserSeen(this.name_,function(o){this.shouldShow_=!o},this)},show:function(o,e){if(this.shouldShow_){_.extend(o,{showProfilePromo:true,profileRoot:KA.getUserProfile().get("profileRoot"),askedQuestion:e})
Promos.markAsSeen(this.name_)}}}
module.exports=DiscussionProfilePromo
});
KAdefine("javascript/discussion-package/low-quality-notice.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js")
var $=require("jquery")
require("../shared-package/i18n.js")
var Analytics=require("../shared-package/analytics.js")
var Discussion=require("../discussion-package/discussion.js")
var DiscussionLowQualityNotice={init:function(e,i,t,o){if(t["showLowQualityNotice"]){var s=DiscussionLowQualityNotice.getFormContainer_(t,e)
DiscussionLowQualityNotice.show(s,e,t["translatedFeedbackEditTip"],t["lowQualityScore"])
DiscussionLowQualityNotice.trackShownLowQualityEvent_(e,o,t["lowQualityScore"],t["authorUserId"])
return true}if(DiscussionLowQualityNotice.exists(i)){var a=DiscussionLowQualityNotice.getScore(i),r=t["lowQualityScore"]
DiscussionLowQualityNotice.trackResubmittedEvent(i,a,r,e,o,t["authorUserId"])
DiscussionLowQualityNotice.hide(i)}return false},show:function(e,i,t,o){if(t){t=$._("Tip: %(translatedFeedbackEditTip)s",{translatedFeedbackEditTip:t})}var s=$(require("./low-quality-notice-header.handlebars")({translatedFeedbackType:Discussion._translateFeedbackType(i)}))
var a=$(require("./low-quality-notice-footer.handlebars")({translatedFeedbackEditTip:t}))
var r=100
e.switchClass("","low-quality-notice",r)
try{e.find(".discussion-text:first").focus()}catch(c){}setTimeout(function(){var i={opacity:0,height:0}
e.prepend(s)
var o=s.height()
s.css(i).animate({opacity:1,height:o},"slow")
var r=e.find(".discussion-controls:first")
if(t){a.insertBefore(r)
var c=a.height()
a.css(i).animate({opacity:1,height:c},"slow")}a.promise().done(function(){Discussion.scrollDownToReveal(r)})},r)
DiscussionLowQualityNotice.setScore(e,o)},getFormContainer_:function(e,i){var t
var o=e["feedbackKey"]
if(o){t=Discussion.getFeedbackFromKey(e["feedbackKey"])}else if(i==="answer"){var s=Discussion.getFeedbackFromKey(e["questionKey"]).parents(".thread")
t=$(".answer:not([id])",s)}else if(i==="suggested-clarification"){t=$(".newClarification")}else{t=$(".question:not([id])")}return t},trackShownLowQualityEvent_:function(e,i,t,o){Analytics.trackSingleEvent("Shown Low Quality Notice",{"Feedback Type":e,"Post Type":i?"Edit":"New","Low-Quality Score":t,"Author's user_id":o})},trackResubmittedEvent:function(e,i,t,o,s,a){var r
if(t<i){r="better quality"}else if(t>i){r="worse quality"}else{r="same quality"}Analytics.trackSingleEvent("Resubmitted After Low Quality Notice",{"Change in quality":r,"Feedback Type":o,"Post Type":s?"Edit":"New","Low-Quality Score: Before":i,"Low-Quality Score: After":t,"Author's user_id":a})},setScore:function(e,i){e.data("low-quality-score",i)},getScore:function(e){return e.data("low-quality-score")},clearScore:function(e){DiscussionLowQualityNotice.setScore(e,"")},hide:function(e){e.removeClass("low-quality-notice").find(".low-quality-notice-header").remove().end().find(".low-quality-notice-footer").remove()
DiscussionLowQualityNotice.clearScore(e)},exists:function(e){return e.hasClass("low-quality-notice")}}
module.exports=DiscussionLowQualityNotice
});
KAdefine("javascript/discussion-package/duplicate-notice.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-alert.js")
var $=require("jquery")
var _=require("underscore")
require("../shared-package/i18n.js")
var Analytics=require("../shared-package/analytics.js")
var Discussion=require("../discussion-package/discussion.js")
var DiscussionDuplicateNotice={init:function(e){e.on("click",".duplicate-notice .close",DiscussionDuplicateNotice.close)},removeAll:function(e){var i=$(".duplicate-notice .close",e.parents(".thread"))
DiscussionDuplicateNotice.close.call(i)
i.alert("close")},close:function(){var e=$(this).parents(".duplicate-notice"),i=e.data("duplicate-key"),s=Discussion.getFeedbackFromKey(i)
Discussion.unhighlight(s,"warning")},findDuplicate_:function(e,i){var i=i.toLowerCase(),s=$(".answers",e.parents(".thread")).find(".answer")
var a=null
_.each(s,function(e){var s=$(".discussion-content",e).text().toLowerCase()
if(s===i||s.indexOf(i)>-1){a=e}})
return $(a)},show:function(e,i){var s=DiscussionDuplicateNotice.findDuplicate_(i,e)
if(s.length){var a=require("./duplicate-notice.handlebars")({translatedFeedbackType:$._("answer")}),t=$(a)
i.before(t)
Discussion.highlight(s,"warning")
t.data("duplicate-key",Discussion.getKey(s))
Analytics.trackSingleEvent("Duplicated Feedback")
return true}return false}}
module.exports=DiscussionDuplicateNotice
});
KAdefine("javascript/discussion-package/thread.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,s,e,r,a){e=e||n.helpers
r=r||n.partials
var i="",o,t,l,f,c=this,u="function",h=e.helperMissing,d=void 0,p=this.escapeExpression,v=e.blockHelperMissing
function w(n,s){return" has-answered"}function g(n,s){var r="",a
r+='\n     data-focus-kind="'
l=e.focus
a=l||n.focus
a=a===null||a===undefined||a===false?a:a.kind
if(typeof a===u){a=a.call(n,{hash:{}})}else if(a===d){a=h.call(n,"focus.kind",{hash:{}})}r+=p(a)+'"\n     data-focus-id="'
l=e.focus
a=l||n.focus
a=a===null||a===undefined||a===false?a:a.id
if(typeof a===u){a=a.call(n,{hash:{}})}else if(a===d){a=h.call(n,"focus.id",{hash:{}})}r+=p(a)+'"\n     '
return r}function m(n,s){var r="",a,i
r+='\n        <div class="answers '
l=e.expandedAnswers
a=l||n.expandedAnswers
i=e.unless
f=c.program(6,A,s)
f.hash={}
f.fn=f
f.inverse=c.noop
a=i.call(n,a,f)
if(a||a===0){r+=a}r+='">\n            '
l=e.expandedAnswers
a=l||n.expandedAnswers
i=e.each
f=c.program(8,_,s)
f.hash={}
f.fn=f
f.inverse=c.noop
a=i.call(n,a,f)
if(a||a===0){r+=a}r+="\n\n            "
l=e.hasHiddenAnswers
a=l||n.hasHiddenAnswers
i=e["if"]
f=c.program(10,P,s)
f.hash={}
f.fn=f
f.inverse=c.noop
a=i.call(n,a,f)
if(a||a===0){r+=a}r+="\n        </div>\n\n        "
l=e.showAuthorControls
a=l||n.showAuthorControls
i=e.unless
f=c.program(21,b,s)
f.hash={}
f.fn=f
f.inverse=c.noop
a=i.call(n,a,f)
if(a||a===0){r+=a}r+="\n    "
return r}function A(n,s){return" with-no-answers"}function _(n,s){var a="",i
a+="\n                "
i=n
i=c.invokePartial(r.discussion_answer,"discussion_answer",i,e,r)
if(i||i===0){a+=i}a+="\n            "
return a}function P(n,s){var r="",a,i
r+='\n                <div class="show-answer-links">\n                    <a href="javascript:void(0);" class="show-hidden-answers">\n                        '
l=e.answerCount
a=l||n.answerCount
l=e.ngettext
i=l||n.ngettext
f=c.program(11,k,s)
f.hash={}
f.fn=f
f.inverse=c.program(13,y,s)
if(l&&typeof i===u){a=i.call(n,a,f)}else{a=v.call(n,i,a,f)}if(a||a===0){r+=a}r+="\n                    </a>\n                    "
l=e.showAuthorControls
a=l||n.showAuthorControls
i=e.unless
f=c.program(15,C,s)
f.hash={}
f.fn=f
f.inverse=c.noop
a=i.call(n,a,f)
if(a||a===0){r+=a}r+='\n                </a>\n                </div>\n                <div class="hidden-answers" style="display: none">\n                    '
l=e.answers
a=l||n.answers
i=e.each
f=c.program(19,q,s)
f.hash={}
f.fn=f
f.inverse=c.noop
a=i.call(n,a,f)
if(a||a===0){r+=a}r+="\n                </div>\n            "
return r}function k(n,s){return"Show answer"}function y(n,s){var r="",a
r+="Show all "
l=e.answerCount
a=l||n.answerCount
if(typeof a===u){a=a.call(n,{hash:{}})}else if(a===d){a=h.call(n,"answerCount",{hash:{}})}r+=p(a)+" answers"
return r}function C(n,s){var r="",a,i
r+="\n                        "
l=e.restrictPosting
a=l||n.restrictPosting
i=e.unless
f=c.program(16,x,s)
f.hash={}
f.fn=f
f.inverse=c.noop
a=i.call(n,a,f)
if(a||a===0){r+=a}r+="\n                    "
return r}function x(n,s){var a="",i
a+="\n                            "
i=n
i=c.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",i,e,r)
if(i||i===0){a+=i}a+='\n                            <a href="javascript:void(0);" class="show-answer-form">\n                                '
l=e["_"]
i=l||n["_"]
f=c.program(17,H,s)
f.hash={}
f.fn=f
f.inverse=c.noop
if(l&&typeof i===u){i=i.call(n,f)}else{i=v.call(n,i,f)}if(i||i===0){a+=i}a+="\n                            </a>\n                        "
return a}function H(n,s){return"Answer this question"}function q(n,s){var a="",i
a+="\n                        "
i=n
i=c.invokePartial(r.discussion_answer,"discussion_answer",i,e,r)
if(i||i===0){a+=i}a+="\n                    "
return a}function b(n,s){var r="",a,i
r+="\n            "
l=e.restrictPosting
a=l||n.restrictPosting
i=e.unless
f=c.program(22,j,s)
f.hash={}
f.fn=f
f.inverse=c.noop
a=i.call(n,a,f)
if(a||a===0){r+=a}r+="\n        "
return r}function j(n,s){var a="",i,o
a+="\n                "
l=e.hasHiddenAnswers
i=l||n.hasHiddenAnswers
o=e["if"]
f=c.program(23,M,s)
f.hash={}
f.fn=f
f.inverse=c.program(25,S,s)
i=o.call(n,i,f)
if(i||i===0){a+=i}a+="\n                "
i=n
i=c.invokePartial(r["discussion_answer-form"],"discussion_answer-form",i,e,r)
if(i||i===0){a+=i}a+="\n                </div>\n            "
return a}function M(n,s){return'\n                    <div class="add-answer" style="display: none">\n                '}function S(n,s){return'\n                    <div class="add-answer">\n                '}i+='<div class="thread'
l=e.hasAnswered
o=l||s.hasAnswered
t=e["if"]
f=c.program(1,w,a)
f.hash={}
f.fn=f
f.inverse=c.noop
o=t.call(s,o,f)
if(o||o===0){i+=o}i+='"\n     '
l=e.focus
o=l||s.focus
t=e["if"]
f=c.program(3,g,a)
f.hash={}
f.fn=f
f.inverse=c.noop
o=t.call(s,o,f)
if(o||o===0){i+=o}i+=">\n    "
o=s
o=c.invokePartial(r.discussion_question,"discussion_question",o,e,r)
if(o||o===0){i+=o}i+="\n\n    "
l=e.inUserProfile
o=l||s.inUserProfile
t=e.unless
f=c.program(5,m,a)
f.hash={}
f.fn=f
f.inverse=c.noop
o=t.call(s,o,f)
if(o||o===0){i+=o}i+="\n</div>\n\n"
return i})
module.exports=t
});
KAdefine("javascript/discussion-package/question.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,n,i,s,o){i=i||e.helpers
s=s||e.partials
var l="",r,a,t,f,c,h=this,u="function",p=i.helperMissing,d=void 0,v=this.escapeExpression,m=i.blockHelperMissing
function k(e,n){return"deleted"}function y(e,n){return" context-link"}function g(e,n){return" is-author"}function P(e,n){var s="",o
s+='\n        <a href="'
f=i.focus
o=f||e.focus
o=o===null||o===undefined||o===false?o:o.relativeUrl
if(typeof o===u){o=o.call(e,{hash:{}})}else if(o===d){o=p.call(e,"focus.relativeUrl",{hash:{}})}s+=v(o)+"?qa_expand_key="
f=i.key
o=f||e.key
if(typeof o===u){o=o.call(e,{hash:{}})}else if(o===d){o=p.call(e,"key",{hash:{}})}s+=v(o)+'" class="covering-link"></a>\n    '
return s}function U(e,n){var s,o,l,r
s="form-controls"
o="discussion"
l={}
r="Edit this question"
l["label"]=r
f=i.invokePartial
r=f||e.invokePartial
c=h.program(10,_,n)
c.hash=l
c.fn=c
c.inverse=h.noop
if(f&&typeof r===u){s=r.call(e,o,s,c)}else{s=m.call(e,r,o,s,c)}if(s||s===0){return s}else{return""}}function _(e,n){var i=""
return i}l+='<div class="question '
f=i.appearsAsDeleted
r=f||n.appearsAsDeleted
a=i["if"]
c=h.program(1,k,o)
c.hash={}
c.fn=c
c.inverse=h.noop
r=a.call(n,r,c)
if(r||r===0){l+=r}l+=" discussion-item"
f=i.inUserProfile
r=f||n.inUserProfile
a=i["if"]
c=h.program(3,y,o)
c.hash={}
c.fn=c
c.inverse=h.noop
r=a.call(n,r,c)
if(r||r===0){l+=r}f=i.showAuthorControls
r=f||n.showAuthorControls
a=i["if"]
c=h.program(5,g,o)
c.hash={}
c.fn=c
c.inverse=h.noop
r=a.call(n,r,c)
if(r||r===0){l+=r}l+='"\n     id="'
f=i.key
r=f||n.key
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===d){r=p.call(n,"key",{hash:{}})}l+=v(r)+'">\n\n    '
f=i.inUserProfile
r=f||n.inUserProfile
a=i["if"]
c=h.program(7,P,o)
c.hash={}
c.fn=c
c.inverse=h.noop
r=a.call(n,r,c)
if(r||r===0){l+=r}l+='\n\n    <div class="discussion-content">\n        '
f=i.content
r=f||n.content
a={}
t=1
a["nofollow"]=t
f=i.formatContent
t=f||n.formatContent
c={}
c.hash=a
if(typeof t===u){r=t.call(n,r,c)}else if(t===d){r=p.call(n,"formatContent",r,c)}else{r=t}l+=v(r)+"\n    </div>\n\n    "
r=n
r=h.invokePartial(s["discussion_discussion-meta"],"discussion_discussion-meta",r,i,s)
if(r||r===0){l+=r}l+="\n\n    "
f=i["_"]
r=f||n["_"]
c=h.program(9,U,o)
c.hash={}
c.fn=c
c.inverse=h.noop
if(f&&typeof r===u){r=r.call(n,c)}else{r=m.call(n,r,c)}if(r||r===0){l+=r}l+="\n</div>\n"
return l})
module.exports=t
});
KAdefine("javascript/discussion-package/answer.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,n,s,i,o){s=s||e.helpers
i=i||e.partials
var r="",a,t,l,f,u=this,c="function",h=s.helperMissing,d=void 0,p=this.escapeExpression,v=s.blockHelperMissing
function m(e,n){return"deleted"}function y(e,n){return" context-link"}function g(e,n){return" is-author"}function q(e,n){var i="",o
i+='data-question-key="'
l=s.questionKey
o=l||e.questionKey
if(typeof o===c){o=o.call(e,{hash:{}})}else if(o===d){o=h.call(e,"questionKey",{hash:{}})}i+=p(o)+'"'
return i}function k(e,n){var i="",o,r
i+="\n        "
l=s.question
o=l||e.question
o=o===null||o===undefined||o===false?o:o.focus
o=o===null||o===undefined||o===false?o:o.relativeUrl
r=s["if"]
f=u.program(10,b,n)
f.hash={}
f.fn=f
f.inverse=u.noop
o=r.call(e,o,f)
if(o||o===0){i+=o}i+='\n\n        <div class="discussion-question-title discussion-light">\n            '
l=s.question
o=l||e.question
o=o===null||o===undefined||o===false?o:o.content
l=s.formatContent
r=l||e.formatContent
if(typeof r===c){o=r.call(e,o,{hash:{}})}else if(r===d){o=h.call(e,"formatContent",o,{hash:{}})}else{o=r}i+=p(o)+'\n        </div>\n        <div class="discussion-indent">\n    '
return i}function b(e,n){var i="",o
i+='\n            <a href="'
l=s.question
o=l||e.question
o=o===null||o===undefined||o===false?o:o.focus
o=o===null||o===undefined||o===false?o:o.relativeUrl
if(typeof o===c){o=o.call(e,{hash:{}})}else if(o===d){o=h.call(e,"question.focus.relativeUrl",{hash:{}})}i+=p(o)+"?qa_expand_key="
l=s.question
o=l||e.question
o=o===null||o===undefined||o===false?o:o.key
if(typeof o===c){o=o.call(e,{hash:{}})}else if(o===d){o=h.call(e,"question.key",{hash:{}})}i+=p(o)+'"\n                class="covering-link"\n                data-feedback-type="answer"\n                data-votes="'
l=s.sumVotesIncremented
o=l||e.sumVotesIncremented
if(typeof o===c){o=o.call(e,{hash:{}})}else if(o===d){o=h.call(e,"sumVotesIncremented",{hash:{}})}i+=p(o)+'">\n            </a>\n        '
return i}function w(e,n){return'\n        <div class="item-separator"></div>\n    '}function A(e,n){var i="",o
i+='\n        <strong class="from-video-author">'
l=s["_"]
o=l||e["_"]
f=u.program(15,U,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof o===c){o=o.call(e,f)}else{o=v.call(e,o,f)}if(o||o===0){i+=o}i+="</strong>\n        <br>\n    "
return i}function U(e,n){return"From the author:"}function V(e,n){var i="",o,r
i+="\n            "
l=s.content
o=l||e.content
l=s.formatEvalAnswer
r=l||e.formatEvalAnswer
if(typeof r===c){o=r.call(e,o,{hash:{}})}else if(r===d){o=h.call(e,"formatEvalAnswer",o,{hash:{}})}else{o=r}i+=p(o)+"\n        "
return i}function C(e,n){var i="",o,r,a
i+="\n            "
l=s.content
o=l||e.content
r={}
a=1
r["nofollow"]=a
l=s.formatContent
a=l||e.formatContent
f={}
f.hash=r
if(typeof a===c){o=a.call(e,o,f)}else if(a===d){o=h.call(e,"formatContent",o,f)}else{o=a}i+=p(o)+"\n        "
return i}function _(e,n){var i="",o
i+='\n    <div class="discussion-embed-video">\n        <iframe width="488" height="275" src="'
l=s.embedVideoUrl
o=l||e.embedVideoUrl
if(typeof o===c){o=o.call(e,{hash:{}})}else if(o===d){o=h.call(e,"embedVideoUrl",{hash:{}})}i+=p(o)+'?modestbranding=1;rel=0;fs=1" frameborder="0" allowfullscreen></iframe>\n    </div>\n    '
return i}function E(e,n){var i,o,r,a
i="form-controls"
o="discussion"
r={}
a="Edit this answer"
r["label"]=a
l=s.invokePartial
a=l||e.invokePartial
f=u.program(24,P,n)
f.hash=r
f.fn=f
f.inverse=u.noop
if(l&&typeof a===c){i=a.call(e,o,i,f)}else{i=v.call(e,a,o,i,f)}if(i||i===0){return i}else{return""}}function P(e,n){var s=""
return s}function K(e,n){return"\n        </div>\n    "}r+='<div class="answer '
l=s.appearsAsDeleted
a=l||n.appearsAsDeleted
t=s["if"]
f=u.program(1,m,o)
f.hash={}
f.fn=f
f.inverse=u.noop
a=t.call(n,a,f)
if(a||a===0){r+=a}r+=" discussion-item"
l=s.inUserProfile
a=l||n.inUserProfile
t=s["if"]
f=u.program(3,y,o)
f.hash={}
f.fn=f
f.inverse=u.noop
a=t.call(n,a,f)
if(a||a===0){r+=a}l=s.showAuthorControls
a=l||n.showAuthorControls
t=s["if"]
f=u.program(5,g,o)
f.hash={}
f.fn=f
f.inverse=u.noop
a=t.call(n,a,f)
if(a||a===0){r+=a}r+='"\n     '
l=s.questionKey
a=l||n.questionKey
t=s["if"]
f=u.program(7,q,o)
f.hash={}
f.fn=f
f.inverse=u.noop
a=t.call(n,a,f)
if(a||a===0){r+=a}r+='\n     id="'
l=s.key
a=l||n.key
if(typeof a===c){a=a.call(n,{hash:{}})}else if(a===d){a=h.call(n,"key",{hash:{}})}r+=p(a)+'">\n\n    '
l=s.question
a=l||n.question
t=s["if"]
f=u.program(9,k,o)
f.hash={}
f.fn=f
f.inverse=u.program(12,w,o)
a=t.call(n,a,f)
if(a||a===0){r+=a}r+="\n\n    "
l=s.fromVideoAuthor
a=l||n.fromVideoAuthor
t=s["if"]
f=u.program(14,A,o)
f.hash={}
f.fn=f
f.inverse=u.noop
a=t.call(n,a,f)
if(a||a===0){r+=a}r+='\n\n    <div class="discussion-content">\n        '
l=s.isProjectEvalAnswer
a=l||n.isProjectEvalAnswer
t=s["if"]
f=u.program(17,V,o)
f.hash={}
f.fn=f
f.inverse=u.program(19,C,o)
a=t.call(n,a,f)
if(a||a===0){r+=a}r+="\n    </div>\n\n    "
l=s.embedVideoUrl
a=l||n.embedVideoUrl
t=s["if"]
f=u.program(21,_,o)
f.hash={}
f.fn=f
f.inverse=u.noop
a=t.call(n,a,f)
if(a||a===0){r+=a}r+="\n\n    "
a=n
a=u.invokePartial(i["discussion_discussion-meta"],"discussion_discussion-meta",a,s,i)
if(a||a===0){r+=a}r+="\n\n    "
l=s["_"]
a=l||n["_"]
f=u.program(23,E,o)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof a===c){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){r+=a}r+="\n\n    "
l=s.question
a=l||n.question
t=s["if"]
f=u.program(26,K,o)
f.hash={}
f.fn=f
f.inverse=u.noop
a=t.call(n,a,f)
if(a||a===0){r+=a}r+="\n</div>\n"
return r})
module.exports=t
});
KAdefine("javascript/discussion-package/comment.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,n,s,i,a){s=s||e.helpers
i=i||e.partials
var l="",o,f,r,t,c,h=this,u="function",d=s.helperMissing,p=void 0,v=this.escapeExpression,k=s.blockHelperMissing
function y(e,n){return"deleted"}function m(e,n){return" context-link"}function g(e,n){return" is-author"}function P(e,n){var i="",a
i+='data-focus-kind="'
t=s.focus
a=t||e.focus
a=a===null||a===undefined||a===false?a:a.kind
if(typeof a===u){a=a.call(e,{hash:{}})}else if(a===p){a=d.call(e,"focus.kind",{hash:{}})}i+=v(a)+'" data-focus-id="'
t=s.focus
a=t||e.focus
a=a===null||a===undefined||a===false?a:a.id
if(typeof a===u){a=a.call(e,{hash:{}})}else if(a===p){a=d.call(e,"focus.id",{hash:{}})}i+=v(a)+'"'
return i}function U(e,n){var i="",a
i+='\n        <a href="'
t=s.focus
a=t||e.focus
a=a===null||a===undefined||a===false?a:a.relativeUrl
if(typeof a===u){a=a.call(e,{hash:{}})}else if(a===p){a=d.call(e,"focus.relativeUrl",{hash:{}})}i+=v(a)+"?qa_expand_key="
t=s.key
a=t||e.key
if(typeof a===u){a=a.call(e,{hash:{}})}else if(a===p){a=d.call(e,"key",{hash:{}})}i+=v(a)+'" class="covering-link"></a>\n    '
return i}function _(e,n){var i,a,l,o
i="form-controls"
a="discussion"
l={}
o="Edit this feedback"
l["label"]=o
t=s.invokePartial
o=t||e.invokePartial
c=h.program(12,C,n)
c.hash=l
c.fn=c
c.inverse=h.noop
if(t&&typeof o===u){i=o.call(e,a,i,c)}else{i=k.call(e,o,a,i,c)}if(i||i===0){return i}else{return""}}function C(e,n){var s=""
return s}l+='<div class="comment '
t=s.appearsAsDeleted
o=t||n.appearsAsDeleted
f=s["if"]
c=h.program(1,y,a)
c.hash={}
c.fn=c
c.inverse=h.noop
o=f.call(n,o,c)
if(o||o===0){l+=o}l+=" discussion-item"
t=s.inUserProfile
o=t||n.inUserProfile
f=s["if"]
c=h.program(3,m,a)
c.hash={}
c.fn=c
c.inverse=h.noop
o=f.call(n,o,c)
if(o||o===0){l+=o}t=s.showAuthorControls
o=t||n.showAuthorControls
f=s["if"]
c=h.program(5,g,a)
c.hash={}
c.fn=c
c.inverse=h.noop
o=f.call(n,o,c)
if(o||o===0){l+=o}l+='" id="'
t=s.key
o=t||n.key
if(typeof o===u){o=o.call(n,{hash:{}})}else if(o===p){o=d.call(n,"key",{hash:{}})}l+=v(o)+'"\n     data-key="'
t=s.key
o=t||n.key
if(typeof o===u){o=o.call(n,{hash:{}})}else if(o===p){o=d.call(n,"key",{hash:{}})}l+=v(o)+'"\n     '
t=s.focus
o=t||n.focus
f=s["if"]
c=h.program(7,P,a)
c.hash={}
c.fn=c
c.inverse=h.noop
o=f.call(n,o,c)
if(o||o===0){l+=o}l+='>\n\n    <div class="item-separator"></div>\n    '
t=s.inUserProfile
o=t||n.inUserProfile
f=s["if"]
c=h.program(9,U,a)
c.hash={}
c.fn=c
c.inverse=h.noop
o=f.call(n,o,c)
if(o||o===0){l+=o}l+='\n\n    <div class="discussion-content">\n        '
t=s.content
o=t||n.content
f={}
r=1
f["nofollow"]=r
t=s.formatContent
r=t||n.formatContent
c={}
c.hash=f
if(typeof r===u){o=r.call(n,o,c)}else if(r===p){o=d.call(n,"formatContent",o,c)}else{o=r}l+=v(o)+"\n    </div>\n\n    "
o=n
o=h.invokePartial(i["discussion_discussion-meta"],"discussion_discussion-meta",o,s,i)
if(o||o===0){l+=o}l+="\n\n    "
t=s["_"]
o=t||n["_"]
c=h.program(11,_,a)
c.hash={}
c.fn=c
c.inverse=h.noop
if(t&&typeof o===u){o=o.call(n,c)}else{o=k.call(n,o,c)}if(o||o===0){l+=o}l+="\n</div>\n"
return l})
module.exports=t
});
KAdefine("javascript/discussion-package/reply.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(a,e,n,s,o){n=n||a.helpers
var r="",l,t,i,h,f,c=this,u="function",p=n.blockHelperMissing,d=n.helperMissing,v=void 0,m=this.escapeExpression
function y(a,e){return" deleted"}function g(a,e){var s="",o,r
s+='\n            <span class="mod-tools" data-key="'
h=n.key
o=h||a.key
if(typeof o===u){o=o.call(a,{hash:{}})}else if(o===v){o=d.call(a,"key",{hash:{}})}s+=m(o)+'" data-is-author="'
h=n.showAuthorControls
o=h||a.showAuthorControls
if(typeof o===u){o=o.call(a,{hash:{}})}else if(o===v){o=d.call(a,"showAuthorControls",{hash:{}})}s+=m(o)+'" data-in-queue="'
h=n.inQueue
o=h||a.inQueue
if(typeof o===u){o=o.call(a,{hash:{}})}else if(o===v){o=d.call(a,"inQueue",{hash:{}})}s+=m(o)+'">\n                '
h=n.deleted
o=h||a.deleted
r=n["if"]
f=c.program(4,k,e)
f.hash={}
f.fn=f
f.inverse=c.program(7,C,e)
o=r.call(a,o,f)
if(o||o===0){s+=o}s+="\n            </span>\n            "
return s}function k(a,e){var s="",o
s+='\n                    <a href="javascript:void(0);" class="undelete">'
h=n["_"]
o=h||a["_"]
f=c.program(5,A,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(h&&typeof o===u){o=o.call(a,f)}else{o=p.call(a,o,f)}if(o||o===0){s+=o}s+="</a>\n                "
return s}function A(a,e){return"Undelete"}function C(a,e){var s="",o
s+='\n                    <a href="javascript:void(0);" class="delete">'
h=n["_"]
o=h||a["_"]
f=c.program(8,w,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(h&&typeof o===u){o=o.call(a,f)}else{o=p.call(a,o,f)}if(o||o===0){s+=o}s+="</a>\n                "
return s}function w(a,e){return"Delete"}function _(a,e){var s="",o,r
s+="\n                "
h=n.showAuthorControls
o=h||a.showAuthorControls
r=n["if"]
f=c.program(11,Q,e)
f.hash={}
f.fn=f
f.inverse=c.noop
o=r.call(a,o,f)
if(o||o===0){s+=o}s+="\n            "
return s}function Q(a,e){var s="",o
s+='\n                <span class="mod-tools" data-key="'
h=n.key
o=h||a.key
if(typeof o===u){o=o.call(a,{hash:{}})}else if(o===v){o=d.call(a,"key",{hash:{}})}s+=m(o)+'" data-is-author="'
h=n.showAuthorControls
o=h||a.showAuthorControls
if(typeof o===u){o=o.call(a,{hash:{}})}else if(o===v){o=d.call(a,"showAuthorControls",{hash:{}})}s+=m(o)+'" data-in-queue="'
h=n.inQueue
o=h||a.inQueue
if(typeof o===u){o=o.call(a,{hash:{}})}else if(o===v){o=d.call(a,"inQueue",{hash:{}})}s+=m(o)+'">\n                    <a href="javascript:void(0);" class="delete">'
h=n["_"]
o=h||a["_"]
f=c.program(12,U,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(h&&typeof o===u){o=o.call(a,f)}else{o=p.call(a,o,f)}if(o||o===0){s+=o}s+="</a>\n                </span>\n                "
return s}function U(a,e){return"Delete"}function N(a,e){var s="",o,r
s+="\n                "
s+='\n                <span class="discussion-meta-faded">'
h=n["_"]
o=h||a["_"]
f=c.program(15,S,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(h&&typeof o===u){o=o.call(a,f)}else{o=p.call(a,o,f)}if(o||o===0){s+=o}s+="</span>\n                "
h=n.authorNickname
o=h||a.authorNickname
r=n["if"]
f=c.program(17,D,e)
f.hash={}
f.fn=f
f.inverse=c.program(20,b,e)
o=r.call(a,o,f)
if(o||o===0){s+=o}s+="\n            "
return s}function S(a,e){return"by"}function D(a,e){var s="",o,r
s+='\n                <a class="author-nickname discussion-author" data-user-id="'
h=n.authorUserId
o=h||a.authorUserId
if(typeof o===u){o=o.call(a,{hash:{}})}else if(o===v){o=d.call(a,"authorUserId",{hash:{}})}s+=m(o)+'">\n                    '
h=n.authorAvatarSrc
o=h||a.authorAvatarSrc
r=n["if"]
f=c.program(18,M,e)
f.hash={}
f.fn=f
f.inverse=c.noop
o=r.call(a,o,f)
if(o||o===0){s+=o}h=n.authorNickname
o=h||a.authorNickname
if(typeof o===u){o=o.call(a,{hash:{}})}else if(o===v){o=d.call(a,"authorNickname",{hash:{}})}s+=m(o)+"\n                </a>\n                "
return s}function M(a,e){var s="",o
s+='<img class="discussion-author-avatar" src="'
h=n.authorAvatarSrc
o=h||a.authorAvatarSrc
if(typeof o===u){o=o.call(a,{hash:{}})}else if(o===v){o=d.call(a,"authorAvatarSrc",{hash:{}})}s+=m(o)+'">'
return s}function b(a,e){var s="",o
s+="\n                "
h=n["_"]
o=h||a["_"]
f=c.program(21,j,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(h&&typeof o===u){o=o.call(a,f)}else{o=p.call(a,o,f)}if(o||o===0){s+=o}s+="\n                "
return s}function j(a,e){return"Anonymous"}r+='<div class="discussion-item reply'
h=n.appearsAsDeleted
l=h||e.appearsAsDeleted
t=n["if"]
f=c.program(1,y,o)
f.hash={}
f.fn=f
f.inverse=c.noop
l=t.call(e,l,f)
if(l||l===0){r+=l}r+='" id="'
h=n.key
l=h||e.key
if(typeof l===u){l=l.call(e,{hash:{}})}else if(l===v){l=d.call(e,"key",{hash:{}})}r+=m(l)+'">\n    <div class="discussion-content">\n        '
h=n.content
l=h||e.content
t={}
i=1
t["nofollow"]=i
h=n.formatContent
i=h||e.formatContent
f={}
f.hash=t
if(typeof i===u){l=i.call(e,l,f)}else if(i===v){l=d.call(e,"formatContent",l,f)}else{l=i}r+=m(l)+"\n    </div>\n\n    "
r+='\n    <div class="discussion-meta">\n        <div class="discussion-meta-controls">\n            '
h=n.showModControls
l=h||e.showModControls
t=n["if"]
f=c.program(3,g,o)
f.hash={}
f.fn=f
f.inverse=c.program(10,_,o)
l=t.call(e,l,f)
if(l||l===0){r+=l}r+='\n        </div>\n        <div class="discussion-meta-info">\n            <span class="timeago" title="'
h=n.date
l=h||e.date
if(typeof l===u){l=l.call(e,{hash:{}})}else if(l===v){l=d.call(e,"date",{hash:{}})}r+=m(l)+'">\n                '
h=n.date
l=h||e.date
if(typeof l===u){l=l.call(e,{hash:{}})}else if(l===v){l=d.call(e,"date",{hash:{}})}r+=m(l)+"\n            </span>\n\n            "
h=n.inUserProfile
l=h||e.inUserProfile
t=n.unless
f=c.program(14,N,o)
f.hash={}
f.fn=f
f.inverse=c.noop
l=t.call(e,l,f)
if(l||l===0){r+=l}r+='\n        </div>\n    </div>\n    <div class="item-separator"></div>\n</div>\n'
return r})
module.exports=t
});
KAdefine("javascript/discussion-package/replies-container.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,i,s,e,l){s=s||n.helpers
var r="",a,d,o,t,v=this,c="function",p=s.blockHelperMissing
function u(n,i){var e="",l
e+='\n            <div class="loading" style="display:none;">\n                <div class="discussion-item reply" style="opacity:0;">\n                    <div class="throbber"></div>\n                    <div class="discussion-content">'
o=s["_"]
l=o||n["_"]
t=v.program(2,f,i)
t.hash={}
t.fn=t
t.inverse=v.noop
if(o&&typeof l===c){l=l.call(n,t)}else{l=p.call(n,l,t)}if(l||l===0){e+=l}e+="</div>\n                </div>\n            </div>\n            "
return e}function f(n,i){return"Loading..."}r+='<div class="replies-container">\n    <div class="replies-triangle"></div>\n    <div class="replies-panel">\n        <div class="replies">\n            '
o=s.replyCount
a=o||i.replyCount
d=s["if"]
t=v.program(1,u,l)
t.hash={}
t.fn=t
t.inverse=v.noop
a=d.call(i,a,t)
if(a||a===0){r+=a}r+='\n        </div>\n\n        <div class="add-reply"></div>\n    </div>\n</div>\n'
return r})
module.exports=t
});
KAdefine("javascript/discussion-package/question-form.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,n,i,s,a){i=i||e.helpers
s=s||e.partials
var o="",r,l,t,u=this,c="function",f=i.blockHelperMissing
function p(e,n){return"Ask a question..."}function v(e,n){var s,a,o,r
s="form-controls"
a="discussion"
o={}
r="Ask your question"
o["label"]=r
l=i.invokePartial
r=l||e.invokePartial
t=u.program(4,d,n)
t.hash=o
t.fn=t
t.inverse=u.noop
if(l&&typeof r===c){s=r.call(e,a,s,t)}else{s=f.call(e,r,a,s,t)}if(s||s===0){return s}else{return""}}function d(e,n){var i=""
return i}o+='<div class="ask-question">\n    '
r=n
r=u.invokePartial(s["discussion_question-guidelines"],"discussion_question-guidelines",r,i,s)
if(r||r===0){o+=r}o+='\n    <div class="question">\n        <textarea class="discussion-text" placeholder="'
l=i["_"]
r=l||n["_"]
t=u.program(1,p,a)
t.hash={}
t.fn=t
t.inverse=u.noop
if(l&&typeof r===c){r=r.call(n,t)}else{r=f.call(n,r,t)}if(r||r===0){o+=r}o+='"></textarea>\n\n        '
l=i["_"]
r=l||n["_"]
t=u.program(3,v,a)
t.hash={}
t.fn=t
t.inverse=u.noop
if(l&&typeof r===c){r=r.call(n,t)}else{r=f.call(n,r,t)}if(r||r===0){o+=r}o+="\n    </div>\n</div>\n"
return o})
module.exports=t
});
KAdefine("javascript/discussion-package/question-guidelines.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,n,i,a,s){i=i||e.helpers
var l="",t,r,o,c,h=this,f="function",p=i.blockHelperMissing
function u(e,n){var a="",s
a+='\n                <h4 class="guideline-header">\n                    '
o=i["_"]
s=o||e["_"]
c=h.program(2,d,n)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof s===f){s=s.call(e,c)}else{s=p.call(e,s,c)}if(s||s===0){a+=s}a+='\n                </h4>\n                <div class="guideline-paragraph">\n                    <em class="guideline-example">\n                        '
o=i["_"]
s=o||e["_"]
c=h.program(4,g,n)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof s===f){s=s.call(e,c)}else{s=p.call(e,s,c)}if(s||s===0){a+=s}a+="\n                    </em>\n                </div>\n                "
return a}function d(e,n){return"Be specific, and indicate a location in the text:"}function g(e,n){return"In the second paragraph, how is the moon large enough to block the sun? Isn't the sun way larger?"}function m(e,n){var a="",s
a+='\n                <h4 class="guideline-header">\n                    '
o=i["_"]
s=o||e["_"]
c=h.program(7,v,n)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof s===f){s=s.call(e,c)}else{s=p.call(e,s,c)}if(s||s===0){a+=s}a+='\n                </h4>\n                <div class="guideline-paragraph">\n                    <em class="guideline-example">\n                        '
o=i["_"]
s=o||e["_"]
c=h.program(9,_,n)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof s===f){s=s.call(e,c)}else{s=p.call(e,s,c)}if(s||s===0){a+=s}a+="\n                    </em>\n                </div>\n                "
return a}function v(e,n){return"Be specific, and indicate a time in the video:"}function _(e,n){return"At 5:31, how is the moon large enough to block the sun? Isn't the sun way larger?"}function y(e,n){return"Have something that's not a question about this content?"}function k(e,n){return"Post a tip or thanks"}function b(e,n){return"Join our help discussions"}function w(e,n){return"Report a technical problem with the site"}function q(e,n){return'<a class="alert-link" href="https://khanacademy.zendesk.com/hc/communities/public/topics/200136634-Feature-Requests">Request a feature</a>'}function x(e,n){var a,s
o=i.showSpinoffs
a=o||e.showSpinoffs
s=i.unless
c=h.program(22,R,n)
c.hash={}
c.fn=c
c.inverse=h.noop
a=s.call(e,a,c)
if(a||a===0){return a}else{return""}}function R(e,n){var a="",s
a+='\n                    <li>\n                        <a href="javascript:void 0;" class="simple-button suggest-clarification">'
o=i["_"]
s=o||e["_"]
c=h.program(23,A,n)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof s===f){s=s.call(e,c)}else{s=p.call(e,s,c)}if(s||s===0){a+=s}a+="</a>\n                    </li>\n                    "
return a}function A(e,n){return"Report a mistake in the video"}function H(e,n){return"This discussion area is not meant for answering homework questions."}l+='<div class="question-guidelines post-guidelines alert" style="display: none;">\n    <table>\n        <tr>\n            <td class="guideline-cell">\n                '
o=i.isArticle
t=o||n.isArticle
r=i["if"]
c=h.program(1,u,s)
c.hash={}
c.fn=c
c.inverse=h.program(6,m,s)
t=r.call(n,t,c)
if(t||t===0){l+=t}l+='\n            </td>\n            <td class="guideline-cell">\n                <h4 class="guideline-header">\n                    '
o=i["_"]
t=o||n["_"]
c=h.program(11,y,s)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof t===f){t=t.call(n,c)}else{t=p.call(n,t,c)}if(t||t===0){l+=t}l+='\n                </h4>\n                <ul class="guideline-items">\n                    <li>\n                        <a class="alert-link post-feedback-instead" href="javascript:void(0);">'
o=i["_"]
t=o||n["_"]
c=h.program(13,k,s)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof t===f){t=t.call(n,c)}else{t=p.call(n,t,c)}if(t||t===0){l+=t}l+='</a>\n                    </li>\n                    <li>\n                        <a class="alert-link" href="https://khanacademy.zendesk.com/hc/communities/public/topics">'
o=i["_"]
t=o||n["_"]
c=h.program(15,b,s)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof t===f){t=t.call(n,c)}else{t=p.call(n,t,c)}if(t||t===0){l+=t}l+='</a>\n                    </li>\n                    <li>\n                        <a class="alert-link" href="http://khanacademy.org/reportissue?type=Defect">'
o=i["_"]
t=o||n["_"]
c=h.program(17,w,s)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof t===f){t=t.call(n,c)}else{t=p.call(n,t,c)}if(t||t===0){l+=t}l+="</a>\n                    </li>\n                    <li>\n                        "
o=i["_"]
t=o||n["_"]
c=h.program(19,q,s)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof t===f){t=t.call(n,c)}else{t=p.call(n,t,c)}if(t||t===0){l+=t}l+="\n                    </li>\n                    "
o=i.scratchpad
t=o||n.scratchpad
r=i.unless
c=h.program(21,x,s)
c.hash={}
c.fn=c
c.inverse=h.noop
t=r.call(n,t,c)
if(t||t===0){l+=t}l+='\n                </ul>\n            </td>\n        </tr>\n    </table>\n    <div class="no-homework">\n        <h5 class="guideline-message">\n            '
o=i["_"]
t=o||n["_"]
c=h.program(25,H,s)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof t===f){t=t.call(n,c)}else{t=p.call(n,t,c)}if(t||t===0){l+=t}l+="\n        </h5>\n    </div>\n</div>\n"
return l})
module.exports=t
});
KAdefine("javascript/discussion-package/answer-form.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,n,r,s,a){r=r||e.helpers
var l="",o,i,t,f,c=this,p="function",h=r.blockHelperMissing,u=r.helperMissing,v=void 0,d=this.escapeExpression
function m(e,n){var s="",a
s+='\n    <label><input type="checkbox" class="from-video-author"> <strong>'
t=r["_"]
a=t||e["_"]
f=c.program(2,y,n)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===p){a=a.call(e,f)}else{a=h.call(e,a,f)}if(a||a===0){s+=a}s+="</strong></label><br>\n    "
return s}function y(e,n){return"From the author:"}function g(e,n){return"Answer this question..."}function k(e,n){var s,a,l,o
s="form-controls"
a="discussion"
l={}
o="Answer"
l["label"]=o
t=r.invokePartial
o=t||e.invokePartial
f=c.program(7,b,n)
f.hash=l
f.fn=f
f.inverse=c.noop
if(t&&typeof o===p){s=o.call(e,a,s,f)}else{s=h.call(e,o,a,s,f)}if(s||s===0){return s}else{return""}}function b(e,n){var r=""
return r}l+='<div class="answer">\n    <input type="hidden" name="question-key" value="'
t=r.key
o=t||n.key
if(typeof o===p){o=o.call(n,{hash:{}})}else if(o===v){o=u.call(n,"key",{hash:{}})}l+=d(o)+'">\n\n    '
t=r.isDeveloper
o=t||n.isDeveloper
i=r["if"]
f=c.program(1,m,a)
f.hash={}
f.fn=f
f.inverse=c.noop
o=i.call(n,o,f)
if(o||o===0){l+=o}l+='\n\n    <textarea class="discussion-text" placeholder="'
t=r["_"]
o=t||n["_"]
f=c.program(4,g,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===p){o=o.call(n,f)}else{o=h.call(n,o,f)}if(o||o===0){l+=o}l+='"></textarea>\n\n    '
t=r["_"]
o=t||n["_"]
f=c.program(6,k,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===p){o=o.call(n,f)}else{o=h.call(n,o,f)}if(o||o===0){l+=o}l+="\n</div>\n"
return l})
module.exports=t
});
KAdefine("javascript/discussion-package/feedback-guidelines.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,n,a,i,s){a=a||e.helpers
var l="",r,t,o,c,f=this,h="function",u=a.blockHelperMissing
function p(e,n){return"Share a tip"}function d(e,n){return"When naming a variable, it is okay to use most letters, but some are reserved, like 'e', which represents the value 2.7831..."}function m(e,n){return"Thank the author"}function g(e,n){return"This is great, I finally understand quadratic functions!"}function v(e,n){return"Have something that's not a tip or thanks about this content?"}function _(e,n){return"Ask a question"}function k(e,n){return"Join our help discussions"}function y(e,n){return"Report a technical problem with the site"}function b(e,n){return"Request a feature"}function w(e,n){var i,s
o=a.showSpinoffs
i=o||e.showSpinoffs
s=a.unless
c=f.program(20,q,n)
c.hash={}
c.fn=c
c.inverse=f.noop
i=s.call(e,i,c)
if(i||i===0){return i}else{return""}}function q(e,n){var i="",s
i+='\n                    <li>\n                        <a href="javascript:void 0;" class="simple-button suggest-clarification">'
o=a["_"]
s=o||e["_"]
c=f.program(21,R,n)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof s===h){s=s.call(e,c)}else{s=u.call(e,s,c)}if(s||s===0){i+=s}i+="</a>\n                    </li>\n                    "
return i}function R(e,n){return"Report a mistake in the video"}function x(e,n){return"This discussion area is not meant for answering homework questions."}l+='<div class="feedback-guidelines post-guidelines alert" style="display: none;">\n    <table>\n        <tr>\n            <td class="guideline-cell">\n                <h4 class="guideline-header">\n                    '
o=a["_"]
r=o||n["_"]
c=f.program(1,p,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+='\n                </h4>\n                <div class="guideline-paragraph">\n                    <em class="guideline-example">\n                        '
o=a["_"]
r=o||n["_"]
c=f.program(3,d,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+='\n                    </em>\n                </div>\n                <br>\n                <h4 class="guideline-header">\n                    '
o=a["_"]
r=o||n["_"]
c=f.program(5,m,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+='\n                </h4>\n                <div class="guideline-paragraph">\n                    <em class="guideline-example">\n                        '
o=a["_"]
r=o||n["_"]
c=f.program(7,g,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+='\n                    </em>\n                </div>\n            </td>\n            <td class="guideline-cell">\n                <h4 class="guideline-header">\n                    '
o=a["_"]
r=o||n["_"]
c=f.program(9,v,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+='\n                </h4>\n                <ul class="guideline-items">\n                    <li>\n                        <a class="alert-link ask-question-instead" href="javascript:void(0);">'
o=a["_"]
r=o||n["_"]
c=f.program(11,_,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+='</a>\n                    </li>\n                    <li>\n                        <a class="alert-link" href="https://khanacademy.zendesk.com/hc/communities/public/topics">'
o=a["_"]
r=o||n["_"]
c=f.program(13,k,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+='</a>\n                    </li>\n                    <li>\n                        <a class="alert-link" href="http://khanacademy.org/reportissue?type=Defect">'
o=a["_"]
r=o||n["_"]
c=f.program(15,y,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+='</a>\n                    </li>\n                    <li>\n                        <a class="alert-link" href="https://khanacademy.zendesk.com/hc/communities/public/topics/200136634-Feature-Requests">'
o=a["_"]
r=o||n["_"]
c=f.program(17,b,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+="</a>\n                    </li>\n                    "
o=a.scratchpad
r=o||n.scratchpad
t=a.unless
c=f.program(19,w,s)
c.hash={}
c.fn=c
c.inverse=f.noop
r=t.call(n,r,c)
if(r||r===0){l+=r}l+='\n                </ul>\n            </td>\n        </tr>\n    </table>\n    <div class="no-homework">\n        <h5 class="guideline-message">\n            '
o=a["_"]
r=o||n["_"]
c=f.program(23,x,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(o&&typeof r===h){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){l+=r}l+="\n        </h5>\n    </div>\n</div>\n"
return l})
module.exports=t
});
KAdefine("javascript/discussion-package/comment-form.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,n,i,s,a){i=i||e.helpers
s=s||e.partials
var r="",o,t,l,c=this,f="function",p=i.blockHelperMissing
function u(e,n){return"Post a tip or thanks..."}function d(e,n){var s,a,r,o
s="form-controls"
a="discussion"
r={}
o="Post your tip or thanks"
r["label"]=o
t=i.invokePartial
o=t||e.invokePartial
l=c.program(4,v,n)
l.hash=r
l.fn=l
l.inverse=c.noop
if(t&&typeof o===f){s=o.call(e,a,s,l)}else{s=p.call(e,o,a,s,l)}if(s||s===0){return s}else{return""}}function v(e,n){var i=""
return i}r+='<div class="post-feedback">\n    '
o=n
o=c.invokePartial(s["discussion_feedback-guidelines"],"discussion_feedback-guidelines",o,i,s)
if(o||o===0){r+=o}r+='\n    <div class="comment">\n        <textarea class="discussion-text" placeholder="'
t=i["_"]
o=t||n["_"]
l=c.program(1,u,a)
l.hash={}
l.fn=l
l.inverse=c.noop
if(t&&typeof o===f){o=o.call(n,l)}else{o=p.call(n,o,l)}if(o||o===0){r+=o}r+='"></textarea>\n        '
t=i["_"]
o=t||n["_"]
l=c.program(3,d,a)
l.hash={}
l.fn=l
l.inverse=c.noop
if(t&&typeof o===f){o=o.call(n,l)}else{o=p.call(n,o,l)}if(o||o===0){r+=o}r+="\n    </div>\n</div>\n"
return r})
module.exports=t
});
KAdefine("javascript/discussion-package/reply-form.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,e,s,t,i){s=s||n.helpers
var l="",a,r,o,c=this,u="function",v=s.blockHelperMissing
function d(n,e){return"or"}function p(n,e){var t,i,l,a
t="form-controls"
i="discussion"
l={}
a="Comment"
l["label"]=a
r=s.invokePartial
a=r||n.invokePartial
o=c.program(4,f,e)
o.hash=l
o.fn=o
o.inverse=c.noop
if(r&&typeof a===u){t=a.call(n,i,t,o)}else{t=v.call(n,a,i,t,o)}if(t||t===0){return t}else{return""}}function f(n,e){var s=""
return s}l+='<div class="discussion-item reply">\n    <div class="reply-alt-controls" style="display:none">\n        <div>\n            <input class="simple-button choose-reply-alt"\n                   type="button"\n                   value="">\n        </div>\n        <div class="or">\n        '
r=s["_"]
a=r||e["_"]
o=c.program(1,d,i)
o.hash={}
o.fn=o
o.inverse=c.noop
if(r&&typeof a===u){a=a.call(e,o)}else{a=v.call(e,a,o)}if(a||a===0){l+=a}l+='\n        </div>\n        <div class="div-text-dummy">\n            <textarea class="discussion-text-dummy"></textarea>\n        </div>\n    </div>\n    <textarea class="discussion-text"></textarea>\n\n    '
r=s["_"]
a=r||e["_"]
o=c.program(3,p,i)
o.hash={}
o.fn=o
o.inverse=c.noop
if(r&&typeof a===u){a=a.call(e,o)}else{a=v.call(e,a,o)}if(a||a===0){l+=a}l+="\n</div>\n"
return l})
module.exports=t
});
KAdefine("javascript/discussion-package/discussion-meta.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,e,a,s,r){a=a||n.helpers
s=s||n.partials
var o="",t,l,i,f,c=this,u="function",h=a.helperMissing,p=void 0,d=this.escapeExpression,v=a.blockHelperMissing
function m(n,e){var r="",o,t
r+="\n            "
i=a.badges
o=i||n.badges
t=a.each
f=c.program(2,y,e)
f.hash={}
f.fn=f
f.inverse=c.noop
o=t.call(n,o,f)
if(o||o===0){r+=o}r+="\n            "
o=n
o=c.invokePartial(s["discussion_meta-separator"],"discussion_meta-separator",o,a,s)
if(o||o===0){r+=o}r+="\n        "
return r}function y(n,e){var s="",r,o
s+='\n                <img class="discussion-badge-icon" title="'
i=a.translatedDescription
r=i||n.translatedDescription
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"translatedDescription",{hash:{}})}s+=d(r)+'"\n                     src="'
i=a.iconSrc
r=i||n.iconSrc
i=a.stripProtocol
o=i||n.stripProtocol
if(typeof o===u){r=o.call(n,r,{hash:{}})}else if(o===p){r=h.call(n,"stripProtocol",r,{hash:{}})}else{r=o}s+=d(r)+'" />\n            '
return s}function g(n,e){var s="",r,o
s+="\n        "
i=a.hideVotes
r=i||n.hideVotes
o=a.unless
f=c.program(5,C,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n        "
return s}function C(n,e){var s="",r,o
s+='\n        <span class="sum-votes">\n            '
i=a.sumVotesIncremented
r=i||n.sumVotesIncremented
i=a.ngettext
o=i||n.ngettext
f=c.program(6,_,e)
f.hash={}
f.fn=f
f.inverse=c.program(8,x,e)
if(i&&typeof o===u){r=o.call(n,r,f)}else{r=v.call(n,o,r,f)}if(r||r===0){s+=r}s+="\n        </span>\n        "
return s}function _(n,e){var s="",r
i=a.sumVotesIncremented
r=i||n.sumVotesIncremented
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"sumVotesIncremented",{hash:{}})}s+=d(r)+' <span class="vote-word">Vote</span>'
return s}function x(n,e){var s="",r
i=a.sumVotesIncremented
r=i||n.sumVotesIncremented
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"sumVotesIncremented",{hash:{}})}s+=d(r)+' <span class="vote-word">Votes</span>'
return s}function P(n,e){var r="",o,t
r+="\n            "
o=n
o=c.invokePartial(s["discussion_meta-separator"],"discussion_meta-separator",o,a,s)
if(o||o===0){r+=o}r+="\n            <span>"
i=a.spinoffCount
o=i||n.spinoffCount
i=a.ngettext
t=i||n.ngettext
f=c.program(11,k,e)
f.hash={}
f.fn=f
f.inverse=c.program(13,I,e)
if(i&&typeof t===u){o=t.call(n,o,f)}else{o=v.call(n,t,o,f)}if(o||o===0){r+=o}r+="</span>\n        "
return r}function k(n,e){var s="",r
i=a.spinoffCount
r=i||n.spinoffCount
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"spinoffCount",{hash:{}})}s+=d(r)+" Spin-off"
return s}function I(n,e){var s="",r
i=a.spinoffCount
r=i||n.spinoffCount
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"spinoffCount",{hash:{}})}s+=d(r)+" Spin-offs"
return s}function S(n,e){var s="",r,o
s+="\n        "
i=a.inUserProfile
r=i||n.inUserProfile
o=a.unless
f=c.program(16,V,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n        "
return s}function V(n,e){var s="",r,o
s+="\n"
s+="\n            "
i=a.hideVoteControls
r=i||n.hideVoteControls
o=a.unless
f=c.program(17,b,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n\n            "
s+="\n            "
i=a.isScratchpad
r=i||n.isScratchpad
o=a.unless
f=c.program(20,w,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n        "
return s}function b(n,e){var s="",r,o
s+="\n            "
i=a.isScratchpadCard
r=i||n.isScratchpadCard
o=a.unless
f=c.program(18,U,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n            "
return s}function U(n,e){var r="",o
r+="\n                "
o=n
o=c.invokePartial(s["discussion_vote-controls"],"discussion_vote-controls",o,a,s)
if(o||o===0){r+=o}r+="\n            "
return r}function w(n,e){var s="",r,o
s+="\n\n"
s+="\n                "
i=a.restrictPosting
r=i||n.restrictPosting
o=a["if"]
f=c.program(21,A,e)
f.hash={}
f.fn=f
f.inverse=c.program(27,D,e)
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n            "
return s}function A(n,e){var s="",r,o
s+="\n                    "
i=a.replyCount
r=i||n.replyCount
o=a["if"]
f=c.program(22,K,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n                "
return s}function K(n,e){var r="",o,t
r+="\n                        "
o=n
o=c.invokePartial(s["discussion_meta-separator"],"discussion_meta-separator",o,a,s)
if(o||o===0){r+=o}r+="\n\n                        "
r+='\n                        <a href="javascript:void(0);" class="toggle-replies show-replies"\n                           data-reply-count="'
i=a.replyCount
o=i||n.replyCount
if(typeof o===u){o=o.call(n,{hash:{}})}else if(o===p){o=h.call(n,"replyCount",{hash:{}})}r+=d(o)+'">'
i=a.replyCount
o=i||n.replyCount
i=a.ngettext
t=i||n.ngettext
f=c.program(23,j,e)
f.hash={}
f.fn=f
f.inverse=c.program(25,T,e)
if(i&&typeof t===u){o=t.call(n,o,f)}else{o=v.call(n,t,o,f)}if(o||o===0){r+=o}r+="</a>\n                    "
return r}function j(n,e){var s="",r
i=a.replyCount
r=i||n.replyCount
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"replyCount",{hash:{}})}s+=d(r)+" Comment"
return s}function T(n,e){var s="",r
i=a.replyCount
r=i||n.replyCount
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"replyCount",{hash:{}})}s+=d(r)+" Comments"
return s}function D(n,e){var r="",o,t
r+="\n                    "
o=n
o=c.invokePartial(s["discussion_meta-separator"],"discussion_meta-separator",o,a,s)
if(o||o===0){r+=o}r+="\n\n                    "
r+='\n                    <a href="javascript:void(0);" class="toggle-replies show-replies"\n                       data-reply-count="'
i=a.replyCount
o=i||n.replyCount
if(typeof o===u){o=o.call(n,{hash:{}})}else if(o===p){o=h.call(n,"replyCount",{hash:{}})}r+=d(o)+'">'
i=a.replyCount
o=i||n.replyCount
t=a["if"]
f=c.program(28,E,e)
f.hash={}
f.fn=f
f.inverse=c.program(33,M,e)
o=t.call(n,o,f)
if(o||o===0){r+=o}r+="</a>\n                "
return r}function E(n,e){var s,r
i=a.replyCount
s=i||n.replyCount
i=a.ngettext
r=i||n.ngettext
f=c.program(29,N,e)
f.hash={}
f.fn=f
f.inverse=c.program(31,F,e)
if(i&&typeof r===u){s=r.call(n,s,f)}else{s=v.call(n,r,s,f)}if(s||s===0){return s}else{return""}}function N(n,e){var s="",r
i=a.replyCount
r=i||n.replyCount
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"replyCount",{hash:{}})}s+=d(r)+" Comment"
return s}function F(n,e){var s="",r
i=a.replyCount
r=i||n.replyCount
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"replyCount",{hash:{}})}s+=d(r)+" Comments"
return s}function M(n,e){var s
i=a["_"]
s=i||n["_"]
f=c.program(34,q,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof s===u){s=s.call(n,f)}else{s=v.call(n,s,f)}if(s||s===0){return s}else{return""}}function q(n,e){return"Comment"}function H(n,e){var s="",r,o
s+="\n"
s+="\n            "
i=a.hideFlagControls
r=i||n.hideFlagControls
o=a.unless
f=c.program(37,Y,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n        "
return s}function Y(n,e){var r="",o
r+="\n                "
o=n
o=c.invokePartial(s["discussion_mod-controls"],"discussion_mod-controls",o,a,s)
if(o||o===0){r+=o}r+="\n            "
return r}function z(n,e){var s="",r,o
s+="\n            "
i=a.showAuthorControls
r=i||n.showAuthorControls
o=a["if"]
f=c.program(40,B,e)
f.hash={}
f.fn=f
f.inverse=c.program(43,J,e)
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n        "
return s}function B(n,e){var s="",r,o
s+="\n"
s+="\n                "
i=a.isScratchpad
r=i||n.isScratchpad
o=a.unless
f=c.program(41,G,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n            "
return s}function G(n,e){var r="",o
r+="\n                    "
o=n
o=c.invokePartial(s["discussion_meta-separator"],"discussion_meta-separator",o,a,s)
if(o||o===0){r+=o}r+="\n                    "
o=n
o=c.invokePartial(s["discussion_author-controls"],"discussion_author-controls",o,a,s)
if(o||o===0){r+=o}r+="\n                "
return r}function J(n,e){var s="",r,o
s+="\n"
s+="\n                "
i=a.hideFlagControls
r=i||n.hideFlagControls
o=a.unless
f=c.program(44,L,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n            "
return s}function L(n,e){var r="",o
r+="\n                    "
o=n
o=c.invokePartial(s["discussion_meta-separator"],"discussion_meta-separator",o,a,s)
if(o||o===0){r+=o}r+="\n                    "
o=n
o=c.invokePartial(s["discussion_flag-controls"],"discussion_flag-controls",o,a,s)
if(o||o===0){r+=o}r+="\n                "
return r}function O(n,e){var s="",r,o
s+='\n    <div class="discussion-meta-info">\n'
s+='\n        <a href="'
i=a.focusUrl
r=i||n.focusUrl
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focusUrl",{hash:{}})}s+=d(r)
i=a.expandKey
r=i||n.expandKey
o=a["if"]
f=c.program(47,Q,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+='"\n           class="timeago" title="'
i=a.date
r=i||n.date
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"date",{hash:{}})}s+=d(r)+'">\n            '
i=a.date
r=i||n.date
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"date",{hash:{}})}s+=d(r)+"\n        </a>\n\n        "
i=a.focus
r=i||n.focus
o=a["if"]
f=c.program(49,R,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n\n        "
i=a.inUserProfile
r=i||n.inUserProfile
o=a.unless
f=c.program(56,ne,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n    </div>\n    "
return s}function Q(n,e){var s="",r
s+="?qa_expand_key="
i=a.expandKey
r=i||n.expandKey
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"expandKey",{hash:{}})}s+=d(r)
return s}function R(n,e){var s="",r,o
s+="\n"
s+="\n            "
s+='\n            <span class="discussion-meta-faded">'
i=a["_"]
r=i||n["_"]
f=c.program(50,W,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof r===u){r=r.call(n,f)}else{r=v.call(n,r,f)}if(r||r===0){s+=r}s+="</span>\n            "
i=a.focusIsVideo
r=i||n.focusIsVideo
o=a["if"]
f=c.program(52,X,e)
f.hash={}
f.fn=f
f.inverse=c.program(54,Z,e)
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n        "
return s}function W(n,e){return"on"}function X(n,e){var s="",r
s+='\n                <a class="modal-video"\n                   href="'
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.relativeUrl
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.relativeUrl",{hash:{}})}s+=d(r)+"?qa_expand_key="
i=a.expandKey
r=i||n.expandKey
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"expandKey",{hash:{}})}s+=d(r)+'"\n                   data-translated-title="'
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.translatedTitle
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.translatedTitle",{hash:{}})}s+=d(r)+'"\n                   data-translated-description="'
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.translatedDescription
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.translatedDescription",{hash:{}})}s+=d(r)+'"\n                   data-youtube-id="'
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.youtubeId
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.youtubeId",{hash:{}})}s+=d(r)+'"\n                   data-translated-youtube-id="'
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.translatedYoutubeId
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.translatedYoutubeId",{hash:{}})}s+=d(r)+'">\n                    '
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.translatedTitle
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.translatedTitle",{hash:{}})}s+=d(r)+"\n                </a>\n            "
return s}function Z(n,e){var s="",r
s+='\n                <a href="'
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.relativeUrl
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.relativeUrl",{hash:{}})}s+=d(r)+"?qa_expand_key="
i=a.expandKey
r=i||n.expandKey
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"expandKey",{hash:{}})}s+=d(r)+'">\n                    '
i=a.focus
r=i||n.focus
r=r===null||r===undefined||r===false?r:r.translatedTitle
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"focus.translatedTitle",{hash:{}})}s+=d(r)+"\n                </a>\n            "
return s}function ne(n,e){var s="",r,o
s+="\n"
s+="\n            "
s+='\n            <span class="discussion-meta-faded">'
i=a["_"]
r=i||n["_"]
f=c.program(57,ee,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof r===u){r=r.call(n,f)}else{r=v.call(n,r,f)}if(r||r===0){s+=r}s+="</span>\n            "
i=a.authorNickname
r=i||n.authorNickname
o=a["if"]
f=c.program(59,ae,e)
f.hash={}
f.fn=f
f.inverse=c.program(62,re,e)
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n        "
return s}function ee(n,e){return"by"}function ae(n,e){var s="",r,o
s+='\n            <a class="author-nickname discussion-author" data-user-id="'
i=a.authorUserId
r=i||n.authorUserId
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"authorUserId",{hash:{}})}s+=d(r)+'">\n                '
i=a.authorAvatarSrc
r=i||n.authorAvatarSrc
o=a["if"]
f=c.program(60,se,e)
f.hash={}
f.fn=f
f.inverse=c.noop
r=o.call(n,r,f)
if(r||r===0){s+=r}s+="\n                "
i=a.authorNickname
r=i||n.authorNickname
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"authorNickname",{hash:{}})}s+=d(r)+"\n            </a>\n            "
return s}function se(n,e){var s="",r
s+='\n                    <img class="discussion-author-avatar" src="'
i=a.authorAvatarSrc
r=i||n.authorAvatarSrc
if(typeof r===u){r=r.call(n,{hash:{}})}else if(r===p){r=h.call(n,"authorAvatarSrc",{hash:{}})}s+=d(r)+'">\n                '
return s}function re(n,e){var s="",r
s+="\n            "
i=a["_"]
r=i||n["_"]
f=c.program(63,oe,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof r===u){r=r.call(n,f)}else{r=v.call(n,r,f)}if(r||r===0){s+=r}s+="\n            "
return s}function oe(n,e){return"Anonymous"}o+='\n<div class="discussion-meta">\n    <div class="discussion-meta-controls">\n'
o+="\n        "
i=a.badges
t=i||e.badges
l=a["if"]
f=c.program(1,m,r)
f.hash={}
f.fn=f
f.inverse=c.noop
t=l.call(e,t,f)
if(t||t===0){o+=t}o+="\n\n"
o+="\n        "
i=a.isProjectEvalAnswer
t=i||e.isProjectEvalAnswer
l=a.unless
f=c.program(4,g,r)
f.hash={}
f.fn=f
f.inverse=c.noop
t=l.call(e,t,f)
if(t||t===0){o+=t}o+="\n\n        "
i=a.spinoffCount
t=i||e.spinoffCount
l=a["if"]
f=c.program(10,P,r)
f.hash={}
f.fn=f
f.inverse=c.noop
t=l.call(e,t,f)
if(t||t===0){o+=t}o+="\n\n        "
i=a.isProjectEvalAnswer
t=i||e.isProjectEvalAnswer
l=a.unless
f=c.program(15,S,r)
f.hash={}
f.fn=f
f.inverse=c.noop
t=l.call(e,t,f)
if(t||t===0){o+=t}o+="\n\n        "
i=a.showModControls
t=i||e.showModControls
l=a["if"]
f=c.program(36,H,r)
f.hash={}
f.fn=f
f.inverse=c.program(39,z,r)
t=l.call(e,t,f)
if(t||t===0){o+=t}o+="\n    </div>\n\n"
o+="\n    "
i=a.isScratchpad
t=i||e.isScratchpad
l=a.unless
f=c.program(46,O,r)
f.hash={}
f.fn=f
f.inverse=c.noop
t=l.call(e,t,f)
if(t||t===0){o+=t}o+="\n</div>\n"
return o})
module.exports=t
});
KAdefine("javascript/discussion-package/vote-controls.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,o,n,t,i){n=n||e.helpers
var a="",s,l,r,f,c=this,p="function",d=n.blockHelperMissing,h=n.helperMissing,v=void 0,u=this.escapeExpression
function y(e,o){return" voted"}function g(e,o){return"Vote up, this is encouraging or helpful (click again to undo)"}function k(e,o){return" voted"}function m(e,o){return"Vote down, this is not encouraging or helpful (click again to undo)"}a+='<div class="discussion-vote">\n    <div class="vote-for vote-for-js vote-up'
r=n.upVoted
s=r||o.upVoted
l=n["if"]
f=c.program(1,y,i)
f.hash={}
f.fn=f
f.inverse=c.noop
s=l.call(o,s,f)
if(s||s===0){a+=s}a+='"\n                title="'
r=n["_"]
s=r||o["_"]
f=c.program(3,g,i)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof s===p){s=s.call(o,f)}else{s=d.call(o,s,f)}if(s||s===0){a+=s}a+='"\n                data-key="'
r=n.key
s=r||o.key
if(typeof s===p){s=s.call(o,{hash:{}})}else if(s===v){s=h.call(o,"key",{hash:{}})}a+=u(s)+'"\n                data-vote-type="1">\n    </div>\n    <div class="vote-for vote-for-js vote-down'
r=n.downVoted
s=r||o.downVoted
l=n["if"]
f=c.program(5,k,i)
f.hash={}
f.fn=f
f.inverse=c.noop
s=l.call(o,s,f)
if(s||s===0){a+=s}a+='"\n                title="'
r=n["_"]
s=r||o["_"]
f=c.program(7,m,i)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof s===p){s=s.call(o,f)}else{s=d.call(o,s,f)}if(s||s===0){a+=s}a+='"\n                data-key="'
r=n.key
s=r||o.key
if(typeof s===p){s=s.call(o,{hash:{}})}else if(s===v){s=h.call(o,"key",{hash:{}})}a+=u(s)+'"\n                data-vote-type="-1">\n    </div>\n</div>\n'
return a})
module.exports=t
});
KAdefine("javascript/discussion-package/flag-controls.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(a,e,n,r,l){n=n||a.helpers
var t="",o,s,i,f,c=this,p="function",h=n.helperMissing,g=void 0,u=this.escapeExpression,v=n.blockHelperMissing
function d(a,e){var r="",l
r+='\n    <span class="flag-tools mod-action-complete" data-key="'
i=n.key
l=i||a.key
if(typeof l===p){l=l.call(a,{hash:{}})}else if(l===g){l=h.call(a,"key",{hash:{}})}r+=u(l)+'">\n            '
r+='\n            <a href="javascript:void(0);" class="flag-show action-complete" title="'
i=n["_"]
l=i||a["_"]
f=c.program(2,m,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof l===p){l=l.call(a,f)}else{l=v.call(a,l,f)}if(l||l===0){r+=l}r+='">'
i=n["_"]
l=i||a["_"]
f=c.program(4,y,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof l===p){l=l.call(a,f)}else{l=v.call(a,l,f)}if(l||l===0){r+=l}r+="</a>\n    </span>\n"
return r}function m(a,e){return"Flagged"}function y(a,e){return"Flagged"}function _(a,e){var r="",l,t
r+='\n    <span class="flag-tools" data-key="'
i=n.key
l=i||a.key
if(typeof l===p){l=l.call(a,{hash:{}})}else if(l===g){l=h.call(a,"key",{hash:{}})}r+=u(l)+'">\n        '
i=n.isScratchpad
l=i||a.isScratchpad
t=n["if"]
f=c.program(7,k,e)
f.hash={}
f.fn=f
f.inverse=c.program(12,j,e)
l=t.call(a,l,f)
if(l||l===0){r+=l}r+="\n    </span>\n"
return r}function k(a,e){var r="",l
r+='\n        <a href="javascript:void(0);" class="flag-show scratchpad-flagging" data-react-component="button" data-react-button-type="submit" title="'
i=n["_"]
l=i||a["_"]
f=c.program(8,F,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof l===p){l=l.call(a,f)}else{l=v.call(a,l,f)}if(l||l===0){r+=l}r+='">'
i=n["_"]
l=i||a["_"]
f=c.program(10,b,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof l===p){l=l.call(a,f)}else{l=v.call(a,l,f)}if(l||l===0){r+=l}r+="</a>\n        "
return r}function F(a,e){return"Flag for moderator attention"}function b(a,e){return"Flag"}function j(a,e){var r="",l
r+='\n        <a href="javascript:void(0);" class="flag-show" title="'
i=n["_"]
l=i||a["_"]
f=c.program(13,w,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof l===p){l=l.call(a,f)}else{l=v.call(a,l,f)}if(l||l===0){r+=l}r+='">'
i=n["_"]
l=i||a["_"]
f=c.program(15,x,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(i&&typeof l===p){l=l.call(a,f)}else{l=v.call(a,l,f)}if(l||l===0){r+=l}r+="</a>\n        "
return r}function w(a,e){return"Flag for moderator attention"}function x(a,e){return"Flag"}t+="\n"
i=n.flaggedByUser
o=i||e.flaggedByUser
s=n["if"]
f=c.program(1,d,l)
f.hash={}
f.fn=f
f.inverse=c.program(6,_,l)
o=s.call(e,o,f)
if(o||o===0){t+=o}t+="\n"
return t})
module.exports=t
});
KAdefine("javascript/discussion-package/author-controls.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,s,a,o,t){a=a||e.helpers
o=o||e.partials
var l="",i,r,n,h=this,p="function",c=a.helperMissing,f=void 0,u=this.escapeExpression,d=a.blockHelperMissing
function v(e,s){return"Edit"}function y(e,s){return"Delete"}l+='<span class="mod-tools" data-key="'
r=a.key
i=r||s.key
if(typeof i===p){i=i.call(s,{hash:{}})}else if(i===f){i=c.call(s,"key",{hash:{}})}l+=u(i)+'" data-is-author="'
r=a.showAuthorControls
i=r||s.showAuthorControls
if(typeof i===p){i=i.call(s,{hash:{}})}else if(i===f){i=c.call(s,"showAuthorControls",{hash:{}})}l+=u(i)+'">\n    <a href="javascript:void(0);" class="edit">'
r=a["_"]
i=r||s["_"]
n=h.program(1,v,t)
n.hash={}
n.fn=n
n.inverse=h.noop
if(r&&typeof i===p){i=i.call(s,n)}else{i=d.call(s,i,n)}if(i||i===0){l+=i}l+="</a>\n    "
i=s
i=h.invokePartial(o["discussion_meta-separator"],"discussion_meta-separator",i,a,o)
if(i||i===0){l+=i}l+='\n    <a href="javascript:void(0);" class="delete">'
r=a["_"]
i=r||s["_"]
n=h.program(3,y,t)
n.hash={}
n.fn=n
n.inverse=h.noop
if(r&&typeof i===p){i=i.call(s,n)}else{i=d.call(s,i,n)}if(i||i===0){l+=i}l+="</a>\n</span>\n"
return l})
module.exports=t
});
KAdefine("javascript/discussion-package/meta-separator.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(s,a,e,t,r){e=e||s.helpers
var n,p=this
return'<span class="discussion-meta-separator">&#8226;</span>\n'})
module.exports=t
});
KAdefine("javascript/discussion-package/low-quality-notice-header.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,a,n,r,l){n=n||e.helpers
var t="",s,i,o,c,h=this,p="function",f=n.helperMissing,d=void 0,u=this.escapeExpression,y=n.blockHelperMissing
function b(e,a){var r="",l
r+="\n        <h4>"
o=n["_"]
l=o||e["_"]
c=h.program(2,v,a)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof l===p){l=l.call(e,c)}else{l=y.call(e,l,c)}if(l||l===0){r+=l}r+="</h4>\n        "
r+="\n        "
o=n["_"]
l=o||e["_"]
c=h.program(4,g,a)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof l===p){l=l.call(e,c)}else{l=y.call(e,l,c)}if(l||l===0){r+=l}r+="\n        <br><br>\n        "
o=n["_"]
l=o||e["_"]
c=h.program(6,k,a)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof l===p){l=l.call(e,c)}else{l=y.call(e,l,c)}if(l||l===0){r+=l}r+="\n    "
return r}function v(e,a){return"Reduce, Reuse, Recycle."}function g(e,a){var r="",l
r+="Thank you for your "
o=n.translatedFeedbackType
l=o||e.translatedFeedbackType
if(typeof l===p){l=l.call(e,{hash:{}})}else if(l===d){l=f.call(e,"translatedFeedbackType",{hash:{}})}r+=u(l)+". Our scrub-bots have integrated it\n        into the earlier "
o=n.translatedFeedbackType
l=o||e.translatedFeedbackType
if(typeof l===p){l=l.call(e,{hash:{}})}else if(l===d){l=f.call(e,"translatedFeedbackType",{hash:{}})}r+=u(l)+" highlighted above and voted that up."
return r}function k(e,a){return"Yours in cleanliness, the Khan Academy Guardians."}function m(e,a){var r="",l
r+="\n        "
r+="\n        <h4>"
o=n["_"]
l=o||e["_"]
c=h.program(9,T,a)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof l===p){l=l.call(e,c)}else{l=y.call(e,l,c)}if(l||l===0){r+=l}r+="</h4>\n\n        "
r+="\n        "
o=n["_"]
l=o||e["_"]
c=h.program(11,F,a)
c.hash={}
c.fn=c
c.inverse=h.noop
if(o&&typeof l===p){l=l.call(e,c)}else{l=y.call(e,l,c)}if(l||l===0){r+=l}r+="\n    "
return r}function T(e,a){var r="",l
r+="Please clarify your "
o=n.translatedFeedbackType
l=o||e.translatedFeedbackType
if(typeof l===p){l=l.call(e,{hash:{}})}else if(l===d){l=f.call(e,"translatedFeedbackType",{hash:{}})}r+=u(l)+"."
return r}function F(e,a){var r="",l
r+='Our robot army has targeted your post as "low quality". To appear on the\n        site as originally written, the Khan Academy Guardians must manually\n        approve your '
o=n.translatedFeedbackType
l=o||e.translatedFeedbackType
if(typeof l===p){l=l.call(e,{hash:{}})}else if(l===d){l=f.call(e,"translatedFeedbackType",{hash:{}})}r+=u(l)+"."
return r}t+='<div class="low-quality-notice-header">\n    '
o=n.duplicate
s=o||a.duplicate
i=n["if"]
c=h.program(1,b,l)
c.hash={}
c.fn=c
c.inverse=h.program(8,m,l)
s=i.call(a,s,c)
if(s||s===0){t+=s}t+="\n</div>\n"
return t})
module.exports=t
});
KAdefine("javascript/discussion-package/low-quality-notice-footer.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,t,a,i,s){a=a||e.helpers
var l="",n,d,r=this,o="function",c=a.helperMissing,p=void 0,h=this.escapeExpression
l+='<div class="low-quality-notice-footer">\n    <em>'
d=a.translatedFeedbackEditTip
n=d||t.translatedFeedbackEditTip
if(typeof n===o){n=n.call(t,{hash:{}})}else if(n===p){n=c.call(t,"translatedFeedbackEditTip",{hash:{}})}l+=h(n)+"</em>\n</div>\n"
return l})
module.exports=t
});
KAdefine("javascript/discussion-package/duplicate-notice.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,a,n,s,t){n=n||e.helpers
var l="",i,r,c,o=this,d="function",h=n.helperMissing,p=void 0,f=this.escapeExpression,u=n.blockHelperMissing
function y(e,a){return"Reduce, Reuse, Recycle."}function b(e,a){var s="",t
s+="Thank you for your "
r=n.translatedFeedbackType
t=r||e.translatedFeedbackType
if(typeof t===d){t=t.call(e,{hash:{}})}else if(t===p){t=h.call(e,"translatedFeedbackType",{hash:{}})}s+=f(t)+". Our scrub-bots have integrated it\n    into the earlier "
r=n.translatedFeedbackType
t=r||e.translatedFeedbackType
if(typeof t===d){t=t.call(e,{hash:{}})}else if(t===p){t=h.call(e,"translatedFeedbackType",{hash:{}})}s+=f(t)+" highlighted above and voted that up.\n    <br>\n    Yours in cleanliness, the Khan Academy Guardians."
return s}l+='<div class="low-quality-notice duplicate-notice">\n    <span class="close" data-dismiss="alert">&#215;</span>\n    <h4>'
r=n["_"]
i=r||a["_"]
c=o.program(1,y,t)
c.hash={}
c.fn=c
c.inverse=o.noop
if(r&&typeof i===d){i=i.call(a,c)}else{i=u.call(a,i,c)}if(i||i===0){l+=i}l+="</h4>\n    "
l+="\n    "
r=n["_"]
i=r||a["_"]
c=o.program(3,b,t)
c.hash={}
c.fn=c
c.inverse=o.noop
if(r&&typeof i===d){i=i.call(a,c)}else{i=u.call(a,i,c)}if(i||i===0){l+=i}l+="\n</div>\n"
return l})
module.exports=t
});
KAdefine("javascript/discussion-package/flag-modal.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,e,i,a,l){i=i||n.helpers
var o="",r,s,t,f,c=this,p="function",u=i.helperMissing,h=void 0,v=this.escapeExpression,d=i.blockHelperMissing
function m(n,e){return"Flag for Guardian attention"}function g(n,e){var a="",l
a+="This "
t=i.translatedFeedbackType
l=t||n.translatedFeedbackType
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===h){l=u.call(n,"translatedFeedbackType",{hash:{}})}a+=v(l)+" is:"
return a}function _(n,e){return"abuse"}function y(n,e){return"disrespectful or offensive"}function b(n,e){return"an advertisement"}function k(n,e){var a="",l,o
a+='<div class="simple-button flag-as" data-flag="'
t=i.isQuestion
l=t||n.isQuestion
o=i["if"]
f=c.program(12,w,e)
f.hash={}
f.fn=f
f.inverse=c.program(14,Q,e)
l=o.call(n,l,f)
if(l||l===0){a+=l}a+='">\n                    <h4>\n                        '
t=i.isQuestion
l=t||n.isQuestion
o=i["if"]
f=c.program(16,T,e)
f.hash={}
f.fn=f
f.inverse=c.noop
l=o.call(n,l,f)
if(l||l===0){a+=l}a+="\n                        "
t=i.isComment
l=t||n.isComment
o=i["if"]
f=c.program(19,A,e)
f.hash={}
f.fn=f
f.inverse=c.noop
l=o.call(n,l,f)
if(l||l===0){a+=l}a+="\n                        "
t=i.isAnswer
l=t||n.isAnswer
o=i["if"]
f=c.program(22,F,e)
f.hash={}
f.fn=f
f.inverse=c.noop
l=o.call(n,l,f)
if(l||l===0){a+=l}a+="\n                    </h4>\n                    <ul>\n                        <li>\n                            "
t=i.isQuestion
l=t||n.isQuestion
o=i["if"]
f=c.program(25,B,e)
f.hash={}
f.fn=f
f.inverse=c.noop
l=o.call(n,l,f)
if(l||l===0){a+=l}a+="\n                            "
t=i.isComment
l=t||n.isComment
o=i["if"]
f=c.program(28,M,e)
f.hash={}
f.fn=f
f.inverse=c.noop
l=o.call(n,l,f)
if(l||l===0){a+=l}a+="\n                            "
t=i.isAnswer
l=t||n.isAnswer
o=i["if"]
f=c.program(31,G,e)
f.hash={}
f.fn=f
f.inverse=c.noop
l=o.call(n,l,f)
if(l||l===0){a+=l}a+="\n                        </li>\n                    </ul>\n                </div>"
return a}function w(n,e){return"changetocomment"}function Q(n,e){return"changetoquestion"}function T(n,e){var a
t=i["_"]
a=t||n["_"]
f=c.program(17,q,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===p){a=a.call(n,f)}else{a=d.call(n,a,f)}if(a||a===0){return a}else{return""}}function q(n,e){return"a tip or thanks"}function A(n,e){var a
t=i["_"]
a=t||n["_"]
f=c.program(20,C,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===p){a=a.call(n,f)}else{a=d.call(n,a,f)}if(a||a===0){return a}else{return""}}function C(n,e){return"a question"}function F(n,e){var a
t=i["_"]
a=t||n["_"]
f=c.program(23,x,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===p){a=a.call(n,f)}else{a=d.call(n,a,f)}if(a||a===0){return a}else{return""}}function x(n,e){return"a tip or thanks"}function B(n,e){var a
t=i["_"]
a=t||n["_"]
f=c.program(26,H,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===p){a=a.call(n,f)}else{a=d.call(n,a,f)}if(a||a===0){return a}else{return""}}function H(n,e){return"should be in Tips & Thanks"}function M(n,e){var a
t=i["_"]
a=t||n["_"]
f=c.program(29,E,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===p){a=a.call(n,f)}else{a=d.call(n,a,f)}if(a||a===0){return a}else{return""}}function E(n,e){return"should be in Questions"}function G(n,e){var a
t=i["_"]
a=t||n["_"]
f=c.program(32,K,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===p){a=a.call(n,f)}else{a=d.call(n,a,f)}if(a||a===0){return a}else{return""}}function K(n,e){return"should be in Tips & Thanks"}function S(n,e){return"not helpful"}function W(n,e){return"low quality"}function j(n,e){return"not about the video topic"}function z(n,e){return"soliciting votes or seeking badges"}function D(n,e){var a="",l
a+="\n                            <li>"
t=i["_"]
l=t||n["_"]
f=c.program(43,I,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===p){l=l.call(n,f)}else{l=d.call(n,l,f)}if(l||l===0){a+=l}a+="</li>\n                        "
return a}function I(n,e){return"a homework question"}function J(n,e){var a="",l
a+="\n                            <li>"
t=i["_"]
l=t||n["_"]
f=c.program(46,L,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof l===p){l=l.call(n,f)}else{l=d.call(n,l,f)}if(l||l===0){a+=l}a+="</li>\n                        "
return a}function L(n,e){return"a duplicate answer"}function N(n,e){return"repeatedly making the same post"}function O(n,e){return"about the site"}function P(n,e){return'a question about Khan Academy (e.g. "What software does Sal use?")'}function R(n,e){return"a post about badges"}function U(n,e){return"a technical problem with the site"}function V(n,e){return"a request for videos or features"}o+='<div class="modal hide" id="flag-modal">\n    <div class="modal-header">\n        <span class="close" data-dismiss="modal">&#215;</span>\n        <h2>'
t=i["_"]
r=t||e["_"]
f=c.program(1,m,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+='</h2>\n    </div>\n    <div class="modal-body">\n        <em>'
t=i.feedback
r=t||e.feedback
if(typeof r===p){r=r.call(e,{hash:{}})}else if(r===h){r=u.call(e,"feedback",{hash:{}})}o+=v(r)+'</em>\n\n        <div class="flag-options">\n            '
o+="\n            <h4>"
t=i["_"]
r=t||e["_"]
f=c.program(3,g,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+='</h4>\n            <div class="flag-row">\n                <div class="simple-button flag-as" data-flag="inappropriate">\n                    <h4>'
t=i["_"]
r=t||e["_"]
f=c.program(5,_,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+="</h4>\n                    <ul>\n                        <li>"
t=i["_"]
r=t||e["_"]
f=c.program(7,y,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+="</li>\n                        <li>"
t=i["_"]
r=t||e["_"]
f=c.program(9,b,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+='</li>\n                    </ul>\n                </div>\n                <div class="flag-separator"></div>\n                '
t=i.canBeChanged
r=t||e.canBeChanged
s=i["if"]
f=c.program(11,k,l)
f.hash={}
f.fn=f
f.inverse=c.noop
r=s.call(e,r,f)
if(r||r===0){o+=r}o+='\n            </div>\n            <div class="flag-row">\n                <div class="simple-button flag-as" data-flag="lowquality">\n                    <h4>'
t=i["_"]
r=t||e["_"]
f=c.program(34,S,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+="</h4>\n                    <ul>\n                        <li>"
t=i["_"]
r=t||e["_"]
f=c.program(36,W,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+="</li>\n                        <li>"
t=i["_"]
r=t||e["_"]
f=c.program(38,j,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+="</li>\n                        <li>"
t=i["_"]
r=t||e["_"]
f=c.program(40,z,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+="</li>\n                        "
t=i.isQuestion
r=t||e.isQuestion
s=i["if"]
f=c.program(42,D,l)
f.hash={}
f.fn=f
f.inverse=c.noop
r=s.call(e,r,f)
if(r||r===0){o+=r}o+="\n                        "
t=i.isAnswer
r=t||e.isAnswer
s=i["if"]
f=c.program(45,J,l)
f.hash={}
f.fn=f
f.inverse=c.noop
r=s.call(e,r,f)
if(r||r===0){o+=r}o+="\n                        <li>"
t=i["_"]
r=t||e["_"]
f=c.program(48,N,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+='</li>\n                    </ul>\n                </div>\n                <div class="flag-separator"></div>\n                <div class="simple-button flag-as" data-flag="doesnotbelong">\n                    <h4>'
t=i["_"]
r=t||e["_"]
f=c.program(50,O,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+="</h4>\n                    <ul>\n                        <li>"
t=i["_"]
r=t||e["_"]
f=c.program(52,P,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+="</li>\n                        <li>"
t=i["_"]
r=t||e["_"]
f=c.program(54,R,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+="</li>\n                        <li>"
t=i["_"]
r=t||e["_"]
f=c.program(56,U,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+="</li>\n                        <li>"
t=i["_"]
r=t||e["_"]
f=c.program(58,V,l)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof r===p){r=r.call(e,f)}else{r=d.call(e,r,f)}if(r||r===0){o+=r}o+="</li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"
return o})
module.exports=t
});
KAdefine("javascript/discussion-package/scratchpad-flag-modal.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,i,a,l,e){a=a||n.helpers
var s="",o,t,r,f=this,p="function",c=a.helperMissing,d=void 0,g=this.escapeExpression,u=a.blockHelperMissing
function h(n,i){return"Flag program for Guardian attention"}function v(n,i){var l="",e
l+='Please consult our <a href="'
t=a.guidelinesUrlPath
e=t||n.guidelinesUrlPath
if(typeof e===p){e=e.call(n,{hash:{}})}else if(e===d){e=c.call(n,"guidelinesUrlPath",{hash:{}})}l+=g(e)+'" target="_blank">program guidelines</a> for what we consider to be appropriate programs.'
return l}function m(n,i){return"How does this program violate the guidelines?"}function b(n,i){return"This program is:"}function y(n,i){return"<h4>abuse</h4>\n                    <ul>\n                        <li>disrespectful or offensive</li>\n                        <li>advertisement for off-site company/service</li>\n                    </ul>"}function _(n,i){return"<h4>plagiarism</h4>\n                    <ul>\n                        <li>not a spin-off and not giving credit to original author</li>\n                    </ul>"}function w(n,i){return"<h4>soliciting votes</h4>\n                    <ul>\n                        <li>requesting votes</li>\n                        <li>making promises for votes</li>\n                        <li>receiving votes from a voting ring</li>\n                    </ul>"}function x(n,i){return"<h4>using disallowed functionality</h4>\n                    <ul>\n                        <li>accessing externals or the DOM to go beyond allowed functionality</li>\n                        <li>examples: playing sounds inappropriately, using localStorage</li>\n                    </ul>"}function P(n,i){return"<h4>off-topic</h4>\n                    <ul>\n                        <li>petitions to change the site</li>\n                        <li>contentious programs about politics, religion/atheism, or personal issues</li>\n                    </ul>"}s+='<div class="modal hide scratchpad-flag-modal" id="flag-modal">\n    <div class="modal-header">\n        <span class="close" data-dismiss="modal">&#215;</span>\n        <h2>'
t=a["_"]
o=t||i["_"]
r=f.program(1,h,e)
r.hash={}
r.fn=r
r.inverse=f.noop
if(t&&typeof o===p){o=o.call(i,r)}else{o=u.call(i,o,r)}if(o||o===0){s+=o}s+='</h2>\n    </div>\n    <div class="modal-body">\n        '
t=a["_"]
o=t||i["_"]
r=f.program(3,v,e)
r.hash={}
r.fn=r
r.inverse=f.noop
if(t&&typeof o===p){o=o.call(i,r)}else{o=u.call(i,o,r)}if(o||o===0){s+=o}s+="<br>\n        <label>"
t=a["_"]
o=t||i["_"]
r=f.program(5,m,e)
r.hash={}
r.fn=r
r.inverse=f.noop
if(t&&typeof o===p){o=o.call(i,r)}else{o=u.call(i,o,r)}if(o||o===0){s+=o}s+='</label>\n        <br>\n        <textarea name="justification" rows="3"></textarea>\n        <div class="flag-options">\n            <label>'
t=a["_"]
o=t||i["_"]
r=f.program(7,b,e)
r.hash={}
r.fn=r
r.inverse=f.noop
if(t&&typeof o===p){o=o.call(i,r)}else{o=u.call(i,o,r)}if(o||o===0){s+=o}s+='</label><br>\n            <div class="flag-row">\n                <div class="simple-button flag-as" type="button" data-flag="inappropriate">\n                    '
t=a["_"]
o=t||i["_"]
r=f.program(9,y,e)
r.hash={}
r.fn=r
r.inverse=f.noop
if(t&&typeof o===p){o=o.call(i,r)}else{o=u.call(i,o,r)}if(o||o===0){s+=o}s+='\n                </div>\n                <div class="flag-separator"></div>\n                <div class="simple-button flag-as" type="button" data-flag="plagiarism">\n                    '
t=a["_"]
o=t||i["_"]
r=f.program(11,_,e)
r.hash={}
r.fn=r
r.inverse=f.noop
if(t&&typeof o===p){o=o.call(i,r)}else{o=u.call(i,o,r)}if(o||o===0){s+=o}s+='\n                </div>\n                <div class="flag-separator"></div>\n                <div class="simple-button flag-as" type="button" data-flag="vote-soliciting">\n                    '
t=a["_"]
o=t||i["_"]
r=f.program(13,w,e)
r.hash={}
r.fn=r
r.inverse=f.noop
if(t&&typeof o===p){o=o.call(i,r)}else{o=u.call(i,o,r)}if(o||o===0){s+=o}s+='\n                </div>\n            </div>\n            <div class="flag-row">\n                <div class="simple-button flag-as" type="button" data-flag="using-disallowed">\n                    '
t=a["_"]
o=t||i["_"]
r=f.program(15,x,e)
r.hash={}
r.fn=r
r.inverse=f.noop
if(t&&typeof o===p){o=o.call(i,r)}else{o=u.call(i,o,r)}if(o||o===0){s+=o}s+='\n                </div>\n                <div class="flag-separator"></div>\n                <div class="simple-button flag-as" type="button" data-flag="doesnotbelong">\n                    '
t=a["_"]
o=t||i["_"]
r=f.program(17,P,e)
r.hash={}
r.fn=r
r.inverse=f.noop
if(t&&typeof o===p){o=o.call(i,r)}else{o=u.call(i,o,r)}if(o||o===0){s+=o}s+="\n                </div>\n            </div>\n        </div>\n\n        </div>\n    </div>\n</div>\n"
return s})
module.exports=t
});
KAdefine("javascript/discussion-package/discussion.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(i,s,n,d,e){n=n||i.helpers
d=d||i.partials
var a="",o,c,l=this
a+='<div class="discussion-container">\n    <div class="clear"></div>\n    '
o=s
o=l.invokePartial(d["discussion_video-discussion"],"discussion_video-discussion",o,n,d)
if(o||o===0){a+=o}a+="\n    "
o=s
o=l.invokePartial(d["discussion_discussion-guidelines"],"discussion_discussion-guidelines",o,n,d)
if(o||o===0){a+=o}a+='\n    <div class="clear"></div>\n</div>\n'
return a})
module.exports=t
});
KAdefine("javascript/discussion-package/video-discussion.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,s,i,e,a){i=i||n.helpers
e=e||n.partials
var o="",t,r,l,c,f=this,d="function",p=i.blockHelperMissing
function u(n,s){return'style="display:none;"'}function v(n,s){return"Questions"}function h(n,s){return'style="display:none;"'}function m(n,s){return"Tips &amp; Thanks"}function b(n,s){return'style="display:none;"'}function y(n,s){return"Spin-Offs"}function g(n,s){var e="",a
e+='\n            <li data-type="documentation" class="tabitem">\n                <a href="javascript:void(0);">'
l=i["_"]
a=l||n["_"]
c=f.program(14,_,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(l&&typeof a===d){a=a.call(n,c)}else{a=p.call(n,a,c)}if(a||a===0){e+=a}e+="</a>\n            </li>\n            "
return e}function _(n,s){return"Documentation"}function k(n,s){var e="",a
e+='\n            <li id="projectfeedback-tab-header" data-type="projectfeedback" class="tabitem">\n                <a href="javascript:void(0);">'
l=i["_"]
a=l||n["_"]
c=f.program(17,j,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(l&&typeof a===d){a=a.call(n,c)}else{a=p.call(n,a,c)}if(a||a===0){e+=a}e+="</a>\n            </li>\n            "
return e}function j(n,s){return"Help Requests"}function q(n,s){return"Clarifications"}function w(n,s){var e="",a
e+='\n            <div class="post-guidelines alert">\n                '
l=i["_"]
a=l||n["_"]
c=f.program(22,P,s)
c.hash={}
c.fn=c
c.inverse=f.noop
if(l&&typeof a===d){a=a.call(n,c)}else{a=p.call(n,a,c)}if(a||a===0){e+=a}e+="\n            </div>\n        "
return e}function P(n,s){return'\n                Want to ask a question to the community about improving your program?\n                <br>\n                Head over to the <a href="javascript:void(0);" data-tab-target="projectfeedback">help requests tab</a>!\n                <br>\n                We\'ll keep this area for questions that the community has for you about your program.'}function D(n,s){var e="",a,o
e+="\n            "
l=i.restrictPosting
a=l||n.restrictPosting
o=i.unless
c=f.program(25,F,s)
c.hash={}
c.fn=c
c.inverse=f.noop
a=o.call(n,a,c)
if(a||a===0){e+=a}e+="\n        "
return e}function F(n,s){var a="",o
a+="\n                "
o=n
o=f.invokePartial(e["discussion_question-form"],"discussion_question-form",o,i,e)
if(o||o===0){a+=o}a+="\n            "
return a}function C(n,s){var a="",o
a+="\n            "
o=n
o=f.invokePartial(e["discussion_comment-form"],"discussion_comment-form",o,i,e)
if(o||o===0){a+=o}a+="\n        "
return a}function H(n,s){return'\n    <div class="tab documentation-tab" style="display: none;">\n        <div class="documentation"></div>\n    </div>\n    '}function Q(n,s){return'\n    <div class="tab projectfeedback-tab" style="display:none;">\n        <div class="projectfeedback"></div>\n    </div>\n    '}function R(n,s){return"Do you understand English? Click here to see more discussion happening on Khan Academy's English site."}o+='\n<div class="video-discussion">\n    '
o+='\n    <div class="video-feedback-container upper" style="display: none;"></div>\n    <div class="video-discussion-header">\n        <ul class="tabrow">\n            <li id="questions-tab-header" data-type="questions" class="tabitem selected" '
l=i.hideQuestions
t=l||s.hideQuestions
r=i["if"]
c=f.program(1,u,a)
c.hash={}
c.fn=c
c.inverse=f.noop
t=r.call(s,t,c)
if(t||t===0){o+=t}o+='>\n                <a href="javascript:void(0);">\n                    '
l=i["_"]
t=l||s["_"]
c=f.program(3,v,a)
c.hash={}
c.fn=c
c.inverse=f.noop
if(l&&typeof t===d){t=t.call(s,c)}else{t=p.call(s,t,c)}if(t||t===0){o+=t}o+='\n                </a>\n            </li>\n            <li id="comments-tab-header" data-type="comments" class="tabitem" '
l=i.hideComments
t=l||s.hideComments
r=i["if"]
c=f.program(5,h,a)
c.hash={}
c.fn=c
c.inverse=f.noop
t=r.call(s,t,c)
if(t||t===0){o+=t}o+='>\n                <a href="javascript:void(0);">\n                    '
l=i["_"]
t=l||s["_"]
c=f.program(7,m,a)
c.hash={}
c.fn=c
c.inverse=f.noop
if(l&&typeof t===d){t=t.call(s,c)}else{t=p.call(s,t,c)}if(t||t===0){o+=t}o+="\n                </a>\n            </li>\n            "
o+='\n            <li id="spinoffs-tab-header" data-type="spin-offs" class="tabitem"\n                '
l=i.showSpinoffs
t=l||s.showSpinoffs
r=i.unless
c=f.program(9,b,a)
c.hash={}
c.fn=c
c.inverse=f.noop
t=r.call(s,t,c)
if(t||t===0){o+=t}o+='>\n                <a href="javascript:void(0);">'
l=i["_"]
t=l||s["_"]
c=f.program(11,y,a)
c.hash={}
c.fn=c
c.inverse=f.noop
if(l&&typeof t===d){t=t.call(s,c)}else{t=p.call(s,t,c)}if(t||t===0){o+=t}o+="</a>\n            </li>\n            "
l=i.showDocumentation
t=l||s.showDocumentation
r=i["if"]
c=f.program(13,g,a)
c.hash={}
c.fn=c
c.inverse=f.noop
t=r.call(s,t,c)
if(t||t===0){o+=t}o+="\n            "
l=i.showProjectFeedback
t=l||s.showProjectFeedback
r=i["if"]
c=f.program(16,k,a)
c.hash={}
c.fn=c
c.inverse=f.noop
t=r.call(s,t,c)
if(t||t===0){o+=t}o+='\n            <li data-type="clarifications" class="tabitem" style="display: none;">\n                <a href="javascript:void(0);">'
l=i["_"]
t=l||s["_"]
c=f.program(19,q,a)
c.hash={}
c.fn=c
c.inverse=f.noop
if(l&&typeof t===d){t=t.call(s,c)}else{t=p.call(s,t,c)}if(t||t===0){o+=t}o+='</a>\n            </li>\n        </ul>\n        <span class="discussion-list-sort"></span>\n    </div>\n\n    <div class="tab questions-tab">\n        '
l=i.canRequestFeedback
t=l||s.canRequestFeedback
r=i["if"]
c=f.program(21,w,a)
c.hash={}
c.fn=c
c.inverse=f.program(24,D,a)
t=r.call(s,t,c)
if(t||t===0){o+=t}o+='\n        <div class="questions">\n            '
t=s
t=f.invokePartial(e["discussion_discussion-list"],"discussion_discussion-list",t,i,e)
if(t||t===0){o+=t}o+='\n        </div>\n    </div>\n\n    <div class="tab comments-tab" style="display: none;">\n        '
l=i.restrictPosting
t=l||s.restrictPosting
r=i.unless
c=f.program(27,C,a)
c.hash={}
c.fn=c
c.inverse=f.noop
t=r.call(s,t,c)
if(t||t===0){o+=t}o+='\n        <div class="comments"></div>\n    </div>\n\n    <div class="tab spin-offs-tab" style="display: none;">\n        <div class="spin-offs"></div>\n    </div>\n\n    '
l=i.showDocumentation
t=l||s.showDocumentation
r=i["if"]
c=f.program(29,H,a)
c.hash={}
c.fn=c
c.inverse=f.noop
t=r.call(s,t,c)
if(t||t===0){o+=t}o+="\n\n    "
l=i.showProjectFeedback
t=l||s.showProjectFeedback
r=i["if"]
c=f.program(31,Q,a)
c.hash={}
c.fn=c
c.inverse=f.noop
t=r.call(s,t,c)
if(t||t===0){o+=t}o+='\n\n    <div class="tab clarifications-tab" style="display: none;">\n        <div class="clarifications"></div>\n    </div>\n\n    <div class="discussion-progress-bar" style="display:none"><img src="/images/throbber.gif"></div>\n    <a class="discussion-i18n-message" style="display: none">'
l=i["_"]
t=l||s["_"]
c=f.program(33,R,a)
c.hash={}
c.fn=c
c.inverse=f.noop
if(l&&typeof t===d){t=t.call(s,c)}else{t=p.call(s,t,c)}if(t||t===0){o+=t}o+="</a>\n</div>\n"
return o})
module.exports=t
});
KAdefine("javascript/discussion-package/discussion-guidelines.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,e,i,s,a){i=i||n.helpers
var r="",o,l,t,f,c=this,u="function",p=i.helperMissing,h=void 0,d=this.escapeExpression,m=i.blockHelperMissing
function v(n,e){var s="",a,r
s+="\n    "
t=i.communityQuestionsUrl
a=t||n.communityQuestionsUrl
r=i["if"]
f=c.program(2,g,e)
f.hash={}
f.fn=f
f.inverse=c.noop
a=r.call(n,a,f)
if(a||a===0){s+=a}s+="\n\n    "
t=i.isVideo
a=t||n.isVideo
r=i["if"]
f=c.program(7,b,e)
f.hash={}
f.fn=f
f.inverse=c.noop
a=r.call(n,a,f)
if(a||a===0){s+=a}s+="\n\n    "
t=i.isArticle
a=t||n.isArticle
r=i["if"]
f=c.program(25,P,e)
f.hash={}
f.fn=f
f.inverse=c.noop
a=r.call(n,a,f)
if(a||a===0){s+=a}s+='\n\n    <div class="discussion-guidelines-header">'
t=i["_"]
a=t||n["_"]
f=c.program(43,G,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="</div>\n        <p>\n            "
t=i["_"]
a=t||n["_"]
f=c.program(45,I,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="\n        </p>\n    <br>\n    "
return s}function g(n,e){var s="",a
s+='\n    <div class="discussion-guidelines-header">'
t=i["_"]
a=t||n["_"]
f=c.program(3,_,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="</div>\n    <p>\n        "
t=i["_"]
a=t||n["_"]
f=c.program(5,y,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="\n    </p>\n    <br>\n    "
return s}function _(n,e){return"Answer more questions"}function y(n,e){var s="",a
s+='Visit <a href="'
t=i.communityQuestionsUrl
a=t||n.communityQuestionsUrl
if(typeof a===u){a=a.call(n,{hash:{}})}else if(a===h){a=p.call(n,"communityQuestionsUrl",{hash:{}})}s+=d(a)+'">Community Questions</a>\n        to answer new questions in\n        <a href="'
t=i.communityQuestionsUrl
a=t||n.communityQuestionsUrl
if(typeof a===u){a=a.call(n,{hash:{}})}else if(a===h){a=p.call(n,"communityQuestionsUrl",{hash:{}})}s+=d(a)+'">'
t=i.translatedCommunityQuestionsTitle
a=t||n.translatedCommunityQuestionsTitle
if(typeof a===u){a=a.call(n,{hash:{}})}else if(a===h){a=p.call(n,"translatedCommunityQuestionsTitle",{hash:{}})}s+=d(a)+"</a>."
return s}function b(n,e){var s="",a,r
s+="\n    "
t=i.clarificationsEnabled
a=t||n.clarificationsEnabled
r=i["if"]
f=c.program(8,k,e)
f.hash={}
f.fn=f
f.inverse=c.program(17,x,e)
a=r.call(n,a,f)
if(a||a===0){s+=a}s+="\n    "
return s}function k(n,e){var s="",a
s+='\n    <div class="discussion-guidelines-header">\n        '
t=i["_"]
a=t||n["_"]
f=c.program(9,Q,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="\n    </div>\n    "
t=i["_"]
a=t||n["_"]
f=c.program(11,w,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+='\n    <p class="guideline-example">\n        '
t=i["_"]
a=t||n["_"]
f=c.program(13,q,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+='\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
t=i["_"]
a=t||n["_"]
f=c.program(15,E,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="</a>\n    </p>\n    <br>\n    "
return s}function Q(n,e){return"Report a mistake in the video"}function w(n,e){return"Example:"}function q(n,e){return'At 2:33, Sal said "single bonds" but meant "covalent bonds."'}function E(n,e){return"Report a mistake in the video"}function x(n,e){var s="",a,r
s+="\n    "
t=i.canEdit
a=t||n.canEdit
r=i["if"]
f=c.program(18,A,e)
f.hash={}
f.fn=f
f.inverse=c.noop
a=r.call(n,a,f)
if(a||a===0){s+=a}s+="\n    "
return s}function A(n,e){var s="",a
s+='\n    <div class="discussion-guidelines-header">\n        '
t=i["_"]
a=t||n["_"]
f=c.program(19,R,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="\n    </div>\n    <p>\n    "
t=i["_"]
a=t||n["_"]
f=c.program(21,U,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+='\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
t=i["_"]
a=t||n["_"]
f=c.program(23,C,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="</a>\n    </p>\n    <br>\n    "
return s}function R(n,e){return"Report a mistake in the video"}function U(n,e){return"Clarifications are disabled for this video."}function C(n,e){return"View existing clarifications"}function P(n,e){var s="",a,r
s+="\n    "
t=i.clarificationsEnabled
a=t||n.clarificationsEnabled
r=i["if"]
f=c.program(26,T,e)
f.hash={}
f.fn=f
f.inverse=c.program(35,H,e)
a=r.call(n,a,f)
if(a||a===0){s+=a}s+="\n    "
return s}function T(n,e){var s="",a
s+='\n    <div class="discussion-guidelines-header">\n        '
t=i["_"]
a=t||n["_"]
f=c.program(27,V,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="\n    </div>\n    "
t=i["_"]
a=t||n["_"]
f=c.program(29,j,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+='\n    <p class="guideline-example">\n        '
t=i["_"]
a=t||n["_"]
f=c.program(31,F,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+='\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
t=i["_"]
a=t||n["_"]
f=c.program(33,z,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="</a>\n    </p>\n    <br>\n    "
return s}function V(n,e){return"Report a mistake in the article"}function j(n,e){return"Example:"}function F(n,e){return"The link in the third paragraph is broken."}function z(n,e){return"Report a mistake in the article"}function H(n,e){var s="",a,r
s+="\n    "
t=i.canEdit
a=t||n.canEdit
r=i["if"]
f=c.program(36,K,e)
f.hash={}
f.fn=f
f.inverse=c.noop
a=r.call(n,a,f)
if(a||a===0){s+=a}s+="\n    "
return s}function K(n,e){var s="",a
s+='\n    <div class="discussion-guidelines-header">\n        '
t=i["_"]
a=t||n["_"]
f=c.program(37,D,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="\n    </div>\n    <p>\n    "
t=i["_"]
a=t||n["_"]
f=c.program(39,M,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+='\n    </p>\n    <p>\n    <a href="javascript:void 0;" class="simple-button suggest-clarification">'
t=i["_"]
a=t||n["_"]
f=c.program(41,S,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="</a>\n    </p>\n    <br>\n    "
return s}function D(n,e){return"Report a mistake in the article"}function M(n,e){return"Clarifications are disabled for this article."}function S(n,e){return"View existing clarifications"}function G(n,e){return"Discuss the site"}function I(n,e){return'For general discussions about Khan Academy,\n            <a href="https://khanacademy.zendesk.com/hc/communities/public/topics">\n                click here</a>.'}function O(n,e){return"Flag inappropriate posts"}function Y(n,e){return"Here are posts to avoid making. If you do encounter them, flag them for attention from our Guardians."}function B(n,e){return"abuse"}function J(n,e){return"disrespectful or offensive"}function L(n,e){return"an advertisement"}function N(n,e){return"not helpful"}function W(n,e){return"low quality"}function X(n,e){return"not about the video topic"}function Z(n,e){return"soliciting votes or seeking badges"}function ne(n,e){return"a homework question"}function ee(n,e){return"a duplicate answer"}function ie(n,e){return"repeatedly making the same post"}function se(n,e){return"wrong category"}function ae(n,e){return"a tip or thanks in Questions"}function re(n,e){return"a question in Tips & Thanks"}function oe(n,e){return"an answer that should be its own question"}function le(n,e){return"about the site"}function te(n,e){var s="",a
s+="\n            <li>\n                "
t=i["_"]
a=t||n["_"]
f=c.program(82,fe,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="\n            </li>\n        "
return s}function fe(n,e){return"a question about Khan Academy"}function ce(n,e){var s="",a
s+="\n            <li>\n                "
t=i["_"]
a=t||n["_"]
f=c.program(85,ue,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+='\n                <div class="discussion-guidelines-link">(<a href="https://khanacademy.zendesk.com/">'
t=i["_"]
a=t||n["_"]
f=c.program(87,pe,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="</a>)</div>\n            </li>\n        "
return s}function ue(n,e){return"a question about Khan Academy"}function pe(n,e){return"Visit our FAQ"}function he(n,e){return"a post about badges"}function de(n,e){var s="",a
s+="\n            <li>\n                "
t=i["_"]
a=t||n["_"]
f=c.program(92,me,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="\n            </li>\n            <li>\n                "
t=i["_"]
a=t||n["_"]
f=c.program(94,ve,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="\n            </li>\n        "
return s}function me(n,e){return"a technical problem with the site"}function ve(n,e){return"a request for videos or features"}function ge(n,e){var s="",a
s+="\n            <li>\n                "
t=i["_"]
a=t||n["_"]
f=c.program(97,_e,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+='\n                <div class="discussion-guidelines-link">(<a href="http://khanacademy.org/reportissue?type=Defect">'
t=i["_"]
a=t||n["_"]
f=c.program(99,ye,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="</a>)</div>\n            </li>\n            <li>\n                "
t=i["_"]
a=t||n["_"]
f=c.program(101,be,e)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof a===u){a=a.call(n,f)}else{a=m.call(n,a,f)}if(a||a===0){s+=a}s+="\n            </li>\n        "
return s}function _e(n,e){return"a technical problem with the site"}function ye(n,e){return"Report a problem"}function be(n,e){return'a request for <a href="https://khanacademy.zendesk.com/hc/communities/public/topics/200136634-Feature-Requests">features</a>'}function ke(n,e){return"Your Spin-Offs"}r+='<div class="main-discussion-guidelines discussion-guidelines">\n    '
t=i.restrictPosting
o=t||e.restrictPosting
l=i.unless
f=c.program(1,v,a)
f.hash={}
f.fn=f
f.inverse=c.noop
o=l.call(e,o,f)
if(o||o===0){r+=o}r+='\n\n    <div class="discussion-guidelines-header">'
t=i["_"]
o=t||e["_"]
f=c.program(47,O,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</div>\n\n    <p>\n        "
t=i["_"]
o=t||e["_"]
f=c.program(49,Y,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="\n    </p>\n\n    "
r+='\n    <div class="discussion-guidelines-subheader">'
t=i["_"]
o=t||e["_"]
f=c.program(51,B,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</div>\n    <ul>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(53,J,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(55,L,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n    </ul>\n\n    "
r+='\n    <div class="discussion-guidelines-subheader">'
t=i["_"]
o=t||e["_"]
f=c.program(57,N,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</div>\n    <ul>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(59,W,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(61,X,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(63,Z,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(65,ne,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(67,ee,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(69,ie,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n    </ul>\n\n    "
r+='\n    <div class="discussion-guidelines-subheader">'
t=i["_"]
o=t||e["_"]
f=c.program(71,se,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</div>\n    <ul>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(73,ae,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(75,re,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(77,oe,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n    </ul>\n\n    "
r+='\n    <div class="discussion-guidelines-subheader">'
t=i["_"]
o=t||e["_"]
f=c.program(79,le,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</div>\n    <ul>\n        "
t=i.restrictPosting
o=t||e.restrictPosting
l=i["if"]
f=c.program(81,te,a)
f.hash={}
f.fn=f
f.inverse=c.program(84,ce,a)
o=l.call(e,o,f)
if(o||o===0){r+=o}r+="\n        <li>"
t=i["_"]
o=t||e["_"]
f=c.program(89,he,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+="</li>\n        "
t=i.restrictPosting
o=t||e.restrictPosting
l=i["if"]
f=c.program(91,de,a)
f.hash={}
f.fn=f
f.inverse=c.program(96,ge,a)
o=l.call(e,o,f)
if(o||o===0){r+=o}r+='\n    </ul>\n</div>\n<div class="user-forks discussion-guidelines">\n    <div class="discussion-guidelines-header">'
t=i["_"]
o=t||e["_"]
f=c.program(103,ke,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(t&&typeof o===u){o=o.call(e,f)}else{o=m.call(e,o,f)}if(o||o===0){r+=o}r+='</div>\n    <div class="user-fork-list"></div>\n</div>\n'
return r})
module.exports=t
});
KAdefine("javascript/discussion-package/scratchpad-thumbnail.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(a,s,t,e,l){t=t||a.helpers
var h="",i,c,n=this,r="function",o=t.helperMissing,d=void 0,f=this.escapeExpression
h+='<a href="'
c=t.showPath
i=c||s.showPath
if(typeof i===r){i=i.call(s,{hash:{}})}else if(i===d){i=o.call(s,"showPath",{hash:{}})}h+=f(i)+'" class="discussion-scratchpad-thumbnail">\n    <img src="'
c=t.imagePath
i=c||s.imagePath
if(typeof i===r){i=i.call(s,{hash:{}})}else if(i===d){i=o.call(s,"imagePath",{hash:{}})}h+=f(i)+'" class="scratchpad-thumbnail">\n    <div class="discussion-scratchpad-title">'
c=t.translatedTitle
i=c||s.translatedTitle
if(typeof i===r){i=i.call(s,{hash:{}})}else if(i===d){i=o.call(s,"translatedTitle",{hash:{}})}h+=f(i)+"</div>\n</a>\n"
return h})
module.exports=t
});
KAdefine("javascript/discussion-package/topic-discussion.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,n,i,l,s){i=i||e.helpers
var a="",o,r,t,f=this,c="function",p=i.helperMissing,u=void 0,h=this.escapeExpression,d=i.blockHelperMissing
function v(e,n){var l="",s
r=i.subject
s=r||e.subject
s=s===null||s===undefined||s===false?s:s.translatedTitle
if(typeof s===c){s=s.call(e,{hash:{}})}else if(s===u){s=p.call(e,"subject.translatedTitle",{hash:{}})}l+=h(s)+": Questions"
return l}function _(e,n){return"Give a great answer"}function g(e,n){return"Be a guide"}function m(e,n){return'We\'re teaching each other &ndash; so don\'t just answer "Yes" or "No", share your answer the way your favorite teacher would.'}function y(e,n){return"Vote, don't echo"}function b(e,n){return"If someone has already answered the question well, don't repeat their answer &ndash; vote it up instead."}function k(e,n){return"Flag inappropriate posts"}function w(e,n){return"Here are posts to avoid making. If you do encounter them, flag them for attention from our Guardians."}function j(e,n){return"abuse"}function q(e,n){return"disrespectful or offensive"}function T(e,n){return"an advertisement"}function E(e,n){return"not helpful"}function H(e,n){return"low quality"}function R(e,n){return"not about the video topic"}function V(e,n){return"soliciting votes or seeking badges"}function x(e,n){return"a homework question"}function z(e,n){return"a duplicate answer"}function A(e,n){return"repeatedly making the same post"}function D(e,n){return"wrong category"}function F(e,n){return"a tip or thanks in Questions"}function G(e,n){return"an answer that should be its own question"}function I(e,n){return"about the site"}function K(e,n){return"a question about Khan Academy"}function M(e,n){return"Visit our help center"}function P(e,n){return"a post about badges"}function Q(e,n){return"a technical problem with the site"}function U(e,n){return"Report a problem"}function B(e,n){return'a request for <a href="https://khanacademy.zendesk.com/hc/communities/public/topics/200136634-Feature-Requests">features</a>'}function C(e,n){return"Visit a video or article to ask a question."}function N(e,n){return"Recent questions"}function W(e,n){return"Do you understand English? Click here to see more discussion happening on Khan Academy's English site."}a+='<div class="content-pane-inner subject-color">\n<div data-role="header" class="main-header">\n    <div class="topic-info">\n        <div class="topic-info-inner">\n            <div class=\'subject-breadcrumb\'><a href="'
r=i.subject
o=r||n.subject
o=o===null||o===undefined||o===false?o:o.topicPageUrl
if(typeof o===c){o=o.call(n,{hash:{}})}else if(o===u){o=p.call(n,"subject.topicPageUrl",{hash:{}})}a+=h(o)+'" class="subject-link" data-id=""><i class="icon-caret-left"></i>'
r=i.subject
o=r||n.subject
o=o===null||o===undefined||o===false?o:o.translatedTitle
if(typeof o===c){o=o.call(n,{hash:{}})}else if(o===u){o=p.call(n,"subject.translatedTitle",{hash:{}})}a+=h(o)+"</a></div>\n            <div class='topic-title'>"
r=i["_"]
o=r||n["_"]
t=f.program(1,v,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+='</div>\n\n            <div class="topic-discussion-guidelines visible-desktop">\n\n            <h3>'
r=i["_"]
o=r||n["_"]
t=f.program(3,_,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</h3>\n\n            <h4>"
r=i["_"]
o=r||n["_"]
t=f.program(5,g,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</h4>\n            <p>"
r=i["_"]
o=r||n["_"]
t=f.program(7,m,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</p>\n\n            <h4>"
r=i["_"]
o=r||n["_"]
t=f.program(9,y,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</h4>\n            <p>"
r=i["_"]
o=r||n["_"]
t=f.program(11,b,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</p>\n\n            <h3>"
r=i["_"]
o=r||n["_"]
t=f.program(13,k,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</h3>\n            <p>"
r=i["_"]
o=r||n["_"]
t=f.program(15,w,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</p>\n\n            <h4>"
r=i["_"]
o=r||n["_"]
t=f.program(17,j,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</h4>\n            <ul>\n            <li>"
r=i["_"]
o=r||n["_"]
t=f.program(19,q,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</li>\n            <li>"
r=i["_"]
o=r||n["_"]
t=f.program(21,T,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</li>\n            </ul>\n\n            <h4>"
r=i["_"]
o=r||n["_"]
t=f.program(23,E,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</h4>\n            <ul>\n            <li>"
r=i["_"]
o=r||n["_"]
t=f.program(25,H,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</li>\n            <li>"
r=i["_"]
o=r||n["_"]
t=f.program(27,R,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</li>\n            <li>"
r=i["_"]
o=r||n["_"]
t=f.program(29,V,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</li>\n            <li>"
r=i["_"]
o=r||n["_"]
t=f.program(31,x,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</li>\n            <li>"
r=i["_"]
o=r||n["_"]
t=f.program(33,z,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</li>\n            <li>"
r=i["_"]
o=r||n["_"]
t=f.program(35,A,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</li>\n            </ul>\n\n            <h4>"
r=i["_"]
o=r||n["_"]
t=f.program(37,D,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</h4>\n            <ul>\n            <li>"
r=i["_"]
o=r||n["_"]
t=f.program(39,F,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</li>\n            <li>"
r=i["_"]
o=r||n["_"]
t=f.program(41,G,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</li>\n            </ul>\n\n            <h4>"
r=i["_"]
o=r||n["_"]
t=f.program(43,I,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</h4>\n            <ul>\n            <li>"
r=i["_"]
o=r||n["_"]
t=f.program(45,K,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+=' <div class="discussion-guidelines-link">(<a href="https://khanacademy.zendesk.com/">'
r=i["_"]
o=r||n["_"]
t=f.program(47,M,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</a>)</div></li>\n            <li>"
r=i["_"]
o=r||n["_"]
t=f.program(49,P,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</li>\n            <li>"
r=i["_"]
o=r||n["_"]
t=f.program(51,Q,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+=' <div class="discussion-guidelines-link">(<a href="http://khanacademy.org/reportissue?type=Defect">'
r=i["_"]
o=r||n["_"]
t=f.program(53,U,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</a>)</div></li>\n            <li>"
r=i["_"]
o=r||n["_"]
t=f.program(55,B,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+='</li>\n            </ul>\n\n            </div>\n        </div>\n    </div>\n</div>\n<div class="videos-list">\n    <div class="videos-list-inner">\n        <div class="videos-list-inner-inner">\n            <div class="all-questions video-discussion">\n            <p class="ask-instructions">'
r=i["_"]
o=r||n["_"]
t=f.program(57,C,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</p>\n            <h3>"
r=i["_"]
o=r||n["_"]
t=f.program(59,N,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+='</h3>\n            <div class="discussion-progress-bar"><img src="/images/throbber.gif"></div>\n            <a class="discussion-i18n-message" style="display: none">'
r=i["_"]
o=r||n["_"]
t=f.program(61,W,s)
t.hash={}
t.fn=t
t.inverse=f.noop
if(r&&typeof o===c){o=o.call(n,t)}else{o=d.call(n,o,t)}if(o||o===0){a+=o}a+="</a>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n"
return a})
module.exports=t
});
KAdefine("javascript/discussion-package/spinoffs.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
require("../shared-package/i18n.js")
var Discussion=require("../discussion-package/discussion.js")
var DiscussionList=require("./discussion-list.js")
var KA=require("../shared-package/ka.js")
var DiscussionSpinOffs={_loadComplete:false,_loadProgress:0,_loadMax:2,_containerSelector:".spin-offs",_userContainerSelector:".user-fork-list",_tabSelector:".spin-offs-tab",_tabHeaderSelector:"#spinoffs-tab-header",subTab:"spin-offs",show:function(){this.load()
$(this._tabSelector).show()},hide:function(){$(this._tabSelector).hide()},sort:function(s){this.sortValue=s
this.reset()
this.load()},load:function(){if(this._loadComplete){Discussion.hideProgressBar()
return}this._loadProgress=0
var s=$(".main-discussion-guidelines").height()||0,e=$(".video-discussion").height()||0,i=Math.max(s,e)
Discussion._minHeight=i
Discussion.data.$container.css("min-height",i)
var t=require("../scratchpads-package/scratchpad-ui.js").ScratchpadUI
if(!t.scratchpad.isChallenge()||t.userScratchpad.get("is_complete")){var a="/api/internal/scratchpads/"+Discussion.data.focusId+"/top-forks",r={casing:"camel"}
this.list=new DiscussionList({itemTemplate:require("./fork.handlebars"),containerSelector:this._containerSelector,requestURL:a,params:r,itemKey:"scratchpads",sorts:[{name:$._("Top"),title:$._("Highest Quality"),value:1,isDefault:true},{name:$._("Recent"),title:$._("Most Recent"),value:2,isDefault:false}],limit:30,sortValue:this.sortValue,hideHeader:true,onInitialFetch:this._finishLoad,preRenderTransformData:function(s){_(s).each(function(s){s.isScratchpad=true
s.isScratchpadCard=true
s.hideFlagControls=true})
return s}})}else{this._checkComplete()}var a="/api/internal/scratchpads/"+Discussion.data.focusId+"/user-forks",r={casing:"camel"}
this.userForkList=new DiscussionList({itemTemplate:require("./fork.handlebars"),containerSelector:this._userContainerSelector,requestURL:a,params:r,itemKey:"scratchpads",sorts:[{name:$._("Top"),title:$._("Highest Quality"),value:1,isDefault:true},{name:$._("Recent"),title:$._("Most Recent"),value:2,isDefault:false}],limit:30,sortValue:this.sortValue,hideHeader:true,onInitialFetch:this._finishUserLoad,preRenderTransformData:function(s){_(s).each(function(s){s.isScratchpad=true
s.isScratchpadCard=true
s.hideFlagControls=true
s.hideAuthorName=true
s.showDate=true
s.wide=true})
return s}})},_checkComplete:function(){DiscussionSpinOffs._loadProgress+=1
if(DiscussionSpinOffs._loadProgress===DiscussionSpinOffs._loadMax){DiscussionSpinOffs._loadComplete=true
Discussion._finishLoad()}},_finishLoad:function(s){var e=require("../scratchpads-package/scratchpad-ui.js").ScratchpadUI
DiscussionSpinOffs.list.$container.find(".discussion-list-content").addClass("row")
var i=DiscussionSpinOffs._containerSelector
if(!$(i).find(".fork").length){$(i).html("<p class='no-results'>"+$._("Be the first to ")+"<span data-react-component='button' id='fork-button'/>!"+"</p>")
e.mountReactButton($(i).find("#fork-button").show()[0],"submit",$._("Save as a spin-off"))}else{$(i).append($._("Note: we don't show spin-offs that didn't change any code, "+" are by child accounts, or are by anonymous users."))}DiscussionSpinOffs._checkComplete()},_finishUserLoad:function(s){DiscussionSpinOffs.userForkList.$container.find(".discussion-list-content").addClass("row")
var e=DiscussionSpinOffs._userContainerSelector
if(!$(e).find(".fork").length){if(!KA.isPhantom()){$(e).html("<p class='no-results'>"+$._("If you save a spin-off "+"of this program, you will see it here (as well as "+"in your <a href='"+KA.getUserProfile().get("profileRoot")+"programs'>My Programs</a> list).")+"</p>")}else{$(e).html("<p class='no-results'>"+$._("Login to view your spin-offs of this program.")+"</p>")}}DiscussionSpinOffs._checkComplete()},reset:function(){this._loadComplete=false
$(this._containerSelector).html("")
$(this._userContainerSelector).html("")}}
module.exports=DiscussionSpinOffs
});
KAdefine("javascript/discussion-package/documentation.js", function(require, module, exports) {
var $=require("jquery")
var Discussion=require("../discussion-package/discussion.js")
var PackageManager=require("../shared-package/package-manager.js")
var DiscussionDocumentation={_containerSelector:".documentation",_tabSelector:".documentation-tab",subTab:"documentation",show:function(){PackageManager.require("scratchpad-base.js").then(function(){DiscussionDocumentation.load()
$(DiscussionDocumentation._tabSelector).show()})},hide:function(){$(this._tabSelector).hide()},load:function(e){var a=require("../scratchpad-base-package/scratchpads.js").ScratchpadDocsView
var s=require("../scratchpads-package/scratchpad-ui.js").ScratchpadUI
this._independent=!!e
var n=s.scratchpad.get("userAuthoredContentType")
new a({el:$(this._containerSelector),userAuthoredContentType:n}).render()
Discussion.hideProgressBar()},_finishLoad:function(e){if(!this._independent){Discussion._finishLoad()}},reset:$.noop}
module.exports=DiscussionDocumentation
});
KAdefine("javascript/discussion-package/program.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,i,a,s,l){a=a||e.helpers
s=s||e.partials
var t="",n,r,o,h,f=this,c="function",d=a.helperMissing,p=void 0,u=this.escapeExpression
function m(e,i){return"deleted"}function y(e,i){return" context-link"}function g(e,i){return" is-author"}function v(e,i){var s="",l
s+='data-kind="program" data-id="'
o=a.id
l=o||e.id
if(typeof l===c){l=l.call(e,{hash:{}})}else if(l===p){l=d.call(e,"id",{hash:{}})}s+=u(l)+'"'
return s}t+='<div class="scratchpad-vote '
o=a.appearsAsDeleted
n=o||i.appearsAsDeleted
r=a["if"]
h=f.program(1,m,l)
h.hash={}
h.fn=h
h.inverse=f.noop
n=r.call(i,n,h)
if(n||n===0){t+=n}t+=" discussion-item"
o=a.inUserProfile
n=o||i.inUserProfile
r=a["if"]
h=f.program(3,y,l)
h.hash={}
h.fn=h
h.inverse=f.noop
n=r.call(i,n,h)
if(n||n===0){t+=n}o=a.showAuthorControls
n=o||i.showAuthorControls
r=a["if"]
h=f.program(5,g,l)
h.hash={}
h.fn=h
h.inverse=f.noop
n=r.call(i,n,h)
if(n||n===0){t+=n}t+='" id="'
o=a.key
n=o||i.key
if(typeof n===c){n=n.call(i,{hash:{}})}else if(n===p){n=d.call(i,"key",{hash:{}})}t+=u(n)+'"\n     data-key="'
o=a.key
n=o||i.key
if(typeof n===c){n=n.call(i,{hash:{}})}else if(n===p){n=d.call(i,"key",{hash:{}})}t+=u(n)+'"\n     '
o=a.focus
n=o||i.focus
r=a["if"]
h=f.program(7,v,l)
h.hash={}
h.fn=h
h.inverse=f.noop
n=r.call(i,n,h)
if(n||n===0){t+=n}t+=">\n\n    "
t+='\n    <h2><a href="/computer-programming/'
o=a.title
n=o||i.title
if(typeof n===c){n=n.call(i,{hash:{}})}else if(n===p){n=d.call(i,"title",{hash:{}})}t+=u(n)+"/"
o=a.id
n=o||i.id
if(typeof n===c){n=n.call(i,{hash:{}})}else if(n===p){n=d.call(i,"id",{hash:{}})}t+=u(n)+'">'
o=a.title
n=o||i.title
if(typeof n===c){n=n.call(i,{hash:{}})}else if(n===p){n=d.call(i,"title",{hash:{}})}t+=u(n)+'</a></h2>\n    <iframe src="/computer-programming/'
o=a.title
n=o||i.title
if(typeof n===c){n=n.call(i,{hash:{}})}else if(n===p){n=d.call(i,"title",{hash:{}})}t+=u(n)+"/"
o=a.id
n=o||i.id
if(typeof n===c){n=n.call(i,{hash:{}})}else if(n===p){n=d.call(i,"id",{hash:{}})}t+=u(n)+'/embedded?editor=yes"\n            style="width: 940px; height: 440px; border: 0px;"\n            frameborder="0"\n            scrolling="no">\n    </iframe>\n\n    '
n=i
n=f.invokePartial(s["discussion_discussion-meta"],"discussion_discussion-meta",n,a,s)
if(n||n===0){t+=n}t+="\n</div>\n"
return t})
module.exports=t
});
KAdefine("javascript/discussion-package/fork.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,a,s,i,l){s=s||e.helpers
i=i||e.partials
var n="",r,t,h,o,f=this,c="function",d=s.helperMissing,u=void 0,p=this.escapeExpression,m=s.blockHelperMissing
function v(e,a){return" ellipsis"}function g(e,a){var i="",l,n
i+='\n        <div>\n            <a class="author-nickname discussion-author'
h=s.wide
l=h||e.wide
n=s.unless
o=f.program(4,k,a)
o.hash={}
o.fn=o
o.inverse=f.noop
l=n.call(e,l,o)
if(l||l===0){i+=l}i+=' profile-programs" data-user-id="'
h=s.authorUserId
l=h||e.authorUserId
if(typeof l===c){l=l.call(e,{hash:{}})}else if(l===u){l=d.call(e,"authorUserId",{hash:{}})}i+=p(l)+'">'
h=s.authorNickname
l=h||e.authorNickname
if(typeof l===c){l=l.call(e,{hash:{}})}else if(l===u){l=d.call(e,"authorNickname",{hash:{}})}i+=p(l)+"</a>\n        </div>\n        "
return i}function k(e,a){return" ellipsis"}function y(e,a){var i="",l
i+="\n        <div>\n            "
h=s["_"]
l=h||e["_"]
o=f.program(7,b,a)
o.hash={}
o.fn=o
o.inverse=f.noop
if(h&&typeof l===c){l=l.call(e,o)}else{l=m.call(e,l,o)}if(l||l===0){i+=l}i+='\n            <time class="timeago" datetime="'
h=s.created
l=h||e.created
if(typeof l===c){l=l.call(e,{hash:{}})}else if(l===u){l=d.call(e,"created",{hash:{}})}i+=p(l)+'">\n                '
h=s.created
l=h||e.created
if(typeof l===c){l=l.call(e,{hash:{}})}else if(l===u){l=d.call(e,"created",{hash:{}})}i+=p(l)+"</time>\n        </div>\n        "
return i}function b(e,a){return"Updated"}n+='<div class="fork span1">\n    <a href="'
h=s.url
r=h||a.url
if(typeof r===c){r=r.call(a,{hash:{}})}else if(r===u){r=d.call(a,"url",{hash:{}})}n+=p(r)+'"><img class="fork-thumb" src="'
h=s.thumb
r=h||a.thumb
if(typeof r===c){r=r.call(a,{hash:{}})}else if(r===u){r=d.call(a,"thumb",{hash:{}})}n+=p(r)+'" /></a>\n    <div class="fork-info">\n        <div><a href="'
h=s.url
r=h||a.url
if(typeof r===c){r=r.call(a,{hash:{}})}else if(r===u){r=d.call(a,"url",{hash:{}})}n+=p(r)+'" class="fork-info-title'
h=s.wide
r=h||a.wide
t=s.unless
o=f.program(1,v,l)
o.hash={}
o.fn=o
o.inverse=f.noop
r=t.call(a,r,o)
if(r||r===0){n+=r}n+='">'
h=s.translatedTitle
r=h||a.translatedTitle
if(typeof r===c){r=r.call(a,{hash:{}})}else if(r===u){r=d.call(a,"translatedTitle",{hash:{}})}n+=p(r)+"</a></div>\n        "
h=s.hideAuthorName
r=h||a.hideAuthorName
t=s.unless
o=f.program(3,g,l)
o.hash={}
o.fn=o
o.inverse=f.noop
r=t.call(a,r,o)
if(r||r===0){n+=r}n+="\n        "
h=s.showDate
r=h||a.showDate
t=s["if"]
o=f.program(6,y,l)
o.hash={}
o.fn=o
o.inverse=f.noop
r=t.call(a,r,o)
if(r||r===0){n+=r}n+="\n        <div>\n            "
r=a
r=f.invokePartial(i["discussion_discussion-meta"],"discussion_discussion-meta",r,s,i)
if(r||r===0){n+=r}n+="\n        </div>\n    </div>\n</div>\n"
return n})
module.exports=t
});
KAdefine("javascript/discussion-package/sorts.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,a,s,l,t){s=s||e.helpers
var i="",n,h,r,f,o=this,c="function",p=s.helperMissing,u=void 0,v=this.escapeExpression
function d(e,a){var l="",t,i
l+='\n    <a data-value="'
t=e.value
if(typeof t===c){t=t.call(e,{hash:{}})}else if(t===u){t=p.call(e,"this.value",{hash:{}})}l+=v(t)+'"\n        '
t=e.isDefault
i=s["if"]
f=o.program(2,m,a)
f.hash={}
f.fn=f
f.inverse=o.noop
t=i.call(e,t,f)
if(t||t===0){l+=t}l+='\n        title="'
t=e.title
if(typeof t===c){t=t.call(e,{hash:{}})}else if(t===u){t=p.call(e,"this.title",{hash:{}})}l+=v(t)+'"\n        href="javascript:void(0);">'
t=e.name
if(typeof t===c){t=t.call(e,{hash:{}})}else if(t===u){t=p.call(e,"this.name",{hash:{}})}l+=v(t)+"</a>\n"
return l}function m(e,a){return'class="selected"'}r=s.sorts
n=r||a.sorts
h=s.each
f=o.program(1,d,t)
f.hash={}
f.fn=f
f.inverse=o.noop
n=h.call(a,n,f)
if(n||n===0){i+=n}i+="\n"
return i})
module.exports=t
});
KAdefine("javascript/discussion-package/formatting-tips.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,t,e,r,i){e=e||n.helpers
var o="",a,s,l,c=this,f="function",p=e.blockHelperMissing
function d(n,t){return"Typing this:"}function u(n,t){return"Displays this:"}function h(n,t){return"Accent your posts with *bold* or _italics_ and format `code`"}function g(n,t){return"```if (x < 0) {<br>    return;<br>}```"}function m(n,t){return"Accent your posts with <strong>bold</strong> or <i>italics</i> and format <code>code</code>"}function v(n,t){return"<code>if (x < 0) {<br>    return;<br>}</code>"}o+='<div class="formatting-tips-container" style="display:none;">\n    <div class="formatting-tips-triangle"></div>\n    <div class="formatting-tips-panel">\n        <table>\n            <tr class="discussion-guidelines-format-table-header">\n            <td>\n                '
s=e["_"]
a=s||t["_"]
l=c.program(1,d,i)
l.hash={}
l.fn=l
l.inverse=c.noop
if(s&&typeof a===f){a=a.call(t,l)}else{a=p.call(t,a,l)}if(a||a===0){o+=a}o+="\n            </td>\n            <td>\n                "
s=e["_"]
a=s||t["_"]
l=c.program(3,u,i)
l.hash={}
l.fn=l
l.inverse=c.noop
if(s&&typeof a===f){a=a.call(t,l)}else{a=p.call(t,a,l)}if(a||a===0){o+=a}o+='\n            </td>\n            </tr>\n            <tr class="discussion-guidelines-format-table">\n            <td>\n                '
s=e["_"]
a=s||t["_"]
l=c.program(5,h,i)
l.hash={}
l.fn=l
l.inverse=c.noop
if(s&&typeof a===f){a=a.call(t,l)}else{a=p.call(t,a,l)}if(a||a===0){o+=a}o+="\n                <pre>"
s=e.i18nDoNotTranslate
a=s||t.i18nDoNotTranslate
l=c.program(7,g,i)
l.hash={}
l.fn=l
l.inverse=c.noop
if(s&&typeof a===f){a=a.call(t,l)}else{a=p.call(t,a,l)}if(a||a===0){o+=a}o+="</pre>\n            </td>\n            <td>\n                "
s=e["_"]
a=s||t["_"]
l=c.program(9,m,i)
l.hash={}
l.fn=l
l.inverse=c.noop
if(s&&typeof a===f){a=a.call(t,l)}else{a=p.call(t,a,l)}if(a||a===0){o+=a}o+="\n                <pre>"
s=e.i18nDoNotTranslate
a=s||t.i18nDoNotTranslate
l=c.program(11,v,i)
l.hash={}
l.fn=l
l.inverse=c.noop
if(s&&typeof a===f){a=a.call(t,l)}else{a=p.call(t,a,l)}if(a||a===0){o+=a}o+="</pre>\n            </td>\n            </tr>\n        </table>\n    </div>\n</div>\n"
return o})
module.exports=t
});
KAdefine("javascript/discussion-package/form-controls.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(s,n,e,i,a){e=e||s.helpers
var l="",t,o,r,c=this,p="function",f=e.blockHelperMissing,u=e.helperMissing,h=void 0,d=this.escapeExpression
function b(s,n){return"Formatting tips"}function m(s,n){return'<a href="#" class="discussion-cancel" tabindex="3">Cancel</a>\n    or'}l+='<div class="discussion-controls" style="display: none">\n    <div class="formatting-tips">\n        <a href="#" class="show-formatting-tips">'
o=e["_"]
t=o||n["_"]
r=c.program(1,b,a)
r.hash={}
r.fn=r
r.inverse=c.noop
if(o&&typeof t===p){t=t.call(n,r)}else{t=f.call(n,t,r)}if(t||t===0){l+=t}l+="</a>\n    </div>\n    "
o=e["_"]
t=o||n["_"]
r=c.program(3,m,a)
r.hash={}
r.fn=r
r.inverse=c.noop
if(o&&typeof t===p){t=t.call(n,r)}else{t=f.call(n,t,r)}if(t||t===0){l+=t}l+='\n    <input class="simple-button primary discussion-submit"\n           type="button"\n           value="'
o=e.label
t=o||n.label
if(typeof t===p){t=t.call(n,{hash:{}})}else if(t===h){t=u.call(n,"label",{hash:{}})}l+=d(t)+'"\n           tabindex="2" />\n</div>\n'
return l})
module.exports=t
});
KAdefine("javascript/discussion-package/mod-controls.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,n,a,r,i){a=a||e.helpers
r=r||e.partials
var t="",o,s,l,f,u=this,c="function",h=a.helperMissing,p=void 0,g=this.escapeExpression,v=a.blockHelperMissing
function m(e,n){var r="",i,t
r+="\n        "
l=a.flags
i=l||e.flags
t=a["if"]
f=u.program(2,d,n)
f.hash={}
f.fn=f
f.inverse=u.program(17,B,n)
i=t.call(e,i,f)
if(i||i===0){r+=i}r+="\n    "
return r}function d(e,n){var i="",t,o
i+="\n            "
t=e
t=u.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",t,a,r)
if(t||t===0){i+=t}i+="\n            "
i+="\n            "
i+="\n            "
i+='\n            <a href="javascript:void(0);" data-flags="'
l=a.flags
t=l||e.flags
o=a.each
f=u.program(3,_,n)
f.hash={}
f.fn=f
f.inverse=u.noop
t=o.call(e,t,f)
if(t||t===0){i+=t}i+='" '
l=a.flaggedBy
t=l||e.flaggedBy
o=a["if"]
f=u.program(5,y,n)
f.hash={}
f.fn=f
f.inverse=u.noop
t=o.call(e,t,f)
if(t||t===0){i+=t}i+=' class="clear-flags call-to-action">'
l=a.inQueue
t=l||e.inQueue
o=a["if"]
f=u.program(7,Q,n)
f.hash={}
f.fn=f
f.inverse=u.program(12,F,n)
t=o.call(e,t,f)
if(t||t===0){i+=t}i+="</a>\n        "
return i}function _(e,n){var a="",r
r=e
if(typeof r===c){r=r.call(e,{hash:{}})}else if(r===p){r=h.call(e,"this",{hash:{}})}a+=g(r)+","
return a}function y(e,n){var r="",i
r+='data-flagged-by="'
l=a.flaggedBy
i=l||e.flaggedBy
if(typeof i===c){i=i.call(e,{hash:{}})}else if(i===p){i=h.call(e,"flaggedBy",{hash:{}})}r+=g(i)+'"'
return r}function Q(e,n){var r,i
l=a.numberOfFlags
r=l||e.numberOfFlags
l=a.ngettext
i=l||e.ngettext
f=u.program(8,k,n)
f.hash={}
f.fn=f
f.inverse=u.program(10,C,n)
if(l&&typeof i===c){r=i.call(e,r,f)}else{r=v.call(e,i,r,f)}if(r||r===0){return r}else{return""}}function k(e,n){return"(C)lear  Flag"}function C(e,n){var r="",i
r+="(C)lear "
l=a.numberOfFlags
i=l||e.numberOfFlags
if(typeof i===c){i=i.call(e,{hash:{}})}else if(i===p){i=h.call(e,"numberOfFlags",{hash:{}})}r+=g(i)+" Flags"
return r}function F(e,n){var r,i
l=a.numberOfFlags
r=l||e.numberOfFlags
l=a.ngettext
i=l||e.ngettext
f=u.program(13,b,n)
f.hash={}
f.fn=f
f.inverse=u.program(15,j,n)
if(l&&typeof i===c){r=i.call(e,r,f)}else{r=v.call(e,i,r,f)}if(r||r===0){return r}else{return""}}function b(e,n){return"Clear  Flag"}function j(e,n){var r="",i
r+="Clear "
l=a.numberOfFlags
i=l||e.numberOfFlags
if(typeof i===c){i=i.call(e,{hash:{}})}else if(i===p){i=h.call(e,"numberOfFlags",{hash:{}})}r+=g(i)+" Flags"
return r}function B(e,n){var r="",i,t
r+="\n            "
l=a.inQueue
i=l||e.inQueue
t=a["if"]
f=u.program(18,O,n)
f.hash={}
f.fn=f
f.inverse=u.noop
i=t.call(e,i,f)
if(i||i===0){r+=i}r+="\n        "
return r}function O(e,n){var i="",t
i+="\n                "
t=e
t=u.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",t,a,r)
if(t||t===0){i+=t}i+='\n                <a href="javascript:void(0);" class="approve">'
l=a["_"]
t=l||e["_"]
f=u.program(19,P,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof t===c){t=t.call(e,f)}else{t=v.call(e,t,f)}if(t||t===0){i+=t}i+="</a>\n            "
return i}function P(e,n){return"(A)pprove"}function S(e,n){var i="",t
i+="\n        "
t=e
t=u.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",t,a,r)
if(t||t===0){i+=t}i+='\n        <a href="javascript:void(0);" title="'
l=a["_"]
t=l||e["_"]
f=u.program(22,w,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof t===c){t=t.call(e,f)}else{t=v.call(e,t,f)}if(t||t===0){i+=t}i+='" class="skip">'
l=a["_"]
t=l||e["_"]
f=u.program(24,x,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof t===c){t=t.call(e,f)}else{t=v.call(e,t,f)}if(t||t===0){i+=t}i+="</a>\n    "
return i}function w(e,n){return"Skip taking an action on this post right now."}function x(e,n){return"(S)kip"}function A(e,n){var r="",i,t
r+="\n    "
l=a.isScratchpad
i=l||e.isScratchpad
t=a.unless
f=u.program(27,D,n)
f.hash={}
f.fn=f
f.inverse=u.noop
i=t.call(e,i,f)
if(i||i===0){r+=i}r+="\n    "
return r}function D(e,n){var i="",t,o
i+="\n        "
t=e
t=u.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",t,a,r)
if(t||t===0){i+=t}i+="\n        "
l=a.isComment
t=l||e.isComment
o=a["if"]
f=u.program(28,E,n)
f.hash={}
f.fn=f
f.inverse=u.program(37,z,n)
t=o.call(e,t,f)
if(t||t===0){i+=t}i+="\n\n        "
t=e
t=u.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",t,a,r)
if(t||t===0){i+=t}i+='\n\n        <a href="javascript:void(0);" class="edit">'
l=a.inQueue
t=l||e.inQueue
o=a["if"]
f=u.program(46,R,n)
f.hash={}
f.fn=f
f.inverse=u.program(49,V,n)
t=o.call(e,t,f)
if(t||t===0){i+=t}i+="</a>\n    "
return i}function E(e,n){var r="",i,t
r+='\n            <a href="javascript:void(0);" class="change-type '
l=a.highlightChangeButton
i=l||e.highlightChangeButton
t=a["if"]
f=u.program(29,H,n)
f.hash={}
f.fn=f
f.inverse=u.noop
i=t.call(e,i,f)
if(i||i===0){r+=i}r+='" data-target-type="question">'
l=a.inQueue
i=l||e.inQueue
t=a["if"]
f=u.program(31,M,n)
f.hash={}
f.fn=f
f.inverse=u.program(34,N,n)
i=t.call(e,i,f)
if(i||i===0){r+=i}r+="</a>\n        "
return r}function H(e,n){return"call-to-action"}function M(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(32,q,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function q(e,n){return"Change to (Q)uestion"}function N(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(35,U,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function U(e,n){return"Change to question"}function z(e,n){var r="",i,t
r+='\n            <a href="javascript:void(0);" class="change-type '
l=a.highlightChangeButton
i=l||e.highlightChangeButton
t=a["if"]
f=u.program(38,G,n)
f.hash={}
f.fn=f
f.inverse=u.noop
i=t.call(e,i,f)
if(i||i===0){r+=i}r+='" data-target-type="comment">'
l=a.inQueue
i=l||e.inQueue
t=a["if"]
f=u.program(40,I,n)
f.hash={}
f.fn=f
f.inverse=u.program(43,K,n)
i=t.call(e,i,f)
if(i||i===0){r+=i}r+="</a>\n        "
return r}function G(e,n){return"call-to-action"}function I(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(41,J,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function J(e,n){return"Change to (F)eedback"}function K(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(44,L,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function L(e,n){return"Change to feedback"}function R(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(47,T,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function T(e,n){return"(E)dit"}function V(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(50,W,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function W(e,n){return"Edit"}function X(e,n){var i="",t,o
i+="\n        "
t=e
t=u.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",t,a,r)
if(t||t===0){i+=t}i+="\n        "
l=a.deleted
t=l||e.deleted
o=a["if"]
f=u.program(53,Y,n)
f.hash={}
f.fn=f
f.inverse=u.program(56,en,n)
t=o.call(e,t,f)
if(t||t===0){i+=t}i+="\n    "
return i}function Y(e,n){var r="",i
r+='\n            <a href="javascript:void(0);" class="undelete">'
l=a["_"]
i=l||e["_"]
f=u.program(54,Z,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof i===c){i=i.call(e,f)}else{i=v.call(e,i,f)}if(i||i===0){r+=i}r+="</a>\n        "
return r}function Z(e,n){return"Undelete"}function en(e,n){var r="",i,t
r+='\n            <a href="javascript:void(0);" class="delete '
l=a.highlightDeleteButton
i=l||e.highlightDeleteButton
t=a["if"]
f=u.program(57,nn,n)
f.hash={}
f.fn=f
f.inverse=u.noop
i=t.call(e,i,f)
if(i||i===0){r+=i}r+='">'
l=a.inQueue
i=l||e.inQueue
t=a["if"]
f=u.program(59,an,n)
f.hash={}
f.fn=f
f.inverse=u.program(62,tn,n)
i=t.call(e,i,f)
if(i||i===0){r+=i}r+="</a>\n        "
return r}function nn(e,n){return"call-to-action"}function an(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(60,rn,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function rn(e,n){return"(D)elete"}function tn(e,n){var r
l=a["_"]
r=l||e["_"]
f=u.program(63,on,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof r===c){r=r.call(e,f)}else{r=v.call(e,r,f)}if(r||r===0){return r}else{return""}}function on(e,n){return"Delete"}function sn(e,n){var r="",i,t
r+="\n        "
l=a.isScratchpad
i=l||e.isScratchpad
t=a["if"]
f=u.program(66,ln,n)
f.hash={}
f.fn=f
f.inverse=u.noop
i=t.call(e,i,f)
if(i||i===0){r+=i}r+="\n    "
return r}function ln(e,n){var i="",t,o
i+="\n            "
t=e
t=u.invokePartial(r["discussion_meta-separator"],"discussion_meta-separator",t,a,r)
if(t||t===0){i+=t}i+="\n            "
l=a.hideFromHotlist
t=l||e.hideFromHotlist
o=a["if"]
f=u.program(67,fn,n)
f.hash={}
f.fn=f
f.inverse=u.program(70,cn,n)
t=o.call(e,t,f)
if(t||t===0){i+=t}i+="\n        "
return i}function fn(e,n){var r="",i
r+='\n            <a href="javascript:void(0);" class="unhide-hotlist">'
l=a["_"]
i=l||e["_"]
f=u.program(68,un,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof i===c){i=i.call(e,f)}else{i=v.call(e,i,f)}if(i||i===0){r+=i}r+="</a>\n            "
return r}function un(e,n){return"Undo hide from hotlist"}function cn(e,n){var r="",i
r+='\n            <a href="javascript:void(0);" class="hide-hotlist">'
l=a["_"]
i=l||e["_"]
f=u.program(71,hn,n)
f.hash={}
f.fn=f
f.inverse=u.noop
if(l&&typeof i===c){i=i.call(e,f)}else{i=v.call(e,i,f)}if(i||i===0){r+=i}r+="</a>\n            "
return r}function hn(e,n){return"Hide from hotlist"}t+='\n<span class="mod-tools" data-key="'
l=a.key
o=l||n.key
if(typeof o===c){o=o.call(n,{hash:{}})}else if(o===p){o=h.call(n,"key",{hash:{}})}t+=g(o)+'" data-is-author="'
l=a.showAuthorControls
o=l||n.showAuthorControls
if(typeof o===c){o=o.call(n,{hash:{}})}else if(o===p){o=h.call(n,"showAuthorControls",{hash:{}})}t+=g(o)+'" data-in-queue="'
l=a.inQueue
o=l||n.inQueue
if(typeof o===c){o=o.call(n,{hash:{}})}else if(o===p){o=h.call(n,"inQueue",{hash:{}})}t+=g(o)+'">\n\n    '
l=a.definitelyNotSpam
o=l||n.definitelyNotSpam
s=a.unless
f=u.program(1,m,i)
f.hash={}
f.fn=f
f.inverse=u.noop
o=s.call(n,o,f)
if(o||o===0){t+=o}t+="\n\n    "
l=a.inQueue
o=l||n.inQueue
s=a["if"]
f=u.program(21,S,i)
f.hash={}
f.fn=f
f.inverse=u.noop
o=s.call(n,o,f)
if(o||o===0){t+=o}t+="\n\n    "
l=a.isProjectEvalAnswer
o=l||n.isProjectEvalAnswer
s=a.unless
f=u.program(26,A,i)
f.hash={}
f.fn=f
f.inverse=u.noop
o=s.call(n,o,f)
if(o||o===0){t+=o}t+="\n\n    "
l=a.hideModDelete
o=l||n.hideModDelete
s=a.unless
f=u.program(52,X,i)
f.hash={}
f.fn=f
f.inverse=u.noop
o=s.call(n,o,f)
if(o||o===0){t+=o}t+="\n\n    "
l=a.inQueue
o=l||n.inQueue
s=a["if"]
f=u.program(65,sn,i)
f.hash={}
f.fn=f
f.inverse=u.noop
o=s.call(n,o,f)
if(o||o===0){t+=o}t+="\n\n</span>\n"
return t})
module.exports=t
});
KAdefine("javascript/discussion-package/moderation.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/qTip2/jquery.qtip.js")
var $=require("jquery")
var _=require("underscore")
require("../shared-package/i18n.js")
var Discussion=require("./discussion.js")
var DiscussionReplies=require("./discussion-replies.js")
var KA=require("../shared-package/ka.js")
var Moderation={ModAction:{CLEAR_FLAGS:"clearflags",CHANGE_TYPE:"changetype",UNDELETE:"undelete"},LOW_QUALITY_FIRST:1,LOWEST_VOTES_FIRST:2,init:function(){var e=require("./flag.js")
e.init()
$(document).on("click",".mod-tools .edit",Moderation.editEntity).on("click",".mod-tools .delete",Moderation.deleteEntity).on("click",".mod-tools .change-type",Moderation.changeEntityType).on("click",".mod-tools .clear-flags",Moderation.clearFlags).on("mouseenter",".mod-tools .clear-flags",this.showFlagsHovercard).on("click",".mod-tools .approve",Moderation.clearFlags).on("click",".mod-tools .undelete",Moderation.undelete).on("click",".mod-tools .skip",Moderation.skip).on("click",".mod-tools .hide-hotlist",{hide_from_hotlist:true},Moderation.hideHotlist).on("click",".mod-tools .unhide-hotlist",{hide_from_hotlist:false},Moderation.hideHotlist)},getEntityKey_:function(e){return e.closest(".mod-tools").data("key")},deleteEntity:function(){var e=$(this),t=e.closest(".mod-tools"),a=Moderation.getEntityKey_(e),s=t.data("isAuthor"),i=t.data("inQueue"),o=KA.getUserProfile().get("isModerator")
if(!a){return}var n
if(s){n=confirm($._("Are you sure you want to delete this?"))}else{n=o}if(n){if(s||i){Discussion.remove(e)
var r=Discussion.getParentType(e)
if(r==="reply"){var d=Discussion.getParent(Discussion.getParent(t)),l=Discussion.getKey(d)
DiscussionReplies.decrementReplyCount(l)}else if(s&&r==="answer"){Discussion.setHasAnswered(e,false)}}else{e.text($._("Undelete")).removeClass("delete").addClass("undelete").closest(".discussion-item").addClass("deleted")}$.ajax({type:"DELETE",url:"/api/internal/feedback/"+a+"?casing=camel",dataType:"json"})}return false},editEntity:function(){Discussion.edit(this)
return false},changeEntityType:function(e){var t=$(this),a=Moderation.getEntityKey_(t),s=e&&e["targetType"]||t.data("targetType"),i={type:s}
if(!a||!s){return}var o=s
if(s==="comment"){o="feedback"}Moderation.showMessage(t,$._("Changed to %(targetTypeName)s",{targetTypeName:o}))
Discussion.remove(t)
$.ajax({type:"PUT",url:"/api/internal/feedback/"+a+"/"+Moderation.ModAction.CHANGE_TYPE+"?casing=camel",contentType:"application/json",data:JSON.stringify(i),dataType:"json"})},clearFlags:function(){var e=$(this),t=e.closest(".mod-tools").data("inQueue"),a=Moderation.getEntityKey_(e),s="/api/internal/feedback/"+a+"/"+Moderation.ModAction.CLEAR_FLAGS+"?casing=camel"
if(!a){return false}Moderation.showMessage(e,$._("Cleared flags"))
if(t){Discussion.remove(e)}$.ajax({type:"PUT",url:s,dataType:"json"})},undelete:function(){var e=$(this),t=Moderation.getEntityKey_(e),a="/api/internal/feedback/"+t+"/"+Moderation.ModAction.UNDELETE+"?casing=camel"
if(!t){return false}e.text($._("Delete")).removeClass("undelete").addClass("delete").parents(".discussion-item").removeClass("deleted")
$.ajax({type:"PUT",url:a,dataType:"json"})},hideHotlist:function(e){var t=$(this),a=t.closest(".mod-tools"),s=Moderation.getEntityKey_(t),i=a.closest("#"+s).attr("data-id"),o="/api/internal/scratchpads/"+i
if(!s||!i){return false}if(e.data.hide_from_hotlist){t.text($._("Undo hide from hotlist")).removeClass("hide-hotlist").addClass("unhide-hotlist")}else{t.text($._("Hide from hotlist")).removeClass("unhide-hotlist").addClass("hide-hotlist")}$.ajax({type:"PATCH",url:o,dataType:"json",contentType:"application/json",data:JSON.stringify(e.data),success:function(e){Moderation.clearFlags.apply(this)}.bind(this)})},showMessage:function(e,t){e.text(t).addClass("action-complete").parent().addClass("mod-action-complete")},skip:function(){Discussion.remove($(this))},showFlagsHovercard:function(e){var t=require("./queue.js")
var a=$(e.target)
if(!a.data("has-tip")){var s=require("./flags-hovercard.handlebars")
var i=a.data("flaggedBy").split(",")
var o=a.data("flags").split(",")
var n=[]
var r=a.parent()&&a.parent().data("key"),d=t.discussionList_&&t.discussionList_.data
if(r&&d){var l=_(d).find(function(e){return e.key===r})
if(l){i=l.flaggedBy
o=l.flags}}_.each(i,function(e,t){n.push({user:e,type:o[t]})})
a.qtip({content:{text:s(n)},style:{classes:"custom-override flags-hovercard"},hide:{delay:100,fixed:true},position:{my:"top left",at:"bottom left"}})
a.data("has-tip",true)}a.qtip("show")}}
module.exports=Moderation
});
KAdefine("javascript/discussion-package/queue.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var Discussion=require("./discussion.js")
var DiscussionList=require("./discussion-list.js")
var Moderation=require("./moderation.js")
var ModerationQueue={}
ModerationQueue.init=function(){_.bindAll(this,"show_","autoLoad_","reset_","bindEvents_","fetchSort_","fetchType_","transformDataBeforeRender")
Discussion.init({page:0,which:"moderation-queue",container:$(".mod-queue")})
this.bindEvents_()
this.reset_()
this.show_()}
ModerationQueue.reset_=function(e,t){$(".mod-queue").html("")
this.type_=e||"question"
this.sort_=t||Moderation.LOW_QUALITY_FIRST}
ModerationQueue.bindEvents_=function(){$(".mod-queue-header").on("click",".mod-queue-type",this.fetchType_).on("click",".mod-queue-sort",this.fetchSort_)
$(document).on("click",".mod-tools a",this.autoLoad_)
$(document).keypress(this.onHotkey_)}
ModerationQueue.onHotkey_=function(e){if(!$(document.activeElement).is("body")){return}var t
var s={}
switch(e.which){case 97:t=Moderation.clearFlags
break
case 99:t=Moderation.clearFlags
break
case 100:t=Moderation.deleteEntity
break
case 101:Discussion.edit($(".discussion-list .mod-tools").first())
return
case 102:t=Moderation.changeEntityType
s["targetType"]="comment"
break
case 113:t=Moderation.changeEntityType
s["targetType"]="question"
break
case 115:t=Moderation.skip
break}if(t){ModerationQueue.autoLoad_()
t.call($(".discussion-list .mod-tools").first(),s)}}
ModerationQueue.fetchSort_=function(e){var t=$(e.target)
var s=t.parent()
s.addClass("selected").siblings().removeClass("selected")
this.reset_(this.type_,t.data("value"))
this.show_()}
ModerationQueue.fetchType_=function(e){var t=$(e.target),s=t.parent(),i=t.data("value")
s.addClass("selected").siblings().removeClass("selected")
this.reset_(i,this.sort_)
this.show_()
$("#modpanel .mod-queue").toggleClass("wide",i==="program")}
ModerationQueue.show_=function(){var e
if(this.type_==="question"||this.type_==="projecthelp"){e=require("../discussion-package/thread.handlebars")}else if(this.type_==="answer"||this.type_==="projectevalanswer"){e=require("../discussion-package/answer.handlebars")}else if(this.type_==="comment"){e=require("../discussion-package/comment.handlebars")}else if(this.type_==="program"){e=require("../discussion-package/program.handlebars")}else{throw new Error("No item template find for type: "+this.type_)}this.discussionList_=new DiscussionList({hideHeader:true,requestURL:"/api/internal/moderation/feedback",itemKey:"feedback",itemTemplate:e,containerSelector:".mod-queue",page:0,sortValue:this.sort_,params:{casing:"camel",type:this.type_,offset:this.offset_},onInitialFetch:this.onInitialFetch_,preRenderTransformData:this.transformDataBeforeRender})}
ModerationQueue.onInitialFetch_=function(e){var t=$(".mod-happy-message")
if(e.length===0){t.show()}else{t.hide()}}
ModerationQueue.transformDataBeforeRender=function(e){_.each(e,function(e){e=Discussion.transformFeedback(e)
e.inQueue=true
e.showModControls=true})
return e}
ModerationQueue.autoLoad_=function(){var e=5
if(this.discussionList_){if($(".mod-queue .discussion-item").length<=e){this.discussionList_.fetchMore()}}}
module.exports=ModerationQueue
});
KAdefine("javascript/discussion-package/flag.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-modal.js")
var $=require("jquery")
require("../shared-package/i18n.js")
var Discussion=require("./discussion.js")
var DiscussionNote=require("./discussion-note.js")
var Moderation=require("./moderation.js")
var ModerationFlag={init:function(){$(document).on("click",".flag-show",ModerationFlag.showControls_).on("click","#flag-modal .flag-as:not(.disabled)",ModerationFlag.flag_).on("input propertychange","#flag-modal textarea[name=justification]",ModerationFlag.enableSubmit_)},showControls_:function(){var a=$(this),e=a.parents(".flag-tools").data("key"),s=Discussion.getParent(this),t=Discussion.getParentType(this)
if(DiscussionNote.checkNeedsLogin(this,"flag")){return false}var i=275
var n=$(".discussion-content",s).text()
if(n.length>i){n=n.substring(0,i)+"..."}var r=a.hasClass("scratchpad-flagging")?require("./scratchpad-flag-modal.handlebars"):require("./flag-modal.handlebars")
var o=""
if(a.hasClass("scratchpad-flagging")){var l=require("../scratchpads-package/scratchpad-ui.js").ScratchpadUI
o=l.scratchpad.get("guidelinesUrlPath")}var d=r({feedback:n,isQuestion:t==="question",isAnswer:t==="answer",isComment:t==="comment",canBeChanged:t==="question"||t==="comment",translatedFeedbackType:Discussion._translateFeedbackType(t),guidelinesUrlPath:o})
if($("#flag-modal").length){$("#flag-modal").replaceWith(d)}else{$("body").append(d)}var c=$("#flag-modal")
c.data("key",e).modal({backdrop:true,show:true,keyboard:true})
return false},flag_:function(){var a=$(this),e=a.parents("#flag-modal"),s=a.data("flag")||e.find("[name=flag]").val(),t=e.data("key"),i=e.find("textarea[name=justification]")
if(!s||!t){return false}var n={flag:s,entity_key:t}
if(i.length){n["justification"]=i.val()}ModerationFlag.postAndNotify_(e,n)},enableSubmit_:function(){var a=$(this),e=a.siblings(".flag-row").find(".simple-button").removeClass("disabled")
e.toggleClass("disabled",!a.val())},postAndNotify_:function(a,e){$.post("/api/internal/discussions/flagentity",e)
var s=$(".flag-tools[data-key="+e["entity_key"]+"]"),t=$(".flag-show",s)
Moderation.showMessage(t,$._("Flagged"))
a.modal("hide")
return false}}
module.exports=ModerationFlag
});
KAdefine("javascript/discussion-package/flags-hovercard.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,n,s,a,l){s=s||e.helpers
var r="",i,c,t,o,h=this,p="function",f=s.helperMissing,v=void 0,d=this.escapeExpression,u=s.blockHelperMissing
function g(e,n){return"Flagged By"}function y(e,n){var a="",l
a+='\n                <li class="sample-content-link">\n                    '
t=s.user
l=t||e.user
if(typeof l===p){l=l.call(e,{hash:{}})}else if(l===v){l=f.call(e,"user",{hash:{}})}a+=d(l)+' - <span class="flag-type">'
t=s.type
l=t||e.type
if(typeof l===p){l=l.call(e,{hash:{}})}else if(l===v){l=f.call(e,"type",{hash:{}})}a+=d(l)+"</span>\n                </li>\n            "
return a}r+='<div class="hover-card-container">\n    <div class="hover-card-triangle"></div>\n    <div class="hover-card-content-container vertical-shadow">\n        <div class="hover-card-content clearfix">\n            <h4 class="pulls">\n                '
t=s["_"]
i=t||n["_"]
o=h.program(1,g,l)
o.hash={}
o.fn=o
o.inverse=h.noop
if(t&&typeof i===p){i=i.call(n,o)}else{i=u.call(n,i,o)}if(i||i===0){r+=i}r+='\n            </h4>\n            <ul class="flagged-by-users">\n            '
i=n
c=s.each
o=h.program(3,y,l)
o.hash={}
o.fn=o
o.inverse=h.noop
i=c.call(n,i,o)
if(i||i===0){r+=i}r+="\n            </ul>\n        </div>\n    </div>\n</div>\n"
return r})
module.exports=t
});
this.KAdefineTiming["discussion-package.js"].endTime = +(new Date);
