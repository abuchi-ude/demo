'use client'
import Image from 'next/image'
import Logo from '../public/icons/logo.svg'
import Robot from '../public/icons/ai-robot.svg'
import Home from '../public/icons/home.svg'
import Robot01 from '../public/icons/robot-01.svg'
import Activity from '../public/icons/activity.svg'
import Box from '../public/icons/box.svg'
import Pill from '../public/icons/pill.svg'
import People from '../public/icons/people.svg'
import Settings from '../public/icons/setting-2.svg'
import MiniPic from '../public/icons/mini-pic.svg'
import Link from 'next/link'
import { usePathname } from "next/navigation"



const SideBar = () => {
    const pathname = usePathname();
  
    
  return (
    <div className='bg-n20 border-r-[1.5px] border-[#DEE1E1] px-4 py-2 gap-2 flex-col flex'>
        {/* Section for Logo */}
        <section id='logo' className='flex gap-2 items-center py-4 border-b mb-2 border-[#E1E1E1]'>
            <Image src={Logo} alt="Logo" className='border border-[#96A7A9] bg-[#E6EAEA]'/>
            <h1 className='font-semibold text-xl'>MHI Intellicare</h1>
        </section>
        <section className='bg-s50 border border-s75 flex mb-2 p-2 gap-2 rounded-lg'>
            <div>
                <Image src={Robot} alt='Ai-robot' />
            </div>
            <div className='flex flex-col gap-2 rounded-lg'>
                <p className='font-medium text-sm'>Ready to assist</p>
                <p className='text-xs'>Monitoring prescriptions and inventory</p>
                <button className='bg-btn px-4 rounded-md py-[10px] w-fit text-sm font-semibold text-white cursor-pointer'>Start Review</button>
            </div>
        </section>
        <section className='flex flex-col gap-4 '>            
            <div >
                <Link href={'/dashboard'} className={` ${pathname === '/dashboard' && 'bg-[#107082]'} flex items-center gap-2 text-[#949EA0] font-medium px-6 py-[10px]`}>
                <Image src={Home} alt='Home' />
                <p>Dashboard</p>
                </Link>

            </div>
            <div>
                <Link href={'/'} className={` ${pathname === '/' && 'bg-[#107082]'}  flex items-center gap-2 text-[#949EA0] font-medium px-6 py-[10px]`}>

                <Image src={Pill} alt='Pill' />
                <p>Prescription</p>
                </Link>

            </div>
            <div>
                <Link href={'/inventory'} className={` ${pathname === '/inventory' && 'bg-[#107082]'} flex items-center justify-start gap-2 text-[#949EA0] font-medium pl-3 pr-6 py-[10px]`}>
                <Image src={Box} alt='Inventory' />
                <p>Inventory</p>
                </Link>
            </div>
            <div>
                    <Link href={'/insights'} className={` ${pathname === '/insights' && 'bg-[#107082]'} flex items-center gap-2 text-[#949EA0] font-medium px-6 py-[10px]`}>
                <Image src={Activity} alt='insights' />
                <p>Insights</p>
                </Link>
            </div>
            <div>
                <Link href={'/patients'} className={` ${pathname === '/patients' && 'bg-[#107082]'} flex items-center gap-2 text-[#949EA0] font-medium px-6 py-[10px]`}>
                <Image src={People} alt='People' />
                <p>Patients</p>
                </Link>

            </div>
            <div>
                <Link href={'/ai_assistant'} className={` ${pathname === '/ai_assistant' && 'bg-[#107082]'} flex items-center gap-2 text-[#949EA0] font-medium px-6 py-[10px]`}>
                <Image src={Robot01} alt='Ai-Assistant' />
                <p>Ai Assistant</p>
                </Link>
            </div>
            <div>
                <Link href={'/settings'} className={` ${pathname === '/settings' && 'bg-[#107082]'} flex items-center gap-2 text-[#949EA0] font-medium px-6 py-[10px]`}>
                <Image src={Settings} alt='Settings' />
                <p>Settings</p>
                </Link>
            </div>
        </section>
        <section className='flex mt-80 gap-1'>
            <div>
                <Image src={MiniPic} alt='Profile-pic'/>
            </div>
            <div>
                <p className='text-sm font-semibold'>Reuben O.</p>
                <p className='text-xs'>Chief Pharmacist</p>
            </div>
        </section>
    </div>
  )
}

