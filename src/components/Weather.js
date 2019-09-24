import React from 'react';

const Weather = props => (
    <div>
        { props.city && props.country && <p>Location: { props.city }, { props.country } </p> }
        { props.temperature && <p>Temperature: { props.temperature } &#8451;</p> }
        { props.humidity && <p>Humidity: { props.humidity } %</p> }
        { props.description && <p>Conditions: { props.description } </p> }
        { props.error && <p>Error: { props.error } </p> }
    </div>
);


export default Weather;