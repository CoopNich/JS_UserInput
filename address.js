const container = document.querySelector("#addressList")


document.querySelector("#saveEntry").addEventListener("click", event => {

    const favoriteThing = document.querySelector("#favoriteThing").value
    const thingAddress = document.querySelector("#address").value
    const htmlFactory = `        <section>
                            <div>I can purchase ${favoriteThing} at ${thingAddress}.</div>
                                </section>
                        `

    container.innerHTML += htmlFactory
})