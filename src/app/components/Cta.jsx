import Links from "./Links";
import Custbutton from "./Button";

function Cta() {
  return (
    <div>
      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="my-0 mx-auto max-w-7xl">
          <div className="bg-bg-secondary border text-center border-border-subtle p-12 md:p-16 lg:p-20">
            <h2 className="mb-6">Ready to Start Your Project?</h2>
            <p className="text-[1.25rem] mb-10 max-w-2xl mt-0 mx-auto"
            >
              Let&apos;s discuss how we can bring your vision to life with
              modern web solutions
            </p>
            <div className="flex justify-center  ">
              <Links path="/contact" styleType="link">
                <Custbutton btn="Get In Touch" styleType="bgCta"/>
              </Links>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cta;
