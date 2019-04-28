<%@ page import="com.springtest.Models.Student" %>
<%@ page import="com.springtest.Models.Group" %><%--
  Created by IntelliJ IDEA.
  User: Лера
  Date: 12.04.2019
  Time: 20:30
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Группа</title>
    <link rel="stylesheet" href="/resources/css/style.css">
    <script src="http://code.jquery.com/jquery-1.8.3.js"></script>

    <script>
        var teacherId = "${teacherId}";
    </script>

    <script src="/resources/js/renderLib.js?v134"></script>
    <script src="/resources/js/showAttendance.js?v135"></script>
</head>
<body>

<div class="container">
    <div class="container return-back-link" align="left">
        <small id="return">Вернуться</small>
    </div>

    <h2 id="article_header" align="left">Группа ${group.groupNumber} ${group.course}</h2>
    <small id="prev_dates">Прошлые даты</small>
    <small id="next_dates" style="margin-left: 0.3em">Будущие даты</small>
    <h3 id="group_id" style="display: none"> ${group.id}</h3>
    <table id="users_table" class="table">
        <thead>
        <tr id="table_head" align="center">
            <td>Дата</td>
        </tr>
        </thead>
        <tbody>
        <tr align="center" id="is_checked">
            <td></td>
        </tr>
        <%
            Group students = (Group) request.getAttribute("group");
            int i = 0;
            for (Student student : students.getStudents()) {
                String name = student.getFullName();
                String id = "std_" + i;
                i++;
        %>
        <tr id='<%=id%>' align="center">
            <td><%=name%>
            </td>
        </tr>
        <%}%>
        <tr align="center" id="buttons">
            <td></td>
        </tr>
        </tbody>
    </table>
</div>
</body>
