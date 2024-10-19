import React,{useState} from 'react'

export default function About( {dayLightColorSetting}) {

    
    const {darkStateModifier,darkModeState} =dayLightColorSetting;

    // function to modify darkmode state variable
    


    


return (
    <div className={` about-us-${darkModeState}-container `} >
        <div className="container mx-6 mb-5 px-0 pt-5 "  >
            
                <div className="accordion "  id="accordionExample">
                    <div className="accordion-item "  >
                            <h2 className={`d-flex justify-content-center pb-3 rounded heading-${darkModeState}-container `} >
                            
                            About Us
                            </h2>
                            
                            <div className={`accordion-body rounded body-${darkModeState}-container`} >
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim error nobis provident praesentium libero esse quo deleniti, aliquam perspiciatis alias recusandae inventore perferendis ipsam nam obcaecati dignissimos tempora totam beatae animi suscipit in veritatis quae! Impedit cupiditate tempora beatae voluptatibus consequatur rem quibusdam doloremque molestiae possimus atque sit illum distinctio omnis provident suscipit eligendi ducimus officiis magnam, adipisci a nam. Voluptates dolore deserunt explicabo voluptas impedit, hic amet doloribus repudiandae ipsum, repellat, molestias reprehenderit quibusdam. Officia assumenda odit rem tempore dolore sint commodi, neque voluptatem. Numquam, expedita dolore, earum fuga aliquid mollitia molestiae libero recusandae ut at, odit tempore nisi.
                            </div>
                        
                    </div>
                
                </div>
        </div>



    </div>
)
}

