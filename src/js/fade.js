document.addEventListener('DOMContentLoaded', function() {
    const sliderIcon = document.getElementById('sliderIcon');
    const supportList = document.querySelector('.support-list');
    const additionalSupportList = document.querySelector('.support-additional-list');

    let isAnimating = false;
    let additionalSupportVisible = false;

    sliderIcon.addEventListener('click', () => {
        if (isAnimating) {
            return;
        }

        isAnimating = true;

        if (!additionalSupportVisible) {
            animateFadeOut(supportList, () => {
                supportList.style.display = 'none';
                animateFadeIn(additionalSupportList, () => {
                    isAnimating = false;
                });
            });
        } else {
            animateFadeOut(additionalSupportList, () => {
                additionalSupportList.style.display = 'none';
                animateFadeIn(supportList, () => {
                    isAnimating = false;
                });
            });
        }

        additionalSupportVisible = !additionalSupportVisible;
    });

    function animateFadeOut(element, callback) {
        let opacity = 1;
        const interval = setInterval(() => {
            if (opacity <= 0) {
                clearInterval(interval);
                callback();
            }
            element.style.opacity = opacity;
            opacity -= 0.05;
        }, 30);
    }

    function animateFadeIn(element, callback) {
        let opacity = 0;
        element.style.display = 'block';
        const interval = setInterval(() => {
            if (opacity >= 1) {
                clearInterval(interval);
                callback();
            }
            element.style.opacity = opacity;
            opacity += 0.05;
        }, 30);
    }
});