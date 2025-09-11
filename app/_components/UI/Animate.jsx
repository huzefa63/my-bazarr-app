import * as motion from 'motion/react-client';
function Animate({children,delay = 0,type='up',distance='15px',onView=false}) {
    if(type==='up')return (
      <motion.div
        whileInView={onView && { translateY: "0px", opacity: 1 }}
        initial={{ translateY: distance, opacity: 0 }}
        animate={!onView && { translateY: "0px", opacity: 1}}
        transition={{ delay: delay, duration: 1, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    );
    if(type==='down')return (
        <motion.div initial={{translateY:`-${distance}`,opacity:0}} animate={{translateY:'0px',opacity:1}} transition={{delay:delay,duration:0.5,ease:'easeInOut'}}>
            {children}
        </motion.div>
    )
    if(type==='right')return (
        <motion.div initial={{translateX:`-${distance}`,opacity:0}} animate={{translateX:'0px',opacity:1}} transition={{delay:delay,duration:0.5,ease:'easeInOut'}}>
            {children}
        </motion.div>
    )
    if(type==='left')return (
        <motion.div initial={{translateX:distance,opacity:0}} animate={{translateX:'0px',opacity:1}} transition={{delay:delay,duration:0.5,ease:'easeInOut'}}>
            {children}
        </motion.div>
    )
}

export default Animate
