import React, {useEffect,useState} from "react";

export default function App(){
	const [calisanlar, setCalisan]= useState([]);
	
	useEffect(() => {
		fetch('/WebService1.asmx/personelList')
		.then(response => response.xml())
		.then(response => setCalisan(response));
	},[]);
	console.log(calisanlar);
	
	return(
	<div className="App">
	Test
	</div>
	);
}

