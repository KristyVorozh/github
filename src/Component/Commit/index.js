import React from 'react';
import '../Main/style.css'

const Commit = (props) => {

    return (
        <div className='main_profile'>
            <p className='main_login'>{props.fullName.login}</p>
            <div className='main_info-flex'>
                <div className='main_info'>
                    <img src={props.fullName.avatar_url}/>
                    <p>{props.fullName.name}</p>
                    <a target='_blank' href={props.fullName.html_url}>GitHub</a>
                </div>
                <div className='main_commit'>
                    <h1 className='main_commit-info'>Недавно обнавленные репозитории</h1>
                        <div className='main_commit-flex'>
                            {props.commitInfo.map((value)=>
                                <div className='main_commit-block'>
                                    <p>{value.repo.name}</p>
                                    <p>Type: {value.type}</p>
                                    {value.payload.commits?.map((v)=>
                                        <p>{v.message}</p>
                                    )}
                                    <p>Обновлено: {value.created_at.toUTCString()}</p>
                                </div>
                            )}
                        </div>
                </div>
            </div>
        </div>
    );
};

export default Commit;