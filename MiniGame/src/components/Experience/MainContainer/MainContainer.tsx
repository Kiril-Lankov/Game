import { Container, Sprite } from "@pixi/react";
import { Texture } from "pixi.js";
import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import backgroundAsset from '../../../assets/space-stars.jpg'
import heroAsset from '../../../assets/hero.png'
import coinAssetGold from '../../../assets/coin-gold.png'
import coinAssetRed from '../../../assets/coin-red.png'
import { Level } from "../../Levels/Level";
import { Hero } from "../../Hero/Hero";
import { TILE_SIZE } from "../../../constants/game-world";
import { Camera } from "../../Camera/Camera";
import { Coin } from "../../Coin/Coin";


interface IMainContainerProps{
    canvasSize: { width: number; height: number}
}

 export const MainContainer = ({canvasSize, children}: PropsWithChildren<IMainContainerProps>) => {
    const [heroPosition, setHeroPosition] = useState({x:0, y:0})
    const backgroundTexture = useMemo(() => Texture.from(backgroundAsset), [])
    const heroTexture = useMemo(() => Texture.from(heroAsset), [])
    const coinTextureGold = useMemo(() => Texture.from(coinAssetGold), [])
    const coinTextureRed = useMemo(() => Texture.from(coinAssetRed), [])

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
            <Camera canvasSize={canvasSize} heroPosition={heroPosition}>
            <Level/>
            <Hero 
            texture={heroTexture}
            onMove={updateHeroPosition}/>
            <Coin texture={coinTextureGold} x={5} y={10}/>
            <Coin texture={coinTextureGold} x={6} y={11}/>
            <Coin texture={coinTextureGold} x={7} y={12}/>
            </Camera>
            <Coin texture={coinTextureRed} x={0} y={1}/>
            <Coin texture={coinTextureRed} x={1} y={1}/>
            <Coin texture={coinTextureRed} x={2} y={1}/>
         </Container>
    )
}

