const asparagus = {
    image: "image go here",
    type: "Asparagus",
    height: 24,
    output: 4
};

export const createAsparagus = (asparagus) => {
    return `
    <section class="asparagus card">
    <div><img  class="asparagus__image image--card" src="${asparagus.image}" /></div>       
        <div class="asparagus__type">${asparagus.type}</div>
        <div class="asparagus__height">${asparagus.height}</div>
        <div class="asparagus__output">${asparagus.output}</div>
    </section>
    `
}