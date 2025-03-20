import { Stage } from "@pixi/react"
import { useCallback, useEffect, useState } from "react"
import { calculatecanvasSize } from "../../helpers/common"
import {MainContainer} from "./MainContainer/MainContainer"

export const Experience = () => {
    const [canvasSize, setCanvasSize] = useState(calculatecanvasSize)

    const updateCanvasSize = useCallback(() => {
        setCanvasSize(calculatecanvasSize())
    }, [])

    useEffect (() => {
        window.addEventListener('resize', updateCanvasSize)
        return () => window.removeEventListener('resize', updateCanvasSize)
    }, [updateCanvasSize])
    return (
        <Stage width={canvasSize.width} height={canvasSize.height}>
            <MainContainer canvasSize={canvasSize}>

            </MainContainer>
        </Stage>
    )
}

