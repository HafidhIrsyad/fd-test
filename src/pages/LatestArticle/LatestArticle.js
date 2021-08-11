import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMovie } from '../../store/action';
import './styles.css';

function LatestArticle() {
  const { movies } = useSelector(s => s.movies)
  const dispatch  = useDispatch();

  useEffect(() => {
    dispatch(getMovie())
  }, [dispatch])

  return (
    <>
      <div className="mx-40">
        <section className="mt-16">
          {console.log(movies)}
          <p className="font-bold text-3xl">Editor's Choice</p>
          <p className="text-gray-400 text-lg ">Curated with love</p>
        </section>
        <div className="flex flex-wrap mt-4">
          <div className="overflow-hidden rounded-lg shadow-lg p-2">
            <img src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" 
              width="200" height="150" alt="PokemonImage" className="mx-auto image-mini"/>
            <p className="text-center mb-4">4.1 Bintang (7)</p>
            <p className="text-center -mt-3 mb-2 text-lg font-bold">Y.O.U MakeUps</p>
            <p className="overflow-hidden">Rouge Velvet Matte Lip Cream</p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg p-2 ml-5">
            <img src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" 
              width="200" height="150" alt="PokemonImage" className="mx-auto image-mini"/>
            <p className="text-center mb-4">4.1 Bintang (7)</p>
            <p className="text-center -mt-3 mb-2 text-lg font-bold">Y.O.U MakeUps</p>
            <p className="overflow-hidden">Rouge Velvet Matte Lip Cream</p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg p-2 ml-5">
            <img src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" 
              width="200" height="150" alt="PokemonImage" className="mx-auto image-mini"/>
            <p className="text-center mb-4">4.1 Bintang (7)</p>
            <p className="text-center -mt-3 mb-2 text-lg font-bold">Y.O.U MakeUps</p>
            <p className="overflow-hidden">Rouge Velvet Matte Lip Cream</p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg p-2 ml-5">
            <img src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" 
              width="200" height="150" alt="PokemonImage" className="mx-auto image-mini"/>
            <p className="text-center mb-4">4.1 Bintang (7)</p>
            <p className="text-center -mt-3 mb-2 text-lg font-bold">Y.O.U MakeUps</p>
            <p className="overflow-hidden">Rouge Velvet Matte Lip Cream</p>
          </div>
          <div className="overflow-hidden rounded-lg shadow-lg p-2 ml-5">
            <img src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" 
              width="200" height="150" alt="PokemonImage" className="mx-auto image-mini"/>
            <p className="text-center mb-4">4.1 Bintang (7)</p>
            <p className="text-center -mt-3 mb-2 text-lg font-bold">Y.O.U MakeUps</p>
            <p className="overflow-hidden">Rouge Velvet Matte Lip Cream</p>
          </div>
        </div>
      </div>
      <MiniBannerLatest />
    </>
  );
}

export function MiniBannerLatest() {
  return (
    <div className="bg-pink-200 mx-20 flex flex-wrap my-6 justify-center">
      <div className="p-4">
        <div className="text-2xl font-bold">
          <p>Looking for products</p>
          <p>are just simply perfect</p>
          <p>for you ?</p>
        </div>
        <div className="text-xl my-2">
          <p>Here are same products that we</p>
          <p>believe match your skin, hair, and</p>
          <p>body! Have we mentioned that</p>
          <p>they solve your concern too?</p>
        </div>
        <button className="bg-red-600 text-white p-3 rounded-md my-2">See My Matches</button>
      </div>
      <div className="flex flex-wrap p-4">
        <div className="overflow-hidden rounded-lg border-2 p-2 bg-white">
          <img src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" 
            width="200" height="150" alt="PokemonImage" className="mx-auto image-mini"/>
          <p className="text-center mb-4">4.1 Bintang (7)</p>
          <p className="text-center -mt-3 mb-2 text-lg font-bold">Y.O.U MakeUps</p>
          <p className="overflow-hidden">Rouge Velvet Matte Lip Cream</p>
        </div>
        <div className="overflow-hidden rounded-lg border-2 p-2 bg-white ml-4">
          <img src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" 
            width="200" height="150" alt="PokemonImage" className="mx-auto image-mini"/>
          <p className="text-center mb-4">4.1 Bintang (7)</p>
          <p className="text-center -mt-3 mb-2 text-lg font-bold">Y.O.U MakeUps</p>
          <p className="overflow-hidden">Rouge Velvet Matte Lip Cream</p>
        </div>
        <div className="overflow-hidden rounded-lg border-2 p-2 bg-white ml-4">
          <img src="https://static.femaledaily.com/dyn/640/images/prod-pics/product_1558000129_YOU_MAKEUP_800x800.png" 
            width="200" height="150" alt="PokemonImage" className="mx-auto image-mini"/>
          <p className="text-center mb-4">4.1 Bintang (7)</p>
          <p className="text-center -mt-3 mb-2 text-lg font-bold">Y.O.U MakeUps</p>
          <p className="overflow-hidden">Rouge Velvet Matte Lip Cream</p>
        </div>
      </div>
    </div>
  )
}

export default LatestArticle;
