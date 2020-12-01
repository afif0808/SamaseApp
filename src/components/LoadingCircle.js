import React, { useState, useEffect, useRef } from 'react'

import Svg , {Circle , Rect , Text} from 'react-native-svg'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import { Button } from 'react-native';
export default function LoadingCircle({children , style, onAnimationComplete}) {
    const [fill , setFill] = useState(100)
    const ref = useRef(null)
    const renderChildren = () => {
        if(!!children) {
            return children
        } else {
            return null
        }
    }
    return (
        <AnimatedCircularProgress
            ref={ref}
            style={style}
            size={180}
            width={2}
            fill={fill}
            duration={2000}
            tintColor="#FFBF00"
            onAnimationComplete={() => {
                if(!!onAnimationComplete) {
                    onAnimationComplete()
                }
                if(fill == 0) {
                    setFill(100)
                }
                if(fill == 100) {
                    setFill(0)
                }

            }}
            backgroundColor="#3d5875">
                {renderChildren}
        </AnimatedCircularProgress>
        )
    }
