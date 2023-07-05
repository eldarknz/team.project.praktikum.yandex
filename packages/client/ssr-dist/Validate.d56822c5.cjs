"use strict";var t=Object.defineProperty;var F=(e,u,B)=>u in e?t(e,u,{enumerable:!0,configurable:!0,writable:!0,value:B}):e[u]=B;var E=(e,u,B)=>(F(e,typeof u!="symbol"?u+"":u,B),B);class a{constructor(){E(this,"isString",u=>typeof u=="string");E(this,"errorMessages",{email:"\u041A\u0430\u0436\u0435\u0442\u0441\u044F, \u0432\u044B \u043E\u0448\u0438\u0431\u043B\u0438\u0441\u044C \u0432 \u0430\u0434\u0440\u0435\u0441\u0435 \u{1F631} \u041F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430, \u043F\u0435\u0440\u0435\u043F\u0440\u043E\u0432\u0435\u0440\u044C\u0442\u0435 \u0435\u0449\u0435 \u0440\u0430\u0437!",login:"\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F \u043A \u043B\u043E\u0433\u0438\u043D\u0443: \u043E\u0442 3 \u0434\u043E 20 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432, \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0430, \u043C\u043E\u0436\u0435\u0442 \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0446\u0438\u0444\u0440\u044B, \u043D\u043E \u043D\u0435 \u0441\u043E\u0441\u0442\u043E\u044F\u0442\u044C \u0438\u0437 \u043D\u0438\u0445, \u0431\u0435\u0437 \u043F\u0440\u043E\u0431\u0435\u043B\u043E\u0432, \u0431\u0435\u0437 \u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 (\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C\u044B \u0434\u0435\u0444\u0438\u0441 \u0438 \u043D\u0438\u0436\u043D\u0435\u0435 \u043F\u043E\u0434\u0447\u0451\u0440\u043A\u0438\u0432\u0430\u043D\u0438\u0435)",name:"\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F: \u043B\u0430\u0442\u0438\u043D\u0438\u0446\u0430 \u0438\u043B\u0438 \u043A\u0438\u0440\u0438\u043B\u043B\u0438\u0446\u0430, \u043F\u0435\u0440\u0432\u0430\u044F \u0431\u0443\u043A\u0432\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0431\u044B\u0442\u044C \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u043E\u0439, \u0431\u0435\u0437 \u043F\u0440\u043E\u0431\u0435\u043B\u043E\u0432 \u0438 \u0431\u0435\u0437 \u0446\u0438\u0444\u0440, \u043D\u0435\u0442 \u0441\u043F\u0435\u0446\u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432 (\u0434\u043E\u043F\u0443\u0441\u0442\u0438\u043C \u0442\u043E\u043B\u044C\u043A\u043E \u0434\u0435\u0444\u0438\u0441)",phone:"\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F: \u043E\u0442 10 \u0434\u043E 15 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432, \u0441\u043E\u0441\u0442\u043E\u0438\u0442 \u0438\u0437 \u0446\u0438\u0444\u0440, \u043C\u043E\u0436\u0435\u0442 \u043D\u0430\u0447\u0438\u043D\u0430\u0435\u0442\u0441\u044F \u0441 \u043F\u043B\u044E\u0441\u0430",password:"\u0422\u0440\u0435\u0431\u043E\u0432\u0430\u043D\u0438\u044F: \u043E\u0442 7 \u0434\u043E 40 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432, \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0445\u043E\u0442\u044F \u0431\u044B \u043E\u0434\u043D\u0430 \u0437\u0430\u0433\u043B\u0430\u0432\u043D\u0430\u044F \u0431\u0443\u043A\u0432\u0430 \u0438 \u0446\u0438\u0444\u0440\u0430"});E(this,"email",u=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(u));E(this,"password",u=>/^(?=.*\d)(?=.*[A-Z])[^\s]{7,40}$/.test(u));E(this,"phone",u=>/^\+?\d{10,15}$/.test(u));E(this,"name",u=>/^[А-ЯЁA-Z][а-яёa-z]+(-[А-ЯЁA-Z][а-яёa-z]+)?$/.test(u));E(this,"login",u=>!/^\d+$/.test(u)&&/^[a-zA-Z0-9][a-zA-Z0-9_-]{2,19}$/.test(u))}}const s=new a;exports.validate=s;
