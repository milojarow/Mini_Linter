let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords=story.split(' ');
console.log('The number of words are: ',storyWords.length);

let betterWords=storyWords.filter(x=>!unnecessaryWords.includes(x));
console.log(betterWords.join(' '));
console.log('Number of words in better words: ',betterWords.length);

let arrayOfOverusedWords=betterWords.filter(x=>overusedWords.includes(x)); //creates array of all over used words in the text [really, basically, really...]
let rea=[];
let ver=[];
let bas=[];
let counter=[rea,ver,bas];
let overusedWordsCop=overusedWords.forEach(word=>{ //the cop should storage the qty of $overusedWords repeated in $arrayOfOverusedWords
      let i=overusedWords.indexOf(word);//iterador i=0, i=1, i=2
      counter[i]=arrayOfOverusedWords.filter(x=>x===overusedWords[i]?true:false);//pass every element from @$arrayOfOverusedWords through the $i element of $overusedWords
      console.log(overusedWords[i].toString(),': ',counter[i].length);//escribe en consola 3 veces i=0, i=1, i=2
});

let sentenceCount=0;
betterWords.forEach(x=>{
  if(x[x.length-1]==='.'||x[x.length-1]==='!')sentenceCount++;
});
console.log('Sentences: ',sentenceCount);

let reaX=0;
let verX=0;
let basX=0;
let counterX=[reaX,verX,basX];
betterWords.reverse();
overusedWords.forEach(word=>{
  let i=overusedWords.indexOf(word);//iterdor word=0, word=1, word=2
  betterWords.forEach(x=>{
    x===word && counterX[i]++;
    if(x===word && counterX[i]>1)betterWords.splice(betterWords.indexOf(x),1)
  })
});
betterWords.reverse();
console.log(betterWords.join(' '));
console.log('Words on last paragraph: ',betterWords.length);

let m=1;//depósito del número más grande
let n=0;//contador de palabras
let itemMostRepeated;
for (i=0; i<betterWords.length; i++){
        for (j=0; j<betterWords.length; j++){
                if (betterWords[i] == betterWords[j]) n++;
                if (m<n){
                  m=n;
                  itemMostRepeated = betterWords[i];
                }
              }
        n=0; //reset
      }
console.log(`The word most repeated is "${itemMostRepeated}" (${m} times)`);
