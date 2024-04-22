document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
    const showFavoriteBtn = document.getElementById('show-favorites-btn');
    const showHighRating = document.getElementById('show-high-rating');
    const showLowRating = document.getElementById('show-low-rating');
    let ShowFavorite = false;
    let ShowHigh = false;
    let ShowLow = false;

    showFavoriteBtn.addEventListener('click', () => {
        ShowFavorite = !ShowFavorite;

        if(ShowHigh || ShowLow ){
            ShowHigh = false;
            ShowLow = false;
            updateButtonColor();
        }

        if (ShowFavorite) {
            showFavoriteBtn.textContent = "Показать все";

            products.forEach(product => {
                let isFavorite = JSON.parse(product.getAttribute('data-favorite'));
                if (!isFavorite) {
                    product.style.display = 'none';
                }
            });
        } else {
            showFavoriteBtn.textContent = "Показать избранное";

            products.forEach(product => {
                product.style.display = 'block';
            });
        }
    });

    showHighRating.addEventListener('click', () => {
        ShowHigh = !ShowHigh;
            if (ShowHigh) {
                products.forEach(product => {
                        let isHigt = JSON.parse(product.getAttribute('data-high-rating'));
                        if (!isHigt) {
                            product.style.display = 'none';
                        }
                    });
            } else {
                products.forEach(product => {
                        product.style.display = 'block';
                    });
            }
        updateButtonColor();
    });


    showLowRating.addEventListener('click', () => {
        ShowLow = !ShowLow;

            if (ShowLow) {
                products.forEach(product => {
                    let isLow = JSON.parse(product.getAttribute('data-low-rating'));
                    if (!isLow) {
                        product.style.display = 'none';
                    }
                });
            }
            else {
                products.forEach(product => {
                    product.style.display = 'block';
                });

            }
            updateButtonColor();
    });


    products.forEach(product => {
        const favoriteBtn = product.querySelector('.favorite-btn');
        let isFavorite = JSON.parse(product.getAttribute('data-favorite'));

        favoriteBtn.addEventListener('click', () => {
            if (isFavorite) {
                product.setAttribute('data-favorite', false);
                favoriteBtn.classList.remove('favorite');
                isFavorite = false;
            } else {
                product.setAttribute('data-favorite', true);
                favoriteBtn.classList.add('favorite');
                isFavorite = true;
            }
        });
    });

    function updateButtonColor() {
        if (ShowHigh) {
            showHighRating.style.color = 'red';
        } else {
            showHighRating.style.color = 'black';
        }
        if (ShowLow) {
            showLowRating.style.color = 'red';
        } else {
            showLowRating.style.color = 'black';
        }
    }
});
