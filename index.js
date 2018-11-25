'use strict';
// Eliminate basic errors.

// Importing modules from actions on google client library
const {dialogflow,
         BasicCard,
         Image,
        Suggestions} = require('actions-on-google');

// Import firebase functions for deployment
const functions = require('firebase-functions');

// Instantiate dialogflow
const app = dialogflow({debug:true});

 // Setting Audio for Application.
 const welcomesong = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/videoplayback%20(audio-cutter.com).mp3';
 const themeSong = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/videoplayback.ogg';
 const JoeySound = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Joey%20Intro.mp3';
 const RossSound = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Ross%20Hi.ogg';
 const PhoebeSound = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Phoebe.mp3';
 const smellyCat = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Smelly%20Cat.mp3';
 const stickyShoes = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/sticky%20shoes.ogg'; 
 const phoebeEvolution = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Friends%20-%20Phoebe%20and%20Evolution%20(audio-cutter.com).mp3';
 const redRoss = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Friends%20-%20Rugby%20or%20Red%20Ross%20(audio-cutter.com).mp3';
 const chandlerHyp = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Friends%20-%20When%20Chandler%20Gets%20Hypnotized%20-%20Friends%20TV%20Show%20Best%20Scenes%20(audio-cutter.com).mp3';
 const phoebeAnnoyed = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Joey%20and%20pheebs%20(audio-cutter.com).mp3';
 const phoebeOnCM = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/scream%202.mp3';
 const rossFightMonica = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Ross%20and%20Monica%20fight%20(audio-cutter.com).mp3';
 const phoebeScream = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/scream%201.mp3';
 const unagi = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/unagi%20(audio-cutter.com).mp3';
 const funnyRoss = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Funny%20ross%20(audio-cutter.com).mp3';
 const rossToRachel = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Ross%20and%20Rachel%20(audio-cutter.com).mp3';
 const Ad = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/AD.mp3';
 const auntRachel = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/aunt%20Rachel.mp3';
 const competitive = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/competitive%20(audio-cutter.com).mp3';
 const joeyAndChandler = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/couch%20(audio-cutter.com).mp3';
 const drunkMonica = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/drunk.mp3';
 const humble = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/EROTIC%20(audio-cutter.com).mp3';
 const singing = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Everybody%20singing.mp3';
 const food= 'https://storage.googleapis.com/friends-ab0a7.appspot.com/food.mp3';
 const foosballs = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/foosballs.mp3';
 const freak = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/freak.mp3';
 const reactions = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/joey%20finds%20out.mp3';
 const joeyToRachel = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/joey%20to%20rachel.mp3';
 const missing = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Missing.mp3';
 const monicaBang = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Monica%20bang.mp3';
 const monlander = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Monlander.mp3';
 const tips = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/tips.mp3';
 const secrets1 = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Secrets%20Part%201.mp3';
 const secrets2 = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/Secrets%20part%202.mp3';
 const test = 'https://storage.googleapis.com/friends-ab0a7.appspot.com/test.mp3';

 // Image URLs
 const welcomeMonicaImg = 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/Courteney_Cox_as_Monica_Geller.jpg/220px-Courteney_Cox_as_Monica_Geller.jpg';
 const drunkImg = 'http://images1.fanpop.com/images/polls/72651_1209078724210_full.jpg';
 const freakImg = 'https://598d5fcf392acad97538-395e64798090ee0a3a571e8c148d44f2.ssl.cf1.rackcdn.com/8186877_heres-one-thing-about-monicas-apartment_a798b9d4_m.jpg?bg=613F41';
 const monicaBangImg  = 'https://i.ytimg.com/vi/wCoKdpD8SoM/hqdefault.jpg';
 const competitiveImg = 'https://pbs.twimg.com/profile_images/925178476294008832/DtpuzUhl_400x400.jpg';
 const monlanderImg = 'http://www1.pictures.zimbio.com/mp/ZoLJndz7blel.jpg';
 const foosballsImg = 'https://i.ytimg.com/vi/nmffQHjweuc/hqdefault.jpg';
 const chandlerImg = 'https://pixel.nymag.com/imgs/daily/vulture/2017/03/30/30-chandler-bing.w710.h473.2x.jpg';
 const secretsImg = 'https://i.ytimg.com/vi/ePQu9GVe7kY/maxresdefault.jpg';
 const tipsImg = 'http://www.newlovetimes.com/wp-content/uploads/2015/04/friends1.jpg';
 const hypImg = 'https://vignette.wikia.nocookie.net/friends/images/1/1c/TOWTHypnosisTape.png/revision/latest?cb=20180214113711';
 const joeyImg = 'https://vignette.wikia.nocookie.net/friends/images/6/61/Joey_friends.jpg/revision/latest?cb=20130523190938';
 const reactionImg = 'https://i.ytimg.com/vi/bIIm7yBdUG4/hqdefault.jpg';
 const missingImg = 'http://static.dnaindia.com/sites/default/files/styles/full/public/2016/07/25/485370-chandler-and-joey-tumblr.jpg';
 const foodImg = 'https://i.ytimg.com/vi/8PbZNmv2bQM/maxresdefault.jpg';
 const adImg = 'https://i.ytimg.com/vi/FZ91xAgKh5U/maxresdefault.jpg';
 const joeyToRachelImg = 'http://snappa.static.pressassociation.io/assets/2014/09/11104152/1410428511-3a5dd63ab22757f4f3fe91bf4fd73176-600x338.jpg';
 const rossImg = 'http://br.web.img3.acsta.net/newsv7/17/10/06/18/04/4535536.jpg';
 const redRossImg = 'https://i.pinimg.com/originals/d3/0b/1d/d30b1d1444fe74c881affeb0476b8c54.jpg';
 const fightWithMonImg = 'https://images.news18.com/ibnlive/uploads/2015/08/Wrestling.jpg';
 const funnyManImg = 'http://br.web.img3.acsta.net/newsv7/17/10/06/18/04/4535536.jpg';
 const rossToRachelImg = 'https://imgix.bustle.com/rehost/2016/9/13/30524b1f-782f-4d82-b9a0-214413396cb5.jpg';
 const rachelGreenImg = 'https://imgix.bustle.com/uploads/image/2017/9/19/e8b82a23-05f0-4ac6-b4b1-5f5d09cfc0a1-screen-shot-2017-09-19-at-125433-pm.png?w=970&h=582&fit=crop&crop=faces&auto=format&q=70';
 const auntImg = 'https://s.yimg.com/ny/api/res/1.2/V7m_HG1db895z0Roi3ZrKA--/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NzQ0O2g9NzAz/http://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/5fd63fffa0e3062176ed1b04f6d0f94b';
 const testImg = 'https://images.hellogiggles.com/uploads/2016/01/25032510/friends-embryos.jpg'; 
 const everybodyImg = 'http://los40es00.epimg.net/los40/imagenes/2016/08/25/cinetv/1472082207_045371_1472083720_noticia_normal.jpg';
 const humbleImg = 'https://imgix.bustle.com/uploads/image/2017/9/19/e8b82a23-05f0-4ac6-b4b1-5f5d09cfc0a1-screen-shot-2017-09-19-at-125433-pm.png?w=970&h=582&fit=crop&crop=faces&auto=format&q=70';
 const phoebeImg = 'https://i.ytimg.com/vi/HVQczu24Rrg/hqdefault.jpg';
 const smellyCatImg = 'https://vignette.wikia.nocookie.net/friends/images/c/c2/Smelly_Cat.jpg/revision/latest?cb=20170222183246';
 const stickyShoesImg = 'https://i.ytimg.com/vi/HVQczu24Rrg/hqdefault.jpg';
 const evloutionImg = 'https://i.ytimg.com/vi/HVQczu24Rrg/hqdefault.jpg';  
 const screamingImg = 'https://s-media-cache-ak0.pinimg.com/564x/81/56/39/815639bb9c01127c758cb3b159aad276.jpg';


