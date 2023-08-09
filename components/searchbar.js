"use client";

import React, { useState, useEffect } from "react";
import ReactSearchBox from "react-search-box";
import cityData from "cities.json";

const SearchBar = () => {
    const [searchResults, setSearchResults] = useState([]);

    const searchCities = (searchTerm) => {
        const filteredCities = cityData.filter((city) => city.name.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(filteredCities);
    };

    useEffect(() => {
        searchCities("");
    }, []);

    const handleSearch = (value) => {
        if (value) {
            searchCities(value);
        } else {
            setSearchResults([]);
        }
    };

    return (
        <div>
            <ReactSearchBox
                placeholder="Search your City..."
                data={searchResults.map((city) => ({ key: city.id, value: city.name }))}
                callback={(record) => console.log(record)}
                onChange={(value) => handleSearch(value)}
            />
        </div>
    );
};

export default SearchBar;
