(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-624bb791"],{"8adc":function(t,e,a){},"98ed":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-container",{staticClass:"centered-horizontal",staticStyle:{width:"80vw"},attrs:{flex:""}},[a("h1",[t._v(t._s(t.$t("prompt-challenge")))]),t.player1Status||t.player2Status?a("v-container",{attrs:{app:"",color:"transparent",inset:""}},[a("v-container",{staticStyle:{display:"flex","flex-direction":"column"}},[t.canceled?a("div",{staticClass:"overlay on-element"},[t._v(" "+t._s(t.$t("challenge-became-not-available"))+" ")]):t._e(),t.player1Status?a("v-container",{staticClass:"mb-0 pa-0"},[a("p",{staticStyle:{float:"left"}},[a("b",[t._v("P"),a("sub",[t._v("1")])]),t._v("："+t._s(t.player1Status.username)+" ")]),a("p",{staticStyle:{float:"right"}},[a("strong",{staticClass:"pr-2"},[a("v-icon",{attrs:{color:t.player1Status.emulator?"green":"red"}},[t._v("mdi-switch")])],1),a("strong",{staticClass:"pr-2"},[a("v-icon",{attrs:{color:"PLAYING"==t.player1Status.status?"green":"red"}},[t._v("mdi-state-machine")]),t._v(" "+t._s(t.player1Status.status)+" ")],1),a("strong",{staticClass:"pr-2"},[a("v-icon",{attrs:{color:"PLAYER1"==t.player1Status.side?"green":"red"}},[t._v("mdi-account")]),t._v(" "+t._s(t.player1Status.side)+" ")],1)])]):t._e(),t.player2Status?a("v-container",{staticClass:"mb-0 pa-0"},[a("p",{staticStyle:{float:"left"}},[a("b",[t._v("P"),a("sub",[t._v("2")])]),t._v("："+t._s(t.player2Status.username)+" ")]),a("p",{staticStyle:{float:"right"}},[a("strong",{staticClass:"pr-2"},[a("v-icon",{attrs:{color:t.player2Status.emulator?"green":"red"}},[t._v("mdi-switch")])],1),a("strong",{staticClass:"pr-2"},[a("v-icon",{attrs:{color:"PLAYING"==t.player2Status.status?"green":"red"}},[t._v("mdi-state-machine")]),t._v(" "+t._s(t.player2Status.status)+" ")],1),a("strong",{staticClass:"pr-2"},[a("v-icon",{attrs:{color:"PLAYER2"==t.player2Status.side?"green":"red"}},[t._v("mdi-account")]),t._v(" "+t._s(t.player2Status.side)+" ")],1)])]):t._e()],1),a("v-slide-group",{staticClass:"pa-2",attrs:{multiple:"","show-arrows":""}},t._l(t.spectators,(function(e){return a("v-slide-item",{key:e},[a("v-chip",{staticClass:"mx-2 text-none"},[t._v(" "+t._s(e)+" ")])],1)})),1),a("v-divider",{staticClass:"mt-0"})],1):t._e(),a("v-container",[t.canceled||this.spectating?t._e():a("v-btn",{staticClass:"pr-4",staticStyle:{width:"100%"},attrs:{color:"error"},on:{click:t.cancel_challenge}},[t._v(t._s(t.$t("challenge-cancel")))]),t.canceled?a("v-btn",{staticClass:"pr-4",staticStyle:{width:"100%","z-index":"100"},attrs:{to:"/channel/?name="+t.channel_current}},[t._v(t._s(t.$t("common-back-to",[this.channel_current])))]):t._e()],1),a("ul",{directives:[{name:"chat-scroll",rawName:"v-chat-scroll",value:{always:!1,smooth:!0},expression:"{ always: false, smooth: true }"}],staticClass:"log-view pt-0"},t._l(t.logs,(function(e){return a("li",{key:e.id,staticClass:"log-message",style:"color:"+t.logColors[e.level]},[e.islink?t._e():a("div",[t._v(" ["+t._s(e.level)+"] "+t._s(t.Utils.getDateString(e.ts))+" "+t._s(e.msg)+" ")]),e.islink&&!t.canceled?a("div",[a("v-btn",{key:t.statusUpdateKey,staticStyle:{width:"100%",height:"48px"},attrs:{disabled:t.spectating&&!t.getIsReadyForSpectating(),color:"primary"},on:{click:function(e){return t.launchPrecursor(e)}}},[t._v(" "+t._s(t.spectating&&!t.getIsReadyForSpectating()?t.$t("challenge-waiting-for-player"):t.$t("challenge-join-match"))+" ")])],1):t._e()])})),0),a("div",{staticStyle:{display:"flex"}},[a("v-text-field",{attrs:{placeholder:(t.opponent?t.$t("chat-private-message"):t.$t("chat-channel-message"))+" [Enter]"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.send(t.opponent)}},model:{value:t.chatMessage,callback:function(e){t.chatMessage=e},expression:"chatMessage"}})],1)],1),t.globalStatus.match&&t.globalStatus.match.characters?a("div",{key:t.statusUpdateKey,staticClass:"left-fixed"},[a("img",{staticClass:"portrait",staticStyle:{left:"0"},attrs:{src:"/portraits/"+this.channel_current+"/p1/"+this.globalStatus.match.characters.p1}}),a("img",{staticClass:"portrait",staticStyle:{right:"0"},attrs:{src:"/portraits/"+this.channel_current+"/p2/"+this.globalStatus.match.characters.p2}})]):t._e()],1)},l=[],n=a("5530"),c=a("b85c"),i=(a("b0c0"),a("99af"),a("4c53"),a("2f62")),o=a("57f5"),r=a("90b9"),h=a("44ae"),p={props:["challenging","challenger","spectating"],data:function(){return{logs:[],logId:0,logColors:{D:"blue",I:"green",E:"red"},chatMessage:void 0,quark:void 0,spectators:[],player1Status:{},player2Status:{},globalStatus:{},statusUpdateKey:0,canceled:!1,sub:void 0,Utils:r["a"]}},methods:{getIsReadyForSpectating:function(){return this.player1Status&&this.player2Status&&this.player1Status.emulator&&this.player2Status.emulator},getChannelObject:function(t){var e,a=Object(c["a"])(this.channels);try{for(a.s();!(e=a.n()).done;){var s=e.value;if(s.name==t)return s}}catch(l){a.e(l)}finally{a.f()}},launchPrecursor:function(t){console.log(this.channels),t.currentTarget.classList.remove("primary");var e=this.getChannelObject(this.channel_current),a="".concat(e.rom,",").concat(this.ggpo_host,":").concat(this.ggpo_port,"@").concat(this.quark);this.opponent&&(a="moscade://match,".concat(a,"/")),this.spectating&&(a="moscade://spectate,".concat(a,"/")),console.log("[CHALLENGE] Opening MOSCADE URI",a),window.open(a)},log:function(t,e){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];this.logs.push({id:this.logId++,ts:(new Date).getTime(),level:t,msg:e,islink:a})},send:function(t){var e=this;t?this.$store.dispatch(o["h"],{username:this.opponent,message:this.chatMessage}).then((function(){console.log("[CHAT] PM Sent:",e.chatMessage),e.chatMessage=""})).catch((function(t){e.showError("".concat(e.$t("chat-private-message-send-failed")," ").concat(t))})):this.$store.dispatch(o["d"],this.chatMessage).then((function(){console.log("[CHAT] Channel chat:",e.chatMessage),e.chatMessage=""}))},spectate:function(){var t=this;this.log("I",this.$t("challenge-spectate-match",[this.spectating])),this.$store.dispatch(o["n"],this.spectating).catch((function(e){t.log("E",t.$t("challenge-spectate-match-failed",[e])),t.canceled=!0}))},cancel_challenge:function(){var t=this;this.$store.dispatch(o["c"],this.opponent).then((function(){t.log("E",t.$t("challenge-canceled-by-remote")),t.canceled=!0})).catch((function(e){t.log("E",t.$t("challenge-cancel-failed",[e])),t.canceled=!0}))},send_challenge:function(){var t=this;this.log("D",this.$t("challenge-challenging-opponent",[this.opponent])),this.$store.dispatch(o["m"],this.opponent).then((function(){t.log("I",t.$t("challenge-challenge-sent"))})).catch((function(e){t.log("E",t.$t("challenge-challenging-opponent-failed",[e])),t.canceled=!0}))},accept_challenge:function(){var t=this;this.log("D",this.$t("challenge-challenge-accept-from",[this.opponent])),this.$store.dispatch(o["a"],this.opponent).catch((function(e){t.log("E",t.$t("challenge-failed-to-accept-from",[e])),t.canceled=!0}))},onload:function(){var t=this;this.log("D",this.$t("challenge-hello-message",[this.username])),this.sub||(this.sub=this.$store.subscribeAction((function(e){e.type==h["m"]&&(t.spectators=e.payload),e.type==h["o"]&&(t.quark=e.payload.quark,t.log("I",t.$t("challenge-quark-for-spectating",[e.payload.quark])),t.log("I",t.quark,!0),t.statusUpdateKey+=1),e.type!=h["d"]&&e.type!=h["g"]||t.log("I",t.$t("challenge-chat-new-message",[e.type==h["d"]?t.$t("chat-channel-message"):t.$t("chat-ingame-message"),e.payload.username,e.payload.message])),e.type==h["k"]&&t.log("I",t.$t("challenge-chat-pm",[e.payload.sender,e.payload.message])),e.type!=h["c"]&&e.type!=h["j"]&&e.type!=h["e"]||(t.log("E",t.$t("challenge-became-not-available")),"PLAYING"==t.player1Status.status||"PLAYING"==t.player2Status.status?t.log("E",t.$t("challenge-cancel-reason-client-quit")):t.log("E",t.$t("challenge-cancel-reason-unknown",[e.type])),t.canceled=!0,t.statusUpdateKey+=1),e.type==h["a"]&&(t.quark=e.payload,t.log("I",t.$t("challenge-quark-for-match",[t.quark])),t.log("I",t.quark,!0),t.statusUpdateKey+=1),e.type==h["n"]&&(t.player1Status&&(e.payload.username==t.player1Status.username||"PLAYER1"==e.payload.side)&&(t.player1Status=e.payload),t.globalStatus=e.payload,t.player2Status&&(e.payload.username==t.player2Status.username||"PLAYER2"==e.payload.side)&&(t.player2Status=e.payload),t.player1Status&&t.player2Status&&r["a"].setPageTitle(t.$t("title-challenge",[t.player1Status.username,t.player2Status.username])),t.statusUpdateKey+=1)}))),this.challenging&&this.send_challenge(),this.challenger&&this.accept_challenge(),this.spectating&&this.spectate()}},computed:Object(n["a"])(Object(n["a"])({},Object(i["c"])(["channel_current","channel_users","channels","username","connected","ggpo_host","ggpo_port"])),{},{opponent:function(){return this.challenging?this.challenging:this.challenger}}),destroy:function(){this.sub&&this.sub()},mounted:function(){r["a"].setPageTitle(this.$t("challenge-waiting-for-player")),this.connected&&this.onload()},watch:{connected:function(){this.connected&&this.onload()}}},u=p,g=a("2877"),d=a("6544"),v=a.n(d),y=a("8336"),f=a("cc20"),m=a("a523"),b=a("ce7e"),_=a("132d"),S=a("7efd"),C=a("9dbe"),$=a("8654"),k=Object(g["a"])(u,s,l,!1,null,null,null);e["default"]=k.exports;v()(k,{VBtn:y["a"],VChip:f["a"],VContainer:m["a"],VDivider:b["a"],VIcon:_["a"],VSlideGroup:S["a"],VSlideItem:C["a"],VTextField:$["a"]})},cc20:function(t,e,a){"use strict";var s=a("3835"),l=a("5530"),n=(a("4de4"),a("8adc"),a("58df")),c=a("0789"),i=a("9d26"),o=a("a9ad"),r=a("4e82"),h=a("7560"),p=a("f2e7"),u=a("1c87"),g=a("af2b"),d=a("d9bd");e["a"]=Object(n["a"])(o["a"],g["a"],u["a"],h["a"],Object(r["a"])("chipGroup"),Object(p["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(l["a"])(Object(l["a"])(Object(l["a"])(Object(l["a"])({"v-chip":!0},u["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(u["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var a=Object(s["a"])(e,2),l=a[0],n=a[1];t.$attrs.hasOwnProperty(l)&&Object(d["a"])(l,n,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(i["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(c["a"],t)},genClose:function(){var t=this;return this.$createElement(i["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],a=this.generateRouteLink(),s=a.tag,n=a.data;n.attrs=Object(l["a"])(Object(l["a"])({},n.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:n.attrs.tabindex}),n.directives.push({name:"show",value:this.active}),n=this.setBackgroundColor(this.color,n);var c=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(c,n),e)}})}}]);
//# sourceMappingURL=chunk-624bb791.331aa046.js.map