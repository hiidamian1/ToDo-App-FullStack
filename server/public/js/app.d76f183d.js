(function(e){function t(t){for(var a,i,s=t[0],u=t[1],d=t[2],l=0,p=[];l<s.length;l++)i=s[l],n[i]&&p.push(n[i][0]),n[i]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,d||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],a=!0,s=1;s<r.length;s++){var u=r[s];0!==n[u]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var a={},n={app:0},o=[];function i(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=a,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(r,a,function(t){return e[t]}.bind(null,a));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var c=u;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var a=r("64a9"),n=r.n(a);n.a},"0750":function(e,t,r){},2458:function(e,t,r){"use strict";var a=r("aecc"),n=r.n(a);n.a},2740:function(e,t,r){},"27a4":function(e,t,r){"use strict";var a=r("4e0b"),n=r.n(a);n.a},"4e0b":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("097d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},o=[],i={name:"app"},s=i,u=(r("034f"),r("2877")),d=Object(u["a"])(s,n,o,!1,null,null,null),c=d.exports,l=(r("96cf"),r("3b8d")),p=r("8c4f"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"root"},[r("Header",{attrs:{username:this.$route.params.username}}),r("Filters",{attrs:{dateFormat:e.dateFormat},on:{update:e.updateTodoList}}),r("div",{attrs:{id:"home"}},[r("TodoInput",{on:{"add-todo":e.addTodo}}),r("TodoList",{attrs:{todos:e.todos,dateFormat:e.dateFormat},on:{"delete-todo":e.deleteTodo,"update-todo":e.updateTodo}})],1)],1)},h=[],v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.todos.length?r("div",[r("Header"),e._l(e.todos,function(t){return r("div",{key:t._id},[r("TodoItem",{attrs:{item:t,dateFormat:e.dateFormat},on:{"delete-todo":e.deleteTodo,"update-todo":e.updateTodo}})],1)})],2):e._e()},f=[],g=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"todo-item-root"},[r("div",{staticClass:"todo-item"},[r("div",{staticClass:"todo-text",on:{click:e.markComplete}},[r("div",{class:{"is-complete":e.item.completed,"is-overdue":this.state.overdue}},[e._v("\n\t\t\t\t"+e._s(e.item.title)+"\n\t\t\t")]),e.item.completed?r("div",{staticClass:"tooltip"},[e._v("\n\t\t\t\tMark Uncomplete\n\t\t\t")]):r("div",{staticClass:"tooltip"},[e._v("\n\t\t\t\tMark Complete\n\t\t\t")])]),r("div",{staticClass:"todo-deadline"},[r("Datepicker",{attrs:{format:e.dateFormat,disabledDates:this.state.disabledDates,value:e.item.deadline},on:{selected:e.addDeadline}})],1)]),r("button",{staticClass:"deleteButton",on:{click:e.deleteTodo}},[r("i",{staticClass:"fas fa-times"})])])},b=[],k=r("77f7"),w={name:"TodoItem",props:["item","dateFormat"],data:function(){return{state:{disabledDates:{to:this._exclusiveCurrentDate()},overdue:!1,overdueComplete:!1}}},components:{Datepicker:k["a"]},methods:{addDeadline:function(e){var t={id:this.item._id,deadline:e,completed:this.item.completed};this.state.overdue&&(this.state.overdue=!1),this.$emit("update-todo",t)},markComplete:function(){var e={id:this.item._id,deadline:this.item.deadline,completed:!this.item.completed};!this.item.completed&&this.state.overdue?(this.state.overdue=!1,this.overdueComplete=!0):this.overdueComplete&&(this.state.overdue=!0,this.overdueComplete=!1),console.log(new Date(this.item.deadline)),this.$emit("update-todo",e)},deleteTodo:function(e){e.preventDefault();var t={id:this.item._id};this.$emit("delete-todo",t)},_exclusiveCurrentDate:function(){var e=new Date;return e.setDate(e.getDate()-1),e}},created:function(){var e=new Date(this.item.deadline),t=this._exclusiveCurrentDate();console.log("date ".concat(e," todo ").concat(this.item.title)),e<t&&!this.item.completed&&(this.state.overdue=!0)}},x=w,D=(r("2458"),Object(u["a"])(x,g,b,!1,null,"ce99b4fe",null)),y=D.exports,_={name:"TodoList",components:{TodoItem:y},props:["todos","dateFormat"],methods:{deleteTodo:function(e){this.$emit("delete-todo",e)},updateTodo:function(e){this.$emit("update-todo",e)}}},C=_,T=Object(u["a"])(C,v,f,!1,null,null,null),O=T.exports,j=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("header",{staticClass:"header"},[r("h1",[e._v("To Do List")]),r("div",{staticClass:"logout"},[e.loggedIn?r("a",{attrs:{href:"#"},on:{click:e.logout}},[e._v("\n\t\t\tLogout "+e._s(e.username)+"\n\t\t")]):e._e()])])},R=[],$=r("d225"),E=r("b0b4"),I=r("bc3a"),P=r.n(I),F="/api/users/",S=function(){function e(){Object($["a"])(this,e)}return Object(E["a"])(e,null,[{key:"registerUser",value:function(e,t){return P.a.post("".concat(F,"register"),{username:e,password:t})}},{key:"verifyUser",value:function(e,t){return P.a.post("".concat(F,"login"),{username:e,password:t})}},{key:"authenticateUser",value:function(){return P.a.get("".concat(F,"authenticate"))}},{key:"logoutUser",value:function(){return P.a.get("".concat(F,"logout"))}}]),e}(),U=S,H={name:"Header",props:["username"],data:function(){return{loggedIn:!1,hideCompleted:!1,deadline:null}},methods:{update:function(e){e.preventDefault();var t={};this.hideCompleted&&(t.hideCompleted=!0),this.deadline&&(t.deadline=this.deadline),this.$emit("update",t)},clear:function(e){e.preventDefault(),this.hideCompleted=null,this.deadline=null,this.$emit("update",{hideCompleted:this.hideCompleted,deadline:this.deadline})},logout:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,U.logoutUser();case 4:this.loggedIn=!1,this.$router.push("/login"),e.next=11;break;case 8:throw e.prev=8,e.t0=e["catch"](1),e.t0;case 11:case"end":return e.stop()}},e,this,[[1,8]])}));function t(t){return e.apply(this,arguments)}return t}()},created:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,U.authenticateUser();case 3:this.loggedIn=!0,e.next=9;break;case 6:throw e.prev=6,e.t0=e["catch"](0),e.t0;case 9:case"end":return e.stop()}},e,this,[[0,6]])}));function t(){return e.apply(this,arguments)}return t}()},A=H,L=(r("7771"),Object(u["a"])(A,j,R,!1,null,"4234ad52",null)),M=L.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"root"},[r("div",{staticClass:"hide-completed-container"},[e._v("\n    Hide Completed\n    "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.hideCompleted,expression:"hideCompleted"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.hideCompleted)?e._i(e.hideCompleted,null)>-1:e.hideCompleted},on:{change:[function(t){var r=e.hideCompleted,a=t.target,n=!!a.checked;if(Array.isArray(r)){var o=null,i=e._i(r,o);a.checked?i<0&&(e.hideCompleted=r.concat([o])):i>-1&&(e.hideCompleted=r.slice(0,i).concat(r.slice(i+1)))}else e.hideCompleted=n},e.update]}})]),r("div",{staticClass:"deadline-container"},[e._v("\n    Due\n    "),e.displayDatepicker?r("div",{staticClass:"datepicker-container"},[r("div",{staticClass:"datepickers"},[r("Datepicker",{staticClass:"datepicker",attrs:{placeholder:"Start",format:e.dateFormat,"clear-button":!0,"clear-button-icon":"fas fa-times"},model:{value:e.datepickerStartDate,callback:function(t){e.datepickerStartDate=t},expression:"datepickerStartDate"}}),r("Datepicker",{staticClass:"datepicker",attrs:{placeholder:"End",format:e.dateFormat,"clear-button":!0,"clear-button-icon":"fas fa-times"},model:{value:e.datepickerEndDate,callback:function(t){e.datepickerEndDate=t},expression:"datepickerEndDate"}})],1),r("a",{staticClass:"go",attrs:{href:"#"},on:{click:e.update}},[e._v("Go")]),r("a",{attrs:{href:"#"},on:{click:function(t){e.displayDatepicker=!1}}},[e._v("Back")])]):r("select",{directives:[{name:"model",rawName:"v-model",value:e.deadlineID,expression:"deadlineID"}],on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.deadlineID=t.target.multiple?r:r[0]},e.update]}},[r("option",{attrs:{value:"-1"}},[e._v(" Select ")]),r("option",{attrs:{value:"0"}},[e._v(" Today ")]),r("option",{attrs:{value:"1"}},[e._v(" Tomorrow ")]),r("option",{attrs:{value:"2"}},[e._v(" This Week ")]),r("option",{attrs:{value:"3"}},[e._v(" Next Week ")]),r("option",{attrs:{value:"4"}},[e._v(" Custom... ")])])])])},N=[],B={name:"Filters",components:{Datepicker:k["a"]},props:["dateFormat"],data:function(){return{hideCompleted:!1,deadlineID:-1,displayDatepicker:!1,displayEndDatepicker:!1,datepickerStartDate:null,datepickerEndDate:null}},methods:{update:function(){if(4==this.deadlineID)return this.deadlineID=-1,void(this.displayDatepicker=!0);var e={};if(this.hideCompleted&&(e.hideCompleted=!0),this.deadlineID>-1&&this.deadlineID<=3&&(e.deadline=this._idToDateArray(this.deadlineID)),this.displayDatepicker&&(this.datepickerStartDate||this.datepickerEndDate)){var t=[];this.datepickerStartDate?t.push(this.datepickerStartDate):t.push(!1),this.datepickerEndDate?t.push(this.datepickerEndDate):t.push(!1),e.deadline=t}this.$emit("update",e)},_idToDateArray:function(e){if(e<=1){var t=new Date;return 1==e&&t.setDate(t.getDate()+1),t.setHours(0,0,0,0),console.log(t),[t]}if(e<=3){var r=new Date,a=new Date;return 2==e?a.setDate(a.getDate()+(6-a.getDay())):(r.setDate(r.getDate()+7-r.getDay()),a.setDate(a.getDate()+7+(6-a.getDay()))),console.log("start ".concat(r)),console.log("end ".concat(a)),r.setHours(0,0,0,0),a.setHours(0,0,0,0),[r,a]}throw"error! invalid text to date input"}}},J=B,W=(r("d20d"),Object(u["a"])(J,q,N,!1,null,"53effaa3",null)),G=W.exports,z=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",[r("form",{on:{submit:e.addTodo}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text",name:"todoTitle",placeholder:"Add Todo here",required:""},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),e._m(0)])])])},K=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("button",{staticClass:"submitButton",attrs:{type:"submit"}},[r("i",{staticClass:"fas fa-plus"})])}],Q={name:"TodoInput",data:function(){return{title:""}},methods:{addTodo:function(e){e.preventDefault();var t={title:this.title,deadline:new Date};this.$emit("add-todo",t),this.title=""}}},V=Q,X=(r("e9f9"),Object(u["a"])(V,z,K,!1,null,"393b89e3",null)),Y=X.exports,Z=r("795b"),ee=r.n(Z),te="/api/todos/",re=function(){function e(){Object($["a"])(this,e)}return Object(E["a"])(e,null,[{key:"getTodos",value:function(e){return new ee.a(function(){var t=Object(l["a"])(regeneratorRuntime.mark(function t(r,a){var n,o;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,P.a.get(te,{params:e});case 3:n=t.sent,o=n.data,r(o),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),a(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(e,r){return t.apply(this,arguments)}}())}},{key:"addTodo",value:function(e){return P.a.post(te,{text:e,deadline:deadline})}},{key:"deleteTodo",value:function(e){return P.a.delete("".concat(te).concat(e))}},{key:"updateTodo",value:function(e,t,r){return P.a.put(te,{id:e,completed:t,deadline:r})}}]),e}(),ae=re,ne={name:"Home",components:{TodoList:O,TodoInput:Y,Header:M,Filters:G},data:function(){return{todos:[],filters:{},dateFormat:"D dsu MMM yyyy"}},methods:{addTodo:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.addTodo(t.title);case 3:return e.next=5,ae.getTodos(this.filters);case 5:this.todos=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),this.error=e.t0.message;case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}(),deleteTodo:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.deleteTodo(t.id);case 3:return e.next=5,ae.getTodos(this.filters);case 5:this.todos=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),this.error=e.t0.message;case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}(),updateTodo:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.updateTodo(t.id,t.completed,t.deadline);case 3:return e.next=5,ae.getTodos(this.filters);case 5:this.todos=e.sent,e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),this.error=e.t0.message;case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}(),updateTodoList:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.filters=t,e.next=4,ae.getTodos(this.filters);case 4:this.todos=e.sent,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.error=e.t0.message;case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()},created:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ae.getTodos(this.filters);case 3:this.todos=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e["catch"](0),this.error=e.t0.message;case 9:case"end":return e.stop()}},e,this,[[0,6]])}));function t(){return e.apply(this,arguments)}return t}()},oe=ne,ie=(r("e387"),Object(u["a"])(oe,m,h,!1,null,"4c27e8dd",null)),se=ie.exports,ue=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Header"),r("div",{staticClass:"login-box"},[r("h3",[e._v("Login")]),e.error.length?r("div",{staticClass:"error"},[e._v("\n      "+e._s(e.error)+"\n    ")]):e._e(),r("form",{on:{submit:e.login}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Username",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("input",{attrs:{type:"submit",value:"Login"}})]),r("div",[e._v("\n      Don't have an account? \n      "),r("router-link",{attrs:{to:"/register"}},[e._v("\n        Register here.\n      ")])],1)])],1)},de=[],ce={name:"Login",components:{Header:M},data:function(){return{username:"",password:"",error:""}},methods:{login:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,U.verifyUser(this.username,this.password);case 4:r=e.sent,this.$router.push({name:"home",params:{username:r.data}}),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),this.error="Username and Password mismatch, or username unregistered. Please try again.";case 11:case"end":return e.stop()}},e,this,[[0,8]])}));function t(t){return e.apply(this,arguments)}return t}()}},le=ce,pe=(r("27a4"),Object(u["a"])(le,ue,de,!1,null,"7ec53b82",null)),me=pe.exports,he=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("Header"),r("div",{staticClass:"register-box"},[r("h3",[e._v("Register")]),e.error.length?r("div",{staticClass:"error"},[e._v("\n      "+e._s(e.error)+"\n    ")]):e._e(),r("form",{on:{submit:e.register}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{type:"text",placeholder:"Username",required:""},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"Password",required:""},domProps:{value:e.password},on:{input:function(t){t.target.composing||(e.password=t.target.value)}}}),r("input",{attrs:{type:"submit",value:"Register"}})]),r("div",[e._v("\n      Already have an account? \n      "),r("router-link",{attrs:{to:"/login"}},[e._v("\n          Login here.\n      ")])],1)])],1)},ve=[],fe={name:"Register",components:{Header:M},data:function(){return{username:"",password:"",error:""}},methods:{register:function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.preventDefault(),e.next=4,U.registerUser(this.username,this.password);case 4:this.$router.push("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.error="Username already exists. Please try again.";case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}()}},ge=fe,be=(r("6249"),Object(u["a"])(ge,he,ve,!1,null,"16f7ca92",null)),ke=be.exports;a["a"].use(p["a"]);var we=new p["a"]({routes:[{path:"/",name:"home",component:se,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:me},{path:"/register",name:"register",component:ke}]});we.beforeEach(function(){var e=Object(l["a"])(regeneratorRuntime.mark(function e(t,r,a){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.matched.some(function(e){return e.meta.requiresAuth})){e.next=12;break}return e.prev=1,e.next=4,U.authenticateUser();case 4:a(),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](1),a({path:"/login",query:{redirect:t.fullPath}});case 10:e.next=13;break;case 12:a();case 13:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t,r,a){return e.apply(this,arguments)}}());var xe=we;a["a"].config.productionTip=!1,new a["a"]({router:xe,render:function(e){return e(c)}}).$mount("#app")},6249:function(e,t,r){"use strict";var a=r("87b8"),n=r.n(a);n.a},"64a9":function(e,t,r){},7771:function(e,t,r){"use strict";var a=r("0750"),n=r.n(a);n.a},"7abf":function(e,t,r){},"85a5":function(e,t,r){},"87b8":function(e,t,r){},aecc:function(e,t,r){},d20d:function(e,t,r){"use strict";var a=r("2740"),n=r.n(a);n.a},e387:function(e,t,r){"use strict";var a=r("85a5"),n=r.n(a);n.a},e9f9:function(e,t,r){"use strict";var a=r("7abf"),n=r.n(a);n.a}});
//# sourceMappingURL=app.d76f183d.js.map