(window["webpackJsonp-ae-fe/cosmos-1"]=window["webpackJsonp-ae-fe/cosmos-1"]||[]).push([[26],{171:function(e,t,r){"use strict";var n;function a(){return null==n&&(n=/(iPhone|Android)/i.test(navigator.userAgent)),n}r.d(t,"a",(function(){return a}))},213:function(e){e.exports=JSON.parse('{"a":"4.4.60"}')},214:function(e,t,r){"use strict";r.r(t),r.d(t,"updateChannel",(function(){return m})),r.d(t,"saveChannel",(function(){return v}));var n=r(3),a=r.n(n),u=r(0),o=r.n(u),i=r(1),s=r.n(i),c=r(7),d=r(83),p=r(82),f="__user_channel_info__",m=function(){var e=o()(s.a.mark((function e(){var t,r,n,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.a.isLoggedIn()&&"KR"===c.a.getRegion()){e.next=2;break}return e.abrupt("return");case 2:if(t=c.a.get(f),e.prev=3,t&&(t=JSON.parse(t)),!(!t||t&&t.updated)){e.next=7;break}return e.abrupt("return");case 7:return r=t.requests,e.next=10,Object(p.c)({api:"mtop.global.message.box.aeusertouche.setting.batch.update",v:"1.0",appKey:"24815441",timeout:5e3,type:"POST",dataType:"json",data:{requests:JSON.stringify(r)}});case 10:n=e.sent,u=n.data.errorCode,0===Number(u)&&Object(d.b)({key:f,value:JSON.stringify(a()({},t,{updated:!0}))}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(3),console.log("aeusertouche.setting.batch.update",e.t0);case 18:case"end":return e.stop()}}),e,null,[[3,15]])})));return function(){return e.apply(this,arguments)}}(),v=function(e){Object(d.b)({key:f,value:JSON.stringify({requests:e,updated:!1})})}},252:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));var n=r(14),a=function(){return window.location.host.includes("pre-")||"true"===Object(n.a)("isPre")?"pre":"online"}},82:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return v})),r.d(t,"c",(function(){return l}));var n=r(3),a=r.n(n),u=r(0),o=r.n(u),i=r(1),s=r.n(i),c=r(17),d=r(35),p=r(96),f=r(252),m=function(){var e=o()(s.a.mark((function e(t){var r;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l(a()({v:"1.0"},t));case 3:return r=e.sent,e.abrupt("return",r);case 7:return e.prev=7,e.t0=e.catch(0),console.log(t.api+"接口错误: "+(null===e.t0||void 0===e.t0?void 0:e.t0.traceId)),e.abrupt("return",null);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=o()(s.a.mark((function e(t){var r,n,u,o,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={path:null==t?void 0:t.url,params:JSON.stringify((null==t?void 0:t.data)||"{}")},Object(p.c)(a()({},n)),u=null==t?void 0:t.url,o=/https:\/\/login.aliexpress/,null!==(r=u)&&void 0!==r&&r.includes("https://login.aliexpress")&&"pre"===Object(f.a)()&&(u=u.replace(o,"https://pre-login.aliexpress")),e.prev=5,e.next=8,Object(c.a)(a()({},t,{url:u}));case 8:return i=e.sent,e.abrupt("return",i);case 12:return e.prev=12,e.t0=e.catch(5),Object(p.b)(a()({},n,{errorCode:null===e.t0||void 0===e.t0?void 0:e.t0.errorCode,errorInfo:JSON.stringify(e.t0||"{}")})),e.abrupt("return",e.t0);case 16:case"end":return e.stop()}}),e,null,[[5,12]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=o()(s.a.mark((function e(t){var r,n,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r={path:null==t?void 0:t.api,params:JSON.stringify((null==t?void 0:t.data)||"{}")},Object(p.c)(a()({},r)),e.prev=2,e.next=5,d.a.request(t);case 5:return n=e.sent,e.abrupt("return",n);case 9:return e.prev=9,e.t0=e.catch(2),Object(p.b)(a()({},r,{errorCode:null===e.t0||void 0===e.t0||null===(u=e.t0.ret)||void 0===u?void 0:u.toString(),errorInfo:JSON.stringify(e.t0||"{}")})),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()},83:function(e,t,r){"use strict";r.d(t,"b",(function(){return i}));var n=r(3),a=r.n(n),u=r(7),o=function(){var e={country:"",firstName:"",lastName:"",memberSeq:""},t=(u.a.get("xman_us_f","x_user")||"").split("|");return t.length>=5&&(e.country=t[0],e.firstName=t[1].replace(/</g,"&lt;").replace(/>/g,"&gt;"),e.lastName=t[2].replace(/</g,"&lt;").replace(/>/g,"&gt;"),e.memberSeq=t[4]),e};function i(e){var t=e.key,r=e.value,n=e.expires,a=void 0===n?30:n,u=new Date((new Date).getTime()+864e5*a).toUTCString(),o=(document.domain.match(/\..*/)||[])[0]||document.domain;document.cookie=t+"="+r+";expires="+u+";domain="+o+";path=/"}t.a=a()({},u.a,{isNewUser:function(){return""===o().memberSeq},getMemberSeq:function(){return o().memberSeq},getLoginId:function(){return u.a.get("xman_us_t","rmb_pp")},getReSns:function(){return u.a.get("aep_usuc_f","re_sns")}})},96:function(e,t,r){"use strict";r.d(t,"e",(function(){return o})),r.d(t,"h",(function(){return i})),r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return c})),r.d(t,"a",(function(){return d})),r.d(t,"f",(function(){return p})),r.d(t,"d",(function(){return f})),r.d(t,"g",(function(){return m}));var n=r(15),a=r(213),u=r(171);function o(e){var t=e.title,r=e.extra,u=void 0===r?{}:r;Object(n.sendSafeEvent)({eventId:"member_biz_error",eventName:t,jsVersion:a.a,extra:u})}function i(e,t){void 0===t&&(t=""),Object(n.sendSafeEvent)({eventId:"member_js_error",eventName:t,jsVersion:a.a,extra:{errorMsg:e}})}function s(e){var t=e.path,r=e.errorCode,u=void 0===r?"":r,o=e.params,i=e.errorInfo;Object(n.sendSafeEvent)({eventId:"member_api_error",eventName:t,jsVersion:a.a,extra:{errorCode:u,params:o,errorInfo:i}})}function c(e){var t=e.path,r=e.params;Object(n.sendSafeEvent)({eventId:"member_api_action",eventName:t,jsVersion:a.a,extra:{params:r}})}function d(e){var t=e.type;Object(n.sendSafeEvent)({eventId:"member_batman_exp",jsVersion:a.a,eventName:t})}function p(e){var t=e.name,r=e.channel,o=void 0===r?"":r,i=e.extra,s=void 0===i?{}:i;Object(n.sendSafeEvent)({eventName:t,jsVersion:a.a,eventId:"member_batman_clk_"+(o||Object(u.a)()?"mobil-modal":"pc-modal"),extra:s})}function f(e){Object(n.sendSafeEvent)({eventId:"member_monitor_mark",jsVersion:a.a,eventName:e})}var m={marked:{start:!1,end:!1},start:function(e){performance.mark(e),this.marked.start=!0},end:function(e){performance.mark(e),this.marked.end=!0},consuming:function(e){var t=e.mark,r=e.start,u=e.end;if(this.marked.start&&this.marked.end){performance.measure(t,r,u);var o=performance.getEntriesByName(t)[0].duration;Object(n.sendSafeEvent)({eventId:"member_batman_exp_consuming",eventName:""+o,jsVersion:a.a}),this.marked.start=!1,this.marked.start=!1,performance.clearMarks(),performance.clearMeasures()}}}}}]);