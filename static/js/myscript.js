/***************************** Authentication Actions  ******************************/
$("#loginbtn").on("click", function(){
    var user = $("#username").val();
    var password = $("#password").val();
    var nextURL = $("#nextURL").val();

    $("#loader").html('<img src="/static/images/loader.gif">');

    $.post("/login", {username: user, password: password}, function (response) {

      $("#loader").html('');
      var response = JSON.parse(response);

      if (response.success) {
        window.location.href = nextURL;
      }
      else {
         $("#loader").html('<p class="alert alert-danger">Invalid username/password</p>');
      }
    });
});


$("#logoutbtn").on("click", function(){

    $.post("/logout", {action: 'logout'}, function (response) {

      window.location.href = "index.php";

    });
});


/***************************** Gallery Actions  ******************************/
// Add Gallery Action
$("#addGallerybtn").on("click", function(){
    var galleryName = $("#galleryName").val();

    if(galleryName != "") {
      $("#loader").html('<img src="/static/images/loader.gif">');

      $.when($.post("/galleries/add", {galleryName: galleryName}).done(function(response){
            $("#loader").html('');
            var response = JSON.parse(response);

            if (response.success) {
                location.reload();
            }
            else {
              console.log("Error Adding Gallery");
              location.reload();
            }
        }));
    }
});

// Delete Gallery Action
$(document).on("click", '#deleteGallerybtn', function(){
//$("#deleteGallerybtn").on("click", function(){
    var galleryName = $(this).data("galleryname");

    if(galleryName != "") {
      $("#loader").html('<img src="/static/images/loader.gif">');

      $.when($.post("/galleries/delete", {galleryName: galleryName}).done(function(response){
            $("#loader").html('');
            var response = JSON.parse(response);
            console.log(response);

            if (response.success) {
                location.reload();
            }
            else {
              console.log("Error deleting Gallery");
              location.reload();
            }
        }));
    }
});


// Edit Gallery Action
$(document).on("click", '#editGallerybtn', function(){
    var galleryName = $(this).data("name");
    $("#oldGalleryName").val(galleryName);
});

// Edit Gallery Modal Action
$("#editGalleryModalBtn").on("click", function(){
    var newName = $("#newGalleryName").val();
    var galleryName = $("#oldGalleryName").val();

    if(galleryName != "") {
      $("#loader").html('<img src="/static/images/loader.gif">');

      $.when($.post("/galleries/edit", {galleryName: galleryName, newName: newName}).done(function(response){
            $("#loader").html('');
            var response = JSON.parse(response);

            if (response.success) {
                location.reload();
            }
            else {
              console.log("Error renaming Gallery");
              location.reload();
            }
        }));
    }
});



/***************************** Photos Actions  ******************************/
// Delete Photo Action
$(document).on("click", '#deletePhotobtn', function(){
//$("#deletePhotobtn").on("click", function(){
    var galleryName = $(this).data("galleryname");
    var photoName = $(this).data("photoname");

    if(galleryName != "") {

       $.when($.post("/galleries/album/photos/delete", {galleryName: galleryName, photoName: photoName}).done(function (response) {
            var response = JSON.parse(response);

            if (response.success) {
                location.reload();
            }
            else {
              console.log("Error Deleting Photo");
              location.reload();
            }
      }));
    }
});


$(document).on("click", '#popImage', function(){
    var imgSrc = $(this).data("imgsrc");
    $('#imagepreview').attr('src', imgSrc);
    $('#imagemodal').modal('show');
});

// $('#popImage').on('click', function() {
// 			$('.imagepreview').attr('src', $(this).find('img').attr('src'));
// 			$('#imagemodal').modal('show');
// 		});