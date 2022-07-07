import React from "react";
import { useState } from "react";
import { useDispatch , useSelector } from "react-redux/es/exports";
import { addUser, removeUser, resetUser } from "../../../redux/user/userActions";

const UserContainer = () => {
    const users = useSelector((state) => state)
    const dispatch = useDispatch()
    const [input, setInput] = useState("")

    const addUserHandler = () => {
        dispatch(addUser(input))
        setInput("")
    }

    const removeUserHandler = () => {
        dispatch(removeUser(input))
    }

    const resetUserHandler = () => {
        dispatch(resetUser)
    }







    return (
    <div className="space-y-4">
        <h1 className="text-3xl"><strong>User Container</strong></h1>
        <div className="text-xl">Users</div>
        <input className='border border-gray-300 px-3 py-2 rounded-md' type='text' value={input} onChange={(event) => setInput(event.target.value)} />
        <div className="flex flex-col space-y-2 w-1/2 mx-auto">
            <button className="bg-emerald-500 text-white px-3 py-2 rounded-md" onClick={addUserHandler} >Add User</button>
            <button className="bg-red-500 text-white px-3 py-2 rounded-md" onClick={removeUserHandler} >Remove User</button>
            <button className="bg-indigo-500 text-white px-3 py-2 rounded-md" onClick={resetUserHandler} >Reset Users</button>
        </div>
    </div>)
}

export default UserContainer