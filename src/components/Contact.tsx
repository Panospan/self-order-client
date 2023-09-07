import { Section } from "./MainLayout";

const Contact = () => {
  return (
    <Section title="Let's talk!">
      <div className="flex flex-col gap-4" id="contact">
        <div className="text-2xl font-bold">
          Got a fascinating project idea in mind? Let's make it a reality,
          together!
        </div>

        <div className="flex gap-2 items-center justify-end">
          <a href="mailto:panos_97_kok@hotmail.com">
            <div className="flex gap-2 bg-white rounded py-2 shadow w-fit px-8 hover:shadow-lg ease-out duration-300">
              <img src="/test-tw/mail.svg" />
              Mail me!
            </div>
          </a>
          <a
            href="https://github.com/Panospan"
            target="_blank"
            className="hover:scale-105 duration-400"
          >
            <img src="/test-tw/github.svg" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
