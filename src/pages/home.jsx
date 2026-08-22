import EmblaCarousel from "./EmblaCarousel"
import male1 from "../assets/posters/maleposter.jpg"
const Home =()=>{

    return(
        <>
       <div>
      <EmblaCarousel  />
       </div>
      <div className="collection-div">
        <h1 style={{textAlign:"center"}} className="our-text">OUR COLLECTION</h1>
        <div className="collection-posters-div">
        <div className="collections-poster-div">
             <img src={male1} alt="" className="img-collection" />
            <div className="info-collection-div">
                <h1>MALE</h1>
              <button>EXPLORE<i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
         <div className="collections-poster-div">
             <img src={male1} alt="" className="img-collection"  />
            <div className="info-collection-div">
                <h1>WOMEN</h1>
              <button>EXPLORE<i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
         <div className="collections-poster-div">
             <img src={male1}alt="" className="img-collection"  />
            <div className="info-collection-div">
                <h1>KIDS</h1>
              <button>EXPLORE<i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
        </div>
      </div>
        </>
    )
}
export default Home