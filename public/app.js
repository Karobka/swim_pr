//Some mock data to figure out what the app needs
var MOCK_STATS = {
    "swim_history": [
        {
            itemId: 11111,
            swimrId: "1j2k3l4",
            swimrName: "Billy",
            itemDate: "2015-02-15",
            itemType: "swim meet",
            itemName: "Winter Swim Meet",
            itemStroke: "backstroke",
            itemDistance: 100,
            finishTime: "01:02.45",
            ranking: "First"
        },
        {
            itemId: 22222,
            swimrId: "1j2k3l4",
            swimrName: "Billy",
            itemDate: "2015-10-22",
            itemType: "practice",
            itemName: "Backstroke practice",
            itemStroke: "backstroke",
            itemDistance: 200,
            finishTime: "01:02.05",
            ranking: null
        },
        {
            itemId: 33333,
            swimrId: "2aej3k4l5",
            swimrName: "Sue",
            itemDate: "2015-04-15",
            itemType: "swim_meet",
            itemName: "Regional Swim Meet",
            itemStroke: "butterfly",
            itemDistance: 150,
            finishTime: "01:02.07",
            ranking: "Fourth"
        },
        {
            itemId: 44444,
            swimrId: "3z4x5c6v",
            swimrName: "Krazy Karl",
            itemDate: "2015-10-22",
            itemType: "practice",
            itemName: "Butterfly practice",
            itemStroke: "butterfly",
            itemDistance: 150,
            finishTime: "01:12.33",
            ranking: null
        },
    ]
};


function getItems(callMeBack) {
    setTimeout(function(){ callMeBack(MOCK_STATS)}, 200);
}
//function that generates unique id nums
function make_id() {
    var item_id = 1;
    return function(){
        return item_id++;
    }
}
var update_id = make_id();

//function that displays objects from the array
function displayItem(item) {
    for (index in item.swim_history){
        
        $('.results_list').append(
                '<li class="event_record" value=' + update_id() + '>' + item.swim_history[index].swimrName + ' ' +
                    item.swim_history[index].itemDate + ' ' +
                    item.swim_history[index].itemName + ' ' +
                    item.swim_history[index].itemDistance + ' meter ' +
                    item.swim_history[index].itemStroke + ' ' +
                    item.swim_history[index].finishTime + ' ' +
                    item.swim_history[index].ranking + '</li>'
            );
    }
}

function getdisplayItems() {
    getItems(displayItem);
}


/** loop through the array
for (var i = 0; i != clickidthingy; i++){
    swim_history.splic(clickidthingy, 1);
    break;
}
 */

$(document).ready(function(){
    $(function() {getdisplayItems();});
    $(".add_record").submit(function(event){
        event.preventDefault();
        $(".results_list").children().remove();
        MOCK_STATS.swim_history.push(
            { itemId: update_id(), 
            swimrName: $(".swimr_name").val(),
            itemDate: $(".item_date").val(),
            itemType: null,
            itemName: $(".item_name").val(),
            itemStroke: $(".item_stroke").val(),
            itemDistance: $(".item_distance").val(),
            finishTime: null,
            ranking: null
            }
        );
        getdisplayItems();
        console.log(MOCK_STATS);
    });
    $(".event_record").on("click", function(){
            var index = MOCK_STATS.swim_history.indexOf($(this).text());
            alert(index);
    });
});

