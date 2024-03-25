import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section id="services" aria-labelledby="services-heading" className="mt-8  py-6 mx-auto w-full">
        <div className="w-full text-center">
                <h2 id="services-heading" className="text-4xl font-bold text-center text-[--textColor] mb-2">About Us</h2>
            <div className="w-4/5 mx-auto text-center">
            <p className="py-2 text-lg font-medium text-justify">
            Hiba&ataa vous permet de rechercher, de trouver et de recevoir les équipements médicaux nécessaires pour améliorer votre bien-être et votre santé . Rejoignez-nous dans notre mission visant à rendre les soins de santé accessible à tous.            
            </p>
            <button className="underline   py-2 px-4 rounded-full text-xl text-[--btnBlue]   font-semibold capitalize">
                <Link href={'/about'}>
                Read More
                </Link>
                </button>
            </div>
        </div>
</section>
    
    )
}

export default page
