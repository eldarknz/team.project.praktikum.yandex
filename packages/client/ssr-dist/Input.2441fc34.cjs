"use strict";const s=require("./ssr.ce1b3cd0.cjs");const d=({labelText:i,labelClassName:t="inputLabel",labelId:l,wrapperClassName:e="inputControl",error:a,children:r})=>s.jsx(s.Fragment,{children:s.jsxs("div",{className:s.cn(e),children:[l&&s.jsx("label",{htmlFor:l,className:s.cn(t),children:i}),s.jsx("div",{children:r}),a&&s.jsx("div",{className:"inputError",children:a})]})});const x=({inputClassName:i="baseInput",errorText:t,type:l="text",labelText:e,name:a,value:r="",onChange:p,validator:n,...h})=>{const[E,c]=s.reactExports.useState(null),C=e?s.reactExports.useId():void 0,I=s.cn(i,{"baseInput--error":E}),m=s.reactExports.useCallback(o=>{const{value:u}=o.target;n&&(!n(u)&&u.length>0?c(t||"\u041E\u0448\u0438\u0431\u043A\u0430"):c(null))},[n,t]),[j,f]=s.reactExports.useState(r);s.reactExports.useEffect(()=>{c(t||null)},[t]);const b=s.reactExports.useCallback(o=>{const{value:u}=o.target;t&&n&&(!n(u)&&u.length>0?c(t||"\u041E\u0448\u0438\u0431\u043A\u0430"):c(null)),f(u),p&&p(o)},[t,n,p]);return s.jsx(d,{labelId:C,labelText:e,error:E,children:s.jsx("input",{id:C,type:l,onBlur:m,onChange:b,className:I,name:a,value:j,...h})})};exports.Input=x;exports.InputControl=d;