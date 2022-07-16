const btnSi = document.querySelector('.btn-si');

btnSi.addEventListener('click', function(){
    swal.fire('Gracias!!!', 'Por mi pelon rico, estaba rico jaja', 'success');
});

const btnNo = document.querySelector('.btn-no');

btnNo.addEventListener('mouseover', function(){
    const randomX = parseInt(Math.random() * 100);
    const randomY = parseInt(Math.random() * 100);
    btnNo.style.setProperty('top', randomY + '%');
    btnNo.style.setProperty('left', randomX + '%');
    btnNo.style.setProperty('transform', `translate(
    -${randomX}%, -${randomY}%)`);
});