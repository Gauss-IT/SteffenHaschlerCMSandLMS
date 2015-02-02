((this.KAdefineTiming = this.KAdefineTiming || {})["scratchpad-base-package.js"] = {}).startTime = +(new Date);
KAdefine("javascript/scratchpad-base-package/docs-pjs.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,e,o,a,r){o=o||n.helpers
var t="",i,l,s,c,f=this,p="function",u=o.blockHelperMissing
function m(n,e){var a="",r
a+='\n            <div class="headline-container">\n                <div class="main-header">\n                    <div class="topic-info">\n                    <div class="topic-info-inner">\n                        <div class="welcome-info tutorial-welcome">\n                            <div class=\'subject-breadcrumb\'><a href="/computer-programming" class="subject-link" data-id="computer-programming"><i class="icon-caret-left"></i>'
s=o["_"]
r=s||n["_"]
c=f.program(2,h,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof r===p){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){a+=r}a+='</a></div>\n                            <div class="topic-title">'
s=o["_"]
r=s||n["_"]
c=f.program(4,g,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof r===p){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){a+=r}a+='</div>\n                            <div id="tutorial-sorter"></div>\n                            <div class="topic-desc">'
s=o["_"]
r=s||n["_"]
c=f.program(6,d,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof r===p){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){a+=r}a+="\n                            "
s=o["_"]
r=s||n["_"]
c=f.program(8,v,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof r===p){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){a+=r}a+="\n                            "
s=o["_"]
r=s||n["_"]
c=f.program(10,_,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof r===p){r=r.call(n,c)}else{r=u.call(n,r,c)}if(r||r===0){a+=r}a+='\n                            </div>\n                        </div>\n                    </div>\n                    </div>\n                </div>\n            </div>\n            <div class="sub-header-spacer tutorial-color"></div>\n        '
return a}function h(n,e){return"Computer programming"}function g(n,e){return"Documentation"}function d(n,e){return'All of the code here is written using the <a href="https://developer.mozilla.org/en-US/docs/JavaScript" target="_blank">JavaScript</a> language and the <a href="http://processingjs.org" target="_blank">Processing.js</a> library (with <a href="https://khanacademy.zendesk.com/hc/en-us/articles/202260404-What-parts-of-ProcessingJS-does-Khan-Academy-support-" target="_blank">some modifications</a>).'}function v(n,e){return"You can click the links below to learn more about\n                            what you can do in your programs."}function _(n,e){return'You can also <a href="/computer-programming/programming/good-practices/v/the-power-of-the-docs" target="_blank">watch our guide</a> on how to use these docs.'}function y(n,e){return"Quick Jump:"}function b(n,e){return"Shapes"}function T(n,e){return"Complex Shapes"}function k(n,e){return"Colors"}function D(n,e){return"Text"}function N(n,e){return"Transforms"}function x(n,e){return"Environment"}function w(n,e){return"Mouse"}function S(n,e){return"Keyboard"}function C(n,e){return"Math"}function z(n,e){return"Trig"}function M(n,e){return"Date/Time"}function P(n,e){return"Debugging"}function q(n,e){return"JavaScript"}function J(n,e){return"ProcessingJS"}function R(n,e){return"Shapes"}function j(n,e){return"rect(x, y, w, h)"}function A(n,e){return"ellipse(x, y, w, h)"}function W(n,e){return"triangle(x1, y1, x2, y2, x3, y3)"}function O(n,e){return"line(x1, y1, x2, y2)"}function Y(n,e){return"point(x, y)"}function E(n,e){return"arc(x, y, w, h, start, stop)"}function G(n,e){return"bezier(x1, y1, cx1, cy1, cx2, cy2, x2, y2)"}function L(n,e){return"quad(x1, y1, x2, y2, x3, y3, x4, y4)"}function B(n,e){return"image(image, x, y, width*, height*)"}function F(n,e){return"See also:"}function K(n,e){return"ellipseMode"}function V(n,e){return"rectMode"}function H(n,e){return"imageMode"}function I(n,e){return"strokeCap"}function U(n,e){return"bezierPoint"}function X(n,e){return"bezierTangent"}function Q(n,e){return"curve"}function Z(n,e){return"curvePoint"}function ne(n,e){return"curveTangent"}function ee(n,e){return"curveTightness"}function oe(n,e){return"Complex Shapes"}function ae(n,e){return"beginShape()"}function re(n,e){return"endShape()"}function te(n,e){return"vertex()"}function ie(n,e){return"curveVertex()"}function le(n,e){return"bezierVertex()"}function se(n,e){return"See also:"}function ce(n,e){return"strokeJoin"}function fe(n,e){return"curveTightness"}function pe(n,e){return"Colors"}function ue(n,e){return"background(r, g, b)"}function me(n,e){return"Set the background color"}function he(n,e){return"fill(r, g, b)"}function ge(n,e){return"Set the fill color for shapes"}function de(n,e){return"noFill()"}function ve(n,e){return"Turn off fill for shapes"}function _e(n,e){return"stroke(r, g, b)"}function ye(n,e){return"Set the outline color for shapes"}function be(n,e){return"strokeWeight(thickness)"}function Te(n,e){return"Change the thickness of lines and outlines"}function ke(n,e){return"noStroke()"}function De(n,e){return"Turn off outlines for shapes"}function Ne(n,e){return"color(r, g, b)"}function xe(n,e){return"Store a color in a variable"}function we(n,e){return"blendColor(c1, c2, MODE)"}function Se(n,e){return"Blend two colors together"}function Ce(n,e){return"lerpColor(c1, c2, amount)"}function ze(n,e){return"Find color between 2 colors"}function Me(n,e){return"See also:"}function Pe(n,e){return"colorMode"}function qe(n,e){return"red"}function Je(n,e){return"green"}function Re(n,e){return"blue"}function je(n,e){return"alpha"}function Ae(n,e){return"hue"}function We(n,e){return"saturation"}function Oe(n,e){return"brightness"}function Ye(n,e){return"Text"}function Ee(n,e){return"text(text, x, y)"}function Ge(n,e){return"Draw some text"}function Le(n,e){return"textFont(font, size*)"}function Be(n,e){return"Changes the font of text"}function Fe(n,e){return"textSize(size)"}function Ke(n,e){return"Change the size of text"}function Ve(n,e){return"See also:"}function He(n,e){return"textWidth"}function Ie(n,e){return"textAscent"}function Ue(n,e){return"textDescent"}function Xe(n,e){return"textLeading"}function Qe(n,e){return"textAlign"}function Ze(n,e){return"Transforms"}function $e(n,e){return"rotate(angle)"}function no(n,e){return"Rotate shapes by an angle"}function eo(n,e){return"scale(amount)"}function oo(n,e){return"Scale shapes in both dimensions"}function ao(n,e){return"translate(x, y)"}function ro(n,e){return"Translate shapes by an offset"}function to(n,e){return"See also:"}function io(n,e){return"pushMatrix"}function lo(n,e){return"popMatrix"}function so(n,e){return"resetMatrix"}function co(n,e){return"printMatrix"}function fo(n,e){return"Environment"}function po(n,e){return"width"}function uo(n,e){return"height"}function mo(n,e){return"The size of the canvas"}function ho(n,e){return"draw = function() { };"}function go(n,e){return"Called repeatedly during program execution."}function vo(n,e){return"playSound(sound)"}function _o(n,e){return"Plays one of the allowed sounds."}function yo(n,e){return"See also:"}function bo(n,e){return"Program.assertEqual"}function To(n,e){return"Program.restart"}function ko(n,e){return"frameRate(fps)"}function Do(n,e){return"frameCount"}function No(n,e){return"loop"}function xo(n,e){return"noLoop"}function wo(n,e){return"Mouse"}function So(n,e){return"mouseX, mouseY"}function Co(n,e){return"Current coordinates of the mouse"}function zo(n,e){return"pmouseX, pmouseY"}function Mo(n,e){return"Past coordinates of the mouse"}function Po(n,e){return"mouseButton"}function qo(n,e){return"Which button is pressed"}function Jo(n,e){return"mouseIsPressed"}function Ro(n,e){return"Whether mouse is being pressed"}function jo(n,e){return"mouseClicked = function() { };"}function Ao(n,e){return"Called when mouse is clicked"}function Wo(n,e){return"mousePressed = function() { };"}function Oo(n,e){return"Called when mouse is pressed"}function Yo(n,e){return"mouseReleased = function() { };"}function Eo(n,e){return"Called when mouse is released"}function Go(n,e){return"mouseMoved = function() { };"}function Lo(n,e){return"Called when mouse is moved"}function Bo(n,e){return"mouseDragged = function() { };"}function Fo(n,e){return"Called when mouse is dragged"}function Ko(n,e){return"mouseOver = function() { };"}function Vo(n,e){return"Called when mouse moves over canvas"}function Ho(n,e){return"mouseOut = function() { };"}function Io(n,e){return"Called when mouse moves out of canvas"}function Uo(n,e){return"Keyboard"}function Xo(n,e){return"key"}function Qo(n,e){return"Number representing which key is pressed"}function Zo(n,e){return"keyCode"}function $o(n,e){return"Represents when a special key is pressed"}function na(n,e){return"keyIsPressed"}function ea(n,e){return"True if a key is being pressed, false otherwise"}function oa(n,e){return"keyPressed = function() { };"}function aa(n,e){return"Called when a key is pressed"}function ra(n,e){return"keyReleased = function() { };"}function ta(n,e){return"Called when a key is released"}function ia(n,e){return"keyTyped = function() { };"}function la(n,e){return"Called when a key is typed"}function sa(n,e){return"Math"}function ca(n,e){return"random(low, high)"}function fa(n,e){return"Generate a random number"}function pa(n,e){return"dist(x1, y1, x2, y2)"}function ua(n,e){return"Calculates the distance between two points"}function ma(n,e){return"constrain(value, min, max)"}function ha(n,e){return"Constrain value between min and max"}function ga(n,e){return"min(num1, num2)"}function da(n,e){return"Return the minimum of two numbers"}function va(n,e){return"max(num1, num2)"}function _a(n,e){return"Return the maximum of two numbers"}function ya(n,e){return"abs(num)"}function ba(n,e){return"Take the absolute value of a number"}function Ta(n,e){return"log(num)"}function ka(n,e){return"Take the logarithm of a number"}function Da(n,e){return"pow(num, exponent)"}function Na(n,e){return"Raise a number to an exponent"}function xa(n,e){return"sq(num)"}function wa(n,e){return"Square a number"}function Sa(n,e){return"sqrt(num)"}function Ca(n,e){return"Take the square root of a number"}function za(n,e){return"round(num)"}function Ma(n,e){return"Return nearest whole number"}function Pa(n,e){return"ceil(num)"}function qa(n,e){return"Return nearest whole number of greater/equal value"}function Ja(n,e){return"floor(num)"}function Ra(n,e){return"Return nearest whole number of lesser/equal value"}function ja(n,e){return"PVector(x, y)"}function Aa(n,e){return"An object that describes a 2-dimensional vector"}function Wa(n,e){return"See also:"}function Oa(n,e){return"mag"}function Ya(n,e){return"exp"}function Ea(n,e){return"map"}function Ga(n,e){return"norm"}function La(n,e){return"lerp"}function Ba(n,e){return"noise"}function Fa(n,e){return"noiseDetail"}function Ka(n,e){return"Random.nextGaussian"}function Va(n,e){return"Trigonometry"}function Ha(n,e){return"cos(degrees)"}function Ia(n,e){return"Take the cosine of an angle"}function Ua(n,e){return"sin(degrees)"}function Xa(n,e){return"Take the sine of an angle"}function Qa(n,e){return"tan(degrees)"}function Za(n,e){return"Take the tangent of an angle"}function $a(n,e){return"See also:"}function nr(n,e){return"acos"}function er(n,e){return"asin"}function or(n,e){return"atan"}function ar(n,e){return"atan2"}function rr(n,e){return"radians"}function tr(n,e){return"degrees"}function ir(n,e){return"angleMode"}function lr(n,e){return"Date & Time"}function sr(n,e){return"day()"}function cr(n,e){return"month()"}function fr(n,e){return"year()"}function pr(n,e){return"Current date"}function ur(n,e){return"hour()"}function mr(n,e){return"minute()"}function hr(n,e){return"second()"}function gr(n,e){return"Current time"}function dr(n,e){return"millis()"}function vr(n,e){return"Milliseconds ellapsed since program start"}function _r(n,e){return"Debugging"}function yr(n,e){return"debug(arg1, arg2, ...)"}function br(n,e){return"Print to your browser's developer console"}function Tr(n,e){return"println(data)"}function kr(n,e){return"Print to the canvas console"}function Dr(n,e){return"print(data)"}function Nr(n,e){return"Print to the canvas console"}function xr(n,e){return"JavaScript"}function wr(n,e){return"var drawWinston = function() { };"}function Sr(n,e){return"Define a new function"}function Cr(n,e){return"if (x &lt; 20) { ... }"}function zr(n,e){return"Only run code if a certain condition is true"}function Mr(n,e){return"while (x &lt; 250) { ... }"}function Pr(n,e){return"Only run code while a certain condition is true"}function qr(n,e){return"for (var i = 0; i &lt; 8; i++) { }"}function Jr(n,e){return"Repeat code a fixed number of times"}function Rr(n,e){return"var array = [0, 1, 2, 3, 4];"}function jr(n,e){return"Make an array of 5 numbers"}function Ar(n,e){return"Our documentation does not cover the many ways\n                    to use JavaScript. Learn more at:"}function Wr(n,e){return"Mozilla Developer Network: JavaScript Guide"}function Or(n,e){return"W3Schools JavaScript Tutorial"}function Yr(n,e){return"Codecademy JS Lessons"}function Er(n,e){return'This reference is based on <a href="http://processingjs.org/reference/" target="_blank">ProcessingJS reference</a> and is licensed under the <a href="http://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">CC BY-NC-SA 2.0 license.'}t+='<div class="prerendered topic-content-view-root">\n    <div class="content-pane-inner cs subject-color">\n        '
s=o.standAlone
i=s||e.standAlone
l=o["if"]
c=f.program(1,m,r)
c.hash={}
c.fn=c
c.inverse=f.noop
i=l.call(e,i,c)
if(i||i===0){t+=i}t+='\n\n        <div id="tutorials" class="videos-list">\n        <div class="videos-list-inner">\n        <div class="videos-list-inner-inner">\n            <div class="cs-documentation-container">\n\n\n                <p>\n                    '
s=o["_"]
i=s||e["_"]
c=f.program(12,y,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <a href="#cs-documentation-shapes">'
s=o["_"]
i=s||e["_"]
c=f.program(14,b,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-complexshapes">'
s=o["_"]
i=s||e["_"]
c=f.program(16,T,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-colors">'
s=o["_"]
i=s||e["_"]
c=f.program(18,k,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-text">'
s=o["_"]
i=s||e["_"]
c=f.program(20,D,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-transforms">'
s=o["_"]
i=s||e["_"]
c=f.program(22,N,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-env">'
s=o["_"]
i=s||e["_"]
c=f.program(24,x,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-mouse">'
s=o["_"]
i=s||e["_"]
c=f.program(26,w,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-keyboard">'
s=o["_"]
i=s||e["_"]
c=f.program(28,S,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-math">'
s=o["_"]
i=s||e["_"]
c=f.program(30,C,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-trig">'
s=o["_"]
i=s||e["_"]
c=f.program(32,z,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-datetime">'
s=o["_"]
i=s||e["_"]
c=f.program(34,M,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-debugging">'
s=o["_"]
i=s||e["_"]
c=f.program(36,P,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>,\n                    <a href="#cs-documentation-js">'
s=o["_"]
i=s||e["_"]
c=f.program(38,q,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>\n                </p>\n\n                <h3 class="cs-documentation-bigheader">'
s=o["_"]
i=s||e["_"]
c=f.program(40,J,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h3>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-shapes">'
s=o["_"]
i=s||e["_"]
c=f.program(42,R,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/rectx-y-w-h/839496660" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-rect"></div>\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(44,j,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code>\n                        </a>\n                    <li>\n                        <a href="/computer-programming/ellipsex-y-w-h/839435680" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-ellipse"></div>\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(46,A,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code>\n                        </a>\n                    <li>\n                        <a href="/computer-programming/trianglex1-y1-x2-y2-x3-y3/839546599" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-triangle"></div>\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(48,W,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code>\n                        </a>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/linex1-y1-x2-y2/827916099" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-line"></div>\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(50,O,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code>\n                        </a>\n                    <li>\n                        <a href="/computer-programming/pointx-y/827809834" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-point"></div>\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(52,Y,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code>\n                        </a>\n                    <li>\n                        <a href="/computer-programming/arcx-y-w-h-start-stop/1903619297" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-arc"></div>\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(54,E,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code>\n                        </a>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/bezierx1-y1-cx1-cy1-cx2-cy2-x2-y2/956920482" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-bezier"></div>\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(56,G,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code>\n                        </a>\n                    <li>\n                        <a href="/computer-programming/quadx1-y1-x2-y2-x3-y3-x4-y4/1907244018" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-quad"></div>\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(58,L,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code>\n                        </a>\n                    <li>\n                        <a href="/computer-programming/imageimage-x-y/937672662" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-image"></div>\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(60,B,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code>\n                        </a>\n                    </div>\n                </ul>\n                <p>"
s=o["_"]
i=s||e["_"]
c=f.program(62,F,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <a href="/computer-programming/ellipsemodemode/6709863212122112" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(64,K,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/rectmodemode/4556457341091840" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(66,V,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/imagemodemode/5295050787389440" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(68,H,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/strokecapmode/5288182060941312" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(70,I,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/bezierpointa-b-c-d-t/4551007698681856"  target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(72,U,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/beziertangenta-b-c-d-t/4736929853603840\n" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(74,X,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/curve/5105742184972288" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(76,Q,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/curvepointa-b-c-d-t/5879387094253568" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(78,Z,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/curvetangenta-b-c-d-t/4708940860358656" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(80,ne,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/curvetightnesssquishy/4792873740402688" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(82,ee,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>\n                </p>\n                </div>\n\n\n                <div class="cs-documentation-section">\n\n                <h4 id="cs-documentation-complexshapes">'
s=o["_"]
i=s||e["_"]
c=f.program(84,oe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/beginshapeendshape/5462945756610560" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-beginshape"></div>\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(86,ae,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code>/\n                            <code>"
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(88,re,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code>/\n                            <code>"
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(90,te,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/curvevertexx-y/6499542019080192" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-curvevertex"></div>\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(92,ie,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/beziervertexcx1-cy1-cx2-cy2-x-y/5085481683386368" target="_blank">\n                            <div class="cs-documentation-image cs-documentation-sprite-beziervertex"></div>\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(94,le,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                    </div>\n                </ul>\n\n                <p>"
s=o["_"]
i=s||e["_"]
c=f.program(96,se,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <a href="/computer-programming/strokejoinmode/5662070842327040" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(98,ce,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/curvetightnesssquishy/4792873740402688" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(100,fe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>\n                </p>\n\n                </div>\n\n                <div class="cs-documentation-section">\n\n                <h4 id="cs-documentation-colors">'
s=o["_"]
i=s||e["_"]
c=f.program(102,pe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/backgroundr-g-b/839653892" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(104,ue,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(106,me,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    <li>\n                        <a href="/computer-programming/fillr-g-b/839774957" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(108,he,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(110,ge,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    <li>\n                        <a href="/computer-programming/nofill/877946290" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(112,de,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(114,ve,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/stroker-g-b/839545910" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(116,_e,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(118,ye,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    <li>\n                        <a href="/computer-programming/strokeweightthickness/877859744" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(120,be,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(122,Te,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    <li>\n                        <a href="/computer-programming/nostroke/839859412" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(124,ke,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(126,De,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/colorr-g-b/957020020" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(128,Ne,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(130,xe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/blendcolorc1-c2-mode/4530750216994816" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(132,we,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(134,Se,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/lerpcolorc1-c2-amount/4759935778816000" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(136,Ce,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(138,ze,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="\n                    </div>\n                </ul>\n                <p>\n                    "
s=o["_"]
i=s||e["_"]
c=f.program(140,Me,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <a href="/computer-programming/colormode/5833774306689024" target="_blank"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(142,Pe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/redcolor/5102159326609408" target="_blank"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(144,qe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/greencolor/5877638103040000" target="_blank"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(146,Je,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/bluecolor/5177743654256640" target="_blank"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(148,Re,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/alphacolor/6687311345483776" target="_blank"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(150,je,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/huecolor/6620387366404096" target="_blank"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(152,Ae,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/saturationcolor/6358678768713728" target="_blank"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(154,We,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/brightnesscolor/5888575639912448" target="_blank"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(156,Oe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>\n                </p>\n\n                </div>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-text">'
s=o["_"]
i=s||e["_"]
c=f.program(158,Ye,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/texttext-x-y/937624625" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(160,Ee,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(162,Ge,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/textfontfont-size/940030209" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(164,Le,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(166,Be,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/textsizesize/937728198" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(168,Fe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(170,Ke,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="\n                    </div>\n                </ul>\n                <p>\n                    "
s=o["_"]
i=s||e["_"]
c=f.program(172,Ve,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <a href="/computer-programming/textwidthstr/4799257177489408" target="_blank">\n                    <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(174,He,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/textascent/5975406490419200" target="_blank"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(176,Ie,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/textdescent/5638769772331008" target="_blank"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(178,Ue,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/textleadingdist/6369013500215296" target="_blank"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(180,Xe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/textalignalign-yalign/4508437190803456" target="_blank">\n                    <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(182,Qe,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code>\n                    </a>\n\n                </div>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-transforms">'
s=o["_"]
i=s||e["_"]
c=f.program(184,Ze,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/rotateangle/6386091934351360" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(186,$e,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(188,no,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/scalex-y/6712922034143232" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(190,eo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(192,oo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/translatex-y/6505693083336704" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(194,ao,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(196,ro,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="\n                    </div>\n                </ul>\n                <p>"
s=o["_"]
i=s||e["_"]
c=f.program(198,to,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <a href="/computer-programming/pushmatrixpopmatrix/5505194477486080" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(200,io,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code>/<code>"
s=o["_"]
i=s||e["_"]
c=f.program(202,lo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/resetmatrix/4597705468805120" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(204,so,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/printmatrix/5934612152844288" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(206,co,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>\n                </p>\n                </div>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-env">'
s=o["_"]
i=s||e["_"]
c=f.program(208,fo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/width/5933816543707136" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(210,po,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a> /\n                        <a href="/computer-programming/height/4544657253990400" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(212,uo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(214,mo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/draw/5192527846309888" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(216,ho,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(218,go,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/playsoundsound/6655307787534336" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(220,vo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(222,_o,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="\n                    </li>\n                    </div>\n                </ul>\n                <p>\n                    "
s=o["_"]
i=s||e["_"]
c=f.program(224,yo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <a href="/computer-programming/programassertequal/6737630444388352" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(226,bo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/programrestart/5772421353439232" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(228,To,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/frameratefps/6427359154536448" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(230,ko,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>\n                    <a href="/computer-programming/framecount/5893935759097856" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(232,Do,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/loop/5519218351013888" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(234,No,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a> /\n                    <a href="/computer-programming/noloop/6342789906300928" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(236,xo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>\n                </p>\n                </div>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-mouse">'
s=o["_"]
i=s||e["_"]
c=f.program(238,wo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/mousex-mousey/5538427537719296" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(240,So,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(242,Co,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/pmousex-pmousey/5082026180870144\n" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(244,zo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(246,Mo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/mousebutton/6304348237725696\n" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(248,Po,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(250,qo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n\n                    <li>\n                        <a href="/computer-programming/mouseispressed/939933053" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(252,Jo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(254,Ro,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/var-mouseclicked-function/1897113673" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(256,jo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(258,Ao,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                                        <li>\n                        <a href="/computer-programming/var-mousepressed-function/1907626123" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(260,Wo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(262,Oo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/var-mousereleased-function/1907670118" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(264,Yo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(266,Eo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/var-mousemoved-function/5689134450475008" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(268,Go,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(270,Lo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/var-mousedragged-function/6273229589053440" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(272,Bo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(274,Fo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/var-mouseover-function/4681234999410688" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(276,Ko,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(278,Vo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/var-mouseout-function/6643226391871488" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(280,Ho,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(282,Io,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </div>\n                </ul>\n                </div>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-keyboard">'
s=o["_"]
i=s||e["_"]
c=f.program(284,Uo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/key/5790940799172608" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(286,Xo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(288,Qo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/keycode/939888407" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(290,Zo,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(292,$o,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/keyispressed/939855509" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(294,na,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(296,ea,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/var-keypressed-function/6270179101114368" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(298,oa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(300,aa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/var-keyreleased-function/6349252120805376" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(302,ra,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(304,ta,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/var-keytyped-function/5762464763346944" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(306,ia,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(308,la,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </div>\n\n                </ul>\n                </div>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-math">'
s=o["_"]
i=s||e["_"]
c=f.program(310,sa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/randomlow-high/827911487" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(312,ca,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(314,fa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/distx1-y1-x2-y2/1917352082" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(316,pa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(318,ua,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/constrainvalue-min-max/5870136103796736" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(320,ma,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>"
s=o["_"]
i=s||e["_"]
c=f.program(322,ha,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/minnum1-num2/4693347713155072" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(324,ga,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(326,da,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/maxnum1-num2/4755409722146816" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(328,va,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(330,_a,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </div>\n\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/absnum/877930637" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(332,ya,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(334,ba,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/lognum/877921884" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(336,Ta,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(338,ka,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n\n                    <li>\n                        <a href="/computer-programming/pownum-exponent/877858853" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(340,Da,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(342,Na,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    <li>\n                        <a href="/computer-programming/sqnum/6588187426160640" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(344,xa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(346,wa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    <li>\n                        <a href="/computer-programming/sqrtnum/6473360267542528" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(348,Sa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(350,Ca,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/roundnum/5907281296228352" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(352,za,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(354,Ma,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <li>\n                        <a href="/computer-programming/ceil/5491781646942208" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(356,Pa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(358,qa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n\n                    <li>\n                        <a href="/computer-programming/floornum/5703004061696000" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(360,Ja,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(362,Ra,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    <li>\n                        <a href="/computer-programming/pvectorx-y/5218818305556480" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(364,ja,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(366,Aa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="\n                    </li>\n                    </div>\n\n                <p>\n                    "
s=o["_"]
i=s||e["_"]
c=f.program(368,Wa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <a href="/computer-programming/magx1-y1-not-working-yet/5983219002376192" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(370,Oa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/expvalue/5228990398726144" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(372,Ya,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/mapvalue-low1-high1-low2-high2/4587974079545344" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(374,Ea,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/normvalue-low-high/6581050767572992" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(376,Ga,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/lerpvalue1-value2-amount/6456916012171264" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(378,La,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/noise/5618485581316096" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(380,Ba,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/noisedetailoctaves-falloff/6549875814563840" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(382,Fa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/randomseed/5697038959247360" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(384,Ka,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>\n                </p>\n            </div>\n\n            <div class="cs-documentation-section">\n                <h4 id="cs-documentation-trig">'
s=o["_"]
i=s||e["_"]
c=f.program(386,Va,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/cosdeg/948226821" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(388,Ha,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(390,Ia,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/sindeg/948255306" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(392,Ua,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(394,Xa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/tandeg/948018680" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(396,Qa,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(398,Za,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="\n                    </li>\n                    </div>\n                </ul>\n                <p>\n                    "
s=o["_"]
i=s||e["_"]
c=f.program(400,$a,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    <a href="/computer-programming/acosval/4542953527705600" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(402,nr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/asinval/5061655520083968" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(404,er,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/atanval/4869834059808768" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(406,or,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/atan2x-y/6206505994420224" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(408,ar,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/radiansangle/6628151023108096" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(410,rr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/degreesangle/6674991668002816" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(412,tr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>,\n                    <a href="/computer-programming/anglemode-degrees-vs-radians/2350518561" target="_blank">\n                        <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(414,ir,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>\n                </p>\n            </div>\n\n            <div class="cs-documentation-section">\n                <h4 id="cs-documentation-datetime">'
s=o["_"]
i=s||e["_"]
c=f.program(416,lr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/day/4526347808407552" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(418,sr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>/\n                        <a href="/computer-programming/month/5388987023753216" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(420,cr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>/\n                        <a href="/computer-programming/year/6216887939629056" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(422,fr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(424,pr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/hour/5806957302644736" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(426,ur,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>/\n                        <a href="/computer-programming/minute/6638408210317312" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(428,mr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</code></a>/\n                        <a href="/computer-programming/second/5743886110556160" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(430,hr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(432,gr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/millis/5970545493409792" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(434,dr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(436,vr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n            </div>\n\n\n            <div class="cs-documentation-section">\n\n                <h4 id="cs-documentation-debugging">'
s=o["_"]
i=s||e["_"]
c=f.program(438,_r,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h4>\n\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/debugarg1-arg2/939146973" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(440,yr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(442,br,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/printlndata/6120466259378176" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(444,Tr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(446,kr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/printdata/5110798099677184" target="_blank">\n                            <code>'
s=o["_"]
i=s||e["_"]
c=f.program(448,Dr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(450,Nr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n\n                </ul>\n            </div>\n\n            <div class="cs-documentation-section">\n\n                <h3 id="cs-documentation-js" class="cs-documentation-bigheader">'
s=o["_"]
i=s||e["_"]
c=f.program(452,xr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</h3>\n\n                <ul>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/var-drawwinston-function/877982168" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(454,wr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(456,Sr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n\n                    <li>\n                        <a href="/computer-programming/if-x-20/957023758" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(458,Cr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(460,zr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/while-x-250/1907383465" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(462,Mr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(464,Pr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n\n                    <li>\n                        <a href="/computer-programming/for-var-i-0-i-8-i-1/877960284" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(466,qr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(468,Jr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='\n                    </li>\n                    </div>\n                    <div class="span4">\n                    <li>\n                        <a href="/computer-programming/var-array-0-1-2-3-4/957074792" target="_blank">\n                            <code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=f.program(470,Rr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</code></a>\n                        <br>\n                        "
s=o["_"]
i=s||e["_"]
c=f.program(472,jr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="\n                    </li>\n                    </div>\n                </ul>\n                </div>\n\n                <div>\n                    <p>"
s=o["_"]
i=s||e["_"]
c=f.program(474,Ar,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</p>\n                    <ul class="styled-list">\n                        <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide" target="_blank">'
s=o["_"]
i=s||e["_"]
c=f.program(476,Wr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>\n                        <li><a href="http://www.w3schools.com/js/" target="_blank">'
s=o["_"]
i=s||e["_"]
c=f.program(478,Or,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+='</a>\n                        <li><a href="http://www.codecademy.com/tracks/javascript" target="_blank">'
s=o["_"]
i=s||e["_"]
c=f.program(480,Yr,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</a>\n                    </ul>\n                    <br>\n                </div>\n\n                <p>"
s=o["_"]
i=s||e["_"]
c=f.program(482,Er,r)
c.hash={}
c.fn=c
c.inverse=f.noop
if(s&&typeof i===p){i=i.call(e,c)}else{i=u.call(e,i,c)}if(i||i===0){t+=i}t+="</p>\n\n            </div>\n        </div>\n        </div>\n        </div>\n    </div>\n</div>\n"
return t})
module.exports=t
});
KAdefine("javascript/scratchpad-base-package/docs-sql.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,e,o,s,a){o=o||n.helpers
var i="",t,l,r,c,p=this,f="function",d=o.blockHelperMissing
function u(n,e){var s="",a
s+='\n            <div class="headline-container">\n                <div class="main-header">\n                    <div class="topic-info">\n                    <div class="topic-info-inner">\n                        <div class="welcome-info tutorial-welcome">\n                            <div class=\'subject-breadcrumb\'><a href="/computer-programming" class="subject-link" data-id="computer-programming"><i class="icon-caret-left"></i>'
r=o["_"]
a=r||n["_"]
c=p.program(2,h,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof a===f){a=a.call(n,c)}else{a=d.call(n,a,c)}if(a||a===0){s+=a}s+='</a></div>\n                            <div class="topic-title">'
r=o["_"]
a=r||n["_"]
c=p.program(4,m,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof a===f){a=a.call(n,c)}else{a=d.call(n,a,c)}if(a||a===0){s+=a}s+='</div>\n                            <div id="tutorial-sorter"></div>\n                            <div class="topic-desc">'
r=o["_"]
a=r||n["_"]
c=p.program(6,v,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof a===f){a=a.call(n,c)}else{a=d.call(n,a,c)}if(a||a===0){s+=a}s+="\n                            "
r=o["_"]
a=r||n["_"]
c=p.program(8,g,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof a===f){a=a.call(n,c)}else{a=d.call(n,a,c)}if(a||a===0){s+=a}s+='\n                            </div>\n                        </div>\n                    </div>\n                    </div>\n                </div>\n            </div>\n            <div class="sub-header-spacer tutorial-color"></div>\n        '
return s}function h(n,e){return"Computer programming"}function m(n,e){return"Documentation"}function v(n,e){return"Stub."}function g(n,e){return"You can click the links below to learn more about what you can do in your pages."}function _(n,e){return"SQL"}function E(n,e){return"Querying data"}function y(n,e){return"SELECT * FROM customers;"}function T(n,e){return"Select everything<br>"}function N(n,e){return"SELECT * FROM customers WHERE age > 21;"}function b(n,e){return"Select with condition<br>"}function D(n,e){return"SELECT * FROM customers WHERE age > 21 ORDER BY age DESC;"}function w(n,e){return"Ordering data<br>"}function R(n,e){return"SELECT name, age FROM customers;"}function q(n,e){return"Select specific columns<br>"}function L(n,e){return'For more details, see a complete list for <a href="https://www.sqlite.org/lang_select.html">select</a>.'}function S(n,e){return"Basic data operations"}function A(n,e){return'INSERT INTO customers VALUES (73, "Brian", 33);'}function F(n,e){return"Inserting data<br>"}function O(n,e){return"UPDATE customers SET age = 33 WHERE id = 73;"}function C(n,e){return"Updating data<br>"}function k(n,e){return"DELETE FROM customers WHERE id = 73;"}function I(n,e){return"Deleting data<br>"}function G(n,e){return'For more details, see a complete list for\n                <a href="https://www.sqlite.org/lang_insert.html">insert</a>,\n                <a href="https://www.sqlite.org/lang_update.html">update</a>, and\n                <a href="https://www.sqlite.org/lang_delete.html">delete</a>.'}function M(n,e){return"Creating tables"}function j(n,e){return"CREATE TABLE customer (id INTEGER PRIMARY KEY, age INTEGER);"}function B(n,e){return"Primary keys<br>"}function H(n,e){return"CREATE TABLE inventory (id INTEGER, quantity datatype NOT NULL);"}function U(n,e){return"NULL constraints<br>"}function Y(n,e){return"CREATE TABLE customer_orders (id INTEGER, amount INTEGER, FOREIGN KEY (id) REFERENCES students(id));"}function P(n,e){return"Foreign keys<br>"}function Q(n,e){return'For more details, see a complete list for <a href="https://www.sqlite.org/lang_createtable.html">create table</a>.'}function W(n,e){return"Aggregating data"}function V(n,e){return"SELECT MAX(age) FROM customers;"}function K(n,e){return"Aggregate functions<br>"}function x(n,e){return"SELECT membership_level, AVG(age) FROM customers GROUP BY membership_level HAVING age > 21;"}function X(n,e){return"Grouping data<br>"}function z(n,e){return'For more details, see a complete list for <a href="https://www.sqlite.org/lang_select.html">select</a>.'}function J(n,e){return'Our implementation of SQL is based off of <a href="https://www.sqlite.org/">SQLite</a> which is compiled down to <a href="http://asmjs.org/">asm.js</a> by <a href="https://github.com/kripken/emscripten">Emscripten</a> packaged into <a href="https://github.com/kripken/sql.js/">sqljs</a>.'}i+='<div class="prerendered topic-content-view-root">\n    <div class="content-pane-inner cs subject-color">\n        '
r=o.standAlone
t=r||e.standAlone
l=o["if"]
c=p.program(1,u,a)
c.hash={}
c.fn=c
c.inverse=p.noop
t=l.call(e,t,c)
if(t||t===0){i+=t}i+='\n\n        <div id="tutorials" class="videos-list">\n        <div class="videos-list-inner">\n        <div class="videos-list-inner-inner">\n            <div class="cs-documentation-container">\n\n                <h3 class="cs-documentation-bigheader">'
r=o["_"]
t=r||e["_"]
c=p.program(10,_,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</h3>\n\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-shapes">'
r=o["_"]
t=r||e["_"]
c=p.program(12,E,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</h4>\n                <ul>\n                    <div class="span6">\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
r=o.i18nDoNotTranslate
t=r||e.i18nDoNotTranslate
c=p.program(14,y,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</code></span>\n                            <span>"
r=o["_"]
t=r||e["_"]
c=p.program(16,T,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</span>\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
r=o.i18nDoNotTranslate
t=r||e.i18nDoNotTranslate
c=p.program(18,N,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</code></span>\n                            <span>"
r=o["_"]
t=r||e["_"]
c=p.program(20,b,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</span>\n                    </div>\n                    <div class="span6">\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
r=o.i18nDoNotTranslate
t=r||e.i18nDoNotTranslate
c=p.program(22,D,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</code></span>\n                            <span>"
r=o["_"]
t=r||e["_"]
c=p.program(24,w,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</span>\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
r=o.i18nDoNotTranslate
t=r||e.i18nDoNotTranslate
c=p.program(26,R,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</code></span>\n                            <span>"
r=o["_"]
t=r||e["_"]
c=p.program(28,q,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</span>\n                    </div>\n                </ul>\n                <p>"
r=o["_"]
t=r||e["_"]
c=p.program(30,L,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='\n                </p>\n                </div>\n\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-shapes">'
r=o["_"]
t=r||e["_"]
c=p.program(32,S,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</h4>\n                <ul>\n                    <div class="span6">\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
r=o.i18nDoNotTranslate
t=r||e.i18nDoNotTranslate
c=p.program(34,A,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</code></span>\n                            <span>"
r=o["_"]
t=r||e["_"]
c=p.program(36,F,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</span>\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
r=o.i18nDoNotTranslate
t=r||e.i18nDoNotTranslate
c=p.program(38,O,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</code></span>\n                            <span>"
r=o["_"]
t=r||e["_"]
c=p.program(40,C,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</span>\n                    </div>\n                    <div class="span6">\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
r=o.i18nDoNotTranslate
t=r||e.i18nDoNotTranslate
c=p.program(42,k,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</code></span>\n                            <span>"
r=o["_"]
t=r||e["_"]
c=p.program(44,I,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</span>\n                    </div>\n                </ul>\n                <p>"
r=o["_"]
t=r||e["_"]
c=p.program(46,G,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='\n                </p>\n                </div>\n\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-shapes">'
r=o["_"]
t=r||e["_"]
c=p.program(48,M,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</h4>\n                <ul>\n                    <div class="span6">\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
r=o.i18nDoNotTranslate
t=r||e.i18nDoNotTranslate
c=p.program(50,j,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</code></span>\n                            <span>"
r=o["_"]
t=r||e["_"]
c=p.program(52,B,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</span>\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
r=o.i18nDoNotTranslate
t=r||e.i18nDoNotTranslate
c=p.program(54,H,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</code></span>\n                            <span>"
r=o["_"]
t=r||e["_"]
c=p.program(56,U,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</span>\n                    </div>\n                     <div class="span6">\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
r=o.i18nDoNotTranslate
t=r||e.i18nDoNotTranslate
c=p.program(58,Y,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</code></span>\n                            <span>"
r=o["_"]
t=r||e["_"]
c=p.program(60,P,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</span>\n                    </div>\n                </ul>\n                <p>"
r=o["_"]
t=r||e["_"]
c=p.program(62,Q,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='\n                </p>\n                </div>\n\n\n      <div class="cs-documentation-section">\n                <h4 id="cs-documentation-shapes">'
r=o["_"]
t=r||e["_"]
c=p.program(64,W,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</h4>\n                <ul>\n                    <div class="span6">\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
r=o.i18nDoNotTranslate
t=r||e.i18nDoNotTranslate
c=p.program(66,V,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</code></span>\n                        <span>"
r=o["_"]
t=r||e["_"]
c=p.program(68,K,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+='</span>\n                    <li>\n<span class="cs-documentation-codesnippet cs-documentation-codesnippet-sql"><code>'
r=o.i18nDoNotTranslate
t=r||e.i18nDoNotTranslate
c=p.program(70,x,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</code></span>\n                        <span>"
r=o["_"]
t=r||e["_"]
c=p.program(72,X,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</span>\n                    </div>\n                </ul>\n                <p>"
r=o["_"]
t=r||e["_"]
c=p.program(74,z,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="\n                </p>\n                </div>\n\n\n                <div>\n                    <p>"
r=o["_"]
t=r||e["_"]
c=p.program(76,J,a)
c.hash={}
c.fn=c
c.inverse=p.noop
if(r&&typeof t===f){t=t.call(e,c)}else{t=d.call(e,t,c)}if(t||t===0){i+=t}i+="</p>\n                </div>\n            </div>\n        </div>\n        </div>\n        </div>\n    </div>\n</div>\n"
return i})
module.exports=t
});
KAdefine("javascript/scratchpad-base-package/docs-webpage.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,e,o,a,t){o=o||n.helpers
var r="",i,l,s,c,p=this,f="function",m=o.blockHelperMissing
function d(n,e){var a="",t
a+='\n            <div class="headline-container">\n                <div class="main-header">\n                    <div class="topic-info">\n                    <div class="topic-info-inner">\n                        <div class="welcome-info tutorial-welcome">\n                            <div class=\'subject-breadcrumb\'><a href="/computer-programming" class="subject-link" data-id="computer-programming"><i class="icon-caret-left"></i>'
s=o["_"]
t=s||n["_"]
c=p.program(2,h,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof t===f){t=t.call(n,c)}else{t=m.call(n,t,c)}if(t||t===0){a+=t}a+='</a></div>\n                            <div class="topic-title">'
s=o["_"]
t=s||n["_"]
c=p.program(4,g,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof t===f){t=t.call(n,c)}else{t=m.call(n,t,c)}if(t||t===0){a+=t}a+='</div>\n                            <div id="tutorial-sorter"></div>\n                            <div class="topic-desc">'
s=o["_"]
t=s||n["_"]
c=p.program(6,u,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof t===f){t=t.call(n,c)}else{t=m.call(n,t,c)}if(t||t===0){a+=t}a+="\n                            "
s=o["_"]
t=s||n["_"]
c=p.program(8,v,e)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof t===f){t=t.call(n,c)}else{t=m.call(n,t,c)}if(t||t===0){a+=t}a+='\n                            </div>\n                        </div>\n                    </div>\n                    </div>\n                </div>\n            </div>\n            <div class="sub-header-spacer tutorial-color"></div>\n        '
return a}function h(n,e){return"Computer programming"}function g(n,e){return"Documentation"}function u(n,e){return"Stub."}function v(n,e){return"You can click the links below to learn more about what you can do in your pages."}function _(n,e){return"HTML"}function b(n,e){return"Headlines"}function y(n,e){return"<code>&lt;h1&gt; - &lt;h6&gt;</code>"}function T(n,e){return"Paragraphs"}function D(n,e){return"<code>&lt;p&gt;</code>"}function N(n,e){return"Line breaks"}function k(n,e){return"<code>&lt;br&gt;</code>"}function w(n,e){return"Lists"}function S(n,e){return"<code>&lt;ul&gt;, &lt;ol&gt;, &lt;li&gt;</code>"}function H(n,e){return"Emphasis"}function L(n,e){return"<code>&lt;strong&gt;, &lt;em&gt;</code>"}function z(n,e){return"Links"}function C(n,e){return"<code>&lt;a&gt;</code>"}function M(n,e){return"Images"}function j(n,e){return"<code>&lt;img&gt;</code>"}function F(n,e){return"Tables"}function A(n,e){return"<code>&lt;table&gt;, &lt;thead&gt;, &lt;tbody&gt;, &lt;tr&gt;, &lt;th&gt;, &lt;td&gt;</code>"}function E(n,e){return'For more HTML tags, see a <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">complete list here</a>.'}function P(n,e){return"CSS"}function U(n,e){return"Selectors"}function W(n,e){return"h1 { \n    color: rgb(0, 0, 0);\n}"}function x(n,e){return"The element selector<br>"}function I(n,e){return"ul em { \n    color: rgb(0, 0, 0);\n}"}function R(n,e){return"The descendant selector<br>"}function Y(n,e){return".stripe { \n    color: rgb(0, 0, 0);\n}"}function q(n,e){return"The class selector<br>"}function B(n,e){return"#star { \n    color: rgb(0, 0, 0);\n}"}function G(n,e){return"The id selector<br>"}function J(n,e){return'For more CSS selectors, see <a href="http://docs.webplatform.org/wiki/css/selectors">a complete list here</a>.'}function K(n,e){return"Properties"}function O(n,e){return"<code>color</code>"}function Q(n,e){return"<code>background-color</code>"}function V(n,e){return"<code>font-family</code>"}function X(n,e){return"<code>font-size</code>"}function Z(n,e){return'For more CSS properties, see <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference">a complete list here</a>.'}r+='<div class="prerendered topic-content-view-root">\n    <div class="content-pane-inner cs subject-color">\n        '
s=o.standAlone
i=s||e.standAlone
l=o["if"]
c=p.program(1,d,t)
c.hash={}
c.fn=c
c.inverse=p.noop
i=l.call(e,i,c)
if(i||i===0){r+=i}r+='\n\n        <div id="tutorials" class="videos-list">\n        <div class="videos-list-inner">\n        <div class="videos-list-inner-inner">\n            <div class="cs-documentation-container">\n\n                <h3 class="cs-documentation-bigheader">'
s=o["_"]
i=s||e["_"]
c=p.program(10,_,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='</h3>\n\n                <div class="cs-documentation-section">\n                <ul>\n                    <div class="span6">\n                    <li>\n                        <a href="/computer-programming/html-the-h1-to-h6-tags/4681886899372032" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-html_headlines"></div>\n                            '
s=o["_"]
i=s||e["_"]
c=p.program(12,b,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="<br>\n                            "
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=p.program(14,y,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                        </a>\n                    <li>\n                        <a href="/computer-programming/html-the-p-tag/6093568875954176" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-html_paragraphs"></div>\n                            '
s=o["_"]
i=s||e["_"]
c=p.program(16,T,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="<br>\n                            "
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=p.program(18,D,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                        </a>\n                    <li>\n                        <a href="/computer-programming/html-the-br-tag/5409006839660544" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-html_linebreaks"></div>\n                            '
s=o["_"]
i=s||e["_"]
c=p.program(20,N,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="<br>\n                            "
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=p.program(22,k,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                        </a>\n                    <li>\n                        <a href="/computer-programming/html-the-ul-ol-and-li-tags/6339629448167424" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-html_lists"></div>\n                            '
s=o["_"]
i=s||e["_"]
c=p.program(24,w,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="<br>\n                            "
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=p.program(26,S,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                        </a>\n                    </div>\n                    <div class="span6">\n                    <li>\n                        <a href="/computer-programming/html-the-strong-and-em-tags/5341594157056000" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-html_emphasis"></div>\n                            '
s=o["_"]
i=s||e["_"]
c=p.program(28,H,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="<br>\n                            "
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=p.program(30,L,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                        </a>\n                    <li>\n                        <a href="/computer-programming/html-the-a-tag/4923899846590464" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-html_links"></div>\n                            '
s=o["_"]
i=s||e["_"]
c=p.program(32,z,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="<br>\n                            "
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=p.program(34,C,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                        </a>\n                    <li>\n                        <a href="/computer-programming/html-the-image-tag/4800922048004096" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-html_images"></div>\n                            '
s=o["_"]
i=s||e["_"]
c=p.program(36,M,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="<br>\n                            "
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=p.program(38,j,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                        </a>\n                    <li>\n                        <a href="/computer-programming/html-the-table-tags/6579067331805184" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-html_tables"></div>\n                            '
s=o["_"]
i=s||e["_"]
c=p.program(40,F,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="<br>\n                            "
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=p.program(42,A,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="\n                        </a>\n                    </div>\n                </ul>\n                <p>"
s=o["_"]
i=s||e["_"]
c=p.program(44,E,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                </p>\n                </div>\n\n                <h3 class="cs-documentation-bigheader">'
s=o["_"]
i=s||e["_"]
c=p.program(46,P,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='</h3>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-shapes">'
s=o["_"]
i=s||e["_"]
c=p.program(48,U,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='</h4>\n                <ul>\n                    <div class="span6">\n                    <li>\n<pre class="cs-documentation-codesnippet"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=p.program(50,W,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='</code></pre>\n                        <a href="/computer-programming/css-the-element-selector/4908710711525376" target="_blank">\n                            <span>'
s=o["_"]
i=s||e["_"]
c=p.program(52,x,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='</span>\n                        </a>\n                    <li>\n<pre class="cs-documentation-codesnippet"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=p.program(54,I,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='</code></pre>\n                        <a href="/computer-programming/css-the-descendant-selector/4674155417174016" target="_blank">\n                            <span>'
s=o["_"]
i=s||e["_"]
c=p.program(56,R,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='</span>\n                        </a>\n                    \n\n                    </div>\n                    <div class="span6">\n                    <li>\n<pre class="cs-documentation-codesnippet"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=p.program(58,Y,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='</code></pre>\n                        <a href="/computer-programming/css-the-class-selector/6091891456344064" target="_blank">\n                            <span>'
s=o["_"]
i=s||e["_"]
c=p.program(60,q,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='</span>\n                        </a>\n                    \n                    <li>\n<pre class="cs-documentation-codesnippet"><code>'
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=p.program(62,B,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='</code></pre>\n                        <a href="/computer-programming/css-the-id-selector/5563053492142080" target="_blank">\n                            <span>'
s=o["_"]
i=s||e["_"]
c=p.program(64,G,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="</span>\n                        </a>\n\n                    </div>\n                </ul>\n                <p>"
s=o["_"]
i=s||e["_"]
c=p.program(66,J,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                </p>\n                </div>\n\n                <div class="cs-documentation-section">\n                <h4 id="cs-documentation-shapes">'
s=o["_"]
i=s||e["_"]
c=p.program(68,K,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='</h4>\n                <ul>\n                    <div class="span6">\n                    <li>\n                        <a href="/computer-programming/css-the-color-property/6620760659722240" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-css_color"></div>\n                            '
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=p.program(70,O,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                        </a>\n                    <li>\n                        <a href="/computer-programming/css-the-background-color-property/6318097938251776" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-css_backgroundcolor"></div>\n                            '
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=p.program(72,Q,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                        </a>\n                    </div>\n                    <div class="span6">\n                    <li>\n                        <a href="/computer-programming/css-the-font-family-property/5206961000022016" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-css_fontfamily"></div>\n                            '
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=p.program(74,V,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+='\n                        </a>\n                    <li>\n                        <a href="/computer-programming/css-the-font-size-property/6229082618724352" target="_blank">\n                            <div class="cs-documentation-webpage-image cs-documentation-sprite-css_fontsize"></div>\n                            '
s=o.i18nDoNotTranslate
i=s||e.i18nDoNotTranslate
c=p.program(76,X,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="\n                        </a>\n                    </div>\n\n                </ul>\n                <p>"
s=o["_"]
i=s||e["_"]
c=p.program(78,Z,t)
c.hash={}
c.fn=c
c.inverse=p.noop
if(s&&typeof i===f){i=i.call(e,c)}else{i=m.call(e,i,c)}if(i||i===0){r+=i}r+="\n                </p>\n                </div>\n\n            </div>\n        </div>\n        </div>\n        </div>\n    </div>\n</div>\n"
return r})
module.exports=t
});
KAdefine("javascript/scratchpad-base-package/scratchpads.js", function(require, module, exports) {
var $=require("jquery")
var Backbone=require("backbone")
var _=require("underscore")
require("../shared-package/i18n.js")
var KA=require("../shared-package/ka.js")
var PackageManager=require("../shared-package/package-manager.js")
var ScratchpadRevision=Backbone.Model.extend({parse:function(e){e.created=new Date(e.created)
if(isNaN(Number(e.created))){e.created=new Date}return e},hasAudio:function(){return!!this.get("mp3Url")},getMp3Url:function(){var e=this.get("translatedMp3Url")||this.get("mp3Url")
return e}})
var UserScratchpad=Backbone.Model.extend({urlRoot:"/api/internal/user_scratchpads",defaults:{ms_watched:0,last_ms_watched:0,ms_duration:null,challenge_status:-1,stashed_code:""},saveAccumulative:function(){if(this.saveInProgress){return}this.saveInProgress=true
var e=this
this.save({last_ms_watched:Math.round(this.lastMS),ms_watched:this.get("ms_watched")+Math.round(this.watchedMS)},{success:t,error:t})
this.watchedMS=0
function t(){e.saveInProgress=false
if(e.watchedMS>0){e.saveAccumulative()}}},addMillisecondsWatched:function(e,t,i){if(_.isNull(this.get("ms_duration"))){if(!i||i<=0){console.error("Illegal or nonexistant scratchpad UI track"+"duration. Saving user talkie progress aborted.")
return}this.set("ms_duration",parseInt(i,10))}this.watchedMS=(this.watchedMS||0)+e
this.lastMS=t
this.saveAccumulative()},saveChallengeStatus:function(e,t){if(!_.contains(["complete","started"],e)){console.error("Invalid status: "+e)
return}this.lastStatusTime=(new Date).getTime()
var i=this.setChallengeTimeTaken()
var r=e==="complete"?1:0
i.challenge_status=r
t=t||{}
t.patch=true
this.save(i,t)},setChallengeTimeTaken:function(){var e={}
var t=(new Date).getTime()
if(this.lastTimeRecorded){var i=Math.round((t-this.lastTimeRecorded)/1e3)
e={time_taken:i}
this.set(e,{silent:true})}this.lastTimeRecorded=t
return e},saveChallengeTimeTaken:function(){if(!this.save||!this.setChallengeTimeTaken){return}this.save(this.setChallengeTimeTaken(),{silent:true,patch:true})}})
var Scratchpad=Backbone.Model.extend({urlRoot:"/api/internal/scratchpads",pathForShow:function(){return"/computer-programming/"+this.get("slug")+"/"+this.get("id")},pathForImage:function(){return"/computer-programming/"+this.get("slug")+"/"+this.get("id")+"/"+this.currentRevision().get("id")+".png"},urlForShow:function(){return"http://"+document.location.host+this.pathForShow()},urlForImage:function(){return"http://"+document.location.host+this.pathForImage()},getVersion:function(){if(this.isNew()){var e=require("../scratchpads-package/scratchpad-ui.js").ScratchpadUI
return e.liveEditor.config.latestVersion()}else{return this.currentRevision().get("configVersion")||0}},setVersion:function(e){this.currentRevision().set("configVersion",e)},getYoutubeId:function(e){return this.currentRevision().get("youtubeId")},setYoutubeId:function(e){this.currentRevision().set("youtubeId",e)},getYoutubeEduUrl:function(){return"https://www.youtubeeducation.com/embed/"+this.getYoutubeId()},isResizableType:function(){return this.get("userAuthoredContentType")==="webpage"||this.get("userAuthoredContentType")==="sql"},toJSONForTemplate:function(){return{id:this.get("id"),imagePath:this.pathForImage(),showPath:this.pathForShow(),title:this.get("title"),translatedTitle:this.get("translatedTitle")}},hasTag:function(e){return _.include(this.get("tags"),e)},parse:function(e,t){e.revision=new ScratchpadRevision(e.revision,{parse:true})
e.trustedRevision=new ScratchpadRevision(e.trusted_revision,{parse:true})
if(!e.tags){e.tags=[]}return e},fork:function(){var e=this.currentRevision()
var t=new Scratchpad({title:this.get("title"),revision:e.clone().unset("id").set({mp3Url:"",recording:{},tests:""}),origin_scratchpad_id:this.get("id"),origin_revision_id:e.get("id")})
return t},save:function(e,t){this.get("revision").unset("created").unset("kind").unset("scratchpadId").unset("id").unset("hasAudio")
return Scratchpad.__super__.save.call(this,e,t)},currentRevision:function(){if(PackageManager.isLoaded("scratchpads.js")){var e=require("../scratchpads-package/scratchpad-ui.js").ScratchpadUI
if(e.trusted&&this.get("trustedRevision").get("id")){return this.get("trustedRevision")}}return this.get("revision")},isTalkie:function(){return this.currentRevision()&&this.currentRevision().get("hasAudio")},isChallenge:function(){return this.get("category")==="challenge"},isProject:function(){return this.get("category")==="project"},isCategorySet:function(){return!!this.get("category")},isProjectOrFork:function(){return this.isProject()||this.isOriginProject()},hasObjectives:function(){return this.isChallenge()||this.isProject()},isOwner:function(){return this.get("userId")===KA.getUserID()},inTutorial:function(){return!!this.get("defaultUrlPath")},isOriginProject:function(){return this.get("originIsProject")},setTitle:function(e){this.set("title",e)
this.set("translatedTitle",e)}},{difficultyMapping:{1:$._("Work in Progress"),10:$._("Getting Started"),20:$._("Easy"),30:$._("Intermediate"),40:$._("Expert")}})
var ScratchpadDocsView=Backbone.View.extend({initialize:function(){if(this.options.userAuthoredContentType==="webpage"){this.template=require("./docs-webpage.handlebars")}else if(this.options.userAuthoredContentType==="sql"){this.template=require("./docs-sql.handlebars")}else{this.template=require("./docs-pjs.handlebars")}},render:function(){this.$el.html(this.template({standAlone:this.options.standAlone}))}})
module.exports={Scratchpad:Scratchpad,ScratchpadDocsView:ScratchpadDocsView,ScratchpadRevision:ScratchpadRevision,UserScratchpad:UserScratchpad}
});
this.KAdefineTiming["scratchpad-base-package.js"].endTime = +(new Date);
