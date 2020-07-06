import React from 'react'
import './Components.css'
import Image from './Image'

const HeaderGallary = ( ) => {
    const image1Source = 'https://mealplannerpro.com/images/recipes/1616/12143.jpg'

    const image2Source = 'https://www.greenerkirkcaldy.org.uk/wp-content/uploads/2020/02/Pizza-Making-840x620.jpg'

    const image3Source = 'https://c.stocksy.com/a/FmC000/z9/49119.jpg'

    return (
        <div className="header-gallary">
            <div className='image-div-1'>
            <Image imageSrc={image1Source} alt={'dessert'} />
            </div>

            <div className='image-div-2'>
            <Image imageSrc={image2Source} alt={'pizza'}/>
            </div>

            <div className='image-div-3'>
            <Image imageSrc={image3Source} alt={'dumplings'}/>
            </div>
        </div>
            
    )
}

export default HeaderGallary