export default SideBar


// export const SideBarMobile = () => {
//     const pathname = usePathname();
  
    
//   return (
//     <div className='bg-n20 border-r-[1.5px] border-[#DEE1E1] px-4 py-2 gap-2 flex-col flex'>
//         {/* Section for Logo */}
//         <section id='logo' className='flex gap-2 items-center py-4 border-b mb-2 border-[#E1E1E1]'>
//             <Image src={Logo} alt="Logo" className='border border-[#96A7A9] bg-[#E6EAEA]'/>
//             <h1 className='font-semibold text-sm'>MHI Intellicare</h1>
//         </section>
//         <section className='bg-s50 border border-s75 flex mb-2 p-2 gap-2 rounded-lg'>
//             <div>
//                 <Image src={Robot} alt='Ai-robot' />
//             </div>
//             <div className='flex flex-col gap-2 rounded-lg'>
//                 <p className='font-medium text-xs'>Ready to assist</p>
//                 <p className='text-[]'>Monitoring prescriptions and inventory</p>
//                 <button className='bg-btn px-4 rounded-md py-[10px] w-fit text-sm font-semibold text-white'>Start Review</button>
//             </div>
//         </section>
//         <section className='flex flex-col gap-4 '>            
//             <div >
//                 <Link href={'/dashboard'} className={` ${pathname === '/dashboard' && 'bg-[#107082]'} flex items-center gap-2 text-[#949EA0] font-medium px-6 py-[10px]`}>
//                 <Image src={Home} alt='Home' />
//                 <p>Dashboard</p>
//                 </Link>

//             </div>
//             <div>
//                 <Link href={'/'} className={` ${pathname === '/' && 'bg-[#107082]'}  flex items-center gap-2 text-[#949EA0] font-medium px-6 py-[10px]`}>

//                 <Image src={Pill} alt='Pill' />
//                 <p>Prescription</p>
//                 </Link>

//             </div>
//             <div>
//                 <Link href={'/inventory'} className={` ${pathname === '/inventory' && 'bg-[#107082]'} flex items-center justify-start gap-2 text-[#949EA0] font-medium pl-3 pr-6 py-[10px]`}>'
//                 <Image src={Box} alt='Inventory' />
//                 <p>Inventory</p>
//                 </Link>
//             </div>
//             <div>
//                     <Link href={'/insights'} className={` ${pathname === '/insights' && 'bg-[#107082]'} flex items-center gap-2 text-[#949EA0] font-medium px-6 py-[10px]`}>
//                 <Image src={Activity} alt='insights' />
//                 <p>Insights</p>
//                 </Link>
//             </div>
//             <div>
//                 <Link href={'/patients'} className={` ${pathname === '/patients' && 'bg-[#107082]'} flex items-center gap-2 text-[#949EA0] font-medium px-6 py-[10px]`}>
//                 <Image src={People} alt='People' />
//                 <p>Patients</p>
//                 </Link>

//             </div>
//             <div>
//                 <Link href={'/ai_assistant'} className={` ${pathname === '/ai_assistant' && 'bg-[#107082]'} flex items-center gap-2 text-[#949EA0] font-medium px-6 py-[10px]`}>
//                 <Image src={Robot01} alt='Ai-Assistant' />
//                 <p>Ai Assistant</p>
//                 </Link>
//             </div>
//             <div>
//                 <Link href={'/settings'} className={` ${pathname === '/settings' && 'bg-[#107082]'} flex items-center gap-2 text-[#949EA0] font-medium px-6 py-[10px]`}>
//                 <Image src={Settings} alt='Settings' />
//                 <p>Settings</p>
//                 </Link>
//             </div>
//         </section>
//         <section className='flex mt-80 gap-1'>
//             <div>
//                 <Image src={MiniPic} alt='Profile-pic'/>
//             </div>
//             <div>
//                 <p className='text-sm font-semibold'>Reuben O.</p>
//                 <p className='text-xs'>Chief Pharmacist</p>
//             </div>
//         </section>
//     </div>
//   )
// }

