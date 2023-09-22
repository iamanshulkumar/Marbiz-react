import React from 'react';

const PopularCategories = () => {
    const categories = [
        { name: 'Celebrity', color: 'danger' },
        { name: 'Influencer', color: 'info' },
        { name: 'Instagram', color: 'success' },
        { name: 'Youtube', color: 'primary' },
        { name: 'TV Star', color: 'secondary' },
        { name: 'Stand Up', color: 'warning' },
        { name: 'Celeb', color: 'info' },
    ];

    return (
        <div className="container py-5">
            <div className="fs-4 text-white fw-bold text-uppercase">Popular Categories to explore</div>
            <div className="row mt-3">
                {categories.map((category, index) => (
                    <div className="col" key={index}>
                        <div className={`badge badge-${category.color} px-3 py-2 fs-6 fw-medium`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                            </svg> {category.name}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PopularCategories;
