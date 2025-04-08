

function Project(props){
    const {title, article, source, image} = props
    return <>
    <section class="column">
        <figure><img src={image} alt={title}/></figure>
        <h2><a href={source}>Innovation Cloud</a></h2>
        <p class="article">
            {article}
        </p>
    </section>
    </>
}

export default Project