import com.springtest.Models.Teacher;
import com.springtest.repositories.GroupRepository;
import com.springtest.repositories.TeacherRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration("file:src/main/webapp/WEB-INF/spring-servlet.xml")
public class MyTest {

    @Autowired
    private TeacherRepository teacherRepository;
    @Autowired
    private GroupRepository groupRepository;

    @Test
    public void test(){
        List<Teacher> teacherList = teacherRepository.findAll();
        int a = 1;
    }

    @Test
    public void test2(){
        Teacher teacher = new Teacher();
        teacher.setFirstName("wert");
        teacherRepository.save(teacher);
        int a = 1;
    }

    @Test
    public void test3(){
        String id = "2580";
        Teacher te = teacherRepository.findTeacherByPolytechId(id).orElse(null);
        int a = 4;
    }
}
