function addColToRow($row_label, id, text) {

    $("<td>", {
        id: id,
        text: text
    }).appendTo($row_label);
}

function addJoinedEmptyCols($row_label, amountOfCols) {
    $row_label.append('<td colspan=amountOfCols></td>');
}

function createInvisibleButton(id_, value, type, class_) {
    return $('<input>', {
        id: id_,
        value: value,
        type: type,
        class: class_,
        style: "display: none"
    });
}

function createInvisibleSelect(id_) {
    var $select = $('<select>', {
        id: id_,
        style: "display: none"
    });

    $("<option>н</option>" +
        "<option>+</option>" +
        "<option>2</option>" +
        "<option>3</option>" +
        "<option>4</option>" +
        "<option>5</option>", {}).appendTo($select);

    return $select;
}

function createInvisibleDiv(id_) {
    return $('<div>', {
        id: id_,
        style: "display: none"
    });

}