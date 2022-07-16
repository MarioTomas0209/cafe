const btnSi = document.querySelector('.btn-si');

btnSi.addEventListener('click', function(){
    swal.fire('Gracias por mi pelon rico!!!', 'Estaba rico, Ahora me toca invitarte', 'success');
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