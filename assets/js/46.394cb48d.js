(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{371:function(s,n,a){"use strict";a.r(n);var e=a(4),t=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"【js】分片上传视频"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#【js】分片上传视频"}},[s._v("#")]),s._v(" 【JS】分片上传视频")]),s._v(" "),n("p",[s._v("需求分析:上传视频文件并以1M分片的形式上传，且在线浏览\n"),n("a",{attrs:{name:"HfPzk"}})]),s._v(" "),n("h3",{attrs:{id:"后台文档"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#后台文档"}},[s._v("#")]),s._v(" 后台文档")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("let formData = new FormData()\nformData.append('bucket', 'xyzyw') // 保存视频的容器\nformData.append('object', this[type].video_object) // 视频的文件名\nformData.append('position', this[type].video_position) // 切片下标\nformData.append('file', chunk[0], this[type].video_fileName) // 切片源\nthis.$http.post('//api.ysb.cn/oss/Upload/appendFrom', formData,\n\t{headers: {'content-type': 'multipart/form-data'}}\n).then(res => {\n\tif (res.data.code == 1) {\n\t\tthis[type].video_position = res.data.data // 修改切片下标\n\t\tthis[type].video_chunk    = chunk.slice(1) // 删除刚上传的切片\n\t\tthis.videoSliceUpload(type) // 切片上传\n\t} else {\n\t\tthis.setProgress(false, 0) // 还原进度条\n\t\tthis.$message.error('上传视频失败')\n\t}\n})\n\n\n视频域名：https://image.ysb.cn/\n视频路径：sns/video/\n完整的视频路径：https://image.ysb.cn/sns/video/视频名称.mp4\n")])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br")])]),n("p",[n("a",{attrs:{name:"8Kuwj"}})]),s._v(" "),n("h3",{attrs:{id:"前端代码"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#前端代码"}},[s._v("#")]),s._v(" 前端代码")]),s._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v('<template>\n    <div id="app">\n        <div class="album albumvideo">\n            <div>\n                <p class="type_title" style="margin:100px auto;">\n                    <span>上传视频到服务器</span>\n                </p>\n                <div class="pic_img">\n                    <div class="pic_img_box">\n                        <el-upload class="avatar-uploader" action="#" :http-request=\'aaafile\' :on-progress="uploadVideoProcess" :on-success="handleVideoSuccess" :before-upload="beforeUploadVideo" :show-file-list="true" >\n                            <video v-if="videoForm.showVideoPath !=\'\' && !videoFlag" v-bind:src="videoForm.showVideoPath" class="avatar video-avatar" controls="controls">\n                                您的浏览器不支持视频播放\n                            </video>\n                            <i v-else-if="videoForm.showVideoPath ==\'\' && !videoFlag" >\n                                <el-button slot="trigger" size="small" type="primary">选取文件上传</el-button>\n                            </i>\n                            <el-progress v-if="videoFlag == true" type="circle" v-bind:percentage="videoUploadPercent" style="margin-top:7px; "></el-progress>\n                        </el-upload>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</template>\n<style lang="css" scoped>\nvideo{\n    width: 300px;\n}\n</style>\n<script>\n// import OSS from \'ali-oss\'\n// let ossConfig = {\n//     accessKeyId: "yourid",\n//     accessKeySecret: "yourkey",\n//     bucket: "**",\n//     region: "**"\n// };\n    export default {\n        data() {\n            return {\n                smdx:null,\n                videoFlag: false,\n                //是否显示进度条\n                videoUploadPercent: "",\n                //进度条的进度，\n                isShowUploadVideo: false,\n                //显示上传按钮\n                videoForm: {\n                    showVideoPath: \'\'\n                },\n                //创建一个字段\n                aa:0\n            }\n        },\n        methods: {\n            async aaafile(e){\n                var d1 = new Date();\n                let file = this.smdx; //上传文件主体\n                console.log(file)\n                let name = \'sns/video/\'+file.name, //文件名 加上时间戳\n                size = file.size, //总大小\n                succeed = 0, //当前上传数\n                shardSize = 1 * 1024 * 1024, //以1MB为一个分片\n                shardCount = Math.ceil(size / shardSize); //总片数\n\n                let attr = [];\n                try {\n                    for (let item = 0; item < shardCount; ++item) {\n                        await this.fn(item,shardSize,size,name,shardCount,file,succeed); //同步\n                        // attr.push(fn(item)); //异步\n                    }\n                    await Promise.all(attr); //异步\n                    console.log(\' 上传成功\');\n                    var d2 = new Date();\n                    console.log(parseInt(d2 - d1) / 1000);\n                } catch (err) {\n                    console.log(err);\n                }\n            },\n            fn(item,shardSize,size,name,shardCount,file,succeed){\n                 return new Promise((resolve, reject) => {\n                    var i = item;\n                    console.log(i);//分片下标\n                    var start = i * shardSize, //当前分片开始下标\n                    end = Math.min(size, start + shardSize); //结束下标\n\n                    //构造一个表单，FormData是HTML5新增的\n                    var formData = new FormData();\n                    formData.append(\'bucket\', \'xyzyw\') // 保存视频的容器\n                    formData.append("file", file.slice(start, end) , name.split(\',\')[0]); //slice方法用于切出文件的一部分\n                    formData.append("object", name); //文件名字\n                    // formData.append("total", shardCount); //总片数\n                    formData.append("position", this.aa); //当前片数 回调上一个的值\n                    //Ajax提交\n                    let config = {\n                    headers: { "Content-Type": "multipart/form-data" }\n                     };\n                    this.$axios.post( "http://api.ysb.cn/oss/Upload/appendFrom",formData,config\n                    ).then(data=>{\n                            ++succeed;\n                            if (typeof (data) == \'string\') {\n                                try {\n                                    data = JSON.parse(data);\n                                    console.log(data.msg);\n                                } catch (e) {\n                                    console.log(data);\n                                }\n                            }\n                            //生成当前进度百分比\n                            var jd = `${Math.round(succeed / shardCount * 100)}%`;\n                            console.log(jd);\n                            /*如果是线上，去掉定时，直接callback()，\n                            这样写是为方便，本地测试看到进度条变化\n                            因为本地做上传测试是秒传，没有时间等待*/\n                            this.aa = data.data.data;\n                            setTimeout(resolve, 50);\n                    })\n                })\n            },\n            //上传前回调\n            beforeUploadVideo(file) {\n                console.log(file)\n                var fileSize = file.size / 1024 / 1024 < 500;\n                if ([\'video/mp4\', \'video/ogg\', \'video/flv\', \'video/avi\', \'video/wmv\', \'video/rmvb\', \'video/mov\'].indexOf(file.type) == -1) {\n                    layer.msg("请上传正确的视频格式");\n                    return false;\n                }\n                if (!fileSize) {\n                    layer.msg("视频大小不能超过500MB");\n                    return false;\n                }\n                this.smdx = file;\n                this.isShowUploadVideo = false;\n            },\n            //回调上一个视频信息\n            //进度条\n            uploadVideoProcess(event, file, fileList) {\n                this.videoFlag = true;\n                this.videoUploadPercent = file.percentage.toFixed(0) * 1;\n            },\n            //上传成功回调\n            handleVideoSuccess(res, file) {\n                this.isShowUploadVideo = true;\n                this.videoFlag = false;\n                this.videoUploadPercent = 0;\n                \n                // 前台上传地址\n                if (file.status == \'success\' ) {\n                    this.videoForm.showVideoPath = \'https://image.ysb.cn/sns/video/\'+file.name;\n                    alert("上传成功")\n                } else {\n                    alert("上传失败，请重新上传");\n                }\n\n                //后台上传地址\n                // if (res.data.code == 0) {\n                //     this.videoForm.showVideoPath = res.Data;\n                // } else {\n                //     layer.msg(res.Message);\n                // }\n                // if(res.data.code == 1){\n                //     this.i = res.data.data\n                //     this.aaafile(file)\n                // }else{\n                //     layer.msg(res.Message)\n                // }\n            }\n        }\n    }\n<\/script>\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br"),n("span",{staticClass:"line-number"},[s._v("41")]),n("br"),n("span",{staticClass:"line-number"},[s._v("42")]),n("br"),n("span",{staticClass:"line-number"},[s._v("43")]),n("br"),n("span",{staticClass:"line-number"},[s._v("44")]),n("br"),n("span",{staticClass:"line-number"},[s._v("45")]),n("br"),n("span",{staticClass:"line-number"},[s._v("46")]),n("br"),n("span",{staticClass:"line-number"},[s._v("47")]),n("br"),n("span",{staticClass:"line-number"},[s._v("48")]),n("br"),n("span",{staticClass:"line-number"},[s._v("49")]),n("br"),n("span",{staticClass:"line-number"},[s._v("50")]),n("br"),n("span",{staticClass:"line-number"},[s._v("51")]),n("br"),n("span",{staticClass:"line-number"},[s._v("52")]),n("br"),n("span",{staticClass:"line-number"},[s._v("53")]),n("br"),n("span",{staticClass:"line-number"},[s._v("54")]),n("br"),n("span",{staticClass:"line-number"},[s._v("55")]),n("br"),n("span",{staticClass:"line-number"},[s._v("56")]),n("br"),n("span",{staticClass:"line-number"},[s._v("57")]),n("br"),n("span",{staticClass:"line-number"},[s._v("58")]),n("br"),n("span",{staticClass:"line-number"},[s._v("59")]),n("br"),n("span",{staticClass:"line-number"},[s._v("60")]),n("br"),n("span",{staticClass:"line-number"},[s._v("61")]),n("br"),n("span",{staticClass:"line-number"},[s._v("62")]),n("br"),n("span",{staticClass:"line-number"},[s._v("63")]),n("br"),n("span",{staticClass:"line-number"},[s._v("64")]),n("br"),n("span",{staticClass:"line-number"},[s._v("65")]),n("br"),n("span",{staticClass:"line-number"},[s._v("66")]),n("br"),n("span",{staticClass:"line-number"},[s._v("67")]),n("br"),n("span",{staticClass:"line-number"},[s._v("68")]),n("br"),n("span",{staticClass:"line-number"},[s._v("69")]),n("br"),n("span",{staticClass:"line-number"},[s._v("70")]),n("br"),n("span",{staticClass:"line-number"},[s._v("71")]),n("br"),n("span",{staticClass:"line-number"},[s._v("72")]),n("br"),n("span",{staticClass:"line-number"},[s._v("73")]),n("br"),n("span",{staticClass:"line-number"},[s._v("74")]),n("br"),n("span",{staticClass:"line-number"},[s._v("75")]),n("br"),n("span",{staticClass:"line-number"},[s._v("76")]),n("br"),n("span",{staticClass:"line-number"},[s._v("77")]),n("br"),n("span",{staticClass:"line-number"},[s._v("78")]),n("br"),n("span",{staticClass:"line-number"},[s._v("79")]),n("br"),n("span",{staticClass:"line-number"},[s._v("80")]),n("br"),n("span",{staticClass:"line-number"},[s._v("81")]),n("br"),n("span",{staticClass:"line-number"},[s._v("82")]),n("br"),n("span",{staticClass:"line-number"},[s._v("83")]),n("br"),n("span",{staticClass:"line-number"},[s._v("84")]),n("br"),n("span",{staticClass:"line-number"},[s._v("85")]),n("br"),n("span",{staticClass:"line-number"},[s._v("86")]),n("br"),n("span",{staticClass:"line-number"},[s._v("87")]),n("br"),n("span",{staticClass:"line-number"},[s._v("88")]),n("br"),n("span",{staticClass:"line-number"},[s._v("89")]),n("br"),n("span",{staticClass:"line-number"},[s._v("90")]),n("br"),n("span",{staticClass:"line-number"},[s._v("91")]),n("br"),n("span",{staticClass:"line-number"},[s._v("92")]),n("br"),n("span",{staticClass:"line-number"},[s._v("93")]),n("br"),n("span",{staticClass:"line-number"},[s._v("94")]),n("br"),n("span",{staticClass:"line-number"},[s._v("95")]),n("br"),n("span",{staticClass:"line-number"},[s._v("96")]),n("br"),n("span",{staticClass:"line-number"},[s._v("97")]),n("br"),n("span",{staticClass:"line-number"},[s._v("98")]),n("br"),n("span",{staticClass:"line-number"},[s._v("99")]),n("br"),n("span",{staticClass:"line-number"},[s._v("100")]),n("br"),n("span",{staticClass:"line-number"},[s._v("101")]),n("br"),n("span",{staticClass:"line-number"},[s._v("102")]),n("br"),n("span",{staticClass:"line-number"},[s._v("103")]),n("br"),n("span",{staticClass:"line-number"},[s._v("104")]),n("br"),n("span",{staticClass:"line-number"},[s._v("105")]),n("br"),n("span",{staticClass:"line-number"},[s._v("106")]),n("br"),n("span",{staticClass:"line-number"},[s._v("107")]),n("br"),n("span",{staticClass:"line-number"},[s._v("108")]),n("br"),n("span",{staticClass:"line-number"},[s._v("109")]),n("br"),n("span",{staticClass:"line-number"},[s._v("110")]),n("br"),n("span",{staticClass:"line-number"},[s._v("111")]),n("br"),n("span",{staticClass:"line-number"},[s._v("112")]),n("br"),n("span",{staticClass:"line-number"},[s._v("113")]),n("br"),n("span",{staticClass:"line-number"},[s._v("114")]),n("br"),n("span",{staticClass:"line-number"},[s._v("115")]),n("br"),n("span",{staticClass:"line-number"},[s._v("116")]),n("br"),n("span",{staticClass:"line-number"},[s._v("117")]),n("br"),n("span",{staticClass:"line-number"},[s._v("118")]),n("br"),n("span",{staticClass:"line-number"},[s._v("119")]),n("br"),n("span",{staticClass:"line-number"},[s._v("120")]),n("br"),n("span",{staticClass:"line-number"},[s._v("121")]),n("br"),n("span",{staticClass:"line-number"},[s._v("122")]),n("br"),n("span",{staticClass:"line-number"},[s._v("123")]),n("br"),n("span",{staticClass:"line-number"},[s._v("124")]),n("br"),n("span",{staticClass:"line-number"},[s._v("125")]),n("br"),n("span",{staticClass:"line-number"},[s._v("126")]),n("br"),n("span",{staticClass:"line-number"},[s._v("127")]),n("br"),n("span",{staticClass:"line-number"},[s._v("128")]),n("br"),n("span",{staticClass:"line-number"},[s._v("129")]),n("br"),n("span",{staticClass:"line-number"},[s._v("130")]),n("br"),n("span",{staticClass:"line-number"},[s._v("131")]),n("br"),n("span",{staticClass:"line-number"},[s._v("132")]),n("br"),n("span",{staticClass:"line-number"},[s._v("133")]),n("br"),n("span",{staticClass:"line-number"},[s._v("134")]),n("br"),n("span",{staticClass:"line-number"},[s._v("135")]),n("br"),n("span",{staticClass:"line-number"},[s._v("136")]),n("br"),n("span",{staticClass:"line-number"},[s._v("137")]),n("br"),n("span",{staticClass:"line-number"},[s._v("138")]),n("br"),n("span",{staticClass:"line-number"},[s._v("139")]),n("br"),n("span",{staticClass:"line-number"},[s._v("140")]),n("br"),n("span",{staticClass:"line-number"},[s._v("141")]),n("br"),n("span",{staticClass:"line-number"},[s._v("142")]),n("br"),n("span",{staticClass:"line-number"},[s._v("143")]),n("br"),n("span",{staticClass:"line-number"},[s._v("144")]),n("br"),n("span",{staticClass:"line-number"},[s._v("145")]),n("br"),n("span",{staticClass:"line-number"},[s._v("146")]),n("br"),n("span",{staticClass:"line-number"},[s._v("147")]),n("br"),n("span",{staticClass:"line-number"},[s._v("148")]),n("br"),n("span",{staticClass:"line-number"},[s._v("149")]),n("br"),n("span",{staticClass:"line-number"},[s._v("150")]),n("br"),n("span",{staticClass:"line-number"},[s._v("151")]),n("br"),n("span",{staticClass:"line-number"},[s._v("152")]),n("br"),n("span",{staticClass:"line-number"},[s._v("153")]),n("br"),n("span",{staticClass:"line-number"},[s._v("154")]),n("br"),n("span",{staticClass:"line-number"},[s._v("155")]),n("br"),n("span",{staticClass:"line-number"},[s._v("156")]),n("br"),n("span",{staticClass:"line-number"},[s._v("157")]),n("br"),n("span",{staticClass:"line-number"},[s._v("158")]),n("br"),n("span",{staticClass:"line-number"},[s._v("159")]),n("br"),n("span",{staticClass:"line-number"},[s._v("160")]),n("br"),n("span",{staticClass:"line-number"},[s._v("161")]),n("br"),n("span",{staticClass:"line-number"},[s._v("162")]),n("br"),n("span",{staticClass:"line-number"},[s._v("163")]),n("br"),n("span",{staticClass:"line-number"},[s._v("164")]),n("br"),n("span",{staticClass:"line-number"},[s._v("165")]),n("br"),n("span",{staticClass:"line-number"},[s._v("166")]),n("br"),n("span",{staticClass:"line-number"},[s._v("167")]),n("br"),n("span",{staticClass:"line-number"},[s._v("168")]),n("br"),n("span",{staticClass:"line-number"},[s._v("169")]),n("br"),n("span",{staticClass:"line-number"},[s._v("170")]),n("br")])])])}),[],!1,null,null,null);n.default=t.exports}}]);