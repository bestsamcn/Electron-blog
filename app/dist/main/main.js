!function(e){function n(r){if(o[r])return o[r].exports;var t=o[r]={i:r,l:!1,exports:{}};return e[r].call(t.exports,t,t.exports,n),t.l=!0,t.exports}var o={};n.m=e,n.c=o,n.d=function(e,o,r){n.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(o,"a",o),o},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n(n.s="3GRg")}({"1v4d":function(e,n){e.exports=require("path")},"2Esn":function(e,n){e.exports=require("electron-config")},"3GRg":function(e,n,o){"use strict";function r(e){h+=1;var n=new d.BrowserWindow(e);return n.on("close",function(){h-=1,n=null}),n}function t(){return h}function i(){var e="file://".concat(Object(x.join)(__dirname,"..","renderer"),"/index.html");return g.a.dev()&&(e="http://127.0.0.1:8000/"),e}function u(){return"fffffffffffffffff"}function l(){r({width:800,height:600}).loadURL(i())}function a(){return[{label:"MyApp",submenu:[{role:"hide"},{role:"hideothers"},{role:"unhide"},{type:"separator"},{role:"quit"}]},{label:"Edit",submenu:[{role:"undo"},{role:"redo"},{type:"separator"},{role:"cut"},{role:"copy"},{role:"paste"},{role:"selectall"}]},{label:"View",submenu:[{role:"reload"},{role:"toggledevtools"},{type:"separator"},{role:"togglefullscreen"}]},{role:"window",label:"Window",submenu:[{role:"minimize"},{role:"close"}]}]}function c(){v.a.info("(menu) init");var e=d.Menu.buildFromTemplate(a());d.Menu.setApplicationMenu(e)}Object.defineProperty(n,"__esModule",{value:!0});var f={};o.d(f,"create",function(){return r}),o.d(f,"getCount",function(){return t}),o.d(f,"getPath",function(){return i}),o.d(f,"test",function(){return u});var s={};o.d(s,"init",function(){return l});var p={};o.d(p,"default",function(){return y});var d=o("G4Vi"),m=o("jOlz"),g=o.n(m),b=o("Kdsk"),v=o.n(b),x=o("1v4d"),w=o.n(x),h=0,q=o("2Esn"),j=o.n(q),y=new j.a({name:"config"});v.a.transports.file.level="info",v.a.info("(main/index) app start"),v.a.info("(main/index) log file at ".concat(v.a.transports.file.file)),g.a.dev()&&(o("WUjU")(),o("zkGP")(process.cwd()+"/app",{electron:w.a.join(process.cwd(),"node_modules",".bin","electron.cmd")})),d.app.on("ready",function(){v.a.info("(main/index)   asdfasdf"),l(),c()}),d.app.on("window-all-closed",function(){"darwin"!==process.platform&&d.app.quit()}),d.app.on("activate",function(){0===t()&&l()}),d.app.on("quit",function(){v.a.info("(main/index) app quitt"),v.a.info("(main/index) <<<<<<<<<<<<<<<<<<<")}),global.services={application:s,window:f},global.configs={config:p}},G4Vi:function(e,n){e.exports=require("electron")},Kdsk:function(e,n){e.exports=require("electron-log")},WUjU:function(e,n){e.exports=require("electron-debug")},jOlz:function(e,n){e.exports=require("electron-is")},zkGP:function(e,n){e.exports=require("electron-reload")}});