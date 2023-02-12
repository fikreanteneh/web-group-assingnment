import { getProducts } from "../FetchApi/products/getProducts.js"

const tradeItem = document.querySelector(".trade-items")


const items = await getProducts()
items.map((ele)=>{
    console.log(ele["productImage"])
    tradeItem.innerHTML += (`
    <div class="col-12 col-sm-6  col-md-4 bg-light shadow shadow-lg p-0">
        <img class="w-100" src="${ele["productImage"]}" alt="this is the product 1 on trade recently">
        <div class="p-2">
        <h1 class="fs-6" for="productName1">Product Name:</h1>
        <br>
        <h1 class="fs-6" name="productName" id="productName1">${ele["productTitle"]}</h1>
        <p>${ele["productDescription"]}</p>
        <h1 class="fs-6" for="productPrice1">Price:</h1>
        <br>
        <p id="productPrice1"> <strong>$ ${ele["productPrice"]}</strong> </p>
        <div class="d-flex justify-content-between align-items-center">
            <div>
                <h1 class="fs-6" for="startingDate1">Starting Date:</h1>
                <br>
                <p id="startingDate1">
                    <strong>12/12/2022</strong>
                </p>
            </div>
            <div>
                <h1 class="fs-6" for="endingDate1">Ending Date:</h1>
                <br>
                <p id="endingDate1"><strong>13/1/2023</strong></p>
            </div>
        </div>

    </div>
</div>`)
})



// items.forEach(())


