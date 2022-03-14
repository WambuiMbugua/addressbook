// business logic
function Contact(firstName, lastName) {
  this.first = firstName;
  this.last = lastName;
}

Contact.prototype.fullName = function () {
  return this.first + " " + this.last;
};

// user interface logic

$(document).ready(function () {
  $("form#new-contact").submit(function (event) {
    event.preventDefault();
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();

    var newContact = new Contact(inputtedFirstName, inputtedLastName);

    $("ul#contacts").append(
      "<li><span class='contact'>" + newContact.fullName() + "</span></li>"
    );

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");

    $(".contact")
      .last()
      .click(function () {
        $("#show-contact").show();
        $("#show-contact h4").text(newContact.firstName);
        $(".first-name").text(newContact.first);
        $(".last-name").text(newContact.last);
      });
  });
});
