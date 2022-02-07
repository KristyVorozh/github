import React from 'react';
import '../Main/style.css'
const Users = ({responseInfo, click, loading}) => {
    if (loading){
        return <h2>Loading..</h2>
    }
    return (
        <div className='main_users'>
            {responseInfo.map((v, index) =>
                <div onClick={() => click(index)} className='main'>
                    <img src={v.avatar_url}/>
                    <div className='main_content-flex'>
                        <p>{v.login}</p>
                        <p>Тип: {v.type}</p>
                        <a target='_blank' href={v.html_url}>Профиль</a>
                    </div>
                </div>
            )
            }
        </div>
    );
};

export default Users;