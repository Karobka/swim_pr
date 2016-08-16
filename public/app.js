
//function getItems(callMeBack) {}



//function that generates unique id nums
function make_id() {
    var item_id = 1;
    return function(){
        return item_id++;
    }
}
var update_id = make_id();

//function that displays records from the array
function displayItem(item) {
    for (index in item.swim_history){
        $('.results_list').append(
                '<li class="event_record" value=' + update_id() + '>' + 
                    item.swim_history[index].swimrName + ' ' +
                    item.swim_history[index].itemDate + ' ' +
                    item.swim_history[index].itemName + ' ' +
                    item.swim_history[index].itemDistance + ' meters ' +
                    item.swim_history[index].itemStroke + ' ' +
                    item.swim_history[index].finishTime + ' ' +
                    item.swim_history[index].ranking + 
                '</li>'
            );
    }
}

/**function getdisplayItems() {
    getItems(displayItem);
} */



/** loop through the array
for (var i = 0; i != clickidthingy; i++){
    swim_history.splic(clickidthingy, 1);
    break;
}
 */

$.ajax('/getitems').done(displayItem);

    //$(function() {getdisplayItems();});


    $(".add_record").submit(function(event){
        event.preventDefault();
        var newname = $(".swimr_name").val();
        $.post('/recitems/add/' + newname)
            .done(displayItem);

        
        $(".results_list").children().remove();
        
        //getdisplayItems();
    });
    $(".event_record").on("click", function(){
            var index = MOCK_STATS.swim_history.indexOf($(this).text());
            alert(index);
    });