// Default Welcome Intent
app.intent('Default Welcome Intent', (conv) => {
    conv.ask(`<speak>Welcome! Who is your favorite character among Joey, Chandler, Monica, Rachel, Ross or Phoebe?</speak>`);
});

// Monica
app.intent('Monica', (conv, {Monica}) => {
    conv.ask(`<speak>Hello I am Monica </speak>`);
    //For Screen Output

    if(conv.speak.capabilities.has(`actions.capability.SCREEN_OUTPUT`)){

     conv.ask(new BasicCard({
        text:`Thank you for choosing me`,
        title: `Monica Geller`,
        image: new Image({
            url:`${welcomeMonicaImg}`,
            alt: `Monica Geller`
        })
    }))
     conv.ask(`<speak>Please select from the following options</speak>`) ;
    conv.ask(new Suggestions([`Bang`,`Freak`,`Competitive`,`Drink`, `Monlander`,'Foosball']));
    }
    //For Smart Speaker
    if(!conv.speak.capabilities.has(`actions.capability.SCREEN_OUTPUT`)) {
      conv.ask(`<speak>Please switch to screen display </speak>`);   
    } 
});

// Rachel
app.intent('Rachel', (conv, {Rachel}) => {
    conv.ask(`<speak>Hello I am Rachel </speak>`);
});

// Chandler
app.intent('Chandler', (conv, {Chandler}) => {
    conv.ask(`<speak>Hello I am Chandler </speak>`);
});

// Ross
app.intent('Ross', (conv, {Ross}) => {
    conv.ask(`<speak>Hello I am Ross</speak>`);
});

// Joey
app.intent('Joey', (conv, {Joey}) => {
    conv.ask(`<speak>Hello I am Joey </speak>`);
});

// Phoebe
app.intent('Phoebe', (conv, {Phoebe}) => {
    conv.ask(`<speak>Hello I am Phoebe</speak>`);
});

// set dialogflow object to handle POST request
exports.dialogflowFirebaseFulfillment = functions.https.onRequest(app);