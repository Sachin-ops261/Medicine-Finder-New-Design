const allMeds = [
    {
        name: "Daraprin",
        manu: "",
        price: "250",
        imgLink: "https://dwaey.com/medrg/upload/1723992724.png",
        link: "",
        alt : [
            {
                name: "Daramin",
                manu: "",
                price: "15",
                imgLink: "https://www.netmeds.com/images/product-v1/600x600/1136339/daramin_25mg_tablet_10s_742022_0_0.jpg",
                link: "https://www.1mg.com/drugs/daramin-25mg-tablet-201707"
            }
        ]
    },
    {
        name: "Zytiga",
        manu: "",
        price: "75000",
        imgLink: "https://assets.mrmed.in/product-images/product-images-1719919503102-367500702-Zytiga%20250mg%20Tablet_103434.jpg",
        link: "",
        alt : [
            {
                name: "Mytera",
                manu: "Mylan Pharma",
                price: "15000",
                imgLink: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/cx456kwzkuscoxk4bl4d.jpg?format=auto",
                link: "https://www.apollopharmacy.in/medicine/mytera-250mg-tablet-120-s"
            },
            {
                name: "Abitate",
                manu: "RPG Life Sciences",
                price: "29000",
                imgLink: "https://assets.mrmed.in/product-images/product-images-1632405352428-700552497-100012_1.jpg",
                link: "https://www.apollopharmacy.in/medicine/abitate-250mg-tab-120-s"
            }
        ]
    },
    {
        name: "Glivec",
        manu: "",
        price: "6600",
        imgLink: "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/a0f76dfdb04146cfb0ec1f5099800eb6.jpg",
        link: "https://www.1mg.com/drugs/glivec-400mg-tablet-236606?srsltid=AfmBOornCUHbHOOOrbzDerFlKlCNwkmwUZQQ-SVLiJocqFiRtcstyCwq&wpsrc=Google+Organic+Search",
        alt : [
            {
                name: "Veenat",
                manu: "Natco Pharma",
                price: "1500",
                imgLink: "https://onemg.gumlet.io/l_watermark_346,w_690,h_700/a_ignore,w_690,h_700,c_pad,q_auto,f_auto/a5f53d8d234d45a695d7c6f59707c652.jpg",
                link: "https://www.1mg.com/drugs/veenat-400-tablet-14360?srsltid=AfmBOoozkKt5QjS2GyIzsogcO_R2FtOGzBoVQFn3fwsoCUwofa590wBc&wpsrc=Google+Organic+Search"
            }
        ]
    },
    {
        name: "Paracetamol",
        manu: "",
        price: "20-30 per tablets",
        imgLink: "https://5.imimg.com/data5/SELLER/Default/2022/9/QR/AF/MV/69966959/paracip-paracetamol-650-tablet.jpg",
        link: "https://www.1mg.com/search/all?filter=true&name=Paracetamol",
        alt : [
            {
                name: "Crocin",
                manu: "GlaxoSmithKline",
                price: "20-30 per tablets",
                imgLink: "https://cdn01.pharmeasy.in/dam/products_otc/H45820/crocin-650-tablet-15-nos-3-1689759566.jpg",
                link: "https://www.1mg.com/search/all?name=crocin"
            },
            {
                name: "Dolo 65",
                manu: "Micro Labs",
                price: "20-30 per tablets",
                imgLink: "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-011691/dolo-650-tablet-15_dolo-650-tablet-15--TM-TACR1-011691_1.png",
                link: "https://www.1mg.com/search/all?name=dolo%2065"
            },
            {
                name: "Calpol",
                manu: "GSK",
                price: "20-30 per tablets",
                imgLink: "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-011691/dolo-650-tablet-15_dolo-650-tablet-15--TM-TACR1-011691_1.png",
                link: "https://www.1mg.com/search/all?name=calpol"
            }
        ]
    },
    {
        name: "Combiflam",
        manu: "Sanofi",
        price: "20-30 per 10 tablets",
        imgLink: "https://images.apollo247.in/pub/media/catalog/product/c/o/combiflam_tablet_20_s-1.png?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
        link: "https://www.1mg.com/search/all?filter=true&name=Combiflam",
        alt : [
            {
                name: "Ibuprofen",
                manu: "Abbott",
                price: "20-30 per 10 tablets",
                imgLink: "https://5.imimg.com/data5/SELLER/Default/2023/9/344827499/TG/YT/FY/192270567/ibuprofen-tablet-400mg.png",
                link: "https://www.1mg.com/search/all?filter=true&name=Ibuprofen"
            },
            {
                name: "Brufen",
                manu: "Abbott",
                price: "20-30 per 10 tablets",
                imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYUmWwHGkFj5M1SKY0GM-af-pHOyLMcLqRdQ&s",
                link: "https://www.1mg.com/search/all?name=brufen"
            }
        ]
    },
    {
        name: "Disprin",
        manu: "Reckitt Benckiser",
        price: "10-20 for 10 tablets",
        imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfABbWyZY3yywBJtf60mpv4GyfpwTHVj5yGA&s",
        link: "https://www.1mg.com/otc/disprin-regular-325mg-effervescent-tablet-for-fast-relief-from-pain-headaches-migraines-otc543020",
        alt : [
            {
                name: "Ecosprin",
                manu: "USV Ltd.",
                price: "10-20 for 10 tablets",
                imgLink: "https://assets.truemeds.in/Images/ProductImage/TM-TACR1-012745/ecosprin-75-tablet-14_ecosprin-75-tablet-14--TM-TACR1-012745_1.png",
                link: "https://www.1mg.com/search/all?filter=true&name=Ecosprin"
            },
            {
                name: "Aspirin",
                manu: "Bayer",
                price: "10-20 for 10 tablets",
                imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCeIfr0UEUuInFvEhsJRyF3aVQKXuaMSIalA&s",
                link: "https://www.1mg.com/search/all?filter=true&name=Aspirin"
            },
            {
                name: "Aspro",
                manu: "Nicholas Healtcare Limited",
                price: "10-20 for 10 tablets",
                imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2SvOcNgxiuLa4yDomGtmGL5e22x6BHuX5qQ&s",
                link: ""
            }
        ]
    },
    {
        name: "ORS",
        manu: "",
        price: "15-25 per sachet",
        imgLink: "https://cdn01.pharmeasy.in/dam/products_otc/W81928/prolyte-ors-orange-drink-sachet-21-gm-2-1654249497.jpg",
        link: "https://www.1mg.com/search/all?name=ors",
        alt : [
            {
                name: "Electral",
                manu: "FDC Ltd",
                price: "15-25 per sachet",
                imgLink: "https://m.media-amazon.com/images/I/81jrDrIJoNL.jpg",
                link: "https://www.1mg.com/search/all?name=ors"
            },
            {
                name: "ORSL",
                manu: "Dabur",
                price: "15-25 per sachet",
                imgLink: "https://images.apollo247.in/pub/media/catalog/product/o/r/ors0011_1-1-_1_.jpg",
                link: "https://www.1mg.com/search/all?name=ors"
            },
            {
                name: "Peditral",
                manu: "Cipla",
                price: "15-25 per sachet",
                imgLink: "https://images.apollo247.in/pub/media/catalog/product/P/E/PED0040_1_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
                link: "https://www.1mg.com/search/all?name=ors"
            }
        ]
    },
    {
        name: "Vicks Vaporub",
        manu: "Procter & Gamble",
        price: "40-60 for 25g",
        imgLink: "https://cdn01.pharmeasy.in/dam/products_otc/181140/vicks-vaporub-50ml-relief-from-cold-cough-headache-and-body-pain-2-1677525570.jpg",
        link: "https://www.1mg.com/search/all?name=Vicks%20Vaporub&st=vivks%20vaporup&sl=Vicks%20Vapor,Vicks%20Vaporub&s=Vicks%20Vaporub",
        alt : [
            {
                name: "Zandu Balm",
                manu: "Emami",
                price: "40-60 for 25g",
                imgLink: "https://m.media-amazon.com/images/I/617dG3SoVKL.jpg",
                link: "https://www.1mg.com/search/all?filter=true&name=Zandu%20balm"
            },
            {
                name: "Amrutanjan",
                manu: "Amrutanjan Healthcare",
                price: "40-60 for 25g",
                imgLink: "https://cdn01.pharmeasy.in/dam/products_otc/010715/amrutanjan-strong-doub-50-ml-2-1674209955.jpg?dim=400x0&dpr=1&q=100",
                link: "https://www.1mg.com/search/all?filter=true&name=Amrutanjan%20balm"
            },
            {
                name: "Tiger Balm",
                manu: "Haw Par Healtcare",
                price: "40-60 for 25g",
                imgLink: "https://rukminim2.flixcart.com/image/850/1000/jd1z9u80/body-pain-relief/v/n/b/30-red-ointment-30g-tiger-balm-original-imaf224hjngnfmhs.jpeg?q=90&crop=false",
                link: "https://www.1mg.com/search/all?name=tiger%20balm"
            },
        ]
    },
    {
        name: "Digene",
        manu: "Abbott",
        price: "20-40 for 10 tablets or Rs. 60-80 for 200 ml bottle",
        imgLink: "https://cdn01.pharmeasy.in/dam/products_otc/255390/digene-gel-acidity-gas-relief-200ml-mint-flavour-sugar-free-2-1710939921.jpg",
        link: "https://www.1mg.com/search/all?name=digene",
        alt : [
            {
                name: "ENO",
                manu: "GlaxoSmithKline",
                price: "20-40 for 10 tablets or Rs. 60-80 for 200 ml bottle",
                imgLink: "https://i-cf65.ch-static.com/content/dam/cf-consumer-healthcare/nutrition-eno/en_IN/home/mobile/homepage-header-carousal-1-v3_mobile.jpg?auto=format",
                link: "https://www.1mg.com/search/all?name=eno"
            },
            {
                name: "Gelusil",
                manu: "Pfizer",
                price: "20-40 for 10 tablets or Rs. 60-80 for 200 ml bottle",
                imgLink: "https://images.apollo247.in/pub/media/catalog/product/G/E/GEL0002_3_1.jpg",
                link: "https://www.1mg.com/search/all?name=gelusil"
            }
        ]
    },
    {
        name: "Strepsils",
        manu: "Reckitt Benckiser",
        price: "30-50 for a pack of 8-10 tablets",
        imgLink: "https://5.imimg.com/data5/SELLER/Default/2023/2/RX/ZI/IF/81505918/strepsils-blister.jpg",
        link: "https://www.1mg.com/categories/featured/top-brands/strepsils-884",
        alt : [
            {
                name: "Vicks",
                manu: "Procter & Gamble",
                price: "30-50 for a pack of 8-10 tablets",
                imgLink: "https://images.ctfassets.net/umpxkz97ty8t/4tjmmu8xgFdItABWjhpWTA/88afdcd6055df8b4fac3fdea0098dfa5/VCD4-Packs.png",
                link: "https://www.1mg.com/search/all?name=vicks&filter=true&state=1&scroll_id=Rre-0688yDrQYBn-2UkFiY-vOvNzHZ9Vlp5wJSeiWio="
            },
            {
                name: "Dabur Honitus",
                manu: "Dabur India Ltd",
                price: "30-50 for a pack of 8-10 tablets",
                imgLink: "https://5.imimg.com/data5/UF/HY/GLADMIN-43545561/dabur-honitus-cough-drops.png",
                link: "https://www.1mg.com/search/all?name=dabur%20honitus"
            },
            {
                name: "Cofsils",
                manu: "Cipla Healtcare",
                price: "30-50 for a pack of 8-10 tablets",
                imgLink: "https://5.imimg.com/data5/SELLER/Default/2020/9/HW/ZE/YJ/14356045/cosils-orange.jpg",
                link: "https://www.1mg.com/search/all?name=cofsils"
            }
        ]
    },
    {
        name: "Benadryl",
        manu: "Johnson & Johnson",
        price: "50-80 per bottle (100 ml)",
        imgLink: "https://images.apollo247.in/pub/media/catalog/product/b/e/ben0053_1.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
        link: "https://www.1mg.com/search/all?filter=true&name=Benadryl",
        alt : [
            {
                name: "Corex",
                manu: "Pfizer",
                price: "50-80 per bottle (100 ml)",
                imgLink: "https://shreedashrath.com/wp-content/uploads/2021/06/corex-600x600.jpg",
                link: "https://www.1mg.com/search/all?name=corex"
            },
            {
                name: "Ascoril-D",
                manu: "Gzlenmark",
                price: "50-80 per bottle (100 ml)",
                imgLink: "https://images.apollo247.in/pub/media/catalog/product/a/s/asc0019.jpg",
                link: "https://www.1mg.com/search/all?filter=true&name=Ascoril"
            }
        ]
    },
    {
        name: "Augmentin 1000 Duo Tablet",
        manu: "",
        price: "1000",
        imgLink: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/bodminug3xmfcubbrdix.jpg?format=auto",
        link: "https://www.1mg.com/drugs/augmentin-1000-duo-tablet-163191",
        alt : [
            {
                name: "Clavam",
                manu: "Alkem Laboratories ",
                price: "193",
                imgLink: "https://images.apollo247.in/pub/media/catalog/product/c/l/cla0004.jpg",
                link: "https://www.1mg.com/drugs/clavam-625-tablet-63841"
            }
        ]
    },
    {
        name: "Crestor",
        manu: "Astrazeneca",
        price: "732",
        imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Jd-k1uea3upVeTJNmtS8y9ASkNOwsxN8Uw&s",
        link: "https://www.1mg.com/drugs/crestor-40mg-tablet-932668",
        alt : [
            {
                name: "Rosuvas",
                manu: "Sun Pharmaceutical Indsutries Ltd",
                price: "277",
                imgLink: "https://5.imimg.com/data5/SELLER/Default/2024/6/425035920/PX/LR/WN/147700842/rosuvas-10-mg-tablet1-500x500.jpg",
                link: "https://www.1mg.com/drugs/rosuvas-10-tablet-113791"
            }
        ]
    },
    {
        name: "Lantus",
        manu: "Sanofi India Ltd",
        price: "634",
        imgLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3pt0WVYQOROwvBFQi4lo5Fy0HvifJla0VUw&s",
        link: "https://www.1mg.com/drugs/lantus-solostar-100iu-ml-solution-for-injection-69758",
        alt : [
            {
                name: "Basalog",
                manu: "Bicon",
                price: "481",
                imgLink: "https://onemg.gumlet.io/l_watermark_346,w_480,h_480/a_ignore,w_480,h_480,c_fit,q_auto,f_auto/0c379a5816da4e63b74cd6889b2d382a.jpg?format=auto",
                link: "https://www.1mg.com/drugs/basalog-100iu-ml-refill-cartridge-164232"
            }
        ]
    },
    {
        name: "Tamiflu",
        manu: "Roche Products India Pvt Ltd",
        price: "1238",
        imgLink: "https://d2jx2rerrg6sh3.cloudfront.net/image-handler/picture/2021/4/shutterstock_170422580.jpg",
        link: "https://www.1mg.com/drugs/tamiflu-75mg-capsule-682558",
        alt : [
            {
                name: "Fluvir",
                manu: "Hetero Drugs Ltd",
                price: "447",
                imgLink: "https://images.apollo247.in/pub/media/catalog/product/f/l/flu0174.jpg?tr=q-80,f-webp,w-400,dpr-3,c-at_max%201200w",
                link: "https://www.1mg.com/drugs/fluvir-75mg-capsule-25088"
            }
        ]
    },
    {
        name: "Eliquis",
        manu: "Pfizer Ltd",
        price: "1086",
        imgLink: "https://5.imimg.com/data5/SELLER/Default/2022/9/KS/UI/TA/136059498/eliquis-5mg-tablet.jpg",
        link: "https://www.1mg.com/drugs/eliquis-5mg-tablet-172700",
        alt : [
            {
                name: "Apigat",
                manu: "Nacto Pharma Ltd",
                price: "533",
                imgLink: "https://www.practostatic.com/practopedia-images/v3/res-750/apigat-2-5-mg-tablet-30-s_15fa3947-9fad-47f2-bbed-8d5f500e66e9.JPG",
                link: "https://www.1mg.com/drugs/apigat-5-tablet-540276"
            }
        ]
    },
   
]

