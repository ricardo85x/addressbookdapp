(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2722:function(e,r,n){"use strict";n.r(r),n.d(r,{default:function(){return C}});var t=n(5893),o=n(4096),a=n(8017),i=n(809),c=n.n(i),s=n(2447),l=n(51),d=n(336),u=n(3637),f=n(7093),x=n(8420),h=n(4115),p=n(9808),m=n(7294),j=n(6893),w=n(4537),g=n(9249),v=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Error",n=e.data;if(console.log(e),n){var t=e.data,o=t.message,a=t.data.name;if(o&&"RuntimeError"==a){var i=o.replace(/.*:\s+revert /,"");return i}}return r},b=function(){var e=(0,w.l)(),r=e.addressBookContract,n=e.addresses,i=(0,m.useRef)(null),b=(0,m.useRef)(null),k=function(){var e=(0,s.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r&&i&&b&&(p.UJ(b.current.value)?i.current.value?r.addAddress(b.current.value,i.current.value).then((function(){return g.Am.info("New contact added, waiting for confirmation")})).catch((function(e){g.Am.error(v(e,"Error on creating new contact"))})):g.Am.error("Alias cannot be blank"):g.Am.error("Invalid address"));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=(0,s.Z)(c().mark((function e(n){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r&&r.removeAddress(n).then((function(){return g.Am.info("Address removed, waiting for confirmation")})).catch((function(e){return g.Am.error(v(e,"Error on creating new contact"))}));case 1:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}();return(0,t.jsxs)(l.Kq,{w:"100%",maxW:900,direction:"column",spacing:"5",align:"start",py:"2",pr:"10",m:"5",children:[(0,t.jsx)(d.X,{children:"My Addresses"}),(0,t.jsxs)(l.Kq,{spacing:"2",direction:["column","row"],children:[(0,t.jsx)(u.I,{ref:i,placeholder:"Alias",type:"text"}),(0,t.jsx)(u.I,{ref:b,placeholder:"Address",type:"text"}),r&&(0,t.jsx)(f.z,{onClick:k,px:"8",colorScheme:"teal",children:"Add"})]}),n.map((function(e,r){return(0,t.jsxs)(o.k,{backgroundColor:r%2===0?"inherit":"teal.50",filter:r%2===0?"inherit":"brightness(95%)",px:4,py:1,borderRadius:5,align:"center",justify:"space-between",direction:"row",children:[(0,t.jsx)(o.k,{mr:"2",w:"35px",align:"flex-start",justify:"center",children:(0,t.jsx)(x.h,{onClick:function(){return A(e.address)},size:"sm",p:"0","aria-label":"Delete",colorScheme:"none",fontSize:"25px",color:"teal.600",icon:(0,t.jsx)(j.Ybf,{})})}),(0,t.jsxs)(a.xu,{align:"start",justify:"center",children:[(0,t.jsx)(h.x,{fontWeight:"medium",children:e.alias}),(0,t.jsxs)(o.k,{align:"center",children:[(0,t.jsx)(h.x,{wordBreak:"break-all",fontSize:"14",children:e.address}),(0,t.jsx)(x.h,{onClick:function(){return r=e.address,void navigator.clipboard.writeText(r);var r},size:"sm",p:"0","aria-label":"Copy address to clipboard",colorScheme:"none",borderRadius:5,fontSize:"18px",color:"teal.600",_hover:{color:"teal.900"},icon:(0,t.jsx)(j.C3L,{})})]})]})]},e.address)}))]})},k=n(58),A=n(9583),y=function(){var e=(0,w.l)(),r=e.accounts,n=e.handleConnect;return(0,t.jsx)(a.xu,{maxW:1050,w:"100%",bgGradient:"linear(to-bl, teal.600, teal.700)",borderTopRadius:"10",mt:"2",p:"4",align:"center",justify:"center",children:(0,t.jsxs)(o.k,{align:"center",justify:"space-between",maxW:900,w:"100%",color:"white",flexWrap:"wrap",children:[(0,t.jsxs)(o.k,{flexWrap:"wrap",align:"center",gridGap:2,children:[" ",(0,t.jsx)(d.X,{children:"Address Book"})," ",(0,t.jsx)(k.J,{color:"green.400",w:30,h:30,"aria-label":"Leaf ",as:A.SRP})]}),(0,t.jsx)(f.z,{onClick:n,colorScheme:"none",variant:"outline",_hover:{backgroundColor:"teal.500"},children:r.length?"0x...".concat(r[0].substr(-4)):"Connect"})]})})};function C(){return(0,t.jsxs)(o.k,{direction:"column",p:5,w:"100%",maxW:1400,align:"center",justify:"flex-start",children:[(0,t.jsx)(y,{}),(0,t.jsx)(a.xu,{w:"100%",maxW:1050,minH:400,border:"2px",borderColor:"teal.600",borderBottomRadius:"10px",borderTop:"none",align:"center",children:(0,t.jsx)(b,{})})]})}},5301:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2722)}])}},function(e){e.O(0,[445,64,774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);