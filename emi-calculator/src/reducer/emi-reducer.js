export default function emiReducer(state, action) {
  let emiCalc = (p, r, n) => {
    return (p * r * Math.pow(1 + r, n)) / Math.pow(1 + r, n - 1);
  };

  console.log("emi reducer is hit", action);
  switch (action.type) {
    case "update-p":
      return {
        ...state,
        p: action.value,
        emi: emiCalc(action.value, state.r, state.n) - state.downpayment,
      };

    case "update-r":
      return {
        ...state,
        r: action.value,
        emi: emiCalc(state.p, action.value, state.n) - state.downpayment,
      };

    case "update-n":
      console.log(
        "before and after",
        action.value,
        state.emi,
        emiCalc(state.p, state.r, action.value) - state.downpayment
      );
      return {
        ...state,
        n: action.value,
        emi: emiCalc(state.p, state.r, action.value) - state.downpayment,
      };

    case "update-downpayment":
      return {
        ...state,
        downpayment: action.value,
        emi: state.emi - state.downpayment,
      };
    case "update-fee":
      return state;

    default:
      console.log("unknow emi reducer dispatch action");
      return state;
  }
}
