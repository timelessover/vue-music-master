webpackJsonp([6],{"6dV7":function(t,a){},az1L:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i("aA9S"),e=i.n(s),n=i("cQcd");var o=i("G3uJ"),l=i("+ZRt"),m=i("NxGh"),c=i("nh2a"),r={components:{PageHeader:l.a,Loading:m.a,SongList:c.a},data:function(){return{albuminfo:{},selected:"songlist"}},watch:{$route:function(t,a){this._getAlbumData()}},created:function(){this._getAlbumData()},methods:{_getAlbumData:function(){var t,a,i=this,s=this.$route.params.id;(t=s,a={albummid:t,uin:0,format:"json",inCharset:"utf-8",outCharset:"utf-8",notice:0,platform:"h5",needNewCode:1},Object(n.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_album_info_cp.fcg",a,{param:"jsonpCallback"})).then(function(t){var a=t.data,s=t.data.desc.replace(/\n/g,"<br>"),n={img:"https://y.gtimg.cn/music/photo_new/T002R150x150M000"+a.mid+".jpg?max_age=2592000",singerimg:"https://y.gtimg.cn/music/photo_new/T001R150x150M000"+a.singermid+".jpg?max_age=2592000",publishData:a.aDate,desc:s,name:a.name,singername:a.singername,singermid:a.singermid,otherAlbums:a.otherAlbums,songlist:[]};a.list.forEach(function(t){n.songlist.push(Object(o.a)(t))}),i.albuminfo=e()({},n)})},goTo:function(t,a){var i="/"+t+"/"+a;this.$router.push(i)}}},u={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("transition",{attrs:{name:"slide"}},[i("div",{staticClass:"album"},[i("div",{staticClass:"album-header"},[i("div",{staticClass:"album-box-bd"},[i("page-header",{attrs:{title:"专辑"}}),t._v(" "),i("div",{staticClass:"album-info"},[i("div",{staticClass:"media-img"},[i("img",{attrs:{src:t.albuminfo.img}})]),t._v(" "),i("div",{staticClass:"media-text"},[i("h2",[t._v(t._s(t.albuminfo.name))]),t._v(" "),i("div",{on:{click:function(a){t.goTo("singerlist/singer",t.albuminfo.singermid)}}},[i("img",{attrs:{src:t.albuminfo.singerimg}}),t._v("\n\t\t\t\t\t\t\t"+t._s(t.albuminfo.singername)+"\n\t\t\t\t\t\t")]),t._v(" "),i("p",[t._v("发行时间："+t._s(t.albuminfo.publishData))])])])],1),t._v(" "),i("img",{staticClass:"album-box-bg",attrs:{src:t.albuminfo.img}})]),t._v(" "),i("div",{staticClass:"navbar"},[i("mt-navbar",{model:{value:t.selected,callback:function(a){t.selected=a},expression:"selected"}},[i("mt-tab-item",{attrs:{id:"songlist"}},[t._v("专辑歌曲")]),t._v(" "),i("mt-tab-item",{attrs:{id:"description"}},[t._v("专辑简介")])],1)],1),t._v(" "),i("div",{staticClass:"main"},[i("mt-tab-container",{model:{value:t.selected,callback:function(a){t.selected=a},expression:"selected"}},[i("mt-tab-container-item",{attrs:{id:"songlist"}},[i("song-list",{attrs:{songlist:t.albuminfo.songlist,isShowIndex:!0}}),t._v(" "),i("h2",[t._v("歌手其他专辑")]),t._v(" "),i("ul",{staticClass:"otherAlbums"},t._l(t.albuminfo.otherAlbums,function(a,s){return i("li",{key:s,on:{click:function(i){t.goTo("album",a.albumMid)}}},[i("div",{staticClass:"media-img"},[i("img",{attrs:{src:"https://y.gtimg.cn/music/photo_new/T002R150x150M000"+a.albumMid+".jpg?max_age=2592000"}})]),t._v(" "),i("div",{staticClass:"media-text"},[i("h3",[t._v(t._s(a.title))]),t._v(" "),i("p",[t._v(t._s(a.pubDate))])])])}))],1),t._v(" "),i("mt-tab-container-item",{attrs:{id:"description"}},[i("div",{staticClass:"description"},[i("h2",[t._v("专辑简介")]),t._v(" "),i("p",{domProps:{innerHTML:t._s(t.albuminfo.desc)}})])])],1)],1)])])},staticRenderFns:[]};var d=i("vSla")(r,u,!1,function(t){i("6dV7")},"data-v-bbf787a4",null);a.default=d.exports}});
//# sourceMappingURL=6.3a40f88c49638128905f.js.map