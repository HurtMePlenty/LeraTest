package com.springtest.Controllers;

import com.springtest.Models.Group;
import com.springtest.Models.Teacher;
import com.springtest.Services.GroupService;
import com.springtest.Services.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;

@Controller
@RequestMapping("/home")
public class HomeController {

    private TeacherService teacherService;
    private GroupService groupService;

    @Autowired
    public HomeController(TeacherService teacherService, GroupService groupService) {
        this.teacherService = teacherService;
        this.groupService = groupService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public String showStartPage() {
        return "index";
    }

    @RequestMapping(value = "/findByPolyId", method = RequestMethod.GET)
    public @ResponseBody
    Teacher findTeacher(String teacherId) {

        Teacher teacher = teacherService.findByPolytechId(teacherId);

        return teacher;
    }

    @RequestMapping(value = "/addTeacher", method = RequestMethod.POST)

    public @ResponseBody
    boolean addTeacher(@RequestBody Teacher teacher) {
        try {

            //Thread.sleep(10000);


            Boolean output = teacherService.save(teacher);
            return output;

        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @RequestMapping(value = "/addGroups", method = RequestMethod.POST)
    public @ResponseBody
    boolean addGroups(@RequestBody ArrayList<Group> groups) {
        return groupService.saveAll(groups);
    }

}
