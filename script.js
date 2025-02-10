let originalPrice = document.getElementById("oprice");
let discountPerc = document.getElementById("discount");
let calcButton = document.getElementById("button");


calcButton.addEventListener("click", function(){
   let originalPriceValue = Number(originalPrice.value);
   let discountPercValue = Number(discountPerc.value);
   let result = originalPriceValue - (originalPriceValue * (discountPercValue / 100));

    let resultContainer = document.getElementById("result");
    resultContainer.innerHTML = `
    <span> Final Price: ${result.toFixed(2)} GEL</span>
    `
});

