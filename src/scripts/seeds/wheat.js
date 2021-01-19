const wheat = {
    type: "Wheat",
    height: 230,
    output: 6
};



export const createWheat = (wheat) => {
    return `
    <section class="wheat card">
    <div><img  class="wheat__image image--card" src="${wheat.image}" /></div>            
        <div class="wheat__type">${wheat.type}</div>
        <div class="wheat__height">${wheat.height}</div>
        <div class="wheat__output">${wheat.output}</div>
    </section>
    `
}