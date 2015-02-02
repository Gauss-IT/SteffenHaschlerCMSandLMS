((this.KAdefineTiming = this.KAdefineTiming || {})["scratchpads-exec-pjs-package.js"] = {}).startTime = +(new Date);
KAdefine("third_party/javascript-khansrc/live-editor/build/js/live-editor.output_pjs_deps.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../../../javascript/shared-package/i18n.js");
__KA_require("../../../underscore/underscore.js");
(function(e,t,n,r){var i=function(){}
var a=function(){if("console"in e){return function(t){e.console.log("Processing.js: "+t)}}return i()}()
var s=function(e){var t=new XMLHttpRequest
t.open("GET",e,false)
if(t.overrideMimeType){t.overrideMimeType("text/plain")}t.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT")
t.send(null)
if(t.status!==200&&t.status!==0){throw"XMLHttpRequest failed, status code "+t.status}return t.responseText}
var o="document"in this&&!("fake"in this.document)
t.head=t.head||t.getElementsByTagName("head")[0]
function l(t,n){if(t in e){return e[t]}if(typeof e[n]==="function"){return e[n]}return function(e){if(e instanceof Array){return e}if(typeof e==="number"){var t=[]
t.length=e
return t}}}var u=l("Float32Array","WebGLFloatArray"),f=l("Int32Array","WebGLIntArray"),c=l("Uint16Array","WebGLUnsignedShortArray"),h=l("Uint8Array","WebGLUnsignedByteArray")
var p={NX:9,NY:10,NZ:11,EDGE:12,SR:13,SG:14,SB:15,SA:16,SW:17,TX:18,TY:19,TZ:20,VX:21,VY:22,VZ:23,VW:24,AR:25,AG:26,AB:27,DR:3,DG:4,DB:5,DA:6,SPR:28,SPG:29,SPB:30,SHINE:31,ER:32,EG:33,EB:34,BEEN_LIT:35,VERTEX_FIELD_COUNT:36,P2D:1,JAVA2D:1,WEBGL:2,P3D:2,OPENGL:2,PDF:0,DXF:0,OTHER:0,WINDOWS:1,MAXOSX:2,LINUX:3,EPSILON:1e-4,MAX_FLOAT:3.4028235e38,MIN_FLOAT:-3.4028235e38,MAX_INT:2147483647,MIN_INT:-2147483648,PI:n.PI,TWO_PI:2*n.PI,HALF_PI:n.PI/2,THIRD_PI:n.PI/3,QUARTER_PI:n.PI/4,DEG_TO_RAD:n.PI/180,RAD_TO_DEG:180/n.PI,WHITESPACE:" 	\n\r\f ",RGB:1,ARGB:2,HSB:3,ALPHA:4,CMYK:5,TIFF:0,TARGA:1,JPEG:2,GIF:3,BLUR:11,GRAY:12,INVERT:13,OPAQUE:14,POSTERIZE:15,THRESHOLD:16,ERODE:17,DILATE:18,REPLACE:0,BLEND:1<<0,ADD:1<<1,SUBTRACT:1<<2,LIGHTEST:1<<3,DARKEST:1<<4,DIFFERENCE:1<<5,EXCLUSION:1<<6,MULTIPLY:1<<7,SCREEN:1<<8,OVERLAY:1<<9,HARD_LIGHT:1<<10,SOFT_LIGHT:1<<11,DODGE:1<<12,BURN:1<<13,ALPHA_MASK:4278190080,RED_MASK:16711680,GREEN_MASK:65280,BLUE_MASK:255,CUSTOM:0,ORTHOGRAPHIC:2,PERSPECTIVE:3,POINT:2,POINTS:2,LINE:4,LINES:4,TRIANGLE:8,TRIANGLES:9,TRIANGLE_STRIP:10,TRIANGLE_FAN:11,QUAD:16,QUADS:16,QUAD_STRIP:17,POLYGON:20,PATH:21,RECT:30,ELLIPSE:31,ARC:32,SPHERE:40,BOX:41,GROUP:0,PRIMITIVE:1,GEOMETRY:3,VERTEX:0,BEZIER_VERTEX:1,CURVE_VERTEX:2,BREAK:3,CLOSESHAPE:4,OPEN:1,CLOSE:2,CORNER:0,CORNERS:1,RADIUS:2,CENTER_RADIUS:2,CENTER:3,DIAMETER:3,CENTER_DIAMETER:3,BASELINE:0,TOP:101,BOTTOM:102,NORMAL:1,NORMALIZED:1,IMAGE:2,MODEL:4,SHAPE:5,SQUARE:"butt",ROUND:"round",PROJECT:"square",MITER:"miter",BEVEL:"bevel",AMBIENT:0,DIRECTIONAL:1,SPOT:3,BACKSPACE:8,TAB:9,ENTER:10,RETURN:13,ESC:27,DELETE:127,CODED:65535,SHIFT:16,CONTROL:17,ALT:18,CAPSLK:20,PGUP:33,PGDN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLK:144,META:157,INSERT:155,ARROW:"default",CROSS:"crosshair",HAND:"pointer",MOVE:"move",TEXT:"text",WAIT:"wait",NOCURSOR:"url('data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=='), auto",DISABLE_OPENGL_2X_SMOOTH:1,ENABLE_OPENGL_2X_SMOOTH:-1,ENABLE_OPENGL_4X_SMOOTH:2,ENABLE_NATIVE_FONTS:3,DISABLE_DEPTH_TEST:4,ENABLE_DEPTH_TEST:-4,ENABLE_DEPTH_SORT:5,DISABLE_DEPTH_SORT:-5,DISABLE_OPENGL_ERROR_REPORT:6,ENABLE_OPENGL_ERROR_REPORT:-6,ENABLE_ACCURATE_TEXTURES:7,DISABLE_ACCURATE_TEXTURES:-7,HINT_COUNT:10,SINCOS_LENGTH:720,PRECISIONB:15,PRECISIONF:1<<15,PREC_MAXVAL:(1<<15)-1,PREC_ALPHA_SHIFT:24-15,PREC_RED_SHIFT:16-15,NORMAL_MODE_AUTO:0,NORMAL_MODE_SHAPE:1,NORMAL_MODE_VERTEX:2,MAX_LIGHTS:8}
function d(e){if(typeof e==="string"){var t=0
for(var i=0;i<e.length;++i){t=t*31+e.charCodeAt(i)&4294967295}return t}if(typeof e!=="object"){return e&4294967295}if(e.hashCode instanceof Function){return e.hashCode()}if(e.$id===r){e.$id=n.floor(n.random()*65536)-32768<<16|n.floor(n.random()*65536)}return e.$id}function m(e,t){if(e===null||t===null){return e===null&&t===null}if(typeof e==="string"){return e===t}if(typeof e!=="object"){return e===t}if(e.equals instanceof Function){return e.equals(t)}return e===t}var g=function(e){if(e.iterator instanceof Function){return e.iterator()}if(e instanceof Array){var t=-1
this.hasNext=function(){return++t<e.length}
this.next=function(){return e[t]}}else{throw"Unable to iterate: "+e}}
var v=function(){function e(e){var t=0
this.hasNext=function(){return t<e.length}
this.next=function(){return e[t++]}
this.remove=function(){e.splice(t,1)}}function t(){var n
if(arguments.length===0){n=[]}else if(arguments.length>0&&typeof arguments[0]!=="number"){n=arguments[0].toArray()}else{n=[]
n.length=0|arguments[0]}this.get=function(e){return n[e]}
this.contains=function(e){return this.indexOf(e)>-1}
this.indexOf=function(e){for(var t=0,r=n.length;t<r;++t){if(m(e,n[t])){return t}}return-1}
this.add=function(){if(arguments.length===1){n.push(arguments[0])}else if(arguments.length===2){var e=arguments[0]
if(typeof e==="number"){if(e>=0&&e<=n.length){n.splice(e,0,arguments[1])}else{throw e+" is not a valid index"}}else{throw typeof e+" is not a number"}}else{throw"Please use the proper number of parameters."}}
this.addAll=function(e,t){var r
if(typeof e==="number"){if(e<0||e>n.length){throw"Index out of bounds for addAll: "+e+" greater or equal than "+n.length}r=new g(t)
while(r.hasNext()){n.splice(e++,0,r.next())}}else{r=new g(e)
while(r.hasNext()){n.push(r.next())}}}
this.set=function(){if(arguments.length===2){var e=arguments[0]
if(typeof e==="number"){if(e>=0&&e<n.length){n.splice(e,1,arguments[1])}else{throw e+" is not a valid index."}}else{throw typeof e+" is not a number"}}else{throw"Please use the proper number of parameters."}}
this.size=function(){return n.length}
this.clear=function(){n.length=0}
this.remove=function(e){if(typeof e==="number"){return n.splice(e,1)[0]}e=this.indexOf(e)
if(e>-1){n.splice(e,1)
return true}return false}
this.isEmpty=function(){return!n.length}
this.clone=function(){return new t(this)}
this.toArray=function(){return n.slice(0)}
this.iterator=function(){return new e(n)}}return t}()
var y=function(){function e(){if(arguments.length===1&&arguments[0]instanceof e){return arguments[0].clone()}var t=arguments.length>0?arguments[0]:16
var n=arguments.length>1?arguments[1]:.75
var i=[]
i.length=t
var a=0
var s=this
function o(e){var t=d(e)%i.length
return t<0?i.length+t:t}function l(){if(a<=n*i.length){return}var e=[]
for(var t=0;t<i.length;++t){if(i[t]!==r){e=e.concat(i[t])}}var s=i.length*2
i=[]
i.length=s
for(var l=0;l<e.length;++l){var u=o(e[l].key)
var f=i[u]
if(f===r){i[u]=f=[]}f.push(e[l])}}function u(e,t){var n=0
var a=-1
var s=false
function o(){while(!s){++a
if(n>=i.length){s=true}else if(i[n]===r||a>=i[n].length){a=-1;++n}else{return}}}this.hasNext=function(){return!s}
this.next=function(){var t=e(i[n][a])
o()
return t}
this.remove=function(){t(this.next());--a}
o()}function f(e,t,n){this.clear=function(){s.clear()}
this.contains=function(e){return t(e)}
this.containsAll=function(e){var t=e.iterator()
while(t.hasNext()){if(!this.contains(t.next())){return false}}return true}
this.isEmpty=function(){return s.isEmpty()}
this.iterator=function(){return new u(e,n)}
this.remove=function(e){if(this.contains(e)){n(e)
return true}return false}
this.removeAll=function(e){var t=e.iterator()
var r=false
while(t.hasNext()){var i=t.next()
if(this.contains(i)){n(i)
r=true}}return true}
this.retainAll=function(e){var t=this.iterator()
var r=[]
while(t.hasNext()){var i=t.next()
if(!e.contains(i)){r.push(i)}}for(var a=0;a<r.length;++a){n(r[a])}return r.length>0}
this.size=function(){return s.size()}
this.toArray=function(){var e=[]
var t=this.iterator()
while(t.hasNext()){e.push(t.next())}return e}}function c(e){this._isIn=function(t){return t===s&&e.removed===r}
this.equals=function(t){return m(e.key,t.getKey())}
this.getKey=function(){return e.key}
this.getValue=function(){return e.value}
this.hashCode=function(t){return d(e.key)}
this.setValue=function(t){var n=e.value
e.value=t
return n}}this.clear=function(){a=0
i=[]
i.length=t}
this.clone=function(){var t=new e
t.putAll(this)
return t}
this.containsKey=function(e){var t=o(e)
var n=i[t]
if(n===r){return false}for(var a=0;a<n.length;++a){if(m(n[a].key,e)){return true}}return false}
this.containsValue=function(e){for(var t=0;t<i.length;++t){var n=i[t]
if(n===r){continue}for(var a=0;a<n.length;++a){if(m(n[a].value,e)){return true}}}return false}
this.entrySet=function(){return new f(function(e){return new c(e)},function(e){return e instanceof c&&e._isIn(s)},function(e){return s.remove(e.getKey())})}
this.get=function(e){var t=o(e)
var n=i[t]
if(n===r){return null}for(var a=0;a<n.length;++a){if(m(n[a].key,e)){return n[a].value}}return null}
this.isEmpty=function(){return a===0}
this.keySet=function(){return new f(function(e){return e.key},function(e){return s.containsKey(e)},function(e){return s.remove(e)})}
this.values=function(){return new f(function(e){return e.value},function(e){return s.containsValue(e)},function(e){return s.removeByValue(e)})}
this.put=function(e,t){var n=o(e)
var s=i[n]
if(s===r){++a
i[n]=[{key:e,value:t}]
l()
return null}for(var u=0;u<s.length;++u){if(m(s[u].key,e)){var f=s[u].value
s[u].value=t
return f}}++a
s.push({key:e,value:t})
l()
return null}
this.putAll=function(e){var t=e.entrySet().iterator()
while(t.hasNext()){var n=t.next()
this.put(n.getKey(),n.getValue())}}
this.remove=function(e){var t=o(e)
var n=i[t]
if(n===r){return null}for(var s=0;s<n.length;++s){if(m(n[s].key,e)){--a
var l=n[s].value
n[s].removed=true
if(n.length>1){n.splice(s,1)}else{i[t]=r}return l}}return null}
this.removeByValue=function(e){var t,n,r,a
for(t in i){if(i.hasOwnProperty(t)){for(n=0,r=i[t].length;n<r;n++){a=i[t][n]
if(a.value===e){i[t].splice(n,1)
return true}}}}return false}
this.size=function(){return a}}return e}()
function b(){}b.prototype=p
var x=new b
x.ArrayList=v
x.HashMap=y
x.ObjectIterator=g
x.PConstants=p
x.defineProperty=function(e,t,n){if("defineProperty"in Object){Object.defineProperty(e,t,n)}else{if(n.hasOwnProperty("get")){e.__defineGetter__(t,n.get)}if(n.hasOwnProperty("set")){e.__defineSetter__(t,n.set)}}}
function k(e,t){function n(n){x.defineProperty(e,n,{get:function(){return t[n]},set:function(e){t[n]=e},enumerable:true})}var r=[]
for(var i in t){if(typeof t[i]==="function"){if(!e.hasOwnProperty(i)){e[i]=t[i]}}else if(i.charAt(0)!=="$"&&!(i in e)){r.push(i)}}while(r.length>0){n(r.shift())}}x.extendClassChain=function(e){var t=[e]
for(var n=e.$upcast;n;n=n.$upcast){k(n,e)
t.push(n)
e=n}while(t.length>0){t.pop().$self=e}}
x.extendStaticMembers=function(e,t){k(e,t)}
x.extendInterfaceMembers=function(e,t){k(e,t)}
x.addMethod=function(e,t,n,r){if(e[t]){var i=n.length,a=e[t]
e[t]=function(){if(arguments.length===i){return n.apply(this,arguments)}return a.apply(this,arguments)}}else{e[t]=n}}
x.createJavaArray=function(e,t){var n=null
if(typeof t[0]==="number"){var r=0|t[0]
if(t.length<=1){n=[]
n.length=r
for(var i=0;i<r;++i){n[i]=0}}else{n=[]
var a=t.slice(1)
for(var s=0;s<r;++s){n.push(x.createJavaArray(e,a))}}}return n}
var E={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgrey:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370d8",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#d87093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};(function(e){var t=("open() createOutput() createInput() BufferedReader selectFolder() "+"dataPath() createWriter() selectOutput() beginRecord() "+"saveStream() endRecord() selectInput() saveBytes() createReader() "+"beginRaw() endRaw() PrintWriter delay()").split(" "),n=t.length,r,i
function a(e){return function(){throw"Processing.js does not support "+e+"."}}while(n--){r=t[n]
i=r.replace("()","")
e[i]=a(r)}})(x)
x.defineProperty(x,"screenWidth",{get:function(){return e.innerWidth}})
x.defineProperty(x,"screenHeight",{get:function(){return e.innerHeight}})
var w=[]
var S={}
var A=function(e){w.splice(S[e],1)
delete S[e]}
var _=function(e){if(e.externals.canvas.id===r||!e.externals.canvas.id.length){e.externals.canvas.id="__processing"+w.length}S[e.externals.canvas.id]=w.length
w.push(e)}
function T(e){var r=250,a=e.size/r,s=t.createElement("canvas")
s.width=2*r
s.height=2*r
s.style.opacity=0
var o=e.getCSSDefinition(r+"px","normal"),l=s.getContext("2d")
l.font=o
e.context2d=l
var u="dbflkhyjqpg"
s.width=l.measureText(u).width
l.font=o
var f=t.createElement("div")
f.style.position="absolute"
f.style.opacity=0
f.style.fontFamily='"'+e.name+'"'
f.style.fontSize=r+"px"
f.innerHTML=u+"<br/>"+u
t.body.appendChild(f)
var c=s.width,h=s.height,p=h/2
l.fillStyle="white"
l.fillRect(0,0,c,h)
l.fillStyle="black"
l.fillText(u,0,p)
var d=l.getImageData(0,0,c,h).data
var m=0,g=c*4,v=d.length
while(++m<v&&d[m]===255){i()}var y=n.round(m/g)
m=v-1
while(--m>0&&d[m]===255){i()}var b=n.round(m/g)
e.ascent=a*(p-y)
e.descent=a*(b-p)
if(t.defaultView.getComputedStyle){var x=t.defaultView.getComputedStyle(f,null).getPropertyValue("height")
x=a*x.replace("px","")
if(x>=e.size*2){e.leading=n.round(x/2)}}t.body.removeChild(f)}function C(e,t){if(e===r){e=""}this.name=e
if(t===r){t=0}this.size=t
this.glyph=false
this.ascent=0
this.descent=0
this.leading=1.2*t
var n=e.indexOf(" Italic Bold")
if(n!==-1){e=e.substring(0,n)}this.style="normal"
var i=e.indexOf(" Italic")
if(i!==-1){e=e.substring(0,i)
this.style="italic"}this.weight="normal"
var a=e.indexOf(" Bold")
if(a!==-1){e=e.substring(0,a)
this.weight="bold"}this.family="sans-serif"
if(e!==r){switch(e){case"sans-serif":case"serif":case"monospace":case"fantasy":case"cursive":this.family=e
break
default:this.family='"'+e+'", sans-serif'
break}}this.context2d=null
T(this)
this.css=this.getCSSDefinition()
this.context2d.font=this.css}C.prototype.getCSSDefinition=function(e,t){if(e===r){e=this.size+"px"}if(t===r){t=this.leading+"px"}var n=[this.style,"normal",this.weight,e+"/"+t,this.family]
return n.join(" ")}
C.prototype.measureTextWidth=function(e){return this.context2d.measureText(e).width}
C.PFontCache={}
C.get=function(e,t){var n=C.PFontCache
var r=e+"/"+t
if(!n[r]){n[r]=new C(e,t)}return n[r]}
C.list=function(){return["sans-serif","serif","monospace","fantasy","cursive"]}
C.preloading={template:{},initialized:false,initialize:function(){var e=function(){var e="#E3KAI2wAgT1MvMg7Eo3VmNtYX7ABi3CxnbHlm"+"7Abw3kaGVhZ7ACs3OGhoZWE7A53CRobXR47AY3"+"AGbG9jYQ7G03Bm1heH7ABC3CBuYW1l7Ae3AgcG"+"9zd7AI3AE#B3AQ2kgTY18PPPUACwAg3ALSRoo3"+"#yld0xg32QAB77#E777773B#E3C#I#Q77773E#"+"Q7777777772CMAIw7AB77732B#M#Q3wAB#g3B#"+"E#E2BB//82BB////w#B7#gAEg3E77x2B32B#E#"+"Q#MTcBAQ32gAe#M#QQJ#E32M#QQJ#I#g32Q77#"
var t=function(e){return"AAAAAAAA".substr(~~e?7-e:6)}
return e.replace(/[#237]/g,t)}
var n=t.createElement("style")
n.setAttribute("type","text/css")
n.innerHTML="@font-face {\n"+'  font-family: "PjsEmptyFont";'+"\n"+"  src: url('data:application/x-font-ttf;base64,"+e()+"')\n"+"       format('truetype');\n"+"}"
t.head.appendChild(n)
var r=t.createElement("span")
r.style.cssText='position: absolute; top: 0; left: 0; opacity: 0; font-family: "PjsEmptyFont", fantasy;'
r.innerHTML="AAAAAAAA"
t.body.appendChild(r)
this.template=r
this.initialized=true},getElementWidth:function(e){return t.defaultView.getComputedStyle(e,"").getPropertyValue("width")},timeAttempted:0,pending:function(e){if(!this.initialized){this.initialize()}var n,r,i=this.getElementWidth(this.template)
for(var a=0;a<this.fontList.length;a++){n=this.fontList[a]
r=this.getElementWidth(n)
if(this.timeAttempted<4e3&&r===i){this.timeAttempted+=e
return true}else{t.body.removeChild(n)
this.fontList.splice(a--,1)
this.timeAttempted=0}}if(this.fontList.length===0){return false}return true},fontList:[],addedList:{},add:function(e){if(!this.initialized){this.initialize()}var n=typeof e==="object"?e.fontFace:e,r=typeof e==="object"?e.url:e
if(this.addedList[n]){return}var i=t.createElement("style")
i.setAttribute("type","text/css")
i.innerHTML="@font-face{\n  font-family: '"+n+"';\n  src:  url('"+r+"');\n}\n"
t.head.appendChild(i)
this.addedList[n]=true
var a=t.createElement("span")
a.style.cssText="position: absolute; top: 0; left: 0; opacity: 0;"
a.style.fontFamily='"'+n+'", "PjsEmptyFont", fantasy'
a.innerHTML="AAAAAAAA"
t.body.appendChild(a)
this.fontList.push(a)}}
x.PFont=C
var L=this.Processing=function(a,o){if(!(this instanceof L)){throw"called Processing constructor as if it were a function: missing 'new'."}var l,m=a===r&&o===r
if(m){l=t.createElement("canvas")}else{l=typeof a==="string"?t.getElementById(a):a}if(!(l instanceof HTMLCanvasElement)){throw"called Processing constructor without passing canvas element reference or id."}function g(e){L.debug("Unimplemented - "+e)}var v=this
v.externals={canvas:l,context:r,sketch:r}
v.name="Processing.js Instance"
v.use3DContext=false
v.focused=false
v.breakShape=false
v.glyphTable={}
v.pmouseX=0
v.pmouseY=0
v.mouseX=0
v.mouseY=0
v.mouseButton=0
v.mouseScroll=0
v.mouseClicked=r
v.mouseDragged=r
v.mouseMoved=r
v.mousePressed=r
v.mouseReleased=r
v.mouseScrolled=r
v.mouseOver=r
v.mouseOut=r
v.touchStart=r
v.touchEnd=r
v.touchMove=r
v.touchCancel=r
v.key=r
v.keyCode=r
v.keyPressed=i
v.keyReleased=i
v.keyTyped=i
v.draw=r
v.setup=r
v.__mousePressed=false
v.__keyPressed=false
v.__frameRate=60
v.mouseIsPressed=false
v.keyIsPressed=false
v.frameCount=0
v.width=100
v.height=100
v.angleMode="radians"
var y=v.PVector=function(){function e(e,t,n){this.x=e||0
this.y=t||0
this.z=n||0}e.fromAngle=function(t,n){if(n===r||n===null){n=new e}n.x=v.cos(t)
n.y=v.sin(t)
return n}
e.random2D=function(t){return e.fromAngle(n.random()*360,t)}
e.random3D=function(t){var i=n.random()*360
var a=n.random()*2-1
var s=n.sqrt(1-a*a)
var o=s*v.cos(i)
var l=s*v.sin(i)
if(t===r||t===null){t=new e(o,l,a)}else{t.set(o,l,a)}return t}
e.dist=function(e,t){return e.dist(t)}
e.dot=function(e,t){return e.dot(t)}
e.cross=function(e,t){return e.cross(t)}
e.sub=function(t,n){return new e(t.x-n.x,t.y-n.y,t.z-n.z)}
e.angleBetween=function(e,t){return v.acos(e.dot(t)/(e.mag()*t.mag()))}
e.lerp=function(t,n,r){var i=new e(t.x,t.y,t.z)
i.lerp(n,r)
return i}
e.prototype={set:function(e,t,n){if(arguments.length===1){this.set(e.x||e[0]||0,e.y||e[1]||0,e.z||e[2]||0)}else{this.x=e
this.y=t
this.z=n}},get:function(){return new e(this.x,this.y,this.z)},mag:function(){var e=this.x,t=this.y,r=this.z
return n.sqrt(e*e+t*t+r*r)},magSq:function(){var e=this.x,t=this.y,n=this.z
return e*e+t*t+n*n},setMag:function(e,t){if(t===r){t=e
this.normalize()
this.mult(t)}else{var n=e
n.normalize()
n.mult(t)
return n}},add:function(e,t,n){if(arguments.length===1){this.x+=e.x
this.y+=e.y
this.z+=e.z}else{this.x+=e
this.y+=t
this.z+=n}},sub:function(e,t,n){if(arguments.length===1){this.x-=e.x
this.y-=e.y
this.z-=e.z}else{this.x-=e
this.y-=t
this.z-=n}},mult:function(e){if(typeof e==="number"){this.x*=e
this.y*=e
this.z*=e}else{this.x*=e.x
this.y*=e.y
this.z*=e.z}},div:function(e){if(typeof e==="number"){this.x/=e
this.y/=e
this.z/=e}else{this.x/=e.x
this.y/=e.y
this.z/=e.z}},rotate:function(e){var t=this.x
var n=v.cos(e)
var r=v.sin(e)
this.x=n*this.x-r*this.y
this.y=r*t+n*this.y},dist:function(e){var t=this.x-e.x,r=this.y-e.y,i=this.z-e.z
return n.sqrt(t*t+r*r+i*i)},dot:function(e,t,n){if(arguments.length===1){return this.x*e.x+this.y*e.y+this.z*e.z}return this.x*e+this.y*t+this.z*n},cross:function(t){var n=this.x,r=this.y,i=this.z
return new e(r*t.z-t.y*i,i*t.x-t.z*n,n*t.y-t.x*r)},lerp:function(e,t,n,r){var i=function(e,t,n){return e+(t-e)*n}
var a,s
if(arguments.length===2){r=t
a=e.x
s=e.y
n=e.z}else{a=e
s=t}this.x=i(this.x,a,r)
this.y=i(this.y,s,r)
this.z=i(this.z,n,r)},normalize:function(){var e=this.mag()
if(e>0){this.div(e)}},limit:function(e){if(this.mag()>e){this.normalize()
this.mult(e)}},heading:function(){return-v.atan2(-this.y,this.x)},heading2D:function(){return this.heading()},toString:function(){return"["+this.x+", "+this.y+", "+this.z+"]"},array:function(){return[this.x,this.y,this.z]}}
function t(e){return function(t,n){var r=t.get()
r[e](n)
return r}}for(var i in e.prototype){if(e.prototype.hasOwnProperty(i)&&!e.hasOwnProperty(i)&&i!=="toString"){e[i]=t(i)}}return e}()
var b,k,w,S=true,T=true,I=[1,1,1,1],P=4294967295,R=true,O=true,M=[0,0,0,1],N=4278190080,D=true,W=1,F=false,G=false,B=true,V=0,U=p.CORNER,z=p.CENTER,H=0,j=0,K=0,X=p.NORMAL_MODE_AUTO,q=60,Y=1e3/q,Z=p.ARROW,J=l.style.cursor,Q=p.POLYGON,et=0,tt=[],nt=0,rt=20,it=false,at=-3355444,st=20,ot=255,lt=255,ut=255,ft=255,ct=false,ht=false,pt=0,dt=0,mt=p.RGB,gt=null,vt=null,yt=false,bt=Date.now(),xt=bt,kt=0,Et,wt,St,At,_t,Tt,Ct,Lt={attributes:{},locations:{}},It,Pt,Rt,Ot,Mt,Nt,Dt,Wt,Ft,Gt,Bt,Vt,Ut,$t,zt,Ht,jt,Kt={width:0,height:0},Xt=p.IMAGE,qt=false,Yt,Zt,Jt,Qt=p.LEFT,en=p.BASELINE,tn=p.MODEL,nn="Arial",rn=12,an=9,sn=2,on=14,ln=C.get(nn,rn),un,fn=null,cn=false,hn,pn=1e3,dn=[],mn=null,gn=[p.SHIFT,p.CONTROL,p.ALT,p.CAPSLK,p.PGUP,p.PGDN,p.END,p.HOME,p.LEFT,p.UP,p.RIGHT,p.DOWN,p.NUMLK,p.INSERT,p.F1,p.F2,p.F3,p.F4,p.F5,p.F6,p.F7,p.F8,p.F9,p.F10,p.F11,p.F12,p.META]
var vn,yn,bn,xn
if(t.defaultView&&t.defaultView.getComputedStyle){vn=parseInt(t.defaultView.getComputedStyle(l,null)["paddingLeft"],10)||0
yn=parseInt(t.defaultView.getComputedStyle(l,null)["paddingTop"],10)||0
bn=parseInt(t.defaultView.getComputedStyle(l,null)["borderLeftWidth"],10)||0
xn=parseInt(t.defaultView.getComputedStyle(l,null)["borderTopWidth"],10)||0}var kn=0
var En=0,wn=0,Sn=[],An=[],_n=[],Tn=new u(p.SINCOS_LENGTH),Cn=new u(p.SINCOS_LENGTH),Ln,In
var Pn,Rn,On,Mn,Nn,Dn,Wn,Fn,Gn=false,Bn=false,Vn=60*(n.PI/180),Un=v.width/2,$n=v.height/2,zn=$n/n.tan(Vn/2),Hn=zn/10,jn=zn*10,Kn=v.width/v.height
var Xn=[],qn=[],Yn=0,Zn=false,Jn=false,Qn=true
var er=p.CORNER
var tr=[]
var nr=new u([.5,.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5,.5,.5,.5,.5,.5,-.5,.5,.5,.5,.5,-.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,-.5,.5,-.5,-.5,.5,-.5,.5,-.5,-.5,.5,-.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,.5,.5,-.5,.5,.5,-.5,.5,-.5,-.5,-.5,-.5,.5,.5,.5,.5,.5,-.5,-.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,.5,.5,.5])
var rr=new u([.5,.5,.5,.5,-.5,.5,.5,.5,-.5,.5,-.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,.5,.5,-.5,-.5,.5,.5,.5,.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5,.5,.5,.5,.5,.5,-.5,.5,.5,-.5,-.5,.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,-.5,.5,-.5,-.5,.5,.5,-.5,.5])
var ir=new u([0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,-1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0])
var ar=new u([0,0,0,0,1,0,1,1,0,1,0,0])
var sr=new u([0,0,1,0,0,1,0,0,1,0,0,1])
var or="varying vec4 frontColor;"+"attribute vec3 aVertex;"+"attribute vec4 aColor;"+"uniform mat4 uView;"+"uniform mat4 uProjection;"+"uniform float pointSize;"+"void main(void) {"+"  frontColor = aColor;"+"  gl_PointSize = pointSize;"+"  gl_Position = uProjection * uView * vec4(aVertex, 1.0);"+"}"
var lr="#ifdef GL_ES\n"+"precision highp float;\n"+"#endif\n"+"varying vec4 frontColor;"+"void main(void){"+"  gl_FragColor = frontColor;"+"}"
var ur="varying vec4 frontColor;"+"attribute vec3 Vertex;"+"attribute vec2 aTextureCoord;"+"uniform vec4 color;"+"uniform mat4 model;"+"uniform mat4 view;"+"uniform mat4 projection;"+"uniform float pointSize;"+"varying vec2 vTextureCoord;"+"void main(void) {"+"  gl_PointSize = pointSize;"+"  frontColor = color;"+"  gl_Position = projection * view * model * vec4(Vertex, 1.0);"+"  vTextureCoord = aTextureCoord;"+"}"
var fr="#ifdef GL_ES\n"+"precision highp float;\n"+"#endif\n"+"varying vec4 frontColor;"+"varying vec2 vTextureCoord;"+"uniform sampler2D uSampler;"+"uniform int picktype;"+"void main(void){"+"  if(picktype == 0){"+"    gl_FragColor = frontColor;"+"  }"+"  else if(picktype == 1){"+"    float alpha = texture2D(uSampler, vTextureCoord).a;"+"    gl_FragColor = vec4(frontColor.rgb*alpha, alpha);\n"+"  }"+"}"
var cr=/Windows/.test(navigator.userAgent)
var hr="varying vec4 frontColor;"+"attribute vec3 Vertex;"+"attribute vec3 Normal;"+"attribute vec4 aColor;"+"attribute vec2 aTexture;"+"varying   vec2 vTexture;"+"uniform vec4 color;"+"uniform bool usingMat;"+"uniform vec3 specular;"+"uniform vec3 mat_emissive;"+"uniform vec3 mat_ambient;"+"uniform vec3 mat_specular;"+"uniform float shininess;"+"uniform mat4 model;"+"uniform mat4 view;"+"uniform mat4 projection;"+"uniform mat4 normalTransform;"+"uniform int lightCount;"+"uniform vec3 falloff;"+"struct Light {"+"  int type;"+"  vec3 color;"+"  vec3 position;"+"  vec3 direction;"+"  float angle;"+"  vec3 halfVector;"+"  float concentration;"+"};"+"uniform Light lights0;"+"uniform Light lights1;"+"uniform Light lights2;"+"uniform Light lights3;"+"uniform Light lights4;"+"uniform Light lights5;"+"uniform Light lights6;"+"uniform Light lights7;"+"Light getLight(int index){"+"  if(index == 0) return lights0;"+"  if(index == 1) return lights1;"+"  if(index == 2) return lights2;"+"  if(index == 3) return lights3;"+"  if(index == 4) return lights4;"+"  if(index == 5) return lights5;"+"  if(index == 6) return lights6;"+"  return lights7;"+"}"+"void AmbientLight( inout vec3 totalAmbient, in vec3 ecPos, in Light light ) {"+"  float d = length( light.position - ecPos );"+"  float attenuation = 1.0 / ( falloff[0] + ( falloff[1] * d ) + ( falloff[2] * d * d ));"+"  totalAmbient += light.color * attenuation;"+"}"+"void DirectionalLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {"+"  float powerfactor = 0.0;"+"  float nDotVP = max(0.0, dot( vertNormal, normalize(-light.position) ));"+"  float nDotVH = max(0.0, dot( vertNormal, normalize(-light.position-normalize(ecPos) )));"+"  if( nDotVP != 0.0 ){"+"    powerfactor = pow( nDotVH, shininess );"+"  }"+"  col += light.color * nDotVP;"+"  spec += specular * powerfactor;"+"}"+"void PointLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {"+"  float powerfactor;"+"   vec3 VP = light.position - ecPos;"+"  float d = length( VP ); "+"  VP = normalize( VP );"+"  float attenuation = 1.0 / ( falloff[0] + ( falloff[1] * d ) + ( falloff[2] * d * d ));"+"  float nDotVP = max( 0.0, dot( vertNormal, VP ));"+"  vec3 halfVector = normalize( VP - normalize(ecPos) );"+"  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));"+"  if( nDotVP == 0.0) {"+"    powerfactor = 0.0;"+"  }"+"  else{"+"    powerfactor = pow( nDotHV, shininess );"+"  }"+"  spec += specular * powerfactor * attenuation;"+"  col += light.color * nDotVP * attenuation;"+"}"+"void SpotLight( inout vec3 col, inout vec3 spec, in vec3 vertNormal, in vec3 ecPos, in Light light ) {"+"  float spotAttenuation;"+"  float powerfactor;"+"  vec3 VP = light.position - ecPos; "+"  vec3 ldir = normalize( -light.direction );"+"  float d = length( VP );"+"  VP = normalize( VP );"+"  float attenuation = 1.0 / ( falloff[0] + ( falloff[1] * d ) + ( falloff[2] * d * d ) );"+"  float spotDot = dot( VP, ldir );"+(cr?"  spotAttenuation = 1.0; ":"  if( spotDot > cos( light.angle ) ) {"+"    spotAttenuation = pow( spotDot, light.concentration );"+"  }"+"  else{"+"    spotAttenuation = 0.0;"+"  }"+"  attenuation *= spotAttenuation;"+"")+"  float nDotVP = max( 0.0, dot( vertNormal, VP ));"+"  vec3 halfVector = normalize( VP - normalize(ecPos) );"+"  float nDotHV = max( 0.0, dot( vertNormal, halfVector ));"+"  if( nDotVP == 0.0 ) {"+"    powerfactor = 0.0;"+"  }"+"  else {"+"    powerfactor = pow( nDotHV, shininess );"+"  }"+"  spec += specular * powerfactor * attenuation;"+"  col += light.color * nDotVP * attenuation;"+"}"+"void main(void) {"+"  vec3 finalAmbient = vec3( 0.0, 0.0, 0.0 );"+"  vec3 finalDiffuse = vec3( 0.0, 0.0, 0.0 );"+"  vec3 finalSpecular = vec3( 0.0, 0.0, 0.0 );"+"  vec4 col = color;"+"  if(color[0] == -1.0){"+"    col = aColor;"+"  }"+"  vec3 norm = normalize(vec3( normalTransform * vec4( Normal, 0.0 ) ));"+"  vec4 ecPos4 = view * model * vec4(Vertex,1.0);"+"  vec3 ecPos = (vec3(ecPos4))/ecPos4.w;"+"  if( lightCount == 0 ) {"+"    frontColor = col + vec4(mat_specular,1.0);"+"  }"+"  else {"+"    for( int i = 0; i < 8; i++ ) {"+"      Light l = getLight(i);"+"      if( i >= lightCount ){"+"        break;"+"      }"+"      if( l.type == 0 ) {"+"        AmbientLight( finalAmbient, ecPos, l );"+"      }"+"      else if( l.type == 1 ) {"+"        DirectionalLight( finalDiffuse, finalSpecular, norm, ecPos, l );"+"      }"+"      else if( l.type == 2 ) {"+"        PointLight( finalDiffuse, finalSpecular, norm, ecPos, l );"+"      }"+"      else {"+"        SpotLight( finalDiffuse, finalSpecular, norm, ecPos, l );"+"      }"+"    }"+"   if( usingMat == false ) {"+"     frontColor = vec4("+"       vec3(col) * finalAmbient +"+"       vec3(col) * finalDiffuse +"+"       vec3(col) * finalSpecular,"+"       col[3] );"+"   }"+"   else{"+"     frontColor = vec4( "+"       mat_emissive + "+"       (vec3(col) * mat_ambient * finalAmbient) + "+"       (vec3(col) * finalDiffuse) + "+"       (mat_specular * finalSpecular), "+"       col[3] );"+"    }"+"  }"+"  vTexture.xy = aTexture.xy;"+"  gl_Position = projection * view * model * vec4( Vertex, 1.0 );"+"}"
var pr="#ifdef GL_ES\n"+"precision highp float;\n"+"#endif\n"+"varying vec4 frontColor;"+"uniform sampler2D sampler;"+"uniform bool usingTexture;"+"varying vec2 vTexture;"+"void main(void){"+"  if(usingTexture){"+"    gl_FragColor = vec4(texture2D(sampler, vTexture.xy)) * frontColor;"+"  }"+"  else{"+"    gl_FragColor = frontColor;"+"  }"+"}"
function dr(e,t,n,i){var a=Lt.locations[e]
if(a===r){a=b.getUniformLocation(t,n)
Lt.locations[e]=a}if(a!==null){if(i.length===4){b.uniform4fv(a,i)}else if(i.length===3){b.uniform3fv(a,i)}else if(i.length===2){b.uniform2fv(a,i)}else{b.uniform1f(a,i)}}}function mr(e,t,n,i){var a=Lt.locations[e]
if(a===r){a=b.getUniformLocation(t,n)
Lt.locations[e]=a}if(a!==null){if(i.length===4){b.uniform4iv(a,i)}else if(i.length===3){b.uniform3iv(a,i)}else if(i.length===2){b.uniform2iv(a,i)}else{b.uniform1i(a,i)}}}function gr(e,t,n,i,a){var s=Lt.locations[e]
if(s===r){s=b.getUniformLocation(t,n)
Lt.locations[e]=s}if(s!==-1){if(a.length===16){b.uniformMatrix4fv(s,i,a)}else if(a.length===9){b.uniformMatrix3fv(s,i,a)}else{b.uniformMatrix2fv(s,i,a)}}}function vr(e,t,n,i,a){var s=Lt.attributes[e]
if(s===r){s=b.getAttribLocation(t,n)
Lt.attributes[e]=s}if(s!==-1){b.bindBuffer(b.ARRAY_BUFFER,a)
b.vertexAttribPointer(s,i,b.FLOAT,false,0,0)
b.enableVertexAttribArray(s)}}function yr(e,t,n){var i=Lt.attributes[e]
if(i===r){i=b.getAttribLocation(t,n)
Lt.attributes[e]=i}if(i!==-1){b.disableVertexAttribArray(i)}}var br=function(e,t,n){var r=e.createShader(e.VERTEX_SHADER)
e.shaderSource(r,t)
e.compileShader(r)
if(!e.getShaderParameter(r,e.COMPILE_STATUS)){throw e.getShaderInfoLog(r)}var i=e.createShader(e.FRAGMENT_SHADER)
e.shaderSource(i,n)
e.compileShader(i)
if(!e.getShaderParameter(i,e.COMPILE_STATUS)){throw e.getShaderInfoLog(i)}var a=e.createProgram()
e.attachShader(a,r)
e.attachShader(a,i)
e.linkProgram(a)
if(!e.getProgramParameter(a,e.LINK_STATUS)){throw"Error linking shaders."}return a}
var xr=function(e,t,n,r,i){return{x:e,y:t,w:n,h:r}}
var kr=xr
var Er=function(e,t,n,r,i){return{x:e,y:t,w:i?n:n-e,h:i?r:r-t}}
var wr=function(e,t,n,r,i){return{x:e-n/2,y:t-r/2,w:n,h:r}}
var Sr=function(){}
var Ar=function(){}
var _r=function(){}
var Tr=function(){}
Ar.prototype=new Sr
Ar.prototype.constructor=Ar
_r.prototype=new Sr
_r.prototype.constructor=_r
Tr.prototype=new Sr
Tr.prototype.constructor=Tr
Sr.prototype.a3DOnlyFunction=i
var Cr={}
var Lr=v.Character=function(e){if(typeof e==="string"&&e.length===1){this.code=e.charCodeAt(0)}else if(typeof e==="number"){this.code=e}else if(e instanceof Lr){this.code=e}else{this.code=NaN}return Cr[this.code]===r?Cr[this.code]=this:Cr[this.code]}
Lr.prototype.toString=function(){return String.fromCharCode(this.code)}
Lr.prototype.valueOf=function(){return this.code}
var Ir=v.PShape=function(e){this.family=e||p.GROUP
this.visible=true
this.style=true
this.children=[]
this.nameTable=[]
this.params=[]
this.name=""
this.image=null
this.matrix=null
this.kind=null
this.close=null
this.width=null
this.height=null
this.parent=null}
Ir.prototype={isVisible:function(){return this.visible},setVisible:function(e){this.visible=e},disableStyle:function(){this.style=false
for(var e=0,t=this.children.length;e<t;e++){this.children[e].disableStyle()}},enableStyle:function(){this.style=true
for(var e=0,t=this.children.length;e<t;e++){this.children[e].enableStyle()}},getFamily:function(){return this.family},getWidth:function(){return this.width},getHeight:function(){return this.height},setName:function(e){this.name=e},getName:function(){return this.name},draw:function(){if(this.visible){this.pre()
this.drawImpl()
this.post()}},drawImpl:function(){if(this.family===p.GROUP){this.drawGroup()}else if(this.family===p.PRIMITIVE){this.drawPrimitive()}else if(this.family===p.GEOMETRY){this.drawGeometry()}else if(this.family===p.PATH){this.drawPath()}},drawPath:function(){var e,t
if(this.vertices.length===0){return}v.beginShape()
if(this.vertexCodes.length===0){if(this.vertices[0].length===2){for(e=0,t=this.vertices.length;e<t;e++){v.vertex(this.vertices[e][0],this.vertices[e][1])}}else{for(e=0,t=this.vertices.length;e<t;e++){v.vertex(this.vertices[e][0],this.vertices[e][1],this.vertices[e][2])}}}else{var n=0
if(this.vertices[0].length===2){for(e=0,t=this.vertexCodes.length;e<t;e++){if(this.vertexCodes[e]===p.VERTEX){v.vertex(this.vertices[n][0],this.vertices[n][1])
if(this.vertices[n]["moveTo"]===true){Xn[Xn.length-1]["moveTo"]=true}else if(this.vertices[n]["moveTo"]===false){Xn[Xn.length-1]["moveTo"]=false}v.breakShape=false
n++}else if(this.vertexCodes[e]===p.BEZIER_VERTEX){v.bezierVertex(this.vertices[n+0][0],this.vertices[n+0][1],this.vertices[n+1][0],this.vertices[n+1][1],this.vertices[n+2][0],this.vertices[n+2][1])
n+=3}else if(this.vertexCodes[e]===p.CURVE_VERTEX){v.curveVertex(this.vertices[n][0],this.vertices[n][1])
n++}else if(this.vertexCodes[e]===p.BREAK){v.breakShape=true}}}else{for(e=0,t=this.vertexCodes.length;e<t;e++){if(this.vertexCodes[e]===p.VERTEX){v.vertex(this.vertices[n][0],this.vertices[n][1],this.vertices[n][2])
if(this.vertices[n]["moveTo"]===true){Xn[Xn.length-1]["moveTo"]=true}else if(this.vertices[n]["moveTo"]===false){Xn[Xn.length-1]["moveTo"]=false}v.breakShape=false}else if(this.vertexCodes[e]===p.BEZIER_VERTEX){v.bezierVertex(this.vertices[n+0][0],this.vertices[n+0][1],this.vertices[n+0][2],this.vertices[n+1][0],this.vertices[n+1][1],this.vertices[n+1][2],this.vertices[n+2][0],this.vertices[n+2][1],this.vertices[n+2][2])
n+=3}else if(this.vertexCodes[e]===p.CURVE_VERTEX){v.curveVertex(this.vertices[n][0],this.vertices[n][1],this.vertices[n][2])
n++}else if(this.vertexCodes[e]===p.BREAK){v.breakShape=true}}}}v.endShape(this.close?p.CLOSE:p.OPEN)},drawGeometry:function(){var e,t
v.beginShape(this.kind)
if(this.style){for(e=0,t=this.vertices.length;e<t;e++){v.vertex(this.vertices[e])}}else{for(e=0,t=this.vertices.length;e<t;e++){var n=this.vertices[e]
if(n[2]===0){v.vertex(n[0],n[1])}else{v.vertex(n[0],n[1],n[2])}}}v.endShape()},drawGroup:function(){for(var e=0,t=this.children.length;e<t;e++){this.children[e].draw()}},drawPrimitive:function(){if(this.kind===p.POINT){v.point(this.params[0],this.params[1])}else if(this.kind===p.LINE){if(this.params.length===4){v.line(this.params[0],this.params[1],this.params[2],this.params[3])}else{v.line(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5])}}else if(this.kind===p.TRIANGLE){v.triangle(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5])}else if(this.kind===p.QUAD){v.quad(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5],this.params[6],this.params[7])}else if(this.kind===p.RECT){if(this.image!==null){v.imageMode(p.CORNER)
v.image(this.image,this.params[0],this.params[1],this.params[2],this.params[3])}else{v.rectMode(p.CORNER)
v.rect(this.params[0],this.params[1],this.params[2],this.params[3])}}else if(this.kind===p.ELLIPSE){v.ellipseMode(p.CORNER)
v.ellipse(this.params[0],this.params[1],this.params[2],this.params[3])}else if(this.kind===p.ARC){v.ellipseMode(p.CORNER)
v.arc(this.params[0],this.params[1],this.params[2],this.params[3],this.params[4],this.params[5])}else if(this.kind===p.BOX){if(this.params.length===1){v.box(this.params[0])}else{v.box(this.params[0],this.params[1],this.params[2])}}else if(this.kind===p.SPHERE){v.sphere(this.params[0])}},pre:function(){if(this.matrix){v.pushMatrix()
b.transform(this.matrix.elements[0],this.matrix.elements[3],this.matrix.elements[1],this.matrix.elements[4],this.matrix.elements[2],this.matrix.elements[5])}if(this.style){v.pushStyle()
this.styles()}},post:function(){if(this.matrix){v.popMatrix()}if(this.style){v.popStyle()}},styles:function(){if(this.stroke){v.stroke(this.strokeColor)
v.strokeWeight(this.strokeWeight)
v.strokeCap(this.strokeCap)
v.strokeJoin(this.strokeJoin)}else{v.noStroke()}if(this.fill){v.fill(this.fillColor)}else{v.noFill()}},getChild:function(e){var t,n
if(typeof e==="number"){return this.children[e]}var r
if(e===""||this.name===e){return this}if(this.nameTable.length>0){for(t=0,n=this.nameTable.length;t<n||r;t++){if(this.nameTable[t].getName===e){r=this.nameTable[t]
break}}if(r){return r}}for(t=0,n=this.children.length;t<n;t++){r=this.children[t].getChild(e)
if(r){return r}}return null},getChildCount:function(){return this.children.length},addChild:function(e){this.children.push(e)
e.parent=this
if(e.getName()!==null){this.addName(e.getName(),e)}},addName:function(e,t){if(this.parent!==null){this.parent.addName(e,t)}else{this.nameTable.push([e,t])}},translate:function(){if(arguments.length===2){this.checkMatrix(2)
this.matrix.translate(arguments[0],arguments[1])}else{this.checkMatrix(3)
this.matrix.translate(arguments[0],arguments[1],0)}},checkMatrix:function(e){if(this.matrix===null){if(e===2){this.matrix=new v.PMatrix2D}else{this.matrix=new v.PMatrix3D}}else if(e===3&&this.matrix instanceof v.PMatrix2D){this.matrix=new v.PMatrix3D}},rotateX:function(e){this.rotate(e,1,0,0)},rotateY:function(e){this.rotate(e,0,1,0)},rotateZ:function(e){this.rotate(e,0,0,1)},rotate:function(){if(arguments.length===1){this.checkMatrix(2)
this.matrix.rotate(arguments[0])}else{this.checkMatrix(3)
this.matrix.rotate(arguments[0],arguments[1],arguments[2],arguments[3])}},scale:function(){if(arguments.length===2){this.checkMatrix(2)
this.matrix.scale(arguments[0],arguments[1])}else if(arguments.length===3){this.checkMatrix(2)
this.matrix.scale(arguments[0],arguments[1],arguments[2])}else{this.checkMatrix(2)
this.matrix.scale(arguments[0])}},resetMatrix:function(){this.checkMatrix(2)
this.matrix.reset()},applyMatrix:function(e){if(arguments.length===1){this.applyMatrix(e.elements[0],e.elements[1],0,e.elements[2],e.elements[3],e.elements[4],0,e.elements[5],0,0,1,0,0,0,0,1)}else if(arguments.length===6){this.checkMatrix(2)
this.matrix.apply(arguments[0],arguments[1],arguments[2],0,arguments[3],arguments[4],arguments[5],0,0,0,1,0,0,0,0,1)}else if(arguments.length===16){this.checkMatrix(3)
this.matrix.apply(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11],arguments[12],arguments[13],arguments[14],arguments[15])}}}
var Pr=v.PShapeSVG=function(){v.PShape.call(this)
if(arguments.length===1){this.element=arguments[0]
this.vertexCodes=[]
this.vertices=[]
this.opacity=1
this.stroke=false
this.strokeColor=p.ALPHA_MASK
this.strokeWeight=1
this.strokeCap=p.SQUARE
this.strokeJoin=p.MITER
this.strokeGradient=null
this.strokeGradientPaint=null
this.strokeName=null
this.strokeOpacity=1
this.fill=true
this.fillColor=p.ALPHA_MASK
this.fillGradient=null
this.fillGradientPaint=null
this.fillName=null
this.fillOpacity=1
if(this.element.getName()!=="svg"){throw"root is not <svg>, it's <"+this.element.getName()+">"}}else if(arguments.length===2){if(typeof arguments[1]==="string"){if(arguments[1].indexOf(".svg")>-1){this.element=new v.XMLElement(null,arguments[1])
this.vertexCodes=[]
this.vertices=[]
this.opacity=1
this.stroke=false
this.strokeColor=p.ALPHA_MASK
this.strokeWeight=1
this.strokeCap=p.SQUARE
this.strokeJoin=p.MITER
this.strokeGradient=""
this.strokeGradientPaint=""
this.strokeName=""
this.strokeOpacity=1
this.fill=true
this.fillColor=p.ALPHA_MASK
this.fillGradient=null
this.fillGradientPaint=null
this.fillOpacity=1}}else{if(arguments[0]){this.element=arguments[1]
this.vertexCodes=arguments[0].vertexCodes.slice()
this.vertices=arguments[0].vertices.slice()
this.stroke=arguments[0].stroke
this.strokeColor=arguments[0].strokeColor
this.strokeWeight=arguments[0].strokeWeight
this.strokeCap=arguments[0].strokeCap
this.strokeJoin=arguments[0].strokeJoin
this.strokeGradient=arguments[0].strokeGradient
this.strokeGradientPaint=arguments[0].strokeGradientPaint
this.strokeName=arguments[0].strokeName
this.fill=arguments[0].fill
this.fillColor=arguments[0].fillColor
this.fillGradient=arguments[0].fillGradient
this.fillGradientPaint=arguments[0].fillGradientPaint
this.fillName=arguments[0].fillName
this.strokeOpacity=arguments[0].strokeOpacity
this.fillOpacity=arguments[0].fillOpacity
this.opacity=arguments[0].opacity}}}this.name=this.element.getStringAttribute("id")
var e=this.element.getStringAttribute("display","inline")
this.visible=e!=="none"
var t=this.element.getAttribute("transform")
if(t){this.matrix=this.parseMatrix(t)}var n=this.element.getStringAttribute("viewBox")
if(n!==null){var r=n.split(" ")
this.width=r[2]
this.height=r[3]}var i=this.element.getStringAttribute("width")
var a=this.element.getStringAttribute("height")
if(i!==null){this.width=this.parseUnitSize(i)
this.height=this.parseUnitSize(a)}else{if(this.width===0||this.height===0){this.width=1
this.height=1
throw"The width and/or height is not "+"readable in the <svg> tag of this file."}}this.parseColors(this.element)
this.parseChildren(this.element)}
Pr.prototype=new Ir
Pr.prototype.parseMatrix=function(){function e(e){var t=[]
e.replace(/\((.*?)\)/,function(){return function(e,n){t=n.replace(/,+/g," ").split(/\s+/)}}())
return t}return function(t){this.checkMatrix(2)
var n=[]
t.replace(/\s*(\w+)\((.*?)\)/g,function(e){n.push(v.trim(e))})
if(n.length===0){return null}for(var r=0,i=n.length;r<i;r++){var a=e(n[r])
if(n[r].indexOf("matrix")!==-1){this.matrix.set(a[0],a[2],a[4],a[1],a[3],a[5])}else if(n[r].indexOf("translate")!==-1){var s=a[0]
var o=a.length===2?a[1]:0
this.matrix.translate(s,o)}else if(n[r].indexOf("scale")!==-1){var l=a[0]
var u=a.length===2?a[1]:a[0]
this.matrix.scale(l,u)}else if(n[r].indexOf("rotate")!==-1){var f=a[0]
if(a.length===1){this.matrix.rotate(v.angleMode==="degrees"?f:v.radians(f))}else if(a.length===3){this.matrix.translate(a[1],a[2])
this.matrix.rotate(v.angleMode==="degrees"?a[0]:v.radians(a[0]))
this.matrix.translate(-a[1],-a[2])}}else if(n[r].indexOf("skewX")!==-1){this.matrix.skewX(parseFloat(a[0]))}else if(n[r].indexOf("skewY")!==-1){this.matrix.skewY(a[0])}}return this.matrix}}()
Pr.prototype.parseChildren=function(e){var t=e.getChildren()
var n=new v.PShape
for(var r=0,i=t.length;r<i;r++){var a=this.parseChild(t[r])
if(a){n.addChild(a)}}this.children.push(n)}
Pr.prototype.getName=function(){return this.name}
Pr.prototype.parseChild=function(e){var t=e.getName()
var n
if(t==="g"){n=new Pr(this,e)}else if(t==="defs"){n=new Pr(this,e)}else if(t==="line"){n=new Pr(this,e)
n.parseLine()}else if(t==="circle"){n=new Pr(this,e)
n.parseEllipse(true)}else if(t==="ellipse"){n=new Pr(this,e)
n.parseEllipse(false)}else if(t==="rect"){n=new Pr(this,e)
n.parseRect()}else if(t==="polygon"){n=new Pr(this,e)
n.parsePoly(true)}else if(t==="polyline"){n=new Pr(this,e)
n.parsePoly(false)}else if(t==="path"){n=new Pr(this,e)
n.parsePath()}else if(t==="radialGradient"){g("PShapeSVG.prototype.parseChild, name = radialGradient")}else if(t==="linearGradient"){g("PShapeSVG.prototype.parseChild, name = linearGradient")}else if(t==="text"){g("PShapeSVG.prototype.parseChild, name = text")}else if(t==="filter"){g("PShapeSVG.prototype.parseChild, name = filter")}else if(t==="mask"){g("PShapeSVG.prototype.parseChild, name = mask")}else{i()}return n}
Pr.prototype.parsePath=function(){this.family=p.PATH
this.kind=0
var e=[]
var t
var n=v.trim(this.element.getStringAttribute("d").replace(/[\s,]+/g," "))
if(n===null){return}n=v.__toCharArray(n)
var r=0,i=0,a=0,s=0,o=0,l=0,u=0,f=0,c=0,h=0,d=0,m=0,g=0,y=0,b=0,x=0
var k=""
var E=[]
var w=false
var S
var A
var _,T
while(b<n.length){x=n[b].valueOf()
if(x>=65&&x<=90||x>=97&&x<=122){_=b
b++
if(b<n.length){E=[]
x=n[b].valueOf()
while(!(x>=65&&x<=90||x>=97&&x<=100||x>=102&&x<=122)&&w===false){if(x===32){if(k!==""){E.push(parseFloat(k))
k=""}b++}else if(x===45){if(n[b-1].valueOf()===101){k+=n[b].toString()
b++}else{if(k!==""){E.push(parseFloat(k))}k=n[b].toString()
b++}}else{k+=n[b].toString()
b++}if(b===n.length){w=true}else{x=n[b].valueOf()}}}if(k!==""){E.push(parseFloat(k))
k=""}A=n[_]
x=A.valueOf()
if(x===77){if(E.length>=2&&E.length%2===0){r=E[0]
i=E[1]
this.parsePathMoveto(r,i)
if(E.length>2){for(_=2,T=E.length;_<T;_+=2){r=E[_]
i=E[_+1]
this.parsePathLineto(r,i)}}}}else if(x===109){if(E.length>=2&&E.length%2===0){r+=E[0]
i+=E[1]
this.parsePathMoveto(r,i)
if(E.length>2){for(_=2,T=E.length;_<T;_+=2){r+=E[_]
i+=E[_+1]
this.parsePathLineto(r,i)}}}}else if(x===76){if(E.length>=2&&E.length%2===0){for(_=0,T=E.length;_<T;_+=2){r=E[_]
i=E[_+1]
this.parsePathLineto(r,i)}}}else if(x===108){if(E.length>=2&&E.length%2===0){for(_=0,T=E.length;_<T;_+=2){r+=E[_]
i+=E[_+1]
this.parsePathLineto(r,i)}}}else if(x===72){for(_=0,T=E.length;_<T;_++){r=E[_]
this.parsePathLineto(r,i)}}else if(x===104){for(_=0,T=E.length;_<T;_++){r+=E[_]
this.parsePathLineto(r,i)}}else if(x===86){for(_=0,T=E.length;_<T;_++){i=E[_]
this.parsePathLineto(r,i)}}else if(x===118){for(_=0,T=E.length;_<T;_++){i+=E[_]
this.parsePathLineto(r,i)}}else if(x===67){if(E.length>=6&&E.length%6===0){for(_=0,T=E.length;_<T;_+=6){o=E[_]
u=E[_+1]
l=E[_+2]
f=E[_+3]
c=E[_+4]
h=E[_+5]
this.parsePathCurveto(o,u,l,f,c,h)
r=c
i=h}}}else if(x===99){if(E.length>=6&&E.length%6===0){for(_=0,T=E.length;_<T;_+=6){o=r+E[_]
u=i+E[_+1]
l=r+E[_+2]
f=i+E[_+3]
c=r+E[_+4]
h=i+E[_+5]
this.parsePathCurveto(o,u,l,f,c,h)
r=c
i=h}}}else if(x===83){if(E.length>=4&&E.length%4===0){for(_=0,T=E.length;_<T;_+=4){if(S.toLowerCase()==="c"||S.toLowerCase()==="s"){d=this.vertices[this.vertices.length-2][0]
m=this.vertices[this.vertices.length-2][1]
g=this.vertices[this.vertices.length-1][0]
y=this.vertices[this.vertices.length-1][1]
o=g+(g-d)
u=y+(y-m)}else{o=this.vertices[this.vertices.length-1][0]
u=this.vertices[this.vertices.length-1][1]}l=E[_]
f=E[_+1]
c=E[_+2]
h=E[_+3]
this.parsePathCurveto(o,u,l,f,c,h)
r=c
i=h}}}else if(x===115){if(E.length>=4&&E.length%4===0){for(_=0,T=E.length;_<T;_+=4){if(S.toLowerCase()==="c"||S.toLowerCase()==="s"){d=this.vertices[this.vertices.length-2][0]
m=this.vertices[this.vertices.length-2][1]
g=this.vertices[this.vertices.length-1][0]
y=this.vertices[this.vertices.length-1][1]
o=g+(g-d)
u=y+(y-m)}else{o=this.vertices[this.vertices.length-1][0]
u=this.vertices[this.vertices.length-1][1]}l=r+E[_]
f=i+E[_+1]
c=r+E[_+2]
h=i+E[_+3]
this.parsePathCurveto(o,u,l,f,c,h)
r=c
i=h}}}else if(x===81){if(E.length>=4&&E.length%4===0){for(_=0,T=E.length;_<T;_+=4){a=E[_]
s=E[_+1]
c=E[_+2]
h=E[_+3]
this.parsePathQuadto(r,i,a,s,c,h)
r=c
i=h}}}else if(x===113){if(E.length>=4&&E.length%4===0){for(_=0,T=E.length;_<T;_+=4){a=r+E[_]
s=i+E[_+1]
c=r+E[_+2]
h=i+E[_+3]
this.parsePathQuadto(r,i,a,s,c,h)
r=c
i=h}}}else if(x===84){if(E.length>=2&&E.length%2===0){for(_=0,T=E.length;_<T;_+=2){if(S.toLowerCase()==="q"||S.toLowerCase()==="t"){d=this.vertices[this.vertices.length-2][0]
m=this.vertices[this.vertices.length-2][1]
g=this.vertices[this.vertices.length-1][0]
y=this.vertices[this.vertices.length-1][1]
a=g+(g-d)
s=y+(y-m)}else{a=r
s=i}c=E[_]
h=E[_+1]
this.parsePathQuadto(r,i,a,s,c,h)
r=c
i=h}}}else if(x===116){if(E.length>=2&&E.length%2===0){for(_=0,T=E.length;_<T;_+=2){if(S.toLowerCase()==="q"||S.toLowerCase()==="t"){d=this.vertices[this.vertices.length-2][0]
m=this.vertices[this.vertices.length-2][1]
g=this.vertices[this.vertices.length-1][0]
y=this.vertices[this.vertices.length-1][1]
a=g+(g-d)
s=y+(y-m)}else{a=r
s=i}c=r+E[_]
h=i+E[_+1]
this.parsePathQuadto(r,i,a,s,c,h)
r=c
i=h}}}else if(x===90||x===122){this.close=true}S=A.toString()}else{b++}}}
Pr.prototype.parsePathQuadto=function(e,t,n,r,i,a){if(this.vertices.length>0){this.parsePathCode(p.BEZIER_VERTEX)
this.parsePathVertex(e+(n-e)*2/3,t+(r-t)*2/3)
this.parsePathVertex(i+(n-i)*2/3,a+(r-a)*2/3)
this.parsePathVertex(i,a)}else{throw"Path must start with M/m"}}
Pr.prototype.parsePathCurveto=function(e,t,n,r,i,a){if(this.vertices.length>0){this.parsePathCode(p.BEZIER_VERTEX)
this.parsePathVertex(e,t)
this.parsePathVertex(n,r)
this.parsePathVertex(i,a)}else{throw"Path must start with M/m"}}
Pr.prototype.parsePathLineto=function(e,t){if(this.vertices.length>0){this.parsePathCode(p.VERTEX)
this.parsePathVertex(e,t)
this.vertices[this.vertices.length-1]["moveTo"]=false}else{throw"Path must start with M/m"}}
Pr.prototype.parsePathMoveto=function(e,t){if(this.vertices.length>0){this.parsePathCode(p.BREAK)}this.parsePathCode(p.VERTEX)
this.parsePathVertex(e,t)
this.vertices[this.vertices.length-1]["moveTo"]=true}
Pr.prototype.parsePathVertex=function(e,t){var n=[]
n[0]=e
n[1]=t
this.vertices.push(n)}
Pr.prototype.parsePathCode=function(e){this.vertexCodes.push(e)}
Pr.prototype.parsePoly=function(e){this.family=p.PATH
this.close=e
var t=v.trim(this.element.getStringAttribute("points").replace(/[,\s]+/g," "))
if(t!==null){var n=t.split(" ")
if(n.length%2===0){for(var r=0,i=n.length;r<i;r++){var a=[]
a[0]=n[r]
a[1]=n[++r]
this.vertices.push(a)}}else{throw"Error parsing polygon points: odd number of coordinates provided"}}}
Pr.prototype.parseRect=function(){this.kind=p.RECT
this.family=p.PRIMITIVE
this.params=[]
this.params[0]=this.element.getFloatAttribute("x")
this.params[1]=this.element.getFloatAttribute("y")
this.params[2]=this.element.getFloatAttribute("width")
this.params[3]=this.element.getFloatAttribute("height")
if(this.params[2]<0||this.params[3]<0){throw"svg error: negative width or height found while parsing <rect>"}}
Pr.prototype.parseEllipse=function(e){this.kind=p.ELLIPSE
this.family=p.PRIMITIVE
this.params=[]
this.params[0]=this.element.getFloatAttribute("cx")|0
this.params[1]=this.element.getFloatAttribute("cy")|0
var t,n
if(e){t=n=this.element.getFloatAttribute("r")
if(t<0){throw"svg error: negative radius found while parsing <circle>"}}else{t=this.element.getFloatAttribute("rx")
n=this.element.getFloatAttribute("ry")
if(t<0||n<0){throw"svg error: negative x-axis radius or y-axis radius found while parsing <ellipse>"}}this.params[0]-=t
this.params[1]-=n
this.params[2]=t*2
this.params[3]=n*2}
Pr.prototype.parseLine=function(){this.kind=p.LINE
this.family=p.PRIMITIVE
this.params=[]
this.params[0]=this.element.getFloatAttribute("x1")
this.params[1]=this.element.getFloatAttribute("y1")
this.params[2]=this.element.getFloatAttribute("x2")
this.params[3]=this.element.getFloatAttribute("y2")}
Pr.prototype.parseColors=function(e){if(e.hasAttribute("opacity")){this.setOpacity(e.getAttribute("opacity"))}if(e.hasAttribute("stroke")){this.setStroke(e.getAttribute("stroke"))}if(e.hasAttribute("stroke-width")){this.setStrokeWeight(e.getAttribute("stroke-width"))}if(e.hasAttribute("stroke-linejoin")){this.setStrokeJoin(e.getAttribute("stroke-linejoin"))}if(e.hasAttribute("stroke-linecap")){this.setStrokeCap(e.getStringAttribute("stroke-linecap"))}if(e.hasAttribute("fill")){this.setFill(e.getStringAttribute("fill"))}if(e.hasAttribute("style")){var t=e.getStringAttribute("style")
var n=t.toString().split(";")
for(var r=0,i=n.length;r<i;r++){var a=v.trim(n[r].split(":"))
if(a[0]==="fill"){this.setFill(a[1])}else if(a[0]==="fill-opacity"){this.setFillOpacity(a[1])}else if(a[0]==="stroke"){this.setStroke(a[1])}else if(a[0]==="stroke-width"){this.setStrokeWeight(a[1])}else if(a[0]==="stroke-linecap"){this.setStrokeCap(a[1])}else if(a[0]==="stroke-linejoin"){this.setStrokeJoin(a[1])}else if(a[0]==="stroke-opacity"){this.setStrokeOpacity(a[1])}else if(a[0]==="opacity"){this.setOpacity(a[1])}}}}
Pr.prototype.setFillOpacity=function(e){this.fillOpacity=parseFloat(e)
this.fillColor=this.fillOpacity*255<<24|this.fillColor&16777215}
Pr.prototype.setFill=function(e){var t=this.fillColor&4278190080
if(e==="none"){this.fill=false}else if(e.indexOf("#")===0){this.fill=true
if(e.length===4){e=e.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")}this.fillColor=t|parseInt(e.substring(1),16)&16777215}else if(e.indexOf("rgb")===0){this.fill=true
this.fillColor=t|this.parseRGB(e)}else if(e.indexOf("url(#")===0){this.fillName=e.substring(5,e.length-1)}else if(E[e]){this.fill=true
this.fillColor=t|parseInt(E[e].substring(1),16)&16777215}}
Pr.prototype.setOpacity=function(e){this.strokeColor=parseFloat(e)*255<<24|this.strokeColor&16777215
this.fillColor=parseFloat(e)*255<<24|this.fillColor&16777215}
Pr.prototype.setStroke=function(e){var t=this.strokeColor&4278190080
if(e==="none"){this.stroke=false}else if(e.charAt(0)==="#"){this.stroke=true
if(e.length===4){e=e.replace(/#(.)(.)(.)/,"#$1$1$2$2$3$3")}this.strokeColor=t|parseInt(e.substring(1),16)&16777215}else if(e.indexOf("rgb")===0){this.stroke=true
this.strokeColor=t|this.parseRGB(e)}else if(e.indexOf("url(#")===0){this.strokeName=e.substring(5,e.length-1)}else if(E[e]){this.stroke=true
this.strokeColor=t|parseInt(E[e].substring(1),16)&16777215}}
Pr.prototype.setStrokeWeight=function(e){this.strokeWeight=this.parseUnitSize(e)}
Pr.prototype.setStrokeJoin=function(e){if(e==="miter"){this.strokeJoin=p.MITER}else if(e==="round"){this.strokeJoin=p.ROUND}else if(e==="bevel"){this.strokeJoin=p.BEVEL}}
Pr.prototype.setStrokeCap=function(e){if(e==="butt"){this.strokeCap=p.SQUARE}else if(e==="round"){this.strokeCap=p.ROUND}else if(e==="square"){this.strokeCap=p.PROJECT}}
Pr.prototype.setStrokeOpacity=function(e){this.strokeOpacity=parseFloat(e)
this.strokeColor=this.strokeOpacity*255<<24|this.strokeColor&16777215}
Pr.prototype.parseRGB=function(e){var t=e.substring(e.indexOf("(")+1,e.indexOf(")"))
var n=t.split(", ")
return n[0]<<16|n[1]<<8|n[2]}
Pr.prototype.parseUnitSize=function(e){var t=e.length-2
if(t<0){return e}if(e.indexOf("pt")===t){return parseFloat(e.substring(0,t))*1.25}if(e.indexOf("pc")===t){return parseFloat(e.substring(0,t))*15}if(e.indexOf("mm")===t){return parseFloat(e.substring(0,t))*3.543307}if(e.indexOf("cm")===t){return parseFloat(e.substring(0,t))*35.43307}if(e.indexOf("in")===t){return parseFloat(e.substring(0,t))*90}if(e.indexOf("px")===t){return parseFloat(e.substring(0,t))}return parseFloat(e)}
v.shape=function(e,t,n,r,i){if(arguments.length>=1&&arguments[0]!==null){if(e.isVisible()){v.pushMatrix()
if(er===p.CENTER){if(arguments.length===5){v.translate(t-r/2,n-i/2)
v.scale(r/e.getWidth(),i/e.getHeight())}else if(arguments.length===3){v.translate(t-e.getWidth()/2,-e.getHeight()/2)}else{v.translate(-e.getWidth()/2,-e.getHeight()/2)}}else if(er===p.CORNER){if(arguments.length===5){v.translate(t,n)
v.scale(r/e.getWidth(),i/e.getHeight())}else if(arguments.length===3){v.translate(t,n)}}else if(er===p.CORNERS){if(arguments.length===5){r-=t
i-=n
v.translate(t,n)
v.scale(r/e.getWidth(),i/e.getHeight())}else if(arguments.length===3){v.translate(t,n)}}e.draw()
if(arguments.length===1&&er===p.CENTER||arguments.length>1){v.popMatrix()}}}}
v.shapeMode=function(e){er=e}
v.loadShape=function(e){if(arguments.length===1){if(e.indexOf(".svg")>-1){return new Pr(null,e)}}return null}
var Rr=function(e,t,n,r,i){this.fullName=e||""
this.name=t||""
this.namespace=n||""
this.value=r
this.type=i}
Rr.prototype={getName:function(){return this.name},getFullName:function(){return this.fullName},getNamespace:function(){return this.namespace},getValue:function(){return this.value},getType:function(){return this.type},setValue:function(e){this.value=e}}
var Or=v.XMLElement=function(){this.attributes=[]
this.children=[]
this.fullName=null
this.name=null
this.namespace=""
this.content=null
this.parent=null
this.lineNr=""
this.systemID=""
this.type="ELEMENT"
if(arguments.length===4){this.fullName=arguments[0]||""
if(arguments[1]){this.name=arguments[1]}else{var e=this.fullName.indexOf(":")
if(e>=0){this.name=this.fullName.substring(e+1)}else{this.name=this.fullName}}this.namespace=arguments[1]
this.lineNr=arguments[3]
this.systemID=arguments[2]}else if(arguments.length===2&&arguments[1].indexOf(".")>-1){this.parse(arguments[arguments.length-1])}else if(arguments.length===1&&typeof arguments[0]==="string"){this.parse(arguments[0])}}
Or.prototype={parse:function(e){var t
try{var n=e.substring(e.length-4)
if(n===".xml"||n===".svg"){e=s(e)}t=(new DOMParser).parseFromString(e,"text/xml")
var r=t.documentElement
if(r){this.parseChildrenRecursive(null,r)}else{throw"Error loading document"}return this}catch(i){throw i}},parseChildrenRecursive:function(e,t){var n,r,i,a,s,o
if(!e){this.fullName=t.localName
this.name=t.nodeName
n=this}else{n=new Or(t.localName,t.nodeName,"","")
n.parent=e}if(t.nodeType===3&&t.textContent!==""){return this.createPCDataElement(t.textContent)}for(a=0,s=t.attributes.length;a<s;a++){i=t.attributes[a]
r=new Rr(i.getname,i.nodeName,i.namespaceURI,i.nodeValue,i.nodeType)
n.attributes.push(r)}for(a=0,s=t.childNodes.length;a<s;a++){var l=t.childNodes[a]
if(l.nodeType===1||l.nodeType===3){o=n.parseChildrenRecursive(n,l)
if(o!==null){n.children.push(o)}}}return n},createElement:function(){if(arguments.length===2){return new Or(arguments[0],arguments[1],null,null)}return new Or(arguments[0],arguments[1],arguments[2],arguments[3])},createPCDataElement:function(e){if(e.replace(/^\s+$/g,"")===""){return null}var t=new Or
t.content=e
t.type="TEXT"
return t},hasAttribute:function(){if(arguments.length===1){return this.getAttribute(arguments[0])!==null}if(arguments.length===2){return this.getAttribute(arguments[0],arguments[1])!==null}},equals:function(e){if(!(e instanceof Or)){return false}var t,n
if(this.name!==e.getLocalName()){return false}if(this.attributes.length!==e.getAttributeCount()){return false}if(this.attributes.length!==e.attributes.length){return false}var r,i,a,s,o
for(t=0,n=this.attributes.length;t<n;t++){r=this.attributes[t].getName()
i=this.attributes[t].getNamespace()
o=e.findAttribute(r,i)
if(o===null){return false}if(this.attributes[t].getValue()!==o.getValue()){return false}if(this.attributes[t].getType()!==o.getType()){return false}}if(this.children.length!==e.getChildCount()){return false}if(this.children.length>0){var l,u
for(t=0,n=this.children.length;t<n;t++){l=this.getChild(t)
u=e.getChild(t)
if(!l.equals(u)){return false}}return true}return this.content===e.content},getContent:function(){if(this.type==="TEXT"){return this.content}var e=this.children
if(e.length===1&&e[0].type==="TEXT"){return e[0].content}return null},getAttribute:function(){var e
if(arguments.length===2){e=this.findAttribute(arguments[0])
if(e){return e.getValue()}return arguments[1]}else if(arguments.length===1){e=this.findAttribute(arguments[0])
if(e){return e.getValue()}return null}else if(arguments.length===3){e=this.findAttribute(arguments[0],arguments[1])
if(e){return e.getValue()}return arguments[2]}},getStringAttribute:function(){if(arguments.length===1){return this.getAttribute(arguments[0])}if(arguments.length===2){return this.getAttribute(arguments[0],arguments[1])}return this.getAttribute(arguments[0],arguments[1],arguments[2])},getString:function(e){return this.getStringAttribute(e)},getFloatAttribute:function(){if(arguments.length===1){return parseFloat(this.getAttribute(arguments[0],0))}if(arguments.length===2){return this.getAttribute(arguments[0],arguments[1])}return this.getAttribute(arguments[0],arguments[1],arguments[2])},getFloat:function(e){return this.getFloatAttribute(e)},getIntAttribute:function(){if(arguments.length===1){return this.getAttribute(arguments[0],0)}if(arguments.length===2){return this.getAttribute(arguments[0],arguments[1])}return this.getAttribute(arguments[0],arguments[1],arguments[2])},getInt:function(e){return this.getIntAttribute(e)},hasChildren:function(){return this.children.length>0},addChild:function(e){if(e!==null){e.parent=this
this.children.push(e)}},insertChild:function(e,t){if(e){if(e.getLocalName()===null&&!this.hasChildren()){var n=this.children[this.children.length-1]
if(n.getLocalName()===null){n.setContent(n.getContent()+e.getContent())
return}}e.parent=this
this.children.splice(t,0,e)}},getChild:function(){if(typeof arguments[0]==="number"){return this.children[arguments[0]]}if(arguments[0].indexOf("/")!==-1){this.getChildRecursive(arguments[0].split("/"),0)
return null}var e,t
for(var n=0,r=this.getChildCount();n<r;n++){e=this.getChild(n)
t=e.getName()
if(t!==null&&t===arguments[0]){return e}}return null},getChildren:function(){if(arguments.length===1){if(typeof arguments[0]==="number"){return this.getChild(arguments[0])}if(arguments[0].indexOf("/")!==-1){return this.getChildrenRecursive(arguments[0].split("/"),0)}var e=[]
var t,n
for(var r=0,i=this.getChildCount();r<i;r++){t=this.getChild(r)
n=t.getName()
if(n!==null&&n===arguments[0]){e.push(t)}}return e}return this.children},getChildCount:function(){return this.children.length},getChildRecursive:function(e,t){var n,r
for(var i=0,a=this.getChildCount();i<a;i++){n=this.getChild(i)
r=n.getName()
if(r!==null&&r===e[t]){if(t===e.length-1){return n}t+=1
return n.getChildRecursive(e,t)}}return null},getChildrenRecursive:function(e,t){if(t===e.length-1){return this.getChildren(e[t])}var n=this.getChildren(e[t])
var r=[]
for(var i=0;i<n.length;i++){r=r.concat(n[i].getChildrenRecursive(e,t+1))}return r},isLeaf:function(){return!this.hasChildren()},listChildren:function(){var e=[]
for(var t=0,n=this.children.length;t<n;t++){e.push(this.getChild(t).getName())}return e},removeAttribute:function(e,t){this.namespace=t||""
for(var n=0,r=this.attributes.length;n<r;n++){if(this.attributes[n].getName()===e&&this.attributes[n].getNamespace()===this.namespace){this.attributes.splice(n,1)
break}}},removeChild:function(e){if(e){for(var t=0,n=this.children.length;t<n;t++){if(this.children[t].equals(e)){this.children.splice(t,1)
break}}}},removeChildAtIndex:function(e){if(this.children.length>e){this.children.splice(e,1)}},findAttribute:function(e,t){this.namespace=t||""
for(var n=0,r=this.attributes.length;n<r;n++){if(this.attributes[n].getName()===e&&this.attributes[n].getNamespace()===this.namespace){return this.attributes[n]}}return null},setAttribute:function(){var e
if(arguments.length===3){var t=arguments[0].indexOf(":")
var n=arguments[0].substring(t+1)
e=this.findAttribute(n,arguments[1])
if(e){e.setValue(arguments[2])}else{e=new Rr(arguments[0],n,arguments[1],arguments[2],"CDATA")
this.attributes.push(e)}}else{e=this.findAttribute(arguments[0])
if(e){e.setValue(arguments[1])}else{e=new Rr(arguments[0],arguments[0],null,arguments[1],"CDATA")
this.attributes.push(e)}}},setString:function(e,t){this.setAttribute(e,t)},setInt:function(e,t){this.setAttribute(e,t)},setFloat:function(e,t){this.setAttribute(e,t)},setContent:function(e){if(this.children.length>0){L.debug("Tried to set content for XMLElement with children")}this.content=e},setName:function(){if(arguments.length===1){this.name=arguments[0]
this.fullName=arguments[0]
this.namespace=null}else{var e=arguments[0].indexOf(":")
if(arguments[1]===null||e<0){this.name=arguments[0]}else{this.name=arguments[0].substring(e+1)}this.fullName=arguments[0]
this.namespace=arguments[1]}},getName:function(){return this.fullName},getLocalName:function(){return this.name},getAttributeCount:function(){return this.attributes.length},toString:function(){if(this.type==="TEXT"){return this.content}var e=(this.namespace!==""&&this.namespace!==this.name?this.namespace+":":"")+this.name
var t="<"+e
var n,r
for(n=0;n<this.attributes.length;n++){var i=this.attributes[n]
t+=" "+i.getName()+"="+'"'+i.getValue()+'"'}if(this.children.length===0){if(this.content===""){t+="/>"}else{t+=">"+this.content+"</"+e+">"}}else{t+=">"
for(r=0;r<this.children.length;r++){t+=this.children[r].toString()}t+="</"+e+">"}return t}}
Or.parse=function(e){var t=new Or
t.parse(e)
return t}
var Mr=function(e){var t=0
for(var r=0;r<e.length;r++){if(r!==0){t=n.max(t,n.abs(e[r]))}else{t=n.abs(e[r])}}var i=(t+"").indexOf(".")
if(i===0){i=1}else if(i===-1){i=(t+"").length}return i}
var Nr=v.PMatrix2D=function(){if(arguments.length===0){this.reset()}else if(arguments.length===1&&arguments[0]instanceof Nr){this.set(arguments[0].array())}else if(arguments.length===6){this.set(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}}
Nr.prototype={set:function(){if(arguments.length===6){var e=arguments
this.set([e[0],e[1],e[2],e[3],e[4],e[5]])}else if(arguments.length===1&&arguments[0]instanceof Nr){this.elements=arguments[0].array()}else if(arguments.length===1&&arguments[0]instanceof Array){this.elements=arguments[0].slice()}},get:function(){var e=new Nr
e.set(this.elements)
return e},reset:function(){this.set([1,0,0,0,1,0])},array:function oa(){return this.elements.slice()},translate:function(e,t){this.elements[2]=e*this.elements[0]+t*this.elements[1]+this.elements[2]
this.elements[5]=e*this.elements[3]+t*this.elements[4]+this.elements[5]},invTranslate:function(e,t){this.translate(-e,-t)},transpose:function(){},mult:function(e,t){var n,r
if(e instanceof y){n=e.x
r=e.y
if(!t){t=new y}}else if(e instanceof Array){n=e[0]
r=e[1]
if(!t){t=[]}}if(t instanceof Array){t[0]=this.elements[0]*n+this.elements[1]*r+this.elements[2]
t[1]=this.elements[3]*n+this.elements[4]*r+this.elements[5]}else if(t instanceof y){t.x=this.elements[0]*n+this.elements[1]*r+this.elements[2]
t.y=this.elements[3]*n+this.elements[4]*r+this.elements[5]
t.z=0}return t},multX:function(e,t){return e*this.elements[0]+t*this.elements[1]+this.elements[2]},multY:function(e,t){return e*this.elements[3]+t*this.elements[4]+this.elements[5]},skewX:function(e){this.apply(1,0,1,e,0,0)},skewY:function(e){this.apply(1,0,1,0,e,0)},determinant:function(){return this.elements[0]*this.elements[4]-this.elements[1]*this.elements[3]},invert:function(){var e=this.determinant()
if(n.abs(e)>p.MIN_INT){var t=this.elements[0]
var r=this.elements[1]
var i=this.elements[2]
var a=this.elements[3]
var s=this.elements[4]
var o=this.elements[5]
this.elements[0]=s/e
this.elements[3]=-a/e
this.elements[1]=-r/e
this.elements[4]=t/e
this.elements[2]=(r*o-s*i)/e
this.elements[5]=(a*i-t*o)/e
return true}return false},scale:function(e,t){if(e&&!t){t=e}if(e&&t){this.elements[0]*=e
this.elements[1]*=t
this.elements[3]*=e
this.elements[4]*=t}},invScale:function(e,t){if(e&&!t){t=e}this.scale(1/e,1/t)},apply:function(){var e
if(arguments.length===1&&arguments[0]instanceof Nr){e=arguments[0].array()}else if(arguments.length===6){e=Array.prototype.slice.call(arguments)}else if(arguments.length===1&&arguments[0]instanceof Array){e=arguments[0]}var t=[0,0,this.elements[2],0,0,this.elements[5]]
var n=0
for(var r=0;r<2;r++){for(var i=0;i<3;i++,n++){t[n]+=this.elements[r*3+0]*e[i+0]+this.elements[r*3+1]*e[i+3]}}this.elements=t.slice()},preApply:function(){var e
if(arguments.length===1&&arguments[0]instanceof Nr){e=arguments[0].array()}else if(arguments.length===6){e=Array.prototype.slice.call(arguments)}else if(arguments.length===1&&arguments[0]instanceof Array){e=arguments[0]}var t=[0,0,e[2],0,0,e[5]]
t[2]=e[2]+this.elements[2]*e[0]+this.elements[5]*e[1]
t[5]=e[5]+this.elements[2]*e[3]+this.elements[5]*e[4]
t[0]=this.elements[0]*e[0]+this.elements[3]*e[1]
t[3]=this.elements[0]*e[3]+this.elements[3]*e[4]
t[1]=this.elements[1]*e[0]+this.elements[4]*e[1]
t[4]=this.elements[1]*e[3]+this.elements[4]*e[4]
this.elements=t.slice()},rotate:function(e){var t=v.cos(e)
var n=v.sin(e)
var r=this.elements[0]
var i=this.elements[1]
this.elements[0]=t*r+n*i
this.elements[1]=-n*r+t*i
r=this.elements[3]
i=this.elements[4]
this.elements[3]=t*r+n*i
this.elements[4]=-n*r+t*i},rotateZ:function(e){this.rotate(e)},invRotateZ:function(e){this.rotateZ(e-(v.angleMode==="degrees"?180:n.PI))},print:function(){var e=Mr(this.elements)
var t=""+v.nfs(this.elements[0],e,4)+" "+v.nfs(this.elements[1],e,4)+" "+v.nfs(this.elements[2],e,4)+"\n"+v.nfs(this.elements[3],e,4)+" "+v.nfs(this.elements[4],e,4)+" "+v.nfs(this.elements[5],e,4)+"\n\n"
v.println(t)}}
var Dr=v.PMatrix3D=function(){this.reset()}
Dr.prototype={set:function(){if(arguments.length===16){this.elements=Array.prototype.slice.call(arguments)}else if(arguments.length===1&&arguments[0]instanceof Dr){this.elements=arguments[0].array()}else if(arguments.length===1&&arguments[0]instanceof Array){this.elements=arguments[0].slice()}},get:function(){var e=new Dr
e.set(this.elements)
return e},reset:function(){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},array:function la(){return this.elements.slice()},translate:function(e,t,n){if(n===r){n=0}this.elements[3]+=e*this.elements[0]+t*this.elements[1]+n*this.elements[2]
this.elements[7]+=e*this.elements[4]+t*this.elements[5]+n*this.elements[6]
this.elements[11]+=e*this.elements[8]+t*this.elements[9]+n*this.elements[10]
this.elements[15]+=e*this.elements[12]+t*this.elements[13]+n*this.elements[14]},transpose:function(){var e=this.elements[4]
this.elements[4]=this.elements[1]
this.elements[1]=e
e=this.elements[8]
this.elements[8]=this.elements[2]
this.elements[2]=e
e=this.elements[6]
this.elements[6]=this.elements[9]
this.elements[9]=e
e=this.elements[3]
this.elements[3]=this.elements[12]
this.elements[12]=e
e=this.elements[7]
this.elements[7]=this.elements[13]
this.elements[13]=e
e=this.elements[11]
this.elements[11]=this.elements[14]
this.elements[14]=e},mult:function(e,t){var n,r,i,a
if(e instanceof y){n=e.x
r=e.y
i=e.z
a=1
if(!t){t=new y}}else if(e instanceof Array){n=e[0]
r=e[1]
i=e[2]
a=e[3]||1
if(!t||t.length!==3&&t.length!==4){t=[0,0,0]}}if(t instanceof Array){if(t.length===3){t[0]=this.elements[0]*n+this.elements[1]*r+this.elements[2]*i+this.elements[3]
t[1]=this.elements[4]*n+this.elements[5]*r+this.elements[6]*i+this.elements[7]
t[2]=this.elements[8]*n+this.elements[9]*r+this.elements[10]*i+this.elements[11]}else if(t.length===4){t[0]=this.elements[0]*n+this.elements[1]*r+this.elements[2]*i+this.elements[3]*a
t[1]=this.elements[4]*n+this.elements[5]*r+this.elements[6]*i+this.elements[7]*a
t[2]=this.elements[8]*n+this.elements[9]*r+this.elements[10]*i+this.elements[11]*a
t[3]=this.elements[12]*n+this.elements[13]*r+this.elements[14]*i+this.elements[15]*a}}if(t instanceof y){t.x=this.elements[0]*n+this.elements[1]*r+this.elements[2]*i+this.elements[3]
t.y=this.elements[4]*n+this.elements[5]*r+this.elements[6]*i+this.elements[7]
t.z=this.elements[8]*n+this.elements[9]*r+this.elements[10]*i+this.elements[11]}return t},preApply:function(){var e
if(arguments.length===1&&arguments[0]instanceof Dr){e=arguments[0].array()}else if(arguments.length===16){e=Array.prototype.slice.call(arguments)}else if(arguments.length===1&&arguments[0]instanceof Array){e=arguments[0]}var t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var n=0
for(var r=0;r<4;r++){for(var i=0;i<4;i++,n++){t[n]+=this.elements[i+0]*e[r*4+0]+this.elements[i+4]*e[r*4+1]+this.elements[i+8]*e[r*4+2]+this.elements[i+12]*e[r*4+3]}}this.elements=t.slice()},apply:function(){var e
if(arguments.length===1&&arguments[0]instanceof Dr){e=arguments[0].array()}else if(arguments.length===16){e=Array.prototype.slice.call(arguments)}else if(arguments.length===1&&arguments[0]instanceof Array){e=arguments[0]}var t=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
var n=0
for(var r=0;r<4;r++){for(var i=0;i<4;i++,n++){t[n]+=this.elements[r*4+0]*e[i+0]+this.elements[r*4+1]*e[i+4]+this.elements[r*4+2]*e[i+8]+this.elements[r*4+3]*e[i+12]}}this.elements=t.slice()},rotate:function(e,t,n,r){if(!n){this.rotateZ(e)}else{var i=v.cos(e)
var a=v.sin(e)
var s=1-i
this.apply(s*t*t+i,s*t*n-a*r,s*t*r+a*n,0,s*t*n+a*r,s*n*n+i,s*n*r-a*t,0,s*t*r-a*n,s*n*r+a*t,s*r*r+i,0,0,0,0,1)}},invApply:function(){if(Wn===r){Wn=new Dr}var e=arguments
Wn.set(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])
if(!Wn.invert()){return false}this.preApply(Wn)
return true},rotateX:function(e){var t=v.cos(e)
var n=v.sin(e)
this.apply([1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1])},rotateY:function(e){var t=v.cos(e)
var n=v.sin(e)
this.apply([t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1])},rotateZ:function(e){var t=v.cos(e)
var n=v.sin(e)
this.apply([t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1])},scale:function(e,t,n){if(e&&!t&&!n){t=n=e}else if(e&&t&&!n){n=1}if(e&&t&&n){this.elements[0]*=e
this.elements[1]*=t
this.elements[2]*=n
this.elements[4]*=e
this.elements[5]*=t
this.elements[6]*=n
this.elements[8]*=e
this.elements[9]*=t
this.elements[10]*=n
this.elements[12]*=e
this.elements[13]*=t
this.elements[14]*=n}},skewX:function(e){var t=v.tan(e)
this.apply(1,t,0,0,0,1,0,0,0,0,1,0,0,0,0,1)},skewY:function(e){var t=v.tan(e)
this.apply(1,0,0,0,t,1,0,0,0,0,1,0,0,0,0,1)},multX:function(e,t,n,r){if(!n){return this.elements[0]*e+this.elements[1]*t+this.elements[3]}if(!r){return this.elements[0]*e+this.elements[1]*t+this.elements[2]*n+this.elements[3]}return this.elements[0]*e+this.elements[1]*t+this.elements[2]*n+this.elements[3]*r},multY:function(e,t,n,r){if(!n){return this.elements[4]*e+this.elements[5]*t+this.elements[7]}if(!r){return this.elements[4]*e+this.elements[5]*t+this.elements[6]*n+this.elements[7]}return this.elements[4]*e+this.elements[5]*t+this.elements[6]*n+this.elements[7]*r},multZ:function(e,t,n,r){if(!r){return this.elements[8]*e+this.elements[9]*t+this.elements[10]*n+this.elements[11]}return this.elements[8]*e+this.elements[9]*t+this.elements[10]*n+this.elements[11]*r},multW:function(e,t,n,r){if(!r){return this.elements[12]*e+this.elements[13]*t+this.elements[14]*n+this.elements[15]}return this.elements[12]*e+this.elements[13]*t+this.elements[14]*n+this.elements[15]*r},invert:function(){var e=this.elements[0]*this.elements[5]-this.elements[1]*this.elements[4]
var t=this.elements[0]*this.elements[6]-this.elements[2]*this.elements[4]
var r=this.elements[0]*this.elements[7]-this.elements[3]*this.elements[4]
var i=this.elements[1]*this.elements[6]-this.elements[2]*this.elements[5]
var a=this.elements[1]*this.elements[7]-this.elements[3]*this.elements[5]
var s=this.elements[2]*this.elements[7]-this.elements[3]*this.elements[6]
var o=this.elements[8]*this.elements[13]-this.elements[9]*this.elements[12]
var l=this.elements[8]*this.elements[14]-this.elements[10]*this.elements[12]
var u=this.elements[8]*this.elements[15]-this.elements[11]*this.elements[12]
var f=this.elements[9]*this.elements[14]-this.elements[10]*this.elements[13]
var c=this.elements[9]*this.elements[15]-this.elements[11]*this.elements[13]
var h=this.elements[10]*this.elements[15]-this.elements[11]*this.elements[14]
var p=e*h-t*c+r*f+i*u-a*l+s*o
if(n.abs(p)<=1e-9){return false}var d=[]
d[0]=+this.elements[5]*h-this.elements[6]*c+this.elements[7]*f
d[4]=-this.elements[4]*h+this.elements[6]*u-this.elements[7]*l
d[8]=+this.elements[4]*c-this.elements[5]*u+this.elements[7]*o
d[12]=-this.elements[4]*f+this.elements[5]*l-this.elements[6]*o
d[1]=-this.elements[1]*h+this.elements[2]*c-this.elements[3]*f
d[5]=+this.elements[0]*h-this.elements[2]*u+this.elements[3]*l
d[9]=-this.elements[0]*c+this.elements[1]*u-this.elements[3]*o
d[13]=+this.elements[0]*f-this.elements[1]*l+this.elements[2]*o
d[2]=+this.elements[13]*s-this.elements[14]*a+this.elements[15]*i
d[6]=-this.elements[12]*s+this.elements[14]*r-this.elements[15]*t
d[10]=+this.elements[12]*a-this.elements[13]*r+this.elements[15]*e
d[14]=-this.elements[12]*i+this.elements[13]*t-this.elements[14]*e
d[3]=-this.elements[9]*s+this.elements[10]*a-this.elements[11]*i
d[7]=+this.elements[8]*s-this.elements[10]*r+this.elements[11]*t
d[11]=-this.elements[8]*a+this.elements[9]*r-this.elements[11]*e
d[15]=+this.elements[8]*i-this.elements[9]*t+this.elements[10]*e
var m=1/p
d[0]*=m
d[1]*=m
d[2]*=m
d[3]*=m
d[4]*=m
d[5]*=m
d[6]*=m
d[7]*=m
d[8]*=m
d[9]*=m
d[10]*=m
d[11]*=m
d[12]*=m
d[13]*=m
d[14]*=m
d[15]*=m
this.elements=d.slice()
return true},toString:function(){var e=""
for(var t=0;t<15;t++){e+=this.elements[t]+", "}e+=this.elements[15]
return e},print:function(){var e=Mr(this.elements)
var t=""+v.nfs(this.elements[0],e,4)+" "+v.nfs(this.elements[1],e,4)+" "+v.nfs(this.elements[2],e,4)+" "+v.nfs(this.elements[3],e,4)+"\n"+v.nfs(this.elements[4],e,4)+" "+v.nfs(this.elements[5],e,4)+" "+v.nfs(this.elements[6],e,4)+" "+v.nfs(this.elements[7],e,4)+"\n"+v.nfs(this.elements[8],e,4)+" "+v.nfs(this.elements[9],e,4)+" "+v.nfs(this.elements[10],e,4)+" "+v.nfs(this.elements[11],e,4)+"\n"+v.nfs(this.elements[12],e,4)+" "+v.nfs(this.elements[13],e,4)+" "+v.nfs(this.elements[14],e,4)+" "+v.nfs(this.elements[15],e,4)+"\n\n"
v.println(t)},invTranslate:function(e,t,n){this.preApply(1,0,0,-e,0,1,0,-t,0,0,1,-n,0,0,0,1)},invRotateX:function(e){var t=v.cos(-e)
var n=v.sin(-e)
this.preApply([1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1])},invRotateY:function(e){var t=v.cos(-e)
var n=v.sin(-e)
this.preApply([t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1])},invRotateZ:function(e){var t=v.cos(-e)
var n=v.sin(-e)
this.preApply([t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1])},invScale:function(e,t,n){this.preApply([1/e,0,0,0,0,1/t,0,0,0,0,1/n,0,0,0,0,1])}}
var Wr=v.PMatrixStack=function(){this.matrixStack=[]}
Wr.prototype.load=function(){var e=w.$newPMatrix()
if(arguments.length===1){e.set(arguments[0])}else{e.set(arguments)}this.matrixStack.push(e)}
Ar.prototype.$newPMatrix=function(){return new Nr}
_r.prototype.$newPMatrix=function(){return new Dr}
Wr.prototype.push=function(){this.matrixStack.push(this.peek())}
Wr.prototype.pop=function(){return this.matrixStack.pop()}
Wr.prototype.peek=function(){var e=w.$newPMatrix()
e.set(this.matrixStack[this.matrixStack.length-1])
return e}
Wr.prototype.mult=function(e){this.matrixStack[this.matrixStack.length-1].apply(e)}
v.split=function(e,t){return e.split(t)}
v.splitTokens=function(e,t){if(arguments.length===1){t="\n	\r\f "}t="["+t+"]"
var n=[]
var i=0
var a=e.search(t)
while(a>=0){if(a===0){e=e.substring(1)}else{n[i]=e.substring(0,a)
i++
e=e.substring(a)}a=e.search(t)}if(e.length>0){n[i]=e}if(n.length===0){n=r}return n}
v.append=function(e,t){e[e.length]=t
return e}
v.concat=function(e,t){return e.concat(t)}
v.sort=function(e,t){var n=[]
if(e.length>0){var r=t>0?t:e.length
for(var i=0;i<r;i++){n.push(e[i])}if(typeof e[0]==="string"){n.sort()}else{n.sort(function(e,t){return e-t})}if(t>0){for(var a=n.length;a<e.length;a++){n.push(e[a])}}}return n}
v.splice=function(e,t,n){if(t.length===0){return e}if(t instanceof Array){for(var r=0,i=n;r<t.length;i++,r++){e.splice(i,0,t[r])}}else{e.splice(n,0,t)}return e}
v.subset=function(e,t,n){var i=n!==r?t+n:e.length
return e.slice(t,i)}
v.join=function(e,t){return e.join(t)}
v.shorten=function(e){var t=[]
var n=e.length
for(var r=0;r<n;r++){t[r]=e[r]}t.pop()
return t}
v.expand=function(e,t){var n=e.slice(0),r=t||e.length*2
n.length=r
return n}
v.arrayCopy=function(){var e,t=0,n,i=0,a
if(arguments.length===2){e=arguments[0]
n=arguments[1]
a=e.length}else if(arguments.length===3){e=arguments[0]
n=arguments[1]
a=arguments[2]}else if(arguments.length===5){e=arguments[0]
t=arguments[1]
n=arguments[2]
i=arguments[3]
a=arguments[4]}for(var s=t,o=i;s<a+t;s++,o++){if(n[o]!==r){n[o]=e[s]}else{throw"array index out of bounds exception"}}}
v.reverse=function(e){return e.reverse()}
v.mix=function(e,t,n){return e+((t-e)*n>>8)}
v.peg=function(e){return e<0?0:e>255?255:e}
v.modes=function(){var e=p.ALPHA_MASK,t=p.RED_MASK,r=p.GREEN_MASK,i=p.BLUE_MASK,a=n.min,s=n.max
function o(e,t,n,r,i,s,o,l,u,f,c){var h=a(((e&4278190080)>>>24)+t,255)<<24
var p=n+((u-n)*t>>8)
p=(p<0?0:p>255?255:p)<<16
var d=r+((f-r)*t>>8)
d=(d<0?0:d>255?255:d)<<8
var m=i+((c-i)*t>>8)
m=m<0?0:m>255?255:m
return h|p|d|m}return{replace:function(e,t){return t},blend:function(n,s){var o=(s&e)>>>24,l=n&t,u=n&r,f=n&i,c=s&t,h=s&r,p=s&i
return a(((n&e)>>>24)+o,255)<<24|l+((c-l)*o>>8)&t|u+((h-u)*o>>8)&r|f+((p-f)*o>>8)&i},add:function(n,s){var o=(s&e)>>>24
return a(((n&e)>>>24)+o,255)<<24|a((n&t)+((s&t)>>8)*o,t)&t|a((n&r)+((s&r)>>8)*o,r)&r|a((n&i)+((s&i)*o>>8),i)},subtract:function(n,o){var l=(o&e)>>>24
return a(((n&e)>>>24)+l,255)<<24|s((n&t)-((o&t)>>8)*l,r)&t|s((n&r)-((o&r)>>8)*l,i)&r|s((n&i)-((o&i)*l>>8),0)},lightest:function(n,o){var l=(o&e)>>>24
return a(((n&e)>>>24)+l,255)<<24|s(n&t,((o&t)>>8)*l)&t|s(n&r,((o&r)>>8)*l)&r|s(n&i,(o&i)*l>>8)},darkest:function(n,s){var o=(s&e)>>>24,l=n&t,u=n&r,f=n&i,c=a(n&t,((s&t)>>8)*o),h=a(n&r,((s&r)>>8)*o),p=a(n&i,(s&i)*o>>8)
return a(((n&e)>>>24)+o,255)<<24|l+((c-l)*o>>8)&t|u+((h-u)*o>>8)&r|f+((p-f)*o>>8)&i},difference:function(n,a){var s=(a&e)>>>24,l=(n&t)>>16,u=(n&r)>>8,f=n&i,c=(a&t)>>16,h=(a&r)>>8,p=a&i,d=l>c?l-c:c-l,m=u>h?u-h:h-u,g=f>p?f-p:p-f
return o(n,s,l,u,f,c,h,p,d,m,g)},exclusion:function(n,a){var s=(a&e)>>>24,l=(n&t)>>16,u=(n&r)>>8,f=n&i,c=(a&t)>>16,h=(a&r)>>8,p=a&i,d=l+c-(l*c>>7),m=u+h-(u*h>>7),g=f+p-(f*p>>7)
return o(n,s,l,u,f,c,h,p,d,m,g)},multiply:function(n,a){var s=(a&e)>>>24,l=(n&t)>>16,u=(n&r)>>8,f=n&i,c=(a&t)>>16,h=(a&r)>>8,p=a&i,d=l*c>>8,m=u*h>>8,g=f*p>>8
return o(n,s,l,u,f,c,h,p,d,m,g)},screen:function(n,a){var s=(a&e)>>>24,l=(n&t)>>16,u=(n&r)>>8,f=n&i,c=(a&t)>>16,h=(a&r)>>8,p=a&i,d=255-((255-l)*(255-c)>>8),m=255-((255-u)*(255-h)>>8),g=255-((255-f)*(255-p)>>8)
return o(n,s,l,u,f,c,h,p,d,m,g)},hard_light:function(n,a){var s=(a&e)>>>24,l=(n&t)>>16,u=(n&r)>>8,f=n&i,c=(a&t)>>16,h=(a&r)>>8,p=a&i,d=c<128?l*c>>7:255-((255-l)*(255-c)>>7),m=h<128?u*h>>7:255-((255-u)*(255-h)>>7),g=p<128?f*p>>7:255-((255-f)*(255-p)>>7)
return o(n,s,l,u,f,c,h,p,d,m,g)},soft_light:function(n,a){var s=(a&e)>>>24,l=(n&t)>>16,u=(n&r)>>8,f=n&i,c=(a&t)>>16,h=(a&r)>>8,p=a&i,d=(l*c>>7)+(l*l>>8)-(l*l*c>>15),m=(u*h>>7)+(u*u>>8)-(u*u*h>>15),g=(f*p>>7)+(f*f>>8)-(f*f*p>>15)
return o(n,s,l,u,f,c,h,p,d,m,g)},overlay:function(n,a){var s=(a&e)>>>24,l=(n&t)>>16,u=(n&r)>>8,f=n&i,c=(a&t)>>16,h=(a&r)>>8,p=a&i,d=l<128?l*c>>7:255-((255-l)*(255-c)>>7),m=u<128?u*h>>7:255-((255-u)*(255-h)>>7),g=f<128?f*p>>7:255-((255-f)*(255-p)>>7)
return o(n,s,l,u,f,c,h,p,d,m,g)},dodge:function(n,a){var s=(a&e)>>>24,l=(n&t)>>16,u=(n&r)>>8,f=n&i,c=(a&t)>>16,h=(a&r)>>8,p=a&i
var d=255
if(c!==255){d=(l<<8)/(255-c)
d=d<0?0:d>255?255:d}var m=255
if(h!==255){m=(u<<8)/(255-h)
m=m<0?0:m>255?255:m}var g=255
if(p!==255){g=(f<<8)/(255-p)
g=g<0?0:g>255?255:g}return o(n,s,l,u,f,c,h,p,d,m,g)},burn:function(n,a){var s=(a&e)>>>24,l=(n&t)>>16,u=(n&r)>>8,f=n&i,c=(a&t)>>16,h=(a&r)>>8,p=a&i
var d=0
if(c!==0){d=(255-l<<8)/c
d=255-(d<0?0:d>255?255:d)}var m=0
if(h!==0){m=(255-u<<8)/h
m=255-(m<0?0:m>255?255:m)}var g=0
if(p!==0){g=(255-f<<8)/p
g=255-(g<0?0:g>255?255:g)}return o(n,s,l,u,f,c,h,p,d,m,g)}}}()
function Fr(e,t,r,i){var a,s,o,l
if(mt===p.HSB){var u=v.color.toRGB(e,t,r)
a=u[0]
s=u[1]
o=u[2]}else{a=n.round(255*(e/lt))
s=n.round(255*(t/ut))
o=n.round(255*(r/ft))}l=n.round(255*(i/ot))
a=a<0?0:a
s=s<0?0:s
o=o<0?0:o
l=l<0?0:l
a=a>255?255:a
s=s>255?255:s
o=o>255?255:o
l=l>255?255:l
return l<<24&p.ALPHA_MASK|a<<16&p.RED_MASK|s<<8&p.GREEN_MASK|o&p.BLUE_MASK}function Gr(e,t){var r
if(e&p.ALPHA_MASK){r=n.round(255*(t/ot))
r=r>255?255:r
r=r<0?0:r
return e-(e&p.ALPHA_MASK)+(r<<24&p.ALPHA_MASK)}if(mt===p.RGB){return Fr(e,e,e,t)}if(mt===p.HSB){return Fr(0,0,e/lt*ft,t)}}function Br(e){if(e<=lt&&e>=0){if(mt===p.RGB){return Fr(e,e,e,ot)}if(mt===p.HSB){return Fr(0,0,e/lt*ft,ot)}}if(e){if(e>2147483647){e-=4294967296}return e}}v.color=function(e,t,n,i){if(e!==r&&t!==r&&n!==r&&i!==r){return Fr(e,t,n,i)}if(e!==r&&t!==r&&n!==r){return Fr(e,t,n,ot)}if(e!==r&&t!==r){return Gr(e,t)}if(typeof e==="number"){return Br(e)}return Fr(lt,ut,ft,ot)}
v.color.toString=function(e){return"rgba("+((e&p.RED_MASK)>>>16)+","+((e&p.GREEN_MASK)>>>8)+","+(e&p.BLUE_MASK)+","+((e&p.ALPHA_MASK)>>>24)/255+")"}
v.color.toInt=function(e,t,n,r){return r<<24&p.ALPHA_MASK|e<<16&p.RED_MASK|t<<8&p.GREEN_MASK|n&p.BLUE_MASK}
v.color.toArray=function(e){return[(e&p.RED_MASK)>>>16,(e&p.GREEN_MASK)>>>8,e&p.BLUE_MASK,(e&p.ALPHA_MASK)>>>24]}
v.color.toGLArray=function(e){return[((e&p.RED_MASK)>>>16)/255,((e&p.GREEN_MASK)>>>8)/255,(e&p.BLUE_MASK)/255,((e&p.ALPHA_MASK)>>>24)/255]}
v.color.toRGB=function(e,t,r){e=e>lt?lt:e
t=t>ut?ut:t
r=r>ft?ft:r
e=e/lt*360
t=t/ut*100
r=r/ft*100
var i=n.round(r/100*255)
if(t===0){return[i,i,i]}var a=e%360
var s=a%60
var o=n.round(r*(100-t)/1e4*255)
var l=n.round(r*(6e3-t*s)/6e5*255)
var u=n.round(r*(6e3-t*(60-s))/6e5*255)
switch(n.floor(a/60)){case 0:return[i,u,o]
case 1:return[l,i,o]
case 2:return[o,i,u]
case 3:return[o,l,i]
case 4:return[u,o,i]
case 5:return[i,o,l]}}
function Vr(e){var t,n,r
t=((e&p.RED_MASK)>>>16)/255
n=((e&p.GREEN_MASK)>>>8)/255
r=(e&p.BLUE_MASK)/255
var i=v.max(v.max(t,n),r),a=v.min(v.min(t,n),r),s,o
if(a===i){return[0,0,i*ft]}o=(i-a)/i
if(t===i){s=(n-r)/(i-a)}else if(n===i){s=2+(r-t)/(i-a)}else{s=4+(t-n)/(i-a)}s/=6
if(s<0){s+=1}else if(s>1){s-=1}return[s*lt,o*ut,i*ft]}v.brightness=function(e){return Vr(e)[2]}
v.saturation=function(e){return Vr(e)[1]}
v.hue=function(e){return Vr(e)[0]}
v.red=function(e){return((e&p.RED_MASK)>>>16)/255*lt}
v.green=function(e){return((e&p.GREEN_MASK)>>>8)/255*ut}
v.blue=function(e){return(e&p.BLUE_MASK)/255*ft}
v.alpha=function(e){return((e&p.ALPHA_MASK)>>>24)/255*ot}
v.lerpColor=function(e,t,n){var r,i,a,s,o,l,u,f,c,h,d,m
var g,y,b,x,k
var E=v.color(e)
var w=v.color(t)
if(mt===p.HSB){g=Vr(E)
f=((E&p.ALPHA_MASK)>>>24)/ot
y=Vr(w)
m=((w&p.ALPHA_MASK)>>>24)/ot
x=v.lerp(g[0],y[0],n)
k=v.lerp(g[1],y[1],n)
a=v.lerp(g[2],y[2],n)
b=v.color.toRGB(x,k,a)
s=v.lerp(f,m,n)*ot
return s<<24&p.ALPHA_MASK|b[0]<<16&p.RED_MASK|b[1]<<8&p.GREEN_MASK|b[2]&p.BLUE_MASK}o=(E&p.RED_MASK)>>>16
l=(E&p.GREEN_MASK)>>>8
u=E&p.BLUE_MASK
f=((E&p.ALPHA_MASK)>>>24)/ot
c=(w&p.RED_MASK)>>>16
h=(w&p.GREEN_MASK)>>>8
d=w&p.BLUE_MASK
m=((w&p.ALPHA_MASK)>>>24)/ot
r=v.lerp(o,c,n)|0
i=v.lerp(l,h,n)|0
a=v.lerp(u,d,n)|0
s=v.lerp(f,m,n)*ot
return s<<24&p.ALPHA_MASK|r<<16&p.RED_MASK|i<<8&p.GREEN_MASK|a&p.BLUE_MASK}
v.colorMode=function(){mt=arguments[0]
if(arguments.length>1){lt=arguments[1]
ut=arguments[2]||arguments[1]
ft=arguments[3]||arguments[1]
ot=arguments[4]||arguments[1]}}
v.blendColor=function(e,t,n){if(n===p.REPLACE){return v.modes.replace(e,t)}else if(n===p.BLEND){return v.modes.blend(e,t)}else if(n===p.ADD){return v.modes.add(e,t)}else if(n===p.SUBTRACT){return v.modes.subtract(e,t)}else if(n===p.LIGHTEST){return v.modes.lightest(e,t)}else if(n===p.DARKEST){return v.modes.darkest(e,t)}else if(n===p.DIFFERENCE){return v.modes.difference(e,t)}else if(n===p.EXCLUSION){return v.modes.exclusion(e,t)}else if(n===p.MULTIPLY){return v.modes.multiply(e,t)}else if(n===p.SCREEN){return v.modes.screen(e,t)}else if(n===p.HARD_LIGHT){return v.modes.hard_light(e,t)}else if(n===p.SOFT_LIGHT){return v.modes.soft_light(e,t)}else if(n===p.OVERLAY){return v.modes.overlay(e,t)}else if(n===p.DODGE){return v.modes.dodge(e,t)}else if(n===p.BURN){return v.modes.burn(e,t)}}
function Ur(){b.save()}function $r(){b.restore()
D=true
R=true}v.printMatrix=function(){On.print()}
Ar.prototype.translate=function(e,t){On.translate(e,t)
Mn.invTranslate(e,t)
b.translate(e,t)}
_r.prototype.translate=function(e,t,n){On.translate(e,t,n)
Mn.invTranslate(e,t,n)}
Ar.prototype.scale=function(e,t){On.scale(e,t)
Mn.invScale(e,t)
b.scale(e,t||e)}
_r.prototype.scale=function(e,t,n){On.scale(e,t,n)
Mn.invScale(e,t,n)}
Ar.prototype.pushMatrix=function(){Nn.load(On)
Dn.load(Mn)
Ur()}
_r.prototype.pushMatrix=function(){Nn.load(On)
Dn.load(Mn)}
Ar.prototype.popMatrix=function(){On.set(Nn.pop())
Mn.set(Dn.pop())
$r()}
_r.prototype.popMatrix=function(){On.set(Nn.pop())
Mn.set(Dn.pop())}
Ar.prototype.resetMatrix=function(){On.reset()
Mn.reset()
b.setTransform(1,0,0,1,0,0)}
_r.prototype.resetMatrix=function(){On.reset()
Mn.reset()}
Sr.prototype.applyMatrix=function(){var e=arguments
On.apply(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])
Mn.invApply(e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8],e[9],e[10],e[11],e[12],e[13],e[14],e[15])}
Ar.prototype.applyMatrix=function(){var e=arguments
for(var t=e.length;t<16;t++){e[t]=0}e[10]=e[15]=1
Sr.prototype.applyMatrix.apply(this,e)}
v.rotateX=function(e){On.rotateX(e)
Mn.invRotateX(e)}
Ar.prototype.rotateZ=function(){throw"rotateZ() is not supported in 2D mode. Use rotate(float) instead."}
_r.prototype.rotateZ=function(e){On.rotateZ(e)
Mn.invRotateZ(e)}
v.rotateY=function(e){On.rotateY(e)
Mn.invRotateY(e)}
Ar.prototype.rotate=function(e){On.rotateZ(e)
Mn.invRotateZ(e)
b.rotate(v.convertToRadians(e))}
_r.prototype.rotate=function(e){v.rotateZ(e)}
v.pushStyle=function(){Ur()
v.pushMatrix()
var e={doFill:T,currentFillColor:P,doStroke:O,currentStrokeColor:N,curTint:gt,curRectMode:U,curColorMode:mt,colorModeX:lt,colorModeZ:ft,colorModeY:ut,colorModeA:ot,curTextFont:ln,horizontalTextAlignment:Qt,verticalTextAlignment:en,textMode:tn,curFontName:nn,curTextSize:rn,curTextAscent:an,curTextDescent:sn,curTextLeading:on}
tr.push(e)}
v.popStyle=function(){var e=tr.pop()
if(e){$r()
v.popMatrix()
T=e.doFill
P=e.currentFillColor
O=e.doStroke
N=e.currentStrokeColor
gt=e.curTint
U=e.curRectmode
mt=e.curColorMode
lt=e.colorModeX
ft=e.colorModeZ
ut=e.colorModeY
ot=e.colorModeA
ln=e.curTextFont
nn=e.curFontName
rn=e.curTextSize
Qt=e.horizontalTextAlignment
en=e.verticalTextAlignment
tn=e.textMode
an=e.curTextAscent
sn=e.curTextDescent
on=e.curTextLeading}else{throw"Too many popStyle() without enough pushStyle()"}}
v.year=function(){return(new Date).getFullYear()}
v.month=function(){return(new Date).getMonth()+1}
v.day=function(){return(new Date).getDate()}
v.hour=function(){return(new Date).getHours()}
v.minute=function(){return(new Date).getMinutes()}
v.second=function(){return(new Date).getSeconds()}
v.millis=function(){return Date.now()-bt}
function zr(){var e=(Date.now()-xt)/1e3
kt++
var t=kt/e
if(e>.5){xt=Date.now()
kt=0
v.__frameRate=t}v.frameCount++}Ar.prototype.redraw=function(){zr()
b.lineWidth=W
var e=v.pmouseX,t=v.pmouseY
v.pmouseX=pt
v.pmouseY=dt
Ur()
v.draw()
$r()
pt=v.mouseX
dt=v.mouseY
v.pmouseX=e
v.pmouseY=t
v.mouseIsPressed=v.__mousePressed}
_r.prototype.redraw=function(){zr()
var e=v.pmouseX,t=v.pmouseY
v.pmouseX=pt
v.pmouseY=dt
b.clear(b.DEPTH_BUFFER_BIT)
Lt={attributes:{},locations:{}}
v.noLights()
v.lightFalloff(1,0,0)
v.shininess(1)
v.ambient(255,255,255)
v.specular(0,0,0)
v.emissive(0,0,0)
v.camera()
v.draw()
pt=v.mouseX
dt=v.mouseY
v.pmouseX=e
v.pmouseY=t
v.mouseIsPressed=v.__mousePressed}
v.noLoop=function(){B=false
F=false
clearInterval(V)
k.onPause()}
v.loop=function(){if(F){return}xt=Date.now()
kt=0
V=e.setInterval(function(){try{k.onFrameStart()
v.redraw()
k.onFrameEnd()}catch(t){e.clearInterval(V)
throw t}},Y)
B=true
F=true
k.onLoop()}
v.frameRate=function(e){q=e
Y=1e3/q
if(B){v.noLoop()
v.loop()}}
var Hr=[]
function jr(e,t,n){if(e.addEventListener){e.addEventListener(t,n,false)}else{e.attachEvent("on"+t,n)}Hr.push({elem:e,type:t,fn:n})}function Kr(e){var t=e.elem,n=e.type,r=e.fn
if(t.removeEventListener){t.removeEventListener(n,r,false)}else if(t.detachEvent){t.detachEvent("on"+n,r)}}v.exit=function(){e.clearInterval(V)
A(v.externals.canvas.id)
for(var t in L.lib){if(L.lib.hasOwnProperty(t)){if(L.lib[t].hasOwnProperty("detach")){L.lib[t].detach(v)}}}var n=Hr.length
while(n--){Kr(Hr[n])}k.onExit()}
v.cursor=function(){if(arguments.length>1||arguments.length===1&&arguments[0]instanceof v.PImage){var e=arguments[0],t,n
if(arguments.length>=3){t=arguments[1]
n=arguments[2]
if(t<0||n<0||n>=e.height||t>=e.width){throw"x and y must be non-negative and less than the dimensions of the image"}}else{t=e.width>>>1
n=e.height>>>1}var r=e.toDataURL()
var i='url("'+r+'") '+t+" "+n+", default"
Z=l.style.cursor=i}else if(arguments.length===1){var a=arguments[0]
Z=l.style.cursor=a}else{Z=l.style.cursor=J}}
v.noCursor=function(){Z=l.style.cursor=p.NOCURSOR}
v.link=function(t,n){if(n!==r){e.open(t,n)}else{e.location=t}}
v.beginDraw=i
v.endDraw=i
Ar.prototype.toImageData=function(e,t,n,i){e=e!==r?e:0
t=t!==r?t:0
n=n!==r?n:v.width
i=i!==r?i:v.height
return b.getImageData(e,t,n,i)}
_r.prototype.toImageData=function(e,i,a,s){e=e!==r?e:0
i=i!==r?i:0
a=a!==r?a:v.width
s=s!==r?s:v.height
var o=t.createElement("canvas"),l=o.getContext("2d"),u=l.createImageData(a,s),f=new h(a*s*4)
b.readPixels(e,i,a,s,b.RGBA,b.UNSIGNED_BYTE,f)
for(var c=0,p=f.length,d=u.data;c<p;c++){d[c]=f[(s-1-n.floor(c/4/a))*a*4+c%(a*4)]}return u}
v.status=function(t){e.status=t}
v.binary=function(e,t){var n
if(t>0){n=t}else if(e instanceof Lr){n=16
e|=0}else{n=32
while(n>1&&!(e>>>n-1&1)){n--}}var r=""
while(n>0){r+=e>>>--n&1?"1":"0"}return r}
v.unbinary=function(e){var t=e.length-1,n=1,r=0
while(t>=0){var i=e[t--]
if(i!=="0"&&i!=="1"){throw"the value passed into unbinary was not an 8 bit binary number"}if(i==="1"){r+=n}n<<=1}return r}
function Xr(e,t,i,a,s,o){var l=e<0?i:t
var u=s===0
var f=s===r||s<0?0:s
var c=n.abs(e)
if(u){f=1
c*=10
while(n.abs(n.round(c)-c)>1e-6&&f<7){++f
c*=10}}else if(f!==0){c*=n.pow(10,f)}var h,p=c*2
if(n.floor(c)===c){h=c}else if(n.floor(p)===p){var d=n.floor(c)
h=d+d%2}else{h=n.round(c)}var m=""
var g=a+f
while(g>0||h>0){g--
m=""+h%10+m
h=n.floor(h/10)}if(o!==r){var v=m.length-3-f
while(v>0){m=m.substring(0,v)+o+m.substring(v)
v-=3}}if(f>0){return l+m.substring(0,m.length-f)+"."+m.substring(m.length-f,m.length)}return l+m}function qr(e,t,n,r,i,a){if(e instanceof Array){var s=[]
for(var o=0,l=e.length;o<l;o++){s.push(Xr(e[o],t,n,r,i,a))}return s}return Xr(e,t,n,r,i,a)}v.nf=function(e,t,n){return qr(e,"","-",t,n)}
v.nfs=function(e,t,n){return qr(e," ","-",t,n)}
v.nfp=function(e,t,n){return qr(e,"+","-",t,n)}
v.nfc=function(e,t,n){return qr(e,"","-",t,n,",")}
var Yr=function(e,t){t=t===r||t===null?t=8:t
if(e<0){e=4294967295+e+1}var n=Number(e).toString(16).toUpperCase()
while(n.length<t){n="0"+n}if(n.length>=t){n=n.substring(n.length-t,n.length)}return n}
v.hex=function(e,t){if(arguments.length===1){if(e instanceof Lr){t=4}else{t=8}}return Yr(e,t)}
function Zr(e){var t=parseInt("0x"+e,16)
if(t>2147483647){t-=4294967296}return t}v.unhex=function(e){if(e instanceof Array){var t=[]
for(var n=0;n<e.length;n++){t.push(Zr(e[n]))}return t}return Zr(e)}
v.loadStrings=function(e){if(localStorage[e]){return localStorage[e].split("\n")}var t=s(e)
if(typeof t!=="string"||t===""){return[]}t=t.replace(/(\r\n?)/g,"\n").replace(/\n$/,"")
return t.split("\n")}
v.saveStrings=function(e,t){localStorage[e]=t.join("\n")}
v.loadBytes=function(e){var t=s(e)
var n=[]
for(var r=0;r<t.length;r++){n.push(t.charCodeAt(r))}return n}
function Jr(e){return Array.prototype.slice.call(e,1)}v.matchAll=function(e,t){var n=[],r
var i=new RegExp(t,"g")
while((r=i.exec(e))!==null){n.push(r)
if(r[0].length===0){++i.lastIndex}}return n.length>0?n:null}
v.__contains=function(e,t){if(typeof e!=="string"){return e.contains.apply(e,Jr(arguments))}return e!==null&&t!==null&&typeof t==="string"&&e.indexOf(t)>-1}
v.__replaceAll=function(e,t,n){if(typeof e!=="string"){return e.replaceAll.apply(e,Jr(arguments))}return e.replace(new RegExp(t,"g"),n)}
v.__replaceFirst=function(e,t,n){if(typeof e!=="string"){return e.replaceFirst.apply(e,Jr(arguments))}return e.replace(new RegExp(t,""),n)}
v.__replace=function(e,t,n){if(typeof e!=="string"){return e.replace.apply(e,Jr(arguments))}if(t instanceof RegExp){return e.replace(t,n)}if(typeof t!=="string"){t=t.toString()}if(t===""){return e}var r=e.indexOf(t)
if(r<0){return e}var i=0,a=""
do{a+=e.substring(i,r)+n
i=r+t.length}while((r=e.indexOf(t,i))>=0)
return a+e.substring(i)}
v.__equals=function(e,t){if(e.equals instanceof Function){return e.equals.apply(e,Jr(arguments))}return e.valueOf()===t.valueOf()}
v.__equalsIgnoreCase=function(e,t){if(typeof e!=="string"){return e.equalsIgnoreCase.apply(e,Jr(arguments))}return e.toLowerCase()===t.toLowerCase()}
v.__toCharArray=function(e){if(typeof e!=="string"){return e.toCharArray.apply(e,Jr(arguments))}var t=[]
for(var n=0,r=e.length;n<r;++n){t[n]=new Lr(e.charAt(n))}return t}
v.__split=function(e,t,n){if(typeof e!=="string"){return e.split.apply(e,Jr(arguments))}var i=new RegExp(t)
if(n===r||n<1){return e.split(i)}var a=[],s=e,o
while((o=s.search(i))!==-1&&a.length<n-1){var l=i.exec(s).toString()
a.push(s.substring(0,o))
s=s.substring(o+l.length)}if(o!==-1||s!==""){a.push(s)}return a}
v.__codePointAt=function(e,t){var n=e.charCodeAt(t),r,i
if(55296<=n&&n<=56319){r=n
i=e.charCodeAt(t+1)
return(r-55296)*1024+(i-56320)+65536}return n}
v.match=function(e,t){return e.match(t)}
v.__startsWith=function(e,t,n){if(typeof e!=="string"){return e.startsWith.apply(e,Jr(arguments))}n=n||0
if(n<0||n>e.length){return false}return t===""||t===e?true:e.indexOf(t)===n}
v.__endsWith=function(e,t){if(typeof e!=="string"){return e.endsWith.apply(e,Jr(arguments))}var n=t?t.length:0
return t===""||t===e?true:e.indexOf(t)===e.length-n}
v.__hashCode=function(e){if(e.hashCode instanceof Function){return e.hashCode.apply(e,Jr(arguments))}return d(e)}
v.__printStackTrace=function(e){v.println("Exception: "+e.toString())}
v._clearLogs=function(){if(L.logger.clear){L.logger.clear()}}
var Qr=[]
v.println=function(e){var t=Qr.length
if(t){L.logger.log(Qr.join(""))
Qr.length=0}if(arguments.length===0&&t===0){L.logger.log("")}else if(arguments.length!==0){L.logger.log(e)}}
v.print=function(e){Qr.push(e)}
v.str=function(e){if(e instanceof Array){var t=[]
for(var n=0;n<e.length;n++){t.push(e[n].toString()+"")}return t}return e.toString()+""}
v.trim=function(e){if(e instanceof Array){var t=[]
for(var n=0;n<e.length;n++){t.push(e[n].replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,""))}return t}return e.replace(/^\s*/,"").replace(/\s*$/,"").replace(/\r*$/,"")}
function ei(e){if(typeof e==="number"){return e!==0}if(typeof e==="boolean"){return e}if(typeof e==="string"){return e.toLowerCase()==="true"}if(e instanceof Lr){return e.code===49||e.code===84||e.code===116}}v.parseBoolean=function(e){if(e instanceof Array){var t=[]
for(var n=0;n<e.length;n++){t.push(ei(e[n]))}return t}return ei(e)}
v.parseByte=function(e){if(e instanceof Array){var t=[]
for(var n=0;n<e.length;n++){t.push(0-(e[n]&128)|e[n]&127)}return t}return 0-(e&128)|e&127}
v.parseChar=function(e){if(typeof e==="number"){return new Lr(String.fromCharCode(e&65535))}if(e instanceof Array){var t=[]
for(var n=0;n<e.length;n++){t.push(new Lr(String.fromCharCode(e[n]&65535)))}return t}throw"char() may receive only one argument of type int, byte, int[], or byte[]."}
function ti(e){if(typeof e==="number"){return e}if(typeof e==="boolean"){return e?1:0}if(typeof e==="string"){return parseFloat(e)}if(e instanceof Lr){return e.code}}v.parseFloat=function(e){if(e instanceof Array){var t=[]
for(var n=0;n<e.length;n++){t.push(ti(e[n]))}return t}return ti(e)}
function ni(e,t){if(typeof e==="number"){return e&4294967295}if(typeof e==="boolean"){return e?1:0}if(typeof e==="string"){var n=parseInt(e,t||10)
return n&4294967295}if(e instanceof Lr){return e.code}}v.parseInt=function(e,t){if(e instanceof Array){var n=[]
for(var r=0;r<e.length;r++){if(typeof e[r]==="string"&&!/^\s*[+\-]?\d+\s*$/.test(e[r])){n.push(0)}else{n.push(ni(e[r],t))}}return n}return ni(e,t)}
v.__int_cast=function(e){return 0|e}
v.__instanceof=function(e,t){if(typeof t!=="function"){throw"Function is expected as type argument for instanceof operator"}if(typeof e==="string"){return t===Object||t===String}if(e instanceof t){return true}if(typeof e!=="object"||e===null){return false}var n=e.constructor
if(t.$isInterface){var r=[]
while(n){if(n.$interfaces){r=r.concat(n.$interfaces)}n=n.$base}while(r.length>0){var i=r.shift()
if(i===t){return true}if(i.$interfaces){r=r.concat(i.$interfaces)}}return false}while(n.hasOwnProperty("$base")){n=n.$base
if(n===t){return true}}return false}
v.abs=n.abs
v.ceil=n.ceil
v.constrain=function(e,t,n){return e>n?n:e<t?t:e}
v.dist=function(){var e,t,r
if(arguments.length===4){e=arguments[0]-arguments[2]
t=arguments[1]-arguments[3]
return n.sqrt(e*e+t*t)}if(arguments.length===6){e=arguments[0]-arguments[3]
t=arguments[1]-arguments[4]
r=arguments[2]-arguments[5]
return n.sqrt(e*e+t*t+r*r)}}
v.exp=n.exp
v.floor=n.floor
v.lerp=function(e,t,n){return(t-e)*n+e}
v.log=n.log
v.mag=function(e,t,r){if(r){return n.sqrt(e*e+t*t+r*r)}return n.sqrt(e*e+t*t)}
v.map=function(e,t,n,r,i){return r+(i-r)*((e-t)/(n-t))}
v.max=function(){if(arguments.length===2){return arguments[0]<arguments[1]?arguments[1]:arguments[0]}var e=arguments.length===1?arguments[0]:arguments
if(!("length"in e&&e.length>0)){throw"Non-empty array is expected"}var t=e[0],n=e.length
for(var r=1;r<n;++r){if(t<e[r]){t=e[r]}}return t}
v.min=function(){if(arguments.length===2){return arguments[0]<arguments[1]?arguments[0]:arguments[1]}var e=arguments.length===1?arguments[0]:arguments
if(!("length"in e&&e.length>0)){throw"Non-empty array is expected"}var t=e[0],n=e.length
for(var r=1;r<n;++r){if(t>e[r]){t=e[r]}}return t}
v.norm=function(e,t,n){return(e-t)/(n-t)}
v.pow=n.pow
v.round=n.round
v.sq=function(e){return e*e}
v.sqrt=n.sqrt
v.convertToDegrees=function(e){return v.angleMode==="degrees"?v.degrees(e):e}
v.convertToRadians=function(e){return v.angleMode==="degrees"?v.radians(e):e}
var ri=function(){var e=arguments
return function(){var t=arguments
for(var n=0;n<e.length;n++){t=[e[n].apply(e[n],t)]}return t[0]}}
v.acos=ri(n.acos,v.convertToDegrees)
v.asin=ri(n.asin,v.convertToDegrees)
v.atan=ri(n.atan,v.convertToDegrees)
v.atan2=ri(n.atan2,v.convertToDegrees)
v.cos=ri(v.convertToRadians,n.cos)
v.degrees=function(e){return e*180/n.PI}
v.radians=function(e){return e/180*n.PI}
v.sin=ri(v.convertToRadians,n.sin)
v.tan=ri(v.convertToRadians,n.tan)
Vn=v.angleMode==="degrees"?60:v.radians(60)
zn=$n/v.tan(Vn/2)
var ii=n.random
v.random=function(){if(arguments.length===0){return ii()}if(arguments.length===1){return ii()*arguments[0]}var e=arguments[0],t=arguments[1]
return ii()*(t-e)+e}
function ai(e,t){var n=e||362436069,r=t||521288629
var i=function(){n=36969*(n&65535)+(n>>>16)&4294967295
r=18e3*(r&65535)+(r>>>16)&4294967295
return((n&65535)<<16|r&65535)&4294967295}
this.nextDouble=function(){var e=i()/4294967296
return e<0?1+e:e}
this.nextInt=i}ai.createRandomized=function(){var e=new Date
return new ai(e/6e4&4294967295,e&4294967295)}
v.randomSeed=function(e){ii=new ai(e).nextDouble}
v.Random=function(e){var t=false,i,a
this.nextGaussian=function(){if(t){t=false
return i}var e,r,s
do{e=2*a()-1
r=2*a()-1
s=e*e+r*r}while(s>=1||s===0)
var o=n.sqrt(-2*n.log(s)/s)
i=r*o
t=true
return e*o}
a=e===r?n.random:new ai(e).nextDouble}
function si(e){var t=e!==r?new ai(e):ai.createRandomized()
var i,a
var s=new h(512)
for(i=0;i<256;++i){s[i]=i}for(i=0;i<256;++i){var o=s[a=t.nextInt()&255]
s[a]=s[i]
s[i]=o}for(i=0;i<256;++i){s[i+256]=s[i]}function l(e,t,n,r){var i=e&15
var a=i<8?t:n,s=i<4?n:i===12||i===14?t:r
return((i&1)===0?a:-a)+((i&2)===0?s:-s)}function u(e,t,n){var r=(e&1)===0?t:n
return(e&2)===0?-r:r}function f(e,t){return(e&1)===0?-t:t}function c(e,t,n){return t+e*(n-t)}this.noise3d=function(e,t,r){var i=n.floor(e)&255,a=n.floor(t)&255,o=n.floor(r)&255
e-=n.floor(e)
t-=n.floor(t)
r-=n.floor(r)
var u=(3-2*e)*e*e,f=(3-2*t)*t*t,h=(3-2*r)*r*r
var p=s[i]+a,d=s[p]+o,m=s[p+1]+o,g=s[i+1]+a,v=s[g]+o,y=s[g+1]+o
return c(h,c(f,c(u,l(s[d],e,t,r),l(s[v],e-1,t,r)),c(u,l(s[m],e,t-1,r),l(s[y],e-1,t-1,r))),c(f,c(u,l(s[d+1],e,t,r-1),l(s[v+1],e-1,t,r-1)),c(u,l(s[m+1],e,t-1,r-1),l(s[y+1],e-1,t-1,r-1))))}
this.noise2d=function(e,t){var r=n.floor(e)&255,i=n.floor(t)&255
e-=n.floor(e)
t-=n.floor(t)
var a=(3-2*e)*e*e,o=(3-2*t)*t*t
var l=s[r]+i,f=s[r+1]+i
return c(o,c(a,u(s[l],e,t),u(s[f],e-1,t)),c(a,u(s[l+1],e,t-1),u(s[f+1],e-1,t-1)))}
this.noise1d=function(e){var t=n.floor(e)&255
e-=n.floor(e)
var r=(3-2*e)*e*e
return c(r,f(s[t],e),f(s[t+1],e-1))}}var oi={generator:r,octaves:4,fallout:.5,seed:r}
v.noise=function(e,t,n){if(oi.generator===r){oi.generator=new si(oi.seed)}var i=oi.generator
var a=1,s=1,o=0
for(var l=0;l<oi.octaves;++l){a*=oi.fallout
switch(arguments.length){case 1:o+=a*(1+i.noise1d(s*e))/2
break
case 2:o+=a*(1+i.noise2d(s*e,s*t))/2
break
case 3:o+=a*(1+i.noise3d(s*e,s*t,s*n))/2
break}s*=2}return o}
v.noiseDetail=function(e,t){oi.octaves=e
if(t!==r){oi.fallout=t}}
v.noiseSeed=function(e){oi.seed=e
oi.generator=r}
Sr.prototype.size=function(e,t,r){if(O){v.stroke(0)}if(T){v.fill(255)}var i={fillStyle:b.fillStyle,strokeStyle:b.strokeStyle,lineCap:b.lineCap,lineJoin:b.lineJoin}
if(l.style.length>0){l.style.removeProperty("width")
l.style.removeProperty("height")}l.width=v.width=e||100
l.height=v.height=t||100
for(var a in i){if(i.hasOwnProperty(a)){b[a]=i[a]}}v.textFont(ln)
v.background()
pn=n.max(1e3,e*t*.05)
v.externals.context=b
for(var s=0;s<p.SINCOS_LENGTH;s++){Tn[s]=v.sin(v.angleMode==="degrees"?s:v.radians(s))
Cn[s]=v.cos(v.angleMode==="degrees"?s:v.radians(s))}}
Ar.prototype.size=function(e,t,n){if(b===r){b=l.getContext("2d")
Nn=new Wr
Dn=new Wr
On=new Nr
Mn=new Nr}Sr.prototype.size.apply(this,arguments)}
_r.prototype.size=function(){var e=false
return function t(n,r,i){if(e){throw"Multiple calls to size() for 3D renders are not allowed."}e=true
function a(e){var t=["experimental-webgl","webgl","webkit-3d"],n
for(var r=0,i=t.length;r<i;r++){n=e.getContext(t[r],{antialias:false})
if(n){break}}return n}try{l.width=v.width=n||100
l.height=v.height=r||100
b=a(l)
Ht=b.createTexture()
jt=b.createTexture()}catch(s){L.debug(s)}if(!b){throw"WebGL context is not supported on this browser."}b.viewport(0,0,l.width,l.height)
b.enable(b.DEPTH_TEST)
b.enable(b.BLEND)
b.blendFunc(b.SRC_ALPHA,b.ONE_MINUS_SRC_ALPHA)
Pt=br(b,ur,fr)
Rt=br(b,or,lr)
v.strokeWeight(1)
It=br(b,hr,pr)
b.useProgram(It)
mr("usingTexture3d",It,"usingTexture",qt)
v.lightFalloff(1,0,0)
v.shininess(1)
v.ambient(255,255,255)
v.specular(0,0,0)
v.emissive(0,0,0)
Ot=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,Ot)
b.bufferData(b.ARRAY_BUFFER,nr,b.STATIC_DRAW)
Mt=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,Mt)
b.bufferData(b.ARRAY_BUFFER,ir,b.STATIC_DRAW)
Nt=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,Nt)
b.bufferData(b.ARRAY_BUFFER,rr,b.STATIC_DRAW)
Dt=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,Dt)
b.bufferData(b.ARRAY_BUFFER,ar,b.STATIC_DRAW)
Wt=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,Wt)
b.bufferData(b.ARRAY_BUFFER,sr,b.STATIC_DRAW)
Ft=b.createBuffer()
Gt=b.createBuffer()
Bt=b.createBuffer()
Vt=b.createBuffer()
Ut=b.createBuffer()
zt=b.createBuffer()
$t=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,$t)
b.bufferData(b.ARRAY_BUFFER,new u([0,0,0]),b.STATIC_DRAW)
Yt=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,Yt)
b.bufferData(b.ARRAY_BUFFER,new u([1,1,0,-1,1,0,-1,-1,0,1,-1,0]),b.STATIC_DRAW)
Zt=b.createBuffer()
b.bindBuffer(b.ARRAY_BUFFER,Zt)
b.bufferData(b.ARRAY_BUFFER,new u([0,0,1,0,1,1,0,1]),b.STATIC_DRAW)
Jt=b.createBuffer()
b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,Jt)
b.bufferData(b.ELEMENT_ARRAY_BUFFER,new c([0,1,2,2,3,0]),b.STATIC_DRAW)
Pn=new Dr
Rn=new Dr
On=new Dr
Mn=new Dr
Fn=new Dr
v.camera()
v.perspective()
Nn=new Wr
Dn=new Wr
wt=new Dr
St=new Dr
At=new Dr
_t=new Dr
Tt=new Dr
Ct=new Dr
Ct.set(-1,3,-3,1,3,-6,3,0,-3,3,0,0,1,0,0,0)
Sr.prototype.size.apply(this,arguments)}}()
Ar.prototype.ambientLight=Sr.prototype.a3DOnlyFunction
_r.prototype.ambientLight=function(e,t,n,r,i,a){if(kn===p.MAX_LIGHTS){throw"can only create "+p.MAX_LIGHTS+" lights"}var s=new y(r,i,a)
var o=new Dr
o.scale(1,-1,1)
o.apply(On.array())
o.mult(s,s)
var l=Fr(e,t,n,0)
var u=[((l&p.RED_MASK)>>>16)/255,((l&p.GREEN_MASK)>>>8)/255,(l&p.BLUE_MASK)/255]
b.useProgram(It)
dr("lights.color.3d."+kn,It,"lights"+kn+".color",u)
dr("lights.position.3d."+kn,It,"lights"+kn+".position",s.array())
mr("lights.type.3d."+kn,It,"lights"+kn+".type",0)
mr("lightCount3d",It,"lightCount",++kn)}
Ar.prototype.directionalLight=Sr.prototype.a3DOnlyFunction
_r.prototype.directionalLight=function(e,t,n,r,i,a){if(kn===p.MAX_LIGHTS){throw"can only create "+p.MAX_LIGHTS+" lights"}b.useProgram(It)
var s=new Dr
s.scale(1,-1,1)
s.apply(On.array())
s=s.array()
var o=[s[0]*r+s[4]*i+s[8]*a,s[1]*r+s[5]*i+s[9]*a,s[2]*r+s[6]*i+s[10]*a]
var l=Fr(e,t,n,0)
var u=[((l&p.RED_MASK)>>>16)/255,((l&p.GREEN_MASK)>>>8)/255,(l&p.BLUE_MASK)/255]
dr("lights.color.3d."+kn,It,"lights"+kn+".color",u)
dr("lights.position.3d."+kn,It,"lights"+kn+".position",o)
mr("lights.type.3d."+kn,It,"lights"+kn+".type",1)
mr("lightCount3d",It,"lightCount",++kn)}
Ar.prototype.lightFalloff=Sr.prototype.a3DOnlyFunction
_r.prototype.lightFalloff=function(e,t,n){b.useProgram(It)
dr("falloff3d",It,"falloff",[e,t,n])}
Ar.prototype.lightSpecular=Sr.prototype.a3DOnlyFunction
_r.prototype.lightSpecular=function(e,t,n){var r=Fr(e,t,n,0)
var i=[((r&p.RED_MASK)>>>16)/255,((r&p.GREEN_MASK)>>>8)/255,(r&p.BLUE_MASK)/255]
b.useProgram(It)
dr("specular3d",It,"specular",i)}
v.lights=function(){v.ambientLight(128,128,128)
v.directionalLight(128,128,128,0,0,-1)
v.lightFalloff(1,0,0)
v.lightSpecular(0,0,0)}
Ar.prototype.pointLight=Sr.prototype.a3DOnlyFunction
_r.prototype.pointLight=function(e,t,n,r,i,a){if(kn===p.MAX_LIGHTS){throw"can only create "+p.MAX_LIGHTS+" lights"}var s=new y(r,i,a)
var o=new Dr
o.scale(1,-1,1)
o.apply(On.array())
o.mult(s,s)
var l=Fr(e,t,n,0)
var u=[((l&p.RED_MASK)>>>16)/255,((l&p.GREEN_MASK)>>>8)/255,(l&p.BLUE_MASK)/255]
b.useProgram(It)
dr("lights.color.3d."+kn,It,"lights"+kn+".color",u)
dr("lights.position.3d."+kn,It,"lights"+kn+".position",s.array())
mr("lights.type.3d."+kn,It,"lights"+kn+".type",2)
mr("lightCount3d",It,"lightCount",++kn)}
Ar.prototype.noLights=Sr.prototype.a3DOnlyFunction
_r.prototype.noLights=function(){kn=0
b.useProgram(It)
mr("lightCount3d",It,"lightCount",kn)}
Ar.prototype.spotLight=Sr.prototype.a3DOnlyFunction
_r.prototype.spotLight=function(e,t,n,r,i,a,s,o,l,u,f){if(kn===p.MAX_LIGHTS){throw"can only create "+p.MAX_LIGHTS+" lights"}b.useProgram(It)
var c=new y(r,i,a)
var h=new Dr
h.scale(1,-1,1)
h.apply(On.array())
h.mult(c,c)
h=h.array()
var d=[h[0]*s+h[4]*o+h[8]*l,h[1]*s+h[5]*o+h[9]*l,h[2]*s+h[6]*o+h[10]*l]
var m=Fr(e,t,n,0)
var g=[((m&p.RED_MASK)>>>16)/255,((m&p.GREEN_MASK)>>>8)/255,(m&p.BLUE_MASK)/255]
dr("lights.color.3d."+kn,It,"lights"+kn+".color",g)
dr("lights.position.3d."+kn,It,"lights"+kn+".position",c.array())
dr("lights.direction.3d."+kn,It,"lights"+kn+".direction",d)
dr("lights.concentration.3d."+kn,It,"lights"+kn+".concentration",f)
dr("lights.angle.3d."+kn,It,"lights"+kn+".angle",u)
mr("lights.type.3d."+kn,It,"lights"+kn+".type",3)
mr("lightCount3d",It,"lightCount",++kn)}
Ar.prototype.beginCamera=function(){throw"beginCamera() is not available in 2D mode"}
_r.prototype.beginCamera=function(){if(Gn){throw"You cannot call beginCamera() again before calling endCamera()"}Gn=true
On=Rn
Mn=Pn}
Ar.prototype.endCamera=function(){throw"endCamera() is not available in 2D mode"}
_r.prototype.endCamera=function(){if(!Gn){throw"You cannot call endCamera() before calling beginCamera()"}On.set(Pn)
Mn.set(Rn)
Gn=false}
v.camera=function(e,t,n,i,a,s,o,l,u){if(e===r){Un=v.width/2
$n=v.height/2
zn=$n/v.tan(Vn/2)
e=Un
t=$n
n=zn
i=Un
a=$n
s=0
o=0
l=1
u=0}var f=new y(e-i,t-a,n-s)
var c=new y(o,l,u)
f.normalize()
var h=y.cross(c,f)
c=y.cross(f,h)
h.normalize()
c.normalize()
var p=h.x,d=h.y,m=h.z
var g=c.x,b=c.y,x=c.z
var k=f.x,E=f.y,w=f.z
Pn.set(p,d,m,0,g,b,x,0,k,E,w,0,0,0,0,1)
Pn.translate(-e,-t,-n)
Rn.reset()
Rn.invApply(p,d,m,0,g,b,x,0,k,E,w,0,0,0,0,1)
Rn.translate(e,t,n)
On.set(Pn)
Mn.set(Rn)}
v.perspective=function(e,t,n,r){if(arguments.length===0){$n=l.height/2
zn=$n/v.tan(Vn/2)
Hn=zn/10
jn=zn*10
Kn=v.width/v.height
e=Vn
t=Kn
n=Hn
r=jn}var i,a,s,o
i=n*v.tan(e/2)
a=-i
s=i*t
o=a*t
v.frustum(o,s,a,i,n,r)}
Ar.prototype.frustum=function(){throw"Processing.js: frustum() is not supported in 2D mode"}
_r.prototype.frustum=function(e,t,n,r,i,a){Bn=true
Fn=new Dr
Fn.set(2*i/(t-e),0,(t+e)/(t-e),0,0,2*i/(r-n),(r+n)/(r-n),0,0,0,-(a+i)/(a-i),-(2*a*i)/(a-i),0,0,-1,0)
var s=new Dr
s.set(Fn)
s.transpose()
b.useProgram(Pt)
gr("projection2d",Pt,"projection",false,s.array())
b.useProgram(It)
gr("projection3d",It,"projection",false,s.array())
b.useProgram(Rt)
gr("uProjectionUS",Rt,"uProjection",false,s.array())}
v.ortho=function(e,t,n,r,i,a){if(arguments.length===0){e=0
t=v.width
n=0
r=v.height
i=-10
a=10}var s=2/(t-e)
var o=2/(r-n)
var l=-2/(a-i)
var u=-(t+e)/(t-e)
var f=-(r+n)/(r-n)
var c=-(a+i)/(a-i)
Fn=new Dr
Fn.set(s,0,0,u,0,o,0,f,0,0,l,c,0,0,0,1)
var h=new Dr
h.set(Fn)
h.transpose()
b.useProgram(Pt)
gr("projection2d",Pt,"projection",false,h.array())
b.useProgram(It)
gr("projection3d",It,"projection",false,h.array())
b.useProgram(Rt)
gr("uProjectionUS",Rt,"uProjection",false,h.array())
Bn=false}
v.printProjection=function(){Fn.print()}
v.printCamera=function(){Pn.print()}
Ar.prototype.box=Sr.prototype.a3DOnlyFunction
_r.prototype.box=function(e,t,n){if(!t||!n){t=n=e}var r=new Dr
r.scale(e,t,n)
var i=new Dr
i.scale(1,-1,1)
i.apply(On.array())
i.transpose()
if(T){b.useProgram(It)
gr("model3d",It,"model",false,r.array())
gr("view3d",It,"view",false,i.array())
b.enable(b.POLYGON_OFFSET_FILL)
b.polygonOffset(1,1)
dr("color3d",It,"color",I)
if(kn>0){var a=new Dr
a.set(i)
var s=new Dr
s.set(r)
a.mult(s)
var o=new Dr
o.set(a)
o.invert()
o.transpose()
gr("normalTransform3d",It,"normalTransform",false,o.array())
vr("normal3d",It,"Normal",3,Mt)}else{yr("normal3d",It,"Normal")}vr("vertex3d",It,"Vertex",3,Ot)
yr("aColor3d",It,"aColor")
yr("aTexture3d",It,"aTexture")
b.drawArrays(b.TRIANGLES,0,nr.length/3)
b.disable(b.POLYGON_OFFSET_FILL)}if(W>0&&O){b.useProgram(Pt)
gr("model2d",Pt,"model",false,r.array())
gr("view2d",Pt,"view",false,i.array())
dr("color2d",Pt,"color",M)
mr("picktype2d",Pt,"picktype",0)
vr("vertex2d",Pt,"Vertex",3,Nt)
yr("aTextureCoord2d",Pt,"aTextureCoord")
b.drawArrays(b.LINES,0,rr.length/3)}}
var li=function(){var e
Ln=[]
for(e=0;e<wn;e++){Ln.push(0)
Ln.push(-1)
Ln.push(0)
Ln.push(Sn[e])
Ln.push(An[e])
Ln.push(_n[e])}Ln.push(0)
Ln.push(-1)
Ln.push(0)
Ln.push(Sn[0])
Ln.push(An[0])
Ln.push(_n[0])
var t,n,r
var i=0
for(e=2;e<En;e++){t=n=i
i+=wn
r=i
for(var a=0;a<wn;a++){Ln.push(Sn[t])
Ln.push(An[t])
Ln.push(_n[t++])
Ln.push(Sn[r])
Ln.push(An[r])
Ln.push(_n[r++])}t=n
r=i
Ln.push(Sn[t])
Ln.push(An[t])
Ln.push(_n[t])
Ln.push(Sn[r])
Ln.push(An[r])
Ln.push(_n[r])}for(e=0;e<wn;e++){r=i+e
Ln.push(Sn[r])
Ln.push(An[r])
Ln.push(_n[r])
Ln.push(0)
Ln.push(1)
Ln.push(0)}Ln.push(Sn[i])
Ln.push(An[i])
Ln.push(_n[i])
Ln.push(0)
Ln.push(1)
Ln.push(0)
b.bindBuffer(b.ARRAY_BUFFER,Ft)
b.bufferData(b.ARRAY_BUFFER,new u(Ln),b.STATIC_DRAW)}
v.sphereDetail=function(e,t){var n
if(arguments.length===1){e=t=arguments[0]}if(e<3){e=3}if(t<2){t=2}if(e===wn&&t===En){return}var r=p.SINCOS_LENGTH/e
var i=new u(e)
var a=new u(e)
for(n=0;n<e;n++){i[n]=Cn[n*r%p.SINCOS_LENGTH|0]
a[n]=Tn[n*r%p.SINCOS_LENGTH|0]}var s=e*(t-1)+2
var o=0
Sn=new u(s)
An=new u(s)
_n=new u(s)
var l=p.SINCOS_LENGTH*.5/t
var f=l
for(n=1;n<t;n++){var c=Tn[f%p.SINCOS_LENGTH|0]
var h=-Cn[f%p.SINCOS_LENGTH|0]
for(var d=0;d<e;d++){Sn[o]=i[d]*c
An[o]=h
_n[o++]=a[d]*c}f+=l}wn=e
En=t
li()}
Ar.prototype.sphere=Sr.prototype.a3DOnlyFunction
_r.prototype.sphere=function(){var e=arguments[0]
if(wn<3||En<2){v.sphereDetail(30)}var t=new Dr
t.scale(e,e,e)
var n=new Dr
n.scale(1,-1,1)
n.apply(On.array())
n.transpose()
if(T){if(kn>0){var r=new Dr
r.set(n)
var i=new Dr
i.set(t)
r.mult(i)
var a=new Dr
a.set(r)
a.invert()
a.transpose()
gr("normalTransform3d",It,"normalTransform",false,a.array())
vr("normal3d",It,"Normal",3,Ft)}else{yr("normal3d",It,"Normal")}b.useProgram(It)
yr("aTexture3d",It,"aTexture")
gr("model3d",It,"model",false,t.array())
gr("view3d",It,"view",false,n.array())
vr("vertex3d",It,"Vertex",3,Ft)
yr("aColor3d",It,"aColor")
b.enable(b.POLYGON_OFFSET_FILL)
b.polygonOffset(1,1)
dr("color3d",It,"color",I)
b.drawArrays(b.TRIANGLE_STRIP,0,Ln.length/3)
b.disable(b.POLYGON_OFFSET_FILL)}if(W>0&&O){b.useProgram(Pt)
gr("model2d",Pt,"model",false,t.array())
gr("view2d",Pt,"view",false,n.array())
vr("vertex2d",Pt,"Vertex",3,Ft)
yr("aTextureCoord2d",Pt,"aTextureCoord")
dr("color2d",Pt,"color",M)
mr("picktype2d",Pt,"picktype",0)
b.drawArrays(b.LINE_STRIP,0,Ln.length/3)}}
v.modelX=function(e,t,n){var r=On.array()
var i=Rn.array()
var a=r[0]*e+r[1]*t+r[2]*n+r[3]
var s=r[4]*e+r[5]*t+r[6]*n+r[7]
var o=r[8]*e+r[9]*t+r[10]*n+r[11]
var l=r[12]*e+r[13]*t+r[14]*n+r[15]
var u=i[0]*a+i[1]*s+i[2]*o+i[3]*l
var f=i[12]*a+i[13]*s+i[14]*o+i[15]*l
return f!==0?u/f:u}
v.modelY=function(e,t,n){var r=On.array()
var i=Rn.array()
var a=r[0]*e+r[1]*t+r[2]*n+r[3]
var s=r[4]*e+r[5]*t+r[6]*n+r[7]
var o=r[8]*e+r[9]*t+r[10]*n+r[11]
var l=r[12]*e+r[13]*t+r[14]*n+r[15]
var u=i[4]*a+i[5]*s+i[6]*o+i[7]*l
var f=i[12]*a+i[13]*s+i[14]*o+i[15]*l
return f!==0?u/f:u}
v.modelZ=function(e,t,n){var r=On.array()
var i=Rn.array()
var a=r[0]*e+r[1]*t+r[2]*n+r[3]
var s=r[4]*e+r[5]*t+r[6]*n+r[7]
var o=r[8]*e+r[9]*t+r[10]*n+r[11]
var l=r[12]*e+r[13]*t+r[14]*n+r[15]
var u=i[8]*a+i[9]*s+i[10]*o+i[11]*l
var f=i[12]*a+i[13]*s+i[14]*o+i[15]*l
return f!==0?u/f:u}
Ar.prototype.ambient=Sr.prototype.a3DOnlyFunction
_r.prototype.ambient=function(e,t,n){b.useProgram(It)
mr("usingMat3d",It,"usingMat",true)
var r=v.color(e,t,n)
dr("mat_ambient3d",It,"mat_ambient",v.color.toGLArray(r).slice(0,3))}
Ar.prototype.emissive=Sr.prototype.a3DOnlyFunction
_r.prototype.emissive=function(e,t,n){b.useProgram(It)
mr("usingMat3d",It,"usingMat",true)
var r=v.color(e,t,n)
dr("mat_emissive3d",It,"mat_emissive",v.color.toGLArray(r).slice(0,3))}
Ar.prototype.shininess=Sr.prototype.a3DOnlyFunction
_r.prototype.shininess=function(e){b.useProgram(It)
mr("usingMat3d",It,"usingMat",true)
dr("shininess3d",It,"shininess",e)}
Ar.prototype.specular=Sr.prototype.a3DOnlyFunction
_r.prototype.specular=function(e,t,n){b.useProgram(It)
mr("usingMat3d",It,"usingMat",true)
var r=v.color(e,t,n)
dr("mat_specular3d",It,"mat_specular",v.color.toGLArray(r).slice(0,3))}
v.screenX=function(e,t,n){var r=On.array()
if(r.length===16){var i=r[0]*e+r[1]*t+r[2]*n+r[3]
var a=r[4]*e+r[5]*t+r[6]*n+r[7]
var s=r[8]*e+r[9]*t+r[10]*n+r[11]
var o=r[12]*e+r[13]*t+r[14]*n+r[15]
var l=Fn.array()
var u=l[0]*i+l[1]*a+l[2]*s+l[3]*o
var f=l[12]*i+l[13]*a+l[14]*s+l[15]*o
if(f!==0){u/=f}return v.width*(1+u)/2}return On.multX(e,t)}
v.screenY=function ua(e,t,n){var r=On.array()
if(r.length===16){var i=r[0]*e+r[1]*t+r[2]*n+r[3]
var a=r[4]*e+r[5]*t+r[6]*n+r[7]
var s=r[8]*e+r[9]*t+r[10]*n+r[11]
var o=r[12]*e+r[13]*t+r[14]*n+r[15]
var l=Fn.array()
var u=l[4]*i+l[5]*a+l[6]*s+l[7]*o
var f=l[12]*i+l[13]*a+l[14]*s+l[15]*o
if(f!==0){u/=f}return v.height*(1+u)/2}return On.multY(e,t)}
v.screenZ=function fa(e,t,n){var r=On.array()
if(r.length!==16){return 0}var i=Fn.array()
var a=r[0]*e+r[1]*t+r[2]*n+r[3]
var s=r[4]*e+r[5]*t+r[6]*n+r[7]
var o=r[8]*e+r[9]*t+r[10]*n+r[11]
var l=r[12]*e+r[13]*t+r[14]*n+r[15]
var u=i[8]*a+i[9]*s+i[10]*o+i[11]*l
var f=i[12]*a+i[13]*s+i[14]*o+i[15]*l
if(f!==0){u/=f}return(u+1)/2}
Sr.prototype.fill=function(){var e=v.color(arguments[0],arguments[1],arguments[2],arguments[3])
if(e===P&&T){return}T=true
P=e}
Ar.prototype.fill=function(){Sr.prototype.fill.apply(this,arguments)
R=true}
_r.prototype.fill=function(){Sr.prototype.fill.apply(this,arguments)
I=v.color.toGLArray(P)}
function ui(){if(T){if(R){b.fillStyle=v.color.toString(P)
R=false}b.fill()}}v.noFill=function(){T=false}
Sr.prototype.stroke=function(){var e=v.color(arguments[0],arguments[1],arguments[2],arguments[3])
if(e===N&&O){return}O=true
N=e}
Ar.prototype.stroke=function(){Sr.prototype.stroke.apply(this,arguments)
D=true}
_r.prototype.stroke=function(){Sr.prototype.stroke.apply(this,arguments)
M=v.color.toGLArray(N)}
function fi(){if(O){if(D){b.strokeStyle=v.color.toString(N)
D=false}b.stroke()}}v.noStroke=function(){O=false}
Sr.prototype.strokeWeight=function(e){W=e}
Ar.prototype.strokeWeight=function(e){Sr.prototype.strokeWeight.apply(this,arguments)
b.lineWidth=e}
_r.prototype.strokeWeight=function(e){Sr.prototype.strokeWeight.apply(this,arguments)
b.useProgram(Pt)
dr("pointSize2d",Pt,"pointSize",e)
b.useProgram(Rt)
dr("pointSizeUnlitShape",Rt,"pointSize",e)
b.lineWidth(e)}
v.strokeCap=function(e){w.$ensureContext().lineCap=e}
v.strokeJoin=function(e){w.$ensureContext().lineJoin=e}
Ar.prototype.smooth=function(){G=true
var e=l.style
e.setProperty("image-rendering","optimizeQuality","important")
e.setProperty("-ms-interpolation-mode","bicubic","important")
if(b.hasOwnProperty("mozImageSmoothingEnabled")){b.mozImageSmoothingEnabled=true}}
_r.prototype.smooth=i
Ar.prototype.noSmooth=function(){G=false
var e=l.style
e.setProperty("image-rendering","optimizeSpeed","important")
e.setProperty("image-rendering","-moz-crisp-edges","important")
e.setProperty("image-rendering","-webkit-optimize-contrast","important")
e.setProperty("image-rendering","optimize-contrast","important")
e.setProperty("-ms-interpolation-mode","nearest-neighbor","important")
if(b.hasOwnProperty("mozImageSmoothingEnabled")){b.mozImageSmoothingEnabled=false}}
_r.prototype.noSmooth=i
Ar.prototype.point=function(e,t){if(!O){return}if(!G){e=n.round(e)
t=n.round(t)}b.fillStyle=v.color.toString(N)
R=true
if(W>1){b.beginPath()
b.arc(e,t,W/2,0,p.TWO_PI,false)
b.fill()}else{b.fillRect(e,t,1,1)}}
_r.prototype.point=function(e,t,n){var r=new Dr
r.translate(e,t,n||0)
r.transpose()
var i=new Dr
i.scale(1,-1,1)
i.apply(On.array())
i.transpose()
b.useProgram(Pt)
gr("model2d",Pt,"model",false,r.array())
gr("view2d",Pt,"view",false,i.array())
if(W>0&&O){dr("color2d",Pt,"color",M)
mr("picktype2d",Pt,"picktype",0)
vr("vertex2d",Pt,"Vertex",3,$t)
yr("aTextureCoord2d",Pt,"aTextureCoord")
b.drawArrays(b.POINTS,0,1)}}
v.beginShape=function(e){Q=e
tt=[]
Xn=[]}
Ar.prototype.vertex=function(e,t,n,r){var i=[]
if(Qn){Qn=false}i["isVert"]=true
i[0]=e
i[1]=t
i[2]=0
i[3]=n
i[4]=r
i[5]=P
i[6]=N
Xn.push(i)}
_r.prototype.vertex=function(e,t,n,i,a){var s=[]
if(Qn){Qn=false}s["isVert"]=true
if(a===r&&qt){a=i
i=n
n=0}if(i!==r&&a!==r){if(Xt===p.IMAGE){i/=Kt.width
a/=Kt.height}i=i>1?1:i
i=i<0?0:i
a=a>1?1:a
a=a<0?0:a}s[0]=e
s[1]=t
s[2]=n||0
s[3]=i||0
s[4]=a||0
s[5]=I[0]
s[6]=I[1]
s[7]=I[2]
s[8]=I[3]
s[9]=M[0]
s[10]=M[1]
s[11]=M[2]
s[12]=M[3]
s[13]=H
s[14]=j
s[15]=K
Xn.push(s)}
var ci=function(e,t){var n=new Dr
n.scale(1,-1,1)
n.apply(On.array())
n.transpose()
b.useProgram(Rt)
gr("uViewUS",Rt,"uView",false,n.array())
vr("aVertexUS",Rt,"aVertex",3,$t)
b.bufferData(b.ARRAY_BUFFER,new u(e),b.STREAM_DRAW)
vr("aColorUS",Rt,"aColor",4,Vt)
b.bufferData(b.ARRAY_BUFFER,new u(t),b.STREAM_DRAW)
b.drawArrays(b.POINTS,0,e.length/3)}
var hi=function(e,t,n){var r
if(t==="LINES"){r=b.LINES}else if(t==="LINE_LOOP"){r=b.LINE_LOOP}else{r=b.LINE_STRIP}var i=new Dr
i.scale(1,-1,1)
i.apply(On.array())
i.transpose()
b.useProgram(Rt)
gr("uViewUS",Rt,"uView",false,i.array())
vr("aVertexUS",Rt,"aVertex",3,Gt)
b.bufferData(b.ARRAY_BUFFER,new u(e),b.STREAM_DRAW)
vr("aColorUS",Rt,"aColor",4,Ut)
b.bufferData(b.ARRAY_BUFFER,new u(n),b.STREAM_DRAW)
b.drawArrays(r,0,e.length/3)}
var pi=function(e,t,n,r){var i
if(t==="TRIANGLES"){i=b.TRIANGLES}else if(t==="TRIANGLE_FAN"){i=b.TRIANGLE_FAN}else{i=b.TRIANGLE_STRIP}var a=new Dr
a.scale(1,-1,1)
a.apply(On.array())
a.transpose()
b.useProgram(It)
gr("model3d",It,"model",false,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])
gr("view3d",It,"view",false,a.array())
b.enable(b.POLYGON_OFFSET_FILL)
b.polygonOffset(1,1)
dr("color3d",It,"color",[-1,0,0,0])
vr("vertex3d",It,"Vertex",3,Bt)
b.bufferData(b.ARRAY_BUFFER,new u(e),b.STREAM_DRAW)
if(qt&&gt!==null){vt(n)}vr("aColor3d",It,"aColor",4,Vt)
b.bufferData(b.ARRAY_BUFFER,new u(n),b.STREAM_DRAW)
yr("normal3d",It,"Normal")
if(qt){mr("usingTexture3d",It,"usingTexture",qt)
vr("aTexture3d",It,"aTexture",2,zt)
b.bufferData(b.ARRAY_BUFFER,new u(r),b.STREAM_DRAW)}b.drawArrays(i,0,e.length/3)
b.disable(b.POLYGON_OFFSET_FILL)}
function di(){ui()
fi()
b.closePath()}Ar.prototype.endShape=function(e){if(Xn.length===0){return}var t=e===p.CLOSE
if(t){Xn.push(Xn[0])}var n=[]
var i=[]
var a=[]
var s=[]
var o=[]
var l
Qn=true
var u,f,c
var h=Xn.length
for(u=0;u<h;u++){l=Xn[u]
for(f=0;f<3;f++){i.push(l[f])}}for(u=0;u<h;u++){l=Xn[u]
for(f=5;f<9;f++){a.push(l[f])}}for(u=0;u<h;u++){l=Xn[u]
for(f=9;f<13;f++){s.push(l[f])}}for(u=0;u<h;u++){l=Xn[u]
o.push(l[3])
o.push(l[4])}if(Zn&&(Q===p.POLYGON||Q===r)){if(h>3){var d=[],m=1-nt
b.beginPath()
b.moveTo(Xn[1][0],Xn[1][1])
for(u=1;u+2<h;u++){l=Xn[u]
d[0]=[l[0],l[1]]
d[1]=[l[0]+(m*Xn[u+1][0]-m*Xn[u-1][0])/6,l[1]+(m*Xn[u+1][1]-m*Xn[u-1][1])/6]
d[2]=[Xn[u+1][0]+(m*Xn[u][0]-m*Xn[u+2][0])/6,Xn[u+1][1]+(m*Xn[u][1]-m*Xn[u+2][1])/6]
d[3]=[Xn[u+1][0],Xn[u+1][1]]
b.bezierCurveTo(d[1][0],d[1][1],d[2][0],d[2][1],d[3][0],d[3][1])}di()}}else if(Jn&&(Q===p.POLYGON||Q===r)){b.beginPath()
for(u=0;u<h;u++){l=Xn[u]
if(Xn[u]["isVert"]){if(Xn[u]["moveTo"]){b.moveTo(l[0],l[1])}else{b.lineTo(l[0],l[1])}}else{b.bezierCurveTo(Xn[u][0],Xn[u][1],Xn[u][2],Xn[u][3],Xn[u][4],Xn[u][5])}}di()}else{if(Q===p.POINTS){for(u=0;u<h;u++){l=Xn[u]
if(O){v.stroke(l[6])}v.point(l[0],l[1])}}else if(Q===p.LINES){for(u=0;u+1<h;u+=2){l=Xn[u]
if(O){v.stroke(Xn[u+1][6])}v.line(l[0],l[1],Xn[u+1][0],Xn[u+1][1])}}else if(Q===p.TRIANGLES){for(u=0;u+2<h;u+=3){l=Xn[u]
b.beginPath()
b.moveTo(l[0],l[1])
b.lineTo(Xn[u+1][0],Xn[u+1][1])
b.lineTo(Xn[u+2][0],Xn[u+2][1])
b.lineTo(l[0],l[1])
if(T){v.fill(Xn[u+2][5])
ui()}if(O){v.stroke(Xn[u+2][6])
fi()}b.closePath()}}else if(Q===p.TRIANGLE_STRIP){for(u=0;u+1<h;u++){l=Xn[u]
b.beginPath()
b.moveTo(Xn[u+1][0],Xn[u+1][1])
b.lineTo(l[0],l[1])
if(O){v.stroke(Xn[u+1][6])}if(T){v.fill(Xn[u+1][5])}if(u+2<h){b.lineTo(Xn[u+2][0],Xn[u+2][1])
if(O){v.stroke(Xn[u+2][6])}if(T){v.fill(Xn[u+2][5])}}di()}}else if(Q===p.TRIANGLE_FAN){if(h>2){b.beginPath()
b.moveTo(Xn[0][0],Xn[0][1])
b.lineTo(Xn[1][0],Xn[1][1])
b.lineTo(Xn[2][0],Xn[2][1])
if(T){v.fill(Xn[2][5])
ui()}if(O){v.stroke(Xn[2][6])
fi()}b.closePath()
for(u=3;u<h;u++){l=Xn[u]
b.beginPath()
b.moveTo(Xn[0][0],Xn[0][1])
b.lineTo(Xn[u-1][0],Xn[u-1][1])
b.lineTo(l[0],l[1])
if(T){v.fill(l[5])
ui()}if(O){v.stroke(l[6])
fi()}b.closePath()}}}else if(Q===p.QUADS){for(u=0;u+3<h;u+=4){l=Xn[u]
b.beginPath()
b.moveTo(l[0],l[1])
for(f=1;f<4;f++){b.lineTo(Xn[u+f][0],Xn[u+f][1])}b.lineTo(l[0],l[1])
if(T){v.fill(Xn[u+3][5])
ui()}if(O){v.stroke(Xn[u+3][6])
fi()}b.closePath()}}else if(Q===p.QUAD_STRIP){if(h>3){for(u=0;u+1<h;u+=2){l=Xn[u]
b.beginPath()
if(u+3<h){b.moveTo(Xn[u+2][0],Xn[u+2][1])
b.lineTo(l[0],l[1])
b.lineTo(Xn[u+1][0],Xn[u+1][1])
b.lineTo(Xn[u+3][0],Xn[u+3][1])
if(T){v.fill(Xn[u+3][5])}if(O){v.stroke(Xn[u+3][6])}}else{b.moveTo(l[0],l[1])
b.lineTo(Xn[u+1][0],Xn[u+1][1])}di()}}}else{b.beginPath()
b.moveTo(Xn[0][0],Xn[0][1])
for(u=1;u<h;u++){l=Xn[u]
if(l["isVert"]){if(l["moveTo"]){b.moveTo(l[0],l[1])}else{b.lineTo(l[0],l[1])}}}di()}}Zn=false
Jn=false
qn=[]
Yn=0
if(t){Xn.pop()}}
_r.prototype.endShape=function(e){if(Xn.length===0){return}var t=e===p.CLOSE
var n=[]
var i=[]
var a=[]
var s=[]
var o=[]
var l
Qn=true
var u,f,c
var h=Xn.length
for(u=0;u<h;u++){l=Xn[u]
for(f=0;f<3;f++){i.push(l[f])}}for(u=0;u<h;u++){l=Xn[u]
for(f=5;f<9;f++){a.push(l[f])}}for(u=0;u<h;u++){l=Xn[u]
for(f=9;f<13;f++){s.push(l[f])}}for(u=0;u<h;u++){l=Xn[u]
o.push(l[3])
o.push(l[4])}if(t){i.push(Xn[0][0])
i.push(Xn[0][1])
i.push(Xn[0][2])
for(u=5;u<9;u++){a.push(Xn[0][u])}for(u=9;u<13;u++){s.push(Xn[0][u])}o.push(Xn[0][3])
o.push(Xn[0][4])}if(Zn&&(Q===p.POLYGON||Q===r)){n=i
if(O){hi(n,null,s)}if(T){pi(i,null,a)}}else if(Jn&&(Q===p.POLYGON||Q===r)){n=i
n.splice(n.length-3)
s.splice(s.length-4)
if(O){hi(n,null,s)}if(T){pi(i,"TRIANGLES",a)}}else{if(Q===p.POINTS){for(u=0;u<h;u++){l=Xn[u]
for(f=0;f<3;f++){n.push(l[f])}}ci(n,s)}else if(Q===p.LINES){for(u=0;u<h;u++){l=Xn[u]
for(f=0;f<3;f++){n.push(l[f])}}for(u=0;u<h;u++){l=Xn[u]
for(f=5;f<9;f++){a.push(l[f])}}hi(n,"LINES",s)}else if(Q===p.TRIANGLES){if(h>2){for(u=0;u+2<h;u+=3){i=[]
o=[]
n=[]
a=[]
s=[]
for(f=0;f<3;f++){for(c=0;c<3;c++){n.push(Xn[u+f][c])
i.push(Xn[u+f][c])}}for(f=0;f<3;f++){for(c=3;c<5;c++){o.push(Xn[u+f][c])}}for(f=0;f<3;f++){for(c=5;c<9;c++){a.push(Xn[u+f][c])
s.push(Xn[u+f][c+4])}}if(O){hi(n,"LINE_LOOP",s)}if(T||qt){pi(i,"TRIANGLES",a,o)}}}}else if(Q===p.TRIANGLE_STRIP){if(h>2){for(u=0;u+2<h;u++){n=[]
i=[]
s=[]
a=[]
o=[]
for(f=0;f<3;f++){for(c=0;c<3;c++){n.push(Xn[u+f][c])
i.push(Xn[u+f][c])}}for(f=0;f<3;f++){for(c=3;c<5;c++){o.push(Xn[u+f][c])}}for(f=0;f<3;f++){for(c=5;c<9;c++){s.push(Xn[u+f][c+4])
a.push(Xn[u+f][c])}}if(T||qt){pi(i,"TRIANGLE_STRIP",a,o)}if(O){hi(n,"LINE_LOOP",s)}}}}else if(Q===p.TRIANGLE_FAN){if(h>2){for(u=0;u<3;u++){l=Xn[u]
for(f=0;f<3;f++){n.push(l[f])}}for(u=0;u<3;u++){l=Xn[u]
for(f=9;f<13;f++){s.push(l[f])}}if(O){hi(n,"LINE_LOOP",s)}for(u=2;u+1<h;u++){n=[]
s=[]
n.push(Xn[0][0])
n.push(Xn[0][1])
n.push(Xn[0][2])
s.push(Xn[0][9])
s.push(Xn[0][10])
s.push(Xn[0][11])
s.push(Xn[0][12])
for(f=0;f<2;f++){for(c=0;c<3;c++){n.push(Xn[u+f][c])}}for(f=0;f<2;f++){for(c=9;c<13;c++){s.push(Xn[u+f][c])}}if(O){hi(n,"LINE_STRIP",s)}}if(T||qt){pi(i,"TRIANGLE_FAN",a,o)}}}else if(Q===p.QUADS){for(u=0;u+3<h;u+=4){n=[]
for(f=0;f<4;f++){l=Xn[u+f]
for(c=0;c<3;c++){n.push(l[c])}}if(O){hi(n,"LINE_LOOP",s)}if(T){i=[]
a=[]
o=[]
for(f=0;f<3;f++){i.push(Xn[u][f])}for(f=5;f<9;f++){a.push(Xn[u][f])}for(f=0;f<3;f++){i.push(Xn[u+1][f])}for(f=5;f<9;f++){a.push(Xn[u+1][f])}for(f=0;f<3;f++){i.push(Xn[u+3][f])}for(f=5;f<9;f++){a.push(Xn[u+3][f])}for(f=0;f<3;f++){i.push(Xn[u+2][f])}for(f=5;f<9;f++){a.push(Xn[u+2][f])}if(qt){o.push(Xn[u+0][3])
o.push(Xn[u+0][4])
o.push(Xn[u+1][3])
o.push(Xn[u+1][4])
o.push(Xn[u+3][3])
o.push(Xn[u+3][4])
o.push(Xn[u+2][3])
o.push(Xn[u+2][4])}pi(i,"TRIANGLE_STRIP",a,o)}}}else if(Q===p.QUAD_STRIP){var d=[]
if(h>3){for(u=0;u<2;u++){l=Xn[u]
for(f=0;f<3;f++){n.push(l[f])}}for(u=0;u<2;u++){l=Xn[u]
for(f=9;f<13;f++){s.push(l[f])}}hi(n,"LINE_STRIP",s)
if(h>4&&h%2>0){d=i.splice(i.length-3)
Xn.pop()}for(u=0;u+3<h;u+=2){n=[]
s=[]
for(f=0;f<3;f++){n.push(Xn[u+1][f])}for(f=0;f<3;f++){n.push(Xn[u+3][f])}for(f=0;f<3;f++){n.push(Xn[u+2][f])}for(f=0;f<3;f++){n.push(Xn[u+0][f])}for(f=9;f<13;f++){s.push(Xn[u+1][f])}for(f=9;f<13;f++){s.push(Xn[u+3][f])}for(f=9;f<13;f++){s.push(Xn[u+2][f])}for(f=9;f<13;f++){s.push(Xn[u+0][f])}if(O){hi(n,"LINE_STRIP",s)}}if(T||qt){pi(i,"TRIANGLE_LIST",a,o)}}}else{if(h===1){for(f=0;f<3;f++){n.push(Xn[0][f])}for(f=9;f<13;f++){s.push(Xn[0][f])}ci(n,s)}else{for(u=0;u<h;u++){l=Xn[u]
for(f=0;f<3;f++){n.push(l[f])}for(f=5;f<9;f++){s.push(l[f])}}if(O&&t){hi(n,"LINE_LOOP",s)}else if(O&&!t){hi(n,"LINE_STRIP",s)}if(T||qt){pi(i,"TRIANGLE_FAN",a,o)}}}qt=false
b.useProgram(It)
mr("usingTexture3d",It,"usingTexture",qt)}Zn=false
Jn=false
qn=[]
Yn=0}
var mi=function(e,t){var n=1/e
var r=n*n
var i=r*n
t.set(0,0,0,1,i,r,n,0,6*i,2*r,0,0,6*i,0,0,0)}
var gi=function(){if(!At){wt=new Dr
At=new Dr
it=true}var e=nt
wt.set((e-1)/2,(e+3)/2,(-3-e)/2,(1-e)/2,1-e,(-5-e)/2,e+2,(e-1)/2,(e-1)/2,0,(1-e)/2,0,0,1,0,0)
mi(rt,At)
if(!Tt){St=new Dr}St.set(wt)
St.preApply(Tt)
At.apply(wt)}
Ar.prototype.bezierVertex=function(){Jn=true
var e=[]
if(Qn){throw"vertex() must be used at least once before calling bezierVertex()"}for(var t=0;t<arguments.length;t++){e[t]=arguments[t]}Xn.push(e)
Xn[Xn.length-1]["isVert"]=false}
_r.prototype.bezierVertex=function(){Jn=true
var e=[]
if(Qn){throw"vertex() must be used at least once before calling bezierVertex()"}if(arguments.length===9){if(_t===r){_t=new Dr}var t=Xn.length-1
mi(st,_t)
_t.apply(Ct)
var n=_t.array()
var i=Xn[t][0],a=Xn[t][1],s=Xn[t][2]
var o=n[4]*i+n[5]*arguments[0]+n[6]*arguments[3]+n[7]*arguments[6]
var l=n[8]*i+n[9]*arguments[0]+n[10]*arguments[3]+n[11]*arguments[6]
var u=n[12]*i+n[13]*arguments[0]+n[14]*arguments[3]+n[15]*arguments[6]
var f=n[4]*a+n[5]*arguments[1]+n[6]*arguments[4]+n[7]*arguments[7]
var c=n[8]*a+n[9]*arguments[1]+n[10]*arguments[4]+n[11]*arguments[7]
var h=n[12]*a+n[13]*arguments[1]+n[14]*arguments[4]+n[15]*arguments[7]
var p=n[4]*s+n[5]*arguments[2]+n[6]*arguments[5]+n[7]*arguments[8]
var d=n[8]*s+n[9]*arguments[2]+n[10]*arguments[5]+n[11]*arguments[8]
var m=n[12]*s+n[13]*arguments[2]+n[14]*arguments[5]+n[15]*arguments[8]
for(var g=0;g<st;g++){i+=o
o+=l
l+=u
a+=f
f+=c
c+=h
s+=p
p+=d
d+=m
v.vertex(i,a,s)}v.vertex(arguments[6],arguments[7],arguments[8])}}
v.texture=function(e){var n=w.$ensureContext()
if(e.__texture){n.bindTexture(n.TEXTURE_2D,e.__texture)}else if(e.localName==="canvas"){n.bindTexture(n.TEXTURE_2D,Ht)
n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e)
n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR)
n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR)
n.generateMipmap(n.TEXTURE_2D)
Kt.width=e.width
Kt.height=e.height}else{var r=n.createTexture(),i=t.createElement("canvas"),a=i.getContext("2d"),s
if(e.width&e.width-1===0){i.width=e.width}else{s=1
while(s<e.width){s*=2}i.width=s}if(e.height&e.height-1===0){i.height=e.height}else{s=1
while(s<e.height){s*=2}i.height=s}a.drawImage(e.sourceImg,0,0,e.width,e.height,0,0,i.width,i.height)
n.bindTexture(n.TEXTURE_2D,r)
n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR)
n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR)
n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)
n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE)
n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i)
n.generateMipmap(n.TEXTURE_2D)
e.__texture=r
Kt.width=e.width
Kt.height=e.height}qt=true
n.useProgram(It)
mr("usingTexture3d",It,"usingTexture",qt)}
v.textureMode=function(e){Xt=e}
var vi=function(e,t,n,r,i,a,s,o,l,u,f,c){var h=r
var p=i
var d=a
var m=At.array()
var g=m[4]*e+m[5]*r+m[6]*s+m[7]*u
var y=m[8]*e+m[9]*r+m[10]*s+m[11]*u
var b=m[12]*e+m[13]*r+m[14]*s+m[15]*u
var x=m[4]*t+m[5]*i+m[6]*o+m[7]*f
var k=m[8]*t+m[9]*i+m[10]*o+m[11]*f
var E=m[12]*t+m[13]*i+m[14]*o+m[15]*f
var w=m[4]*n+m[5]*a+m[6]*l+m[7]*c
var S=m[8]*n+m[9]*a+m[10]*l+m[11]*c
var A=m[12]*n+m[13]*a+m[14]*l+m[15]*c
v.vertex(h,p,d)
for(var _=0;_<rt;_++){h+=g
g+=y
y+=b
p+=x
x+=k
k+=E
d+=w
w+=S
S+=A
v.vertex(h,p,d)}}
Ar.prototype.curveVertex=function(e,t){Zn=true
v.vertex(e,t)}
_r.prototype.curveVertex=function(e,t,n){Zn=true
if(!it){gi()}var r=[]
r[0]=e
r[1]=t
r[2]=n
qn.push(r)
Yn++
if(Yn>3){vi(qn[Yn-4][0],qn[Yn-4][1],qn[Yn-4][2],qn[Yn-3][0],qn[Yn-3][1],qn[Yn-3][2],qn[Yn-2][0],qn[Yn-2][1],qn[Yn-2][2],qn[Yn-1][0],qn[Yn-1][1],qn[Yn-1][2])}}
Ar.prototype.curve=function(){if(arguments.length===8){v.beginShape()
v.curveVertex(arguments[0],arguments[1])
v.curveVertex(arguments[2],arguments[3])
v.curveVertex(arguments[4],arguments[5])
v.curveVertex(arguments[6],arguments[7])
v.endShape()}}
_r.prototype.curve=function(){if(arguments.length===12){v.beginShape()
v.curveVertex(arguments[0],arguments[1],arguments[2])
v.curveVertex(arguments[3],arguments[4],arguments[5])
v.curveVertex(arguments[6],arguments[7],arguments[8])
v.curveVertex(arguments[9],arguments[10],arguments[11])
v.endShape()}}
v.curveTightness=function(e){nt=e}
v.curveDetail=function(e){rt=e
gi()}
v.rectMode=function(e){U=e}
v.imageMode=function(e){switch(e){case p.CORNER:kr=xr
break
case p.CORNERS:kr=Er
break
case p.CENTER:kr=wr
break
default:throw"Invalid imageMode"}}
v.ellipseMode=function(e){z=e}
v.arc=function(e,t,n,r,i,a){if(n<=0||a<i){return}i=v.convertToRadians(i)
a=v.convertToRadians(a)
if(z===p.CORNERS){n=n-e
r=r-t}else if(z===p.RADIUS){e=e-n
t=t-r
n=n*2
r=r*2}else if(z===p.CENTER){e=e-n/2
t=t-r/2}while(i<0){i+=p.TWO_PI
a+=p.TWO_PI}if(a-i>p.TWO_PI){i=0
a=p.TWO_PI}var s=n/2
var o=r/2
var l=e+s
var u=t+o
var f=0|-.5+i*v.RAD_TO_DEG
var c=0|.5+a*v.RAD_TO_DEG
var h,d
if(T){var m=O
O=false
v.beginShape()
v.vertex(l,u)
for(h=f;h<=c;h++){d=h%p.SINCOS_LENGTH
v.vertex(l+Cn[d]*s,u+Tn[d]*o)}v.endShape(p.CLOSE)
O=m}if(O){var g=T
T=false
v.beginShape()
for(h=f;h<=c;h++){d=h%p.SINCOS_LENGTH
v.vertex(l+Cn[d]*s,u+Tn[d]*o)}v.endShape()
T=g}}
Ar.prototype.line=function(e,t,i,a){if(!O){return}if(!G){e=n.round(e)
i=n.round(i)
t=n.round(t)
a=n.round(a)}if(e===i&&t===a){v.point(e,t)
return}var s=r,o=r,l=true,u=On.array(),f=[1,0,0,0,1,0]
for(var c=0;c<6&&l;c++){l=u[c]===f[c]}if(l){if(e===i){if(t>a){s=t
t=a
a=s}a++
if(W%2===1){b.translate(.5,0)}}else if(t===a){if(e>i){s=e
e=i
i=s}i++
if(W%2===1){b.translate(0,.5)}}if(W===1){o=b.lineCap
b.lineCap="butt"}}b.beginPath()
b.moveTo(e||0,t||0)
b.lineTo(i||0,a||0)
fi()
if(l){if(e===i&&W%2===1){b.translate(-.5,0)}else if(t===a&&W%2===1){b.translate(0,-.5)}if(W===1){b.lineCap=o}}}
_r.prototype.line=function(e,t,n,i,a,s){if(a===r||s===r){s=0
a=i
i=n
n=0}if(e===i&&t===a&&n===s){v.point(e,t,n)
return}var o=[e,t,n,i,a,s]
var l=new Dr
l.scale(1,-1,1)
l.apply(On.array())
l.transpose()
if(W>0&&O){b.useProgram(Pt)
gr("model2d",Pt,"model",false,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])
gr("view2d",Pt,"view",false,l.array())
dr("color2d",Pt,"color",M)
mr("picktype2d",Pt,"picktype",0)
vr("vertex2d",Pt,"Vertex",3,Gt)
yr("aTextureCoord2d",Pt,"aTextureCoord")
b.bufferData(b.ARRAY_BUFFER,new u(o),b.STREAM_DRAW)
b.drawArrays(b.LINES,0,2)}}
Ar.prototype.bezier=function(){if(arguments.length!==8){throw"You must use 8 parameters for bezier() in 2D mode"}v.beginShape()
v.vertex(arguments[0],arguments[1])
v.bezierVertex(arguments[2],arguments[3],arguments[4],arguments[5],arguments[6],arguments[7])
v.endShape()}
_r.prototype.bezier=function(){if(arguments.length!==12){throw"You must use 12 parameters for bezier() in 3D mode"}v.beginShape()
v.vertex(arguments[0],arguments[1],arguments[2])
v.bezierVertex(arguments[3],arguments[4],arguments[5],arguments[6],arguments[7],arguments[8],arguments[9],arguments[10],arguments[11])
v.endShape()}
v.bezierDetail=function(e){st=e}
v.bezierPoint=function(e,t,n,r,i){return(1-i)*(1-i)*(1-i)*e+3*(1-i)*(1-i)*i*t+3*(1-i)*i*i*n+i*i*i*r}
v.bezierTangent=function(e,t,n,r,i){return 3*i*i*(-e+3*t-3*n+r)+6*i*(e-2*t+n)+3*(-e+t)}
v.curvePoint=function(e,t,n,r,i){return.5*(2*t+(-e+n)*i+(2*e-5*t+4*n-r)*i*i+(-e+3*t-3*n+r)*i*i*i)}
v.curveTangent=function(e,t,n,r,i){return.5*(-e+n+2*(2*e-5*t+4*n-r)*i+3*(-e+3*t-3*n+r)*i*i)}
v.triangle=function(e,t,n,r,i,a){v.beginShape(p.TRIANGLES)
v.vertex(e,t,0)
v.vertex(n,r,0)
v.vertex(i,a,0)
v.endShape()}
v.quad=function(e,t,n,r,i,a,s,o){v.beginShape(p.QUADS)
v.vertex(e,t,0)
v.vertex(n,r,0)
v.vertex(i,a,0)
v.vertex(s,o,0)
v.endShape()}
var yi=function(e,t,i,a,s,o,l,u){if(u===r){o=s
l=s
u=s}var f=i/2,c=a/2
if(s>f||s>c){s=n.min(f,c)}if(o>f||o>c){o=n.min(f,c)}if(l>f||l>c){l=n.min(f,c)}if(u>f||u>c){u=n.min(f,c)}if(!T||O){b.translate(.5,.5)}b.beginPath()
b.moveTo(e+s,t)
b.lineTo(e+i-o,t)
b.quadraticCurveTo(e+i,t,e+i,t+o)
b.lineTo(e+i,t+a-l)
b.quadraticCurveTo(e+i,t+a,e+i-l,t+a)
b.lineTo(e+u,t+a)
b.quadraticCurveTo(e,t+a,e,t+a-u)
b.lineTo(e,t+s)
b.quadraticCurveTo(e,t,e+s,t)
if(!T||O){b.translate(-.5,-.5)}ui()
fi()}
Ar.prototype.rect=function(e,t,i,a,s,o,l,u){if(!i&&!a){return}if(U===p.CORNERS){i-=e
a-=t}else if(U===p.RADIUS){i*=2
a*=2
e-=i/2
t-=a/2}else if(U===p.CENTER){e-=i/2
t-=a/2}if(!G){e=n.round(e)
t=n.round(t)
i=n.round(i)
a=n.round(a)}if(s!==r){yi(e,t,i,a,s,o,l,u)
return}if(O&&W%2===1){b.translate(.5,.5)}b.beginPath()
b.rect(e,t,i,a)
ui()
fi()
if(O&&W%2===1){b.translate(-.5,-.5)}}
_r.prototype.rect=function(e,t,n,i,a,s,o,l){if(a!==r){throw"rect() with rounded corners is not supported in 3D mode"}if(U===p.CORNERS){n-=e
i-=t}else if(U===p.RADIUS){n*=2
i*=2
e-=n/2
t-=i/2}else if(U===p.CENTER){e-=n/2
t-=i/2}var u=new Dr
u.translate(e,t,0)
u.scale(n,i,1)
u.transpose()
var f=new Dr
f.scale(1,-1,1)
f.apply(On.array())
f.transpose()
if(W>0&&O){b.useProgram(Pt)
gr("model2d",Pt,"model",false,u.array())
gr("view2d",Pt,"view",false,f.array())
dr("color2d",Pt,"color",M)
mr("picktype2d",Pt,"picktype",0)
vr("vertex2d",Pt,"Vertex",3,Dt)
yr("aTextureCoord2d",Pt,"aTextureCoord")
b.drawArrays(b.LINE_LOOP,0,ar.length/3)}if(T){b.useProgram(It)
gr("model3d",It,"model",false,u.array())
gr("view3d",It,"view",false,f.array())
b.enable(b.POLYGON_OFFSET_FILL)
b.polygonOffset(1,1)
dr("color3d",It,"color",I)
if(kn>0){var c=new Dr
c.set(f)
var h=new Dr
h.set(u)
c.mult(h)
var d=new Dr
d.set(c)
d.invert()
d.transpose()
gr("normalTransform3d",It,"normalTransform",false,d.array())
vr("normal3d",It,"Normal",3,Wt)}else{yr("normal3d",It,"Normal")}vr("vertex3d",It,"Vertex",3,Dt)
b.drawArrays(b.TRIANGLE_FAN,0,ar.length/3)
b.disable(b.POLYGON_OFFSET_FILL)}}
Ar.prototype.ellipse=function(e,t,n,r){e=e||0
t=t||0
if(n<=0&&r<=0){return}if(z===p.RADIUS){n*=2
r*=2}else if(z===p.CORNERS){n=n-e
r=r-t
e+=n/2
t+=r/2}else if(z===p.CORNER){e+=n/2
t+=r/2}if(n===r){b.beginPath()
b.arc(e,t,n/2,0,p.TWO_PI,false)
ui()
fi()}else{var i=n/2,a=r/2,s=.5522847498307933,o=s*i,l=s*a
v.beginShape()
v.vertex(e+i,t)
v.bezierVertex(e+i,t-l,e+o,t-a,e,t-a)
v.bezierVertex(e-o,t-a,e-i,t-l,e-i,t)
v.bezierVertex(e-i,t+l,e-o,t+a,e,t+a)
v.bezierVertex(e+o,t+a,e+i,t+l,e+i,t)
v.endShape()}}
_r.prototype.ellipse=function(e,t,n,r){e=e||0
t=t||0
if(n<=0&&r<=0){return}if(z===p.RADIUS){n*=2
r*=2}else if(z===p.CORNERS){n=n-e
r=r-t
e+=n/2
t+=r/2}else if(z===p.CORNER){e+=n/2
t+=r/2}var i=n/2,a=r/2,s=.5522847498307933,o=s*i,l=s*a
v.beginShape()
v.vertex(e+i,t)
v.bezierVertex(e+i,t-l,0,e+o,t-a,0,e,t-a,0)
v.bezierVertex(e-o,t-a,0,e-i,t-l,0,e-i,t,0)
v.bezierVertex(e-i,t+l,0,e-o,t+a,0,e,t+a,0)
v.bezierVertex(e+o,t+a,0,e+i,t+l,0,e+i,t,0)
v.endShape()
if(T){var u=0,f=0,c,h
for(c=0;c<Xn.length;c++){u+=Xn[c][0]
f+=Xn[c][1]}u/=Xn.length
f/=Xn.length
var d=[],m=[],g=[]
d[0]=u
d[1]=f
d[2]=0
d[3]=0
d[4]=0
d[5]=I[0]
d[6]=I[1]
d[7]=I[2]
d[8]=I[3]
d[9]=M[0]
d[10]=M[1]
d[11]=M[2]
d[12]=M[3]
d[13]=H
d[14]=j
d[15]=K
Xn.unshift(d)
for(c=0;c<Xn.length;c++){for(h=0;h<3;h++){m.push(Xn[c][h])}for(h=5;h<9;h++){g.push(Xn[c][h])}}pi(m,"TRIANGLE_FAN",g)}}
v.normal=function(e,t,n){if(arguments.length!==3||!(typeof e==="number"&&typeof t==="number"&&typeof n==="number")){throw"normal() requires three numeric arguments."}H=e
j=t
K=n
if(Q!==0){if(X===p.NORMAL_MODE_AUTO){X=p.NORMAL_MODE_SHAPE}else if(X===p.NORMAL_MODE_SHAPE){X=p.NORMAL_MODE_VERTEX}}}
v.save=function(t,n){if(n!==r){return e.open(n.toDataURL(),"_blank")}return e.open(v.externals.canvas.toDataURL(),"_blank")}
var bi=0
v.saveFrame=function(e){if(e===r){e="screen-####.png"}var t=e.replace(/#+/,function(e){var t=""+bi++
while(t.length<e.length){t="0"+t}return t})
v.save(t)}
var xi=t.createElement("canvas").getContext("2d")
var ki=[r,r,r]
function Ei(e,n,i){var a=ki.shift()
if(a===r){a={}
a.canvas=t.createElement("canvas")
a.context=a.canvas.getContext("2d")}ki.push(a)
var s=a.canvas,o=a.context,l=n||e.width,u=i||e.height
s.width=l
s.height=u
if(!e){o.clearRect(0,0,l,u)}else if("data"in e){o.putImageData(e,0,0)}else{o.clearRect(0,0,l,u)
o.drawImage(e,0,0,l,u)}return a}function wi(e){return{getLength:function(e){return function(){if(e.isRemote){throw"Image is loaded remotely. Cannot get length."}else{return e.imageData.data.length?e.imageData.data.length/4:0}}}(e),getPixel:function(e){return function(t){var n=t*4,r=e.imageData.data
if(e.isRemote){throw"Image is loaded remotely. Cannot get pixels."}return r[n+3]<<24&p.ALPHA_MASK|r[n]<<16&p.RED_MASK|r[n+1]<<8&p.GREEN_MASK|r[n+2]&p.BLUE_MASK}}(e),setPixel:function(e){return function(t,n){var r=t*4,i=e.imageData.data
if(e.isRemote){throw"Image is loaded remotely. Cannot set pixel."}i[r+0]=(n&p.RED_MASK)>>>16
i[r+1]=(n&p.GREEN_MASK)>>>8
i[r+2]=n&p.BLUE_MASK
i[r+3]=(n&p.ALPHA_MASK)>>>24
e.__isDirty=true}}(e),toArray:function(e){return function(){var t=[],n=e.imageData.data,r=e.width*e.height
if(e.isRemote){throw"Image is loaded remotely. Cannot get pixels."}for(var i=0,a=0;i<r;i++,a+=4){t.push(n[a+3]<<24&p.ALPHA_MASK|n[a]<<16&p.RED_MASK|n[a+1]<<8&p.GREEN_MASK|n[a+2]&p.BLUE_MASK)}return t}}(e),set:function(e){return function(t){var n,r,i
if(this.isRemote){throw"Image is loaded remotely. Cannot set pixels."}r=e.imageData.data
for(var a=0,s=t.length;a<s;a++){i=t[a]
n=a*4
r[n+0]=(i&p.RED_MASK)>>>16
r[n+1]=(i&p.GREEN_MASK)>>>8
r[n+2]=i&p.BLUE_MASK
r[n+3]=(i&p.ALPHA_MASK)>>>24}e.__isDirty=true}}(e)}}var Si=function(e,n,r){this.__isDirty=false
if(e instanceof HTMLImageElement){this.fromHTMLImageData(e)}else if(n||r){this.width=e||1
this.height=n||1
var i=this.sourceImg=t.createElement("canvas")
i.width=this.width
i.height=this.height
this.format=r===p.ARGB||r===p.ALPHA?r:p.RGB}else{this.width=0
this.height=0
this.format=p.ARGB}}
Si.prototype={__isPImage:true,updatePixels:function(){var e=this.sourceImg
if(e&&e instanceof HTMLCanvasElement&&this.__isDirty){e.getContext("2d").putImageData(this.imageData,0,0)}this.__isDirty=false},fromHTMLImageData:function(e){var t=Ei(e)
if(e.width&&e.height){this.isRemote=true
this.width=e.width
this.height=e.height}this.sourceImg=e},get:function(e,t,n,r){if(!arguments.length){return v.get(this)}if(arguments.length===2){return v.get(e,t,this)}if(arguments.length===4){return v.get(e,t,n,r,this)}},set:function(e,t,n){v.set(e,t,n,this)
this.__isDirty=true},blend:function(e,t,n,r,i,a,s,o,l,u){if(arguments.length===9){v.blend(this,e,t,n,r,i,a,s,o,l,this)}else if(arguments.length===10){v.blend(e,t,n,r,i,a,s,o,l,u,this)}delete this.sourceImg},copy:function(e,t,n,r,i,a,s,o,l){if(arguments.length===8){v.blend(this,e,t,n,r,i,a,s,o,p.REPLACE,this)}else if(arguments.length===9){v.blend(e,t,n,r,i,a,s,o,l,p.REPLACE,this)}delete this.sourceImg},filter:function(e,t){if(arguments.length===2){v.filter(e,t,this)}else if(arguments.length===1){v.filter(e,null,this)}delete this.sourceImg},save:function(e){v.save(e,this)},resize:function(e,t){if(this.isRemote){throw"Image is loaded remotely. Cannot resize."}if(this.width!==0||this.height!==0){if(e===0&&t!==0){e=n.floor(this.width/this.height*t)}else if(t===0&&e!==0){t=n.floor(this.height/this.width*e)}var r=Ei(this.imageData).canvas
var i=Ei(r,e,t).context.getImageData(0,0,e,t)
this.fromImageData(i)}},mask:function(e){var t=this.toImageData(),n,r
if(e instanceof Si||e.__isPImage){if(e.width===this.width&&e.height===this.height){e=e.toImageData()
for(n=2,r=this.width*this.height*4;n<r;n+=4){t.data[n+1]=e.data[n]}}else{throw"mask must have the same dimensions as PImage."}}else if(e instanceof Array){if(this.width*this.height===e.length){for(n=0,r=e.length;n<r;++n){t.data[n*4+3]=e[n]}}else{throw"mask array must be the same length as PImage pixels array."}}this.fromImageData(t)},loadPixels:i,toImageData:function(){if(this.isRemote){return this.sourceImg}if(!this.__isDirty){return this.imageData}var e=Ei(this.imageData)
return e.context.getImageData(0,0,this.width,this.height)},toDataURL:function(){if(this.isRemote){throw"Image is loaded remotely. Cannot create dataURI."}var e=Ei(this.imageData)
return e.canvas.toDataURL()},fromImageData:function(e){var n=e.width,r=e.height,i=t.createElement("canvas"),a=i.getContext("2d")
this.width=i.width=n
this.height=i.height=r
a.putImageData(e,0,0)
this.format=p.ARGB
this.imageData=e
this.sourceImg=i}}
v.PImage=Si
v.createImage=function(e,t,n){return new Si(e,t,n)}
v.loadImage=function(e,n,r){if(n){e=e+"."+n}var i
if(k.imageCache.images[e]){i=new Si(k.imageCache.images[e])
i.loaded=true
return i}i=new Si
var a=t.createElement("img")
i.sourceImg=a
a.onload=function(e,t,n){var r=e
var i=t
var a=n
return function(){i.fromHTMLImageData(r)
i.loaded=true
if(a){a()}}}(a,i,r)
a.src=e
return i}
v.requestImage=v.loadImage
function Ai(e,t){var n
if(e>=v.width||e<0||t<0||t>=v.height){return 0}if(cn){var r=((0|e)+v.width*(0|t))*4
n=v.imageData.data
return n[r+3]<<24&p.ALPHA_MASK|n[r]<<16&p.RED_MASK|n[r+1]<<8&p.GREEN_MASK|n[r+2]&p.BLUE_MASK}n=v.toImageData(0|e,0|t,1,1).data
return n[3]<<24&p.ALPHA_MASK|n[0]<<16&p.RED_MASK|n[1]<<8&p.GREEN_MASK|n[2]&p.BLUE_MASK}function _i(e,t,n){if(n.isRemote){throw"Image is loaded remotely. Cannot get x,y."}var r=t*n.width*4+e*4,i=n.imageData.data
return i[r+3]<<24&p.ALPHA_MASK|i[r]<<16&p.RED_MASK|i[r+1]<<8&p.GREEN_MASK|i[r+2]&p.BLUE_MASK}function Ti(e,t,n,r){var i=new Si(n,r,p.ARGB)
i.fromImageData(v.toImageData(e,t,n,r))
return i}function Ci(e,t,r,i,a){if(a.isRemote){throw"Image is loaded remotely. Cannot get x,y,w,h."}var s=new Si(r,i,p.ARGB),o=s.imageData.data,l=a.width,u=a.height,f=a.imageData.data
var c=n.max(0,-t),h=n.max(0,-e),d=n.min(i,u-t),m=n.min(r,l-e)
for(var g=c;g<d;++g){var v=((t+g)*l+(e+h))*4
var y=(g*r+h)*4
for(var b=h;b<m;++b){o[y++]=f[v++]
o[y++]=f[v++]
o[y++]=f[v++]
o[y++]=f[v++]}}s.__isDirty=true
return s}v.get=function(e,t,n,r,i){if(i!==undefined){return Ci(e,t,n,r,i)}if(r!==undefined){return Ti(e,t,n,r)}if(n!==undefined){return _i(e,t,n)}if(t!==undefined){return Ai(e,t)}if(e!==undefined){return Ci(0,0,e.width,e.height,e)}return Ti(0,0,v.width,v.height)}
v.createGraphics=function(e,t,n){var r=new L
r.size(e,t,n)
return r}
function Li(){if(cn){b=un
cn=false
v.updatePixels()}}function Ii(){function e(e,t){function n(){Li()
b[t].apply(b,arguments)}e[t]=n}function t(e,t){function n(){Li()
return b[t]}function r(e){Li()
b[t]=e}v.defineProperty(e,t,{get:n,set:r})}for(var n in b){if(typeof b[n]==="function"){e(this,n)}else{t(this,n)}}}function Pi(){if(cn){return}v.loadPixels()
if(fn===null){un=b
fn=new Ii}cn=true
b=fn
hn=0}function Ri(e,t,n){if(e<v.width&&e>=0&&t>=0&&t<v.height){Pi()
v.pixels.setPixel((0|e)+v.width*(0|t),n)
if(++hn>pn){Li()}}}function Oi(e,t,n,r){if(r.isRemote){throw"Image is loaded remotely. Cannot set x,y."}var i=v.color.toArray(n)
var a=t*r.width*4+e*4
var s=r.imageData.data
s[a]=i[0]
s[a+1]=i[1]
s[a+2]=i[2]
s[a+3]=i[3]}v.set=function(e,t,n,r){var i,a
if(arguments.length===3){if(typeof n==="number"){Ri(e,t,n)}else if(n instanceof Si||n.__isPImage){v.image(n,e,t)}}else if(arguments.length===4){Oi(e,t,n,r)}}
v.imageData={}
v.pixels={getLength:function(){return v.imageData.data.length?v.imageData.data.length/4:0},getPixel:function(e){var t=e*4,n=v.imageData.data
return n[t+3]<<24&4278190080|n[t+0]<<16&16711680|n[t+1]<<8&65280|n[t+2]&255},setPixel:function(e,t){var n=e*4,r=v.imageData.data
r[n+0]=(t&16711680)>>>16
r[n+1]=(t&65280)>>>8
r[n+2]=t&255
r[n+3]=(t&4278190080)>>>24},toArray:function(){var e=[],t=v.imageData.width*v.imageData.height,n=v.imageData.data
for(var r=0,i=0;r<t;r++,i+=4){e.push(n[i+3]<<24&4278190080|n[i+0]<<16&16711680|n[i+1]<<8&65280|n[i+2]&255)}return e},set:function(e){for(var t=0,n=e.length;t<n;t++){this.setPixel(t,e[t])}}}
v.loadPixels=function(){v.imageData=w.$ensureContext().getImageData(0,0,v.width,v.height)}
v.updatePixels=function(){if(v.imageData){w.$ensureContext().putImageData(v.imageData,0,0)}}
v.hint=function(e){var t=w.$ensureContext()
if(e===p.DISABLE_DEPTH_TEST){t.disable(t.DEPTH_TEST)
t.depthMask(false)
t.clear(t.DEPTH_BUFFER_BIT)}else if(e===p.ENABLE_DEPTH_TEST){t.enable(t.DEPTH_TEST)
t.depthMask(true)}}
var Mi=function(e,t,n,r){var i
if(e instanceof Si||e.__isPImage){i=e
if(!i.loaded){throw"Error using image in background(): PImage not loaded."}if(i.width!==v.width||i.height!==v.height){throw"Background image must be the same dimensions as the canvas."}}else{i=v.color(e,t,n,r)}at=i}
Ar.prototype.background=function(e,t,n,i){if(e!==r){Mi(e,t,n,i)}if(at instanceof Si||at.__isPImage){Ur()
b.setTransform(1,0,0,1,0,0)
v.image(at,0,0)
$r()}else{Ur()
b.setTransform(1,0,0,1,0,0)
if(v.alpha(at)!==ot){b.clearRect(0,0,v.width,v.height)}b.fillStyle=v.color.toString(at)
b.fillRect(0,0,v.width,v.height)
R=true
$r()}}
_r.prototype.background=function(e,t,n,r){if(arguments.length>0){Mi(e,t,n,r)}var i=v.color.toGLArray(at)
b.clearColor(i[0],i[1],i[2],i[3])
b.clear(b.COLOR_BUFFER_BIT|b.DEPTH_BUFFER_BIT)}
Ar.prototype.image=function(e,t,r,i,a){t=n.round(t)
r=n.round(r)
if(e.width>0){var s=i||e.width
var o=a||e.height
var l=kr(t||0,r||0,i||e.width,a||e.height,arguments.length<4)
var u=!!e.sourceImg&&gt===null
if(u){var f=e.sourceImg
if(e.__isDirty){e.updatePixels()}b.drawImage(f,0,0,f.width,f.height,l.x,l.y,l.w,l.h)}else{var c=e.toImageData()
if(gt!==null){gt(c)
e.__isDirty=true}b.drawImage(Ei(c).canvas,0,0,e.width,e.height,l.x,l.y,l.w,l.h)}}}
_r.prototype.image=function(e,t,r,i,a){if(e.width>0){t=n.round(t)
r=n.round(r)
i=i||e.width
a=a||e.height
v.beginShape(v.QUADS)
v.texture(e)
v.vertex(t,r,0,0,0)
v.vertex(t,r+a,0,0,a)
v.vertex(t+i,r+a,0,i,a)
v.vertex(t+i,r,0,i,0)
v.endShape()}}
v.tint=function(e,t,n,r){var i=v.color(e,t,n,r)
var a=v.red(i)/lt
var s=v.green(i)/ut
var o=v.blue(i)/ft
var l=v.alpha(i)/ot
gt=function(e){var t=e.data,n=4*e.width*e.height
for(var r=0;r<n;){t[r++]*=a
t[r++]*=s
t[r++]*=o
t[r++]*=l}}
vt=function(e){for(var t=0;t<e.length;){e[t++]=a
e[t++]=s
e[t++]=o
e[t++]=l}}}
v.noTint=function(){gt=null
vt=null}
v.copy=function(e,t,n,i,a,s,o,l,u){if(u===r){u=l
l=o
o=s
s=a
a=i
i=n
n=t
t=e
e=v}v.blend(e,t,n,i,a,s,o,l,u,p.REPLACE)}
v.blend=function(e,t,n,i,a,s,o,l,u,f,c){if(e.isRemote){throw"Image is loaded remotely. Cannot blend image."}if(f===r){f=u
u=l
l=o
o=s
s=a
a=i
i=n
n=t
t=e
e=v}var h=t+i,p=n+a,d=s+l,m=o+u,g=c||v
if(c===r||f===r){v.loadPixels()}e.loadPixels()
if(e===v&&v.intersect(t,n,h,p,s,o,d,m)){v.blit_resize(v.get(t,n,h-t,p-n),0,0,h-t-1,p-n-1,g.imageData.data,g.width,g.height,s,o,d,m,f)}else{v.blit_resize(e,t,n,h,p,g.imageData.data,g.width,g.height,s,o,d,m,f)}if(c===r){v.updatePixels()}}
var Ni=function(e){var t=v.floor(e*3.5),n,r
t=t<1?1:t<248?t:248
if(v.shared.blurRadius!==t){v.shared.blurRadius=t
v.shared.blurKernelSize=1+(v.shared.blurRadius<<1)
v.shared.blurKernel=new u(v.shared.blurKernelSize)
var i=v.shared.blurKernel
var a=v.shared.blurKernelSize
var s=v.shared.blurRadius
for(n=0;n<a;n++){i[n]=0}var o=(t-1)*(t-1)
for(n=1;n<t;n++){i[t+n]=i[r]=o}i[t]=t*t}}
var Di=function(e,t){var n,r,i,a,s,o,l
var f,c,h,p,d
var m=t.pixels.getLength()
var g=new u(m)
var y=new u(m)
var b=new u(m)
var x=new u(m)
var k=0
var E,w,S,A
Ni(e)
var _=t.height
var T=t.width
var C=v.shared.blurKernelSize
var L=v.shared.blurRadius
var I=v.shared.blurKernel
var P=t.imageData.data
for(w=0;w<_;w++){for(E=0;E<T;E++){a=i=r=s=n=0
f=E-L
if(f<0){d=-f
f=0}else{if(f>=T){break}d=0}for(S=d;S<C;S++){if(f>=T){break}A=(f+k)*4
l=I[S]
s+=l*P[A+3]
r+=l*P[A]
i+=l*P[A+1]
a+=l*P[A+2]
n+=l
f++}c=k+E
x[c]=s/n
g[c]=r/n
y[c]=i/n
b[c]=a/n}k+=T}k=0
h=-L
p=h*T
for(w=0;w<_;w++){for(E=0;E<T;E++){a=i=r=s=n=0
if(h<0){d=c=-h
f=E}else{if(h>=_){break}d=0
c=h
f=E+p}for(S=d;S<C;S++){if(c>=_){break}l=I[S]
s+=l*x[f]
r+=l*g[f]
i+=l*y[f]
a+=l*b[f]
n+=l
c++
f+=T}A=(E+k)*4
P[A]=r/n
P[A+1]=i/n
P[A+2]=a/n
P[A+3]=s/n}k+=T
p+=T
h++}}
var Wi=function(e,t){var n=0
var r=t.pixels.getLength()
var i=new f(r)
var a,s,o,l,u
var c,h,p,d,m,g,v,y,b,x,k,E
if(!e){while(n<r){a=n
s=n+t.width
while(n<s){o=l=t.pixels.getPixel(n)
h=n-1
c=n+1
p=n-t.width
d=n+t.width
if(h<a){h=n}if(c>=s){c=n}if(p<0){p=0}if(d>=r){d=n}v=t.pixels.getPixel(p)
g=t.pixels.getPixel(h)
y=t.pixels.getPixel(d)
m=t.pixels.getPixel(c)
u=77*(o>>16&255)+151*(o>>8&255)+28*(o&255)
x=77*(g>>16&255)+151*(g>>8&255)+28*(g&255)
b=77*(m>>16&255)+151*(m>>8&255)+28*(m&255)
k=77*(v>>16&255)+151*(v>>8&255)+28*(v&255)
E=77*(y>>16&255)+151*(y>>8&255)+28*(y&255)
if(x>u){l=g
u=x}if(b>u){l=m
u=b}if(k>u){l=v
u=k}if(E>u){l=y
u=E}i[n++]=l}}}else{while(n<r){a=n
s=n+t.width
while(n<s){o=l=t.pixels.getPixel(n)
h=n-1
c=n+1
p=n-t.width
d=n+t.width
if(h<a){h=n}if(c>=s){c=n}if(p<0){p=0}if(d>=r){d=n}v=t.pixels.getPixel(p)
g=t.pixels.getPixel(h)
y=t.pixels.getPixel(d)
m=t.pixels.getPixel(c)
u=77*(o>>16&255)+151*(o>>8&255)+28*(o&255)
x=77*(g>>16&255)+151*(g>>8&255)+28*(g&255)
b=77*(m>>16&255)+151*(m>>8&255)+28*(m&255)
k=77*(v>>16&255)+151*(v>>8&255)+28*(v&255)
E=77*(y>>16&255)+151*(y>>8&255)+28*(y&255)
if(x<u){l=g
u=x}if(b<u){l=m
u=b}if(k<u){l=v
u=k}if(E<u){l=y
u=E}i[n++]=l}}}t.pixels.set(i)}
v.filter=function(e,t,n){var i,a,s,o
if(arguments.length===3){n.loadPixels()
i=n}else{v.loadPixels()
i=v}if(t===r){t=null}if(i.isRemote){throw"Image is loaded remotely. Cannot filter image."}var l=i.pixels.getLength()
switch(e){case p.BLUR:var u=t||1
Di(u,i)
break
case p.GRAY:if(i.format===p.ALPHA){for(o=0;o<l;o++){a=255-i.pixels.getPixel(o)
i.pixels.setPixel(o,4278190080|a<<16|a<<8|a)}i.format=p.RGB}else{for(o=0;o<l;o++){a=i.pixels.getPixel(o)
s=77*(a>>16&255)+151*(a>>8&255)+28*(a&255)>>8
i.pixels.setPixel(o,a&p.ALPHA_MASK|s<<16|s<<8|s)}}break
case p.INVERT:for(o=0;o<l;o++){i.pixels.setPixel(o,i.pixels.getPixel(o)^16777215)}break
case p.POSTERIZE:if(t===null){throw"Use filter(POSTERIZE, int levels) instead of filter(POSTERIZE)"}var f=v.floor(t)
if(f<2||f>255){throw"Levels must be between 2 and 255 for filter(POSTERIZE, levels)"}var c=f-1
for(o=0;o<l;o++){var h=i.pixels.getPixel(o)>>16&255
var d=i.pixels.getPixel(o)>>8&255
var m=i.pixels.getPixel(o)&255
h=(h*f>>8)*255/c
d=(d*f>>8)*255/c
m=(m*f>>8)*255/c
i.pixels.setPixel(o,4278190080&i.pixels.getPixel(o)|h<<16|d<<8|m)}break
case p.OPAQUE:for(o=0;o<l;o++){i.pixels.setPixel(o,i.pixels.getPixel(o)|4278190080)}i.format=p.RGB
break
case p.THRESHOLD:if(t===null){t=.5}if(t<0||t>1){throw"Level must be between 0 and 1 for filter(THRESHOLD, level)"}var g=v.floor(t*255)
for(o=0;o<l;o++){var y=v.max((i.pixels.getPixel(o)&p.RED_MASK)>>16,v.max((i.pixels.getPixel(o)&p.GREEN_MASK)>>8,i.pixels.getPixel(o)&p.BLUE_MASK))
i.pixels.setPixel(o,i.pixels.getPixel(o)&p.ALPHA_MASK|(y<g?0:16777215))}break
case p.ERODE:Wi(true,i)
break
case p.DILATE:Wi(false,i)
break}i.updatePixels()}
v.shared={fracU:0,ifU:0,fracV:0,ifV:0,u1:0,u2:0,v1:0,v2:0,sX:0,sY:0,iw:0,iw1:0,ih1:0,ul:0,ll:0,ur:0,lr:0,cUL:0,cLL:0,cUR:0,cLR:0,srcXOffset:0,srcYOffset:0,r:0,g:0,b:0,a:0,srcBuffer:null,blurRadius:0,blurKernelSize:0,blurKernel:null}
v.intersect=function(e,t,n,r,i,a,s,o){var l=n-e+1
var u=r-t+1
var f=s-i+1
var c=o-a+1
if(i<e){f+=i-e
if(f>l){f=l}}else{var h=l+e-i
if(f>h){f=h}}if(a<t){c+=a-t
if(c>u){c=u}}else{var p=u+t-a
if(c>p){c=p}}return!(f<=0||c<=0)}
var Fi={}
Fi[p.BLEND]=v.modes.blend
Fi[p.ADD]=v.modes.add
Fi[p.SUBTRACT]=v.modes.subtract
Fi[p.LIGHTEST]=v.modes.lightest
Fi[p.DARKEST]=v.modes.darkest
Fi[p.REPLACE]=v.modes.replace
Fi[p.DIFFERENCE]=v.modes.difference
Fi[p.EXCLUSION]=v.modes.exclusion
Fi[p.MULTIPLY]=v.modes.multiply
Fi[p.SCREEN]=v.modes.screen
Fi[p.OVERLAY]=v.modes.overlay
Fi[p.HARD_LIGHT]=v.modes.hard_light
Fi[p.SOFT_LIGHT]=v.modes.soft_light
Fi[p.DODGE]=v.modes.dodge
Fi[p.BURN]=v.modes.burn
v.blit_resize=function(e,t,r,i,a,s,o,l,u,f,c,h,d){var m,g
if(t<0){t=0}if(r<0){r=0}if(i>=e.width){i=e.width-1}if(a>=e.height){a=e.height-1}var y=i-t
var b=a-r
var x=c-u
var k=h-f
if(x<=0||k<=0||y<=0||b<=0||u>=o||f>=l||t>=e.width||r>=e.height){return}var E=n.floor(y/x*p.PRECISIONF)
var w=n.floor(b/k*p.PRECISIONF)
var S=v.shared
S.srcXOffset=n.floor(u<0?-u*E:t*p.PRECISIONF)
S.srcYOffset=n.floor(f<0?-f*w:r*p.PRECISIONF)
if(u<0){x+=u
u=0}if(f<0){k+=f
f=0}x=n.min(x,o-u)
k=n.min(k,l-f)
var A=f*o+u
var _
S.srcBuffer=e.imageData.data
S.iw=e.width
S.iw1=e.width-1
S.ih1=e.height-1
var T=v.filter_bilinear,C=v.filter_new_scanline,L=Fi[d],I,P,R,O,M,N,D=p.ALPHA_MASK,W=p.RED_MASK,F=p.GREEN_MASK,G=p.BLUE_MASK,B=p.PREC_MAXVAL,V=p.PRECISIONB,U=p.PREC_RED_SHIFT,z=p.PREC_ALPHA_SHIFT,H=S.srcBuffer,j=n.min
for(g=0;g<k;g++){S.sX=S.srcXOffset
S.fracV=S.srcYOffset&B
S.ifV=B-S.fracV
S.v1=(S.srcYOffset>>V)*S.iw
S.v2=j((S.srcYOffset>>V)+1,S.ih1)*S.iw
for(m=0;m<x;m++){P=(A+m)*4
_=s[P+3]<<24&D|s[P]<<16&W|s[P+1]<<8&F|s[P+2]&G
S.fracU=S.sX&B
S.ifU=B-S.fracU
S.ul=S.ifU*S.ifV>>V
S.ll=S.ifU*S.fracV>>V
S.ur=S.fracU*S.ifV>>V
S.lr=S.fracU*S.fracV>>V
S.u1=S.sX>>V
S.u2=j(S.u1+1,S.iw1)
R=(S.v1+S.u1)*4
O=(S.v1+S.u2)*4
M=(S.v2+S.u1)*4
N=(S.v2+S.u2)*4
S.cUL=H[R+3]<<24&D|H[R]<<16&W|H[R+1]<<8&F|H[R+2]&G
S.cUR=H[O+3]<<24&D|H[O]<<16&W|H[O+1]<<8&F|H[O+2]&G
S.cLL=H[M+3]<<24&D|H[M]<<16&W|H[M+1]<<8&F|H[M+2]&G
S.cLR=H[N+3]<<24&D|H[N]<<16&W|H[N+1]<<8&F|H[N+2]&G
S.r=S.ul*((S.cUL&W)>>16)+S.ll*((S.cLL&W)>>16)+S.ur*((S.cUR&W)>>16)+S.lr*((S.cLR&W)>>16)<<U&W
S.g=S.ul*(S.cUL&F)+S.ll*(S.cLL&F)+S.ur*(S.cUR&F)+S.lr*(S.cLR&F)>>>V&F
S.b=S.ul*(S.cUL&G)+S.ll*(S.cLL&G)+S.ur*(S.cUR&G)+S.lr*(S.cLR&G)>>>V
S.a=S.ul*((S.cUL&D)>>>24)+S.ll*((S.cLL&D)>>>24)+S.ur*((S.cUR&D)>>>24)+S.lr*((S.cLR&D)>>>24)<<z&D
I=L(_,S.a|S.r|S.g|S.b)
s[P]=(I&W)>>>16
s[P+1]=(I&F)>>>8
s[P+2]=I&G
s[P+3]=(I&D)>>>24
S.sX+=E}A+=o
S.srcYOffset+=w}}
v.loadFont=function(e,t){if(e===r){throw"font name required in loadFont."}if(e.indexOf(".svg")===-1){if(t===r){t=ln.size}return C.get(e,t)}var n=v.loadGlyphs(e)
return{name:e,css:"12px sans-serif",glyph:true,units_per_em:n.units_per_em,horiz_adv_x:1/n.units_per_em*n.horiz_adv_x,ascent:n.ascent,descent:n.descent,width:function(t){var n=0
var r=t.length
for(var i=0;i<r;i++){try{n+=parseFloat(v.glyphLook(v.glyphTable[e],t[i]).horiz_adv_x)}catch(a){L.debug(a)}}return n/v.glyphTable[e].units_per_em}}}
v.createFont=function(e,t){return v.loadFont(e,t)}
v.textFont=function(e,t){if(t!==r){if(!e.glyph){e=C.get(e.name,t)}rn=t}ln=e
nn=ln.name
an=ln.ascent
sn=ln.descent
on=ln.leading
var n=w.$ensureContext()
n.font=ln.css}
v.textSize=function(e){if(e!==rn){ln=C.get(nn,e)
rn=e
an=ln.ascent
sn=ln.descent
on=ln.leading
var t=w.$ensureContext()
t.font=ln.css}}
v.textAscent=function(){return an}
v.textDescent=function(){return sn}
v.textLeading=function(e){on=e}
v.textAlign=function(e,t){Qt=e
en=t||p.BASELINE}
function Gi(e){if(e instanceof String){return e}if(typeof e==="number"){if(e===(0|e)){return e.toString()}return v.nf(e,0,3)}if(e===null||e===r){return""}return e.toString()}Ar.prototype.textWidth=function(e){var t=Gi(e).split(/\r?\n/g),r=0
var i,a=t.length
b.font=ln.css
for(i=0;i<a;++i){r=n.max(r,ln.measureTextWidth(t[i]))}return r|0}
_r.prototype.textWidth=function(e){var i=Gi(e).split(/\r?\n/g),a=0
var s,o=i.length
if(Et===r){Et=t.createElement("canvas")}var l=Et.getContext("2d")
l.font=ln.css
for(s=0;s<o;++s){a=n.max(a,l.measureText(i[s]).width)}return a|0}
v.glyphLook=function(e,t){try{switch(t){case"1":return e.one
case"2":return e.two
case"3":return e.three
case"4":return e.four
case"5":return e.five
case"6":return e.six
case"7":return e.seven
case"8":return e.eight
case"9":return e.nine
case"0":return e.zero
case" ":return e.space
case"$":return e.dollar
case"!":return e.exclam
case'"':return e.quotedbl
case"#":return e.numbersign
case"%":return e.percent
case"&":return e.ampersand
case"'":return e.quotesingle
case"(":return e.parenleft
case")":return e.parenright
case"*":return e.asterisk
case"+":return e.plus
case",":return e.comma
case"-":return e.hyphen
case".":return e.period
case"/":return e.slash
case"_":return e.underscore
case":":return e.colon
case";":return e.semicolon
case"<":return e.less
case"=":return e.equal
case">":return e.greater
case"?":return e.question
case"@":return e.at
case"[":return e.bracketleft
case"\\":return e.backslash
case"]":return e.bracketright
case"^":return e.asciicircum
case"`":return e.grave
case"{":return e.braceleft
case"|":return e.bar
case"}":return e.braceright
case"~":return e.asciitilde
default:return e[t]}}catch(n){L.debug(n)}}
Ar.prototype.text$line=function(e,t,n,r,i){var a=0,s=0
if(!ln.glyph){if(e&&"fillText"in b){if(R){b.fillStyle=v.color.toString(P)
R=false}if(i===p.RIGHT||i===p.CENTER){a=ln.measureTextWidth(e)
if(i===p.RIGHT){s=-a}else{s=-a/2}}b.fillText(e,t+s,n)}}else{var o=v.glyphTable[nn]
Ur()
b.translate(t,n+rn)
if(i===p.RIGHT||i===p.CENTER){a=o.width(e)
if(i===p.RIGHT){s=-a}else{s=-a/2}}var l=o.units_per_em,u=1/l*rn
b.scale(u,u)
for(var f=0,c=e.length;f<c;f++){try{v.glyphLook(o,e[f]).draw()}catch(h){L.debug(h)}}$r()}}
_r.prototype.text$line=function(e,n,i,a,s){if(Et===r){Et=t.createElement("canvas")}var o=b
b=Et.getContext("2d")
b.font=ln.css
var l=ln.measureTextWidth(e)
Et.width=l
Et.height=rn
b=Et.getContext("2d")
b.font=ln.css
b.textBaseline="top"
Ar.prototype.text$line(e,0,0,0,p.LEFT)
var u=Et.width/Et.height
b=o
b.bindTexture(b.TEXTURE_2D,jt)
b.texImage2D(b.TEXTURE_2D,0,b.RGBA,b.RGBA,b.UNSIGNED_BYTE,Et)
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MAG_FILTER,b.LINEAR)
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_MIN_FILTER,b.LINEAR)
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_T,b.CLAMP_TO_EDGE)
b.texParameteri(b.TEXTURE_2D,b.TEXTURE_WRAP_S,b.CLAMP_TO_EDGE)
var f=0
if(s===p.RIGHT){f=-l}else if(s===p.CENTER){f=-l/2}var c=new Dr
var h=rn*.5
c.translate(n+f-h/2,i-h,a)
c.scale(-u*h,-h,h)
c.translate(-1,-1,-1)
c.transpose()
var d=new Dr
d.scale(1,-1,1)
d.apply(On.array())
d.transpose()
b.useProgram(Pt)
vr("vertex2d",Pt,"Vertex",3,Yt)
vr("aTextureCoord2d",Pt,"aTextureCoord",2,Zt)
mr("uSampler2d",Pt,"uSampler",[0])
mr("picktype2d",Pt,"picktype",1)
gr("model2d",Pt,"model",false,c.array())
gr("view2d",Pt,"view",false,d.array())
dr("color2d",Pt,"color",I)
b.bindBuffer(b.ELEMENT_ARRAY_BUFFER,Jt)
b.drawElements(b.TRIANGLES,6,b.UNSIGNED_SHORT,0)}
function Bi(e,t,n,r){var i,a
if(e.indexOf("\n")<0){i=[e]
a=1}else{i=e.split(/\r?\n/g)
a=i.length}var s=0
if(en===p.TOP){s=an+sn}else if(en===p.CENTER){s=an/2-(a-1)*on/2}else if(en===p.BOTTOM){s=-(sn+(a-1)*on)}for(var o=0;o<a;++o){var l=i[o]
w.text$line(l,t,n+s,r,Qt)
s+=on}}function Vi(e,t,r,i,a,s){if(e.length===0||i===0||a===0){return}if(rn>a){return}var o=-1
var l=0
var u=0
var f=[]
for(var c=0,h=e.length;c<h;c++){var d=e[c]
var m=d===" "
var g=ln.measureTextWidth(d)
if(d!=="\n"&&u+g<=i){if(m){o=c}u+=g}else{if(o+1===l){if(c>0){o=c}else{return}}if(d==="\n"){f.push({text:e.substring(l,c),width:u})
l=c+1}else{f.push({text:e.substring(l,o+1),width:u})
l=o+1}u=0
c=l-1}}if(l<h){f.push({text:e.substring(l),width:u})}var v=1,y=an
if(Qt===p.CENTER){v=i/2}else if(Qt===p.RIGHT){v=i}var b=f.length,x=n.min(b,n.floor(a/on))
if(en===p.TOP){y=an+sn}else if(en===p.CENTER){y=a/2-on*(x/2-1)}else if(en===p.BOTTOM){y=sn+on}var k,E,S
for(k=0;k<b;k++){S=k*on
if(y+S>a-sn){break}E=f[k]
w.text$line(E.text,t+v,r+y+S,s,Qt)}}v.text=function(){if(b.font!==ln.css){b.font=ln.css}if(tn===p.SHAPE){return}if(arguments.length===3){Bi(Gi(arguments[0]),arguments[1],arguments[2],0)}else if(arguments.length===4){Bi(Gi(arguments[0]),arguments[1],arguments[2],arguments[3])}else if(arguments.length===5){Vi(Gi(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],0)}else if(arguments.length===6){Vi(Gi(arguments[0]),arguments[1],arguments[2],arguments[3],arguments[4],arguments[5])}}
v.textMode=function(e){tn=e}
v.loadGlyphs=function(i){var a,s,o,l,u,f,c,h,p,d,m,g="[0-9\\-]+",y
var b=function(e,t){var n=0,r=[],i,a=new RegExp(e,"g")
i=r[n]=a.exec(t)
while(i){n++
i=r[n]=a.exec(t)}return r}
var x=function(e){var t=b("[A-Za-z][0-9\\- ]+|Z",e)
var r=function(){Ur()
return w.$ensureContext()}
var i=function(){ui()
fi()
$r()}
y="return {draw:function(){var curContext=beforePathDraw();curContext.beginPath();"
a=0
s=0
o=0
l=0
u=0
f=0
e=0
h=0
p=""
d=t.length-1
for(var c=0;c<d;c++){var x=t[c][0],k=b(g,x)
switch(x[0]){case"M":a=parseFloat(k[0][0])
s=parseFloat(k[1][0])
y+="curContext.moveTo("+a+","+-s+");"
break
case"L":a=parseFloat(k[0][0])
s=parseFloat(k[1][0])
y+="curContext.lineTo("+a+","+-s+");"
break
case"H":a=parseFloat(k[0][0])
y+="curContext.lineTo("+a+","+-s+");"
break
case"V":s=parseFloat(k[0][0])
y+="curContext.lineTo("+a+","+-s+");"
break
case"T":u=parseFloat(k[0][0])
f=parseFloat(k[1][0])
if(p==="Q"||p==="T"){e=n.sqrt(n.pow(a-o,2)+n.pow(l-s,2))
h=(v.angleMode==="degrees"?180:n.PI)+v.atan2(o-a,l-s)
o=a+v.sin(h)*e
l=s+v.cos(h)*e}else{o=a
l=s}y+="curContext.quadraticCurveTo("+o+","+-l+","+u+","+-f+");"
a=u
s=f
break
case"Q":o=parseFloat(k[0][0])
l=parseFloat(k[1][0])
u=parseFloat(k[2][0])
f=parseFloat(k[3][0])
y+="curContext.quadraticCurveTo("+o+","+-l+","+u+","+-f+");"
a=u
s=f
break
case"Z":y+="curContext.closePath();"
break}p=x[0]}y+="afterPathDraw();"
y+="curContext.translate("+m+",0);"
y+="}}"
return new Function("beforePathDraw","afterPathDraw",y)(r,i)}
var k=function(e){var t=e.getElementsByTagName("font")
v.glyphTable[i].horiz_adv_x=t[0].getAttribute("horiz-adv-x")
var n=e.getElementsByTagName("font-face")[0]
v.glyphTable[i].units_per_em=parseFloat(n.getAttribute("units-per-em"))
v.glyphTable[i].ascent=parseFloat(n.getAttribute("ascent"))
v.glyphTable[i].descent=parseFloat(n.getAttribute("descent"))
var a=e.getElementsByTagName("glyph"),s=a.length
for(var o=0;o<s;o++){var l=a[o].getAttribute("unicode")
var u=a[o].getAttribute("glyph-name")
m=a[o].getAttribute("horiz-adv-x")
if(m===null){m=v.glyphTable[i].horiz_adv_x}c=a[o].getAttribute("d")
if(c!==r){y=x(c)
v.glyphTable[i][u]={name:u,unicode:l,horiz_adv_x:m,draw:y.draw}}}}
var E=function(){var n
try{n=t.implementation.createDocument("","",null)}catch(r){L.debug(r.message)
return}try{n.async=false
n.load(i)
k(n.getElementsByTagName("svg")[0])}catch(a){L.debug(a)
try{var s=new e.XMLHttpRequest
s.open("GET",i,false)
s.send(null)
k(s.responseXML.documentElement)}catch(o){L.debug(a)}}}
v.glyphTable[i]={}
E(i)
return v.glyphTable[i]}
v.param=function(e){var t="data-processing-"+e
if(l.hasAttribute(t)){return l.getAttribute(t)}for(var n=0,r=l.childNodes.length;n<r;++n){var i=l.childNodes.item(n)
if(i.nodeType!==1||i.tagName.toLowerCase()!=="param"){continue}if(i.getAttribute("name")===e){return i.getAttribute("value")}}if(k.params.hasOwnProperty(e)){return k.params[e]}return null}
function Ui(e){if(e==="3D"){w=new _r}else if(e==="2D"){w=new Ar}else{w=new Tr}for(var t in Tr.prototype){if(Tr.prototype.hasOwnProperty(t)&&t.indexOf("$")<0){v[t]=w[t]}}w.$init()}function $i(e){return function(){Ui("2D")
return w[e].apply(this,arguments)}}Tr.prototype.translate=$i("translate")
Tr.prototype.scale=$i("scale")
Tr.prototype.pushMatrix=$i("pushMatrix")
Tr.prototype.popMatrix=$i("popMatrix")
Tr.prototype.resetMatrix=$i("resetMatrix")
Tr.prototype.applyMatrix=$i("applyMatrix")
Tr.prototype.rotate=$i("rotate")
Tr.prototype.rotateZ=$i("rotateZ")
Tr.prototype.redraw=$i("redraw")
Tr.prototype.toImageData=$i("toImageData")
Tr.prototype.ambientLight=$i("ambientLight")
Tr.prototype.directionalLight=$i("directionalLight")
Tr.prototype.lightFalloff=$i("lightFalloff")
Tr.prototype.lightSpecular=$i("lightSpecular")
Tr.prototype.pointLight=$i("pointLight")
Tr.prototype.noLights=$i("noLights")
Tr.prototype.spotLight=$i("spotLight")
Tr.prototype.beginCamera=$i("beginCamera")
Tr.prototype.endCamera=$i("endCamera")
Tr.prototype.frustum=$i("frustum")
Tr.prototype.box=$i("box")
Tr.prototype.sphere=$i("sphere")
Tr.prototype.ambient=$i("ambient")
Tr.prototype.emissive=$i("emissive")
Tr.prototype.shininess=$i("shininess")
Tr.prototype.specular=$i("specular")
Tr.prototype.fill=$i("fill")
Tr.prototype.stroke=$i("stroke")
Tr.prototype.strokeWeight=$i("strokeWeight")
Tr.prototype.smooth=$i("smooth")
Tr.prototype.noSmooth=$i("noSmooth")
Tr.prototype.point=$i("point")
Tr.prototype.vertex=$i("vertex")
Tr.prototype.endShape=$i("endShape")
Tr.prototype.bezierVertex=$i("bezierVertex")
Tr.prototype.curveVertex=$i("curveVertex")
Tr.prototype.curve=$i("curve")
Tr.prototype.line=$i("line")
Tr.prototype.bezier=$i("bezier")
Tr.prototype.rect=$i("rect")
Tr.prototype.ellipse=$i("ellipse")
Tr.prototype.background=$i("background")
Tr.prototype.image=$i("image")
Tr.prototype.textWidth=$i("textWidth")
Tr.prototype.text$line=$i("text$line")
Tr.prototype.$ensureContext=$i("$ensureContext")
Tr.prototype.$newPMatrix=$i("$newPMatrix")
Tr.prototype.size=function(e,t,n){Ui(n===p.WEBGL?"3D":"2D")
v.size(e,t,n)}
Tr.prototype.$init=i
Ar.prototype.$init=function(){v.size(v.width,v.height)
b.lineCap="round"
v.noSmooth()
v.disableContextMenu()}
_r.prototype.$init=function(){v.use3DContext=true}
Sr.prototype.$ensureContext=function(){return b}
function zi(t,n){var r=t,i=0,a=0
v.pmouseX=v.mouseX
v.pmouseY=v.mouseY
if(r.offsetParent){do{i+=r.offsetLeft
a+=r.offsetTop}while(!!(r=r.offsetParent))}r=t
do{i-=r.scrollLeft||0
a-=r.scrollTop||0}while(!!(r=r.parentNode))
i+=vn
a+=yn
i+=bn
a+=xn
i+=e.pageXOffset
a+=e.pageYOffset
return{X:i,Y:a}}function Hi(e,t){var n=zi(e,t)
v.mouseX=t.pageX-n.X
v.mouseY=t.pageY-n.Y}function ji(e){var t=zi(e.changedTouches[0].target,e.changedTouches[0]),n
for(n=0;n<e.touches.length;n++){var r=e.touches[n]
r.offsetX=r.pageX-t.X
r.offsetY=r.pageY-t.Y}for(n=0;n<e.targetTouches.length;n++){var i=e.targetTouches[n]
i.offsetX=i.pageX-t.X
i.offsetY=i.pageY-t.Y}for(n=0;n<e.changedTouches.length;n++){var a=e.changedTouches[n]
a.offsetX=a.pageX-t.X
a.offsetY=a.pageY-t.Y}return e}jr(l,"touchstart",function(e){l.setAttribute("style","-webkit-user-select: none")
l.setAttribute("onclick","void(0)")
l.setAttribute("style","-webkit-tap-highlight-color:rgba(0,0,0,0)")
for(var t=0,n=Hr.length;t<n;t++){var i=Hr[t].type
if(i==="mouseout"||i==="mousemove"||i==="mousedown"||i==="mouseup"||i==="DOMMouseScroll"||i==="mousewheel"||i==="touchstart"){Kr(Hr[t])}}if(v.touchStart!==r||v.touchMove!==r||v.touchEnd!==r||v.touchCancel!==r){jr(l,"touchstart",function(e){if(v.touchStart!==r){e=ji(e)
v.touchStart(e)}})
jr(l,"touchmove",function(e){if(v.touchMove!==r){e.preventDefault()
e=ji(e)
v.touchMove(e)}})
jr(l,"touchend",function(e){if(v.touchEnd!==r){e=ji(e)
v.touchEnd(e)}})
jr(l,"touchcancel",function(e){if(v.touchCancel!==r){e=ji(e)
v.touchCancel(e)}})}else{jr(l,"touchstart",function(e){Hi(l,e.touches[0])
v.mouseIsPressed=v.__mousePressed=true
v.mouseDragging=false
v.mouseButton=p.LEFT
if(typeof v.mousePressed==="function"){v.mousePressed()}})
jr(l,"touchmove",function(e){e.preventDefault()
Hi(l,e.touches[0])
if(typeof v.mouseMoved==="function"&&!v.__mousePressed){v.mouseMoved()}if(typeof v.mouseDragged==="function"&&v.__mousePressed){v.mouseDragged()
v.mouseDragging=true}})
jr(l,"touchend",function(e){v.__mousePressed=false
if(typeof v.mouseClicked==="function"&&!v.mouseDragging){v.mouseClicked()}if(typeof v.mouseReleased==="function"){v.mouseReleased()}})}l.dispatchEvent(e)});(function(){var e=true,t=function(e){e.preventDefault()
e.stopPropagation()}
v.disableContextMenu=function(){if(!e){return}jr(l,"contextmenu",t)
e=false}
v.enableContextMenu=function(){if(e){return}Kr({elem:l,type:"contextmenu",fn:t})
e=true}})()
jr(l,"mousemove",function(e){Hi(l,e)
if(typeof v.mouseMoved==="function"&&!v.__mousePressed){v.mouseMoved()}if(typeof v.mouseDragged==="function"&&v.__mousePressed){v.mouseDragged()
v.mouseDragging=true}})
jr(l,"mouseout",function(e){if(typeof v.mouseOut==="function"){v.mouseOut()}})
jr(l,"mouseover",function(e){Hi(l,e)
if(typeof v.mouseOver==="function"){v.mouseOver()}})
jr(l,"mousedown",function(e){v.mouseIsPressed=v.__mousePressed=true
v.mouseDragging=false
switch(e.which){case 1:v.mouseButton=p.LEFT
break
case 2:v.mouseButton=p.CENTER
break
case 3:v.mouseButton=p.RIGHT
break}if(typeof v.mousePressed==="function"){v.mousePressed()}})
jr(l,"mouseup",function(e){v.__mousePressed=false
if(typeof v.mouseClicked==="function"&&!v.mouseDragging){v.mouseClicked()}if(typeof v.mouseReleased==="function"){v.mouseReleased()}})
var Ki=function(t){var n=0
if(t.wheelDelta){n=t.wheelDelta/120
if(e.opera){n=-n}}else if(t.detail){n=-t.detail/3}v.mouseScroll=n
if(n&&typeof v.mouseScrolled==="function"){v.mouseScrolled()}}
jr(t,"DOMMouseScroll",Ki)
jr(t,"mousewheel",Ki)
if(typeof l==="string"){l=t.getElementById(l)}if(!l.getAttribute("tabindex")){l.setAttribute("tabindex",0)}function Xi(e){var t=e.which||e.keyCode
switch(t){case 13:return 10
case 91:case 93:case 224:return 157
case 57392:return 17
case 46:return 127
case 45:return 155}return t}function qi(e){var t=e.which||e.keyCode
var n=e.shiftKey||e.ctrlKey||e.altKey||e.metaKey
switch(t){case 13:t=n?13:10
break
case 8:t=n?127:8
break}return new Lr(t)}function Yi(e){if(typeof e.preventDefault==="function"){e.preventDefault()}else if(typeof e.stopPropagation==="function"){e.stopPropagation()}return false}function Zi(){var e
for(e in dn){if(dn.hasOwnProperty(e)){v.keyIsPressed=v.__keyPressed=true
return}}v.keyIsPressed=v.__keyPressed=false}function Ji(){v.keyIsPressed=v.__keyPressed=false
dn=[]
mn=null}function Qi(e,t){dn[e]=t
mn=null
v.key=t
v.keyCode=e
v.keyPressed()
if(!v.__usingDebugger){v.keyCode=0}v.keyTyped()
Zi()}function ea(e){var t=Xi(e)
if(t===p.DELETE||t===p.BACKSPACE){Qi(t,new Lr(t))
return Yi(e)}if(gn.indexOf(t)<0){mn=t
return}var n=new Lr(p.CODED)
v.key=n
v.keyCode=t
dn[t]=n
v.keyPressed()
mn=null
Zi()
return Yi(e)}function ta(e){if(mn===null){return}var t=mn,n=qi(e)
Qi(t,n)
return Yi(e)}function na(e){var t=Xi(e),n=dn[t]
if(n===r){return}v.key=n
v.keyCode=t
v.keyReleased()
delete dn[t]
Zi()}if(!m){if(o instanceof L.Sketch){k=o}else if(typeof o==="function"){k=new L.Sketch(o)}else if(!o){k=new L.Sketch(function(){})}else{k=L.compile(o)}v.externals.sketch=k
Ui()
l.onfocus=function(){v.focused=true}
l.onblur=function(){v.focused=false
if(!k.options.globalKeyEvents){Ji()}}
if(k.options.pauseOnBlur){jr(e,"focus",function(){if(B){v.loop()}})
jr(e,"blur",function(){if(B&&F){v.noLoop()
B=true}Ji()})}var ra=k.options.globalKeyEvents?e:l
jr(ra,"keydown",ea)
jr(ra,"keypress",ta)
jr(ra,"keyup",na)
for(var ia in L.lib){if(L.lib.hasOwnProperty(ia)){if(L.lib[ia].hasOwnProperty("attach")){L.lib[ia].attach(v)}else if(L.lib[ia]instanceof Function){L.lib[ia].call(this)}}}var aa=100
var sa=function(n){if(!(k.imageCache.pending||C.preloading.pending(aa))){if(e.opera){var r,i,a=k.imageCache.operaCache
for(r in a){if(a.hasOwnProperty(r)){i=a[r]
if(i!==null){t.body.removeChild(i)}delete a[r]}}}k.attach(n,x)
k.onLoad(n)
if(n.setup){n.setup()
n.resetMatrix()
k.onSetup()}Li()
if(n.draw){if(!B){n.redraw()}else{n.loop()}}}else{e.setTimeout(function(){sa(n)},aa)}}
_(this)
sa(v)}else{k=new L.Sketch
Ui()
v.size=function(e,t,n){if(n&&n===p.WEBGL){Ui("3D")}else{Ui("2D")}v.size(e,t,n)}}}
L.debug=a
L.prototype=x
function I(){var e=["abs","acos","alpha","ambient","ambientLight","append","applyMatrix","arc","arrayCopy","asin","atan","atan2","background","beginCamera","beginDraw","beginShape","bezier","bezierDetail","bezierPoint","bezierTangent","bezierVertex","binary","blend","blendColor","blit_resize","blue","box","breakShape","brightness","camera","ceil","Character","color","colorMode","concat","constrain","copy","cos","createFont","createGraphics","createImage","cursor","curve","curveDetail","curvePoint","curveTangent","curveTightness","curveVertex","day","degrees","directionalLight","disableContextMenu","dist","draw","ellipse","ellipseMode","emissive","enableContextMenu","endCamera","endDraw","endShape","exit","exp","expand","externals","fill","filter","floor","focused","frameCount","frameRate","frustum","get","glyphLook","glyphTable","green","height","hex","hint","hour","hue","image","imageMode","intersect","join","key","keyCode","keyPressed","keyReleased","keyTyped","lerp","lerpColor","lightFalloff","lights","lightSpecular","line","link","loadBytes","loadFont","loadGlyphs","loadImage","loadPixels","loadShape","loadStrings","log","loop","mag","map","match","matchAll","max","millis","min","minute","mix","modelX","modelY","modelZ","modes","month","mouseButton","mouseClicked","mouseDragged","mouseMoved","mouseOut","mouseOver","mousePressed","mouseReleased","mouseScroll","mouseScrolled","mouseX","mouseY","name","nf","nfc","nfp","nfs","noCursor","noFill","noise","noiseDetail","noiseSeed","noLights","noLoop","norm","normal","noSmooth","noStroke","noTint","ortho","param","parseBoolean","parseByte","parseChar","parseFloat","parseInt","peg","perspective","PImage","pixels","PMatrix2D","PMatrix3D","PMatrixStack","pmouseX","pmouseY","point","pointLight","popMatrix","popStyle","pow","print","printCamera","println","printMatrix","printProjection","PShape","PShapeSVG","pushMatrix","pushStyle","quad","radians","random","Random","randomSeed","rect","rectMode","red","redraw","requestImage","resetMatrix","reverse","rotate","rotateX","rotateY","rotateZ","round","saturation","save","saveFrame","saveStrings","scale","screenX","screenY","screenZ","second","set","setup","shape","shapeMode","shared","shininess","shorten","sin","size","smooth","sort","specular","sphere","sphereDetail","splice","split","splitTokens","spotLight","sq","sqrt","status","str","stroke","strokeCap","strokeJoin","strokeWeight","subset","tan","text","textAlign","textAscent","textDescent","textFont","textLeading","textMode","textSize","texture","textureMode","textWidth","tint","toImageData","touchCancel","touchEnd","touchMove","touchStart","translate","triangle","trim","unbinary","unhex","updatePixels","use3DContext","vertex","width","XMLElement","year","__contains","__equals","__equalsIgnoreCase","__frameRate","__hashCode","__int_cast","mouseIsPressed","keyIsPressed","__instanceof","__keyPressed","__mousePressed","__printStackTrace","__replace","__replaceAll","__replaceFirst","__toCharArray","__split","__codePointAt","__startsWith","__endsWith"]
var t={}
var n,r
for(n=0,r=e.length;n<r;++n){t[e[n]]=null}for(var i in L.lib){if(L.lib.hasOwnProperty(i)){if(L.lib[i].exports){var a=L.lib[i].exports
for(n=0,r=a.length;n<r;++n){t[a[n]]=null}}}}return t}function P(e){var t=I()
function n(e){var t=[]
var n=e.split(/([\{\[\(\)\]\}])/)
var r=n[0]
var i=[]
for(var a=1;a<n.length;a+=2){var s=n[a]
if(s==="["||s==="{"||s==="("){i.push(r)
r=s}else if(s==="]"||s==="}"||s===")"){var o=s==="}"?"A":s===")"?"B":"C"
var l=t.length
t.push(r+s)
r=i.pop()+'"'+o+(l+1)+'"'}r+=n[a+1]}t.unshift(r)
return t}function i(e,t){return e.replace(/'(\d+)'/g,function(e,n){var r=t[n]
if(r.charAt(0)==="/"){return r}return/^'((?:[^'\\\n])|(?:\\.[0-9A-Fa-f]*))'$/.test(r)?"(new $p.Character("+r+"))":r})}function a(e){var t=/^\s*/.exec(e),n
if(t[0].length===e.length){n={left:t[0],middle:"",right:""}}else{var r=/\s*$/.exec(e)
n={left:t[0],middle:e.substring(t[0].length,r.index),right:r[0]}}n.untrim=function(e){return this.left+e+this.right}
return n}function s(e){return e.replace(/^\s+/,"").replace(/\s+$/,"")}function o(e,t){for(var n=0,r=t.length;n<r;++n){e[t[n]]=null}return e}function l(e){for(var t in e){if(e.hasOwnProperty(t)){return false}}return true}function u(e){return e.substring(2,e.length-1)}var f=e.replace(/\r\n?|\n\r/g,"\n")
var c=[]
var h=f.replace(/("(?:[^"\\\n]|\\.)*")|('(?:[^'\\\n]|\\.)*')|(([\[\(=|&!\^:?]\s*)(\/(?![*\/])(?:[^\/\\\n]|\\.)*\/[gim]*)\b)|(\/\/[^\n]*\n)|(\/\*(?:(?!\*\/)(?:.|\n))*\*\/)/g,function(e,t,n,r,i,a,s,o){var l
if(t||n){l=c.length
c.push(e)
return"'"+l+"'"}if(r){l=c.length
c.push(a)
return i+"'"+l+"'"}return o!==""?" ":"\n"})
var d
var m=h
var g=function(e,t,n,r){if(!!t||!!r){return e}d=true
return""}
do{d=false
m=m.replace(/([<]?)<\s*((?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?(?:\s*,\s*(?:\?|[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s+(?:extends|super)\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)?)*)\s*>([=]?)/g,g)}while(d)
var v=n(m)
var y
var b={},k,E=0
function w(e,t){var n=v.length
v.push(e)
return'"'+t+n+'"'}function S(){return"class"+ ++E}function A(e,t,n){e.classId=t
e.scopeId=n
b[t]=e}var _,T,C,L,P,R
var O=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)(class|interface)\s+([A-Za-z_$][\w$]*\b)(\s+extends\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?(\s+implements\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\b)*)?\s*("A\d+")/g
var M=/\b((?:(?:public|private|final|protected|static|abstract|synchronized)\s+)*)((?!(?:else|new|return|throw|function|public|private|protected)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+"|;)/g
var N=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:else|new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*([A-Za-z_$][\w$]*\b)\s*(?:"C\d+"\s*)*([=,]|$)/
var D=/\b((?:(?:public|private|final|protected|static|abstract)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b)\s*("B\d+")(\s*throws\s+[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*,\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)*)?\s*("A\d+")/g
var W=/^((?:(?:public|private|final|protected|static)\s+)*)((?!(?:new|return|throw)\b)[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*(?:\s*"C\d+")*)\s*/
var F=/\bfunction(?:\s+([A-Za-z_$][\w$]*))?\s*("B\d+")\s*("A\d+")/g
function G(e){var t=e
t=t.replace(O,function(e){return w(e,"E")})
t=t.replace(M,function(e){return w(e,"D")})
t=t.replace(F,function(e){return w(e,"H")})
return t}function B(e,t){var n=e.replace(D,function(e,n,r,i,a,s){if(r!==t){return e}return w(e,"G")})
return n}function V(e){this.name=e}V.prototype.toString=function(){return this.name}
function U(e){this.params=e}U.prototype.getNames=function(){var e=[]
for(var t=0,n=this.params.length;t<n;++t){e.push(this.params[t].name)}return e}
U.prototype.toString=function(){if(this.params.length===0){return"()"}var e="("
for(var t=0,n=this.params.length;t<n;++t){e+=this.params[t]+", "}return e.substring(0,e.length-2)+")"}
function z(e){var t=s(e.substring(1,e.length-1))
var n=[]
if(t!==""){var r=t.split(",")
for(var i=0;i<r.length;++i){var a=/\b([A-Za-z_$][\w$]*\b)(\s*"[ABC][\d]*")*\s*$/.exec(r[i])
n.push(new V(a[1]))}}return new U(n)}function H(e){var t=e
t=t.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"C\d+")+\s*("A\d+")/g,function(e,t,n){return n})
t=t.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)(?:\s*"B\d+")\s*("A\d+")/g,function(e,t,n){return w(e,"F")})
t=t.replace(F,function(e){return w(e,"H")})
t=t.replace(/\bnew\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*("C\d+"(?:\s*"C\d+")*)/g,function(e,t,n){var r=n.replace(/"C(\d+)"/g,function(e,t){return v[t]}).replace(/\[\s*\]/g,"[null]").replace(/\s*\]\s*\[\s*/g,", ")
var i="{"+r.substring(1,r.length-1)+"}"
var a="('"+t+"', "+w(i,"A")+")"
return"$p.createJavaArray"+w(a,"B")})
t=t.replace(/(\.\s*length)\s*"B\d+"/g,"$1")
t=t.replace(/#([0-9A-Fa-f]{6})\b/g,function(e,t){return"0xFF"+t})
t=t.replace(/"B(\d+)"(\s*(?:[\w$']|"B))/g,function(e,t,n){var r=v[t]
if(!/^\(\s*[A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*\s*(?:"C\d+"\s*)*\)$/.test(r)){return e}if(/^\(\s*int\s*\)$/.test(r)){return"(int)"+n}var i=r.split(/"C(\d+)"/g)
if(i.length>1){if(!/^\[\s*\]$/.test(v[i[1]])){return e}}return""+n})
t=t.replace(/\(int\)([^,\]\)\}\?\:\*\+\-\/\^\|\%\&\~<\>\=]+)/g,function(e,t){var n=a(t)
return n.untrim("__int_cast("+n.middle+")")})
t=t.replace(/\bsuper(\s*"B\d+")/g,"$$superCstr$1").replace(/\bsuper(\s*\.)/g,"$$super$1")
t=t.replace(/\b0+((\d*)(?:\.[\d*])?(?:[eE][\-\+]?\d+)?[fF]?)\b/,function(e,t,n){if(t===n){return e}return n===""?"0"+t:t})
t=t.replace(/\b(\.?\d+\.?)[fF]\b/g,"$1")
t=t.replace(/([^\s])%([^=\s])/g,"$1 % $2")
t=t.replace(/\b(frameRate|keyPressed|mousePressed)\b(?!\s*"B)/g,"__$1")
t=t.replace(/\b(boolean|byte|char|float|int)\s*"B/g,function(e,t){return"parse"+t.substring(0,1).toUpperCase()+t.substring(1)+'"B'})
t=t.replace(/\bpixels\b\s*(("C(\d+)")|\.length)?(\s*=(?!=)([^,\]\)\}]+))?/g,function(e,t,n,r,i,a){if(n){var s=v[r]
if(i){return"pixels.setPixel"+w("("+s.substring(1,s.length-1)+","+a+")","B")}return"pixels.getPixel"+w("("+s.substring(1,s.length-1)+")","B")}if(t){return"pixels.getLength"+w("()","B")}if(i){return"pixels.set"+w("("+a+")","B")}return"pixels.toArray"+w("()","B")})
var n
function r(e,t,r,i){var s=v[i]
n=true
var o=a(s.substring(1,s.length-1))
return"__"+r+(o.middle===""?w("("+t.replace(/\.\s*$/,"")+")","B"):w("("+t.replace(/\.\s*$/,"")+","+o.middle+")","B"))}do{n=false
t=t.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*\.\s*(?:[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*\.\s*)*)(replace|replaceAll|replaceFirst|contains|equals|equalsIgnoreCase|hashCode|toCharArray|printStackTrace|split|startsWith|endsWith|codePointAt)\s*"B(\d+)"/g,r)}while(n)
function i(e,t,r){n=true
return"__instanceof"+w("("+t+", "+r+")","B")}do{n=false
t=t.replace(/((?:'\d+'|\b[A-Za-z_$][\w$]*\s*(?:"[BC]\d+")*)\s*(?:\.\s*[A-Za-z_$][\w$]*\s*(?:"[BC]\d+"\s*)*)*)instanceof\s+([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)/g,i)}while(n)
t=t.replace(/\bthis(\s*"B\d+")/g,"$$constr$1")
return t}function j(e,t){this.baseInterfaceName=e
this.body=t
t.owner=this}j.prototype.toString=function(){return"new ("+this.body+")"}
function K(e){var t=new RegExp(/\bnew\s*([A-Za-z_$][\w$]*\s*(?:\.\s*[A-Za-z_$][\w$]*)*)\s*"B\d+"\s*"A(\d+)"/).exec(e)
var n=k,r=S()
k=r
var i=t[1]+"$"+r
var a=new j(i,_(v[t[2]],i,"","implements "+t[1]))
A(a,r,n)
k=n
return a}function X(e,t,n){this.name=e
this.params=t
this.body=n}X.prototype.toString=function(){var e=y
var t=o({"this":null},this.params.getNames())
y=function(n){return t.hasOwnProperty(n.name)?n.name:e(n)}
var n="function"
if(this.name){n+=" "+this.name}n+=this.params+" "+this.body
y=e
return n}
function q(e){var t=new RegExp(/\b([A-Za-z_$][\w$]*)\s*"B(\d+)"\s*"A(\d+)"/).exec(e)
return new X(t[1]!=="function"?t[1]:null,z(v[t[2]]),C(v[t[3]]))}function Y(e){this.members=e}Y.prototype.toString=function(){var e=y
y=function(t){return t.name==="this"?"this":e(t)}
var t=""
for(var n=0,r=this.members.length;n<r;++n){if(this.members[n].label){t+=this.members[n].label+": "}t+=this.members[n].value.toString()+", "}y=e
return t.substring(0,t.length-2)}
function Z(e){var t=e.split(",")
for(var n=0;n<t.length;++n){var r=t[n].indexOf(":")
if(r<0){t[n]={value:R(t[n])}}else{t[n]={label:s(t[n].substring(0,r)),value:R(s(t[n].substring(r+1)))}}}return new Y(t)}function J(e){if(e.charAt(0)==="("||e.charAt(0)==="["){return e.charAt(0)+J(e.substring(1,e.length-1))+e.charAt(e.length-1)}if(e.charAt(0)==="{"){if(/^\{\s*(?:[A-Za-z_$][\w$]*|'\d+')\s*:/.test(e)){return"{"+w(e.substring(1,e.length-1),"I")+"}"}return"["+J(e.substring(1,e.length-1))+"]"}var t=a(e)
var n=H(t.middle)
n=n.replace(/"[ABC](\d+)"/g,function(e,t){return J(v[t])})
return t.untrim(n)}function Q(e){return e.replace(/(\.\s*)?((?:\b[A-Za-z_]|\$)[\w$]*)(\s*\.\s*([A-Za-z_$][\w$]*)(\s*\()?)?/g,function(e,t,n,i,a,s){if(t){return e}var o={name:n,member:a,callSign:!!s}
return y(o)+(i===r?"":i)})}function et(e,t){this.expr=e
this.transforms=t}et.prototype.toString=function(){var e=this.transforms
var t=Q(this.expr)
return t.replace(/"!(\d+)"/g,function(t,n){return e[n].toString()})}
R=function(e){var t=[]
var n=J(e)
n=n.replace(/"H(\d+)"/g,function(e,n){t.push(q(v[n]))
return'"!'+(t.length-1)+'"'})
n=n.replace(/"F(\d+)"/g,function(e,n){t.push(K(v[n]))
return'"!'+(t.length-1)+'"'})
n=n.replace(/"I(\d+)"/g,function(e,n){t.push(Z(v[n]))
return'"!'+(t.length-1)+'"'})
return new et(n,t)}
function tt(e,t,n){this.name=e
this.value=t
this.isDefault=n}tt.prototype.toString=function(){return this.name+" = "+this.value}
function nt(e,t){var n=e.indexOf("=")
var r,i,a
if(n<0){r=e
i=t
a=true}else{r=e.substring(0,n)
i=R(e.substring(n+1))
a=false}return new tt(s(r.replace(/(\s*"C\d+")+/g,"")),i,a)}function rt(e){if(e==="int"||e==="float"){return"0"}if(e==="boolean"){return"false"}if(e==="color"){return"0x00000000"}return"null"}function it(e,t){this.definitions=e
this.varType=t}it.prototype.getNames=function(){var e=[]
for(var t=0,n=this.definitions.length;t<n;++t){e.push(this.definitions[t].name)}return e}
it.prototype.toString=function(){return"var "+this.definitions.join(",")}
function at(e){this.expression=e}at.prototype.toString=function(){return this.expression.toString()}
function st(e){if(N.test(e)){var t=W.exec(e)
var n=e.substring(t[0].length).split(",")
var r=rt(t[2])
for(var i=0;i<n.length;++i){n[i]=nt(n[i],r)}return new it(n,t[2])}return new at(R(e))}function ot(e,t,n){this.initStatement=e
this.condition=t
this.step=n}ot.prototype.toString=function(){return"("+this.initStatement+"; "+this.condition+"; "+this.step+")"}
function lt(e,t){this.initStatement=e
this.container=t}lt.prototype.toString=function(){var e=this.initStatement.toString()
if(e.indexOf("=")>=0){e=e.substring(0,e.indexOf("="))}return"("+e+" in "+this.container+")"}
function ut(e,t){this.initStatement=e
this.container=t}ut.iteratorId=0
ut.prototype.toString=function(){var e=this.initStatement.toString()
var t="$it"+ut.iteratorId++
var n=e.replace(/^\s*var\s*/,"").split("=")[0]
var r="var "+t+" = new $p.ObjectIterator("+this.container+"), "+n+" = void(0)"
var i=t+".hasNext() && (("+n+" = "+t+".next()) || true)"
return"("+r+"; "+i+";)"}
function ft(e){var t
if(/\bin\b/.test(e)){t=e.substring(1,e.length-1).split(/\bin\b/g)
return new lt(st(s(t[0])),R(t[1]))}if(e.indexOf(":")>=0&&e.indexOf(";")<0){t=e.substring(1,e.length-1).split(":")
return new ut(st(s(t[0])),R(t[1]))}t=e.substring(1,e.length-1).split(";")
return new ot(st(s(t[0])),R(t[1]),R(t[2]))}function ct(e){e.sort(function(e,t){return t.weight-e.weight})}function ht(e,t,n){this.name=e
this.body=t
this.isStatic=n
t.owner=this}ht.prototype.toString=function(){return""+this.body}
function pt(e,t,n){this.name=e
this.body=t
this.isStatic=n
t.owner=this}pt.prototype.toString=function(){return""+this.body}
function dt(e){var t=O.exec(e)
O.lastIndex=0
var n=t[1].indexOf("static")>=0
var r=v[u(t[6])],i
var a=k,s=S()
k=s
if(t[2]==="interface"){i=new ht(t[3],T(r,t[3],t[4]),n)}else{i=new pt(t[3],_(r,t[3],t[4],t[5]),n)}A(i,s,a)
k=a
return i}function mt(e,t,n,r){this.name=e
this.params=t
this.body=n
this.isStatic=r}mt.prototype.toString=function(){var e=o({},this.params.getNames())
var t=y
y=function(n){return e.hasOwnProperty(n.name)?n.name:t(n)}
var n="function "+this.methodId+this.params+" "+this.body+"\n"
y=t
return n}
function gt(e){var t=M.exec(e)
M.lastIndex=0
var n=t[1].indexOf("static")>=0
var r=t[6]!==";"?v[u(t[6])]:"{}"
return new mt(t[3],z(v[u(t[4])]),C(r),n)}function vt(e,t,n){this.definitions=e
this.fieldType=t
this.isStatic=n}vt.prototype.getNames=function(){var e=[]
for(var t=0,n=this.definitions.length;t<n;++t){e.push(this.definitions[t].name)}return e}
vt.prototype.toString=function(){var e=y({name:"[this]"})
if(this.isStatic){var t=this.owner.name
var n=[]
for(var r=0,i=this.definitions.length;r<i;++r){var a=this.definitions[r]
var s=a.name,o=t+"."+s
var l="if("+o+" === void(0)) {\n"+" "+o+" = "+a.value+"; }\n"+"$p.defineProperty("+e+", "+"'"+s+"', { get: function(){return "+o+";}, "+"set: function(val){"+o+" = val;} });\n"
n.push(l)}return n.join("")}return e+"."+this.definitions.join("; "+e+".")}
function yt(e){var t=W.exec(e)
var n=t[1].indexOf("static")>=0
var r=e.substring(t[0].length).split(/,\s*/g)
var i=rt(t[2])
for(var a=0;a<r.length;++a){r[a]=nt(r[a],i)}return new vt(r,t[2],n)}function bt(e,t){this.params=e
this.body=t}bt.prototype.toString=function(){var e=o({},this.params.getNames())
var t=y
y=function(n){return e.hasOwnProperty(n.name)?n.name:t(n)}
var n="function $constr_"+this.params.params.length+this.params.toString()
var r=this.body.toString()
if(!/\$(superCstr|constr)\b/.test(r)){r="{\n$superCstr();\n"+r.substring(1)}y=t
return n+r+"\n"}
function xt(e){var t=new RegExp(/"B(\d+)"\s*"A(\d+)"/).exec(e)
var n=z(v[t[1]])
return new bt(n,C(v[t[2]]))}function kt(e,t,n,r,i,a){var s,o
this.name=e
this.interfacesNames=t
this.methodsNames=n
this.fields=r
this.innerClasses=i
this.misc=a
for(s=0,o=r.length;s<o;++s){r[s].owner=this}}kt.prototype.getMembers=function(e,t,n){if(this.owner.base){this.owner.base.body.getMembers(e,t,n)}var r,i,a,s
for(r=0,a=this.fields.length;r<a;++r){var o=this.fields[r].getNames()
for(i=0,s=o.length;i<s;++i){e[o[i]]=this.fields[r]}}for(r=0,a=this.methodsNames.length;r<a;++r){var l=this.methodsNames[r]
t[l]=true}for(r=0,a=this.innerClasses.length;r<a;++r){var u=this.innerClasses[r]
n[u.name]=u}}
kt.prototype.toString=function(){function e(e){var t=0
while(e){++t
e=e.scope}return t}var t=e(this.owner)
var n=this.name
var r=""
var i=""
var a={},s={},o={}
this.getMembers(a,s,o)
var l,u,f,c
if(this.owner.interfaces){var h=[],p
for(l=0,u=this.interfacesNames.length;l<u;++l){if(!this.owner.interfaces[l]){continue}p=y({name:this.interfacesNames[l]})
h.push(p)
r+="$p.extendInterfaceMembers("+n+", "+p+");\n"}i+=n+".$interfaces = ["+h.join(", ")+"];\n"}i+=n+".$isInterface = true;\n"
i+=n+".$methods = ['"+this.methodsNames.join("', '")+"'];\n"
ct(this.innerClasses)
for(l=0,u=this.innerClasses.length;l<u;++l){var d=this.innerClasses[l]
if(d.isStatic){r+=n+"."+d.name+" = "+d+";\n"}}for(l=0,u=this.fields.length;l<u;++l){var m=this.fields[l]
if(m.isStatic){r+=n+"."+m.definitions.join(";\n"+n+".")+";\n"}}return"(function() {\n"+"function "+n+"() { throw 'Unable to create the interface'; }\n"+r+i+"return "+n+";\n"+"})()"}
T=function(e,t,n){var i=e.substring(1,e.length-1)
i=G(i)
i=B(i,t)
var s=[],o=[]
i=i.replace(/"([DE])(\d+)"/g,function(e,t,n){if(t==="D"){s.push(n)}else if(t==="E"){o.push(n)}return""})
var l=i.split(/;(?:\s*;)*/g)
var u
var f,c
if(n!==r){u=n.replace(/^\s*extends\s+(.+?)\s*$/g,"$1").split(/\s*,\s*/g)}for(f=0,c=s.length;f<c;++f){var h=gt(v[s[f]])
s[f]=h.name}for(f=0,c=l.length-1;f<c;++f){var p=a(l[f])
l[f]=yt(p.middle)}var d=l.pop()
for(f=0,c=o.length;f<c;++f){o[f]=dt(v[o[f]])}return new kt(t,u,s,l,o,{tail:d})}
function Et(e,t,n,r,i,a,s,o,l){var u,f
this.name=e
this.baseClassName=t
this.interfacesNames=n
this.functions=r
this.methods=i
this.fields=a
this.cstrs=s
this.innerClasses=o
this.misc=l
for(u=0,f=a.length;u<f;++u){a[u].owner=this}}Et.prototype.getMembers=function(e,t,n){if(this.owner.base){this.owner.base.body.getMembers(e,t,n)}var r,i,a,s
for(r=0,a=this.fields.length;r<a;++r){var o=this.fields[r].getNames()
for(i=0,s=o.length;i<s;++i){e[o[i]]=this.fields[r]}}for(r=0,a=this.methods.length;r<a;++r){var l=this.methods[r]
t[l.name]=l}for(r=0,a=this.innerClasses.length;r<a;++r){var u=this.innerClasses[r]
n[u.name]=u}}
Et.prototype.toString=function(){function e(e){var t=0
while(e){++t
e=e.scope}return t}var t=e(this.owner)
var n="$this_"+t
var r=this.name
var i="var "+n+" = this;\n"
var a=""
var o=""
var l={},u={},f={}
this.getMembers(l,u,f)
var c=y
y=function(e){var t=e.name
if(t==="this"){return e.callSign||!e.member?n+".$self":n}if(l.hasOwnProperty(t)){return l[t].isStatic?r+"."+t:n+"."+t}if(f.hasOwnProperty(t)){return n+"."+t}if(u.hasOwnProperty(t)){return u[t].isStatic?r+"."+t:n+".$self."+t}return c(e)}
var h
if(this.baseClassName){h=c({name:this.baseClassName})
i+="var $super = { $upcast: "+n+" };\n"
i+="function $superCstr(){"+h+".apply($super,arguments);if(!('$self' in $super)) $p.extendClassChain($super)}\n"
o+=r+".$base = "+h+";\n"}else{i+="function $superCstr(){$p.extendClassChain("+n+")}\n"}if(this.owner.base){a+="$p.extendStaticMembers("+r+", "+h+");\n"}var p,d,m,g
if(this.owner.interfaces){var v=[],b
for(p=0,d=this.interfacesNames.length;p<d;++p){if(!this.owner.interfaces[p]){continue}b=c({name:this.interfacesNames[p]})
v.push(b)
a+="$p.extendInterfaceMembers("+r+", "+b+");\n"}o+=r+".$interfaces = ["+v.join(", ")+"];\n"}if(this.functions.length>0){i+=this.functions.join("\n")+"\n"}ct(this.innerClasses)
for(p=0,d=this.innerClasses.length;p<d;++p){var x=this.innerClasses[p]
if(x.isStatic){a+=r+"."+x.name+" = "+x+";\n"
i+=n+"."+x.name+" = "+r+"."+x.name+";\n"}else{i+=n+"."+x.name+" = "+x+";\n"}}for(p=0,d=this.fields.length;p<d;++p){var k=this.fields[p]
if(k.isStatic){a+=r+"."+k.definitions.join(";\n"+r+".")+";\n"
for(m=0,g=k.definitions.length;m<g;++m){var E=k.definitions[m].name,w=r+"."+E
i+="$p.defineProperty("+n+", '"+E+"', {"+"get: function(){return "+w+"}, "+"set: function(val){"+w+" = val}});\n"}}else{i+=n+"."+k.definitions.join(";\n"+n+".")+";\n"}}var S={}
for(p=0,d=this.methods.length;p<d;++p){var A=this.methods[p]
var _=S[A.name]
var T=A.name+"$"+A.params.params.length
if(_){++_
T+="_"+_}else{_=1}A.methodId=T
S[A.name]=_
if(A.isStatic){a+=A
a+="$p.addMethod("+r+", '"+A.name+"', "+T+");\n"
i+="$p.addMethod("+n+", '"+A.name+"', "+T+");\n"}else{i+=A
i+="$p.addMethod("+n+", '"+A.name+"', "+T+");\n"}}i+=s(this.misc.tail)
if(this.cstrs.length>0){i+=this.cstrs.join("\n")+"\n"}i+="function $constr() {\n"
var C=[]
for(p=0,d=this.cstrs.length;p<d;++p){var L=this.cstrs[p].params.params.length
C.push("if(arguments.length === "+L+") { "+"$constr_"+L+".apply("+n+", arguments); }")}if(C.length>0){i+=C.join(" else ")+" else "}i+="$superCstr();\n}\n"
i+="$constr.apply(null, arguments);\n"
y=c
return"(function() {\n"+"function "+r+"() {\n"+i+"}\n"+a+o+"return "+r+";\n"+"})()"}
_=function(e,t,n,i){var s=e.substring(1,e.length-1)
s=G(s)
s=B(s,t)
var o=[],l=[],u=[],f=[]
s=s.replace(/"([DEGH])(\d+)"/g,function(e,t,n){if(t==="D"){o.push(n)}else if(t==="E"){l.push(n)}else if(t==="H"){f.push(n)}else{u.push(n)}return""})
var c=s.replace(/^(?:\s*;)+/,"").split(/;(?:\s*;)*/g)
var h,p
var d
if(n!==r){h=n.replace(/^\s*extends\s+([A-Za-z_$][\w$]*\b(?:\s*\.\s*[A-Za-z_$][\w$]*\b)*)\s*$/g,"$1")}if(i!==r){p=i.replace(/^\s*implements\s+(.+?)\s*$/g,"$1").split(/\s*,\s*/g)}for(d=0;d<f.length;++d){f[d]=q(v[f[d]])}for(d=0;d<o.length;++d){o[d]=gt(v[o[d]])}for(d=0;d<c.length-1;++d){var m=a(c[d])
c[d]=yt(m.middle)}var g=c.pop()
for(d=0;d<u.length;++d){u[d]=xt(v[u[d]])}for(d=0;d<l.length;++d){l[d]=dt(v[l[d]])}return new Et(t,h,p,f,o,c,u,l,{tail:g})}
function wt(e,t){this.name=e
this.body=t
t.owner=this}wt.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n"+"$p."+this.name+" = "+this.name+";\n"}
function St(e,t){this.name=e
this.body=t
t.owner=this}St.prototype.toString=function(){return"var "+this.name+" = "+this.body+";\n"+"$p."+this.name+" = "+this.name+";\n"}
function At(e){var t=O.exec(e)
O.lastIndex=0
var n=v[u(t[6])]
var r=k,i=S()
k=i
var a
if(t[2]==="interface"){a=new wt(t[3],T(n,t[3],t[4]))}else{a=new St(t[3],_(n,t[3],t[4],t[5]))}A(a,i,r)
k=r
return a}function _t(e,t,n){this.name=e
this.params=t
this.body=n}_t.prototype.toString=function(){var e=o({},this.params.getNames())
var t=y
y=function(n){return e.hasOwnProperty(n.name)?n.name:t(n)}
var n="function "+this.name+this.params+" "+this.body+"\n"+"$p."+this.name+" = "+this.name+";"
y=t
return n}
function Tt(e){var t=M.exec(e)
var n=M.lastIndex=0
return new _t(t[3],z(v[u(t[4])]),C(v[u(t[6])]))}function Ct(e){var t=e
t=t.replace(/\b(catch\s*"B\d+"\s*"A\d+")(\s*catch\s*"B\d+"\s*"A\d+")+/g,"$1")
return t}function Lt(e,t){this.argument=e
this.misc=t}Lt.prototype.toString=function(){return this.misc.prefix+this.argument.toString()}
function It(e,t){this.argument=e
this.misc=t}It.prototype.toString=function(){return this.misc.prefix+this.argument.toString()}
function Pt(e,t,n){this.name=e
this.argument=t
this.misc=n}Pt.prototype.toString=function(){var e=this.misc.prefix
if(this.argument!==r){e+=this.argument.toString()}return e}
function Rt(e){this.expr=e}Rt.prototype.toString=function(){return"case "+this.expr+":"}
function Ot(e){this.label=e}Ot.prototype.toString=function(){return this.label}
L=function(e,t,n){var i=new RegExp(/\b(catch|for|if|switch|while|with)\s*"B(\d+)"|\b(do|else|finally|return|throw|try|break|continue)\b|("[ADEH](\d+)")|\b(case)\s+([^:]+):|\b([A-Za-z_$][\w$]*\s*:)|(;)/g)
var o=[]
e=Ct(e)
var l=0,u,f
while((u=i.exec(e))!==null){if(u[1]!==r){var c=e.lastIndexOf('"B',i.lastIndex)
var h=e.substring(l,c)
if(u[1]==="for"){o.push(new Lt(ft(v[u[2]]),{prefix:h}))}else if(u[1]==="catch"){o.push(new It(z(v[u[2]]),{prefix:h}))}else{o.push(new Pt(u[1],R(v[u[2]]),{prefix:h}))}}else if(u[3]!==r){o.push(new Pt(u[3],r,{prefix:e.substring(l,i.lastIndex)}))}else if(u[4]!==r){f=e.substring(l,i.lastIndex-u[4].length)
if(s(f).length!==0){continue}o.push(f)
var p=u[4].charAt(1),d=u[5]
if(p==="D"){o.push(t(v[d]))}else if(p==="E"){o.push(n(v[d]))}else if(p==="H"){o.push(q(v[d]))}else{o.push(C(v[d]))}}else if(u[6]!==r){o.push(new Rt(R(s(u[7]))))}else if(u[8]!==r){f=e.substring(l,i.lastIndex-u[8].length)
if(s(f).length!==0){continue}o.push(new Ot(e.substring(l,i.lastIndex)))}else{var m=a(e.substring(l,i.lastIndex-1))
o.push(m.left)
o.push(st(m.middle))
o.push(m.right+";")}l=i.lastIndex}var g=a(e.substring(l))
o.push(g.left)
if(g.middle!==""){o.push(st(g.middle))
o.push(";"+g.right)}return o}
function Mt(e){var t=[]
for(var n=0,r=e.length;n<r;++n){var i=e[n]
if(i instanceof it){t=t.concat(i.getNames())}else if(i instanceof Lt&&i.argument.initStatement instanceof it){t=t.concat(i.argument.initStatement.getNames())}else if(i instanceof ht||i instanceof pt||i instanceof wt||i instanceof St||i instanceof _t||i instanceof X){t.push(i.name)}}return o({},t)}function Nt(e){this.statements=e}Nt.prototype.toString=function(){var e=Mt(this.statements)
var t=y
if(!l(e)){y=function(n){return e.hasOwnProperty(n.name)?n.name:t(n)}}var n="{\n"+this.statements.join("")+"\n}"
y=t
return n}
C=function(e){var t=a(e.substring(1,e.length-1))
return new Nt(L(t.middle))}
function Dt(e){this.statements=e}Dt.prototype.toString=function(){var e=[],n=[],r
for(var i=0,a=this.statements.length;i<a;++i){r=this.statements[i]
if(r instanceof St||r instanceof wt){e.push(r)}else{n.push(r)}}ct(e)
var s=Mt(this.statements)
y=function(e){var n=e.name
if(s.hasOwnProperty(n)){return n}if(t.hasOwnProperty(n)||p.hasOwnProperty(n)||x.hasOwnProperty(n)){return"$p."+n}return n}
var o="// this code was autogenerated from PJS\n"+"(function($p) {\n"+e.join("")+"\n"+n.join("")+"\n})"
y=null
return o}
P=function(){var e=G(v[0])
e=e.replace(/\bimport\s+[^;]+;/g,"")
return new Dt(L(e,Tt,At))}
function Wt(e){var t={}
var n,i
for(n in b){if(b.hasOwnProperty(n)){i=b[n]
var a=i.scopeId,s=i.name
if(a){var o=b[a]
i.scope=o
if(o.inScope===r){o.inScope={}}o.inScope[s]=i}else{t[s]=i}}}function l(e,n){var i=n.split(".")
var a=e.scope,s
while(a){if(a.hasOwnProperty(i[0])){s=a[i[0]]
break}a=a.scope}if(s===r){s=t[i[0]]}for(var o=1,l=i.length;o<l&&s;++o){s=s.inScope[i[o]]}return s}for(n in b){if(b.hasOwnProperty(n)){i=b[n]
var u=i.body.baseClassName
if(u){var f=l(i,u)
if(f){i.base=f
if(!f.derived){f.derived=[]}f.derived.push(i)}}var c=i.body.interfacesNames,h=[],p,d
if(c&&c.length>0){for(p=0,d=c.length;p<d;++p){var m=l(i,c[p])
h.push(m)
if(!m){continue}if(!m.derived){m.derived=[]}m.derived.push(i)}if(h.length>0){i.interfaces=h}}}}}function Ft(e){var t=[],n={}
var r,i,a
for(r in b){if(b.hasOwnProperty(r)){a=b[r]
if(!a.inScope&&!a.derived){t.push(r)
a.weight=0}else{var s=[]
if(a.inScope){for(i in a.inScope){if(a.inScope.hasOwnProperty(i)){s.push(a.inScope[i])}}}if(a.derived){s=s.concat(a.derived)}n[r]=s}}}function o(e,t){var r=n[e]
if(!r){return false}var i=r.indexOf(t)
if(i<0){return false}r.splice(i,1)
if(r.length>0){return false}delete n[e]
return true}while(t.length>0){r=t.shift()
a=b[r]
if(a.scopeId&&o(a.scopeId,a)){t.push(a.scopeId)
b[a.scopeId].weight=a.weight+1}if(a.base&&o(a.base.classId,a)){t.push(a.base.classId)
a.base.weight=a.weight+1}if(a.interfaces){var l,u
for(l=0,u=a.interfaces.length;l<u;++l){if(!a.interfaces[l]||!o(a.interfaces[l].classId,a)){continue}t.push(a.interfaces[l].classId)
a.interfaces[l].weight=a.weight+1}}}}var Gt=P()
Wt(Gt)
Ft(Gt)
var Bt=Gt.toString()
Bt=Bt.replace(/\s*\n(?:[\t ]*\n)+/g,"\n\n")
return i(Bt,c)}function R(e,t){var n=new RegExp(/\/\*\s*@pjs\s+((?:[^\*]|\*+[^\*\/])*)\*\//g).exec(e)
if(n&&n.length===2){var r=[],i=n.splice(1,2)[0].replace(/\{([\s\S]*?)\}/g,function(){return function(e,t){r.push(t)
return"{"+(r.length-1)+"}"}}()).replace("\n","").replace("\r","").split(";")
var a=function(e){return e.replace(/^\s*["']?/,"").replace(/["']?\s*$/,"")}
for(var s=0,o=i.length;s<o;s++){var l=i[s].split("=")
if(l&&l.length===2){var u=a(l[0]),f=a(l[1]),c=[]
if(u==="preload"){c=f.split(",")
for(var h=0,p=c.length;h<p;h++){var d=a(c[h])
t.imageCache.add(d)}}else if(u==="font"){c=f.split(",")
for(var m=0,g=c.length;m<g;m++){var v=a(c[m]),y=/^\{(\d*?)\}$/.exec(v)
C.preloading.add(y?JSON.parse("{"+r[y[1]]+"}"):v)}}else if(u==="pauseOnBlur"){t.options.pauseOnBlur=f==="true"}else if(u==="globalKeyEvents"){t.options.globalKeyEvents=f==="true"}else if(u.substring(0,6)==="param-"){t.params[u.substring(6)]=f}else{t.options[u]=f}}}}return e}L.compile=function(e){var t=new L.Sketch
var n=R(e,t)
var r=P(n)
t.sourceCode=r
return t}
var O=function(){"use strict"
var e={},n="undefined",r="function",i=!1,a=!0,s=512,o="log"
if(typeof tinylog!==n&&typeof tinylog[o]===r){e[o]=tinylog[o]}else if(typeof t!==n&&!t.fake){(function(){var n=t,r="div",l="style",u="title",f={zIndex:1e4,position:"fixed",bottom:"0px",width:"100%",height:"15%",fontFamily:"sans-serif",color:"#ccc",backgroundColor:"black",paddingBottom:"5px"},c={position:"relative",fontFamily:"monospace",overflow:"auto",height:"100%",paddingTop:"5px"},h={height:"5px",marginTop:"-5px",cursor:"n-resize",backgroundColor:"darkgrey"},p={position:"absolute",top:"5px",right:"20px",color:"#111",MozBorderRadius:"4px",webkitBorderRadius:"4px",borderRadius:"4px",cursor:"pointer",fontWeight:"normal",textAlign:"center",padding:"3px 5px",backgroundColor:"#333",fontSize:"12px"},d={minHeight:"16px"},m={fontSize:"12px",margin:"0 8px 0 8px",maxWidth:"100%",whiteSpace:"pre-wrap",overflow:"auto"},g=n.defaultView,v=n.body||n.documentElement,y=v[l],b=function(){var e=arguments.length,t,n,r
while(e--){n=arguments[e--]
t=arguments[e][l]
for(r in n){if(n.hasOwnProperty(r)){t[r]=n[r]}}}},x=function(e,t,n){if(e.addEventListener){e.addEventListener(t,n,i)}else if(e.attachEvent){e.attachEvent("on"+t,n)}return[e,t,n]},k=function(e,t,n){if(e.removeEventListener){e.removeEventListener(t,n,i)}else if(e.detachEvent){e.detachEvent("on"+t,n)}},E=function(e){var t=e.childNodes,n=t.length
while(n--){e.removeChild(t.item(0))}},w=function(e,t){return e.appendChild(t)},S=function(e){return n.createElement(e)},A=function(e){return n.createTextNode(e)},_=e[o]=function(t){var T,C=y.paddingBottom,L=S(r),I=L[l],P=w(L,S(r)),R=w(L,S(r)),O=w(L,S(r)),M=i,N=i,D=i,W=0,F=function(){y.paddingBottom=L.clientHeight+"px"},G=function(e){var t=g.innerHeight,n=P.clientHeight
if(e<0){e=0}else if(e+n>t){e=t-n}I.height=e/t*100+"%"
F()},B=[x(n,"mousemove",function(e){if(M){G(g.innerHeight-e.clientY)
R.scrollTop=D}}),x(n,"mouseup",function(){if(M){M=D=i}}),x(P,"dblclick",function(e){e.preventDefault()
if(N){G(N)
N=i}else{N=L.clientHeight
I.height="0px"}}),x(P,"mousedown",function(e){e.preventDefault()
M=a
D=R.scrollTop}),x(P,"contextmenu",function(){M=i}),x(O,"click",function(){T()})]
T=function(){var t=B.length
while(t--){k.apply(e,B[t])}v.removeChild(L)
y.paddingBottom=C
E(R)
E(L)
e[o]=_}
b(L,f,R,c,P,h,O,p)
O[u]="Close Log"
w(O,A("✖"))
P[u]="Double-click to toggle log minimization"
v.insertBefore(L,v.firstChild)
e[o]=function(e){if(W===s){R.removeChild(R.firstChild)}else{W++}var t=w(R,S(r)),n=w(t,S(r))
t[u]=(new Date).toLocaleTimeString()
b(t,d,n,m)
w(n,A(e))
R.scrollTop=R.scrollHeight}
e.clear=function(){W=0
E(R)}
e[o](t)
F()}})()}else if(typeof print===r){e[o]=print}return e}()
L.logger=O
L.version="@VERSION@"
L.lib={}
L.registerLibrary=function(e,t){L.lib[e]=t
if(t.hasOwnProperty("init")){t.init(x)}}
L.instances=w
L.getInstanceById=function(e){return w[S[e]]}
L.Sketch=function(n){this.attachFunction=n
this.options={pauseOnBlur:false,globalKeyEvents:false}
this.onLoad=i
this.onSetup=i
this.onPause=i
this.onLoop=i
this.onFrameStart=i
this.onFrameEnd=i
this.onExit=i
this.params={}
this.imageCache={pending:0,images:{},operaCache:{},add:function(n,r){if(this.images[n]){return}if(!o){this.images[n]=null}if(!r){r=new Image
r.onload=function(e){return function(){e.pending--}}(this)
this.pending++
r.src=n}this.images[n]=r
if(e.opera){var i=t.createElement("div")
i.appendChild(r)
i.style.position="absolute"
i.style.opacity=0
i.style.width="1px"
i.style.height="1px"
if(!this.operaCache[n]){t.body.appendChild(i)
this.operaCache[n]=i}}}}
this.sourceCode=undefined
this.attach=function(e){if(typeof this.attachFunction==="function"){this.attachFunction(e)}else if(this.sourceCode){var t=new Function("return ("+this.sourceCode+");")()
t(e)
this.attachFunction=t}else{throw"Unable to attach sketch to the processing instance"}}
this.toString=function(){var e
var t="((function(Sketch) {\n"
t+="var sketch = new Sketch(\n"+this.sourceCode+");\n"
for(e in this.options){if(this.options.hasOwnProperty(e)){var n=this.options[e]
t+="sketch.options."+e+" = "+(typeof n==="string"?'"'+n+'"':""+n)+";\n"}}for(e in this.imageCache){if(this.options.hasOwnProperty(e)){t+='sketch.imageCache.add("'+e+'");\n'}}t+="return sketch;\n})(Processing.Sketch))"
return t}}
var M=function(n,r){var i=[],a=[],s=r.length,o=0
function l(t,n){var r=new XMLHttpRequest
r.onreadystatechange=function(){if(r.readyState===4){var t
if(r.status!==200&&r.status!==0){t="Invalid XHR status "+r.status}else if(r.responseText===""){if("withCredentials"in new XMLHttpRequest&&(new XMLHttpRequest).withCredentials===false&&e.location.protocol==="file:"){t="XMLHttpRequest failure, possibly due to a same-origin policy violation. You can try loading this page in another browser, or load it from http://localhost using a local webserver. See the Processing.js README for a more detailed explanation of this problem and solutions."}else{t="File is empty."}}n(r.responseText,t)}}
r.open("GET",t,true)
if(r.overrideMimeType){r.overrideMimeType("application/json")}r.setRequestHeader("If-Modified-Since","Fri, 01 Jan 1960 00:00:00 GMT")
r.send(null)}function u(e,r){function u(t,l){i[e]=t;++o
if(l){a.push(r+" ==> "+l)}if(o===s){if(a.length===0){try{return new L(n,i.join("\n"))}catch(u){throw"Processing.js: Unable to execute pjs sketch: "+u}}else{throw"Processing.js: Unable to load pjs sketch files: "+a.join("\n")}}}if(r.charAt(0)==="#"){var f=t.getElementById(r.substring(1))
if(f){u(f.text||f.textContent)}else{u("","Unable to load pjs sketch: element with id '"+r.substring(1)+"' was not found")}return}l(r,u)}for(var f=0;f<s;++f){u(f,r[f])}}
var N=function(){t.removeEventListener("DOMContentLoaded",N,false)
var e=t.getElementsByTagName("canvas"),n
for(var i=0,a=e.length;i<a;i++){var s=e[i].getAttribute("data-processing-sources")
if(s===null){s=e[i].getAttribute("data-src")
if(s===null){s=e[i].getAttribute("datasrc")}}if(s){n=s.split(" ")
for(var o=0;o<n.length;){if(n[o]){o++}else{n.splice(o,1)}}M(e[i],n)}}var l=t.getElementsByTagName("script")
var u,f,c
for(u=0;u<l.length;u++){var h=l[u]
if(!h.getAttribute){continue}var p=h.getAttribute("type")
if(p&&(p.toLowerCase()==="text/processing"||p.toLowerCase()==="application/processing")){var d=h.getAttribute("data-processing-target")
e=r
if(d){e=t.getElementById(d)}else{var m=h.nextSibling
while(m&&m.nodeType!==1){m=m.nextSibling}if(m.nodeName.toLowerCase()==="canvas"){e=m}}if(e){if(h.getAttribute("src")){n=h.getAttribute("src").split(/\s+/)
M(e,n)
continue}f=h.textContent||h.text
c=new L(e,f)}}}}
L.loadSketchFromSources=M
L.disableInit=function(){if(o){t.removeEventListener("DOMContentLoaded",N,false)}}
if(o){e["Processing"]=L
t.addEventListener("DOMContentLoaded",N,false)}else{this.Processing=L}})(window,window.document,Math)
var JSHINT
if(typeof window==="undefined")window={};(function(){var e
e=function(t,n,r){function i(r,s){if(!n[r]){if(!t[r]){var o=typeof e=="function"&&e
if(!s&&o)return o(r,!0)
if(a)return a(r,!0)
throw new Error("Cannot find module '"+r+"'")}var l=n[r]={exports:{}}
t[r][0].call(l.exports,function(e){var n=t[r][1][e]
return i(n?n:e)},l,l.exports)}return n[r].exports}var a=typeof e=="function"&&e
for(var s=0;s<r.length;s++)i(r[s])
return i}({1:[function(e,t,n){var r=t.exports={}
r.nextTick=function(){var e=typeof window!=="undefined"&&window.setImmediate
var t=typeof window!=="undefined"&&window.postMessage&&window.addEventListener
if(e){return function(e){return window.setImmediate(e)}}if(t){var n=[]
window.addEventListener("message",function(e){if(e.source===window&&e.data==="process-tick"){e.stopPropagation()
if(n.length>0){var t=n.shift()
t()}}},true)
return function r(e){n.push(e)
window.postMessage("process-tick","*")}}return function i(e){setTimeout(e,0)}}()
r.title="browser"
r.browser=true
r.env={}
r.argv=[]
r.binding=function(e){throw new Error("process.binding is not supported")}
r.cwd=function(){return"/"}
r.chdir=function(e){throw new Error("process.chdir is not supported")}},{}],2:[function(e,t,n){(function(e){if(!e.EventEmitter)e.EventEmitter=function(){}
var t=n.EventEmitter=e.EventEmitter
var r=typeof Array.isArray==="function"?Array.isArray:function(e){return Object.prototype.toString.call(e)==="[object Array]"}
function i(e,t){if(e.indexOf)return e.indexOf(t)
for(var n=0;n<e.length;n++){if(t===e[n])return n}return-1}var a=10
t.prototype.setMaxListeners=function(e){if(!this._events)this._events={}
this._events.maxListeners=e}
t.prototype.emit=function(e){if(e==="error"){if(!this._events||!this._events.error||r(this._events.error)&&!this._events.error.length){if(arguments[1]instanceof Error){throw arguments[1]}else{throw new Error("Uncaught, unspecified 'error' event.")}return false}}if(!this._events)return false
var t=this._events[e]
if(!t)return false
if(typeof t=="function"){switch(arguments.length){case 1:t.call(this)
break
case 2:t.call(this,arguments[1])
break
case 3:t.call(this,arguments[1],arguments[2])
break
default:var n=Array.prototype.slice.call(arguments,1)
t.apply(this,n)}return true}else if(r(t)){var n=Array.prototype.slice.call(arguments,1)
var i=t.slice()
for(var a=0,s=i.length;a<s;a++){i[a].apply(this,n)}return true}else{return false}}
t.prototype.addListener=function(e,t){if("function"!==typeof t){throw new Error("addListener only takes instances of Function")}if(!this._events)this._events={}
this.emit("newListener",e,t)
if(!this._events[e]){this._events[e]=t}else if(r(this._events[e])){if(!this._events[e].warned){var n
if(this._events.maxListeners!==undefined){n=this._events.maxListeners}else{n=a}if(n&&n>0&&this._events[e].length>n){this._events[e].warned=true
console.error("(node) warning: possible EventEmitter memory "+"leak detected. %d listeners added. "+"Use emitter.setMaxListeners() to increase limit.",this._events[e].length)
console.trace()}}this._events[e].push(t)}else{this._events[e]=[this._events[e],t]}return this}
t.prototype.on=t.prototype.addListener
t.prototype.once=function(e,t){var n=this
n.on(e,function r(){n.removeListener(e,r)
t.apply(this,arguments)})
return this}
t.prototype.removeListener=function(e,t){if("function"!==typeof t){throw new Error("removeListener only takes instances of Function")}if(!this._events||!this._events[e])return this
var n=this._events[e]
if(r(n)){var a=i(n,t)
if(a<0)return this
n.splice(a,1)
if(n.length==0)delete this._events[e]}else if(this._events[e]===t){delete this._events[e]}return this}
t.prototype.removeAllListeners=function(e){if(arguments.length===0){this._events={}
return this}if(e&&this._events&&this._events[e])this._events[e]=null
return this}
t.prototype.listeners=function(e){if(!this._events)this._events={}
if(!this._events[e])this._events[e]=[]
if(!r(this._events[e])){this._events[e]=[this._events[e]]}return this._events[e]}})(e("__browserify_process"))},{__browserify_process:1}],3:[function(e,t,n){(function(){"use strict"
n.reservedVars={arguments:false,NaN:false}
n.ecmaIdentifiers={Array:false,Boolean:false,Date:false,decodeURI:false,decodeURIComponent:false,encodeURI:false,encodeURIComponent:false,Error:false,eval:false,EvalError:false,Function:false,hasOwnProperty:false,isFinite:false,isNaN:false,JSON:false,Math:false,Map:false,Number:false,Object:false,parseInt:false,parseFloat:false,RangeError:false,ReferenceError:false,RegExp:false,Set:false,String:false,SyntaxError:false,TypeError:false,URIError:false,WeakMap:false}
n.browser={Audio:false,Blob:false,addEventListener:false,applicationCache:false,atob:false,blur:false,btoa:false,clearInterval:false,clearTimeout:false,close:false,closed:false,CustomEvent:false,DOMParser:false,defaultStatus:false,document:false,Element:false,ElementTimeControl:false,event:false,FileReader:false,FormData:false,focus:false,frames:false,getComputedStyle:false,HTMLElement:false,HTMLAnchorElement:false,HTMLBaseElement:false,HTMLBlockquoteElement:false,HTMLBodyElement:false,HTMLBRElement:false,HTMLButtonElement:false,HTMLCanvasElement:false,HTMLDirectoryElement:false,HTMLDivElement:false,HTMLDListElement:false,HTMLFieldSetElement:false,HTMLFontElement:false,HTMLFormElement:false,HTMLFrameElement:false,HTMLFrameSetElement:false,HTMLHeadElement:false,HTMLHeadingElement:false,HTMLHRElement:false,HTMLHtmlElement:false,HTMLIFrameElement:false,HTMLImageElement:false,HTMLInputElement:false,HTMLIsIndexElement:false,HTMLLabelElement:false,HTMLLayerElement:false,HTMLLegendElement:false,HTMLLIElement:false,HTMLLinkElement:false,HTMLMapElement:false,HTMLMenuElement:false,HTMLMetaElement:false,HTMLModElement:false,HTMLObjectElement:false,HTMLOListElement:false,HTMLOptGroupElement:false,HTMLOptionElement:false,HTMLParagraphElement:false,HTMLParamElement:false,HTMLPreElement:false,HTMLQuoteElement:false,HTMLScriptElement:false,HTMLSelectElement:false,HTMLStyleElement:false,HTMLTableCaptionElement:false,HTMLTableCellElement:false,HTMLTableColElement:false,HTMLTableElement:false,HTMLTableRowElement:false,HTMLTableSectionElement:false,HTMLTextAreaElement:false,HTMLTitleElement:false,HTMLUListElement:false,HTMLVideoElement:false,history:false,Image:false,length:false,localStorage:false,location:false,MessageChannel:false,MessageEvent:false,MessagePort:false,MouseEvent:false,moveBy:false,moveTo:false,MutationObserver:false,name:false,Node:false,NodeFilter:false,navigator:false,onbeforeunload:true,onblur:true,onerror:true,onfocus:true,onload:true,onresize:true,onunload:true,open:false,openDatabase:false,opener:false,Option:false,parent:false,print:false,removeEventListener:false,resizeBy:false,resizeTo:false,screen:false,scroll:false,scrollBy:false,scrollTo:false,sessionStorage:false,setInterval:false,setTimeout:false,SharedWorker:false,status:false,SVGAElement:false,SVGAltGlyphDefElement:false,SVGAltGlyphElement:false,SVGAltGlyphItemElement:false,SVGAngle:false,SVGAnimateColorElement:false,SVGAnimateElement:false,SVGAnimateMotionElement:false,SVGAnimateTransformElement:false,SVGAnimatedAngle:false,SVGAnimatedBoolean:false,SVGAnimatedEnumeration:false,SVGAnimatedInteger:false,SVGAnimatedLength:false,SVGAnimatedLengthList:false,SVGAnimatedNumber:false,SVGAnimatedNumberList:false,SVGAnimatedPathData:false,SVGAnimatedPoints:false,SVGAnimatedPreserveAspectRatio:false,SVGAnimatedRect:false,SVGAnimatedString:false,SVGAnimatedTransformList:false,SVGAnimationElement:false,SVGCSSRule:false,SVGCircleElement:false,SVGClipPathElement:false,SVGColor:false,SVGColorProfileElement:false,SVGColorProfileRule:false,SVGComponentTransferFunctionElement:false,SVGCursorElement:false,SVGDefsElement:false,SVGDescElement:false,SVGDocument:false,SVGElement:false,SVGElementInstance:false,SVGElementInstanceList:false,SVGEllipseElement:false,SVGExternalResourcesRequired:false,SVGFEBlendElement:false,SVGFEColorMatrixElement:false,SVGFEComponentTransferElement:false,SVGFECompositeElement:false,SVGFEConvolveMatrixElement:false,SVGFEDiffuseLightingElement:false,SVGFEDisplacementMapElement:false,SVGFEDistantLightElement:false,SVGFEFloodElement:false,SVGFEFuncAElement:false,SVGFEFuncBElement:false,SVGFEFuncGElement:false,SVGFEFuncRElement:false,SVGFEGaussianBlurElement:false,SVGFEImageElement:false,SVGFEMergeElement:false,SVGFEMergeNodeElement:false,SVGFEMorphologyElement:false,SVGFEOffsetElement:false,SVGFEPointLightElement:false,SVGFESpecularLightingElement:false,SVGFESpotLightElement:false,SVGFETileElement:false,SVGFETurbulenceElement:false,SVGFilterElement:false,SVGFilterPrimitiveStandardAttributes:false,SVGFitToViewBox:false,SVGFontElement:false,SVGFontFaceElement:false,SVGFontFaceFormatElement:false,SVGFontFaceNameElement:false,SVGFontFaceSrcElement:false,SVGFontFaceUriElement:false,SVGForeignObjectElement:false,SVGGElement:false,SVGGlyphElement:false,SVGGlyphRefElement:false,SVGGradientElement:false,SVGHKernElement:false,SVGICCColor:false,SVGImageElement:false,SVGLangSpace:false,SVGLength:false,SVGLengthList:false,SVGLineElement:false,SVGLinearGradientElement:false,SVGLocatable:false,SVGMPathElement:false,SVGMarkerElement:false,SVGMaskElement:false,SVGMatrix:false,SVGMetadataElement:false,SVGMissingGlyphElement:false,SVGNumber:false,SVGNumberList:false,SVGPaint:false,SVGPathElement:false,SVGPathSeg:false,SVGPathSegArcAbs:false,SVGPathSegArcRel:false,SVGPathSegClosePath:false,SVGPathSegCurvetoCubicAbs:false,SVGPathSegCurvetoCubicRel:false,SVGPathSegCurvetoCubicSmoothAbs:false,SVGPathSegCurvetoCubicSmoothRel:false,SVGPathSegCurvetoQuadraticAbs:false,SVGPathSegCurvetoQuadraticRel:false,SVGPathSegCurvetoQuadraticSmoothAbs:false,SVGPathSegCurvetoQuadraticSmoothRel:false,SVGPathSegLinetoAbs:false,SVGPathSegLinetoHorizontalAbs:false,SVGPathSegLinetoHorizontalRel:false,SVGPathSegLinetoRel:false,SVGPathSegLinetoVerticalAbs:false,SVGPathSegLinetoVerticalRel:false,SVGPathSegList:false,SVGPathSegMovetoAbs:false,SVGPathSegMovetoRel:false,SVGPatternElement:false,SVGPoint:false,SVGPointList:false,SVGPolygonElement:false,SVGPolylineElement:false,SVGPreserveAspectRatio:false,SVGRadialGradientElement:false,SVGRect:false,SVGRectElement:false,SVGRenderingIntent:false,SVGSVGElement:false,SVGScriptElement:false,SVGSetElement:false,SVGStopElement:false,SVGStringList:false,SVGStylable:false,SVGStyleElement:false,SVGSwitchElement:false,SVGSymbolElement:false,SVGTRefElement:false,SVGTSpanElement:false,SVGTests:false,SVGTextContentElement:false,SVGTextElement:false,SVGTextPathElement:false,SVGTextPositioningElement:false,SVGTitleElement:false,SVGTransform:false,SVGTransformList:false,SVGTransformable:false,SVGURIReference:false,SVGUnitTypes:false,SVGUseElement:false,SVGVKernElement:false,SVGViewElement:false,SVGViewSpec:false,SVGZoomAndPan:false,TimeEvent:false,top:false,WebSocket:false,window:false,Worker:false,XMLHttpRequest:false,XMLSerializer:false,XPathEvaluator:false,XPathException:false,XPathExpression:false,XPathNamespace:false,XPathNSResolver:false,XPathResult:false}
n.devel={alert:false,confirm:false,console:false,Debug:false,opera:false,prompt:false}
n.worker={importScripts:true,postMessage:true,self:true}
n.nonstandard={escape:false,unescape:false}
n.couch={require:false,respond:false,getRow:false,emit:false,send:false,start:false,sum:false,log:false,exports:false,module:false,provides:false}
n.node={__filename:false,__dirname:false,Buffer:false,console:false,exports:true,GLOBAL:false,global:false,module:false,process:false,require:false,setTimeout:false,clearTimeout:false,setInterval:false,clearInterval:false,setImmediate:false,clearImmediate:false}
n.phantom={phantom:true,require:true,WebPage:true,console:true,exports:true}
n.rhino={defineClass:false,deserialize:false,gc:false,help:false,importPackage:false,java:false,load:false,loadClass:false,print:false,quit:false,readFile:false,readUrl:false,runCommand:false,seal:false,serialize:false,spawn:false,sync:false,toint32:false,version:false}
n.shelljs={target:false,echo:false,exit:false,cd:false,pwd:false,ls:false,find:false,cp:false,rm:false,mv:false,mkdir:false,test:false,cat:false,sed:false,grep:false,which:false,dirs:false,pushd:false,popd:false,env:false,exec:false,chmod:false,config:false,error:false,tempdir:false}
n.typed={ArrayBuffer:false,ArrayBufferView:false,DataView:false,Float32Array:false,Float64Array:false,Int16Array:false,Int32Array:false,Int8Array:false,Uint16Array:false,Uint32Array:false,Uint8Array:false,Uint8ClampedArray:false}
n.wsh={ActiveXObject:true,Enumerator:true,GetObject:true,ScriptEngine:true,ScriptEngineBuildVersion:true,ScriptEngineMajorVersion:true,ScriptEngineMinorVersion:true,VBArray:true,WSH:true,WScript:true,XDomainRequest:true}
n.dojo={dojo:false,dijit:false,dojox:false,define:false,require:false}
n.jquery={$:false,jQuery:false}
n.mootools={$:false,$$:false,Asset:false,Browser:false,Chain:false,Class:false,Color:false,Cookie:false,Core:false,Document:false,DomReady:false,DOMEvent:false,DOMReady:false,Drag:false,Element:false,Elements:false,Event:false,Events:false,Fx:false,Group:false,Hash:false,HtmlTable:false,Iframe:false,IframeShim:false,InputValidator:false,instanceOf:false,Keyboard:false,Locale:false,Mask:false,MooTools:false,Native:false,Options:false,OverText:false,Request:false,Scroller:false,Slick:false,Slider:false,Sortables:false,Spinner:false,Swiff:false,Tips:false,Type:false,typeOf:false,URI:false,Window:false}
n.prototypejs={$:false,$$:false,$A:false,$F:false,$H:false,$R:false,$break:false,$continue:false,$w:false,Abstract:false,Ajax:false,Class:false,Enumerable:false,Element:false,Event:false,Field:false,Form:false,Hash:false,Insertion:false,ObjectRange:false,PeriodicalExecuter:false,Position:false,Prototype:false,Selector:false,Template:false,Toggle:false,Try:false,Autocompleter:false,Builder:false,Control:false,Draggable:false,Draggables:false,Droppables:false,Effect:false,Sortable:false,SortableObserver:false,Sound:false,Scriptaculous:false}
n.yui={YUI:false,Y:false,YUI_config:false}})()},{}],4:[function(e,t,n){(function(){"use strict"
var $={_:function(e){return e}}
var e={E001:$._("Bad option: '{a}'."),E002:$._("Bad option value."),E003:$._("Expected a JSON value."),E004:$._("Input is neither a string nor an array of strings."),E005:$._("Input is empty."),E006:$._("Unexpected early end of program."),E007:$._('Missing "use strict" statement.'),E008:$._("Strict violation."),E009:$._("Option 'validthis' can't be used in a global scope."),E010:$._("'with' is not allowed in strict mode."),E011:$._("const '{a}' has already been declared."),E012:$._("const '{a}' is initialized to 'undefined'."),E013:$._("Attempting to override '{a}' which is a constant."),E014:$._("A regular expression literal can be confused with '/='."),E015:$._("Unclosed regular expression."),E016:$._("Invalid regular expression."),E017:$._('It looks like your comment isn\'t closed. Use "*/" to end a multi-line comment.'),E018:$._('It looks like you never started your comment. Use "/*" to start a multi-line comment.'),E019:$._('Unmatched "{a}".'),E020:$._('I thought you were going to type "{a}" to match "{b}" from line {c} but you typed "{d}"'),E021:$._('I thought you were going to type "{a}" but you typed "{b}"!'),E022:$._("Line breaking error '{a}'."),E023:$._('I think you\'re missing a "{a}"!'),E024:$._('Unexpected "{a}".'),E025:$._("I think you're missing ':' on a case clause."),E026:$._("I think you're missing a '}' to match '{' from line {a}."),E027:$._("I think you're missing a ']' to match '[' from line {a}."),E028:$._("Illegal comma."),E029:$._("Unclosed string! Make sure you end your string with a quote."),E030:$._("I thought you were going to type an identifier but you typed '{a}'."),E031:$._("The left side of an assignment must be a single variable name, not an expression."),E032:$._("I thought you were going to type a number or 'false' but you typed '{a}'."),E033:$._("I thought you were going to type an operator but you typed '{a}'."),E034:$._("get/set are ES5 features."),E035:$._("I think you're missing a property name."),E036:$._("I thought you were going to type a statement but you typed a block instead."),E037:null,E038:null,E039:$._("Function declarations are not invocable. Wrap the whole function invocation in parens."),E040:$._("Each value should have its own case label."),E041:$._("Unrecoverable syntax error."),E042:$._("Stopping."),E043:$._("Too many errors."),E044:$._("'{a}' is already defined and can't be redefined."),E045:$._("Invalid for each loop."),E046:$._("A yield statement shall be within a generator function (with syntax: `function*`)"),E047:$._("A generator function shall contain a yield statement."),E048:$._("Let declaration not directly within block."),E049:$._("A {a} cannot be named '{b}'."),E050:$._("Mozilla requires the yield expression to be parenthesized here."),E051:$._("Regular parameters cannot come after default parameters."),E052:$._("I think you meant to type a value or variable name before that comma?"),E053:$._("I think you either have an extra comma or a missing argument?")}
var t={W001:$._("'hasOwnProperty' is a really bad name."),W002:$._("Value of '{a}' may be overwritten in IE 8 and earlier."),W003:$._("'{a}' was used before it was defined."),W004:$._("'{a}' is already defined."),W005:$._("A dot following a number can be confused with a decimal point."),W006:$._("Confusing minuses."),W007:$._("Confusing pluses."),W008:$._('Please put a 0 in front of the decimal point: "{a}"!'),W009:$._("The array literal notation [] is preferrable."),W010:$._("The object literal notation {} is preferrable."),W011:$._("Unexpected space after '{a}'."),W012:$._("Unexpected space before '{a}'."),W013:$._('I think you\'re missing a space after "{a}".'),W014:$._("Bad line breaking before '{a}'."),W015:$._("Expected '{a}' to have an indentation at {b} instead at {c}."),W016:$._("Unexpected use of '{a}'."),W017:$._("Bad operand."),W018:$._("Confusing use of '{a}'."),W019:$._("Use the isNaN function to compare with NaN."),W020:$._("Read only."),W021:$._("'{a}' is a function."),W022:$._("Do not assign to the exception parameter."),W023:$._("I thought you were going to type an identifier in an assignment but you typed a function invocation instead."),W024:$._("I thought you were going to type an identifier but you typed '{a}' (a reserved word)."),W025:$._("I think you're missing the name in your function declaration."),W026:$._("Inner functions should be listed at the top of the outer function."),W027:$._("Unreachable '{a}' after '{b}'."),W028:$._("Label '{a}' on {b} statement."),W030:$._("I thought you were going to type an assignment or function call but you typed an expression instead."),W031:$._("Do not use 'new' for side effects."),W032:$._("It looks like you have an unnecessary semicolon."),W033:$._("It looks like you're missing a semicolon."),W034:$._('Unnecessary directive "{a}".'),W035:$._("Empty block."),W036:$._("Unexpected /*member '{a}'."),W037:$._("'{a}' is a statement label."),W038:$._("'{a}' used out of scope."),W039:$._("'{a}' is not allowed."),W040:$._("Possible strict violation."),W041:$._("Use '{a}' to compare with '{b}'."),W042:$._("Avoid EOL escaping."),W043:$._("Bad escaping of EOL. Use option multistr if needed."),W044:$._("Bad or unnecessary escaping."),W045:$._("Bad number '{a}'."),W046:$._('Don\'t use extra leading zeros "{a}".'),W047:$._("A trailing decimal point can be confused with a dot: '{a}'."),W048:$._("Unexpected control character in regular expression."),W049:$._("Unexpected escaped character '{a}' in regular expression."),W050:$._("JavaScript URL."),W051:$._("Variables should not be deleted."),W052:$._("Unexpected '{a}'."),W053:$._("Do not use {a} as a constructor."),W054:$._("The Function constructor is a form of eval."),W055:$._("A constructor name should start with an uppercase letter."),W056:$._("Bad constructor."),W057:$._("Weird construction. Is 'new' necessary?"),W058:$._('I think you\'re missing the "()" to invoke the constructor.'),W059:$._("Avoid arguments.{a}."),W060:$._("document.write can be a form of eval."),W061:$._("eval can be harmful."),W062:$._("Wrap an immediate function invocation in parens "+"to assist the reader in understanding that the expression "+"is the result of a function, and not the function itself."),W063:$._("Math is not a function."),W064:$._("I think you're missing using 'new' to call a constructor."),W065:$._("It looks like you're missing a radix parameter."),W066:$._("Implied eval. Consider passing a function instead of a string."),W067:$._("Bad invocation."),W068:$._("Wrapping non-IIFE function literals in parens is unnecessary."),W069:$._("['{a}'] is better written in dot notation."),W070:$._("Extra comma. (it breaks older versions of IE)"),W071:$._("This function has too many statements. ({a})"),W072:$._("This function has too many parameters. ({a})"),W073:$._("Blocks are nested too deeply. ({a})"),W074:$._("This function's cyclomatic complexity is too high. ({a})"),W075:$._("Duplicate key '{a}'."),W076:$._("Unexpected parameter '{a}' in get {b} function."),W077:$._("Expected a single parameter in set {a} function."),W078:$._("Setter is defined without getter."),W079:$._("Redefinition of '{a}'."),W080:$._("It's not necessary to initialize '{a}' to 'undefined'."),W081:$._("Too many var statements."),W082:$._("Function declarations should not be placed in blocks. "+"Use a function expression or move the statement to the top of "+"the outer function."),W083:$._("It's not a good idea to define functions within a loop. Can you define them outside instead?"),W084:$._("I thought you were going to type a conditional expression but you typed an assignment instead."),W085:$._("Don't use 'with'."),W086:$._("Did you forget a 'break' statement before '{a}'?"),W087:$._("Forgotten 'debugger' statement?"),W088:$._("Creating global 'for' variable. Should be 'for (var {a} ...'."),W089:$._("The body of a for in should be wrapped in an if statement to filter "+"unwanted properties from the prototype."),W090:$._("'{a}' is not a statement label."),W091:$._("'{a}' is out of scope."),W092:$._("Wrap the /regexp/ literal in parens to disambiguate the slash operator."),W093:$._("Did you mean to return a conditional instead of an assignment?"),W094:$._("Unexpected comma."),W095:$._("I thought you were going to type a string but you typed {a}."),W096:$._("The '{a}' key may produce unexpected results."),W097:$._('Use the function form of "use strict".'),W098:$._("'{a}' is defined but never used."),W099:$._("Mixed spaces and tabs."),W100:$._("This character may get silently deleted by one or more browsers."),W101:$._("Line is too long."),W102:$._("Trailing whitespace."),W103:$._("The '{a}' property is deprecated."),W104:$._("'{a}' is only available in JavaScript 1.7."),W105:$._("Unexpected {a} in '{b}'."),W106:$._("Identifier '{a}' is not in camel case."),W107:$._("Script URL."),W108:$._("Strings must use doublequote."),W109:$._("Strings must use singlequote."),W110:$._("Mixed double and single quotes."),W112:$._("Unclosed string! Make sure you end your string with a quote."),W113:$._("Control character in string: {a}."),W114:$._("Avoid {a}."),W115:$._("Octal literals are not allowed in strict mode."),W116:$._('I thought you were going to type "{a}" but you typed "{b}".'),W117:$._('"{a}" is not defined. Make sure you\'re spelling it correctly and that you declared it.'),W118:$._("'{a}' is only available in Mozilla JavaScript extensions (use moz option)."),W119:$._("'{a}' is only available in ES6 (use esnext option)."),W120:$._("You might be leaking a variable ({a}) here."),W121:$._("I thought you were going to type a conditional expression but you typed an assignment instead. Maybe you meant to type === instead of =?")}
var r={I001:$._("Comma warnings can be turned off with 'laxcomma'."),I002:$._("Reserved words as properties can be used under the 'es5' option."),I003:$._("ES5 option is now set per default")}
n.errors={}
n.warnings={}
n.info={}
for(var i in e){n.errors[i]={code:i,desc:e[i]}}for(var i in t){n.warnings[i]={code:i,desc:t[i]}}for(var i in r){n.info[i]={code:i,desc:r[i]}}})()},{}],5:[function(e,t,n){"use string"
n.unsafeString=/@cc|<\/?|script|\]\s*\]|<\s*!|&lt/i
n.unsafeChars=/[\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/
n.needEsc=/[\u0000-\u001f&<"\/\\\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/
n.needEscGlobal=/[\u0000-\u001f&<"\/\\\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
n.starSlash=/\*\//
n.identifier=/^([a-zA-Z_$][a-zA-Z0-9_$]*)$/
n.javascriptURL=/^(?:javascript|jscript|ecmascript|vbscript|mocha|livescript)\s*:/i
n.fallsThrough=/^\s*\/\*\s*falls?\sthrough\s*\*\/\s*$/},{}],6:[function(e,t,n){"use strict"
var r={syntax:{},reset:function(){this.tokens={prev:null,next:null,curr:null}
this.option={}
this.ignored={}
this.directive={}
this.jsonMode=false
this.jsonWarnings=[]
this.lines=[]
this.tab=""
this.cache={}}}
n.state=r},{}],7:[function(e,t,n){(function(){"use strict"
n.register=function(e){e.on("Identifier",function t(n){if(e.getOption("proto")){return}if(n.name==="__proto__"){e.warn("W103",{line:n.line,"char":n.char,data:[n.name]})}})
e.on("Identifier",function n(t){if(e.getOption("iterator")){return}if(t.name==="__iterator__"){e.warn("W104",{line:t.line,"char":t.char,data:[t.name]})}})
e.on("Identifier",function r(t){if(!e.getOption("nomen")){return}if(t.name==="_"){return}if(e.getOption("node")){if(/^(__dirname|__filename)$/.test(t.name)&&!t.isProperty){return}}if(/^(_+.*|.*_+)$/.test(t.name)){e.warn("W105",{line:t.line,"char":t.from,data:["dangling '_'",t.name]})}})
e.on("Identifier",function i(t){if(!e.getOption("camelcase")){return}if(t.name.replace(/^_+/,"").indexOf("_")>-1&&!t.name.match(/^[A-Z0-9_]*$/)){e.warn("W106",{line:t.line,"char":t.from,data:[t.name]})}})
e.on("String",function a(t){var n=e.getOption("quotmark")
var r
if(!n){return}if(n==="single"&&t.quote!=="'"){r="W109"}if(n==="double"&&t.quote!=='"'){r="W108"}if(n===true){if(!e.getCache("quotmark")){e.setCache("quotmark",t.quote)}if(e.getCache("quotmark")!==t.quote){r="W110"}}if(r){e.warn(r,{line:t.line,"char":t.char})}})
e.on("Number",function s(t){if(t.value.charAt(0)==="."){e.warn("W008",{line:t.line,"char":t.char,data:[t.value]})}if(t.value.substr(t.value.length-1)==="."){e.warn("W047",{line:t.line,"char":t.char,data:[t.value]})}if(/^00+/.test(t.value)){e.warn("W046",{line:t.line,"char":t.char,data:[t.value]})}})
e.on("String",function o(t){var n=/^(?:javascript|jscript|ecmascript|vbscript|mocha|livescript)\s*:/i
if(e.getOption("scripturl")){return}if(n.test(t.value)){e.warn("W107",{line:t.line,"char":t.char})}})}})()},{}],8:[function(e,t,n){(function(){"use strict"
var t=e("events")
var r=e("./reg.js")
var i=e("./state.js").state
var a={Identifier:1,Punctuator:2,NumericLiteral:3,StringLiteral:4,Comment:5,Keyword:6,NullLiteral:7,BooleanLiteral:8,RegExp:9}
var s=[170,170,181,181,186,186,192,214,216,246,248,705,710,721,736,740,748,748,750,750,880,884,886,887,890,893,902,902,904,906,908,908,910,929,931,1013,1015,1153,1162,1319,1329,1366,1369,1369,1377,1415,1488,1514,1520,1522,1568,1610,1646,1647,1649,1747,1749,1749,1765,1766,1774,1775,1786,1788,1791,1791,1808,1808,1810,1839,1869,1957,1969,1969,1994,2026,2036,2037,2042,2042,2048,2069,2074,2074,2084,2084,2088,2088,2112,2136,2308,2361,2365,2365,2384,2384,2392,2401,2417,2423,2425,2431,2437,2444,2447,2448,2451,2472,2474,2480,2482,2482,2486,2489,2493,2493,2510,2510,2524,2525,2527,2529,2544,2545,2565,2570,2575,2576,2579,2600,2602,2608,2610,2611,2613,2614,2616,2617,2649,2652,2654,2654,2674,2676,2693,2701,2703,2705,2707,2728,2730,2736,2738,2739,2741,2745,2749,2749,2768,2768,2784,2785,2821,2828,2831,2832,2835,2856,2858,2864,2866,2867,2869,2873,2877,2877,2908,2909,2911,2913,2929,2929,2947,2947,2949,2954,2958,2960,2962,2965,2969,2970,2972,2972,2974,2975,2979,2980,2984,2986,2990,3001,3024,3024,3077,3084,3086,3088,3090,3112,3114,3123,3125,3129,3133,3133,3160,3161,3168,3169,3205,3212,3214,3216,3218,3240,3242,3251,3253,3257,3261,3261,3294,3294,3296,3297,3313,3314,3333,3340,3342,3344,3346,3386,3389,3389,3406,3406,3424,3425,3450,3455,3461,3478,3482,3505,3507,3515,3517,3517,3520,3526,3585,3632,3634,3635,3648,3654,3713,3714,3716,3716,3719,3720,3722,3722,3725,3725,3732,3735,3737,3743,3745,3747,3749,3749,3751,3751,3754,3755,3757,3760,3762,3763,3773,3773,3776,3780,3782,3782,3804,3805,3840,3840,3904,3911,3913,3948,3976,3980,4096,4138,4159,4159,4176,4181,4186,4189,4193,4193,4197,4198,4206,4208,4213,4225,4238,4238,4256,4293,4304,4346,4348,4348,4352,4680,4682,4685,4688,4694,4696,4696,4698,4701,4704,4744,4746,4749,4752,4784,4786,4789,4792,4798,4800,4800,4802,4805,4808,4822,4824,4880,4882,4885,4888,4954,4992,5007,5024,5108,5121,5740,5743,5759,5761,5786,5792,5866,5870,5872,5888,5900,5902,5905,5920,5937,5952,5969,5984,5996,5998,6e3,6016,6067,6103,6103,6108,6108,6176,6263,6272,6312,6314,6314,6320,6389,6400,6428,6480,6509,6512,6516,6528,6571,6593,6599,6656,6678,6688,6740,6823,6823,6917,6963,6981,6987,7043,7072,7086,7087,7104,7141,7168,7203,7245,7247,7258,7293,7401,7404,7406,7409,7424,7615,7680,7957,7960,7965,7968,8005,8008,8013,8016,8023,8025,8025,8027,8027,8029,8029,8031,8061,8064,8116,8118,8124,8126,8126,8130,8132,8134,8140,8144,8147,8150,8155,8160,8172,8178,8180,8182,8188,8305,8305,8319,8319,8336,8348,8450,8450,8455,8455,8458,8467,8469,8469,8473,8477,8484,8484,8486,8486,8488,8488,8490,8493,8495,8505,8508,8511,8517,8521,8526,8526,8544,8584,11264,11310,11312,11358,11360,11492,11499,11502,11520,11557,11568,11621,11631,11631,11648,11670,11680,11686,11688,11694,11696,11702,11704,11710,11712,11718,11720,11726,11728,11734,11736,11742,11823,11823,12293,12295,12321,12329,12337,12341,12344,12348,12353,12438,12445,12447,12449,12538,12540,12543,12549,12589,12593,12686,12704,12730,12784,12799,13312,13312,19893,19893,19968,19968,40907,40907,40960,42124,42192,42237,42240,42508,42512,42527,42538,42539,42560,42606,42623,42647,42656,42735,42775,42783,42786,42888,42891,42894,42896,42897,42912,42921,43002,43009,43011,43013,43015,43018,43020,43042,43072,43123,43138,43187,43250,43255,43259,43259,43274,43301,43312,43334,43360,43388,43396,43442,43471,43471,43520,43560,43584,43586,43588,43595,43616,43638,43642,43642,43648,43695,43697,43697,43701,43702,43705,43709,43712,43712,43714,43714,43739,43741,43777,43782,43785,43790,43793,43798,43808,43814,43816,43822,43968,44002,44032,44032,55203,55203,55216,55238,55243,55291,63744,64045,64048,64109,64112,64217,64256,64262,64275,64279,64285,64285,64287,64296,64298,64310,64312,64316,64318,64318,64320,64321,64323,64324,64326,64433,64467,64829,64848,64911,64914,64967,65008,65019,65136,65140,65142,65276,65313,65338,65345,65370,65382,65470,65474,65479,65482,65487,65490,65495,65498,65500,65536,65547,65549,65574,65576,65594,65596,65597,65599,65613,65616,65629,65664,65786,65856,65908,66176,66204,66208,66256,66304,66334,66352,66378,66432,66461,66464,66499,66504,66511,66513,66517,66560,66717,67584,67589,67592,67592,67594,67637,67639,67640,67644,67644,67647,67669,67840,67861,67872,67897,68096,68096,68112,68115,68117,68119,68121,68147,68192,68220,68352,68405,68416,68437,68448,68466,68608,68680,69635,69687,69763,69807,73728,74606,74752,74850,77824,78894,92160,92728,110592,110593,119808,119892,119894,119964,119966,119967,119970,119970,119973,119974,119977,119980,119982,119993,119995,119995,119997,120003,120005,120069,120071,120074,120077,120084,120086,120092,120094,120121,120123,120126,120128,120132,120134,120134,120138,120144,120146,120485,120488,120512,120514,120538,120540,120570,120572,120596,120598,120628,120630,120654,120656,120686,120688,120712,120714,120744,120746,120770,120772,120779,131072,131072,173782,173782,173824,173824,177972,177972,177984,177984,178205,178205,194560,195101]
var o=[]
for(var l=0;l<128;l++){o[l]=l===36||l>=65&&l<=90||l===95||l>=97&&l<=122}var u=[]
for(var l=0;l<128;l++){u[l]=o[l]||l>=48&&l<=57}function f(){var e=[]
return{push:function(t){e.push(t)},check:function(){for(var t=0;t<e.length;++t){e[t]()}e.splice(0,e.length)}}}function c(e){var n=e
if(typeof n==="string"){n=n.replace(/\r\n/g,"\n").replace(/\r/g,"\n").split("\n")}if(n[0]&&n[0].substr(0,2)==="#!"){n[0]=""}this.emitter=new t.EventEmitter
this.source=e
this.setLines(n)
this.prereg=true
this.line=0
this.char=1
this.from=1
this.input=""
for(var r=0;r<i.option.indent;r+=1){i.tab+=" "}}c.prototype={_lines:[],getLines:function(){this._lines=i.lines
return this._lines},setLines:function(e){this._lines=e
i.lines=this._lines},peek:function(e){return this.input.charAt(e||0)},skip:function(e){e=e||1
this.char+=e
this.input=this.input.slice(e)},on:function(e,t){e.split(" ").forEach(function(e){this.emitter.on(e,t)}.bind(this))},trigger:function(){this.emitter.emit.apply(this.emitter,Array.prototype.slice.call(arguments))},triggerAsync:function(e,t,n,r){n.push(function(){if(r()){this.trigger(e,t)}}.bind(this))},scanPunctuator:function(){var e=this.peek()
var t,n,r
switch(e){case".":if(/^[0-9]$/.test(this.peek(1))){return null}if(this.peek(1)==="."&&this.peek(2)==="."){return{type:a.Punctuator,value:"..."}}case"(":case")":case";":case",":case"{":case"}":case"[":case"]":case":":case"~":case"?":return{type:a.Punctuator,value:e}
case"#":return{type:a.Punctuator,value:e}
case"":return null}t=this.peek(1)
n=this.peek(2)
r=this.peek(3)
if(e===">"&&t===">"&&n===">"&&r==="="){return{type:a.Punctuator,value:">>>="}}if(e==="="&&t==="="&&n==="="){return{type:a.Punctuator,value:"==="}}if(e==="!"&&t==="="&&n==="="){return{type:a.Punctuator,value:"!=="}}if(e===">"&&t===">"&&n===">"){return{type:a.Punctuator,value:">>>"}}if(e==="<"&&t==="<"&&n==="="){return{type:a.Punctuator,value:"<<="}}if(e===">"&&t===">"&&n==="="){return{type:a.Punctuator,value:">>="}}if(e==="="&&t===">"){return{type:a.Punctuator,value:e+t}}if(e===t&&"+-<>&|".indexOf(e)>=0){return{type:a.Punctuator,value:e+t}}if("<>=!+-*%&|^".indexOf(e)>=0){if(t==="="){return{type:a.Punctuator,value:e+t}}return{type:a.Punctuator,value:e}}if(e==="/"){if(t==="="&&/\/=(?!(\S*\/[gim]?))/.test(this.input)){return{type:a.Punctuator,value:"/="}}return{type:a.Punctuator,value:"/"}}return null},scanComments:function(){var e=this.peek()
var t=this.peek(1)
var n=this.input.substr(2)
var r=this.line
var i=this.char
function s(e,t,n){var r=["jshint","jslint","members","member","globals","global","exported"]
var i=false
var s=e+t
var o="plain"
n=n||{}
if(n.isMultiline){s+="*/"}r.forEach(function(n){if(i){return}if(e==="//"&&n!=="jshint"){return}if(t.substr(0,n.length)===n){i=true
e=e+n
t=t.substr(n.length)}if(!i&&t.charAt(0)===" "&&t.substr(1,n.length)===n){i=true
e=e+" "+n
t=t.substr(n.length+1)}if(!i){return}switch(n){case"member":o="members"
break
case"global":o="globals"
break
default:o=n}})
return{type:a.Comment,commentType:o,value:s,body:t,isSpecial:i,isMultiline:n.isMultiline||false,isMalformed:n.isMalformed||false}}if(e==="*"&&t==="/"){this.trigger("error",{code:"E018",line:r,character:i})
this.skip(2)
return null}if(e!=="/"||t!=="*"&&t!=="/"){return null}if(t==="/"){this.skip(this.input.length)
return s("//",n)}var o=""
if(t==="*"){this.skip(2)
while(this.peek()!=="*"||this.peek(1)!=="/"){if(this.peek()===""){o+="\n"
if(!this.nextLine()){this.trigger("error",{code:"E017",line:r,character:i})
return s("/*",o,{isMultiline:true,isMalformed:true})}}else{o+=this.peek()
this.skip()}}this.skip(2)
return s("/*",o,{isMultiline:true})}},scanKeyword:function(){var e=/^[a-zA-Z_$][a-zA-Z0-9_$]*/.exec(this.input)
var t=["if","in","do","var","for","new","try","let","this","else","case","void","with","enum","while","break","catch","throw","const","yield","class","super","return","typeof","delete","switch","export","import","default","finally","extends","function","continue","debugger","instanceof"]
if(e&&t.indexOf(e[0])>=0){return{type:a.Keyword,value:e[0]}}return null},scanIdentifier:function(){var e=""
var t=0
var n,r
function i(e){for(var t=0;t<s.length;){if(e<s[t++]){return false}if(e<=s[t++]){return true}}return false}function l(e){return/^[0-9a-fA-F]$/.test(e)}var f=function(){t+=1
if(this.peek(t)!=="u"){return null}var e=this.peek(t+1)
var n=this.peek(t+2)
var r=this.peek(t+3)
var a=this.peek(t+4)
var s
if(l(e)&&l(n)&&l(r)&&l(a)){s=parseInt(e+n+r+a,16)
if(i(s)){t+=5
return"\\u"+e+n+r+a}return null}return null}.bind(this)
var c=function(){var e=this.peek(t)
var n=e.charCodeAt(0)
if(n===92){return f()}if(n<128){if(o[n]){t+=1
return e}return null}if(i(n)){t+=1
return e}return null}.bind(this)
var h=function(){var e=this.peek(t)
var n=e.charCodeAt(0)
if(n===92){return f()}if(n<128){if(u[n]){t+=1
return e}return null}if(i(n)){t+=1
return e}return null}.bind(this)
r=c()
if(r===null){return null}e=r
for(;;){r=h()
if(r===null){break}e+=r}switch(e){case"true":case"false":n=a.BooleanLiteral
break
case"null":n=a.NullLiteral
break
default:n=a.Identifier}return{type:n,value:e}},scanNumericLiteral:function(){var e=0
var t=""
var n=this.input.length
var r=this.peek(e)
var i
function s(e){return/^[0-9]$/.test(e)}function o(e){return/^[0-7]$/.test(e)}function l(e){return/^[0-9a-fA-F]$/.test(e)}function u(e){return e==="$"||e==="_"||e==="\\"||e>="a"&&e<="z"||e>="A"&&e<="Z"}if(r!=="."&&!s(r)){return null}if(r!=="."){t=this.peek(e)
e+=1
r=this.peek(e)
if(t==="0"){if(r==="x"||r==="X"){e+=1
t+=r
while(e<n){r=this.peek(e)
if(!l(r)){break}t+=r
e+=1}if(t.length<=2){return{type:a.NumericLiteral,value:t,isMalformed:true}}if(e<n){r=this.peek(e)
if(u(r)){return null}}return{type:a.NumericLiteral,value:t,base:16,isMalformed:false}}if(o(r)){e+=1
t+=r
i=false
while(e<n){r=this.peek(e)
if(s(r)){i=true}else if(!o(r)){break}t+=r
e+=1}if(e<n){r=this.peek(e)
if(u(r)){return null}}return{type:a.NumericLiteral,value:t,base:8,isMalformed:false}}if(s(r)){e+=1
t+=r}}while(e<n){r=this.peek(e)
if(!s(r)){break}t+=r
e+=1}}if(r==="."){t+=r
e+=1
while(e<n){r=this.peek(e)
if(!s(r)){break}t+=r
e+=1}}if(r==="e"||r==="E"){t+=r
e+=1
r=this.peek(e)
if(r==="+"||r==="-"){t+=this.peek(e)
e+=1}r=this.peek(e)
if(s(r)){t+=r
e+=1
while(e<n){r=this.peek(e)
if(!s(r)){break}t+=r
e+=1}}else{return null}}if(e<n){r=this.peek(e)
if(u(r)){return null}}return{type:a.NumericLiteral,value:t,base:10,isMalformed:!isFinite(t)}},scanStringLiteral:function(e){var t=this.peek()
if(t!=='"'&&t!=="'"){return null}this.triggerAsync("warning",{code:"W108",line:this.line,character:this.char},e,function(){return i.jsonMode&&t!=='"'})
var n=""
var r=this.line
var s=this.char
var o=false
this.skip()
while(this.peek()!==t){while(this.peek()===""){if(!o){this.trigger("warning",{code:"W112",line:this.line,character:this.char})}else{o=false
this.triggerAsync("warning",{code:"W043",line:this.line,character:this.char},e,function(){return!i.option.multistr})
this.triggerAsync("warning",{code:"W042",line:this.line,character:this.char},e,function(){return i.jsonMode&&i.option.multistr})}if(!this.nextLine()){this.trigger("error",{code:"E029",line:r,character:s})
return{type:a.StringLiteral,value:n,isUnclosed:true,quote:t}}}o=false
var l=this.peek()
var u=1
if(l<" "){this.trigger("warning",{code:"W113",line:this.line,character:this.char,data:["<non-printable>"]})}if(l==="\\"){this.skip()
l=this.peek()
switch(l){case"'":this.triggerAsync("warning",{code:"W114",line:this.line,character:this.char,data:["\\'"]},e,function(){return i.jsonMode})
break
case"b":l="\b"
break
case"f":l="\f"
break
case"n":l="\n"
break
case"r":l="\r"
break
case"t":l="	"
break
case"0":l="\x00"
var f=parseInt(this.peek(1),10)
this.triggerAsync("warning",{code:"W115",line:this.line,character:this.char},e,function(){return f>=0&&f<=7&&i.directive["use strict"]})
break
case"u":l=String.fromCharCode(parseInt(this.input.substr(1,4),16))
u=5
break
case"v":this.triggerAsync("warning",{code:"W114",line:this.line,character:this.char,data:["\\v"]},e,function(){return i.jsonMode})
l=""
break
case"x":var c=parseInt(this.input.substr(1,2),16)
this.triggerAsync("warning",{code:"W114",line:this.line,character:this.char,data:["\\x-"]},e,function(){return i.jsonMode})
l=String.fromCharCode(c)
u=3
break
case"\\":case'"':case"/":break
case"":o=true
l=""
break
case"!":if(n.slice(n.length-2)==="<"){break}default:this.trigger("warning",{code:"W044",line:this.line,character:this.char})}}n+=l
this.skip(u)}this.skip()
return{type:a.StringLiteral,value:n,isUnclosed:false,quote:t}},scanRegExp:function(){var e=0
var t=this.input.length
var n=this.peek()
var r=n
var i=""
var s=[]
var o=false
var l=false
var u
var f=function(){if(n<" "){o=true
this.trigger("warning",{code:"W048",line:this.line,character:this.char})}if(n==="<"){o=true
this.trigger("warning",{code:"W049",line:this.line,character:this.char,data:[n]})}}.bind(this)
if(!this.prereg||n!=="/"){return null}e+=1
u=false
while(e<t){n=this.peek(e)
r+=n
i+=n
if(l){if(n==="]"){if(this.peek(e-1)!=="\\"||this.peek(e-2)==="\\"){l=false}}if(n==="\\"){e+=1
n=this.peek(e)
i+=n
r+=n
f()}e+=1
continue}if(n==="\\"){e+=1
n=this.peek(e)
i+=n
r+=n
f()
if(n==="/"){e+=1
continue}if(n==="["){e+=1
continue}}if(n==="["){l=true
e+=1
continue}if(n==="/"){i=i.substr(0,i.length-1)
u=true
e+=1
break}e+=1}if(!u){this.trigger("error",{code:"E015",line:this.line,character:this.from})
return void this.trigger("fatal",{line:this.line,from:this.from})}while(e<t){n=this.peek(e)
if(!/[gim]/.test(n)){break}s.push(n)
r+=n
e+=1}try{new RegExp(i,s.join(""))}catch(c){o=true
this.trigger("error",{code:"E016",line:this.line,character:this.char,data:[c.message]})}return{type:a.RegExp,value:r,flags:s,isMalformed:o}},scanMixedSpacesAndTabs:function(){var e,t
if(i.option.smarttabs){t=this.input.match(/(\/\/|^\s?\*)? \t/)
e=t&&!t[1]?0:-1}else{e=this.input.search(/ \t|\t [^\*]/)}return e},scanUnsafeChars:function(){return this.input.search(r.unsafeChars)},next:function(e){this.from=this.char
var t
if(/\s/.test(this.peek())){t=this.char
while(/\s/.test(this.peek())){this.from+=1
this.skip()}if(this.peek()===""){if(!/^\s*$/.test(this.getLines()[this.line-1])&&i.option.trailing){this.trigger("warning",{code:"W102",line:this.line,character:t})}}}var n=this.scanComments()||this.scanStringLiteral(e)
if(n){return n}n=this.scanRegExp()||this.scanPunctuator()||this.scanKeyword()||this.scanIdentifier()||this.scanNumericLiteral()
if(n){this.skip(n.value.length)
return n}return null},nextLine:function(){var e
if(this.line>=this.getLines().length){return false}this.input=this.getLines()[this.line]
this.line+=1
this.char=1
this.from=1
e=this.scanMixedSpacesAndTabs()
if(e>=0){this.trigger("warning",{code:"W099",line:this.line,character:e+1})}this.input=this.input.replace(/\t/g,i.tab)
e=this.scanUnsafeChars()
if(e>=0){this.trigger("warning",{code:"W100",line:this.line,character:e})}if(i.option.maxlen&&i.option.maxlen<this.input.length){this.trigger("warning",{code:"W101",line:this.line,character:this.input.length})}return true},start:function(){this.nextLine()},token:function(){var e=f()
var t
function n(e,t){if(!e.reserved){return false}var n=e.meta
if(n&&n.isFutureReservedWord&&i.option.inES5()){if(!n.es5){return false}if(n.strictOnly){if(!i.option.strict&&!i.directive["use strict"]){return false}}if(t){return false}}return true}var r=function(t,r,a){var s
if(t!=="(endline)"&&t!=="(end)"){this.prereg=false}if(t==="(punctuator)"){switch(r){case".":case")":case"~":case"#":case"]":this.prereg=false
break
default:this.prereg=true}s=Object.create(i.syntax[r]||i.syntax["(error)"])}if(t==="(identifier)"){if(r==="return"||r==="case"||r==="typeof"){this.prereg=true}if(i.syntax.hasOwnProperty(r)){s=Object.create(i.syntax[r]||i.syntax["(error)"])
if(!n(s,a&&t==="(identifier)")){s=null}}}if(!s){s=Object.create(i.syntax[t])}s.identifier=t==="(identifier)"
s.type=s.type||t
s.value=r
s.line=this.line
s.character=this.char
s.from=this.from
if(a&&s.identifier){s.isProperty=a}s.check=e.check
return s}.bind(this)
for(;;){if(!this.input.length){return r(this.nextLine()?"(endline)":"(end)","")}t=this.next(e)
if(!t){if(this.input.length){this.trigger("error",{code:"E024",line:this.line,character:this.char,data:[this.peek()]})
this.input=""}continue}switch(t.type){case a.StringLiteral:this.triggerAsync("String",{line:this.line,"char":this.char,from:this.from,value:t.value,quote:t.quote},e,function(){return true})
return r("(string)",t.value)
case a.Identifier:this.trigger("Identifier",{line:this.line,"char":this.char,from:this.form,name:t.value,isProperty:i.tokens.curr.id==="."})
case a.Keyword:case a.NullLiteral:case a.BooleanLiteral:return r("(identifier)",t.value,i.tokens.curr.id===".")
case a.NumericLiteral:if(t.isMalformed){this.trigger("warning",{code:"W045",line:this.line,character:this.char,data:[t.value]})}this.triggerAsync("warning",{code:"W114",line:this.line,character:this.char,data:["0x-"]},e,function(){return t.base===16&&i.jsonMode})
this.triggerAsync("warning",{code:"W115",line:this.line,character:this.char},e,function(){return i.directive["use strict"]&&t.base===8})
this.trigger("Number",{line:this.line,"char":this.char,from:this.from,value:t.value,base:t.base,isMalformed:t.malformed})
return r("(number)",t.value)
case a.RegExp:return r("(regexp)",t.value)
case a.Comment:i.tokens.curr.comment=true
if(t.isSpecial){return{id:"(comment)",value:t.value,body:t.body,type:t.commentType,isSpecial:t.isSpecial,line:this.line,character:this.char,from:this.from}}break
case"":break
default:return r("(punctuator)",t.value)}}}}
n.Lexer=c})()},{events:2,"./reg.js":5,"./state.js":6}],jshint:[function(e,t,n){t.exports=e("FD4Lxs")},{}],FD4Lxs:[function(e,t,n){(function(){var t=e("events")
var r=e("./vars.js")
var i=e("./messages.js")
var a=e("./lex.js").Lexer
var s=e("./reg.js")
var o=e("./state.js").state
var l=e("./style.js")
var u=e("console-browserify")
var f=function(){"use strict"
var e,n,u={"<":true,"<=":true,"==":true,"===":true,"!==":true,"!=":true,">":true,">=":true,"+":true,"-":true,"*":true,"/":true,"%":true},c={asi:true,bitwise:true,boss:true,browser:true,camelcase:true,couch:true,curly:true,debug:true,devel:true,dojo:true,eqeqeq:true,eqnull:true,es3:true,es5:true,esnext:true,moz:true,evil:true,expr:true,forin:true,funcscope:true,gcl:true,globalstrict:true,immed:true,iterator:true,jquery:true,lastsemic:true,laxbreak:true,laxcomma:true,loopfunc:true,mootools:true,multistr:true,newcap:true,noarg:true,node:true,noempty:true,nonew:true,nonstandard:true,nomen:true,onevar:true,passfail:true,phantom:true,plusplus:true,proto:true,prototypejs:true,rhino:true,shelljs:true,typed:true,undef:true,scripturl:true,shadow:true,smarttabs:true,strict:true,sub:true,supernew:true,trailing:true,validthis:true,withstmt:true,white:true,worker:true,wsh:true,yui:true,onecase:true,regexp:true,regexdash:true},h={maxlen:false,indent:false,maxerr:false,predef:false,quotmark:false,scope:false,maxstatements:false,maxdepth:false,maxparams:false,maxcomplexity:false,unused:true,latedef:false},p={bitwise:true,forin:true,newcap:true,nomen:true,plusplus:true,regexp:true,undef:true,white:true,eqeqeq:true,onevar:true,strict:true},d={eqeq:"eqeqeq",vars:"onevar",windows:"wsh",sloppy:"strict"},m,g,v=["closure","exception","global","label","outer","unused","var"],y,b,x,k,E,w,S,A,_,T,C,L,I,P,R,O,M,N=[],D=new t.EventEmitter,W=Object.prototype.hasOwnProperty,F={}
F.has=function(e,t){return W.call(e,t)}
F.contains=function(e,t){if(e===null||e===undefined){return false}return e.indexOf(t)!==-1}
function G(e,t){e=e.trim()
if(/^[+-]W\d{3}$/g.test(e)){return true}if(h[e]===undefined&&c[e]===undefined){if(t.type!=="jslint"){J("E001",t,e)
return false}}return true}function B(e){return Object.prototype.toString.call(e)==="[object String]"}function V(e,t){if(!e)return false
if(!e.identifier||e.value!==t)return false
return true}function U(e){if(!e.reserved){return false}var t=e.meta
if(t&&t.isFutureReservedWord&&o.option.inES5()){if(!t.es5){return false}if(t.strictOnly){if(!o.option.strict&&!o.directive["use strict"]){return false}}if(e.isProperty){return false}}return true}function z(e,t){return e.replace(/\{([^{}]*)\}/g,function(e,n){var r=t[n]
return typeof r==="string"||typeof r==="number"?r:e})}function H(e,t){var n
for(n in t){if(F.has(t,n)&&!F.has(f.blacklist,n)){e[n]=t[n]}}}function j(){Object.keys(f.blacklist).forEach(function(e){delete L[e]})}function K(){if(o.option.es5){Y("I003")}if(o.option.couch){H(L,r.couch)}if(o.option.rhino){H(L,r.rhino)}if(o.option.shelljs){H(L,r.shelljs)
H(L,r.node)}if(o.option.typed){H(L,r.typed)}if(o.option.phantom){H(L,r.phantom)}if(o.option.prototypejs){H(L,r.prototypejs)}if(o.option.node){H(L,r.node)
H(L,r.typed)}if(o.option.devel){H(L,r.devel)}if(o.option.dojo){H(L,r.dojo)}if(o.option.browser){H(L,r.browser)
H(L,r.typed)}if(o.option.nonstandard){H(L,r.nonstandard)}if(o.option.jquery){H(L,r.jquery)}if(o.option.mootools){H(L,r.mootools)}if(o.option.worker){H(L,r.worker)}if(o.option.wsh){H(L,r.wsh)}if(o.option.globalstrict&&o.option.strict!==false){o.option.strict=true}if(o.option.yui){H(L,r.yui)}o.option.inMoz=function(e){if(e){return o.option.moz&&!o.option.esnext}return o.option.moz}
o.option.inESNext=function(e){if(e){return!o.option.moz&&o.option.esnext}return o.option.moz||o.option.esnext}
o.option.inES5=function(){return!o.option.es3}
o.option.inES3=function(e){if(e){return!o.option.moz&&!o.option.esnext&&o.option.es3}return o.option.es3}}function X(e,t,n){var r=Math.floor(t/o.lines.length*100)
var a=i.errors[e].desc
throw{name:"JSHintError",line:t,character:n,message:a+" ("+r+"% scanned).",raw:a,code:e}}function q(e,t,n,r){return f.undefs.push([e,t,n,r])}function Y(e,t,n,r,a,s){var l,u,c,h
if(/^W\d{3}$/.test(e)){if(o.ignored[e])return
h=i.warnings[e]}else if(/E\d{3}/.test(e)){h=i.errors[e]}else if(/I\d{3}/.test(e)){h=i.info[e]}t=t||o.tokens.next
if(t.id==="(end)"){t=o.tokens.curr}u=t.line||0
l=t.from||0
c={id:"(error)",raw:h.desc,code:h.code,evidence:o.lines[u-1]||"",line:u,character:l,scope:f.scope,a:n,b:r,c:a,d:s}
c.reason=z(h.desc,c)
f.errors.push(c)
if(o.option.passfail){X("E042",u,l)}M+=1
if(M>=o.option.maxerr){X("E043",u,l)}return c}function Z(e,t,n,r,i,a,s){return Y(e,{line:t,from:n},r,i,a,s)}function J(e,t,n,r,i,a){Y(e,t,n,r,i,a)}function Q(e,t,n,r,i,a,s){return J(e,{line:t,from:n},r,i,a,s)}function et(e,t){var n
n={id:"(internal)",elem:e,value:t}
f.internals.push(n)
return n}function tt(e,t,n,r){if(t==="exception"){if(F.has(y["(context)"],e)){if(y[e]!==true&&!o.option.node){Y("W002",o.tokens.next,e)}}}if(F.has(y,e)&&!y["(global)"]){if(y[e]===true){if(o.option.latedef){if(o.option.latedef===true&&F.contains([y[e],t],"unction")||!F.contains([y[e],t],"unction")){Y("W003",o.tokens.next,e)}}}else{if(!o.option.shadow&&t!=="exception"||y["(blockscope)"].getlabel(e)){Y("W004",o.tokens.next,e)}}}if(y["(blockscope)"]&&y["(blockscope)"].current.has(e)){J("E044",o.tokens.next,e)}if(r){y["(blockscope)"].current.add(e,t,o.tokens.curr)}else{y[e]=t
if(n){y["(tokens)"][e]=n}if(y["(global)"]){x[e]=y
if(F.has(k,e)){if(o.option.latedef){if(o.option.latedef===true&&F.contains([y[e],t],"unction")||!F.contains([y[e],t],"unction")){Y("W003",o.tokens.next,e)}}delete k[e]}}else{I[e]=y}}}function nt(){var e=o.tokens.next
var t=e.body.split(",").map(function(e){return e.trim()})
var n={}
if(e.type==="globals"){t.forEach(function(e){e=e.split(":")
var t=(e[0]||"").trim()
var r=(e[1]||"").trim()
if(t.charAt(0)==="-"){t=t.slice(1)
r=false
f.blacklist[t]=t
j()}else{n[t]=r==="true"}})
H(L,n)
for(var r in n){if(F.has(n,r)){m[r]=e}}}if(e.type==="exported"){t.forEach(function(e){g[e]=true})}if(e.type==="members"){T=T||{}
t.forEach(function(e){var t=e.charAt(0)
var n=e.charAt(e.length-1)
if(t===n&&(t==='"'||t==="'")){e=e.substr(1,e.length-2).replace("\\b","\b").replace("\\t","	").replace("\\n","\n").replace("\\v","").replace("\\f","\f").replace("\\r","\r").replace("\\\\","\\").replace('\\"','"')}T[e]=false})}var i=["maxstatements","maxparams","maxdepth","maxcomplexity","maxerr","maxlen","indent"]
if(e.type==="jshint"||e.type==="jslint"){t.forEach(function(t){t=t.split(":")
var n=(t[0]||"").trim()
var r=(t[1]||"").trim()
if(!G(n,e)){return}if(i.indexOf(n)>=0){if(r!=="false"){r=+r
if(typeof r!=="number"||!isFinite(r)||r<=0||Math.floor(r)!==r){J("E032",e,t[1].trim())
return}if(n==="indent"){o.option["(explicitIndent)"]=true}o.option[n]=r}else{if(n==="indent"){o.option["(explicitIndent)"]=false}else{o.option[n]=false}}return}if(n==="validthis"){if(y["(global)"]){J("E009")}else{if(r==="true"||r==="false"){o.option.validthis=r==="true"}else{J("E002",e)}}return}if(n==="quotmark"){switch(r){case"true":case"false":o.option.quotmark=r==="true"
break
case"double":case"single":o.option.quotmark=r
break
default:J("E002",e)}return}if(n==="unused"){switch(r){case"true":o.option.unused=true
break
case"false":o.option.unused=false
break
case"vars":case"strict":o.option.unused=r
break
default:J("E002",e)}return}if(n==="latedef"){switch(r){case"true":o.option.latedef=true
break
case"false":o.option.latedef=false
break
case"nofunc":o.option.latedef="nofunc"
break
default:J("E002",e)}return}var a=/^([+-])(W\d{3})$/g.exec(n)
if(a){o.ignored[a[2]]=a[1]==="-"
return}var s
if(r==="true"||r==="false"){if(e.type==="jslint"){s=d[n]||n
o.option[s]=r==="true"
if(p[s]!==undefined){o.option[s]=!o.option[s]}}else{o.option[n]=r==="true"}if(n==="newcap"){o.option["(explicitNewcap)"]=true}return}J("E002",e)})
K()}}function rt(e){var t=e||0,n=0,r
while(n<=t){r=S[n]
if(!r){r=S[n]=A.token()}n+=1}return r}function it(t,n){switch(o.tokens.curr.id){case"(number)":if(o.tokens.next.id==="."){Y("W005",o.tokens.curr)}break
case"-":if(o.tokens.next.id==="-"||o.tokens.next.id==="--"){Y("W006")}break
case"+":if(o.tokens.next.id==="+"||o.tokens.next.id==="++"){Y("W007")}break}if(o.tokens.curr.type==="(string)"||o.tokens.curr.identifier){e=o.tokens.curr.value}if(t&&o.tokens.next.id!==t){if(n){if(o.tokens.next.id==="(end)"){J("E019",n,n.id)}else{J("E020",o.tokens.next,t,n.id,n.line,o.tokens.next.value)}}else if(o.tokens.next.type!=="(identifier)"||o.tokens.next.value!==t){Y("W116",o.tokens.next,t,o.tokens.next.value)}}o.tokens.prev=o.tokens.curr
o.tokens.curr=o.tokens.next
for(;;){o.tokens.next=S.shift()||A.token()
if(!o.tokens.next){X("E041",o.tokens.curr.line)}if(o.tokens.next.id==="(end)"||o.tokens.next.id==="(error)"){return}if(o.tokens.next.check){o.tokens.next.check()}if(o.tokens.next.isSpecial){nt()}else{if(o.tokens.next.id!=="(endline)"){break}}}}function at(e){return e.infix||!e.identifier&&!!e.led}function st(){var e=o.tokens.curr
var t=o.tokens.next
if(t.id===";"||t.id==="}"||t.id===":"){return true}if(at(t)===at(e)||e.id==="yield"&&o.option.inMoz(true)){return e.line!==t.line}return false}function ot(t,n){var r,i=false,a=false,s=false
if(!n&&o.tokens.next.value==="let"&&rt(0).value==="("){if(!o.option.inMoz(true)){Y("W118",o.tokens.next,"let expressions")}s=true
y["(blockscope)"].stack()
it("let")
it("(")
o.syntax["let"].fud.call(o.syntax["let"].fud,false)
it(")")}if(o.tokens.next.id==="(end)")J("E006",o.tokens.curr)
it()
if(n){e="anonymous"
y["(verb)"]=o.tokens.curr.value}if(n===true&&o.tokens.curr.fud){r=o.tokens.curr.fud()}else{if(o.tokens.curr.nud){r=o.tokens.curr.nud()}else{if(o.tokens.curr.value===","){J("E052",o.tokens.curr,o.tokens.curr.id)}else{J("E030",o.tokens.curr,o.tokens.curr.id)}}while(t<o.tokens.next.lbp&&!st()){i=o.tokens.curr.value==="Array"
a=o.tokens.curr.value==="Object"
if(r&&(r.value||r.first&&r.first.value)){if(r.value!=="new"||r.first&&r.first.value&&r.first.value==="."){i=false
if(r.value!==o.tokens.curr.value){a=false}}}it()
if(i&&o.tokens.curr.id==="("&&o.tokens.next.id===")"){Y("W009",o.tokens.curr)}if(a&&o.tokens.curr.id==="("&&o.tokens.next.id===")"){Y("W010",o.tokens.curr)}if(r&&o.tokens.curr.led){r=o.tokens.curr.led(r)}else{J("E033",o.tokens.curr,o.tokens.curr.id)}}}if(s){y["(blockscope)"].unstack()}return r}function lt(e,t){e=e||o.tokens.curr
t=t||o.tokens.next
if(o.option.white){if(e.character!==t.from&&e.line===t.line){e.from+=e.character-e.from
Y("W011",e,e.value)}}}function ut(e,t){e=e||o.tokens.curr
t=t||o.tokens.next
if(o.option.white&&(e.character!==t.from||e.line!==t.line)){Y("W012",t,t.value)}}function ft(e,t){e=e||o.tokens.curr
t=t||o.tokens.next
if(o.option.white&&!e.comment){if(e.line===t.line){lt(e,t)}}}function ct(e,t){if(o.option.white){e=e||o.tokens.curr
t=t||o.tokens.next
if(e.value===";"&&t.value===";"){return}if(e.line===t.line&&e.character===t.from){e.from+=e.character-e.from
Y("W013",e,e.value)}}}function ht(e,t){e=e||o.tokens.curr
t=t||o.tokens.next
if(!o.option.laxbreak&&e.line!==t.line){Y("W014",t,t.value)}else if(o.option.white){e=e||o.tokens.curr
t=t||o.tokens.next
if(e.character===t.from){e.from+=e.character-e.from
Y("W013",e,e.value)}}}function pt(e){if(!o.option.white&&!o.option["(explicitIndent)"]){return}if(o.tokens.next.id==="(end)"){return}var t=w+(e||0)
if(o.tokens.next.from!==t){Y("W015",o.tokens.next,o.tokens.next.value,t,o.tokens.next.from)}}function dt(e){e=e||o.tokens.curr
if(e.line!==o.tokens.next.line){Y("E022",e,e.value)}}function mt(e,t){if(e.line!==t.line){if(!o.option.laxcomma){if(gt.first){Y("I001")
gt.first=false}Y("W014",e,t.value)}}else if(!e.comment&&e.character!==t.from&&o.option.white){e.from+=e.character-e.from
Y("W011",e,e.value)}}function gt(e){e=e||{}
if(!e.peek){mt(o.tokens.curr,o.tokens.next)
it(",")}else{mt(o.tokens.prev,o.tokens.curr)}if(o.tokens.next.value!=="]"&&o.tokens.next.value!=="}"){ct(o.tokens.curr,o.tokens.next)}if(o.tokens.next.identifier&&!(e.property&&o.option.inES5())){switch(o.tokens.next.value){case"break":case"case":case"catch":case"continue":case"default":case"do":case"else":case"finally":case"for":case"if":case"in":case"instanceof":case"return":case"switch":case"throw":case"try":case"var":case"let":case"while":case"with":J("E024",o.tokens.next,o.tokens.next.value)
return false}}if(o.tokens.next.type==="(punctuator)"){switch(o.tokens.next.value){case"}":case"]":case",":if(e.allowTrailing){return true}case")":var t="E024"
if(o.tokens.next.value===")"){t="E053"}else if(o.tokens.next.value===","){t="E052"}J(t,o.tokens.next,o.tokens.next.value)
return false}}return true}function vt(e,t){var n=o.syntax[e]
if(!n||typeof n!=="object"){o.syntax[e]=n={id:e,lbp:t,value:e}}return n}function yt(e){return vt(e,0)}function bt(e,t){var n=yt(e)
n.identifier=n.reserved=true
n.fud=t
return n}function xt(e,t){var n=bt(e,t)
n.block=true
return n}function kt(e){var t=e.id.charAt(0)
if(t>="a"&&t<="z"||t>="A"&&t<="Z"){e.identifier=e.reserved=true}return e}function Et(e,t){var n=vt(e,150)
kt(n)
n.nud=typeof t==="function"?t:function(){this.right=ot(150)
this.arity="unary"
if(this.id==="++"||this.id==="--"){if(o.option.plusplus){Y("W016",this,this.id)}else if((!this.right.identifier||U(this.right))&&this.right.id!=="."&&this.right.id!=="["){Y("W017",this)}}return this}
return n}function wt(e,t){var n=yt(e)
n.type=e
n.nud=t
return n}function St(e,t){var n=wt(e,t)
n.identifier=true
n.reserved=true
return n}function At(e,t){var n=wt(e,t&&t.nud||function(){return this})
t=t||{}
t.isFutureReservedWord=true
n.value=e
n.identifier=true
n.reserved=true
n.meta=t
return n}function _t(e,t){return St(e,function(){if(typeof t==="function"){t(this)}return this})}function Tt(e,t,n,r){var i=vt(e,n)
kt(i)
i.infix=true
i.led=function(i){if(!r){ht(o.tokens.prev,o.tokens.curr)
ct(o.tokens.curr,o.tokens.next)}if(e==="in"&&i.id==="!"){Y("W018",i,"!")}if(typeof t==="function"){return t(i,this)}else{this.left=i
this.right=ot(n)
return this}}
return i}function Ct(e){var t=vt(e,42)
t.led=function(e){if(!o.option.inESNext()){Y("W104",o.tokens.curr,"arrow function syntax (=>)")}ht(o.tokens.prev,o.tokens.curr)
ct(o.tokens.curr,o.tokens.next)
this.left=e
this.right=Xt(undefined,undefined,false,e)
return this}
return t}function Lt(e,t){var n=vt(e,100)
n.led=function(e){ht(o.tokens.prev,o.tokens.curr)
ct(o.tokens.curr,o.tokens.next)
var n=ot(100)
if(V(e,"NaN")||V(n,"NaN")){Y("W019",this)}else if(t){t.apply(this,[e,n])}if(!e||!n){X("E041",o.tokens.curr.line)}if(e.id==="!"){Y("W018",e,"!")}if(n.id==="!"){Y("W018",n,"!")}this.left=e
this.right=n
return this}
return n}function It(e){return e&&(e.type==="(number)"&&+e.value===0||e.type==="(string)"&&e.value===""||e.type==="null"&&!o.option.eqnull||e.type==="true"||e.type==="false"||e.type==="undefined")}function Pt(e,t,n){var r=Tt(e,typeof t==="function"?t:function(e,t){t.left=e
if(e){if(L[e.value]===false&&I[e.value]["(global)"]===true){Y("W020",e)}else if(e["function"]){Y("W021",e,e.value)}if(y[e.value]==="const"){J("E013",e,e.value)}if(e.id==="."){if(!e.left){Y("E031",t)}else if(e.left.value==="arguments"&&!o.directive["use strict"]){Y("E031",t)}t.right=ot(10)
return t}else if(e.id==="["){if(o.tokens.curr.left.first){o.tokens.curr.left.first.forEach(function(e){if(y[e.value]==="const"){J("E013",e,e.value)}})}else if(!e.left){Y("E031",t)}else if(e.left.value==="arguments"&&!o.directive["use strict"]){Y("E031",t)}t.right=ot(10)
return t}else if(e.identifier&&!U(e)){if(y[e.value]==="exception"){Y("W022",e)}t.right=ot(10)
return t}if(e===o.syntax["function"]){Y("W023",o.tokens.curr)}}J("E031",t)},n)
r.exps=true
r.assign=true
return r}function Rt(e,t,n){var r=vt(e,n)
kt(r)
r.led=typeof t==="function"?t:function(e){if(o.option.bitwise){Y("W016",this,this.id)}this.left=e
this.right=ot(n)
return this}
return r}function Ot(e){return Pt(e,function(e,t){if(o.option.bitwise){Y("W016",t,t.id)}ct(o.tokens.prev,o.tokens.curr)
ct(o.tokens.curr,o.tokens.next)
if(e){if(e.id==="."||e.id==="["||e.identifier&&!U(e)){ot(10)
return t}if(e===o.syntax["function"]){Y("W023",o.tokens.curr)}return t}J("E031",t)},20)}function Mt(e){var t=vt(e,150)
t.led=function(e){if(o.option.plusplus){Y("W016",this,this.id)}else if((!e.identifier||U(e))&&e.id!=="."&&e.id!=="["){Y("W017",this)}this.left=e
return this}
return t}function Nt(e,t){if(!o.tokens.next.identifier){return}it()
var r=o.tokens.curr
var i=o.tokens.curr.value
if(!U(r)){return i}if(t){if(o.option.inES5()){return i}}if(e&&i==="undefined"){return i}if(t&&!n.getCache("displayed:I002")){n.setCache("displayed:I002",true)
Y("I002")}Y("W024",o.tokens.curr,o.tokens.curr.id)
return i}function Dt(e,t){var n=Nt(e,t)
if(n){return n}if(o.tokens.curr.id==="function"&&o.tokens.next.id==="("){Y("W025")}else{J("E030",o.tokens.next,o.tokens.next.value)}}function Wt(e){var t=0,n
if(o.tokens.next.id!==";"||C){return}for(;;){do{n=rt(t)
t+=1}while(n.id!="(end)"&&n.id==="(comment)")
if(n.reach){return}if(n.id!=="(endline)"){if(n.id==="function"){if(!o.option.latedef){break}Y("W026",n)
break}Y("W027",n,n.value,e)
break}}}function Ft(e){var t
var n=w,r,i=I,a=o.tokens.next
if(a.id===";"){it(";")
return}var s=U(a)
if(s&&a.meta&&a.meta.isFutureReservedWord&&rt().id===":"){Y("W024",a,a.id)
s=false}if(F.has(["[","{"],a.value)){if(sn().isDestAssign){if(!o.option.inESNext()){Y("W104",o.tokens.curr,"destructuring expression")}t=Jt()
t.forEach(function(e){q(y,"W117",e.token,e.id)})
it("=")
Qt(t,ot(10,true))
it(";")
return}}if(a.identifier&&!s&&rt().id===":"){it()
it(":")
I=Object.create(i)
tt(a.value,"label")
if(!o.tokens.next.labelled&&o.tokens.next.value!=="{"){Y("W028",o.tokens.next,a.value,o.tokens.next.value)}o.tokens.next.label=a.value
a=o.tokens.next}if(a.id==="{"){Vt(true,true)
return}if(!e){pt()}r=ot(0,true)
if(!a.block){if(!o.option.expr&&(!r||!r.exps)){Y("W030",o.tokens.curr)}else if(o.option.nonew&&r&&r.left&&r.id==="("&&r.left.id==="new"){Y("W031",a)}if(o.tokens.next.id!==";"){if(!o.option.asi){if(!o.option.lastsemic||o.tokens.next.id!=="}"||o.tokens.next.line!==o.tokens.curr.line){Z("W033",o.tokens.curr.line,o.tokens.curr.character)}}}else{lt(o.tokens.curr,o.tokens.next)
it(";")
ct(o.tokens.curr,o.tokens.next)}}w=n
I=i
return r}function Gt(e){var t=[],n
while(!o.tokens.next.reach&&o.tokens.next.id!=="(end)"){if(o.tokens.next.id===";"){n=rt()
if(!n||n.id!=="("&&n.id!=="["){Y("W032")}it(";")}else{t.push(Ft(e===o.tokens.next.line))}}return t}function Bt(){var e,t,n
for(;;){if(o.tokens.next.id==="(string)"){t=rt(0)
if(t.id==="(endline)"){e=1
do{n=rt(e)
e=e+1}while(n.id==="(endline)")
if(n.id!==";"){if(n.id!=="(string)"&&n.id!=="(number)"&&n.id!=="(regexp)"&&n.identifier!==true&&n.id!=="}"){break}Y("W033",o.tokens.next)}else{t=n}}else if(t.id==="}"){Y("W033",t)}else if(t.id!==";"){break}pt()
it()
if(o.directive[o.tokens.curr.value]){Y("W034",o.tokens.curr,o.tokens.curr.value)}if(o.tokens.curr.value==="use strict"){if(!o.option["(explicitNewcap)"])o.option.newcap=true
o.option.undef=true}o.directive[o.tokens.curr.value]=true
if(t.id===";"){it(";")}continue}break}}function Vt(e,t,n,r){var i,a=E,s=w,l,u=I,f,c,h
E=e
if(!e||!o.option.funcscope)I=Object.create(I)
ct(o.tokens.curr,o.tokens.next)
f=o.tokens.next
var p=y["(metrics)"]
p.nestedBlockDepth+=1
p.verifyMaxNestedBlockDepthPerFunction()
if(o.tokens.next.id==="{"){it("{")
y["(blockscope)"].stack()
c=o.tokens.curr.line
if(o.tokens.next.id!=="}"){w+=o.option.indent
while(!e&&o.tokens.next.from>w){w+=o.option.indent}if(n){l={}
for(h in o.directive){if(F.has(o.directive,h)){l[h]=o.directive[h]}}Bt()
if(o.option.strict&&y["(context)"]["(global)"]){if(!l["use strict"]&&!o.directive["use strict"]){Y("E007")}}}i=Gt(c)
p.statementCount+=i.length
if(n){o.directive=l}w-=o.option.indent
if(c!==o.tokens.next.line){pt()}}else if(c!==o.tokens.next.line){pt()}it("}",f)
y["(blockscope)"].unstack()
w=s}else if(!e){if(n){l={}
if(t&&!r&&!o.option.inMoz(true)){J("W118",o.tokens.curr,"function closure expressions")}if(!t){for(h in o.directive){if(F.has(o.directive,h)){l[h]=o.directive[h]}}}ot(10)
if(o.option.strict&&y["(context)"]["(global)"]){if(!l["use strict"]&&!o.directive["use strict"]){Y("E007")}}}else{J("E021",o.tokens.next,"{",o.tokens.next.value)}}else{y["(nolet)"]=true
if(!t||o.option.curly){Y("W116",o.tokens.next,"{",o.tokens.next.value)}C=true
w+=o.option.indent
i=[Ft(o.tokens.next.line===o.tokens.curr.line)]
w-=o.option.indent
C=false
delete y["(nolet)"]}y["(verb)"]=null
if(!e||!o.option.funcscope)I=u
E=a
if(e&&o.option.noempty&&(!i||i.length===0)){Y("W035")}p.nestedBlockDepth-=1
return i}function Ut(e){if(T&&typeof T[e]!=="boolean"){Y("W036",o.tokens.curr,e)}if(typeof _[e]==="number"){_[e]+=1}else{_[e]=1}}function $t(e){var t=e.value,n=e.line,r=k[t]
if(typeof r==="function"){r=false}if(!r){r=[n]
k[t]=r}else if(r[r.length-1]!==n){r.push(n)}}wt("(number)",function(){return this})
wt("(string)",function(){return this})
o.syntax["(identifier)"]={type:"(identifier)",lbp:0,identifier:true,nud:function(){var t=this.value,n=I[t],r
if(typeof n==="function"){n=undefined}else if(typeof n==="boolean"){r=y
y=b[0]
tt(t,"var")
n=y
y=r}var i
if(F.has(y,"(blockscope)")){i=y["(blockscope)"].getlabel(t)}if(y===n||i){switch(i?i[t]["(type)"]:y[t]){case"unused":if(i)i[t]["(type)"]="var"
else y[t]="var"
break
case"unction":if(i)i[t]["(type)"]="function"
else y[t]="function"
this["function"]=true
break
case"function":this["function"]=true
break
case"label":Y("W037",o.tokens.curr,t)
break}}else if(y["(global)"]){if(typeof L[t]!=="boolean"){if(!(e==="typeof"||e==="delete")||o.tokens.next&&(o.tokens.next.value==="."||o.tokens.next.value==="[")){if(!y["(comparray)"].check(t)){q(y,"W117",o.tokens.curr,t)}}}$t(o.tokens.curr)}else{switch(y[t]){case"closure":case"function":case"var":case"unused":Y("W038",o.tokens.curr,t)
break
case"label":Y("W037",o.tokens.curr,t)
break
case"outer":case"global":break
default:if(n===true){y[t]=true}else if(n===null){Y("W039",o.tokens.curr,t)
$t(o.tokens.curr)}else if(typeof n!=="object"){if(!(e==="typeof"||e==="delete")||o.tokens.next&&(o.tokens.next.value==="."||o.tokens.next.value==="[")){q(y,"W117",o.tokens.curr,t)}y[t]=true
$t(o.tokens.curr)}else{switch(n[t]){case"function":case"unction":this["function"]=true
n[t]="closure"
y[t]=n["(global)"]?"global":"outer"
break
case"var":case"unused":n[t]="closure"
y[t]=n["(global)"]?"global":"outer"
break
case"closure":y[t]=n["(global)"]?"global":"outer"
break
case"label":Y("W037",o.tokens.curr,t)}}}}return this},led:function(){J("E033",o.tokens.next,o.tokens.next.value)}}
wt("(regexp)",function(){return this})
yt("(endline)")
yt("(begin)")
yt("(end)").reach=true
yt("(error)").reach=true
yt("}").reach=true
yt(")")
yt("]")
yt('"').reach=true
yt("'").reach=true
yt(";")
yt(":").reach=true
yt("#")
St("else")
St("case").reach=true
St("catch")
St("default").reach=true
St("finally")
_t("arguments",function(e){if(o.directive["use strict"]&&y["(global)"]){Y("E008",e)}})
_t("eval")
_t("false")
_t("Infinity")
_t("null")
_t("this",function(e){if(o.directive["use strict"]&&!o.option.validthis&&(y["(statement)"]&&y["(name)"].charAt(0)>"Z"||y["(global)"])){Y("W040",e)}})
_t("true")
_t("undefined")
Pt("=","assign",20)
Pt("+=","assignadd",20)
Pt("-=","assignsub",20)
Pt("*=","assignmult",20)
Pt("/=","assigndiv",20).nud=function(){J("E014")}
Pt("%=","assignmod",20)
Ot("&=","assignbitand",20)
Ot("|=","assignbitor",20)
Ot("^=","assignbitxor",20)
Ot("<<=","assignshiftleft",20)
Ot(">>=","assignshiftright",20)
Ot(">>>=","assignshiftrightunsigned",20)
Tt(",",function(e,t){var n
t.exprs=[e]
if(!gt({peek:true})){return t}while(true){if(!(n=ot(10))){break}t.exprs.push(n)
if(o.tokens.next.value!==","||!gt()){break}}return t},10,true)
Tt("?",function(e,t){Yt()
t.left=e
t.right=ot(10)
it(":")
t["else"]=ot(10)
return t},30)
var zt=40
Tt("||",function(e,t){Yt()
t.left=e
t.right=ot(zt)
return t},zt)
Tt("&&","and",50)
Rt("|","bitor",70)
Rt("^","bitxor",80)
Rt("&","bitand",90)
Lt("==",function(e,t){var n=o.option.eqnull&&(e.value==="null"||t.value==="null")
if(!n&&o.option.eqeqeq)Y("W116",this,"===","==")
else if(It(e))Y("W041",this,"===",e.value)
else if(It(t))Y("W041",this,"===",t.value)
return this})
Lt("===")
Lt("!=",function(e,t){var n=o.option.eqnull&&(e.value==="null"||t.value==="null")
if(!n&&o.option.eqeqeq){Y("W116",this,"!==","!=")}else if(It(e)){Y("W041",this,"!==",e.value)}else if(It(t)){Y("W041",this,"!==",t.value)}return this})
Lt("!==")
Lt("<")
Lt(">")
Lt("<=")
Lt(">=")
Rt("<<","shiftleft",120)
Rt(">>","shiftright",120)
Rt(">>>","shiftrightunsigned",120)
Tt("in","in",120)
Tt("instanceof","instanceof",120)
Tt("+",function(e,t){var n=ot(130)
if(e&&n&&e.id==="(string)"&&n.id==="(string)"){e.value+=n.value
e.character=n.character
if(!o.option.scripturl&&s.javascriptURL.test(e.value)){Y("W050",e)}return e}t.left=e
t.right=n
return t},130)
Et("+","num")
Et("+++",function(){Y("W007")
this.right=ot(150)
this.arity="unary"
return this})
Tt("+++",function(e){Y("W007")
this.left=e
this.right=ot(130)
return this},130)
Tt("-","sub",130)
Et("-","neg")
Et("---",function(){Y("W006")
this.right=ot(150)
this.arity="unary"
return this})
Tt("---",function(e){Y("W006")
this.left=e
this.right=ot(130)
return this},130)
Tt("*","mult",140)
Tt("/","div",140)
Tt("%","mod",140)
Mt("++","postinc")
Et("++","preinc")
o.syntax["++"].exps=true
Mt("--","postdec")
Et("--","predec")
o.syntax["--"].exps=true
Et("delete",function(){var e=ot(10)
if(!e||e.id!=="."&&e.id!=="["){Y("W051")}this.first=e
return this}).exps=true
Et("~",function(){if(o.option.bitwise){Y("W052",this,"~")}ot(150)
return this})
Et("...",function(){if(!o.option.inESNext()){Y("W104",this,"spread/rest operator")}if(!o.tokens.next.identifier){J("E030",o.tokens.next,o.tokens.next.value)}ot(150)
return this})
Et("!",function(){this.right=ot(150)
this.arity="unary"
if(!this.right){X("E041",this.line||0)}if(u[this.right.id]===true){Y("W018",this,"!")}return this})
Et("typeof","typeof")
Et("new",function(){var e=ot(155),t
if(e&&e.id!=="function"){if(e.identifier){e["new"]=true
switch(e.value){case"Number":case"String":case"Boolean":case"Math":case"JSON":Y("W053",o.tokens.prev,e.value)
break
case"Function":if(!o.option.evil){Y("W054")}break
case"Date":case"RegExp":break
default:if(e.id!=="function"){t=e.value.substr(0,1)
if(o.option.newcap&&(t<"A"||t>"Z")&&!F.has(x,e.value)){Y("W055",o.tokens.curr)}}}}else{if(e.id!=="."&&e.id!=="["&&e.id!=="("){Y("W056",o.tokens.curr)}}}else{if(!o.option.supernew)Y("W057",this)}lt(o.tokens.curr,o.tokens.next)
if(o.tokens.next.id!=="("&&!o.option.supernew){Y("W058",o.tokens.curr,o.tokens.curr.value)}this.first=e
return this})
o.syntax["new"].exps=true
Et("void").exps=true
Tt(".",function(e,t){lt(o.tokens.prev,o.tokens.curr)
ut()
var n=Dt(false,true)
if(typeof n==="string"){Ut(n)}t.left=e
t.right=n
if(n&&n==="hasOwnProperty"&&o.tokens.next.value==="="){Y("W001")}if(e&&e.value==="arguments"&&(n==="callee"||n==="caller")){if(o.option.noarg)Y("W059",e,n)
else if(o.directive["use strict"])J("E008")}else if(!o.option.evil&&e&&e.value==="document"&&(n==="write"||n==="writeln")){Y("W060",e)}if(!o.option.evil&&(n==="eval"||n==="execScript")){Y("W061")}return t},160,true)
Tt("(",function(e,t){if(o.tokens.prev.id!=="}"&&o.tokens.prev.id!==")"){ut(o.tokens.prev,o.tokens.curr)}ft()
if(o.option.immed&&e&&!e.immed&&e.id==="function"){Y("W062")}var n=0
var r=[]
if(e){if(e.type==="(identifier)"){if(e.value.match(/^[A-Z]([A-Z0-9_$]*[a-z][A-Za-z0-9_$]*)?$/)){if("Number String Boolean Date Object".indexOf(e.value)===-1){if(e.value==="Math"){Y("W063",e)}else if(o.option.newcap){Y("W064",e)}}}}}if(o.tokens.next.id!==")"){for(;;){r[r.length]=ot(10)
n+=1
if(o.tokens.next.id!==","){break}gt()}}it(")")
ft(o.tokens.prev,o.tokens.curr)
if(typeof e==="object"){if(e.value==="parseInt"&&n===1){Y("W065",o.tokens.curr)}if(!o.option.evil){if(e.value==="eval"||e.value==="Function"||e.value==="execScript"){Y("W061",e)
if(r[0]&&[0].id==="(string)"){et(e,r[0].value)}}else if(r[0]&&r[0].id==="(string)"&&(e.value==="setTimeout"||e.value==="setInterval")){Y("W066",e)
et(e,r[0].value)}else if(r[0]&&r[0].id==="(string)"&&e.value==="."&&e.left.value==="window"&&(e.right==="setTimeout"||e.right==="setInterval")){Y("W066",e)
et(e,r[0].value)}}if(!e.identifier&&e.id!=="."&&e.id!=="["&&e.id!=="("&&e.id!=="&&"&&e.id!=="||"&&e.id!=="?"){Y("W067",e)}}t.left=e
return t},155,true).exps=true
Et("(",function(){ft()
var e,t=[]
var n,r,i=0
var a
do{n=rt(i)
i+=1
r=rt(i)
i+=1}while(n.value!==")"&&r.value!=="=>"&&r.value!==";"&&r.type!=="(end)")
if(o.tokens.next.id==="function"){o.tokens.next.immed=true}var s=[]
if(o.tokens.next.id!==")"){for(;;){if(r.value==="=>"&&o.tokens.next.value==="{"){e=o.tokens.next
e.left=Jt()
t.push(e)
for(var l in e.left){s.push(e.left[l].token)}}else{s.push(ot(10))}if(o.tokens.next.id!==","){break}gt()}}it(")",this)
ft(o.tokens.prev,o.tokens.curr)
if(o.option.immed&&s[0]&&s[0].id==="function"){if(o.tokens.next.id!=="("&&(o.tokens.next.id!=="."||rt().value!=="call"&&rt().value!=="apply")){Y("W068",this)}}if(o.tokens.next.value==="=>"){return s}if(!s.length){return}if(s.length>1){a=Object.create(o.syntax[","])
a.exprs=s}else{a=s[0]}if(a){a.paren=true}return a})
Ct("=>")
Tt("[",function(e,t){ut(o.tokens.prev,o.tokens.curr)
ft()
var n=ot(10),r
if(n&&n.type==="(string)"){if(!o.option.evil&&(n.value==="eval"||n.value==="execScript")){Y("W061",t)}Ut(n.value)
if(!o.option.sub&&s.identifier.test(n.value)){r=o.syntax[n.value]
if(!r||!U(r)){Y("W069",o.tokens.prev,n.value)}}}it("]",t)
if(n&&n.value==="hasOwnProperty"&&o.tokens.next.value==="="){Y("W001")}ft(o.tokens.prev,o.tokens.curr)
t.left=e
t.right=n
return t},160,true)
function Ht(){var e={}
e.exps=true
y["(comparray)"].stack()
var t=false
if(o.tokens.next.value!=="for"){t=true
if(!o.option.inMoz(true)){Y("W116",o.tokens.next,"for",o.tokens.next.value)}y["(comparray)"].setState("use")
e.right=ot(10)}it("for")
if(o.tokens.next.value==="each"){it("each")
if(!o.option.inMoz(true)){Y("W118",o.tokens.curr,"for each")}}it("(")
y["(comparray)"].setState("define")
e.left=ot(130)
if(F.contains(["in","of"],o.tokens.next.value)){it()}else{J("E045",o.tokens.curr)}y["(comparray)"].setState("generate")
ot(10)
it(")")
if(o.tokens.next.value==="if"){it("if")
it("(")
y["(comparray)"].setState("filter")
e.filter=ot(10)
it(")")}if(!t){y["(comparray)"].setState("use")
e.right=ot(10)}it("]")
y["(comparray)"].unstack()
return e}Et("[",function(){var e=sn(true)
if(e.isCompArray){if(!o.option.inESNext()){Y("W119",o.tokens.curr,"array comprehension")}return Ht()}else if(e.isDestAssign&&!o.option.inESNext()){Y("W104",o.tokens.curr,"destructuring assignment")}var t=o.tokens.curr.line!==o.tokens.next.line
this.first=[]
if(t){w+=o.option.indent
if(o.tokens.next.from===w+o.option.indent){w+=o.option.indent}}while(o.tokens.next.id!=="(end)"){while(o.tokens.next.id===","){if(!o.option.inES5())Y("W070")
it(",")}if(o.tokens.next.id==="]"){break}if(t&&o.tokens.curr.line!==o.tokens.next.line){pt()}this.first.push(ot(10))
if(o.tokens.next.id===","){gt({allowTrailing:true})
if(o.tokens.next.id==="]"&&!o.option.inES5(true)){Y("W070",o.tokens.curr)
break}}else{break}}if(t){w-=o.option.indent
pt()}it("]",this)
return this},160)
function jt(){var e=Nt(false,true)
if(!e){if(o.tokens.next.id==="(string)"){e=o.tokens.next.value
it()}else if(o.tokens.next.id==="(number)"){e=o.tokens.next.value.toString()
it()}}if(e==="hasOwnProperty"){Y("W001")}return e}function Kt(e){var t,n
var r=[]
var i
var a=[]
var s
var l=false
if(e){if(e instanceof Array){for(var u in e){t=e[u]
if(F.contains(["{","["],t.id)){for(s in t.left){s=a[s]
if(s.id){r.push(s.id)
tt(s.id,"unused",s.token)}}}else if(t.value==="..."){if(!o.option.inESNext()){Y("W104",t,"spread/rest operator")}continue}else{tt(t.value,"unused",t)}}return r}else{if(e.identifier===true){tt(e.value,"unused",e)
return[e]}}}n=o.tokens.next
it("(")
ft()
if(o.tokens.next.id===")"){it(")")
return}for(;;){if(F.contains(["{","["],o.tokens.next.id)){a=Jt()
for(s in a){s=a[s]
if(s.id){r.push(s.id)
tt(s.id,"unused",s.token)}}}else if(o.tokens.next.value==="..."){if(!o.option.inESNext()){Y("W104",o.tokens.next,"spread/rest operator")}it("...")
ft()
i=Dt(true)
r.push(i)
tt(i,"unused",o.tokens.curr)}else{i=Dt(true)
r.push(i)
tt(i,"unused",o.tokens.curr)}if(l){if(o.tokens.next.id!=="="){J("E051",o.tokens.current)}}if(o.tokens.next.id==="="){if(!o.option.inESNext()){Y("W119",o.tokens.next,"default parameters")}it("=")
l=true
ot(10)}if(o.tokens.next.id===","){gt()}else{it(")",n)
ft(o.tokens.prev,o.tokens.curr)
return r}}}function Xt(t,n,r,i){var a
var s=o.option
var l=o.ignored
var u=I
o.option=Object.create(o.option)
o.ignored=Object.create(o.ignored)
I=Object.create(I)
y={"(name)":t||'"'+e+'"',"(line)":o.tokens.next.line,"(character)":o.tokens.next.character,"(context)":y,"(breakage)":0,"(loopage)":0,"(metrics)":qt(o.tokens.next),"(scope)":I,"(statement)":n,"(tokens)":{},"(blockscope)":y["(blockscope)"],"(comparray)":y["(comparray)"]}
if(r){y["(generator)"]=true}a=y
o.tokens.curr.funct=y
b.push(y)
if(t){tt(t,"function")}y["(params)"]=Kt(i)
y["(metrics)"].verifyMaxParametersPerFunction(y["(params)"])
Vt(false,true,true,i?true:false)
if(r&&y["(generator)"]!=="yielded"){J("E047",o.tokens.curr)}y["(metrics)"].verifyMaxStatementsPerFunction()
y["(metrics)"].verifyMaxComplexityPerFunction()
y["(unusedOption)"]=o.option.unused
I=u
o.option=s
o.ignored=l
y["(last)"]=o.tokens.curr.line
y["(lastcharacter)"]=o.tokens.curr.character
y=y["(context)"]
return a}function qt(e){return{statementCount:0,nestedBlockDepth:-1,ComplexityCount:1,verifyMaxStatementsPerFunction:function(){if(o.option.maxstatements&&this.statementCount>o.option.maxstatements){Y("W071",e,this.statementCount)}},verifyMaxParametersPerFunction:function(t){t=t||[]
if(o.option.maxparams&&t.length>o.option.maxparams){Y("W072",e,t.length)}},verifyMaxNestedBlockDepthPerFunction:function(){if(o.option.maxdepth&&this.nestedBlockDepth>0&&this.nestedBlockDepth===o.option.maxdepth+1){Y("W073",null,this.nestedBlockDepth)}},verifyMaxComplexityPerFunction:function(){var t=o.option.maxcomplexity
var n=this.ComplexityCount
if(t&&n>t){Y("W074",e,n)}}}}function Yt(){y["(metrics)"].ComplexityCount+=1}function Zt(e){var t,n
if(e){t=e.id
n=e.paren
if(t===","&&(e=e.exprs[e.exprs.length-1])){t=e.id
n=n||e.paren}}switch(t){case"=":if(!n&&!o.option.boss){Y("W121")
break}case"+=":case"-=":case"*=":case"%=":case"&=":case"|=":case"^=":case"/=":if(!n&&!o.option.boss){Y("W084")}}}(function(e){e.nud=function(e){var t,n,r,i,a,s
var l={}
var u=""
function f(e,t){if(l[e]&&F.has(l,e))Y("W075",o.tokens.next,r)
else l[e]={}
l[e].basic=true
l[e].basictkn=t}function c(e,t){if(l[e]&&F.has(l,e)){if(l[e].basic||l[e].setter)Y("W075",o.tokens.next,r)}else{l[e]={}}l[e].setter=true
l[e].setterToken=t}function h(e){if(l[e]&&F.has(l,e)){if(l[e].basic||l[e].getter)Y("W075",o.tokens.next,r)}else{l[e]={}}l[e].getter=true
l[e].getterToken=o.tokens.curr}t=o.tokens.curr.line!==o.tokens.next.line
if(t){w+=o.option.indent
if(o.tokens.next.from===w+o.option.indent){w+=o.option.indent}}for(;;){if(o.tokens.next.id==="}"){break}if(t){pt()}if(e&&o.tokens.next.value==="static"){it("static")
u="static "}if(o.tokens.next.value==="get"&&rt().id!==":"){it("get")
if(!o.option.inES5(!e)){J("E034")}r=jt()
if(!r){J("E035")}if(e&&r==="constructor"){J("E049",o.tokens.next,"class getter method",r)}h(u+r)
a=o.tokens.next
lt(o.tokens.curr,o.tokens.next)
n=Xt()
i=n["(params)"]
if(i){Y("W076",a,i[0],r)}lt(o.tokens.curr,o.tokens.next)}else if(o.tokens.next.value==="set"&&rt().id!==":"){it("set")
if(!o.option.inES5(!e)){J("E034")}r=jt()
if(!r){J("E035")}if(e&&r==="constructor"){J("E049",o.tokens.next,"class setter method",r)}c(u+r,o.tokens.next)
a=o.tokens.next
lt(o.tokens.curr,o.tokens.next)
n=Xt()
i=n["(params)"]
if(!i||i.length!==1){Y("W077",a,r)}}else{s=false
if(o.tokens.next.value==="*"&&o.tokens.next.type==="(punctuator)"){if(!o.option.inESNext()){Y("W104",o.tokens.next,"generator functions")}it("*")
s=true}r=jt()
f(u+r,o.tokens.next)
if(typeof r!=="string"){break}if(o.tokens.next.value==="("){if(!o.option.inESNext()){Y("W104",o.tokens.curr,"concise methods")}Xt(r,undefined,s)}else if(!e){it(":")
ct(o.tokens.curr,o.tokens.next)
ot(10)}}if(e&&r==="prototype"){J("E049",o.tokens.next,"class method",r)}Ut(r)
if(e){u=""
continue}if(o.tokens.next.id===","){gt({allowTrailing:true,property:true})
if(o.tokens.next.id===","){Y("W070",o.tokens.curr)}else if(o.tokens.next.id==="}"&&!o.option.inES5(true)){Y("W070",o.tokens.curr)}}else{break}}if(t){w-=o.option.indent
pt()}it("}",this)
if(o.option.inES5()){for(var p in l){if(F.has(l,p)&&l[p].setter&&!l[p].getter){Y("W078",l[p].setterToken)}}}return this}
e.fud=function(){J("E036",o.tokens.curr)}})(yt("{"))
function Jt(){var e,t
var n=[]
if(!o.option.inESNext()){Y("W104",o.tokens.curr,"destructuring expression")}var r=function(){var e
if(F.contains(["[","{"],o.tokens.next.value)){t=Jt()
for(var r in t){r=t[r]
n.push({id:r.id,token:r.token})}}else if(o.tokens.next.value===","){n.push({id:null,token:o.tokens.curr})}else{e=Dt()
if(e)n.push({id:e,token:o.tokens.curr})}}
if(o.tokens.next.value==="["){it("[")
r()
while(o.tokens.next.value!=="]"){it(",")
r()}it("]")}else if(o.tokens.next.value==="{"){it("{")
e=Dt()
if(o.tokens.next.value===":"){it(":")
r()}else{n.push({id:e,token:o.tokens.curr})}while(o.tokens.next.value!=="}"){it(",")
e=Dt()
if(o.tokens.next.value===":"){it(":")
r()}else{n.push({id:e,token:o.tokens.curr})}}it("}")}return n}function Qt(e,t){if(t.first){for(var n=0;n<e.length&&n<t.first.length;n++){var r=e[n]
var i=t.first[n]
if(r&&i){r.first=i}else if(r&&r.first&&!i){Y("W080",r.first,r.first.value)}}}}var en=bt("const",function(e){var t,n
var r
if(!o.option.inESNext()){Y("W104",o.tokens.curr,"const")}this.first=[]
for(;;){var i=[]
ct(o.tokens.curr,o.tokens.next)
if(F.contains(["{","["],o.tokens.next.value)){t=Jt()
r=false}else{t=[{id:Dt(),token:o.tokens.curr}]
r=true}for(var a in t){a=t[a]
if(y[a.id]==="const"){Y("E011",null,a.id)}if(y["(global)"]&&L[a.id]===false){Y("W079",a.token,a.id)}if(a.id){tt(a.id,"const")
i.push(a.token)}}if(e){break}this.first=this.first.concat(i)
if(o.tokens.next.id!=="="){Y("E012",o.tokens.curr,o.tokens.curr.value)}if(o.tokens.next.id==="="){ct(o.tokens.curr,o.tokens.next)
it("=")
ct(o.tokens.curr,o.tokens.next)
if(o.tokens.next.id==="undefined"){Y("W080",o.tokens.prev,o.tokens.prev.value)}if(rt(0).id==="="&&o.tokens.next.identifier){Y("W120",o.tokens.next,o.tokens.next.value)}n=ot(10)
if(r){t[0].first=n}else{Qt(i,n)}}if(o.tokens.next.id!==","){break}gt()}return this})
en.exps=true
var tn=bt("var",function(e){var t,n,r
if(y["(onevar)"]&&o.option.onevar){Y("W081")}else if(!y["(global)"]){y["(onevar)"]=true}this.first=[]
for(;;){var i=[]
ct(o.tokens.curr,o.tokens.next)
if(F.contains(["{","["],o.tokens.next.value)){t=Jt()
n=false}else{t=[{id:Dt(),token:o.tokens.curr}]
n=true}for(var a in t){a=t[a]
if(o.option.inESNext()&&y[a.id]==="const"){Y("E011",null,a.id)}if(y["(global)"]&&L[a.id]===false){Y("W079",a.token,a.id)}if(a.id){tt(a.id,"unused",a.token)
i.push(a.token)}}if(e){break}this.first=this.first.concat(i)
if(o.tokens.next.id==="="){ct(o.tokens.curr,o.tokens.next)
it("=")
ct(o.tokens.curr,o.tokens.next)
if(o.tokens.next.id==="undefined"){Y("W080",o.tokens.prev,o.tokens.prev.value)}if(rt(0).id==="="&&o.tokens.next.identifier){Y("W120",o.tokens.next,o.tokens.next.value)}r=ot(10)
if(n){t[0].first=r}else{Qt(i,r)}}if(o.tokens.next.id!==","){break}gt()}return this})
tn.exps=true
var nn=bt("let",function(e){var t,n,r,i
if(!o.option.inESNext()){Y("W104",o.tokens.curr,"let")}if(o.tokens.next.value==="("){if(!o.option.inMoz(true)){Y("W118",o.tokens.next,"let block")}it("(")
y["(blockscope)"].stack()
i=true}else if(y["(nolet)"]){J("E048",o.tokens.curr)}if(y["(onevar)"]&&o.option.onevar){Y("W081")}else if(!y["(global)"]){y["(onevar)"]=true}this.first=[]
for(;;){var a=[]
ct(o.tokens.curr,o.tokens.next)
if(F.contains(["{","["],o.tokens.next.value)){t=Jt()
n=false}else{t=[{id:Dt(),token:o.tokens.curr.value}]
n=true}for(var s in t){s=t[s]
if(o.option.inESNext()&&y[s.id]==="const"){Y("E011",null,s.id)}if(y["(global)"]&&L[s.id]===false){Y("W079",s.token,s.id)}if(s.id&&!y["(nolet)"]){tt(s.id,"unused",s.token,true)
a.push(s.token)}}if(e){break}this.first=this.first.concat(a)
if(o.tokens.next.id==="="){ct(o.tokens.curr,o.tokens.next)
it("=")
ct(o.tokens.curr,o.tokens.next)
if(o.tokens.next.id==="undefined"){Y("W080",o.tokens.prev,o.tokens.prev.value)}if(rt(0).id==="="&&o.tokens.next.identifier){Y("W120",o.tokens.next,o.tokens.next.value)}r=ot(10)
if(n){t[0].first=r}else{Qt(a,r)}}if(o.tokens.next.id!==","){break}gt()}if(i){it(")")
Vt(true,true)
this.block=true
y["(blockscope)"].unstack()}return this})
nn.exps=true
xt("class",function(){return rn.call(this,true)})
function rn(e){if(!o.option.inESNext()){Y("W104",o.tokens.curr,"class")}if(e){this.name=Dt()
tt(this.name,"unused",o.tokens.curr)}else if(o.tokens.next.identifier&&o.tokens.next.value!=="extends"){this.name=Dt()}an(this)
return this}function an(e){var t=o.directive["use strict"]
if(o.tokens.next.value==="extends"){it("extends")
e.heritage=ot(10)}o.directive["use strict"]=true
it("{")
e.body=o.syntax["{"].nud(true)
o.directive["use strict"]=t}xt("function",function(){var e=false
if(o.tokens.next.value==="*"){it("*")
if(o.option.inESNext(true)){e=true}else{Y("W119",o.tokens.curr,"function*")}}if(E){Y("W082",o.tokens.curr)}var t=Dt()
if(y[t]==="const"){Y("E011",null,t)}lt(o.tokens.curr,o.tokens.next)
tt(t,"unction",o.tokens.curr)
Xt(t,{statement:true},e)
if(o.tokens.next.id==="("&&o.tokens.next.line===o.tokens.curr.line){J("E039")}return this})
Et("function",function(){var e=false
if(o.tokens.next.value==="*"){if(!o.option.inESNext()){Y("W119",o.tokens.curr,"function*")}it("*")
e=true}var t=Nt()
if(t||o.option.gcl){lt(o.tokens.curr,o.tokens.next)}else{ct(o.tokens.curr,o.tokens.next)}Xt(t,undefined,e)
if(!o.option.loopfunc&&y["(loopage)"]){Y("W083")}return this})
xt("if",function(){var e=o.tokens.next
Yt()
o.condition=true
it("(")
ct(this,e)
ft()
Zt(ot(0))
it(")",e)
o.condition=false
ft(o.tokens.prev,o.tokens.curr)
Vt(true,true)
if(o.tokens.next.id==="else"){ct(o.tokens.curr,o.tokens.next)
it("else")
if(o.tokens.next.id==="if"||o.tokens.next.id==="switch"){Ft(true)}else{Vt(true,true)}}return this})
xt("try",function(){var e
function t(){var e=I
var t
it("catch")
ct(o.tokens.curr,o.tokens.next)
it("(")
I=Object.create(e)
t=o.tokens.next.value
if(o.tokens.next.type!=="(identifier)"){t=null
Y("E030",o.tokens.next,t)}it()
y={"(name)":"(catch)","(line)":o.tokens.next.line,"(character)":o.tokens.next.character,"(context)":y,"(breakage)":y["(breakage)"],"(loopage)":y["(loopage)"],"(scope)":I,"(statement)":false,"(metrics)":qt(o.tokens.next),"(catch)":true,"(tokens)":{},"(blockscope)":y["(blockscope)"],"(comparray)":y["(comparray)"]}
if(t){tt(t,"exception")}if(o.tokens.next.value==="if"){if(!o.option.inMoz(true)){Y("W118",o.tokens.curr,"catch filter")}it("if")
ot(0)}it(")")
o.tokens.curr.funct=y
b.push(y)
Vt(false)
I=e
y["(last)"]=o.tokens.curr.line
y["(lastcharacter)"]=o.tokens.curr.character
y=y["(context)"]}Vt(false)
while(o.tokens.next.id==="catch"){Yt()
if(e&&!o.option.inMoz(true)){Y("W118",o.tokens.next,"multiple catch blocks")}t()
e=true}if(o.tokens.next.id==="finally"){it("finally")
Vt(false)
return}if(!e){J("E021",o.tokens.next,"catch",o.tokens.next.value)}return this})
xt("while",function(){var e=o.tokens.next
y["(breakage)"]+=1
y["(loopage)"]+=1
Yt()
it("(")
ct(this,e)
ft()
Zt(ot(0))
it(")",e)
ft(o.tokens.prev,o.tokens.curr)
Vt(true,true)
y["(breakage)"]-=1
y["(loopage)"]-=1
return this}).labelled=true
xt("with",function(){var e=o.tokens.next
if(o.directive["use strict"]){J("E010",o.tokens.curr)}else if(!o.option.withstmt){Y("W085",o.tokens.curr)}it("(")
ct(this,e)
ft()
ot(0)
it(")",e)
ft(o.tokens.prev,o.tokens.curr)
Vt(true,true)
return this})
xt("switch",function(){var e=o.tokens.next,t=false
y["(breakage)"]+=1
it("(")
ct(this,e)
ft()
Zt(ot(0))
it(")",e)
ft(o.tokens.prev,o.tokens.curr)
ct(o.tokens.curr,o.tokens.next)
e=o.tokens.next
it("{")
ct(o.tokens.curr,o.tokens.next)
w+=o.option.indent
this.cases=[]
for(;;){switch(o.tokens.next.id){case"case":switch(y["(verb)"]){case"yield":case"break":case"case":case"continue":case"return":case"switch":case"throw":break
default:if(!s.fallsThrough.test(o.lines[o.tokens.next.line-2])){Y("W086",o.tokens.curr,"case")}}pt(-o.option.indent)
it("case")
this.cases.push(ot(20))
Yt()
t=true
it(":")
y["(verb)"]="case"
break
case"default":switch(y["(verb)"]){case"yield":case"break":case"continue":case"return":case"throw":break
default:if(this.cases.length){if(!s.fallsThrough.test(o.lines[o.tokens.next.line-2])){Y("W086",o.tokens.curr,"default")}}}pt(-o.option.indent)
it("default")
t=true
it(":")
break
case"}":w-=o.option.indent
pt()
it("}",e)
y["(breakage)"]-=1
y["(verb)"]=undefined
return
case"(end)":J("E023",o.tokens.next,"}")
return
default:if(t){switch(o.tokens.curr.id){case",":J("E040")
return
case":":t=false
Gt()
break
default:J("E025",o.tokens.curr)
return}}else{if(o.tokens.curr.id===":"){it(":")
J("E024",o.tokens.curr,":")
Gt()}else{J("E021",o.tokens.next,"case",o.tokens.next.value)
return}}}}}).labelled=true
bt("debugger",function(){if(!o.option.debug){Y("W087",this)}return this}).exps=true;(function(){var e=bt("do",function(){y["(breakage)"]+=1
y["(loopage)"]+=1
Yt()
this.first=Vt(true,true)
it("while")
var e=o.tokens.next
ct(o.tokens.curr,e)
it("(")
ft()
Zt(ot(0))
it(")",e)
ft(o.tokens.prev,o.tokens.curr)
y["(breakage)"]-=1
y["(loopage)"]-=1
return this})
e.labelled=true
e.exps=true})()
xt("for",function(){var e,t=o.tokens.next
var n=false
var r=null
if(t.value==="each"){r=t
it("each")
if(!o.option.inMoz(true)){Y("W118",o.tokens.curr,"for each")}}y["(breakage)"]+=1
y["(loopage)"]+=1
Yt()
it("(")
ct(this,t)
ft()
var i
var a=0
var s=["in","of"]
do{i=rt(a);++a}while(!F.contains(s,i.value)&&i.value!==";"&&i.type!=="(end)")
if(F.contains(s,i.value)){if(!o.option.inESNext()&&i.value==="of"){J("W104",i,"for of")}if(o.tokens.next.id==="var"){it("var")
o.syntax["var"].fud.call(o.syntax["var"].fud,true)}else if(o.tokens.next.id==="let"){it("let")
n=true
y["(blockscope)"].stack()
o.syntax["let"].fud.call(o.syntax["let"].fud,true)}else{switch(y[o.tokens.next.value]){case"unused":y[o.tokens.next.value]="var"
break
case"var":break
default:if(!y["(blockscope)"].getlabel(o.tokens.next.value))Y("W088",o.tokens.next,o.tokens.next.value)}it()}it(i.value)
ot(20)
it(")",t)
e=Vt(true,true)
if(o.option.forin&&e&&(e.length>1||typeof e[0]!=="object"||e[0].value!=="if")){Y("W089",this)}y["(breakage)"]-=1
y["(loopage)"]-=1}else{if(r){J("E045",r)}if(o.tokens.next.id!==";"){if(o.tokens.next.id==="var"){it("var")
o.syntax["var"].fud.call(o.syntax["var"].fud)}else if(o.tokens.next.id==="let"){it("let")
n=true
y["(blockscope)"].stack()
o.syntax["let"].fud.call(o.syntax["let"].fud)}else{for(;;){ot(0,"for")
if(o.tokens.next.id!==","){break}gt()}}}dt(o.tokens.curr)
it(";")
if(o.tokens.next.id!==";"){Zt(ot(0))}dt(o.tokens.curr)
it(";")
if(o.tokens.next.id===";"){J("E021",o.tokens.next,")",";")}if(o.tokens.next.id!==")"){for(;;){ot(0,"for")
if(o.tokens.next.id!==","){break}gt()}}it(")",t)
ft(o.tokens.prev,o.tokens.curr)
Vt(true,true)
y["(breakage)"]-=1
y["(loopage)"]-=1}if(n){y["(blockscope)"].unstack()}return this}).labelled=true
bt("break",function(){var e=o.tokens.next.value
if(y["(breakage)"]===0)Y("W052",o.tokens.next,this.value)
if(!o.option.asi)dt(this)
if(o.tokens.next.id!==";"&&!o.tokens.next.reach){if(o.tokens.curr.line===o.tokens.next.line){if(y[e]!=="label"){Y("W090",o.tokens.next,e)}else if(I[e]!==y){Y("W091",o.tokens.next,e)}this.first=o.tokens.next
it()}}Wt("break")
return this}).exps=true
bt("continue",function(){var e=o.tokens.next.value
if(y["(breakage)"]===0)Y("W052",o.tokens.next,this.value)
if(!o.option.asi)dt(this)
if(o.tokens.next.id!==";"&&!o.tokens.next.reach){if(o.tokens.curr.line===o.tokens.next.line){if(y[e]!=="label"){Y("W090",o.tokens.next,e)}else if(I[e]!==y){Y("W091",o.tokens.next,e)}this.first=o.tokens.next
it()}}else if(!y["(loopage)"]){Y("W052",o.tokens.next,this.value)}Wt("continue")
return this}).exps=true
bt("return",function(){if(this.line===o.tokens.next.line){if(o.tokens.next.id==="(regexp)")Y("W092")
if(o.tokens.next.id!==";"&&!o.tokens.next.reach){ct(o.tokens.curr,o.tokens.next)
this.first=ot(0)
if(this.first&&this.first.type==="(punctuator)"&&this.first.value==="="&&!o.option.boss){Z("W093",this.first.line,this.first.character)}}}else{if(o.tokens.next.type==="(punctuator)"&&["[","{","+","-"].indexOf(o.tokens.next.value)>-1){dt(this)}}Wt("return")
return this}).exps=true;(function(e){e.exps=true
e.lbp=25})(Et("yield",function(){var e=o.tokens.prev
if(o.option.inESNext(true)&&!y["(generator)"]){J("E046",o.tokens.curr,"yield")}else if(!o.option.inESNext()){Y("W104",o.tokens.curr,"yield")}y["(generator)"]="yielded"
if(this.line===o.tokens.next.line||!o.option.inMoz(true)){if(o.tokens.next.id==="(regexp)")Y("W092")
if(o.tokens.next.id!==";"&&!o.tokens.next.reach&&o.tokens.next.nud){ht(o.tokens.curr,o.tokens.next)
this.first=ot(10)
if(this.first.type==="(punctuator)"&&this.first.value==="="&&!o.option.boss){Z("W093",this.first.line,this.first.character)}}if(o.option.inMoz(true)&&o.tokens.next.id!==")"&&(e.lbp>30||!e.assign&&!st()||e.id==="yield")){J("E050",this)}}else if(!o.option.asi){dt(this)}return this}))
bt("throw",function(){dt(this)
ct(o.tokens.curr,o.tokens.next)
this.first=ot(20)
Wt("throw")
return this}).exps=true
bt("import",function(){if(!o.option.inESNext()){Y("W119",o.tokens.curr,"import")}if(o.tokens.next.identifier){this.name=Dt()
tt(this.name,"unused",o.tokens.curr)}else{it("{")
for(;;){var e
if(o.tokens.next.type==="default"){e="default"
it("default")}else{e=Dt()}if(o.tokens.next.value==="as"){it("as")
e=Dt()}tt(e,"unused",o.tokens.curr)
if(o.tokens.next.value===","){it(",")}else if(o.tokens.next.value==="}"){it("}")
break}else{J("E024",o.tokens.next,o.tokens.next.value)
break}}}it("from")
it("(string)")
return this}).exps=true
bt("export",function(){if(!o.option.inESNext()){Y("W119",o.tokens.curr,"export")}if(o.tokens.next.type==="default"){it("default")
if(o.tokens.next.id==="function"||o.tokens.next.id==="class"){this.block=true}this.exportee=ot(10)
return this}if(o.tokens.next.value==="{"){it("{")
for(;;){Dt()
if(o.tokens.next.value===","){it(",")}else if(o.tokens.next.value==="}"){it("}")
break}else{J("E024",o.tokens.next,o.tokens.next.value)
break}}return this}if(o.tokens.next.id==="var"){it("var")
o.syntax["var"].fud.call(o.syntax["var"].fud)}else if(o.tokens.next.id==="let"){it("let")
o.syntax["let"].fud.call(o.syntax["let"].fud)}else if(o.tokens.next.id==="const"){it("const")
o.syntax["const"].fud.call(o.syntax["const"].fud)}else if(o.tokens.next.id==="function"){this.block=true
it("function")
o.syntax["function"].fud()}else if(o.tokens.next.id==="class"){this.block=true
it("class")
o.syntax["class"].fud()}else{J("E024",o.tokens.next,o.tokens.next.value)}return this}).exps=true
At("abstract")
At("boolean")
At("byte")
At("char")
At("class",{es5:true,nud:rn})
At("double")
At("enum",{es5:true})
At("export",{es5:true})
At("extends",{es5:true})
At("final")
At("float")
At("goto")
At("implements",{es5:true,strictOnly:true})
At("import",{es5:true})
At("int")
At("interface",{es5:true,strictOnly:true})
At("long")
At("native")
At("package",{es5:true,strictOnly:true})
At("private",{es5:true,strictOnly:true})
At("protected",{es5:true,strictOnly:true})
At("public",{es5:true,strictOnly:true})
At("short")
At("static",{es5:true,strictOnly:true})
At("super",{es5:true})
At("synchronized")
At("throws")
At("transient")
At("volatile")
var sn=function(){var e,t
var n=-1
var r=0
var i={}
if(F.contains(["[","{"],o.tokens.curr.value))r+=1
do{e=n===-1?o.tokens.next:rt(n)
t=rt(n+1)
n=n+1
if(F.contains(["[","{"],e.value)){r+=1}else if(F.contains(["]","}"],e.value)){r-=1}if(e.identifier&&e.value==="for"&&r===1){i.isCompArray=true
i.notJson=true
break}if(F.contains(["}","]"],e.value)&&t.value==="="&&r===0){i.isDestAssign=true
i.notJson=true
break}if(e.value===";"){i.isBlock=true
i.notJson=true}}while(r>0&&e.id!=="(end)"&&n<15)
return i}
function on(){var e=sn()
if(e.notJson){if(!o.option.inESNext()&&e.isDestAssign){Y("W104",o.tokens.curr,"destructuring assignment")}Gt()}else{o.option.laxbreak=true
o.jsonMode=true
un()}}var ln=function(){var e=function(){this.mode="use"
this.variables=[]}
var t=[]
var n
function r(e){var t=n.variables.filter(function(t){if(t.value===e){t.undef=false
return e}}).length
return t!==0}function i(e){var t=n.variables.filter(function(t){if(t.value===e&&!t.undef){if(t.unused===true){t.unused=false}return e}}).length
return t===0}return{stack:function(){n=new e
t.push(n)},unstack:function(){n.variables.filter(function(e){if(e.unused)Y("W098",e.token,e.value)
if(e.undef)q(e.funct,"W117",e.token,e.value)})
t.splice(-1,1)
n=t[t.length-1]},setState:function(e){if(F.contains(["use","define","generate","filter"],e))n.mode=e},check:function(e){if(!n){return}if(n&&n.mode==="use"){if(i(e)){n.variables.push({funct:y,token:o.tokens.curr,value:e,undef:true,unused:false})}return true}else if(n&&n.mode==="define"){if(!r(e)){n.variables.push({funct:y,token:o.tokens.curr,value:e,undef:false,unused:true})}return true}else if(n&&n.mode==="generate"){q(y,"W117",o.tokens.curr,e)
return true}else if(n&&n.mode==="filter"){if(i(e)){q(y,"W117",o.tokens.curr,e)}return true}return false}}}
function un(){function e(){var e={},t=o.tokens.next
it("{")
if(o.tokens.next.id!=="}"){for(;;){if(o.tokens.next.id==="(end)"){J("E026",o.tokens.next,t.line)}else if(o.tokens.next.id==="}"){Y("W094",o.tokens.curr)
break}else if(o.tokens.next.id===","){J("E028",o.tokens.next)}else if(o.tokens.next.id!=="(string)"){Y("W095",o.tokens.next,o.tokens.next.value)}if(e[o.tokens.next.value]===true){Y("W075",o.tokens.next,o.tokens.next.value)}else if(o.tokens.next.value==="__proto__"&&!o.option.proto||o.tokens.next.value==="__iterator__"&&!o.option.iterator){Y("W096",o.tokens.next,o.tokens.next.value)}else{e[o.tokens.next.value]=true}it()
it(":")
un()
if(o.tokens.next.id!==","){break}it(",")}}it("}")}function t(){var e=o.tokens.next
it("[")
if(o.tokens.next.id!=="]"){for(;;){if(o.tokens.next.id==="(end)"){J("E027",o.tokens.next,e.line)}else if(o.tokens.next.id==="]"){Y("W094",o.tokens.curr)
break}else if(o.tokens.next.id===","){J("E028",o.tokens.next)}un()
if(o.tokens.next.id!==","){break}it(",")}}it("]")}switch(o.tokens.next.id){case"{":e()
break
case"[":t()
break
case"true":case"false":case"null":case"(number)":case"(string)":it()
break
case"-":it("-")
if(o.tokens.curr.character!==o.tokens.next.from){Y("W011",o.tokens.curr)}lt(o.tokens.curr,o.tokens.next)
it("(number)")
break
default:J("E003",o.tokens.next)}}var fn=function(){var e={}
var t=[e]
function n(){for(var t in e){if(e[t]["(type)"]==="unused"){if(o.option.unused){var n=e[t]["(token)"]
var r=n.line
var i=n.character
Z("W098",r,i,t)}}}}return{stack:function(){e={}
t.push(e)},unstack:function(){n()
t.splice(t.length-1,1)
e=t[t.length-1]},getlabel:function(e){for(var n=t.length-1;n>=0;--n){if(F.has(t[n],e)){return t[n]}}},current:{has:function(t){return F.has(e,t)},add:function(t,n,r){e[t]={"(type)":n,"(token)":r}}}}}
var cn=function(e,t,i){var s,l,u
var c
var h={}
var p={}
o.reset()
if(t&&t.scope){f.scope=t.scope}else{f.errors=[]
f.undefs=[]
f.internals=[]
f.blacklist={}
f.scope="(main)"}L=Object.create(null)
H(L,r.ecmaIdentifiers)
H(L,r.reservedVars)
H(L,i||{})
m=Object.create(null)
g=Object.create(null)
function d(e,t){if(!e)return
if(!Array.isArray(e)&&typeof e==="object")e=Object.keys(e)
e.forEach(t)}if(t){d(t.predef||null,function(e){var n,r
if(e[0]==="-"){n=e.slice(1)
f.blacklist[n]=n}else{r=Object.getOwnPropertyDescriptor(t.predef,e)
L[e]=r?r.value:false}})
d(t.exported||null,function(e){g[e]=true})
delete t.predef
delete t.exported
c=Object.keys(t)
for(u=0;u<c.length;u++){if(/^-W\d{3}$/g.test(c[u])){p[c[u].slice(1)]=true}else{h[c[u]]=t[c[u]]
if(c[u]==="newcap"&&t[c[u]]===false)h["(explicitNewcap)"]=true
if(c[u]==="indent")h["(explicitIndent)"]=t[c[u]]===false?false:true}}}o.option=h
o.ignored=p
o.option.indent=o.option.indent||4
o.option.maxerr=o.option.maxerr||50
w=1
x=Object.create(L)
I=x
y={"(global)":true,"(name)":"(global)","(scope)":I,"(breakage)":0,"(loopage)":0,"(tokens)":{},"(metrics)":qt(o.tokens.next),"(blockscope)":fn(),"(comparray)":ln()}
b=[y]
O=[]
P=null
_={}
T=null
k={}
E=false
S=[]
M=0
R=[]
if(!B(e)&&!Array.isArray(e)){Q("E004",0)
return false}n={get isJSON(){return o.jsonMode},getOption:function(e){return o.option[e]||null},getCache:function(e){return o.cache[e]},setCache:function(e,t){o.cache[e]=t},warn:function(e,t){Z.apply(null,[e,t.line,t.char].concat(t.data))},on:function(e,t){e.split(" ").forEach(function(e){D.on(e,t)}.bind(this))}}
D.removeAllListeners();(N||[]).forEach(function(e){e(n)})
o.tokens.prev=o.tokens.curr=o.tokens.next=o.syntax["(begin)"]
A=new a(e)
A.on("warning",function(e){Z.apply(null,[e.code,e.line,e.character].concat(e.data))})
A.on("error",function(e){Q.apply(null,[e.code,e.line,e.character].concat(e.data))})
A.on("fatal",function(e){X("E041",e.line,e.from)})
A.on("Identifier",function(e){D.emit("Identifier",e)})
A.on("String",function(e){D.emit("String",e)})
A.on("Number",function(e){D.emit("Number",e)})
A.start()
for(var v in t){if(F.has(t,v)){G(v,o.tokens.curr)}}K()
H(L,i||{})
gt.first=true
try{it()
switch(o.tokens.next.id){case"{":case"[":on()
break
default:Bt()
if(o.directive["use strict"]){if(!o.option.globalstrict&&!(o.option.node||o.option.phantom)){Y("W097",o.tokens.prev)}}Gt()}it(o.tokens.next&&o.tokens.next.value!=="."?"(end)":undefined)
y["(blockscope)"].unstack()
var C=function(e,t){do{if(typeof t[e]==="string"){if(t[e]==="unused")t[e]="var"
else if(t[e]==="unction")t[e]="closure"
return true}t=t["(context)"]}while(t)
return false}
var W=function(e,t){if(!k[e])return
var n=[]
for(var r=0;r<k[e].length;r+=1){if(k[e][r]!==t)n.push(k[e][r])}if(n.length===0)delete k[e]
else k[e]=n}
var V=function(e,t,n,r){var i=t.line
var a=t.character
if(r===undefined){r=o.option.unused}if(r===true){r="last-param"}var s={vars:["var"],"last-param":["var","param"],strict:["var","param","last-param"]}
if(r){if(s[r]&&s[r].indexOf(n)!==-1){Z("W098",i,a,e)}}R.push({name:e,line:i,character:a})}
var U=function(e,t){var n=e[t]
var r=e["(tokens)"][t]
if(t.charAt(0)==="(")return
if(n!=="unused"&&n!=="unction")return
if(e["(params)"]&&e["(params)"].indexOf(t)!==-1)return
if(e["(global)"]&&F.has(g,t)){return}V(t,r,"var")}
for(s=0;s<f.undefs.length;s+=1){l=f.undefs[s].slice(0)
if(C(l[2].value,l[0])){W(l[2].value,l[2].line)}else if(o.option.undef){Y.apply(Y,l.slice(1))}}b.forEach(function(e){if(e["(unusedOption)"]===false){return}for(var t in e){if(F.has(e,t)){U(e,t)}}if(!e["(params)"])return
var n=e["(params)"].slice()
var r=n.pop()
var i,a
while(r){i=e[r]
a=e["(unusedOption)"]||o.option.unused
a=a===true?"last-param":a
if(r==="undefined")return
if(i==="unused"||i==="unction"){V(r,e["(tokens)"][r],"param",e["(unusedOption)"])}else if(a==="last-param"){return}r=n.pop()}})
for(var z in m){if(F.has(m,z)&&!F.has(x,z)){V(z,m[z],"var")}}}catch(j){if(j&&j.name==="JSHintError"){var q=o.tokens.next||{}
f.errors.push({scope:"(main)",raw:j.raw,code:j.code,reason:j.message,line:j.line||q.line,character:j.character||q.from},null)}else{throw j}}if(f.scope==="(main)"){t=t||{}
for(s=0;s<f.internals.length;s+=1){l=f.internals[s]
t.scope=l.elem
cn(l.value,t,i)}}return f.errors.length===0}
cn.addModule=function(e){N.push(e)}
cn.addModule(l.register)
cn.data=function(){var e={functions:[],options:o.option}
var t=[]
var n=[]
var r,i,a,s,l,u
if(cn.errors.length){e.errors=cn.errors}if(o.jsonMode){e.json=true}for(l in k){if(F.has(k,l)){t.push({name:l,line:k[l]})}}if(t.length>0){e.implieds=t}if(O.length>0){e.urls=O}u=Object.keys(I)
if(u.length>0){e.globals=u}for(a=1;a<b.length;a+=1){i=b[a]
r={}
for(s=0;s<v.length;s+=1){r[v[s]]=[]}for(s=0;s<v.length;s+=1){if(r[v[s]].length===0){delete r[v[s]]}}r.name=i["(name)"]
r.param=i["(params)"]
r.line=i["(line)"]
r.character=i["(character)"]
r.last=i["(last)"]
r.lastcharacter=i["(lastcharacter)"]
r.metrics={complexity:i["(metrics)"].ComplexityCount,parameters:(i["(params)"]||[]).length,statements:i["(metrics)"].statementCount}
e.functions.push(r)}if(R.length>0){e.unused=R}n=[]
for(l in _){if(typeof _[l]==="number"){e.member=_
break}}return e}
cn.jshint=cn
return cn}()
if(typeof n==="object"&&n){n.JSHINT=f}})()},{events:2,"./vars.js":3,"./messages.js":4,"./lex.js":8,"./reg.js":5,"./state.js":6,"./style.js":7,"console-browserify":9}],9:[function(e,t,n){(function(n){var r=e("util")
var i=e("assert")
var a=Array.prototype.slice
var s
var o={}
if(typeof n!=="undefined"&&n.console){s=n.console}else if(typeof window!=="undefined"&&window.console){s=window.console}else{s=window.console={}}var l=[[p,"log"],[d,"info"],[m,"warn"],[g,"error"],[v,"time"],[y,"timeEnd"],[b,"trace"],[x,"dir"],[i,"assert"]]
for(var u=0;u<l.length;u++){var f=l[u]
var c=f[0]
var h=f[1]
if(!s[h]){s[h]=c}}t.exports=s
function p(){}function d(){s.log.apply(s,arguments)}function m(){s.log.apply(s,arguments)}function g(){s.warn.apply(s,arguments)}function v(e){o[e]=Date.now()}function y(e){var t=o[e]
if(!t){throw new Error("No such label: "+e)}var n=Date.now()-t
s.log(e+": "+n+"ms")}function b(){var e=new Error
e.name="Trace"
e.message=r.format.apply(null,arguments)
s.error(e.stack)}function x(e){s.log(r.inspect(e)+"\n")}function i(e){if(!e){var t=a.call(arguments,1)
i.ok(false,r.format.apply(null,t))}}})(window)},{util:10,assert:11}],10:[function(e,t,n){var r=e("events")
n.isArray=i
n.isDate=function(e){return Object.prototype.toString.call(e)==="[object Date]"}
n.isRegExp=function(e){return Object.prototype.toString.call(e)==="[object RegExp]"}
n.print=function(){}
n.puts=function(){}
n.debug=function(){}
n.inspect=function(e,t,r,o){var l=[]
var u=function(e,t){var n={bold:[1,22],italic:[3,23],underline:[4,24],inverse:[7,27],white:[37,39],grey:[90,39],black:[30,39],blue:[34,39],cyan:[36,39],green:[32,39],magenta:[35,39],red:[31,39],yellow:[33,39]}
var r={special:"cyan",number:"blue","boolean":"yellow",undefined:"grey","null":"bold",string:"green",date:"magenta",regexp:"red"}[t]
if(r){return"["+n[r][0]+"m"+e+"["+n[r][1]+"m"}else{return e}}
if(!o){u=function(e,t){return e}}function h(e,r){if(e&&typeof e.inspect==="function"&&e!==n&&!(e.constructor&&e.constructor.prototype===e)){return e.inspect(r)}switch(typeof e){case"undefined":return u("undefined","undefined")
case"string":var o="'"+JSON.stringify(e).replace(/^"|"$/g,"").replace(/'/g,"\\'").replace(/\\"/g,'"')+"'"
return u(o,"string")
case"number":return u(""+e,"number")
case"boolean":return u(""+e,"boolean")}if(e===null){return u("null","null")}var p=f(e)
var d=t?c(e):p
if(typeof e==="function"&&d.length===0){if(a(e)){return u(""+e,"regexp")}else{var m=e.name?": "+e.name:""
return u("[Function"+m+"]","special")}}if(s(e)&&d.length===0){return u(e.toUTCString(),"date")}var g,v,y
if(i(e)){v="Array"
y=["[","]"]}else{v="Object"
y=["{","}"]}if(typeof e==="function"){var b=e.name?": "+e.name:""
g=a(e)?" "+e:" [Function"+b+"]"}else{g=""}if(s(e)){g=" "+e.toUTCString()}if(d.length===0){return y[0]+g+y[1]}if(r<0){if(a(e)){return u(""+e,"regexp")}else{return u("[Object]","special")}}l.push(e)
var x=d.map(function(t){var n,a
if(e.__lookupGetter__){if(e.__lookupGetter__(t)){if(e.__lookupSetter__(t)){a=u("[Getter/Setter]","special")}else{a=u("[Getter]","special")}}else{if(e.__lookupSetter__(t)){a=u("[Setter]","special")}}}if(p.indexOf(t)<0){n="["+t+"]"}if(!a){if(l.indexOf(e[t])<0){if(r===null){a=h(e[t])}else{a=h(e[t],r-1)}if(a.indexOf("\n")>-1){if(i(e)){a=a.split("\n").map(function(e){return"  "+e}).join("\n").substr(2)}else{a="\n"+a.split("\n").map(function(e){return"   "+e}).join("\n")}}}else{a=u("[Circular]","special")}}if(typeof n==="undefined"){if(v==="Array"&&t.match(/^\d+$/)){return a}n=JSON.stringify(""+t)
if(n.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)){n=n.substr(1,n.length-2)
n=u(n,"name")}else{n=n.replace(/'/g,"\\'").replace(/\\"/g,'"').replace(/(^"|"$)/g,"'")
n=u(n,"string")}}return n+": "+a})
l.pop()
var k=0
var E=x.reduce(function(e,t){k++
if(t.indexOf("\n")>=0)k++
return e+t.length+1},0)
if(E>50){x=y[0]+(g===""?"":g+"\n ")+" "+x.join(",\n  ")+" "+y[1]}else{x=y[0]+g+" "+x.join(", ")+" "+y[1]}return x}return h(e,typeof r==="undefined"?2:r)}
function i(e){return e instanceof Array||Array.isArray(e)||e&&e!==Object.prototype&&i(e.__proto__)}function a(e){return e instanceof RegExp||typeof e==="object"&&Object.prototype.toString.call(e)==="[object RegExp]"}function s(e){if(e instanceof Date)return true
if(typeof e!=="object")return false
var t=Date.prototype&&c(Date.prototype)
var n=e.__proto__&&c(e.__proto__)
return JSON.stringify(n)===JSON.stringify(t)}function o(e){return e<10?"0"+e.toString(10):e.toString(10)}var l=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
function u(){var e=new Date
var t=[o(e.getHours()),o(e.getMinutes()),o(e.getSeconds())].join(":")
return[e.getDate(),l[e.getMonth()],t].join(" ")}n.log=function(e){}
n.pump=null
var f=Object.keys||function(e){var t=[]
for(var n in e)t.push(n)
return t}
var c=Object.getOwnPropertyNames||function(e){var t=[]
for(var n in e){if(Object.hasOwnProperty.call(e,n))t.push(n)}return t}
var h=Object.create||function(e,t){var n
if(e===null){n={__proto__:null}}else{if(typeof e!=="object"){throw new TypeError("typeof prototype["+typeof e+"] != 'object'")}var r=function(){}
r.prototype=e
n=new r
n.__proto__=e}if(typeof t!=="undefined"&&Object.defineProperties){Object.defineProperties(n,t)}return n}
n.inherits=function(e,t){e.super_=t
e.prototype=h(t.prototype,{constructor:{value:e,enumerable:false,writable:true,configurable:true}})}
var p=/%[sdj%]/g
n.format=function(e){if(typeof e!=="string"){var t=[]
for(var r=0;r<arguments.length;r++){t.push(n.inspect(arguments[r]))}return t.join(" ")}var r=1
var i=arguments
var a=i.length
var s=String(e).replace(p,function(e){if(e==="%%")return"%"
if(r>=a)return e
switch(e){case"%s":return String(i[r++])
case"%d":return Number(i[r++])
case"%j":return JSON.stringify(i[r++])
default:return e}})
for(var o=i[r];r<a;o=i[++r]){if(o===null||typeof o!=="object"){s+=" "+o}else{s+=" "+n.inspect(o)}}return s}},{events:2}],11:[function(e,t,n){(function(){var n=e("util")
var r=e("buffer").Buffer
var i=Array.prototype.slice
function a(e){if(Object.keys)return Object.keys(e)
var t=[]
for(var n in e){if(Object.prototype.hasOwnProperty.call(e,n)){t.push(n)}}return t}var s=t.exports=f
s.AssertionError=function v(e){this.name="AssertionError"
this.message=e.message
this.actual=e.actual
this.expected=e.expected
this.operator=e.operator
var t=e.stackStartFunction||u
if(Error.captureStackTrace){Error.captureStackTrace(this,t)}}
n.inherits(s.AssertionError,Error)
function o(e,t){if(t===undefined){return""+t}if(typeof t==="number"&&(isNaN(t)||!isFinite(t))){return t.toString()}if(typeof t==="function"||t instanceof RegExp){return t.toString()}return t}function l(e,t){if(typeof e=="string"){return e.length<t?e:e.slice(0,t)}else{return e}}s.AssertionError.prototype.toString=function(){if(this.message){return[this.name+":",this.message].join(" ")}else{return[this.name+":",l(JSON.stringify(this.actual,o),128),this.operator,l(JSON.stringify(this.expected,o),128)].join(" ")}}
s.AssertionError.__proto__=Error.prototype
function u(e,t,n,r,i){throw new s.AssertionError({message:n,actual:e,expected:t,operator:r,stackStartFunction:i})}s.fail=u
function f(e,t){if(!!!e)u(e,true,t,"==",s.ok)}s.ok=f
s.equal=function y(e,t,n){if(e!=t)u(e,t,n,"==",s.equal)}
s.notEqual=function b(e,t,n){if(e==t){u(e,t,n,"!=",s.notEqual)}}
s.deepEqual=function x(e,t,n){if(!c(e,t)){u(e,t,n,"deepEqual",s.deepEqual)}}
function c(e,t){if(e===t){return true}else if(r.isBuffer(e)&&r.isBuffer(t)){if(e.length!=t.length)return false
for(var n=0;n<e.length;n++){if(e[n]!==t[n])return false}return true}else if(e instanceof Date&&t instanceof Date){return e.getTime()===t.getTime()}else if(typeof e!="object"&&typeof t!="object"){return e==t}else{return d(e,t)}}function h(e){return e===null||e===undefined}function p(e){return Object.prototype.toString.call(e)=="[object Arguments]"}function d(e,t){if(h(e)||h(t))return false
if(e.prototype!==t.prototype)return false
if(p(e)){if(!p(t)){return false}e=i.call(e)
t=i.call(t)
return c(e,t)}try{var n=a(e),r=a(t),s,o}catch(l){return false}if(n.length!=r.length)return false
n.sort()
r.sort()
for(o=n.length-1;o>=0;o--){if(n[o]!=r[o])return false}for(o=n.length-1;o>=0;o--){s=n[o]
if(!c(e[s],t[s]))return false}return true}s.notDeepEqual=function k(e,t,n){if(c(e,t)){u(e,t,n,"notDeepEqual",s.notDeepEqual)}}
s.strictEqual=function E(e,t,n){if(e!==t){u(e,t,n,"===",s.strictEqual)}}
s.notStrictEqual=function w(e,t,n){if(e===t){u(e,t,n,"!==",s.notStrictEqual)}}
function m(e,t){if(!e||!t){return false}if(t instanceof RegExp){return t.test(e)}else if(e instanceof t){return true}else if(t.call({},e)===true){return true}return false}function g(e,t,n,r){var i
if(typeof n==="string"){r=n
n=null}try{t()}catch(a){i=a}r=(n&&n.name?" ("+n.name+").":".")+(r?" "+r:".")
if(e&&!i){u("Missing expected exception"+r)}if(!e&&m(i,n)){u("Got unwanted exception"+r)}if(e&&i&&n&&!m(i,n)||!e&&i){throw i}}s.throws=function(e,t,n){g.apply(this,[true].concat(i.call(arguments)))}
s.doesNotThrow=function(e,t,n){g.apply(this,[false].concat(i.call(arguments)))}
s.ifError=function(e){if(e){throw e}}})()},{util:10,buffer:12}],13:[function(e,t,n){n.readIEEE754=function(e,t,n,r,i){var a,s,o=i*8-r-1,l=(1<<o)-1,u=l>>1,f=-7,c=n?0:i-1,h=n?1:-1,p=e[t+c]
c+=h
a=p&(1<<-f)-1
p>>=-f
f+=o
for(;f>0;a=a*256+e[t+c],c+=h,f-=8);s=a&(1<<-f)-1
a>>=-f
f+=r
for(;f>0;s=s*256+e[t+c],c+=h,f-=8);if(a===0){a=1-u}else if(a===l){return s?NaN:(p?-1:1)*Infinity}else{s=s+Math.pow(2,r)
a=a-u}return(p?-1:1)*s*Math.pow(2,a-r)}
n.writeIEEE754=function(e,t,n,r,i,a){var s,o,l,u=a*8-i-1,f=(1<<u)-1,c=f>>1,h=i===23?Math.pow(2,-24)-Math.pow(2,-77):0,p=r?a-1:0,d=r?-1:1,m=t<0||t===0&&1/t<0?1:0
t=Math.abs(t)
if(isNaN(t)||t===Infinity){o=isNaN(t)?1:0
s=f}else{s=Math.floor(Math.log(t)/Math.LN2)
if(t*(l=Math.pow(2,-s))<1){s--
l*=2}if(s+c>=1){t+=h/l}else{t+=h*Math.pow(2,1-c)}if(t*l>=2){s++
l/=2}if(s+c>=f){o=0
s=f}else if(s+c>=1){o=(t*l-1)*Math.pow(2,i)
s=s+c}else{o=t*Math.pow(2,c-1)*Math.pow(2,i)
s=0}}for(;i>=8;e[n+p]=o&255,p+=d,o/=256,i-=8);s=s<<i|o
u+=i
for(;u>0;e[n+p]=s&255,p+=d,s/=256,u-=8);e[n+p-d]|=m*128}},{}],12:[function(e,t,n){(function(){function t(e){this.length=e}var r=e("assert")
n.INSPECT_MAX_BYTES=50
function i(e){if(e<16)return"0"+e.toString(16)
return e.toString(16)}function a(e){var t=[]
for(var n=0;n<e.length;n++)if(e.charCodeAt(n)<=127)t.push(e.charCodeAt(n))
else{var r=encodeURIComponent(e.charAt(n)).substr(1).split("%")
for(var i=0;i<r.length;i++)t.push(parseInt(r[i],16))}return t}function s(e){var t=[]
for(var n=0;n<e.length;n++)t.push(e.charCodeAt(n)&255)
return t}function o(t){return e("base64-js").toByteArray(t)}t.byteLength=function(e,t){switch(t||"utf8"){case"hex":return e.length/2
case"utf8":case"utf-8":return a(e).length
case"ascii":case"binary":return e.length
case"base64":return o(e).length
default:throw new Error("Unknown encoding")}}
function l(e,t,n,r){var i,a=0
while(a<r){if(a+n>=t.length||a>=e.length)break
t[a+n]=e[a]
a++}return a}t.prototype.utf8Write=function(e,n,r){var i,s
return t._charsWritten=l(a(e),this,n,r)}
t.prototype.asciiWrite=function(e,n,r){var i,a
return t._charsWritten=l(s(e),this,n,r)}
t.prototype.binaryWrite=t.prototype.asciiWrite
t.prototype.base64Write=function(e,n,r){var i,a
return t._charsWritten=l(o(e),this,n,r)}
t.prototype.base64Slice=function(t,n){var r=Array.prototype.slice.apply(this,arguments)
return e("base64-js").fromByteArray(r)}
function u(e){try{return decodeURIComponent(e)}catch(t){return String.fromCharCode(65533)}}t.prototype.utf8Slice=function(){var e=Array.prototype.slice.apply(this,arguments)
var t=""
var n=""
var r=0
while(r<e.length){if(e[r]<=127){t+=u(n)+String.fromCharCode(e[r])
n=""}else n+="%"+e[r].toString(16)
r++}return t+u(n)}
t.prototype.asciiSlice=function(){var e=Array.prototype.slice.apply(this,arguments)
var t=""
for(var n=0;n<e.length;n++)t+=String.fromCharCode(e[n])
return t}
t.prototype.binarySlice=t.prototype.asciiSlice
t.prototype.inspect=function(){var e=[],t=this.length
for(var r=0;r<t;r++){e[r]=i(this[r])
if(r==n.INSPECT_MAX_BYTES){e[r+1]="..."
break}}return"<SlowBuffer "+e.join(" ")+">"}
t.prototype.hexSlice=function(e,t){var n=this.length
if(!e||e<0)e=0
if(!t||t<0||t>n)t=n
var r=""
for(var a=e;a<t;a++){r+=i(this[a])}return r}
t.prototype.toString=function(e,t,n){e=String(e||"utf8").toLowerCase()
t=+t||0
if(typeof n=="undefined")n=this.length
if(+n==t){return""}switch(e){case"hex":return this.hexSlice(t,n)
case"utf8":case"utf-8":return this.utf8Slice(t,n)
case"ascii":return this.asciiSlice(t,n)
case"binary":return this.binarySlice(t,n)
case"base64":return this.base64Slice(t,n)
case"ucs2":case"ucs-2":return this.ucs2Slice(t,n)
default:throw new Error("Unknown encoding")}}
t.prototype.hexWrite=function(e,n,r){n=+n||0
var i=this.length-n
if(!r){r=i}else{r=+r
if(r>i){r=i}}var a=e.length
if(a%2){throw new Error("Invalid hex string")}if(r>a/2){r=a/2}for(var s=0;s<r;s++){var o=parseInt(e.substr(s*2,2),16)
if(isNaN(o))throw new Error("Invalid hex string")
this[n+s]=o}t._charsWritten=s*2
return s}
t.prototype.write=function(e,t,n,r){if(isFinite(t)){if(!isFinite(n)){r=n
n=undefined}}else{var i=r
r=t
t=n
n=i}t=+t||0
var a=this.length-t
if(!n){n=a}else{n=+n
if(n>a){n=a}}r=String(r||"utf8").toLowerCase()
switch(r){case"hex":return this.hexWrite(e,t,n)
case"utf8":case"utf-8":return this.utf8Write(e,t,n)
case"ascii":return this.asciiWrite(e,t,n)
case"binary":return this.binaryWrite(e,t,n)
case"base64":return this.base64Write(e,t,n)
case"ucs2":case"ucs-2":return this.ucs2Write(e,t,n)
default:throw new Error("Unknown encoding")}}
t.prototype.slice=function(e,t){if(t===undefined)t=this.length
if(t>this.length){throw new Error("oob")}if(e>t){throw new Error("oob")}return new c(this,t-e,+e)}
t.prototype.copy=function(e,t,n,i){var a=[]
for(var s=n;s<i;s++){r.ok(typeof this[s]!=="undefined","copying undefined buffer bytes!")
a.push(this[s])}for(var s=t;s<t+a.length;s++){e[s]=a[s-t]}}
t.prototype.fill=function(e,t,n){if(n>this.length){throw new Error("oob")}if(t>n){throw new Error("oob")}for(var r=t;r<n;r++){this[r]=e}}
function f(e){e=~~Math.ceil(+e)
return e<0?0:e}function c(e,n,r){if(!(this instanceof c)){return new c(e,n,r)}var i
if(typeof r==="number"){this.length=f(n)
this.parent=e
this.offset=r}else{switch(i=typeof e){case"number":this.length=f(e)
break
case"string":this.length=c.byteLength(e,n)
break
case"object":this.length=f(e.length)
break
default:throw new Error("First argument needs to be a number, "+"array or string.")}if(this.length>c.poolSize){this.parent=new t(this.length)
this.offset=0}else{if(!p||p.length-p.used<this.length)d()
this.parent=p
this.offset=p.used
p.used+=this.length}if(h(e)){for(var a=0;a<this.length;a++){if(e instanceof c){this.parent[a+this.offset]=e.readUInt8(a)}else{this.parent[a+this.offset]=e[a]}}}else if(i=="string"){this.length=this.write(e,0,n)}}}function h(e){return Array.isArray(e)||c.isBuffer(e)||e&&typeof e==="object"&&typeof e.length==="number"}n.SlowBuffer=t
n.Buffer=c
c.poolSize=8*1024
var p
function d(){p=new t(c.poolSize)
p.used=0}c.isBuffer=function I(e){return e instanceof c||e instanceof t}
c.concat=function(e,t){if(!Array.isArray(e)){throw new Error("Usage: Buffer.concat(list, [totalLength])\n       list should be an Array.")}if(e.length===0){return new c(0)}else if(e.length===1){return e[0]}if(typeof t!=="number"){t=0
for(var n=0;n<e.length;n++){var r=e[n]
t+=r.length}}var i=new c(t)
var a=0
for(var n=0;n<e.length;n++){var r=e[n]
r.copy(i,a)
a+=r.length}return i}
c.prototype.inspect=function P(){var e=[],t=this.length
for(var r=0;r<t;r++){e[r]=i(this.parent[r+this.offset])
if(r==n.INSPECT_MAX_BYTES){e[r+1]="..."
break}}return"<Buffer "+e.join(" ")+">"}
c.prototype.get=function R(e){if(e<0||e>=this.length)throw new Error("oob")
return this.parent[this.offset+e]}
c.prototype.set=function O(e,t){if(e<0||e>=this.length)throw new Error("oob")
return this.parent[this.offset+e]=t}
c.prototype.write=function(e,n,r,i){if(isFinite(n)){if(!isFinite(r)){i=r
r=undefined}}else{var a=i
i=n
n=r
r=a}n=+n||0
var s=this.length-n
if(!r){r=s}else{r=+r
if(r>s){r=s}}i=String(i||"utf8").toLowerCase()
var o
switch(i){case"hex":o=this.parent.hexWrite(e,this.offset+n,r)
break
case"utf8":case"utf-8":o=this.parent.utf8Write(e,this.offset+n,r)
break
case"ascii":o=this.parent.asciiWrite(e,this.offset+n,r)
break
case"binary":o=this.parent.binaryWrite(e,this.offset+n,r)
break
case"base64":o=this.parent.base64Write(e,this.offset+n,r)
break
case"ucs2":case"ucs-2":o=this.parent.ucs2Write(e,this.offset+n,r)
break
default:throw new Error("Unknown encoding")}c._charsWritten=t._charsWritten
return o}
c.prototype.toString=function(e,t,n){e=String(e||"utf8").toLowerCase()
if(typeof t=="undefined"||t<0){t=0}else if(t>this.length){t=this.length}if(typeof n=="undefined"||n>this.length){n=this.length}else if(n<0){n=0}t=t+this.offset
n=n+this.offset
switch(e){case"hex":return this.parent.hexSlice(t,n)
case"utf8":case"utf-8":return this.parent.utf8Slice(t,n)
case"ascii":return this.parent.asciiSlice(t,n)
case"binary":return this.parent.binarySlice(t,n)
case"base64":return this.parent.base64Slice(t,n)
case"ucs2":case"ucs-2":return this.parent.ucs2Slice(t,n)
default:throw new Error("Unknown encoding")}}
c.byteLength=t.byteLength
c.prototype.fill=function M(e,t,n){e||(e=0)
t||(t=0)
n||(n=this.length)
if(typeof e==="string"){e=e.charCodeAt(0)}if(!(typeof e==="number")||isNaN(e)){throw new Error("value is not a number")}if(n<t)throw new Error("end < start")
if(n===t)return 0
if(this.length==0)return 0
if(t<0||t>=this.length){throw new Error("start out of bounds")}if(n<0||n>this.length){throw new Error("end out of bounds")}return this.parent.fill(e,t+this.offset,n+this.offset)}
c.prototype.copy=function(e,t,n,r){var i=this
n||(n=0)
r||(r=this.length)
t||(t=0)
if(r<n)throw new Error("sourceEnd < sourceStart")
if(r===n)return 0
if(e.length==0||i.length==0)return 0
if(t<0||t>=e.length){throw new Error("targetStart out of bounds")}if(n<0||n>=i.length){throw new Error("sourceStart out of bounds")}if(r<0||r>i.length){throw new Error("sourceEnd out of bounds")}if(r>this.length){r=this.length}if(e.length-t<r-n){r=e.length-t+n}return this.parent.copy(e.parent,t+e.offset,n+this.offset,r+this.offset)}
c.prototype.slice=function(e,t){if(t===undefined)t=this.length
if(t>this.length)throw new Error("oob")
if(e>t)throw new Error("oob")
return new c(this.parent,t-e,+e+this.offset)}
c.prototype.utf8Slice=function(e,t){return this.toString("utf8",e,t)}
c.prototype.binarySlice=function(e,t){return this.toString("binary",e,t)}
c.prototype.asciiSlice=function(e,t){return this.toString("ascii",e,t)}
c.prototype.utf8Write=function(e,t){return this.write(e,t,"utf8")}
c.prototype.binaryWrite=function(e,t){return this.write(e,t,"binary")}
c.prototype.asciiWrite=function(e,t){return this.write(e,t,"ascii")}
c.prototype.readUInt8=function(e,t){var n=this
if(!t){r.ok(e!==undefined&&e!==null,"missing offset")
r.ok(e<n.length,"Trying to read beyond buffer length")}if(e>=n.length)return
return n.parent[n.offset+e]}
function m(e,t,n,i){var a=0
if(!i){r.ok(typeof n==="boolean","missing or invalid endian")
r.ok(t!==undefined&&t!==null,"missing offset")
r.ok(t+1<e.length,"Trying to read beyond buffer length")}if(t>=e.length)return 0
if(n){a=e.parent[e.offset+t]<<8
if(t+1<e.length){a|=e.parent[e.offset+t+1]}}else{a=e.parent[e.offset+t]
if(t+1<e.length){a|=e.parent[e.offset+t+1]<<8}}return a}c.prototype.readUInt16LE=function(e,t){return m(this,e,false,t)}
c.prototype.readUInt16BE=function(e,t){return m(this,e,true,t)}
function g(e,t,n,i){var a=0
if(!i){r.ok(typeof n==="boolean","missing or invalid endian")
r.ok(t!==undefined&&t!==null,"missing offset")
r.ok(t+3<e.length,"Trying to read beyond buffer length")}if(t>=e.length)return 0
if(n){if(t+1<e.length)a=e.parent[e.offset+t+1]<<16
if(t+2<e.length)a|=e.parent[e.offset+t+2]<<8
if(t+3<e.length)a|=e.parent[e.offset+t+3]
a=a+(e.parent[e.offset+t]<<24>>>0)}else{if(t+2<e.length)a=e.parent[e.offset+t+2]<<16
if(t+1<e.length)a|=e.parent[e.offset+t+1]<<8
a|=e.parent[e.offset+t]
if(t+3<e.length)a=a+(e.parent[e.offset+t+3]<<24>>>0)}return a}c.prototype.readUInt32LE=function(e,t){return g(this,e,false,t)}
c.prototype.readUInt32BE=function(e,t){return g(this,e,true,t)}
c.prototype.readInt8=function(e,t){var n=this
var i
if(!t){r.ok(e!==undefined&&e!==null,"missing offset")
r.ok(e<n.length,"Trying to read beyond buffer length")}if(e>=n.length)return
i=n.parent[n.offset+e]&128
if(!i){return n.parent[n.offset+e]}return(255-n.parent[n.offset+e]+1)*-1}
function v(e,t,n,i){var a,s
if(!i){r.ok(typeof n==="boolean","missing or invalid endian")
r.ok(t!==undefined&&t!==null,"missing offset")
r.ok(t+1<e.length,"Trying to read beyond buffer length")}s=m(e,t,n,i)
a=s&32768
if(!a){return s}return(65535-s+1)*-1}c.prototype.readInt16LE=function(e,t){return v(this,e,false,t)}
c.prototype.readInt16BE=function(e,t){return v(this,e,true,t)}
function y(e,t,n,i){var a,s
if(!i){r.ok(typeof n==="boolean","missing or invalid endian")
r.ok(t!==undefined&&t!==null,"missing offset")
r.ok(t+3<e.length,"Trying to read beyond buffer length")}s=g(e,t,n,i)
a=s&2147483648
if(!a){return s}return(4294967295-s+1)*-1}c.prototype.readInt32LE=function(e,t){return y(this,e,false,t)}
c.prototype.readInt32BE=function(e,t){return y(this,e,true,t)}
function b(t,n,i,a){if(!a){r.ok(typeof i==="boolean","missing or invalid endian")
r.ok(n+3<t.length,"Trying to read beyond buffer length")}return e("./buffer_ieee754").readIEEE754(t,n,i,23,4)}c.prototype.readFloatLE=function(e,t){return b(this,e,false,t)}
c.prototype.readFloatBE=function(e,t){return b(this,e,true,t)}
function x(t,n,i,a){if(!a){r.ok(typeof i==="boolean","missing or invalid endian")
r.ok(n+7<t.length,"Trying to read beyond buffer length")}return e("./buffer_ieee754").readIEEE754(t,n,i,52,8)}c.prototype.readDoubleLE=function(e,t){return x(this,e,false,t)}
c.prototype.readDoubleBE=function(e,t){return x(this,e,true,t)}
function k(e,t){r.ok(typeof e=="number","cannot write a non-number as a number")
r.ok(e>=0,"specified a negative value for writing an unsigned value")
r.ok(e<=t,"value is larger than maximum value for type")
r.ok(Math.floor(e)===e,"value has a fractional component")}c.prototype.writeUInt8=function(e,t,n){var i=this
if(!n){r.ok(e!==undefined&&e!==null,"missing value")
r.ok(t!==undefined&&t!==null,"missing offset")
r.ok(t<i.length,"trying to write beyond buffer length")
k(e,255)}if(t<i.length){i.parent[i.offset+t]=e}}
function E(e,t,n,i,a){if(!a){r.ok(t!==undefined&&t!==null,"missing value")
r.ok(typeof i==="boolean","missing or invalid endian")
r.ok(n!==undefined&&n!==null,"missing offset")
r.ok(n+1<e.length,"trying to write beyond buffer length")
k(t,65535)}for(var s=0;s<Math.min(e.length-n,2);s++){e.parent[e.offset+n+s]=(t&255<<8*(i?1-s:s))>>>(i?1-s:s)*8}}c.prototype.writeUInt16LE=function(e,t,n){E(this,e,t,false,n)}
c.prototype.writeUInt16BE=function(e,t,n){E(this,e,t,true,n)}
function w(e,t,n,i,a){if(!a){r.ok(t!==undefined&&t!==null,"missing value")
r.ok(typeof i==="boolean","missing or invalid endian")
r.ok(n!==undefined&&n!==null,"missing offset")
r.ok(n+3<e.length,"trying to write beyond buffer length")
k(t,4294967295)}for(var s=0;s<Math.min(e.length-n,4);s++){e.parent[e.offset+n+s]=t>>>(i?3-s:s)*8&255}}c.prototype.writeUInt32LE=function(e,t,n){w(this,e,t,false,n)}
c.prototype.writeUInt32BE=function(e,t,n){w(this,e,t,true,n)}
function S(e,t,n){r.ok(typeof e=="number","cannot write a non-number as a number")
r.ok(e<=t,"value larger than maximum allowed value")
r.ok(e>=n,"value smaller than minimum allowed value")
r.ok(Math.floor(e)===e,"value has a fractional component")}function A(e,t,n){r.ok(typeof e=="number","cannot write a non-number as a number")
r.ok(e<=t,"value larger than maximum allowed value")
r.ok(e>=n,"value smaller than minimum allowed value")}c.prototype.writeInt8=function(e,t,n){var i=this
if(!n){r.ok(e!==undefined&&e!==null,"missing value")
r.ok(t!==undefined&&t!==null,"missing offset")
r.ok(t<i.length,"Trying to write beyond buffer length")
S(e,127,-128)}if(e>=0){i.writeUInt8(e,t,n)}else{i.writeUInt8(255+e+1,t,n)}}
function _(e,t,n,i,a){if(!a){r.ok(t!==undefined&&t!==null,"missing value")
r.ok(typeof i==="boolean","missing or invalid endian")
r.ok(n!==undefined&&n!==null,"missing offset")
r.ok(n+1<e.length,"Trying to write beyond buffer length")
S(t,32767,-32768)}if(t>=0){E(e,t,n,i,a)}else{E(e,65535+t+1,n,i,a)}}c.prototype.writeInt16LE=function(e,t,n){_(this,e,t,false,n)}
c.prototype.writeInt16BE=function(e,t,n){_(this,e,t,true,n)}
function T(e,t,n,i,a){if(!a){r.ok(t!==undefined&&t!==null,"missing value")
r.ok(typeof i==="boolean","missing or invalid endian")
r.ok(n!==undefined&&n!==null,"missing offset")
r.ok(n+3<e.length,"Trying to write beyond buffer length")
S(t,2147483647,-2147483648)}if(t>=0){w(e,t,n,i,a)}else{w(e,4294967295+t+1,n,i,a)}}c.prototype.writeInt32LE=function(e,t,n){T(this,e,t,false,n)}
c.prototype.writeInt32BE=function(e,t,n){T(this,e,t,true,n)}
function C(t,n,i,a,s){if(!s){r.ok(n!==undefined&&n!==null,"missing value")
r.ok(typeof a==="boolean","missing or invalid endian")
r.ok(i!==undefined&&i!==null,"missing offset")
r.ok(i+3<t.length,"Trying to write beyond buffer length")
A(n,3.4028234663852886e38,-3.4028234663852886e38)}e("./buffer_ieee754").writeIEEE754(t,n,i,a,23,4)}c.prototype.writeFloatLE=function(e,t,n){C(this,e,t,false,n)}
c.prototype.writeFloatBE=function(e,t,n){C(this,e,t,true,n)}
function L(t,n,i,a,s){if(!s){r.ok(n!==undefined&&n!==null,"missing value")
r.ok(typeof a==="boolean","missing or invalid endian")
r.ok(i!==undefined&&i!==null,"missing offset")
r.ok(i+7<t.length,"Trying to write beyond buffer length")
A(n,1.7976931348623157e308,-1.7976931348623157e308)}e("./buffer_ieee754").writeIEEE754(t,n,i,a,52,8)}c.prototype.writeDoubleLE=function(e,t,n){L(this,e,t,false,n)}
c.prototype.writeDoubleBE=function(e,t,n){L(this,e,t,true,n)}
t.prototype.readUInt8=c.prototype.readUInt8
t.prototype.readUInt16LE=c.prototype.readUInt16LE
t.prototype.readUInt16BE=c.prototype.readUInt16BE
t.prototype.readUInt32LE=c.prototype.readUInt32LE
t.prototype.readUInt32BE=c.prototype.readUInt32BE
t.prototype.readInt8=c.prototype.readInt8
t.prototype.readInt16LE=c.prototype.readInt16LE
t.prototype.readInt16BE=c.prototype.readInt16BE
t.prototype.readInt32LE=c.prototype.readInt32LE
t.prototype.readInt32BE=c.prototype.readInt32BE
t.prototype.readFloatLE=c.prototype.readFloatLE
t.prototype.readFloatBE=c.prototype.readFloatBE
t.prototype.readDoubleLE=c.prototype.readDoubleLE
t.prototype.readDoubleBE=c.prototype.readDoubleBE
t.prototype.writeUInt8=c.prototype.writeUInt8
t.prototype.writeUInt16LE=c.prototype.writeUInt16LE
t.prototype.writeUInt16BE=c.prototype.writeUInt16BE
t.prototype.writeUInt32LE=c.prototype.writeUInt32LE
t.prototype.writeUInt32BE=c.prototype.writeUInt32BE
t.prototype.writeInt8=c.prototype.writeInt8
t.prototype.writeInt16LE=c.prototype.writeInt16LE
t.prototype.writeInt16BE=c.prototype.writeInt16BE
t.prototype.writeInt32LE=c.prototype.writeInt32LE
t.prototype.writeInt32BE=c.prototype.writeInt32BE
t.prototype.writeFloatLE=c.prototype.writeFloatLE
t.prototype.writeFloatBE=c.prototype.writeFloatBE
t.prototype.writeDoubleLE=c.prototype.writeDoubleLE
t.prototype.writeDoubleBE=c.prototype.writeDoubleBE})()},{assert:11,"./buffer_ieee754":13,"base64-js":14}],14:[function(e,t,n){(function(e){"use strict"
var n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"
function r(e){var t,r,i,a,s,o
if(e.length%4>0){throw"Invalid string. Length must be a multiple of 4"}s=e.indexOf("=")
s=s>0?e.length-s:0
o=[]
i=s>0?e.length-4:e.length
for(t=0,r=0;t<i;t+=4,r+=3){a=n.indexOf(e[t])<<18|n.indexOf(e[t+1])<<12|n.indexOf(e[t+2])<<6|n.indexOf(e[t+3])
o.push((a&16711680)>>16)
o.push((a&65280)>>8)
o.push(a&255)}if(s===2){a=n.indexOf(e[t])<<2|n.indexOf(e[t+1])>>4
o.push(a&255)}else if(s===1){a=n.indexOf(e[t])<<10|n.indexOf(e[t+1])<<4|n.indexOf(e[t+2])>>2
o.push(a>>8&255)
o.push(a&255)}return o}function i(e){var t,r=e.length%3,i="",a,s
function o(e){return n[e>>18&63]+n[e>>12&63]+n[e>>6&63]+n[e&63]}for(t=0,s=e.length-r;t<s;t+=3){a=(e[t]<<16)+(e[t+1]<<8)+e[t+2]
i+=o(a)}switch(r){case 1:a=e[e.length-1]
i+=n[a>>2]
i+=n[a<<4&63]
i+="=="
break
case 2:a=(e[e.length-2]<<8)+e[e.length-1]
i+=n[a>>10]
i+=n[a>>4&63]
i+=n[a<<2&63]
i+="="
break}return i}t.exports.toByteArray=r
t.exports.fromByteArray=i})()},{}]},{},["FD4Lxs"])
JSHINT=e("jshint").JSHINT})();(function(e,t){"use strict"
if(typeof define==="function"&&define.amd){define(["exports"],t)}else if(typeof exports!=="undefined"){t(exports)}else{t(e.esprima={})}})(this,function(e){"use strict"
var t,n,r,i,a,s,o,l,u,f,c,h,p,d,m,g,v,y
t={BooleanLiteral:1,EOF:2,Identifier:3,Keyword:4,NullLiteral:5,NumericLiteral:6,Punctuator:7,StringLiteral:8,RegularExpression:9}
n={}
n[t.BooleanLiteral]="Boolean"
n[t.EOF]="<end>"
n[t.Identifier]="Identifier"
n[t.Keyword]="Keyword"
n[t.NullLiteral]="Null"
n[t.NumericLiteral]="Numeric"
n[t.Punctuator]="Punctuator"
n[t.StringLiteral]="String"
n[t.RegularExpression]="RegularExpression"
r=["(","{","[","in","typeof","instanceof","new","return","case","delete","throw","void","=","+=","-=","*=","/=","%=","<<=",">>=",">>>=","&=","|=","^=",",","+","-","*","/","%","++","--","<<",">>",">>>","&","|","^","!","~","&&","||","?",":","===","==",">=","<=","<",">","!=","!=="]
i={AssignmentExpression:"AssignmentExpression",ArrayExpression:"ArrayExpression",BlockStatement:"BlockStatement",BinaryExpression:"BinaryExpression",BreakStatement:"BreakStatement",CallExpression:"CallExpression",CatchClause:"CatchClause",ConditionalExpression:"ConditionalExpression",ContinueStatement:"ContinueStatement",DoWhileStatement:"DoWhileStatement",DebuggerStatement:"DebuggerStatement",EmptyStatement:"EmptyStatement",ExpressionStatement:"ExpressionStatement",ForStatement:"ForStatement",ForInStatement:"ForInStatement",FunctionDeclaration:"FunctionDeclaration",FunctionExpression:"FunctionExpression",Identifier:"Identifier",IfStatement:"IfStatement",Literal:"Literal",LabeledStatement:"LabeledStatement",LogicalExpression:"LogicalExpression",MemberExpression:"MemberExpression",NewExpression:"NewExpression",ObjectExpression:"ObjectExpression",Program:"Program",Property:"Property",ReturnStatement:"ReturnStatement",SequenceExpression:"SequenceExpression",SwitchStatement:"SwitchStatement",SwitchCase:"SwitchCase",ThisExpression:"ThisExpression",ThrowStatement:"ThrowStatement",TryStatement:"TryStatement",UnaryExpression:"UnaryExpression",UpdateExpression:"UpdateExpression",VariableDeclaration:"VariableDeclaration",VariableDeclarator:"VariableDeclarator",WhileStatement:"WhileStatement",WithStatement:"WithStatement"}
a={Data:1,Get:2,Set:4}
s={UnexpectedToken:"Unexpected token %0",UnexpectedNumber:"Unexpected number",UnexpectedString:"Unexpected string",UnexpectedIdentifier:"Unexpected identifier",UnexpectedReserved:"Unexpected reserved word",UnexpectedEOS:"Unexpected end of input",NewlineAfterThrow:"Illegal newline after throw",InvalidRegExp:"Invalid regular expression",UnterminatedRegExp:"Invalid regular expression: missing /",InvalidLHSInAssignment:"Invalid left-hand side in assignment",InvalidLHSInForIn:"Invalid left-hand side in for-in",MultipleDefaultsInSwitch:"More than one default clause in switch statement",NoCatchOrFinally:"Missing catch or finally after try",UnknownLabel:"Undefined label '%0'",Redeclaration:"%0 '%1' has already been declared",IllegalContinue:"Illegal continue statement",IllegalBreak:"Illegal break statement",IllegalReturn:"Illegal return statement",StrictModeWith:"Strict mode code may not include a with statement",StrictCatchVariable:"Catch variable may not be eval or arguments in strict mode",StrictVarName:"Variable name may not be eval or arguments in strict mode",StrictParamName:"Parameter name eval or arguments is not allowed in strict mode",StrictParamDupe:"Strict mode function may not have duplicate parameter names",StrictFunctionName:"Function name may not be eval or arguments in strict mode",StrictOctalLiteral:"Octal literals are not allowed in strict mode.",StrictDelete:"Delete of an unqualified identifier in strict mode.",StrictDuplicateProperty:"Duplicate data property in object literal not allowed in strict mode",AccessorDataProperty:"Object literal may not have data and accessor property with the same name",AccessorGetSet:"Object literal may not have multiple get/set accessors with the same name",StrictLHSAssignment:"Assignment to eval or arguments is not allowed in strict mode",StrictLHSPostfix:"Postfix increment/decrement may not have eval or arguments operand in strict mode",StrictLHSPrefix:"Prefix increment/decrement may not have eval or arguments operand in strict mode",StrictReservedWord:"Use of future reserved word in strict mode"}
o={NonAsciiIdentifierStart:new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々-〇〡-〩〱-〵〸-〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]"),NonAsciiIdentifierPart:new RegExp("[ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮ̀-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁ҃-҇Ҋ-ԧԱ-Ֆՙա-և֑-ׇֽֿׁׂׅׄא-תװ-ײؐ-ؚؠ-٩ٮ-ۓە-ۜ۟-۪ۨ-ۼۿܐ-݊ݍ-ޱ߀-ߵߺࠀ-࠭ࡀ-࡛ࢠࢢ-ࢬࣤ-ࣾऀ-ॣ०-९ॱ-ॷॹ-ॿঁ-ঃঅ-ঌএঐও-নপ-রলশ-হ়-ৄেৈো-ৎৗড়ঢ়য়-ৣ০-ৱਁ-ਃਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹ਼ਾ-ੂੇੈੋ-੍ੑਖ਼-ੜਫ਼੦-ੵઁ-ઃઅ-ઍએ-ઑઓ-નપ-રલળવ-હ઼-ૅે-ૉો-્ૐૠ-ૣ૦-૯ଁ-ଃଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହ଼-ୄେୈୋ-୍ୖୗଡ଼ଢ଼ୟ-ୣ୦-୯ୱஂஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹா-ூெ-ைொ-்ௐௗ௦-௯ఁ-ఃఅ-ఌఎ-ఐఒ-నప-ళవ-హఽ-ౄె-ైొ-్ౕౖౘౙౠ-ౣ౦-౯ಂಃಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹ಼-ೄೆ-ೈೊ-್ೕೖೞೠ-ೣ೦-೯ೱೲംഃഅ-ഌഎ-ഐഒ-ഺഽ-ൄെ-ൈൊ-ൎൗൠ-ൣ൦-൯ൺ-ൿංඃඅ-ඖක-නඳ-රලව-ෆ්ා-ුූෘ-ෟෲෳก-ฺเ-๎๐-๙ກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ູົ-ຽເ-ໄໆ່-ໍ໐-໙ໜ-ໟༀ༘༙༠-༩༹༵༷༾-ཇཉ-ཬཱ-྄྆-ྗྙ-ྼ࿆က-၉ၐ-ႝႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚ፝-፟ᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛰᜀ-ᜌᜎ-᜔ᜠ-᜴ᝀ-ᝓᝠ-ᝬᝮ-ᝰᝲᝳក-៓ៗៜ៝០-៩᠋-᠍᠐-᠙ᠠ-ᡷᢀ-ᢪᢰ-ᣵᤀ-ᤜᤠ-ᤫᤰ-᤻᥆-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉ᧐-᧙ᨀ-ᨛᨠ-ᩞ᩠-᩿᩼-᪉᪐-᪙ᪧᬀ-ᭋ᭐-᭙᭫-᭳ᮀ-᯳ᰀ-᰷᱀-᱉ᱍ-ᱽ᳐-᳔᳒-ᳶᴀ-ᷦ᷼-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼ‌‍‿⁀⁔ⁱⁿₐ-ₜ⃐-⃥⃜⃡-⃰ℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯ⵿-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⷠ-ⷿⸯ々-〇〡-〯〱-〵〸-〼ぁ-ゖ゙゚ゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘫꙀ-꙯ꙴ-꙽ꙿ-ꚗꚟ-꛱ꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠧꡀ-ꡳꢀ-꣄꣐-꣙꣠-ꣷꣻ꤀-꤭ꤰ-꥓ꥠ-ꥼꦀ-꧀ꧏ-꧙ꨀ-ꨶꩀ-ꩍ꩐-꩙ꩠ-ꩶꩺꩻꪀ-ꫂꫛ-ꫝꫠ-ꫯꫲ-꫶ꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯪ꯬꯭꯰-꯹가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻ︀-️︠-︦︳︴﹍-﹏ﹰ-ﹴﹶ-ﻼ０-９Ａ-Ｚ＿ａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ]")}
function b(e,t){if(!e){throw new Error("ASSERT: "+t)}}function x(e){return e>=48&&e<=57}function k(e){return"0123456789abcdefABCDEF".indexOf(e)>=0}function E(e){return"01234567".indexOf(e)>=0}function w(e){return e===32||e===9||e===11||e===12||e===160||e>=5760&&" ᠎             　﻿".indexOf(String.fromCharCode(e))>0}function S(e){return e===10||e===13||e===8232||e===8233}function A(e){return e===36||e===95||e>=65&&e<=90||e>=97&&e<=122||e===92||e>=128&&o.NonAsciiIdentifierStart.test(String.fromCharCode(e))}function _(e){return e===36||e===95||e>=65&&e<=90||e>=97&&e<=122||e>=48&&e<=57||e===92||e>=128&&o.NonAsciiIdentifierPart.test(String.fromCharCode(e))}function T(e){switch(e){case"class":case"enum":case"export":case"extends":case"import":case"super":return true
default:return false}}function C(e){switch(e){case"implements":case"interface":case"package":case"private":case"protected":case"public":case"static":case"yield":case"let":return true
default:return false}}function L(e){return e==="eval"||e==="arguments"}function I(e){if(f&&C(e)){return true}switch(e.length){case 2:return e==="if"||e==="in"||e==="do"
case 3:return e==="var"||e==="for"||e==="new"||e==="try"||e==="let"
case 4:return e==="this"||e==="else"||e==="case"||e==="void"||e==="with"||e==="enum"
case 5:return e==="while"||e==="break"||e==="catch"||e==="throw"||e==="const"||e==="yield"||e==="class"||e==="super"
case 6:return e==="return"||e==="typeof"||e==="delete"||e==="switch"||e==="export"||e==="import"
case 7:return e==="default"||e==="finally"||e==="extends"
case 8:return e==="function"||e==="continue"||e==="debugger"
case 10:return e==="instanceof"
default:return false}}function P(e,t,n,r,i){var a
b(typeof n==="number","Comment must have valid position")
if(v.lastCommentStart>=n){return}v.lastCommentStart=n
a={type:e,value:t}
if(y.range){a.range=[n,r]}if(y.loc){a.loc=i}y.comments.push(a)}function R(){var e,t,n,r
e=c-2
t={start:{line:h,column:c-p-2}}
while(c<d){n=u.charCodeAt(c);++c
if(S(n)){if(y.comments){r=u.slice(e+2,c-1)
t.end={line:h,column:c-p-1}
P("Line",r,e,c-1,t)}if(n===13&&u.charCodeAt(c)===10){++c}++h
p=c
return}}if(y.comments){r=u.slice(e+2,c)
t.end={line:h,column:c-p}
P("Line",r,e,c,t)}}function O(){var e,t,n,r
if(y.comments){e=c-2
t={start:{line:h,column:c-p-2}}}while(c<d){n=u.charCodeAt(c)
if(S(n)){if(n===13&&u.charCodeAt(c+1)===10){++c}++h;++c
p=c
if(c>=d){et({},s.UnexpectedToken,"ILLEGAL")}}else if(n===42){if(u.charCodeAt(c+1)===47){++c;++c
if(y.comments){r=u.slice(e+2,c-2)
t.end={line:h,column:c-p}
P("Block",r,e,c,t)}return}++c}else{++c}}et({},s.UnexpectedToken,"ILLEGAL")}function M(){var e
while(c<d){e=u.charCodeAt(c)
if(w(e)){++c}else if(S(e)){++c
if(e===13&&u.charCodeAt(c)===10){++c}++h
p=c}else if(e===47){e=u.charCodeAt(c+1)
if(e===47){++c;++c
R()}else if(e===42){++c;++c
O()}else{break}}else{break}}}function N(e){var t,n,r,i=0
n=e==="u"?4:2
for(t=0;t<n;++t){if(c<d&&k(u[c])){r=u[c++]
i=i*16+"0123456789abcdef".indexOf(r.toLowerCase())}else{return""}}return String.fromCharCode(i)}function D(){var e,t
e=u.charCodeAt(c++)
t=String.fromCharCode(e)
if(e===92){if(u.charCodeAt(c)!==117){et({},s.UnexpectedToken,"ILLEGAL")}++c
e=N("u")
if(!e||e==="\\"||!A(e.charCodeAt(0))){et({},s.UnexpectedToken,"ILLEGAL")}t=e}while(c<d){e=u.charCodeAt(c)
if(!_(e)){break}++c
t+=String.fromCharCode(e)
if(e===92){t=t.substr(0,t.length-1)
if(u.charCodeAt(c)!==117){et({},s.UnexpectedToken,"ILLEGAL")}++c
e=N("u")
if(!e||e==="\\"||!_(e.charCodeAt(0))){et({},s.UnexpectedToken,"ILLEGAL")}t+=e}}return t}function W(){var e,t
e=c++
while(c<d){t=u.charCodeAt(c)
if(t===92){c=e
return D()}if(_(t)){++c}else{break}}return u.slice(e,c)}function F(){var e,n,r
e=c
n=u.charCodeAt(c)===92?D():W()
if(n.length===1){r=t.Identifier}else if(I(n)){r=t.Keyword}else if(n==="null"){r=t.NullLiteral}else if(n==="true"||n==="false"){r=t.BooleanLiteral}else{r=t.Identifier}return{type:r,value:n,lineNumber:h,lineStart:p,range:[e,c]}}function G(){var e=c,n=u.charCodeAt(c),r,i=u[c],a,o,l
switch(n){case 46:case 40:case 41:case 59:case 44:case 123:case 125:case 91:case 93:case 58:case 63:case 126:++c
if(y.tokenize){if(n===40){y.openParenToken=y.tokens.length}else if(n===123){y.openCurlyToken=y.tokens.length}}return{type:t.Punctuator,value:String.fromCharCode(n),lineNumber:h,lineStart:p,range:[e,c]}
default:r=u.charCodeAt(c+1)
if(r===61){switch(n){case 37:case 38:case 42:case 43:case 45:case 47:case 60:case 62:case 94:case 124:c+=2
return{type:t.Punctuator,value:String.fromCharCode(n)+String.fromCharCode(r),lineNumber:h,lineStart:p,range:[e,c]}
case 33:case 61:c+=2
if(u.charCodeAt(c)===61){++c}return{type:t.Punctuator,value:u.slice(e,c),lineNumber:h,lineStart:p,range:[e,c]}
default:break}}break}a=u[c+1]
o=u[c+2]
l=u[c+3]
if(i===">"&&a===">"&&o===">"){if(l==="="){c+=4
return{type:t.Punctuator,value:">>>=",lineNumber:h,lineStart:p,range:[e,c]}}}if(i===">"&&a===">"&&o===">"){c+=3
return{type:t.Punctuator,value:">>>",lineNumber:h,lineStart:p,range:[e,c]}}if(i==="<"&&a==="<"&&o==="="){c+=3
return{type:t.Punctuator,value:"<<=",lineNumber:h,lineStart:p,range:[e,c]}}if(i===">"&&a===">"&&o==="="){c+=3
return{type:t.Punctuator,value:">>=",lineNumber:h,lineStart:p,range:[e,c]}}if(i===a&&"+-<>&|".indexOf(i)>=0){c+=2
return{type:t.Punctuator,value:i+a,lineNumber:h,lineStart:p,range:[e,c]}}if("<>=!+-*%&|^/".indexOf(i)>=0){++c
return{type:t.Punctuator,value:i,lineNumber:h,lineStart:p,range:[e,c]}}et({},s.UnexpectedToken,"ILLEGAL")}function B(e){var n=""
while(c<d){if(!k(u[c])){break}n+=u[c++]}if(n.length===0){et({},s.UnexpectedToken,"ILLEGAL")}if(A(u.charCodeAt(c))){et({},s.UnexpectedToken,"ILLEGAL")}return{type:t.NumericLiteral,value:parseInt("0x"+n,16),lineNumber:h,lineStart:p,range:[e,c]}}function V(e){var n="0"+u[c++]
while(c<d){if(!E(u[c])){break}n+=u[c++]}if(A(u.charCodeAt(c))||x(u.charCodeAt(c))){et({},s.UnexpectedToken,"ILLEGAL")}return{type:t.NumericLiteral,value:parseInt(n,8),octal:true,lineNumber:h,lineStart:p,range:[e,c]}}function U(){var e,n,r
r=u[c]
b(x(r.charCodeAt(0))||r===".","Numeric literal must start with a decimal digit or a decimal point")
n=c
e=""
if(r!=="."){e=u[c++]
r=u[c]
if(e==="0"){if(r==="x"||r==="X"){++c
return B(n)}if(E(r)){return V(n)}if(r&&x(r.charCodeAt(0))){et({},s.UnexpectedToken,"ILLEGAL")}}while(x(u.charCodeAt(c))){e+=u[c++]}r=u[c]}if(r==="."){e+=u[c++]
while(x(u.charCodeAt(c))){e+=u[c++]}r=u[c]}if(r==="e"||r==="E"){e+=u[c++]
r=u[c]
if(r==="+"||r==="-"){e+=u[c++]}if(x(u.charCodeAt(c))){while(x(u.charCodeAt(c))){e+=u[c++]}}else{et({},s.UnexpectedToken,"ILLEGAL")}}if(A(u.charCodeAt(c))){et({},s.UnexpectedToken,"ILLEGAL")}return{type:t.NumericLiteral,value:parseFloat(e),lineNumber:h,lineStart:p,range:[n,c]}}function z(){var e="",n,r,i,a,o,l,f=false
n=u[c]
b(n==="'"||n==='"',"String literal must starts with a quote")
r=c;++c
while(c<d){i=u[c++]
if(i===n){n=""
break}else if(i==="\\"){i=u[c++]
if(!i||!S(i.charCodeAt(0))){switch(i){case"n":e+="\n"
break
case"r":e+="\r"
break
case"t":e+="	"
break
case"u":case"x":l=c
o=N(i)
if(o){e+=o}else{c=l
e+=i}break
case"b":e+="\b"
break
case"f":e+="\f"
break
case"v":e+=""
break
default:if(E(i)){a="01234567".indexOf(i)
if(a!==0){f=true}if(c<d&&E(u[c])){f=true
a=a*8+"01234567".indexOf(u[c++])
if("0123".indexOf(i)>=0&&c<d&&E(u[c])){a=a*8+"01234567".indexOf(u[c++])}}e+=String.fromCharCode(a)}else{e+=i}break}}else{++h
if(i==="\r"&&u[c]==="\n"){++c}}}else if(S(i.charCodeAt(0))){break}else{e+=i}}if(n!==""){et({},s.UnexpectedToken,"ILLEGAL")}return{type:t.StringLiteral,value:e,octal:f,lineNumber:h,lineStart:p,range:[r,c]}}function H(){var e,n,r,i,a,o,l=false,f,m=false
g=null
M()
r=c
n=u[c]
b(n==="/","Regular expression literal must start with a slash")
e=u[c++]
while(c<d){n=u[c++]
e+=n
if(l){if(n==="]"){l=false}}else{if(n==="\\"){n=u[c++]
if(S(n.charCodeAt(0))){et({},s.UnterminatedRegExp)}e+=n}else if(n==="/"){m=true
break}else if(n==="["){l=true}else if(S(n.charCodeAt(0))){et({},s.UnterminatedRegExp)}}}if(!m){et({},s.UnterminatedRegExp)}i=e.substr(1,e.length-2)
a=""
while(c<d){n=u[c]
if(!_(n.charCodeAt(0))){break}++c
if(n==="\\"&&c<d){n=u[c]
if(n==="u"){++c
f=c
n=N("u")
if(n){a+=n
for(e+="\\u";f<c;++f){e+=u[f]}}else{c=f
a+="u"
e+="\\u"}}else{e+="\\"}}else{a+=n
e+=n}}try{o=new RegExp(i,a)}catch(v){et({},s.InvalidRegExp)}J()
if(y.tokenize){return{type:t.RegularExpression,value:o,lineNumber:h,lineStart:p,range:[r,c]}}return{literal:e,value:o,range:[r,c]}}function j(){var e,t,n,r
M()
e=c
t={start:{line:h,column:c-p}}
n=H()
t.end={line:h,column:c-p}
if(!y.tokenize){if(y.tokens.length>0){r=y.tokens[y.tokens.length-1]
if(r.range[0]===e&&r.type==="Punctuator"){if(r.value==="/"||r.value==="/="){y.tokens.pop()}}}y.tokens.push({type:"RegularExpression",value:n.literal,range:[e,c],loc:t})}return n}function K(e){return e.type===t.Identifier||e.type===t.Keyword||e.type===t.BooleanLiteral||e.type===t.NullLiteral}function X(){var e,t
e=y.tokens[y.tokens.length-1]
if(!e){return j()}if(e.type==="Punctuator"){if(e.value===")"){t=y.tokens[y.openParenToken-1]
if(t&&t.type==="Keyword"&&(t.value==="if"||t.value==="while"||t.value==="for"||t.value==="with")){return j()}return G()}if(e.value==="}"){if(y.tokens[y.openCurlyToken-3]&&y.tokens[y.openCurlyToken-3].type==="Keyword"){t=y.tokens[y.openCurlyToken-4]
if(!t){return G()}}else if(y.tokens[y.openCurlyToken-4]&&y.tokens[y.openCurlyToken-4].type==="Keyword"){t=y.tokens[y.openCurlyToken-5]
if(!t){return j()}}else{return G()}if(r.indexOf(t.value)>=0){return G()}return j()}return j()}if(e.type==="Keyword"){return j()}return G()}function q(){var e
M()
if(c>=d){return{type:t.EOF,lineNumber:h,lineStart:p,range:[c,c]}}e=u.charCodeAt(c)
if(e===40||e===41||e===58){return G()}if(e===39||e===34){return z()}if(A(e)){return F()}if(e===46){if(x(u.charCodeAt(c+1))){return U()}return G()}if(x(e)){return U()}if(y.tokenize&&e===47){return X()}return G()}function Y(){var e,r,i,a,s
M()
e=c
r={start:{line:h,column:c-p}}
i=q()
r.end={line:h,column:c-p}
if(i.type!==t.EOF){a=[i.range[0],i.range[1]]
s=u.slice(i.range[0],i.range[1])
y.tokens.push({type:n[i.type],value:s,range:a,loc:r})}return i}function Z(){var e
e=g
c=e.range[1]
h=e.lineNumber
p=e.lineStart
g=typeof y.tokens!=="undefined"?Y():q()
c=e.range[1]
h=e.lineNumber
p=e.lineStart
return e}function J(){var e,t,n
e=c
t=h
n=p
g=typeof y.tokens!=="undefined"?Y():q()
c=e
h=t
p=n}l={name:"SyntaxTree",markStart:function(){if(y.loc){v.markerStack.push(c-p)
v.markerStack.push(h)}if(y.range){v.markerStack.push(c)}},markEnd:function(e){if(y.range){e.range=[v.markerStack.pop(),c]}if(y.loc){e.loc={start:{line:v.markerStack.pop(),column:v.markerStack.pop()},end:{line:h,column:c-p}}
this.postProcess(e)}return e},markEndIf:function(e){if(e.range||e.loc){if(y.loc){v.markerStack.pop()
v.markerStack.pop()}if(y.range){v.markerStack.pop()}}else{this.markEnd(e)}return e},postProcess:function(e){if(y.source){e.loc.source=y.source}return e},createArrayExpression:function(e){return{type:i.ArrayExpression,elements:e}},createAssignmentExpression:function(e,t,n){return{type:i.AssignmentExpression,operator:e,left:t,right:n}},createBinaryExpression:function(e,t,n){var r=e==="||"||e==="&&"?i.LogicalExpression:i.BinaryExpression
return{type:r,operator:e,left:t,right:n}},createBlockStatement:function(e){return{type:i.BlockStatement,body:e}},createBreakStatement:function(e){return{type:i.BreakStatement,label:e}},createCallExpression:function(e,t){return{type:i.CallExpression,callee:e,arguments:t}},createCatchClause:function(e,t){return{type:i.CatchClause,param:e,body:t}},createConditionalExpression:function(e,t,n){return{type:i.ConditionalExpression,test:e,consequent:t,alternate:n}},createContinueStatement:function(e){return{type:i.ContinueStatement,label:e}},createDebuggerStatement:function(){return{type:i.DebuggerStatement}},createDoWhileStatement:function(e,t){return{type:i.DoWhileStatement,body:e,test:t}},createEmptyStatement:function(){return{type:i.EmptyStatement}},createExpressionStatement:function(e){return{type:i.ExpressionStatement,expression:e}},createForStatement:function(e,t,n,r){return{type:i.ForStatement,init:e,test:t,update:n,body:r}},createForInStatement:function(e,t,n){return{type:i.ForInStatement,left:e,right:t,body:n,each:false}},createFunctionDeclaration:function(e,t,n,r){return{type:i.FunctionDeclaration,id:e,params:t,defaults:n,body:r,rest:null,generator:false,expression:false}},createFunctionExpression:function(e,t,n,r){return{type:i.FunctionExpression,id:e,params:t,defaults:n,body:r,rest:null,generator:false,expression:false}},createIdentifier:function(e){return{type:i.Identifier,name:e}},createIfStatement:function(e,t,n){return{type:i.IfStatement,test:e,consequent:t,alternate:n}},createLabeledStatement:function(e,t){return{type:i.LabeledStatement,label:e,body:t}},createLiteral:function(e){return{type:i.Literal,value:e.value,raw:u.slice(e.range[0],e.range[1])}},createMemberExpression:function(e,t,n){return{type:i.MemberExpression,computed:e==="[",object:t,property:n}},createNewExpression:function(e,t){return{type:i.NewExpression,callee:e,arguments:t}},createObjectExpression:function(e){return{type:i.ObjectExpression,properties:e}},createPostfixExpression:function(e,t){return{type:i.UpdateExpression,operator:e,argument:t,prefix:false}},createProgram:function(e){return{type:i.Program,body:e}},createProperty:function(e,t,n){return{type:i.Property,key:t,value:n,kind:e}},createReturnStatement:function(e){return{type:i.ReturnStatement,argument:e}},createSequenceExpression:function(e){return{type:i.SequenceExpression,expressions:e}},createSwitchCase:function(e,t){return{type:i.SwitchCase,test:e,consequent:t}},createSwitchStatement:function(e,t){return{type:i.SwitchStatement,discriminant:e,cases:t}},createThisExpression:function(){return{type:i.ThisExpression}},createThrowStatement:function(e){return{type:i.ThrowStatement,argument:e}},createTryStatement:function(e,t,n,r){return{type:i.TryStatement,block:e,guardedHandlers:t,handlers:n,finalizer:r}},createUnaryExpression:function(e,t){if(e==="++"||e==="--"){return{type:i.UpdateExpression,operator:e,argument:t,prefix:true}}return{type:i.UnaryExpression,operator:e,argument:t,prefix:true}},createVariableDeclaration:function(e,t){return{type:i.VariableDeclaration,declarations:e,kind:t}},createVariableDeclarator:function(e,t){return{type:i.VariableDeclarator,id:e,init:t}},createWhileStatement:function(e,t){return{type:i.WhileStatement,test:e,body:t}},createWithStatement:function(e,t){return{type:i.WithStatement,object:e,body:t}}}
function Q(){var e,t,n,r
e=c
t=h
n=p
M()
r=h!==t
c=e
h=t
p=n
return r}function et(e,t){var n,r=Array.prototype.slice.call(arguments,2),i=t.replace(/%(\d)/g,function(e,t){b(t<r.length,"Message reference must be in range")
return r[t]})
if(typeof e.lineNumber==="number"){n=new Error("Line "+e.lineNumber+": "+i)
n.index=e.range[0]
n.lineNumber=e.lineNumber
n.column=e.range[0]-p+1}else{n=new Error("Line "+h+": "+i)
n.index=c
n.lineNumber=h
n.column=c-p+1}n.description=i
throw n}function tt(){try{et.apply(null,arguments)}catch(e){if(y.errors){y.errors.push(e)}else{throw e}}}function nt(e){if(e.type===t.EOF){et(e,s.UnexpectedEOS)}if(e.type===t.NumericLiteral){et(e,s.UnexpectedNumber)}if(e.type===t.StringLiteral){et(e,s.UnexpectedString)}if(e.type===t.Identifier){et(e,s.UnexpectedIdentifier)}if(e.type===t.Keyword){if(T(e.value)){et(e,s.UnexpectedReserved)}else if(f&&C(e.value)){tt(e,s.StrictReservedWord)
return}et(e,s.UnexpectedToken,e.value)}et(e,s.UnexpectedToken,e.value)}function rt(e){var n=Z()
if(n.type!==t.Punctuator||n.value!==e){nt(n)}}function it(e){var n=Z()
if(n.type!==t.Keyword||n.value!==e){nt(n)}}function at(e){return g.type===t.Punctuator&&g.value===e}function st(e){return g.type===t.Keyword&&g.value===e}function ot(){var e
if(g.type!==t.Punctuator){return false}e=g.value
return e==="="||e==="*="||e==="/="||e==="%="||e==="+="||e==="-="||e==="<<="||e===">>="||e===">>>="||e==="&="||e==="^="||e==="|="}function lt(){var e
if(u.charCodeAt(c)===59){Z()
return}e=h
M()
if(h!==e){return}if(at(";")){Z()
return}if(g.type!==t.EOF&&!at("}")){nt(g)}}function ut(e){return e.type===i.Identifier||e.type===i.MemberExpression}function ft(){var e=[]
rt("[")
while(!at("]")){if(at(",")){Z()
e.push(null)}else{e.push(Lt())
if(!at("]")){rt(",")}}}rt("]")
return m.createArrayExpression(e)}function ct(e,t){var n,r
n=f
M()
m.markStart()
r=nn()
if(t&&f&&L(e[0].name)){tt(t,s.StrictParamName)}f=n
return m.markEnd(m.createFunctionExpression(null,e,[],r))}function ht(){var e
M()
m.markStart()
e=Z()
if(e.type===t.StringLiteral||e.type===t.NumericLiteral){if(f&&e.octal){tt(e,s.StrictOctalLiteral)}return m.markEnd(m.createLiteral(e))}return m.markEnd(m.createIdentifier(e.value))}function pt(){var e,n,r,i,a
e=g
M()
m.markStart()
if(e.type===t.Identifier){r=ht()
if(e.value==="get"&&!at(":")){n=ht()
rt("(")
rt(")")
i=ct([])
return m.markEnd(m.createProperty("get",n,i))}if(e.value==="set"&&!at(":")){n=ht()
rt("(")
e=g
if(e.type!==t.Identifier){rt(")")
tt(e,s.UnexpectedToken,e.value)
i=ct([])}else{a=[Ot()]
rt(")")
i=ct(a,e)}return m.markEnd(m.createProperty("set",n,i))}rt(":")
i=Lt()
return m.markEnd(m.createProperty("init",r,i))}if(e.type===t.EOF||e.type===t.Punctuator){nt(e)}else{n=ht()
rt(":")
i=Lt()
return m.markEnd(m.createProperty("init",n,i))}}function dt(){var e=[],t,n,r,o,l={},u=String
rt("{")
while(!at("}")){t=pt()
if(t.key.type===i.Identifier){n=t.key.name}else{n=u(t.key.value)}o=t.kind==="init"?a.Data:t.kind==="get"?a.Get:a.Set
r="$"+n
if(Object.prototype.hasOwnProperty.call(l,r)){if(l[r]===a.Data){if(f&&o===a.Data){tt({},s.StrictDuplicateProperty)}else if(o!==a.Data){tt({},s.AccessorDataProperty)}}else{if(o===a.Data){tt({},s.AccessorDataProperty)}else if(l[r]&o){tt({},s.AccessorGetSet)}}l[r]|=o}else{l[r]=o}e.push(t)
if(!at("}")){rt(",")}}rt("}")
return m.createObjectExpression(e)}function mt(){var e
rt("(")
e=It()
rt(")")
return e}function gt(){var e,n,r
if(at("(")){return mt()}e=g.type
m.markStart()
if(e===t.Identifier){r=m.createIdentifier(Z().value)}else if(e===t.StringLiteral||e===t.NumericLiteral){if(f&&g.octal){tt(g,s.StrictOctalLiteral)}r=m.createLiteral(Z())}else if(e===t.Keyword){if(st("this")){Z()
r=m.createThisExpression()}else if(st("function")){r=sn()}}else if(e===t.BooleanLiteral){n=Z()
n.value=n.value==="true"
r=m.createLiteral(n)}else if(e===t.NullLiteral){n=Z()
n.value=null
r=m.createLiteral(n)}else if(at("[")){r=ft()}else if(at("{")){r=dt()}else if(at("/")||at("/=")){if(typeof y.tokens!=="undefined"){r=m.createLiteral(j())}else{r=m.createLiteral(H())}}if(r){return m.markEnd(r)}nt(Z())}function vt(){var e=[]
rt("(")
if(!at(")")){while(c<d){e.push(Lt())
if(at(")")){break}rt(",")}}rt(")")
return e}function yt(){var e
m.markStart()
e=Z()
if(!K(e)){nt(e)}return m.markEnd(m.createIdentifier(e.value))}function bt(){rt(".")
return yt()}function xt(){var e
rt("[")
e=It()
rt("]")
return e}function kt(){var e,t
m.markStart()
it("new")
e=wt()
t=at("(")?vt():[]
return m.markEnd(m.createNewExpression(e,t))}function Et(){var e,t,n,r
e=hn()
t=st("new")?kt():gt()
while(at(".")||at("[")||at("(")){if(at("(")){n=vt()
t=m.createCallExpression(t,n)}else if(at("[")){r=xt()
t=m.createMemberExpression("[",t,r)}else{r=bt()
t=m.createMemberExpression(".",t,r)}if(e){e.end()
e.apply(t)}}return t}function wt(){var e,t,n
e=hn()
t=st("new")?kt():gt()
while(at(".")||at("[")){if(at("[")){n=xt()
t=m.createMemberExpression("[",t,n)}else{n=bt()
t=m.createMemberExpression(".",t,n)}if(e){e.end()
e.apply(t)}}return t}function St(){var e,n
m.markStart()
e=Et()
if(g.type===t.Punctuator){if((at("++")||at("--"))&&!Q()){if(f&&e.type===i.Identifier&&L(e.name)){tt({},s.StrictLHSPostfix)}if(!ut(e)){et({},s.InvalidLHSInAssignment)}n=Z()
e=m.createPostfixExpression(n.value,e)}}return m.markEndIf(e)}function At(){var e,n
m.markStart()
if(g.type!==t.Punctuator&&g.type!==t.Keyword){n=St()}else if(at("++")||at("--")){e=Z()
n=At()
if(f&&n.type===i.Identifier&&L(n.name)){tt({},s.StrictLHSPrefix)}if(!ut(n)){et({},s.InvalidLHSInAssignment)}n=m.createUnaryExpression(e.value,n)}else if(at("+")||at("-")||at("~")||at("!")){e=Z()
n=At()
n=m.createUnaryExpression(e.value,n)}else if(st("delete")||st("void")||st("typeof")){e=Z()
n=At()
n=m.createUnaryExpression(e.value,n)
if(f&&n.operator==="delete"&&n.argument.type===i.Identifier){tt({},s.StrictDelete)}}else{n=St()}return m.markEndIf(n)}function _t(e,n){var r=0
if(e.type!==t.Punctuator&&e.type!==t.Keyword){return 0}switch(e.value){case"||":r=1
break
case"&&":r=2
break
case"|":r=3
break
case"^":r=4
break
case"&":r=5
break
case"==":case"!=":case"===":case"!==":r=6
break
case"<":case">":case"<=":case">=":case"instanceof":r=7
break
case"in":r=n?7:0
break
case"<<":case">>":case">>>":r=8
break
case"+":case"-":r=9
break
case"*":case"/":case"%":r=11
break
default:break}return r}function Tt(){var e,t,n,r,i,a,s,o,l,u,f
a=v.allowIn
v.allowIn=true
e=hn()
u=At()
r=g
i=_t(r,a)
if(i===0){return u}r.prec=i
Z()
t=[e,hn()]
o=At()
s=[u,r,o]
while((i=_t(g,a))>0){while(s.length>2&&i<=s[s.length-2].prec){o=s.pop()
l=s.pop().value
u=s.pop()
n=m.createBinaryExpression(l,u,o)
t.pop()
e=t.pop()
if(e){e.end()
e.apply(n)}s.push(n)
t.push(e)}r=Z()
r.prec=i
s.push(r)
t.push(hn())
n=At()
s.push(n)}v.allowIn=a
f=s.length-1
n=s[f]
t.pop()
while(f>1){n=m.createBinaryExpression(s[f-1].value,s[f-2],n)
f-=2
e=t.pop()
if(e){e.end()
e.apply(n)}}return n}function Ct(){var e,t,n,r
m.markStart()
e=Tt()
if(at("?")){Z()
t=v.allowIn
v.allowIn=true
n=Lt()
v.allowIn=t
rt(":")
r=Lt()
e=m.markEnd(m.createConditionalExpression(e,n,r))}else{m.markEnd({})}return e}function Lt(){var e,t,n,r
e=g
m.markStart()
r=t=Ct()
if(ot()){if(!ut(t)){et({},s.InvalidLHSInAssignment)}if(f&&t.type===i.Identifier&&L(t.name)){tt(e,s.StrictLHSAssignment)}e=Z()
n=Lt()
r=m.createAssignmentExpression(e.value,t,n)}return m.markEndIf(r)}function It(){var e
m.markStart()
e=Lt()
if(at(",")){e=m.createSequenceExpression([e])
while(c<d){if(!at(",")){break}Z()
e.expressions.push(Lt())}}return m.markEndIf(e)}function Pt(){var e=[],t
while(c<d){if(at("}")){break}t=on()
if(typeof t==="undefined"){break}e.push(t)}return e}function Rt(){var e
M()
m.markStart()
rt("{")
e=Pt()
rt("}")
return m.markEnd(m.createBlockStatement(e))}function Ot(){var e
M()
m.markStart()
e=Z()
if(e.type!==t.Identifier){nt(e)}return m.markEnd(m.createIdentifier(e.value))}function Mt(e){var t=null,n
M()
m.markStart()
n=Ot()
if(f&&L(n.name)){tt({},s.StrictVarName)}if(e==="const"){rt("=")
t=Lt()}else if(at("=")){Z()
t=Lt()}return m.markEnd(m.createVariableDeclarator(n,t))}function Nt(e){var t=[]
do{t.push(Mt(e))
if(!at(",")){break}Z()}while(c<d)
return t}function Dt(){var e
it("var")
e=Nt()
lt()
return m.createVariableDeclaration(e,"var")}function Wt(e){var t
M()
m.markStart()
it(e)
t=Nt(e)
lt()
return m.markEnd(m.createVariableDeclaration(t,e))}function Ft(){rt(";")
return m.createEmptyStatement()}function Gt(){var e=It()
lt()
return m.createExpressionStatement(e)}function Bt(){var e,t,n
it("if")
rt("(")
e=It()
rt(")")
t=tn()
if(st("else")){Z()
n=tn()}else{n=null}return m.createIfStatement(e,t,n)}function Vt(){var e,t,n
it("do")
n=v.inIteration
v.inIteration=true
e=tn()
v.inIteration=n
it("while")
rt("(")
t=It()
rt(")")
if(at(";")){Z()}return m.createDoWhileStatement(e,t)}function Ut(){var e,t,n
it("while")
rt("(")
e=It()
rt(")")
n=v.inIteration
v.inIteration=true
t=tn()
v.inIteration=n
return m.createWhileStatement(e,t)}function $t(){var e,t
m.markStart()
e=Z()
t=Nt()
return m.markEnd(m.createVariableDeclaration(t,e.value))}function zt(){var e,t,n,r,i,a,o
e=t=n=null
it("for")
rt("(")
if(at(";")){Z()}else{if(st("var")||st("let")){v.allowIn=false
e=$t()
v.allowIn=true
if(e.declarations.length===1&&st("in")){Z()
r=e
i=It()
e=null}}else{v.allowIn=false
e=It()
v.allowIn=true
if(st("in")){if(!ut(e)){et({},s.InvalidLHSInForIn)}Z()
r=e
i=It()
e=null}}if(typeof r==="undefined"){rt(";")}}if(typeof r==="undefined"){if(!at(";")){t=It()}rt(";")
if(!at(")")){n=It()}}rt(")")
o=v.inIteration
v.inIteration=true
a=tn()
v.inIteration=o
return typeof r==="undefined"?m.createForStatement(e,t,n,a):m.createForInStatement(r,i,a)}function Ht(){var e=null,n
it("continue")
if(u.charCodeAt(c)===59){Z()
if(!v.inIteration){et({},s.IllegalContinue)}return m.createContinueStatement(null)}if(Q()){if(!v.inIteration){et({},s.IllegalContinue)}return m.createContinueStatement(null)}if(g.type===t.Identifier){e=Ot()
n="$"+e.name
if(!Object.prototype.hasOwnProperty.call(v.labelSet,n)){et({},s.UnknownLabel,e.name)}}lt()
if(e===null&&!v.inIteration){et({},s.IllegalContinue)}return m.createContinueStatement(e)}function jt(){var e=null,n
it("break")
if(u.charCodeAt(c)===59){Z()
if(!(v.inIteration||v.inSwitch)){et({},s.IllegalBreak)}return m.createBreakStatement(null)}if(Q()){if(!(v.inIteration||v.inSwitch)){et({},s.IllegalBreak)}return m.createBreakStatement(null)}if(g.type===t.Identifier){e=Ot()
n="$"+e.name
if(!Object.prototype.hasOwnProperty.call(v.labelSet,n)){et({},s.UnknownLabel,e.name)}}lt()
if(e===null&&!(v.inIteration||v.inSwitch)){et({},s.IllegalBreak)}return m.createBreakStatement(e)}function Kt(){var e=null
it("return")
if(!v.inFunctionBody){tt({},s.IllegalReturn)}if(u.charCodeAt(c)===32){if(A(u.charCodeAt(c+1))){e=It()
lt()
return m.createReturnStatement(e)}}if(Q()){return m.createReturnStatement(null)}if(!at(";")){if(!at("}")&&g.type!==t.EOF){e=It()}}lt()
return m.createReturnStatement(e)}function Xt(){var e,t
if(f){tt({},s.StrictModeWith)}it("with")
rt("(")
e=It()
rt(")")
t=tn()
return m.createWithStatement(e,t)}function qt(){var e,t=[],n
M()
m.markStart()
if(st("default")){Z()
e=null}else{it("case")
e=It()}rt(":")
while(c<d){if(at("}")||st("default")||st("case")){break}n=tn()
t.push(n)}return m.markEnd(m.createSwitchCase(e,t))}function Yt(){var e,t,n,r,i
it("switch")
rt("(")
e=It()
rt(")")
rt("{")
if(at("}")){Z()
return m.createSwitchStatement(e)}t=[]
r=v.inSwitch
v.inSwitch=true
i=false
while(c<d){if(at("}")){break}n=qt()
if(n.test===null){if(i){et({},s.MultipleDefaultsInSwitch)}i=true}t.push(n)}v.inSwitch=r
rt("}")
return m.createSwitchStatement(e,t)}function Zt(){var e
it("throw")
if(Q()){et({},s.NewlineAfterThrow)}e=It()
lt()
return m.createThrowStatement(e)}function Jt(){var e,t
M()
m.markStart()
it("catch")
rt("(")
if(at(")")){nt(g)}e=Ot()
if(f&&L(e.name)){tt({},s.StrictCatchVariable)}rt(")")
t=Rt()
return m.markEnd(m.createCatchClause(e,t))}function Qt(){var e,t=[],n=null
it("try")
e=Rt()
if(st("catch")){t.push(Jt())}if(st("finally")){Z()
n=Rt()}if(t.length===0&&!n){et({},s.NoCatchOrFinally)}return m.createTryStatement(e,[],t,n)}function en(){it("debugger")
lt()
return m.createDebuggerStatement()}function tn(){var e=g.type,n,r,a
if(e===t.EOF){nt(g)}M()
m.markStart()
if(e===t.Punctuator){switch(g.value){case";":return m.markEnd(Ft())
case"{":return m.markEnd(Rt())
case"(":return m.markEnd(Gt())
default:break}}if(e===t.Keyword){switch(g.value){case"break":return m.markEnd(jt())
case"continue":return m.markEnd(Ht())
case"debugger":return m.markEnd(en())
case"do":return m.markEnd(Vt())
case"for":return m.markEnd(zt())
case"function":return m.markEnd(an())
case"if":return m.markEnd(Bt())
case"return":return m.markEnd(Kt())
case"switch":return m.markEnd(Yt())
case"throw":return m.markEnd(Zt())
case"try":return m.markEnd(Qt())
case"var":return m.markEnd(Dt())
case"while":return m.markEnd(Ut())
case"with":return m.markEnd(Xt())
default:break}}n=It()
if(n.type===i.Identifier&&at(":")){Z()
a="$"+n.name
if(Object.prototype.hasOwnProperty.call(v.labelSet,a)){et({},s.Redeclaration,"Label",n.name)}v.labelSet[a]=true
r=tn()
delete v.labelSet[a]
return m.markEnd(m.createLabeledStatement(n,r))}lt()
return m.markEnd(m.createExpressionStatement(n))}function nn(){var e,n=[],r,a,o,l,h,p,y
M()
m.markStart()
rt("{")
while(c<d){if(g.type!==t.StringLiteral){break}r=g
e=on()
n.push(e)
if(e.expression.type!==i.Literal){break}a=u.slice(r.range[0]+1,r.range[1]-1)
if(a==="use strict"){f=true
if(o){tt(o,s.StrictOctalLiteral)}}else{if(!o&&r.octal){o=r}}}l=v.labelSet
h=v.inIteration
p=v.inSwitch
y=v.inFunctionBody
v.labelSet={}
v.inIteration=false
v.inSwitch=false
v.inFunctionBody=true
while(c<d){if(at("}")){break}e=on()
if(typeof e==="undefined"){break}n.push(e)}rt("}")
v.labelSet=l
v.inIteration=h
v.inSwitch=p
v.inFunctionBody=y
return m.markEnd(m.createBlockStatement(n))}function rn(e){var t,n=[],r,i,a,o,l
rt("(")
if(!at(")")){a={}
while(c<d){r=g
t=Ot()
o="$"+r.value
if(f){if(L(r.value)){i=r
l=s.StrictParamName}if(Object.prototype.hasOwnProperty.call(a,o)){i=r
l=s.StrictParamDupe}}else if(!e){if(L(r.value)){e=r
l=s.StrictParamName}else if(C(r.value)){e=r
l=s.StrictReservedWord}else if(Object.prototype.hasOwnProperty.call(a,o)){e=r
l=s.StrictParamDupe}}n.push(t)
a[o]=true
if(at(")")){break}rt(",")}}rt(")")
return{params:n,stricted:i,firstRestricted:e,message:l}}function an(){var e,t=[],n,r,i,a,o,l,u
M()
m.markStart()
it("function")
r=g
e=Ot()
if(f){if(L(r.value)){tt(r,s.StrictFunctionName)}}else{if(L(r.value)){o=r
l=s.StrictFunctionName}else if(C(r.value)){o=r
l=s.StrictReservedWord}}a=rn(o)
t=a.params
i=a.stricted
o=a.firstRestricted
if(a.message){l=a.message}u=f
n=nn()
if(f&&o){et(o,l)}if(f&&i){tt(i,l)}f=u
return m.markEnd(m.createFunctionDeclaration(e,t,[],n))}function sn(){var e,t=null,n,r,i,a,o=[],l,u
m.markStart()
it("function")
if(!at("(")){e=g
t=Ot()
if(f){if(L(e.value)){tt(e,s.StrictFunctionName)}}else{if(L(e.value)){r=e
i=s.StrictFunctionName}else if(C(e.value)){r=e
i=s.StrictReservedWord}}}a=rn(r)
o=a.params
n=a.stricted
r=a.firstRestricted
if(a.message){i=a.message}u=f
l=nn()
if(f&&r){et(r,i)}if(f&&n){tt(n,i)}f=u
return m.markEnd(m.createFunctionExpression(t,o,[],l))}function on(){if(g.type===t.Keyword){switch(g.value){case"const":case"let":return Wt(g.value)
case"function":return an()
default:return tn()}}if(g.type!==t.EOF){return tn()}}function ln(){var e,n=[],r,a,o
while(c<d){r=g
if(r.type!==t.StringLiteral){break}e=on()
n.push(e)
if(e.expression.type!==i.Literal){break}a=u.slice(r.range[0]+1,r.range[1]-1)
if(a==="use strict"){f=true
if(o){tt(o,s.StrictOctalLiteral)}}else{if(!o&&r.octal){o=r}}}while(c<d){e=on()
if(typeof e==="undefined"){break}n.push(e)}return n}function un(){var e
M()
m.markStart()
f=false
J()
e=ln()
return m.markEnd(m.createProgram(e))}function fn(){var e,t,n,r=[]
for(e=0;e<y.tokens.length;++e){t=y.tokens[e]
n={type:t.type,value:t.value}
if(y.range){n.range=t.range}if(y.loc){n.loc=t.loc}r.push(n)}y.tokens=r}function cn(){this.marker=[c,h,c-p,0,0,0]}cn.prototype={constructor:cn,end:function(){this.marker[3]=c
this.marker[4]=h
this.marker[5]=c-p},apply:function(e){if(y.range){e.range=[this.marker[0],this.marker[3]]}if(y.loc){e.loc={start:{line:this.marker[1],column:this.marker[2]},end:{line:this.marker[4],column:this.marker[5]}}}e=m.postProcess(e)}}
function hn(){if(!y.loc&&!y.range){return null}M()
return new cn}function pn(e,n){var r,i,a
r=String
if(typeof e!=="string"&&!(e instanceof String)){e=r(e)}m=l
u=e
c=0
h=u.length>0?1:0
p=0
d=u.length
g=null
v={allowIn:true,labelSet:{},inFunctionBody:false,inIteration:false,inSwitch:false,lastCommentStart:-1}
y={}
n=n||{}
n.tokens=true
y.tokens=[]
y.tokenize=true
y.openParenToken=-1
y.openCurlyToken=-1
y.range=typeof n.range==="boolean"&&n.range
y.loc=typeof n.loc==="boolean"&&n.loc
if(typeof n.comment==="boolean"&&n.comment){y.comments=[]}if(typeof n.tolerant==="boolean"&&n.tolerant){y.errors=[]}if(d>0){if(typeof u[0]==="undefined"){if(e instanceof String){u=e.valueOf()}}}try{J()
if(g.type===t.EOF){return y.tokens}i=Z()
while(g.type!==t.EOF){try{i=Z()}catch(s){i=g
if(y.errors){y.errors.push(s)
break}else{throw s}}}fn()
a=y.tokens
if(typeof y.comments!=="undefined"){a.comments=y.comments}if(typeof y.errors!=="undefined"){a.errors=y.errors}}catch(o){throw o}finally{y={}}return a}function dn(e,t){var n,r
r=String
if(typeof e!=="string"&&!(e instanceof String)){e=r(e)}m=l
u=e
c=0
h=u.length>0?1:0
p=0
d=u.length
g=null
v={allowIn:true,labelSet:{},inFunctionBody:false,inIteration:false,inSwitch:false,lastCommentStart:-1,markerStack:[]}
y={}
if(typeof t!=="undefined"){y.range=typeof t.range==="boolean"&&t.range
y.loc=typeof t.loc==="boolean"&&t.loc
if(y.loc&&t.source!==null&&t.source!==undefined){y.source=r(t.source)}if(typeof t.tokens==="boolean"&&t.tokens){y.tokens=[]}if(typeof t.comment==="boolean"&&t.comment){y.comments=[]}if(typeof t.tolerant==="boolean"&&t.tolerant){y.errors=[]}}if(d>0){if(typeof u[0]==="undefined"){if(e instanceof String){u=e.valueOf()}}}try{n=un()
if(typeof y.comments!=="undefined"){n.comments=y.comments}if(typeof y.tokens!=="undefined"){fn()
n.tokens=y.tokens}if(typeof y.errors!=="undefined"){n.errors=y.errors}}catch(i){throw i}finally{y={}}return n}e.version="1.1.0-dev"
e.tokenize=pn
e.parse=dn
e.Syntax=function(){var e,t={}
if(typeof Object.create==="function"){t=Object.create(null)}for(e in i){if(i.hasOwnProperty(e)){t[e]=i[e]}}if(typeof Object.freeze==="function"){Object.freeze(t)}return t}()});(function(e){var t
var n
var r
var i={}
var a
var s
if(typeof module!=="undefined"&&module.exports){t=module.exports={}
n=require("esprima")
r=require("underscore")}else{t=this.Structured={}
n=e.esprima
r=e._}if(!n||!r){throw"Error: Both Esprima and UnderscoreJS are required dependencies."}function o(e){var t=/^function [^\(]*\(([^\)]*)\)/.exec(e)[1]
var n=t.match(/[$_a-zA-z0-9]+/g)
for(var r in n){if(n[r][0]!=="$"){console.warn("Invalid parameter in constraint (should begin with a '$'): ",n[r])
return null}}return{variables:n,fn:e}}var l
function u(e,t,i){i=i||{}
var u=i.varCallbacks||[]
l=u
if(u instanceof Function||u.fn&&u.variables){u=[u]}if(u instanceof Array){for(var c in u){if(u[c]instanceof Function){u[c]=o(u[c])}}}else{var d=[]
for(var m in u){if(u.hasOwnProperty(m)&&m!=="failure"){d.push({variables:m.match(/[$_a-zA-z0-9]+/g),fn:u[m]})}}u=d}var g={order:[],skipData:{},values:{}}
var v=h(t,g)
var b=a===e?s:typeof e==="object"?w(e):n.parse(e)
a=e
s=b
p(b)
var x=v.body||v
var k=[]
if(r.isArray(v.body)){x=v.body[0]
k=v.body.slice(1)}var E
var S={_:[],vars:{}}
if(g.order.length===0||i.single){E=y(b,x,k,g,S,i)}else{E=A(0,g,u,S,i)}return E
function A(e,t,n,i,a){var s=t.order
t.skipData[s[e]]=0
do{for(var o=e+1;o<s.length;o+=1){t.skipData[s[o]]=0}if(e===s.length-1){r.each(t.values,function(e,n){r.each(t.values[n],function(e,r){delete t.values[n][r]})})
t.leftToSkip=r.extend({},t.skipData)
if(y(b,x,k.slice(),t,i,a)&&f(t,n)){return i}}else if(A(e+1,t,n,i,a)){return i}t.skipData[s[e]]+=1}while(!r.isEmpty(t.values[s[e]]))
return false}}function f(e,t){delete l.failure
for(var n in t){var i=t[n].variables
var a=r.map(i,function(t){t=o(t)
if(!r.has(e.values,t)){console.error("Callback var "+t+" doesn't exist")
return undefined}return w(e.values[t])})
var s=t[n].fn.apply(null,a)
if(!s||r.has(s,"failure")){if(r.has(s,"failure")){l.failure=s.failure}return false}}return true
function o(e){if(String.prototype.trim){return e.trim()}return e.replace(/^\s+|\s+$/g,"")}}function c(e){if(typeof e==="object"){return w(e)}if(i[e]){return JSON.parse(i[e])}var t=n.parse("("+e+")")
if(t.body[0].expression.type!=="FunctionExpression"||!t.body[0].expression.body){throw"Poorly formatted structure code"}var r=t.body[0].expression.body
i[e]=JSON.stringify(r)
return r}function h(e,t){var n=c(e)
p(n)
d(n,t)
return n}function p(e){for(var t in e){if(!e.hasOwnProperty(t)){continue}var i=e[t]
if(r.isObject(i)){p(i)
if(i.type==n.Syntax.UnaryExpression){var a=i.argument
if(a.type===n.Syntax.Literal&&r.isNumber(a.value)){if(i.operator==="-"){a.value=-a.value
e[t]=a}else if(i.operator==="+"){a.value=+a.value
e[t]=a}}}}}}function d(e,t){for(var i in e){if(!e.hasOwnProperty(i)){continue}if(r.isObject(e[i])){if(m(e[i])){e[i]=undefined}else if(g(e[i])){var a=e[i].name
if(!t.values[a]){t.values[a]={}
e[i]={wildcardVar:a}
t.order.push(a)
t.skipData[a]=0}else{e[i]=t.values[a]}}else if(e[i].type===n.Syntax.EmptyStatement){r.isArray(e)?e.splice(i,1):delete e[i]}else{d(e[i],t)}}}}function m(e){return e.name&&e.name==="_"}function g(e){return e.name&&r.isString(e.name)&&e.name.length>=2&&e.name[0]==="$"}function v(e){return e&&e.name&&(e.name==="glob_"&&"_"||e.name.indexOf("glob$")===0&&e.name.slice(5))||e&&e.expression&&v(e.expression)}function y(e,t,n,i,a,s){if(r.isArray(t)){console.error("toFind should never be an array.")
console.error(t)}if(E(e,t,n,i,a,s)){return a}if(s.single){return false}for(var o in e){if(!e.hasOwnProperty(o)||!r.isObject(e[o])){continue}if(r.isArray(e[o])&&b(e[o],t,n,i,a,s)||!r.isArray(e[o])&&y(e[o],t,n,i,a,s)){return a}}return false}function b(e,t,n,r,i,a){var s
for(var o=0;o<e.length;o+=1){if(v(t)){if(!s){s=[]
var l=v(t)
if(l==="_"){i._.push(s)}else{i.vars[l]=s}}s.push(e[o])}else if(y(e[o],t,n,r,i,a)){if(!n||n.length===0){return i}else{t=n.shift()}}}if(s){return i}else if(v(t)){var l=v(t)
if(l==="_"){i._.push([])}else{i.vars[l]=[]}return i}return false}function x(e){return function(t,n,i,a,s,o){var l
for(l=0;l<a.order.length;l++){var u=a.values[a.order[l]]
if(r.isEmpty(u)){break}}var f=e(t,n,i,a,s,o)
if(!f){for(;l<a.order.length;l++){var u=a.values[a.order[l]]
if(!r.isEmpty(u)){r.each(u,function(e,t){delete u[t]})}else{break}}a._last=l}return f}}var k=x(function(e,t,n,r,i,a){var s
for(var o=0;o<e.length;o+=1){if(v(t)){if(!s){s=[]
var l=v(t)
if(l==="_"){i._.push(s)}else{i.vars[l]=s}}s.push(e[o])}else{if(y(e[o],t,n,r,i,a)){if(!n||n.length===0){return i}else{t=n.shift()}}else{return false}}}if(s){return i}else if(v(t)){var l=v(t)
if(l==="_"){i._.push([])}else{i.vars[l]=[]}return i}return false})
function E(e,t,n,i,a,s){var o
if(!a.root&&e.type!=="Program"){o=e}for(var l in t){if(!t.hasOwnProperty(l)||t[l]===null){continue}var u=t[l]
var f=e[l]
if(u===undefined){if(f===null||f===undefined){return false}else{a._.push(f)
continue}}if(f===undefined||f===null){if(l==="wildcardVar"){if(i.leftToSkip&&i.leftToSkip[u]>0){i.leftToSkip[u]-=1
return false}r.extend(i.values[u],e)
a.vars[u.slice(1)]=e
if(o){a.root=o}return a}return false}if(r.isObject(f)!==r.isObject(u)||r.isArray(f)!==r.isArray(u)||typeof f!==typeof u){console.error("Object/array/other type mismatch.")
return false}else if(r.isArray(f)){if(u.length===0){continue}var c=u[0]
var h=u.slice(1)
if(l==="params"||l==="arguments"){if(!k(f,c,h,i,a,s)){return false}}else if(!b(f,c,h,i,a,s)){return false}}else if(r.isObject(f)){if(!y(f,u,n,i,a,s)){return false}}else if(!r.isObject(f)){if(f!==u){return false}}else{console.error("Some weird never-before-seen situation!")
console.error(e)
console.error(f)
throw"Error: logic inside of structure analysis code broke."}}if(t===undefined){a._.push(e)}if(o){a.root=o}return a}function w(e){return JSON.parse(JSON.stringify(e))}function S(e,t){if(!Rainbow){return e}Rainbow.color(e,"javascript",function(e){var n="<pre class='rainbowjs'>"+A(e)+"</pre>"
t(n)})}function A(e,t){if(!t){A.styleMap={}
A.counter=0}e=e.replace(/(^|[^A-Za-z0-9])_(?![A-Za-z0-9])/g,"$1<span class='structuredjs_blank'></span>")
var n=/(?:(^|[^\w])\$(\w+))|(?:\$<span class="function call">(\w+)<\/span>)/g
return e.replace(n,function(e,t,n,r){t=t||""
n=n||r
var i=A
if(!(n in i.styleMap)){i.styleMap[n]=i.counter<i.styles.length?i.styles[i.counter]:"extra"
i.counter+=1}return t+"<span class='structuredjs_var "+i.styleMap[n]+"'>"+"</span>"})}A.styles=["one","two","three","four","five","six","seven"]
A.styleMap={}
A.counter=0
function _(e,t){if(!e||e.type!=="Identifier"){return}if(e.name==="_"){if(!t._||t._.length===0){throw"No _ data available."}return t._.shift()}else if(e.name&&e.name.indexOf("$")===0){var n=e.name.slice(1)
if(!t.vars||!(n in t.vars)){throw"No vars available."}return t.vars[n]}}function T(e,t){var n=e&&e.expression||e
if(!n||n.type!=="Identifier"){return}if(n.name==="glob_"){if(!t._||t._.length===0){throw"No _ data available."}return t._.shift()}else if(n.name&&n.name.indexOf("glob$")===0){var r=n.name.slice(5)
if(!t.vars||!(r in t.vars)){throw"No vars available."}return t.vars[r]}}function C(e,t){if(!e){return e}for(var n in e){if(!e.hasOwnProperty(n)){continue}if(e[n]&&typeof e[n]==="object"&&"length"in e[n]){for(var r=0;r<e[n].length;r++){var i=T(e[n][r],t)
if(i){e[n].splice.apply(e[n],[r,1].concat(i))
break}else if(typeof e[n][r]==="object"){var a=_(e[n][r],t)
if(a){e[n][r]=a}else if(typeof e[n][r]==="object"){C(e[n][r],t)}}}}else{var a=_(e[n],t)
if(a){e[n]=a}else if(typeof e[n]==="object"){C(e[n],t)}}}return e}t.match=u
t.matchNode=function(e,t,n){n=n||{}
n.single=true
return u(e,t,n)}
t.injectData=function(e,t){e=c(e)
t=w(t)
return C(e,t)}
t.prettify=S})(typeof window!=="undefined"?window:global);(function(e,t){var n={}
var r=e.TraceKit
var i=[].slice
var a="?"
function s(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function o(e){return typeof e==="undefined"}n.noConflict=function l(){e.TraceKit=r
return n}
n.wrap=function u(e){function t(){try{return e.apply(this,arguments)}catch(t){n.report(t)
throw t}}return t}
n.report=function f(){var t=[],r=null,a=null
function o(e){p()
t.push(e)}function l(e){for(var n=t.length-1;n>=0;--n){if(t[n]===e){t.splice(n,1)}}}function u(e,r){var a=null
if(r&&!n.collectWindowErrors){return}for(var o in t){if(s(t,o)){try{t[o].apply(null,[e].concat(i.call(arguments,2)))}catch(l){a=l}}}if(a){throw a}}var f,c
function h(e,t,i){var s=null
if(a){n.computeStackTrace.augmentStackTraceWithInitialElement(a,t,i,e)
s=a
a=null
r=null}else{var o={url:t,line:i}
o.func=n.computeStackTrace.guessFunctionName(o.url,o.line)
o.context=n.computeStackTrace.gatherContext(o.url,o.line)
s={mode:"onerror",message:e,url:document.location.href,stack:[o],useragent:navigator.userAgent}}u(s,"from window.onerror")
if(f){return f.apply(this,arguments)}return false}function p(){if(c===true){return}f=e.onerror
e.onerror=h
c=true}function d(t){var s=i.call(arguments,1)
if(a){if(r===t){return}else{var o=a
a=null
r=null
u.apply(null,[o,null].concat(s))}}var l=n.computeStackTrace(t)
a=l
r=t
e.setTimeout(function(){if(r===t){a=null
r=null
u.apply(null,[l,null].concat(s))}},l.incomplete?2e3:0)
throw t}d.subscribe=o
d.unsubscribe=l
return d}()
n.computeStackTrace=function c(){var r=false,i={}
function l(t){if(!n.remoteFetching){return""}try{var r=function(){try{return new e.XMLHttpRequest}catch(t){return new e.ActiveXObject("Microsoft.XMLHTTP")}}
var i=r()
i.open("GET",t,false)
i.send("")
return i.responseText}catch(a){return""}}function u(e){if(!s(i,e)){var t=""
if(e.indexOf(document.domain)!==-1){t=l(e)}i[e]=t?t.split("\n"):[]}return i[e]}function f(e,t){var n=/function ([^(]*)\(([^)]*)\)/,r=/['"]?([0-9A-Za-z$_]+)['"]?\s*[:=]\s*(function|eval|new Function)/,i="",s=10,l=u(e),f
if(!l.length){return a}for(var c=0;c<s;++c){i=l[t-c]+i
if(!o(i)){if(f=r.exec(i)){return f[1]}else if(f=n.exec(i)){return f[1]}}}return a}function c(e,t){var r=u(e)
if(!r.length){return null}var i=[],a=Math.floor(n.linesOfContext/2),s=a+n.linesOfContext%2,l=Math.max(0,t-a-1),f=Math.min(r.length,t+s-1)
t-=1
for(var c=l;c<f;++c){if(!o(r[c])){i.push(r[c])}}return i.length>0?i:null}function h(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#]/g,"\\$&")}function p(e){return h(e).replace("<","(?:<|&lt;)").replace(">","(?:>|&gt;)").replace("&","(?:&|&amp;)").replace('"','(?:"|&quot;)').replace(/\s+/g,"\\s+")}function d(e,t){var n,r
for(var i=0,a=t.length;i<a;++i){if((n=u(t[i])).length){n=n.join("\n")
if(r=e.exec(n)){return{url:t[i],line:n.substring(0,r.index).split("\n").length,column:r.index-n.lastIndexOf("\n",r.index)-1}}}}return null}function m(e,t,n){var r=u(t),i=new RegExp("\\b"+h(e)+"\\b"),a
n-=1
if(r&&r.length>n&&(a=i.exec(r[n]))){return a.index}return null}function g(t){var n=[e.location.href],r=document.getElementsByTagName("script"),i,a=""+t,s=/^function(?:\s+([\w$]+))?\s*\(([\w\s,]*)\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,o=/^function on([\w$]+)\s*\(event\)\s*\{\s*(\S[\s\S]*\S)\s*\}\s*$/,l,u,f
for(var c=0;c<r.length;++c){var m=r[c]
if(m.src){n.push(m.src)}}if(!(u=s.exec(a))){l=new RegExp(h(a).replace(/\s+/g,"\\s+"))}else{var g=u[1]?"\\s+"+u[1]:"",v=u[2].split(",").join("\\s*,\\s*")
i=h(u[3]).replace(/;$/,";?")
l=new RegExp("function"+g+"\\s*\\(\\s*"+v+"\\s*\\)\\s*{\\s*"+i+"\\s*}")}if(f=d(l,n)){return f}if(u=o.exec(a)){var y=u[1]
i=p(u[2])
l=new RegExp("on"+y+"=[\\'\"]\\s*"+i+"\\s*[\\'\"]","i")
if(f=d(l,n[0])){return f}l=new RegExp(i)
if(f=d(l,n)){return f}}return null}function v(e){if(!e.stack){return null}var n="\\(?((?:file|http|https):.*?):(\\d+)(?::(\\d+))?\\)?"
var r=new RegExp("^\\s*at (?:((?:\\[object object\\])?\\S+(?: \\[as \\S+\\])?) )?(?:\\(eval at \\S+ "+n+", (.*?):(\\d+)(?::(\\d+))?\\)|"+n+")\\s*$",p),i=/^\s*(\S*)(?:\((.*?)\))?@((?:file|http|https).*?):(\d+)(?::(\d+))?\s*$/i,s=e.stack.split("\n"),o=[],l,u,h=/^(.*) is undefined$/.exec(e.message)
for(var p=0,d=s.length;p<d;++p){if(l=i.exec(s[p])){u={url:l[3],func:l[1]||a,args:l[2]?l[2].split(","):"",line:+l[4],column:l[5]?+l[5]:null}}else if(l=r.exec(s[p])){if(l[5]!==t){u={url:l[5],func:l[1]||"unknown",line:+l[6],column:l[7]?+l[7]:null}}else{u={url:l[8],func:l[1]||"unknown",line:+l[9],column:l[10]?+l[10]:null}}}else{continue}if(!u.func&&u.line){u.func=f(u.url,u.line)}if(u.line){u.context=c(u.url,u.line)}o.push(u)}if(o[0]&&o[0].line&&!o[0].column&&h){o[0].column=m(h[1],o[0].url,o[0].line)}if(!o.length){return null}return{mode:"stack",name:e.name,message:e.message,url:document.location.href,stack:o,useragent:navigator.userAgent}}function y(e){var t=e.stacktrace
var n=/ line (\d+), column (\d+) in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\) in (.*):\s*$/i,r=t.split("\n"),i=[],a
for(var s=0,o=r.length;s<o;s+=2){if(a=n.exec(r[s])){var l={line:+a[1],column:+a[2],func:a[3]||a[4],args:a[5]?a[5].split(","):[],url:a[6]}
if(!l.func&&l.line){l.func=f(l.url,l.line)}if(l.line){try{l.context=c(l.url,l.line)}catch(u){}}if(!l.context){l.context=[r[s+1]]}i.push(l)}}if(!i.length){return null}return{mode:"stacktrace",name:e.name,message:e.message,url:document.location.href,stack:i,useragent:navigator.userAgent}}function b(t){var n=t.message.split("\n")
if(n.length<4){return null}var r=/^\s*Line (\d+) of linked script ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,i=/^\s*Line (\d+) of inline#(\d+) script in ((?:file|http|https)\S+)(?:: in function (\S+))?\s*$/i,a=/^\s*Line (\d+) of function script\s*$/i,o=[],l=document.getElementsByTagName("script"),h=[],m,g,v,y
for(g in l){if(s(l,g)&&!l[g].src){h.push(l[g])}}for(g=2,v=n.length;g<v;g+=2){var b=null
if(m=r.exec(n[g])){b={url:m[2],func:m[3],line:+m[1]}}else if(m=i.exec(n[g])){b={url:m[3],func:m[4]}
var x=+m[1]
var k=h[m[2]-1]
if(k){y=u(b.url)
if(y){y=y.join("\n")
var E=y.indexOf(k.innerText)
if(E>=0){b.line=x+y.substring(0,E).split("\n").length}}}}else if(m=a.exec(n[g])){var w=e.location.href.replace(/#.*$/,""),S=m[1]
var A=new RegExp(p(n[g+1]))
y=d(A,[w])
b={url:w,line:y?y.line:S,func:""}}if(b){if(!b.func){b.func=f(b.url,b.line)}var _=c(b.url,b.line)
var T=_?_[Math.floor(_.length/2)]:null
if(_&&T.replace(/^\s*/,"")===n[g+1].replace(/^\s*/,"")){b.context=_}else{b.context=[n[g+1]]}o.push(b)}}if(!o.length){return null}return{mode:"multiline",name:t.name,message:n[0],url:document.location.href,stack:o,useragent:navigator.userAgent}}function x(e,t,n,r){var i={url:t,line:n}
if(i.url&&i.line){e.incomplete=false
if(!i.func){i.func=f(i.url,i.line)}if(!i.context){i.context=c(i.url,i.line)}var a=/ '([^']+)' /.exec(r)
if(a){i.column=m(a[1],i.url,i.line)}if(e.stack.length>0){if(e.stack[0].url===i.url){if(e.stack[0].line===i.line){return false}else if(!e.stack[0].line&&e.stack[0].func===i.func){e.stack[0].line=i.line
e.stack[0].context=i.context
return false}}}e.stack.unshift(i)
e.partial=true
return true}else{e.incomplete=true}return false}function k(e,t){var r=/function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,i=[],s={},o=false,l,u,c
for(var h=k.caller;h&&!o;h=h.caller){if(h===E||h===n.report){continue}u={url:null,func:a,line:null,column:null}
if(h.name){u.func=h.name}else if(l=r.exec(h.toString())){u.func=l[1]}if(c=g(h)){u.url=c.url
u.line=c.line
if(u.func===a){u.func=f(u.url,u.line)}var p=/ '([^']+)' /.exec(e.message||e.description)
if(p){u.column=m(p[1],c.url,c.line)}}if(s[""+h]){o=true}else{s[""+h]=true}i.push(u)}if(t){i.splice(0,t)}var d={mode:"callers",name:e.name,message:e.message,url:document.location.href,stack:i,useragent:navigator.userAgent}
x(d,e.sourceURL||e.fileName,e.line||e.lineNumber,e.message||e.description)
return d}function E(e,t){var n=null
t=t==null?0:+t
try{n=y(e)
if(n){return n}}catch(i){if(r){throw i}}try{n=v(e)
if(n){return n}}catch(i){if(r){throw i}}try{n=b(e)
if(n){return n}}catch(i){if(r){throw i}}try{n=k(e,t+1)
if(n){return n}}catch(i){if(r){throw i}}return{mode:"failed"}}function w(e){e=(e==null?0:+e)+1
try{throw new Error}catch(t){return E(t,e+1)}}E.augmentStackTraceWithInitialElement=x
E.guessFunctionName=f
E.gatherContext=c
E.ofCaller=w
return E}();(function h(){var t=function r(t){var r=e[t]
e[t]=function a(){var e=i.call(arguments)
var t=e[0]
if(typeof t==="function"){e[0]=n.wrap(t)}if(r.apply){return r.apply(this,e)}else{return r(e[0],e[1])}}}
t("setTimeout")
t("setInterval")})()
if(!n.remoteFetching){n.remoteFetching=true}if(!n.collectWindowErrors){n.collectWindowErrors=true}if(!n.linesOfContext||n.linesOfContext<1){n.linesOfContext=11}e.TraceKit=n})(window)
__KA_exports.Processing = Processing;
__KA_exports.TraceKit = TraceKit;
__KA_exports.JSHINT = JSHINT;
__KA_exports.esprima = esprima;
__KA_exports.Structured = Structured;
this.TraceKit = TraceKit;
this.esprima = esprima;
this.Processing = Processing;
this.JSHINT = JSHINT;
this.Structured = Structured;
});
KAdefine("third_party/javascript-khansrc/live-editor/build/js/live-editor.output_pjs.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("../../../../../javascript/shared-package/i18n.js");
__KA_require("../../../jquery/jquery.js");
__KA_require("../../../underscore/underscore.js");
__KA_require("../../../backbone-src/backbone.js");
__KA_require("./live-editor.output.js");
__KA_require("./live-editor.output_pjs_deps.js");
window.PJSTester=function(t){this.initialize(t)
this.bindTestContext()}
PJSTester.prototype=new OutputTester
PJSTester.prototype.testMethods={firstMatchingPattern:function(t){return _.find(t,_.bind(function(t){return this.testContext.matches(t)},this))},hasFnCall:function(t,e){for(var n=0,i=this.fnCalls.length;n<i;n++){var r=this.testContext.checkFn(this.fnCalls[n],t,e)
if(r===true){return}}this.testContext.assert(false,$._("Expected function call to '%(name)s' was not made.",{name:t}))},orderedFnCalls:function(t){var e=0
for(var n=0,i=this.fnCalls.length;n<i;n++){var r=this.testContext.checkFn(this.fnCalls[n],t[e][0],t[e][1])
if(r===true){e+=1
if(e===t.length){return}}}this.testContext.assert(false,$._("Expected function call to '%(name)s' was not made.",{name:t[e][0]}))},checkFn:function(t,e,n){if(t.name!==e){return}var i=true
if(typeof n==="object"){if(n.length!==t.args.length){i=false}else{for(var r=0;r<n.length;r++){if(n[r]!==null&&n[r]!==t.args[r]){i=false}}}}else if(typeof n==="function"){i=n(t)}if(i){this.testContext.assert(true,$._("Correct function call made to %(name)s.",{name:e}))}return i},_isVarName:function(t){return _.isString(t)&&t.length>0&&t[0]==="$"},_assertVarName:function(t){if(!this.testContext._isVarName(t)){throw new Error($._("Expected '%(name)s' to be a valid variable name.",{name:t}))}},unaryOp:function(t,e){this.testContext._assertVarName(t)
return this.testContext.constraint([t],function(t){return!!(t&&!_.isUndefined(t.value)&&e(t.value))})},isLiteral:function(t){function e(){return true}return this.testContext.unaryOp(t,e)},isNumber:function(t){return this.testContext.unaryOp(t,_.isNumber)},isIdentifier:function(t){return this.testContext.constraint([t],function(t){return!!(t&&t.type&&t.type==="Identifier")})},isBoolean:function(t){return this.testContext.unaryOp(t,_.isBoolean)},isString:function(t){return this.testContext.unaryOp(t,_.isString)},binaryOp:function(t,e,n){var i=[]
var r
if(this.testContext._isVarName(t)){i.push(t)
if(this.testContext._isVarName(e)){i.push(e)
r=function(t,e){return!!(t&&e&&!_.isUndefined(t.value)&&!_.isUndefined(e.value)&&n(t.value,e.value))}}else{r=function(t){return!!(t&&!_.isUndefined(t.value)&&n(t.value,e))}}}else if(this.testContext._isVarName(e)){i.push(e)
r=function(e){return!!(e&&!_.isUndefined(e.value)&&n(t,e.value))}}else{throw new Error($._("Expected either '%(first)s' or '%(second)s'"+" to be a valid variable name.",{first:t,second:e}))}return this.testContext.constraint(i,r)},lessThan:function(t,e){return this.testContext.binaryOp(t,e,function(t,e){return t<e})},lessThanOrEqual:function(t,e){return this.testContext.binaryOp(t,e,function(t,e){return t<=e})},greaterThan:function(t,e){return this.testContext.binaryOp(t,e,function(t,e){return t>e})},positive:function(t){return this.testContext.unaryOp(t,function(t){return t>0})},negative:function(t){return this.testContext.unaryOp(t,function(t){return t<0})},greaterThanOrEqual:function(t,e){return this.testContext.binaryOp(t,e,function(t,e){return t>=e})},inRange:function(t,e,n){return this.testContext.and(this.testContext.greaterThanOrEqual(t,e),this.testContext.lessThanOrEqual(t,n))},equal:function(t,e){return this.testContext.binaryOp(t,e,function(t,e){return t===e})},notEqual:function(t,e){return this.testContext.binaryOp(t,e,function(t,e){return t!==e})},not:function(t){return this.testContext.constraint(t.variables,function(){return!t.fn.apply({},arguments)})},_naryShortCircuitingOp:function(t,e){var n=_.union.apply({},_.pluck(e,"variables"))
var i=_.object(_.map(n,function(t,e){return[t,e]}))
return this.testContext.constraint(n,function(){var n=arguments
return t(e,function(t){var e=_.map(t.variables,function(t){return n[i[t]]})
return t.fn.apply({},e)})})},and:function(){return this.testContext._naryShortCircuitingOp(_.all,arguments)},or:function(){return this.testContext._naryShortCircuitingOp(_.any,arguments)},structure:function(t,e){return{pattern:t,constraint:e}},constraint:function(t,e){return{variables:t,fn:e}},match:function(t){if(this.errors.length){return{success:false,message:$._("Syntax error!")}}if(t&&_.isUndefined(t.pattern)){t={pattern:t}}if(!t||!t.pattern){return{success:false,message:""}}try{var e=t.constraint
var n=Structured.match(this.userCode,t.pattern,{varCallbacks:e})
return{success:n,message:e&&e.failure}}catch(i){if(window.console){console.warn(i)}return{success:true,message:$._("Hm, we're having some trouble "+"verifying your answer for this step, so we'll give "+"you the benefit of the doubt as we work to fix it. "+'Please click "Report a problem" to notify us.')}}},matches:function(t){if(typeof t!=="object"){t=this.testContext.structure(t)}return this.testContext.match(t).success},assertMatch:function(t,e,n,i,r){if(r){var a=_.any(this.errors,function(t){return t.lint})
if(a){_.each(r,function(t){var e=this.userCode.search(t.re)
var n=-1,i=-1,r
if(e>-1){r=t.msg
var a=this.userCode.split("\n")
var s=0
_.each(a,function(t,r){if(n===-1&&e<s+t.length){n=r
i=e-s}s+=t.length})
this.errors.splice(0,1,{text:r,row:n,col:i,type:"error"})}}.bind(this))}}var s
var o
if(t.success){s=t.message}else{o=t.message}this.testContext.assert(t.success,e,"",{structure:_.isString(n)?"function() {"+n+"}":n.toString(),alternateMessage:s,alsoMessage:o,image:i})}}
var BabyHint={EDIT_DISTANCE_THRESHOLD:2,keywords:["break","case","catch","continue","default","do","else","finally","for","function","if","in","instanceof","new","return","switch","this","throw","try","typeof","var","while","charAt","charCodeAt","fromCharCode","indexOf","lastIndexOf","length","pop","prototype","push","replace","search","shift","slice","substring","toLowerCase","toUpperCase","unshift"],functionParamCount:{acos:1,asin:1,atan:1,atan2:2,background:[1,3,4],beginShape:[0,1],bezier:8,bezierVertex:[6],box:[1,2,3],color:[1,2,3,4],colorMode:[1,2,4,5],createFont:[1,2],cos:1,curve:8,cursor:[0,1,2,3],endShape:[0,1],dist:4,fill:[1,3,4],filter:[1,2],get:[2,3,4,5],image:[3,5],line:4,loadImage:[1,3],mag:[2,3],max:2,min:2,noise:[1,2,3],PVector:[0,2,3],random:[0,1,2],RegExp:[1,2],rect:[4,5],scale:[1,2],set:[3,4],sin:1,stroke:[1,3,4],tan:1,text:[3,5],textAlign:[1,2],textFont:[1,2],translate:[2,3],vertex:[2,4]},functionFormSuggestion:{"function":"var drawWinston = function() { ... };","while":"while (x < 20) { ... };"},functionParamBlacklist:["debug","max","min"],bannedProperties:{location:true,document:true,ownerDocument:true,createElement:true},variables:[],errors:[],inComment:false,spellChecked:false,init:function(t){for(var e in t.context){if(typeof t.context[e]==="function"){BabyHint.keywords.push(e)
if(!(e in BabyHint.functionParamCount)&&!_.include(BabyHint.functionParamBlacklist,e)){BabyHint.functionParamCount[e]=t.context[e].length}}}},initDocumentation:function(t){for(var e=0;e<t.length;e++){var n=t[e]
var i=n.indexOf("(")
var r=n
if(i>=0){r=r.substring(0,i).trim()
BabyHint.functionFormSuggestion[r]=n}}},babyErrors:function(t,e){var n={}
var i=(t||"").split("\n")
BabyHint.errors=[]
BabyHint.variables=[]
BabyHint.inComment=false
BabyHint.spellChecked=false
_.each(e,function(t){if(t){n[t.line-2]=true}})
_.each(i,function(t,e){BabyHint.errors=BabyHint.errors.concat(BabyHint.parseLine(t,e,n[e]))})
return BabyHint.errors},parseLine:function(t,e,n){var i=[]
if(BabyHint.inComment){t=BabyHint.removeEndOfMultilineComment(t)}if(!BabyHint.inComment){t=BabyHint.removeComments(t)
t=BabyHint.removeStrings(t)
i=i.concat(BabyHint.checkFunctionDecl(t,e)).concat(BabyHint.checkTrailingEquals(t,e)).concat(BabyHint.checkFunctionParams(t,e)).concat(BabyHint.checkBannedProperties(t,e))
if(n){i=i.concat(BabyHint.checkSpaceAfterVar(t,e))
if(!BabyHint.spellChecked){i=i.concat(BabyHint.checkSpelling(t,e))
BabyHint.spellChecked=true}}BabyHint.variables=BabyHint.variables.concat(BabyHint.getVariables(t))}return i},removeComments:function(t){var e=t.indexOf("//")
if(e!==-1){t=t.slice(0,e)}while(t.indexOf("/*")!==-1){e=t.indexOf("/*")
var n=t.indexOf("*/")
while(n!==-1&&n<=e+1){t=t.slice(0,n)+"  "+t.slice(n+2)
n=t.indexOf("*/")}if(n>e+1){var i=t.slice(e,n+2)
t=t.slice(0,e)+i.replace(/./g," ")+t.slice(n+2)}else if(n===-1){BabyHint.inComment=true
t=t.slice(0,e)}}return t},removeEndOfMultilineComment:function(t){var e=t.indexOf("*/")
if(e!==-1){BabyHint.inComment=false
t=t.slice(0,e+2).replace(/./g," ")+t.slice(e+2)}return t},removeStrings:function(t){var e=-1
var n=null
for(var i=0;i<t.length;i++){var r=t[i]
if(e===-1){if(r==='"'){e=i
n='"'}else if(r==="'"){e=i
n="'"}}else if(r===n){var a=t.slice(e+1,i)
t=t.slice(0,e+1)+a.replace(/./g," ")+t.slice(i)
e=-1}}return t},checkFunctionDecl:function(t,e){var n=[]
var i=t.match(/function\s+\w+/g)
_.each(i,function(i){var r=i.split(/\s+/g)[1]
var a={row:e,column:t.indexOf(i),text:$._('If you want to define a function, you should use "var %(name)s = function() {}; " instead!',{name:r}),breaksCode:true,source:"funcdeclaration"}
n.push(a)})
return n},checkBannedProperties:function(t,e){var n=[]
var i=t.split(/[^~`@#\$\^\w]/g)
_.each(i,function(i){if(BabyHint.bannedProperties.hasOwnProperty(i)){var r={row:e,column:t.indexOf(i),text:$._("%(word)s is a reserved word.",{word:i}),breaksCode:true,source:"bannedwords"}
n.push(r)}})
return n},checkSpelling:function(t,e){var n=[]
var i=t.split(/[^~`@#\$\^\w]/g)
var r=false
_.each(i,function(i){if(i.length>0&&!r){var a=BabyHint.editDistance(i)
var s=a.editDistance
var o=a.keyword
if(s>0&&s<=BabyHint.EDIT_DISTANCE_THRESHOLD&&s<o.length-1&&BabyHint.keywords.indexOf(i)===-1){var c={row:e,column:t.indexOf(i),text:$._('Did you mean to type "%(keyword)s" instead of "%(word)s"?',{keyword:o,word:i}),breaksCode:false,source:"spellcheck"}
if(BabyHint.functionFormSuggestion[o]){c.text+=" "+$._('In case you forgot, you can use it like "%(usage)s"',{usage:BabyHint.functionFormSuggestion[o]})}n.push(c)}}r=i==="var"||i==="function"})
return n},editDistance:function(t){var e=t
t=t.toLowerCase()
var n=function(t,e,n){n=typeof n==="undefined"?0:n
var i=[]
for(var r=0;r<t;r++){i[r]=[]
for(var a=0;a<e;a++){i[r][a]=n}}return i}
var i=Infinity
var r=""
_.each(BabyHint.keywords.concat(BabyHint.variables),function(a){if(a===e){i=0
r=a
return}if(a.toLowerCase()===t&&a!==e){i=1
r=a
return}if(Math.abs(a.length-t.length)>BabyHint.EDIT_DISTANCE_THRESHOLD){return}var s=a.length
var o=t.length
var c=n(s,o,1)
if(a[0]===t[0]){c[0][0]=0}for(var u=1;u<o;u++){var f=a[0]===t[u]?0:1
c[0][u]=c[0][u-1]+f}for(var h=1;h<s;h++){var f=a[h]===t[0]?0:1
c[h][0]=c[h-1][0]+f}for(var l=1;l<s;l++){var d=Number.MAX_VALUE
for(var v=1;v<o;v++){var f=a[l]===t[v]?0:1
var g=_.min([c[l-1][v]+1,c[l][v-1]+1,c[l-1][v-1]+f])
d=Math.min(d,g)
c[l][v]=g}if(d>BabyHint.EDIT_DISTANCE_THRESHOLD){return}}if(c[s-1][o-1]<i){i=c[s-1][o-1]
r=a}})
return{editDistance:i,keyword:r}},checkSpaceAfterVar:function(t,e){var n=[]
var i=/var\w+/g
var r=t.match(i)
if(r){var a=r[0].slice(3)
var s={row:e,column:t.search(i)+3,text:$._('Did you forget a space between "var" and "%(variable)s"?',{variable:a}),breaksCode:false}
n.push(s)}return n},checkTrailingEquals:function(t,e){var n=[]
var i=t.length-1
while(t[i]===" "){i--}if(t[i]==="="){var r={row:e,column:i,text:$._('You can\'t end a line with "="'),breaksCode:true}
n.push(r)}return n},getVariables:function(t){var e=[]
var n=/\s*var\s*([A-z]\w*)\s*(;|=)/
if(n.exec(t)){var i=n.exec(t)[1]
e.push(i)}var r=/function\s*\(([\w\s,]*)\)/
if(r.exec(t)){var a=RegExp.$1
var s=a.split(/\s*,\s*/)
_.each(s,function(t){if(t){e.push(t)}})}return e},checkFunctionParams:function(t,e){var n=[]
var i={}
var r=[]
for(var a=0;a<t.length;a++){if(t[a]==="("){r.push(a)}else if(t[a]===")"){if(r.length===0){var s={row:e,column:a,text:$._('It looks like you have an extra ")"'),breaksCode:false,source:"paramschecker"}
n.push(s)
return n}else{i[r.pop()]=a}}}if(r.length>0){var s={row:e,column:r.pop(),text:$._('It looks like you are missing a ")" - does every "(" have a corresponding closing ")"?'),breaksCode:false,source:"paramschecker"}
n.push(s)
return n}var o=t.match(/\w+\s*\(/g)||[]
var c=t.match(/\.\s*\w+\s*\(/g)||[]
c=_.map(c,function(t){var e=t.indexOf(t.match(/\w/g)[0])
return t.slice(e)})
for(var a=o.length-1;a>=0;a--){var u=t.lastIndexOf(o[a])
var f=o[a].split(/\(\s*/g)[0]
u+=f.length
var h=t.slice(u,i[u]+1)
var l=h.match(/[A-z0-9]+\s+[A-z0-9]+/g)
if(l){var d=t.indexOf(l[0])
while(t[d]!==" "){d++}var s={row:e,column:d,text:$._("Did you forget to add a comma between two parameters?"),breaksCode:false,source:"paramschecker"}
n.push(s)
break}var v
var g=h.match(/,/g)
if(g){v=g.length+1}else{v=h.match(/[^\s()]/g)?1:0}if(!_.include(c,o[a])){f=f.replace(/\s/g,"")
var p=BabyHint.functionParamCount[f]
var m
var b
if(typeof p!=="undefined"){b='"'+f+'()"'
if(typeof p==="number"&&v!==p){m=$.ngettext("%(name)s takes 1 parameter, not %(given)s!","%(name)s takes %(num)s parameters, not %(given)s!",p,{name:b,given:v})}else if(typeof p!=="number"&&!_.include(p,v)){var y=""+p[0]
for(var w=1;w<p.length-1;w++){y+=", "+p[w]}y+=" "+$._("or")+" "+p[p.length-1]
m=$._("%(name)s takes %(list)s parameters, not %(given)s!",{name:b,list:y,given:v})}}if(m){var x=BabyHint.functionFormSuggestion[f]
if(x){m=$._("It looks like you're trying to use %(name)s. In case you forgot, you can use it like: %(usage)s",{name:b,usage:'"'+x+'"'})}}if(m){var s={row:e,column:u,text:m,breaksCode:true,source:"paramschecker"}
n.push(s)}}t=t.slice(0,u)+h.replace(/./g,"0")+t.slice(i[u]+1)}return n}}
window.BabyHint=BabyHint
window.PJSOutput=Backbone.View.extend({trackedMouseEvents:["move","over","out","down","up"],bannedProps:{externals:true},drawLoopMethods:["draw","mouseClicked","mouseDragged","mouseMoved","mousePressed","mouseReleased","mouseScrolled","mouseOver","mouseOut","touchStart","touchEnd","touchMove","touchCancel","keyPressed","keyReleased","keyTyped"],workerBreakingMethods:["createGraphics"],liveReset:{background:[255,255,255],colorMode:[1],ellipseMode:[3],fill:[255,255,255],frameRate:[60],imageMode:[0],rectMode:[0],stroke:[0,0,0],strokeCap:["round"],strokeWeight:[1],textAlign:[37,0],textAscent:[9],textDescent:[12],textFont:["Arial",12],textLeading:[14],textSize:[12]},idempotentCalls:["createFont"],initialize:function(t){this.handlers={}
this.config=t.config
this.output=t.output
this.tester=new PJSTester(_.extend(t,{workerFile:"pjs/test-worker.js"}))
this.render()
this.bind()
this.build(this.$canvas[0])
if(this.config.useDebugger&&PJSDebugger){iframeOverlay.createRelay(this.$canvas[0])
this.debugger=new PJSDebugger({context:this.canvas,output:this})}this.reseedRandom()
this.lastGrab=null
if(!this.props){var e=this.props={},n=this.safeCalls={}
for(var i in this.canvas){if(i.indexOf("__")<0){var r=this.canvas[i],a=typeof r==="function"
e[i]=!(/^[A-Z]/.test(i)||i==="height"||i==="width"||i==="key"||a&&i.indexOf("key")<0)
if(a){try{var s=String(r)
if(this.idempotentCalls.indexOf(i)!==-1||/native code/.test(s)||/return /.test(s)&&!/p\./.test(s)&&!/new P/.test(s)){n[i]=true}}catch(o){}}}}n.PVector=true
e.draw=true}this.config.runCurVersion("jshint",this)
this.config.on("versionSwitched",function(t,e){this.config.runVersion(e,"processing",this.canvas)}.bind(this))
BabyHint.init({context:this.canvas})
return this},render:function(){this.$el.empty()
this.$canvas=$("<canvas>").attr("id","output-canvas").appendTo(this.el).show()},bind:function(){if(window!==window.top){var t=["alert","open","showModalDialog","confirm","prompt","eval"]
for(var e=0,n=t.length;e<n;e++){window.constructor.prototype[t[e]]=$.noop}}if(window!==window.top&&Object.freeze&&Object.getOwnPropertyDescriptor){for(var i in window){if(window.hasOwnProperty(i)){try{var r=Object.getOwnPropertyDescriptor(window,i)
if(!r||r.configurable){Object.defineProperty(window,i,{value:window[i],writable:false,configurable:false})}}catch(a){}}}var s=navigator.userAgent.toLowerCase()
if(/chrome/.test(s)){Object.freeze(window.location)
Object.freeze(window)}else if(/safari/.test(s)){Object.seal(window)}else{var r=Object.getOwnPropertyDescriptor(window)
if(!r||r.configurable){Object.freeze(window)}}Object.freeze(Object.getPrototypeOf(window))}var o=this.$canvas.offset()
_.each(this.trackedMouseEvents,function(t){var e="mouse"+t
this.$canvas.on(e,function(e){if(this.output.recording){var n=e.pageX-o.left
var i=e.pageY-o.top
this.output.postParent({log:[t,n,i]})}}.bind(this))
this.handlers[t]=function(t,n){var i=t+o.left
var r=n+o.top
var a=i-$(window).scrollLeft()
var s=r-$(window).scrollTop()
var c=document.createEvent("MouseEvents")
c.initMouseEvent(e,true,true,window,0,0,0,a,s,false,false,false,false,0,document.documentElement)
this.$canvas[0].dispatchEvent(c)}.bind(this)}.bind(this))
$(window).on("resize",this.setDimensions)},build:function(t){this.canvas=new Processing(t,function(t){t.draw=this.DUMMY}.bind(this))
this.bindProcessing(this.processing,this.canvas)
this.config.runCurVersion("processing",this.canvas)
this.clear()
this.setDimensions()},bindProcessing:function(t,e){for(var n in t){var i=t[n]
if(!(n in window)){if(typeof i==="object"){i={}
this.bindProcessing(t[n],i)}if(typeof i==="function"){i=i.bind(this)}}e[n]=i}},setDimensions:function(){var t=$(window)
var e=t.width()
var n=t.height()
if(this.canvas&&(e!==this.canvas.width||n!==this.canvas.height)){this.$canvas.width(e).height(n)
this.canvas.size(e,n)
this.output.restart()}},messageHandlers:{mouseAction:function(t){t=t.mouseAction
this.handlers[t.name](t.x,t.y)},documentation:function(t){BabyHint.initDocumentation(t.documentation)}},getScreenshot:function(t,e){var n=document.createElement("canvas")
n.width=t
n.height=t
n.getContext("2d").drawImage(this.$canvas[0],0,0,t,t)
e(n.toDataURL("image/png"))},imageCache:{},imagesCached:false,imageCacheStarted:false,imageHolder:null,cacheImages:function(t,e){var n=t.match(/getImage\s*\(.*?\)/g)
var i=0
if(!this.imageHolder){this.imageHolder=$("<div>").css({height:0,width:0,overflow:"hidden",position:"absolute"}).appendTo("body")}var r=function(){i+=1
if(i===n.length){e()}}
_.each(n,function(t){var e=/["']([A-Za-z0-9_\/-]*?)["']/.exec(t)
if(this.imageCache[t]||!e){return r()}t=e[1]
var n=this.output.imagesDir+t+".png"
var i=document.createElement("img")
i.onload=r
i.onerror=function(){delete this.imageCache[t]
r()}.bind(this)
i.src=n
this.imageHolder.append(i)
this.imageCache[t]=i}.bind(this))},soundCache:{},processing:{Object:window.Object,RegExp:window.RegExp,Math:window.Math,Array:window.Array,String:window.String,getImage:function(t){var e=this.imageCache[t]
if(!e){throw{message:$._("Image '%(file)s' was not found.",{file:t})}}var n=new this.canvas.PImage(e)
n.__id=function(){return"getImage('"+t+"')"}
return n},loadImage:function(t){throw{message:"Use getImage instead of loadImage."}},requestImage:function(t){throw{message:"Use getImage instead of requestImage."}},link:function(){throw{message:$._("link() method is disabled.")}},getSound:function(t){var e=this.soundCache[t]
if(!e){var n=document.createElement("audio")
n.preload="auto"
n.src=this.output.soundsDir+t+".mp3"
e={audio:n}
this.soundCache[t]=e}e.__id=function(){return"getSound('"+t+"')"}
return e},playSound:function(t){if(t&&t.audio&&t.audio.play){t.audio.currentTime=0
t.audio.play()}else{throw{message:$._("No sound file provided.")}}},debug:function(){console.log.apply(console,arguments)},Program:{settings:function(){return this.output.settings||{}},restart:function(){this.output.restart()},runTests:function(t){return this.output.test(this.output.getUserCode(),this.output.validate,[],t)},assertEqual:function(t,e){var n=function(t){var e=new Error
TraceKit.remoteFetching=false
TraceKit.collectWindowErrors=false
var t=TraceKit.computeStackTrace.ofCaller()
var n=t.stack
for(var i=0;i<n.length;i++){if(n[i].func==="Object.apply.get.message"){return n[i].line-5}else if(n[i].func==="anonymous/<"){return n[i].line-4}}return-1}
if(_.isEqual(t,e)){return}var i=$._("Assertion failed: "+"%(actual)s is not equal to %(expected)s.",{actual:JSON.stringify(t),expected:JSON.stringify(e)})
var r=n()
if(r<0){r=0}this.output.results.assertions.push({row:r,column:0,text:i})},runTest:function(t,e){if(arguments.length===1){e=t
t=""}var n=!!e()
this.output.postParent({results:{code:this.output.getUserCode(),errors:[],tests:[{name:t,state:n?"pass":"fail",results:[]}]},pass:n})}}},DUMMY:function(){},propListString:function(t){var e=this.bannedProps
var n=[]
for(var i in t){if(!e[i]){n.push(i+":"+t[i])}}return n.join(",")},lint:function(t,e){var n="/*jshint "+this.propListString(this.JSHint)+" */"+"/*global "+this.propListString(this.props)+"*/\n"+t
var i=function(n,i){this.lintDone(t,n,i,e)}.bind(this)
if(!t){i(null,[])}else{this.hintWorker.exec(n,i)}},lintDone:function(t,e,n,i){var r=this.props
this.globals={}
this.output.results.assertions=[]
if(e&&e.globals){for(var a=0,s=e.globals.length;a<s;a++){var o=e.globals[a]
if(!r[o]&&!(o in this.canvas)){this.canvas[o]=undefined}this.globals[o]=true}}var c=this.mergeErrors(n,BabyHint.babyErrors(t,n))
this.globals={}
if(e&&e.globals){for(var a=0,s=e.globals.length;a<s;a++){var o=e.globals[a]
if(!r[o]&&!(o in this.canvas)){this.canvas[o]=undefined}this.globals[o]=true}}i(c)},test:function(t,e,n,i){var r=n.length
this.tester.testWorker.exec(t,e,n,function(t,e){if(r!==t.length){var n=$._("Error: %(message)s",{message:t[t.length-1].message})
this.output.$el.find(".test-errors").text(n).show()
this.tester.testContext.assert(false,n,$._("A critical problem occurred in your program "+"making it unable to run."))}i(t,e)}.bind(this))},mergeErrors:function(t,e){var n=[]
var i=[]
var r=[]
_.each(t,function(t){if(t&&t.line&&t.character&&t.reason&&!/unable to continue/i.test(t.reason)){i.push(t.line-2)
r.push({row:t.line-2,column:t.character-1,text:t.reason,type:"error",lint:t,source:"jshint",priority:2})}}.bind(this))
_.each(e,function(t){if(_.include(i,t.row)||t.breaksCode){n.push({row:t.row,column:t.column,text:t.text,type:"error",source:t.source,priority:1})}}.bind(this))
return n.concat(r)},runCode:function(t,e){var n=function(){var n=_(this.workerBreakingMethods).some(function(e){return t.indexOf(e)!==-1})
if(!window.Worker||n){return this.injectCode(t,e)}var i={}
var r=this.canvas.PImage
var a=function(t){return $.isPlainObject(t)&&!(t instanceof r)}
var s=function(t){if(!t){return t}var e={}
if(_.isArray(t)){e=[]}_.each(t,function(t,n){if(typeof t==="function"){e[n]="__STUBBED_FUNCTION__"}else if(typeof t!=="object"){e[n]=t}else if(a(t)){e[n]=s(t)}else{e[n]={}}})
return e}
_.each(this.globals,function(t,e){var n=this.canvas[e]
var r
if(typeof n==="function"||e==="Math"){r="__STUBBED_FUNCTION__"}else if(typeof n!=="object"){r=n}else if(a(n)){r=s(n)}else{r={}}i[e]=r}.bind(this))
this.worker.exec(t,i,function(t,n){if(t&&t.length>0){return e(t,n)}try{this.injectCode(n,e)}catch(i){e([i])}}.bind(this))}.bind(this)
if(this.globals.getImage){this.cacheImages(t,n)}else{n()}},hasOrHadDrawLoop:function(){for(var t=0,e=this.drawLoopMethods.length;t<e;t++){var n=this.drawLoopMethods[t]
if(this.globals[n]||this.lastGrab&&this.lastGrab[n]){return true}}return false},drawLoopMethodDefined:function(){for(var t=0,e=this.drawLoopMethods.length;t<e;t++){var n=this.drawLoopMethods[t]
if(this.canvas[n]!==this.DUMMY&&this.canvas[n]!==undefined){return true}}return false},injectCode:function(t,e){var n={},i=[],r=false,a={},s={},o=this.props,c=""
this.grabObj={}
this.instances=[]
if(!this.debugger){t=t&&t.replace(/\bnew[\s\n]+([A-Z]{1,2}[a-z0-9_]+)([\s\n]*\()/g,"PJSOutput.applyInstance($1,'$1')$2")}else{}var u=this.hasOrHadDrawLoop()
if(u){_.each(this.globals,function(t,e){var r=this.canvas[e]
n[e]=typeof r==="function"&&!this.safeCalls[e]?function(){if(typeof i!=="undefined"){i.push([e,arguments])}return 0}:r}.bind(this))
var f=this.exec(t,n)
if(f){return e([f])}_.each(n,function(t,e){if(typeof t==="function"){t.__name=e}})
for(var h=0,l=this.instances.length;h<l;h++){s[this.instances[h].constructor.__name]=true}if(this.oldInstances&&PJSOutput.stringifyArray(this.oldInstances)!==PJSOutput.stringifyArray(this.instances)){r=true}this.oldInstances=this.instances
this.instances=null
for(var h=0;h<i.length;h++){var d=Array.prototype.slice.call(i[h][1])
var v=[]
_(d).each(function(t,e){if(!_.isArray(t)&&_.isObject(t)){var n="__obj__"+i[h][0]+"__"+e
this.canvas[n]=t
v.push(n)}else{v.push(PJSOutput.stringify(t))}}.bind(this))
c+=i[h][0]+"("+v.join(", ")+");\n"}_.each(n,function(t,e){try{n[e]=PJSOutput.stringify(n[e])
if(this.lastGrab&&o[e]!==false&&(!(e in this.lastGrab)||n[e]!==this.lastGrab[e])){if(typeof t==="function"){if(s[e]){r=true}a[e]=true
c+="var "+e+" = "+n[e]+";\n"
c+=e+".__name = '"+e+"';\n"}else{if(!_.isArray(t)&&_.isObject(t)&&!_.isArray(this.canvas[e])&&_.isObject(this.canvas[e])){for(var i in t){if(t.hasOwnProperty(i)){this.canvas[e][i]=t[i]}}}else{this.canvas[e]=t}}}if(typeof t==="function"&&o[e]!==false){this.objectExtract(e,t)
this.objectExtract(e,t,"prototype")}}catch(u){this.objectExtract(e,t)}}.bind(this))
_.each(this.grabObj,function(t,e){var n=/^[^.[]*/.exec(e)[0]
if(!this.lastGrabObj||this.lastGrabObj[e]!==t||a[n]){c+=e+" = "+t+";\n"}}.bind(this))
for(var g in this.lastGrabObj){if(!(g in this.grabObj)){c+="delete "+g+";\n"}}for(var p in this.lastGrab){if(!(p in n)&&(!(p in this.props)||_.contains(this.drawLoopMethods,p))){c+="delete "+p+";\n"
if(p==="draw"){this.clear()}}}}this.canvas.resetMatrix()
this.restoreRandomSeed()
if(this.lastGrab){for(var m in this.liveReset){if(!this.globals[m]&&this.lastGrab[m]){this.canvas[m].apply(this.canvas,this.liveReset[m])}}}if(!u||!this.drawLoopMethodDefined()||!this.lastGrab||r){this.clear()
this.canvas._clearLogs()
if(this.globals.draw){t+="\ndraw();"}var f=this.exec(t,this.canvas)
if(f){return e([f])}_.each(this.globals,function(t,e){if(typeof t==="function"){t.__name=e}})}else if(c){if(this.globals.draw){c+="\ndraw();"}var f=this.exec(c,this.canvas)
if(f){return e([f])}}if(!this.canvas.draw){this.canvas.draw=this.DUMMY}if(u){this.lastGrab=n
this.lastGrabObj=this.grabObj}if(e){try{e([])}catch(b){}}},objectExtract:function(t,e,n){if(!this.canvas[t]){this.canvas[t]=$.isArray(e)?[]:{}}if(n){e=e[n]}for(var i in e){if(e.hasOwnProperty(i)&&i.indexOf("__")<0){if(typeof e[i]==="function"){this.grabObj[t+(n?"."+n:"")+"['"+i+"']"]=PJSOutput.stringify(e[i])}else{var r=this.canvas[t]
if(n){r=r[n]}r[i]=e[i]}}}},restart:function(){this.lastGrab=null
this.lastGrabObj=null
this.reseedRandom()
this.canvas.frameCount=0
this.canvas._clearLogs()},toggle:function(t){if(t){this.canvas.loop()}else{this.canvas.noLoop()}},clear:function(){for(var t in this.liveReset){if(this.liveReset.hasOwnProperty(t)){this.canvas[t].apply(this.canvas,this.liveReset[t])}}},seed:null,reseedRandom:function(){this.seed=Math.floor(Math.random()*4294967296)},restoreRandomSeed:function(){this.canvas.randomSeed(this.seed)},kill:function(){this.canvas.exit()
this.canvas.hide()},initTests:function(t){return this.exec(t,this.tester.testContext)},exec:function(t){if(!t){return}var e=Array.prototype.slice.call(arguments,1)
var n=t
var i="__env__"+Math.floor(Math.random()*1e9)
for(var r=0;r<e.length;r++){if(e[r]){t="with("+i+"["+r+"]){\n"+t+"\n}"}}var a=$._("This program uses capabilities we've turned "+"off for security reasons. Khan Academy prohibits showing "+"external images, playing sounds, or displaying pop-ups.")
var s="{ get externals() { throw { message: "+JSON.stringify(a)+" } } }"
t="var "+i+" = arguments;\n(function(){\n"+t+"\n}).apply("+s+");"
try{if(this.debugger){this.debugger.exec(n)}else{new Function(t).apply(this.canvas,e)}}catch(o){return o}},hintWorker:new PooledWorker("pjs/jshint-worker.js",function(t,e){if(!window.Worker){JSHINT(t)
e(JSHINT.data(),JSHINT.errors)
return}var n=this.getWorkerFromPool()
n.onmessage=function(t){if(t.data.type==="jshint"){if(this.isCurrentWorker(n)){var i=t.data.message
e(i.hintData,i.hintErrors)}this.addWorkerToPool(n)}}.bind(this)
n.postMessage({code:t,externalsDir:this.externalsDir,jshintFile:this.jshintFile})}),worker:new PooledWorker("pjs/worker.js",function(t,e,n){var i
var r=this.getWorkerFromPool()
var a=function(e){if(i){clearTimeout(i)}if(r){this.addWorkerToPool(r)}if(e){n([e])}else{n([],t)}}.bind(this)
r.onmessage=function(t){if(t.data.execStarted){i=window.setTimeout(function(){r.terminate()
r=null
a({message:$._("The program is taking too long to run. "+"Perhaps you have a mistake in your code?")})},500)}else if(t.data.type==="end"){a()}else if(t.data.type==="error"){a({message:t.data.message})}}
r.onerror=function(t){t.preventDefault()
a(t)}
try{r.postMessage({code:t,context:e})}catch(s){a()}})})
_.extend(PJSOutput,{stringify:function(t){if(typeof t==="function"){return t.toString()}else if(t&&t.__id){return t.__id()}else if(t&&Object.prototype.toString.call(t)==="[object Array]"){return this.stringifyArray(t)}else if(typeof t==="undefined"){return"undefined"}return JSON.stringify(t,function(t,e){if(e&&(e.id!==undefined&&e.id==="output-canvas"||typeof CanvasRenderingContext2D!=="undefined"&&e instanceof CanvasRenderingContext2D)){return undefined}return e})},stringifyArray:function(t){var e=[]
for(var n=0,i=t.length;n<i;n++){e.push(this.stringify(t[n]))}return e.join(", ")},applyInstance:function(t,e){try{var n=(/^function\s*(\w+)/.exec(t)||[])[1]
if(n&&window[n]===t){return t}}catch(i){}return function(){var n=arguments
function i(){t.apply(this,n)}i.prototype=t.prototype
var r=new i
this.newCallback(t,e,r,n)
return r}.bind(this)},newCallback:function(t,e,n,i){if(!t.__name&&e){t.__name=e}n.constructor=t
n.__id=function(){return"new "+t.__name+"("+this.stringifyArray(i)+")"}.bind(this)
if(this.instances){this.instances.push(n)}}})
LiveEditorOutput.registerOutput("pjs",PJSOutput)
__KA_exports.BabyHint = BabyHint;
__KA_exports.PJSOutput = PJSOutput;
this.PJSOutput = PJSOutput;
this.BabyHint = BabyHint;
});
this.KAdefineTiming["scratchpads-exec-pjs-package.js"].endTime = +(new Date);
