
export default function Page({ params }) {

    console.log('params: ', params);    

    // This is for error handling
    // throw new Error('This is a client-side error!');

    // This is the dynamic route page for blog posts
    // The slug is passed as a parameter in the URL
    // You can fetch your blog post data here using the slug

    let languages = ['python', 'javascript', 'java', 'cpp', 'cs', 'php', 'ruby', 'swift', 'go', 'kotlin', 'typescript', 'rust', 'dart', 'html', 'css', 'sql', 'r', 'matlab', 'bash', 'powershell', 'assembly', 'fortran', 'lisp', 'prolog', 'haskell', 'elixir', 'clojure', 'scala', 'groovy', 'perl'];

    if (languages.includes(params.slug)) {
        return (
            <div>
                <h1>Blog Post</h1>
                <h2>{params.slug}</h2>
                <p>This is a blog post about {params.slug}.</p>
            </div>
        );
    }
    return (
        <div>
            <h1>Blog Post Not Found</h1>
            <p>The blog post you are looking for does not exist.</p>
        </div>
    );

}

