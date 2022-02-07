import React, {useEffect, useState} from 'react';
import axios from "axios";
import Commit from "../Commit";
import './style.css'
import Users from "../Users";

const Main = () => {
    const [responseInfo, setResponseInfo] = useState([])
    const [commitInfo, setCommitInfo] = useState([])
    const [fullName, setFullName] = useState ({})
    const [newResponseInfo, setNewResponseInfo] = useState([])
    const [hide, setHide] = useState(false)
    const [loading, setLoading] = useState(false)
    useEffect(async()=>{
        setLoading(true)
        let usersList = (await axios.get('https://api.github.com/users?since=0&per_page=20')).data
        setResponseInfo(usersList)
        setLoading(false)
    },[])

    const click = (index) => {
        responseInfo.forEach(async (v, inde)=>{
            if (index === inde){
                let name = (await axios.get(`https://api.github.com/users/${v.login}`)).data
                let commmitList = (await axios.get(`https://api.github.com/users/${v.login}/received_events?per_page=10`)).data
                commmitList.forEach((v)=>{
                    v.created_at = new Date(v.created_at)
                })
                setFullName(name)
                setCommitInfo(commmitList)
            }
        })
        setHide(true)
    }

    const nextClick  = async () => {
        setLoading(true)
        let lastArray = responseInfo[responseInfo.length - 1]
        let newArray = [...responseInfo]
        let usersList = (await axios.get(`https://api.github.com/users?since=${lastArray.id}&per_page=20`)).data
        setResponseInfo(usersList)
        setNewResponseInfo(newArray)
        setLoading(false)
        setHide(false)
    }
    const prevClick  = async () => {
        setLoading(true)
        let lastArray = newResponseInfo[0].id - 1
        let usersList = (await axios.get(`https://api.github.com/users?since=${lastArray}&per_page=20`)).data
        setResponseInfo(usersList)
        setLoading(false)
        setHide(false)
    }

    return (
        <>
        <div className='main_flex'>
                <Users loading={loading} click={click} responseInfo={responseInfo} />
                <button onClick={prevClick}>prev</button>
                <button onClick={nextClick}>next</button>
        </div>
                {hide &&
                    <Commit  fullName = {fullName} commitInfo = {commitInfo}/>
                }
        </>
    );
};

export default Main;
