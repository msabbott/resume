var dispatchClickEvent = function (target) {

    var event = new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
    });

    target.dispatchEvent(event);
};
