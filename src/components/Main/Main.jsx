import React, { useContext } from "react";
import './Main.css'
import { CiImageOn } from "react-icons/ci";
import { IoMicOutline } from "react-icons/io5";
import { LuSendHorizonal } from "react-icons/lu";
import { IoCompassOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { GoLightBulb } from 'react-icons/go';
import { BiImageAdd } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { Context } from "../../context/Context";
import icon from './bard-icon.svg'

const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);

    return (
        <div className="main">
            <div className="nav">
                <p>Gemini</p>
                <FaUserCircle />
            </div>
            <div className="main-container">

                {!showResult
                    ? <>
                        <div className="greet">
                            <p><span>Hello, Manohar</span></p>
                            <p>How can I help you today?</p>
                        </div>
                        <div className="cards">
                            <div className="card">
                                <p>Suggest beautiful places to see on an upcoming road trip</p>
                                <div className="img"><IoCompassOutline /></div>
                            </div>

                            <div className="card">
                                <p>Help write a SQL to generate a report</p>
                                <div className="img"><FaCode /></div>
                            </div>

                            <div className="card">
                                <p>Act like Mowgli from The Jungle Book and answer questions</p>
                                <div className="img"><GoLightBulb /></div>
                            </div>

                            <div className="card">
                                <p>Give me ideas for what to do with what's in this image?</p>
                                <div className="img"><BiImageAdd /></div>
                            </div>
                        </div>
                    </>
                    :

                    <div className="result">
                        <div className="result-title">
                            <FaUserCircle />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={icon} alt="gemini" />
                            {
                                loading ?
                                    <div className="loader">
                                        <hr />
                                        <hr />
                                        <hr />
                                    </div>
                                    :
                                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            }

                        </div>
                    </div>
                }


                <div className="main-bottom">
                    <div className="search-box">
                        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter a prompt here..." />

                        <div>
                            <div className="img"><CiImageOn className='icon' /></div>
                            <div className="img"><IoMicOutline className='icon' /></div>
                            {input ? <div onClick={() => onSent()} className="img"><LuSendHorizonal className='icon' /></div> : null}
                        </div>

                    </div>
                    <p className="bottom-info">
                        Gemini may display inaccurate info, including about people, so double-check its responses. <u>Your privacy and Gemini Apps</u>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Main;