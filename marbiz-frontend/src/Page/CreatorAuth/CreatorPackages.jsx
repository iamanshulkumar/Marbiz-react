import React from 'react'
import PackagesTabs from '../../Components/PackagesTabs'
import { Link } from 'react-router-dom'


const CreatorPackages = ({ pagetitle }) => {
    return (
        <>
            {/* Packages section */}
            <div className="container-fluid">
                <div className="row">
                    <div className='d-inline-flex justify-content-between my-2'>
                        <h1 className="text-center">{pagetitle}</h1>
                        <Link to="/creatorDashboard/AddPackage">
                            <button className="btn-global px-3" type="button">Add Package</button>
                        </Link>
                    </div>
                    <hr className="hr hr-blurry border border-danger border-2" />
                    <PackagesTabs />


                    
                </div>
            </div>
        </>
    )
}

export default CreatorPackages