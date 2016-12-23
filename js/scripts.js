var ticketBase = 10.0;

function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

Ticket.prototype.calculatePrice = function() {
  return (ticketBase * this.movie * this.time * this.age).toFixed(2);
}

$(document).ready(function() {
  $("form#ticket").submit(function(event) {
    event.preventDefault();
    var submittedMovie = parseFloat($("#movie").val());
    var submittedTime = parseFloat($("#time").val());
    var submittedAge = parseFloat($("#age").val());

    var newTicket = new Ticket(submittedMovie, submittedTime, submittedAge);
    var ticketPrice = newTicket.calculatePrice();

    $("#ticket-price").text("$" + ticketPrice);
    $(".result").show();
  })
})
