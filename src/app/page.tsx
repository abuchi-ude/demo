import React from 'react'
import Image from 'next/image'
import Notification from '/Users/user/Desktop/mhi-demo/public/icons/notification.svg'
import Ellipse from '/Users/user/Desktop/mhi-demo/public/icons/Ellipse 20.svg'
import AddSign from '/Users/user/Desktop/mhi-demo/public/icons/add-circle.svg'
import PrescribRobot from '/Users/user/Desktop/mhi-demo/public/icons/prescrib-robot.svg'
import MainPic from '/Users/user/Desktop/mhi-demo/public/icons/main-pic.svg'
import None from '/Users/user/Desktop/mhi-demo/public/icons/none.svg'
import Low from '/Users/user/Desktop/mhi-demo/public/icons/low.svg'
import Moderate from '/Users/user/Desktop/mhi-demo/public/icons/moderate.svg'
import High from '/Users/user/Desktop/mhi-demo/public/icons/high.svg'
import ThreeDot from '/Users/user/Desktop/mhi-demo/public/icons/three-dot.svg'


const Prescription = () => {

 
    
  return (
    <main>
      <section id='First-section' className='mb-4'>
        <div id='Top-of-section' className='flex justify-between mb-4 pb-4 border-b border-[#E1E1E1]'>
          <section>
            <h1 className='md:text-xl text-sm font-semibold'>Prescription Review</h1>
            <p className='text-xs'>Monday, July 21, 2025 - 5:01 PM</p>
          </section>
          <section className='flex gap-2'>
            <Image src={Notification} alt='notification' className='p-1 w-10 h-10 border border-[#DEE1E1]'/>
            <Image src={Ellipse} alt='ellipse' />
            <div className='flex flex-col justify-between'>
              <p className='text-sm font-semibold'>Reuben O.</p>
              <p className='text-xs'>Chief Pharmacist</p>
            </div>
          </section>
        </div>
        <div id='Bottom-of-section' className='flex md:flex-row flex-col md:gap-0 gap-2  justify-between'>
          <section className='flex gap-2 justify-center md:justify-start'>
            <Image src={PrescribRobot} alt=''/>
            <div>
              <p className='md:text-2xl text-base font-semibold text-[#949EA0]'><span className='text-black'>AI-Powered...</span> <br />Validation & Safety Checks.</p>
            </div>
          </section>
          <section className='grid grid-cols-2 items-center gap-2 text-[10px] md:text-base'>
            <button className='text-white bg-[#107082] font-bold rounded-md py-2 px-4 flex gap-2 items-center '>
              <Image src={AddSign} alt=''/>
              <p>Upload Prescription</p>
            </button>
            <button className='text-[#107082] border font-semibold rounded-md py-2 px-4 border-[#DEE1E1]'>Sync from EHR</button>
            
          </section>
        </div>
      </section>
      <section id='second-section' className='bg-[#F5F6F6] mb-4 p-5 rounded-[20px]'>
         <div className='flex justify-between border-b border-[#E1E1E1] pb-4 mb-4'>
          <h3 className='md:text-[18px] text-sm font-medium flex items-center'>Associated Patient Data</h3>
          <button className='bg-[#00AEEF] md:text-[16px] text-xs rounded-md py-2 px-4 text-white'>Run AI Check</button>
        </div>
        <div id='patient-data' className='bg-white border border-[#DEE1E1]  rounded-lg py-8 flex flex-col md:flex-row px-4'>
          <section id='user-details' className='md:w-5/12 w-full flex justify-between gap-4 md:border-0 border-b border-[#E1E1E1] pb-8'>
            <figure id='main-pic' className='text-center'>
              <Image src={MainPic} alt='pic' className='mb-2'/>
              <p className='text-xl mb-1'>Reuben Oliver</p>
              <p className='text-[#758384] text-sm'>PT-2648-13</p>
            </figure>
            <div id='details' className='flex flex-col justify-between border-0 md:border-r border-[#E1E1E1] pr-8 '>
              <dl >
                <dt className='text-[#667577] text-sm mb-1'>Gender:</dt>
                <dd className='font-semibold text-[#667577] text-sm'>Female</dd>
              </dl>
              <dl>
                <dt className='text-[#667577] text-sm mb-1'>Date of Birth:</dt>
                <dd className='font-semibold text-[#667577] text-sm'>March 14, 1985</dd>
              </dl>
              <dl>
                <dt className='text-[#667577] text-sm mb-1'>Number:</dt>
                <dd className='font-semibold text-[#667577] text-sm'>+234 9023456783</dd>
              </dl>
            </div>
          </section>
          <section id='user-data' className='flex md:px-8 justify-between md:w-7/12 w-full '>
            <div className='flex flex-col justify-between'>
              <dl>
                <dt className='text-[#667577] text-sm mb-1'>Chronic Condition:</dt>
                <dd className='font-semibold text-[#667577] text-sm'>Hypertension, Type 2 Diabetes</dd>
              </dl>
              <dl className='mt-4'>
                <dt className='text-[#667577] text-sm mb-1'>Medication History:</dt>
                <dd className='font-semibold text-[#667577] text-sm mb-1'>Metformin 500mg - 2x daily</dd>
                <dd className='font-semibold text-[#667577] text-sm'>Lisinopril 10mg - 1x daily</dd>
              </dl>
              <dl>
                <dt className='text-[#667577] text-sm mb-1'>Recently Discontinued:</dt>
                <dd className='font-semibold text-[#667577] text-sm'>Aspirin - stopped two weeks ago</dd>
              </dl>
            </div>
            <div>
              <dl>
                <dt className='text-[#667577] text-sm'>Allergies:</dt>
                <dd className='font-semibold text-[#667577] text-sm'>Penicillin, Sulfa drugs</dd>

                <dt className='text-[#667577] text-sm'>Last visit:</dt>
                <dd className='font-semibold text-[#667577] text-sm'>July 11, 2025</dd>
              </dl>
            </div>
          </section>
        </div>
      </section>
      <section id='third-section' className='rounded-[20px] bg-[#F5F6F6] p-5'>
        <div className='flex justify-between border-b border-[#E1E1E1] pb-4 mb-4'>
          <p className='font-medium text-[18px] text-[#00191C]'>Ai Review Summary</p>
          <p className='font-semibold text-sm text-[#107082]'>View All</p>
        </div>
        <div className=' flex flex-col gap-4'>
          <section className='flex rounded-lg border border-[#DEE1E1] bg-white'>
            <div className='bg-[#FF3B30] w-[6px] rounded-l-[6px]'> </div>
            <div className='flex p-2 justify-between w-full'>
              <div className='flex gap-4'>
                <div className='bg-[#FFEDED] items-center flex justify-center h-10 w-10 rounded-[50%]'>
                  <Image src={High} alt='high'/>
                </div>
                <div className='flex flex-col gap-2'>
                  <h3 className='font-medium'>Drug Interaction Detected</h3>
                  <p className='text-sm font-medium text-[#758384]'>Amoxicilin is listed in allergy profile</p>
                  <p className='text-sm text-[#949EA0]'>Reduce dosage to 250mg</p>
                </div>
              </div>
              <div className='flex flex-col justify-between'>
                <p className='flex items-center justify-end gap-4 '><span className='px-3 text-xs font-medium py-1 bg-[#FFDCDB] text-[#FF3B30] rounded-[12px]'>High </span><Image src={ThreeDot} alt='' className='cursor-pointer'/></p>
                <p className='text-xs font-semibold text-[#00AEEF]'>AI Risk Score: 94%</p>
              </div>
            </div>
          </section>
          <section className='flex rounded-lg border border-[#DEE1E1] bg-white'>
            <div className='bg-[#EC7216] w-[6px] rounded-l-[6px]'></div>
            <div className='flex p-2 justify-between w-full'>
              <div className='flex gap-4'>
                <div className='bg-[#FDF1E8] items-center flex justify-center h-10 w-10 rounded-[50%]'>
                  <Image src={Moderate} alt='moderate'/>
                </div>
                <div className='flex flex-col gap-2'>
                  <h3 className='font-medium'>Duplicate Medication Alert</h3>
                  <p className='text-sm font-medium text-[#758384]'>Patient is already on Metformin</p>
                  <p className='text-sm text-[#949EA0]'>Reuben O.  (RX-2048-13)</p>
                </div>
              </div>
              <div className='flex flex-col justify-between'>
                <p className='flex items-center justify-end gap-4 '><span className='px-3 text-xs font-medium py-1 bg-[#FDF1E8] text-[#EC7216] rounded-[12px]'>Moderate </span><Image src={ThreeDot} alt='' className='cursor-pointer'/></p>
                <p className='text-xs font-semibold text-[#00AEEF]'>AI Risk Score: 81%</p>
              </div>
            </div>
          </section>
          <section className='flex rounded-lg border border-[#DEE1E1] bg-white'>
            <div className='bg-[#F99927] w-[6px] rounded-l-[6px]'></div>
            <div className='flex p-2 justify-between w-full'>
               <div className='flex gap-4'>
                <div className='bg-[#FEF5E9] items-center flex justify-center h-10 w-10 rounded-[50%]'>
                  <Image src={Low} alt='low'/>
                </div>
                <div className='flex flex-col gap-2'>
                  <h3 className='font-medium'>Dosage Warning</h3>
                  <p className='text-sm font-medium text-[#758384]'>Ibuprofen usage exceeds safe limits</p>
                  <p className='text-sm text-[#949EA0]'>Reduce dosage to 250mg</p>
                </div>
              </div>
              <div className='flex flex-col justify-between'>
                <p className='flex items-center justify-end gap-4 '> <span className='px-3 text-xs font-medium py-1 bg-[#FEF5E9] text-[#F99927] rounded-[12px]'>Low </span><Image src={ThreeDot} alt='' className='cursor-pointer'/></p>
                <p className='text-xs font-semibold text-[#00AEEF]'>AI Risk Score: 94%</p>
              </div>
            </div>
          </section>
          <section className='flex rounded-lg border border-[#DEE1E1] bg-white'>
            <div className='bg-[#00C159] w-[6px] rounded-l-[6px]'></div>
            <div className='flex p-2 justify-between w-full'>
               <div className='flex gap-4'>
                <div className='bg-[#E5F9EE] items-center flex justify-center h-10 w-10 rounded-[50%]'>
                  <Image src={None} alt='none'/>
                </div>
                <div className='flex flex-col gap-2'>
                  <h3 className='font-medium text-sm'>No Issues Detected</h3>
                  <p className='text-sm font-medium text-[#758384]'>Paracetamol 500mg</p>
                  <p className='text-sm text-[#949EA0]'>Dosage is Normal</p>
                </div>
              </div>
              <div className='flex flex-col justify-between'>
                <p className='flex items-center justify-end gap-4 '><span className='px-3 text-xs font-medium py-1 bg-[#E5F9EE] text-[#00C159] rounded-[12px]'>None </span><Image src={ThreeDot} alt='' className='cursor-pointer'/></p>
                <p className='text-xs font-semibold text-[#00AEEF]'>AI Risk Score: 91%</p>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}

export default Prescription
