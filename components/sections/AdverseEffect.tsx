import React from "react";

type Props = {
    className?: string
};

export default function AdverseEffect({ className }: Props) {
    return (
        <div className={`flex flex-col gap-y-1 px-8 py-6 border border-neutral-700 ${className!}`}>
            <h4>
                Reporting Adverse Events
            </h4>
            <p>
                Adverse events should be reported. Reporting forms and
                information can be found at{" "}
                <span className="underline text-fuchsia-700">
                    www.mhra.gov.uk/yellowcard
                </span>
                &nbsp; or search for MHRA Yellow Card in the Google Play or
                Apple App Store. Adverse events should also be reported to SKF
                Pharma Ltd. on 0800 783 5018
            </p>
        </div>
    );
}
