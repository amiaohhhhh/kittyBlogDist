(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{401:function(t,e,n){"use strict";n.r(e);var s=n(4),a=Object(s.a)({},(function(){var t=this,e=t._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"表格中input无法修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表格中input无法修改"}},[t._v("#")]),t._v(" 表格中input无法修改")]),t._v(" "),e("p",[e("a",{attrs:{href:"https://blog.csdn.net/bigbomb369/article/details/118485696",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://blog.csdn.net/bigbomb369/article/details/118485696"),e("OutboundLink")],1)]),t._v(" "),e("p",[t._v("其实此处打的问题是内容已经被修改了，但是table表格因为没有更新数据，所以看起来像是没有修改成功"),e("br"),t._v("此处可以添加给对应的input标签添加@input=“onExchange（scope.$index）”")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v('<template slot-scope="scope>\n    <el-input\n        v-model="scope.row[item.prop]"\n        @input="onExchange(scope.$index)"\n        type="text"\n    />\n</template>\n')])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br")])]),e("p",[t._v("onExchange方法的内容为")]),t._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("onExchange （index） {\n   let moment = this.tableData[index]  // 此处的tableData为自己的table表格绑定的data数组\n   this.$set(this.tableData, index, moment)  \n   // 此处是将修改的那一行的数据重新赋值给table表格对应的那一行，触发热更新。应该是这么个原理。\n }\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])])])}),[],!1,null,null,null);e.default=a.exports}}]);