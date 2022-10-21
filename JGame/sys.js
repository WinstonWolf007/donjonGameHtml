// convert left postion to int value
function pxToInt(value) {
    return (parseInt(getComputedStyle(document.getElementById(value)).left.replace("px", "")))
}

// check if 2 entity are collision
function check_collision(entity1, position1, entity2, position2) {
    if (pxToInt(entity1)+position1 > pxToInt(entity2)+position2) {
        return true;
    } else {
        return false;
    }
}