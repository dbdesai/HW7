<script>
var ChooChooTrain = new Firebase("https://dhavaltrain.firebaseio.com/");

$("#addTrain").on("click", function() {
​​   // User Input
   var TrainName = $('#TrainName').val().trim();
   var Destination = $('#Destination').val().trim();
   var FirstTrainTime = $('#FirstTrainTime').val().trim(), "HH:mm").subtract(1,"years").format("X");
   var Frequency = $('#Frequency').val().trim();
    
    //temporary object for holding train data
    var NewTrain = {
          Train:  Train,
          Destination: Destination,
          FirstTrainTime : FirstTrainTime,
          Frequency: Frequency
​}

    //uploads to FBase
    ChooChooTrain.push(NewTrain);

    $("#TrainName").val("");
    $("#Destination").val("");
    $("#FirstTrainTime").val("");
    $("#Frequency").val("");


    // No Page Reload
    return false;
            


ChooChooTrain .on("child_added", function(childSnapshot, prevChildKey){

  var TrainName = childSnapshot.val().name;
  var Destination = childSnapshot.val().Destination;
  var FirstTrainTime = childSnapshot.val().FirstTrainTime;
  var Frequency = childSnapshot.val().Frequency;


  var timeBetween = moment().diff(moment.unix(trainFirst), "minutes");

  var arrivalTime = Frequency - (timeBetween % Frequency);

  var nextTrain = moment().add(arrivalTime, "minutes").format('HH:mm');




$("#trainTable > tbody").append("<tr><td>" + TrainName + "</td><td>" + Destination + "</td><td>" + Frequency + "</td><td>" + NextArrival + "</td><td>" + MinutesAway + "</td></tr>");

​
  





















</