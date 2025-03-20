import { Container, Sprite } from "@pixi/react";
import { Texture } from "pixi.js";
import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import backgroundAsset from '../../../assets/space-stars.jpg'
import heroAsset from '../../../assets/hero.png'
import { Level } from "../../Levels/Level";
import { Hero } from "../../Hero/Hero";
import { TILE_SIZE } from "../../../constants/game-world";


interface IMainContainerProps{
    canvasSize: { width: number; height: number}
}

 export const MainContainer = ({canvasSize, children}: PropsWithChildren<IMainContainerProps>) => {
    const [heroPosition, setHeroPosition] = useState({x:0, y:0})
    const backgroundTexture = useMemo(() => Texture.from(backgroundAsset), [])
    const heroTexture = useMemo(() => Texture.from(heroAsset), [])

    const updateHeroPosition = useCallback((x: number, y: number) => {
        setHeroPosition({
            x: Math.floor(x/TILE_SIZE),
            y: Math.floor(y/TILE_SIZE)
        })
    }, [])

    
    return (
        <Container>
            <Sprite
            texture={backgroundTexture}
            width={canvasSize.width}
            height={canvasSize.height}
            />
            {children}
            <Level/>
            <Hero 
            texture={heroTexture}
            onMove={updateHeroPosition}/>
        </Container>
    )
}

