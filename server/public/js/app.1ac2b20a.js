(function(e){function t(t){for(var r,n,s=t[0],d=t[1],c=t[2],l=0,u=[];l<s.length;l++)n=s[l],i[n]&&u.push(i[n][0]),i[n]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);p&&p(t);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,n=1;n<a.length;n++){var s=a[n];0!==i[s]&&(r=!1)}r&&(o.splice(t--,1),e=d(d.s=a[0]))}return e}var r={},n={app:0},i={app:0},o=[];function s(e){return d.p+"js/"+({about:"about"}[e]||e)+"."+{about:"fb78b2b5"}[e]+".js"}function d(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,d),a.l=!0,a.exports}d.e=function(e){var t=[],a={about:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise(function(t,a){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"c1a20b40"}[e]+".css",i=d.p+r,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===i))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){c=u[s],l=c.getAttribute("data-href");if(l===r||l===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.request=r,delete n[e],p.parentNode.removeChild(p),a(o)},p.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(p)}).then(function(){n[e]=0}));var r=i[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise(function(t,a){r=i[e]=[t,a]});t.push(r[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=s(e),c=function(t){l.onerror=l.onload=null,clearTimeout(u);var a=i[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+r+": "+n+")");o.type=r,o.request=n,a[1](o)}i[e]=void 0}};var u=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},d.m=e,d.c=r,d.d=function(e,t,a){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(d.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)d.d(a,r,function(t){return e[t]}.bind(null,r));return a},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="/",d.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var p=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("64a9"),n=a.n(r);n.a},3036:function(e,t,a){"use strict";var r=a("faa9"),n=a.n(r);n.a},"3faa":function(e,t,a){"use strict";var r=a("d225"),n=a("b0b4"),i=a("bc3a"),o=a.n(i),s="/api/users/",d=function(){function e(){Object(r["a"])(this,e)}return Object(n["a"])(e,null,[{key:"registerUser",value:function(e,t){return o.a.post("".concat(s,"register"),{username:e,password:t})}},{key:"verifyUser",value:function(e,t){return o.a.post("".concat(s,"login"),{username:e,password:t})}},{key:"authenticateUser",value:function(){return o.a.get("".concat(s,"authenticate"))}},{key:"logoutUser",value:function(){return o.a.get("".concat(s,"logout"))}}]),e}();t["a"]=d},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("Header"),a("router-view")],1)},i=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"header"},[e.displayLogout?a("div",{staticClass:"user-options-button",attrs:{id:"hidden"}},[a("i",{staticClass:"fas fa-user"}),e._v(" \n\t\t"+e._s(e.username)+"\n\t")]):e._e(),a("h1",[e._v("To Do List")]),e.displayLogout?a("div",{staticClass:"user-options-dropdown"},[a("button",{staticClass:"user-options-button",on:{click:function(t){e.displayDropdown=!e.displayDropdown}}},[a("i",{staticClass:"fas fa-user"}),e._v(" \n\t\t\t"+e._s(e.username)+"\n\t\t")]),e.displayDropdown?a("div",{staticClass:"user-options"},[a("a",{staticClass:"option",attrs:{href:"#"},on:{click:e.logout}},[e._v("\n\t\t\t\tLogout\n\t\t\t")])]):e._e()]):e._e()])},s=[],d=(a("96cf"),a("3b8d")),c=a("3faa"),l={name:"Header",data:function(){return{displayLogout:!1,displayDropdown:!1,hideCompleted:!1,deadline:null,username:""}},methods:{update:function(e){e.preventDefault();var t={};this.hideCompleted&&(t.hideCompleted=!0),this.deadline&&(t.deadline=this.deadline),this.$emit("update",t)},clear:function(e){e.preventDefault(),this.hideCompleted=null,this.deadline=null,this.$emit("update",{hideCompleted:this.hideCompleted,deadline:this.deadline})},logout:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,c["a"].logoutUser();case 4:return this.displayLogout=!1,this.displayDropdown=!1,localStorage.removeItem("username"),e.next=9,caches.open("users-cache");case 9:return a=e.sent,console.log(a),e.next=13,a.delete("/api/users/authenticate");case 13:this.username="",this.$router.push("/login"),e.next=20;break;case 17:throw e.prev=17,e.t0=e["catch"](1),e.t0;case 20:case"end":return e.stop()}},e,this,[[1,17]])}));function t(t){return e.apply(this,arguments)}return t}()},watch:{$route:function(){var e=localStorage.getItem("username");e&&(this.displayLogout=!0,this.username=e)}}},u=l,p=(a("88cf"),a("2877")),h=Object(p["a"])(u,o,s,!1,null,"b3e7d4e0",null),f=h.exports,m={name:"app",components:{Header:f}},v=m,b=(a("034f"),Object(p["a"])(v,n,i,!1,null,null,null)),g=b.exports,y=a("8c4f"),k=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"root"},[a("Filters",{attrs:{dateFormat:e.dateFormat},on:{update:e.updateTodoList}}),a("div",{attrs:{id:"home"}},[a("TodoInput",{on:{"add-todo":e.addTodo}}),a("TodoList",{attrs:{todos:e.displayedTodos,dateFormat:e.dateFormat},on:{"delete-todo":e.deleteTodo,"update-todo":e.updateTodo}})],1)],1)},D=[],w=(a("55dd"),a("5d73")),C=a.n(w),_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.todos.length?a("div",[a("Header"),e._l(e.todos,function(t){return a("div",{key:t._id},[a("TodoItem",{attrs:{item:t,dateFormat:e.dateFormat},on:{"delete-todo":e.deleteTodo,"update-todo":e.updateTodo}})],1)})],2):e._e()},T=[],x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"todo-item-root"},[a("div",{staticClass:"todo-item"},[a("div",{staticClass:"todo-text",on:{click:e.markComplete}},[a("div",{class:{"is-complete":e.item.completed,"is-overdue":e.state.overdue}},[e._v("\n\t\t\t\t"+e._s(e.item.title)+"\n\t\t\t")]),e.item.completed?a("div",{staticClass:"todo-tooltip"},[e._v("\n\t\t\t\tMark Uncomplete\n\t\t\t")]):a("div",{staticClass:"todo-tooltip"},[e._v("\n\t\t\t\tMark Complete\n\t\t\t")])]),a("div",{staticClass:"todo-deadline"},[e._v("\n\t\t\t"+e._s(e.toDeadlineString(e.item.deadline))+"\n\t\t\t"),a("div",{class:{"todo-open-calendar":e.state.dateSelected}},[a("i",{staticClass:"far fa-calendar-alt",on:{click:e.openPicker}})]),a("Datepicker",{ref:"programaticOpen",staticClass:"todo-item-datepicker",class:{"todo-item-datepicker-selected":e.state.dateSelected},attrs:{format:e.dateFormat,disabledDates:e.state.disabledDates,value:e.item.deadline,"clear-button":!0,"clear-button-icon":"fas fa-times"},on:{selected:e.addDeadline,cleared:e.removeDeadline}})],1)]),a("button",{staticClass:"deleteButton",on:{click:e.deleteTodo}},[a("i",{staticClass:"fas fa-times"})])])},O=[],j=a("77f7"),I={name:"TodoItem",props:["item","dateFormat"],data:function(){return{state:{disabledDates:{to:this._exclusiveCurrentDate()},overdue:!1,overdueComplete:!1,dateSelected:!1}}},components:{Datepicker:j["a"]},methods:{addDeadline:function(e){var t={id:this.item._id,deadline:e,completed:this.item.completed};this.state.overdue&&(this.state.overdue=!1),this.state.dateSelected=!0,this.$emit("update-todo",t)},removeDeadline:function(){var e={id:this.item._id,deadline:null,completed:this.item.completed};this.state.overdue&&(this.state.overdue=!1),this.state.dateSelected=!1,this.$emit("update-todo",e)},markComplete:function(){var e={id:this.item._id,deadline:this.item.deadline,completed:!this.item.completed};!this.item.completed&&this.state.overdue?(this.state.overdue=!1,this.state.overdueComplete=!0):this.state.overdueComplete&&(this.state.overdue=!0,this.state.overdueComplete=!1),this.$emit("update-todo",e)},deleteTodo:function(e){e.preventDefault();var t={id:this.item._id};this.$emit("delete-todo",t)},_exclusiveCurrentDate:function(){var e=new Date;return e.setHours(0,0,0,0),e},toDeadlineString:function(e){if(e)return new Date(e).toDateString()},openPicker:function(){this.$refs.programaticOpen.showCalendar()}},created:function(){if(this.item.deadline){this.state.dateSelected=!0;var e=new Date(this.item.deadline),t=new Date;t.setHours(0,0,0,0),e<t&&!this.item.completed&&(this.state.overdue=!0),e<t&&this.item.completed&&(this.state.overdueComplete=!0)}}},S=I,E=(a("6959"),Object(p["a"])(S,x,O,!1,null,null,null)),A=E.exports,$={name:"TodoList",components:{TodoItem:A},props:["todos","dateFormat"],methods:{deleteTodo:function(e){this.$emit("delete-todo",e)},updateTodo:function(e){this.$emit("update-todo",e)}}},F=$,L=Object(p["a"])(F,_,T,!1,null,null,null),R=L.exports,P=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"root"},[a("div",{staticClass:"wrap-collabsible"},[a("input",{staticClass:"toggle",attrs:{id:"collapsible",type:"checkbox"}}),a("label",{staticClass:"lbl-toggle",attrs:{for:"collapsible"}},[e._v("Filters")]),a("div",{staticClass:"collapsible-content"},[a("div",{staticClass:"content-inner filters"},[a("div",{staticClass:"hide-completed-container",attrs:{id:"hide-completed"}},[e._v("\n          Hide Completed\n          "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.hideCompleted,expression:"hideCompleted"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.hideCompleted)?e._i(e.hideCompleted,null)>-1:e.hideCompleted},on:{change:[function(t){var a=e.hideCompleted,r=t.target,n=!!r.checked;if(Array.isArray(a)){var i=null,o=e._i(a,i);r.checked?o<0&&(e.hideCompleted=a.concat([i])):o>-1&&(e.hideCompleted=a.slice(0,o).concat(a.slice(o+1)))}else e.hideCompleted=n},e.update]}})]),a("div",{staticClass:"select-container",attrs:{id:"date"}},[e.displayDatepicker?a("div",{staticClass:"datepicker-container"},[a("div",{staticClass:"datepickers"},[a("Datepicker",{staticClass:"datepicker",attrs:{placeholder:"Start",format:e.dateFormat,"clear-button":!0,"clear-button-icon":"fas fa-times"},model:{value:e.datepickerStartDate,callback:function(t){e.datepickerStartDate=t},expression:"datepickerStartDate"}}),a("Datepicker",{staticClass:"datepicker",attrs:{placeholder:"End",format:e.dateFormat,"clear-button":!0,"clear-button-icon":"fas fa-times"},model:{value:e.datepickerEndDate,callback:function(t){e.datepickerEndDate=t},expression:"datepickerEndDate"}})],1),a("a",{staticClass:"go",attrs:{href:"#"},on:{click:e.update}},[e._v("Go")]),a("a",{attrs:{href:"#"},on:{click:e.reset}},[e._v("Back")])]):a("select",{directives:[{name:"model",rawName:"v-model",value:e.deadlineID,expression:"deadlineID"}],staticClass:"custom-select",on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.deadlineID=t.target.multiple?a:a[0]},e.update]}},[a("option",{attrs:{value:"-1"}},[e._v(" Due ")]),a("option",{attrs:{value:"0"}},[e._v(" Today ")]),a("option",{attrs:{value:"1"}},[e._v(" Tomorrow ")]),a("option",{attrs:{value:"2"}},[e._v(" This Week ")]),a("option",{attrs:{value:"3"}},[e._v(" Next Week ")]),a("option",{attrs:{value:"4"}},[e._v(" Custom... ")])])]),a("div",{staticClass:"select-container",attrs:{id:"sort-by"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.sortByID,expression:"sortByID"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.sortByID=t.target.multiple?a:a[0]},e.update]}},[a("option",{attrs:{value:"-1"}},[e._v("Sort by")]),a("option",{attrs:{value:"0"}},[e._v("Alphabetical")]),a("option",{attrs:{value:"1"}},[e._v("Date")])])]),a("div",{staticClass:"select-container",attrs:{id:"order"}},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.orderID,expression:"orderID"}],on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.orderID=t.target.multiple?a:a[0]},e.update]}},[a("option",{attrs:{value:"-1"}},[e._v("Order")]),a("option",{attrs:{value:"0"}},[e._v("Ascending")]),a("option",{attrs:{value:"1"}},[e._v("Descending")])])])])])])])},U=[],B={name:"Filters",components:{Datepicker:j["a"]},props:["dateFormat"],data:function(){return{hideCompleted:!1,deadlineID:-1,sortByID:-1,orderID:-1,displayDatepicker:!1,displayEndDatepicker:!1,datepickerStartDate:null,datepickerEndDate:null}},methods:{update:function(){if(4==this.deadlineID)return this.deadlineID=-1,void(this.displayDatepicker=!0);var e={};if(this.hideCompleted&&(e.hideCompleted=!0),this.deadlineID>-1&&this.deadlineID<=3&&(e.deadline=this._idToDateArray(this.deadlineID)),this.displayDatepicker&&(this.datepickerStartDate||this.datepickerEndDate)){var t=[];this.datepickerStartDate?(this.datepickerStartDate.setHours(0,0,0,0),t.push(this.datepickerStartDate)):t.push(!1),this.datepickerEndDate?(this.datepickerEndDate.setTime(this.datepickerEndDate.getTime()+864e5),this.datepickerEndDate.setHours(0,0,0,0),t.push(this.datepickerEndDate)):t.push(!1),e.deadline=t}this.sortByID>-1&&(0==this.sortByID&&(e.byAlphabetical=!0),1==this.sortByID&&(e.byDate=!0)),this.orderID>-1&&(0==this.orderID?e.ascending=!0:e.descending=!0),this.$emit("update",e)},reset:function(){this.displayDatepicker=!1,this.datepickerStartDate=null,this.datepickerEndDate=null,this.update()},_idToDateArray:function(e){if(e<=1){var t=new Date;return 1==e&&t.setDate(t.getDate()+1),t.setHours(0,0,0,0),[t]}if(e<=3){var a=new Date,r=new Date;return 2==e?r.setDate(r.getDate()+(7-r.getDay())):(a.setDate(a.getDate()+7-a.getDay()),r.setDate(r.getDate()+7+(7-r.getDay()))),a.setHours(0,0,0,0),r.setHours(0,0,0,0),[a,r]}throw"error! invalid text to date input"}}},H=B,N=(a("3036"),Object(p["a"])(H,P,U,!1,null,"30c8a59e",null)),M=N.exports,q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("form",{on:{submit:e.addTodo}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.title,expression:"title"}],attrs:{type:"text",name:"todoTitle",placeholder:"Add Todo here",required:""},domProps:{value:e.title},on:{input:function(t){t.target.composing||(e.title=t.target.value)}}}),e._m(0)])])])},J=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"submitButton",attrs:{type:"submit"}},[a("i",{staticClass:"fas fa-plus"})])}],W={name:"TodoInput",data:function(){return{title:""}},methods:{addTodo:function(e){e.preventDefault();var t={title:this.title};this.$emit("add-todo",t),this.title=""}}},G=W,z=(a("69f8"),Object(p["a"])(G,q,J,!1,null,"45e01c55",null)),K=z.exports,Q=a("795b"),V=a.n(Q),X=a("d225"),Y=a("b0b4"),Z=a("bc3a"),ee=a.n(Z),te="/api/todos/",ae=function(){function e(){Object(X["a"])(this,e)}return Object(Y["a"])(e,null,[{key:"getTodos",value:function(e){return new V.a(function(){var t=Object(d["a"])(regeneratorRuntime.mark(function t(a,r){var n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,ee.a.get(te,{params:e});case 3:n=t.sent,i=n.data,a(i),t.next=11;break;case 8:t.prev=8,t.t0=t["catch"](0),r(t.t0);case 11:case"end":return t.stop()}},t,this,[[0,8]])}));return function(e,a){return t.apply(this,arguments)}}())}},{key:"addTodo",value:function(e){return ee.a.post(te,{title:e})}},{key:"deleteTodo",value:function(e){return ee.a.delete("".concat(te).concat(e))}},{key:"updateTodo",value:function(e,t,a){return ee.a.put(te,{id:e,completed:t,deadline:a})}}]),e}(),re=ae,ne={name:"Home",components:{TodoList:R,TodoInput:K,Filters:M},data:function(){return{todos:[],displayedTodos:[],dateFormat:"D dsu MMM yyyy",filters:{}}},methods:{addTodo:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(t){var a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.addTodo(t.title);case 3:a=e.sent,this.todos.push(a.data),this.displayedTodos.push(a.data),this.updateTodoList(this.filters),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),this.error=e.t0.message;case 12:case"end":return e.stop()}},e,this,[[0,9]])}));function t(t){return e.apply(this,arguments)}return t}(),deleteTodo:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(t){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.deleteTodo(t.id);case 3:this.todos=this.todos.filter(function(e){return e._id!=t.id}),this.displayedTodos=this.displayedTodos.filter(function(e){return e._id!=t.id}),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.error=e.t0.message;case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(t){return e.apply(this,arguments)}return t}(),updateTodo:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(t){var a,r,n,i,o,s,d,c,l,u,p,h;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.updateTodo(t.id,t.completed,t.deadline);case 3:a=!0,r=!1,n=void 0,e.prev=6,i=C()(this.todos);case 8:if(a=(o=i.next()).done){e.next=17;break}if(s=o.value,s._id!=t.id){e.next=14;break}return s.completed=t.completed,s.deadline=t.deadline,e.abrupt("break",17);case 14:a=!0,e.next=8;break;case 17:e.next=23;break;case 19:e.prev=19,e.t0=e["catch"](6),r=!0,n=e.t0;case 23:e.prev=23,e.prev=24,a||null==i.return||i.return();case 26:if(e.prev=26,!r){e.next=29;break}throw n;case 29:return e.finish(26);case 30:return e.finish(23);case 31:d=!0,c=!1,l=void 0,e.prev=34,u=C()(this.displayedTodos);case 36:if(d=(p=u.next()).done){e.next=45;break}if(h=p.value,h._id!=t.id){e.next=42;break}return h.completed=t.completed,h.deadline=t.deadline,e.abrupt("break",45);case 42:d=!0,e.next=36;break;case 45:e.next=51;break;case 47:e.prev=47,e.t1=e["catch"](34),c=!0,l=e.t1;case 51:e.prev=51,e.prev=52,d||null==u.return||u.return();case 54:if(e.prev=54,!c){e.next=57;break}throw l;case 57:return e.finish(54);case 58:return e.finish(51);case 59:this.updateTodoList(this.filters),e.next=65;break;case 62:e.prev=62,e.t2=e["catch"](0),this.error=e.t2.message;case 65:case"end":return e.stop()}},e,this,[[0,62],[6,19,23,31],[24,,26,30],[34,47,51,59],[52,,54,58]])}));function t(t){return e.apply(this,arguments)}return t}(),updateTodoList:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(t){var a=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:try{this.filters=t,this.displayedTodos=this.todos.slice(),(t.hideCompleted||t.deadline)&&(this.displayedTodos=this.displayedTodos.filter(function(e){return a._applyFilters(e,t)})),t.byDate&&(t.ascending&&this.displayedTodos.sort(function(e,t){return new Date(e.deadline)-new Date(t.deadline)}),t.descending&&this.displayedTodos.sort(function(e,t){return new Date(t.deadline)-new Date(e.deadline)})),t.byAlphabetical&&(t.ascending&&this.displayedTodos.sort(function(e,t){return e.title.toUpperCase()<t.title.toUpperCase()?-1:e.title.toUpperCase()>t.title.toUpperCase()?1:0}),t.descending&&this.displayedTodos.sort(function(e,t){return e.title.toUpperCase()>t.title.toUpperCase()?-1:e.title.toUpperCase()<t.title.toUpperCase()?1:0}))}catch(r){this.error=r.message}case 1:case"end":return e.stop()}},e,this)}));function t(t){return e.apply(this,arguments)}return t}(),_applyFilters:function(e,t){if(t.hideCompleted&&e.completed)return!1;if(t.deadline){if(e.deadline){var a,r,n=new Date(e.deadline);return 1==t.deadline.length?(a=t.deadline[0],r=new Date,r.setTime(a.getTime()+864e5)):(a=t.deadline[0],r=t.deadline[1]),a&&r?n>=a&&n<r:a?n>=a:n<r}return!1}return!0}},created:function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,re.getTodos();case 3:this.todos=e.sent,this.displayedTodos=this.todos.slice(),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),this.error=e.t0.message;case 10:case"end":return e.stop()}},e,this,[[0,7]])}));function t(){return e.apply(this,arguments)}return t}()},ie=ne,oe=(a("8bb2"),Object(p["a"])(ie,k,D,!1,null,"0d6823b1",null)),se=oe.exports,de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("h1",[e._v("hello")])},ce=[],le={name:"Profile"},ue=le,pe=Object(p["a"])(ue,de,ce,!1,null,"373e2eeb",null),he=pe.exports;r["a"].use(y["a"]);var fe=new y["a"]({routes:[{path:"/",name:"home",component:se,meta:{requiresAuth:!0}},{path:"/profile",name:"profile",component:he,meta:{requiresAuth:!0}},{path:"/login",name:"login",component:function(){return a.e("about").then(a.bind(null,"a55b"))}},{path:"/register",name:"register",component:function(){return a.e("about").then(a.bind(null,"73cf"))}}]});fe.beforeEach(function(){var e=Object(d["a"])(regeneratorRuntime.mark(function e(t,a,r){var n;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(!t.matched.some(function(e){return e.meta.requiresAuth})){e.next=14;break}return e.prev=1,e.next=4,c["a"].authenticateUser();case 4:r(),e.next=12;break;case 7:e.prev=7,e.t0=e["catch"](1),n=localStorage.getItem("username"),n&&localStorage.removeItem("username"),r({path:"/login",query:{redirect:t.fullPath}});case 12:e.next=15;break;case 14:r();case 15:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t,a,r){return e.apply(this,arguments)}}());var me=fe,ve=a("9483");Object(ve["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),r["a"].config.productionTip=!1,new r["a"]({router:me,render:function(e){return e(g)}}).$mount("#app")},"64a9":function(e,t,a){},6959:function(e,t,a){"use strict";var r=a("e074"),n=a.n(r);n.a},"69f8":function(e,t,a){"use strict";var r=a("b56c"),n=a.n(r);n.a},"88cf":function(e,t,a){"use strict";var r=a("cd7a"),n=a.n(r);n.a},"8bb2":function(e,t,a){"use strict";var r=a("e5c7"),n=a.n(r);n.a},b56c:function(e,t,a){},cd7a:function(e,t,a){},e074:function(e,t,a){},e5c7:function(e,t,a){},faa9:function(e,t,a){}});
//# sourceMappingURL=app.1ac2b20a.js.map