const footer = document.querySelector(".footer");
const footerLeft = document.querySelector(".leftSide");
const searchResult = document.querySelector(".searchResult");
const noDataMessage = document.getElementById("noDataMessage");
const alternative = document.querySelector(".alternative");
const alt = document.querySelector(".alt");
const org = document.querySelector(".org");
const alter = document.querySelector(".Alter");
let originalDiv = document.querySelector(".original");




let arr = [];


function addMeds(search)
{
    arr = [];
    arr = allMeds.filter(med => med.name.toLowerCase().includes(search));
    const original = document.querySelector(".original");
    original.innerHTML = "";
    // console.log(arr);
    
    if(search === "" || arr.length === 0)
        {
            org.style.display = "none";
            alter.style.display = "none";
            alt.style.display = "none";
            original.innerHTML = "";
            noDataMessage.innerText = "No Medicine Found";
            return 0;
        }
        else{
            org.style.display = "block";
            alter.style.display = "block";
            noDataMessage.innerText = "";
            for(let i = 0; i<arr.length; i++)
                {
                let newDiv = document.createElement("a");
                let medName = document.createElement("p");
                let manu = document.createElement("p");
                let price = document.createElement("p");
                let image = document.createElement("img");
                let contentDiv = document.createElement("div");
                newDiv.innerHTML = "";
                
                image.src = (arr[i].imgLink);
                contentDiv.classList.add("content");
                price.classList.add("price");
                newDiv.classList.add("newDiv");
                
                medName.innerText = ("Name: "+arr[i].name);
                manu.innerText = ("Manufacturer:"+arr[i].manu);
                price.innerText = ("price: Rs"+arr[i].price);
                newDiv.href = arr[i].link;
                
                newDiv.appendChild(image);
                newDiv.appendChild(contentDiv);
                
                contentDiv.appendChild(medName);
                contentDiv.appendChild(manu);
                contentDiv.appendChild(price);
                
                
                
                original.appendChild(newDiv);
            }
        }
        
    }

