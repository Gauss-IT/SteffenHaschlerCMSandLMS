((this.KAdefineTiming = this.KAdefineTiming || {})["topic-package.js"] = {}).startTime = +(new Date);
KAdefine("javascript/topic-package/subject-page.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,e,i,a,l){i=i||n.helpers
var o="",s,t,r,c,f=this,p="function",h=i.helperMissing,u=void 0,d=this.escapeExpression,m=i.blockHelperMissing
function g(n,e){var a="",l,o
a+='\n        <div class="subject-container '
r=i.domainInfo
l=r||n.domainInfo
l=l===null||l===undefined||l===false?l:l.identifier
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"domainInfo.identifier",{hash:{}})}a+=d(l)+" "
r=i.topic
l=r||n.topic
l=l===null||l===undefined||l===false?l:l.slug
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"topic.slug",{hash:{}})}a+=d(l)+'">\n            '
r=i.topic
l=r||n.topic
l=l===null||l===undefined||l===false?l:l.logoImageUrl
o=i["if"]
c=f.program(2,v,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=o.call(n,l,c)
if(l||l===0){a+=l}a+='\n            <div class="subject-container-inner">\n                <div class="subject-info">\n                    '
r=i.linkToDomain
l=r||n.linkToDomain
o=i["if"]
c=f.program(4,b,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=o.call(n,l,c)
if(l||l===0){a+=l}a+="\n                    "
r=i.topic
l=r||n.topic
o=i["with"]
c=f.program(6,y,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=o.call(n,l,c)
if(l||l===0){a+=l}a+="\n                    "
r=i.isComputerProgramming
l=r||n.isComputerProgramming
o=i["if"]
c=f.program(17,_,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=o.call(n,l,c)
if(l||l===0){a+=l}a+="\n                    "
r=i.topic
l=r||n.topic
l=l===null||l===undefined||l===false?l:l.backgroundImageUrl
o=i["if"]
c=f.program(26,D,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=o.call(n,l,c)
if(l||l===0){a+=l}a+="\n                    "
a+="\n                    "
r=i.isComputerProgramming
l=r||n.isComputerProgramming
o=i["if"]
c=f.program(30,q,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=o.call(n,l,c)
if(l||l===0){a+=l}a+='\n                    <a class="community-questions-link subject-page-special-link" href="/'
r=i.topic
l=r||n.topic
l=l===null||l===undefined||l===false?l:l.extendedSlug
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"topic.extendedSlug",{hash:{}})}a+=d(l)+'/d">\n                        <i class="icon-comments"></i> '
r=i["_"]
l=r||n["_"]
c=f.program(35,E,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){a+=l}a+="\n                    </a>\n\n                    "
r=i.isComputerScience
l=r||n.isComputerScience
o=i["if"]
c=f.program(37,G,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=o.call(n,l,c)
if(l||l===0){a+=l}a+="\n\n                </div>\n            </div>\n        </div>\n        "
return a}function v(n,e){var a="",l
a+='\n                <div class="subject-logo">\n                    <h1>\n                        <img src="'
r=i.topic
l=r||n.topic
l=l===null||l===undefined||l===false?l:l.logoImageUrl
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"topic.logoImageUrl",{hash:{}})}a+=d(l)+'" alt="'
r=i.topic
l=r||n.topic
l=l===null||l===undefined||l===false?l:l.translatedTitle
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"topic.translatedTitle",{hash:{}})}a+=d(l)+'"/>\n                    </h1>\n                </div>\n            '
return a}function b(n,e){var a="",l
a+='\n                    <div class="subject-breadcrumb">\n                        <a href="/'
r=i.domainInfo
l=r||n.domainInfo
l=l===null||l===undefined||l===false?l:l.identifier
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"domainInfo.identifier",{hash:{}})}a+=d(l)+'">\n                            <i class="icon-caret-left"></i>'
r=i.domainInfo
l=r||n.domainInfo
l=l===null||l===undefined||l===false?l:l.translatedTitle
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"domainInfo.translatedTitle",{hash:{}})}a+=d(l)+"</a>\n                    </div>\n                    "
return a}function y(n,e){var a="",l,o
a+="\n                        "
r=i.logoImageUrl
l=r||n.logoImageUrl
o=i.unless
c=f.program(7,I,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=o.call(n,l,c)
if(l||l===0){a+=l}a+='\n                        <div class="subject-description">'
r=i.translatedDescription
l=r||n.translatedDescription
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"translatedDescription",{hash:{}})}a+=d(l)+'</div>\n                        \n                        <div class="subject-page-links">\n                            '
r=i.webUrl
l=r||n.webUrl
o=i["if"]
c=f.program(9,w,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=o.call(n,l,c)
if(l||l===0){a+=l}a+="\n                            "
r=i.facebookUrl
l=r||n.facebookUrl
o=i["if"]
c=f.program(11,k,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=o.call(n,l,c)
if(l||l===0){a+=l}a+="\n                            "
r=i.twitterUrl
l=r||n.twitterUrl
o=i["if"]
c=f.program(13,j,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=o.call(n,l,c)
if(l||l===0){a+=l}a+="\n                            "
r=i.gplusUrl
l=r||n.gplusUrl
o=i["if"]
c=f.program(15,U,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=o.call(n,l,c)
if(l||l===0){a+=l}a+="\n                        </div>\n                    "
return a}function I(n,e){var a="",l
a+='\n                            <h1 class="subject-title">'
r=i.translatedTitle
l=r||n.translatedTitle
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"translatedTitle",{hash:{}})}a+=d(l)+"</h1>\n                        "
return a}function w(n,e){var a="",l
a+='<a href="'
r=i.webUrl
l=r||n.webUrl
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"webUrl",{hash:{}})}a+=d(l)+'"><i class="icon-home icon-fixed-width"></i></a>'
return a}function k(n,e){var a="",l
a+='<a href="'
r=i.facebookUrl
l=r||n.facebookUrl
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"facebookUrl",{hash:{}})}a+=d(l)+'"><i class="icon-facebook icon-fixed-width"></i></a>'
return a}function j(n,e){var a="",l
a+='<a href="'
r=i.twitterUrl
l=r||n.twitterUrl
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"twitterUrl",{hash:{}})}a+=d(l)+'"><i class="icon-twitter icon-fixed-width"></i></a>'
return a}function U(n,e){var a="",l
a+='<a href="'
r=i.gplusUrl
l=r||n.gplusUrl
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"gplusUrl",{hash:{}})}a+=d(l)+'"><i class="icon-google-plus icon-fixed-width"></i></a>'
return a}function _(n,e){var a="",l
a+='\n                        <div class="cs-subject-custom-area-wrapper">\n                            <a class="new-program-subject-link subject-page-special-link" href="/computer-programming/new/pjs">\n                                <i class="icon-plus"></i> '
r=i["_"]
l=r||n["_"]
c=f.program(18,x,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){a+=l}a+='\n                            </a>\n                            <a class="new-program-subject-link subject-page-special-link" href="/computer-programming/new/webpage">\n                                <i class="icon-plus"></i> '
r=i["_"]
l=r||n["_"]
c=f.program(20,S,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){a+=l}a+='\n                            </a>\n                            <a class="my-programs-subject-link subject-page-special-link" href="javascript:void(0)" style="display:none;">\n                                <i class="icon-user"></i> '
r=i["_"]
l=r||n["_"]
c=f.program(22,T,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){a+=l}a+='\n                            </a>\n                            <a class="browse-programs-subject-link subject-page-special-link" href="/'
r=i.extendedSlug
l=r||n.extendedSlug
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"extendedSlug",{hash:{}})}a+=d(l)+'/browse">\n                                <i class="icon-th"></i><span> '
r=i["_"]
l=r||n["_"]
c=f.program(24,C,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){a+=l}a+='</span>\n                                <div class="browse-programs-thumbs"></div>\n                            </a>\n                        </div>\n                    '
return a}function x(n,e){return"Create New JS Program"}function S(n,e){return"Create New Webpage"}function T(n,e){return"My Creations"}function C(n,e){return"Browse Creations"}function D(n,e){var a="",l,o
a+="\n                        "
r=i.topic
l=r||n.topic
l=l===null||l===undefined||l===false?l:l.backgroundImageCaption
o=i["if"]
c=f.program(27,P,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=o.call(n,l,c)
if(l||l===0){a+=l}a+="\n                    "
return a}function P(n,e){var a="",l
a+='\n                            <a\n                                class="subject-image-caption subject-page-special-link"\n                                title="'
r=i.topic
l=r||n.topic
l=l===null||l===undefined||l===false?l:l.backgroundImageCaption
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"topic.backgroundImageCaption",{hash:{}})}a+=d(l)+'"\n                                data-domain="'
r=i.domainInfo
l=r||n.domainInfo
l=l===null||l===undefined||l===false?l:l.identifier
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"domainInfo.identifier",{hash:{}})}a+=d(l)+'"\n                                href="javascript:void(0);">\n                                <i class="icon-picture"></i> <span>'
r=i["_"]
l=r||n["_"]
c=f.program(28,A,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){a+=l}a+="</span>\n                            </a>\n                        "
return a}function A(n,e){return"About Image"}function q(n,e){var a="",l
a+='\n                    <a class="projectfeedback-link subject-page-special-link" href="/'
r=i.topic
l=r||n.topic
l=l===null||l===undefined||l===false?l:l.extendedSlug
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"topic.extendedSlug",{hash:{}})}a+=d(l)+'/projectfeedback">\n                        <i class="icon-question"></i> '
r=i["_"]
l=r||n["_"]
c=f.program(31,H,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){a+=l}a+='\n                    </a>\n                    <a class="projectfeedback-link subject-page-special-link" href="/'
r=i.topic
l=r||n.topic
l=l===null||l===undefined||l===false?l:l.extendedSlug
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"topic.extendedSlug",{hash:{}})}a+=d(l)+'/projectfeedback?fromsubjectpage#projecteval">\n                        <i class="icon-list-alt"></i> '
r=i["_"]
l=r||n["_"]
c=f.program(33,M,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){a+=l}a+="\n                    </a>\n                    "
return a}function H(n,e){return"Help Requests"}function M(n,e){return"Project Evaluations"}function E(n,e){return"Community Questions"}function G(n,e){var a="",l
a+='\n                    <br>\n                    <div class="subject-description">\n                        <img src="/images/domains/computer-programming.png" \n                             style="float: left;width: 80px;margin-right: 10px;">\n                        '
r=i["_"]
l=r||n["_"]
c=f.program(38,N,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){a+=l}a+="\n                    </div>\n                    "
return a}function N(n,e){return'Did you know? You can learn how to program\n                        on Khan Academy and create your own programs. \n                        Go to our\n                        <a href="/computer-programming">computer programming</a>\n                        subject to get started.'}function B(n,e){var a="",l
a+='\n        <div class="dashboard-tutorial-link-container-outer">\n            <div class="dashboard-tutorial-link-container-inner">\n                <a class="dashboard-tutorial-link" href='
r=i.topicInfo
l=r||n.topicInfo
l=l===null||l===undefined||l===false?l:l.missionUrl
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"topicInfo.missionUrl",{hash:{}})}a+=d(l)+">\n                    "
r=i["_"]
l=r||n["_"]
c=f.program(41,J,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){a+=l}a+='\n                    <i class="icon-chevron-right"></i>\n                </a>\n            </div>\n        </div>\n        '
return a}function J(n,e){var a="",l
a+="Get a personal path through "
r=i.topicInfo
l=r||n.topicInfo
l=l===null||l===undefined||l===false?l:l.topic
l=l===null||l===undefined||l===false?l:l.translatedTitle
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"topicInfo.topic.translatedTitle",{hash:{}})}a+=d(l)
return a}function K(n,e){var a="",l,o
a+='\n            <div class="topic-list-separator"></div>\n            <a href="/'
r=i.extendedSlug
l=r||n.extendedSlug
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"extendedSlug",{hash:{}})}a+=d(l)+'" class="topic-list-item">\n                '
r=i.showTopicIconAndProgress
l=r||n.showTopicIconAndProgress
o=i["if"]
c=f.program(44,Q,e)
c.hash={}
c.fn=c
c.inverse=f.program(46,R,e)
l=o.call(n,l,c)
if(l||l===0){a+=l}a+='\n                <div class="topic-info">\n                    <h4 class="topic-title">'
r=i.translatedTitle
l=r||n.translatedTitle
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"translatedTitle",{hash:{}})}a+=d(l)+'</h4>\n                    <div class="topic-description">\n                        '
r=i.compactIconSrc
l=r||n.compactIconSrc
o=i["if"]
c=f.program(49,Y,e)
c.hash={}
c.fn=c
c.inverse=f.noop
l=o.call(n,l,c)
if(l||l===0){a+=l}a+='\n                        <div class="topic-description-text">\n                            '
r=i.translatedDescription
l=r||n.translatedDescription
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"translatedDescription",{hash:{}})}a+=d(l)+"\n                        </div>\n                    </div>\n                </div>\n            </a>\n            "
return a}function Q(n,e){var a="",l
a+='\n                <div class="icon-with-progress" data-domain-slug="'
r=i.domainInfo
l=r||n.domainInfo
l=l===null||l===undefined||l===false?l:l.identifier
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"domainInfo.identifier",{hash:{}})}a+=d(l)+'" data-slug="'
r=i.slug
l=r||n.slug
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"slug",{hash:{}})}a+=d(l)+'" data-icon-url="'
r=i.thumbnailUrl
l=r||n.thumbnailUrl
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"thumbnailUrl",{hash:{}})}a+=d(l)+'">\n                    '
a+="\n                </div>\n                "
return a}function R(n,e){var a="",l
a+='\n                <div class="thumb">\n                    '
a+='\n                    <img width="120" height="90" src="'
r=i.thumbnailUrl
l=r||n.thumbnailUrl
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"thumbnailUrl",{hash:{}})}a+=d(l)+'" alt="'
r=i["_"]
l=r||n["_"]
c=f.program(47,W,e)
c.hash={}
c.fn=c
c.inverse=f.noop
if(r&&typeof l===p){l=l.call(n,c)}else{l=m.call(n,l,c)}if(l||l===0){a+=l}a+='">\n                </div>\n                '
return a}function W(n,e){var a="",l
a+="A thumbnail for: "
r=i.translatedTitle
l=r||n.translatedTitle
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"translatedTitle",{hash:{}})}a+=d(l)
return a}function Y(n,e){var a="",l
a+='\n                            <img class="topic-icon" src="'
r=i.compactIconSrc
l=r||n.compactIconSrc
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=h.call(n,"compactIconSrc",{hash:{}})}a+=d(l)+'" width="60" height="60">\n                        '
return a}o+='<div class="row-fluid">\n    <div class="subject-outer-container">\n        '
r=i.topicInfo
s=r||e.topicInfo
t=i["with"]
c=f.program(1,g,l)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(e,s,c)
if(s||s===0){o+=s}o+='\n    </div>\n    <div class="subject-children-outer-container">\n        '
o+="\n        "
r=i.topicInfo
s=r||e.topicInfo
s=s===null||s===undefined||s===false?s:s.missionUrl
t=i["if"]
c=f.program(40,B,l)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(e,s,c)
if(s||s===0){o+=s}o+='\n        <div class="topic-list">\n            '
r=i.topicInfo
s=r||e.topicInfo
s=s===null||s===undefined||s===false?s:s.subtopics
t=i.each
c=f.program(43,K,l)
c.hash={}
c.fn=c
c.inverse=f.noop
s=t.call(e,s,c)
if(s||s===0){o+=s}o+="\n        </div>\n    </div>\n</div>\n"
return o})
module.exports=t
});
KAdefine("javascript/topic-package/content-topic-videos.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(n,e,i,l,a){i=i||n.helpers
l=l||n.partials
var s="",o,t,c,f,r=this,p="function",d=i.helperMissing,u=void 0,h=this.escapeExpression,v=i.blockHelperMissing
function m(n,e){var l="",a
l+='\n<div class="dashboard-tutorial-link-container-outer">\n    <div class="dashboard-tutorial-link-container-inner">\n        <a class="dashboard-tutorial-link" href='
c=i.topic
a=c||n.topic
a=a===null||a===undefined||a===false?a:a.missionUrl
if(typeof a===p){a=a.call(n,{hash:{}})}else if(a===u){a=d.call(n,"topic.missionUrl",{hash:{}})}l+=h(a)+">\n            "
c=i["_"]
a=c||n["_"]
f=r.program(2,y,e)
f.hash={}
f.fn=f
f.inverse=r.noop
if(c&&typeof a===p){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){l+=a}l+='\n            <i class="icon-chevron-right"></i>\n        </a>\n    </div>\n</div>\n'
return l}function y(n,e){var l="",a
l+="Get a personal path through "
c=i.topic
a=c||n.topic
a=a===null||a===undefined||a===false?a:a.translatedTitle
if(typeof a===p){a=a.call(n,{hash:{}})}else if(a===u){a=d.call(n,"topic.translatedTitle",{hash:{}})}l+=h(a)
return l}function g(n,e){var l="",a,s
l+='\n            <div class="cs-subject-custom-area-wrapper">\n                '
c=i.topicInfo
a=c||n.topicInfo
a=a===null||a===undefined||a===false?a:a.topic
a=a===null||a===undefined||a===false?a:a.userAuthoredContentTypesInfo
s=i.each
f=r.program(5,b,e)
f.hash={}
f.fn=f
f.inverse=r.noop
a=s.call(n,a,f)
if(a||a===0){l+=a}l+="\n                "
c=i.topicInfo
a=c||n.topicInfo
a=a===null||a===undefined||a===false?a:a.topic
a=a===null||a===undefined||a===false?a:a.userAuthoredContentTypesInfo
s=i.each
f=r.program(7,I,e)
f.hash={}
f.fn=f
f.inverse=r.noop
a=s.call(n,a,f)
if(a||a===0){l+=a}l+='\n                <a class="my-programs-subject-link subtopic-cs-special-link" href="javascript:void(0)" style="display:none;">\n                    <i class="icon-user"></i> '
c=i["_"]
a=c||n["_"]
f=r.program(10,j,e)
f.hash={}
f.fn=f
f.inverse=r.noop
if(c&&typeof a===p){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){l+=a}l+='\n                </a>\n            </div>\n            <a class="projectfeedback-link subtopic-cs-special-link" href="/'
c=i.topic
a=c||n.topic
a=a===null||a===undefined||a===false?a:a.extendedSlug
if(typeof a===p){a=a.call(n,{hash:{}})}else if(a===u){a=d.call(n,"topic.extendedSlug",{hash:{}})}l+=h(a)+'/projectfeedback">\n                <i class="icon-question"></i> '
c=i["_"]
a=c||n["_"]
f=r.program(12,_,e)
f.hash={}
f.fn=f
f.inverse=r.noop
if(c&&typeof a===p){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){l+=a}l+='\n            </a>\n            <a class="projectfeedback-link subtopic-cs-special-link" href="/'
c=i.topic
a=c||n.topic
a=a===null||a===undefined||a===false?a:a.extendedSlug
if(typeof a===p){a=a.call(n,{hash:{}})}else if(a===u){a=d.call(n,"topic.extendedSlug",{hash:{}})}l+=h(a)+'/projectfeedback?fromtopicpage#projecteval">\n                <i class="icon-list-alt"></i> '
c=i["_"]
a=c||n["_"]
f=r.program(14,x,e)
f.hash={}
f.fn=f
f.inverse=r.noop
if(c&&typeof a===p){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){l+=a}l+='\n            </a>\n            <a class="community-questions-link subtopic-cs-special-link" href="/'
c=i.topic
a=c||n.topic
a=a===null||a===undefined||a===false?a:a.extendedSlug
if(typeof a===p){a=a.call(n,{hash:{}})}else if(a===u){a=d.call(n,"topic.extendedSlug",{hash:{}})}l+=h(a)+'/d">\n                <i class="icon-comments"></i> '
c=i["_"]
a=c||n["_"]
f=r.program(16,T,e)
f.hash={}
f.fn=f
f.inverse=r.noop
if(c&&typeof a===p){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){l+=a}l+="\n            </a>\n            "
return l}function b(n,e){var i="",l
i+='\n                    <a class="new-program-subject-link subtopic-cs-special-link" href="/computer-programming/new/'
l=n.type
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=d.call(n,"this.type",{hash:{}})}i+=h(l)+'">\n                        <i class="icon-plus"></i> '
l=n["new"]
if(typeof l===p){l=l.call(n,{hash:{}})}else if(l===u){l=d.call(n,"this.new",{hash:{}})}i+=h(l)+"\n                    </a>\n                "
return i}function I(n,e){var l="",a
l+='\n                    <a class="new-program-subject-link subtopic-cs-special-link" href="/computing/computer-programming/docs/'
a=n.type
if(typeof a===p){a=a.call(n,{hash:{}})}else if(a===u){a=d.call(n,"this.type",{hash:{}})}l+=h(a)+'">\n                        <i class="icon-file-text-alt"></i> '
c=i["_"]
a=c||n["_"]
f=r.program(8,k,e)
f.hash={}
f.fn=f
f.inverse=r.noop
if(c&&typeof a===p){a=a.call(n,f)}else{a=v.call(n,a,f)}if(a||a===0){l+=a}l+="\n                    </a>\n                "
return l}function k(n,e){return"Documentation"}function j(n,e){return"My Programs"}function _(n,e){return"Help Requests"}function x(n,e){return"Project Evaluations"}function T(n,e){return"Community Questions"}s+='\n<div class="content-pane-inner '
c=i.topicInfo
o=c||e.topicInfo
o=o===null||o===undefined||o===false?o:o.domainInfo
o=o===null||o===undefined||o===false?o:o.identifier
if(typeof o===p){o=o.call(e,{hash:{}})}else if(o===u){o=d.call(e,"topicInfo.domainInfo.identifier",{hash:{}})}s+=h(o)+' subject-color">\n\n'
s+="\n"
c=i.topic
o=c||e.topic
o=o===null||o===undefined||o===false?o:o.missionUrl
t=i["if"]
f=r.program(1,m,a)
f.hash={}
f.fn=f
f.inverse=r.noop
o=t.call(e,o,f)
if(o||o===0){s+=o}s+='\n<div data-role="header" class="main-header">\n    <div class="topic-info">\n        <div class="topic-info-inner">\n            <div class=\'subject-breadcrumb\'><a href="'
c=i.topicInfo
o=c||e.topicInfo
o=o===null||o===undefined||o===false?o:o.subjectInfo
o=o===null||o===undefined||o===false?o:o.topicPageUrl
if(typeof o===p){o=o.call(e,{hash:{}})}else if(o===u){o=d.call(e,"topicInfo.subjectInfo.topicPageUrl",{hash:{}})}s+=h(o)+'" class="subject-link" data-id=""><i class="icon-caret-left"></i>'
c=i.topicInfo
o=c||e.topicInfo
o=o===null||o===undefined||o===false?o:o.subjectInfo
o=o===null||o===undefined||o===false?o:o.translatedTitle
if(typeof o===p){o=o.call(e,{hash:{}})}else if(o===u){o=d.call(e,"topicInfo.subjectInfo.translatedTitle",{hash:{}})}s+=h(o)+"</a></div>\n            <div class='topic-title'>"
c=i.topicInfo
o=c||e.topicInfo
o=o===null||o===undefined||o===false?o:o.topic
o=o===null||o===undefined||o===false?o:o.translatedTitle
if(typeof o===p){o=o.call(e,{hash:{}})}else if(o===u){o=d.call(e,"topicInfo.topic.translatedTitle",{hash:{}})}s+=h(o)+"</div>\n            <div class='topic-desc'>"
c=i.topicInfo
o=c||e.topicInfo
o=o===null||o===undefined||o===false?o:o.topic
o=o===null||o===undefined||o===false?o:o.translatedDescription
if(typeof o===p){o=o.call(e,{hash:{}})}else if(o===u){o=d.call(e,"topicInfo.topic.translatedDescription",{hash:{}})}s+=h(o)+"</div>\n\n            "
c=i.topicInfo
o=c||e.topicInfo
o=o===null||o===undefined||o===false?o:o.topic
o=o===null||o===undefined||o===false?o:o.hasUserAuthoredContentTypes
t=i["if"]
f=r.program(4,g,a)
f.hash={}
f.fn=f
f.inverse=r.noop
o=t.call(e,o,f)
if(o||o===0){s+=o}s+='\n        </div>\n    </div>\n</div>\n<div class="videos-list">\n    <div class="videos-list-inner">\n        <div class="videos-list-inner-inner">\n            '
o=e
o=r.invokePartial(l["topic_tutorial-list"],"topic_tutorial-list",o,i,l)
if(o||o===0){s+=o}s+="\n        </div>\n    </div>\n</div>\n</div>\n"
s+='\n<div style="clear: both;"></div>\n'
return s})
module.exports=t
});
KAdefine("javascript/topic-package/topic-page-cs-custom-view.js", function(require, module, exports) {
var $=require("jquery")
var Backbone=require("backbone")
var _=require("underscore")
var KA=require("../shared-package/ka.js")
var KAConsole=require("../shared-package/console.js")
var ComputerScienceCustomSubjectView=Backbone.View.extend({render:function(){if(!_.isNull(KA.getUserProfile())){var e=KA.getUserProfile().get("profileRoot")+"programs"
this.$(".my-programs-subject-link").attr("href",e).show()}var r=this.$(".browse-programs-thumbs")
$.ajax({type:"GET",url:"/api/internal/scratchpads/top",data:{sort:3,limit:9,casing:"camel"},dataType:"json",success:function(e){var a=_.map(e.scratchpads,function(e){return $("<img>").attr("src",e.thumb)})
a.reverse()
r.html(a)},error:function(e,r,a){KAConsole.log("Error: Failed to load CS browse preview.")}})
return this}})
module.exports=ComputerScienceCustomSubjectView
});
KAdefine("javascript/topic-package/topic-progress-icon.jsx", function(require, module, exports) {
var $=require("jquery")
var React=require("react")
var ReactART=require("react-art")
require("../shared-package/i18n.js")
var UserProgressCache=require("../shared-package/user-progress-cache.jsx")
var Group=ReactART.Group
var Path=ReactART.Path
var Pattern=ReactART.Pattern
var Shape=ReactART.Shape
var Surface=ReactART.Surface
var ICON_R=32
var INNER_RING_R=35
var RING_R=42
var TOTAL_R=45
function circlePath(e){return(new Path).moveTo(0,-e).arcTo(0,e,e,e,true).arcTo(0,-e,e,e,true).close()}var TOPIC_COLORS={science:"#c55f73",humanities:"#fc6255","economics-finance-domain":"#f0ac5f",cs:"#83c167","hour-of-code":"#83c167",computing:"#83c167","partner-content":"#5cd0b3",math:"#4fbad4","test-prep":"#9a72ac"}
var DEFAULT_TOPIC_COLOR="#6a8da6"
var TopicProgressIcon=React.createClass({displayName:"TopicProgressIcon",propTypes:{className:React.PropTypes.string,radius:React.PropTypes.number,domainSlug:React.PropTypes.string.isRequired,progressKeys:React.PropTypes.array,complete:React.PropTypes.number,total:React.PropTypes.number,iconUrl:React.PropTypes.string,iconAspectRatio:React.PropTypes.number},getDefaultProps:function(){return{radius:TOTAL_R}},render:function(){var e=this.props.complete
var r=this.props.total
if(this.props.progressKeys==null&&(e==null||r==null)){throw new Error("Expected progressKeys or complete/total to be specified")}if(this.props.progressKeys!=null&&(e!=null||r!=null)){throw new Error("Expected progressKeys or complete/total, not both")}if(this.props.progressKeys!=null){e=r=0
this.props.progressKeys.forEach(function(t){var a=UserProgressCache.getStatusForProgressKey(t)
r++
if(a==="complete"){e++}})}var t=TOPIC_COLORS[this.props.domainSlug]||DEFAULT_TOPIC_COLOR
var a=e/r
var s=-Math.PI/2+2*Math.PI*a
var o=this.props.radius
var c=RING_R/TOTAL_R*this.props.radius
var p=INNER_RING_R/TOTAL_R*this.props.radius
var i=ICON_R/TOTAL_R*this.props.radius
var n=this.props.iconAspectRatio||1
var l
if(this.props.outerRing){l=this.props.outerRing}else{l=React.createElement(Shape,{stroke:t,strokeWidth:5/TOTAL_R*this.props.radius,strokeCap:"butt",d:a>=1?circlePath(c):(new Path).moveTo(0,-c).arcTo(c*Math.cos(s),c*Math.sin(s),c,c,a>=.5)})}var R=React.createElement(Surface,{className:"icon-surface",width:2*o,height:2*o},React.createElement(Group,{x:o,y:o},React.createElement(Shape,{fill:"#fff",stroke:"#ddd",strokeWidth:5/TOTAL_R*this.props.radius,d:circlePath(c)}),React.createElement(Shape,{fill:t,d:circlePath(p)}),React.createElement(Shape,{fill:new Pattern(this.props.iconUrl,2*i*n,2*i,-i*n,-i),d:circlePath(i)}),l))
var h=$._("%(complete)s/%(total)s completed",{complete:e,total:r})
return React.createElement("div",{className:this.props.className,title:h},R)}})
module.exports=TopicProgressIcon
});
KAdefine("javascript/topic-package/topic-page-view.js", function(require, module, exports) {
var $=require("jquery")
var Backbone=require("backbone")
var React=require("react")
var _=require("underscore")
var ComputerScienceCustomSubjectView=require("./topic-page-cs-custom-view.js")
var TopicProgressIcon=React.createFactory(require("./topic-progress-icon.jsx"))
var bindSignupLink=require("../shared-package/bind-signup-link.js")
var SubjectPageView=Backbone.View.extend({_rendered:false,events:{"click .topic-list-item":"_onTopicNavigationItemClick","click .community-questions-link":"_onTopicNavigationItemClick","click .browse-programs-subject-link":"_onTopicNavigationItemClick"},initialize:function(e){this.template=require("./subject-page.handlebars")},render:function(){if(this._rendered){return}var e=$('.prerendered[data-id="'+this.model.topic.slug+'"]')
if(!e.length){this.$el.html(this.template({topicInfo:this.model}))}this._rendered=true
this._renderTopicProgress()
if(this.$el.find(".cs-subject-custom-area-wrapper").length>0){this.CSAreaCustomView=new ComputerScienceCustomSubjectView({el:this.$el.find(".cs-subject-custom-area-wrapper")})
this.CSAreaCustomView.render()}bindSignupLink(this.$(".dashboard-tutorial-link"))
return this},_onTopicNavigationItemClick:function(e){if(e.metaKey){return}if(window.history&&window.history.pushState){e.preventDefault()
var i=$(e.currentTarget).attr("href")
this.trigger("navigate-to-topic",i)}},_renderTopicProgress:function(){var e=this.$(".icon-with-progress")
if(!e.length){return}_.defer(function(){var i={}
e.each(function(){i[$(this).data("slug")]=this})
this.model.subtopics.forEach(function(e,t){var r=i[e.slug]
if(!r){return}var n=$(r).data("domainSlug")
var o=$(r).data("iconUrl")
var s=1
if(o.indexOf("https://img.youtube.com")===0){s=4/3}var a=_.flatten(e.tutorials.map(function(e){return e.children.map(function(e){return e.progressKey})}))
React.render(TopicProgressIcon({domainSlug:n,progressKeys:a,iconUrl:o,iconAspectRatio:s}),r)},this)}.bind(this))}})
var TopicPageView=Backbone.View.extend({initialize:function(e){this.subjectInfo=e.subjectInfo},_rendered:false,render:function(){if(!this._rendered){var e=$('.prerendered[data-id="'+this.model.topic.slug+'"]')
if(e.length){this.setElement(e.get(0))}else{var i=require("./content-topic-videos.handlebars")
this.$el.html(i({topicInfo:this.model,topic:this.subjectInfo}))}this.$el.addClass("topic-content-view-root")
this._rendered=true
bindSignupLink(this.$(".dashboard-tutorial-link"))}return this},onShown:function(){this.options.viewCount++}})
module.exports={SubjectPageView:SubjectPageView,TopicPageView:TopicPageView}
});
KAdefine("javascript/topic-package/topic-page.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/jqueryui/jquery.ui.effect.js")
var $=require("jquery")
var Backbone=require("backbone")
var React=require("react")
var _=require("underscore")
var guiders=require("../../third_party/javascript-khansrc/Guiders-JS/guiders.js")
require("../shared-package/i18n.js")
var Analytics=require("../shared-package/analytics.js")
var KA=require("../shared-package/ka.js")
var KAConsole=require("../shared-package/console.js")
var NotificationsLoader=require("../shared-package/notifications-loader.js")
var Promos=require("../shared-package/promos.js")
var SubjectPageView=require("./topic-page-view.js").SubjectPageView
var TopicPageView=require("./topic-page-view.js").TopicPageView
var updateDocumentTitle=require("../shared-package/update-document-title.js")
var liveContext={rootPageTopic:null,topicList:{},TopicPageView:TopicPageView,SubjectPageView:SubjectPageView,rootTopicView:null,rootViewSelector:".subject-page.live"}
var editContext=liveContext
var currentContext=liveContext
var selectedTopic=null
var rootTopicModel=null
var viewType=null
var discussionView=null
var browseScratchpadView=null
var docsScratchpadView=null
var guidelinesScratchpadView=null
var initOptions={}
var TopicPage={init:function(e,t,i){rootTopicModel=e
liveContext.rootPageTopic=t
TopicPage.finishInit()
TopicPage.growContent()
$(window).resize(function(){TopicPage.growContent()})
initOptions=i
this.inEditContext=false
this.showingTutorial=false
this.router=new this.SubTopicRouter
this.router.on("route",Analytics.handleRouterNavigation,Analytics)
this.topicRoot="/"+rootTopicModel["extendedSlug"]
Backbone.history.start({pushState:true,hashChange:false})
if(i.previewing){var o={class_:["UrgentNotification"],text:$._("You are previewing an unpublished subject.")}
NotificationsLoader.loadUrgent(o)}},finishInit:function(){_.each(liveContext.rootPageTopic.subtopics,function(e){liveContext.topicList[e.slug]=e})
var e="a.subject-link, "+"a.subtopic-link, "+"a.topic-heading-link, "+"a.discussion-link, "+"a.browse-programs-link,"+"a.program-docs-link"
$(".topic-page-content").on("click",e,_.bind(this._onNavigationElementClicked,this))
$(".topic-page-content").on("click",".topic-page-content a.subtopic-link-and-scroll",_.bind(function(e){if(e.metaKey){return}this._onNavigationElementClicked(e)
$("body").animate({scrollTop:0},200,"easeInOutCubic")},this))
if(!_.isNull(KA.getUserProfile())){var t=KA.getUserProfile().get("profileRoot")+"programs"
$(".my-programs").find("a.my-programs-link").attr("href",t)
$(".my-programs").show()}},setEditContext:function(e){editContext=e},setCurrentContext:function(e){var t=this.router.lastFragment
if(e===editContext){t+="/edit"}this.router.navigate(t)
this.router.showSubtopic(t)},getSelectedTopic:function(){return selectedTopic},_onNavigationElementClicked:function(e){if(e.metaKey){return}if(window.history&&window.history.pushState){var t=TopicPage.topicRoot
var i=$(e.currentTarget).data("id")
if(i){t=t+"/"+i}this.router.navigate(t,true)
e.preventDefault()}},growContent:_.debounce(function(){if(KA.isMobileCapable){return}this._growContent()},100),_growContent:function(){var e=$(".topic-page-content > .container:visible").find(".subject-children-outer-container, .videos-list-inner").css("min-height","").end()
var t=e.height()
var i=$(window).height(),o=e.offset().top,n=$("#end-of-page-spacer").outerHeight(true),r=i-o-n
var a=Math.max(t,r)
$(".topic-page-content > .container:visible").find(".subject-children-outer-container, .videos-list-inner").css("min-height",a+"px").end()},SubTopicRouter:Backbone.Router.extend({selectedSubTopicId:null,routes:{"*subtopicID":"showSubtopic"},normalizeSubtopicID:function(e){e=e.substring(TopicPage.topicRoot.length)
if(e.charAt(0)==="/"){e=e.substr(1)}return e},_showContentView:function(e){var t=e.render().el
$(".topic-page-content .content-pane").children().detach().end().append(t)
if(_.isFunction(e.onShown)){e.onShown()}},showBrowsePrograms:function(){require.async(["../cs-topic-package/scratchpad-browse-list-view.js"],function(e){if(!browseScratchpadView){var t=liveContext.rootPageTopic.topic
browseScratchpadView=new e({el:$(".topic-page-content .content-pane"),topicId:t.id})}browseScratchpadView.render()})},showCommunityGuidelines:function(){require.async(["../cs-topic-package/scratchpad-guidelines-view.js"],function(e){if(!guidelinesScratchpadView){guidelinesScratchpadView=new e({el:$(".topic-page-content .content-pane"),userAuthoredContentType:initOptions.userAuthoredContentType,standAlone:true})}guidelinesScratchpadView.render()})},showProgramDocumentation:function(){require.async(["../scratchpad-base-package/scratchpads.js"],function(e){docsScratchpadView=docsScratchpadView||new e.ScratchpadDocsView({el:$(".topic-page-content .content-pane"),userAuthoredContentType:initOptions.userAuthoredContentType,standAlone:true})
docsScratchpadView.render()})},showDiscussion:function(){var e=liveContext.rootPageTopic.subtopics!=null&&liveContext.rootPageTopic.subtopics.length>0
require.async(["../topic-discussion-package/discussion-view.js"],function(t){var i=liveContext.rootPageTopic.topic
discussionView=discussionView||new t({domainInfo:liveContext.rootPageTopic["domainInfo"],subject:{slug:i.slug,topicPageUrl:i.topicPageUrl,translatedTitle:i.translatedTitle},prefetchedDiscussion:initOptions.prefetchedDiscussion,hasChildTopics:e})
this._showContentView(discussionView)}.bind(this))},showProjectFeedback:function(){require.async(["../projectfeedback-package/projectfeedback-form.jsx"],function(e){var t=React.createFactory(e.ProjectFeedbackPage)
React.render(t({topic:rootTopicModel.slug}),$(".topic-page-content .content-pane")[0])})},showSubtopic:function(e){$("html, body").animate({scrollTop:0},0)
var t=""
if(e.substr(-5)==="/edit"){e=e.substr(0,e.length-5)
currentContext=editContext
TopicPage.inEditContext=true}else{currentContext=liveContext
TopicPage.inEditContext=false}this.lastFragment=e
e=this.normalizeSubtopicID(e)
KAConsole.log("Switching to subtopic: "+e)
var i=$(".topic-page-content .nav-pane").find('li[data-id="coach-resources"] a')
if(i.is(":visible")&&rootTopicModel.slug==="computer-programming"){var o=rootTopicModel.slug+"-coach-resources"
Promos.hasUserSeen(o,function(e){if(!e){Promos.markAsSeen(o)
var t=$._("Are your students learning "+"programming?")
var n=$._("Our Guide for Teachers and Parents "+" has a curriculum overview, handouts, tips"+", and case studies to help you.")
var r=[{action:guiders.ButtonAction.CLOSE,text:$._("Close"),classString:"simple-button"},{action:guiders.ButtonAction.CLOSE,text:$._("Check out the guide"),classString:"simple-button primary",onclick:function(){window.location.href=i.attr("href")}}]
guiders.createGuider({attachTo:i,buttons:r,position:3,offset:{left:-10,top:0},title:t,description:n}).show()}})}if(e==="d"){viewType="discussion"
selectedTopic=null
this._highlightSelectedTab(e)
this.showDiscussion()
$(".topic-page-content .content-pane").addClass("discussion")
var n=$._("Discussion")+" | "+rootTopicModel["translatedStandaloneTitle"]
updateDocumentTitle({pageName:n})
return}else if(e==="browse"){viewType="browse"
selectedTopic=null
this._highlightSelectedTab(e)
this.showBrowsePrograms()
var n=$._("Browse Programs")+" | "+rootTopicModel["translatedStandaloneTitle"]
updateDocumentTitle({pageName:n})
return}else if(e.substring(0,4)==="docs"){viewType="docs"
selectedTopic=null
this._highlightSelectedTab(e)
this.showProgramDocumentation()
var n=$._("Documentation")+" | "+rootTopicModel["translatedStandaloneTitle"]
updateDocumentTitle({pageName:n})
return}else if(e.substring(0,10)==="guidelines"){viewType="guidelines"
selectedTopic=null
this.showCommunityGuidelines()
var n=$._("Community Guidelines")+" | "+rootTopicModel["translatedStandaloneTitle"]
updateDocumentTitle({pageName:n})
return}else if(e==="projectfeedback"){viewType="projectfeedback"
selectedTopic=null
this._highlightSelectedTab(e)
this.showProjectFeedback()
var n=$._("Project Feedback")+" | "+rootTopicModel["translatedStandaloneTitle"]
updateDocumentTitle({pageName:n})
return}else{viewType="videos"
if(e===""){selectedTopic=null}else{selectedTopic=currentContext.topicList[e]||null}}var r
var a=null
if(selectedTopic||e==="subtopics"){$(".subject-page").hide()
$(".subtopic-page").show()
var c=currentContext.rootPageTopic
var s={}
if(c instanceof Backbone.Model){s.translatedTitle=c.get("translatedTitle")
s.topicPageUrl=c.get("topicPageUrl")}else{s.translatedTitle=c.topic.translatedTitle
s.topicPageUrl=c.topic.topicPageUrl}selectedTopic.domainInfo=liveContext.rootPageTopic["domainInfo"]
selectedTopic.view=selectedTopic.view||new currentContext.TopicPageView({subjectInfo:s,model:selectedTopic,viewCount:0})
this._showContentView(selectedTopic.view)
if(selectedTopic.view.postRender){selectedTopic.view.postRender()}a=selectedTopic.getUIAttributes?selectedTopic.getUIAttributes():selectedTopic.topic
t=a.slug
r={"Topic Title":a.title,"Topic Type":"Subtopic","Topic View Count":selectedTopic.view.options.viewCount}
TopicPage.showingTutorial=a.renderType==="Tutorial"}else{$(".subject-page").hide()
$(".subtopic-page").hide()
var l=$(currentContext.rootViewSelector).show()
currentContext.rootTopicView=currentContext.rootTopicView||new currentContext.SubjectPageView({model:currentContext.rootPageTopic,el:l})
var p=currentContext.rootPageTopic.getUIAttributes?currentContext.rootPageTopic.getUIAttributes():currentContext.rootPageTopic
currentContext.rootTopicView.render()
if(currentContext.rootTopicView.postRender){currentContext.rootTopicView.postRender()}this._listenToSubjectPage(currentContext.rootTopicView)
this.selectedSubTopicId=null
TopicPage.showingTutorial=false
r={"Topic Title":p.title,"Topic Type":"Content topic","Topic View Count":currentContext.rootTopicView.options.viewCount}}_.extend(r,{"Page Type":"Topic page"})
Analytics.trackSingleEvent("Page View",r)
this._highlightSelectedTab(t)
var n=""
if(a){n+=a.translatedTitle+" | "}n+=rootTopicModel["translatedStandaloneTitle"]
updateDocumentTitle({pageName:n})
$(".topic-page-content .content-pane").removeClass("discussion")
var u=require.ifLoadedLegacy("../discussion-package/discussion-note.js")
if(u){u.closeAll()}TopicPage.growContent()},_listenToSubjectPage:_.once(function(e){e.on("navigate-to-topic",function(t){e.$el.hide().siblings().show()
this.navigate(t,true)},this)}),_highlightSelectedTab:function(e){this.selectedSubTopicId=e
$(".topic-page-content .nav-pane").find(".active").removeClass("active").end().find('li[data-id="'+e+'"] a').addClass("active")}})}
module.exports=TopicPage
});
KAdefine("javascript/topic-package/subject-page.js", function(require, module, exports) {
require("../../third_party/javascript-khansrc/qTip2/jquery.qtip.js")
var $=require("jquery")
var _=require("underscore")
var SubjectPage={init:function(){this._initCaptionQtip()},_initCaptionQtip:function(){var t=$(".subject-image-caption")
var e=_.reduce(t.children(),function(t,e){return t+$(e).width()},0)+4
t.qtip({content:{attr:"title"},style:{classes:"qtip-rounded subject-page-caption "+t.data("domain"),tip:{width:20,height:12}},position:{my:"left center",at:"right center",adjust:{x:-(t.width()-e)}},hide:{fixed:true,delay:300}})}}
module.exports=SubjectPage
});
KAdefine("javascript/topic-package/tutorial-list.handlebars", function(require, module, exports) {
require("../../third_party/javascript-khansrc/handlebars/handlebars.runtime.js");
var t=Handlebars.template(function(e,l,n,i,a){n=n||e.helpers
var t="",s,o,r,f,c=this,h="function",p=n.helperMissing,d=void 0,u=this.escapeExpression,v=n.blockHelperMissing
function y(e,l){var i="",a
i+="All content in “"
r=n.topicInfo
a=r||e.topicInfo
a=a===null||a===undefined||a===false?a:a.topic
a=a===null||a===undefined||a===false?a:a.translatedTitle
if(typeof a===h){a=a.call(e,{hash:{}})}else if(a===d){a=p.call(e,"topicInfo.topic.translatedTitle",{hash:{}})}i+=u(a)+"”"
return i}function g(e,l,i){var a="",t,s
a+='\n  <div class="tutorial-container">\n    <div class="tutorial-overview">\n      '
r=n.children
t=r||e.children
s=n["if"]
f=c.programWithDepth(m,l,i)
f.hash={}
f.fn=f
f.inverse=c.programWithDepth(I,l,i)
t=s.call(e,t,f)
if(t||t===0){a+=t}a+='\n      <a href="/devadmin/contentanalytics/tutorial_funnels#'
r=n.topic
t=r||e.topic
t=t===null||t===undefined||t===false?t:t.slug
if(typeof t===h){t=t.call(e,{hash:{}})}else if(t===d){t=p.call(e,"topic.slug",{hash:{}})}a+=u(t)+'"\n      class="navigate-to-tutorial-stats" style="display: none;">\n        <i class="icon-bar-chart"></i></a>\n      '
r=n.topic
t=r||e.topic
t=t===null||t===undefined||t===false?t:t.translatedDescription
s=n["if"]
f=c.program(8,T,l)
f.hash={}
f.fn=f
f.inverse=c.noop
t=s.call(e,t,f)
if(t||t===0){a+=t}a+='\n    </div>\n    <div class="tutorial-contents">\n      <div class="contents-box">\n        <ul class="progress-container">\n        '
r=n.children
t=r||e.children
s=n.each
f=c.program(10,b,l)
f.hash={}
f.fn=f
f.inverse=c.noop
t=s.call(e,t,f)
if(t||t===0){a+=t}a+="\n        </ul>\n      </div>\n    </div>\n  </div>\n  "
return a}function m(e,l,i){var a="",t
a+='\n      <h3><a class="tutorial-title '
r=n.topicInfo
t=r||i.topicInfo
t=t===null||t===undefined||t===false?t:t.domainInfo
t=t===null||t===undefined||t===false?t:t.identifier
if(typeof t===h){t=t.call(e,{hash:{}})}else if(t===d){t=p.call(e,"......topicInfo.domainInfo.identifier",{hash:{}})}a+=u(t)+'" href="'
r=n.children
t=r||e.children
t=t===null||t===undefined||t===false?t:t[0]
t=t===null||t===undefined||t===false?t:t.url
if(typeof t===h){t=t.call(e,{hash:{}})}else if(t===d){t=p.call(e,"children.0.url",{hash:{}})}a+=u(t)+'">'
r=n.topic
t=r||e.topic
t=t===null||t===undefined||t===false?t:t.translatedTitle
if(typeof t===h){t=t.call(e,{hash:{}})}else if(t===d){t=p.call(e,"topic.translatedTitle",{hash:{}})}a+=u(t)+"</a></h3>\n      "
return a}function I(e,l,i){var a="",t
a+='\n      <h3><a class="tutorial-title '
r=n.topicInfo
t=r||i.topicInfo
t=t===null||t===undefined||t===false?t:t.domainInfo
t=t===null||t===undefined||t===false?t:t.identifier
if(typeof t===h){t=t.call(e,{hash:{}})}else if(t===d){t=p.call(e,"......topicInfo.domainInfo.identifier",{hash:{}})}a+=u(t)+'" href="'
r=n.topic
t=r||e.topic
t=t===null||t===undefined||t===false?t:t.topicPageUrl
if(typeof t===h){t=t.call(e,{hash:{}})}else if(t===d){t=p.call(e,"topic.topicPageUrl",{hash:{}})}a+=u(t)+'">'
r=n.topic
t=r||e.topic
t=t===null||t===undefined||t===false?t:t.translatedTitle
if(typeof t===h){t=t.call(e,{hash:{}})}else if(t===d){t=p.call(e,"topic.translatedTitle",{hash:{}})}a+=u(t)+"</a></h3>\n      "
return a}function T(e,l){var i="",a
i+='\n      <div class="tutorial-description">\n      '
r=n.topic
a=r||e.topic
a=a===null||a===undefined||a===false?a:a.translatedDescription
if(typeof a===h){a=a.call(e,{hash:{}})}else if(a===d){a=p.call(e,"topic.translatedDescription",{hash:{}})}i+=u(a)+"\n      </div>\n      "
return i}function b(e,l){var i="",a,t,s,o
i+='\n        <li class="progress-item">\n            <a href="'
r=n.url
a=r||e.url
if(typeof a===h){a=a.call(e,{hash:{}})}else if(a===d){a=p.call(e,"url",{hash:{}})}i+=u(a)+'">\n                '
a="progress-icon-subway"
t="shared"
s={}
r=n.type
o=r||e.type
s["type"]=o
r=n.progressKey
o=r||e.progressKey
s["key"]=o
o="small-icon"
s["extraClasses"]=o
r=n.invokePartial
o=r||e.invokePartial
f=c.program(11,D,l)
f.hash=s
f.fn=f
f.inverse=c.noop
if(r&&typeof o===h){a=o.call(e,t,a,f)}else{a=v.call(e,o,t,a,f)}if(a||a===0){i+=a}i+='\n                <span class="progress-title">'
r=n.translatedTitle
a=r||e.translatedTitle
if(typeof a===h){a=a.call(e,{hash:{}})}else if(a===d){a=p.call(e,"translatedTitle",{hash:{}})}i+=u(a)+"</span>\n            </a>\n        </li>\n        "
return i}function D(e,l){var n=""
return n}t+='<div class="tutorial-overview-header">'
r=n["_"]
s=r||l["_"]
f=c.program(1,y,a)
f.hash={}
f.fn=f
f.inverse=c.noop
if(r&&typeof s===h){s=s.call(l,f)}else{s=v.call(l,s,f)}if(s||s===0){t+=s}t+='</div>\n\n<div class="tutorial-overview-block">\n\n  '
r=n.topicInfo
s=r||l.topicInfo
s=s===null||s===undefined||s===false?s:s.tutorials
o=n.each
f=c.programWithDepth(g,a,l)
f.hash={}
f.fn=f
f.inverse=c.noop
s=o.call(l,s,f)
if(s||s===0){t+=s}t+="\n\n</div>\n\n"
return t})
module.exports=t
});
; KAdefine.updatePathToPackageMap({"javascript/cs-topic-package/scratchpad-browse-list-view.js": "cs-topic.js", "javascript/cs-topic-package/scratchpad-guidelines-view.js": "cs-topic.js", "javascript/projectfeedback-package/projectfeedback-form.jsx": "projectfeedback.js", "javascript/scratchpad-base-package/scratchpads.js": "scratchpad-base.js", "javascript/topic-discussion-package/discussion-view.js": "topic-discussion.js"});
this.KAdefineTiming["topic-package.js"].endTime = +(new Date);
