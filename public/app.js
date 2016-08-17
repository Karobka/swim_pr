

//function that displays records from the array
function displayItem(item) {
    $(".swimr_list").children().remove();
    for (index in item){
        $('.swimr_list').append(
                '<li class="swimr_record" value=' + item[index].swimrId + '>' + 
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

$(document).ready(function(){

//Auto get records on page load
$.ajax('/getitems').done(displayItem);



//Form Submit
$(".add_record").submit(function(event){
    event.preventDefault();
    var newname = $(".swimr_name").val();
    $.post('/addswimr/' + newname)
        .done(displayItem);

    $(".swimr_list").children().remove();
    $(".swimr_name").val("");
});

//Item DELETE
$("ul").on("click", "li", function(){
    var tempid = $(this).attr("value");
    console.log("you clicked an item with id " + tempid);
    $.ajax({
        url: "/swimrdel/" + tempid,
        type: "DELETE"
    }).done(displayItem);
});


});
