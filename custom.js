//Json Nedir ve Methodları
let data = {
    kisiler: [
        {name:"Rukiye", surname: "Çadırcı", age:"24"},
        {name:"Mustafa", surname: "Çetinkol", age:"25"},
        {name:"Yusuf", surname: "Usta", age:"26"},
    ],
    islem: "Get"
}

//console.log(typeof data);

//var kayit= JSON.stringify(data); //string'e çevirir
//console.log(kayit);
//var cevir=JSON.parse(kayit);//JSON veriye çevir
//console.log(cevir);

var kisiler=document.getElementsByClassName("kisiler")[0]; 

for(let getir in data)
{
    //console.log(typeof data[getir]);
    //for(deger of data[getir])
    //{
    //   console.log(deger)
    // }
    
    var gelen=data[getir];
    if(getir=="kisiler")
    {
        for(isimler in gelen)
        {
            kisiler.innerHTML+='<li>${gelen[isimler]["name"]}</li>'
        }
    }
    
}