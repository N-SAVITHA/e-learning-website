const testimonials = [
    {
        id: 1,
        name: 'Sahil Thakur',
        program: 'PGA',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHeUrhlzcrxf_Iudn-rxyrwSnaHPSr7rrM28EaF1bvGal2F5vvva-xSebluWCHO6AgORk&usqp=CAU',
        text: 'Imarticus Learning offers the best data science education. Thank you for the effort you put in during the pandemic. It is my pleasure to thank the management, the trainers, the placement team, and all those involved with the institute.',
        rating: '⭐⭐⭐⭐⭐ 5'
    },
    {
        id: 2,
        name: 'Pavani Iytla',
        program: 'CIBOP',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIT1eC_PM6J3O4QsSoZO0Gw_tG74XCgMb4rg&s',
        text: 'Thanks to Imarticus, I was placed with State Street Bank where I can contribute to my professional development in the most effective manner. Because of my interest in finance, I took the plunge into Investment Banking, and Imarticus managed to provide excellent training and placement opportunities.',
        rating: '⭐⭐⭐⭐⭐ 4.6'
    },
    {
        id: 3,
        name: 'Aman Sinha',
        program: 'FAP',
        image: 'https://i.pinimg.com/474x/50/86/1e/50861ebad9e8cb8800e791dbf20b90ca.jpg',
        text: 'I am grateful to the training and placement department of Imarticus Learning for their ongoing efforts in imparting quality training and providing opportunities for placement. I can\'t express how much your support helped me secure a job at Genpact.',
        rating: '⭐⭐⭐⭐⭐ 5'
    },
    {
        id: 4,
        name: 'Komal Boraste',
        program: 'PGA',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCY24qBz2ZsZufHnmt7XH4PUER2m5mBMb25g&s',
        text: 'With Imarticus Learning, I have completed a postgraduate program in Data Analytics. Overall, I had a positive learning experience. The faculty is very knowledgeable and supportive as well. With the help of the soft skill sessions and mentoring, I managed to secure a great job.',
        rating: '⭐⭐⭐⭐⭐ 4.9'
    }
];

function openModal(id) {
    const testimonial = testimonials.find(t => t.id === id);
    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <img src="${testimonial.image}" alt="${testimonial.name}" style="border-radius: 50%; width: 50px; height: 50px; margin-bottom: 10px;">
        <h2 style="font-size: 22px; margin: 10px 0 5px;">${testimonial.name}</h2>
        <h3 style="font-size: 16px; color: #00b3b3; margin: 0 0 15px;">${testimonial.program}</h3>
        <p style="font-size: 14px; margin: 0 0 15px;">${testimonial.text}</p>
        <div class="rating" style=" font-size: 14px; color: #f5a623;">${testimonial.rating}</div>
    `;
    document.getElementById('testimonial-modal').style.display = 'flex';
}

function closesModal() {
    document.getElementById('testimonial-modal').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function() {
    closesModal();
});
