((this.KAdefineTiming = this.KAdefineTiming || {})["tutorial-package.js"] = {}).startTime = +(new Date);
KAdefine("third_party/javascript-khansrc/jquery-hoverflow/jquery.hoverflow.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../jquery/jquery.js");
(function($){$.fn.hoverFlow=function(e,t,n,i,o){if($.inArray(e,["mouseover","mouseenter","mouseout","mouseleave"])==-1){return this}var r=typeof n==="object"?n:{complete:o||!o&&i||$.isFunction(n)&&n,duration:n,easing:o&&i||i&&!$.isFunction(i)&&i}
r.queue=false
var u=r.complete
r.complete=function(){$(this).dequeue()
if($.isFunction(u)){u.call(this)}}
return this.each(function(){var n=$(this)
if(e=="mouseover"||e=="mouseenter"){n.data("jQuery.hoverFlow",true)}else{n.removeData("jQuery.hoverFlow")}n.queue(function(){var i=e=="mouseover"||e=="mouseenter"?n.data("jQuery.hoverFlow")!==undefined:n.data("jQuery.hoverFlow")===undefined
if(i){n.animate(t,r)}else{n.queue([])}})})}})(jQuery);(function($){$.fn.hoverIntent=function(e,t){var n={sensitivity:7,directionalSensitivityStop:0,directionalSensitivityX:0,directionalSensitivityY:0,interval:100,timeout:0}
n=$.extend(n,t?{over:e,out:t}:e)
var i=0,o=0,r,u,a=0,v=0
var s=function(e){var t=e.pageX-i
var n=e.pageY-o
if((a>0&&t>0||a<0&&t<0)&&(a>0&&t>0||a<0&&t<0)){a=a*.75+t*.25
v=v*.75+n*.25}else{a=t
v=n}i=e.pageX
o=e.pageY}
var l=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t)
if(Math.abs(r-i)+Math.abs(u-o)<n.sensitivity){t.hoverIntent_s=1
return n.over.apply(t,[e])}else{r=i
u=o
t.hoverIntent_t=setTimeout(function(){l(e,t)},n.interval)}}
var c=function(e,t){t.hoverIntent_t=clearTimeout(t.hoverIntent_t)
if(n.directionalSensitivityX>0&&a>n.directionalSensitivityX||n.directionalSensitivityX<0&&a<-n.directionalSensitivityX||n.directionalSensitivityY>0&&v>n.directionalSensitivityY||n.directionalSensitivityY<0&&v<-n.directionalSensitivityY){r=i
u=o
a*=.25
v*=.25
t.hoverIntent_t=setTimeout(function(){c(e,t)},n.timeout)}else{t.hoverIntent_s=0
$(t).unbind("mousemove",s)
t.mouseMoveBound=false
return n.out.apply(t,[e])}}
var f=function(e){var t=jQuery.extend({},e)
var i=this
if(i.hoverIntent_t){i.hoverIntent_t=clearTimeout(i.hoverIntent_t)}if(e.type=="mouseenter"){if(i.hoverIntent_s!=1){if(!i.mouseMoveBound){$(i).bind("mousemove",s)
i.mouseMoveBound=true}r=t.pageX
u=t.pageY
i.hoverIntent_t=setTimeout(function(){l(t,i)},n.interval)}}else{if(i.hoverIntent_s==1){r=t.pageX
u=t.pageY
i.hoverIntent_t=setTimeout(function(){c(t,i)},n.timeout)}}}
return this.bind("mouseenter",f).bind("mouseleave",f)}})(jQuery)
});
KAdefine("javascript/tutorial-package/tutorial-description.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(t,e,s,a,n){s=s||t.helpers
var l="",i,r,p,o,c=this,h="function",d=s.helperMissing,f=void 0,m=this.escapeExpression
function u(t,e){var a="",n
a+='\n    <span class="long-description" itemprop="description">'
p=s.translatedDescriptionHtml
n=p||t.translatedDescriptionHtml
if(typeof n===h){n=n.call(t,{hash:{}})}else if(n===f){n=d.call(t,"translatedDescriptionHtml",{hash:{}})}if(n||n===0){a+=n}a+="</span>\n    "
return a}l+='<h2 class="title-header">\n    <span itemprop="name" class="title desktop-only">'
p=s.translatedTitle
i=p||e.translatedTitle
if(typeof i===h){i=i.call(e,{hash:{}})}else if(i===f){i=d.call(e,"translatedTitle",{hash:{}})}l+=m(i)+"</span>\n    "
p=s.translatedDescriptionHtml
i=p||e.translatedDescriptionHtml
r=s["if"]
o=c.program(1,u,n)
o.hash={}
o.fn=o
o.inverse=c.noop
i=r.call(e,i,o)
if(i||i===0){l+=i}l+="\n</h2>\n"
return l})
module.exports=t
});
KAdefine("javascript/tutorial-package/tutorial-models.js", function(require, module, exports) {
var Backbone=require("backbone")
var createModelClasses=function(t){var e=t.extend({url:function(){var t=this.get("id")||""
return"/api/internal/dev/edit/"+this.get("contentKind").toLowerCase()+"/"+t+"?casing=camel"}})
return{Topic:t.extend({defaults:{contentKind:"Topic",title:"New Topic",slug:"new-topic",standaloneTitle:"New Topic",description:"",hide:false,tags:[],alternateSlugs:[],userAuthoredContentTypes:[],childData:[],listedLocales:[],inKnowledgeMap:false,iconSrc:"",xPos:0,yPos:0,renderType:"Tutorial"},url:function(){return"/api/internal/dev/edit/topic/"+(this.id||"")+"?casing=camel"},getIcon:function(){return"icon-sitemap"},getTitle:function(){return this.get("standaloneTitle")}}),Video:e.extend({defaults:{contentKind:"Video"},getIcon:function(){return"icon-facetime-video"},getTitle:function(){return this.get("title")}}),Exercise:e.extend({defaults:{contentKind:"Exercise"},getIcon:function(){return"icon-star"},getTitle:function(){return this.get("prettyDisplayName")}}),Article:e.extend({defaults:{contentKind:"Article",title:"New article",htmlContent:"<p>Article content goes here</p>"},getIcon:function(){return"icon-file-text"},getTitle:function(){return this.get("title")}}),Scratchpad:Backbone.Model.extend({url:function(){return"/api/internal/scratchpads/"+this.id+"?casing=camel"},getIcon:function(){return"icon-picture"},getTitle:function(){return this.get("title")},getUIAttributes:function(){return this.toJSON()}}),Separator:Backbone.Model.extend({defaults:{contentKind:"Separator",id:"_separator",title:"----------"},getIcon:function(){return"icon-ellipsis-horizontal"},getTitle:function(){return this.get("title")},getUIAttributes:function(){return this.toJSON()}})}}
exports.createModelClasses=createModelClasses
});
KAdefine("javascript/tutorial-package/tutorial-nav.js", function(require, module, exports) {
var $=require("jquery")
var Backbone=require("backbone")
var _=require("underscore")
require("../shared-package/i18n.js")
var APIActionResults=require("../shared-package/api-action-results.js")
var Analytics=require("../shared-package/analytics.js")
var KA=require("../shared-package/ka.js")
var KAConsole=require("../shared-package/console.js")
var NotificationsLoader=require("../shared-package/notifications-loader.js")
var PackageManager=require("../shared-package/package-manager.js")
var createModelClasses=require("./tutorial-models.js").createModelClasses
var updateDocumentTitle=require("../shared-package/update-document-title.js")
var TutorialModelClasses=createModelClasses(Backbone.Model)
var TutorialNav={initOptions:{},_TutorialEditor:null,init:function(t,e){var i=require("./tutorial-router.js")
var n=require("./tutorial-views.js")
var o=this
_.bindAll(this)
this.initOptions=t
this.currentId=this.initOptions.preRenderedId
this.preRenderedId=this.initOptions.preRenderedId
this.router=new i
this.router.on("route",Analytics.handleRouterNavigation,Analytics)
this.liveContext=this.createContext(new TutorialModelClasses.Topic(this.initOptions.topicModel),_.map(this.initOptions.contentModels,function(t){return new TutorialModelClasses[t.contentKind](t)}),".tutorial-nav.live-version",n.NavListView,n.ViewTable,n.HeaderView)
this.extendedSlug=this.initOptions.topicModel.extendedSlug
if(KA.isIPad&&/hour-of-code-tutorial/.test(this.extendedSlug)){window.location.href="/computing/hour-of-code/"+"hour-of-code-blocks/v/intro-to-drawing-with-blocks"
return}this.currentContext=this.liveContext
if(this.initOptions.exercisePrecacheData){this.liveContext.exercisePrecacheData[this.initOptions.contentId]=this.initOptions.exercisePrecacheData}this.currentContentView=null
this.discussionParams=e
this.discussionParams.reset=true
Backbone.history.start({pushState:true,hashChange:false})
this.bindNavigationLinks()
APIActionResults.register("tutorial_node_progress",this.setNodeProgress)
PackageManager.precache("perseus.js",4e3)
PackageManager.require("perseus.js").then(function(){var t=require("../exercises-package/exercises.js")
$(t).bind("problemDone",function(){TutorialNav.liveContext.exercisePrecacheData={}
if(TutorialNav.editContext){TutorialNav.editContext.exercisePrecacheData={}}})
$(t).bind("newProblem",function(){_.defer(o.showContent)})
$(t).trigger("tutorialNavLoaded")})
if(this.initOptions.previewing){var r={class_:["UrgentNotification"],text:$._("You are previewing an unpublished tutorial.")}
NotificationsLoader.loadUrgent(r)}var s=_.bind(this.initEditor,this,this.initOptions.topicModel.id,this.initOptions.refreshContent,this.initOptions.publishAuthorized)
var a=$("#load-editor")
if(a.length&&window.location.pathname.match(/\/edit$/)){s()}else{a.one("click",s)}},initEditor:function(t,e,i){$(".editor-status .loading-indicator").removeClass("hide")
require.async(["../tutorial-editor-package/tutorial-editor.js","../editor-package/editor-models.js"],function(n,o){var r=this.loadEditModels(t,o).then(function(t,i){if(this.currentContentView){this.currentContentView.remove()
this.currentContentView=null}this.editContext=this.createContext(t,i,".tutorial-nav.edit-version",n.NavListView,n.ViewTable,n.HeaderView)
this.editContext.hideDiscussion=true
this.setCurrentContext(this.editContext,e)
this._TutorialEditor=n
return this.editContext}.bind(this))
n.renderStatusView(true,i,r)}.bind(this))},getEditorIfLoaded:function(){return this._TutorialEditor},loadEditModels:function(t,e){if(!t){return $.Deferred().resolve(null,null).promise()}return e.ContentStore.fetchTopic(t)},createContext:function(t,e,i,n,o,r){var s={topicModel:t,contentModels:{},viewTable:o,headerViewClass:r,exercisePrecacheData:{}}
_.each(e,function(e){e.set("topicID",t.get("slug"))
this.addModelToContext(s,e)},this)
if(t){t.on("post-conflict-sync",function(){TutorialNav.onTopicModelRefresh(t)})
if(s.topicModel.get("inKnowledgeMap")){s.contentModels["e"]=new TutorialModelClasses.Exercise({kind:"Exercise",contentKind:"Exercise",title:s.topicModel.get("standaloneTitle"),translatedTitle:s.topicModel.get("translatedStandaloneTitle"),nodeSlug:"e",isChallenge:true})}}s.navListView=new n({el:$(i),topicModel:s.topicModel,contentModels:s.contentModels})
return s},addModelToContext:function(t,e){t.contentModels[e.get("nodeSlug")]=e
e.on("change:nodeSlug",function(){TutorialNav.onNodeSlugChange(t)})
e.on("post-conflict-sync",function(){TutorialNav.onContentModelRefresh(e)})},onNodeSlugChange:function(t){var e=t.contentModels[TutorialNav.currentId]
t.contentModels=_.object(_.map(_.values(t.contentModels),function(t){return[t.get("nodeSlug"),t]}))
if(this.currentContext===t&&this.currentId!==e.get("nodeSlug")){var i=this.getNodeUrl(e)
this.currentId=e.get("nodeSlug")
TutorialNav.router.navigate(i,{trigger:false})}},onTopicModelRefresh:function(t){$(this.editContext).trigger("refresh-topic",t)
if(t===this.currentContext.topicModel){this.currentContext.navListView.render()}},onContentModelRefresh:function(t){if(t===this.currentContext.contentModels[this.currentId]){this.setTutorialDescription(t)
this.currentContentView.render().postRender()}},getCurrentModel:function(){return this.currentContext.contentModels[this.currentId]},getNextModel:function(){var t=this.getCurrentModel().id
var e
var i=this.currentContext.topicModel.attributes.childData
_.each(i,function(i,n){if(""+i.id===""+t){e=n}})
var n
if(e<i.length-1){n=""+i[e+1].id}return _.find(this.currentContext.contentModels,function(t){return""+t.id===n})},setCurrentContext:function(t,e){this.currentContext.navListView.$el.hide()
this.currentContext=t
this.currentContext.navListView.$el.show()
if(e){if(this.getCurrentModel()){this.navigateToContent(this.currentId,this.currentContext.contentModels[this.currentId])}else{var i=_.values(this.currentContext.contentModels)[0]
if(i){this.navigateToNode(this.getNodeUrl(i))}}}},getNodeUrl:function(t){return this.extendedSlug+"/"+t.get("nodeSlug")},setNodeProgress:function(t){var e=this
_.each(t,function(t){var i=e.liveContext.contentModels[t.id]
if(i){i.set("progress",t.progress)}})},bindNavigationLinks:function(){$("body").on("click","a.tutorial-router-link",_.bind(function(t){if(t.metaKey){return}this.navigateToNextNode($(t.currentTarget).attr("href"),t)},this))},navigateToNextNode:function(t,e){var i=this.extendedSlug.length+2
var n=t.substring(i)
if(this.currentContext.contentModels[n]){this.navigateToNode(t.substring(1),e)
$("html, body").scrollTop(0)}},setTutorialDescription:function(t){if(this.currentHeaderView){this.currentHeaderView.undelegateEvents()}this.currentHeaderView=new TutorialNav.currentContext.headerViewClass({model:t,el:$(".tutorial-content .tutorial-description").get(0)}).render()
this.setTutorialWindowTitle(t.get("translatedTitle"))},showTutorialDescription:function(){$(".tutorial-content .tutorial-description").show()},hideTutorialDescription:function(){$(".tutorial-content .tutorial-description").hide()},setTutorialWindowTitle:function(t){if(!t||!this.currentContext.topicModel.get("translatedTitle")){return}var e=t+" | "+this.currentContext.topicModel.get("translatedTitle")
updateDocumentTitle({pageName:e})},toggleTutorialNav:function(){var t=$("#tutorial-page")
var e=$(".tutorial-nav.docked-nav.live-version")
if(t.hasClass("full-screen")){e.show()
t.removeClass("full-screen")}else{t.addClass("full-screen")
_.delay(function(){if(t.hasClass("full-screen")){e.hide()}},200)}},navigateToContent:function(t,e){var i=!!e||t!==this.currentId
if(t===this.preRenderedId){i=false
this.preRenderedId=null}e=e||this.currentContext.contentModels[t]
if(!e){KAConsole.log("Node not found: "+t+"!")
return}if(e.get("contentKind")==="Video"){i=true}KAConsole.log("Loading content",t)
this.currentId=t
this.currentContext.navListView.setSelectedNode(t)
this.setTutorialDescription(e)
if(this.currentContentView){this.currentContentView.remove()
this.currentContentView=null}var n=this.currentContext.viewTable[e.get("contentKind")]
if(n){var o=null
if(!i){o=$(".tutorial-node-content "+n.selector)}var r={model:e,el:o,parentTopic:this.currentContext.topicModel,domainSlug:this.currentContext.topicModel.get("domainSlug"),discussionParams:this.currentContext.hideDiscussion?null:this.discussionParams,toggleTutorialNav:this.toggleTutorialNav}
this.currentContentView=new n.viewClass(r)}else{this.currentContentView=null}if(this.currentContentView&&(i||e.get("contentKind")==="Article")){this.currentContentView.render().$el.appendTo($(".tutorial-node-content"))}if(this.currentContentView){this.currentContentView.postRender()}},loadContent:function(t,e){e=e||$.noop
var i=this.currentContext.contentModels[t]
if(!i){throw new Error("loadContent called with invalid ID: "+t)}if(this.currentContext.exercisePrecacheData[t]){e(this.currentContext.exercisePrecacheData[t])
return}if(i.get("contentKind")==="Exercise"){var n="/api/internal/user/topic/"+this.currentContext.topicModel.get("slug")+"/"+i.get("name")+"/cards/begin?casing=camel"
if(this.currentContext===this.editContext){n+="&preview="+this.currentContext.topicModel.id}$.getJSON(n).then(_.bind(function(e){this.currentContext.exercisePrecacheData[t]=e
return e},this)).then(e)}else{e(null)}},hideContent:function(){$(".content.layer").css("opacity","0")
$(".progress.layer").css("opacity","1")},showContent:function(){$(".content.layer").css("opacity","1")
$(".progress.layer").css("opacity","0")},navigateToNode:function(t,e){if(TutorialNav.currentContext!==TutorialNav.liveContext){t+="/edit"}TutorialNav.router.navigate(t,{trigger:true})
if(e){e.preventDefault()}}}
window.TutorialNav=TutorialNav
module.exports=TutorialNav
});
KAdefine("javascript/tutorial-package/tutorial-views.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jquery-hoverflow/jquery.hoverflow.js")
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js")
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.position.js")
var $=require("jquery")
var Backbone=require("backbone")
var _=require("underscore")
var KA=require("../shared-package/ka.js")
var TutorialArticleContentView=require("./tutorial-article-content-view.js")
var TutorialExerciseContentView=require("./tutorial-exercise-content-view.js")
var TutorialNav=require("./tutorial-nav.js")
var TutorialNavItemView=require("./tutorial-nav-item-view.js")
var TutorialScratchpadContentView=require("./tutorial-scratchpad-content-view.js")
var TutorialVideoContentView=require("./tutorial-video-content-view.js")
var TutorialViews={}
TutorialViews.NavListView=Backbone.View.extend({maxContentHeight:0,events:{"click .optional-button":"toggleOptional"},initialize:function(e){_.bindAll(this)
$(KA).on("contentLoaded",function(){$("[data-khan-nav]").trigger("resize")})
this.createSubViews()
this.$el.find("li").hoverIntent({over:this.nodeHovered,out:$.noop,timeout:350})},createSubViews:function(){var e=this
this.subViews=[]
this.$el.find("li").each(function(){var t=e.options.contentModels[$(this).attr("id")]
if(!t){return}e.subViews.push(new TutorialNavItemView({model:t,el:this}))})},getNextNode:function(e){return TutorialNav.getNextModel()},getNextTitleAndURL:function(){var e=this.getNextNode()
var t=$(".live-version .tutorial-nav-next")
if(e){return{title:e.get("translatedTitle"),url:"/"+TutorialNav.getNodeUrl(e)}}else if(t){return{title:t.find(".tutorial-nav-next-title-label").text(),url:t.find("a").attr("href")}}return null},toggleOptional:function(){var e=this.$("ol.optional")
var t=this.$(".optional-button")
if(e.is(":visible")){e.slideUp("fast")
t.removeClass("toggled")}else{e.slideDown("fast")
t.addClass("toggled")}},hasNotScrolledToNode:true,setSelectedNode:function(e){var t=_.find(this.subViews,function(t){return t.model.get("nodeSlug")===e})
if(t){_.each(this.subViews,function(e){e.$el.children(".tab-link").removeClass("active")})
t.$el.children(".tab-link").addClass("active")
$("[data-khan-nav]").trigger("resize")
var i=function(){var e=Math.max(t.$el.position().top-10,0)
$("[data-khan-scroll]").animate({scrollTop:e},185,"easeInOutCubic")}
if(this.hasNotScrolledToNode){i()
this.hasNotScrolledToNode=false}var r=this.getNextNode()
if(r){_.delay(TutorialNav.loadContent,2e3,r.get("nodeSlug"))}if(!t.model.get("core")&&!this.$("ol.optional").is(":visible")){this.toggleOptional()}}},_bindExerciseEditorLinks:_.once(function(){$(".tutorial-content").on("click",".to-exercise-editor",function(){TutorialNav.router.navP1Base()})}),nodeHovered:function(e){if(e.currentTarget.id){TutorialNav.loadContent(e.currentTarget.id)}}})
TutorialViews.HeaderView=Backbone.View.extend({initialize:function(e){this.template=require("./tutorial-description.handlebars")},render:function(){var e=this.model.toJSON()
this.$el.html(this.template(e))
return this}})
TutorialViews.ViewTable={Video:{viewClass:TutorialVideoContentView,selector:".video"},Exercise:{viewClass:TutorialExerciseContentView,selector:".exercises-content-container"},Article:{viewClass:TutorialArticleContentView,selector:".article-node-container"},Scratchpad:{viewClass:TutorialScratchpadContentView,selector:".scratchpad-node-container"}}
module.exports=TutorialViews
});
KAdefine("javascript/tutorial-package/tutorial-article.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,n,a,i,r){a=a||e.helpers
i=i||e.partials
var s="",l,t,h,o,c=this,f="function",p=a.blockHelperMissing,d=a.helperMissing,v=void 0,u=this.escapeExpression
function m(e,n){var i="",r,s
i+='\n    <div class="sidebar">\n        '
h=a.whereWhenImage
r=h||e.whereWhenImage
s=a["if"]
o=c.program(2,g,n)
o.hash={}
o.fn=o
o.inverse=c.noop
r=s.call(e,r,o)
if(r||r===0){i+=r}i+="\n        "
h=a.relatedLinks
r=h||e.relatedLinks
s=a["if"]
o=c.program(5,k,n)
o.hash={}
o.fn=o
o.inverse=c.noop
r=s.call(e,r,o)
if(r||r===0){i+=r}i+="\n    </div>\n    "
return i}function g(e,n){var i="",r
i+="\n        <h2>"
h=a["_"]
r=h||e["_"]
o=c.program(3,w,n)
o.hash={}
o.fn=o
o.inverse=c.noop
if(h&&typeof r===f){r=r.call(e,o)}else{r=p.call(e,r,o)}if(r||r===0){i+=r}i+='</h2>\n        <div class="sidebar-item where-and-when">\n            <img src="'
h=a.whereWhenImage
r=h||e.whereWhenImage
if(typeof r===f){r=r.call(e,{hash:{}})}else if(r===v){r=d.call(e,"whereWhenImage",{hash:{}})}i+=u(r)+'" width="100%">\n            <p>'
h=a.whereWhenCaption
r=h||e.whereWhenCaption
if(typeof r===f){r=r.call(e,{hash:{}})}else if(r===v){r=d.call(e,"whereWhenCaption",{hash:{}})}i+=u(r)+"</p>\n        </div>\n        "
return i}function w(e,n){return"Where and When"}function k(e,n){var i="",r,s
i+="\n        <h2>"
h=a["_"]
r=h||e["_"]
o=c.program(6,W,n)
o.hash={}
o.fn=o
o.inverse=c.noop
if(h&&typeof r===f){r=r.call(e,o)}else{r=p.call(e,r,o)}if(r||r===0){i+=r}i+='</h2>\n        <div class="sidebar-item related-links">\n            '
h=a.relatedLinks
r=h||e.relatedLinks
s=a.each
o=c.program(8,b,n)
o.hash={}
o.fn=o
o.inverse=c.noop
r=s.call(e,r,o)
if(r||r===0){i+=r}i+="\n        </div>\n        "
return i}function W(e,n){return"Related links"}function b(e,n){var i="",r
i+='\n            <a href="'
h=a.url
r=h||e.url
if(typeof r===f){r=r.call(e,{hash:{}})}else if(r===v){r=d.call(e,"url",{hash:{}})}i+=u(r)+'" target="_blank">'
h=a.caption
r=h||e.caption
if(typeof r===f){r=r.call(e,{hash:{}})}else if(r===v){r=d.call(e,"caption",{hash:{}})}i+=u(r)+"</a>\n            "
return i}function y(e,n){return'\n        <div class="perseus-article framework-perseus">\n        </div>\n    '}function _(e,n){var i="",r
i+='\n        <div class="article-content">\n            '
h=a.translatedHtmlContent
r=h||e.translatedHtmlContent
if(typeof r===f){r=r.call(e,{hash:{}})}else if(r===v){r=d.call(e,"translatedHtmlContent",{hash:{}})}if(r||r===0){i+=r}i+="\n        </div>\n    "
return i}function C(e,n){var r="",s
r+="\n                "
s=e
s=c.invokePartial(i.discussion_discussion,"discussion_discussion",s,a,i)
if(s||s===0){r+=s}r+="\n            "
return r}s+='\n<div class="article-node-container">\n    '
h=a.showSidebar
l=h||n.showSidebar
t=a["if"]
o=c.program(1,m,r)
o.hash={}
o.fn=o
o.inverse=c.noop
l=t.call(n,l,o)
if(l||l===0){s+=l}s+="\n    "
h=a.isParticle
l=h||n.isParticle
t=a["if"]
o=c.program(10,y,r)
o.hash={}
o.fn=o
o.inverse=c.program(12,_,r)
l=t.call(n,l,o)
if(l||l===0){s+=l}s+='\n    <div>\n        <span class="article-footer">\n            '
h=a.serverSide
l=h||n.serverSide
t=a["if"]
o=c.program(14,C,r)
o.hash={}
o.fn=o
o.inverse=c.noop
l=t.call(n,l,o)
if(l||l===0){s+=l}s+="\n        </span>\n    </div>\n</div>\n"
return s})
module.exports=t
});
KAdefine("javascript/tutorial-package/tutorial-feedback.js", function(require, module, exports) {
var $=require("jquery")
require("../shared-package/i18n.js")
var KA=require("../shared-package/ka.js")
var KAConsole=require("../shared-package/console.js")
var parseQueryString=require("../shared-package/parse-query-string.js")
var TutorialFeedback={renderFeedbackQuestion:function(e,a){var i=KA.getUserProfile()
if(!i||i.isPhantom()){return}var r
if(e==="video"){r="/api/internal/videos/"+a+"/feedback"}else if(e==="article"){r="/api/internal/articles/"+a+"/feedback"}else{return}var n=parseQueryString()["question_id"]
if(n){r+="?question_id="+n}var t=$.ajax(r)
t.done(function(i){var r=$(".video-feedback-container.upper")
if(i&&i.questionHtml&&r.length){KAConsole.log("Loading feedback question.")
r.html(i.questionHtml)
var n=r.find(".submit")
var t=r.find(".close")
n.toggleClass("disabled",true)
r.find(".answer-box").change(function(){n.toggleClass("disabled",false)})
n.click(function(){TutorialFeedback._submitFeedbackQuestion(e,a)})
t.click(TutorialFeedback._hideFeedback)
r.slideDown("slow")}})},_getFeedbackData:function(){var e=$(".video-feedback")
var a=e.find(".video-feedback-question").data("questionId")
var i=e.find(".video-feedback-answer")
var r=""
$.each(i,function(e,a){var i=$(a)
if(i.is(":checked")){r=i.data("answerId")}})
return{question_id:a,answer_id:r}},_thank:function(){var e=$(".video-feedback")
e.html("<span class='close'>&#215;</span>"+$._("Thanks for your feedback!")+"<br/>"+$._("We appreciate you taking the time to leave us feedback, and we're doing our best to improve the content on Khan Academy."))
$(".video-feedback-container .submit").hide()
var a=e.find(".close")
a.click(TutorialFeedback._hideFeedback)},_hideFeedback:function(){$(".video-feedback-container").slideUp("fast")},_submitFeedbackQuestion:function(e,a){var i=TutorialFeedback._getFeedbackData()
if(i.answer_id){var r={article:"articles",video:"videos"}
$.ajax({type:"POST",url:"/api/internal/"+r[e]+"/"+a+"/feedback",contentType:"application/json",data:JSON.stringify(i)})
TutorialFeedback._thank()}}}
module.exports=TutorialFeedback
});
KAdefine("javascript/tutorial-package/tutorial-article-content-view.js", function(require, module, exports) {
var $=require("jquery")
var React=require("react")
var _=require("underscore")
var KA=require("../shared-package/ka.js")
var KAConsole=require("../shared-package/console.js")
var PackageManager=require("../shared-package/package-manager.js")
var TutorialContentView=require("./tutorial-content-view.js")
var TutorialFeedback=require("./tutorial-feedback.js")
var TutorialNav=require("./tutorial-nav.js")
var TutorialArticleContentView=TutorialContentView.extend({initialize:function(e){TutorialContentView.prototype.initialize.call(this,e)
this.discussionParams=e.discussionParams
this.template=require("./tutorial-article.handlebars")},remove:function(){$(".task-container").show()
this.$el.find(".article-node-container").remove()},render:function(){$(".task-container").hide()
TutorialNav.showTutorialDescription()
var e=this.model.toJSON()
e.showSidebar=e.whereWhenImage||e.relatedLinks
this.$el.html(this.template(e))
this.maybeRenderParticle(e.perseusContent,this.$el.find(".perseus-article"))
this.maybeRenderDiscussion(this.$el.find(".article-footer"),{which:"article-questions",focusKind:"article"})
PackageManager.require("tasks.js","tasks.css").then(function(){var t=React.createFactory(require("../tasks-package/content-header.jsx"))
var r=t({title:e["translatedTitle"],description:e["translatedDescription"],descriptionHtml:e["translatedDescriptionHtml"],toggleTutorialNav:this.options.toggleTutorialNav})
var a=$('<div class="task-container">'+'<div class="task-header-container '+this.options.domainSlug+' article-header">'+'<div class="task-header-mid-container">'+"</div>"+"</div>"+"</div>")
$(".tutorial-description").html(a)
React.render(r,a.find(".task-header-mid-container")[0])}.bind(this))
return this},postRender:function(){TutorialContentView.prototype.postRender.call(this)
_.delay(function(){$.ajax({url:"/api/internal/user/article/"+this.model.id+"/log",data:{topic_slug:TutorialNav.currentContext.topicModel.get("slug")},type:"POST"})}.bind(this),1e3)
this.maybeRenderMath()
TutorialFeedback.renderFeedbackQuestion("article",this.model.id)},maybeRenderParticle:function(e,t){if(!e){return}if(!t.length){console.error("Could not find element to render particle to")}PackageManager.require("perseus.js","exercises.js","exercise-content.css").then(function(){var r=require("../perseus-package/perseus.js")
var a
try{a=JSON.parse(e)}catch(i){console.error(i)
return}React.render(React.createElement(r.ArticleRenderer,{json:a}),t[0])})},maybeRenderMath:function(){if(!this.$("code.latex").length){KAConsole.log("Not rendering math, no code found")
return}var e=function(){var e=$.Deferred()
var t=document.createElement("script")
t.type="text/javascript"
t.src=KA.mathjaxUrl
document.getElementsByTagName("head")[0].appendChild(t)
t.onload=function(){MathJax.Hub.Queue(e.resolve)}
return e}
var t=$.Deferred()
require.async(["../articles-latex-package/latex.js"],function(){t.resolve()})
$.when(t.promise(),e()).done(_.bind(function(){this.$("code.latex").latex()},this))}})
module.exports=TutorialArticleContentView
});
KAdefine("javascript/tutorial-package/tutorial-content-view.js", function(require, module, exports) {
var $=require("jquery")
var Backbone=require("backbone")
var _=require("underscore")
var PackageManager=require("../shared-package/package-manager.js")
var TutorialNav=require("./tutorial-nav.js")
var TutorialContentView=Backbone.View.extend({initialize:function(i){this.options=i||{}
Backbone.View.prototype.initialize.call(this,i)},maybeRenderDiscussion:function(i,e){if(!this.discussionParams){return}this.discussionParams=_.extend(TutorialNav.discussionParams,{focusId:this.model.id,isVideo:e.focusKind==="video",isArticle:e.focusKind==="article",clarificationsEnabled:this.model.get("clarificationsEnabled")},e)
PackageManager.require("discussion.js","moderation.js").then(function(){var e=$(require("../discussion-package/discussion.handlebars")(this.discussionParams))
i.append(e[0])}.bind(this))},postRender:function(){if(this.discussionParams){PackageManager.require("discussion.js","moderation.js").then(_.bind(function(){var i=require("../discussion-package/discussion.js")
i.init(this.discussionParams)},this))}},_createTaskContainer:_.once(function(){var i=require("../tasks-package/focused-task-chrome.handlebars")({domain:TutorialNav.currentContext.topicModel.get("domainSlug")})
$(i).appendTo(".tutorial-node-content")})})
module.exports=TutorialContentView
});
KAdefine("javascript/tutorial-package/tutorial-exercise-content-view.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var BigBingo=require("../shared-package/pageutil.js").BigBingo
var KA=require("../shared-package/ka.js")
var PackageManager=require("../shared-package/package-manager.js")
var TutorialContentView=require("./tutorial-content-view.js")
var TutorialNav=require("./tutorial-nav.js")
var TutorialExerciseContentView=TutorialContentView.extend({className:"exercises-content-container visited-no-recolor",initialize:function(e){TutorialContentView.prototype.initialize.call(this,e)},remove:function(){TutorialContentView.prototype.remove.apply(this)
if(window.TaskLauncher&&TaskLauncher.taskStarted){TaskLauncher.dismissTask(false)}TutorialNav.showTutorialDescription()},render:function(){return this},postRender:function(){TutorialNav.hideContent()
TutorialNav.loadContent(this.model.get("nodeSlug"),function(e){if(TutorialNav.router._navigatingToP1){TutorialNav.showContent()}else if(this._isPreview(e)){PackageManager.require("perseus.js","perseus-admin.js","exercises.js").then(function(){var t=require("../perseus-admin-package/perseus-admin.js")
var i=require("../exercises-package/exercises.js")
TutorialNav.showContent()
i.init(e,true)
i.render()
if(TutorialNav.initOptions.previewingItems){t.previewItemsInit(e.filter)}})}else{TutorialNav.showContent()
this.startTask(e)}}.bind(this))},_isPreview:function(e){return e&&!e.practiceMode},_initEditorForTask:function(){if($(".task-title .toggle-node-editor").length===0){var e=require("../exercises-package/exercises.js")
var t=e.currentCard.getUserExercise().exerciseModel.trackingDocumentUrl
if(t!=null&&t!==""&&TutorialNav.getEditorIfLoaded()){$("<a class='no-underline' target='_blank'>"+" <i class='tracking-document-url"+" content-editor icon-info-sign'"+" ></i></a>").attr("href",t).appendTo(".task-title")}$(".task-title").append(" <i class='toggle-node-editor content-editor icon-cog'"+" style='display: none;''></i>")
var i=KA.getUserProfile()
var r=!!i&&(i.get("isDeveloper")||i.get("isPublisher")||i.get("isCurator")||i.get("isCreator"))
var a=TutorialNav.getCurrentModel()
var n=a.get("contentKind")==="Exercise"&&!a.get("fileName")
if(r&&n){$("<i class='to-exercise-editor icon-cog'></i>").attr("title","Edit this exercise").css("cursor","pointer").appendTo(".task-title")
this._bindExerciseEditorLinks()}}},_bindExerciseEditorLinks:_.once(function(){$(".tutorial-content").on("click",".to-exercise-editor",function(){TutorialNav.router.navP1Base()})}),startTask:function(e){$(".exercises-content-container").empty()
TutorialNav.hideTutorialDescription()
BigBingo.markConversion("visit_tutorial_exercise")
PackageManager.require("tasks.js").then(function(){var t=require("../tasks-package/learning-task.js")
var i=require("../tasks-package/task-launcher.js")
this._createTaskContainer()
var r=t.fromServerJson(e["taskJson"])
e["topic"]=TutorialNav.currentContext.topicModel.toJSON()
r.setRenderData(e)
this.once("task-launched",this._initEditorForTask,this)
var a=TutorialNav.currentContext.topicModel.get("domainSlug")
i.startTask(r,$(".task-container"),this,null,a)}.bind(this))}})
module.exports=TutorialExerciseContentView
});
KAdefine("javascript/tutorial-package/tutorial-scratchpad-content-view.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var PackageManager=require("../shared-package/package-manager.js")
var TutorialContentView=require("./tutorial-content-view.js")
var TutorialNav=require("./tutorial-nav.js")
var TutorialScratchpadContentView=TutorialContentView.extend({className:"scratchpad-node-container",initialize:function(a){TutorialContentView.prototype.initialize.call(this,a)
this.discussionParams=a.discussionParams
this.domainSlug=a.domainSlug
this.scratchpadView=null},remove:function(){var a=require("../scratchpads-package/scratchpad-ui.js").ScratchpadUI
$(".task-container").show()
a.$el.remove()
if(this.scratchpadView){this.scratchpadView.remove()}a.triggerRemove()
TutorialContentView.prototype.remove.apply(this)},render:function(){$(".task-container").hide()
var a=$(".scratchpad-page")
var e=this.model.get("category")==="challenge"||this.model.get("category")==="project"
if(!a.length){a=$("<div class='scratchpad-page'></div>").appendTo(".tutorial-node-content")}TutorialNav.hideTutorialDescription()
a.show()
$("#page-overlay").show()
PackageManager.require("scratchpad-challenge.css","clarifications.css","scratchpads.css","intro.css","intro.js","scratchpad-base.js","scratchpads.js").then(_.bind(function(){var t=require("../scratchpads-package/scratchpad-ui.js").ScratchpadUI
var r=require("../scratchpads-package/scratchpad-ui.js").ScratchpadUIStart
var i=require("../scratchpads-package/scratchpad-ui.js").featureDetect
if(!i()){var s=require("../scratchpads-package/browser-notice.handlebars")
a.html(s())
$("#browser-notice-container").show()
return}$("html").addClass("scratchpad-has-features")
r("editor=yes&buttons=yes&author=yes")
var c
if(!this.model.get("isProject")){c=this.model.toJSON()}t.init({id:this.model.get("id"),el:a,scratchpad:c,embedded:true,domainSlug:this.domainSlug,discussion:{which:"scratchpad-questions",focusId:this.model.get("id"),focusKind:"scratchpad",description:this.model.get("description"),hideComments:e,hideQuestions:e,showDocumentation:true,showObjectives:e,showSpinoffs:!e,reset:true},toggleTutorialNav:this.options.toggleTutorialNav})},this))
return this},postRender:function(){_.delay(function(){$.ajax({url:"/api/internal/user/program/"+this.model.id+"/log",data:{topic_slug:TutorialNav.currentContext.topicModel.get("slug")},type:"POST"})}.bind(this),1e3)}})
module.exports=TutorialScratchpadContentView
});
KAdefine("javascript/tutorial-package/tutorial-video-content-view.js", function(require, module, exports) {
var $=require("jquery")
var PackageManager=require("../shared-package/package-manager.js")
var TutorialContentView=require("./tutorial-content-view.js")
var TutorialNav=require("./tutorial-nav.js")
var TutorialVideoContentView=TutorialContentView.extend({initialize:function(e){TutorialContentView.prototype.initialize.call(this,e)
this.renderComplete=$.Deferred().resolve()
this.discussionParams=e.discussionParams
PackageManager.require("tasks.js").then(function(){var e=require("../tasks-package/video-task.js")
this.placeholderTask=e.createPlaceholderFromVideo(this.model)}.bind(this))},remove:function(){var e
try{e=require("../discussion-package/clarifications.js")}catch(t){}if(e){e.reset()}TutorialContentView.prototype.remove.apply(this)
if(window.TaskLauncher&&TaskLauncher.taskStarted){TaskLauncher.dismissTask(false)}TutorialNav.showTutorialDescription()},render:function(){this.renderComplete=$.Deferred()
this.$el.empty()
var e=$.Deferred()
TutorialNav.hideTutorialDescription()
PackageManager.require("tasks.js").then(function(){var t=require("../tasks-package/task-launcher.js")
this._createTaskContainer()
this.once("task-launched",e.resolve)
var i=TutorialNav.currentContext.topicModel.get("domainSlug")
t.startTask(this.placeholderTask,$(".task-container"),this,null,i)}.bind(this))
e.done(function(){this.maybeRenderDiscussion($(".video-footer"),{which:"video-questions",focusKind:"video",focusId:this.model.get("readableId")})
this.renderComplete.resolve()}.bind(this))
return this},postRender:function(){this.renderComplete.done(function(){TutorialContentView.prototype.postRender.call(this)}.bind(this))}})
module.exports=TutorialVideoContentView
});
KAdefine("javascript/tutorial-package/tutorial-router.js", function(require, module, exports) {
var $=require("jquery")
var Backbone=require("backbone")
var React=require("react")
var _=require("underscore")
var KA=require("../shared-package/ka.js")
var PackageManager=require("../shared-package/package-manager.js")
var TutorialNav=require("./tutorial-nav.js")
var openPerseusOne=function(e){var t=React.createFactory(require("../perseus-one-package/main.jsx"))
var i=require("../perseus-package/perseus.js")
var r={title:e.get("displayName"),name:e.get("name"),exid:e.get("id"),sha:e.get("sha"),trackingDocument:e.get("trackingDocumentUrl")}
var a="#outer-wrapper, #footer, .push, .g-m-p-corner, .urgent-wrapper"
$(a).css("display","none")
var n=$("<div>").appendTo(document.body).css({width:"100%",height:"100%"})[0]
React.render(t({exercise:r}),n)
var o=require("khan-exercises")
return o.mathJaxLoaded.then(function(){return i.init({skipMathJax:true,imageUploader:require("../exercises-package/upload-image.jsx")})}).then(function(){var e=require("../perseus-one-package/actions.jsx").navigateTo
return{closeHandle:function(){React.unmountComponentAtNode(n)
$(n).remove()
$(a).css("display","inherit")},getExerciseId:function(){return r.exid},navigateTo:e}})}
var TutorialRouter=Backbone.Router.extend({routes:{"*topicroute/edit/:itemId(/:tabName)":"perseusEdit","*topicroute/edit":"editContent","*topicroute(/)":"content"},perseusEdit:function(e,t,i){this._navigatingToP1=true
t=this._removeTrailingBits(t)
i=this._removeTrailingBits(i||"")
var r={itemId:t,tabName:i}
var a=TutorialNav.getCurrentModel()
if(this._p1GetExerciseId&&this._p1GetExerciseId()===a.get("id")){this._p1NavigateTo(r)}else{this._tryCloseP1()
e=this._removeTopicPagePath(e)
this._navigateToContent(e)
PackageManager.require("perseus.js","perseus-one.js","perseus-admin.css","typeahead-vanilla.css").then(function(){return openPerseusOne(TutorialNav.getCurrentModel())}).then(function(e){this._p1CloseHandle=e.closeHandle
this._p1GetExerciseId=e.getExerciseId
this._p1NavigateTo=e.navigateTo
this._p1NavigateTo(r)}.bind(this))}},editContent:function(e){delete this._navigatingToP1
var t=this._tryCloseP1()
e=this._removeTopicPagePath(e)
var i=TutorialNav.getEditorIfLoaded()
if(i){if(TutorialNav.currentContext===TutorialNav.liveContext||t){$("[data-khan-nav]").trigger("resize")
i.statusController.initializeEdit()
TutorialNav.setCurrentContext(TutorialNav.editContext,true)
i.statusController.set("mode","Edit")}if(TutorialNav.currentId!==e){this._navigateToContent(e)}}else{TutorialNav.initOptions.useEditContext=true
TutorialNav.initOptions.refreshContent=true
this._navigateToContent(e)}},content:function(e){delete this._navigatingToP1
this._tryCloseP1()
var t=TutorialNav.getEditorIfLoaded()
if(t&&TutorialNav.currentContext!==TutorialNav.liveContext){$("[data-khan-nav]").trigger("resize")
TutorialNav.setCurrentContext(TutorialNav.liveContext,true)
t.statusController.set("mode","Live")}e=this._removeTrailingBits(e)
e=this._removeTopicPagePath(e)
this._navigateToContent(e)},navEditContent:function(){this.navigate(this._getExerciseUrl()+"/edit",{trigger:true})},navContent:function(){this.navigate(this._getExerciseUrl(),{trigger:true})},navP1Item:function(e){var t=""
if(e.tabName!==""&&e.tabName!=="edit"){t="/"+e.tabName}var i=e.itemId||"items"
this.navigate(this._getExerciseUrl()+"/edit/"+i+t,{trigger:false})},navP1Base:function(e){var t=e?"/"+e:""
this.navigate(this._getExerciseUrl()+"/edit/items"+t,{trigger:true})},navP1Exit:function(){var e=this._getExerciseUrl()
var t=KA.getUserProfile()
if(t&&(t.get("isDeveloper")||t.get("isCurator")||t.get("isPublisher"))){e+="/edit"}this.navigate(e,{trigger:true})},_navigateToContent:function(e){var t=TutorialNav.currentContext.contentModels[e]
TutorialNav.navigateToContent(e,t)},_getExerciseUrl:function(){return TutorialNav.getNodeUrl(TutorialNav.getCurrentModel())},_tryCloseP1:function(){var e=!!this._p1CloseHandle
if(this._p1CloseHandle){this._p1CloseHandle()
delete this._p1CloseHandle
delete this._p1GetExerciseId
delete this._p1NavigateTo}return e},_removeTopicPagePath:function(e){var t=e.split("/")
_.each(TutorialNav.extendedSlug.split("/"),function(e){if(t[0]===e){t.shift()}})
return t.join("/")},_removeTrailingBits:function(e){var t=e.indexOf("#")
if(t>-1){e=e.substr(0,t)}var i=e.indexOf("?")
if(i>-1){e=e.substr(0,i)}return e}})
module.exports=TutorialRouter
});
KAdefine("javascript/tutorial-package/tutorial-nav-item-view.js", function(require, module, exports) {
var $=require("jquery")
var Backbone=require("backbone")
var TutorialNavItemView=Backbone.View.extend({initialize:function(){this.model.on("change:progress",this.updateProgress,this)},updateProgress:function(e,s){var r="progress-"+s
if(this.$el.find(".subway-icon")){this.$el.find(".subway-icon").removeClass("progress-complete progress-started").addClass(r)
return}this.$el.find(".progress-icon").fadeTo(200,.01,function(){$(this).removeClass("progress-complete").removeClass("progress-started").addClass(r)}).fadeTo(200,1)}})
module.exports=TutorialNavItemView
});
KAdefine("javascript/tutorial-package/bottom-tutorial-nav.jsx", function(require, module, exports) {
var React=require("react")
var _=require("underscore")
var TutorialNav=require("../tutorial-package/tutorial-nav.js")
var Thumbnail=React.createClass({displayName:"Thumbnail",render:function(){return React.createElement("div",{className:"thumbnail"},React.createElement("img",{className:"thumbnail-img",src:this.props.url}))}})
var ContentFrame=React.createClass({displayName:"ContentFrame",propTypes:{translatedTitle:React.PropTypes.string.isRequired,translatedDescription:React.PropTypes.string,url:React.PropTypes.string.isRequired,handleClick:React.PropTypes.func.isRequired},render:function(){return React.createElement("div",{className:"content-frame"},React.createElement("a",{href:this.props.url,onClick:this.props.handleClick,className:"content-frame-link no-underline visited-no-recolor"},React.createElement("div",{className:"title"},this.props.translatedTitle),React.createElement(Thumbnail,{url:this.props.thumbnailUrl})))}})
var ContentReel=React.createClass({displayName:"ContentReel",initialFramePosition:70,frameWidth:200,bounceDistance:20,propTypes:{contents:React.PropTypes.array},getInitialState:function(){return{framePosition:this.initialFramePosition}},handleContentClick:function(e,t){if(t.metaKey){return}t.preventDefault()
TutorialNav.navigateToNextNode(e)},handleBackClick:function(){if(this.state.framePosition===this.initialFramePosition){this.bounceFramePosition(this.bounceDistance)
return}this.incrementFramePosition(this.frameWidth)},handleNextClick:function(){var e=(this.props.contents.length-1)*this.frameWidth
var t=this.initialFramePosition-e
if(this.state.framePosition===t){this.bounceFramePosition(-1*this.bounceDistance)
return}this.incrementFramePosition(-1*this.frameWidth)},bounceFramePosition:function(e){var t=this.state.framePosition
this.incrementFramePosition(e)
_.delay(function(){if(this.isMounted()){this.setState({framePosition:t})}}.bind(this),150)},incrementFramePosition:function(e){var t=this.state.framePosition+e
this.setState({framePosition:t})},render:function(){var e=this.props.contents.map(function(e){var t=this.props.relativeUrl+"/"+e.nodeSlug
var a=_.partial(this.handleContentClick,t)
var i=e.imageUrl
if(e.imageUrl_256){i=e.imageUrl_256}return React.createElement(ContentFrame,{translatedTitle:e.translatedTitle,translatedDescription:e.translatedDescription,url:t,handleClick:a,thumbnailUrl:i})}.bind(this))
var t={left:this.state.framePosition}
return React.createElement("div",{className:"content-reel"},React.createElement("div",{className:"content-reel-frames",style:t},e),React.createElement("div",{className:"back-button reel-button",onClick:this.handleBackClick},React.createElement("i",{className:"button-icon icon-chevron-left"})),React.createElement("div",{className:"next-button reel-button",onClick:this.handleNextClick},React.createElement("i",{className:"button-icon icon-chevron-right"})))}})
var BottomTutorialNav=React.createClass({displayName:"BottomTutorialNav",propTypes:{translatedTitle:React.PropTypes.string.isRequired,translatedDescription:React.PropTypes.string,relativeUrl:React.PropTypes.string.isRequired,contents:React.PropTypes.array},getInitialState:function(){return{hidden:true}},componentDidMount:function(){_.delay(function(){if(this.isMounted()){this.setState({hidden:false})}}.bind(this),3e3)},render:function(){var e=React.addons.classSet({"bottom-tutorial-nav":true,"nav-hidden":this.state.hidden})
var t=this.props.contents.filter(function(e){return e.kind!=="Separator"})
return React.createElement("div",{className:e},React.createElement("div",{className:"tutorial-info"},React.createElement("div",{className:"tutorial-title"},this.props.translatedTitle),React.createElement("div",null,this.props.translatedDescription)),React.createElement(ContentReel,{relativeUrl:this.props.relativeUrl,contents:t}))}})
module.exports=BottomTutorialNav
});
; KAdefine.updatePathToPackageMap({"javascript/editor-package/editor-models.js": "editor.js", "javascript/tutorial-editor-package/tutorial-editor.js": "tutorial-editor.js", "javascript/articles-latex-package/latex.js": "articles-latex.js"});
this.KAdefineTiming["tutorial-package.js"].endTime = +(new Date);
