

//function that displays records from the array
function displayItem(item) {
    for (index in item){
        $('.results_list').append(
                '<li class="event_record" value=' + item.swimrId + '>' + 
                    item[index].swimrName + ' ' +
                    /**item.swim_history[index].itemDate + ' ' +
                    item.swim_history[index].itemName + ' ' +
                    item.swim_history[index].itemDistance + ' meters ' +
                    item.swim_history[index].itemStroke + ' ' +
                    item.swim_history[index].finishTime + ' ' +
                    item.swim_history[index].ranking +  */
                '</li>'
            );
    }
}

function retrieveItems(callbackFn) {
    $.ajax('/getitems').done(callbackFn());
    }

function getdisplayItems() {
    retrieveItems(displayItem);
}



//Auto get records on page load
$.ajax('/getitems').done(displayItem);


//Form Submit
$(".add_record").submit(function(event){
    event.preventDefault();
    var newname = $(".swimr_name").val();
    $.post('/addswimr/' + newname)
        .done(displayItem);

    $(".results_list").children().remove();
    $(".swimr_name").val("");
});

$(".event_record").on("click", function(){
    var index = MOCK_STATS.swim_history.indexOf($(this).text());
    alert(index);
});


