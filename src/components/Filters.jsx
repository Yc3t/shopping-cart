import React, { useState, useEffect, useId, useContext } from 'react'
import productsData from '../mocks/products.json'
import { FiltersContext } from '../context/filters'

export function Filters() {
    const {filters,setFilters} = useContext(FiltersContext)
    const [minPrice, setMinPrice] = useState(0)
    const [categories, setCategories] = useState([])
    const minPriceFilterId = useId()
    const categoryFilterId = useId()
    useEffect(() => {
        // Extract unique categories
        const uniqueCategories = Array.from(new Set(productsData.products.map(product => product.category)));
        setCategories(uniqueCategories);
    }, []);

    const handlePrice = (event) => {
        setMinPrice(event.target.value)
        setFilters(prevState => ({
            ...prevState,
            minPrice: event.target.value
        }))

    }


    const handleChangeCategory = (event) =>{
        setFilters(prevState => ({
            ...prevState,
            category: event.target.value
        }))
    }

    

    return (
        <section className="filters">
            <div className='filter-item'>
                <label htmlFor={minPriceFilterId}>Min. Price</label>
                <input
                    type="range"
                    id={minPriceFilterId}
                    min="0"
                    max="100"
                    step={0.1}
                    onChange={handlePrice}
                    value={filters.minPrice}
                />
                <span>${filters.minPrice}</span>
            </div>

            <div>
                <label  className = "cat" htmlFor={categoryFilterId}>Category</label>
                <select id={categoryFilterId} onChange={handleChangeCategory}>
                    <option value="all">All categories</option>
                    {categories.map(category => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
        </section>
    );
}
