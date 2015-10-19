
// DOCUMENT READY
	$(function() {
		// Create a global variable set to false to later compare IF <div class="button up"></div> has been clicked on page load.
		var buttonHasBeenClicked = false;

		// GIVE DIRECTIONS TO BUTTON WHEN IT IS CLICKED
		$(".button").on("click", function() {
			
			// STORE/ASSIGN INDEXED VALUES FROM "MAD LIBS" ARRAYS INTO CUSTOM VARIABLES 
			// An array of indexed strings starting at [0], [1], etc.
			var adj1 = ["epic", "furious", "majestic", "old-timey", "grouchy", "mysterious", "sassy", "macho", "awkward", "magnificent", "purring", "massive", "fuzzy", "handsome", "well-groomed", "fragile", "colossal", "naughty", "glamorous", "elegant", "mighty", "magical", "elderly", "beautiful", "dapper", "bloody", "enchanted", "flat", "overrated", "prickly", "defective"];

			var noun1 = ["escalator", "donkey", "donut", "bullet", "balloon", "butcher", "iguana", "owl", "enemy", "cherry", "rake", "spy", "goose", "porcupine", "raccoon", "mouse", "sofa", "island", "truck", "bunny", "songbird", "pizza slice", "flower", "jellyfish", "elbow", "shark", "pie", "quiche", "mushroom", "parrot", "pirate", "witch", "warrior", "fork", "spoon", "butter knife" ]; 

			var verb1 = ["swimming", "sitting", "sliding", "sailing", "swinging", "flying", "drawing", "sinking", "wrestling", "riding", "blushing", "shocking", "crawling", "competing", "sleeping", "coughing", "crashing", "cleaning", "relaxing", "laughing", "tasting", "hula-hooping", "dancing", "dusting", "paddling", "shaving", "battling", "eating"];

			// Variable created for a preposition + article (in the English language)
			var prepo = ["on", "with", "on top of", "below", "beside"];

			var noun2 = ["unicorn", "diamond", "dynamite stick", "glider", "pony", "robot", "weapon", "cow", "baboon", "demon", "giraffe", "lion", "hyena", "cougar", "jaguar", "elephant", "shrub", "moose", "wolf", "moon", "sun", "rocket ship", "alien", "lazer gun", "sword", "bow and arrow", "ship", "lightning bolt", "chair", "jail cell", "secretary", "your boss", "zebra", "chicken", "fruit", "vegetable", "waffle", "pancake", "mountain", "tree branch", "onion", "eggplant", "zucchini", "lemon", "watermelon", "pineapple", "sandwich", "lettuce", "stick of butter"];

			// Randomize a number and then store it in the variable "rand" to use later
			// + 1 makes it so that your number will never generate a value of 0
			// var rand = Math.floor((Math.random() * 10 ) + 1);
			// console.log(rand);

			// STORE THE RANDOMIZED VALUES THAT WE GET FROM noun1 ARRAY INTO THE VARIABLE grabNoun1. MULTIPLYING BY "noun1.length" MEANS MULTIPLY BY HOWEVER MANY ELEMENTS ARE IN YOUR ARRAY.
			var grabAdj1 = adj1[ Math.floor(Math.random() * adj1.length) ];
			
			var grabNoun1 = noun1[ Math.floor(Math.random() * noun1.length) ];
			
			var grabVerb1 = verb1[ Math.floor(Math.random() * verb1.length) ];
			
			var grabPrepo = prepo[ Math.floor(Math.random() * prepo.length) ];

			var grabNoun2 = noun2[ Math.floor(Math.random() * noun2.length) ];
			 // RYAN: think of a function that randomizes all these things for you? ****


			// CREATE A FUNCTION FOR DETECTING IF THE FIRST CHARACTER OF THE INDEXED STRING VALUE IN VARIABLE "grabAjd1" STARTS WITH A VOWEL. STORE IT IN A VARIABLE TO COMPARE TO VOWELS. IF THE FIRST LETTER IS A VOWEL, SET THE FIRST WORD IN YOUR ANSWER FROM "A" TO "An".  
			// ex: A awkard --> An awkward cherry that's flying on a glider

			function charIsVowel() {
			      var firstLetter = grabAdj1.charAt(0);

			      if (firstLetter === "a" || firstLetter === "e" || firstLetter === "i" || firstLetter === "o" || firstLetter === "u") {
			      		return "An ";
			      } else {
					      return "A ";
			 		}
			} // end charIsVowel function

			// STORE THE RESULTS OF charIsVowel FUNCTION INTO A GLOBAL VARIABLE FOR FINAL ANSWER
			var firstWord = charIsVowel();

			// SIMILAR TO charIsVowel, create a function to determine if grabNoun2 will start with a vowel and change the article to reflect that.
			function vowelFirstNoun2() {
			      var firstVowel = grabNoun2.charAt(0);

			      if (firstVowel === "a" || firstVowel === "e" || firstVowel === "i" || firstVowel === "o" || firstVowel === "u") {
			      		return "an ";
			      } else {
					      return "a ";
			 		}
			} // end vowelFirstNoun2 function

			// STORE THE RESULTS OF vowelFirstNoun2 as a GLOBAL VARIABLE FOR FINAL ANSWER
			var article = vowelFirstNoun2();
	
	

			// When the button has been clicked, fade in our 4 icons, animate them, then fade them out before the variable answer displays on the page.

			// user has already clicked the button once in the past?
			 if (buttonHasBeenClicked === true)  {
			   // reset everything back to where it starts
			   $("ul").fadeIn(3000);
			   $("h2").html("&nbsp;");
			   // $("h3").html("Congratulations! You got:").fadeOut(1000)
			   $("h3").html("Congratulations! You got:").fadeTo(250, 0.01);

			 } else {
			   // user has never clicked the button before. this case will run the first time the page loads, since buttonHasBeenClicked will be false by default at doc ready
			 	buttonHasBeenClicked = true;
			// set buttonHasBeenClicked to true now, so that next time it runs it will trigger the animation reset instead of this case
			 }
			
			 // add animation code here 
			function animateRotate(degree) {
				// caching the object for performance reasons
				var $imgLogo = $("img.logo-rotate");

				// Using a pseudo object for the animation - looked up pseudo object
				// (starts from `0` to `degree`), "degree" is a placeholder - can be can be named anything
			    $({deg: 0}).animate({deg: degree}, {
			    		duration: 3000,
			        	step: function(now, fx){
			        		// in the step-callback (that is fired each step of the animation),
			        		// you can use the `now` parameter which contains the current animation-position (`0` up to `degree`)
			            $imgLogo.css({
			                 transform: "rotate(" + now + "deg)"
			                 // in CSS, the transform property requires the syntax: transform: rotate(7deg);
			            });
			        } 
			    });
			} //end animateRotate function

			// call the function animateRotate and pass an argument of 1800 degrees (spin 5 times)
			animateRotate(1800);

			// CONCATENATE ALL VARIABLES INTO A GLOBAL "answer" VARIABLE.
			var answer = firstWord + grabAdj1 + " " + grabNoun1 + " that's " + grabVerb1 + " " + grabPrepo + " " + article + " " + grabNoun2;

			// CREATE A FUNCTION THAT DELAYS WHEN THE ANSWER APPEARING ON THE PAGE AFTER THE LOGO ICONS FINISH ANIMATING.
			// setTimeout(func, [delay, param1, param2, ...]);
			setTimeout(function() {
				// fadeout the ul acting as a container for the 4 icons
				$("ul").fadeOut(); 
				// create html text for the answer to show up as the H2 element.
				$("h2").html(answer);
				// $("h3").hide().html("Congratulations! You got:").fadeIn(1000);
				$("h3").hide().html("Congratulations! You got:").fadeTo(1000, 1);
			}, 3500);

		}); //end of on click ".button"
				
	}); //end of document ready