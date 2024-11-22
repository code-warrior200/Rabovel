import Image from "next/image";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";


const Cta = () => {
  return (
    <section id="about" className="pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <SectionTitle
                title="  Start Your Trading Journey Today  "
                paragraph="Open an account now to explore innovative trading options and 
                    maximize your investment potentia"
                mb="44px"
              />

              <Link
                  href="/signup"
                  className="rounded-sm bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                   Sign Up
              </Link>

            </div>

            <div className="w-full mt-10 px-4 lg:w-1/2">
              <div className="relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0">
                <Image
                  src="/images/hero/trade04.png"
                  alt="about-image"
                  width={700}
                  height={500}
                  className="mx-auto rounded-lg max-w-full dark:hidden dark:drop-shadow-none lg:mr-0"
                />
                <Image
                  src="/images/hero/trade04.png"
                  alt="about-image"
                  width={900}
                  height={700}
                  className="mx-auto hidden max-w-full rounded-lg  dark:block dark:drop-shadow-none lg:mr-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
