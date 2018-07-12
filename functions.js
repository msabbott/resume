var updateLink = function(link, innerText, addListener, removeListener) {
    if(null !== link) {
        link.removeEventListener('click', removeListener);
        link.addEventListener('click', addListener);
        
        if(null !== innerText)
            link.innerHTML = innerText;
    }
};
