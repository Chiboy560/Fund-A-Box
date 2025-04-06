import React from 'react'
import Card from '../components/card' 
import { db } from '../config/firebase'
import { collection,  addDoc} from 'firebase/firestore'

const Feed = () => {
    return (
        <div>
            <div>
                <h1>Feed</h1>
            </div>
            <div className="flex items-center justify-center min-h-screen bg-white">
                <Card/>
            </div>
        </div>
        
    )
}
export default Feed;