((this.KAdefineTiming = this.KAdefineTiming || {})["react-art-package.js"] = {}).startTime = +(new Date);
KAdefine("third_party/javascript-khansrc/react-compiled/react-art.prod.js", function(__KA_require, __KA_module, __KA_exports) {
__KA_require("./react.prod.js");
reactWebpackJsonp([1],[function(t,i,e){window.ReactART=e(114)},,,,function(t){t.exports=function(){for(var t={},i=0,e=arguments.length;e>i;i++){var n=arguments[i]
"function"==typeof n&&(n=n.prototype)
for(var r in n)t[r]=n[r]}return t.initialize||(t.initialize=function(){}),t.constructor=function(i,e,n,r,s,o,h,a){return new t.initialize(i,e,n,r,s,o,h,a)},t.constructor.prototype=t.initialize.prototype=t,t.constructor}},,,,,,,,,,,,,function(t,i,e){function n(t,i,e,n,r,s){return t&&"object"==typeof t&&(i=t.yx,n=t.yy,s=t.y,e=t.xy,r=t.x,t=t.xx),this.xx=null==t?1:t,this.yx=i||0,this.xy=e||0,this.yy=null==n?1:n,this.x=(null==r?this.x:r)||0,this.y=(null==s?this.y:s)||0,this._transform(),this}var r=e(4)
t.exports=r({initialize:n,_transform:function(){},xx:1,yx:0,x:0,xy:0,yy:1,y:0,transform:function(t,i,e,n,r,s){var o=this
return t&&"object"==typeof t&&(i=t.yx,n=t.yy,s=t.y,e=t.xy,r=t.x,t=t.xx),r||(r=0),s||(s=0),this.transformTo(o.xx*t+o.xy*i,o.yx*t+o.yy*i,o.xx*e+o.xy*n,o.yx*e+o.yy*n,o.xx*r+o.xy*s+o.x,o.yx*r+o.yy*s+o.y)},transformTo:n,translate:function(t,i){return this.transform(1,0,0,1,t,i)},move:function(t,i){return this.x+=t||0,this.y+=i||0,this._transform(),this},scale:function(t,i){return null==i&&(i=t),this.transform(t,0,0,i,0,0)},rotate:function(t,i,e){(null==i||null==e)&&(i=(this.left||0)+(this.width||0)/2,e=(this.top||0)+(this.height||0)/2)
var n=t*Math.PI/180,r=Math.sin(n),s=Math.cos(n)
this.transform(1,0,0,1,i,e)
var o=this
return this.transformTo(s*o.xx-r*o.yx,r*o.xx+s*o.yx,s*o.xy-r*o.yy,r*o.xy+s*o.yy,o.x,o.y).transform(1,0,0,1,-i,-e)},moveTo:function(t,i){var e=this
return this.transformTo(e.xx,e.yx,e.xy,e.yy,t,i)},rotateTo:function(t,i,e){var n=this,r=n.yx/n.xx>n.yy/n.xy?-1:1
return(n.xx<0?n.xy>=0:n.xy<0)&&(r=-r),this.rotate(t-180*Math.atan2(r*n.yx,r*n.xx)/Math.PI,i,e)},scaleTo:function(t,i){var e=this,n=Math.sqrt(e.xx*e.xx+e.yx*e.yx)
return e.xx/=n,e.yx/=n,n=Math.sqrt(e.yy*e.yy+e.xy*e.xy),e.yy/=n,e.xy/=n,this.scale(t,i)},resizeTo:function(t,i){var e=this.width,n=this.height
return e&&n?this.scaleTo(t/e,i/n):this},inversePoint:function(t,i){var e=this.xx,n=this.yx,r=this.xy,s=this.yy,o=this.x,h=this.y,a=n*r-e*s
return 0==a?null:{x:(s*(o-t)+r*(i-h))/a,y:(e*(h-i)+n*(t-o))/a}},point:function(t,i){var e=this
return{x:e.xx*t+e.xy*i+e.x,y:e.yx*t+e.yy*i+e.y}}})},,,,,function(t,i,e){var n=e(4)
t.exports=n({grab:function(){for(var t=0;t<arguments.length;t++)arguments[t].inject(this)
return this},empty:function(){for(var t;t=this.firstChild;)t.eject()
return this}})},function(t,i){var e,n="behavior:url(#default#VML);display:inline-block;position:absolute;left:0px;top:0px;",r={},s=function(t){e&&(r[t]=e.addRule("av\\:"+t,n))}
i.init=function(t){var i=t.namespaces
return i?(i.add("av","urn:schemas-microsoft-com:vml"),i.add("ao","urn:schemas-microsoft-com:office:office"),e=t.createStyleSheet(),e.addRule("vml","display:inline-block;position:relative;overflow:hidden;"),!0):!1},i.createElement=function(t){return t in r||s(t),document.createElement("av:"+t)}},,,,,,,,,,,,,,,,function(t,i,e){function n(t){return t.toElement?t.toElement():t.getDOMNode?t.getDOMNode():t.getNode?t.getNode():t}var r=e(4)
t.exports=r({toElement:function(){return this.element},getDOMNode:function(){return this.toElement()},getNode:function(){return this.toElement()},inject:function(t){return(t.containerElement||n(t)).appendChild(this.element),this},injectBefore:function(t){var i=n(t)
return i.parentNode.insertBefore(this.element,i),this},eject:function(){var t=this.element,i=t.parentNode
return i&&i.removeChild(t),this},subscribe:function(t,i,e){if("string"!=typeof t){var n=[]
for(var r in t)n.push(this.subscribe(r,t[r]))
return function(){for(var t=0,i=n.length;i>t;t++)n[t]()
return this}}e||(e=this)
var s
s="function"==typeof i?i.bind?i.bind(e):function(){return i.apply(e,arguments)}:i
var o=this.element
return o.addEventListener?(o.addEventListener(t,s,!1),function(){return o.removeEventListener(t,s,!1),this}):(o.attachEvent("on"+t,s),function(){return o.detachEvent("on"+t,s),this})}})},function(t,i,e){var n=e(4),r=e(17),s=e(64),o=n(r,s,{invalidate:function(){return this.parentNode&&this.parentNode.invalidate(),this._layer&&(this._layerCache=null),this},_place:function(){this.invalidate()},_transform:function(){this.invalidate()},blend:function(t){return t>=1&&this._layer&&(this._layer=null),this._opacity=t,this.parentNode&&this.parentNode.invalidate(),this},hide:function(){return this._invisible=!0,this.parentNode&&this.parentNode.invalidate(),this},show:function(){return this._invisible=!1,this.parentNode&&this.parentNode.invalidate(),this},indicate:function(t,i){return this._cursor=t,this._tooltip=i,this.invalidate()},hitTest:function(t,i){if(this._invisible)return null
var e=this.inversePoint(t,i)
return e?this.localHitTest(e.x,e.y):null},renderTo:function(t,i,e,n,r,s,o){var h=this._opacity
if(null==h||h>=1)return this.renderLayerTo(t,i,e,n,r,s,o)
var a,l=this._layer,u=!0,c=t.canvas.width,p=t.canvas.height
if(l)if(l.setTransform(1,0,0,1,0,0),a=l.canvas,a.width<c||a.height<p)a.width=c,a.height=p
else{var f=this._layerCache
f&&f.xx===i&&f.yx===e&&f.xy===n&&f.yy===r&&f.x===s&&f.y===o?u=!1:l.clearRect(0,0,c,p)}else a=document.createElement("canvas"),a.width=c,a.height=p,this._layer=l=a.getContext("2d")
u&&(this.renderLayerTo(l,i,e,n,r,s,o),this._layerCache={xx:i,yx:e,xy:n,yy:r,x:s,y:o}),t.globalAlpha=h,t.setTransform(1,0,0,1,0,0),t.drawImage(a,0,0,c,p,0,0,c,p),t.globalAlpha=1}})
t.exports=o},function(t,i){function e(){throw new Error("You must require a mode before requiring anything else.")}i.Surface=e,i.Path=e,i.Shape=e,i.Group=e,i.ClippingRectangle=e,i.Text=e,i.setCurrent=function(t){for(var e in t)i[e]=t[e]}},function(t,i,e){var n=e(4),r=e(17),s=e(102),o=e(23)
t.exports=n(s,r,{initialize:function(t){this.element=o.createElement(t)},_place:function(){this.parentNode&&this._transform()},hide:function(){return this.element.style.display="none",this},show:function(){return this.element.style.display="",this},indicate:function(t,i){return t&&(this.element.style.cursor=t),i&&(this.element.title=i),this}})},function(t,i,e){var n=e(4),r=e(63),s=100,o=Math.round,h=n(r,{initialize:function(t){this.reset(),t instanceof h?this.path=[Array.prototype.join.call(t.path," ")]:t&&(t.applyToPath?t.applyToPath(this):this.push(t))},onReset:function(){this.path=[]},onMove:function(t,i,e,n){this.path.push("m",o(e*s),o(n*s))},onLine:function(t,i,e,n){this.path.push("l",o(e*s),o(n*s))},onBezierCurve:function(t,i,e,n,r,h,a,l){this.path.push("c",o(e*s),o(n*s),o(r*s),o(h*s),o(a*s),o(l*s))},_arcToBezier:r.prototype.onArc,onArc:function(t,i,e,n,r,h,a,l,u,c,p,f){return a!=l||f?this._arcToBezier(t,i,e,n,r,h,a,l,u,c,p,f):(r*=s,h*=s,a*=s,void this.path.push(p?"at":"wa",o(r-a),o(h-a),o(r+a),o(h+a),o(t*s),o(i*s),o(e*s),o(n*s)))},onClose:function(){this.path.push("x")},toVML:function(){return this.path.join(" ")}})
h.prototype.toString=h.prototype.toVML,t.exports=h},,,,,,,,,,,,,,,,,,,function(t){var i={maroon:"#800000",red:"#ff0000",orange:"#ffA500",yellow:"#ffff00",olive:"#808000",purple:"#800080",fuchsia:"#ff00ff",white:"#ffffff",lime:"#00ff00",green:"#008000",navy:"#000080",blue:"#0000ff",aqua:"#00ffff",teal:"#008080",black:"#000000",silver:"#c0c0c0",gray:"#808080"},e=function(t,i){for(var e=[],n=0,r=t.length;r>n;n++)e[n]=i(t[n],n)
return e},n=function(t,e){if(t.isColor)this.red=t.red,this.green=t.green,this.blue=t.blue,this.alpha=t.alpha
else{var r=i[t]
switch(r&&(t=r,e="hex"),typeof t){case"string":e||(e=(e=t.match(/^rgb|^hsb|^hsl/))?e[0]:"hex")
break
case"object":e=e||"rgb",t=t.toString()
break
case"number":e="hex",t=t.toString(16)}t=n["parse"+e.toUpperCase()](t),this.red=t[0],this.green=t[1],this.blue=t[2],this.alpha=t[3]}this.isColor=!0},r=function(t,i,e){return Math.min(e,Math.max(i,t))},s=/([-.\d]+\%?)\s*,\s*([-.\d]+\%?)\s*,\s*([-.\d]+\%?)\s*,?\s*([-.\d]*\%?)/,o=/^#?([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{1,2})([a-f0-9]{0,2})$/i
n.parseRGB=function(t){return e(t.match(s).slice(1),function(t,i){return t&&(t=parseFloat(t)*("%"==t[t.length-1]?2.55:1)),3>i?Math.round((t%=256)<0?t+256:t):r(""===t?1:Number(t),0,1)})},n.parseHEX=function(t){return 1==t.length&&(t=t+t+t),e(t.match(o).slice(1),function(t,i){return 3==i?t?parseInt(t,16)/255:1:parseInt(1==t.length?t+t:t,16)})},n.parseHSB=function(t){var i=e(t.match(s).slice(1),function(t,i){return t&&(t=parseFloat(t)),0===i?Math.round((t%=360)<0?t+360:t):3>i?r(Math.round(t),0,100):r(""===t?1:Number(t),0,1)}),n=i[3],o=Math.round(i[2]/100*255)
if(0==i[1])return[o,o,o,n]
var h=i[0],a=h%60,l=Math.round(i[2]*(100-i[1])/1e4*255),u=Math.round(i[2]*(6e3-i[1]*a)/6e5*255),c=Math.round(i[2]*(6e3-i[1]*(60-a))/6e5*255)
switch(Math.floor(h/60)){case 0:return[o,c,l,n]
case 1:return[u,o,l,n]
case 2:return[l,o,c,n]
case 3:return[l,u,o,n]
case 4:return[c,l,o,n]
default:return[o,l,u,n]}},n.parseHSL=function(t){var i=e(t.match(s).slice(1),function(t,i){return t&&(t=parseFloat(t)),0===i?Math.round((t%=360)<0?t+360:t):3>i?r(Math.round(t),0,100):r(""===t?1:Number(t),0,1)}),n=i[0]/60,o=i[1]/100,h=i[2]/100,a=i[3],l=(1-Math.abs(2*h-1))*o,u=l*(1-Math.abs(n%2-1)),c=h-l/2,p=Math.round(255*(l+c)),f=Math.round(255*(u+c)),d=Math.round(255*c)
switch(Math.floor(n)){case 0:return[p,f,d,a]
case 1:return[f,p,d,a]
case 2:return[d,p,f,a]
case 3:return[d,f,p,a]
case 4:return[f,d,p,a]
default:return[p,d,f,a]}}
var h=function(t,i){return 1!=i[3]?t+="a":i.pop(),t+"("+i.join(", ")+")"}
n.prototype={toHSB:function(t){var i=this.red,e=this.green,n=this.blue,r=this.alpha,s=Math.max(i,e,n),o=Math.min(i,e,n),a=s-o,l=0,u=0!=a?a/s:0,c=s/255
if(u){var p=(s-i)/a,f=(s-e)/a,d=(s-n)/a
l=i==s?d-f:e==s?2+p-d:4+f-p,(l/=6)<0&&l++}var v=[Math.round(360*l),Math.round(100*u),Math.round(100*c),r]
return t?v:h("hsb",v)},toHSL:function(t){var i=this.red,e=this.green,n=this.blue,r=this.alpha,s=Math.max(i,e,n),o=Math.min(i,e,n),a=s-o,l=0,u=0!=a?a/(255-Math.abs(s+o-255)):0,c=(s+o)/512
if(u){var p=(s-i)/a,f=(s-e)/a,d=(s-n)/a
l=i==s?d-f:e==s?2+p-d:4+f-p,(l/=6)<0&&l++}var v=[Math.round(360*l),Math.round(100*u),Math.round(100*c),r]
return t?v:h("hsl",v)},toHEX:function(t){var i=this.alpha,n=1==(i=Math.round(255*i).toString(16)).length?i+i:i,r=e([this.red,this.green,this.blue],function(t){return t=t.toString(16),1==t.length?"0"+t:t})
return t?r.concat(n):"#"+r.join("")+("ff"==n?"":n)},toRGB:function(t){var i=[this.red,this.green,this.blue,this.alpha]
return t?i:h("rgb",i)}},n.prototype.toString=n.prototype.toRGB,n.hex=function(t){return new n(t,"hex")},null==this.hex&&(this.hex=n.hex),n.hsb=function(t,i,e,r){return new n([t||0,i||0,e||0,null==r?1:r],"hsb")},null==this.hsb&&(this.hsb=n.hsb),n.hsl=function(t,i,e,r){return new n([t||0,i||0,e||0,null==r?1:r],"hsl")},null==this.hsl&&(this.hsl=n.hsl),n.rgb=function(t,i,e,r){return new n([t||0,i||0,e||0,null==r?1:r],"rgb")},null==this.rgb&&(this.rgb=n.rgb),n.detach=function(t){return t=new n(t),[n.rgb(t.red,t.green,t.blue).toString(),t.alpha]},t.exports=n},function(t,i,e){var n=e(4)
t.exports=n({initialize:function(t){this.reset().push(t)},push:function(){var t=Array.prototype.join.call(arguments," ").match(/[a-df-z]|[\-+]?(?:[\d\.]e[\-+]?|[^\s\-+,a-z])+/gi)
if(!t)return this
for(var i,e=t[0],n=1;e;){switch(e){case"m":this.move(t[n++],t[n++])
break
case"l":this.line(t[n++],t[n++])
break
case"c":this.curve(t[n++],t[n++],t[n++],t[n++],t[n++],t[n++])
break
case"s":this.curve(t[n++],t[n++],null,null,t[n++],t[n++])
break
case"q":this.curve(t[n++],t[n++],t[n++],t[n++])
break
case"t":this.curve(t[n++],t[n++])
break
case"a":this.arc(t[n+5],t[n+6],t[n],t[n+1],t[n+3],!+t[n+4],t[n+2]),n+=7
break
case"h":this.line(t[n++],0)
break
case"v":this.line(0,t[n++])
break
case"M":this.moveTo(t[n++],t[n++])
break
case"L":this.lineTo(t[n++],t[n++])
break
case"C":this.curveTo(t[n++],t[n++],t[n++],t[n++],t[n++],t[n++])
break
case"S":this.curveTo(t[n++],t[n++],null,null,t[n++],t[n++])
break
case"Q":this.curveTo(t[n++],t[n++],t[n++],t[n++])
break
case"T":this.curveTo(t[n++],t[n++])
break
case"A":this.arcTo(t[n+5],t[n+6],t[n],t[n+1],t[n+3],!+t[n+4],t[n+2]),n+=7
break
case"H":this.lineTo(t[n++],this.penY)
break
case"V":this.lineTo(this.penX,t[n++])
break
case"Z":case"z":this.close()
break
default:e=i,n--
continue}i=e,"m"==i?i="l":"M"==i&&(i="L"),e=t[n++]}return this},reset:function(){return this.penX=this.penY=0,this.penDownX=this.penDownY=null,this._pivotX=this._pivotY=0,this.onReset(),this},move:function(t,i){return this.onMove(this.penX,this.penY,this._pivotX=this.penX+=+t,this._pivotY=this.penY+=+i),this},moveTo:function(t,i){return this.onMove(this.penX,this.penY,this._pivotX=this.penX=+t,this._pivotY=this.penY=+i),this},line:function(t,i){return this.lineTo(this.penX+ +t,this.penY+ +i)},lineTo:function(t,i){return null==this.penDownX&&(this.penDownX=this.penX,this.penDownY=this.penY),this.onLine(this.penX,this.penY,this._pivotX=this.penX=+t,this._pivotY=this.penY=+i),this},curve:function(t,i,e,n,r,s){var o=this.penX,h=this.penY
return this.curveTo(o+ +t,h+ +i,null==e?null:o+ +e,null==n?null:h+ +n,null==r?null:o+ +r,null==s?null:h+ +s)},curveTo:function(t,i,e,n,r,s){var o=this.penX,h=this.penY
return null==e&&(e=+t,n=+i,t=2*o-(this._pivotX||0),i=2*h-(this._pivotY||0)),null==r?(this._pivotX=+t,this._pivotY=+i,r=+e,s=+n,e=(r+2*+t)/3,n=(s+2*+i)/3,t=(o+2*+t)/3,i=(h+2*+i)/3):(this._pivotX=+e,this._pivotY=+n),null==this.penDownX&&(this.penDownX=o,this.penDownY=h),this.onBezierCurve(o,h,+t,+i,+e,+n,this.penX=+r,this.penY=+s),this},arc:function(t,i,e,n,r,s,o){return this.arcTo(this.penX+ +t,this.penY+ +i,e,n,r,s,o)},arcTo:function(t,i,e,n,r,s,o){if(n=Math.abs(+n||+e||+i-this.penY),e=Math.abs(+e||+t-this.penX),!e||!n||t==this.penX&&i==this.penY)return this.lineTo(t,i)
var h=this.penX,a=this.penY,l=!+s,u=!!+r,c=o?o*Math.PI/180:0,p=Math.cos(c),f=Math.sin(c)
t-=h,i-=a
var d=p*t/2+f*i/2,v=-f*t/2+p*i/2,m=e*e*n*n,y=n*n*d*d,g=e*e*v*v,x=m-g-y
if(0>x)x=Math.sqrt(1-x/m),e*=x,n*=x,d=t/2,v=i/2
else{x=Math.sqrt(x/(g+y)),u==l&&(x=-x)
var _=-x*v*e/n,b=x*d*n/e
d=p*_-f*b+t/2,v=f*_+p*b+i/2}var w=p/e,C=f/e,M=-f/n,T=p/n,S=Math.atan2(M*-d+T*-v,w*-d+C*-v),k=Math.atan2(M*(t-d)+T*(i-v),w*(t-d)+C*(i-v))
return d+=h,v+=a,t+=h,i+=a,null==this.penDownX&&(this.penDownX=this.penX,this.penDownY=this.penY),this.onArc(h,a,this._pivotX=this.penX=t,this._pivotY=this.penY=i,d,v,e,n,S,k,!l,o),this},counterArc:function(t,i,e,n,r){return this.arc(t,i,e,n,r,!0)},counterArcTo:function(t,i,e,n,r){return this.arcTo(t,i,e,n,r,!0)},close:function(){return null!=this.penDownX&&(this.onClose(this.penX,this.penY,this.penX=this.penDownX,this.penY=this.penDownY),this.penDownX=null),this},onReset:function(){},onMove:function(){},onLine:function(t,i,e,n){this.onBezierCurve(t,i,t,i,e,n,e,n)},onBezierCurve:function(t,i,e,n,r,s,o,h){var a,l,u,c,p,f=o-t,d=h-i,v=f*f+d*d
if(u=e-t,c=n-i,p=u*f+c*d,p>v?(u-=f,c-=d):p>0&&0!=v&&(u-=p/v*f,c-=p/v*d),a=u*u+c*c,u=r-t,c=s-i,p=u*f+c*d,p>v?(u-=f,c-=d):p>0&&0!=v&&(u-=p/v*f,c-=p/v*d),l=u*u+c*c,.01>a&&.01>l)return void this.onLine(t,i,o,h)
if(isNaN(a)||isNaN(l))throw new Error("Bad input")
var m=.5*(e+r),y=.5*(n+s),g=.5*(e+t),x=.5*(n+i),_=.5*(g+m),b=.5*(x+y),w=.5*(o+r),C=.5*(h+s),M=.5*(w+m),T=.5*(C+y),S=.5*(_+M),k=.5*(b+T)
this.onBezierCurve(t,i,g,x,_,b,S,k),this.onBezierCurve(S,k,M,T,w,C,o,h)},onArc:function(t,i,e,n,r,s,o,h,a,l,u,c){var p=c?c*Math.PI/180:0,f=Math.cos(p),d=Math.sin(p),v=f*o,m=-d*h,y=d*o,g=f*h,x=l-a
0>x&&!u?x+=2*Math.PI:x>0&&u&&(x-=2*Math.PI)
for(var _=Math.ceil(Math.abs(x/(Math.PI/2))),b=x/_,w=4/3*Math.tan(b/4),C=Math.cos(a),M=Math.sin(a),T=0;_>T;T++){var S=C-w*M,k=M+w*C
a+=b,C=Math.cos(a),M=Math.sin(a)
var z=C+w*M,E=M-w*C
this.onBezierCurve(t,i,r+v*S+m*k,s+y*S+g*k,r+v*z+m*E,s+y*z+g*E,t=r+v*C+m*M,i=s+y*C+g*M)}},onClose:function(t,i,e,n){this.onLine(t,i,e,n)}})},function(t,i,e){var n=e(4)
t.exports=n({_resetPlacement:function(){var t=this.parentNode
if(t){var i=this.previousSibling,e=this.nextSibling
i?i.nextSibling=e:t.firstChild=e,e?e.previousSibling=i:t.lastChild=this.previousSibling}return this.previousSibling=null,this.nextSibling=null,this.parentNode=null,this},inject:function(t){this._resetPlacement()
var i=t.lastChild
return i?(i.nextSibling=this,this.previousSibling=i):t.firstChild=this,t.lastChild=this,this.parentNode=t,this._place(),this},injectBefore:function(t){this._resetPlacement()
var i=t.parentNode
if(!i)return this
var e=t.previousSibling
return e?(e.nextSibling=this,this.previousSibling=e):i.firstChild=this,t.previousSibling=this,this.nextSibling=t,this.parentNode=i,this._place(),this},eject:function(){return this._resetPlacement(),this._place(),this},_place:function(){},dispatch:function(t){var i=this._events,e=i&&i[t.type]
if(e){e=e.slice(0)
for(var n=0,r=e.length;r>n;n++){var s,o=e[n]
s="function"==typeof o?o.call(this,t):o.handleEvent(t),s===!1&&t.preventDefault()}}this.parentNode&&this.parentNode.dispatch&&this.parentNode.dispatch(t)},subscribe:function(t,i,e){if("string"!=typeof t){var n=[]
for(var r in t)n.push(this.subscribe(r,t[r]))
return function(){for(var t=0,i=n.length;i>t;t++)n[t]()
return this}}var s="function"==typeof i?i.bind(e||this):i,o=this._events||(this._events={}),h=o[t]||(o[t]=[])
return h.push(s),function(){for(var t=0,i=h.length;i>t;t++)if(h[t]===s){h.splice(t,1)
break}}}})},function(t,i,e){function n(t,i,e){i=s.detach(i),e=s.detach(e)
var n=document.createElement("canvas"),r=n.getContext("2d")
return n.width=t.width,n.height=t.height,r.fillStyle=e[0],r.fillRect(0,0,t.width,t.height),r.globalCompositeOperation="lighter",r.drawImage(t,0,0),n}var r=e(4),s=e(62),o=e(17),h=e(40),a="undefined"!=typeof document&&document.createElement("canvas"),l=a&&a.getContext&&a.getContext("2d"),u=r(h,{initialize:function(){this._fill=null,this._pendingFill=null,this._fillTransform=null,this._stroke=null,this._strokeCap=null,this._strokeDash=null,this._strokeJoin=null,this._strokeWidth=null},_addColors:function(t,i){if("length"in i)for(var e=0,n=i.length-1;n>=e;e++)t.addColorStop(e/n,new s(i[e]).toString())
else for(var r in i)t.addColorStop(r,new s(i[r]).toString())
return t},fill:function(t){return arguments.length>1?this.fillLinear(arguments):(this._pendingFill&&this._pendingFill(),this._fill=t?new s(t).toString():null,this.invalidate())},fillRadial:function(t,i,e,n,r,h,a){if(null==i&&(i=(this.left||0)+.5*(this.width||0)),null==e&&(e=(this.top||0)+.5*(this.height||0)),null==r&&(r=n||.5*this.height||0),null==n&&(n=.5*(this.width||0)),null==h&&(h=i),null==a&&(a=e),h+=h-i,a+=a-e,0===n||"0"===n)return this.fillLinear(t)
var u=r/n
this._pendingFill&&this._pendingFill()
var c=l.createRadialGradient(i,e/u,0,h,a/u,2*n)
if("length"in t)for(var p=0,f=t.length-1;f>=p;p++)c.addColorStop(p/f/2,new s(t[p]).toString()),c.addColorStop(1-p/f/2,new s(t[p]).toString())
else for(var d in t)c.addColorStop(d/2,new s(t[d]).toString()),c.addColorStop(1-d/2,new s(t[d]).toString())
return this._fill=c,this._fillTransform=new o(1,0,0,u),this.invalidate()},fillLinear:function(t,i,e,n,r){if(arguments.length<5){var s=(null==i?270:i)*Math.PI/180,h=Math.cos(s),a=-Math.sin(s),u=(Math.abs(h)+Math.abs(a))/2,c=this.width||1,p=this.height||1
h*=u,a*=u,i=.5-h,n=.5+h,e=.5-a,r=.5+a,this._fillTransform=new o(c,0,0,p)}else this._fillTransform=null
this._pendingFill&&this._pendingFill()
var f=l.createLinearGradient(i,e,n,r)
return this._addColors(f,t),this._fill=f,this.invalidate()},fillImage:function(t,i,e,n,r,s,o){this._pendingFill&&this._pendingFill()
var h=t
if(h instanceof Image||(h=new Image,h.src=t),h.width&&h.height)return this._fillImage(h,i,e,n||0,r||0,s,o)
this._fill=null
var a=this,l=function(){u(),a._fillImage(h,i,e,n||0,r||0,s,o)},u=function(){h.removeEventListener("load",l,!1),a._pendingFill=null}
return this._pendingFill=u,h.addEventListener("load",l,!1),this},_fillImage:function(t,i,e,r,s,h,a){var u=i?i/t.width:1,c=e?e/t.height:1
return null!=h&&(t=n(t,h,a)),this._fill=l.createPattern(t,"repeat"),this._fillTransform=new o(u,0,0,c,r||0,s||0),this.invalidate()},stroke:function(t,i,e,n,r){return this._stroke=t?new s(t).toString():null,this._strokeWidth=null!=i?i:1,this._strokeCap=null!=e?e:"round",this._strokeJoin=null!=n?n:"round",this._strokeDash=r,this.invalidate()},element_renderTo:h.prototype.renderTo,renderTo:function(t,i,e,n,r,s,o){var h=this._opacity
if(null==h||h>=1)return this.renderLayerTo(t,i,e,n,r,s,o)
if(this._fill&&this._stroke)return this.element_renderTo(t,i,e,n,r,s,o)
t.globalAlpha=h
var a=this.renderLayerTo(t,i,e,n,r,s,o)
return t.globalAlpha=1,a},renderLayerTo:function(t,i,e,n,r,s,o){t.setTransform(i,e,n,r,s,o),this.renderShapeTo(t)}})
u._genericContext=l,t.exports=u},function(t,i,e){var n=e(4),r=e(63),s=n(r,{initialize:function(t){this.reset(),t instanceof s?this.path=t.path.slice(0):t&&(t.applyToPath?t.applyToPath(this):this.push(t))},onReset:function(){this.path=[]},onMove:function(t,i,e,n){this.path.push(function(t){t.moveTo(e,n)})},onLine:function(t,i,e,n){this.path.push(function(t){t.lineTo(e,n)})},onBezierCurve:function(t,i,e,n,r,s,o,h){this.path.push(function(t){t.bezierCurveTo(e,n,r,s,o,h)})},_arcToBezier:r.prototype.onArc,onArc:function(t,i,e,n,r,s,o,h,a,l,u,c){return o!=h||c?this._arcToBezier(t,i,e,n,r,s,o,h,a,l,u,c):void this.path.push(function(t){t.arc(r,s,o,a,l,u)})},onClose:function(){this.path.push(function(t){t.closePath()})},toCommands:function(){return this.path.slice(0)}})
t.exports=s},function(t,i,e){var n=e(4),r=e(17),s=e(62),o=e(42),h=e(23),a=100,l={left:0,top:0,width:500,height:500}
t.exports=n(o,{element_initialize:o.prototype.initialize,initialize:function(t){this.element_initialize(t)
var i=this.element,e=this.skewElement=h.createElement("skew")
e.on=!0,i.appendChild(e)
var n=this.fillElement=h.createElement("fill")
n.on=!1,i.appendChild(n)
var r=this.strokeElement=h.createElement("stroke")
r.on=!1,i.appendChild(r)},_transform:function(){var t=this.parentNode,i=t?new r(t._activeTransform).transform(this):this,e=this._boxCoords||this._size||l,n=e.left||0,s=e.top||0,o=e.width||1,h=e.height||1,u=i.yx/i.xx>i.yy/i.xy;(i.xx<0?i.xy>=0:i.xy<0)&&(u=!u),u=u?-1:1,i=(new r).scale(u,1).transform(i)
var c=180*Math.atan2(-i.xy,i.yy)/Math.PI,p=c*Math.PI/180,f=Math.sin(p),d=Math.cos(p),v=new r(i.xx*d-i.xy*f,(i.yx*d-i.yy*f)*u,(i.xy*d+i.xx*f)*u,i.yy*d+i.yx*f),m=(new r).rotate(c,0,0),y=(new r).rotate(-c,0,0).transform(i).moveTo(0,0)
o*=Math.abs(y.xx),h*=Math.abs(y.yy)
var g=i.x,x=i.y,_=-o/2,b=-h/2,w=m.point(_,b)
g-=w.x-_,x-=w.y-b
var C=new r(i).moveTo(0,0)
w=C.point(n,s),g+=w.x,x+=w.y,0>u&&(g=-g-o)
var M=C.point(-n,-s),T=m.point(o,h),S=m.point(o,0),k=m.point(0,h),z=Math.min(0,T.x,S.x,k.x),E=Math.max(0,T.x,S.x,k.x),P=Math.min(0,T.y,S.y,k.y),j=Math.max(0,T.y,S.y,k.y),L=(M.x-T.x/2)/(E-z)*u,N=(M.y-T.y/2)/(j-P)
w=y.point(n,s),n=w.x,s=w.y
var R=this._strokeWidth
if(R){var _=i.xx+i.xy,b=i.yy+i.yx
R*=Math.sqrt(_*_+b*b)/Math.sqrt(2)}n*=a,s*=a,g*=a,x*=a,o*=a,h*=a
var D=this.element
D.coordorigin=n+","+s,D.coordsize=o+","+h,D.style.left=g+"px",D.style.top=x+"px",D.style.width=o,D.style.height=h,D.style.rotation=c.toFixed(8),D.style.flip=0>u?"x":""
var X=this.skewElement
X.matrix=[v.xx.toFixed(4),v.xy.toFixed(4),v.yx.toFixed(4),v.yy.toFixed(4),0,0],X.origin=L+","+N,this.strokeElement.weight=R+"px"},_createGradient:function(t,i){var e=this.fillElement
this.element.removeChild(e),e.type=t,e.method="none",e.rotate=!0
var n,r,o=[],h=function(t,i){i=s.detach(i),null==n?n=r=i:r=i,o.push(t+" "+i[0])}
if("length"in i)for(var a=0,l=i.length-1;l>=a;a++)h(a/l,i[a])
else for(var u in i)h(u,i[u])
return e.color=n[0],e.color2=r[0],e.colors=o,e.opacity=r[1],e["ao:opacity2"]=n[1],e.on=!0,this.element.appendChild(e),e},_setColor:function(t,i){var e="fill"==t?this.fillElement:this.strokeElement
null==i?e.on=!1:(i=s.detach(i),e.color=i[0],e.opacity=i[1],e.on=!0)},fill:function(t){if(arguments.length>1)this.fillLinear(arguments)
else{this._boxCoords=l
var i=this.fillElement
i.type="solid",i.color2="",i["ao:opacity2"]="",i.colors&&(i.colors.value=""),this._setColor("fill",t)}return this},fillRadial:function(t,i,e,n,r,s,o){var h=this._createGradient("gradientradial",t)
null==i&&(i=this.left+.5*this.width),null==e&&(e=this.top+.5*this.height),null==r&&(r=n||.5*this.height),null==n&&(n=.5*this.width),null==s&&(s=i),null==o&&(o=e),s+=s-i,o+=o-e
var a=this._boxCoords={left:s-2*n,top:o-2*r,width:4*n,height:4*r}
return i-=a.left,e-=a.top,i/=a.width,e/=a.height,h.focussize="0 0",h.focusposition=i+","+e,h.focus="50%",this._transform(),this},fillLinear:function(t,i,e,n,r){var s=this._createGradient("gradient",t)
if(s.focus="100%",5==arguments.length){var o=Math.abs(n-i),h=Math.abs(r-e)
this._boxCoords={left:Math.min(i,n),top:Math.min(e,r),width:1>o?h:o,height:1>h?o:h},s.angle=(360+180*Math.atan2((n-i)/h,(r-e)/o)/Math.PI)%360}else this._boxCoords=null,s.angle=null==i?0:(90+i)%360
return this._transform(),this},fillImage:function(t,i,e,n,r,o,h){var a=this.fillElement
return null!=o?(o=s.detach(o),null!=h&&(h=s.detach(h)),a.type="pattern",a.color=o[0],a.color2=null==h?o[0]:h[0],a.opacity=null==h?0:h[1],a["ao:opacity2"]=o[1]):(a.type="tile",a.color="",a.color2="",a.opacity=1,a["ao:opacity2"]=1),a.colors&&(a.colors.value=""),a.rotate=!0,a.src=t,a.size="1,1",a.position="0,0",a.origin="0,0",a.aspect="ignore",a.on=!0,n||(n=0),r||(r=0),this._boxCoords=i?{left:n+.5,top:r+.5,width:i,height:e}:null,this._transform(),this},stroke:function(t,i,e,n){var r=this.strokeElement
return this._strokeWidth=null!=i?i:1,r.weight=null!=i?i+"px":1,r.endcap=null!=e?"butt"==e?"flat":e:"round",r.joinstyle=null!=n?n:"round",this._setColor("stroke",t),this}})},function(t,i,e){var n=e(4),r=e(17),s=e(22),o=e(42)
t.exports=n(o,s,{element_initialize:o.prototype.initialize,initialize:function(t,i){this.element_initialize("group"),this.width=t,this.height=i},_transform:function(){var t=this.element
t.coordorigin="0,0",t.coordsize="1000,1000",t.style.left=0,t.style.top=0,t.style.width=1e3,t.style.height=1e3,t.style.rotation=0
var i=this.parentNode
this._activeTransform=i?new r(i._activeTransform).transform(this):this
for(var e=this.firstChild;e;)e._transform(),e=e.nextSibling}})},function(t,i,e){var n=e(4),r=e(22),s=e(39),o=e(23),h=100
t.exports=n(s,r,{initialize:function(t,i){this.element=document.createElement("vml"),this.containerElement=o.createElement("group"),this.element.appendChild(this.containerElement),null!=t&&null!=i&&this.resize(t,i)},resize:function(t,i){this.width=t,this.height=i
var e=this.element.style
e.pixelWidth=t,e.pixelHeight=i,e=this.containerElement.style,e.width=t,e.height=i
var n=.5*h
return this.containerElement.coordorigin=n+","+n,this.containerElement.coordsize=t*h+","+i*h,this}})},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,i,e){var n=e(4),r=e(64),s=e(39)
t.exports=n(r,s,{dummy_inject:r.prototype.inject,dummy_injectBefore:r.prototype.injectBefore,dummy_eject:r.prototype.eject,native_inject:s.prototype.inject,native_injectBefore:s.prototype.injectBefore,native_eject:s.prototype.eject,inject:function(t){return this.dummy_inject(t),this.native_inject(t),this},injectBefore:function(t){return this.dummy_injectBefore(t),this.native_injectBefore(t),this},eject:function(){return this.dummy_eject(),this.native_eject(),this}})},function(t,i,e){i.Surface=e(107),i.Path=e(66),i.Shape=e(106),i.Group=e(105),i.ClippingRectangle=e(104),i.Text=e(108)},function(t,i,e){var n=e(4),r=e(22),s=e(40)
t.exports=n(s,r,{initialize:function(t,i){this.width=t,this.height=i},localHitTest:function(t,i){for(var e=this.lastChild;e;){var n=e.hitTest(t,i)
if(n)return n
e=e.previousSibling}return null},renderLayerTo:function(t,i,e,n,r,s,o){t.setTransform(i,e,n,r,s,o),t.save(),t.beginPath(),t.rect(this.x,this.y,this.width,this.height),t.clip()
for(var h=this.firstChild;h;)h.renderTo(t,i,e,n,r,s,o),h=h.nextSibling
t.restore()}})},function(t,i,e){var n=e(4),r=e(22),s=e(40)
t.exports=n(s,r,{initialize:function(t,i){this.width=t,this.height=i},localHitTest:function(t,i){for(var e=this.lastChild;e;){var n=e.hitTest(t,i)
if(n)return n
e=e.previousSibling}return null},renderLayerTo:function(t,i,e,n,r,s,o){if(!this._invisible){s=i*this.x+n*this.y+s,o=e*this.x+r*this.y+o
var h=i
i=h*this.xx+n*this.yx,n=h*this.xy+n*this.yy,h=e,e=h*this.xx+r*this.yx,r=h*this.xy+r*this.yy
for(var a=this.firstChild;a;)a.renderTo(t,i,e,n,r,s,o),a=a.nextSibling}}})},function(t,i,e){var n=e(4),r=e(65),s=e(66)
t.exports=n(r,{base_initialize:r.prototype.initialize,initialize:function(t,i,e){this.base_initialize(),this.width=i,this.height=e,null!=t&&this.draw(t)},draw:function(t,i,e){return t instanceof s||(t=new s(t)),this.path=t,this._commands=t.toCommands(),null!=i&&(this.width=i),null!=e&&(this.height=e),this.invalidate()},localHitTest:function(t,i){if(!this._fill)return null
if(null==this.width||null==this.height){var e=r._genericContext,n=this._commands
if(!n)return null
e.beginPath()
for(var s=0,o=n.length;o>s;s++)n[s](e)
return e.isPointInPath(t,i)?this:null}return t>0&&i>0&&t<this.width&&i<this.height?this:null},renderShapeTo:function(t){if(this._invisible||!this._commands||!this._fill&&!this._stroke)return null
t.transform(this.xx,this.yx,this.xy,this.yy,this.x,this.y)
var i=this._commands,e=this._fill,n=this._stroke,r=this._strokeDash
t.beginPath(),r?t.setLineDash?t.setLineDash(r):t.mozDash=r:t.setLineDash?t.setLineDash([]):t.mozDash=null
for(var s=0,o=i.length;o>s;s++)i[s](t)
if(e){var h=this._fillTransform
h?(t.save(),t.transform(h.xx,h.yx,h.xy,h.yy,h.x,h.y),t.fillStyle=e,t.fill(),t.restore()):(t.fillStyle=e,t.fill())}n&&(t.strokeStyle=n,t.lineWidth=this._strokeWidth,t.lineCap=this._strokeCap,t.lineJoin=this._strokeJoin,t.stroke())}})},function(t,i,e){var n,r=e(4),s=e(22),o=e(39),h=1e3/60,a=[],l=function(){clearTimeout(n),n=null
var t=a
a=[]
for(var i=0,e=t.length;e>i;i++){var r=t[i]
r._valid=!0,r.render()}},u="undefined"!=typeof window&&window.devicePixelRatio||1,c=null,p=null,f=r(o,s,{initialize:function(t,i){{var e=this.element=document.createElement("canvas")
this.context=e.getContext("2d")}this._valid=!0,null!=t&&null!=i&&this.resize(t,i),e.addEventListener("mousemove",this,!1),e.addEventListener("mouseout",this,!1),e.addEventListener("mouseover",this,!1),e.addEventListener("mouseup",this,!1),e.addEventListener("mousedown",this,!1),e.addEventListener("click",this,!1)},handleEvent:function(t){if(null!=t.clientX){var i=this.element,e=i.getBoundingClientRect(),n=t.clientX-e.left-i.clientLeft,r=t.clientY-e.top-i.clientTop,s=this.hitTest(n,r)
s!==c&&(c&&c.dispatch({type:"mouseout",target:c,relatedTarget:s,sourceEvent:t}),s&&s.dispatch({type:"mouseover",target:s,relatedTarget:c,sourceEvent:t}),c=s,p=this,this.refreshCursor()),s&&s.dispatch(t)}},refreshCursor:function(){if(p===this){for(var t=c,i="",e="";!(!t||!i&&t._cursor&&(i=t._cursor,e)||!e&&t._tooltip&&(e=t._tooltip,i));)t=t.parentNode
this.element.style.cursor=i,this.element.title=e}},resize:function(t,i){var e=this.element
return e.setAttribute("width",t*u),e.setAttribute("height",i*u),e.style.width=t+"px",e.style.height=i+"px",this.width=t,this.height=i,this},invalidate:function(){return this._valid&&(this._valid=!1,a.push(this),n||(window.mozRequestAnimationFrame?(n=!0,window.mozRequestAnimationFrame(l)):n=setTimeout(l,h))),this},hitTest:function(t,i){if(0>t||0>i||t>this.width||i>this.height)return null
for(var e=this.lastChild;e;){var n=e.hitTest(t,i)
if(n)return n
e=e.previousSibling}return null},render:function(){var t=this.firstChild,i=this.context
for(i.setTransform(u,0,0,u,0,0),i.clearRect(0,0,this.width,this.height);t;)t.renderTo(i,u,0,0,u,0,0),t=t.nextSibling
this.refreshCursor()}})
t.exports=f},function(t,i,e){var n=e(4),r=e(65),s={middle:"center"}
t.exports=n(r,{base_initialize:r.prototype.initialize,initialize:function(){this.base_initialize(),this.draw.apply(this,arguments)},draw:function(t,i,e){var n
"string"==typeof i?n=Number(/(\d+)/.exec(i)[0]):i?(n=parseFloat(i.fontSize||i["font-size"]||"12"),i=(i.fontStyle||i["font-style"]||"")+" "+(i.fontVariant||i["font-variant"]||"")+" "+(i.fontWeight||i["font-weight"]||"")+" "+n+"px "+(i.fontFamily||i["font-family"]||"Arial")):i=this._font
var o=t&&t.split(/\r?\n/)
this._font=i,this._fontSize=n,this._text=o,this._alignment=s[e]||e||"left"
var h=r._genericContext
h.font=this._font,h.textAlign=this._alignment,h.textBaseline="middle",o=this._text
for(var a=o.length,l=0,u=0;a>u;u++){var c=h.measureText(o[u]).width
c>l&&(l=c)}return this.width=l,this.height=a?1.1*a*n:0,this.invalidate()},localHitTest:function(t,i){return this._fill&&t>0&&i>0&&t<this.width&&i<this.height?this:null},renderShapeTo:function(t){if(this._invisible||!this._text||!this._fill&&!this._stroke)return null
t.transform(this.xx,this.yx,this.xy,this.yy,this.x,this.y)
var i=this._fill,e=this._stroke,n=this._text,r=this._strokeDash
t.font=this._font,t.textAlign=this._alignment,t.textBaseline="middle"
var s=this._fontSize,o=s/2,h=1.1*s,a=n,l=a.length
if(i){t.fillStyle=i
for(var u=0;l>u;u++)t.fillText(a[u],0,o+u*h)}if(e)for(r?t.setLineDash?t.setLineDash(r):t.mozDash=r:t.setLineDash?t.setLineDash([]):t.mozDash=null,t.strokeStyle=e,t.lineWidth=this._strokeWidth,t.lineCap=this._strokeCap,t.lineJoin=this._strokeJoin,u=0;l>u;u++)t.strokeText(a[u],0,o+u*h)}})},function(t,i,e){var n=e(110),r=e(103),s=function(){var t=document.createElement("canvas")
return t&&!!t.getContext},o=s()?r:n
i.Surface=o.Surface,i.Path=o.Path,i.Shape=o.Shape,i.Group=o.Group,i.ClippingRectangle=o.ClippingRectangle,i.Text=o.Text,e(41).setCurrent(i)},function(t,i,e){i.Surface=e(69),i.Path=e(43),i.Shape=e(112),i.Group=e(68),i.ClippingRectangle=e(111),i.Text=e(113)
var n=e(23)
"undefined"!=typeof document&&n.init(document),e(41).setCurrent(i)},function(t,i,e){var n=e(4),r=e(17),s=e(22),o=e(42)
t.exports=n(o,s,{element_initialize:o.prototype.initialize,initialize:function(t,i){this.element_initialize("clippingrectangle"),this.width=t,this.height=i},_transform:function(){var t=this.element
t.clip=!0,t.coordorigin=-this.x+","+-1*this.y,t.coordsize=this.width+","+this.height,t.style.clipLeft=this.x,t.style.clipRight=this.width+this.x,t.style.clipTop=this.y,t.style.left=-this.x,t.style.top=-this.y,t.style.width=this.width+this.x,t.style.height=this.height+this.y,t.style.rotation=0
var i=this.parentNode
this._activeTransform=i?new r(i._activeTransform).transform(this):this
for(var e=this.firstChild;e;)e._transform(),e=e.nextSibling}})},function(t,i,e){var n=e(4),r=e(67),s=e(43),o=e(23),h=100
t.exports=n(r,{base_initialize:r.prototype.initialize,initialize:function(t,i,e){this.base_initialize("shape")
var n=this.pathElement=o.createElement("path")
n.gradientshapeok=!0,this.element.appendChild(n),this.width=i,this.height=e,null!=t&&this.draw(t)},draw:function(t,i,e){return t instanceof s||(t=new s(t)),this._vml=t.toVML(),null!=i&&(this.width=i),null!=e&&(this.height=e),this._boxCoords||this._transform(),this._redraw(this._prefix,this._suffix),this},_redraw:function(t,i){var e=this._vml||""
this._prefix=t,this._suffix=i,t&&(e=[t,e,i,"ns e",e,"nf"].join(" ")),this.element.path=e+"e"},fillRadial:function(t,i,e,n,r,s,o){var a=this._createGradient("gradientradial",t)
null==i&&(i=(this.left||0)+.5*(this.width||0)),null==e&&(e=(this.top||0)+.5*(this.height||0)),null==r&&(r=n||.5*this.height||0),null==n&&(n=.5*(this.width||0)),null==s&&(s=i),null==o&&(o=e),s+=s-i,o+=o-e
var l=Math.round(s*h),u=Math.round(o*h),c=Math.round(2*n*h),p=Math.round(2*r*h),f=["wa",l-c,u-p,l+c,u+p].join(" ")
return this._redraw(["m",l,u-p,"l",l,u-p].join(" "),["m",l,u-p,f,l,u-p,l,u+p,f,l,u+p,l,u-p,f,l,u-p,l,u+p,f,l,u+p,l,u-p].join(" ")),this._boxCoords={left:i-2,top:e-2,width:4,height:4},a.focusposition="0.5,0.5",a.focussize="0 0",a.focus="50%",this._transform(),this}})},function(t,i,e){var n=e(4),r=e(67),s=e(43),o=e(69),h=e(68),a=e(23),l={start:"left",middle:"center",end:"right"}
t.exports=n(r,{base_initialize:r.prototype.initialize,initialize:function(){this.base_initialize("shape")
var t=this.pathElement=a.createElement("path")
t.textpathok=!0,this.element.appendChild(t),t=this.textPathElement=a.createElement("textpath"),t.on=!0,t.style["v-text-align"]="left",this.element.appendChild(t),this.draw.apply(this,arguments)},draw:function(t,i,e,n){var r=this.element,a=this.textPathElement,u=a.style
if(a.string=t,i)if("string"==typeof i)u.font=i
else for(var c in i){var p=c.camelCase?c.camelCase():c
u[p]="fontFamily"==p?"'"+i[c]+"'":i[c]}if(e&&(u["v-text-align"]=l[e]||e),n)this.currentPath=n=new s(n),this.element.path=n.toVML()
else if(!this.currentPath){for(var f=-1,d="\n";(f=t.indexOf("\n",f+1))>-1;)d+="\n"
a.string=d+a.string,this.element.path="m0,0l1,0"}r=r.cloneNode(!0),u=r.style,r.coordorigin="0,0",r.coordsize="10000,10000",u.left="0px",u.top="0px",u.width="10000px",u.height="10000px",u.rotation=0,r.removeChild(r.firstChild)
var v=new o(1,1),m=new h,y=r.ownerDocument.body
v.inject(y),m.element.appendChild(r),m.inject(v)
var g=r.getBoundingClientRect(),x=v.toElement().getBoundingClientRect()
return v.eject(),this.left=g.left-x.left,this.top=g.top-x.top,this.width=g.right-g.left,this.height=g.bottom-g.top,this.right=g.right-x.left,this.bottom=g.bottom-x.top,this._transform(),this}})},function(t,i,e){"use strict"
function n(t){return t?"string"==typeof t?t:t.length?t.join("\n"):"":""}function r(t){var i=function(){}
i.displayName=t
for(var e=1,n=arguments.length;n>e;e++)x(i.prototype,arguments[e])
var r=f.createFactory(i)
return d.wrapFactory(r)}function s(){this.args=L.call(arguments)}function o(){this.args=L.call(arguments)}function h(){this.args=L.call(arguments)}e(109)
var a=e(17),l=e(41),u=e(18),c=e(10),p=e(19),f=e(3),d=e(28),v=e(12),m=e(51),y=e(48),g=e(8),x=e(2),_=p.Mixin,b={},w=new a,C=x({},m.Mixin,{moveChild:function(t){var i=t._mountImage,e=this._mostRecentlyPlacedChild
null==e?i.previousSibling&&(this.node.firstChild?i.injectBefore(this.node.firstChild):i.inject(this.node)):e.nextSibling!==i&&(e.nextSibling?i.injectBefore(e.nextSibling):i.inject(this.node)),this._mostRecentlyPlacedChild=i},createChild:function(t,i){t._mountImage=i
var e=this._mostRecentlyPlacedChild
null==e?this.node.firstChild?i.injectBefore(this.node.firstChild):i.inject(this.node):e.nextSibling?i.injectBefore(e.nextSibling):i.inject(this.node),this._mostRecentlyPlacedChild=i},removeChild:function(t){t._mountImage.eject(),t._mountImage=null},updateChildren:function(t,i){this._mostRecentlyPlacedChild=null,this._updateChildren(t,i)},mountAndInjectChildren:function(t,i){var e=this.mountChildren(t,i),n=0
for(var r in this._renderedChildren)if(this._renderedChildren.hasOwnProperty(r)){var s=this._renderedChildren[r]
s._mountImage=e[n],e[n].inject(this.node),n++}}}),M=r("Surface",y.Mixin,_,C,c,{mountComponent:function(t,i,e){_.mountComponent.call(this,t,i,e),i.getReactMountReady().enqueue(this.componentDidMount,this)
var n=u.createMarkupForID(t)
return"<div "+n+"></div>"},setApprovedDOMProperties:function(t){var i=this.props,e={accesskey:i.accesskey,className:i.className,draggable:i.draggable,role:i.role,style:i.style,tabindex:i.tabindex,title:i.title},n={accesskey:t.accesskey,className:t.className,draggable:t.draggable,role:t.role,style:t.style,tabindex:t.tabindex,title:t.title}
this.props=n,this._updateDOMProperties(e),this.props=i},componentDidMount:function(){var t=this.props
this.node=l.Surface(+t.width,+t.height)
var i=this.node.toElement(),e=this.getDOMNode()
e.parentNode&&e.parentNode.replaceChild(i,e),v.setID(i,this._rootNodeID),this.props={style:{}},this.setApprovedDOMProperties(t)
var n=g.ReactReconcileTransaction.getPooled()
n.perform(this.mountAndInjectChildren,this,t.children,n),g.ReactReconcileTransaction.release(n),this.props=t},receiveComponent:function(t,i){var e=t.props,n=this.node;(this.props.width!=e.width||this.props.height!=e.height)&&n.resize(+e.width,+e.height),this.setApprovedDOMProperties(e),this.updateChildren(e.children,i),n.render&&n.render(),this.props=e},unmountComponent:function(){_.unmountComponent.call(this),this.unmountChildren()}}),T={onMouseMove:"mousemove",onMouseOver:"mouseover",onMouseOut:"mouseout",onMouseUp:"mouseup",onMouseDown:"mousedown",onClick:"click"},S=x({},_,{putEventListener:function(t,i){var e=this.subscriptions||(this.subscriptions={}),n=this.listeners||(this.listeners={})
n[t]=i,i?e[t]||(e[t]=this.node.subscribe(t,i,this)):e[t]&&(e[t](),delete e[t])},handleEvent:function(t){var i=this.listeners[t.type]
i&&("function"==typeof i?i.call(this,t):i.handleEvent&&i.handleEvent(t))},destroyEventListeners:function(){var t=this.subscriptions
if(t)for(var i in t)t[i]()
this.subscriptions=null,this.listeners=null},applyNodeProps:function(t,i){var e=this.node,n=null!=i.scaleX?i.scaleX:null!=i.scale?i.scale:1,r=null!=i.scaleY?i.scaleY:null!=i.scale?i.scale:1
w.transformTo(1,0,0,1,0,0).move(i.x||0,i.y||0).rotate(i.rotation||0,i.originX,i.originY).scale(n,r,i.originX,i.originY),null!=i.transform&&w.transform(i.transform),(e.xx!==w.xx||e.yx!==w.yx||e.xy!==w.xy||e.yy!==w.yy||e.x!==w.x||e.y!==w.y)&&e.transformTo(w),(i.cursor!==t.cursor||i.title!==t.title)&&e.indicate(i.cursor,i.title),e.blend&&i.opacity!==t.opacity&&e.blend(null==i.opacity?1:i.opacity),i.visible!==t.visible&&(null==i.visible||i.visible?e.show():e.hide())
for(var s in T)this.putEventListener(T[s],i[s])},mountComponentIntoNode:function(){throw new Error("You cannot render an ART component standalone. You need to wrap it in a Surface.")}}),k=r("Group",S,C,{mountComponent:function(t,i){return _.mountComponent.apply(this,arguments),this.node=l.Group(),this.applyGroupProps(b,this.props),this.mountAndInjectChildren(this.props.children,i),this.node},receiveComponent:function(t,i){var e=t.props
this.applyGroupProps(this.props,e),this.updateChildren(e.children,i),this.props=e},applyGroupProps:function(t,i){this.node.width=i.width,this.node.height=i.height,this.applyNodeProps(t,i)},unmountComponent:function(){this.destroyEventListeners(),this.unmountChildren()}}),z=r("ClippingRectangle",S,C,{mountComponent:function(t,i){return _.mountComponent.apply(this,arguments),this.node=l.ClippingRectangle(),this.applyClippingProps(b,this.props),this.mountAndInjectChildren(this.props.children,i),this.node},receiveComponent:function(t,i){var e=t.props
this.applyClippingProps(this.props,e),this.updateChildren(e.children,i),this.props=e},applyClippingProps:function(t,i){this.node.width=i.width,this.node.height=i.height,this.node.x=i.x,this.node.y=i.y,this.applyNodeProps(t,i)},unmountComponent:function(){this.destroyEventListeners(),this.unmountChildren()}}),E=x({},S,{applyRenderableProps:function(t,i){t.fill!==i.fill&&(i.fill&&i.fill.applyFill?i.fill.applyFill(this.node):this.node.fill(i.fill)),(t.stroke!==i.stroke||t.strokeWidth!==i.strokeWidth||t.strokeCap!==i.strokeCap||t.strokeJoin!==i.strokeJoin||t.strokeDash!==i.strokeDash)&&this.node.stroke(i.stroke,i.strokeWidth,i.strokeCap,i.strokeJoin,i.strokeDash),this.applyNodeProps(t,i)},unmountComponent:function(){this.destroyEventListeners()}}),P=r("Shape",E,{mountComponent:function(){return _.mountComponent.apply(this,arguments),this.node=l.Shape(),this.applyShapeProps(b,this.props),this.node},receiveComponent:function(t){var i=t.props
this.applyShapeProps(this.props,i),this.props=i},applyShapeProps:function(t,i){var e=this._oldPath,r=i.d||n(i.children);(r!==e||t.width!==i.width||t.height!==i.height)&&(this.node.draw(r,i.width,i.height),this._oldPath=r),this.applyRenderableProps(t,i)}}),j=r("Text",E,{mountComponent:function(){_.mountComponent.apply(this,arguments)
var t=this.props,i=n(t.children)
return this.node=l.Text(i,t.font,t.alignment,t.path),this._oldString=i,this.applyRenderableProps(b,this.props),this.node},isSameFont:function(t,i){return t===i?!0:"string"==typeof i||"string"==typeof t?!1:i.fontSize===t.fontSize&&i.fontStyle===t.fontStyle&&i.fontVariant===t.fontVariant&&i.fontWeight===t.fontWeight&&i.fontFamily===t.fontFamily},receiveComponent:function(t){var i=t.props,e=this.props,r=this._oldString,s=n(i.children)
r===s&&this.isSameFont(e.font,i.font)&&e.alignment===i.alignment&&e.path===i.path||(this.node.draw(s,i.font,i.alignment,i.path),this._oldString=s),this.applyRenderableProps(e,i),this.props=i}}),L=Array.prototype.slice
s.prototype.applyFill=function(t){t.fillLinear.apply(t,this.args)},o.prototype.applyFill=function(t){t.fillRadial.apply(t,this.args)},h.prototype.applyFill=function(t){t.fillImage.apply(t,this.args)}
var N={LinearGradient:s,RadialGradient:o,Pattern:h,Transform:a,Path:l.Path,Surface:M,Group:k,ClippingRectangle:z,Shape:P,Text:j}
t.exports=N}])
__KA_module.exports = ReactART;
this.ReactART = ReactART;
});
KAdefine("javascript/node_modules/react-art/index.js", function(require, module, exports) {
module.exports=require.withVars("../../../third_party/javascript-khansrc/react-compiled/react-art.{{dev_or_prod}}.js")
});
; KAdefine.updateFilenameRewriteMap({"third_party/javascript-khansrc/react-compiled/react-art.{{dev_or_prod}}.js": "react-art.prod.js"});
this.KAdefineTiming["react-art-package.js"].endTime = +(new Date);
