// Add your functions and code here

function destructivelyAppendKitten(name){ 
  kittens.push(name)
 return name
  }
  
 function destructivelyPrependKitten(name){
   return kittens.unshift(name)
 }
 
 function destructivelyRemoveLastKitten(){
   return kittens.pop(name)
 }
 
 function destructivelyRemoveFirstKitten(){
   return kittens.shift(name)
 }
 
 function appendKitten(name){
   return [...kittens, name]
   
 }
 
 function prependKitten(name){
   return [name, ...kittens]
 }
 
 function removeLastKitten(){
   return kittens.slice(0, kittens.slice - 1)
 }
 
  function removeFirstKitten(){
   return kittens.slice(1)
 }
