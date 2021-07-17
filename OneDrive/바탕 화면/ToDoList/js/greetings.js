const loginInput=document.querySelector("#login-form input");
const loginForm=document.querySelector("#login-form");
const greeting=document.querySelector("#greeting");
const HIDDEN_CLASSNAME="hidden";
const USENAME_KEY="username";
function onLoginSubmit(event){
  event.preventDefault();//새로고침 막기
  loginForm.classList.add(HIDDEN_CLASSNAME);//form 사라지게
  const username=loginInput.value;//유저이름 받기
  localStorage.setItem(USENAME_KEY,username);//유저이름저장
  greetingShow();//유저이름 보이게
}
function greetingShow(){
  const username=localStorage.getItem(USENAME_KEY);
  greeting.innerText=`Hello ${username}`;//
  greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUserName=localStorage.getItem(USENAME_KEY);
if(savedUserName===null){//유저 없으면
  loginForm.classList.remove(HIDDEN_CLASSNAME);//hidden 지우고
  loginForm.addEventListener("submit",onLoginSubmit);//이벤트
}
else{
  greetingShow();
}

