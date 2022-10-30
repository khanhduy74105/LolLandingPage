import './champion-detail.scss'

import { closeIcon } from '../../../assets/images'
import { useRef } from 'react'
import { useEffect } from 'react'
const ChampionDetail = (props) => {
    const item =props.item
    const iframeRef = useRef(null)
    useEffect(()=>{
        const height = iframeRef.current.offsetWidth * 9 / 16 + 'px'
        iframeRef.current.setAttribute('height', height)
    },[])

    const onClick = () => {
        document.querySelector(`#champ-detail-${props.id}`).classList.remove('active')
        iframeRef.current.setAttribute('src', '')

        const img = document.querySelector(`#champ-img-${props.id}`)
        console.log(img);
        img.style.opacity = 0
        setTimeout(() => {
            img.remove()
        }, 500);
    }

  return (
    <div
        id={`champ-detail-${props.id}`}
        className={`champion-detail bg-image over-lay ${props.active? 'active' : ''}`}
        style={{backgroundImage: `url(${item.bgLarge})`}}
    >
        <div className="champion-detail__content">
            <span>{item.nickName}</span>
            <h2 className="name main-color">{item.name}</h2>
            <p>Role: <span className="second-color">{item.role}</span></p>
            <span>Difficulty: <span className="second-color">{item.difficulty}</span></span>
            <div className="story">{item.description}</div>
            <span>Champion spotlight</span>
            <div className="video">
                <iframe 
                    src="" 
                    title='champion spotlight'
                    ref={iframeRef}
                    width="100%"
                ></iframe>
            </div>
        </div>
        <div className="champion-detail__close" onClick={onClick}>
            <img src={closeIcon} alt="" />
        </div>
    </div>
  )
}

export default ChampionDetail