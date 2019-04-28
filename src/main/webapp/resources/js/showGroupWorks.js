(function () {
        var group = {};
        var students = [];
        var works = [];

        function initWorksOfStudents() {
            for (i = 0; i < students.length; i++) {
                students[i]['works'] = [];
            }
        }

        function onAjaxSuccess(data) {
            students = data.students;
            group = data;
            initWorksOfStudents();
        }

        function ajaxToFindGroup(groupId) {
            return $.ajax({
                type: "POST",
                url: "/group/findById",
                data: groupId,
                contentType: 'application/json',
                success: onAjaxSuccess
            });
        }

        $(document).ready(function () {
            var groupId = $('#group_id').text();
            var request = ajaxToFindGroup(groupId);
            request.done(function () {
                renderStudents();
                renderRowforButton();
                renderMap();
                addListeners();
                mainRender();
            });
        });

        function renderRowforButton() {
            var $tbody = $('#tbody');
            addRow($tbody, id = "buttons");
            addColToRow($('#buttons'), id = "", text = "");
        }

        var RENDER_CAPACITY = 5;
        var works_pointer = 0;

        function renderMap() {

            var $row_work = $('#worksRow');
            var $row_checked = $('#is_checked');
            var $row_buttons = $('#buttons');

            for (i = 0; i < RENDER_CAPACITY; i++) {

                addColToRow($row_work, id = i + "_head", text = "");
                addColToRow($row_checked, id = i + "_checked", text = "");
                renderColsForStudents(identifier = i);
                addColToRow($row_buttons, id = i + "_buttonCol", text = "");
            }
        }

        function renderColsForStudents(identifier) {

            for (j = 0; j < students.length; j++) {
                var $row_marks = $('#' + j);
                var className = "cls" + identifier;

                addColToRow($row_marks, id = j + '_' + identifier, text = "");

                var $select = createInvisibleWorkSelect(id = "", class_ = className);
                var $text_field = createInvisibleDiv(id = "", class_ = className);
                var $col_for_marks = $('#' + j + '_' + identifier);

                $select.appendTo($col_for_marks);
                $text_field.appendTo($col_for_marks);
            }
        }

        function mainRender() {

            var $row_checked = $('#is_checked');
            var $row_buttons = $('#buttons');
            var identifierIndex = 0;

            if (works.length - works_pointer - 1 < RENDER_CAPACITY) {
                //clearAll();
            }

            for (w = works_pointer; w < works_pointer + RENDER_CAPACITY; w++) {

                if (works.length > 0) {

                    var $col_head = $('#' + identifierIndex + "_head");
                    var $work_col = $('#' + identifierIndex + '_checked');
                    var $col_for_button = $('#' + identifierIndex + '_buttonCol');

                    $col_head.children('div').remove();
                    addDivToCol($col_head, works[w]);

                    $('#' + identifierIndex + '_change').remove();
                    $('#' + identifierIndex + '_save').remove();

                    var $change_button = createInvisibleButton(id = identifierIndex + '_change', value = "Изменить", type = "submit", class_ = "btn btn-success", onChangeClick);
                    var $save_button = createInvisibleButton(id = identifierIndex + '_save', value = "Сохранить", type = "submit", class_ = "btn btn-success", onSaveClick);

                    $change_button.data("workIndex", w);
                    $change_button.data("classIndex", identifierIndex);
                    $save_button.data("workIndex", w);
                    $change_button.data("classIndex", identifierIndex);

                    $change_button.appendTo($col_for_button);
                    $save_button.appendTo($col_for_button);

                    if (works[w].isChecked == true) {
                        $work_col.text("Отмечено");
                        $work_col.css("color", "green");

                        $change_button.css("display", "inline");
                        $save_button.css("display", "none");

                        makeSelectsInvisible(identifierIndex);
                        makeMarksVisible(works[w].workName, identifierIndex);
                    }

                    if (works[w].isChecked == false) {
                        $work_col.text("Не отмечено");
                        $work_col.css("color", "black");

                        $change_button.css("display", "none");
                        $save_button.css("display", "inline");

                        makeMarksInvisible(identifierIndex);
                        makeSelectsVisible(identifierIndex);
                    }
                    identifierIndex++;
                }
            }
        }

        function onSaveClick() {
            var $btn = $(this);
            var workIndex = $btn.data("workIndex");
            var classIndex = $btn.data("classIndex");
            var workEntry = works[workIndex];
            var className = "cls" + classIndex;

            works[workIndex].isChecked = true;

            $('select.' + className).each(function (i, elem) {
                var work = {};
                work['workName'] = workEntry.workName;
                work['mark'] = elem.val();
                students[i].works.push(work);
            });
            mainRender();
        }

        function onChangeClick() {
            var $btn = $(this);
            var workIndex = $btn.data("workIndex");
            var classIndex = $btn.data("classIndex");
            var workEntry = works[workIndex];
            var className = "cls" + classIndex;

            $('select.' + className).each(function (i, elem) {
                var students_info = students[i].works.find(function (value) {
                    return value.workName === workEntry.workName
                });
                students_info.mark = elem.val();
            });
            mainRender();
        }

        function makeMarksVisible(workName, identifierIndex) {
            var className = "cls" + identifierIndex;
            $('div.' + className).css('display', 'inline');
            $('div.' + className).each(function (i, elem) {

                var students_info = students[i].works.find(function (value) {
                    return value.workName === workName
                });

                elem.text(students_info.mark);
            });
        }

        function makeMarksInvisible(identifierIndex) {
            var className = "cls" + identifierIndex;
            $('div.' + className).css('display', 'none');
        }

        function makeSelectsVisible(identifierIndex) {
            var className = "cls" + identifierIndex;
            $('select.' + className).css('display', 'inline');
        }

        function makeSeletsInvisible(identifierIndex) {
            var className = "cls" + identifierIndex;
            $('select.' + className).css('display', 'none');
        }

        function renderStudents() {
            for (i = 0; i < students.length; i++) {
                var $tbody = $('#tbody');
                addRow($tbody, id = i);
                addColToRow('#' + i, "", text = students[i].fullName);
            }
        }

        function addListeners() {
            $('#modalBtn').click(function () {
                $('#openModal').css("display", "block");
                $('#openModal').css("pointer-events", "auto");
            });

            $('#closeModal').click(function () {
                $('#openModal').css("display", "none");
            });

            $('#newWork').click(function () {
                onNewWork();
            });
        }

        function onNewWork() {

            $('#openModal').css("display", "none");

            var work = {};

            work['workName'] = $('#workName').val();
            work['workType'] = $('#workType').val();
            work['workDate'] = $('#workDate').val();
            work['isChecked'] = false;
            works.push(work);
            mainRender();
        }
    }

)();