module.exports = function(bot) {
  bot.hear(/(H|h)ow are you (S|s)ilverbot?/, function(res) {
    var stringy = ["Fine. America is back on track now that Trump is drainin' the swamp.", "I'm great, just like America will be when Trump is done MAGAing all over the place.", "I'm pretty dern good.", "I'm good now that them Muslims are banned from entering our country and we're so super safe forever."];
    var randStr = Math.floor(Math.random() * stringy.length);
     return res.send(stringy[randStr]);
   });

   bot.hear(/(W|w)hat do you mean/, function(res) {
     var stringy = ["Look I don't have to splain myself to no libtard, OK?", "Hey just leeme alone ALRIGHT?! I wanna watch HANNITY THE GENIUS in peace.", "MAGA is what I mean.", "GET OFF MY LAWN is what I mean!"];
     var randStr = Math.floor(Math.random() * stringy.length);
      return res.send(stringy[randStr]);
    });

   bot.hear(/(W|w)here is (S|s)ilverbot?/, function(res) {
     var stringy = ["I'm away, watching the swamp get drained!", "Over here listenin' to HANNITY. Whatta guy.", "Lemme alone! I'm watchin' FOX News. Hate that MSM. Conway is so friggin' sexy.", "I'm over here burnin' an American flag. ...Just kiddin'. Got you excited huh you freakin libtard?"];
     var randStr = Math.floor(Math.random() * stringy.length);
      return res.send(stringy[randStr]);
    });

  bot.hear(/(O|o)bama$|(O|o)bama[^?]/, function(res) {
    var stringy = ["Who's talking about OBUMMER? WORST president ever GEEEZ.", "You mean Barack HUSSEIN Obama.", "MAGA!", "Now there's a guy I don't miss. Go back to Kenya already!"];
    var randStr = Math.floor(Math.random() * stringy.length);
     return res.send(stringy[randStr]);
   });

   bot.hear(/economy/, function(res) {
     var stringy = ["Yeah well Obama messed it up.", "Obama freakin' wrecked the economy I'm tellin' you", "Wanna talk about the economy? Let's talk about OBUMMER freakin' ruining the stock markets and stuff"];
     var randStr = Math.floor(Math.random() * stringy.length);
      return res.send(stringy[randStr]);
    });

    bot.hear(/unemployment/, function(res) {
      var stringy = ["Yeah, sky high! Immigrants takin' our jobs. Don't listen to the MSM.", "Obama is all yeah let's get all socialist n stuff. Not good! Trump gonna make so many jobs!", "Wanna talk about the unemployment? Let's talk about OBUMMER freakin' giving jobs to Mexico! OBUMMER."];
      var randStr = Math.floor(Math.random() * stringy.length);
       return res.send(stringy[randStr]);
     });

   bot.hear(/(T|t)rump$|(T|t)rump[^?]/, function(res) {
     var stringy = ["MAGA!", "USA! USA! USA!", "50 MORE YEARS!", "I LOVE GOD EMPEROR"];
     var randStr = Math.floor(Math.random() * stringy.length);
      return res.send(stringy[randStr]);
    });

   bot.hear(/((O|o)bama\?$)/, function(res) {
     var stringy = ["Well DUH, cause he was the WORST GEEEZ.", "You mean Barack HUSSEIN Obama? More people on welfare than ever! DUH!", "Gerd dern socialist Musilm. MAGA!", "Tried to take muh guns no way no skippy. GET OFF MY LAWN!"];
     var randStr = Math.floor(Math.random() * stringy.length);
      return res.send(stringy[randStr]);
    });

    bot.hear(/((T|t)rump\?$)/, function(res) {
      var stringy = ["Well DUH, he's the best he drainin' that swamp MAGA.", "HANNITY says he's true blue so I'm like yeah true blue I HATE THE MSM.", "Already done more in a month than OBUMMER ever did!", "He's just like me! I mean, he's rich and stuff but he seems real angry JUST LIKE ME"];
      var randStr = Math.floor(Math.random() * stringy.length);
       return res.send(stringy[randStr]);
     });

   bot.hear(/(H|h)ey$/, function(res) {
     var stringy = ["...ya! Hey ya! Silverbot don't want to meet your daddy (oh, oh!), Silverbot just want you in his caddy (oh, oh!)", "Hay is for horses, you dumb liberal! HAHAHAHAHAHAHA", "Hey, what?", "Hey yourself! Get off my lawn!"];
     var randStr = Math.floor(Math.random() * stringy.length);
      return res.send(stringy[randStr]);
    });

  bot.respond(/what is your favorite (.*)/, function(msg) {
   var fav;
   fav = msg.match[1];
   console.log(fav);
   switch (fav) {
     case "food":
       return msg.reply("FREEDOM fries!");
       break;
     case "food?":
       return msg.reply("FREEDOM fries!");
       break;
     case "band":
       return msg.reply("Nickelback, baby!");
       break;
     case "band?":
       return msg.reply("Nickelback, baby!");
       break;
     case "programming language":
       return msg.reply("Freakin' ENGLISH!");
       break;
     case "programming language?":
       return msg.reply("Freakin' ENGLISH!");
       break;
     default:
       return msg.reply("I don't have a favorite " + fav + ". What's Trump's?");
   }
 });

 bot.respond(/What is your favorite (.*)/, function(msg) {
  var fav;
  fav = msg.match[1];
  console.log(fav);
  switch (fav) {
    case "food":
      return msg.reply("FREEDOM fries!");
      break;
    case "food?":
      return msg.reply("FREEDOM fries!");
      break;
    case "band":
      return msg.reply("Nickelback, baby!");
      break;
    case "band?":
      return msg.reply("Nickelback, baby!");
      break;
    case "programming language":
      return msg.reply("Freakin' ENGLISH!");
      break;
    case "programming language?":
      return msg.reply("Freakin' ENGLISH!");
      break;
    default:
      return msg.reply("I don't have a favorite " + fav + ". What's Trump's?");
  }
});

};
