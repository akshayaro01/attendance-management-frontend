import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
function AnimationHOC(props) {
    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.2 }}
            >
                {props.children}
            </motion.div>
        </AnimatePresence>
    )
}
export default AnimationHOC