

    let addDataContainer= document.getElementById("post")
let counter= 1; //poczatek licznika.
fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=10')
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        data.forEach((objekt) => {
            console.log(objekt.thumbnailUrl);

            let thumbnailUrl = document.createElement('img');
            let title = document.createElement('p')
            title.innerHTML = counter + '. ' + objekt.title; //dodajemy licznik 
            thumbnailUrl.src = objekt.thumbnailUrl;
            

        
            addDataContainer.appendChild(thumbnailUrl);
            addDataContainer.appendChild(title);

            counter++; //zwieksza wartosc licznka dla kazdego elementu
        });



    });



    const scrollToEndOfPage = ()=>{
        console.log('scrollToEndOfPage()')
    }
