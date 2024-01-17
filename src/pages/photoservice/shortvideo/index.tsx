import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { RadioGroup } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const plans = [
  {
    name: "90秒短影音剪輯服務",
    price: "3850",
    priceUrl: "https://cart.cashier.ecpay.com.tw/qp/tm86",
  },
  {
    name: "3-5分鐘短影音剪輯服務",
    price: "13200",
    priceUrl: "https://cart.cashier.ecpay.com.tw/qp/tm73",
  },
];

export default function PhotoServiceBusinessPage() {
  const [selected, setSelected] = useState(plans[0]);
  return (
    <>
      <div className="flex justify-center items-center h-screen bg-neutral-800">
        <div className="w-[90%] flex flex-col md:flex-row items-center gap-5">
          <div className="basis-1/2 flex flex-col items-center gap-5">
            <div className="w-full">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={
                    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvcnQlMjB2aWRlb3xlbnwwfHwwfHx8MA%3D%3D"
                  }
                  alt="image"
                  fill
                  priority
                  className="object-cover group-hover:scale-105 transition-all duration-200 ease-in-out:"
                />
              </AspectRatio>
            </div>
            <h1 className="font-mono font-bold text-2xl md:text-4xl text-white">
              我們提供專業的短影音服務
            </h1>
            <p className="font-mono font-bold text-white">
              保證您的短影音作品在社群上發揮它最大的效果
            </p>
          </div>
          <div className="basis-1/2 flex items-center">
            <div className="w-full flex flex-col gap-5">
              <RadioGroup value={selected} onChange={setSelected}>
                <RadioGroup.Label className="sr-only">
                  Server size
                </RadioGroup.Label>
                <div className="space-y-2">
                  {plans.map((plan) => (
                    <RadioGroup.Option
                      key={plan.name}
                      value={plan}
                      className={({ active, checked }) =>
                        `${
                          active
                            ? "ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300"
                            : ""
                        }
                    ${checked ? "bg-neutral-900/75 text-white" : "bg-white"}
                      relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                      }
                    >
                      {({ active, checked }) => (
                        <>
                          <div className="flex w-full items-center justify-between">
                            <div className="flex items-center">
                              <div className="text-sm">
                                <RadioGroup.Label
                                  as="p"
                                  className={`font-medium  ${
                                    checked ? "text-white" : "text-gray-900"
                                  }`}
                                >
                                  {plan.name}
                                </RadioGroup.Label>
                                <RadioGroup.Description
                                  as="span"
                                  className={`inline ${
                                    checked ? "text-sky-100" : "text-gray-500"
                                  }`}
                                >
                                  <span>NT:{plan.price}</span>
                                </RadioGroup.Description>
                              </div>
                            </div>
                            {checked && (
                              <div className="shrink-0 text-white">
                                <CheckIcon className="h-6 w-6" />
                              </div>
                            )}
                          </div>
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
              <Button
                variant={"outline"}
                className="border-2 border-white bg-neutral-800 text-white"
                
              >
                <a href={selected?.priceUrl} className="w-full">立即付款</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function CheckIcon(props: any) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
