const corn = [ 
    {
    type: "Corn",
    height: 180,
    output: 6
},
{   
    type: "corn",
    height: 180,
    output: 6
}
];



export const createCorn = (corn) => {
    return `
    <section class="corn card">
    <div><img  class="corn__image image--card" src="${corn.image}" /></div>            
        <div class="corn__type">${corn.type}</div>
        <div class="corn__height">${corn.height}</div>
        <div class="corn__output">${corn.output}</div>
    </section>
    `
}