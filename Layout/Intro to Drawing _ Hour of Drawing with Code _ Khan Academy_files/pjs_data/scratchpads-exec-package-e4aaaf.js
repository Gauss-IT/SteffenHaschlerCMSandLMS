((this.KAdefineTiming = this.KAdefineTiming || {})["scratchpads-exec-package.js"] = {}).startTime = +(new Date);
KAdefine("third_party/javascript-khansrc/live-editor/build/js/live-editor.shared.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../../../javascript/shared-package/i18n.js");
__KA_require("../../../jquery/jquery.js");
__KA_require("../../../underscore/underscore.js");
__KA_require("../../../backbone-src/backbone.js");
__KA_require("../../../handlebars/handlebars.runtime.js");
__KA_require("../../../jed/jed.js");
__KA_require("../../../../../javascript/shared-package/i18n.js");
__KA_require("../../../../../javascript/shared-package/console.js");
if(!$._){$._=function(e){return e}}window.OutputImages=[{groupName:"avatars",images:"leaf-blue leaf-green leaf-grey leaf-orange leaf-red leaf-yellow leafers-seed leafers-seedling leafers-sapling leafers-tree leafers-ultimate marcimus mr-pants mr-pink piceratops-seed piceratops-seedling piceratops-sapling piceratops-tree piceratops-ultimate old-spice-man orange-juice-squid purple-pi questionmark robot_female_1 robot_female_2 robot_female_3 robot_male_1 robot_male_2 robot_male_3 spunky-sam".split(" ")},{groupName:"creatures",images:"Hopper-Happy Hopper-Cool Hopper-Jumping OhNoes BabyWinston Winston".split(" ")},{groupName:"cute",images:"Blank BrownBlock CharacterBoy CharacterCatGirl CharacterHornGirl CharacterPinkGirl CharacterPrincessGirl ChestClosed ChestLid ChestOpen DirtBlock DoorTallClosed DoorTallOpen EnemyBug GemBlue GemGreen GemOrange GrassBlock Heart Key PlainBlock RampEast RampNorth RampSouth RampWest Rock RoofEast RoofNorth RoofNorthEast RoofNorthWest RoofSouth RoofSouthEast RoofSouthWest RoofWest Selector ShadowEast ShadowNorth ShadowNorthEast ShadowNorthWest ShadowSideWest ShadowSouth ShadowSouthEast ShadowSouthWest ShadowWest Star StoneBlock StoneBlockTall TreeShort TreeTall TreeUgly WallBlock WallBlockTall WaterBlock WindowTall WoodBlock".split(" "),cite:$._("'Planet Cute' art by Daniel Cook (Lostgarden.com)"),citeLink:"http://lostgarden.com/2007/05/dancs-miraculously-flexible-game.html"},{groupName:"space",images:"background beetleship collisioncircle girl1 girl2 girl3 girl4 girl5 healthheart minus octopus planet plus rocketship star 0 1 2 3 4 5 6 7 8 9".split(" "),cite:$._("'Space Cute' art by Daniel Cook (Lostgarden.com)"),citeLink:"http://lostgarden.com/2007/03/spacecute-prototyping-challenge.html"}]
window.ExtendedOutputImages=[{className:"Clipart",groups:OutputImages},{className:"Photos",groups:[{groupName:"animals",thumbsDir:"/thumbs",images:"birds_rainbow-lorakeets butterfly butterfly_monarch cat cheetah crocodiles dog_sleeping-puppy dogs_collies fox horse kangaroos komodo-dragon penguins rabbit retriever shark snake_green-tree-boa spider".split(" ")},{groupName:"landscapes",thumbsDir:"/thumbs",images:"beach-at-dusk beach-in-hawaii beach-sunset beach-waves-at-sunset beach-waves-daytime beach-with-palm-trees beach clouds-from-plane crop-circle fields-of-grain fields-of-wine lake lava lotus-garden mountain_matterhorn mountains-and-lake mountains-in-hawaii mountains-sunset sand-dunes waterfall_niagara-falls".split(" ")},{groupName:"food",thumbsDir:"/thumbs",images:"bananas berries broccoli brussels-sprouts cake chocolates coffee-beans croissant dumplings fish_grilled-snapper fruits grapes hamburger ice-cream mushroom oysters pasta potato-chips potatoes shish-kebab strawberries sushi tomatoes".split(" ")}]},{className:"Holiday ☃",groups:[{groupName:"seasonal",thumbsDir:"/thumbs",images:"fireworks-2015 fireworks-in-sky fireworks-over-harbor fireworks-scattered gingerbread-family gingerbread-house gingerbread-houses gingerbread-man hannukah-dreidel hannukah-menorah house-with-lights reindeer snow-crystal1 snow-crystal2 snow-crystal3 snowy-slope-with-trees stocking-empty xmas-cookies xmas-ornament-boat xmas-ornament-on-tree xmas-ornaments xmas-presents xmas-scene-holly-border xmas-tree-with-presents xmas-tree xmas-wreath".split(" ")}]}]
window.ScratchpadRecord=Backbone.Model.extend({initialize:function(){this.handlers={seek:function(){}}
this.seekCache={}
this.seekCacheInterval=20
this.initData={}
this.seekCachers={}
this.allSavedCommands=[]},setActualInitData:function(e){this.actualInitData=e},hasNoChunks:function(){return _.isEmpty(this.allSavedCommands)},numChunksSaved:function(){return this.allSavedCommands.length},startRecordChunk:function(e){e=Math.max(e,t())
this._resetForNewChunk()
this.record(e)
function t(){var e=0
if(this.allSavedCommands&&this.allSavedCommands.length>0){if(_.last(this.allSavedCommands).length>0){e=_.last(_.last(this.allSavedCommands))[0]}}return e}},stopRecordChunk:function(){this.stopRecord()},saveRecordChunk:function(){this.allSavedCommands.push(this.commands)
this._resetForNewChunk()},discardRecordChunk:function(){this._resetForNewChunk()},_resetForNewChunk:function(){this.commands=[]
this.initData={}},record:function(e){e=e||0
if(!this.recording){this.commands=[]
this.recording=true
this.startTime=(new Date).getTime()-e
this.trigger("recordStarted")}},stopRecord:function(){if(this.recording){this.recording=false
this.recorded=true
this.trigger("recordEnded")}},loadRecording:function(e){if(e&&e.commands&&e.init){this.initData=e.init
e=e.commands}this.commands=e
this.seekCacheInterval=Math.ceil(e.length/50)},dumpRecording:function(){if(this.actualInitData){this.initData=this.actualInitData
this.commands=_.flatten(this.allSavedCommands,true)}return{init:this.initData,commands:this.commands}},getVersion:function(){return this.initData.configVersion||0},seekTo:function(e){this.pauseTime=(new Date).getTime()
this.playStart=this.pauseTime-e
this.cache(-1*this.seekCacheInterval)
var t=this.commands.length-1
for(var s=0;s<this.commands.length;s++){if(this.commands[s][0]>e){t=s-1
break}}this.playPos=t+1
this.trigger("runSeek")
var i=Math.floor(t/this.seekCacheInterval)
var a=null
var r=0
for(var s=i;s>=0;s--){if(this.seekCache[s]){a=s
break}}if(a!==null){this.cacheRestore(a)
r=a*this.seekCacheInterval+1}else{this.cacheRestore(-1*this.seekCacheInterval)}for(var s=r;s<=t;s++){this.runCommand(this.commands[s])
this.cache(s)}this.trigger("seekDone")},cache:function(e){if(e%this.seekCacheInterval===0){var t=Math.floor(e/this.seekCacheInterval)
if(!this.seekCache[t]){this.seekCache[t]={}
_.each(this.seekCachers,function(e,s){this.seekCache[t][s]=e.getState()},this)}}},cacheRestore:function(e){if(this.seekCache[e]){_.each(this.seekCachers,function(t,s){var i=this.seekCache[e][s]
if(i){t.restoreState(i)}},this)}},play:function(){if(this.recording||this.playing||!this.commands||this.commands.length===0){return}this.trigger("playInit")
var e=this.playStart?this.pauseTime-this.playStart:0
this.playing=true
this.playPos=this.playPos||0
this.playStart=(new Date).getTime()-e
this.playInterval=setInterval(_.bind(function(){var e=this.commands[this.playPos]
while(e&&this.currentTime()>=e[0]){this.runCommand(e)
this.cache(this.playPos)
this.playPos+=1
if(this.playPos===this.commands.length){this.stopPlayback(true)
this.trigger("playEnded")
return}e=this.commands[this.playPos]}},this),5)
this.trigger("playStarted",e>0)
this.seekTo(e)},pausePlayback:function(e){clearInterval(this.playInterval)
this.playing=false
this.playInterval=null
this.pauseTime=(new Date).getTime()
if(!e){this.trigger("playPaused")}},stopPlayback:function(e){this.pausePlayback(e)
if(!e){this.trigger("playStopped")}this.playPos=null
this.playStart=null
this.pauseTime=null},reset:function(){this.initData={}
this.commands=[]
this.seekCache={}
this.playPos=null
this.playStart=null
this.pauseTime=null
this.playing=false
this.recording=false
this.recorded=false},currentTime:function(){return(new Date).getTime()-this.playStart},runCommand:function(e){var t=this.handlers[e[1]]
if(t){return t.apply(this.handlers,e.slice(2))}console.error("Command not found:",e[1])},log:function(){if(!this.playing&&this.recording&&this.commands){if(this.synchronizedTime===undefined){this.synchronizedTime=Math.floor((new Date).getTime()-this.startTime)
setTimeout(function(){this.synchronizedTime=undefined}.bind(this),0)}var e=Array.prototype.slice.call(arguments,0)
e.unshift(this.synchronizedTime)
this.commands.push(e)
return true}},pauseLog:function(){this.oldRecording=this.recording
this.recording=false},resumeLog:function(){this.recording=this.oldRecording}})
var ScratchpadConfig=Backbone.Model.extend({version:null,initialize:function(e){this.version=e.version
this.useDebugger=e.useDebugger
if(this.version!=null){this.version=this.latestVersion()}},runCurVersion:function(e){var t=Array.prototype.slice.call(arguments,0)
t.unshift(this.curVersion())
return this.runVersion.apply(this,t)},runVersion:function(e,t){var s=Array.prototype.slice.call(arguments,2)
for(var i=0;i<=e;i++){var a=this.versions[i][t]
if(a){a.apply(this,s)}}},switchVersion:function(e){if(e!==this.curVersion()){this.version=e
this.trigger("versionSwitched",e)}},curVersion:function(){if(this.version!=null){return this.version}return this.latestVersion()},latestVersion:function(){return this.versions.length-1},autoCompleteBehavior:{autoBrace:false,braceIndent:true,equalsInsert:true},bindAutoComplete:function(e,t){var s=this
t=t||this.autoCompleteBehavior
var i=e.getSession().getMode().$behaviour
i.add("parens","insertion",function(){})
i.add("parens","deletion",function(){})
i.add("brackets","insertion",function(){})
i.add("brackets","deletion",function(){})
i.add("string_dquotes","insertion",function(){})
i.add("string_dquotes","deletion",function(){})
i.add("braces","insertion",function(e,s,i,a,r){var n=i.getCursorPosition()
var o=a.doc.getLine(n.row)
if(r==="{"){var l=i.getSelectionRange()
var h=a.doc.getTextRange(l)
if(t.autoBrace){if(h!==""){return{text:"{"+h+"}",selection:false}}else{return{text:"{}",selection:[1,1]}}}else if(t.braceIndent){var c=/=\s*function/.test(o)?";":""
var u=this.getNextLineIndent(e,o.substring(0,o.length-1),a.getTabString())
var d=this.$getIndent(a.doc.getLine(n.row))
if(u===d){u+=a.getTabString()}return{text:"{\n"+u+h+"\n"+d+"}"+c,selection:[1,u.length,1,u.length]}}}else if(r==="}"){var m=o.substring(n.column,n.column+1)
if(m==="}"){var g=a.$findOpeningBracket("}",{column:n.column+1,row:n.row})
if(g!==null){return{text:"",selection:[1,1]}}}}else if(r==="\n"){var m=o.substring(n.column,n.column+1)
if(m==="}"){var f=a.findMatchingBracket({row:n.row,column:n.column+1})
if(!f){return null}var u=this.getNextLineIndent(e,o.substring(0,o.length-1),a.getTabString())
var d=this.$getIndent(a.doc.getLine(f.row))
return{text:"\n"+u+"\n"+d,selection:[1,u.length,1,u.length]}}}})
i.add("equals","insertion",function(e,s,i,a,r){if(!t.equalsInsert){return}var n=i.getCursorPosition()
var o=a.doc.getLine(n.row)
if(r==="="&&/\bdraw\s*$/.test(o)){var l=i.getSelectionRange()
var h=a.doc.getTextRange(l)
var c=this.getNextLineIndent(e,o.substring(0,o.length-1),a.getTabString())
var u=this.$getIndent(a.doc.getLine(n.row))
if(c===u){c+=a.getTabString()}return{text:"= function() {\n"+c+h+"\n"+u+"};",selection:[1,c.length,1,c.length]}}})},versions:[{name:"Initial Configuration",ace_pjs_editor:function(e){var t=e.editor
t.session.setOption("useWorker",false)
t.setHighlightActiveLine(false)
t.$highlightBrackets=function(){}
t.renderer.setHScrollBarAlwaysVisible(false)
var s=t.getSession()
s.setUseWrapMode(true)
s.setUseSoftTabs(true)
s.setUseWorker(false)
t.setFontSize("14px")
t.setHighlightSelectedWord(false)
t.renderer.setShowGutter(true)
t.renderer.setShowPrintMargin(false)
s.setMode("ace/mode/javascript")
t.setTheme("ace/theme/textmate")
this.bindAutoComplete(t,{autoBrace:true})},ace_webpage_editor:function(e){var t=e.editor
t.session.setOption("useWorker",false)
t.setHighlightActiveLine(false)
t.renderer.setHScrollBarAlwaysVisible(false)
var s=t.getSession()
s.setUseWrapMode(true)
s.setUseSoftTabs(true)
t.setFontSize("14px")
t.setHighlightSelectedWord(false)
t.renderer.setShowGutter(true)
t.renderer.setShowPrintMargin(false)
s.setMode("ace/mode/html")
var i=s.getMode().$behaviour.getBehaviours()
var a=i.autoclosing.insertion
i.autoclosing.insertion=function(e,t,s,i,r){var n=s.getCursorPosition()
var o=i.getLine(n.row)
if(o.slice(n.column).trim()===""){return a.apply(this,arguments)}}
t.setTheme("ace/theme/textmate")},ace_sql_editor:function(e){var t=e.editor
t.setHighlightActiveLine(false)
t.renderer.setHScrollBarAlwaysVisible(false)
var s=t.getSession()
s.setUseWrapMode(true)
s.setUseSoftTabs(true)
t.setFontSize("14px")
t.setHighlightSelectedWord(false)
t.renderer.setShowGutter(true)
t.renderer.setShowPrintMargin(false)
s.setMode("ace/mode/sql")
t.setTheme("ace/theme/textmate")},jshint:function(e){e.JSHint={undef:true,noempty:true,plusplus:true,noarg:true,latedef:true,eqeqeq:true,curly:true,shadow:true,smarttabs:true}},processing:function(e){e.size(400,400)
e.frameRate(30)
e.angleMode="radians"}},{name:"Switch to Degress from Radians",processing:function(e){e.angleMode="degrees"}},{name:"Brace Autocompletion Changes",ace_pjs_editor:function(e){this.bindAutoComplete(e.editor,{autoBrace:false,braceIndent:true,equalsInsert:true})}},{name:"Disable Un-needed JSHint Rules",jshint:function(e){delete e.JSHint.noempty
delete e.JSHint.plusplus}}]})
__KA_exports.OutputImages = OutputImages;
__KA_exports.ScratchpadRecord = ScratchpadRecord;
__KA_exports.ScratchpadConfig = ScratchpadConfig;
this.ScratchpadConfig = ScratchpadConfig;
this.OutputImages = OutputImages;
this.ScratchpadRecord = ScratchpadRecord;
});
KAdefine("third_party/javascript-khansrc/live-editor/build/js/live-editor.output.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../../../javascript/shared-package/i18n.js");
__KA_require("../../../jquery/jquery.js");
__KA_require("../../../underscore/underscore.js");
__KA_require("../../../backbone-src/backbone.js");
__KA_require("../../../handlebars/handlebars.runtime.js");
__KA_require("./live-editor.shared.js");
this["Handlebars"]=this["Handlebars"]||{}
this["Handlebars"]["templates"]=this["Handlebars"]["templates"]||{}
this["Handlebars"]["templates"]["output"]=Handlebars.template(function(t,e,s,i,r){s=s||t.helpers
var n,o=this
return'<div class="output"></div>\n<div class="test-errors" style="display: none;"></div>'})
var PooledWorker=function(t,e){this.pool=[]
this.curID=0
this.filename=t
this.onExec=e||function(){}}
PooledWorker.prototype.getURL=function(){return this.workersDir+this.filename+"?cachebust=G"+(new Date).toDateString()}
PooledWorker.prototype.getWorkerFromPool=function(){var t=this.pool.shift()
if(!t){t=new window.Worker(this.getURL())}this.curID+=1
t.id=this.curID
return t}
PooledWorker.prototype.isCurrentWorker=function(t){return this.curID===t.id}
PooledWorker.prototype.addWorkerToPool=function(t){this.pool.push(t)}
PooledWorker.prototype.exec=function(){this.onExec.apply(this,arguments)}
window.OutputTester=function(){}
OutputTester.prototype={initialize:function(t){var e=this
this.tests=[]
this.testContext={}
for(var s in this.testMethods){if(this.testMethods.hasOwnProperty(s)){this.testContext[s]=this.testMethods[s]}}for(var s in this.defaultTestContext){if(!(s in this.testContext)){this.testContext[s]=this.defaultTestContext[s]}}if(typeof PooledWorker==="undefined"){return}this.testWorker=new PooledWorker(t.workerFile,function(t,s,i,r){var n=this
try{e.exec(s)}catch(o){if(window.console){console.warn(o.message)}return}if(!window.Worker||i.length>0){return e.test(t,s,i,r)}var u=this.getWorkerFromPool()
u.onmessage=function(t){if(t.data.type==="test"){if(n.isCurrentWorker(u)){var e=t.data.message
r(e.errors,e.testResults)}n.addWorkerToPool(u)}}
u.postMessage({code:t,validate:s,errors:i,externalsDir:this.externalsDir})})},bindTestContext:function(t){t=t||this.testContext
for(var e in t){if(typeof t[e]==="object"){this.bindTestContext(t[e])}else if(typeof t[e]==="function"){t[e]=t[e].bind(this)}}},test:function(t,e,s,i){var r=[]
s=this.errors=s||[]
this.userCode=t
this.tests=[]
this.exec(e)
this.curTask=null
this.curTest=null
for(var n=0;n<this.tests.length;n++){r.push(this.runTest(this.tests[n],n))}i(s,r)},runTest:function(t,e){var s={name:t.name,state:"pass",results:[]}
this.curTest=s
t.fn.call(this)
this.curTest=null
return s},exec:function(t){if(!t){return true}t="with(arguments[0]){\n"+t+"\n}"
new Function(t).call({},this.testContext)
return true},defaultTestContext:{test:function(t,e,s){if(!e){e=t
t=$._("Test Case")}this.tests.push({name:t,type:s||"default",fn:function(){try{return e.apply(this,arguments)}catch(t){if(window.console){console.warn(t)}}}})},staticTest:function(t,e){this.testContext.test(t,e,"static")},log:function(t,e,s,i,r){i=i||"info"
var n={type:i,msg:t,state:e,expected:s,meta:r||{}}
if(this.curTest){if(e!=="pass"){this.curTest.state=e}this.curTest.results.push(n)}return n},task:function(t,e){this.curTask=this.testContext.log(t,"pass",e,"task")
this.curTask.results=[]},endTask:function(){this.curTask=null},assert:function(t,e,s,i){t=!!t
this.testContext.log(e,t?"pass":"fail",s,"assertion",i)
return t},isEqual:function(t,e,s){return this.testContext.assert(t===e,s,[t,e])},pass:function(t){return{success:true,message:t}},fail:function(t){return{success:false,message:t}},anyPass:function(){return _.find(arguments,this.testContext.passes)||arguments[0]||this.testContext.fail()},allPass:function(){return _.find(arguments,this.testContext.fails)||arguments[0]||this.testContext.pass()},passes:function(t){return t.success},fails:function(t){return!t.success}}}
window.LiveEditorOutput=Backbone.View.extend({recording:false,loaded:false,outputs:{},initialize:function(t){this.render()
this.setPaths(t)
this.config=new ScratchpadConfig({useDebugger:t.useDebugger})
if(t.outputType){this.setOutput(t.outputType)}this.bind()},render:function(){this.$el.html('<div class="output"></div>')},bind:function(){window.addEventListener("message",this.handleMessage.bind(this),false)},setOutput:function(t){var e=this.outputs[t]
this.output=new e({el:this.$el.find(".output"),config:this.config,output:this,type:t})},setPaths:function(t){if(t.workersDir){this.workersDir=this._qualifyURL(t.workersDir)
PooledWorker.prototype.workersDir=this.workersDir}if(t.externalsDir){this.externalsDir=this._qualifyURL(t.externalsDir)
PooledWorker.prototype.externalsDir=this.externalsDir}if(t.imagesDir){this.imagesDir=this._qualifyURL(t.imagesDir)}if(t.soundsDir){this.soundsDir=this._qualifyURL(t.soundsDir)}if(t.jshintFile){this.jshintFile=this._qualifyURL(t.jshintFile)
PooledWorker.prototype.jshintFile=this.jshintFile}},_qualifyURL:function(t){var e=document.createElement("a")
e.href=t
return e.href},handleMessage:function(t){var e
this.frameSource=t.source
this.frameOrigin=t.origin
this.notifyActive()
if(typeof t.data==="object"){return}try{e=JSON.parse(t.data)}catch(s){return}if(!this.output){var i=e.outputType||_.keys(this.outputs)[0]
this.setOutput(i)}if(e.type==="debugger"){return}this.setPaths(e)
if(e.validate!=null){this.initTests(e.validate)}if(e.settings!=null){this.settings=e.settings}if(e.code!=null){this.config.switchVersion(e.version)
this.runCode(e.code,undefined,e.cursor,e.noLint)}if(e.onlyRunTests!=null){this.onlyRunTests=!!e.onlyRunTests}else{this.onlyRunTests=false}if(e.restart){this.restart()}if(e.recording!=null){this.recording=e.recording}if(e.screenshot!=null){var r=e.screenshotSize||200
this.output.getScreenshot(r,function(t){this.postParent(t)}.bind(this))}if(this.output.messageHandlers){for(var n in e){if(n in this.output.messageHandlers){this.output.messageHandlers[n].call(this.output,e)}}}},postParent:function(t){if(this.frameSource){this.frameSource.postMessage(typeof t==="string"?t:JSON.stringify(t),this.frameOrigin)}},notifyActive:_.once(function(){this.postParent({active:true})}),initTests:function(t){if(this.validate===t){return}this.validate=t},runCode:function(t,e,s,i){this.currentCode=t
this.results={code:t,errors:[],assertions:[]}
this.lastSent=undefined
var r=function(s){s=this.cleanErrors(s||[])
if(!this.loaded){this.postParent({loaded:true})
this.loaded=true}this.results.errors=s
this.phoneHome()
this.toggle(!s.length)
if(e){this._test(t,this.validate,s,function(t,s){e(t,s)
return})}else{this.test(t,this.validate,s,function(t,e){this.results.errors=t
this.results.tests=e
this.phoneHome()}.bind(this))}}.bind(this)
var n=function(e){if(e.length>0||this.onlyRunTests){return r(e)}try{this.output.runCode(t,function(t){r(t)},s)}catch(i){r([i])}}.bind(this)
if(i&&this.firstLint){n([])}else{this.lint(t,n)
this.firstLint=true}},phoneHome:function(){if(this.lastSent&&this.lastSent.errors&&this.lastSent.errors.length){this.results.errors=this.lastSent.errors}this.postParent({results:this.results})
this.lastSent=JSON.parse(JSON.stringify(this.results))},test:_.throttle(function(){this._test.apply(this,arguments)},200),_test:function(t,e,s,i){this.output.test(t,e,s,i)},lint:function(t,e){this.output.lint(t,e)},getUserCode:function(){return this.currentCode||""},toggle:function(t){if(this.output.toggle){this.output.toggle(t)}},restart:function(){if(!this.output){return}if(this.output.restart){this.output.restart()}this.runCode(this.getUserCode())},cleanErrors:function(t){t=t.map(function(t){if(!$.isPlainObject(t)){return{row:t.lineno?t.lineno-2:-1,column:0,text:this.clean(t.message),type:"error",source:"native",priority:3}}return{row:t.row,column:t.column,text:_.compose(this.prettify,this.clean)(t.text||t.message||""),type:t.type,lint:t.lint,source:t.source}}.bind(this))
t=t.sort(function(t,e){var s=t.row-e.row
return s===0?(t.priority||99)-(e.priority||99):s})
return t},prettify:function(t){t=t.split('"')
var e=""
for(var s=0;s<t.length;s++){if(t[s].length===0){continue}if(s%2===0){e+='<span class="text">'+t[s]+"</span>"}else{e+='<span class="quote">'+t[s]+"</span>"}}return e},clean:function(t){return String(t).replace(/</g,"&lt;")}})
LiveEditorOutput.registerOutput=function(t,e){LiveEditorOutput.prototype.outputs[t]=e}
__KA_exports.LiveEditorOutput = LiveEditorOutput;
__KA_exports.OutputTester = OutputTester;
__KA_exports.PooledWorker = PooledWorker;
this.LiveEditorOutput = LiveEditorOutput;
this.PooledWorker = PooledWorker;
this.OutputTester = OutputTester;
});
this.KAdefineTiming["scratchpads-exec-package.js"].endTime = +(new Date);
