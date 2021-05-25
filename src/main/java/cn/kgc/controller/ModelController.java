package cn.kgc.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * @ClassName ModelController
 * @Description TODO  专门用于视图跳转的控制器
 * @Author zhaojing
 * @Date 2021/4/28 16:26
 * @Version 1.0
 */
@Controller
@RequestMapping("model")
public class ModelController {

    //跳转到显示员工和部门页面
    @RequestMapping("showEmpUI")
    public String showEmpUI(){
        return "home";
    }
    @RequestMapping("toshowInfoRoomInfo")
    public String toshowInfoRoomInfo(){
        return "inRoomInfo/showInRoomInfo";
    }
}


