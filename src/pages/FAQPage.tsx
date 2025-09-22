import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import parse from "html-react-parser";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const toSlug = (faqItem: { id?: string; question: string } | string) => {
  if (typeof faqItem === "string") {
    return faqItem
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-");
  }
  return (
    faqItem.id ||
    faqItem.question
      .toLowerCase()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/--+/g, "-")
  );
};

const groupedFaqs = [
  {
    group: "Dates and overview",
    items: [
      {
        id: "dates",
        question: "Dates",
        answer: "May 19 to May 25, 2026",
      },
      {
        id: "what-is-pan-croatia",
        question: "What PAN Croatia is",
        answer:
          "A six day private gathering on Obonjan Island in Croatia produced by Project Sanctuary. Programming blends music, wellness, and community time. Tickets include transfers, meals listed below, accommodations, and the on island program.",
      },
      {
        id: "inclusivity-with-discernment",
        question: "Inclusivity with discernment",
        answer:
          "PAN Croatia welcomes those who align with the values of presence, connection, and generosity. Attendance is based on an intentional process of discernment rather than open access, ensuring a safe and resonant environment for all.",
      },
      {
        id: "expect-the-unexpected",
        question: "Expect the unexpected",
        answer:
          "Beyond the schedule, the island comes alive with daily and nightly surprises. Some will be playful, some profound, some fleeting — all designed to spark connection and wonder. We think outside the box, and we invite you to do the same.",
      },
    ],
  },
  {
    group: "About the island",
    items: [
      {
        id: "where-is-obonjan",
        question: "Where is Obonjan?",
        answer:
          "Obonjan is a small island about 6 kilometers off the coast of Šibenik, Croatia, in the Adriatic Sea. It is known for its pine forests, clear waters, and stone beaches.",
      },
      {
        id: "history-of-obonjan",
        question: "History of Obonjan",
        answer: `<p>Obonjan has been inhabited and repurposed many times across centuries.</p>
        <p>In earlier centuries it was a quiet fishing and farming island for local communities.</p>
        <p>In the 1970s, it was developed as a youth scout camp and became known internationally as the "Island of Youth," hosting visitors from across Europe.</p>
        <p>After years of dormancy, the island was reimagined in the mid-2010s as a resort destination with a focus on wellness, music, and sustainable tourism.</p>
        <p>Today, Obonjan operates seasonally with accommodations, wellness spaces, and activity infrastructure, while preserving much of its natural landscape.</p>
        <p>For PAN Croatia 2026, Obonjan will again transform — into a temporary sanctuary shaped by inclusivity with discernment.</p>`,
      },
    ],
  },
  {
    group: "History of Project Sanctuary",
    items: [
      {
        id: "what-is-project-sanctuary",
        question: "What is Project Sanctuary?",
        answer:
          "Project Sanctuary is a private members community designed as a living ecosystem — a place for presence, generosity, and connection. It is not simply an events company but a network of experiences, homes, and gatherings that invite members to step into deeper ways of relating.",
      },
      {
        id: "origins",
        question: "Origins",
        answer:
          "Project Sanctuary began with the belief that extraordinary people create extraordinary communities. Early gatherings were designed as immersive containers, blending wellness, music, and shared living. The first flagship, Nucleus, launched in Bali in 2025 and established the tone: a sanctuary for connection, where members give as much as they receive.",
      },
      {
        id: "community-today",
        question: "The community today",
        answer:
          "Project Sanctuary brings people together at flagship gatherings such as PAN and Nucleus. Members are invited to host, attend, and co-create events around the world, supported by a growing digital platform. The community includes access to private homes, curated circles, and a membership structure based on invitation and interview, guided by inclusivity with discernment.",
      },
      {
        id: "guiding-principle",
        question: "Guiding principle",
        answer:
          "Every detail is grounded in the ethos that we gather not only to celebrate, but to build lasting networks of generosity, trust, and presence.",
      },
    ],
  },
  {
    group: "What's included and not included",
    items: [
      {
        id: "included-with-ticket",
        question: "Included with each ticket",
        answer: `<ul class="list-disc pl-5">
          <li>Private group transfers between Split Airport and the port</li>
          <li>Private boat between the port and Obonjan Island at group times</li>
          <li>Coffee and light breakfast each morning</li>
          <li>Daily community brunch</li>
          <li>Daily community dinner</li>
          <li>Access to daily programming on the island (music, wellness, community sessions)</li>
        </ul>`,
      },
      {
        id: "not-included",
        question: "Not included",
        answer: `<ul class="list-disc pl-5">
          <li>Alcohol</li>
          <li>Extra activities such as jet skiing, scuba diving, private boat outings, or other paid excursions</li>
          <li>Flights</li>
          <li>Private transfers outside the group schedule</li>
        </ul>`,
      },
    ],
  },
  {
    group: "Getting there",
    items: [
      {
        id: "getting-to-obonjan",
        question:
          "Getting to Obonjan Island is simple, and once you book your ticket we will guide you every step of the way.",
        answer: `<ol class="list-decimal pl-5">
          <li><strong>Step 1:</strong> Fly into Split International Airport (SPU) - Book your flights to and from Split, Croatia. This is the gateway to Obonjan Island.</li>
          <li><strong>Step 2:</strong> Share your flight details - After securing your ticket to Project Sanctuary, you will submit your flight information to our team. This reserves your spot on our private group transport.</li>
          <li><strong>Step 3:</strong> Private ground transfer - When you land, our team will welcome you at Split Airport and bring you by private bus to the port.</li>
          <li><strong>Step 4:</strong> Private boat to Obonjan Island - From the port you will board our private boat and cross the Adriatic Sea to Obonjan Island, your home for six unforgettable days.</li>
        </ol>`,
      },
    ],
  },
  {
    group: "Accommodations",
    items: [
      {
        id: "accommodations",
        question: "Accommodations",
        answer: `<ul class="list-disc pl-5">
          <li>Island Home S – for 2 people</li>
          <li>Island Home M – for up to 4 people</li>
          <li>Glamping Lodges – 2 bed or 4 bed, AC, private bathroom, towels and linen, sockets</li>
          <li>O Tents – 1 to 4 beds, AC, shared bathrooms, towels and linen, sockets, Wi Fi hotspots nearby</li>
        </ul>
        <p>Notes about views and exact layouts will be shown per unit on the booking page.</p>`,
      },
    ],
  },
  {
    group: "Food and beverage",
    items: [
      {
        id: "food-beverage",
        question: "Food and beverage",
        answer: `<ul class="list-disc pl-5">
          <li>Coffee and light breakfast each morning</li>
          <li>Community brunch daily</li>
          <li>Community dinner daily</li>
        </ul>
        <p>Vegetarian, vegan, and gluten free options will be available. Alcohol is not included and can be purchased.</p>`,
      },
    ],
  },
  {
    group: "Activities",
    items: [
      {
        id: "included-activities",
        question: "Included in your ticket (part of the PAN Croatia program)",
        answer: `<ul class="list-disc pl-5">
          <li>Daily yoga (sunrise / sunset sessions)</li>
          <li>Breath work sessions</li>
          <li>Sound healing journeys</li>
          <li>Pool gatherings with DJs</li>
          <li>Evening concerts and live performances</li>
          <li>Amphitheater live theater nights</li>
          <li>Shibari performance (Marie Sauvage)</li>
          <li>Stargazing sessions during the week (weather permitting)</li>
          <li>Community discussions and connection circles</li>
          <li>Morning coffee and light breakfast, daily brunch and dinner</li>
          <li>Daily and nightly surprises — spontaneous happenings, unannounced moments, and experiences that break the routine. Be ready to play, to explore, and to lean into the unexpected.</li>
        </ul>`,
      },
      {
        id: "paid-extras",
        question: "Paid extras (optional, bookable on island)",
        answer: `<ul class="list-disc pl-5">
          <li>Kayak sunset tour along the Dalmatian coast</li>
          <li>Jet ski safari (guided, with swim stops)</li>
          <li>Stand up paddleboarding (SUP)</li>
          <li>Snorkeling in coves around the island</li>
          <li>Water tubing, banana boat, and inflatable water rides</li>
          <li>Canoeing and additional kayaking options</li>
          <li>Boat trips and excursions to nearby islands, Šibenik, Krka waterfalls, or Kornati National Park</li>
          <li>Massages (partial or full body, outdoors or in wellness spaces)</li>
          <li>Aqua aerobics and other water fitness sessions</li>
          <li>Outdoor fitness classes with professional coaching</li>
          <li>Private boat hire for day trips</li>
        </ul>`,
      },
    ],
  },
  {
    group: "Music and lineup",
    items: [
      {
        id: "phase-1-artists",
        question: "Phase 1 artist announcements",
        answer: `<ul class="list-disc pl-5">
          <li>Dee Montero</li>
          <li>Double Touch</li>
          <li>Eelke Kleijn</li>
          <li>Jan Blomqvist</li>
          <li>Layla Benitez</li>
          <li>Marie Sauvage — shibari performance</li>
          <li>Project Sanctuary DJs and guests</li>
        </ul>`,
      },
      {
        id: "phase-2-3",
        question: "Phase 2 and Phase 3 announcements",
        answer:
          "More artists and performers will be revealed in upcoming announcements. Expect international headliners, rising talents, and unique live acts joining the island as details are confirmed",
      },
      {
        id: "daily-surprises",
        question: "Daily and nightly surprises",
        answer:
          "The schedule is only part of the story. Every day and every night, surprises will unfold across the island. Some you may stumble upon, others will sweep the whole community into a shared moment. We think outside the box, and we invite you to do the same — stay open, stay curious, and expect the unexpected.",
      },
    ],
  },
  {
    group: "Community and membership",
    items: [
      {
        id: "what-is-project-sanctuary-club",
        question: "What is Project Sanctuary Club?",
        answer:
          "Project Sanctuary is a private global community focused on connection, presence, and generosity. PAN Croatia is one of its flagship gatherings. Membership is guided by inclusivity with discernment, meaning the community is open to those who resonate with its values, while ensuring alignment through a careful process of discernment.",
      },
      {
        id: "attending-makes-member",
        question: "Does attending PAN Croatia make me a member?",
        answer:
          "Every ticket unlocks an opportunity to interview for membership in Project Sanctuary Club. Membership information and invitations to future gatherings will be shared after the event.",
      },
      {
        id: "atmosphere",
        question: "What is the atmosphere we're creating?",
        answer:
          "We're creating something rare — a space where presence, connection, and creativity thrive without external noise. This isn't just a party — it's a container for exploration, play, and deep authenticity. Everything we do is about making sure you feel safe to show up fully, just as you are.",
      },
      {
        id: "privacy-expectations",
        question: "What are the privacy expectations?",
        answer: `<p>Privacy is sacred.</p>
        <ul class="list-disc pl-5">
          <li>Phones tucked away as much as possible.</li>
          <li>No social media posting, no livestreaming, no content creation during the event.</li>
          <li>What happens here, stays here — no sharing names, stories, or photos without explicit consent.</li>
          <li>This is a space to reclaim the moment, the dance floor, and the magic that only happens when no one's watching.</li>
        </ul>`,
      },
      {
        id: "connect-with-others",
        question: "How should I connect with others?",
        answer:
          "Every interaction is built on respect, presence, and mutual trust. Consent is essential — always ask before touch. Guests are encouraged to approach one another with openness: say hello, offer a hug if invited, share in laughter and play. Generosity of spirit is at the heart of Project Sanctuary.",
      },
      {
        id: "artists-on-island",
        question: "Will artists stay on the island?",
        answer:
          "Yes. Some of our artists have chosen to remain on the island for a day or two, sharing in the Sanctuary spirit beyond their performances. It is essential that every interaction honors the same values of love, respect, and presence that define our community. Any fan-like behavior, harassment, or breach of these values will result in immediate removal.",
      },
      {
        id: "conduct-expectations",
        question: "What are the conduct expectations?",
        answer: `<ul class="list-disc pl-5">
          <li>Respect the island, its nature, and its community.</li>
          <li>Treat all participants — including artists and team members — with kindness and consideration.</li>
          <li>Phones away during designated presence moments.</li>
          <li>Ask for consent in all forms of connection.</li>
          <li>Support one another, and step in with care if someone seems uncomfortable.</li>
        </ul>`,
      },
      {
        id: "formal-agreement",
        question: "Is there a formal agreement I need to accept?",
        answer:
          "Yes. A document called The Sanctuary Agreement will be sent in your pre arrival pack and must be acknowledged before attending. It outlines how we care for each other, the island, and the shared space we create together.",
      },
    ],
  },
  {
    group: "Transfers and timing",
    items: [
      {
        id: "transfers-timing",
        question: "Transfers and timing",
        answer:
          "Group transfers run from Split Airport to the port, then by boat to Obonjan. Return transfers follow the same flow. Private arrangements outside the group schedule are the guest's responsibility.",
      },
    ],
  },
  {
    group: "What to bring",
    items: [
      {
        id: "what-to-bring",
        question: "What to bring",
        answer: `<p>Passport valid for Croatia, swimwear, comfortable shoes, sun protection, reusable water bottle, adapters for European sockets, and essential medications.</p>
        <p>Come as you are, but consider arriving with:</p>
        <ul class="list-disc pl-5">
          <li>An open heart ❤️</li>
          <li>A curious mind 🤲</li>
          <li>A grounded presence 🌱</li>
        </ul>
        <p>You don't need to bring much — just a willingness to disconnect from the outside world and drop into something meaningful and real.</p>`,
      },
    ],
  },
  {
    group: "Wi Fi and power",
    items: [
      {
        id: "wifi-power",
        question: "Wi Fi and power",
        answer:
          "Wi Fi hotspots are available across the island. European sockets are standard.",
      },
    ],
  },
  {
    group: "Accessibility and support",
    items: [
      {
        id: "accessibility-support",
        question: "Accessibility and support",
        answer:
          "Some island paths are natural terrain. Contact us after booking if you have accessibility needs so we can coordinate support and advise on options.",
      },
    ],
  },
  {
    group: "Health and safety",
    items: [
      {
        id: "health-safety",
        question: "Health and safety",
        answer:
          "A pre arrival pack will provide safety information including meeting points, staffed hours, swimming guidance, and emergency contacts.",
      },
    ],
  },
  {
    group: "Age policy",
    items: [
      {
        id: "age-policy",
        question: "Age policy",
        answer:
          "PAN Croatia is designed for adults. Any restrictions will be listed at booking.",
      },
    ],
  },
  {
    group: "Payment, changes, and refunds",
    items: [
      {
        id: "refunds",
        question: "Refunds",
        answer:
          "All ticket sales and contributions are final and non-refundable, under any circumstances, including but not limited to changes in personal schedule, travel issues, or event modifications. By purchasing a ticket, you expressly acknowledge and agree to this no-refund clause. This policy is binding and enforceable to the fullest extent permitted by applicable law.",
      },
    ],
  },
  {
    group: "Contact",
    items: [
      {
        id: "contact",
        question: "Contact",
        answer:
          "Booking and arrival communications will come from the email used at checkout. A direct event support contact will be provided before the event.",
      },
    ],
  },
];

