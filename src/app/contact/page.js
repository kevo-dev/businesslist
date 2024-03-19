import ContactSection from '@/components/ContactSection'
import SectionBanner from '@/components/SectionBanner'
import React from 'react'

const page = () => {
    return (
        <div>
            <SectionBanner
                title={"Contact"}
                image={"https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1600"}
            />
            <ContactSection />
        </div>
    )
}

export default page