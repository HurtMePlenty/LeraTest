<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<title>Расписание занятий</title>
		<link rel="stylesheet" href="/resources/css/style.css">
		<script src="<c:url value="http://code.jquery.com/jquery-1.8.3.js" />"></script>
		<script src="<c:url value="/resources/js/teacherScheduleRequest.js?v123" />"></script>
		<script src="<c:url value="/resources/js/showTeacherSchedule.js?160" />"></script>
	</head>
	<body>

	<div class ="container" id = "main">
		<div class="week_selector">
			<form>
				<input class="weeks" type="submit" value="предыдущая неделя"/>
				<input class="weeks" type="submit" value="следующая неделя"/>
			</form>
		</div>
		<div class="container" align="center" id="schedule">

		</div>
	</div>

	</body>
</html>