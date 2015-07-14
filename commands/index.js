var helper = require("../helper");
var user = require("../user").actions;
var google = require("../google").actions;
var wikipedia = require("../wikipedia").actions;

(function(commands){
	commands.hello = function(){
		return "Hello"
	};
	
	commands.test = function(){
		var text = ["1", "-1", "icles"];
		return helper.choose(text);
	};
	
	commands.join = function(bot, from, to, text, split){
		bot.join(split[1]);		
	};
	
	commands.part = function(bot, from, to, text, split){
		if (config.admin.indexOf(from) > -1){
			bot.part(split[1], "...");
		}		
	};

	commands.part = function(bot, from, to, text, split) {
	    if(config.admin.indexOf(from) > -1) {
	        bot.part(split[1], "...");
	    }
	};

	commands.g = google.query;
	commands.gd = google.queryDesc;
	commands.wik = wikipedia.query;

	commands.store = user.store;
	commands.heed = user.heed;
	commands.notHeed = user.notHeed;
	commands.T = user.T;
	commands.Ty = user.Ty;
	commands.noT = user.noT;
	commands.wfh = user.wfh;
	commands.notWfh = user.notWfh;
})(module.exports)