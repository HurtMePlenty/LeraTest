/**
 * Created by Andrey on 21.04.2019.
 */

$(document).ready(function () {

    var request = getAttr();
    request.done(function () {
        var $scheduleDiv = $("#schedule");
        var i = 0;
        while(i < days.length)
        {
            generateDayDivs(i, $scheduleDiv);
            i++;
        }
        console.log(days);
        console.log("lolkek")
    });
});

function generateDayDivs(i, $scheduleDiv) {
    dayLessons = getLessonDivs(i);
    $("<div>", {
        class: "day",
        id: "day" + i.toString(),
        text: getDayName(days[i].dayNumber).toString(),
        append: dayLessons,//days[i].lessons,//getLessonDiv(i)
    }).appendTo($scheduleDiv);
}

function getDayName(dayNumber) {
    switch (dayNumber)
    {
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        case 7:
            return "Sunday"
        default:
            return "Day is undefined"
    }
}

function getLessonDivs(i) {
    var dayLessons = [];

    for(j = 0; j < days[i].dayLessons.length; j++)
    {
        var nameLesson = days[i].dayLessons[j].subject.toString() + " ";
        var typeLesson = getLessonType(i, j);
        var timeLesson = days[i].dayLessons[j].timeStart.toString() + "-" +
            days[i].dayLessons[j].timeEnd.toString();
        var lesson = $("<div>", {
            class: "lesson",
            text: typeLesson,
            text: nameLesson,
            append:$("<span>", {
                class: "time",
                text: timeLesson
            })

        });
        dayLessons.push(lesson);
    }
    return dayLessons;
}

function getLessonType(i, j){
    switch (days[i].dayLessons[j].type)
    {
        case "0":
            return "Практика ";
        case "2":
            return "Лекция "
    }
}