// DashboardComponent.jsx
import React, { useState, useEffect } from 'react';
import BarChartComponent from './BarChartComponent';
import LineChartComponent from './LineChartComponent';
import FilterComponent from './FilterComponent';
import useFetchData from '../hooks/useFetchData';
import { processData } from '../services/dataProcessor';

const DashboardComponent = () => {
    // State to hold data and loading state
    const { data, loading } = useFetchData();

    // Declare state hooks at the top level
    const [filters, setFilters] = useState({
        age: null,
        gender: null,
        dateRange: { start: null, end: null },
    });
    const [selectedFeature, setSelectedFeature] = useState(null);
    const [barChartData, setBarChartData] = useState([]);
    const [lineChartData, setLineChartData] = useState([]);

    // Process data from the API
    const chartData = processData(data);

    // Handle loading state
    if (loading) {
        return <div>Loading...</div>; // Ensure this is at the top level
    }

    // Effect to fetch bar chart data based on filters
    useEffect(() => {
        // Ensure that chartData is available
        if (chartData.length > 0) {
            const filteredData = chartData.filter(item => {
                return (
                    (filters.age ? item.age === filters.age : true) &&
                    (filters.gender ? item.gender === filters.gender : true) &&
                    (filters.dateRange.start && filters.dateRange.end
                        ? new Date(item.date) >= new Date(filters.dateRange.start) &&
                        new Date(item.date) <= new Date(filters.dateRange.end)
                        : true)
                );
            });

            setBarChartData(filteredData);
        }
    }, [filters, chartData]); // Depend on filters and chartData

    // Handle bar click to fetch line chart data
    const handleBarClick = (feature) => {
        setSelectedFeature(feature);
        // Fetch time trend data for the clicked feature
        // You can implement this logic based on your data structure
    };

    // Handle filter change
    const handleFilterChange = (type, value) => {
        setFilters(prevFilters => ({ ...prevFilters, [type]: value }));
    };

    return (
        <div>
            <FilterComponent onFilterChange={handleFilterChange} />
            <BarChartComponent data={barChartData} onBarClick={handleBarClick} />
            {selectedFeature && <LineChartComponent data={lineChartData} />}
        </div>
    );
};

export default DashboardComponent;
