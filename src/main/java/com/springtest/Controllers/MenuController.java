package com.springtest.Controllers;

import com.springtest.Models.Group;
import com.springtest.Models.Teacher;
import com.springtest.Services.GroupService;
import com.springtest.Services.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/menu")
public class MenuController {

    private TeacherService teacherService;
    private GroupService groupService;

    @Autowired
    public MenuController(TeacherService teacherService, GroupService groupService) {
        this.teacherService = teacherService;
        this.groupService = groupService;
    }

    @RequestMapping(value = "/schedule", method = RequestMethod.GET)
    public String showSchedulePage() {
        return "schedule";
    }

    @RequestMapping(value = "/groups", method = RequestMethod.GET)
    public String showGroups(Model model, HttpServletRequest request, String teacherId) {

        Teacher teacher = teacherService.findById(teacherId);
        model.addAttribute("groups", teacher.getGroups());
        model.addAttribute("teacherId", teacherId);

        return "groups";
    }

    @RequestMapping(value = "/showGroup", method = RequestMethod.GET)
    public String showGroup(Model model, HttpServletRequest request, String groupId, String teacherId) {
        Group group = groupService.findByPolitechId(groupId);
        model.addAttribute("group", group);
        model.addAttribute("teacherId", teacherId);
        return "group";
    }

    @RequestMapping(value = {"/", ""}, method = RequestMethod.GET)
    public String showUserProfile(Model model, HttpServletRequest request, String teacherId) {
        Teacher teacher = teacherService.findByPolytechId(teacherId);
        model.addAttribute("teacher", teacher);
        return "menu";
    }
}