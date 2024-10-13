const products = [
    {
        "category": "pants",
        "id": "CPS06B",
        "name": "Carpenter Double Knee Cargo Denim Loose Straight Snow Blue",
        "price": "209.000",
        "description": "The Carpenter double knee pant is an updated version of the original Carpenter pant style with a slightly loosestraight with pockets multifungsi on the knee and patch back pockets.",
        "image": "./Assets/Images/Product/product(7).jpg"
    },
    {
        "category": "pants",
        "id": "OVA01A",
        "name": "Overall Carpenter Doublee Knee Denim Loose Straight",
        "price": "350.000",
        "description": "The character of the material is soft, not stiff and not hot. Very comfortable for everyday use",
        "image": "./Assets/Images/Product/product(8).webp"
    },
    {
        "category": "pants",
        "id": "SCPDW04D",
        "name": "Cargo Cotton Zipper Straight Fit Cream",
        "price": "349.000",
        "description": "This pattern fits very well and is relatively comfortable for the wearer so it doesn't give away tight or narrow impression.",
        "image": "./Assets/Images/Product/product(9).jpg"
    },
    {
        "category": "pants",
        "id": "WC01C",
        "name": "Chinos Long Pants Slim Fit Cream",
        "price": "205.000",
        "description": "The texture of the fabric is soft and smooth, making it comfortable to wear formal activities and daily activities. The material also doesn't shrink anddoesn't fade easily when",
        "image": "./Assets/Images/Product/product(18).webp"
    },
    {
        "category": "shirt",
        "id": "BTS04A",
        "name": "T-shirt BLACK Trendy",
        "price": "115.000",
        "description": "The Superego.co T-Shirt is constructed from 100% cotton.",
        "image": "./Assets/Images/Product/product(23).webp"
    },
    {
        "category": "shirt",
        "id": "PBS01A",
        "name": "Polo Shirt Baseball Green Yellow",
        "price": "229.000",
        "description": "Superego Baseball Polo Shirt, Inspired by baseball sportswear. Superego designs polo shirts that are suitable for all sports activities. With superego embroidery in the middle, baseball bat embroidery on the chest and various color combinations, this polo shirt looks even more fashionable to complement your style when worn.",
        "image": "./Assets/Images/Product/product(17).webp"
    },
    {
        "category": "shirt",
        "id": "STUP01M",
        "name": "T-shirt Ultimate Pocket Regular Fit Woven Salmon Red",
        "price": "349.000",
        "description": "The ultimate pocket T-shirt in an on-trend Regulat fit cut.",
        "image": "./Assets/Images/Product/product(19).webp"
    },
    {
        "category": "shirt",
        "id": "FS01B",
        "name": "Flannel Two Pocket Green Navy",
        "price": "229.000",
        "description": "This pattern fits very well and is relatively comfortable on the wearer's body so it can be used Gives a feeling of relaxation, ease of use. And another advantage of the relaxed pattern is that it is flexible and can be done combined with any bottom.",
        "image": "./Assets/Images/Product/product(21).webp"
    },
    {
        "category": "outer",
        "id": "WJ01B",
        "name": "Jacket Work Denim Snow Light Black",
        "price": "364.000",
        "description": "The texture of the fabric is smooth, not too thin and not stiff, so it makes. Comfortable to wear for outdoor activities and daily activities. The material also does not shrink and does not fade easily when washed.",
        "image": "./Assets/Images/Product/product(20).webp"
    },
    {
        "category": "outer",
        "id": "SHL01D",
        "name": "Hoodie Pria Oversize M-XL Cotton Fleece Premium Bordir Leopard Taro",
        "price": "379.000",
        "description": "The texture of the fabric is soft and smooth, warm to wear in cold weather, as well comfortable to wear for daily activities. The material also doesn't shrink and does not fade easily when washed. Has excellent absorption capacity, because There is a collection of loops on the inner surface of the 330 gsm Premium Fleece material. This material is very suitable for use at low temperatures (cold) because of its properties warm one.",
        "image": "./Assets/Images/Product/product(15).webp"
    },
    {
        "category": "outer",
        "id": "VNS01A",
        "name": "Vest Black Mustard By NeverTooLavish",
        "price": "409.000",
        "description": "Available for all groups and suitable for use in all conditions",
        "image": "./Assets/Images/Product/product(16).webp"
    },
    {
        "category": "outer",
        "id": "JSPAL01",
        "name": "Jacket Work Denim Lasser Pixel Art Snow Blue",
        "price": "499.000",
        "description": "The tightness of the stitching with small threads makes this jacket sturdy and the stitches don't come apart easily.",
        "image": "./Assets/Images/Product/product(12).webp"
    },
    {
        "category": "hat",
        "id": "W0V3N",
        "name": "Topi Rimba Navy Woven",
        "price": "119.000",
        "description": "Head circumference: 60 cm, Depth: 8 cm, Diameter: 33 cm",
        "image": "./Assets/Images/Product/product(13).webp"
    },
    {
        "category": "hat",
        "id": "BN06",
        "name": "Beanie Hat Brown",
        "price": "79.000",
        "description": "Exclusively made Beanie Hat. The material used is wool of selected quality so that it provides comfort for anyone who wears it.",
        "image": "./Assets/Images/Product/product(14).webp"
    },
    {
        "category": "hat",
        "id": "P4N3L",
        "name": "Topi Five Panel Navy Bordir",
        "price": "99.000",
        "description": "MATERIALS: DRILL MATERIAL, PREMIUM REAR CAPS, ALL SIZES, PREMIUM QUALITY",
        "image": "./Assets/Images/Product/product(11).webp"
    },
    {
        "category": "hat",
        "id": "BCK3T",
        "name": "Topi Premium Bucket Hat Cream Woven",
        "price": "99.000",
        "description": "Nice Cheap Cream Bucket Hat Cream color. Good strong Twill material. premium. The basic color is Cream and trendy.",
        "image": "./Assets/Images/Product/product(22).webp"
    }
];

const buttons = document.querySelectorAll('.product-size button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('clicked'));
        button.classList.add('clicked');
    });
});


function findProductByName(id) {
    const foundProduct = products.find(item => item.id === id);
    if (foundProduct) {
        return foundProduct;
    }
    return null;
}
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const product = findProductByName(id);
if(product !== null) {
    document.getElementById('back').setAttribute('href','product.html#'+product.category);
    document.getElementById('image').src = product.image;
    document.getElementById('name').innerHTML += product.name;
    document.getElementById('priced').innerHTML += product.price.toLocaleString('id-ID').replace(/,/g, '.');
    document.getElementById('description').innerHTML += product.description;
}else {

}

let quantity = 1;

const quantityElement = document.getElementById('quantity');
const minusBtn = document.getElementById('minusBtn');
const addBtn = document.getElementById('addBtn');

minusBtn.addEventListener('click', () => {
    if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
        const priced = product.price*quantity
        let formattedPrice = priced.toLocaleString('id-ID', {
            minimumFractionDigits: 3
        }).replace(/,/g, '.');
        document.getElementById('priced').innerHTML = formattedPrice
    }
});

addBtn.addEventListener('click', () => {
    quantity++;
    quantityElement.textContent = quantity;
    const priced = product.price*quantity
    let formattedPrice = priced.toLocaleString('id-ID', {
        minimumFractionDigits: 3
    }).replace(/,/g, '.');
    document.getElementById('priced').innerHTML = formattedPrice ;
});
