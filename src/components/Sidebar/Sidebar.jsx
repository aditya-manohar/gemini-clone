import React, { useContext, useState } from 'react'
import { FcHeadset } from 'react-icons/fc'
import { IoMenu } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { LuMessageSquare } from "react-icons/lu";
import { FiHelpCircle } from "react-icons/fi";
import { PiClockCountdownFill } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import './Sidebar.css'
import { Context } from '../../context/Context';

const Sidebar = () => {

    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context)

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className="sidebar">
            <div className="top">
                <div className="menu">
                    <IoMenu onClick={() => setExtended(prev => !prev)} /><br />
                </div>
                <div onClick={() => newChat()} className="new-chat">
                    <FaPlus className='icon' />
                    {extended ? <p>New chat</p> : null}
                </div>
                {extended
                    ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {prevPrompts.map((item, index) => {
                            return (
                                <div onClick={() => loadPrompt(item)} className="recent-entry">
                                    <LuMessageSquare className='icon' />
                                    <p>{item.slice(0, 15)} ...</p>
                                </div>
                            )
                        })}

                    </div>

                    : null
                }
            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <FiHelpCircle className='icon' />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <PiClockCountdownFill className='icon' />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <IoSettingsOutline className='icon' />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar