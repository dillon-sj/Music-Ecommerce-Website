


const userN = localStorage.getItem("name");
const userE = localStorage.getItem("email");
const total = (localStorage.getItem("totalPrice"));
window.onbeforeunload = function() {
  localStorage.clear();
};

// this is to display the stored data from prev html
document.getElementById('total_value').innerHTML = total;
document.getElementById('userName').value = userN;
document.getElementById('userEmail').value = userE;

// validate if the required forms are filled

const require = document.getElementsByClassName("required")
var form = document.getElementById("main_form");

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  let allFilled = true;
  for(let i = 0; i < require.length; i++) {

    if (require[i].value == '') {
      allFilled = false;
      document.getElementById("submit_btn").disabled=true;
    }else{
      document.getElementById("submit_btn").disabled=false;

    }
  };
  
  if (allFilled) {
    alert('Your order has been placed.');
    window.location.href = "shop.html";

  } else {
    alert('Please fill in all details.');
  }
});







const edit_button = document.getElementById('edit_shipping_details')

edit_button.addEventListener('click', function(){
    document.getElementById('address_correct').innerHTML = "";
    var classes = document.getElementById('change_visibility').classList;
    classes.remove("notvisible");
    var button_classes = edit_button.classList;
    button_classes.add("disabled_button");
    edit_button.disabled = true;
});

var shipping_info = document.getElementById('confirm_btn');

shipping_info.addEventListener('click', function(){
    var address1 = document.getElementById('address_1').value;

    var town = document.getElementById('town').value;

    var postcode = document.getElementById('postalcode').value;
    var country = document.getElementById('country').value;
    if (address1.length === 0 || town.length === 0 || postcode.length === 0){
        var error_holder = document.getElementById('error_message')
        error_holder.innerHTML = "Please fill the required fields!";
        address_valid = false;
        setTimeout(function(){
            error_holder.innerHTML = "";
        },5000);
    } else{
        var classes = document.getElementById('change_visibility').classList;
        classes.add('notvisible');
        edit_button.disabled = false;
        var button_classes = edit_button.classList;
        button_classes.remove('disabled_button');
        document.getElementById('billing_address').innerHTML = address1 + ", " + town + ", " + country + ", " + postcode + ".";

        address_valid = true;
    }
});




// validate
let contact_is_valid1 = false; 
let contact_filled1 = document.getElementById("Contact_no_1");
contact_filled1.addEventListener('change',function(){
  let contact_value1 = contact_filled1.value;
  contact_is_valid1 = contact_value1.length == 10 ? true : false;
  contact_filled1.style.borderColor = contact_is_valid1 ? "green" : "red";
});

let contact_is_valid2 = false; 
let contact_filled2 = document.getElementById("Contact_no_2");
contact_filled2.addEventListener('change',function(){
  let contact_value2 = contact_filled2.value;
  contact_is_valid2 = contact_value2.length == 10 ? true : false;
  contact_filled2.style.borderColor = contact_is_valid2 ? "green" : "red";
});

let card_num_is_valid = false; 
let card_num_filled = document.getElementById("card_num");
card_num_filled.addEventListener('change',function(){
  let card_num_value = card_num_filled.value;
  card_num_is_valid= card_num_value.length == 10 ? true : false;
  card_num_filled.style.borderColor = card_num_is_valid ? "green" : "red";
});

let cvv_num_is_valid = false; 
let cvv_num_filled = document.getElementById("cvv_num");
cvv_num_filled.addEventListener('change',function(){
  let cvv_num_value = cvv_num_filled.value;
  cvv_num_is_valid= cvv_num_value.length == 3 ? true : false;
  cvv_num_filled.style.borderColor = cvv_num_is_valid ? "green" : "red";
});