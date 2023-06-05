import React from 'react';
import { team_data } from '../../../data/TeamData';
import './Team.css'


const Team = () => {
    return (
        <div id='team' className='py-5'>
            <div className="container py-5">
                <h2>Panel</h2>
                <h1 className='text-white'>Advisory</h1>
                <div className='p-4 mt-5 panel-advisor'>
                    <div className='row'>
                        {
                            team_data.map(team => <div key={team.id} className="col-md-3 col-sm-12 mt-3 mt-md-0">
                                <div>
                                    <div className="card">
                                        <img src={team.image} alt="person" />
                                        <div className="card-body">
                                            <h4>{team.name}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};



export default Team;
