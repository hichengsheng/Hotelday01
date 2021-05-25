layui.use(['table'],function(){
    var table = layui.table
        ,$ = layui.jquery
        ,form = layui.form
        ,layer = layui.layer
        ,laydate = layui.laydate;


    var currentPage = 1; //创建全局变量，指定当前页是第1页

    var selJSONInRoomInfo = {}; //封装了全局变量。json格式的查询条件 {}:表示空的json对象

    //初始化加载入住信息数据
    loadInRoomInfo();



    /**********************自定义的layui函数*************************/
    //封装了查询入住信息的函数
    function loadInRoomInfo(){
        //第一个实例
        table.render({
            elem: '#demo'  //表示跟表格容器的id进行绑定
            ,height: 400 //表格容器的高度
            //  默认会自动传递两个参数：?page=1&limit=30  page 代表当前页码、limit 代表每页数据量
            ,url: '/inroominfo/loadDataByParams' //数据接口, 用来访问到后端控制器中，获取数据返回 （JSON数据）
            ,page: true //开启分页
            ,width: 1600 //设定容器宽度。
            ,limits: [3,5,8,10,15,20] //自定义分页条数
            ,limit: 3  //默认每页显示3条记录
            //,where: selJSONInRoomInfo   //where : 表示查询条件,layui会把该查询条件传递到后端控制器
            ,even: true  //隔行变色效果
            ,cols: [[ //表头
                /*开启复选框*/
                {type:'checkbox', fixed: 'left'}
                ,{field: 'id', title: 'ID', align: 'center', width:80, sort: true}
                ,{field: 'roomNum', title: '房间编号', width:80, templet: '<div>{{d.rooms.roomNum}}</div>'}
                ,{field: 'roomPic', title: '封面图', width:130, sort: true, templet: '<div><img src="img/{{d.rooms.roomPic}}" alt=""></div>'}
                ,{field: 'roomTypeName', title: '房间类型', width:130,templet: '<div>{{d.rooms.roomType.roomTypeName}}</div>'}
                ,{field: 'roomPrice', title: '价格', width: 100,sort: true,templet: '<div>{{d.rooms.roomType.roomPrice}}</div>'}
                ,{field: 'customerName', title: '客人姓名', width: 100}
                ,{field: 'gender', title: '性别', width: 80,templet: '#genderTpl'}
                ,{field: 'isVip', title: 'vip', width: 80, templet: '#isVipTpl'}
                ,{field: 'idcard', title: '身份证号', width: 260}
                ,{field: 'phone', title: '手机号', width: 200}
                ,{field: 'money', title: '押金', width: 80}
                ,{field: 'createDate', title: '入住时间', width: 160}
                ,{field: 'outRoomStatus', title: '状态', width: 100, templet: '#outRoomStatusTpl'}
                /* toolbar: '#barDemo' : 关联到工具条的id */
                ,{field: 'right', title: '操作', width: 160, toolbar: '#barDemo'}
            ]]
            /*渲染完毕之后的回调函数*/
            ,done: function(res, curr, count){
                //得到当前页码
                console.log(curr);
                //给currentPage赋值
                currentPage = curr;
                //渲染完成之后，加载放大镜函数
                hoverOpenImg();
            }
        });
    }
    //监听工具条事件
    table.on('tool(test)', function (obj) { //注：tool 是工具条事件名，test 是 table 原始容器的属性 lay-filter="对应的值"
        var data = obj.data; //获得当前行数据
        var layEvent = obj.event; //获得 lay-event 对应的值（也可以是表头的 event 参数对应的值）
        var tr = obj.tr; //获得当前行 tr 的 DOM 对象（如果有的话）

        console.log("data:",data);

        if (layEvent === 'del') { //删除
            layer.confirm('真的删除此入住信息吗？', function (index) {
                //向服务端发送删除（实际是更新操作）指令
                updRoomStatus(data.id,obj);
                layer.close(index);  //关闭当前的询问框
            });
        } else if (layEvent === 'exitRoom') { //退房，暂时不用
            layer.msg("退房操作。。")
        } else if(layEvent === 'query'){
            layer.msg("查看操作");
        }
    });

    /**********************标签事件绑定************************/

    /**********************自定义函数***************************/
    //图片放大镜函数
    function hoverOpenImg(){
        var img_show = null; // tips提示
        $('td img').hover(function(){
            var img = "<img class='img_msg' src='"+$(this).attr('src')+"' style='width:230px;' />";
            img_show = layer.tips(img, this,{
                tips:[2, 'rgba(41,41,41,.5)']
                ,area: ['260px']
            });
        },function(){
            layer.close(img_show);
        });
        $('td img').attr('style','max-width:70px');
    }
    //根据入住信息的id,更新状态
    function updRoomStatus(id,obj){
        $.post(
            "/inroominfo/updT", //请求的url路径
            {"id":id, "status":"0"}, //数据
            function (data){
                if(data === 'success'){
                    layer.msg("删除成功！",{icon: 1,time:2000,anim: 1,shade:0.5});
                    obj.del(); //删除当前行
                }else{
                    layer.msg("删除失败！",{icon: 2,time:2000,anim: 2,shade:0.5});
                }
            },"text" //text : 表示后端响应的是文本
        ).error(function (){
            layer.msg("数据请求异常！",{icon: 7,time:2000,anim: 3,shade:0.5});
        })
    }

})
