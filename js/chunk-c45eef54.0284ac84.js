(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c45eef54"],{"00b4":function(e,t,n){"use strict";n("ac1f");var r=n("23e7"),a=n("da84"),c=n("c65b"),o=n("e330"),i=n("1626"),u=n("861d"),l=function(){var e=!1,t=/[ac]/;return t.exec=function(){return e=!0,/./.exec.apply(this,arguments)},!0===t.test("abc")&&e}(),s=a.Error,d=o(/./.test);r({target:"RegExp",proto:!0,forced:!l},{test:function(e){var t=this.exec;if(!i(t))return d(this,e);var n=c(t,this,e);if(null!==n&&!u(n))throw new s("RegExp exec method returned something other than an Object or null");return!!n}})},"107c":function(e,t,n){var r=n("d039"),a=n("da84"),c=a.RegExp;e.exports=r((function(){var e=c("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"159b":function(e,t,n){var r=n("da84"),a=n("fdbc"),c=n("785a"),o=n("17c2"),i=n("9112"),u=function(e){if(e&&e.forEach!==o)try{i(e,"forEach",o)}catch(t){e.forEach=o}};for(var l in a)a[l]&&u(r[l]&&r[l].prototype);u(c)},"17c2":function(e,t,n){"use strict";var r=n("b727").forEach,a=n("a640"),c=a("forEach");e.exports=c?[].forEach:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}},"1dde":function(e,t,n){var r=n("d039"),a=n("b622"),c=n("2d00"),o=a("species");e.exports=function(e){return c>=51||!r((function(){var t=[],n=t.constructor={};return n[o]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},2532:function(e,t,n){"use strict";var r=n("23e7"),a=n("e330"),c=n("5a34"),o=n("1d80"),i=n("577e"),u=n("ab13"),l=a("".indexOf);r({target:"String",proto:!0,forced:!u("includes")},{includes:function(e){return!!~l(i(o(this)),i(c(e)),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(e,t,n){var r=n("861d"),a=n("c6b6"),c=n("b622"),o=c("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==a(e))}},"4de4":function(e,t,n){"use strict";var r=n("23e7"),a=n("b727").filter,c=n("1dde"),o=c("filter");r({target:"Array",proto:!0,forced:!o},{filter:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}})},"4df4":function(e,t,n){"use strict";var r=n("da84"),a=n("0366"),c=n("c65b"),o=n("7b0b"),i=n("9bdd"),u=n("e95a"),l=n("68ee"),s=n("07fa"),d=n("8418"),f=n("9a1f"),b=n("35a1"),p=r.Array;e.exports=function(e){var t=o(e),n=l(this),r=arguments.length,h=r>1?arguments[1]:void 0,v=void 0!==h;v&&(h=a(h,r>2?arguments[2]:void 0));var m,x,g,y,j,O,w=b(t),S=0;if(!w||this==p&&u(w))for(m=s(t),x=n?new this(m):p(m);m>S;S++)O=v?h(t[S],S):t[S],d(x,S,O);else for(y=f(t,w),j=y.next,x=n?new this:[];!(g=c(j,y)).done;S++)O=v?i(y,h,[g.value,S],!0):g.value,d(x,S,O);return x.length=S,x}},"5a34":function(e,t,n){var r=n("da84"),a=n("44e7"),c=r.TypeError;e.exports=function(e){if(a(e))throw c("The method doesn't accept regular expressions");return e}},"5f5c":function(e,t,n){"use strict";n.r(t);n("b0c0");var r=n("7a23"),a=Object(r["e"])("h2",{class:"fs-2 text-center mb-6"},"價格試算",-1),c={class:"container d-flex jc-center"},o={class:"menuSearch me-8"},i={class:"mb-4"},u={class:"d-flex mb-3"},l=Object(r["e"])("p",null,"搜尋範圍：",-1),s=Object(r["e"])("label",{for:"all"},"全部",-1),d=Object(r["e"])("label",{for:"set"},"套餐",-1),f=Object(r["e"])("label",{for:"only"},"單點",-1),b={class:"searchList"},p=["id","onUpdate:modelValue"],h=["for"],v={class:"menuCalc bg-theme-secondary"},m=Object(r["e"])("h3",{class:"fs-4 text-center mb-4"},"試算區域",-1),x={class:"mb-8"},g={class:"d-flex ai-center"},y={class:"me-3"},j=["onClick"],O={class:"totalArea d-flex jc-between fs-5"},w=Object(r["e"])("p",null,"總價",-1);function S(e,t,n,S,E,A){var I=Object(r["u"])("input-type");return Object(r["p"])(),Object(r["d"])("main",null,[a,Object(r["e"])("article",c,[Object(r["e"])("section",o,[Object(r["e"])("div",i,[Object(r["g"])(I,{class:"mb-3",type:"text",placeholder:"請輸入餐點關鍵字",variable:"keyword",modelValue:E.keyword,"onUpdate:modelValue":t[0]||(t[0]=function(e){return E.keyword=e})},null,8,["modelValue"]),Object(r["e"])("div",u,[l,Object(r["g"])(I,{type:"radio",name:"isSet",id:"all",value:"all",presetValue:E.isSet,modelValue:E.isSet,"onUpdate:modelValue":t[1]||(t[1]=function(e){return E.isSet=e})},null,8,["presetValue","modelValue"]),s,Object(r["g"])(I,{type:"radio",name:"isSet",id:"set",value:"set",presetValue:E.isSet,modelValue:E.isSet,"onUpdate:modelValue":t[2]||(t[2]=function(e){return E.isSet=e})},null,8,["presetValue","modelValue"]),d,Object(r["g"])(I,{type:"radio",name:"isSet",id:"only",value:"only",presetValue:E.isSet,modelValue:E.isSet,"onUpdate:modelValue":t[3]||(t[3]=function(e){return E.isSet=e})},null,8,["presetValue","modelValue"]),f]),Object(r["e"])("button",{class:"searchBtn btn-theme-primary",onClick:t[4]||(t[4]=function(){return A.searchData&&A.searchData.apply(A,arguments)})},"搜尋")]),Object(r["e"])("ul",b,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["t"])(E.filterData,(function(e){return Object(r["p"])(),Object(r["d"])("li",{class:"d-flex mb-3",key:e.name},[Object(r["C"])(Object(r["e"])("input",{type:"checkbox",id:e.name,"onUpdate:modelValue":function(t){return e.isAdd=t}},null,8,p),[[r["y"],e.isAdd]]),Object(r["e"])("label",{class:"d-flex jc-between flex-grow-1",for:e.name},[Object(r["e"])("p",null,Object(r["w"])(e.name),1),Object(r["e"])("p",null,Object(r["w"])(e.price),1)],8,h)])})),128))])]),Object(r["e"])("aside",v,[m,Object(r["e"])("ul",x,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["t"])(A.addData,(function(e){return Object(r["p"])(),Object(r["d"])("li",{class:"d-flex jc-between fs-5 mb-4",key:e.name},[Object(r["e"])("p",null,Object(r["w"])(e.name),1),Object(r["e"])("div",g,[Object(r["e"])("p",y,Object(r["w"])(e.price)+"元",1),Object(r["e"])("button",{type:"button",class:"btn-theme-primary",onClick:function(t){return A.deleteAddData(e.name)}},"刪除",8,j)])])})),128))]),Object(r["e"])("div",O,[w,Object(r["e"])("p",null,Object(r["w"])(A.total)+"元",1)])])])])}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function A(e){if(Array.isArray(e))return E(e)}n("a4d3"),n("e01a"),n("d3b7"),n("d28b"),n("3ca3"),n("ddb0"),n("a630");function I(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}n("fb6a"),n("ac1f"),n("00b4");function k(e,t){if(e){if("string"===typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}function V(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function D(e){return A(e)||I(e)||k(e)||V()}n("4de4"),n("159b"),n("caad"),n("2532");var R=n("f992"),C={data:function(){return{isSet:"all",keyword:"",data:[],filterData:[]}},components:{inputType:R["a"]},computed:{addData:function(){var e=[];return e=this.data.filter((function(e){return e.isAdd})),e},total:function(){var e=0;return this.addData.forEach((function(t){e+=t.price})),e}},methods:{getData:function(){var e=this,t="https://mocki.io/v1/8132cccc-b4ea-4388-9f7c-1606ed44e5c8";this.$http.get(t).then((function(t){e.data=t.data})).catch((function(e){console.dir(e)}))},searchData:function(){var e=this;switch(this.isSet){case"set":this.filterData=this.data.filter((function(e){return"套餐"===e.class}));break;case"only":this.filterData=this.data.filter((function(e){return"套餐"!==e.class}));break;default:this.filterData=D(this.data);break}this.filterData=this.filterData.filter((function(t){return t.name.includes(e.keyword)}))},deleteAddData:function(e){var t=this;this.data.forEach((function(n,r){n.name===e&&(t.data[r].isAdd=!1)}))}},created:function(){this.getData()}},T=n("6b0d"),U=n.n(T);const B=U()(C,[["render",S]]);t["default"]=B},9263:function(e,t,n){"use strict";var r=n("c65b"),a=n("e330"),c=n("577e"),o=n("ad6d"),i=n("9f7f"),u=n("5692"),l=n("7c73"),s=n("69f3").get,d=n("fce3"),f=n("107c"),b=u("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,h=p,v=a("".charAt),m=a("".indexOf),x=a("".replace),g=a("".slice),y=function(){var e=/a/,t=/b*/g;return r(p,e,"a"),r(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),j=i.BROKEN_CARET,O=void 0!==/()??/.exec("")[1],w=y||O||j||d||f;w&&(h=function(e){var t,n,a,i,u,d,f,w=this,S=s(w),E=c(e),A=S.raw;if(A)return A.lastIndex=w.lastIndex,t=r(h,A,E),w.lastIndex=A.lastIndex,t;var I=S.groups,k=j&&w.sticky,V=r(o,w),D=w.source,R=0,C=E;if(k&&(V=x(V,"y",""),-1===m(V,"g")&&(V+="g"),C=g(E,w.lastIndex),w.lastIndex>0&&(!w.multiline||w.multiline&&"\n"!==v(E,w.lastIndex-1))&&(D="(?: "+D+")",C=" "+C,R++),n=new RegExp("^(?:"+D+")",V)),O&&(n=new RegExp("^"+D+"$(?!\\s)",V)),y&&(a=w.lastIndex),i=r(p,k?n:w,C),k?i?(i.input=g(i.input,R),i[0]=g(i[0],R),i.index=w.lastIndex,w.lastIndex+=i[0].length):w.lastIndex=0:y&&i&&(w.lastIndex=w.global?i.index+i[0].length:a),O&&i&&i.length>1&&r(b,i[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(i[u]=void 0)})),i&&I)for(i.groups=d=l(null),u=0;u<I.length;u++)f=I[u],d[f[0]]=i[f[1]];return i}),e.exports=h},"9bdd":function(e,t,n){var r=n("825a"),a=n("2a62");e.exports=function(e,t,n,c){try{return c?t(r(n)[0],n[1]):t(n)}catch(o){a(e,"throw",o)}}},"9f7f":function(e,t,n){var r=n("d039"),a=n("da84"),c=a.RegExp,o=r((function(){var e=c("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),i=o||r((function(){return!c("a","y").sticky})),u=o||r((function(){var e=c("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:u,MISSED_STICKY:i,UNSUPPORTED_Y:o}},a630:function(e,t,n){var r=n("23e7"),a=n("4df4"),c=n("1c7e"),o=!c((function(e){Array.from(e)}));r({target:"Array",stat:!0,forced:o},{from:a})},a640:function(e,t,n){"use strict";var r=n("d039");e.exports=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))}},ab13:function(e,t,n){var r=n("b622"),a=r("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,"/./"[e](t)}catch(r){}}return!1}},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},b0c0:function(e,t,n){var r=n("83ab"),a=n("5e77").EXISTS,c=n("e330"),o=n("9bf2").f,i=Function.prototype,u=c(i.toString),l=/function\b(?:\s|\/\*[\S\s]*?\*\/|\/\/[^\n\r]*[\n\r]+)*([^\s(/]*)/,s=c(l.exec),d="name";r&&!a&&o(i,d,{configurable:!0,get:function(){try{return s(l,u(this))[1]}catch(e){return""}}})},caad:function(e,t,n){"use strict";var r=n("23e7"),a=n("4d64").includes,c=n("44d2");r({target:"Array",proto:!0},{includes:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),c("includes")},d28b:function(e,t,n){var r=n("746f");r("iterator")},fb6a:function(e,t,n){"use strict";var r=n("23e7"),a=n("da84"),c=n("e8b5"),o=n("68ee"),i=n("861d"),u=n("23cb"),l=n("07fa"),s=n("fc6a"),d=n("8418"),f=n("b622"),b=n("1dde"),p=n("f36a"),h=b("slice"),v=f("species"),m=a.Array,x=Math.max;r({target:"Array",proto:!0,forced:!h},{slice:function(e,t){var n,r,a,f=s(this),b=l(f),h=u(e,b),g=u(void 0===t?b:t,b);if(c(f)&&(n=f.constructor,o(n)&&(n===m||c(n.prototype))?n=void 0:i(n)&&(n=n[v],null===n&&(n=void 0)),n===m||void 0===n))return p(f,h,g);for(r=new(void 0===n?m:n)(x(g-h,0)),a=0;h<g;h++,a++)h in f&&d(r,a,f[h]);return r.length=a,r}})},fce3:function(e,t,n){var r=n("d039"),a=n("da84"),c=a.RegExp;e.exports=r((function(){var e=c(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-c45eef54.0284ac84.js.map