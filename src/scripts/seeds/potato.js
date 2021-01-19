const potato = {
    type: "Potato",
    height: 32,
    output: 2
};


export const createPotato = (potato) => {
    return `
    <section class="potato card">
    <div><img  class="potato__image image--card" src="${potato.image}" /></div>            
        <div class="potato__type">${potato.type}</div>
        <div class="potato__height">${potato.height}</div>
        <div class="potato__output">${potato.output}</div>
    </section>
    `
}