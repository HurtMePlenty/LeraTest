<%--
  Created by IntelliJ IDEA.
  User: Лера
  Date: 23.03.2019
  Time: 15:04
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="s" uri="http://java.sun.com/jsp/jstl/core" %>

<html>
<head>
    <title>Группы</title>
    <link rel="stylesheet" href="/resources/css/style.css">
</head>
<body>
<div align="center" class="container">
    <h2 align="center" style="margin-top: 5em;">Группы</h2>
    <br/>
    <div align="center">
        <c:forEach items="${groups}" var="group">
            <tr>
                <a href="/menu/showGroup?groupId=${group.polytechId}&teacherId=${teacherId}">
                    <input class="btn btn-success" type="submit" value="${group.groupNumber}">
                </a>
            </tr>
        </c:forEach>
    </div>
</div>
</body>
</html>