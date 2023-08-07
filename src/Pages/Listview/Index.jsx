import React from 'react'
import MainHeader from '../../Component/Common/MainHeader'
import SubHeader from '../../Component/Common/SubHeader'
import NewLatter from '../../Component/Common/Newlatter'
import Footer from '../../Component/Common/Footer'
import LeftNavigation from '../../Component/Common-2/LeftNavigation'
import Content from '../../Component/Common-2/Content'

export default function ListView() {
    return (
        <div>
            <MainHeader />
            <SubHeader />
            <div className='flex justify-between px-10'>
                <div className='w-[240]'>
                    <LeftNavigation  />

                </div>
                <div className='w-3/4'>
                    <Content />
                </div>
            </div>
            <NewLatter />
            <Footer />



        </div>
    )
}
