import React from "react";
import Wall from "../containers/Wall";
import Frame from "../containers/Frame";

type Props = {};

export default function HomeNews({}: Props) {
    return (
        <Wall>
            <Frame className="max-w-6xl mx-auto px-8 py-16
                            lg:px-12 lg:py-20">
                <div>
                    <h2 className="text-3xl text-fuchsia-700 font-semibold w-full md:w-1/2">
                        News and events
                    </h2>
                    <h3 className="text-2xl text-neutral-500 font-semibold mt-1">
                        Coming soon ...
                    </h3>
                </div>
                <div className="flex flex-col gap-y-1 px-4 py-4 md:px-8 md:py-6 border border-neutral-700 mt-8">
                    <h4 className="text-lg font-semibold text-neutral-700">
                        Reporting Adverse Events
                    </h4>
                    <p className="text-neutral-500">
                        Adverse events should be reported. Reporting forms and
                        information can be found at{" "}
                        <span className="underline text-fuchsia-700">
                            www.mhra.gov.uk/yellowcard
                        </span>
                        &nbsp;or search for MHRA Yellow Card in the Google Play or
                        Apple App Store. Adverse events should also be reported
                        to SKF Pharma Ltd. on 0800 783 5018
                    </p>
                </div>
                <div className="mt-12">
                    <p className="text-sm w-full md:w-3/5 text-neutral-500">
                        CKD, chronic kidney disease; DD, dialysis-dependent;
                        ESA, erythropoiesis-stimulating agent; HIF-PH,
                        hypoxia-inducible factor prolyl-hydroxylase; NDD,
                        non-dialysis-dependent.
                    </p>
                </div>
            </Frame>
        </Wall>
    );
}
