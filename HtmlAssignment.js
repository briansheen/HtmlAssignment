
window.onload = function() {
  //alert("window loaded");
  document.querySelector('form').onsubmit = function() {
    var name = $("#usernameId").val();
    if (name) {
      return true;
    } else {
      alert("no name found");
      return false;
    }
  };
};
