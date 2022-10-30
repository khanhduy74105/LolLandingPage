import { bg2 } from '../../../assets/images'
import HomeSection from '../HomeSection'
import './champion.scss'
import ChampionCard from './ChampionCard'
import {championsData} from '../../../assets/dummy'

import {Swiper, SwiperSlide} from 'swiper/react'
const Champion = (props) => {
  return (
    <HomeSection
        className={`${props.isActive ? 'active' : ''}`}
        contentClassName='over-lay'
        bgImage={bg2}
    >
        <div className="container relative">
            <div className="champion-list">
                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={0}
                    grabCursor ={true}
                    nested={true}
                >
                    {
                        championsData.map((item, index) => {
                            return  <SwiperSlide key={index}>
                                        <ChampionCard item ={item} id={index}/>
                                    </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </div>

    </HomeSection>
  )
}

export default Champion