var config = {
  apiKey: "AIzaSyDAVC-BKshrGrAuKZi2Vgb-HmWoPLMaFyI",
  authDomain: "iplproject-b8289.firebaseapp.com",
  databaseURL: "https://iplproject-b8289.firebaseio.com",
  storageBucket: "iplproject-b8289.appspot.com",
  messagingSenderId: "8966197487"
};
//Initialize  app
firebase.initializeApp(config);

function putFirstContent() {
  var ref =firebase.database().ref();

  ref.on('value',function(data){
    var carDOM = "";
  $.each(data.val(),function(key,value){

carDOM+='<span> <div  class="card col-lg-4">\
<div class="flipWrapper">\
<div class="card">\
<div class="face front">\
<img class="card-img-toped" src="'+value.team_img_url+'" alt="Card image cap">\
</div><div class="face back" style="background-image: url('+value.team_logo+');">\
<h4 class="card-title"><strong>Team Name:</strong>'+value.team_name+'</h4>\
<h4 class="card-title"><strong>Team coach:</strong>'+value.team_coach+'</h4>\
<h4 class="card-title"><strong>Team captain:</strong>'+value.team_captain+'</h4>\
<h4 class="card-title"><strong>Team home venue:</strong>'+value.team_home_venue+'</h4>\
<h4 class="card-title"><strong>Team owener:</strong>'+value.team_owner+'</h4>\
</div></div></div>\
      <a class="value.id" href="#team/'+value.id+'"><h4 class="TeamName">*'+value.team_name+'*</h4></a>\
  </div></span>';
  });
  // display and flip team information
  $(".mycontent").append(carDOM);
  $(document).ready(function () {
    $('.flipWrapper').click(function () {
        $(this).find('.card').toggleClass('flipped');
        return false;
    });
  });
  });
}

    function putTeamContent(id) {

    const ref =firebase.database().ref();// Get a reference to the root of the Database

      ref.on('value',function(data){
        var carDOM1 = "";
      $.each(data.val()[id].team_players,function(key,value){//get all team player

    carDOM1+=' <div class="card col-lg-3" >\
      <img class="card-img-top" src="'+value.player_img_url+'" alt="Card image cap" data-toggle="modal" data-target="#'+key+'">\
      <h4 class="pname">'+value.player_name+'</h4>\
      <div class="modal fade" id="'+key+'" role="dialog">\
  <div class="modal-dialog">\
  <div class="modal-content">\
     <div class="modal-header">\
       <button type="button" class="close" data-dismiss="modal">&times;</button>\
        <h4 class="plname"><strong>Name:</strong>'+value.player_name+'</h4>\
     </div>\
      <div class="modal-body">\
      <h4 class="card-title"><strong>Role:</strong>'+value.player_role+'</h4>\
      <h4 class="card-title"><strong>Batting Style:</strong>'+value.player_batting_style+'</h4>\
      <h4 class="card-title"><strong>Date Of Birth:</strong>'+value.player_dob+'</h4>\
      <h4 class="card-title"><strong>player bowling style:</strong>'+value.player_bowling_style+'</h4>\
      <h4 class="card-title"><strong>player nationality:</strong>'+value.player_nationality+'</h4>\
     </div></div></div></div></div> ';
      });
      $(".mycontent").append(carDOM1);
      });
    }
