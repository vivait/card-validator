!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports["vivait-card-validator"]=e():t["vivait-card-validator"]=e()}(self,(function(){return(()=>{"use strict";var t={587:(t,e,r)=>{r.r(e),r.d(e,{predictPaymentNetworkForAccountNumber:()=>l,isValidCreditCard:()=>p});var n=r(857);function a(t,e,r){return(a=o()?Reflect.construct:function(t,e,r){var n=[null];n.push.apply(n,e);var a=new(Function.bind.apply(t,n));return r&&s(a,r.prototype),a}).apply(null,arguments)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function l(t){var e,r=n.QU.filter((function(e){return e.startPattern.test(t)})).values(),o=a(Array,function(t){if(Array.isArray(t))return i(t)}(e=r)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(e)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}());if(1===o.length){var s=o[0],l=s.displayName,p=s.type,c=s.format,u=s.startPattern,y=s.gaps,d=s.lengths,f=s.code;return{recognised:!0,displayName:l,type:p,format:c,startPattern:u,gaps:y,lengths:d,code:{name:f.name,length:[f.length]}}}return{recognised:!1,displayName:"Unknown",type:"unknown",format:n.cH,startPattern:/^$/,gaps:[4,8,12,16],lengths:[15,16,17,18,19],code:{name:"CVV",length:[3,4]}}}function p(t){for(var e=t.replace(/\s/g,""),r=parseInt(e.charAt(e.length-1)),n=0;n<e.length-1;n++){var a=parseInt(e.charAt(n));n%2==0&&(a*=2),a>9&&(a-=9),r+=a}var o=l(t).lengths.includes(e.length);return r%10==0&&o}},628:(t,e)=>{var r=/(\d{1,4})/g,n=[{displayName:"Visa",type:"visa",format:r,startPattern:/^4/,gaps:[4,8,12],lengths:[16,18,19],code:{name:"CVV",length:3}},{displayName:"Mastercard",type:"mastercard",format:r,startPattern:/^(5[1-5]|677189)|^(222[1-9]|2[3-6]\d{2}|27[0-1]\d|2720)/,gaps:[4,8,12],lengths:[16],code:{name:"CVC",length:3}},{displayName:"American Express",type:"amex",format:/(\d{1,4})(\d{1,6})?(\d{1,5})?/,startPattern:/^3[47]/,gaps:[4,10],lengths:[15],code:{name:"CID",length:4}},{displayName:"Diners Club",type:"dinersclub",format:r,startPattern:/^(36|38|30[0-5])/,gaps:[4,10],lengths:[14,16,19],code:{name:"CVV",length:3}},{displayName:"Discover",type:"discover",format:r,startPattern:/^(6011|65|64[4-9]|622)/,gaps:[4,8,12],lengths:[16,19],code:{name:"CID",length:3}},{displayName:"JCB",type:"jcb",format:r,startPattern:/^35/,gaps:[4,8,12],lengths:[16,17,18,19],code:{name:"CVV",length:3}},{displayName:"UnionPay",type:"unionpay",format:r,startPattern:/^62/,gaps:[4,8,12],lengths:[14,15,16,17,18,19],code:{name:"CVN",length:3}},{displayName:"Maestro",type:"maestro",format:r,startPattern:/^(5018|5020|5038|6304|6703|6708|6759|676[1-3])/,gaps:[4,8,12],lengths:[12,13,14,15,16,17,18,19],code:{name:"CVC",length:3}},{displayName:"Elo",type:"elo",format:r,startPattern:/^(4011(78|79)|43(1274|8935)|45(1416|7393|763(1|2))|50(4175|6699|67[0-7][0-9]|9000)|627780|63(6297|6368)|650(03([^4])|04([0-9])|05(0|1)|4(0[5-9]|3[0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8])|9([2-6][0-9]|7[0-8])|541|700|720|901)|651652|655000|655021)/,gaps:[4,8,12],lengths:[16],code:{name:"CVE",length:3}},{displayName:"Hipercard",type:"hipercard",format:r,startPattern:/^(384100|384140|384160|606282|637095|637568|60(?!11))/,gaps:[4,8,12],lengths:[16],code:{name:"CVC",length:3}}],a=function(t){return n.filter((function(e){return e.startPattern.test(t)}))[0]},o=function(t){return n.filter((function(e){return e.type===t}))[0]},s=Object.freeze({DEFAULT_CVC_LENGTH:3,DEFAULT_ZIP_LENGTH:5,DEFAULT_CARD_FORMAT:r,CARD_TYPES:n,getCardTypeByValue:a,getCardTypeByType:o});e.CARD_TYPES=n,e.DEFAULT_CARD_FORMAT=r,e.DEFAULT_CVC_LENGTH=3,e.DEFAULT_ZIP_LENGTH=5,e.cardTypes=s,e.getCardTypeByType=o,e.getCardTypeByValue=a},857:(t,e,r)=>{var n=r(628);e.QU=n.CARD_TYPES,e.cH=n.DEFAULT_CARD_FORMAT,n.DEFAULT_CVC_LENGTH,n.DEFAULT_ZIP_LENGTH,n.getCardTypeByType,n.getCardTypeByValue}},e={};function r(n){if(e[n])return e[n].exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}return r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r(587)})()}));