import React, { useState } from 'react'
import Header from './Header'

const Drawer = () => {
    const [open, setOpen] = useState(false);
    const toggleDrawer = () => setOpen(!open);

    return (
        <>
        <Header onMouseEnter={toggleDrawer} />
        <section className={`${open ? '-translate-x-0' : '-translate-x-full'} ease-in-out duration-300`}>
            <div onMouseLeave={toggleDrawer} className="w-screen h-screen md:w-1/3">
                <div className={"flex flex-col p-4 pt-10 gap-2 overflow-scroll"}>
                    <ul className='hover:underline underline-offset-2'>Men</ul>
                    <ul className='hover:underline underline-offset-2'>Women</ul>
                    <ul className='hover:underline underline-offset-2'>Accessories</ul>
                    <ul className='hover:underline underline-offset-2'>About</ul>
                </div>
            </div>
        </section>    
        </>    
    )
}

export default Drawer