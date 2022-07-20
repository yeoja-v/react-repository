
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../../redux/profileUser/profileUserActions'
import axios from 'axios'

// keyword use is the custom hook naming convention

const useProfileUser = (userId) => {
    const dispatch = useDispatch()
    const profileUser = useSelector(state => state.profileUser)


    useEffect(() => {
      // check if user profile is in redux
      //if user profile exists then return user profile to be used inside component
      //otherwise, make api call to get user info then set user info in redux

        axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(({ data }) => dispatch(setUser(data)))
        .catch(err => console.log(err))
      }, [userId, dispatch, setUser])

       //then return that user profile
      return profileUser
}

export default useProfileUser