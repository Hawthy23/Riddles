<!doctype html>

<html lang="en">

<head>
  <meta charset="utf-8">
  <script type="text/javascript">

    // Wait for the page to load first
    window.onload = function () {

      //Get a reference to the link on the page
      // with an id of "mylink"
      window.onclick = e => {
        console.log(e.target);  // to get the element
        document.getElementById("Riddle").innerHTML = e.target.id;  // to get the element tag name alone
      }

    }
  </script>
  <style type="text/css">
    .scrollable {
      width: 900px;
      height: 900px;
      overflow-y: scroll;
      overflow-x: scroll;
    }
    #map{
      float: left;
    }
    #information{
      float: left;
      background-color:blanchedalmond;
      width: 300px;
      height: 900px;
    }
  </style>
  <title>Ruins Riddle</title>
</head>

<body>
  <div id="map" class="scrollable">
    <img src="TempleIsland.jpg" usemap="#Image-map">
    <map name="Image-map">
      <area target="_blank" id="OpeningRiddle" title="Opening Riddle" coords="419,554,305,632" shape="rect">
      <area target="_blank" title="Kruphix" id="Nearly a victory, Quickly I pass, 
A request of the chair, I’m silver, not brass." coords="682,406,70" shape="circle">
      <area target="_blank" title="Keranos" id="
      From the sky I strike with a terrible crash. 
      seek not the sound; find the flash" coords="913,268,63" shape="circle">
      <area target="_blank" title="Thassa" id="Bright as diamonds, Loud as thunder,
      Never still, A thing of wonder." coords="916,623,66" shape="circle">
      <area target="_blank" title="Klothys" id="What is it that when given one,
      you’ll have either two or none" coords="1156,636,60" shape="circle">
      <area target="_blank" title="Heliod" id="Never resting, never still.
      Moving silently from hill to hill.
      It does not walk, run or trot.
      All is cool where it is not." coords="1417,558,67" shape="circle">
      <area target="_blank" title="Iroas" id="I am born in fear, raised in truth,
      and I come to my own in deed.
      When comes a time that I’m called forth,
      I come to serve the cause of need." coords="1697,708,63" shape="circle">
      <area target="_blank" title="Karametra" id="Soft and cuddly, I'll pull on your heart.
      But take my last name and I'll tear you apart." coords="634,739,60" shape="circle">
      <area target="_blank" title="Nylea" id="People come and watch, from far away to see
      Burning brightly, almost catching fire,
      The colder it is the hotter I'll be.
      Then I die." coords="919,830,62" shape="circle">
      <area target="_blank" title="Purphoros" id="The thunder comes before the lightning,
      And the lightning comes before the cloud,
      The rain dries all the land it touches,
      Wrapping the earth in a blood red shroud." coords="1159,419,68" shape="circle">

      <area target="_blank" title="Erebos" id="" coords="1126,927,60" shape="circle">
      <area target="_blank" title="Pharika" id="" coords="769,994,62" shape="circle">
      <area target="_blank" title="Phenax" id="" coords="1246,1172,62" shape="circle">
      <area target="_blank" title="Mogis" id="" coords="1534,1057,65" shape="circle">
      <area target="_blank" title="Ephara" id="" coords="1474,313,64" shape="circle">
      <area target="_blank" title="Athreos" id="" coords="976,1105,61" shape="circle">
      <area target="_blank" title="Aredite" id="" coords="1378,826,63" shape="circle">


    </map>
  </div>
  <div id="information">
    <h1>Riddle on the Column:</h1><br />
    <span id="Riddle"></span>
  </div>
</body>

</html>