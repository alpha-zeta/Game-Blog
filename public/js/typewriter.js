//jshint esversion: 6
const txt=$(".text")[0];
const type=$(".typewriter")[0];
const words=JSON.parse(type.getAttribute('data-words'));
const initWait=type.getAttribute('data-wait');
const delays={
    type: 200,
    delete:50,
    wait: initWait,
    pause:500
};
const typewriter=function(txtElem,wait){
    this.txt='';
    this.words=words;
    this.index=0;
    this.wait=parseInt(wait,10);
    this.txtElem=txtElem;
    this.type();
    this.isDeleting=false;
};

typewriter.prototype.type=function(){
    index=this.index%this.words.length;
    const word=this.words[index];
    let wait=delays.type;
    if(!this.isDeleting){
        this.txt=word.substr(0,this.txt.length+1);
    }else{
        wait=delays.delete;
        this.txt=word.substr(0,this.txt.length-1);
    }
    if(!this.isDeleting && this.txt===word){
        wait=delays.wait;
        this.isDeleting=true;
    }else if(this.isDeleting && this.txt===''){
        this.isDeleting=false;
        wait=delays.pause;
        this.index++;
    }
    this.txtElem.innerHTML=`<span class="txt">${this.txt}</span>`;

    setTimeout(()=>this.type(),wait);
};


document.addEventListener("DOMContentLoaded",init);


function init(){
    new typewriter(type,initWait);
}