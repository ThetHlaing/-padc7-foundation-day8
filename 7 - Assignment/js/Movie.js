class Movie{
    constructor(title,poster,casts,link){
        this.title = title;
        this.poster = poster;
        this.casts = casts;
        this.link =link;        
    }
    render(template){
        this.detailTemplate = template;
        const result = this.detailTemplate
        .replace("{{this.title}}",this.title)
        .replace("{{this.poster}}",this.poster)
        .replace("{{this.casts}}",this.casts)
        .replace("{{this.link}}",this.link);
        return result;
    }
}

export default Movie;