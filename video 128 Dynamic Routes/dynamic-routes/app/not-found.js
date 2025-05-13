import Link  from "next/link";

export default function NotFound() {
    return (
        <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
            <p className="text-lg text-gray-600">The blog post you are looking for does not exist.</p>
            <Link href="/" className="text-blue-500 hover:underline" >Go back to all blogs</Link>
        </div>
    );
}
