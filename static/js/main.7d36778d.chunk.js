(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){e.exports=n(19)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),s=n(6),l=n(1),i=n(2),u=n(4),d=n(3),m=(n(15),n(16),n(5)),p=(n(17),n(7)),h=n.n(p),f=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={title:"",status:""},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(m.a)({},a,r))},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.selectUser,a=e.userId,o=e.changeStatus,c=this.state,s=c.title,l=c.status,i=t;switch(s&&(i=t.filter((function(e){return e.title&&e.title.toLocaleLowerCase().includes(s.toLocaleLowerCase())}))),l){case"Active":i=i.filter((function(e){return null!==e.completed&&!e.completed}));break;case"Completed":i=i.filter((function(e){return e.completed}))}return r.a.createElement("div",{className:"TodoList"},r.a.createElement("h2",null,"Todos:"),r.a.createElement("label",{htmlFor:"input-todo"},r.a.createElement("input",{id:"input-todo",name:"title",placeholder:"search todo",value:s,onChange:this.handleChange})),r.a.createElement("select",{name:"status",value:l,onChange:this.handleChange},r.a.createElement("option",{value:""},"All"),r.a.createElement("option",{value:"Active"},"Active"),r.a.createElement("option",{value:"Completed"},"Completed")),r.a.createElement("div",{className:"TodoList__list-container"},r.a.createElement("ul",{className:"TodoList__list"},i.map((function(e){return r.a.createElement("li",{key:e.id,className:h()("TodoList__item",{"TodoList__item--unchecked":!e.completed,"TodoList__item--checked":e.completed})},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",checked:e.completed,onChange:function(){return o(e.id)},readOnly:!0}),r.a.createElement("p",null,e.title)),r.a.createElement("button",{type:"button",className:h()("TodoList__user-button","button",{"TodoList__user-button--selected":e.userId===a}),onClick:function(){n(e.userId)}},"User\xa0#",e.userId))})))))}}]),n}(r.a.Component),v="https://mate-api.herokuapp.com";function E(e){return fetch("".concat(v,"/users/").concat(e)).then((function(e){return e.json()}))}n(18);var _=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={user:null,loading:!1,error:!1},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.props.userId;this.setState({loading:!0}),E(t).then((function(t){e.setState({user:t.data,loading:!1})})).catch((function(){return e.setState({loading:!1,error:!0})}))}},{key:"componentDidUpdate",value:function(e){var t=this,n=this.props.userId;e.userId!==n&&(this.setState({loading:!0,error:!1}),E(n).then((function(e){t.setState({user:e.data,loading:!1})})).catch((function(){return t.setState({loading:!1,error:!0})})))}},{key:"render",value:function(){var e=this.state,t=e.user,n=e.loading,a=e.error,o=this.props,c=o.userId,s=o.clearUser;return n?r.a.createElement("p",null,"Waiting"):a?r.a.createElement("p",null,"Something went wrong"):t?r.a.createElement("div",{className:"CurrentUser"},r.a.createElement("h2",{className:"CurrentUser__title"},r.a.createElement("span",null,"Selected user: ".concat(c))),r.a.createElement("h3",{className:"CurrentUser__name"},t.name),r.a.createElement("p",{className:"CurrentUser__email"},t.email),r.a.createElement("p",{className:"CurrentUser__phone"},t.phone),r.a.createElement("button",{type:"button",className:"button TodoList__user-button--selected",onClick:s},"Clear")):r.a.createElement("p",null,"No user info")}}]),n}(r.a.Component),b=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={todos:[],selectedUserId:0},e.selectUser=function(t){e.setState({selectedUserId:t})},e.clearUser=function(){e.setState({selectedUserId:0})},e.changeTodoStatus=function(t){e.setState((function(e){return{todos:e.todos.map((function(e){return t!==e.id?e:Object(s.a)(Object(s.a)({},e),{},{completed:!e.completed})}))}}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("".concat(v,"/todos")).then((function(e){return e.json()})).then((function(t){e.setState({todos:t.data})}))}},{key:"render",value:function(){var e=this.state,t=e.todos,n=e.selectedUserId;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"App__sidebar"},r.a.createElement(f,{todos:t,selectUser:this.selectUser,userId:n,changeStatus:this.changeTodoStatus})),r.a.createElement("div",{className:"App__content"},r.a.createElement("div",{className:"App__content-container"},n?r.a.createElement(_,{userId:n,clearUser:this.clearUser}):"No user selected")))}}]),n}(r.a.Component);c.a.render(r.a.createElement(b,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.7d36778d.chunk.js.map