import './trailer.scss'
import HomeSection from '../HomeSection'
import { useEffect, useRef } from 'react'
import {bg3, trailerImg} from '../../../assets/images'

const Trailer = (props) => {
    const iframeRef = useRef(null)
    useEffect(()=>{
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px'
        iframeRef.current.setAttribute('height', height)
    },[])
  return (
    <HomeSection
        className = {`trailer ${props.isActive ? 'active':''}`}
        contentClassName = "over-lay trailer__content"
        bgImage={bg3}
    >
        <div className="trailer__content__img">
            <img src={trailerImg} alt="" />
        </div>
        <div className="trailer__content__info">
            <div className="title">
                <span>Compete with</span>
                <h2 className="main-color">
                    Friends
                </h2>
            </div>
            <div className="video">
                <iframe
                    ref={iframeRef} 
                    src="https://www.youtube.com/embed/TFzkbos0oeo" 
                    width="100%"
                    title='trailer'                
                ></iframe>
            </div>
        </div>
    </HomeSection>
  )
}

export default Trailer