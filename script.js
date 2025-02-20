function firstWord(s) {
  // your code here
	let s2=""
	for(let i=0; i<s.length; i++){
		if(s[i]==" "){
			return s2
		}else{
			s2+=s[i]
		}
	}
	return s
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
