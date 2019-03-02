(function(e){function t(t){for(var r,i,s=t[0],u=t[1],c=t[2],l=0,p=[];l<s.length;l++)i=s[l],a[i]&&p.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("64a9"),a=n.n(r);a.a},"0baf":function(e,t,n){},"0faa":function(e,t,n){"use strict";var r=n("f7d5"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],i={name:"app"},s=i,u=(n("034f"),n("2877")),c=Object(u["a"])(s,a,o,!1,null,null,null),d=c.exports,l=(n("96cf"),n("3b8d")),p=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header"),n("Filters",{on:{update:e.updateTodoList}}),n("div",{attrs:{id:"home"}},[n("TodoInput",{on:{"add-todo":e.addTodo}}),n("TodoList",{attrs:{todos:e.todos},on:{"delete-todo":e.deleteTodo,"update-todo":e.updateTodo}})],1)],1)},h=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.todos.length?n("div",[n("Header"),e._l(e.todos,function(t){return n("div",{key:t._id},[n("TodoItem",{attrs:{item:t},on:{"delete-todo":e.deleteTodo,"update-todo":e.updateTodo}})],1)})],2):e._e()},v=[],g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"todo-item"},[n("div",{staticClass:"todo-text",on:{click:e.markComplete}},[n("div",{class:{"is-complete":e.item.completed,"is-overdue":this.state.overdue}},[e._v("\n\t\t\t\t"+e._s(e.item.title)+"\n\t\t\t")]),e.item.completed?n("div",{staticClass:"tooltip"},[e._v("\n\t\t\t\tMark Uncomplete\n\t\t\t")]):n("div",{staticClass:"tooltip"},[e._v("\n\t\t\t\tMark Complete\n\t\t\t")])]),n("div",{staticClass:"todo-deadline"},[n("Datepicker",{attrs:{disabledDates:this.state.disabledDates,value:e.item.deadline},on:{selected:e.addDeadline}}),n("div",{staticClass:"tooltip"},[e._v("\n\t\t\t\tAdd Deadline\n\t\t\t")])],1)]),n("button",{staticClass:"deleteButton",on:{click:e.deleteTodo}},[e._v("Delete")])])},b=[],w=n("77f7"),x={name:"TodoItem",props:["item"],data:function(){return{state:{disabledDates:{to:this._exclusiveCurrentDate()},overdue:!1}}},components:{Datepicker:w["a"]},methods:{update:function(e){var t={id:this.item._id};e?(t.deadline=e,t.completed=this.item.completed,this.state.overdue=!1):(t.deadline=this.item.deadline,t.completed=!this.item.completed),this.$emit("update-todo",t)},addDeadline:function(e){this.update(e)},markComplete:function(){this.update(null)},deleteTodo:function(e){e.preventDefault();var t={id:this.item._id};this.$emit("delete-todo",t)},_exclusiveCurrentDate:function(){var e=new Date;return e.setDate(e.getDate()-1),e}},created:function(){var e=new Date(this.item.deadline),t=this._exclusiveCurrentDate();e<t&&(this.state.overdue=!0)}},_=x,y=(n("7e51"),Object(u["a"])(_,g,b,!1,null,"2345fc70",null)),k=y.exports,T={name:"TodoList",components:{TodoItem:k},methods:{deleteTodo:function(e){this.$emit("delete-todo",e)},updateTodo:function(e){this.$emit("update-todo",e)}},props:["todos"]},C=T,O=Object(u["a"])(C,f,v,!1,null,null,null),j=O.exports,D=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"header"},[n("h1",[e._v("To Do List")]),n("div",{staticClass:"logout"},[e.loggedIn?n("a",{attrs:{href:"#"},on:{click:e.logout}},[e._v("Logout")]):e._e()])])},R=[],$=n("d225"),P=n("b0b4"),U=n("bc3a"),L=n.n(U),A="/api/users/",E=function(){function e(){Object($["a"])(this,e)}return Object(P["a"])(e,null,[{key:"registerUser",value:function(e,t){return L.a.post("".concat(A,"register"),{username:e,password:t})}},{key:"verifyUser",value:function(e,t){return L.a.post("".concat(A,"login"),{username:e,password:t})}},{key:"authenticateUser",value:function(){return L.a.get("".concat(A,"authenticate"))}},{key:"logoutUser",value:function(){return L.a.get("".concat(A,"logout"))}}]),e}(),H=E,I={name:"Header",data:function(){return{loggedIn:!1,hideCompleted:!1,deadline:null}},methods:{update:function(e){e.preventDefault();var t={};this.hideCompleted&&(t.hideCompleted=!0),this.deadline&&(t.deadline=this.deadline),this.$emit("update",t)},clear:function(e){e.preventDefault(),this.hideCompleted=null,this.deadline=null,this.$emit("update",{hideCompleted:this.hideCompleted,deadline:this.deadline})},logout:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,H.logoutUser();case 4:this.loggedIn=!1,this.$router.push("/login"),e.next=11;break;case 8:throw e.prev=8,e.t0=e["catch"](1),e.t0;case 11:case"end":return e.stop()}},e,this,[[1,8]])}));function t(t){return e.apply(this,arguments)}return t}()},created:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,H.authenticateUser();case 3:this.loggedIn=!0,e.next=9;break;case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0;case 9:case"end":return e.stop()}},e,this,[[0,6]])}));function t(){return e.apply(this,arguments)}return t}()},q=I,M=(n("89f7"),Object(u["a"])(q,D,R,!1,null,"72a750d3",null)),N=M.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{staticClass:"root",on:{change:e.update}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.hideCompleted,expression:"hideCompleted"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.hideCompleted)?e._i(e.hideCompleted,null)>-1:e.hideCompleted},on:{change:function(t){var n=e.hideCompleted,r=t.target,a=!!r.checked;if(Array.isArray(n)){var o=null,i=e._i(n,o);r.checked?i<0&&(e.hideCompleted=n.concat([o])):i>-1&&(e.hideCompleted=n.slice(0,i).concat(n.slice(i+1)))}else e.hideCompleted=a}}}),e._v(" Hide Completed\n  "),n("Datepicker",{staticClass:"datepicker",attrs:{"clear-button":!0,"clear-button-icon":"fas fa-times"},on:{input:e.update},model:{value:e.deadline,callback:function(t){e.deadline=t},expression:"deadline"}}),e._v(" Completed By\n")],1)},B=[],F={name:"Filters",components:{Datepicker:w["a"]},data:function(){return{hideCompleted:!1,deadline:null}},methods:{update:function(){var e={};this.hideCompleted&&(e.hideCompleted=!0),this.deadline&&(e.deadline=this.deadline),this.$emit("update",e)},_disabledDate:function(){var e=new Date;return e.setDate(e.getDate()-1),e}}},J=F,z=(n("67bd"),Object(u["a"])(J,S,B,!1,null,"2cc87257",null)),G=z.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",[n("form",{on:{submit:e.addTodo}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text",name:"todoTitle",placeholder:"Add Todo here",required:""},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),n("input",{staticClass:"submitButton",attrs:{type:"submit",value:"Add"}})])])])},Q=[],V={name:"TodoInput",data:function(){return{title:""}},methods:{addTodo:function(e){e.preventDefault();var t={title:this.title};this.$emit("add-todo",t),this.title=""}}},W=V,X=(n("fff9"),Object(u["a"])(W,K,Q,!1,null,"4757599d",null)),Y=X.exports,Z=n("795b"),ee=n.n(Z),te="/api/todos/",ne=function(){function e(){Object($["a"])(this,e)}return Object(P["a"])(e,null,[{key:"getTodos",value:function(e){return new ee.a(function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(n,r){var a,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L.a.get(te,{params:e});case 3:a=t.sent,o=a.data,n(o),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),r(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(e,n){return t.apply(this,arguments)}}())}},{key:"addTodo",value:function(e){return L.a.post(te,{text:e})}},{key:"deleteTodo",value:function(e){return L.a.delete("".concat(te).concat(e))}},{key:"updateTodo",value:function(e,t,n){return L.a.put(te,{id:e,completed:t,deadline:n})}}]),e}(),re=ne,ae={name:"Home",components:{TodoList:j,TodoInput:Y,Header:N,Filters:G},data:function(){return{todos:[],filters:{}}},methods:{addTodo:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.addTodo(t.title);case 3:return e.next=5,re.getTodos(this.filters);case 5:this.todos=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),this.error=e.t0.message;case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}(),deleteTodo:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.deleteTodo(t.id);case 3:return e.next=5,re.getTodos(this.filters);case 5:this.todos=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),this.error=e.t0.message;case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}(),updateTodo:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.updateTodo(t.id,t.completed,t.deadline);case 3:return e.next=5,re.getTodos(this.filters);case 5:this.todos=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),this.error=e.t0.message;case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}(),updateTodoList:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.filters=t,e.next=4,re.getTodos(this.filters);case 4:this.todos=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.error=e.t0.message;case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},created:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.getTodos(this.filters);case 3:this.todos=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),this.error=e.t0.message;case 9:case"end":return e.stop()}},e,this,[[0,6]])}));function t(){return e.apply(this,arguments)}return t}()},oe=ae,ie=Object(u["a"])(oe,m,h,!1,null,null,null),se=ie.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header"),n("div",{staticClass:"login-box"},[n("h3",[e._v("Login")]),e.error.length?n("div",{staticClass:"error"},[e._v("\n            "+e._s(e.error)+"\n        ")]):e._e(),n("form",{on:{submit:e.login}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Username",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("input",{attrs:{type:"submit",value:"Login"}})]),n("div",[e._v("\n            Don't have an account? \n            "),n("router-link",{attrs:{to:"/register"}},[e._v("\n                Register here.\n            ")])],1)])],1)},ce=[],de={name:"Login",components:{Header:N},data:function(){return{username:"",password:"",error:""}},methods:{login:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,H.verifyUser(this.username,this.password);case 4:this.$router.push("/"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.error="Username and Password mismatch, or username unregistered. Please try again.";case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()}},le=de,pe=(n("acee"),Object(u["a"])(le,ue,ce,!1,null,"0d7336e2",null)),me=pe.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header"),n("div",{staticClass:"register-box"},[n("h3",[e._v("Register")]),e.error.length?n("div",{staticClass:"error"},[e._v("\n            "+e._s(e.error)+"\n        ")]):e._e(),n("form",{on:{submit:e.register}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Username",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),n("input",{attrs:{type:"submit",value:"Register"}})]),n("div",[e._v("\n            Already have an account? \n            "),n("router-link",{attrs:{to:"/login"}},[e._v("\n                Login here.\n            ")])],1)])],1)},fe=[],ve={name:"Register",components:{Header:N},data:function(){return{username:"",password:"",error:""}},methods:{register:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,H.registerUser(this.username,this.password);case 4:this.$router.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.error="Username already exists. Please try again.";case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()}},ge=ve,be=(n("0faa"),Object(u["a"])(ge,he,fe,!1,null,"073d2b5c",null)),we=be.exports;r["a"].use(p["a"]);var xe=new p["a"]({routes:[{path:"/",name:"home",component:se,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:me},{path:"/register",name:"register",component:we}]});xe.beforeEach(function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t,n,r){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.matched.some(function(e){return e.meta.requiresAuth})){e.next=12;break}return e.prev=1,e.next=4,H.authenticateUser();case 4:r(),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),r({path:"/login",query:{redirect:t.fullPath}});case 10:e.next=13;break;case 12:r();case 13:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t,n,r){return e.apply(this,arguments)}}());var _e=xe;r["a"].config.productionTip=!1,new r["a"]({router:_e,render:function(e){return e(d)}}).$mount("#app")},"64a9":function(e,t,n){},"67bd":function(e,t,n){"use strict";var r=n("a6b2"),a=n.n(r);a.a},"7e51":function(e,t,n){"use strict";var r=n("bc58"),a=n.n(r);a.a},"89f7":function(e,t,n){"use strict";var r=n("93c7"),a=n.n(r);a.a},9191:function(e,t,n){},"93c7":function(e,t,n){},a6b2:function(e,t,n){},acee:function(e,t,n){"use strict";var r=n("0baf"),a=n.n(r);a.a},bc58:function(e,t,n){},f7d5:function(e,t,n){},fff9:function(e,t,n){"use strict";var r=n("9191"),a=n.n(r);a.a}});
//# sourceMappingURL=app.2f70692b.js.map