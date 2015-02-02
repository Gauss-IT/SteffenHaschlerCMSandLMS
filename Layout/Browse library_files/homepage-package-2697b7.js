((this.KAdefineTiming = this.KAdefineTiming || {})["homepage-package.js"] = {}).startTime = +(new Date);
KAdefine("javascript/homepage-package/subscription.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,e,a,r,t){a=a||n.helpers
var l="",o,s,i,c=this,p="function",f=a.blockHelperMissing
function u(n,e){return"Have a free subscription (or two)!"}function d(n,e){return"Enter your email to learn about new courses."}function b(n,e){return"Sal's Challenge"}function h(n,e){return"Macro Econ"}function m(n,e){return"New Content"}function v(n,e){return"Receive one of Sal's hand-picked favorite videos in your email each week."}function y(n,e){return"One video per week covering content in a typical Macro Econ intro course."}function _(n,e){return"Every two weeks you'll get an email summary of all new content created by our faculty."}function g(n,e){return"Unsubscribe at any time, and we will <em>never</em> share your email."}l+='<ul class="dropdown-menu">\n    <table class="dropdown-table">\n        <tr>\n            <div class="dropdown-title"><h2>'
s=a["_"]
o=s||e["_"]
i=c.program(1,u,t)
i.hash={}
i.fn=i
i.inverse=c.noop
if(s&&typeof o===p){o=o.call(e,i)}else{o=f.call(e,o,i)}if(o||o===0){l+=o}l+='</h2></div>\n            <span class="dropdown-throbber"></span>\n        </tr>\n        <tr>\n            <input type="email" name="email" class="email" placeholder="'
s=a["_"]
o=s||e["_"]
i=c.program(3,d,t)
i.hash={}
i.fn=i
i.inverse=c.noop
if(s&&typeof o===p){o=o.call(e,i)}else{o=f.call(e,o,i)}if(o||o===0){l+=o}l+='" value="">\n        </tr>\n        <tr>\n            <td>\n                <a href="#" class="simple-button green subscribe-button disabled" data-url="/api/internal/topic/new-and-noteworthy/subscribe">\n                    <span>'
s=a["_"]
o=s||e["_"]
i=c.program(5,b,t)
i.hash={}
i.fn=i
i.inverse=c.noop
if(s&&typeof o===p){o=o.call(e,i)}else{o=f.call(e,o,i)}if(o||o===0){l+=o}l+='</span>\n                </a>\n            </td>\n            <td>\n                <a href="#" class="simple-button green subscribe-button disabled" data-url="/api/internal/topic/core-finance/subscribe">\n                    <span>'
s=a["_"]
o=s||e["_"]
i=c.program(7,h,t)
i.hash={}
i.fn=i
i.inverse=c.noop
if(s&&typeof o===p){o=o.call(e,i)}else{o=f.call(e,o,i)}if(o||o===0){l+=o}l+='</span>\n                </a>\n            </td>\n            <td>\n                <a href="#" class="simple-button green subscribe-button disabled" data-url="/api/internal/digest/subscribe">\n                    <span>'
s=a["_"]
o=s||e["_"]
i=c.program(9,m,t)
i.hash={}
i.fn=i
i.inverse=c.noop
if(s&&typeof o===p){o=o.call(e,i)}else{o=f.call(e,o,i)}if(o||o===0){l+=o}l+='</span>\n                </a>\n            </td>\n        </tr>\n        <tr class="description">\n            <td>\n                '
s=a["_"]
o=s||e["_"]
i=c.program(11,v,t)
i.hash={}
i.fn=i
i.inverse=c.noop
if(s&&typeof o===p){o=o.call(e,i)}else{o=f.call(e,o,i)}if(o||o===0){l+=o}l+="\n            </td>\n            <td>\n                "
s=a["_"]
o=s||e["_"]
i=c.program(13,y,t)
i.hash={}
i.fn=i
i.inverse=c.noop
if(s&&typeof o===p){o=o.call(e,i)}else{o=f.call(e,o,i)}if(o||o===0){l+=o}l+="\n            </td>\n            <td>\n                "
s=a["_"]
o=s||e["_"]
i=c.program(15,_,t)
i.hash={}
i.fn=i
i.inverse=c.noop
if(s&&typeof o===p){o=o.call(e,i)}else{o=f.call(e,o,i)}if(o||o===0){l+=o}l+='\n            </td>\n        </tr>\n    </table>\n\n    <div class="unsubscribe-teaser">'
s=a["_"]
o=s||e["_"]
i=c.program(17,g,t)
i.hash={}
i.fn=i
i.inverse=c.noop
if(s&&typeof o===p){o=o.call(e,i)}else{o=f.call(e,o,i)}if(o||o===0){l+=o}l+="</div>\n\n</ul>\n"
return l})
module.exports=t
});
KAdefine("javascript/homepage-package/homepage.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js")
require("../../third_party/javascript-khansrc/qTip2/jquery.qtip.js")
var $=require("jquery")
var Modernizr=require("../../third_party/javascript-khansrc/Modernizr/modernizr.js")
var _=require("underscore")
require("../shared-package/jquery.delayload.js")
var initNavbar=require("../shared-package/navbar.js")
var backgroundVideo=require("../shared-package/background-video.js")
var Homepage={init:function(){initNavbar()
Homepage.bindSignupModeChangeHook()
_.defer(Homepage.delayedInit)},delayedInit:function(){Homepage.initControls()
Homepage.initScrollingLinks()
Homepage.initDelayedMedia()},initControls:function(){if(window.resizeSignupCallout){$(window).resize(_.debounce(function(){window.resizeSignupCallout()},150))}if(!Modernizr.touchevents){$(".oauth-buttons").each(function(){$(this).qtip({id:"homepage-oauth",position:{my:"bottom center",at:"top center",adjust:{x:0,y:-3}},style:{classes:"signup-tooltip "+$(this).data("tip-style")}})})}},initDelayedMedia:function(){var e={element:"<video class='responsive-video' loop>"+"<source src='/videos/homepage-background.mp4' type='video/mp4; codecs=\"avc1.42E01E, mp4a.40.2\"' />"+"<source src='/videos/homepage-background.webm' type='video/webm; codecs=\"vp8, vorbis\"' />"+"<source src='/videos/homepage-background.ogv' type='video/ogv; codecs=\"theora, vorbis\"' />"+"</video>",width:768,height:432}
var o=function(o){$("#homepage [data-delayed-bgimage]").each(function(){$(this).delayLoad(o)})
var i=$(".homepage-section-with-background-video")
i.delayLoad(o,function(o){backgroundVideo.addBackgroundAndListeners(o,e)})}
$(window).on("scroll.load-media",_.throttle(function(){o(600)},100))
_.delay(function(){(new Image).src="/images/homepage/background-parent.jpg";(new Image).src="/images/homepage/background-teacher.jpg"},500)
o(0)},initScrollingLinks:function(){var e=function(e,o){if(_.isFunction(e)){e=e(this)}$("html, body").animate({scrollTop:e+"px"},300,"easeOutCubic")
o.preventDefault()
o.stopPropagation()}
$(".scroll-chevron").on("click",_.partial(e,function(){var e=$(".below-fold:first")
if(e.length){return e.offset().top}else{return 600}}))
$(".below-fold").on("click","a[href=#top]",_.partial(e,0))},bindSignupModeChangeHook:function(){if(window.location.pathname!=="/library"){require.async(["../login-package/signup.js"],function(e){$(e).on("modechange",function(o,i){Homepage.setSignupMode(i,e.SignupMode)})})}},setSignupMode:function(e,o){var i=function(e){var o=$(".homepage-container");["student","teacher","parent"].forEach(function(i){if(e===i){o.addClass(i)}else{o.removeClass(i)}})}
if(e===o.NORMAL){i("student")}else if(e===o.PARENT){i("parent")}else if(e===o.TEACHER){i("teacher")}else if(e===o.UNINITIALIZED){i("student")}else{i("student")}}}
module.exports=Homepage
});
KAdefine("javascript/homepage-package/subscription-view.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jquery-placeholder/jquery.placeholder.js")
require("../../third_party/javascript-khansrc/bootstrap-dropdown/dropdown.js")
var Backbone=require("backbone")
var _=require("underscore")
var KA=require("../shared-package/ka.js")
var SubscriptionDropdownView=require("./subscription-dropdown-view.js")
var validateEmail=require("../shared-package/validate-email.js")
var SubscriptionView=Backbone.View.extend({initialize:function(){this.dropdownView=new SubscriptionDropdownView({el:this.$(".dropdown"),subscriptionView:this})
this.$(".email").placeholder()},updateDropdownViewEl:function(){this.dropdownView.setElement(this.$(".dropdown"))},events:{"click .already-subscribed-container":"beginShowDropdown","focus .not-subscribed-container input.email":"beginShowDropdown","click .not-subscribed-container input.email":"clickInput","click .not-subscribed-container.new":"beginShowDropdown"},clickInput:function(i){i.stopPropagation()},isEmpty:function(){var i=this.$(".not-subscribed-container input.email")
return!i.val().length||i.val()===i.attr("placeholder")},beginShowDropdown:function(i){var e=KA.getUserProfile()
var n=this.$(".not-subscribed-container input.email")
if(this.isEmpty()&&e&&validateEmail(e.get("email"))){n.val(e.get("email"))}this.dropdownView.render()
this.showDropdown()
i.preventDefault()
i.stopPropagation()},updateSubscribedTextAndInput:function(){if(!this.$(".simple-button.toggled").length){this.$(".already-subscribed-container").hide()
this.$(".not-subscribed-container").show()}else{this.$(".already-subscribed-container").show()
this.$(".not-subscribed-container").hide()}},showDropdown:function(){this.$(".dropdown-toggle").dropdown("open").bind("close",function(){this.$(".not-subscribed-container input.email").val(this.$(".dropdown-menu input.email").val())
this.updateSubscribedTextAndInput()}.bind(this)).end()
_.defer(_.bind(function(){this.$(".dropdown-menu input.email").focus()}))}})
module.exports=SubscriptionView
});
KAdefine("javascript/homepage-package/subscription-dropdown-view.js", function(require, module, exports) {
var $=require("jquery")
var Backbone=require("backbone")
var _=require("underscore")
require("../shared-package/i18n.js")
var validateEmail=require("../shared-package/validate-email.js")
var SubscriptionDropdownView=Backbone.View.extend({template:require("./subscription.handlebars"),templateContext:{},events:{click:"click","click .subscribe-button":"doSubscribe","keypress input.email":"emailKeypress","keyup input.email":"emailKeyup"},click:function(t){t.stopPropagation()},emailKeypress:function(t){var e=$(t.currentTarget)
if(e.hasClass("invalid")&&validateEmail(e.val())){e.removeClass("invalid")}},emailKeyup:function(t){var e=this.$(".subscribe-button")
e.removeClass("toggled")
_.each(e,function(t){var e=$(t)
if(e.data("original-text")){e.find("span").text(e.data("original-text"))}})},render:function(){if(this.$el.data("rendered")){return}this.$el.data("rendered",true)
this.$(".subscription-dropdown-placeholder").replaceWith(this.template(this.templateContext))
var t=this.$("input.email")
t.val(this.options.subscriptionView.$(".not-subscribed-container input.email").val())
if(this.options.subscriptionView.isEmpty()){t.val("")}this.updateButtons()},updateButtons:function(){this.$(".dropdown-throbber").html("<img src='/images/throbber.gif' class='throbber'/>")
$.get("/api/internal/user/subscriptions",function(t){_.each(t,function(t){var e=""
if(t.context){e="/api/internal/topic/"+t.context.topic_id+"/subscribe"}else{e="/api/internal/digest/subscribe"}this.$('a[data-url="'+e+'"]').addClass("toggled")},this)
this.$(".subscribe-button").removeClass("disabled")
this.$(".dropdown-throbber").html("")}.bind(this))},doSubscribe:function(t){t.preventDefault()
var e=this.$("input.email"),i=e.val(),a=$(t.currentTarget).data("url"),s={email:i},r=$(t.currentTarget)
if(!r.data("original-text")){r.data("original-text",r.text())}if(validateEmail(i)){var n=$._("Subscribed!")
if(r.hasClass("toggled")){s["unsubscribe"]=1
n=$._("Unsubscribed!")}$.post(a,s)
var o=+new Date
r.data("dtLastAnim",o).toggleClass("toggled").find("span").stop(true,true).css("opacity",1).text(n)
setTimeout(function(){if(o!==r.data("dtLastAnim")){return}var t=r.hasClass("toggled")&&r.data("toggled-text")?r.data("toggled-text"):r.data("original-text")
r.find("span").animate({opacity:0},100,function(){r.find("span").text(t).animate({opacity:1},100)})},2e3)}else{e.addClass("invalid").focus()}}})
module.exports=SubscriptionDropdownView
});
KAdefine("third_party/javascript-khansrc/analytics-api-samples/ga_social_tracking.js", function(__KA_require, __KA_module, __KA_exports) {
var _ga=_ga||{}
var ga=window.ga
_ga.trackSocial=function(e,t){_ga.trackFacebook(e,t)
_ga.trackTwitter(e,t)}
_ga.trackFacebook=function(e,t){var a=_ga.buildTrackerName_(t)
try{if(FB&&FB.Event&&FB.Event.subscribe){FB.Event.subscribe("edge.create",function(t){ga(a+"send","social","facebook","like",t,{page:e})})
FB.Event.subscribe("edge.remove",function(t){ga(a+"send","social","facebook","unlike",t,{page:e})})
FB.Event.subscribe("message.send",function(t){ga(a+"send","social","facebook","send",t,{page:e})})}}catch(r){}}
_ga.buildTrackerName_=function(e){return e?e+".":""}
_ga.trackTwitter=function(e,t){var a=_ga.buildTrackerName_(t)
try{if(twttr&&twttr.events&&twttr.events.bind){twttr.events.bind("tweet",function(t){if(t){var r
if(t.target&&t.target.nodeName=="IFRAME"){r=_ga.extractParamFromUri_(t.target.src,"url")}ga(a+"send","social","twitter","tweet",r,{page:e})}})}}catch(r){}}
_ga.extractParamFromUri_=function(e,t){if(!e){return}var e=e.split("#")[0]
var a=e.split("?")
if(a.length==1){return}var r=decodeURI(a[1])
t+="="
var n=r.split("&")
for(var i=0,c;c=n[i];++i){if(c.indexOf(t)===0){return unescape(c.split("=")[1])}}return}
__KA_module.exports = _ga;
this._ga = _ga;
});
; KAdefine.updatePathToPackageMap({"javascript/login-package/signup.js": "login.js"});
this.KAdefineTiming["homepage-package.js"].endTime = +(new Date);
