/*
* @Author: WRBH
* @Date:   2020-04-14 13:21:22
* @Last Modified by:   WRBH
* @Last Modified time: 2020-04-14 17:32:01
*/

var getElem = function(selector){
    return document.querySelector(selector);
},
getAllElem = function(selector){
    return document.querySelectorAll(selector);
},
getCls = function(element){
    return element.getAttribute('class');
},
setCls = function(element, cls){
    return element.setAttribute('class',cls);
},
addCls = function (element,cls){
    var baseCls = getCls(element); 
    if(baseCls.indexOf(cls) === -1){
        setCls(element,baseCls+' '+cls);
    }
},
delCls = function (element,cls) {
    var baseCls = getCls(element);
    if (baseCls.indexOf(cls) !== -1) {
        setCls(element,baseCls.split(cls).join(' ').replace(/\s+/g,' '))
    }
};


// Page initial
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
var setScreenAnimateInit = function(screenCls){
    var screen = document.querySelector(screenCls),
    animateElements = screenAnimateElements[screenCls];
    for(i=0;i<animateElements.length;i++){
        element = document.querySelector(animateElements[i]),
        orgCls = element.getAttribute('class');
    element.setAttribute('class',orgCls +' '+ animateElements[i].substr(1)+'_animate_init');
    }
}
var playScreenAnimateDone = function(screenCls){
    var screen = document.querySelector(screenCls),
    animateElements = screenAnimateElements[screenCls];
    for(i=0;i<animateElements.length;i++){
        element = document.querySelector(animateElements[i]),
        orgCls = element.getAttribute('class');
    element.setAttribute('class',orgCls.replace('_animate_init','_animate_done'));
    }
}

window.onload = function(){
    for(k in screenAnimateElements){
    setScreenAnimateInit(k);
    }
}

// Scroll animation
var navItems = getAllElem('.header__nav-item'),
    outlineItems = getAllElem('.outline__item'),
    switchNameItem = function(idx){
        for(var i = 0; i<navItems.length;i++){
            delCls(navItems[i],'header__nav-item_status_active');
        }
        addCls(navItems[idx],'header__nav-item_status_active');
        for(var i = 0; i<outlineItems.length;i++){
            delCls(outlineItems[i],'outline__item_status_active');
        }
        addCls(outlineItems[idx],'outline__item_status_active');
    };
switchNameItem(0);
window.onscroll = function(){
    var top = document.body.scrollTop|| document.documentElement.scrollTop;
    if(top == 0){
        delCls(getElem('.header'),'header_status_black');   
    }
    if(top > 0){
        addCls(getElem('.outline'),'outline_status_in');
        addCls(getElem('.header'),'header_status_black');
        playScreenAnimateDone('.screen-1');
        switchNameItem(0);
    }
    if(top > 800 - 80){
        playScreenAnimateDone('.screen-2');
        switchNameItem(1);
    }
    if(top > 800*2 - 80){
        playScreenAnimateDone('.screen-3');
        switchNameItem(2);
    }
    if(top > 800*3 - 80){
        playScreenAnimateDone('.screen-4');
        switchNameItem(3);
    }
    if(top > 800*4 - 80){
        playScreenAnimateDone('.screen-5');
        switchNameItem(4);
    }
}

// Bidirectional positioning
var setNavJump = function(i,lib){
        var item = lib[i];
        item.onclick = function(){
            document.body.scrollTop=i*800+1;
            document.documentElement.scrollTop=i*800+1;
        }
    };

for(var i=0;i<navItems.length;i++){
    setNavJump(i,navItems);
}
for(var i=0;i<outlineItems.length;i++){
    setNavJump(i,outlineItems);
}

