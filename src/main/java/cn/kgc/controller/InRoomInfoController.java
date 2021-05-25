package cn.kgc.controller;

import cn.kgc.domain.InRoomInfo;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequestMapping("inroominfo")
public class InRoomInfoController extends BaseController<InRoomInfo> {
}
