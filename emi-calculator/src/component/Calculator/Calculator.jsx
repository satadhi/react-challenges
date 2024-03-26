import React, { useReducer, useState } from "react";
import Input from "../Input/Input";
import emiReducer from "../../reducer/emi-reducer";

export default function Calculator() {
  let [emiState, emiDispatch] = useReducer(emiReducer, {
    p: 1,
    r: 1,
    n: 1,
    emi: 1,
    fee: 1,
    downpayment: 1,
  });

  return (
    <div className="container ml-2 mt-5">
      <h1 className="text-3xl font-semibold mb-5">EMI Calculator</h1>
      <section className="space-y-5">
        <div>
          <h2>Total Cost of Asset</h2>
          <Input
            value={emiState.p}
            dispatch={(value) =>
              emiDispatch({ type: "update-p", value: value })
            }
          />
        </div>
        <div>
          <h2>Interest Rate (in %)</h2>
          <Input
            value={emiState.r}
            dispatch={(value) =>
              emiDispatch({ type: "update-r", value: value })
            }
          />
        </div>
        <div>
          <h2>Processing Fee (in %)</h2>
          <Input
            value={emiState.fee}
            dispatch={(value) =>
              emiDispatch({ type: "update-fee", value: value })
            }
          />
        </div>
      </section>

      <section className="space-y-5 mt-10">
        <div>
          <h2>Down Payment </h2>
        </div>
        <div>
          <h2 className="underline">
            Total Down Payment {emiState.downpayment}
          </h2>
          <div className="my-5">
            <input
              id="default-range"
              type="range"
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              min={0}
              max={emiState.p}
              onChange={(e) =>
                emiDispatch({
                  type: "update-downpayment",
                  value: e.currentTarget.value,
                })
              }
            />
          </div>
        </div>

        {/* loan information */}
        <div>
          <h2>Loan per Month </h2>
        </div>
        <div>
          <h2 className="underline">
            Total Loan Amount - {Math.ceil(emiState.emi)}{" "}
          </h2>
          <div className="my-5">
            <input
              id="default-range"
              type="range"
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              min={0}
              max={60}
              onChange={(e) =>
                emiDispatch({
                  type: "update-r",
                  value: e.currentTarget.value,
                })
              }
            />
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2>Tenure</h2>

        <div className="flex justify-between">
          <button
            onClick={() => emiDispatch({ type: "update-n", value: 12 })}
            className="ext-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            12
          </button>
          <button
            onClick={() => emiDispatch({ type: "update-n", value: 24 })}
            className="ext-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            24
          </button>
          <button
            onClick={() => emiDispatch({ type: "update-n", value: 36 })}
            className="ext-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            36
          </button>
          <button
            onClick={() => emiDispatch({ type: "update-n", value: 48 })}
            className="ext-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            48
          </button>
          <button
            onClick={() => emiDispatch({ type: "update-n", value: 60 })}
            className="ext-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            60
          </button>
        </div>
      </section>
    </div>
  );
}
