import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const result = await axios(API);
			setProducts(result.data);
			console.log(result.data); //quitar
		};
		fetchData();
	}, [API]);

    return products;
}

export default useGetProducts;