function find(event)
{
    originalDiv.style.display = "block";
    alternative.style.display = "none";
    let search = event.target.value.toLowerCase();
    console.log(search);
    addMeds(search);

}



function addAlternative()
{
    let search = document.getElementById("med").value.toLowerCase();
    
    const alternativeArray = [];
    for(let i = 0; i<allMeds.length; i++)
    {
        for(let j = 0; j<allMeds[i].alt.length; j++)
        {
            if(allMeds[i].name.toLowerCase().includes(search))
            {
                alternativeArray.push(allMeds[i].alt[j]);
            }
        }
    }
    showAlternative(alternativeArray, search);
    // console.log(alternativeArray);
}




function showAlternative(alternativeArray, search)
{
    alternative.style.display = "block";
    let originalDiv = document.querySelector(".original");
    originalDiv.style.display = "none";         //this one will block the original medicine from showing
    alternative.innerHTML = "";
    
    if(search === "" || alternativeArray.length === 0)
        {
            noDataMessage.innerText = "No Medicine Found";
            return 0;
        }
    else{
        alt.style.display = "block";
        originalDiv.style.paddingBottom = "10px";
        for(let i = 0; i<alternativeArray.length; i++)
        {
            let altOneItem = document.createElement("a");
            let altName = document.createElement("p");
            let altManu = document.createElement("p");
            let altPrice = document.createElement("p");
            let altImage = document.createElement("img");
            let content2 = document.createElement("div");

            altOneItem.innerHTML = "";
            content2.classList.add("content2");
            altOneItem.classList.add("oneItem");
            altPrice.classList.add("price");
    
            altName.innerText = ("Name: "+alternativeArray[i].name);
            altManu.innerText = ("Manufacturer: "+alternativeArray[i].manu);
            altPrice.innerText = ("Price: "+alternativeArray[i].price);
            altImage.src = alternativeArray[i].imgLink;
            altOneItem.href = alternativeArray[i].link;
    
            altOneItem.appendChild(altImage);
            altOneItem.appendChild(content2);   

            content2.appendChild(altName);
            content2.appendChild(altManu);
            content2.appendChild(altPrice);

            alternative.appendChild(altOneItem); 
        }
    }
    alternativeArray = [];
}


function displayOrg()
{
    let search = document.getElementById("med");
    let userInput = search.value.toLowerCase();
    originalDiv.style.display = "block";
    addMeds(userInput);
}
