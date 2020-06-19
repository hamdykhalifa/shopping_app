Stripe.setPublishableKey("");

var $form = $("#checkout-form");

$form.submit(function (event) {
  $("#charge-error").addClass("hidden");
  $form.find("button").prop("disabled", true);
  Stripe.card.createToken(
    {
      number: $("#cc-number").val(),
      cvv: $("#cc-cvv").val(),
      exp: $("#cc-expiration").val(),
      name: $("#cc-name").val(),
    },
    stripeResponseHandler
  );
  return false;
});

function stripeResponseHandler(status, response) {
  if (response.error) {
    $("#charge-error").text(response.error.message);
    $("#charge-error").removeClass("hidden");
    $form.find("button").prop("disabled", false);
  } else {
    var token = response.id;

    $form.append($('<input type="hidden" name="stripeToken" />').val(token));
    $form.get(0).submit();
  }
}
