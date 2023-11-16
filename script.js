function firstWord(s) {
  // your code here
	s=s.split(" ");
    console.log(s);
	for(let i=0; i<s.length; i++){
		if(s[i]!=""){
			return s[i];
		}
	}
	return "";
}

// Do not change the code below
 const s = prompt("Enter String:");
alert(firstWord(s));
