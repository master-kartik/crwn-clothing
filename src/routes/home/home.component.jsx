import Categories from "../../components/categories/categories.component"
import { Outlet } from "react-router-dom"
const Home=()=>{
  const categories = [
    {
      "id": 1,
      "title": "PHONE",
      "imageUrl": "https://images.playground.com/728a5635da794af2869c2c65d82583bc.jpeg"
    },
    {
      "id": 2,
      "title": "AUDIO",
      "imageUrl": "https://images.playground.com/cd29bb6999104df68ae860066f5acf7a.jpeg"
    },
    {
      "id": 3,
      "title": "WATCH",
      "imageUrl": "https://images.playground.com/ac2655384f67460786de4c7872095dba.jpeg"
    },
    {
      "id": 4,
      "title": "TECH",
      "imageUrl": "https://images.playground.com/e73686cde3d64500895665f002961cc8.jpeg"
    },
    {
      "id": 5,
      "title": "HOME",
      "imageUrl": "https://images.playground.com/a8f9db0efcd54046893616550ef42b75.jpeg"
    }
  ]

return(
    <div>
        <Categories categories={categories}/>
    </div>


)

}


export default Home;
