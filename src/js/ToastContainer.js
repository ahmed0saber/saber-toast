const SaberToastContainer = (function () {
    function createBottomRight() {
        const bottomRightContainer = document.createElement('div');
        bottomRightContainer.classList.add('saber-toasts-container-bottom-right');
        bottomRightContainer.classList.add('saber-toasts-containers');
        document.body.append(bottomRightContainer);
    }

    function createBottomLeft() {
        const bottomLeftContainer = document.createElement('div');
        bottomLeftContainer.classList.add('saber-toasts-container-bottom-left');
        bottomLeftContainer.classList.add('saber-toasts-containers');
        document.body.append(bottomLeftContainer);
    }

    function createTopRight() {
        const topRightContainer = document.createElement('div');
        topRightContainer.classList.add('saber-toasts-container-top-right');
        topRightContainer.classList.add('saber-toasts-containers');
        document.body.append(topRightContainer);
    }

    function createTopLeft() {
        const topLeftContainer = document.createElement('div');
        topLeftContainer.classList.add('saber-toasts-container-top-left');
        topLeftContainer.classList.add('saber-toasts-containers');
        document.body.append(topLeftContainer);
    }

    function createAll() {
        createBottomLeft();
        createBottomRight();
        createTopLeft();
        createTopRight();
    }

    return {
        createBottomLeft,
        createBottomRight,
        createTopLeft,
        createTopRight,
        createAll
    };
})();

export default SaberToastContainer;