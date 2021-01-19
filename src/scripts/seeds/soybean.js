const soybean = {
    type: "Soybean",
    height: 20,
    output: 4
};


export const createSoybean = (soybean) => {
    return `
    <section class="soybean card">
    <div><img  class="soybean__image image--card" src="${soybean.image}" /></div>            
        <div class="soybean__type">${soybean.type}</div>
        <div class="soybean__height">${soybean.height}</div>
        <div class="soybean__output">${soybean.output}</div>
    </section>
    `
}