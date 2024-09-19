let arr = [
    {
        "Status" : "past",
        "Name" : "Event1"
    },
    {
        "Status" : "past",
        "Name" : "Event2"
    },
    {
        "Status" : "past",
        "Name" : "Event3"
    },
    {
        "Status" : "past",
        "Name" : "Event4"
    },
    {
        "Status" :"present",
        "Name" : "Event5"
    }
];

for(let i = 0; i < arr.length; i++){
    if(arr[i].Status == "past"){
        console.log(arr[i].Name);
    }
}



