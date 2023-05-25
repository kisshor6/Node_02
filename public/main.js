const submitBtn = document.getElementById('submitBtn');

const cityNmae = document.getElementById('inputcityName');

const city_Name = document.getElementById('city_Name');
const hide = document.querySelector('.middle_layer');


const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const getInfo = async(event)=>{
    event.preventDefault()
    

    let cityVal = cityNmae.value;
    if (cityVal == "") {
        city_Name.innerText = `Please write the name before search`;
        hide.classList.add('Allhide');
    }else{
        try {
            let url =  `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=7547a1c3683a20c002efa813eec16604`;
            const response = await fetch(url);
            const data = await response.json()
            const arrData =  [data];

            city_Name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp.innerText = arrData[0].main.temp;

            const status = arrData[0].weather[0].main;


            if (status == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'></i>";
            }else if (status == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #009ad8'></i>";
            }else if (status == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #009ad8'></i>";
            }else{
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68'></i>";
            }
            hide.classList.remove('Allhide');


        } catch{
            city_Name.innerText = `Please enter the city name properly`;
            hide.classList.add('Allhide');
        }
       
    }
}

submitBtn.addEventListener('click', getInfo);