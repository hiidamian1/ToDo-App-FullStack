(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{1161:function(e,r,t){"use strict";var a=t("1611"),n=t.n(a);n.a},1611:function(e,r,t){},"4d0a":function(e,r,t){"use strict";var a=t("5ca7"),n=t.n(a);n.a},"5ca7":function(e,r,t){},"73cf":function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",{staticClass:"register-box"},[t("h3",[e._v("Register")]),e.error.length?t("div",{staticClass:"error"},[e._v("\n      "+e._s(e.error)+"\n    ")]):e._e(),t("form",{on:{submit:e.register}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Username",required:""},domProps:{value:e.username},on:{input:function(r){r.target.composing||(e.username=r.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:e.password},on:{input:function(r){r.target.composing||(e.password=r.target.value)}}}),t("input",{attrs:{type:"submit",value:"Register"}})]),t("div",[e._v("\n      Already have an account? \n      "),t("router-link",{attrs:{to:"/login"}},[e._v("\n          Login here.\n      ")])],1)])])},n=[],s=(t("96cf"),t("3b8d")),o=t("3faa"),i={name:"Register",data:function(){return{username:"",password:"",error:""}},methods:{register:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r.preventDefault(),e.next=4,o["a"].registerUser(this.username,this.password);case 4:this.$router.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.error="Username already exists. Please try again.";case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function r(r){return e.apply(this,arguments)}return r}()}},u=i,c=(t("1161"),t("2877")),d=Object(c["a"])(u,a,n,!1,null,"6047d3d8",null);r["default"]=d.exports},a55b:function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",[t("div",{staticClass:"login-box"},[t("h3",[e._v("Login")]),e.error.length?t("div",{staticClass:"error"},[e._v("\n      "+e._s(e.error)+"\n    ")]):e._e(),t("form",{on:{submit:e.login}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Username",required:""},domProps:{value:e.username},on:{input:function(r){r.target.composing||(e.username=r.target.value)}}}),t("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:e.password},on:{input:function(r){r.target.composing||(e.password=r.target.value)}}}),t("input",{attrs:{type:"submit",value:"Login"}})]),t("div",[e._v("\n      Don't have an account? \n      "),t("router-link",{attrs:{to:"/register"}},[e._v("\n        Register here.\n      ")])],1)])])},n=[],s=(t("96cf"),t("3b8d")),o=(t("cadf"),t("551c"),t("097d"),t("3faa")),i={name:"Login",data:function(){return{username:"",password:"",error:""}},methods:{login:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,r.preventDefault(),e.next=4,o["a"].verifyUser(this.username,this.password);case 4:localStorage.setItem("username",this.username),this.$router.push({name:"home"}),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),this.error="Username and Password mismatch, or username unregistered. Please try again.";case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function r(r){return e.apply(this,arguments)}return r}()}},u=i,c=(t("4d0a"),t("2877")),d=Object(c["a"])(u,a,n,!1,null,"15ea6f08",null);r["default"]=d.exports}}]);
//# sourceMappingURL=about.fb78b2b5.js.map