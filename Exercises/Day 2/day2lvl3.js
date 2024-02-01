/* 1. 'Love is the best thing in this world. Some found their love and some are still looking
for their love.' Count the number of word love in this sentence.*/
let sentence0 = `Love is the best thing in this world. 
Some found their love and some are still looking for their love.`;
let pattern0 = /love/gi;
console.log(sentence0.match(pattern0));

/* 2. Use match() to count the number of all because in the following sentence:
'You cannot end a sentence with because because because is a conjunction'*/
let sentence1 = `You cannot end a sentence with because because because is a conjunction`;
let pattern1 = /because/gi;
console.log(sentence1.match(pattern1));

/* 3. Clean the following text and find the most frequent word 
(hint, use replace and regular expressions). */
const text = `%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; 
&as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;
I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. 
%Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? 
%Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching`;
let cleanText = text.replace(/[^a-zA-Z0-9-.?, ]/g, "");
console.log(cleanText);
let splitText = cleanText.split(" ");
// console.log(splitText);
// let frequentText = splitText(\w/g);
