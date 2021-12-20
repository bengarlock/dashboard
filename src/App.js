import react from 'react'
import './App.css';
import { connect } from 'react-redux';
import { getWeather } from "./Actions/Dashboard";
import PropTypes from 'prop-types';
import tendies from './Media/tendies.jpg'


class App extends react.Component {

    static propTypes = {
        weather: PropTypes.object.isRequired
    }

    componentDidMount = () => {
        this.props.getWeather()
    }

    render() {
        return (
            <div className="App">
                {this.props.weather.main ?
                    <>
                        <p>Right Now: {this.props.weather.main.temp}</p>
                        <p>Today's Min: {this.props.weather.main.temp_min}</p>
                        <p>Today's Max: {this.props.weather.main.temp_max}</p>
                    </>

                    : <img src={tendies} alt="tendies" />}

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    weather: state.dashboard.weather,
})


export default connect(mapStateToProps, {getWeather})(App);
