(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{389:function(s,n,t){"use strict";t.r(n);var i=t(4),a=Object(i.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"【js】点击按钮实现列表上下移"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#【js】点击按钮实现列表上下移"}},[s._v("#")]),s._v(" 【JS】点击按钮实现列表上下移")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("<el-button type='info' size='mini' plain @click=\"up(scope.$index,scope.row)\">上移</el-button>\n<el-button type='info' size='mini'  plain @click=\"down(scope.$index,scope.row)\" >下移</el-button>\n\n      //上移\n      // up(index,row){\n      //   if(index === 0){\n      //     this.$message({\n      //       message:'已到达顶部',\n      //       type:'warning'\n      //     })\n      //     return false\n      //   }else{\n      //     //实现数据库处理 改变row数据\n      //     //\n      //     let sort = index \n      //     let sign = this.thinklist[index].sign\n\n      //     runQuery(`UPDATE [combination] SET [sort]='${sort}' WHERE [sign]='${sign}'`,false).then(res=>{})\n      //     let sort1 = index + 1\n      //     let sign1 = this.thinklist[index-1].sign\n          \n      //     runQuery(`UPDATE [combination] SET [sort]='${sort1}' WHERE [sign]='${sign1}'`,false).then(res=>{})\n      //     this.getData()\n      //   }\n      //   this.getData()\n      // },\n      //下移\n      // down(index,row){\n      //   if(index === (this.thinklist.length-1)){\n      //     this.$message({\n      //       message:'已到达底部',\n      //       type:'warning'\n      //     })\n      //   return false\n      // }else{\n      //     let sort = index + 2\n      //     let sign = this.thinklist[index].sign\n\n      //     runQuery(`UPDATE [combination] SET [sort]='${sort}' WHERE [sign]='${sign}'`,false).then(res=>{})\n      //     let sort1 = index + 1 //3\n      //     let sign1 = this.thinklist[index + 1 ].sign\n          \n      //     runQuery(`UPDATE [combination] SET [sort]='${sort1}' WHERE [sign]='${sign1}'`,false).then(res=>{})\n      //     // console.log(`UPDATE [combination] SET [sort]='${row.sort}' WHERE [sign]='${row.sign}'`)\n      //     // console.log(\n      //     // `UPDATE [combination] SET [sort]='${this.thinklist[index+1].sort}' WHERE [sign]='${this.thinklist[index+1].sign}'`)\n      //     this.getData()\n      //   }\n      //   this.getData()\n      // },\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br")])])])}),[],!1,null,null,null);n.default=a.exports}}]);