/*
* @Author: WRBH
* @Date:   2020-04-10 13:06:03
* @Last Modified by:   WRBH
* @Last Modified time: 2020-04-13 16:06:27
*/

var screenAnimateElements={
    '.screen-1' : [
        '.screen-1__heading',
        '.screen-1__phone',
        '.screen-1__shadow'
    ],
    '.screen-2' : [
        '.screen-2__heading',
        '.screen-2__phone',
        '.screen-2__subheading',
        '.screen-2__pointer',
        '.screen-2__pointer_position-1',
        '.screen-2__pointer_position-2',
        '.screen-2__pointer_position-3'
    ],    
    '.screen-3' : [
        '.screen-3__heading',
        '.screen-3__phone',
        '.screen-3__subheading',
        '.screen-3__features'
    ],
    '.screen-4' : [
        '.screen-4__heading',
        '.screen-4__subheading',
        '.screen-4__models-item-i-1',
        '.screen-4__models-item-i-2',
        '.screen-4__models-item-i-3',
        '.screen-4__models-item-i-4'
    ],
    '.screen-5' : [
        '.screen-5__heading',
        '.screen-5__subheading',
        '.screen-5__bg'
    ],
}

function setScreenAnimate(screenCls){
    var screen = document.querySelector(screenCls),
        animateElements = screenAnimateElements[screenCls],
        isAnimateInitial = false,
        isAnimateDone = false;

    screen.onclick = function(){
            var i,element,orgCls;
        if(isAnimateInitial === false){
            for(i=0;i<animateElements.length;i++){
                element = document.querySelector(animateElements[i]),
                orgCls = element.getAttribute('class');
            element.setAttribute('class',orgCls +' '+ animateElements[i].substr(1)+'_animate_init');
            }
            isAnimateInitial=true;
            return;
        }
        if(isAnimateDone === false){
            for(i=0;i<animateElements.length;i++){
                element = document.querySelector(animateElements[i]),
                orgCls = element.getAttribute('class');
            element.setAttribute('class',orgCls.replace('_animate_init','_animate_done'));
            }
            isAnimateDone=true;
            return;
        }
        if(isAnimateDone === true){
            for(i=0;i<animateElements.length;i++){
                element = document.querySelector(animateElements[i]),
                orgCls = element.getAttribute('class');
            element.setAttribute('class',orgCls.replace('_animate_done','_animate_init'));
            }
            isAnimateDone=false;
            return;
        }


    }
}
for(k in screenAnimateElements){
    setScreenAnimate(k);
}
