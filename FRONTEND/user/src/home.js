import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {
    MDBCarousel,
    MDBCarouselItem,
  } from 'mdb-react-ui-kit';

function Home()
{
    return(
        <>
         
    <MDBCarousel fade interval={2000} pause={false}>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/e_improve/e_sharpen:10/e_saturation:10/f_auto,q_auto/v1618499087/Website/CMS-Uploads/fxdtwl2hiqjc9gcjzjnc.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/e_improve/e_sharpen:10/e_saturation:10/f_auto,q_auto/v1618499071/Website/CMS-Uploads/fafudqt4wv68m2l6dvgu.jpg'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/e_improve/e_sharpen:10/e_saturation:10/f_auto,q_auto/v1618499096/Website/CMS-Uploads/vi8jspiwdw78qoy2wnie.jpg'
        alt='...'
      />
    </MDBCarousel>
 
        </>
    )
}

export default Home;