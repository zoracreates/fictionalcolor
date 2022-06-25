module.exports = function (eleventyConfig) {
  
    eleventyConfig.addWatchTarget("./src/sass/");

    // // Set directories to pass through to the dist folder
    eleventyConfig.addPassthroughCopy('./src/images/');
    eleventyConfig.addPassthroughCopy('./src/static/icons/');
    eleventyConfig.addPassthroughCopy("./src/manifest.json");

     // Universal filters (Adds to Liquid, Nunjucks, and Handlebars)
        eleventyConfig.addFilter("formatDate", function(date) { 
            
            const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
           
            date = new Date(date)
            let monthNumber = date.getMonth();
            let month = months[monthNumber];
            let day = date.getDate();
            let year = date.getFullYear();
            let formatedDate = `${month} ${day}, ${year}`
        
        
            return formatedDate
         
        
        });


    return {
        // markdown files, data files, and HTML files should be processed by Nunjucks
        markdownTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dir: {
            input: "src",
            output: "public" 
        },
    };
};


