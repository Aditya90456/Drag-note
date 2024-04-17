import React, { useRef } from 'react'
import Card from './Card'
import { data } from 'autoprefixer'
function fg() {
  const d=useRef(null);
  const Data=[
   {
    dec:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestiae odit dolorem sit quis cum modi minus accusantium?",
    filename:".4mb",
    close:true,
    tag:{
      isopen:true,
      tittle:"Download Now",
      color:'green',
    }
   } ,
   {
    dec:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestiae odit dolorem sit quis cum modi minus accusantium?",
    filename:".4mb",
    close:true,
    tag:{
      isopen:true,
      tittle:"Download Now",
      color:'green',
    }
   } ,
   {
    dec:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur molestiae odit dolorem sit quis cum modi minus accusantium?",
    filename:".4mb",
    close:true,
    tag:{
      isopen:true,
      tittle:"Download Now",
      color:'green',
    }
   } ,
  ]
  return (
    
    <div d={d} className='fixed top-0 left-0 z-[3] w-full h-screen flex gap-8 p-8'>
        {
        Data.map((items,index)=>(
          <Card data={items} r={d}/>
        ))
        }
    </div>
  )
}

export default fg