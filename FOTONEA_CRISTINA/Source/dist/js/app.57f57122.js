(function(e){function t(t){for(var s,l,i=t[0],o=t[1],u=t[2],g=0,p=[];g<i.length;g++)l=i[g],Object.prototype.hasOwnProperty.call(r,l)&&r[l]&&p.push(r[l][0]),r[l]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);c&&c(t);while(p.length)p.shift()();return n.push.apply(n,u||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],s=!0,i=1;i<a.length;i++){var o=a[i];0!==r[o]&&(s=!1)}s&&(n.splice(t--,1),e=l(l.s=a[0]))}return e}var s={},r={app:0},n=[];function l(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=s,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(a,s,function(t){return e[t]}.bind(null,s));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var c=o;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var s=a("1356"),r=a.n(s);r.a},1356:function(e,t,a){},"1fe8":function(e,t,a){e.exports=a.p+"img/error.99ecc880.png"},"2cfd":function(e,t,a){"use strict";var s=a("b235"),r=a.n(s);r.a},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-content",{attrs:{transition:"slide-x-transition"}},[a("v-layout",{attrs:{"align-space-around":"","justify-space-between":"",row:"","fill-height":""}},[a("Menu"),a("keep-alive",[a("router-view")],1)],1)],1)],1)},n=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-navigation-drawer",{staticClass:"align",attrs:{permanent:""}},[a("h2",{staticClass:"titlePage"},[e._v("Sick Leave")]),a("v-divider"),e._l(e.route,function(t){return a("v-list",{key:t.name,staticClass:"alignBtn"},[a("v-list-tile",[a("v-list-tile-content",[a("v-btn",{staticClass:"button",attrs:{elevation:"7",color:"#bb0000"},on:{click:function(a){return e.routeTo(t.path)}}},[a("v-list-tile-title",{staticClass:"title-menu"},[e._v(e._s(t.name))])],1)],1)],1)],1)})],2)},i=[],o=a("8c4f"),u=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{attrs:{"align-space-between":"","justify-space-between":"",column:"","fill-height":""}},[s("div",{staticClass:"back",style:{"background-image":"url("+a("9e73")+")"}},[s("v-layout",{attrs:{"align-center":"","justify-space-between":"",row:"","fill-height":""}},[s("v-card",{staticClass:"loginCard",attrs:{height:400,width:450,flat:""}},[s("div",[s("h2",[e._v("Login")])]),s("v-text-field",{staticClass:"log justify-center",attrs:{rules:e.logUserRules,label:"Enter Username"},model:{value:e.log_user,callback:function(t){e.log_user=t},expression:"log_user"}}),s("v-text-field",{staticClass:"log justify-center",attrs:{rules:e.logPassRules,label:"Enter Password",type:e.hidden?"text":"password"},model:{value:e.log_pass,callback:function(t){e.log_pass=t},expression:"log_pass"}}),s("v-text-field",{staticClass:"log justify-center",attrs:{rules:e.logIDRules,label:"Personnel ID"},model:{value:e.log_persID,callback:function(t){e.log_persID=t},expression:"log_persID"}}),s("v-btn",{staticClass:"btnLogin",attrs:{rounded:"",color:"primary"},on:{click:function(t){return e.logIn()}}},[e._v("Login")])],1),s("div",{staticClass:"login"},[s("h2",[e._v("Hello!")]),s("h3",[e._v("Login to Your Account.")])])],1)],1),s("v-dialog",{attrs:{"max-width":350},model:{value:e.dialogLogIn,callback:function(t){e.dialogLogIn=t},expression:"dialogLogIn"}},[s("v-card",{staticClass:"popUp",attrs:{height:200}},[s("h3",[e._v(e._s(e.popUptxt))]),s("v-btn",{staticClass:"btnLog",attrs:{rounded:"",color:"primary"},on:{click:function(t){return e.LogInOk()}}},[e._v("Ok")])],1)],1)],1)},c=[],g=a("bc3a"),p=a.n(g),d={data(){return{log_user:"",log_pass:"",hidden:!1,log_persID:"",dialogLogIn:!1,popUptxt:"",logUserRules:[e=>!!e||"Username is required",e=>e.length>=4||"Username must be at least 4 characters"],logPassRules:[e=>!!e||"Password is required",e=>e.length>=8||"Password must be at least 8 characters"],logIDRules:[e=>!!e||"Personnel ID is required",e=>e.length>=9||"Personnel ID must be 9 digits",e=>e.length<10||"Personnel ID must be 9 digits"]}},methods:{logIn(){this.log_user.length<3||this.log_pass.length<8||this.log_persID.length<9?(this.dialogLogIn=!this.dialogLogIn,this.popUptxt="Invalid data!"):(p.a.post("/api/login",{username:this.log_user,password:this.log_pass,personnelID:this.log_persID}).then(e=>{"object"===typeof e.data?(this.popUptxt="Login successfully!",this.log_user=null,this.log_pass=null,this.log_persID=null,localStorage.setItem("userData_username",e.data.usersdb_username),localStorage.setItem("userData_name",e.data.usersdb_name),localStorage.setItem("userData_password",e.data.usersdb_password),localStorage.setItem("userData_mail",e.data.usersdb_mail),localStorage.setItem("userData_personnelID",e.data.usersdb_personnelID),localStorage.setItem("userData_company",e.data.usersdb_company),localStorage.setItem("isLogged","true"),console.log(localStorage.getItem("userData_name"))):this.popUptxt=" Username or password invalid! "},e=>{console.log(e),this.popUptxt="Server error!"}),this.dialogLogIn=!this.dialogLogIn)},LogInOk(){this.dialogLogIn=!1,"Login successfully!"==this.popUptxt&&(console.log("Login"),G.push("/EmployeeAccDetails"))},mounted(){this.log_user="",this.log_pass="",this.log_persID=""},watch:{$route(e,t){this.log_user="",this.log_pass="",this.log_persID=""}}}},h=d,m=(a("d6db"),a("2877")),f=a("6544"),v=a.n(f),_=a("8336"),b=a("b0af"),y=a("169a"),I=a("a722"),x=a("8654"),w=Object(m["a"])(h,u,c,!1,null,null,null),D=w.exports;v()(w,{VBtn:_["a"],VCard:b["a"],VDialog:y["a"],VLayout:I["a"],VTextField:x["a"]});var k=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{staticClass:"backerror",style:{"background-image":"url("+a("1fe8")+")"},attrs:{"align-space-around":"","justify-start":"",column:"","fill-height":""}})},L=[],C={},j=C,P=(a("d2ef"),Object(m["a"])(j,k,L,!1,null,null,null)),R=P.exports;v()(P,{VLayout:I["a"]});var O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{attrs:{"align-space-between":"","justify-space-between":"",column:"","fill-height":""}},[s("div",{staticClass:"back",style:{"background-image":"url("+a("9e73")+")"}},[s("v-layout",{attrs:{"align-center":"","justify-space-between":"",row:"","fill-height":""}},[s("v-card",{staticClass:"registerCard",attrs:{height:530,width:400,flat:""}},[s("div",[s("h2",[e._v("Register")])]),s("v-text-field",{staticClass:"reg justify-center",attrs:{rules:e.nameRules,label:"Name"},model:{value:e.reg_name,callback:function(t){e.reg_name=t},expression:"reg_name"}}),s("v-text-field",{staticClass:"reg justify-center",attrs:{rules:e.mailRules,label:"E-mail"},model:{value:e.reg_mail,callback:function(t){e.reg_mail=t},expression:"reg_mail"}}),s("v-text-field",{staticClass:"reg justify-center",attrs:{rules:e.userRules,label:"Enter Username"},model:{value:e.reg_user,callback:function(t){e.reg_user=t},expression:"reg_user"}}),s("v-text-field",{staticClass:"reg justify-center",attrs:{rules:e.passRules,label:"Enter Password",type:e.hiddenRegister?"text":"password"},model:{value:e.reg_pass,callback:function(t){e.reg_pass=t},expression:"reg_pass"}}),s("v-text-field",{staticClass:"reg justify-center",attrs:{rules:e.persRules,label:"Personnel ID"},model:{value:e.reg_persID,callback:function(t){e.reg_persID=t},expression:"reg_persID"}}),s("v-text-field",{staticClass:"reg justify-center",attrs:{rules:e.companyRules,label:"Company"},model:{value:e.reg_company,callback:function(t){e.reg_company=t},expression:"reg_company"}}),s("v-btn",{staticClass:"btnRegister",attrs:{rounded:"",color:"primary"},on:{click:function(t){return e.register()}}},[e._v("Register")])],1),s("div",{staticClass:"register"},[s("h2",[e._v("Welcome!")]),s("h3",[e._v("Don't have an account? Create your account! It takes less than a minute.")])])],1)],1),s("v-dialog",{attrs:{"max-width":350},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[s("v-card",{staticClass:"popUp",attrs:{height:200}},[s("h3",[e._v(e._s(e.popUpText))]),s("v-btn",{staticClass:"btnOk",attrs:{rounded:"",color:"primary"},on:{click:function(t){return e.registerOk()}}},[e._v("Ok")])],1)],1)],1)},S=[],U={data(){return{reg_name:"",reg_mail:"",reg_user:"",reg_pass:"",reg_persID:"",reg_company:"",hiddenRegister:!1,dialog:!1,popUpText:"",reg_name:[e=>!!e||"Name is required",e=>e.length>=3||"Name must be at least 3 characters"],reg_mail:[e=>!!e||"E-mail is required",e=>/.+@.+/.test(e)||"E-mail must be valid"],reg_user:[e=>!!e||"Username is required",e=>e.length>=8||"Username must be at least 8 characters"],reg_pass:[e=>!!e||"Password is required",e=>e.length>=8||"Password must be at least 8 characters"],reg_persID:[e=>!!e||"Personnel ID is required",e=>e.length>=9||"Personnel ID must be 9 digits",e=>e.length<10||"Personnel ID must be 9 digits"],reg_company:[e=>!!e||"Company is required",e=>e.length>=3||"Company must be at least 3 characters"]}},mounted(){this.reg_name="",this.reg_mail="",this.reg_user="",this.reg_pass="",this.reg_persID="",this.reg_company=""},watch:{$route(e,t){this.reg_name="",this.reg_mail="",this.reg_user="",this.reg_pass="",this.reg_persID="",this.reg_company=""}},methods:{register(){this.reg_name.length<4||this.reg_user.length<8||this.reg_pass.length<8||9!=this.reg_persID.length||this.reg_company.length<4?(this.dialog=!this.dialog,this.popUpText="Invalid data!"):(p.a.post("/api/register",{name:this.reg_name,mail:this.reg_mail,username:this.reg_user,password:this.reg_pass,personnelID:this.reg_persID,company:this.reg_company}).then(e=>{console.log(e),this.popUpText="Registration complete!"},e=>{console.log(e),this.popUpText="Server error!"}),this.dialog=!this.dialog)},registerOk(){this.dialog=!1}}},E=U,V=(a("2cfd"),Object(m["a"])(E,O,S,!1,null,null,null)),q=V.exports;v()(V,{VBtn:_["a"],VCard:b["a"],VDialog:y["a"],VLayout:I["a"],VTextField:x["a"]});var T=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{attrs:{"align-space-between":"","justify-space-between":"",column:"","fill-height":""}},[s("div",{staticClass:"back",style:{"background-image":"url("+a("9e73")+")"}},[s("v-layout",{attrs:{"align-center":"","justify-space-between":"",row:"","fill-height":""}})],1)])},$=[],A={},M=A,B=(a("c749"),Object(m["a"])(M,T,$,!1,null,null,null)),N=B.exports;v()(B,{VLayout:I["a"]});var F=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-layout",{attrs:{"align-space-between":"","justify-space-between":"",column:"","fill-height":""}},[s("div",{staticClass:"back",style:{"background-image":"url("+a("9e73")+")"}},[s("v-layout",{attrs:{"align-center":"","justify-space-between":"",row:"","fill-height":""}})],1)])},J=[],H={},W=H,Y=(a("72ba"),Object(m["a"])(W,F,J,!1,null,null,null)),z=Y.exports;v()(Y,{VLayout:I["a"]}),s["a"].use(o["a"]);const G=new o["a"]({mode:"hash",routes:[{path:"/Register",name:"Register",component:q},{path:"/Login",name:"Login",component:D},{path:"/SickLeaveRequest",name:"SickLeaveRequest",component:N},{path:"/EmployeeAccDetails",name:"EmployeeAccDetails",component:z},{path:"/*",name:"404",component:R}]});G.beforeEach((e,t,a)=>{if("false"==localStorage.getItem("isLogged")&&"/SickLeaveRequest"==e.fullPath&&"/EmployeeAccDetails"==e.fullPath)return a("/Login");a()});var K={data(){return{route:[{name:"Register",path:"/Register"},{name:"Login",path:"/Login"},{name:"Sick Leave Request",path:"/SickLeaveRequest"},{name:"Employee Details",path:"/EmployeeAccDetails"}]}},methods:{routeTo(e){console.log("Menu"),G.push(e)}}},Q=K,X=(a("efa6"),a("ce7e")),Z=a("8860"),ee=a("f774"),te=Object(m["a"])(Q,l,i,!1,null,null,null),ae=te.exports;v()(te,{VBtn:_["a"],VDivider:X["a"],VList:Z["a"],VNavigationDrawer:ee["a"]});var se={name:"App",components:{Menu:ae},created(){localStorage.setItem("isLogged","false"),console.log("Pana aici"),this.$vuetify.theme.themes.light.primary="#CE2727"}},re=se,ne=(a("034f"),a("7496")),le=a("a75b"),ie=Object(m["a"])(re,r,n,!1,null,null,null),oe=ie.exports;v()(ie,{VApp:ne["a"],VContent:le["a"],VLayout:I["a"]});var ue=a("f309");s["a"].use(ue["a"]);var ce=new ue["a"]({icons:{iconfont:"mdi"}});s["a"].config.productionTip=!1,new s["a"]({vuetify:ce,router:G,render:e=>e(oe)}).$mount("#app")},"5f0a":function(e,t,a){},"72ba":function(e,t,a){"use strict";var s=a("cf39"),r=a.n(s);r.a},"9e73":function(e,t,a){e.exports=a.p+"img/medical.446353e5.png"},a0af:function(e,t,a){},b235:function(e,t,a){},b8b9:function(e,t,a){},be0f:function(e,t,a){},c749:function(e,t,a){"use strict";var s=a("a0af"),r=a.n(s);r.a},cf39:function(e,t,a){},d2ef:function(e,t,a){"use strict";var s=a("b8b9"),r=a.n(s);r.a},d6db:function(e,t,a){"use strict";var s=a("5f0a"),r=a.n(s);r.a},efa6:function(e,t,a){"use strict";var s=a("be0f"),r=a.n(s);r.a}});
//# sourceMappingURL=app.57f57122.js.map