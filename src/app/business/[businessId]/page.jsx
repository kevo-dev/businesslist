import BusinessPage from '@/components/BusinessPage';
import BusinessPageBanner from '@/components/BusinessPageBanner';
import React from 'react'

const page = ({ params }) => {
    const { businessId } = params;
    return (
        <div>
            <BusinessPageBanner />
            <BusinessPage />
        </div>
    )
}

export default page