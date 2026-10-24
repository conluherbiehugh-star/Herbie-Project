// Contact form: client-side check only (this is a design prototype, nothing is sent).
const form=document.getElementById('contact-form'),status=document.getElementById('status');
form.addEventListener('submit',e=>{
  e.preventDefault();
  const ok=/^\S+@\S+\.\S+$/.test(form.email.value.trim());
  if(!ok){status.className='status err';status.textContent='Enter a valid email address, like you@example.com.';form.email.focus();return}
  if(!form.msg.value.trim()){status.className='status err';status.textContent='Write a message before sending.';form.msg.focus();return}
  status.className='status';status.textContent='Message ready. This demo does not send email; connect a form service to go live.';form.reset();
});
// Highlight the nav link for the section in view.
const links=[...document.querySelectorAll('nav a')];
const io=new IntersectionObserver(es=>es.forEach(en=>{
  if(en.isIntersecting){links.forEach(a=>a.removeAttribute('aria-current'));
    const a=links.find(l=>l.getAttribute('href')==='#'+en.target.id);if(a)a.setAttribute('aria-current','true')}
}),{rootMargin:'-40% 0px -55% 0px'});
document.querySelectorAll('main section[id]').forEach(s=>io.observe(s));