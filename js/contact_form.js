$(function() {
  $("#contactForm").validate({
  submitHandler: function(form) {
    $.ajax({
      url: "//formspree.io/janeheatherdee@gmail.com",
      method: "POST",
      data: {
        name: $(form).find("input[name='name']").val(),
        _replyto: $(form).find("input[name='_replyto']").val(),
        phone: $(form).find("input[name='phone']").val(),
        message: $(form).find("textarea[name='message']").val()
      },
      dataType: "json",
      success: function() {
        $("#submit-success").fadeIn();
        $("#contactForm").fadeOut();
      },
      error: function() {
        $("#submit-errors").fadeIn();
      }
    });
  }
});
})