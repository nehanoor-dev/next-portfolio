import React from 'react'

function ServicesSection() {
    const services = [
        {
            id: "static", 
            title: "Single Page Applications", 
            des: "Design and develop sleek, responsive Single Page Applications (SPAs) for seamless user experiences and fast performance.",
            img: "/images/services/spa.png"
        },
        {
            id: "dynamic", 
            title: "Full Stack Website", 
            des: "Build dynamic, scalable, and fully functional Full Stack websites with end-to-end development expertise.",
            img: "/images/services/full-stacl-web.webp"
        },
        {
            id: "app", 
            title: "Web Applications", 
            des: "Develop robust, interactive web applications tailored to your unique business needs.",
            img: "/images/services/web-app.webp"
        }
    ]
  return (
    <section className='h-fit border-t border-gray-300' id='service'>
        <h1 className='heading'>Services</h1>
        <div className='container grid gap-6 sm:grid-cols-2 lg:grid-cols-3 px-10 justify-center mx-auto'>
        {
           services.map((service) => (
            <div
            key={service.id}
            className="bg-white border-4 border-pink-500 rounded-lg overflow-hidden transition-transform 
            transform hover:scale-105 hover:border-yellow-300 items-center"
            >
                <img src={service.img} 
                alt={service.title}
                className="w-full h-48 object-cover"
                />
                <div className='px-5 py-3'>
                <h2 className="heading-small text-center">{service.title}</h2>
                <p className=" text-gray-600 text-center">{service.des}</p>
                </div>
            </div>
           ))
        }
        </div>
    </section>
  )
}

export default ServicesSection