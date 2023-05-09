import React from 'react';
import './Team.css'
import billal from '../../../image/Billal-hossain.jpg';
import Musfida from '../../../image/Musfida-Rahman.jpg';
import { Link } from 'react-router-dom';

const Team = () => {

    const team_data = [
        {
            id: 1,
            name: 'Shaikat Msjumder',
            image: billal
        },
        {
            id: 1,
            name: 'Kazi Zahua Rashid',
            image: Musfida
        },
        {
            id: 1,
            name: 'Md. Billal Hossain',
            image: billal
        },
        {
            id: 1,
            name: 'Musfida Rahoman',
            image: Musfida
        },
    ]

    return (
        <div id='team' className='py-5'>
            <div className="container py-5">
                <h2>Panel</h2>
                <h1 className='text-white'>Advisory</h1>
                <div className='p-4 mt-5 panel'>
                    <div className='row'>
                        {
                            team_data.map(team => <div className="col-md-3 col-sm-12 mt-3 mt-md-0">
                                <Link to={`/team/${team.id}`} >
                                    <div className="card">
                                        <img src={team.image} alt="person" />
                                        <div className="card-body">
                                            <h4>{team.name}</h4>
                                        </div>
                                    </div>
                                </Link>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Team;