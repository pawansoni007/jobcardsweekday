import { SingleValueFilter } from "../SingleValueFilter";

export default function MinBasePayFilter() {
  return (
    <SingleValueFilter
      name="minBasePay"
      label="Min Base Pay"
      placeholder="Minimum Base Pay Salary"
      options={[
        { value: "0", label: "0L" },
        { value: "10", label: "10L" },
        { value: "20", label: "20L" },
        { value: "30", label: "30L" },
        { value: "40", label: "40L" },
        { value: "50", label: "50L" },
        { value: "60", label: "60L" },
        { value: "70", label: "70L" },
      ]}
    />
  );
}
