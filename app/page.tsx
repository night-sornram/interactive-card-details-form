"use client"
import Image from 'next/image'
import { useState } from 'react'

let numberRegex = /^[\d\s]+$/

export default function Home() {
  const [name,setName] = useState("")
  const [number,setNumber] = useState("")
  const [month,setMonth] = useState("")
  const [year,setYear] = useState("")
  const [cvc,setCvc] = useState("")
  const [hasString,setHasString] = useState(false)
  const [complete,setComplete] = useState(false)
  const [checkname,setcheckName] = useState(false)
  const [checknumber,setcheckNumber] = useState(false)
  const [checkmonth,setcheckMonth] = useState(false)
  const [checkyear,setcheckYear] = useState(false)
  const [checkcvc,setcheckCvc] = useState(false)
  const [showname,setShowName] = useState("JANE APPLESEED")
  const [shownumber,setShowNumber] = useState("0000 0000 0000 0000")
  const [showmonth,setShowMonth] = useState("00")
  const [showyear,setShowYear] = useState("00")
  const [showcvc,setShowCvc] = useState("000")
  return (
    <div className=' w-screen flex flex-col md:flex-row h-screen'>
      <div className=' w-1/2 md:flex hidden'>
        <div className='w-2/3  h-full  relative'>
          <Image
          src={"/images/bg-main-desktop.png"}
          width={5000}
          height={5000}
          alt='bg'
          className=' w-full object-cover h-full'/>
          <div className='absolute top-60 -right-52 '>
            <div className=' relative lg:w-auto w-[350px] mr-24'>
              <Image
              src={"/images/bg-card-front.png"}
              width={447}
              height={245}
              alt='front'
              className='object-cover'/>
              <div className=' absolute top-5  text-white left-7'>
                <Image
                width={84}
                height={47}
                alt='logo'
                className=' lg:w-auto md:w-16'
                src={"/images/card-logo.svg"}/>
                <div className=' tracking-[.15em] md:mt-14 lg:mt-20 md:text-lg lg:text-2xl '>
                  {shownumber}
                </div>
                <div className=' uppercase md:mt-2 lg:mt-5 text-xs lg:text-sm flex w-[300px] justify-between'>
                  <div>
                    {showname}
                  </div>
                  <div>
                    {showmonth}/{showyear}
                  </div>
                </div>
              </div>
            </div>
            <div className=' relative mt-7 ml-10 lg:ml-24 lg:w-auto w-[350px]  '>
              <Image
              src={"/images/bg-card-back.png"}
              width={447}
              height={245}
              alt='back'
              className='object-cover '/>
              <div className=' absolute top-[84px]  text-white md:right-12 lg:top-[105px] xl:top-28 lg:right-12'>
                <div className=' text-sm'>
                  {showcvc}
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <div className=' w-full bg-mobile bg-no-repeat bg-cover md:hidden flex '>
        <div className=" w-full grid grid-rows-1 grid-cols-6 gap-4">

          <div className=' relative col-start-2 sm:col-start-3 row-start-1 mt-3 col-span-5'>
            <Image
            src={"/images/bg-card-back.png"}
            width={447}
            height={245}
            alt='back'
            className=' object-cover'/>
            <div className=' absolute min-[540px]:top-28 min-[540px]:left-[360px] min-[385px]:text-base text-sm top-[63px]  min-[350px]:top-[74px] min-[420px]:top-[85px] min-[495px]:top-[30%] right-12 '>
              <div className=' text-white'>
                {showcvc}
              </div>
            </div>
          </div>
          <div className=' ml-5 relative  row-start-1 mt-36 col-start-1 sm:col-start-2 col-span-5'>
            <Image
            src={"/images/bg-card-front.png"}
            width={447}
            height={245}
            alt='front'
            className=' object-cover'/>
            <div className=' p-5 absolute top-0 left-0'>
              <Image
              src={"/images/card-logo.svg"}
              width={84}
              height={47}
              alt='front'
              className='min-[380px]:w-[84px]  w-12 object-cover'/>
              <div className='  tracking-[.15em] min-[480px]:mt-20 mt-10 text-white text-sm min-[342px]:text-base min-[480px]:text-xl '>
                {shownumber}
              </div>
              <div className=' uppercase text-xs  min-[480px]:text-sm min-[340px]:mt-3 mt-1 w-[200px] min-[420px]:w-[250px] flex min-[480px]:w-[320px] text-white justify-between'>
                <div>
                  {showname}
                </div>
                <div>
                  {showmonth}/{showyear}
                </div>
              </div>
            </div>
          </div>
          
        </div>
    
      </div>
   
      
      <div className=' w-full md:w-1/2 flex justify-center items-center'>
        {!complete && (
          <div className='w-11/12 md:p-0 md:pb-0 pb-14 mt-10 md:mt-0  md:w-2/3 space-y-4'>
          <div className='flex space-y-2 flex-col'>
            <div className=' font-medium text-sm uppercase'>
              Cardholder Name
            </div>
            <input onChange={(e)=>{setName(e.currentTarget.value)}} value={name} placeholder='e.g. Jane Appleseed' 
            className={checkname ? "e" : "n"} />
            <div className={checkname ? "s" : "u"}>
              Can't be blank
            </div>
          </div>
          <div className='flex space-y-2 flex-col'>
            <div className=' font-medium text-sm uppercase'>
              Card Number
            </div>
            <input type='tel'  onChange={(e)=>{
              setNumber(e.currentTarget.value)
            }
            } value={number} placeholder='e.g. 1234 5678 9123 0000' 
            className={checknumber ? "e" : (hasString ? "e" : "n")}  />
            <div className={checknumber ? "s" : (hasString ? "s" : "u")}  >
              {checknumber ? "Can't be blank" : (hasString ? "Wrong format,numbers only" : "")}
            </div>
          </div>
          <div className=' flex flex-row'>
            <div className=' md:w-auto w-1/2 space-y-2 flex flex-col'>
              <div className=' font-medium text-sm uppercase'> 
                Exp. Date (MM/YY)
              </div>
              <div className=' flex flex-row'>
                <input onChange={(e)=>{setMonth(e.currentTarget.value)}} value={month} type="text" placeholder='MM' 
                className={checkmonth ? "e1" : "n1"}/>
                <input onChange={(e)=>{setYear(e.currentTarget.value)}} value={year} type="text" placeholder='YY' 
                className={checkyear ? "e3" : "n3"}/>
              </div>
              <div  className={checkyear || checkmonth ? "s" : "u"}>
                Can't be blank
              </div>
            </div>
            <div className='ml-5 md:w-auto w-1/2 space-y-2 flex flex-col'>
              <div className=' font-medium text-sm uppercase'>
                CVC
              </div>
              <input onChange={(e)=>{setCvc(e.currentTarget.value)}} value={cvc} placeholder='e.g. 123' 
              className={checkcvc ? "e2" : "n2"} />
              <div className={checkcvc ? "s" : "u"}>
                Can't be blank
              </div>
            </div>
          </div>
          <button
          onClick={
            ()=>{
              {name === "" ? setcheckName(true) : setcheckName(false)   };
              {number === "" ? setcheckNumber(true) : setcheckNumber(false)  };
              {month === "" ? setcheckMonth(true) : setcheckMonth(false)  };
              {year === "" ? setcheckYear(true) : setcheckYear(false)  };
              {cvc === "" ? setcheckCvc(true) : setcheckCvc(false)  };
              {name === "" ? setShowName("JANE APPLESEED") : setShowName(name)   };
              {number === "" ? setShowNumber("0000 0000 0000 0000") : setShowNumber(number)  };
              {month === "" ? setShowMonth("00") : setShowMonth(month)  };
              {year === "" ? setShowYear("00") : setShowYear(year)  };
              {cvc === "" ? setShowCvc("000") : setShowCvc(cvc)  };

              if(number !== "" ){
                if(number.match(numberRegex) === null){
                  setHasString(true)
                }
                else{
                  setHasString(false)
                }
              }
              
              if(name !== "" && !hasString && number !== "" && month !== "" && year !== "" && cvc !== ""){
                if(number.match(numberRegex) === null){
                  setComplete(false);
                  setHasString(true)
                }
                else{
                  setComplete(true);
                  setHasString(false)
                }
                
              }

            }
          }
          className=' bg-custom-600 text-white  w-full md:w-[300px] lg:w-[420px]  p-3 rounded-md'>
            Confirm
          </button>
        </div>
        )}
        {complete && (
          <div className=' justify-center flex items-center flex-col w-11/12 md:p-0 md:pb-0 pb-14 mt-10 md:mt-0  md:w-2/3 space-y-4'>
            <Image
            src={"/images/icon-complete.svg"}
            width={80}
            height={80}
            alt='complete'/>
            <div className=' text-xl font-bold tracking-widest'>
              THANK YOU!
            </div>
            <div className=' text-custom-500 text-sm'>
              We've added your card details
            </div>
            <button onClick={
              ()=>{
                setComplete(false)
                setName("")
                setNumber("")
                setMonth("")
                setYear("")
                setCvc("")
                setcheckName(false)
                setcheckNumber(false)
                setcheckMonth(false)
                setcheckYear(false)
                setcheckCvc(false)
                setShowName("JANE APPLESEED")
                setShowNumber("0000 0000 0000 0000")
                setShowMonth("00")
                setShowYear("00")
                setShowCvc("000")
                setHasString(false)
              }
            } className=' bg-custom-600 text-white  w-full md:w-[300px] lg:w-[420px]  p-3 rounded-md'>
              Continue
            </button>
          </div>
          
        )}
        
      </div>
    </div>
  )
}
