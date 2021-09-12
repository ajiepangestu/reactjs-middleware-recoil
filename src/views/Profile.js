import React from 'react'
import { useRecoilValue } from 'recoil'
import { authenticated } from '../store'

function Profile (props) {
    const auth = useRecoilValue(authenticated)
    return (
        <div className="container">
            {auth.user.name}
        </div>
    )
}

export default Profile
