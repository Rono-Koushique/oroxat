import React from "react";
import Wall from "../containers/Wall";
import VFrame from "../containers/VFrame";
import AdverseEffect from "./AdverseEffect";

type Props = {};

export default function HomeNews({}: Props) {
    return (
        <Wall>
            <VFrame>
                <div className="content">
                    <h1>News and events</h1>
                    <h3 className="!mb-0">Coming soon ...</h3>
                </div>
                <AdverseEffect className="content"/>
                <div>
                    <p className="text-sm w-full md:w-3/5 text-neutral-500">
                        CKD, chronic kidney disease; DD, dialysis-dependent;
                        ESA, erythropoiesis-stimulating agent; HIF-PH,
                        hypoxia-inducible factor prolyl-hydroxylase; NDD,
                        non-dialysis-dependent.
                    </p>
                </div>
            </VFrame>
        </Wall>
    );
}
