"use client"
import StripeCard from "./StripeCard"
import { useGetArticle } from "@/controllers/News/getArticle"

const NewsSection = () => {

    const { isLoading, error, data } = useGetArticle();
    if (isLoading) {
        return <p>Loading articles...</p>;
    }

    if (error) {
        return <p>An error occurred: {error.message}</p>;
    }
    return (
        <section className="relative">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                {/* Hero content */}
                <div className="pb-12 pt-32 md:pb-20 md:pt-40">
                    {/* Section header */}
                    <div className="pb-12 text-center md:pb-16">
                        <h1
                            className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
                            data-aos="zoom-y-out"
                            data-aos-delay={150}
                        >
                            Stay updated anytime, <br className="max-lg:hidden" />
                            anywhere.
                        </h1>
                        <div className="mx-auto max-w-3xl">
                            <p
                                className="mb-8 text-lg text-gray-700"
                                data-aos="zoom-y-out"
                                data-aos-delay={300}
                            >
                                Simple is a modern website builder powered by AI that changes
                                how companies create user interfaces together.
                            </p>
                            <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                                <div
                                    className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                                    data-aos="zoom-y-out"
                                    data-aos-delay={450}
                                >
                                    <a
                                        className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                                        href="#0"
                                    >
                                        <span className="relative inline-flex items-center">
                                            Start Free Trial{" "}
                                            <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                                                -&gt;
                                            </span>
                                        </span>
                                    </a>
                                    <a
                                        className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                                        href="#0"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-4">
                        {data.results.map((item: any, index: number) => (
                            <div key={index} className="col-span-1" >
                                <StripeCard article={item} />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsSection