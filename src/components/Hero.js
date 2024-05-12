import HeroImg from '../assets/hero.png'
import { AiOutlineLinkedin } from "react-icons/ai";

export default function Hero(){
    const config = {
        subtitle: "I'm a Full-stack developer",
        social:{
            linkedin:"https://www.linkedin.com/feed/"
        }
    }
    return <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center' >
        <div className='md:w-1/2 flex flex-col'>
        <h1 className=' text-white text-6xl font-hero-font'>Hi, <br/> I'm Vaishaly 
        <p className='text-2xl'>{config.subtitle}</p>
        </h1>
        <div className='py-5'>
            <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size ={40}/></a>
        </div>
        </div>
        <img className='md:w-1/3' src={HeroImg}/>
    </section>
}