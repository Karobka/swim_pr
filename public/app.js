//Some mock data to figure out what the app needs
var MOCK_STATS = {
    "swim_history": [
        {
            itemId: 11111,
            swimrId: "1j2k3l4",
            swimrName: "Billy",
            itemDate: "01/20/2015",
            itemType: "swim meet",
            itemName: "Winter Swim Meet",
            eventStroke: "backstroke",
            eventDistance: 100,
            finishTime: "01:02.45",
            ranking: "First"
        },
        {
            itemId: 22222,
            swimrId: "1j2k3l4",
            swimrName: "Billy",
            itemDate: "01/24/2015",
            itemType: "practice",
            itemName: "Backstroke practice",
            eventStroke: "backstroke",
            eventDistance: 200,
            finishTime: "01:02.05",
            ranking: null
        },
        {
            itemId: 33333,
            swimrId: "2aej3k4l5",
            swimrName: "Sue",
            itemDate: "04/10/2015",
            itemType: "swim_meet",
            itemName: "Regional Swim Meet",
            eventStroke: "butterfly",
            eventDistance: 150,
            finishTime: "01:02.07",
            ranking: "Fourth"
        },
        {
            itemId: 44444,
            swimrId: "3z4x5c6v",
            swimrName: "Krazy Karl",
            itemDate: "04/10/2015",
            itemType: "practice",
            itemName: "Butterfly practice",
            eventStroke: "butterfly",
            eventDistance: 150,
            finishTime: "01:12.33",
            ranking: "Fourth"
        },
    ]
};

function getItems(callMeBack) {
    setTimeout(function(){ callMeBack(MOCK_STATS)}, 200);
}

function displayItem(item) {
    for (index in item.swim_history){
        $('body').append(
            '<div>' + 
                '<p>' + item.swim_history[index].swimrName + ' ' +
                    item.swim_history[index].itemDate + ' ' +
                    item.swim_history[index].itemType + '</p>' +
            '</div>');
    }
}

function getdisplayItems() {
    getItems(displayItem);
}

$(function() {
    getdisplayItems();
})
