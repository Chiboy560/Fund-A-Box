import React from 'react'
import Card from '../components/card' 
import { db } from '../config/firebase'
import { collection,  addDoc} from 'firebase/firestore'
import logo from '../assets/logo.png'

const Feed = () => {
    return (
        <div>
            <div>
                <h1 className="text-center text-3xl font-semibold py-4">Feed</h1>
            </div>
            <div className="flex  justify-center min-h-screen bg-white">
                <Card
                  imagePath={logo}  // Pass the imported image directly
                  title={"Title"}  // Static data for now
                  text={"Text"}  // Static content
                  tags={["#gardening", "#community", "#fundabox"]}  // Static tags for now
                  height="500px"  // Pass the custom height as a prop
                />
            </div>
        </div>
    )
}

export default Feed;