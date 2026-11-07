document.getElementById('year').textContent=new Date().getFullYear();
const progress=document.querySelector('.scroll-progress');
function updateProgress(){const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=(max>0?Math.min(100,scrollY/max*100):0)+'%'}
addEventListener('scroll',updateProgress,{passive:true});updateProgress();
const dialog=document.getElementById('shot-dialog');
for(const id of ['view-shot','view-shot-image'])document.getElementById(id)?.addEventListener('click',()=>dialog.showModal());
document.getElementById('close-shot')?.addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close()});
