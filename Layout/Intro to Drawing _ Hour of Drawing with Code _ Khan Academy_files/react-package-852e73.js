((this.KAdefineTiming = this.KAdefineTiming || {})["react-package.js"] = {}).startTime = +(new Date);
KAdefine("javascript/react-package/userhoverable.jsx", function(require, module, exports) {
var $=require("jquery")
var React=require("react")
require("../shared-package/i18n.js")
var HoverCard=require("../shared-package/hover-card.js")
var UserHoverable=React.createClass({displayName:"UserHoverable",handleMouseEnter:function(){HoverCard.createHoverCardQtip(this.getDOMNode())},render:function(){var e=this.props.user
if(!e.nickname){return React.createElement("span",null,$._("Anonymous"))}return React.createElement("a",{className:"discussion-author",onMouseEnter:this.handleMouseEnter,"data-user-id":e.userId},e.avatarSrc&&React.createElement("img",{className:"discussion-author-avatar",src:e.avatarSrc}),e.nickname)}})
module.exports=UserHoverable
});
KAdefine("javascript/react-package/throbber-grid.jsx", function(require, module, exports) {
var $=require("jquery")
var React=require("react")
var ThrobberGrid=React.createClass({displayName:"ThrobberGrid",propTypes:{className:React.PropTypes.string},render:function(){var e="throbber-grid "+(this.props.className||"")
if($("body").is(".ie.lte9")){return React.createElement("div",{className:e},React.createElement("img",{className:"throbber-fallback",src:"/images/throbber-full.gif"}))}return React.createElement("div",{className:e},React.createElement("div",{className:"throbber-row clearfix"},React.createElement("div",{className:"block-0 throbber-block"}),React.createElement("div",{className:"block-1 throbber-block"}),React.createElement("div",{className:"block-2 throbber-block"})),React.createElement("div",{className:"throbber-row clearfix"},React.createElement("div",{className:"block-7 throbber-block"}),React.createElement("div",{className:"block-8 throbber-block"}),React.createElement("div",{className:"block-3 throbber-block"})),React.createElement("div",{className:"throbber-row clearfix"},React.createElement("div",{className:"block-6 throbber-block"}),React.createElement("div",{className:"block-5 throbber-block"}),React.createElement("div",{className:"block-4 throbber-block"})))}})
module.exports=ThrobberGrid
});
KAdefine("javascript/react-package/countdown-view.jsx", function(require, module, exports) {
var React=require("react")
var CountdownView=React.createClass({displayName:"CountdownView",propTypes:{targetDate:React.PropTypes.instanceOf(Date).isRequired,onFinished:React.PropTypes.func},getTotalMs:function(){var e=new Date
return Math.max(this.props.targetDate-e,0)},componentDidMount:function(){this.update(true)},componentWillUnmount:function(){clearTimeout(this.timeout)},update:function(e){if(!e){this.forceUpdate()}var t=this.getTotalMs()
if(t===0){this.props.onFinished&&this.props.onFinished()}else{var a=t%1e3
if(a===0){a=1e3}this.timeout=setTimeout(this.update,Math.max(a,16))}},render:function(){var e=Math.ceil(this.getTotalMs()/1e3)
var t=e%60
var a=Math.floor(e/60)%60
var i=Math.floor(e/60/60)
var o=("0"+i).slice(-2)+":"+("0"+a).slice(-2)+":"+("0"+t).slice(-2)
return React.createElement("div",{className:"countdown"},o)}})
module.exports=CountdownView
});
KAdefine("javascript/react-package/modal.jsx", function(require, module, exports) {
require("../../third_party/javascript-khansrc/bootstrap-khansrc/js/bootstrap-modal.js")
var $=require("jquery")
var React=require("react")
var Modal=React.createClass({displayName:"Modal",propTypes:{className:React.PropTypes.string,keyboard:React.PropTypes.bool,onClose:React.PropTypes.func,backdrop:React.PropTypes.oneOfType([React.PropTypes.bool,React.PropTypes.string]),forceTop:React.PropTypes.bool},render:function(){var o=React.addons.classSet({modal:true,"modal-force-top":this.props.forceTop})
o+=" "+this.props.className
return React.createElement("div",React.__spread({},this.props,{tabIndex:this.props.tabIndex,className:o}))},getDefaultProps:function(){return{className:"",onClose:function(){},keyboard:true,backdrop:true,tabIndex:"-1"}},componentDidMount:function(){$(this.getDOMNode()).on("hidden.bs.modal",this.props.onClose).modal({keyboard:this.props.keyboard,backdrop:this.props.backdrop})
if(this.props.forceTop){$(".modal-backdrop").addClass("modal-force-top")}},componentWillUnmount:function(){$(".modal-backdrop").removeClass("modal-force-top")
$(this.getDOMNode()).modal("hide").off("hidden.bs.modal",this.props.onClose)}})
module.exports=Modal
});
KAdefine("javascript/react-package/maybe-link.jsx", function(require, module, exports) {
var React=require("react")
var MaybeLink=React.createClass({displayName:"MaybeLink",propTypes:{href:React.PropTypes.string},render:function(){if(this.props.href!=null){return React.createElement("a",React.__spread({},this.props))}else{return React.createElement("span",React.__spread({},this.props,{className:"maybe-link-loading "+(this.props.className||"")}),React.createElement("i",{className:"icon-spinner icon-spin"})," ",this.props.children)}}})
module.exports=MaybeLink
});
KAdefine("javascript/react-package/age-selector.jsx", function(require, module, exports) {
var $=require("jquery")
var React=require("react")
var _=require("underscore")
require("../shared-package/i18n.js")
var Select=require("./select.jsx")
var AgeSelector=React.createClass({displayName:"AgeSelector",render:function(){var e=1
var r=140
var a=_.times(r-e+1,function(r){return[r+e,r+e]})
return React.createElement(Select,React.__spread({},this.props,{options:a,blankText:$._("Age")}))}})
module.exports=AgeSelector
});
KAdefine("javascript/react-package/select.jsx", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jquery-migrate/jquery-migrate-1.1.1.js")
var $=require("jquery")
var React=require("react")
var _=require("underscore")
var $_=require("../shared-package/i18n.js").$_
var Select=React.createClass({displayName:"Select",propTypes:{options:React.PropTypes.array.isRequired,onChange:React.PropTypes.func.isRequired,value:React.PropTypes.string,hideBlank:React.PropTypes.bool,classes:React.PropTypes.string},getDefaultProps:function(){return{blankText:$_(null,"Unspecified"),blankValue:"unspecified"}},onChange:function(e){this.props.onChange(e.target.value)},render:function(){var e={}
if($.browser.webkit){e={paddingTop:0,paddingBottom:0}}var a=this.props.options
if(!this.props.hideBlank){a=[[this.props.blankValue,this.props.blankText]].concat(a)}var r=!this.props.value||this.props.value===this.props.blankValue
var s=React.addons.classSet({"simple-input ui-corner-all":true,"select-default":r})
s+=" "+this.props.classes
return React.createElement("select",React.__spread({},this.props,{style:e,onChange:this.onChange,className:s+" "+(this.props.className||"")}),_.map(a,function(e){return React.createElement("option",{value:e[0],key:e[0]},e[1])}))}})
module.exports=Select
});
KAdefine("javascript/react-package/backbone-state-mixin.jsx", function(require, module, exports) {
var _=require("underscore")
var BackboneStateMixin=function(t){var e=_.uniqueId("backboneStateMixin")
function n(n){var i=n[e]
var r=t.getModel(n.props)
if(i.model===r){return}o(n)
r.on("change",a)
i.model=r
i.listener=a
function a(){n.setState(t.getState(r))}}function o(t){var n=t[e]
var o=n.model
if(o){o.off("change",n.listener)}}return{getInitialState:function(){var e=t.getModel(this.props)
return t.getState(e)},componentDidMount:function(){this[e]={}
n(this)},componentWillReceiveProps:function(e){n(this)
var o=t.getModel(e)
this.setState(t.getState(o))},componentWillUnmount:function(){o(this)}}}
module.exports=BackboneStateMixin
});
KAdefine("javascript/react-package/state-from-store-mixin.jsx", function(require, module, exports) {
var _=require("underscore")
var StateFromStore=function(t){var e=_.uniqueId("StateFromStoreMixin")
var a=function(t,e,a){var n={}
n[e]=a
if(t.isMounted()){t.setState(n)}}
var n=function(a,n,r,i){i=i||a.props
var o=a[e].fetchParamsCache
var c=t[n]
var s=null
if(c.getFetchParams){s=c.getFetchParams(i)}if(r&&_.isEqual(o[n],s)){return{stateData:null,didFetch:false}}o[n]=s
var u=c.fetch(c.store,s)
return{stateData:u,didFetch:true}}
var r=function(t,e){var r=n(t,e,false).stateData
a(t,e,r)}
var i=function(t,e,r){var i=n(t,e,true,r)
if(i.didFetch){var o=i.stateData
a(t,e,o)}}
var o=function(a){var n=a[e].changeListeners
_.each(t,function(t,e){var i=function(){return r(a,e)}
n[e]=i
t.store.addChangeListener(i)})}
var c=function(a){var n=a[e].changeListeners
_.each(t,function(t,e){t.store.removeChangeListener(n[e])
delete n[e]})}
var s=function(e,a){Object.keys(t).forEach(function(t){i(e,t,a)})}
return{getInitialState:function(){this[e]={fetchParamsCache:{},changeListeners:{}}
var a={}
Object.keys(t).forEach(function(t){var e=n(this,t,false).stateData
a[t]=e},this)
return a},componentDidMount:function(){o(this)},componentWillUnmount:function(){c(this)},componentWillReceiveProps:function(t){s(this,t)}}}
module.exports=StateFromStore
});
KAdefine("javascript/react-package/task-preview.jsx", function(require, module, exports) {
var React=require("react")
var TaskPreview=React.createClass({displayName:"TaskPreview",propTypes:{taskType:React.PropTypes.string.isRequired,thumbnailUrl:React.PropTypes.string},render:function(){if(this.props.taskType==="practice"||this.props.taskType==="program"||this.props.taskType==="article"){return React.createElement("div",{className:"task-preview"},React.createElement("img",{src:this.props.thumbnailUrl}))}else if(this.props.taskType==="video"){var e={backgroundImage:"url("+this.props.thumbnailUrl+")"}
return React.createElement("div",{className:"task-preview video-task"},React.createElement("div",{className:"video-thumbnail-container",style:e},React.createElement("div",{className:"thumbnail-transparent-black"}),React.createElement("div",{className:"play-icon-container"},React.createElement("i",{className:"icon-play"}))))}else{return React.createElement("div",{className:"task-preview"})}}})
module.exports=TaskPreview
});
KAdefine("javascript/react-package/kui/button.jsx", function(require, module, exports) {
var $=require("jquery")
var React=require("react")
require("../../shared-package/i18n.js")
var cx=React.addons.classSet
var KUIButton=React.createClass({displayName:"KUIButton",propTypes:{onClick:React.PropTypes.func,href:React.PropTypes.string,type:React.PropTypes.oneOf(["button","submit"]).isRequired,typeStyle:React.PropTypes.oneOf(["button","submit"]),label:React.PropTypes.node,use:React.PropTypes.oneOf(["primary","secondary","gray","white"]),domainSlug:React.PropTypes.string,progress:React.PropTypes.oneOf(["complete","started","unstarted"]),disabled:React.PropTypes.bool,width:React.PropTypes.string,borderless:React.PropTypes.bool,shadow:React.PropTypes.bool,transparent:React.PropTypes.bool,size:React.PropTypes.oneOf(["normal","small"])},getDefaultProps:function(){return{use:"primary",width:"auto",progress:"complete",borderless:false,shadow:false,transparent:false,disabled:false,size:"normal"}},getLabel:function(){return this.props.label!=null?this.props.label:this.props.type==="submit"?$._("Submit"):""},handleLinkClick:function(t){if(this.props.disabled){t.preventDefault()}else if(this.props.onClick){return this.props.onClick(t)}},render:function(){var t=this.props.domainSlug
var e=this.props.progress
var s=this.props.typeStyle||this.props.type
var r=cx({"kui-button":true,"kui-button-submit":s==="submit","kui-button-plain":s==="button","kui-button-borderless":this.props.borderless,"kui-button-shadow":this.props.shadow,"kui-button-disabled":this.props.disabled,"kui-button-small":this.props.size==="small","kui-button-primary":!t&&this.props.use==="primary","kui-button-secondary":!t&&this.props.use==="secondary","kui-button-gray":!t&&this.props.use==="gray","kui-button-white":this.props.use==="white","kui-button-domain":!!t,"kui-button-complete":t&&e==="complete","kui-button-transparent":this.props.transparent})+(t?" kui-button-domain-"+t:"")
if(this.props.href){return React.createElement("a",{role:"button","aria-disabled":this.props.disabled?"true":"false",type:this.props.type,onClick:this.handleLinkClick,href:this.props.href,className:r,style:{width:this.props.width}},this.getLabel())}return React.createElement("button",{type:this.props.type,onClick:this.props.onClick,disabled:this.props.disabled,className:r,style:{width:this.props.width}},this.getLabel())}})
module.exports=KUIButton
});
KAdefine("javascript/react-package/kui/checkbox.jsx", function(require, module, exports) {
var React=require("react")
var cx=React.addons.classSet
var KUICheckbox=React.createClass({displayName:"KUICheckbox",propTypes:{checked:React.PropTypes.bool,disabled:React.PropTypes.bool,onChange:React.PropTypes.func,onFocus:React.PropTypes.func,onBlur:React.PropTypes.func,name:React.PropTypes.string},getInitialState:function(){return{focused:false}},handleFocus:function(e){this.setState({focused:true})
if(this.props.onFocus){return this.props.onFocus(e)}},handleBlur:function(e){this.setState({focused:false})
if(this.props.onBlur){return this.props.onBlur(e)}},render:function(){return React.createElement("div",{className:cx({"kui-checkbox":true,"kui-checkbox-checked":this.props.checked,"kui-checkbox-disabled":this.props.disabled,"kui-checkbox-focused":this.state.focused})},this.props.checked&&React.createElement("i",{className:"kui-checkbox__check icon-ok","aria-hidden":"true"}),React.createElement("input",{type:"checkbox",className:"kui-checkbox__input",name:this.props.name,checked:this.props.checked,disabled:this.props.disabled,onChange:this.props.onChange,onFocus:this.handleFocus,onBlur:this.handleBlur}))}})
module.exports=KUICheckbox
});
KAdefine("javascript/react-package/kui/labeled-field.jsx", function(require, module, exports) {
var React=require("react")
var _=require("underscore")
var cx=React.addons.classSet
var KUILabeledField=React.createClass({displayName:"KUILabeledField",propTypes:{autoFocus:React.PropTypes.bool,caption:React.PropTypes.node,defaultValue:React.PropTypes.string,disabled:React.PropTypes.bool,error:React.PropTypes.string,name:React.PropTypes.string,placeholder:React.PropTypes.string,showTitle:React.PropTypes.bool,title:React.PropTypes.string.isRequired,type:React.PropTypes.oneOf(["text","password","email"]).isRequired,value:React.PropTypes.string,onChange:React.PropTypes.func,onClick:React.PropTypes.func},getDefaultProps:function(){return{type:"text",showTitle:true}},getInitialState:function(){return{id:_.uniqueId("kui_labeled_field_")}},handleTitleClick:function(){this.refs.input.getDOMNode().focus()},render:function(){return React.createElement("div",{className:"kui-labeledfield"},this.props.showTitle&&React.createElement("div",{className:"kui-labeledfield__title",onClick:this.handleTitleClick,id:this.state.id},this.props.title),this.props.error&&React.createElement("div",{className:"kui-labeledfield__error"},this.props.error),React.createElement("input",{ref:"input","aria-labeledby":this.state.id,autoFocus:this.props.autoFocus,className:cx({"kui-labeledfield__input":true,"kui-labeledfield__input-has-error":!!this.props.error}),defaultValue:this.props.defaultValue,disabled:this.props.disabled,name:this.props.name,placeholder:this.props.placeholder,type:this.props.type,value:this.props.value,onChange:this.props.onChange,onClick:this.props.onClick}),this.props.caption&&React.createElement("div",{className:"kui-labeledfield__caption"},this.props.caption))}})
module.exports=KUILabeledField
});
KAdefine("javascript/react-package/kui/labeled-textarea.jsx", function(require, module, exports) {
var React=require("react")
var cx=React.addons.classSet
var KUITextArea=React.createClass({displayName:"KUITextArea",propTypes:{autoFocus:React.PropTypes.bool,caption:React.PropTypes.node,defaultValue:React.PropTypes.string,disabled:React.PropTypes.bool,error:React.PropTypes.string,height:React.PropTypes.string,onChange:React.PropTypes.func,placeholder:React.PropTypes.string,title:React.PropTypes.string.isRequired,value:React.PropTypes.string,rows:React.PropTypes.number,onClick:React.PropTypes.func},handleTitleClick:function(){this.refs.input.getDOMNode().focus()},render:function(){return React.createElement("div",{className:"kui-labeledtextarea"},React.createElement("div",{className:"kui-labeledtextarea__title",onClick:this.handleTitleClick},this.props.title),this.props.error&&React.createElement("div",{className:"kui-labeledtextarea__error"},this.props.error),React.createElement("textarea",{ref:"input",autoFocus:this.props.autoFocus,className:cx({"kui-labeledtextarea__input":true,"kui-labeledtextarea__input-has-error":!!this.props.error}),disabled:this.props.disabled,defaultValue:this.props.defaultValue,placeholder:this.props.placeholder,value:this.props.value,rows:this.props.rows,onChange:this.props.onChange,onClick:this.props.onClick,style:{height:this.props.height}}),this.props.caption&&React.createElement("div",{className:"kui-labeledtextarea__caption"},this.props.caption))}})
module.exports=KUITextArea
});
this.KAdefineTiming["react-package.js"].endTime = +(new Date);
