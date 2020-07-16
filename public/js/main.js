const btnComplete = document.querySelectorAll('.completeBtn');

for (let i=0; i<btnComplete.length; i++) {
    let btn = btnComplete[i];
    btn.addEventListener('click', (e)=>{
        e.preventDefault();
        if(btn.value === "complete") {
            btn.value = "completed";
            btn.classList.remove('btn-danger')
            btn.classList.add('btn-success');
            btn.parentElement.previousElementSibling.style.textDecoration="line-through";
        } else {
            btn.value = "complete";
            btn.classList.remove('btn-success');
            btn.classList.add('btn-danger');
            btn.parentElement.previousElementSibling.style.textDecoration="none";
        }
    });
}