import React from 'react';
import GoogleMapReact from 'google-map-react';
import './home.css'

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Home(props) {
    let defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <div>
            <div className={'row'}>
                <div className={'col-md-8'}>
                    <div style={{ height: '400px', width: '100%' }}>
                        <GoogleMapReact
                            bootstrapURLKeys={{ key: 'AIzaSyBZrbcOPXXQzy4Q6V51IW5Bm0LVokkXP6o' }}
                            defaultCenter={defaultProps.center}
                            defaultZoom={defaultProps.zoom}
                        >
                            <AnyReactComponent
                                lat={59.955413}
                                lng={30.337844}
                                text="My Marker"
                            />
                        </GoogleMapReact>
                    </div>
                </div>
                <div className={'col-md-4'}>
                    <div class="card card-primary" >
                        <div class="card-body reviewList"><div class="reviewText">
                            <span>Recent Review</span></div><div class="reviewListItem">
                                <div class="reviewIconBlock">
                                    <img alt="" src="http://res.cloudinary.com/taxiapp/image/upload/v1505805106/noun_17237_agwqgt.png" class="reviewIconImg" />
                                </div><div class="reviewTextBlock">
                                    <div><span class="rivewerName">VvvvHh</span><span class="rightSpan">****</span>
                                    </div><div role="toolbar" class="starButtonToolbar btn-toolbar">
                                        <button type="button" class="starButtonActive btn btn-link">
                                            <span class="fa fa-star starSize"></span></button>
                                        <button type="button" class="starButton btn btn-link">
                                            <span class="fa fa-star starSize"></span>
                                        </button><button type="button" class="starButton btn btn-link">
                                            <span class="fa fa-star starSize"></span></button>
                                        <button type="button" class="starButton btn btn-link">
                                            <span class="fa fa-star starSize"></span></button>
                                        <button type="button" class="starButton btn btn-link"><span class="fa fa-star starSize">
                                        </span></button></div></div></div></div></div>
                </div>
            </div>
        </div>
    );

}

export default Home;