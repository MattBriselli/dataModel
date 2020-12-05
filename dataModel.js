

var auth_code = ""

var client_id = "34XDHISCG4KCLR2EDHNCYYOTW1JZXDRKZK0GFJS4WLTLYGGL"
var client_secret = "UFSSWKKMXN0FH32K1XL3LX12QKHJMNSOHKTKHA5KNESFIXFZ"

var redirect_uri = "https://github.com/MattBriselli"
var get_auth_url = "https://foursquare.com/oauth2/authenticate?client_id="
    + client_id + "&response_type=code&redirect_uri=" + redirect_uri
var get_check_in_url = "https://api.foursquare.com/v2/users/USER_ID/checkins?client_id="
 + client_id + "&client_secret=" + client_secret

function fetchData() {
    console.log("hello")
    
    if (auth_code == "") {
        fetchAuth()
    } else {
        fetchCheckIns()
    }


}


function fetchAuth() {

    var xhr = new XMLHttpRequest();
    xhr.open("GET", get_auth_url, true);
    xhr.onload = function () {
        console.log(xhr.responseText);
    };
    xhr.send();

    // $.ajax({
    //     headers: { "Accept": "application/json"},
    //     crossDomain: true,
    //     beforeSend: function(xhr){
    //         xhr.withCredentials = true;
    //     },
    //     url: get_auth_url,
    //     success: function( data ) {
    //         // Code for handling API response
    //         console.log(data);
    //     },
    //     error: function(jqXHR, textStatus, errorThrown) {
    //         // Code for handling errors
    //     }
    // });
}

function fetchCheckIns() {
    $.ajax({
        headers: { "Accept": "application/json"},
        crossDomain: true,
        beforeSend: function(xhr){
            xhr.withCredentials = true;
        },
        url: get_check_in_url,
        success: function( data ) {
            // Code for handling API response
            console.log(data);
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Code for handling errors
        }
    });
}