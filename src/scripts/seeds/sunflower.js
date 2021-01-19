const sunflower = {
    type: "Sunflower",
    height: 380,
    output: 3
};



export const createSunflower = (sunflower) => {
    return `
    <section class="sunflower card">
    <div><img  class="sunflower__image image--card" src="${sunflower.image}" /></div>            
        <div class="sunflower__type">${sunflower.type}</div>
        <div class="sunflower__height">${sunflower.height}</div>
        <div class="sunflower__output">${sunflower.output}</div>
    </section>
    `
}