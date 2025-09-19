import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import ReactMarkdown from "react-markdown";
import { faqs } from "../../data/faqs";

export default function FAQ() {
  return (
    <div className=" bg-gray-950">
      <div className="text-white ">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="font-cinzel text-4xl font-semibold tracking-tight sm:text-5xl">
              Frequently Asked Questions
            </h2>
            <dl className="max-w-7xl mt-16 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure
                  key={faq.question}
                  as="div"
                  className="font-quattrocento py-6 first:pt-0 last:pb-0"
                >
                  <dt>
                    <DisclosureButton className="group flex w-full items-start justify-between text-left">
                      <span className="text-base/7 font-semibold">
                        {faq.question}
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        <PlusSmallIcon
                          aria-hidden="true"
                          className="size-6 group-data-open:hidden"
                        />
                        <MinusSmallIcon
                          aria-hidden="true"
                          className="size-6 group-not-data-open:hidden"
                        />
                      </span>
                    </DisclosureButton>
                  </dt>
                  <DisclosurePanel as="dd" className="mt-2 pr-12">
                    <ReactMarkdown
                      className="text-base/7 text-gray-200"
                      components={{
                        a: ({ href, children }) => (
                          <a
                            href={href}
                            className="text-blue-400 underline hover:text-blue-300"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {children}
                          </a>
                        ),
                      }}
                    >
                      {faq.answer}
                    </ReactMarkdown>
                  </DisclosurePanel>
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}
