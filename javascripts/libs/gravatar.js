jQuery(function(){
  var gravatarImage = jQuery('img.gravatar'),
      email         = jQuery(gravatarImage).data('gravatar');
  if (email) {
    jQuery(gravatarImage).attr({src: "http://www.gravatar.com/avatar/" + CryptoJS.MD5(email) + "?s=250"}).removeAttr('data-gravatar');
  };
});