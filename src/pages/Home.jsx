import {Swiper, SwiperSlide} from 'swiper/react'
import  SwiperCore, {
    EffectFade,
    Mousewheel,
    Pagination
}  from 'swiper'
import {Champion, Welcome, ChampionDetail,Trailer, Credit} from '../components/home-section'
import { championsData} from '../assets/dummy'
SwiperCore.use([Mousewheel, Pagination, EffectFade])

const swiperOption = {
    direction: 'vertical',
    slidesPerView: 1,
    spaceBetween: 0,
    mousewheel: true,
    pagination: true,
    effect: 'fade',
    speed: 1000

}
const Home = () => {
  return (
    <>
        <Swiper {...swiperOption}>
            <SwiperSlide>
                {({isActive}) => <Welcome isActive={isActive}/>}
            </SwiperSlide>
            <SwiperSlide>
                {({isActive}) => <Champion isActive={isActive}/>}
            </SwiperSlide>
            <SwiperSlide>
                {({isActive}) => <Trailer isActive={isActive}/>}
            </SwiperSlide>
            <SwiperSlide>
                {({isActive}) => <Credit isActive={isActive}/>}
            </SwiperSlide>
        </Swiper>
        {
            championsData.map((item, index)=>{
                return <ChampionDetail 
                    key={index}
                    item={item}
                    id={index}
                />
            })
        }
        <div className="scroll">Sroll to see effect</div>
    </>
  )
}

export default Home