import React from "react";
import { FaRegStickyNote } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";


function Card({data, r}) {
  return (
    <motion.div drag className="relative h-72 w-60 bg-red-500 rounded-[50px] text-white py-10 px-8 overflow-hidden ">
      <FaRegStickyNote />
      <p className="font-semibold mt-5 text-sm leading-tight">{data.dec}
      </p>
      <div className="footer absolute bottom-0 w-full left-0   ">
        <div className="flex items-center justify-between mb-3 py-3 px-8">
          <h3>{data.filename}</h3>
          <span className="h-5 w-5 rounded-full  bg-zinc-200 flex items-center justify-center">
          {data.close ? <IoCloseCircleOutline/> : <FaDownload/>}
          </span>
        </div>
        {
          data.tag.isopen &&(
             <div className={`tag w-full py-4 ${
              data.tag.color=="green" ? "bg-green-500" : "bg-red-600"
             } flex items-center justify-center`}>
          <h3 className="text-white">
          Download Now
        </h3>
        </div>
          )
        
          }
       
      </div>
    </motion.div>
  );
}

export default Card;
