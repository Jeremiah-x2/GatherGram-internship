import {
  Heart,
  ArrowLeftRight,
  Ban,
  FileText,
  CreditCard,
  Mail,
} from "lucide-react";
import React from "react";

const faqs: {
  question: string;
  answer: string;
  icon?: React.ReactNode;
}[] = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. Our friendly team will work with you to get you up and running as soon as possible.",
    icon: <Heart strokeWidth={2} size={20} stroke="#F5169C" />,
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Of course. Our pricing scales with your company. Chat to our friendly team to find a solution that works for you.",
    icon: <ArrowLeftRight strokeWidth={2} size={20} stroke="#F5169C" />,
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We understand that things change. You can cancel your plan at any time and we’ll refund you the difference already paid.",
    icon: <Ban strokeWidth={2} size={20} stroke="#F5169C" />,
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "At the moment, the only way to add additional information to invoices is to add the information to the workspace's name.",
    icon: <FileText strokeWidth={2} size={20} stroke="#F5169C" />,
  },
  {
    question: "How does billing work?",
    answer:
      "Plans are per workspace, not per account. You can upgrade one workspace, and still have any number of free workspaces.",
    icon: <CreditCard strokeWidth={2} size={20} stroke="#F5169C" />,
  },
  {
    question: "How do I change my account email?",
    answer:
      "You can change the email address associated with your account by going to untitled.com/account from a laptop or desktop.",
    icon: <Mail strokeWidth={2} size={20} stroke="#F5169C" />,
  },
];

export default function FAQs() {
  return (
    <section className="pt-[100px] pb-20 px-8 lg:px-[160px] 2xl:px-[320px] space-y-16">
      <div className="space-y-8 text-center">
        <h3 className="text-[#101828] text-4xl font-semibold">
          Frequently asked questions
        </h3>
        <p className="text-[#475467] text-xl">
          Everything you need to know about the product and billing.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-8 gap-y-16 gap-x-8">
        {faqs.map((item, index) => (
          <div key={index} className="text-center">
            <span className="inline-flex w-12 h-12 bg-[#FFE3F3] border-8 border-[#FFF8FC] rounded-full items-center justify-center">
              {item.icon}
            </span>
            <div className="space-y-2">
              <h5 className="font-semibold text-xl text-[#101828]">
                {item.question}
              </h5>
              <p className="text-[#475467] text-base">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      <div></div>
    </section>
  );
}
