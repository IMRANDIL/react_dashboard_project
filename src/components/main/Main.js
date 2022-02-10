import React from 'react';

import './Main.css';
import hello from '../../assets/hello.png';
import Chart from '../charts/Chart';

const Main = () => {
    return (
        <main>
            <div className="main__container">
                <div className="main__title">
                    <img src={hello} alt="hello-img" />
                    <div className="main__greeting">
                        <h1>Hello Coders</h1>
                        <p>Welcome to Your Admin dashboard</p>
                    </div>
                </div>
                <div className="main__cards">
                    <div className="card">
                        <i className='fa fa-user-o fa-2x text-lightblue'></i>
                        <div className="card_inner">
                            <p className='text-primary-p'>Number of Subscribers</p>
                            <span className='font-bold text-title'>978</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className='fa fa-calendar fa-2x text-red'></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Times of Watching</p>
                            <span className='font-bold text-title'>2467</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className='fa fa-video-camera fa-2x text-yellow'></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Videos</p>
                            <span className='font-bold text-title'>340</span>
                        </div>
                    </div>

                    <div className="card">
                        <i className='fa fa-thumbs-up fa-2x text-green'></i>
                        <div className="card_inner">
                            <p className="text-primary-p">Number of Likes</p>
                            <span className='font-bold text-title'>780</span>
                        </div>
                    </div>

                </div>

                <div className="charts">
                    <div className="charts__left">
                        <div className="charts__left__title">
                            <div>
                                <h1>Daily Reports</h1>
                                <p>San-fransicisco, America</p>
                            </div>
                            <i className='fa fa-usd'></i>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main