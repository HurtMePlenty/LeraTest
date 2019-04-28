<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="/resources/css/style.css">
    <title>Меню</title>
</head>
<body>

<div class="container">
    <h2 align="center" style="margin-top: 2em;">${teacher.lastName} ${teacher.firstName}</h2>
    <div align="center">
        <br/>
        <form method="get" action="/menu/schedule?teacherId=${teacher.id}">
            <input class="btn btn-success" type="submit" value="Расписание"/>
        </form>
        <br/>

        <a href="/menu/groups?teacherId=${teacher.id}">
            <input class="btn btn-success" type="button" value="Группы"/>
        </a>

        <br/>
        <form>
            <input class="btn btn-success" type="submit" value="Выход"/>
        </form>
    </div>
</div>
</body>
</html>