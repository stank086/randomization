$(document).ready(function() {


	var one = ["culvers", "panera", "mcdonalds", "chipotle", "noodles & co","arbys","jimmy johns","subway","pizza luce","taco bell","raising canes","erberts and gerberts","naf naf grill","leann chins","panda express","punch pizza"];


$(".button").click(function(){
	$(".one").html(one[Math.floor(Math.random() * one.length)]);
});







});