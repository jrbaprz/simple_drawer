import React from 'react'
import { useState } from 'react'

const Drawer = () => {

    const [open, setOpen] = useState(false);

    return (
        <container className="flex">
            <div className={`${open ? "w-1/2" : "hidden"} h-screen`}>
                <div className="flex-col p-2 pt-10 bg-gray-100">
                    <li>Men</li>
                    <li>Women</li>
                    <li>Accessories</li>
                    <li>About</li>
                </div>
            </div>
        </container>        
    )
}

export default Drawer