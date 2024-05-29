import EMailForm from "@/app/UI/EmailForm";
export default function Contact() {

    return (
      <main id="contact" className="min-h-screen w-full flex flex-col pt-10 pl-4 sm:pl-7 lg:pt-20 lg:pl-10 xl:pl-14 bg-gray-900 text-nowrap overflow-x-scroll">
        <div className="w-full h-11 sm:h-12 md:h-14" />
        <div className="text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-quot mb-20">
          <EMailForm/>
        </div>
      </main>
    );
  }
  