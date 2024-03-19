import BusinessContainer from '@/components/BusinessContainer'
import SectionBanner from '@/components/SectionBanner'
import React from 'react'

const page = () => {
    return (
        <div>
            <SectionBanner
                title={"Businesses"}
                image={"https://images.pexels.com/photos/1126728/pexels-photo-1126728.jpeg?auto=compress&cs=tinysrgb&w=1600"}
            />
            <BusinessContainer />
        </div>
    )
}

export default page