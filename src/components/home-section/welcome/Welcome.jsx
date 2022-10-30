import { useEffect } from 'react'
import HomeSection from '../HomeSection'
import './welcome.scss'
import {
  bg1,
  champAshe,
  champAhri,
  champGaren,
  distortion
} from '../../../assets/images'
import hoverEffect from 'hover-effect'

import Button from '../../button/Button'

const champImgs = [champAhri, champAshe, champGaren]
const Welcome = props => {
  useEffect(()=>{
    const welcomeImgs = document.querySelectorAll('#welcome__img__slide > img')
    let animates = []
    welcomeImgs.forEach((item, index)=> {
      let nextImg = welcomeImgs[index === welcomeImgs.length - 1 ? 0 : index + 1].getAttribute('src')
      let animation = new hoverEffect({
        parent: document.querySelector('#welcome__img__slide'),
        intensity: 0.5,
        image1: item.getAttribute('src'),
        image2: nextImg,
        displacementImage:distortion,
        hover: false
      })
      animates.push(animation)
    })


    welcomeImgs.forEach(e => e.remove())

    let currItem =0;

    const autoImageSlide = ()=>{
      let preItem = currItem
      currItem = (currItem + 1) % animates.length
      
      
      if (!document.hidden) {
        animates[preItem].next()
      }

      setTimeout(() => {
        let canvas = document.querySelectorAll('#welcome__img__slide > canvas')
        document.querySelector('#welcome__img__slide').appendChild(canvas[0])
        animates[preItem].previous()
      }, 3000);
    }
    setInterval(autoImageSlide, 3000)
  },[])
  return (
    <HomeSection
      className={`welcome ${props.isActive ? 'active' : ''}`}
      contentClassName="over-lay welcome__content"
      bgImage={bg1}
    >
      <div className="welcome__info relative">
        <div className="welcome__info__content">
          <div className="title">
            <span>Welcome to</span>
            <h2 className="main-color">Summoner's Rift</h2>
          </div>
          <div className="description m-t-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni nesciunt dolores rem unde dignissimos deleniti debitis, harum quisquam deserunt consequatur inventore nam vitae blanditiis eum perferendis praesentium iste facere officia.
          </div>
          <div className="btns m-t-4">
            <Button className="btn-main">PLAY NOW</Button>
            <Button className="btn-second">GET STARTED</Button>
          </div>
        </div>
      </div>
      <div className="welcome__img relative">
        <div className="welcome__img__slide" id='welcome__img__slide'>
          {
            champImgs.map((item, index)=>{
              return <img src={item} key={index} alt="" />
            })
          }

        </div>
      </div>
    </HomeSection>
  )
}

export default Welcome