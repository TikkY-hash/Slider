function slider({
    container,
    fields,
    slide,
    nextArrow,
    prevArrow,
    interval,
    mouseOverImage,
    slidesToShow,
    arrowsWrapper,
    slidesToScroll,
    speed,
    mouseOverDots 
}) {
    const wrapper = document.querySelector(container),
        inner = document.querySelector(fields),
        slides = document.querySelectorAll(slide),
        next = document.querySelector(nextArrow),
        prev = document.querySelector(prevArrow),
        arrows = document.querySelector(arrowsWrapper),
        width = window.getComputedStyle(wrapper).width;

    let offset = 0,
        index = 0,
        userWidth, slidesLength,i;

    userWidth = changeWidth(width) * slidesToShow;
    slidesLength = slides.length - slidesToShow - (slidesToScroll - 1);

    wrapper.style.width = `${userWidth}px`;
    wrapper.style.overflow = "hidden";

    inner.style.width = 100 * slides.length + '%';
    inner.style.display = "flex";

    slides.forEach(value => {
        value.style.width = width;
    });

    arrows.style.width = `${userWidth}px`;
  
    
    //Dots
    const div = document.createElement('div');
    div.style.marginTop = "15px";
   
    for (let i = 0; i <= slidesLength; i++) {
        div.innerHTML += `
        <button class="dot__style" data-count = ${i + 1}></button>
        `;
    }

    wrapper.append(div);

    const dots = document.querySelectorAll('.dot__style');

    changeDots(dots, index);

    function changeDots(selector, index) {
        selector.forEach(value => {
            value.classList.remove('dots__active');
        });
        selector[index].classList.add('dots__active');
    }

    next.addEventListener('click', () => {
        nextSlide(index);
    });

    function changeWidth(width) {
        return +width.replace(/\D/gi, '');
    }

    function nextSlide() {
        if (offset === (changeWidth(width) * slidesToScroll)  * (slides.length - slidesToShow - (slidesToScroll - 1))) {
            offset = 0;
        } else {
            offset += (changeWidth(width) * slidesToScroll);
        }

        inner.style.transform = `translateX(-${offset}px)`;

        index = index === slidesLength ? index = 0 : ++index;

        changeDots(dots, index);
    }

    prev.addEventListener('click', () => {

        if (offset === 0) {
            offset = (changeWidth(width) * slidesToScroll)  * (slides.length - slidesToShow - (slidesToScroll - 1));
        } else {
            offset -= (changeWidth(width) * slidesToScroll);
        }

        inner.style.transform = `translateX(-${offset}px)`;

        index = index === 0 ? index = slidesLength : --index;

        changeDots(dots, index);
    });

    if (interval) {
        //Animation 
         i = setInterval(() => {
            nextSlide();
        }, speed);

        if (mouseOverImage) {
            inner.addEventListener('mouseover', (e) => {
                console.log(e.target);
                clearInterval(i);
            });

            inner.addEventListener('mouseout', () => {
                i = setInterval(() => {
                    nextSlide();
                }, 3000);
            });
        }
    }

    //Dots click
    wrapper.addEventListener('click', (e) => {
        if (e.target && e.target.getAttribute('data-count')) {
            const count = e.target.getAttribute('data-count');
            index = count - 1;

            if(mouseOverDots) {
                clearInterval(i);
            }

            changeDots(dots, index);
            offset = (changeWidth(width) * slidesToScroll) * (count - 1);
            inner.style.transform = `translateX(-${offset}px)`;
        }
    });
}

export default slider;