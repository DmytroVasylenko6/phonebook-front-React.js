(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[3],{158:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n(2),s=n(159),r=n.n(s),o=n(167),i=n(64),c=n.n(i);function l(e){var t=e.title,n=e.children,s=e.appear,i=["phonebook"===e.styles?r.a.titlePhonebook:r.a.titleContacts];return Object(a.jsxs)("section",{className:r.a.section,children:[Object(a.jsx)(o.a,{in:!0,appear:s,timeout:500,classNames:r.a,unmountOnExit:!0,children:t&&Object(a.jsx)("h2",{className:c()(i.join(" ")),children:t})}),n]})}},159:function(e,t,n){e.exports={section:"Section_section__11338",titlePhonebook:"Section_titlePhonebook__ZhPyl",titleContacts:"Section_titleContacts__1Xbwv",appear:"Section_appear__19OBS",appearActive:"Section_appearActive__32mQg"}},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(66);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],a=!0,s=!1,r=void 0;try{for(var o,i=e[Symbol.iterator]();!(a=(o=i.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(c){s=!0,r=c}finally{try{a||null==i.return||i.return()}finally{if(s)throw r}}return n}}(e,t)||Object(a.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},161:function(e,t,n){"use strict";var a=n(2),s=n(162),r=n.n(s);t.a=function(e){var t=e.name,n=e.label,s=e.value,o=e.id,i=e.placeholder,c=e.type,l=e.onChange,u=e.pattern;return Object(a.jsxs)("label",{htmlFor:o,className:r.a.label,children:[n,Object(a.jsx)("input",{type:c,name:t,value:s,id:o,placeholder:i,onChange:l,className:r.a.input,pattern:u})]})}},162:function(e,t,n){e.exports={label:"Input_label__3dWPf",input:"Input_input__5GLC9"}},163:function(e,t,n){e.exports={enter:"fadeNotification_enter__3AC-Z",enterActive:"fadeNotification_enterActive__2d6TU",exit:"fadeNotification_exit__1hvV_",exitActive:"fadeNotification_exitActive__16VdN"}},164:function(e,t,n){e.exports={notification:"Notification_notification__2-3al",blueColor:"Notification_blueColor__2j6YI",redColor:"Notification_redColor__1iFgN"}},165:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(2),s=n(164),r=n.n(s),o=n(64),i=n.n(o);function c(e){var t=e.text,n=e.color,s=r.a.blueColor,o=r.a.redColor,c=[r.a.notification];return"red"===n&&c.push(o),"blue"===n&&c.push(s),Object(a.jsx)("p",{className:i()(c.join(" ")),children:t})}},167:function(e,t,n){"use strict";var a=n(1),s=n(14),r=n(16);n(6);function o(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}var i=n(0),c=n.n(i),l=n(128),u=function(e,t){return e&&t&&t.split(" ").forEach((function(t){return a=t,void((n=e).classList?n.classList.remove(a):"string"===typeof n.className?n.className=o(n.className,a):n.setAttribute("class",o(n.className&&n.className.baseVal||"",a)));var n,a}))},p=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))||this).appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(e,n){var a=t.resolveArguments(e,n),s=a[0],r=a[1];t.removeClasses(s,"exit"),t.addClass(s,r?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(e,n)},t.onEntering=function(e,n){var a=t.resolveArguments(e,n),s=a[0],r=a[1]?"appear":"enter";t.addClass(s,r,"active"),t.props.onEntering&&t.props.onEntering(e,n)},t.onEntered=function(e,n){var a=t.resolveArguments(e,n),s=a[0],r=a[1]?"appear":"enter";t.removeClasses(s,r),t.addClass(s,r,"done"),t.props.onEntered&&t.props.onEntered(e,n)},t.onExit=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"appear"),t.removeClasses(n,"enter"),t.addClass(n,"exit","base"),t.props.onExit&&t.props.onExit(e)},t.onExiting=function(e){var n=t.resolveArguments(e)[0];t.addClass(n,"exit","active"),t.props.onExiting&&t.props.onExiting(e)},t.onExited=function(e){var n=t.resolveArguments(e)[0];t.removeClasses(n,"exit"),t.addClass(n,"exit","done"),t.props.onExited&&t.props.onExited(e)},t.resolveArguments=function(e,n){return t.props.nodeRef?[t.props.nodeRef.current,e]:[e,n]},t.getClassNames=function(e){var n=t.props.classNames,a="string"===typeof n,s=a?""+(a&&n?n+"-":"")+e:n[e];return{baseClassName:s,activeClassName:a?s+"-active":n[e+"Active"],doneClassName:a?s+"-done":n[e+"Done"]}},t}Object(r.a)(t,e);var n=t.prototype;return n.addClass=function(e,t,n){var a=this.getClassNames(t)[n+"ClassName"],s=this.getClassNames("enter").doneClassName;"appear"===t&&"done"===n&&s&&(a+=" "+s),"active"===n&&e&&e.scrollTop,a&&(this.appliedClasses[t][n]=a,function(e,t){e&&t&&t.split(" ").forEach((function(t){return a=t,void((n=e).classList?n.classList.add(a):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,a)||("string"===typeof n.className?n.className=n.className+" "+a:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+a)));var n,a}))}(e,a))},n.removeClasses=function(e,t){var n=this.appliedClasses[t],a=n.base,s=n.active,r=n.done;this.appliedClasses[t]={},a&&u(e,a),s&&u(e,s),r&&u(e,r)},n.render=function(){var e=this.props,t=(e.classNames,Object(s.a)(e,["classNames"]));return c.a.createElement(l.a,Object(a.a)({},t,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},t}(c.a.Component);p.defaultProps={classNames:""},p.propTypes={};t.a=p},185:function(e,t,n){e.exports={form:"LoginForm_form__2PN-X"}},198:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var a=n(2),s=n(0),r=n(158),o=n(160),i=n(161),c=n(65),l=n(185),u=n.n(l),p=n(13),d=n(167),f=n(163),m=n.n(f),b=n(165),v=n(17);function h(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1],l=Object(s.useState)(""),f=Object(o.a)(l,2),h=f[0],x=f[1],j=Object(s.useState)(""),g=Object(o.a)(j,2),_=g[0],N=g[1],C=Object(s.useState)(null),E=Object(o.a)(C,2),O=E[0],y=E[1],A=Object(p.c)(),w=Object(p.d)(v.d.getErrorMessage),S=Object(p.d)(v.d.getErrorStatus);S&&setTimeout((function(){A(v.a.errorStatus(!1))}),3e3);var P=Object(s.useCallback)((function(e){return A(v.b.logIn(e))}),[A]),L=function(e){var t=e.target,n=t.name,a=t.value;"email"!==n?"password"!==n||x(a):r(a)},k=function(e){N(e),y(!0),setTimeout((function(){y(!1)}),3e3),setTimeout((function(){N("")}),4e3)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d.a,{in:O||S,timeout:1e3,classNames:m.a,unmountOnExit:!0,children:Object(a.jsx)(b.a,{text:""===_?w:_,color:"red"})}),Object(a.jsxs)("form",{onSubmit:function(e){e.preventDefault(),""!==n||""!==h?""!==n?""!==h?(P({email:n,password:h}),r(""),x("")):k("Please enter password!"):k("Please enter email!"):k("Please enter email and password!")},className:u.a.form,children:[Object(a.jsx)(i.a,{label:"Email",type:"email",name:"email",value:n,placeholder:"Enter email...",onChange:L}),Object(a.jsx)(i.a,{label:"Password",type:"password",name:"password",value:h,placeholder:"Enter password...",onChange:L}),Object(a.jsx)(c.a,{text:"Log in",type:"submit",color:"blue"})]})]})}var x=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(r.a,{title:"Login",children:Object(a.jsx)(h,{})})})}}}]);
//# sourceMappingURL=login-page.efc5c60c.chunk.js.map