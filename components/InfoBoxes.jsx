import React from 'react'
import InfoBox from './InfoBox'

const InfoBoxes = () => {
  return (
      <section>
      <div className="container-xl lg:container m-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <InfoBox
             heading="For Renters"
             backgroundClolor = "bg-gray-100"
             textColor = "text-gray-600"
             buttonInfo={{
                  text: 'Browse Properties',
                  backgroundColor: "bg-black", 
                  link: "/properties"}}
            >
                  Find your dream rental property.Bookmamrk properties and contact owners
            </InfoBox>
          <InfoBox
             heading="For Property Owners"
             backgroundClolor = "bg-blue-100"
             textColor = "text-gray-600"
             buttonInfo={{
                  text: 'Add Properties',
                  backgroundColor: "bg-blue-500", 
                  link: "/properties"}}
            >
            List your properties and reach potential tenants. Rent as an
            airbnb or long term.
            </InfoBox>
        </div> 
      </div>
    </section>
  )
}

export default InfoBoxes 