export default function FAQPage() {
  const location = useLocation();
  const faqRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    const hash = location.hash.substring(1);
    if (hash && faqRefs.current[hash]) {
      // Small timeout to ensure Disclosure is expanded
      setTimeout(() => {
        faqRefs.current[hash]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }, 100);
    }
  }, [location]);
  return (
    <div className="bg-gray-950">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Frequently asked questions
          </h2>
          <div className="mt-16 space-y-16">
            {groupedFaqs.map((section) => (
              <div key={section.group}>
                <h3 className="text-2xl font-bold text-yellow-500 mb-6 mt-8">
                  {section.group}
                </h3>
                <dl className="divide-y divide-white/10">
                  {section.items.map((faq) => {
                    const id = toSlug(faq);
                    return (
                      <div
                        ref={(el: HTMLDivElement | null) => {
                          if (el) faqRefs.current[id] = el;
                        }}
                      >
                        <Disclosure
                          key={id}
                          defaultOpen={location.hash.substring(1) === id}
                          as="div"
                          className="mt-6 py-8 first:pt-0 last:pb-0"
                        >
                          <dt>
                            <DisclosureButton className="group flex w-full items-start justify-between text-left text-white">
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
                          <DisclosurePanel as="dd" className="mt-2 pr-6">
                            <div className="prose prose-invert text-gray-300 max-w-none list-disc marker:text-white pl-1">
                              {parse(faq.answer)}
                            </div>
                          </DisclosurePanel>
                        </Disclosure>
                      </div>
                    );
                  })}
                </dl>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
