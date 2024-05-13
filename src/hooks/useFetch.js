import { useEffect, useState } from "react";

import {data} from '../assets/data/data'



export const useFetch = () =>{

	const[ state, setState ] = useState([]);
	const[ isLoading, setIsLoading ] = useState(true);

	useEffect( () => {

		setState( data );

		setIsLoading(false);


	},[])


	return{
		data: state,
		isLoading
	}
}