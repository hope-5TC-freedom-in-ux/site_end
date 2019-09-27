let set_messages = ( msg => {
    document.getElementById('time_msg').innerHTML = msg.time_msg;
    document.getElementById('privacy_msg').innerHTML = msg.privacy_msg;}
)

let set_values = ( msg => {
    document.getElementById('time_circle').innerHTML = msg.time;
    document.getElementById('privacy_circle').innerHTML = msg.privacy;}
)

$.ajax({
    url: '/api/v0.1/messages/final',
    type:"GET",
    success: (result => {set_messages(result); set_values(result);}),
    error:function(error){console.log(`Error ${error}`)}
})
