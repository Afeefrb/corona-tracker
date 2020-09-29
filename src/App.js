import React from 'react';

// import Cards from './components/Cards';
// import Chart from './components/Chart';
// import CountryPicker from './components/CountryPicker';

import  {Cards, Chart, CountryPicker} from './components';
import styles from './App.module.css';
import {fetchData} from './api';
import coronaImage from './images/coronaImage.jpg'

class App extends React.Component {

    state = {
        data: {},
        country:""
    }

    async componentDidMount () {

        const fetchedData = await fetchData();
        this.setState({data:fetchedData})

    }

    handleCountryChange = async (country) => {

  
            const fetchedData = await fetchData(country)
            console.log("country", fetchedData)
            this.setState({data:fetchedData, country: country})
        
        
    }

    render() {

        return (
            <div className={styles.container}>

             <h1> Coronavirus Tracker (COVID-19)</h1>
                                  
                <Cards data = {this.state.data} />
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Chart data={this.state.data} country={this.state.country} />
            </div>
            
        )
    }
}

export default App;