function firstWord(s) {
  // your code here
	let s1=s2.trim()
	let s2=""
	for(let i=0; i<s.length; i++){
		if(s1[i]==" "){
			return s2
		}else{
			s2+=s[i]
		}
	}
	return s1
	
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
