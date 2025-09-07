const imgObserver = new IntersectionObserver((entris,observer) => {
entris.forEach(img => {
if (img.isIntersecting) {
    
    console.log(img.target.dataset.src);
    
    img.target.src = img.target.dataset.src

img.target.style.transform = `translate(${0})`;
img.target.style. opacity = "1"
    observer.unobserve(img.target)
}

})
    
},{
    rootMargin:"0px 0px 70px 0px"
} )



  document.querySelectorAll("img").forEach(images => imgObserver.observe(images))

 