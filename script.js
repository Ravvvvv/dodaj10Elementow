


let page = 0


const getData = () => {


    let addDataContainer = document.getElementById("post")
    // let counter = 1; //poczatek licznika.
    fetch(`https://jsonplaceholder.typicode.com/photos?_start=${page}&_limit=10`)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            data.forEach((objekt) => {
                console.log(objekt.thumbnailUrl);

                let thumbnailUrl = document.createElement('img');
                let title = document.createElement('p')
                title.innerHTML = objekt.id + '. ' + objekt.title; //dodajemy licznik 
                thumbnailUrl.src = objekt.thumbnailUrl;



                addDataContainer.appendChild(thumbnailUrl);
                addDataContainer.appendChild(title);

                // counter++; //zwieksza wartosc licznka dla kazdego elementu
            });

             page=page+10  //wartosc 

        });

    }

   let  button = document.getElementById('btn')

   button.addEventListener('click',getData)
    
 


    getData()
    const scrollToEndOfPage = () => {
        console.log('scrollToEndOfPage()')
    }
