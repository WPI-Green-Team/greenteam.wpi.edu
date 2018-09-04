var correct = 0;
var items = [{
    image: "https://haltonrecycles.files.wordpress.com/2013/03/water-bottle-disposable.jpg",
    recyclable: true,
    reason: "Recyclable (use a reusable instead!)"
}, {
    image: "http://biomasspackagingstore.com/images/products/detail/357HL91.jpg",
    recyclable: false,
    reason: "WPI does not compost yet, therefore this box is trash"
}, {
    image: "https://i.ytimg.com/vi/w7ma8mweDGw/maxresdefault.jpg",
    recyclable: true,
    reason: "Recyclable"
}, {
    image: "https://recycling.ncsu.edu/wp-content/uploads/2014/10/cardboard.png",
    recyclable: true,
    reason: "Recyclable"
}, {
    image: "http://www.staples-3p.com/s7/is/image/Staples/s0542692_sc7?$splssku$",
    recyclable: true,
    reason: "Clean plastic utensils are recyclable"
}, {
    image: "food.jpg",
    recyclable: false,
    reason: "Not recyclable due to food waste"
}, {
    image: "data:image/jpeg;base64,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",
    recyclable: false,
    reason: "Receipts are printed on special paper with special ink, making them non recyclable"
}, {
    image: "http://s3.amazonaws.com/etntmedia/media/images/ext/842849976/greasy-fast-food.jpg",
    recyclable: false,
    reason: "This goes in trash (or food waste in POD). Eat all of your food though!"
}, {
    image: "http://ruddsoundbites.typepad.com/.a/6a00d834516e2069e20111684ab9f6970c-800wi",
    recyclable: true,
    reason: "Recyclable"
}, {
    image: "http://4.bp.blogspot.com/-T_k4FM0smI4/Tij-Ii6u0JI/AAAAAAAAAss/lj0w_XWjF5M/s1600/DSCN9996.JPG",
    recyclable: false,
    reason: "This plastic is too flimsy and small to be recycled"
}, {
    image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRD5jOez_A9yeUUcC0XdocuPgSEUjVwfRe6Qvc6Y5sIYzAnVtt49Q",
    recyclable: true,
    reason: "Aluminum cans are recyclable"
}, {
    image: "https://s3-media2.fl.yelpcdn.com/bphoto/aC0GMA5vfAzaFSRwjmMpYQ/ls.jpg",
    recyclable: true,
    reason: "Clean paper bags are recyclable"
}, {
    image: "http://recyclenation.com/resources/2014/8/milk-carton-recycling.jpg",
    recyclable: true,
    reason: "Milk cartons are recyclable in Worcester, but in some locations they may not be due to the wax coating"
}, {
    image: "https://www.glacierv.com/product_images/1136.jpg",
    recyclable: false,
    reason: "The plastic is too flimsy to be recyclable"
}, {
    image: "https://s-media-cache-ak0.pinimg.com/564x/bd/5d/77/bd5d77031b354eafcf3d7abe469f5d3f.jpg",
    recyclable: true,
    reason: "A clean box is just cardboard, and therefore is recyclable"
}, {
    image: "http://www.buzzle.com/images/conceptual/dont-recycle-pizza-box.jpg",
    recyclable: false,
    reason: "The grease left by the pizza makes the box non recyclable"
}];
var currentItemPos = 0;

var recyclableBtn = document.getElementById('recycling');
var trashBtn = document.getElementById('trash');
var itemImage = document.getElementById('item');
var replayBtn = document.getElementById('replay');


function nextItem() {
    if (currentItemPos === items.length) {
        return undefined;
    }
    return items[currentItemPos++];
}

function display(item) {
    var image = item.image;
    itemImage.src = image;
}

function start() {
    currentItemPos = 0;
    var randomItems = [];
    while(items.length > 0){
      var i = Math.round(Math.random() * items.length) - 1;
      randomItems.push(items.splice(i, 1)[0]);
    }
    items = randomItems;
    display(nextItem());
    recyclableBtn.onclick = function() {
        next(true)
    };
    trashBtn.onclick = function() {
        next(false)
    };
}

function next(recyclable) {
    var item = items[currentItemPos - 1];
    toastr.clear();
    if (item.recyclable === recyclable) {
        correct++;
        toastr.success("Correct!");
    } else {
        toastr.warning("Incorrect: " + item.reason);
    }
    if (currentItemPos === items.length) {
        gameOver();
    } else {
        display(nextItem());
    }
}

function gameOver() {
    itemImage.src = ""
    recyclableBtn.classList.add('hidden');
    trashBtn.classList.add('hidden');
    replayBtn.classList.remove('hidden');
    replayBtn.onclick = function() {
        location.reload();
    };
    displayScore(correct);
}

function displayScore(aScore) {
    var score = document.createElement('p');
    score.innerHTML = 'You got ' + aScore + " correct";
    score.id = "score";
    itemImage.parentNode.replaceChild(score, itemImage);
    console.log("You got " + aScore + " correct!")
}

start();

toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": true,
    "progressBar": false,
    "positionClass": "toast-top-center",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "0",
    "hideDuration": "0",
    "timeOut": "3000",
    "extendedTimeOut": "1000"
}
