/*    _           _    _                     _ 
     | |         | |  | |                   | |
  ___| | ___  ___| | _| |     ___   __ _  __| |
 / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
 \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
 |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
    version 2.05
*/

/*URL for the server logo
Leave it blank to use text instead*/
var l_serverImage = "http://i.hizliresim.com/NlXPkQ.png";

/*Custom server name configuration
Leave it blank for automatic server name*/
var l_serverName = "[TR]KillZone";

/*Use a video for the background?
Otherwise it will just use images*/
var l_bgVideo = false;

/*Video background
Avaiable options:
"backgrounds/videos/aurora.webm"
"backgrounds/videos/bluefall.webm"
"backgrounds/videos/bluetilefloor.webm"
"backgrounds/videos/bluewhitecircles.webm"
"backgrounds/videos/bokehlens.webm"
"backgrounds/videos/cleanbokeh.webm"
"backgrounds/videos/coldnight.webm"
"backgrounds/videos/colorfulburst.webm"
"backgrounds/videos/dancingstars.webm"
"backgrounds/videos/dropsflares.webm"
"backgrounds/videos/focusorangebokeh.webm"
"backgrounds/videos/glimmering.webm"
"backgrounds/videos/glowingrings.webm"
"backgrounds/videos/greencircles.webm"
"backgrounds/videos/hues.webm"
"backgrounds/videos/inthedeep.webm"
"backgrounds/videos/modernflourish.webm"
"backgrounds/videos/orangeaura.webm"
"backgrounds/videos/warminside.webm"
"backgrounds/videos/yellowgreen.webm"

You can add custom backgrounds
Just make sure it is at webm VP8 format */
var l_background = "backgrounds/videos/glimmering.webm";

/*(Image-background only)
Place one or more images
Multiple images will automatically shuffle between them*/
var l_bgImages = [
	"",
];


/*Random background images order?*/
var l_bgImagesRandom = true;

/*(Image-background only)
Delay between background images changes
in milliseconds*/
var l_bgImageDuration = 5000;

/*(Image-background only)
Image background fade velocity
in milliseconds*/
var l_bgImageFadeVelocity = 2000;

/*Enable background overlay?*/
var l_bgOverlay = true;

/*Background darkening amount
0 for none (0%), 100 for pitch black (100%)*/
var l_bgDarkening = 50;

/*Music player
'true' or 'false' to enable music in the background*/
var l_music = true;

/*Display actual song's name?*/
var l_musicDisplay = true;

/*Music playlist
Place how much Youtube IDs/.ogg you want*/
var l_musicPlaylist = [
	{youtube: "drcCOc2v80o", name: "Vanic - Samurai (ft. Katy Tiz)"},
	{ogg: "https://www.youtube.com/watch?v=drcCOc2v80o", name: "Vanic - Samurai (ft. Katy Tiz)"},
	{youtube: "", name: ""},
	{youtube: "", name: ""},
	{youtube: "", name: ""}
];

/*Random music order?*/
var l_musicRandom = false;

/*Music volume
Choose a value between 0 and 100*/
var l_musicVolume = 10;

/*Enable custom messages?*/
var l_messagesEnabled = false;

/*Enter your custom messages below*/
var l_messages = [
"These jokes are so dark I'm surprised that they haven't been shot by the police.",
"Why do natives hate snow? because it's white and it's on their land.",
"OMG ADMIN TO ME RDM",
"War does not determine who is right - only who is left.",
"My mother never saw the irony in calling me a son-of-a-bitch.",
"I find it ironic that the colors red, white, and blue stand for freedom until they are flashing behind you.",
"I changed my password to ''incorrect''. So whenever I forget what it is the computer will say ''Your password is incorrect''",
"That awkward moment when you leave a store without buying anything and all you can think is ''act natural, you're innocent''",
"Isn't it great to live in the 21st century? Where deleting history has become more important than making it.",
"100,000 sperm and you were the fastest?",
"A bartender is just a pharmacist with a limited inventory. ",
"A day without sunshine is like, night. ",
"What's better than winning in the Paralympics? having legs.",
"Assassins do it from behind. ",
"Whats the difference between a pile of dead babies and a ferarri? I dont have a ferrari in my garage",
"how do you get 100 babies in a bathtub? blender",
"What's funnier than ten dead babies nailed to one tree? One dead baby nailed to ten trees",
"Men have two emotions: Hungry and Horny. If you see him without an erection, make him a sandwich.",
"ADMIN TO ME NOW, THIS GUY BROKE NLR!",
"We live in a society where pizza gets to your house before the police."
];

/*Random message order?*/
var l_messagesRandom = true;

/*Delay between message changes
in milliseconds*/
var l_messagesDelay = 5000;

/*Messages fade time
in milliseconds*/
var l_messagesFade = 1000;
