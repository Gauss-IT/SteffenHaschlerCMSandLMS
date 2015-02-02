((this.KAdefineTiming = this.KAdefineTiming || {})["intro-package.js"] = {}).startTime = +(new Date);
KAdefine("javascript/intro-package/profile-intro.js", function(require, module, exports) {
var $=require("jquery")
var guiders=require("../../third_party/javascript-khansrc/Guiders-JS/guiders.js")
require("../shared-package/i18n.js")
var Analytics=require("../shared-package/analytics.js")
var PackageManager=require("../shared-package/package-manager.js")
var ProfileIntro={show:function(){if(!PackageManager.isLoaded("profile-nav.js")){return}var e=require("../profile-nav-package/profile.js")
var t=e.profile.isPhantom()
var o=e.profile.isFullyEditable()
Analytics.trackSingleEvent("Profile Intro Tour",{isPhantom:t,isFullyEditable:o})
if(t){if($(".phantom-notification-bar").length){return}guiders.createGuider({buttons:[{action:guiders.ButtonAction.CLOSE,text:$._("No thanks, my hard work should go unrecognized."),classString:"simple-button"},{action:guiders.ButtonAction.CLOSE,text:$._("Yes, please. Sign me up!"),onclick:function(){window.location.href="/signup?continue="+encodeURIComponent(window.location.pathname)},classString:"simple-button green"}],width:490,title:$._("Claim your profile"),description:$._("Your profile page shows all the great "+"progress you've made on Khan Academy. "+"Once you sign up, you can also choose "+"your avatar and display your badges."),overlay:true}).show()
return}guiders.createGuider({id:"welcome",next:"basic-profile",buttons:[{action:guiders.ButtonAction.CLOSE,text:$._("Close"),classString:"simple-button"},{action:guiders.ButtonAction.NEXT,text:$._("Cool. Show me around!"),classString:"simple-button green"}],title:$._("Welcome to your profile page!"),description:$._("Here, you can share your achievements and "+"track your progress."),overlay:true}).show()
guiders.createGuider({id:"basic-profile",next:"more-info",attachTo:".basic-user-info",highlight:".basic-user-info",overlay:true,position:3,buttons:[{action:guiders.ButtonAction.CLOSE,text:$._("Close"),classString:"simple-button"},{action:guiders.ButtonAction.NEXT,text:$._("Next"),classString:"simple-button green"}],title:$._("This is you."),description:o?$._("Choose your avatar, username, and how you want to be "+"known to the Khan Academy community."):$._("Click on the image to choose your avatar!")})
guiders.createGuider({id:"more-info",next:o?"discussion-history":"programs-view",attachTo:"a[rel='progress']",highlight:"a[rel='progress']",overlay:true,position:6,buttons:[{action:guiders.ButtonAction.CLOSE,text:$._("Close"),classString:"simple-button"},{action:guiders.ButtonAction.NEXT,text:$._("Next"),classString:"simple-button green"}],title:$._("Check your vitals."),description:$._("Check out your badges and visualize your stats. "+"This is only visible to you and your coach.")})
if(o){guiders.createGuider({id:"discussion-history",next:"programs-view",attachTo:"a[rel='community discussion']",highlight:"a[rel='community discussion']",overlay:true,position:6,buttons:[{action:guiders.ButtonAction.CLOSE,text:$._("Close"),classString:"simple-button"},{action:guiders.ButtonAction.NEXT,text:$._("Next"),classString:"simple-button green"}],title:$._("Talk it up!"),description:$._("You and the community can browse your questions, "+"answers, and comments.")})}guiders.createGuider({id:"programs-view",attachTo:"a[rel='community programs']",highlight:"a[rel='community programs']",overlay:true,position:6,buttons:[{action:guiders.ButtonAction.CLOSE,text:$._("OK, thanks!"),classString:"simple-button green"}],title:$._("Learn to program."),description:o?$._("Everyone can see (and be inspired by) your programs "+"and spin-offs."):$._("Spin off other people's computer programs and create "+"your own.")})}}
module.exports=ProfileIntro
});
KAdefine("javascript/intro-package/cs-intro.js", function(require, module, exports) {
var $=require("jquery")
var guiders=require("../../third_party/javascript-khansrc/Guiders-JS/guiders.js")
require("../shared-package/i18n.js")
var Cookies=require("../shared-package/cookies.js")
var KA=require("../shared-package/ka.js")
var CsIntro={showLoginTeaser:function(){var e=KA.getUserProfile()
if(e&&!e.get("isPhantom")){return}if($(".phantom-notification-bar").length){return}var o=Cookies.readCookie("csPhantomBait")
if(!o||o==="shown promo"){return}if(KA.isIPad||/\/hour-of-code$/.test(window.location.pathname)){return}var r=$._("Congratulations on your first program! Sign up and "+"experiment more!")
guiders.createGuider({buttons:[{action:guiders.ButtonAction.CLOSE,text:$._("No, I don't want to be awesome."),classString:"simple-button"},{action:guiders.ButtonAction.CLOSE,text:$._("Yes, please! Sign me up!"),onclick:function(){window.location.href="/signup?continue="+encodeURIComponent(window.location.pathname)},classString:"simple-button green"}],title:$._("Become a computer science superstar"),description:r,overlay:true}).show()
Cookies.createCookie("csPhantomBait","shown promo")}}
module.exports=CsIntro
});
KAdefine("javascript/intro-package/dashboard-intro.js", function(require, module, exports) {
var $=require("jquery")
var _=require("underscore")
var guiders=require("../../third_party/javascript-khansrc/Guiders-JS/guiders.js")
require("../shared-package/i18n.js")
var PackageManager=require("../shared-package/package-manager.js")
var getFirstPromotionGuider=function(r){return guiders.createGuider({buttons:[{action:guiders.ButtonAction.NEXT,text:$._("Awesome!"),classString:"simple-button green"}],classString:"dashboard-intro",attachTo:".mission-progress-container",highlight:".mission-progress-container",position:2,title:$._("Congratulations!"),description:$._("Did you see those tiles change colors? "+"You've started your journey to master the skills here!"),id:"progressbar",next:r,overlay:true,width:480})}
var initGuiders=_.once(function(){if(!PackageManager.isLoaded("dashboard.js")){return}var r=require("../dashboard-package/learning-dashboard.jsx")
r.on("mission-picker-open",guiders.hideAll,guiders)
r.on("dashboard-hidden",guiders.hideAll,guiders)
r.on("task-start",guiders.hideAll,guiders)})
var DashboardIntro={showAssessmentCompletionGuider:function(r){initGuiders()
if(r){getFirstPromotionGuider("startfirsttask").show()}var e=guiders.createGuider({buttons:[{action:guiders.ButtonAction.CLOSE,text:$._("Got it!"),classString:"simple-button green"}],classString:"dashboard-intro",attachTo:".up-next.section-header",position:10,title:$._("Next up..."),id:"startfirsttask",description:$._("You've unlocked your tasks. "+"Each one you finish will give you point rewards!"),width:200})
if(!r){e.show()}}}
module.exports=DashboardIntro
});
KAdefine("javascript/intro-package/dashboard-topic-selector-view.jsx", function(require, module, exports) {
require("../../third_party/javascript-khansrc/bootstrap-dropdown/dropdown.js")
var $=require("jquery")
var BackboneMixin=require("react-components/backbone-mixin.jsx")
var React=require("react")
var _=require("underscore")
var guiders=require("../../third_party/javascript-khansrc/Guiders-JS/guiders.js")
var $_=require("../shared-package/i18n.js").$_
var BigBingo=require("../shared-package/bigbingo.js")
var KA=require("../shared-package/ka.js")
var ProfileModel=require("../shared-package/profile-model.js")
var RP=React.PropTypes
var ReactCSSTransitionGroup=React.addons.CSSTransitionGroup
var DashboardTopicSelectorView=React.createClass({displayName:"DashboardTopicSelectorView",propTypes:{onMenuClick:RP.func,onboardingFn:RP.func,recentTopics:RP.array,profileModel:RP.instanceOf(ProfileModel).isRequired,showWelcomeContainer:RP.bool,onAvatarClick:RP.func},getInitialState:function(){return{activeTab:"math",loading:false,animationFrame:0,topicSelected:null,topicLoaded:false}},trackRender:function(){_.delay(function(){BigBingo.markConversion("load_welcome")},500)},componentDidMount:function(){this.trackRender()},componentDidUpdate:function(e,a){var t=a.animationFrame
var n=this
switch(this.state.animationFrame){case 0:if(!a.topicSelected&&this.state.topicSelected){_.delay(function(){n.setState({animationFrame:1})
guiders.hideAll()},500)}break
case 1:if(t===0){_.delay(function(){n.setState({animationFrame:2})},300)}break
case 2:if(t===1){_.delay(function(){n.setState({animationFrame:3})},300)}break
case 3:if(t===2){_.delay(function(){n.setState({animationFrame:4})},300)}break
case 4:if(t===3){_.delay(function(){n.setState({animationFrame:5})},300)}break
case 5:if((!a.topicLoaded||t===4)&&this.state.topicLoaded){this.props.onWelcomeCompletion()}break}},componentWillUnmount:function(){guiders.hideAll()},componentWillReceiveProps:function(e){if(this.state.topicSelected&&!this.state.topicLoaded){var a=e.recentTopics||[]
var t=this.state.topicSelected.slug
var n=_.findWhere(a,{slug:t})
if(n){this.setState({topicSelected:n,topicLoaded:true})}}},handleMenuClick:function(e,a,t,n){var i=require("../dashboard-package/datastores/dashboard-actions.js")
if(this.state.topicSelected){return}var r=a.split("/").splice(-1)[0]
var o=_.findWhere(this.props.recentTopics||[],{slug:r})
var c=a.indexOf("/mission/")===0
if(c){BigBingo.markConversions(["athena_click_subject_on_welcome","athena_click_subject_mission_on_welcome"])}else{BigBingo.markConversions(["athena_click_subject_on_welcome","athena_click_subject_non_mission_on_welcome"])}if(o){this.setState({topicSelected:o,topicLoaded:true})}else{var s={domainSlug:n,path:a,slug:r,progressInfo:[],translatedTitle:e}
this.setState({topicSelected:s})}i.insertRecentTopic(r)},render:function(){var e=this.state.animationFrame
var a=null
if(e<3){a=React.createElement(HackyLearnMenuTrapper,{onMenuClick:this.handleMenuClick})}return React.createElement("div",null,a,this.props.showWelcomeContainer&&React.createElement(WelcomeContainer,{animationFrame:e,topicSelected:this.state.topicSelected,topicLoaded:this.state.topicLoaded,profileModel:this.props.profileModel,onboardingFn:this.props.onboardingFn,onAvatarClick:this.props.onAvatarClick}))},rolePickerText:function(){var e=$._("You can also start as a <a "+'href="/createchild?from=welcome-role-picker">parent</a> or <a '+'href="/coach/roster/?from=welcome-role-picker">teacher</a>.')
return React.createElement("p",{className:"role-picker",dangerouslySetInnerHTML:{__html:e}})}})
var WelcomeContainer=React.createClass({displayName:"WelcomeContainer",propTypes:{animationFrame:RP.number.isRequired,topicSelected:RP.object,topicLoaded:RP.bool.isRequired,profileModel:RP.instanceOf(ProfileModel).isRequired,onboardingFn:RP.func,onAvatarClick:RP.func},mixins:[BackboneMixin],getBackboneModels:function(){return[this.props.profileModel]},getInitialState:function(){return{shouldShowIdleAnimation:false}},componentDidMount:function(){_.delay(function(){if(this.isMounted()){this.setState({shouldShowIdleAnimation:true})}}.bind(this),1e4)
if(this.props.onboardingFn){this.props.onboardingFn()}},render:function(){var e=require("../dashboard-package/recent-topic-callout.jsx")
var a=this.props.animationFrame
var t=null
if(!this.props.topicSelected){t=React.createElement("div",{className:"waiting-card span6"},React.createElement("div",{className:"waiting-title"},$_(null,"Choose a subject...")),React.createElement("div",{className:"waiting-subtitle"},$_(null,"Don't worry, you can always change"+" "+"your mind later.")))}else{var n=function(){}
t=React.createElement(e,{topicOrMum:this.props.topicSelected,onClick:n,onRemoveClick:n,hideStats:!this.props.topicLoaded,shouldHideRemoval:true})}var i=null
if(a<3){if(this.props.profileModel.get("hasChangedAvatar")){var r=React.addons.classSet({"bouncing-avatar-container":true,"avatar-bounce":true,"clickable-avatar":KA.ATHENA_CLICKABLE_BOUNCING_AVATARS})
i=React.createElement("div",{onClick:this.props.onAvatarClick,className:r},React.createElement("img",{className:"avatar-img",src:this.props.profileModel.get("avatarSrc")}),React.createElement("div",{className:"avatar-shadow"}))}else{var o
if(this.state.shouldShowIdleAnimation){o=React.createElement("img",{className:"pants idle-pants",key:"idle-pants",src:"/images/avatars/mr-pants-idle.gif",width:"240",height:"320"})}else{o=React.createElement("img",{className:"pants awake-pants",key:"awake-pants",src:"/images/avatars/mr-pants-with-hat.png",width:"150",height:"226"})}i=React.createElement("div",{className:"pants-container"},React.createElement("div",{className:"pants-halo"},React.createElement(ReactCSSTransitionGroup,{transitionName:"pants"},o)))}}var c=React.addons.classSet({"welcome-container":true,"moved-up":a>3,"profile-header-present":KA.ATHENA_PROFILE_HEADER})
var s=React.addons.classSet({"avatar-onboarding-container":true,"hide-avatar-container":a>0,"shrink-avatar-container":a>1})
return React.createElement("div",{className:c},React.createElement("div",{className:"contents row-fluid"},React.createElement("div",{className:s},i),t))}})
var HackyLearnMenuTrapper=React.createClass({displayName:"HackyLearnMenuTrapper",componentDidMount:function(){$(".watch-link").addClass("on-welcome").find(".dropdown-toggle").dropdown("open").end().find(".level0").on("click.onboarding",".sub-menu-custom .menulink",function(e){var a=$(e.currentTarget)
var t=a.attr("href")
if(!t){return}var n=a.contents().eq(0).text()
var i=a.parents(".level0")
var r=i.data("domainSlug")
var o=$.trim(i.find("> .menulink").text())
this.props.onMenuClick(n,t,o,r)
e.preventDefault()}.bind(this))},componentWillUnmount:function(){$(".watch-link").addClass("on-welcome-and-close").find(".dropdown-toggle").dropdown("close").end().removeClass("on-welcome").find(".level0").off(".onboarding")},render:function(){return null}})
module.exports=DashboardTopicSelectorView
});
this.KAdefineTiming["intro-package.js"].endTime = +(new Date);
