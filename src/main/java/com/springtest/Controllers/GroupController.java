package com.springtest.Controllers;

import com.springtest.Models.Group;
import com.springtest.Services.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping("/group")
public class GroupController {

    @Autowired
    GroupService groupService;

    @RequestMapping(value = "/findById", method = RequestMethod.POST)
    public @ResponseBody
    Group findGroup(@RequestBody String id) {
        Group group = groupService.findById(id.trim());
        return group;
    }

    @RequestMapping(value = "/findByPolyId", method = RequestMethod.POST)
    public @ResponseBody
    Group findGroupByPolyId(@RequestBody String id) {
        Group group = groupService.findByPolitechId(id.trim());
        return group;
    }

    @RequestMapping(value = "/updateGroupInfo", method = RequestMethod.POST)
    public @ResponseBody
    int updateGroupInfo(@RequestBody Group group) {
        groupService.save(group);
        return 1;
    }

    @RequestMapping(value = "/groupWorks", method = RequestMethod.GET)
    public String showGroupWorks() {
        return "groupWorks";
    }
}
