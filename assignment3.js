//Step 1 - Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
//var movies = ["Star Wars", "Stargate", "Startrek", "Silence of the Lambs", "Red Dragon"];
//console.log(movies[1]);

//Step 2 - Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
//var movies = new Array(5);
//movies[0] = "Star Wars";
//movies[1] = "Stargate";
//movies[2] = "Startrek";
//movies[3] = "Silence of the Lambs";
//movies[4] = "Red Dragon";
//console.log(movies[0]);

//Step 3 - Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.
//var movies = ["Star Wars", "Stargate", "Startrek", "Hannibal", "Silence of the Lambs", "Red Dragon"];
//console.log(movies.length);

//Step 4 - Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
//var movies = ["Star Wars", "Stargate", "Startrek", "Silence of the Lambs", "Red Dragon"];
//delete movies[0];
//console.log(movies);

//Step 5 - Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.
//var movies = ["Star Wars", "Stargate", "Startrek", "Hannibal Rising" , "Silence of the Lambs", "Red Dragon", "Hannibal"];
//for (var i = 0; i < movies.length; i++) {
//	console.log(movies[i]);
//}

//Step 6 - Now, use a for-in loop to iterate through the array and display each movie within the console window.
//var movies = ["Star Wars", "Stargate", "Startrek", "Hannibal Rising" , "Silence of the Lambs", "Red Dragon", "Hannibal"];
//for (var index in movies) {
//	console.log(movies[index]);
//}


//Step 7 - Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.
//var movies = ["Star Wars", "Stargate", "Startrek", "Hannibal Rising" , "Silence of the Lambs", "Red Dragon", "Hannibal"];
//	movies.sort();
//	for (var index in movies) {
//	console.log(movies[index]);
//}


//Step 8 - Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too:

//var movies = ["Movies I like", "\n", "Star Wars", "Stargate", "Startrek", "Hannibal Rising" , "Silence of the Lambs", "Red Dragon", "Hannibal", "\n", "Movies I regret watching:", "\n", "Mad Max Fury Road", "The Interpreter", "Zombie Nation" ];
//for (var index in movies) {
//	console.log(movies[index]);
//}


//Step 9 - Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.
//var movies = ["Star Wars", "Stargate", "Startrek", "Hannibal Rising" , "Silence of the Lambs", "Red Dragon", "Hannibal"];
//var leastFavMovies = ["Mad Max Fury Road", "The Interpreter", "Zombie Nation"];
//list = movies.concat(leastFavMovies);
//list.reverse();
//console.log(list);

//Step 10 - Return just the last item in the array and display it within the console window.
//var movies = ["Star Wars", "Stargate", "Startrek", "Hannibal Rising" , "Silence of the Lambs", "Red Dragon", "Hannibal"];
//last = movies.pop();
//console.log(last);

//Step 11 - Remove the previous method and this time return just the first item in the array and display it within the console window.
//var movies = ["Star Wars", "Stargate", "Startrek", "Hannibal Rising" , "Silence of the Lambs", "Red Dragon", "Hannibal"];
//first = movies.shift();
//console.log(first);

//Step 12 - Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 
//var movies = ["Star Wars", "Stargate", "Startrek", "Hannibal Rising" , "Mad Max Fury Road", "The Interpreter", "Zombie Nation"];
//movies.splice(4,5,6, "Silence of the Lambs", "Red Dragon", "Hannibal");
//console.log(movies);

//Step 13 - Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window. 
//var employee1 = [];
//employee1["id"] = 123;
//employee1["name"] = "Luke Skywalker";
//employee1["title"] = "Jedi";
//employee1["department"] = "Rebels";
//employee1["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] = 456;
//employee2["name"] = "Darth Vader";
//employee2["title"] = "Sith Lord";
//employee2["department"] = "Empire";
//employee2["isCurrent"] = true;
//
//var employees = [[employee1],[employee2]];
//console.log(employee2["name"]);

//Step 14 - Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.
//var employee1 = [];
//employee1["id"] = 123;
//employee1["name"] = "Luke Skywalker";
//employee1["title"] = "Jedi";
//employee1["department"] = "Rebels";
//employee1["isCurrent"] = true;
//
//var employee2 = [];
//employee2["id"] = 456;
//employee2["name"] = "Darth Vader";
//employee2["title"] = "Sith Lord";
//employee2["department"] = "Empire";
//employee2["isCurrent"] = true;
//
//var employees = [employee1["name"], employee2["name"]];
//for (var names in employees) {
//	console.log(employees[names]);
//}


//Step 16 - Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this. Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.


//Step 17 - Rock, paper, scissors is a classic 2 player game. Each player chooses rock, paper or scissors.
//var choiceArray = ["paper", "rock", "scissors"];
//
//        var getUserChoice = function()
//        {
//            var userChoice = undefined;
//            var userChoiceIndex = undefined;
//
//            while (true)
//            {
//                userChoice = prompt("What do you like - paper, scissor or rock");
//                userChoiceIndex = choiceArray.indexOf(userChoice);
//
//                if (userChoiceIndex >= 0 && userChoiceIndex <= 2)
//                    return userChoice;
//
//                alert("Invalid Choice!");
//            }
//        }
//
//        var getComputerChoice = function()
//        {
//            var computerChoiceIndex = Math.floor(Math.random() * 3);
//            return choiceArray[computerChoiceIndex];
//        }
//
//        var decideWinner = function(userChoice, computerChoice)
//        {
//            if (userChoice === computerChoice)
//                return "There is a tie!";
//
//            if (userChoice === "paper")
//            {
//                if (computerChoice === "rock")
//                {
//                    return "paper wins!";
//                }
//                else //scissors
//                {
//                    return "scissors win!";
//                }
//            }
//            if (userChoice === "rock")
//            {
//                if (computerChoice === "paper")
//                {
//                    return "paper wins!";
//                }
//                else //scissors
//                {
//                    return "rock wins!";
//                }
//            }
//            else //scissors
//            {
//                if (computerChoice === "paper")
//                {
//                    return "scissors wins!";
//                }
//                else //rock
//                {
//                    return "rock wins!";
//                }
//            }
//        }
//
//        var runGame = function()
//        {
//            var userChoice = getUserChoice();
//            var computerChoice = getComputerChoice();
//            var gameResult = decideWinner(userChoice, computerChoice);
//            gameResult = "Computer Choice = " + computerChoice + ". " + gameResult;
//            alert(gameResult);
//        }
//
//        runGame();
