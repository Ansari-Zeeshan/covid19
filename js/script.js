let emoji = document.querySelector('.emojiappend');
let table = document.querySelector('.emojiappend table');
let inputCountry = document.querySelector('.search_div input');
let allName;

async function getemoji(e)
{
    e.preventDefault();
    let fetchemoji = await fetch(`https://api.covid19api.com/summary`);
    let data = await fetchemoji.json();
    let mapdata=data.Countries;
    mapdata.map( emojiimg=>
    {
        let tr =document.createElement('tr');
        let td1 =document.createElement('td');
        let td2 =document.createElement('td');
        let td3 =document.createElement('td');
        let td4 =document.createElement('td');
        let td5 =document.createElement('td');
        td1.innerHTML=emojiimg.Country;
        td2.innerHTML=emojiimg.NewConfirmed;
        td3.innerHTML=emojiimg.NewDeaths;
        td4.innerHTML=emojiimg.TotalConfirmed;
        td5.innerHTML=emojiimg.TotalDeaths;
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        tr.appendChild(td5);
        table.appendChild(tr);
    })
    allName = document.querySelectorAll('.emojiappend table tr td:nth-child(1)');
}
window.addEventListener('load', getemoji);

inputCountry.addEventListener('keyup',(e)=>
{
    let searchWord = e.target.value.toLowerCase();
    allName.forEach((name)=>
    {
        let nameText = name.innerText.toLowerCase();
        if(nameText.includes(searchWord))
        {
            name.closest('tr').style.display="block";
        }
        else
        {
            name.closest('tr').style.display="none";
        }
    })
})